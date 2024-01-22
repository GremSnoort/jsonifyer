window.BENCHMARK_DATA = {
  "lastUpdate": 1705962677299,
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
        "date": 1705772681319,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 17230.851924904204,
            "unit": "ns/iter",
            "extra": "iterations: 41067\ncpu: 17230.289526870725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 143377.51386382597,
            "unit": "ns/iter",
            "extra": "iterations: 6095\ncpu: 143368.61361771947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 260864.83523751993,
            "unit": "ns/iter",
            "extra": "iterations: 3326\ncpu: 260844.73842453398 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 381516.15636042546,
            "unit": "ns/iter",
            "extra": "iterations: 2264\ncpu: 381499.3816254418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 504259.28414350783,
            "unit": "ns/iter",
            "extra": "iterations: 1728\ncpu: 504247.68518518517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 503119.14500002784,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 503090.19999999995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 599192.4360000098,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 599191.3999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 695496.7428356225,
            "unit": "ns/iter",
            "extra": "iterations: 1326\ncpu: 695478.431372549 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 792331.6333045593,
            "unit": "ns/iter",
            "extra": "iterations: 1159\ncpu: 792287.7480586718 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 13840.094550333099,
            "unit": "ns/iter",
            "extra": "iterations: 50682\ncpu: 13839.925417307908 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 11507.207041141804,
            "unit": "ns/iter",
            "extra": "iterations: 60814\ncpu: 11506.73693557405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 11506.618024058338,
            "unit": "ns/iter",
            "extra": "iterations: 60852\ncpu: 11506.596332084413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 11496.183565111347,
            "unit": "ns/iter",
            "extra": "iterations: 60834\ncpu: 11495.734293322805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 19893.931288132928,
            "unit": "ns/iter",
            "extra": "iterations: 35074\ncpu: 19893.405371500223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 58601.534499996436,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 58601.43999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 296143.6621854443,
            "unit": "ns/iter",
            "extra": "iterations: 2901\ncpu: 296135.4705274046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 237378.28575380475,
            "unit": "ns/iter",
            "extra": "iterations: 3615\ncpu: 237374.71645919746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 232129.59503004563,
            "unit": "ns/iter",
            "extra": "iterations: 3662\ncpu: 232114.82796286154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 234005.98491910668,
            "unit": "ns/iter",
            "extra": "iterations: 3647\ncpu: 234000.6306553333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 514456.746999997,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 514427.00000000134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4341535.99532706,
            "unit": "ns/iter",
            "extra": "iterations: 214\ncpu: 4341436.915887861 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3524619.8937008246,
            "unit": "ns/iter",
            "extra": "iterations: 254\ncpu: 3524380.7086614277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3444009.8111110306,
            "unit": "ns/iter",
            "extra": "iterations: 270\ncpu: 3443881.4814814804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3447688.0925924266,
            "unit": "ns/iter",
            "extra": "iterations: 270\ncpu: 3447648.5185185256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 2012418.1279826928,
            "unit": "ns/iter",
            "extra": "iterations: 461\ncpu: 2012339.0455531448 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3381637.142335602,
            "unit": "ns/iter",
            "extra": "iterations: 274\ncpu: 3381572.6277372213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 12877290.365853526,
            "unit": "ns/iter",
            "extra": "iterations: 82\ncpu: 12876573.17073172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5631819.719999953,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5631735.000000013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 16371986.076922858,
            "unit": "ns/iter",
            "extra": "iterations: 65\ncpu: 16371138.461538456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 60548.71745433567,
            "unit": "ns/iter",
            "extra": "iterations: 13796\ncpu: 60547.69498405326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 336129.3839530318,
            "unit": "ns/iter",
            "extra": "iterations: 2555\ncpu: 336115.2250489243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 266018.0074534198,
            "unit": "ns/iter",
            "extra": "iterations: 3220\ncpu: 266012.391304348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 264385.32821143017,
            "unit": "ns/iter",
            "extra": "iterations: 3254\ncpu: 264373.9090350336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 259316.57448734122,
            "unit": "ns/iter",
            "extra": "iterations: 3316\ncpu: 259309.43908323342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 517438.70200004947,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 517415.89999999607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4414046.547619169,
            "unit": "ns/iter",
            "extra": "iterations: 210\ncpu: 4413985.714285726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3564256.835248989,
            "unit": "ns/iter",
            "extra": "iterations: 261\ncpu: 3564121.0727969473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3508920.652830228,
            "unit": "ns/iter",
            "extra": "iterations: 265\ncpu: 3508783.0188679313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3522293.889733873,
            "unit": "ns/iter",
            "extra": "iterations: 263\ncpu: 3522245.627376423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 2064077.2227171967,
            "unit": "ns/iter",
            "extra": "iterations: 449\ncpu: 2064001.559020043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3441081.5962962294,
            "unit": "ns/iter",
            "extra": "iterations: 270\ncpu: 3441037.407407408 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 13160973.135802157,
            "unit": "ns/iter",
            "extra": "iterations: 81\ncpu: 13160483.950617287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5737019.9799999,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5736905.999999991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 53614.31700000026,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 53611.58000000046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 305951.00991149596,
            "unit": "ns/iter",
            "extra": "iterations: 2825\ncpu: 305944.6017699098 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 235027.70300546754,
            "unit": "ns/iter",
            "extra": "iterations: 3660\ncpu: 235013.93442622808 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 228906.78270154327,
            "unit": "ns/iter",
            "extra": "iterations: 3746\ncpu: 228902.58942872478 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 229070.63519658247,
            "unit": "ns/iter",
            "extra": "iterations: 3739\ncpu: 229049.1040385113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 586559.9179660961,
            "unit": "ns/iter",
            "extra": "iterations: 1475\ncpu: 586539.1186440683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 4358489.070422549,
            "unit": "ns/iter",
            "extra": "iterations: 213\ncpu: 4358173.708920195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3537876.557251989,
            "unit": "ns/iter",
            "extra": "iterations: 262\ncpu: 3537677.099236653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3450466.756457631,
            "unit": "ns/iter",
            "extra": "iterations: 271\ncpu: 3450246.494464943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3498264.9481481463,
            "unit": "ns/iter",
            "extra": "iterations: 270\ncpu: 3497998.518518525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 2012017.42207791,
            "unit": "ns/iter",
            "extra": "iterations: 462\ncpu: 2011979.0043290048 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3391131.445255476,
            "unit": "ns/iter",
            "extra": "iterations: 274\ncpu: 3391082.8467153283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6859.160051979411,
            "unit": "ns/iter",
            "extra": "iterations: 102348\ncpu: 6859.143314964629 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 38277.42429717855,
            "unit": "ns/iter",
            "extra": "iterations: 18817\ncpu: 38276.69660413467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 30917.758588713714,
            "unit": "ns/iter",
            "extra": "iterations: 22646\ncpu: 30916.974300097212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 30087.27198487042,
            "unit": "ns/iter",
            "extra": "iterations: 23266\ncpu: 30086.40505458623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 24045.146472787652,
            "unit": "ns/iter",
            "extra": "iterations: 29159\ncpu: 24044.809492781133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 175472.34003012965,
            "unit": "ns/iter",
            "extra": "iterations: 3982\ncpu: 175471.9989954794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 297794.8775510146,
            "unit": "ns/iter",
            "extra": "iterations: 2352\ncpu: 297787.5425170074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 75043.68142352045,
            "unit": "ns/iter",
            "extra": "iterations: 9329\ncpu: 75040.8725479687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 74519.70965685871,
            "unit": "ns/iter",
            "extra": "iterations: 9413\ncpu: 74518.79315839768 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 74056.36412927929,
            "unit": "ns/iter",
            "extra": "iterations: 9406\ncpu: 74050.70167977843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 148957.52011922986,
            "unit": "ns/iter",
            "extra": "iterations: 4697\ncpu: 148955.43964232702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 138498.68585559385,
            "unit": "ns/iter",
            "extra": "iterations: 5055\ncpu: 138496.14243323664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 45454.28145695417,
            "unit": "ns/iter",
            "extra": "iterations: 15402\ncpu: 45453.62290611588 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 223337.35468452482,
            "unit": "ns/iter",
            "extra": "iterations: 3138\ncpu: 223326.44996813146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 178925.67622216057,
            "unit": "ns/iter",
            "extra": "iterations: 3907\ncpu: 178922.7028410538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 177661.98508597194,
            "unit": "ns/iter",
            "extra": "iterations: 3956\ncpu: 177657.76036400706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 177522.54418484523,
            "unit": "ns/iter",
            "extra": "iterations: 3938\ncpu: 177517.57237176108 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 341973.39697261684,
            "unit": "ns/iter",
            "extra": "iterations: 2048\ncpu: 341967.4316406246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1247623.771836047,
            "unit": "ns/iter",
            "extra": "iterations: 561\ncpu: 1247590.374331563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 1043122.8658719406,
            "unit": "ns/iter",
            "extra": "iterations: 671\ncpu: 1043090.0149031293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 1041287.8251122459,
            "unit": "ns/iter",
            "extra": "iterations: 669\ncpu: 1041229.7458893984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 1031692.4690265218,
            "unit": "ns/iter",
            "extra": "iterations: 678\ncpu: 1031649.8525073742 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 670157.0756705542,
            "unit": "ns/iter",
            "extra": "iterations: 1044\ncpu: 670145.0191570893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 1023016.0600292343,
            "unit": "ns/iter",
            "extra": "iterations: 683\ncpu: 1022995.3147877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 45526.455372224795,
            "unit": "ns/iter",
            "extra": "iterations: 15394\ncpu: 45525.43198648804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 224838.23578542843,
            "unit": "ns/iter",
            "extra": "iterations: 3113\ncpu: 224833.08705429034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 179638.064748198,
            "unit": "ns/iter",
            "extra": "iterations: 3892\ncpu: 179634.06988694955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 178325.3877862374,
            "unit": "ns/iter",
            "extra": "iterations: 3930\ncpu: 178319.23664122005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 179288.4477726505,
            "unit": "ns/iter",
            "extra": "iterations: 3906\ncpu: 179282.61648745602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 338598.25047616573,
            "unit": "ns/iter",
            "extra": "iterations: 2100\ncpu: 338577.33333333395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1243457.9805309935,
            "unit": "ns/iter",
            "extra": "iterations: 565\ncpu: 1243436.2831858322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 1049369.0902255974,
            "unit": "ns/iter",
            "extra": "iterations: 665\ncpu: 1049292.7819548843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 1020592.6049563641,
            "unit": "ns/iter",
            "extra": "iterations: 686\ncpu: 1020589.5043731674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 1027135.5894428579,
            "unit": "ns/iter",
            "extra": "iterations: 682\ncpu: 1027101.3196480932 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 667063.3702289492,
            "unit": "ns/iter",
            "extra": "iterations: 1048\ncpu: 667035.1145038207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 1018426.0188953438,
            "unit": "ns/iter",
            "extra": "iterations: 688\ncpu: 1018380.3779069908 ns\nthreads: 1"
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
        "date": 1705774096794,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 17453.372131966942,
            "unit": "ns/iter",
            "extra": "iterations: 40010\ncpu: 17453.111722069483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 141350.23350000134,
            "unit": "ns/iter",
            "extra": "iterations: 6000\ncpu: 141336.21666666667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 265978.69039581734,
            "unit": "ns/iter",
            "extra": "iterations: 3259\ncpu: 265969.1009512121 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 388364.8214124924,
            "unit": "ns/iter",
            "extra": "iterations: 2223\ncpu: 388353.8461538462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 512311.47055359854,
            "unit": "ns/iter",
            "extra": "iterations: 1698\ncpu: 512283.7455830384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 512095.04299998796,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 512067.09999999945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 611336.0440000406,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 611301.3 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 707305.5107692356,
            "unit": "ns/iter",
            "extra": "iterations: 1300\ncpu: 707283.2307692306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 804196.408892755,
            "unit": "ns/iter",
            "extra": "iterations: 1147\ncpu: 804177.680906713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 13737.26971247249,
            "unit": "ns/iter",
            "extra": "iterations: 51021\ncpu: 13737.094529703449 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 11553.028008658248,
            "unit": "ns/iter",
            "extra": "iterations: 60517\ncpu: 11552.887618355175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 11409.040525989361,
            "unit": "ns/iter",
            "extra": "iterations: 61294\ncpu: 11408.806734753807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 11515.455261815054,
            "unit": "ns/iter",
            "extra": "iterations: 60787\ncpu: 11515.310839488704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 19591.59665016811,
            "unit": "ns/iter",
            "extra": "iterations: 35763\ncpu: 19591.20319883675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 59918.48260000552,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 59917.68999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 294800.7555861102,
            "unit": "ns/iter",
            "extra": "iterations: 2909\ncpu: 294794.9467170848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 233791.74602304326,
            "unit": "ns/iter",
            "extra": "iterations: 3646\ncpu: 233785.51837630244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 230843.54562635982,
            "unit": "ns/iter",
            "extra": "iterations: 3704\ncpu: 230837.98596112285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 231665.3272579054,
            "unit": "ns/iter",
            "extra": "iterations: 3676\ncpu: 231659.33079434125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 515554.9929999097,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 515552.4999999983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4306608.861111483,
            "unit": "ns/iter",
            "extra": "iterations: 216\ncpu: 4306405.092592601 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3515025.8415093427,
            "unit": "ns/iter",
            "extra": "iterations: 265\ncpu: 3514893.5849056593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3458527.8745388645,
            "unit": "ns/iter",
            "extra": "iterations: 271\ncpu: 3458357.195571954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3423595.90036903,
            "unit": "ns/iter",
            "extra": "iterations: 271\ncpu: 3423407.7490774975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1994613.0732758984,
            "unit": "ns/iter",
            "extra": "iterations: 464\ncpu: 1994536.2068965526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3357664.0905795577,
            "unit": "ns/iter",
            "extra": "iterations: 276\ncpu: 3357496.3768115956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 12768074.31325362,
            "unit": "ns/iter",
            "extra": "iterations: 83\ncpu: 12767455.421686742 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5763115.879999531,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5762934.999999984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 16174499.415384302,
            "unit": "ns/iter",
            "extra": "iterations: 65\ncpu: 16173560.00000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 61034.260263140146,
            "unit": "ns/iter",
            "extra": "iterations: 13909\ncpu: 61033.028974045774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 338321.1614930879,
            "unit": "ns/iter",
            "extra": "iterations: 2545\ncpu: 338302.55402750405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 264501.7904468364,
            "unit": "ns/iter",
            "extra": "iterations: 3245\ncpu: 264488.1972265025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 266994.96792277653,
            "unit": "ns/iter",
            "extra": "iterations: 3211\ncpu: 266983.96138274565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 254881.96009527682,
            "unit": "ns/iter",
            "extra": "iterations: 3358\ncpu: 254872.93031566494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 506408.58099995967,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 506389.90000000206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4380149.330188488,
            "unit": "ns/iter",
            "extra": "iterations: 212\ncpu: 4379928.30188678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3536696.8973383117,
            "unit": "ns/iter",
            "extra": "iterations: 263\ncpu: 3536550.950570333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3518663.9962120987,
            "unit": "ns/iter",
            "extra": "iterations: 264\ncpu: 3518500.757575753 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3517399.2045456823,
            "unit": "ns/iter",
            "extra": "iterations: 264\ncpu: 3517235.227272737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 2040793.8021977455,
            "unit": "ns/iter",
            "extra": "iterations: 455\ncpu: 2040719.7802197675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3419364.327205903,
            "unit": "ns/iter",
            "extra": "iterations: 272\ncpu: 3419243.75000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 12969492.195122434,
            "unit": "ns/iter",
            "extra": "iterations: 82\ncpu: 12968676.829268293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5820355.899999185,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5819901.000000059 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 54110.79350000136,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 54110.47999999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 303172.4425185383,
            "unit": "ns/iter",
            "extra": "iterations: 2827\ncpu: 303164.7329324365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 235858.74455169812,
            "unit": "ns/iter",
            "extra": "iterations: 3625\ncpu: 235855.33793103337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 230205.0798387241,
            "unit": "ns/iter",
            "extra": "iterations: 3720\ncpu: 230194.70430107642 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 225277.4679673147,
            "unit": "ns/iter",
            "extra": "iterations: 3793\ncpu: 225276.27208014886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 577522.1488372012,
            "unit": "ns/iter",
            "extra": "iterations: 1505\ncpu: 577515.2823920263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 4325912.176744189,
            "unit": "ns/iter",
            "extra": "iterations: 215\ncpu: 4325817.209302337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3516657.299242483,
            "unit": "ns/iter",
            "extra": "iterations: 264\ncpu: 3516564.015151513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3457998.600000186,
            "unit": "ns/iter",
            "extra": "iterations: 270\ncpu: 3457959.2592592426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3450369.9185186764,
            "unit": "ns/iter",
            "extra": "iterations: 270\ncpu: 3450303.333333351 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1987311.310638185,
            "unit": "ns/iter",
            "extra": "iterations: 470\ncpu: 1987288.0851063894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3378172.826086833,
            "unit": "ns/iter",
            "extra": "iterations: 276\ncpu: 3378127.89855072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6843.207516451653,
            "unit": "ns/iter",
            "extra": "iterations: 102575\ncpu: 6843.113819156754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 38622.402837488844,
            "unit": "ns/iter",
            "extra": "iterations: 18608\ncpu: 38621.56599312146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 31275.183230888968,
            "unit": "ns/iter",
            "extra": "iterations: 23102\ncpu: 31274.781404207417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 31391.337715360565,
            "unit": "ns/iter",
            "extra": "iterations: 22288\ncpu: 31390.905419956656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 23862.223429991584,
            "unit": "ns/iter",
            "extra": "iterations: 29347\ncpu: 23861.900705353193 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 174198.496017924,
            "unit": "ns/iter",
            "extra": "iterations: 4018\ncpu: 174193.3797909403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 292578.5536013529,
            "unit": "ns/iter",
            "extra": "iterations: 2388\ncpu: 292577.21943048644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 73909.61439426134,
            "unit": "ns/iter",
            "extra": "iterations: 9476\ncpu: 73908.56901646305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 74023.54547377402,
            "unit": "ns/iter",
            "extra": "iterations: 9456\ncpu: 74022.58883248782 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 73663.39056743482,
            "unit": "ns/iter",
            "extra": "iterations: 9499\ncpu: 73661.44857353301 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 141790.93434960564,
            "unit": "ns/iter",
            "extra": "iterations: 4920\ncpu: 141779.0040650412 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 137335.93169772674,
            "unit": "ns/iter",
            "extra": "iterations: 5095\ncpu: 137330.0098135442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 45469.31019747331,
            "unit": "ns/iter",
            "extra": "iterations: 15445\ncpu: 45467.10909679537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 222803.48728543558,
            "unit": "ns/iter",
            "extra": "iterations: 3146\ncpu: 222790.9726637028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 180282.82107967234,
            "unit": "ns/iter",
            "extra": "iterations: 3890\ncpu: 180271.9023136245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 177131.7515842755,
            "unit": "ns/iter",
            "extra": "iterations: 3945\ncpu: 177125.01901140693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 181355.9886363703,
            "unit": "ns/iter",
            "extra": "iterations: 3872\ncpu: 181343.95661157233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 333506.139856781,
            "unit": "ns/iter",
            "extra": "iterations: 2095\ncpu: 333487.44630071695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1247024.8464286523,
            "unit": "ns/iter",
            "extra": "iterations: 560\ncpu: 1246945.1785714268 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 1047552.6796407091,
            "unit": "ns/iter",
            "extra": "iterations: 668\ncpu: 1047481.437125748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 1038351.9419642694,
            "unit": "ns/iter",
            "extra": "iterations: 672\ncpu: 1038338.2440476059 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 1034913.3702065969,
            "unit": "ns/iter",
            "extra": "iterations: 678\ncpu: 1034849.2625368899 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 662001.1584441125,
            "unit": "ns/iter",
            "extra": "iterations: 1054\ncpu: 661963.2827324475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 1021727.7953216641,
            "unit": "ns/iter",
            "extra": "iterations: 684\ncpu: 1021640.9356725223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 45625.10105208939,
            "unit": "ns/iter",
            "extra": "iterations: 15398\ncpu: 45624.53565398096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 228518.6901960717,
            "unit": "ns/iter",
            "extra": "iterations: 3060\ncpu: 228515.5882352954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 182310.2127050176,
            "unit": "ns/iter",
            "extra": "iterations: 3841\ncpu: 182307.52408227095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 180621.62725398532,
            "unit": "ns/iter",
            "extra": "iterations: 3882\ncpu: 180619.73209685687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 182133.8514568115,
            "unit": "ns/iter",
            "extra": "iterations: 3844\ncpu: 182127.3933402707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 333801.88608193805,
            "unit": "ns/iter",
            "extra": "iterations: 2098\ncpu: 333794.66158245876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1235168.6507937931,
            "unit": "ns/iter",
            "extra": "iterations: 567\ncpu: 1235151.499118161 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 1050778.9969925995,
            "unit": "ns/iter",
            "extra": "iterations: 665\ncpu: 1050763.9097744331 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 1029979.2565981994,
            "unit": "ns/iter",
            "extra": "iterations: 682\ncpu: 1029946.041055716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 1035620.6144756491,
            "unit": "ns/iter",
            "extra": "iterations: 677\ncpu: 1035559.527326445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 669591.032535892,
            "unit": "ns/iter",
            "extra": "iterations: 1045\ncpu: 669558.7559808595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 1024732.0585650157,
            "unit": "ns/iter",
            "extra": "iterations: 683\ncpu: 1024677.8916544648 ns\nthreads: 1"
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
        "date": 1705777719502,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 17743.75454545198,
            "unit": "ns/iter",
            "extra": "iterations: 39270\ncpu: 17742.59994907054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 143475.175050973,
            "unit": "ns/iter",
            "extra": "iterations: 5884\ncpu: 143469.15363698167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 271615.20602069254,
            "unit": "ns/iter",
            "extra": "iterations: 3189\ncpu: 271604.4841643148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 395604.5245075639,
            "unit": "ns/iter",
            "extra": "iterations: 2183\ncpu: 395592.44159413665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 522375.9275014787,
            "unit": "ns/iter",
            "extra": "iterations: 1669\ncpu: 522338.28639904107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 525699.5030000553,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 525702.2999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 625190.6459999646,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 625181.4000000007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 723801.9897959292,
            "unit": "ns/iter",
            "extra": "iterations: 1274\ncpu: 723772.4489795915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 821131.1672597782,
            "unit": "ns/iter",
            "extra": "iterations: 1124\ncpu: 821122.8647686826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 14187.32346227813,
            "unit": "ns/iter",
            "extra": "iterations: 49505\ncpu: 14186.15493384506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 11865.047330446527,
            "unit": "ns/iter",
            "extra": "iterations: 58905\ncpu: 11864.911297852479 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 11807.636461668404,
            "unit": "ns/iter",
            "extra": "iterations: 59350\ncpu: 11807.095197978091 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 11836.84529535309,
            "unit": "ns/iter",
            "extra": "iterations: 59048\ncpu: 11836.81242379081 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 20301.583719448987,
            "unit": "ns/iter",
            "extra": "iterations: 34532\ncpu: 20301.529016564346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 55334.157300001156,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 55332.500000000095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 293849.69154057594,
            "unit": "ns/iter",
            "extra": "iterations: 2908\ncpu: 293847.1801925721 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 234325.5541506374,
            "unit": "ns/iter",
            "extra": "iterations: 3638\ncpu: 234315.5854865313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 235648.34741400287,
            "unit": "ns/iter",
            "extra": "iterations: 3693\ncpu: 235641.89006228003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 230794.63942826484,
            "unit": "ns/iter",
            "extra": "iterations: 3708\ncpu: 230781.0949298814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 507213.1500000978,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 507203.0000000005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4497286.830917841,
            "unit": "ns/iter",
            "extra": "iterations: 207\ncpu: 4497113.0434782645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3617410.015625211,
            "unit": "ns/iter",
            "extra": "iterations: 256\ncpu: 3617340.6250000065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3589103.554263549,
            "unit": "ns/iter",
            "extra": "iterations: 258\ncpu: 3589040.69767442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3587238.1860466413,
            "unit": "ns/iter",
            "extra": "iterations: 258\ncpu: 3587101.5503876028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 2074913.0337839467,
            "unit": "ns/iter",
            "extra": "iterations: 444\ncpu: 2074905.1801801813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3501953.5643936987,
            "unit": "ns/iter",
            "extra": "iterations: 264\ncpu: 3501805.6818181803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 13218058.687499478,
            "unit": "ns/iter",
            "extra": "iterations: 80\ncpu: 13217721.249999981 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 6030796.669999745,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6030280.000000019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 16789216.63492041,
            "unit": "ns/iter",
            "extra": "iterations: 63\ncpu: 16788977.777777754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 60020.03900000546,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 60016.639999999905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 343677.43076301727,
            "unit": "ns/iter",
            "extra": "iterations: 2477\ncpu: 343669.4792087196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 268986.4672080037,
            "unit": "ns/iter",
            "extra": "iterations: 3202\ncpu: 268977.8263585264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 265490.7175997386,
            "unit": "ns/iter",
            "extra": "iterations: 3233\ncpu: 265489.6381070214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 260379.7710294455,
            "unit": "ns/iter",
            "extra": "iterations: 3293\ncpu: 260358.45733373746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 514233.6930000511,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 514213.4000000027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4554283.039408739,
            "unit": "ns/iter",
            "extra": "iterations: 203\ncpu: 4554068.472906426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3647446.9098038753,
            "unit": "ns/iter",
            "extra": "iterations: 255\ncpu: 3647256.0784313916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3655881.3976379796,
            "unit": "ns/iter",
            "extra": "iterations: 254\ncpu: 3655669.291338575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3651181.7075098753,
            "unit": "ns/iter",
            "extra": "iterations: 253\ncpu: 3651166.798418997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 2146723.0842823475,
            "unit": "ns/iter",
            "extra": "iterations: 439\ncpu: 2146666.970387247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3556628.8505750024,
            "unit": "ns/iter",
            "extra": "iterations: 261\ncpu: 3556513.02681994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 13425020.860760141,
            "unit": "ns/iter",
            "extra": "iterations: 79\ncpu: 13424615.189873418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5899958.349999679,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5899588.999999992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 52030.22850000707,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 52030.51000000016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 305212.6447368343,
            "unit": "ns/iter",
            "extra": "iterations: 2812\ncpu: 305199.35988620296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 232975.29825519345,
            "unit": "ns/iter",
            "extra": "iterations: 3668\ncpu: 232969.82006543071 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 226606.38243851246,
            "unit": "ns/iter",
            "extra": "iterations: 3781\ncpu: 226607.6434805602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 225450.91600423603,
            "unit": "ns/iter",
            "extra": "iterations: 3774\ncpu: 225443.1902490728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 569516.8107927623,
            "unit": "ns/iter",
            "extra": "iterations: 1501\ncpu: 569493.004663555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 4505393.922705339,
            "unit": "ns/iter",
            "extra": "iterations: 207\ncpu: 4505200.00000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3613897.769531249,
            "unit": "ns/iter",
            "extra": "iterations: 256\ncpu: 3613758.9843750205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3617008.439688878,
            "unit": "ns/iter",
            "extra": "iterations: 257\ncpu: 3616841.63424125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3607089.868217182,
            "unit": "ns/iter",
            "extra": "iterations: 258\ncpu: 3606955.8139534853 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 2055479.1361606966,
            "unit": "ns/iter",
            "extra": "iterations: 448\ncpu: 2055397.9910714296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3515185.633962162,
            "unit": "ns/iter",
            "extra": "iterations: 265\ncpu: 3515043.396226409 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6789.222773281774,
            "unit": "ns/iter",
            "extra": "iterations: 103437\ncpu: 6788.9207923663525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 37609.117893604875,
            "unit": "ns/iter",
            "extra": "iterations: 18610\ncpu: 37607.04459967752 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 30252.66169605819,
            "unit": "ns/iter",
            "extra": "iterations: 23136\ncpu: 30251.685684647262 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 30182.149011484413,
            "unit": "ns/iter",
            "extra": "iterations: 23166\ncpu: 30180.87283087298 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 23898.285070348185,
            "unit": "ns/iter",
            "extra": "iterations: 29284\ncpu: 23897.29203660705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 170002.9604272876,
            "unit": "ns/iter",
            "extra": "iterations: 4119\ncpu: 169993.51784413823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 302419.68890816777,
            "unit": "ns/iter",
            "extra": "iterations: 2308\ncpu: 302409.8353552841 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 76081.22560312305,
            "unit": "ns/iter",
            "extra": "iterations: 9202\ncpu: 76077.01586611547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 76206.62525767522,
            "unit": "ns/iter",
            "extra": "iterations: 9217\ncpu: 76203.07041336577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 76761.80002180085,
            "unit": "ns/iter",
            "extra": "iterations: 9171\ncpu: 76761.20379457081 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 146872.75267911854,
            "unit": "ns/iter",
            "extra": "iterations: 4759\ncpu: 146867.5351964718 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 135227.42404941938,
            "unit": "ns/iter",
            "extra": "iterations: 5181\ncpu: 135221.71395483415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 46244.05925238424,
            "unit": "ns/iter",
            "extra": "iterations: 15088\ncpu: 46243.7499999995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 227795.0539311397,
            "unit": "ns/iter",
            "extra": "iterations: 3078\ncpu: 227793.50227420207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 182128.19828257008,
            "unit": "ns/iter",
            "extra": "iterations: 3843\ncpu: 182122.63856362307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 179214.6384339849,
            "unit": "ns/iter",
            "extra": "iterations: 3908\ncpu: 179207.0112589546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 180928.95144629074,
            "unit": "ns/iter",
            "extra": "iterations: 3872\ncpu: 180917.58780991545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 337798.62469854,
            "unit": "ns/iter",
            "extra": "iterations: 2073\ncpu: 337783.5021707697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1292022.4602587626,
            "unit": "ns/iter",
            "extra": "iterations: 541\ncpu: 1291960.9981515708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 1079089.9814241617,
            "unit": "ns/iter",
            "extra": "iterations: 646\ncpu: 1079038.699690396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 1070913.723502444,
            "unit": "ns/iter",
            "extra": "iterations: 651\ncpu: 1070899.2319508444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 1073257.0429447144,
            "unit": "ns/iter",
            "extra": "iterations: 652\ncpu: 1073250.4601226943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 690005.076923085,
            "unit": "ns/iter",
            "extra": "iterations: 1014\ncpu: 689968.2445759387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 1057718.537764393,
            "unit": "ns/iter",
            "extra": "iterations: 662\ncpu: 1057678.549848961 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 46443.739274366366,
            "unit": "ns/iter",
            "extra": "iterations: 15104\ncpu: 46442.21398305032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 230249.19348468576,
            "unit": "ns/iter",
            "extra": "iterations: 3039\ncpu: 230236.03158934118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 183265.90109890397,
            "unit": "ns/iter",
            "extra": "iterations: 3822\ncpu: 183259.0266875955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 182557.15115974678,
            "unit": "ns/iter",
            "extra": "iterations: 3837\ncpu: 182547.04195986548 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 183840.51349226842,
            "unit": "ns/iter",
            "extra": "iterations: 3817\ncpu: 183831.72648676936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 336155.82118889375,
            "unit": "ns/iter",
            "extra": "iterations: 2086\ncpu: 336139.69319271087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1285148.0897436207,
            "unit": "ns/iter",
            "extra": "iterations: 546\ncpu: 1285089.9267399276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 1080347.8775192902,
            "unit": "ns/iter",
            "extra": "iterations: 645\ncpu: 1080290.852713168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 1067029.492378008,
            "unit": "ns/iter",
            "extra": "iterations: 656\ncpu: 1067023.7804877954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 1073831.546012219,
            "unit": "ns/iter",
            "extra": "iterations: 652\ncpu: 1073813.4969325184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 693469.060336365,
            "unit": "ns/iter",
            "extra": "iterations: 1011\ncpu: 693437.3887240377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 1056852.0256797015,
            "unit": "ns/iter",
            "extra": "iterations: 662\ncpu: 1056802.265861034 ns\nthreads: 1"
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
        "date": 1705954261510,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 17530.232357442404,
            "unit": "ns/iter",
            "extra": "iterations: 39861\ncpu: 17528.920498733096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 142773.35736143772,
            "unit": "ns/iter",
            "extra": "iterations: 5882\ncpu: 142765.89595375725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 267858.73770491267,
            "unit": "ns/iter",
            "extra": "iterations: 3233\ncpu: 267857.06773894216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 392850.8993166307,
            "unit": "ns/iter",
            "extra": "iterations: 2195\ncpu: 392838.1321184511 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 519647.90274463576,
            "unit": "ns/iter",
            "extra": "iterations: 1676\ncpu: 519626.84964200464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 519348.4370000192,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 519316.5000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 619642.2010000333,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 619624.1000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 718756.5622084293,
            "unit": "ns/iter",
            "extra": "iterations: 1286\ncpu: 718727.8382581649 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 817356.3427812363,
            "unit": "ns/iter",
            "extra": "iterations: 1129\ncpu: 817314.26040744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 14625.524479600817,
            "unit": "ns/iter",
            "extra": "iterations: 48040\ncpu: 14625.283097418818 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 11726.027962425796,
            "unit": "ns/iter",
            "extra": "iterations: 59723\ncpu: 11725.757245952149 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 11660.94213830191,
            "unit": "ns/iter",
            "extra": "iterations: 60057\ncpu: 11660.867176182628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 11823.138329213303,
            "unit": "ns/iter",
            "extra": "iterations: 59062\ncpu: 11822.219024076388 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 19839.505640967425,
            "unit": "ns/iter",
            "extra": "iterations: 35189\ncpu: 19838.529085793853 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 62078.739399999,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 62076.59000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 312567.8555877992,
            "unit": "ns/iter",
            "extra": "iterations: 2756\ncpu: 312562.0827285926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 244328.05007153872,
            "unit": "ns/iter",
            "extra": "iterations: 3495\ncpu: 244316.1659513591 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 236337.2194651251,
            "unit": "ns/iter",
            "extra": "iterations: 3627\ncpu: 236327.48828232742 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 239313.77740397592,
            "unit": "ns/iter",
            "extra": "iterations: 3567\ncpu: 239298.51415755536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 510699.96100000024,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 510690.3000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4430116.99523806,
            "unit": "ns/iter",
            "extra": "iterations: 210\ncpu: 4430086.190476195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3544864.919230734,
            "unit": "ns/iter",
            "extra": "iterations: 260\ncpu: 3544788.461538454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3510803.4377357536,
            "unit": "ns/iter",
            "extra": "iterations: 265\ncpu: 3510780.377358498 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3502969.837121193,
            "unit": "ns/iter",
            "extra": "iterations: 264\ncpu: 3502943.5606060605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 2011238.6130434694,
            "unit": "ns/iter",
            "extra": "iterations: 460\ncpu: 2011198.4782608685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3440772.2490706895,
            "unit": "ns/iter",
            "extra": "iterations: 269\ncpu: 3440709.2936802967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 12830779.719511904,
            "unit": "ns/iter",
            "extra": "iterations: 82\ncpu: 12830580.487804871 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5881503.249999583,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5881498 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 16475051.843750421,
            "unit": "ns/iter",
            "extra": "iterations: 64\ncpu: 16474709.375000007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 61551.645238441044,
            "unit": "ns/iter",
            "extra": "iterations: 13798\ncpu: 61550.587041600134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 345458.7412755547,
            "unit": "ns/iter",
            "extra": "iterations: 2493\ncpu: 345455.3549939824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 274772.3308246994,
            "unit": "ns/iter",
            "extra": "iterations: 3189\ncpu: 274762.3392913144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 264256.4981527235,
            "unit": "ns/iter",
            "extra": "iterations: 3248\ncpu: 264254.4027093578 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 264745.5183343733,
            "unit": "ns/iter",
            "extra": "iterations: 3218\ncpu: 264728.52703542606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 501660.8500000075,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 501643.2999999978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4504028.1504854085,
            "unit": "ns/iter",
            "extra": "iterations: 206\ncpu: 4503883.009708756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3653302.35686266,
            "unit": "ns/iter",
            "extra": "iterations: 255\ncpu: 3653279.6078431346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3580975.9729729393,
            "unit": "ns/iter",
            "extra": "iterations: 259\ncpu: 3580840.1544401445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3595569.00386107,
            "unit": "ns/iter",
            "extra": "iterations: 259\ncpu: 3595366.4092663927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 2037198.3815789812,
            "unit": "ns/iter",
            "extra": "iterations: 456\ncpu: 2037134.8684210514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3488615.4736842173,
            "unit": "ns/iter",
            "extra": "iterations: 266\ncpu: 3488502.63157894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 13071770.1097564,
            "unit": "ns/iter",
            "extra": "iterations: 82\ncpu: 13071692.682926834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5676020.149999772,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5675845.000000024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 54743.3835999982,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 54740.910000000295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 325181.9052830231,
            "unit": "ns/iter",
            "extra": "iterations: 2650\ncpu: 325180.1132075492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 243493.98667423168,
            "unit": "ns/iter",
            "extra": "iterations: 3527\ncpu: 243490.07655231084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 230049.57962466407,
            "unit": "ns/iter",
            "extra": "iterations: 3730\ncpu: 230042.43967828315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 232182.64117167392,
            "unit": "ns/iter",
            "extra": "iterations: 3687\ncpu: 232177.1358828301 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 562258.9870298532,
            "unit": "ns/iter",
            "extra": "iterations: 1542\ncpu: 562227.4967574591 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 4437778.497607665,
            "unit": "ns/iter",
            "extra": "iterations: 209\ncpu: 4437529.665071759 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3582442.980694836,
            "unit": "ns/iter",
            "extra": "iterations: 259\ncpu: 3582218.918918918 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3505124.11654122,
            "unit": "ns/iter",
            "extra": "iterations: 266\ncpu: 3505087.593984945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3526247.571969711,
            "unit": "ns/iter",
            "extra": "iterations: 264\ncpu: 3526086.363636376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1998141.3752710437,
            "unit": "ns/iter",
            "extra": "iterations: 461\ncpu: 1998032.7548806947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3444751.9777778005,
            "unit": "ns/iter",
            "extra": "iterations: 270\ncpu: 3444621.8518518447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6920.3476331800985,
            "unit": "ns/iter",
            "extra": "iterations: 101423\ncpu: 6919.9560257535295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 39103.60499972188,
            "unit": "ns/iter",
            "extra": "iterations: 17881\ncpu: 39101.6162407025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 31430.482310499643,
            "unit": "ns/iter",
            "extra": "iterations: 23008\ncpu: 31428.151077885803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 31320.83923854316,
            "unit": "ns/iter",
            "extra": "iterations: 23849\ncpu: 31319.30479265366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 24123.87201959975,
            "unit": "ns/iter",
            "extra": "iterations: 28981\ncpu: 24122.435388703074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 171711.7629501667,
            "unit": "ns/iter",
            "extra": "iterations: 4054\ncpu: 171705.15540207233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 304019.0834782478,
            "unit": "ns/iter",
            "extra": "iterations: 2300\ncpu: 303991.52173913224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 75804.29813530008,
            "unit": "ns/iter",
            "extra": "iterations: 9224\ncpu: 75799.46877710274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 74862.20931723484,
            "unit": "ns/iter",
            "extra": "iterations: 9359\ncpu: 74858.04038892989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 75137.02525252533,
            "unit": "ns/iter",
            "extra": "iterations: 9306\ncpu: 75135.61143348408 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 149483.69920957298,
            "unit": "ns/iter",
            "extra": "iterations: 4681\ncpu: 149479.68382824288 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 140383.47281845918,
            "unit": "ns/iter",
            "extra": "iterations: 4985\ncpu: 140371.4543630907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 46837.729194631545,
            "unit": "ns/iter",
            "extra": "iterations: 14900\ncpu: 46837.77181208068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 231082.6591883882,
            "unit": "ns/iter",
            "extra": "iterations: 3031\ncpu: 231080.1055757188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 183890.35451680789,
            "unit": "ns/iter",
            "extra": "iterations: 3808\ncpu: 183887.05357142715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 181359.66882949084,
            "unit": "ns/iter",
            "extra": "iterations: 3853\ncpu: 181353.17934077122 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 184468.03731930652,
            "unit": "ns/iter",
            "extra": "iterations: 3805\ncpu: 184468.22601840043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 335718.31606714247,
            "unit": "ns/iter",
            "extra": "iterations: 2085\ncpu: 335711.99040767655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1279774.5675181663,
            "unit": "ns/iter",
            "extra": "iterations: 548\ncpu: 1279775.364963494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 1096501.0496124178,
            "unit": "ns/iter",
            "extra": "iterations: 645\ncpu: 1096424.9612403028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 1061925.9439394139,
            "unit": "ns/iter",
            "extra": "iterations: 660\ncpu: 1061918.1818181893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 1057487.6561086427,
            "unit": "ns/iter",
            "extra": "iterations: 663\ncpu: 1057477.3755656201 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 675618.6298449734,
            "unit": "ns/iter",
            "extra": "iterations: 1032\ncpu: 675601.0658914708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 1042254.8586309485,
            "unit": "ns/iter",
            "extra": "iterations: 672\ncpu: 1042247.0238095218 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 46556.372513801885,
            "unit": "ns/iter",
            "extra": "iterations: 15033\ncpu: 46555.19191112935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 235176.58732818175,
            "unit": "ns/iter",
            "extra": "iterations: 2983\ncpu: 235177.103586991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 187723.17689432303,
            "unit": "ns/iter",
            "extra": "iterations: 3748\ncpu: 187716.06189967814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 185649.60586060284,
            "unit": "ns/iter",
            "extra": "iterations: 3788\ncpu: 185648.495248149 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 186510.9951586896,
            "unit": "ns/iter",
            "extra": "iterations: 3718\ncpu: 186500.64550833596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 334244.60439559683,
            "unit": "ns/iter",
            "extra": "iterations: 2093\ncpu: 334242.1882465374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1272834.2199999464,
            "unit": "ns/iter",
            "extra": "iterations: 550\ncpu: 1272792.545454551 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 1069806.4870229322,
            "unit": "ns/iter",
            "extra": "iterations: 655\ncpu: 1069797.8625954266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 1051421.5671190803,
            "unit": "ns/iter",
            "extra": "iterations: 663\ncpu: 1051375.716440417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 1050210.4422787863,
            "unit": "ns/iter",
            "extra": "iterations: 667\ncpu: 1050174.212893544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 687758.1730769352,
            "unit": "ns/iter",
            "extra": "iterations: 884\ncpu: 687742.3076923053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 1038259.1279761551,
            "unit": "ns/iter",
            "extra": "iterations: 672\ncpu: 1038226.1904762107 ns\nthreads: 1"
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
        "date": 1705956104443,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 17545.07172089844,
            "unit": "ns/iter",
            "extra": "iterations: 39584\ncpu: 17544.631669361363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 144661.94403608688,
            "unit": "ns/iter",
            "extra": "iterations: 5986\ncpu: 144651.90444370196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 265369.19871204754,
            "unit": "ns/iter",
            "extra": "iterations: 3261\ncpu: 265360.1962588163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 386253.88983432617,
            "unit": "ns/iter",
            "extra": "iterations: 2233\ncpu: 386245.99193909543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 508231.1306385617,
            "unit": "ns/iter",
            "extra": "iterations: 1707\ncpu: 508229.93555946095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 510610.0210000477,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 510588.90000000014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 607093.3569999397,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 607090.0000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 714096.4820198278,
            "unit": "ns/iter",
            "extra": "iterations: 1307\ncpu: 714054.3993879115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 802894.3180243028,
            "unit": "ns/iter",
            "extra": "iterations: 1154\ncpu: 802854.7660311968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 14078.07700982761,
            "unit": "ns/iter",
            "extra": "iterations: 49656\ncpu: 14077.98856130173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 11644.610274669303,
            "unit": "ns/iter",
            "extra": "iterations: 60109\ncpu: 11644.17308556122 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 11610.087879289693,
            "unit": "ns/iter",
            "extra": "iterations: 60310\ncpu: 11610.069640192341 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 11722.216932987767,
            "unit": "ns/iter",
            "extra": "iterations: 59765\ncpu: 11721.889065506572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 20061.194050627044,
            "unit": "ns/iter",
            "extra": "iterations: 35197\ncpu: 20060.704037275937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 60258.468200004245,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 60257.01000000012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 301080.80380415305,
            "unit": "ns/iter",
            "extra": "iterations: 2839\ncpu: 301079.5350475519 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 237583.19988861916,
            "unit": "ns/iter",
            "extra": "iterations: 3592\ncpu: 237578.5077951002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 238701.37556055412,
            "unit": "ns/iter",
            "extra": "iterations: 3568\ncpu: 238696.72085201822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 235930.7922330211,
            "unit": "ns/iter",
            "extra": "iterations: 3605\ncpu: 235922.57975034678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 550057.2470000406,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 550043.6999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4307320.89861771,
            "unit": "ns/iter",
            "extra": "iterations: 217\ncpu: 4307180.6451612795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3472212.8432833157,
            "unit": "ns/iter",
            "extra": "iterations: 268\ncpu: 3472163.8059701473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3480544.2359550837,
            "unit": "ns/iter",
            "extra": "iterations: 267\ncpu: 3480417.6029962497 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3491996.290566296,
            "unit": "ns/iter",
            "extra": "iterations: 265\ncpu: 3491889.433962261 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1996996.2931034209,
            "unit": "ns/iter",
            "extra": "iterations: 464\ncpu: 1996912.7155172431 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3372845.8509089747,
            "unit": "ns/iter",
            "extra": "iterations: 275\ncpu: 3372787.2727272706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 12751066.987950899,
            "unit": "ns/iter",
            "extra": "iterations: 83\ncpu: 12750731.325301204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5770467.5399998,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5770352.000000009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 16378792.446154805,
            "unit": "ns/iter",
            "extra": "iterations: 65\ncpu: 16377552.307692321 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 61648.945426980434,
            "unit": "ns/iter",
            "extra": "iterations: 13853\ncpu: 61648.97134194762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 354189.2957166402,
            "unit": "ns/iter",
            "extra": "iterations: 2428\ncpu: 354181.0955518945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 267781.49874764035,
            "unit": "ns/iter",
            "extra": "iterations: 3194\ncpu: 267769.22354414477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 268802.331977463,
            "unit": "ns/iter",
            "extra": "iterations: 3196\ncpu: 268801.5644555693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 259967.08280060597,
            "unit": "ns/iter",
            "extra": "iterations: 3285\ncpu: 259956.19482496125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 555835.2259999993,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 555829.0000000028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4382068.707547257,
            "unit": "ns/iter",
            "extra": "iterations: 212\ncpu: 4381936.792452828 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3505369.7962263506,
            "unit": "ns/iter",
            "extra": "iterations: 265\ncpu: 3505306.792452835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3541843.0114503745,
            "unit": "ns/iter",
            "extra": "iterations: 262\ncpu: 3541726.3358778697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3541298.130268243,
            "unit": "ns/iter",
            "extra": "iterations: 261\ncpu: 3541139.4636015426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 2027031.3246188252,
            "unit": "ns/iter",
            "extra": "iterations: 459\ncpu: 2026907.4074073983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3425553.859778526,
            "unit": "ns/iter",
            "extra": "iterations: 271\ncpu: 3425366.7896678946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 12931295.975610139,
            "unit": "ns/iter",
            "extra": "iterations: 82\ncpu: 12930512.195121953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5793133.380000199,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5792985.000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 56219.89669999721,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 56213.240000000296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 306360.5499286419,
            "unit": "ns/iter",
            "extra": "iterations: 2804\ncpu: 306338.8017118389 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 235610.27360308406,
            "unit": "ns/iter",
            "extra": "iterations: 3633\ncpu: 235592.2102945233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 233948.20484882308,
            "unit": "ns/iter",
            "extra": "iterations: 3671\ncpu: 233932.9882865698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 230083.07719204662,
            "unit": "ns/iter",
            "extra": "iterations: 3718\ncpu: 230065.59978483047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 501526.0929999385,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 501494.6000000009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 4317701.199074396,
            "unit": "ns/iter",
            "extra": "iterations: 216\ncpu: 4317424.0740740495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3472130.257462785,
            "unit": "ns/iter",
            "extra": "iterations: 268\ncpu: 3472048.880597022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3487474.711610627,
            "unit": "ns/iter",
            "extra": "iterations: 267\ncpu: 3487323.220973763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3473604.1455225046,
            "unit": "ns/iter",
            "extra": "iterations: 268\ncpu: 3473538.059701483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1984755.9786780744,
            "unit": "ns/iter",
            "extra": "iterations: 469\ncpu: 1984743.7100213277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3384817.574545361,
            "unit": "ns/iter",
            "extra": "iterations: 275\ncpu: 3384665.09090908 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6806.700694862192,
            "unit": "ns/iter",
            "extra": "iterations: 103042\ncpu: 6806.550726888075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 38395.16425597104,
            "unit": "ns/iter",
            "extra": "iterations: 18252\ncpu: 38392.126890203464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 28904.425756886863,
            "unit": "ns/iter",
            "extra": "iterations: 24211\ncpu: 28904.22535211262 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 30021.24515520527,
            "unit": "ns/iter",
            "extra": "iterations: 23324\ncpu: 30019.983707768966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 23760.274387968122,
            "unit": "ns/iter",
            "extra": "iterations: 29451\ncpu: 23760.147363417163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 180571.26644313606,
            "unit": "ns/iter",
            "extra": "iterations: 3877\ncpu: 180566.00464276478 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 294319.7718345574,
            "unit": "ns/iter",
            "extra": "iterations: 2393\ncpu: 294319.30631006963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 74109.67447752006,
            "unit": "ns/iter",
            "extra": "iterations: 9474\ncpu: 74105.64703398716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 74240.77597368811,
            "unit": "ns/iter",
            "extra": "iterations: 9423\ncpu: 74240.51788177904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 74092.91950366092,
            "unit": "ns/iter",
            "extra": "iterations: 9429\ncpu: 74091.00646940412 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 149226.91998296895,
            "unit": "ns/iter",
            "extra": "iterations: 4699\ncpu: 149220.00425622624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 130950.49159507116,
            "unit": "ns/iter",
            "extra": "iterations: 5354\ncpu: 130942.6223384398 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 46024.2815170215,
            "unit": "ns/iter",
            "extra": "iterations: 15214\ncpu: 46020.50085447605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 221735.73092750626,
            "unit": "ns/iter",
            "extra": "iterations: 3159\ncpu: 221723.33016777853 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 179174.19463599863,
            "unit": "ns/iter",
            "extra": "iterations: 3915\ncpu: 179157.7011494269 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 178055.85383833616,
            "unit": "ns/iter",
            "extra": "iterations: 3934\ncpu: 178049.16115912728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 178716.89107142648,
            "unit": "ns/iter",
            "extra": "iterations: 3920\ncpu: 178708.7755102039 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 336852.017324357,
            "unit": "ns/iter",
            "extra": "iterations: 2078\ncpu: 336843.50336862344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1242451.8847517013,
            "unit": "ns/iter",
            "extra": "iterations: 564\ncpu: 1242423.226950362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 1037287.6445782125,
            "unit": "ns/iter",
            "extra": "iterations: 664\ncpu: 1037262.3493975798 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 1043557.7853950803,
            "unit": "ns/iter",
            "extra": "iterations: 671\ncpu: 1043514.1579731749 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 1035720.8581979612,
            "unit": "ns/iter",
            "extra": "iterations: 677\ncpu: 1035621.4180206831 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 674258.3913462086,
            "unit": "ns/iter",
            "extra": "iterations: 1040\ncpu: 674219.0384615381 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 1020913.351824867,
            "unit": "ns/iter",
            "extra": "iterations: 685\ncpu: 1020892.9927007442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 45466.09153421853,
            "unit": "ns/iter",
            "extra": "iterations: 15415\ncpu: 45463.93123580869 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 223715.91405750258,
            "unit": "ns/iter",
            "extra": "iterations: 3130\ncpu: 223700.6709265188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 180094.3173052026,
            "unit": "ns/iter",
            "extra": "iterations: 3889\ncpu: 180090.92311648396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 179366.4859118604,
            "unit": "ns/iter",
            "extra": "iterations: 3904\ncpu: 179361.65471311516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 180696.00955577943,
            "unit": "ns/iter",
            "extra": "iterations: 3872\ncpu: 180689.72107437806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 333774.6175488451,
            "unit": "ns/iter",
            "extra": "iterations: 2097\ncpu: 333764.32999523194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1231726.252204621,
            "unit": "ns/iter",
            "extra": "iterations: 567\ncpu: 1231690.4761904776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 1038053.3224368286,
            "unit": "ns/iter",
            "extra": "iterations: 673\ncpu: 1038010.1040118901 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 1035337.2525849562,
            "unit": "ns/iter",
            "extra": "iterations: 677\ncpu: 1035251.1078286668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 1036627.9674073869,
            "unit": "ns/iter",
            "extra": "iterations: 675\ncpu: 1036554.5185185157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 675629.3584540593,
            "unit": "ns/iter",
            "extra": "iterations: 1035\ncpu: 675610.7246376782 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 1021020.5614034204,
            "unit": "ns/iter",
            "extra": "iterations: 684\ncpu: 1021017.9824561501 ns\nthreads: 1"
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
        "date": 1705957700870,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 17492.72522376504,
            "unit": "ns/iter",
            "extra": "iterations: 40109\ncpu: 17492.0516592286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 143749.27624976786,
            "unit": "ns/iter",
            "extra": "iterations: 5781\ncpu: 143742.4494032174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 265049.2178308903,
            "unit": "ns/iter",
            "extra": "iterations: 3264\ncpu: 265042.800245098 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 386889.6912691439,
            "unit": "ns/iter",
            "extra": "iterations: 2222\ncpu: 386871.42214221414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 508342.34563565196,
            "unit": "ns/iter",
            "extra": "iterations: 1707\ncpu: 508310.954891623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 508487.32099996146,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 508471.49999999977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 607397.7360000527,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 607368.6 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 705767.8837919927,
            "unit": "ns/iter",
            "extra": "iterations: 1308\ncpu: 705719.266055046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 802878.973066836,
            "unit": "ns/iter",
            "extra": "iterations: 1151\ncpu: 802828.5838401392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 14095.093114728475,
            "unit": "ns/iter",
            "extra": "iterations: 49831\ncpu: 14094.158254901553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 11756.633000135116,
            "unit": "ns/iter",
            "extra": "iterations: 59624\ncpu: 11756.031128404671 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 11883.744853325621,
            "unit": "ns/iter",
            "extra": "iterations: 59213\ncpu: 11883.515444243645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 11828.533393718502,
            "unit": "ns/iter",
            "extra": "iterations: 58514\ncpu: 11827.791639607627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 20273.023822604115,
            "unit": "ns/iter",
            "extra": "iterations: 34589\ncpu: 20271.79739223454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 59840.10360000411,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 59836.71999999985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 292590.7393235408,
            "unit": "ns/iter",
            "extra": "iterations: 2927\ncpu: 292578.5445848997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 234667.1453696192,
            "unit": "ns/iter",
            "extra": "iterations: 3639\ncpu: 234654.13575158 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 232306.82857143114,
            "unit": "ns/iter",
            "extra": "iterations: 3675\ncpu: 232288.59863945615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 233285.08150984743,
            "unit": "ns/iter",
            "extra": "iterations: 3656\ncpu: 233269.2833698035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 504511.46899990813,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 504478.80000000115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4372183.149532766,
            "unit": "ns/iter",
            "extra": "iterations: 214\ncpu: 4371912.149532706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3527216.965909216,
            "unit": "ns/iter",
            "extra": "iterations: 264\ncpu: 3526963.257575763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3507769.199248123,
            "unit": "ns/iter",
            "extra": "iterations: 266\ncpu: 3507535.338345857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3477129.801498184,
            "unit": "ns/iter",
            "extra": "iterations: 267\ncpu: 3476957.6779026208 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 2001197.6753247248,
            "unit": "ns/iter",
            "extra": "iterations: 462\ncpu: 2001085.2813852825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3408217.8713235827,
            "unit": "ns/iter",
            "extra": "iterations: 272\ncpu: 3407991.911764702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 12782248.096385388,
            "unit": "ns/iter",
            "extra": "iterations: 83\ncpu: 12781722.891566271 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5687773.750000816,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5687294.999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 16509416.828125011,
            "unit": "ns/iter",
            "extra": "iterations: 64\ncpu: 16508389.062499963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 60926.46377228004,
            "unit": "ns/iter",
            "extra": "iterations: 13912\ncpu: 60922.318861414555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 347552.973049059,
            "unit": "ns/iter",
            "extra": "iterations: 2486\ncpu: 347534.07079646096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 268462.7058453861,
            "unit": "ns/iter",
            "extra": "iterations: 3182\ncpu: 268444.3746071661 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 263630.8732264018,
            "unit": "ns/iter",
            "extra": "iterations: 3242\ncpu: 263619.43244910514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 255281.36667661756,
            "unit": "ns/iter",
            "extra": "iterations: 3349\ncpu: 255267.51269035562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 502425.44900004304,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 502410.900000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4431363.800000283,
            "unit": "ns/iter",
            "extra": "iterations: 210\ncpu: 4431217.142857133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3573991.4730772153,
            "unit": "ns/iter",
            "extra": "iterations: 260\ncpu: 3573893.8461538632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3560512.022988468,
            "unit": "ns/iter",
            "extra": "iterations: 261\ncpu: 3560325.670498091 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3566139.8084291434,
            "unit": "ns/iter",
            "extra": "iterations: 261\ncpu: 3565920.306513404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 2047829.596916464,
            "unit": "ns/iter",
            "extra": "iterations: 454\ncpu: 2047697.3568282078 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3460639.3754647053,
            "unit": "ns/iter",
            "extra": "iterations: 269\ncpu: 3460409.665427516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 12967270.621951373,
            "unit": "ns/iter",
            "extra": "iterations: 82\ncpu: 12966685.36585361 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5861004.740000908,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5860592.9999999525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 53512.619000002815,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 53510.52999999979 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 306211.54024217185,
            "unit": "ns/iter",
            "extra": "iterations: 2808\ncpu: 306194.65811965836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 230781.6276308627,
            "unit": "ns/iter",
            "extra": "iterations: 3706\ncpu: 230770.85806799788 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 227983.12053334183,
            "unit": "ns/iter",
            "extra": "iterations: 3750\ncpu: 227967.62666666647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 224470.67670362382,
            "unit": "ns/iter",
            "extra": "iterations: 3786\ncpu: 224456.94664553695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 566441.758053876,
            "unit": "ns/iter",
            "extra": "iterations: 1521\ncpu: 566407.9552925735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 4388178.226415161,
            "unit": "ns/iter",
            "extra": "iterations: 212\ncpu: 4387981.603773571 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3532182.239543368,
            "unit": "ns/iter",
            "extra": "iterations: 263\ncpu: 3531942.9657794805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3514325.747170125,
            "unit": "ns/iter",
            "extra": "iterations: 265\ncpu: 3514128.3018867904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3509257.641509444,
            "unit": "ns/iter",
            "extra": "iterations: 265\ncpu: 3509120.377358498 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 2003382.0969827282,
            "unit": "ns/iter",
            "extra": "iterations: 464\ncpu: 2003268.5344827576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3414833.6227105204,
            "unit": "ns/iter",
            "extra": "iterations: 273\ncpu: 3414625.2747252807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6829.879572159737,
            "unit": "ns/iter",
            "extra": "iterations: 102468\ncpu: 6829.404301830808 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 38204.71549419172,
            "unit": "ns/iter",
            "extra": "iterations: 18323\ncpu: 38203.07264094269 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 30491.073930467024,
            "unit": "ns/iter",
            "extra": "iterations: 22954\ncpu: 30489.753419883276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 29582.622377916054,
            "unit": "ns/iter",
            "extra": "iterations: 23693\ncpu: 29581.47976195496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 24311.870202811016,
            "unit": "ns/iter",
            "extra": "iterations: 28845\ncpu: 24310.667360027677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 172545.52733988213,
            "unit": "ns/iter",
            "extra": "iterations: 4060\ncpu: 172537.9556650237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 298097.22609434347,
            "unit": "ns/iter",
            "extra": "iterations: 2353\ncpu: 298076.28559286124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 75663.99708265984,
            "unit": "ns/iter",
            "extra": "iterations: 9255\ncpu: 75658.61696380339 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 75934.09284164436,
            "unit": "ns/iter",
            "extra": "iterations: 9220\ncpu: 75929.44685466355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 75809.51411267655,
            "unit": "ns/iter",
            "extra": "iterations: 9247\ncpu: 75804.2283984003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 150139.27608416358,
            "unit": "ns/iter",
            "extra": "iterations: 4658\ncpu: 150136.4748819218 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 139222.10220718873,
            "unit": "ns/iter",
            "extra": "iterations: 5029\ncpu: 139215.98727381352 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 46158.885071870114,
            "unit": "ns/iter",
            "extra": "iterations: 15166\ncpu: 46157.167348015595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 227370.4735475409,
            "unit": "ns/iter",
            "extra": "iterations: 3081\ncpu: 227360.82440766352 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 182688.83420366267,
            "unit": "ns/iter",
            "extra": "iterations: 3830\ncpu: 182685.4569190597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 179716.85964459646,
            "unit": "ns/iter",
            "extra": "iterations: 3883\ncpu: 179707.4426989454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 179861.2566872514,
            "unit": "ns/iter",
            "extra": "iterations: 3888\ncpu: 179849.43415637946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 338816.3567279972,
            "unit": "ns/iter",
            "extra": "iterations: 2066\ncpu: 338792.49757986254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1265081.144404474,
            "unit": "ns/iter",
            "extra": "iterations: 554\ncpu: 1265004.332129971 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 1054613.1101056188,
            "unit": "ns/iter",
            "extra": "iterations: 663\ncpu: 1054540.2714932042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 1049157.2290419356,
            "unit": "ns/iter",
            "extra": "iterations: 668\ncpu: 1049094.4610778557 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 1046071.6860986989,
            "unit": "ns/iter",
            "extra": "iterations: 669\ncpu: 1046043.6472346651 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 681949.5161291347,
            "unit": "ns/iter",
            "extra": "iterations: 1023\ncpu: 681919.8435972614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 1033409.8389955687,
            "unit": "ns/iter",
            "extra": "iterations: 677\ncpu: 1033356.8685376653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 45596.911831739286,
            "unit": "ns/iter",
            "extra": "iterations: 15357\ncpu: 45594.803672591544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 230142.60506415585,
            "unit": "ns/iter",
            "extra": "iterations: 3041\ncpu: 230133.67313383872 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 184303.6309430013,
            "unit": "ns/iter",
            "extra": "iterations: 3807\ncpu: 184288.78381927867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 180835.22285420142,
            "unit": "ns/iter",
            "extra": "iterations: 3868\ncpu: 180826.60289555317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 182857.66265689844,
            "unit": "ns/iter",
            "extra": "iterations: 3824\ncpu: 182846.3389121337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 335771.1228996813,
            "unit": "ns/iter",
            "extra": "iterations: 2083\ncpu: 335744.74315890786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1254278.7001794935,
            "unit": "ns/iter",
            "extra": "iterations: 557\ncpu: 1254200.0000000054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 1055470.9772727413,
            "unit": "ns/iter",
            "extra": "iterations: 660\ncpu: 1055412.2727272687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 1040184.552748961,
            "unit": "ns/iter",
            "extra": "iterations: 673\ncpu: 1040138.7815750417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 1044093.5791045865,
            "unit": "ns/iter",
            "extra": "iterations: 670\ncpu: 1044035.5223880631 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 676967.912621417,
            "unit": "ns/iter",
            "extra": "iterations: 1030\ncpu: 676911.3592233084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 1031262.0280234894,
            "unit": "ns/iter",
            "extra": "iterations: 678\ncpu: 1031196.3126843579 ns\nthreads: 1"
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
        "date": 1705959170526,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 17875.947448421335,
            "unit": "ns/iter",
            "extra": "iterations: 40132\ncpu: 17874.775740057812 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 138938.5579638741,
            "unit": "ns/iter",
            "extra": "iterations: 6090\ncpu: 138933.0213464696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 262192.58401451906,
            "unit": "ns/iter",
            "extra": "iterations: 3303\ncpu: 262179.89706327586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 381312.2609465036,
            "unit": "ns/iter",
            "extra": "iterations: 2261\ncpu: 381299.3365767358 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 502107.11638683133,
            "unit": "ns/iter",
            "extra": "iterations: 1727\ncpu: 502077.8807180083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 502543.39599996456,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 502532.0000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 600151.9540000118,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 600116.4000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 701510.0294117014,
            "unit": "ns/iter",
            "extra": "iterations: 1326\ncpu: 701453.5444947209 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 792082.5974248896,
            "unit": "ns/iter",
            "extra": "iterations: 1165\ncpu: 792035.4506437769 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 13915.04614743399,
            "unit": "ns/iter",
            "extra": "iterations: 50382\ncpu: 13914.314636179559 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 11729.892078284623,
            "unit": "ns/iter",
            "extra": "iterations: 59015\ncpu: 11729.64331102264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 11636.840843288808,
            "unit": "ns/iter",
            "extra": "iterations: 60098\ncpu: 11636.30070884224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 11863.365021441494,
            "unit": "ns/iter",
            "extra": "iterations: 59465\ncpu: 11862.717564954177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 20035.160901138068,
            "unit": "ns/iter",
            "extra": "iterations: 34978\ncpu: 20033.61541540393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 61730.215172514945,
            "unit": "ns/iter",
            "extra": "iterations: 13854\ncpu: 61727.78980799773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 292305.1948051882,
            "unit": "ns/iter",
            "extra": "iterations: 2926\ncpu: 292287.0813397132 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 230133.59492990337,
            "unit": "ns/iter",
            "extra": "iterations: 3708\ncpu: 230121.9795037755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 232872.32157505886,
            "unit": "ns/iter",
            "extra": "iterations: 3657\ncpu: 232856.13891167624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 232215.49334057685,
            "unit": "ns/iter",
            "extra": "iterations: 3679\ncpu: 232211.74232128257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 501144.28400001995,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 501123.800000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4285156.391705126,
            "unit": "ns/iter",
            "extra": "iterations: 217\ncpu: 4285011.981566814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3477170.355805196,
            "unit": "ns/iter",
            "extra": "iterations: 267\ncpu: 3477124.3445692793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3471241.928838871,
            "unit": "ns/iter",
            "extra": "iterations: 267\ncpu: 3471151.3108614297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3453831.023529453,
            "unit": "ns/iter",
            "extra": "iterations: 255\ncpu: 3453654.5098039177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1993344.8771552742,
            "unit": "ns/iter",
            "extra": "iterations: 464\ncpu: 1993227.586206895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3364126.6109088976,
            "unit": "ns/iter",
            "extra": "iterations: 275\ncpu: 3363938.5454545524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 12718268.192772035,
            "unit": "ns/iter",
            "extra": "iterations: 83\ncpu: 12717145.783132555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5638982.260001058,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5638429.000000009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 16267256.738461373,
            "unit": "ns/iter",
            "extra": "iterations: 65\ncpu: 16266792.307692304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 60647.3942999969,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 60645.57999999991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 331656.234182083,
            "unit": "ns/iter",
            "extra": "iterations: 2592\ncpu: 331645.6790123461 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 264223.92622196977,
            "unit": "ns/iter",
            "extra": "iterations: 3253\ncpu: 264214.6633876425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 263625.0568356111,
            "unit": "ns/iter",
            "extra": "iterations: 3255\ncpu: 263615.51459293446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 256045.5655811121,
            "unit": "ns/iter",
            "extra": "iterations: 3347\ncpu: 256033.13414998507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 617996.8436390029,
            "unit": "ns/iter",
            "extra": "iterations: 1407\ncpu: 617981.3077469835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4340080.046728774,
            "unit": "ns/iter",
            "extra": "iterations: 214\ncpu: 4339871.495327114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3505966.366038112,
            "unit": "ns/iter",
            "extra": "iterations: 265\ncpu: 3505832.8301886916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3524600.219696963,
            "unit": "ns/iter",
            "extra": "iterations: 264\ncpu: 3524473.863636372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3543503.9163498757,
            "unit": "ns/iter",
            "extra": "iterations: 263\ncpu: 3543306.4638783196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 2036762.5592103777,
            "unit": "ns/iter",
            "extra": "iterations: 456\ncpu: 2036686.6228070136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3413831.955882492,
            "unit": "ns/iter",
            "extra": "iterations: 272\ncpu: 3413619.4852941004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 12928480.951219205,
            "unit": "ns/iter",
            "extra": "iterations: 82\ncpu: 12928145.1219512 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5619900.7300006095,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5619687.000000013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 52868.2832999948,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 52863.39000000027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 301750.93797330157,
            "unit": "ns/iter",
            "extra": "iterations: 2773\ncpu: 301740.2452217823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 231584.0788124156,
            "unit": "ns/iter",
            "extra": "iterations: 3705\ncpu: 231567.09851552028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 227989.61305731643,
            "unit": "ns/iter",
            "extra": "iterations: 3768\ncpu: 227984.10297239874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 222629.44031414695,
            "unit": "ns/iter",
            "extra": "iterations: 3820\ncpu: 222627.87958115255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 561137.2572910105,
            "unit": "ns/iter",
            "extra": "iterations: 1543\ncpu: 561116.526247568 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 4289255.617511457,
            "unit": "ns/iter",
            "extra": "iterations: 217\ncpu: 4289121.658986176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3473084.7873133686,
            "unit": "ns/iter",
            "extra": "iterations: 268\ncpu: 3472980.2238806174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3481594.2584268516,
            "unit": "ns/iter",
            "extra": "iterations: 267\ncpu: 3481479.400749066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3457311.7732340125,
            "unit": "ns/iter",
            "extra": "iterations: 269\ncpu: 3457236.8029739917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1981639.8957447475,
            "unit": "ns/iter",
            "extra": "iterations: 470\ncpu: 1981571.2765957348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3379869.763636469,
            "unit": "ns/iter",
            "extra": "iterations: 275\ncpu: 3379709.090909092 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6801.39572539484,
            "unit": "ns/iter",
            "extra": "iterations: 103261\ncpu: 6800.9006304413215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 38297.27079462592,
            "unit": "ns/iter",
            "extra": "iterations: 18298\ncpu: 38295.34375341569 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 29007.059991722632,
            "unit": "ns/iter",
            "extra": "iterations: 24170\ncpu: 29002.470004137398 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 30932.353081513284,
            "unit": "ns/iter",
            "extra": "iterations: 22635\ncpu: 30930.974155069594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 23702.295935287228,
            "unit": "ns/iter",
            "extra": "iterations: 29547\ncpu: 23700.5042813145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 170591.42460414176,
            "unit": "ns/iter",
            "extra": "iterations: 4105\ncpu: 170584.4579780742 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 290523.3855120466,
            "unit": "ns/iter",
            "extra": "iterations: 2402\ncpu: 290498.37635303754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 74269.52575677962,
            "unit": "ns/iter",
            "extra": "iterations: 9415\ncpu: 74269.7185342553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 74288.2494948404,
            "unit": "ns/iter",
            "extra": "iterations: 9403\ncpu: 74288.49303413763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 73466.7317279257,
            "unit": "ns/iter",
            "extra": "iterations: 9468\ncpu: 73460.54076890543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 148595.61689960837,
            "unit": "ns/iter",
            "extra": "iterations: 4722\ncpu: 148592.3761118161 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 136856.14690368166,
            "unit": "ns/iter",
            "extra": "iterations: 5119\ncpu: 136851.14280132862 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 46363.84546598455,
            "unit": "ns/iter",
            "extra": "iterations: 15097\ncpu: 46363.00589521121 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 227074.41466582727,
            "unit": "ns/iter",
            "extra": "iterations: 3082\ncpu: 227059.6365996103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 180556.78448052553,
            "unit": "ns/iter",
            "extra": "iterations: 3879\ncpu: 180550.4511472003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 180388.83994843662,
            "unit": "ns/iter",
            "extra": "iterations: 3880\ncpu: 180380.61855670062 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 179756.69139922713,
            "unit": "ns/iter",
            "extra": "iterations: 3895\ncpu: 179752.34916559525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 340667.0786789521,
            "unit": "ns/iter",
            "extra": "iterations: 2059\ncpu: 340648.85866925126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1246832.5935829277,
            "unit": "ns/iter",
            "extra": "iterations: 561\ncpu: 1246808.7344028621 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 1046205.7718751084,
            "unit": "ns/iter",
            "extra": "iterations: 640\ncpu: 1046151.2500000049 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 1055966.4343890843,
            "unit": "ns/iter",
            "extra": "iterations: 663\ncpu: 1055940.1206636566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 1044435.1238805808,
            "unit": "ns/iter",
            "extra": "iterations: 670\ncpu: 1044412.3880597077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 668487.6312260451,
            "unit": "ns/iter",
            "extra": "iterations: 1044\ncpu: 668452.5862068911 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 1029838.6117647303,
            "unit": "ns/iter",
            "extra": "iterations: 680\ncpu: 1029810.441176463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 46022.24003944949,
            "unit": "ns/iter",
            "extra": "iterations: 15210\ncpu: 46019.53977646285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 227039.9484435599,
            "unit": "ns/iter",
            "extra": "iterations: 3084\ncpu: 227033.98184176534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 181584.5513387042,
            "unit": "ns/iter",
            "extra": "iterations: 3847\ncpu: 181579.0486093065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 181286.07700284038,
            "unit": "ns/iter",
            "extra": "iterations: 3857\ncpu: 181282.42157116934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 181499.0057351355,
            "unit": "ns/iter",
            "extra": "iterations: 3836\ncpu: 181494.6298227296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 337952.9932399944,
            "unit": "ns/iter",
            "extra": "iterations: 2071\ncpu: 337953.88701110246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1239402.3250884318,
            "unit": "ns/iter",
            "extra": "iterations: 566\ncpu: 1239405.4770318042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 1047066.4527736044,
            "unit": "ns/iter",
            "extra": "iterations: 667\ncpu: 1046991.3043478209 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 1044406.7377049264,
            "unit": "ns/iter",
            "extra": "iterations: 671\ncpu: 1044344.7093889889 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 1039875.7919762409,
            "unit": "ns/iter",
            "extra": "iterations: 673\ncpu: 1039787.6671619487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 673240.6398468097,
            "unit": "ns/iter",
            "extra": "iterations: 1044\ncpu: 673202.2030651373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 1027919.1306901297,
            "unit": "ns/iter",
            "extra": "iterations: 681\ncpu: 1027922.026431717 ns\nthreads: 1"
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
        "date": 1705961218769,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 17775.401681053965,
            "unit": "ns/iter",
            "extra": "iterations: 39499\ncpu: 17774.396820172664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 146092.76045628404,
            "unit": "ns/iter",
            "extra": "iterations: 5786\ncpu: 146085.9488420325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 275876.18592804356,
            "unit": "ns/iter",
            "extra": "iterations: 3141\ncpu: 275848.86978669214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 405087.19897484797,
            "unit": "ns/iter",
            "extra": "iterations: 2146\ncpu: 405069.9440820131 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 530768.3057597863,
            "unit": "ns/iter",
            "extra": "iterations: 1632\ncpu: 530720.2818627448 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 533536.5570000476,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 533529.5999999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 633614.2559999871,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 633577.7 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 734578.0446214295,
            "unit": "ns/iter",
            "extra": "iterations: 1255\ncpu: 734548.5258964141 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 835930.2404371361,
            "unit": "ns/iter",
            "extra": "iterations: 1098\ncpu: 835884.9726775965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 14233.243381603508,
            "unit": "ns/iter",
            "extra": "iterations: 49030\ncpu: 14232.38425453801 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 11855.14103151501,
            "unit": "ns/iter",
            "extra": "iterations: 58923\ncpu: 11854.425266873728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 11844.712530671963,
            "unit": "ns/iter",
            "extra": "iterations: 59095\ncpu: 11844.579067603017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 11851.922930928784,
            "unit": "ns/iter",
            "extra": "iterations: 59012\ncpu: 11851.7759099844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 20303.675842666944,
            "unit": "ns/iter",
            "extra": "iterations: 34474\ncpu: 20303.68103498287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 60091.46009999995,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 60090.42000000005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 300253.83426969766,
            "unit": "ns/iter",
            "extra": "iterations: 2848\ncpu: 300243.43398876407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 242418.88734393608,
            "unit": "ns/iter",
            "extra": "iterations: 3524\ncpu: 242409.53461975034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 235443.85903447805,
            "unit": "ns/iter",
            "extra": "iterations: 3625\ncpu: 235429.46206896528 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 234890.514442927,
            "unit": "ns/iter",
            "extra": "iterations: 3635\ncpu: 234884.86932599754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 529453.4729999895,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 529390.4000000005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4548265.558823646,
            "unit": "ns/iter",
            "extra": "iterations: 204\ncpu: 4548048.039215691 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3645238.6523437854,
            "unit": "ns/iter",
            "extra": "iterations: 256\ncpu: 3644988.281249997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3611572.7237351597,
            "unit": "ns/iter",
            "extra": "iterations: 257\ncpu: 3611338.521400781 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3648741.086956549,
            "unit": "ns/iter",
            "extra": "iterations: 253\ncpu: 3648433.9920948683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 2057608.9135254293,
            "unit": "ns/iter",
            "extra": "iterations: 451\ncpu: 2057462.3059866983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3532286.068702315,
            "unit": "ns/iter",
            "extra": "iterations: 262\ncpu: 3531970.229007629 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 13126778.864198564,
            "unit": "ns/iter",
            "extra": "iterations: 81\ncpu: 13125906.172839519 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5873265.929999433,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5873094.999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 16863889.349208094,
            "unit": "ns/iter",
            "extra": "iterations: 63\ncpu: 16862996.82539685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 61729.16335040562,
            "unit": "ns/iter",
            "extra": "iterations: 13670\ncpu: 61727.856620336395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 350431.92517280794,
            "unit": "ns/iter",
            "extra": "iterations: 2459\ncpu: 350416.14477429836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 274624.233865791,
            "unit": "ns/iter",
            "extra": "iterations: 3130\ncpu: 274616.6134185311 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 267885.2702028352,
            "unit": "ns/iter",
            "extra": "iterations: 3205\ncpu: 267881.5600624008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 260515.17957317465,
            "unit": "ns/iter",
            "extra": "iterations: 3280\ncpu: 260510.73170731802 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 525742.9179999917,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 525727.5999999961 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4620521.3366339095,
            "unit": "ns/iter",
            "extra": "iterations: 202\ncpu: 4612592.079207907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3692017.281745996,
            "unit": "ns/iter",
            "extra": "iterations: 252\ncpu: 3691990.873015865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3685524.0869566044,
            "unit": "ns/iter",
            "extra": "iterations: 253\ncpu: 3685381.0276679695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3731038.831325262,
            "unit": "ns/iter",
            "extra": "iterations: 249\ncpu: 3730859.8393574334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 2089984.1415732654,
            "unit": "ns/iter",
            "extra": "iterations: 445\ncpu: 2089828.3146067502 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3578451.557692338,
            "unit": "ns/iter",
            "extra": "iterations: 260\ncpu: 3578412.692307691 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 13312107.112500371,
            "unit": "ns/iter",
            "extra": "iterations: 80\ncpu: 13310827.500000056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5815692.720000243,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5815698.999999981 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 56056.25279999913,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 56052.28000000011 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 313710.0526315843,
            "unit": "ns/iter",
            "extra": "iterations: 2755\ncpu: 313687.2232304905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 242182.06437164664,
            "unit": "ns/iter",
            "extra": "iterations: 3573\ncpu: 242161.46095717838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 235305.39625202134,
            "unit": "ns/iter",
            "extra": "iterations: 3682\ncpu: 235290.63009234171 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 226699.0336959603,
            "unit": "ns/iter",
            "extra": "iterations: 3769\ncpu: 226682.78057840114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 626521.6252587411,
            "unit": "ns/iter",
            "extra": "iterations: 1449\ncpu: 626496.4113181515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 4550685.539215897,
            "unit": "ns/iter",
            "extra": "iterations: 204\ncpu: 4550304.411764694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3671334.8543310165,
            "unit": "ns/iter",
            "extra": "iterations: 254\ncpu: 3671094.094488172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3619875.6317831306,
            "unit": "ns/iter",
            "extra": "iterations: 258\ncpu: 3619749.61240309 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3665262.503937009,
            "unit": "ns/iter",
            "extra": "iterations: 254\ncpu: 3665005.5118110212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 2052655.5010989325,
            "unit": "ns/iter",
            "extra": "iterations: 455\ncpu: 2052505.4945054904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3541169.8269233336,
            "unit": "ns/iter",
            "extra": "iterations: 260\ncpu: 3540885.3846153766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6930.529357798217,
            "unit": "ns/iter",
            "extra": "iterations: 101370\ncpu: 6930.044391831888 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 39052.99637741885,
            "unit": "ns/iter",
            "extra": "iterations: 17943\ncpu: 39049.56807668706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 29363.189056828192,
            "unit": "ns/iter",
            "extra": "iterations: 23686\ncpu: 29361.027611246973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 31529.75590480258,
            "unit": "ns/iter",
            "extra": "iterations: 22143\ncpu: 31527.381113670002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 24257.552741009094,
            "unit": "ns/iter",
            "extra": "iterations: 28858\ncpu: 24255.33994039796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 176126.45801909754,
            "unit": "ns/iter",
            "extra": "iterations: 3978\ncpu: 176112.39316239362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 307087.0158033301,
            "unit": "ns/iter",
            "extra": "iterations: 2278\ncpu: 307060.44776119484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 76453.3584288074,
            "unit": "ns/iter",
            "extra": "iterations: 9165\ncpu: 76448.1069285335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 76910.5389326304,
            "unit": "ns/iter",
            "extra": "iterations: 9144\ncpu: 76910.64085739356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 76936.33955838968,
            "unit": "ns/iter",
            "extra": "iterations: 9103\ncpu: 76932.1542348675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 151557.20064863213,
            "unit": "ns/iter",
            "extra": "iterations: 4625\ncpu: 151550.8324324321 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 135702.83657210448,
            "unit": "ns/iter",
            "extra": "iterations: 5146\ncpu: 135701.2048192781 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 47416.30084716587,
            "unit": "ns/iter",
            "extra": "iterations: 14755\ncpu: 47415.63537783737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 229423.34358638534,
            "unit": "ns/iter",
            "extra": "iterations: 3056\ncpu: 229414.4306282744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 185216.7862635958,
            "unit": "ns/iter",
            "extra": "iterations: 3771\ncpu: 185214.58499072172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 184358.9576943361,
            "unit": "ns/iter",
            "extra": "iterations: 3782\ncpu: 184352.64410364887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 186526.40717128778,
            "unit": "ns/iter",
            "extra": "iterations: 3765\ncpu: 186522.23107569554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 342005.15012220695,
            "unit": "ns/iter",
            "extra": "iterations: 2045\ncpu: 341995.69682151824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1317544.0319549183,
            "unit": "ns/iter",
            "extra": "iterations: 532\ncpu: 1317517.4812029987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 1093305.1093749313,
            "unit": "ns/iter",
            "extra": "iterations: 640\ncpu: 1093254.6874999893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 1083014.3730650458,
            "unit": "ns/iter",
            "extra": "iterations: 646\ncpu: 1082985.9133126955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 1095900.8904538252,
            "unit": "ns/iter",
            "extra": "iterations: 639\ncpu: 1095889.3583724669 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 686750.8669276162,
            "unit": "ns/iter",
            "extra": "iterations: 1022\ncpu: 686729.7455968618 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 1067660.0350608772,
            "unit": "ns/iter",
            "extra": "iterations: 656\ncpu: 1067631.8597560993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 47169.19640443136,
            "unit": "ns/iter",
            "extra": "iterations: 14796\ncpu: 47167.75479859416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 232664.89527926035,
            "unit": "ns/iter",
            "extra": "iterations: 3008\ncpu: 232661.17021276394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 186607.61673773002,
            "unit": "ns/iter",
            "extra": "iterations: 3752\ncpu: 186600.34648187284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 186772.16697784074,
            "unit": "ns/iter",
            "extra": "iterations: 3749\ncpu: 186767.64470525665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 187644.1573304905,
            "unit": "ns/iter",
            "extra": "iterations: 3731\ncpu: 187631.3856874834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 339559.85658914165,
            "unit": "ns/iter",
            "extra": "iterations: 2064\ncpu: 339550.04844961455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1309476.9514924479,
            "unit": "ns/iter",
            "extra": "iterations: 536\ncpu: 1309454.1044776074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 1095799.8150471486,
            "unit": "ns/iter",
            "extra": "iterations: 638\ncpu: 1095801.41065831 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 1085996.117829438,
            "unit": "ns/iter",
            "extra": "iterations: 645\ncpu: 1085970.697674411 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 1092573.226209071,
            "unit": "ns/iter",
            "extra": "iterations: 641\ncpu: 1092535.7254290297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 686203.4636541982,
            "unit": "ns/iter",
            "extra": "iterations: 1018\ncpu: 686195.4813359437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 1076624.943425034,
            "unit": "ns/iter",
            "extra": "iterations: 654\ncpu: 1076600.4587156086 ns\nthreads: 1"
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
        "date": 1705962669091,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 17563.55125559792,
            "unit": "ns/iter",
            "extra": "iterations: 39742\ncpu: 17563.547380604905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 146515.30994854934,
            "unit": "ns/iter",
            "extra": "iterations: 5830\ncpu: 146504.30531732418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 273160.9596341883,
            "unit": "ns/iter",
            "extra": "iterations: 3171\ncpu: 273144.843897824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 399532.0009258939,
            "unit": "ns/iter",
            "extra": "iterations: 2160\ncpu: 399515.6018518518 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 525602.6226529428,
            "unit": "ns/iter",
            "extra": "iterations: 1651\ncpu: 525565.293761357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 525988.5030000077,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 525970.4000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 627295.9630000513,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 627284.0000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 727478.1197793524,
            "unit": "ns/iter",
            "extra": "iterations: 1269\ncpu: 727420.9613869188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 828469.8016230797,
            "unit": "ns/iter",
            "extra": "iterations: 1109\ncpu: 828437.240757439 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 14207.30130188343,
            "unit": "ns/iter",
            "extra": "iterations: 49774\ncpu: 14206.123679029188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 11729.122531638366,
            "unit": "ns/iter",
            "extra": "iterations: 59503\ncpu: 11728.61368334371 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 11620.856982187815,
            "unit": "ns/iter",
            "extra": "iterations: 60461\ncpu: 11620.472701410801 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 11765.48194373301,
            "unit": "ns/iter",
            "extra": "iterations: 58650\ncpu: 11764.927536231891 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 20012.69974569487,
            "unit": "ns/iter",
            "extra": "iterations: 34997\ncpu: 20012.57250621484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 58698.383299997666,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 58697.39000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 294804.09015544807,
            "unit": "ns/iter",
            "extra": "iterations: 2895\ncpu: 294791.60621761665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 238036.73871866785,
            "unit": "ns/iter",
            "extra": "iterations: 3590\ncpu: 238027.24233983288 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 240592.9127272665,
            "unit": "ns/iter",
            "extra": "iterations: 3575\ncpu: 240056.1118881119 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 240150.51269033857,
            "unit": "ns/iter",
            "extra": "iterations: 3546\ncpu: 240144.95205865768 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 509735.89499994885,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 509700.500000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4592334.269607832,
            "unit": "ns/iter",
            "extra": "iterations: 204\ncpu: 4592188.725490193 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3729190.844000186,
            "unit": "ns/iter",
            "extra": "iterations: 250\ncpu: 3729106.4000000064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3700323.370517561,
            "unit": "ns/iter",
            "extra": "iterations: 251\ncpu: 3700123.107569713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3689475.5753966337,
            "unit": "ns/iter",
            "extra": "iterations: 252\ncpu: 3689357.936507936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 2109289.804100239,
            "unit": "ns/iter",
            "extra": "iterations: 439\ncpu: 2109225.284738047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3553430.0996170705,
            "unit": "ns/iter",
            "extra": "iterations: 261\ncpu: 3553289.272030646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 13217607.324999392,
            "unit": "ns/iter",
            "extra": "iterations: 80\ncpu: 13216999.999999989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 6096739.230000594,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6096550.999999976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 16666941.6190463,
            "unit": "ns/iter",
            "extra": "iterations: 63\ncpu: 16666601.58730157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 59916.60429999683,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 59913.39999999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 340348.4999999649,
            "unit": "ns/iter",
            "extra": "iterations: 2520\ncpu: 340334.7619047631 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 264799.95842382306,
            "unit": "ns/iter",
            "extra": "iterations: 3223\ncpu: 264788.6751473781 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 261058.23796467637,
            "unit": "ns/iter",
            "extra": "iterations: 3282\ncpu: 261049.14686166888 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 256625.0935619622,
            "unit": "ns/iter",
            "extra": "iterations: 3324\ncpu: 256616.78700361153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 522559.1260000328,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 522534.9000000037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4628655.039801512,
            "unit": "ns/iter",
            "extra": "iterations: 201\ncpu: 4628448.75621888 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3774992.772357693,
            "unit": "ns/iter",
            "extra": "iterations: 246\ncpu: 3774912.195121955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3734070.4457831574,
            "unit": "ns/iter",
            "extra": "iterations: 249\ncpu: 3733982.329317265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3713296.3585654725,
            "unit": "ns/iter",
            "extra": "iterations: 251\ncpu: 3713159.3625497795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 2134308.31724127,
            "unit": "ns/iter",
            "extra": "iterations: 435\ncpu: 2134250.114942537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3643781.3710934464,
            "unit": "ns/iter",
            "extra": "iterations: 256\ncpu: 3643610.1562500047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 13535845.884615146,
            "unit": "ns/iter",
            "extra": "iterations: 78\ncpu: 13535106.41025643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5853212.869999425,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5853041.000000019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 54487.55370000527,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 54486.130000000085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 326324.4034821894,
            "unit": "ns/iter",
            "extra": "iterations: 2642\ncpu: 326306.2074186206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 237381.58812099908,
            "unit": "ns/iter",
            "extra": "iterations: 3603\ncpu: 237372.82819872288 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 233049.8640697585,
            "unit": "ns/iter",
            "extra": "iterations: 3671\ncpu: 233036.63851811472 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 223191.84082591182,
            "unit": "ns/iter",
            "extra": "iterations: 3826\ncpu: 223185.36330371007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 580391.6941097393,
            "unit": "ns/iter",
            "extra": "iterations: 1494\ncpu: 580363.1860776419 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 4519931.699029407,
            "unit": "ns/iter",
            "extra": "iterations: 206\ncpu: 4519716.990291266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3686179.913043284,
            "unit": "ns/iter",
            "extra": "iterations: 253\ncpu: 3686050.592885378 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3662359.6417321884,
            "unit": "ns/iter",
            "extra": "iterations: 254\ncpu: 3662072.0472440794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3640701.6914066225,
            "unit": "ns/iter",
            "extra": "iterations: 256\ncpu: 3640574.6093750023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 2066206.959910917,
            "unit": "ns/iter",
            "extra": "iterations: 449\ncpu: 2066183.7416481124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3540467.2213742584,
            "unit": "ns/iter",
            "extra": "iterations: 262\ncpu: 3540290.839694649 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6858.548030306008,
            "unit": "ns/iter",
            "extra": "iterations: 101894\ncpu: 6858.457809095693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 39134.64894448548,
            "unit": "ns/iter",
            "extra": "iterations: 17906\ncpu: 39132.67061320206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 30642.50905828628,
            "unit": "ns/iter",
            "extra": "iterations: 22852\ncpu: 30641.69438123603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 31888.567989449824,
            "unit": "ns/iter",
            "extra": "iterations: 23511\ncpu: 31886.818935817217 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 24341.853568572365,
            "unit": "ns/iter",
            "extra": "iterations: 28737\ncpu: 24340.814977207196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 173912.25936028804,
            "unit": "ns/iter",
            "extra": "iterations: 4033\ncpu: 173903.14902058025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 307356.1619131014,
            "unit": "ns/iter",
            "extra": "iterations: 2279\ncpu: 307346.2044756483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 76449.73575015568,
            "unit": "ns/iter",
            "extra": "iterations: 9158\ncpu: 76449.48678750741 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 76253.66776640927,
            "unit": "ns/iter",
            "extra": "iterations: 9093\ncpu: 76249.47762014747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 75927.17725643273,
            "unit": "ns/iter",
            "extra": "iterations: 9207\ncpu: 75924.74204409769 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 153773.18223682966,
            "unit": "ns/iter",
            "extra": "iterations: 4560\ncpu: 153765.26315789475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 142235.97071981092,
            "unit": "ns/iter",
            "extra": "iterations: 4918\ncpu: 142231.4152094367 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 46956.41986835054,
            "unit": "ns/iter",
            "extra": "iterations: 14888\ncpu: 46954.077109080536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 233862.54048650208,
            "unit": "ns/iter",
            "extra": "iterations: 3001\ncpu: 233850.38320559845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 184954.41789864996,
            "unit": "ns/iter",
            "extra": "iterations: 3788\ncpu: 184944.2449841603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 183615.0130958646,
            "unit": "ns/iter",
            "extra": "iterations: 3818\ncpu: 183610.84337349428 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 183544.59132721325,
            "unit": "ns/iter",
            "extra": "iterations: 3805\ncpu: 183532.6412614981 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 335507.14456674876,
            "unit": "ns/iter",
            "extra": "iterations: 2089\ncpu: 335493.6333173771 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1290245.05166043,
            "unit": "ns/iter",
            "extra": "iterations: 542\ncpu: 1290178.7822878247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 1084139.9289025909,
            "unit": "ns/iter",
            "extra": "iterations: 647\ncpu: 1084109.27357031 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 1070523.6992366007,
            "unit": "ns/iter",
            "extra": "iterations: 655\ncpu: 1070495.7251908332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 1075208.073015823,
            "unit": "ns/iter",
            "extra": "iterations: 630\ncpu: 1075106.5079365247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 686346.7100881888,
            "unit": "ns/iter",
            "extra": "iterations: 1021\ncpu: 686322.9187071596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 1054964.8612368742,
            "unit": "ns/iter",
            "extra": "iterations: 663\ncpu: 1054938.6123680302 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 46659.59960012887,
            "unit": "ns/iter",
            "extra": "iterations: 15005\ncpu: 46658.3005664777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 234976.51042368697,
            "unit": "ns/iter",
            "extra": "iterations: 2974\ncpu: 234961.46603900552 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 187337.4226142824,
            "unit": "ns/iter",
            "extra": "iterations: 3741\ncpu: 187329.80486501212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 184949.73391580625,
            "unit": "ns/iter",
            "extra": "iterations: 3777\ncpu: 184942.4146147729 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 186112.0948963255,
            "unit": "ns/iter",
            "extra": "iterations: 3762\ncpu: 186104.65178096783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 333196.15801996307,
            "unit": "ns/iter",
            "extra": "iterations: 2101\ncpu: 333186.4826273176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1277900.6094889075,
            "unit": "ns/iter",
            "extra": "iterations: 548\ncpu: 1277869.1605839317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 1080533.0632715623,
            "unit": "ns/iter",
            "extra": "iterations: 648\ncpu: 1080506.481481493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 1075107.8460367373,
            "unit": "ns/iter",
            "extra": "iterations: 656\ncpu: 1075049.237804887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 1077987.8148148565,
            "unit": "ns/iter",
            "extra": "iterations: 648\ncpu: 1077956.635802475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 690614.8637710605,
            "unit": "ns/iter",
            "extra": "iterations: 1013\ncpu: 690589.9308983305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 1057634.3010590153,
            "unit": "ns/iter",
            "extra": "iterations: 661\ncpu: 1057604.3872919662 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}