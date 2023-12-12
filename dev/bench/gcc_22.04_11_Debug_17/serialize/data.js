window.BENCHMARK_DATA = {
  "lastUpdate": 1702390781407,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Serialize gcc-11 22.04 Debug c++-17": [
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
          "id": "d50bb7d9db5207dc297814766d8c83b14fcc339b",
          "message": "More tests; More BMs; Separate BMs",
          "timestamp": "2023-12-12T14:29:05+03:00",
          "tree_id": "f44cff78a7d652bd003cb40812243c64e409e254",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/d50bb7d9db5207dc297814766d8c83b14fcc339b"
        },
        "date": 1702381094088,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 7911.630971508755,
            "unit": "ns/iter",
            "extra": "iterations: 88378\ncpu: 7911.444024530992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 95942.22806820885,
            "unit": "ns/iter",
            "extra": "iterations: 8914\ncpu: 95937.45793134395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 185724.8875714522,
            "unit": "ns/iter",
            "extra": "iterations: 4723\ncpu: 185714.56701249204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 278733.073978777,
            "unit": "ns/iter",
            "extra": "iterations: 3109\ncpu: 278723.25506593764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 361370.45072215545,
            "unit": "ns/iter",
            "extra": "iterations: 2354\ncpu: 361353.78079864086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 462896.3582860244,
            "unit": "ns/iter",
            "extra": "iterations: 1937\ncpu: 462867.26897263806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 538627.9641311291,
            "unit": "ns/iter",
            "extra": "iterations: 1617\ncpu: 538594.3104514532 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 503359.4189999917,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 503301.3999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 573464.1829999987,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 573466.6999999991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6200.201003096778,
            "unit": "ns/iter",
            "extra": "iterations: 112053\ncpu: 6199.900939733887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5142.051260417801,
            "unit": "ns/iter",
            "extra": "iterations: 136304\ncpu: 5141.767666392779 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5035.475581955725,
            "unit": "ns/iter",
            "extra": "iterations: 139057\ncpu: 5035.248854786169 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5085.161278088488,
            "unit": "ns/iter",
            "extra": "iterations: 137111\ncpu: 5085.122273194719 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 8949.377737133276,
            "unit": "ns/iter",
            "extra": "iterations: 78184\ncpu: 8949.18781336335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 45957.59426229588,
            "unit": "ns/iter",
            "extra": "iterations: 18056\ncpu: 45954.92357111209 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 193947.65223306004,
            "unit": "ns/iter",
            "extra": "iterations: 4411\ncpu: 193943.8222625254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 160856.2790479752,
            "unit": "ns/iter",
            "extra": "iterations: 5336\ncpu: 160856.55922038987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 158299.0182960577,
            "unit": "ns/iter",
            "extra": "iterations: 5411\ncpu: 158296.02661245616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 160128.45303143497,
            "unit": "ns/iter",
            "extra": "iterations: 5344\ncpu: 160127.2080838322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 382351.8027421557,
            "unit": "ns/iter",
            "extra": "iterations: 2261\ncpu: 382339.2746572301 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2995784.0511182286,
            "unit": "ns/iter",
            "extra": "iterations: 313\ncpu: 2995730.3514377014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 2451959.3622046597,
            "unit": "ns/iter",
            "extra": "iterations: 381\ncpu: 2451912.0734908176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 2430036.228571379,
            "unit": "ns/iter",
            "extra": "iterations: 385\ncpu: 2429988.0519480486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 2467203.0765170385,
            "unit": "ns/iter",
            "extra": "iterations: 379\ncpu: 2467153.8258575234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1427482.3460949475,
            "unit": "ns/iter",
            "extra": "iterations: 653\ncpu: 1427460.9494640112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 2379853.7404579823,
            "unit": "ns/iter",
            "extra": "iterations: 393\ncpu: 2379839.9491094155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 9977252.598130723,
            "unit": "ns/iter",
            "extra": "iterations: 107\ncpu: 9976925.233644884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 5589598.4464285,
            "unit": "ns/iter",
            "extra": "iterations: 168\ncpu: 5589433.928571427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 11587904.749999745,
            "unit": "ns/iter",
            "extra": "iterations: 92\ncpu: 11587656.521739151 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 47406.114529912054,
            "unit": "ns/iter",
            "extra": "iterations: 17550\ncpu: 47404.991452991606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 201941.8355744344,
            "unit": "ns/iter",
            "extra": "iterations: 4239\ncpu: 201942.13257843835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 163195.8207565101,
            "unit": "ns/iter",
            "extra": "iterations: 5261\ncpu: 163193.48032693414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 160213.812406305,
            "unit": "ns/iter",
            "extra": "iterations: 5336\ncpu: 160214.03673163493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 163044.92696414888,
            "unit": "ns/iter",
            "extra": "iterations: 5244\ncpu: 163041.380625476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 385999.2618621258,
            "unit": "ns/iter",
            "extra": "iterations: 2234\ncpu: 385999.77618621406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 3007352.712903309,
            "unit": "ns/iter",
            "extra": "iterations: 310\ncpu: 3007319.6774193523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 2465331.0449735206,
            "unit": "ns/iter",
            "extra": "iterations: 378\ncpu: 2465270.105820105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 2454169.213157947,
            "unit": "ns/iter",
            "extra": "iterations: 380\ncpu: 2454121.0526315826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 2477833.8169761538,
            "unit": "ns/iter",
            "extra": "iterations: 377\ncpu: 2477803.7135278652 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1435252.7418855785,
            "unit": "ns/iter",
            "extra": "iterations: 647\ncpu: 1435245.595054094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 2387269.530612254,
            "unit": "ns/iter",
            "extra": "iterations: 392\ncpu: 2387223.214285716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 10159503.138889173,
            "unit": "ns/iter",
            "extra": "iterations: 108\ncpu: 10159316.666666687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 5830138.827160398,
            "unit": "ns/iter",
            "extra": "iterations: 162\ncpu: 5830050.617283968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 46133.336095201485,
            "unit": "ns/iter",
            "extra": "iterations: 17983\ncpu: 46132.47511538651 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 196083.12926103052,
            "unit": "ns/iter",
            "extra": "iterations: 4371\ncpu: 196082.2923816067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 161089.6943659333,
            "unit": "ns/iter",
            "extra": "iterations: 5307\ncpu: 161087.35632183994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 159258.5832248394,
            "unit": "ns/iter",
            "extra": "iterations: 5377\ncpu: 159253.0035335692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 159068.01322406207,
            "unit": "ns/iter",
            "extra": "iterations: 5369\ncpu: 159062.91674427185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 383161.61896320706,
            "unit": "ns/iter",
            "extra": "iterations: 2257\ncpu: 383154.585733272 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2977776.308917112,
            "unit": "ns/iter",
            "extra": "iterations: 314\ncpu: 2977746.1783439387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 2462509.255263219,
            "unit": "ns/iter",
            "extra": "iterations: 380\ncpu: 2462437.1052631675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 2428797.3446476227,
            "unit": "ns/iter",
            "extra": "iterations: 383\ncpu: 2428724.804177537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 2479561.9602121077,
            "unit": "ns/iter",
            "extra": "iterations: 377\ncpu: 2479425.9946949533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1418313.76407916,
            "unit": "ns/iter",
            "extra": "iterations: 657\ncpu: 1418290.7153729107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 2384698.2933673295,
            "unit": "ns/iter",
            "extra": "iterations: 392\ncpu: 2384579.846938773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 2643.574199479378,
            "unit": "ns/iter",
            "extra": "iterations: 264328\ncpu: 2643.536061257226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 19898.007876703497,
            "unit": "ns/iter",
            "extra": "iterations: 35167\ncpu: 19897.295760229837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 13967.133783594985,
            "unit": "ns/iter",
            "extra": "iterations: 50193\ncpu: 13966.64076664069 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 14486.690130338258,
            "unit": "ns/iter",
            "extra": "iterations: 48259\ncpu: 14485.780890611033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 11228.447643180874,
            "unit": "ns/iter",
            "extra": "iterations: 62351\ncpu: 11228.156725633928 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 87397.92373092812,
            "unit": "ns/iter",
            "extra": "iterations: 7998\ncpu: 87397.13678419562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 180646.69806451476,
            "unit": "ns/iter",
            "extra": "iterations: 3875\ncpu: 180647.09677419672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 47182.592905627804,
            "unit": "ns/iter",
            "extra": "iterations: 15026\ncpu: 47152.22281378962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 45946.20048738801,
            "unit": "ns/iter",
            "extra": "iterations: 15183\ncpu: 45944.78693275317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 46956.67932885926,
            "unit": "ns/iter",
            "extra": "iterations: 14900\ncpu: 46955.09395973171 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 96672.86512205783,
            "unit": "ns/iter",
            "extra": "iterations: 7251\ncpu: 96668.19749000059 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 87387.58608565059,
            "unit": "ns/iter",
            "extra": "iterations: 7963\ncpu: 87385.67122943567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 22444.525021611476,
            "unit": "ns/iter",
            "extra": "iterations: 31233\ncpu: 22444.09758908854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 109747.45570016706,
            "unit": "ns/iter",
            "extra": "iterations: 6377\ncpu: 109746.47953583204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 88714.10143092368,
            "unit": "ns/iter",
            "extra": "iterations: 7897\ncpu: 88710.59896163191 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 87976.75668549833,
            "unit": "ns/iter",
            "extra": "iterations: 7965\ncpu: 87973.69742623974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 90895.0830193601,
            "unit": "ns/iter",
            "extra": "iterations: 7697\ncpu: 90891.87995322852 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 166184.24054247147,
            "unit": "ns/iter",
            "extra": "iterations: 4203\ncpu: 166176.80228408196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 790730.9942791631,
            "unit": "ns/iter",
            "extra": "iterations: 874\ncpu: 790724.1418764313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 670925.9183477695,
            "unit": "ns/iter",
            "extra": "iterations: 1041\ncpu: 670897.2142170955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 661747.1663516456,
            "unit": "ns/iter",
            "extra": "iterations: 1058\ncpu: 661723.9130434801 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 670340.1377990304,
            "unit": "ns/iter",
            "extra": "iterations: 1045\ncpu: 670313.6842105278 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 411776.3429581731,
            "unit": "ns/iter",
            "extra": "iterations: 1697\ncpu: 411755.50972304103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 650798.7925581188,
            "unit": "ns/iter",
            "extra": "iterations: 1075\ncpu: 650762.6976744188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 22562.451184766185,
            "unit": "ns/iter",
            "extra": "iterations: 27727\ncpu: 22562.094709128436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 111494.3736068512,
            "unit": "ns/iter",
            "extra": "iterations: 6191\ncpu: 111493.3290260071 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 89116.33295122265,
            "unit": "ns/iter",
            "extra": "iterations: 7851\ncpu: 89111.69277798978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 88445.49084711415,
            "unit": "ns/iter",
            "extra": "iterations: 7921\ncpu: 88442.96174725323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 89759.86484053476,
            "unit": "ns/iter",
            "extra": "iterations: 7776\ncpu: 89756.7001028813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 168218.25734231822,
            "unit": "ns/iter",
            "extra": "iterations: 4154\ncpu: 168211.5792007687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 792432.0881670478,
            "unit": "ns/iter",
            "extra": "iterations: 862\ncpu: 792425.870069613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 673506.2528957922,
            "unit": "ns/iter",
            "extra": "iterations: 1036\ncpu: 673470.7528957424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 662862.1390728409,
            "unit": "ns/iter",
            "extra": "iterations: 1057\ncpu: 662843.4247871343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 672422.7610364751,
            "unit": "ns/iter",
            "extra": "iterations: 1042\ncpu: 672382.6295585381 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 412176.90667455125,
            "unit": "ns/iter",
            "extra": "iterations: 1693\ncpu: 412159.12581216823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 651310.4376164095,
            "unit": "ns/iter",
            "extra": "iterations: 1074\ncpu: 651270.2979515851 ns\nthreads: 1"
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
          "id": "d50bb7d9db5207dc297814766d8c83b14fcc339b",
          "message": "More tests; More BMs; Separate BMs",
          "timestamp": "2023-12-12T14:29:05+03:00",
          "tree_id": "f44cff78a7d652bd003cb40812243c64e409e254",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/d50bb7d9db5207dc297814766d8c83b14fcc339b"
        },
        "date": 1702381094088,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 7911.630971508755,
            "unit": "ns/iter",
            "extra": "iterations: 88378\ncpu: 7911.444024530992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 95942.22806820885,
            "unit": "ns/iter",
            "extra": "iterations: 8914\ncpu: 95937.45793134395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 185724.8875714522,
            "unit": "ns/iter",
            "extra": "iterations: 4723\ncpu: 185714.56701249204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 278733.073978777,
            "unit": "ns/iter",
            "extra": "iterations: 3109\ncpu: 278723.25506593764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 361370.45072215545,
            "unit": "ns/iter",
            "extra": "iterations: 2354\ncpu: 361353.78079864086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 462896.3582860244,
            "unit": "ns/iter",
            "extra": "iterations: 1937\ncpu: 462867.26897263806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 538627.9641311291,
            "unit": "ns/iter",
            "extra": "iterations: 1617\ncpu: 538594.3104514532 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 503359.4189999917,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 503301.3999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 573464.1829999987,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 573466.6999999991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6200.201003096778,
            "unit": "ns/iter",
            "extra": "iterations: 112053\ncpu: 6199.900939733887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5142.051260417801,
            "unit": "ns/iter",
            "extra": "iterations: 136304\ncpu: 5141.767666392779 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5035.475581955725,
            "unit": "ns/iter",
            "extra": "iterations: 139057\ncpu: 5035.248854786169 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5085.161278088488,
            "unit": "ns/iter",
            "extra": "iterations: 137111\ncpu: 5085.122273194719 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 8949.377737133276,
            "unit": "ns/iter",
            "extra": "iterations: 78184\ncpu: 8949.18781336335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 45957.59426229588,
            "unit": "ns/iter",
            "extra": "iterations: 18056\ncpu: 45954.92357111209 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 193947.65223306004,
            "unit": "ns/iter",
            "extra": "iterations: 4411\ncpu: 193943.8222625254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 160856.2790479752,
            "unit": "ns/iter",
            "extra": "iterations: 5336\ncpu: 160856.55922038987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 158299.0182960577,
            "unit": "ns/iter",
            "extra": "iterations: 5411\ncpu: 158296.02661245616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 160128.45303143497,
            "unit": "ns/iter",
            "extra": "iterations: 5344\ncpu: 160127.2080838322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 382351.8027421557,
            "unit": "ns/iter",
            "extra": "iterations: 2261\ncpu: 382339.2746572301 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2995784.0511182286,
            "unit": "ns/iter",
            "extra": "iterations: 313\ncpu: 2995730.3514377014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 2451959.3622046597,
            "unit": "ns/iter",
            "extra": "iterations: 381\ncpu: 2451912.0734908176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 2430036.228571379,
            "unit": "ns/iter",
            "extra": "iterations: 385\ncpu: 2429988.0519480486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 2467203.0765170385,
            "unit": "ns/iter",
            "extra": "iterations: 379\ncpu: 2467153.8258575234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1427482.3460949475,
            "unit": "ns/iter",
            "extra": "iterations: 653\ncpu: 1427460.9494640112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 2379853.7404579823,
            "unit": "ns/iter",
            "extra": "iterations: 393\ncpu: 2379839.9491094155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 9977252.598130723,
            "unit": "ns/iter",
            "extra": "iterations: 107\ncpu: 9976925.233644884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 5589598.4464285,
            "unit": "ns/iter",
            "extra": "iterations: 168\ncpu: 5589433.928571427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 11587904.749999745,
            "unit": "ns/iter",
            "extra": "iterations: 92\ncpu: 11587656.521739151 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 47406.114529912054,
            "unit": "ns/iter",
            "extra": "iterations: 17550\ncpu: 47404.991452991606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 201941.8355744344,
            "unit": "ns/iter",
            "extra": "iterations: 4239\ncpu: 201942.13257843835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 163195.8207565101,
            "unit": "ns/iter",
            "extra": "iterations: 5261\ncpu: 163193.48032693414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 160213.812406305,
            "unit": "ns/iter",
            "extra": "iterations: 5336\ncpu: 160214.03673163493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 163044.92696414888,
            "unit": "ns/iter",
            "extra": "iterations: 5244\ncpu: 163041.380625476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 385999.2618621258,
            "unit": "ns/iter",
            "extra": "iterations: 2234\ncpu: 385999.77618621406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 3007352.712903309,
            "unit": "ns/iter",
            "extra": "iterations: 310\ncpu: 3007319.6774193523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 2465331.0449735206,
            "unit": "ns/iter",
            "extra": "iterations: 378\ncpu: 2465270.105820105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 2454169.213157947,
            "unit": "ns/iter",
            "extra": "iterations: 380\ncpu: 2454121.0526315826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 2477833.8169761538,
            "unit": "ns/iter",
            "extra": "iterations: 377\ncpu: 2477803.7135278652 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1435252.7418855785,
            "unit": "ns/iter",
            "extra": "iterations: 647\ncpu: 1435245.595054094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 2387269.530612254,
            "unit": "ns/iter",
            "extra": "iterations: 392\ncpu: 2387223.214285716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 10159503.138889173,
            "unit": "ns/iter",
            "extra": "iterations: 108\ncpu: 10159316.666666687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 5830138.827160398,
            "unit": "ns/iter",
            "extra": "iterations: 162\ncpu: 5830050.617283968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 46133.336095201485,
            "unit": "ns/iter",
            "extra": "iterations: 17983\ncpu: 46132.47511538651 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 196083.12926103052,
            "unit": "ns/iter",
            "extra": "iterations: 4371\ncpu: 196082.2923816067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 161089.6943659333,
            "unit": "ns/iter",
            "extra": "iterations: 5307\ncpu: 161087.35632183994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 159258.5832248394,
            "unit": "ns/iter",
            "extra": "iterations: 5377\ncpu: 159253.0035335692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 159068.01322406207,
            "unit": "ns/iter",
            "extra": "iterations: 5369\ncpu: 159062.91674427185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 383161.61896320706,
            "unit": "ns/iter",
            "extra": "iterations: 2257\ncpu: 383154.585733272 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2977776.308917112,
            "unit": "ns/iter",
            "extra": "iterations: 314\ncpu: 2977746.1783439387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 2462509.255263219,
            "unit": "ns/iter",
            "extra": "iterations: 380\ncpu: 2462437.1052631675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 2428797.3446476227,
            "unit": "ns/iter",
            "extra": "iterations: 383\ncpu: 2428724.804177537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 2479561.9602121077,
            "unit": "ns/iter",
            "extra": "iterations: 377\ncpu: 2479425.9946949533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1418313.76407916,
            "unit": "ns/iter",
            "extra": "iterations: 657\ncpu: 1418290.7153729107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 2384698.2933673295,
            "unit": "ns/iter",
            "extra": "iterations: 392\ncpu: 2384579.846938773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 2643.574199479378,
            "unit": "ns/iter",
            "extra": "iterations: 264328\ncpu: 2643.536061257226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 19898.007876703497,
            "unit": "ns/iter",
            "extra": "iterations: 35167\ncpu: 19897.295760229837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 13967.133783594985,
            "unit": "ns/iter",
            "extra": "iterations: 50193\ncpu: 13966.64076664069 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 14486.690130338258,
            "unit": "ns/iter",
            "extra": "iterations: 48259\ncpu: 14485.780890611033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 11228.447643180874,
            "unit": "ns/iter",
            "extra": "iterations: 62351\ncpu: 11228.156725633928 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 87397.92373092812,
            "unit": "ns/iter",
            "extra": "iterations: 7998\ncpu: 87397.13678419562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 180646.69806451476,
            "unit": "ns/iter",
            "extra": "iterations: 3875\ncpu: 180647.09677419672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 47182.592905627804,
            "unit": "ns/iter",
            "extra": "iterations: 15026\ncpu: 47152.22281378962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 45946.20048738801,
            "unit": "ns/iter",
            "extra": "iterations: 15183\ncpu: 45944.78693275317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 46956.67932885926,
            "unit": "ns/iter",
            "extra": "iterations: 14900\ncpu: 46955.09395973171 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 96672.86512205783,
            "unit": "ns/iter",
            "extra": "iterations: 7251\ncpu: 96668.19749000059 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 87387.58608565059,
            "unit": "ns/iter",
            "extra": "iterations: 7963\ncpu: 87385.67122943567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 22444.525021611476,
            "unit": "ns/iter",
            "extra": "iterations: 31233\ncpu: 22444.09758908854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 109747.45570016706,
            "unit": "ns/iter",
            "extra": "iterations: 6377\ncpu: 109746.47953583204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 88714.10143092368,
            "unit": "ns/iter",
            "extra": "iterations: 7897\ncpu: 88710.59896163191 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 87976.75668549833,
            "unit": "ns/iter",
            "extra": "iterations: 7965\ncpu: 87973.69742623974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 90895.0830193601,
            "unit": "ns/iter",
            "extra": "iterations: 7697\ncpu: 90891.87995322852 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 166184.24054247147,
            "unit": "ns/iter",
            "extra": "iterations: 4203\ncpu: 166176.80228408196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 790730.9942791631,
            "unit": "ns/iter",
            "extra": "iterations: 874\ncpu: 790724.1418764313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 670925.9183477695,
            "unit": "ns/iter",
            "extra": "iterations: 1041\ncpu: 670897.2142170955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 661747.1663516456,
            "unit": "ns/iter",
            "extra": "iterations: 1058\ncpu: 661723.9130434801 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 670340.1377990304,
            "unit": "ns/iter",
            "extra": "iterations: 1045\ncpu: 670313.6842105278 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 411776.3429581731,
            "unit": "ns/iter",
            "extra": "iterations: 1697\ncpu: 411755.50972304103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 650798.7925581188,
            "unit": "ns/iter",
            "extra": "iterations: 1075\ncpu: 650762.6976744188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 22562.451184766185,
            "unit": "ns/iter",
            "extra": "iterations: 27727\ncpu: 22562.094709128436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 111494.3736068512,
            "unit": "ns/iter",
            "extra": "iterations: 6191\ncpu: 111493.3290260071 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 89116.33295122265,
            "unit": "ns/iter",
            "extra": "iterations: 7851\ncpu: 89111.69277798978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 88445.49084711415,
            "unit": "ns/iter",
            "extra": "iterations: 7921\ncpu: 88442.96174725323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 89759.86484053476,
            "unit": "ns/iter",
            "extra": "iterations: 7776\ncpu: 89756.7001028813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 168218.25734231822,
            "unit": "ns/iter",
            "extra": "iterations: 4154\ncpu: 168211.5792007687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 792432.0881670478,
            "unit": "ns/iter",
            "extra": "iterations: 862\ncpu: 792425.870069613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 673506.2528957922,
            "unit": "ns/iter",
            "extra": "iterations: 1036\ncpu: 673470.7528957424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 662862.1390728409,
            "unit": "ns/iter",
            "extra": "iterations: 1057\ncpu: 662843.4247871343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 672422.7610364751,
            "unit": "ns/iter",
            "extra": "iterations: 1042\ncpu: 672382.6295585381 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 412176.90667455125,
            "unit": "ns/iter",
            "extra": "iterations: 1693\ncpu: 412159.12581216823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 651310.4376164095,
            "unit": "ns/iter",
            "extra": "iterations: 1074\ncpu: 651270.2979515851 ns\nthreads: 1"
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
          "id": "7f7a954178065768f16bab445a1789e66eddbd11",
          "message": "Add Clang Builds",
          "timestamp": "2023-12-12T14:44:55+03:00",
          "tree_id": "5a4deefbb08f6ba5a30c260d4700f1c6aeccac34",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/7f7a954178065768f16bab445a1789e66eddbd11"
        },
        "date": 1702382260964,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 7982.278424177294,
            "unit": "ns/iter",
            "extra": "iterations: 87751\ncpu: 7981.847500313388 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 97335.29645615924,
            "unit": "ns/iter",
            "extra": "iterations: 8804\ncpu: 97329.25942753295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 188438.8549700121,
            "unit": "ns/iter",
            "extra": "iterations: 4668\ncpu: 188426.97086546704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 282835.3382594402,
            "unit": "ns/iter",
            "extra": "iterations: 3045\ncpu: 282798.62068965525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 365205.1578044629,
            "unit": "ns/iter",
            "extra": "iterations: 2332\ncpu: 365193.010291595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 454095.12845951185,
            "unit": "ns/iter",
            "extra": "iterations: 1915\ncpu: 454073.36814621405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 542818.117206965,
            "unit": "ns/iter",
            "extra": "iterations: 1604\ncpu: 542799.376558603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 507867.67400001053,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 507850.1000000007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 579563.6120000153,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 579557.2 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6212.08182673021,
            "unit": "ns/iter",
            "extra": "iterations: 112726\ncpu: 6211.863279101532 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5088.643748003506,
            "unit": "ns/iter",
            "extra": "iterations: 137748\ncpu: 5088.455730754715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5013.947729281801,
            "unit": "ns/iter",
            "extra": "iterations: 139141\ncpu: 5013.782422147319 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5132.592898743839,
            "unit": "ns/iter",
            "extra": "iterations: 137187\ncpu: 5132.550460320591 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 9008.890739455865,
            "unit": "ns/iter",
            "extra": "iterations: 77814\ncpu: 9008.626982291116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 47580.047719862676,
            "unit": "ns/iter",
            "extra": "iterations: 17477\ncpu: 47579.18979229846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 194047.31477272528,
            "unit": "ns/iter",
            "extra": "iterations: 4400\ncpu: 194039.20454545453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 158830.05336556723,
            "unit": "ns/iter",
            "extra": "iterations: 5378\ncpu: 158828.59799181853 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 157759.39354839487,
            "unit": "ns/iter",
            "extra": "iterations: 5425\ncpu: 157753.21658986204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 159735.23019710477,
            "unit": "ns/iter",
            "extra": "iterations: 5378\ncpu: 159732.40981777615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 382420.8084917983,
            "unit": "ns/iter",
            "extra": "iterations: 2261\ncpu: 382405.1747014601 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 3040732.7702263705,
            "unit": "ns/iter",
            "extra": "iterations: 309\ncpu: 3040644.3365695802 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 2493843.332446881,
            "unit": "ns/iter",
            "extra": "iterations: 376\ncpu: 2493730.5851063775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 2496344.2727272394,
            "unit": "ns/iter",
            "extra": "iterations: 374\ncpu: 2496259.0909090866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 2511607.284946248,
            "unit": "ns/iter",
            "extra": "iterations: 372\ncpu: 2511516.9354838757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1448545.4214619831,
            "unit": "ns/iter",
            "extra": "iterations: 643\ncpu: 1448449.6111975159 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 2424148.751295226,
            "unit": "ns/iter",
            "extra": "iterations: 386\ncpu: 2424005.9585492164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 10111685.942857072,
            "unit": "ns/iter",
            "extra": "iterations: 105\ncpu: 10111238.095238086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 5867040.283019149,
            "unit": "ns/iter",
            "extra": "iterations: 159\ncpu: 5866752.20125788 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 11835756.52222228,
            "unit": "ns/iter",
            "extra": "iterations: 90\ncpu: 11834548.888888897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 47310.330626250354,
            "unit": "ns/iter",
            "extra": "iterations: 17485\ncpu: 47307.457820989344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 209360.83600194863,
            "unit": "ns/iter",
            "extra": "iterations: 4122\ncpu: 209356.9626394947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 164281.12875453866,
            "unit": "ns/iter",
            "extra": "iterations: 5227\ncpu: 164276.90836043537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 159338.90773809463,
            "unit": "ns/iter",
            "extra": "iterations: 5376\ncpu: 159335.73288690447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 161030.5650948745,
            "unit": "ns/iter",
            "extra": "iterations: 5323\ncpu: 161024.77925981558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 398069.71034483373,
            "unit": "ns/iter",
            "extra": "iterations: 2175\ncpu: 398065.8390804592 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 3039049.88888887,
            "unit": "ns/iter",
            "extra": "iterations: 306\ncpu: 3038963.7254901766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 2508014.744623577,
            "unit": "ns/iter",
            "extra": "iterations: 372\ncpu: 2507927.4193548406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 2566745.0350404964,
            "unit": "ns/iter",
            "extra": "iterations: 371\ncpu: 2566674.393530982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 2529461.2270270875,
            "unit": "ns/iter",
            "extra": "iterations: 370\ncpu: 2529399.7297297334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1457080.8281249902,
            "unit": "ns/iter",
            "extra": "iterations: 640\ncpu: 1457015.9375000058 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 2436284.176623415,
            "unit": "ns/iter",
            "extra": "iterations: 385\ncpu: 2436204.6753246696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 10349927.885714091,
            "unit": "ns/iter",
            "extra": "iterations: 105\ncpu: 10349691.42857143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 5914084.949685741,
            "unit": "ns/iter",
            "extra": "iterations: 159\ncpu: 5913855.345911951 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 45593.16246437086,
            "unit": "ns/iter",
            "extra": "iterations: 18244\ncpu: 45590.7257180442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 197087.2635819625,
            "unit": "ns/iter",
            "extra": "iterations: 4344\ncpu: 197076.72651933675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 161115.2302619138,
            "unit": "ns/iter",
            "extra": "iterations: 5307\ncpu: 161105.70944036156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 159958.024995336,
            "unit": "ns/iter",
            "extra": "iterations: 5361\ncpu: 159947.9761238577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 158766.178968841,
            "unit": "ns/iter",
            "extra": "iterations: 5392\ncpu: 158757.15875370897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 388174.388093102,
            "unit": "ns/iter",
            "extra": "iterations: 2234\ncpu: 388154.25246194936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 3009046.7202572944,
            "unit": "ns/iter",
            "extra": "iterations: 311\ncpu: 3008860.4501607725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 2487002.8640001086,
            "unit": "ns/iter",
            "extra": "iterations: 375\ncpu: 2486853.333333329 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 2483551.0346665615,
            "unit": "ns/iter",
            "extra": "iterations: 375\ncpu: 2483407.7333333273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 2493363.7426273897,
            "unit": "ns/iter",
            "extra": "iterations: 373\ncpu: 2493312.600536196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1441163.1284829916,
            "unit": "ns/iter",
            "extra": "iterations: 646\ncpu: 1441087.6160990738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 2419862.162790669,
            "unit": "ns/iter",
            "extra": "iterations: 387\ncpu: 2419706.4599483255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 2693.7937977602855,
            "unit": "ns/iter",
            "extra": "iterations: 260938\ncpu: 2693.626455326547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 20124.089359385274,
            "unit": "ns/iter",
            "extra": "iterations: 34904\ncpu: 20122.6879440751 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 15581.026053929236,
            "unit": "ns/iter",
            "extra": "iterations: 45022\ncpu: 15580.738305717354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 14506.051479571666,
            "unit": "ns/iter",
            "extra": "iterations: 48291\ncpu: 14505.37781367136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 11746.447183687087,
            "unit": "ns/iter",
            "extra": "iterations: 59830\ncpu: 11745.298345311703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 89282.33754950312,
            "unit": "ns/iter",
            "extra": "iterations: 7827\ncpu: 89276.92602529729 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 191470.80230325667,
            "unit": "ns/iter",
            "extra": "iterations: 3647\ncpu: 191461.5848642746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 47045.80933512527,
            "unit": "ns/iter",
            "extra": "iterations: 14890\ncpu: 47044.91605104133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 46951.955018465924,
            "unit": "ns/iter",
            "extra": "iterations: 14895\ncpu: 46950.47331319284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 47455.10174083855,
            "unit": "ns/iter",
            "extra": "iterations: 14763\ncpu: 47453.71536950489 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 98293.62659738703,
            "unit": "ns/iter",
            "extra": "iterations: 7121\ncpu: 98290.81589664219 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 88394.19352380857,
            "unit": "ns/iter",
            "extra": "iterations: 7875\ncpu: 88392.35555555501 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 22886.21857044367,
            "unit": "ns/iter",
            "extra": "iterations: 30457\ncpu: 22885.514003349224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 112521.49275595191,
            "unit": "ns/iter",
            "extra": "iterations: 6212\ncpu: 112520.57308435197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 90353.04269315276,
            "unit": "ns/iter",
            "extra": "iterations: 7753\ncpu: 90345.31149232546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 89986.92456951574,
            "unit": "ns/iter",
            "extra": "iterations: 7782\ncpu: 89980.36494474435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 92114.86567752202,
            "unit": "ns/iter",
            "extra": "iterations: 7616\ncpu: 92111.41018907574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 169825.82151530773,
            "unit": "ns/iter",
            "extra": "iterations: 4118\ncpu: 169822.53521126616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 798281.44114286,
            "unit": "ns/iter",
            "extra": "iterations: 875\ncpu: 798234.7428571432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 688415.6171259532,
            "unit": "ns/iter",
            "extra": "iterations: 1016\ncpu: 688396.9488188919 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 681267.5477583033,
            "unit": "ns/iter",
            "extra": "iterations: 1026\ncpu: 681253.4113060416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 685252.5328109789,
            "unit": "ns/iter",
            "extra": "iterations: 1021\ncpu: 685225.7590597386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 420633.07886817295,
            "unit": "ns/iter",
            "extra": "iterations: 1661\ncpu: 420614.32871764124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 665476.0504281407,
            "unit": "ns/iter",
            "extra": "iterations: 1051\ncpu: 665463.6536631805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 22767.117270095096,
            "unit": "ns/iter",
            "extra": "iterations: 30741\ncpu: 22766.159201067003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 113908.21974988302,
            "unit": "ns/iter",
            "extra": "iterations: 6157\ncpu: 113905.78203670493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 91026.08641974787,
            "unit": "ns/iter",
            "extra": "iterations: 7695\ncpu: 91022.53411306093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 91066.01975308097,
            "unit": "ns/iter",
            "extra": "iterations: 7695\ncpu: 91062.84600389744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 92071.3287689246,
            "unit": "ns/iter",
            "extra": "iterations: 7595\ncpu: 92068.84792626831 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 172069.74163386234,
            "unit": "ns/iter",
            "extra": "iterations: 4064\ncpu: 172065.84645669116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 797022.5689851907,
            "unit": "ns/iter",
            "extra": "iterations: 877\ncpu: 797007.2976054673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 684435.1502438879,
            "unit": "ns/iter",
            "extra": "iterations: 1025\ncpu: 684416.780487806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 680942.4951361754,
            "unit": "ns/iter",
            "extra": "iterations: 1028\ncpu: 680936.8677042837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 683561.1697560925,
            "unit": "ns/iter",
            "extra": "iterations: 1025\ncpu: 683543.9999999919 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 421670.5340156691,
            "unit": "ns/iter",
            "extra": "iterations: 1661\ncpu: 421660.9271523239 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 664718.3593155792,
            "unit": "ns/iter",
            "extra": "iterations: 1052\ncpu: 664699.7148288912 ns\nthreads: 1"
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
          "id": "7d92f1613fa4ae9edff977fb9a4ee38db56bedcc",
          "message": "Enable another Clangs : try",
          "timestamp": "2023-12-12T16:01:28+03:00",
          "tree_id": "088c43bf274cde79393a5114d044a347c612360f",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/7d92f1613fa4ae9edff977fb9a4ee38db56bedcc"
        },
        "date": 1702387051111,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 7990.953648509936,
            "unit": "ns/iter",
            "extra": "iterations: 87570\ncpu: 7990.655475619505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 97207.90910124259,
            "unit": "ns/iter",
            "extra": "iterations: 8801\ncpu: 97205.47665038063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 188111.91525423765,
            "unit": "ns/iter",
            "extra": "iterations: 4661\ncpu: 188108.43166702418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 282036.03874958004,
            "unit": "ns/iter",
            "extra": "iterations: 3071\ncpu: 282032.92087267997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 366509.28479382384,
            "unit": "ns/iter",
            "extra": "iterations: 2328\ncpu: 366510.48109965643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 455133.0151991591,
            "unit": "ns/iter",
            "extra": "iterations: 1908\ncpu: 455106.0796645704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 544981.149906297,
            "unit": "ns/iter",
            "extra": "iterations: 1601\ncpu: 544954.0287320426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 509484.29400000355,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 509425.30000000016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 590724.0609999462,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 590678.9999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6149.464190376224,
            "unit": "ns/iter",
            "extra": "iterations: 113880\ncpu: 6149.393220934309 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5079.1987119117475,
            "unit": "ns/iter",
            "extra": "iterations: 138034\ncpu: 5078.99213237319 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5024.855673661916,
            "unit": "ns/iter",
            "extra": "iterations: 139046\ncpu: 5024.668095450428 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5143.020961118206,
            "unit": "ns/iter",
            "extra": "iterations: 133199\ncpu: 5142.86668818836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 9057.809719273451,
            "unit": "ns/iter",
            "extra": "iterations: 77228\ncpu: 9057.60087015072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 45874.995233872236,
            "unit": "ns/iter",
            "extra": "iterations: 18044\ncpu: 45873.26535136331 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 194630.99499658745,
            "unit": "ns/iter",
            "extra": "iterations: 4397\ncpu: 194621.30998407988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 159337.16601526507,
            "unit": "ns/iter",
            "extra": "iterations: 5373\ncpu: 159331.60245672823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 158444.2699704203,
            "unit": "ns/iter",
            "extra": "iterations: 5408\ncpu: 158436.98224852097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 162583.97886540068,
            "unit": "ns/iter",
            "extra": "iterations: 5394\ncpu: 162578.51316277366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 380985.73498233117,
            "unit": "ns/iter",
            "extra": "iterations: 2264\ncpu: 380963.33922261564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 3005843.7795527116,
            "unit": "ns/iter",
            "extra": "iterations: 313\ncpu: 3005686.900958467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 2467357.325396839,
            "unit": "ns/iter",
            "extra": "iterations: 378\ncpu: 2467183.0687830728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 2451705.102362241,
            "unit": "ns/iter",
            "extra": "iterations: 381\ncpu: 2451599.475065623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 2490139.4826665637,
            "unit": "ns/iter",
            "extra": "iterations: 375\ncpu: 2490145.599999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1452655.884914496,
            "unit": "ns/iter",
            "extra": "iterations: 643\ncpu: 1452595.8009331268 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 2392486.1615384067,
            "unit": "ns/iter",
            "extra": "iterations: 390\ncpu: 2392492.0512820557 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 10081810.180952288,
            "unit": "ns/iter",
            "extra": "iterations: 105\ncpu: 10081182.857142866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 5747832.435582827,
            "unit": "ns/iter",
            "extra": "iterations: 163\ncpu: 5747636.196319024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 11800671.780220298,
            "unit": "ns/iter",
            "extra": "iterations: 91\ncpu: 11800308.79120879 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 47396.01426126865,
            "unit": "ns/iter",
            "extra": "iterations: 17530\ncpu: 47393.85624643469 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 198926.20543806494,
            "unit": "ns/iter",
            "extra": "iterations: 4303\ncpu: 198923.9832674882 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 163428.7355686771,
            "unit": "ns/iter",
            "extra": "iterations: 5249\ncpu: 163419.35606782275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 163846.85047779838,
            "unit": "ns/iter",
            "extra": "iterations: 5337\ncpu: 163847.27374929763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 163120.49504384433,
            "unit": "ns/iter",
            "extra": "iterations: 5246\ncpu: 163112.18070911255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 395830.6527714316,
            "unit": "ns/iter",
            "extra": "iterations: 2183\ncpu: 395827.2102611084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2995462.7363344235,
            "unit": "ns/iter",
            "extra": "iterations: 311\ncpu: 2995381.028938916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 2481202.247340504,
            "unit": "ns/iter",
            "extra": "iterations: 376\ncpu: 2481167.021276585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 2465125.568421088,
            "unit": "ns/iter",
            "extra": "iterations: 380\ncpu: 2465129.7368421117 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 2498065.983999974,
            "unit": "ns/iter",
            "extra": "iterations: 375\ncpu: 2497905.3333333354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1449405.323987588,
            "unit": "ns/iter",
            "extra": "iterations: 642\ncpu: 1449361.993769476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 2394871.933333247,
            "unit": "ns/iter",
            "extra": "iterations: 390\ncpu: 2394633.589743587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 10310689.349056646,
            "unit": "ns/iter",
            "extra": "iterations: 106\ncpu: 10310361.320754733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 5771740.024691584,
            "unit": "ns/iter",
            "extra": "iterations: 162\ncpu: 5771574.074074078 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 46201.243799355296,
            "unit": "ns/iter",
            "extra": "iterations: 17982\ncpu: 46198.99899899896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 196116.9290959197,
            "unit": "ns/iter",
            "extra": "iterations: 4358\ncpu: 196117.37035337382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 160898.26028942037,
            "unit": "ns/iter",
            "extra": "iterations: 5321\ncpu: 160884.98402556006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 159235.5270119202,
            "unit": "ns/iter",
            "extra": "iterations: 5368\ncpu: 159229.4895678097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 159636.0752005902,
            "unit": "ns/iter",
            "extra": "iterations: 5359\ncpu: 159620.3022952043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 383760.9196983209,
            "unit": "ns/iter",
            "extra": "iterations: 2254\ncpu: 383748.9352262616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2983182.5207668063,
            "unit": "ns/iter",
            "extra": "iterations: 313\ncpu: 2982970.6070287446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 2465870.8541114624,
            "unit": "ns/iter",
            "extra": "iterations: 377\ncpu: 2465855.1724137957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 2440509.408376905,
            "unit": "ns/iter",
            "extra": "iterations: 382\ncpu: 2440428.272251308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 2527656.5718085226,
            "unit": "ns/iter",
            "extra": "iterations: 376\ncpu: 2527540.425531907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1481363.471962608,
            "unit": "ns/iter",
            "extra": "iterations: 642\ncpu: 1481216.6666666688 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 2397744.464102603,
            "unit": "ns/iter",
            "extra": "iterations: 390\ncpu: 2397675.641025643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 2676.471369611687,
            "unit": "ns/iter",
            "extra": "iterations: 261680\ncpu: 2676.4743197798853 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 20232.88972131549,
            "unit": "ns/iter",
            "extra": "iterations: 34304\ncpu: 20232.214902052212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 15820.48781093954,
            "unit": "ns/iter",
            "extra": "iterations: 44261\ncpu: 15820.507896342173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 14572.987343082972,
            "unit": "ns/iter",
            "extra": "iterations: 48274\ncpu: 14571.375895927396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 11762.164551863632,
            "unit": "ns/iter",
            "extra": "iterations: 59580\ncpu: 11761.582745887916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 89443.95886034986,
            "unit": "ns/iter",
            "extra": "iterations: 7827\ncpu: 89443.09441676187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 181476.28712100416,
            "unit": "ns/iter",
            "extra": "iterations: 3859\ncpu: 181455.89530966448 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 46735.04426840734,
            "unit": "ns/iter",
            "extra": "iterations: 15022\ncpu: 46734.06337371809 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 46208.33414795443,
            "unit": "ns/iter",
            "extra": "iterations: 15140\ncpu: 46208.0911492734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 47394.40334258142,
            "unit": "ns/iter",
            "extra": "iterations: 14779\ncpu: 47391.18343595637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 98760.59803508996,
            "unit": "ns/iter",
            "extra": "iterations: 7125\ncpu: 98760.1122807012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 88098.34942499803,
            "unit": "ns/iter",
            "extra": "iterations: 7913\ncpu: 88096.53734361073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 23125.741071427885,
            "unit": "ns/iter",
            "extra": "iterations: 30240\ncpu: 23125.304232804297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 111602.77309588631,
            "unit": "ns/iter",
            "extra": "iterations: 6289\ncpu: 111600.5883288282 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 90102.76208226552,
            "unit": "ns/iter",
            "extra": "iterations: 7780\ncpu: 90096.68380462767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 89507.24932873434,
            "unit": "ns/iter",
            "extra": "iterations: 7821\ncpu: 89498.86203810258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 91718.69984285056,
            "unit": "ns/iter",
            "extra": "iterations: 7636\ncpu: 91711.26244106829 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 170779.58691406882,
            "unit": "ns/iter",
            "extra": "iterations: 4096\ncpu: 170757.86132812742 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 804751.1127562771,
            "unit": "ns/iter",
            "extra": "iterations: 878\ncpu: 804678.3599088942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 680451.8359223101,
            "unit": "ns/iter",
            "extra": "iterations: 1030\ncpu: 680404.4660194137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 668755.9990449285,
            "unit": "ns/iter",
            "extra": "iterations: 1047\ncpu: 668672.970391594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 682112.9902818272,
            "unit": "ns/iter",
            "extra": "iterations: 1029\ncpu: 682042.5655976722 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 419941.31380752684,
            "unit": "ns/iter",
            "extra": "iterations: 1673\ncpu: 419905.02092049737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 659750.2618147668,
            "unit": "ns/iter",
            "extra": "iterations: 1058\ncpu: 659687.8071833603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 22837.033022418538,
            "unit": "ns/iter",
            "extra": "iterations: 30555\ncpu: 22833.978072328315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 115997.0760071742,
            "unit": "ns/iter",
            "extra": "iterations: 6131\ncpu: 115988.09329636284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 90513.4276477431,
            "unit": "ns/iter",
            "extra": "iterations: 7733\ncpu: 90508.45726108889 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 89971.63560303915,
            "unit": "ns/iter",
            "extra": "iterations: 7769\ncpu: 89969.99613849801 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 90699.50699301106,
            "unit": "ns/iter",
            "extra": "iterations: 7722\ncpu: 90692.94224294189 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 171533.8176700944,
            "unit": "ns/iter",
            "extra": "iterations: 4086\ncpu: 171514.85560450162 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 794516.4715262031,
            "unit": "ns/iter",
            "extra": "iterations: 878\ncpu: 794440.2050113907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 683346.4309338675,
            "unit": "ns/iter",
            "extra": "iterations: 1028\ncpu: 683274.416342403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 675328.7996089581,
            "unit": "ns/iter",
            "extra": "iterations: 1023\ncpu: 675314.173998043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 685345.5823529412,
            "unit": "ns/iter",
            "extra": "iterations: 1020\ncpu: 685293.1372549025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 419410.02816058625,
            "unit": "ns/iter",
            "extra": "iterations: 1669\ncpu: 419388.7357699233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 661703.665094326,
            "unit": "ns/iter",
            "extra": "iterations: 1060\ncpu: 661649.6226415121 ns\nthreads: 1"
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
          "id": "d1143eedaeca215bd4d59936eed187ebbc5a2705",
          "message": "uncomment",
          "timestamp": "2023-12-12T16:24:18+03:00",
          "tree_id": "24d13ef9110c03a703c985f6237d2ba22581ead7",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/d1143eedaeca215bd4d59936eed187ebbc5a2705"
        },
        "date": 1702388115222,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 7971.124370456656,
            "unit": "ns/iter",
            "extra": "iterations: 87762\ncpu: 7970.832478749345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 95028.53590056598,
            "unit": "ns/iter",
            "extra": "iterations: 9011\ncpu: 95028.06569748085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 184648.92945622033,
            "unit": "ns/iter",
            "extra": "iterations: 4763\ncpu: 184648.60382112107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 276603.6934866002,
            "unit": "ns/iter",
            "extra": "iterations: 3132\ncpu: 276603.288633461 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 358084.87552564,
            "unit": "ns/iter",
            "extra": "iterations: 2378\ncpu: 358075.0630782172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 445510.4769467021,
            "unit": "ns/iter",
            "extra": "iterations: 1952\ncpu: 445510.39959016384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 533091.3581907164,
            "unit": "ns/iter",
            "extra": "iterations: 1636\ncpu: 533083.1295843523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 620478.6943852553,
            "unit": "ns/iter",
            "extra": "iterations: 1407\ncpu: 620438.4506041224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 568390.7030000341,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 568378.1999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6278.48081658275,
            "unit": "ns/iter",
            "extra": "iterations: 111685\ncpu: 6278.274611630932 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5119.03198244488,
            "unit": "ns/iter",
            "extra": "iterations: 137169\ncpu: 5118.728721504119 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5034.605168334255,
            "unit": "ns/iter",
            "extra": "iterations: 139039\ncpu: 5034.682355310377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5117.178098184842,
            "unit": "ns/iter",
            "extra": "iterations: 137048\ncpu: 5116.8459225964625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 9038.717909965877,
            "unit": "ns/iter",
            "extra": "iterations: 77415\ncpu: 9038.595879351562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 46255.13173184496,
            "unit": "ns/iter",
            "extra": "iterations: 17900\ncpu: 46253.078212290486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 197333.87741491274,
            "unit": "ns/iter",
            "extra": "iterations: 4348\ncpu: 197329.8758049676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 160809.74167601482,
            "unit": "ns/iter",
            "extra": "iterations: 5346\ncpu: 160801.3468013467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 158439.2662590339,
            "unit": "ns/iter",
            "extra": "iterations: 5397\ncpu: 158436.668519548 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 160023.41856131316,
            "unit": "ns/iter",
            "extra": "iterations: 5366\ncpu: 160016.39955273923 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 378755.3731408436,
            "unit": "ns/iter",
            "extra": "iterations: 2286\ncpu: 378741.07611548546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2991339.7278479827,
            "unit": "ns/iter",
            "extra": "iterations: 316\ncpu: 2991255.3797468315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 2476692.3463541702,
            "unit": "ns/iter",
            "extra": "iterations: 384\ncpu: 2476632.5520833298 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 2412241.620154994,
            "unit": "ns/iter",
            "extra": "iterations: 387\ncpu: 2412154.5219638254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 2448631.023560181,
            "unit": "ns/iter",
            "extra": "iterations: 382\ncpu: 2448521.727748687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1421586.8887195603,
            "unit": "ns/iter",
            "extra": "iterations: 656\ncpu: 1421555.6402439051 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 2355606.361111216,
            "unit": "ns/iter",
            "extra": "iterations: 396\ncpu: 2355464.1414141413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 9871053.425925951,
            "unit": "ns/iter",
            "extra": "iterations: 108\ncpu: 9870461.111111108 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 5418708.537572089,
            "unit": "ns/iter",
            "extra": "iterations: 173\ncpu: 5418499.9999999935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 11565954.413043138,
            "unit": "ns/iter",
            "extra": "iterations: 92\ncpu: 11565720.652173888 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 46651.774422532755,
            "unit": "ns/iter",
            "extra": "iterations: 17750\ncpu: 46651.01408450712 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 203836.77165914743,
            "unit": "ns/iter",
            "extra": "iterations: 4213\ncpu: 203826.9166864473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 163783.0929254276,
            "unit": "ns/iter",
            "extra": "iterations: 5230\ncpu: 163781.95028680755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 160742.4191066096,
            "unit": "ns/iter",
            "extra": "iterations: 5328\ncpu: 160735.86711711745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 165922.4852352791,
            "unit": "ns/iter",
            "extra": "iterations: 5249\ncpu: 165919.14650409552 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 386023.62092087604,
            "unit": "ns/iter",
            "extra": "iterations: 2237\ncpu: 386002.90567724744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2989520.6900959425,
            "unit": "ns/iter",
            "extra": "iterations: 313\ncpu: 2989496.166134181 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 2454218.685039394,
            "unit": "ns/iter",
            "extra": "iterations: 381\ncpu: 2454092.6509186467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 2441361.14621408,
            "unit": "ns/iter",
            "extra": "iterations: 383\ncpu: 2441261.096605749 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 2443936.0523561044,
            "unit": "ns/iter",
            "extra": "iterations: 382\ncpu: 2443860.9947643904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1425003.3211008671,
            "unit": "ns/iter",
            "extra": "iterations: 654\ncpu: 1424978.4403669713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 2378349.784810239,
            "unit": "ns/iter",
            "extra": "iterations: 395\ncpu: 2378311.8987341677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 10266947.594339868,
            "unit": "ns/iter",
            "extra": "iterations: 106\ncpu: 10266390.566037774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 5496603.670588443,
            "unit": "ns/iter",
            "extra": "iterations: 170\ncpu: 5496634.117647069 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 45796.17806857917,
            "unit": "ns/iter",
            "extra": "iterations: 18111\ncpu: 45793.94290762534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 202998.10794781052,
            "unit": "ns/iter",
            "extra": "iterations: 4215\ncpu: 202984.29418742502 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 161405.24006778162,
            "unit": "ns/iter",
            "extra": "iterations: 5311\ncpu: 161395.1986443222 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 160640.40198278785,
            "unit": "ns/iter",
            "extra": "iterations: 5346\ncpu: 160635.76505798803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 160494.26827896608,
            "unit": "ns/iter",
            "extra": "iterations: 5334\ncpu: 160488.6764154479 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 373441.335060461,
            "unit": "ns/iter",
            "extra": "iterations: 2316\ncpu: 373427.2020725412 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2947015.9433963117,
            "unit": "ns/iter",
            "extra": "iterations: 318\ncpu: 2947004.7169811153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 2433030.2656248766,
            "unit": "ns/iter",
            "extra": "iterations: 384\ncpu: 2432867.9687500116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 2415166.1632124567,
            "unit": "ns/iter",
            "extra": "iterations: 386\ncpu: 2413511.139896366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 2425133.6857142253,
            "unit": "ns/iter",
            "extra": "iterations: 385\ncpu: 2424985.4545454485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1420633.4916031372,
            "unit": "ns/iter",
            "extra": "iterations: 655\ncpu: 1420607.6335877862 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 2352617.755667452,
            "unit": "ns/iter",
            "extra": "iterations: 397\ncpu: 2352509.0680100755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 2725.020393251137,
            "unit": "ns/iter",
            "extra": "iterations: 257291\ncpu: 2724.8640644250945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 19978.24328026055,
            "unit": "ns/iter",
            "extra": "iterations: 35046\ncpu: 19977.144324601977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 15552.653246840364,
            "unit": "ns/iter",
            "extra": "iterations: 44859\ncpu: 15552.44209634623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 15148.495871707992,
            "unit": "ns/iter",
            "extra": "iterations: 46145\ncpu: 15148.10271968792 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 11636.62629809668,
            "unit": "ns/iter",
            "extra": "iterations: 60088\ncpu: 11636.340034616003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 87555.18652332108,
            "unit": "ns/iter",
            "extra": "iterations: 7999\ncpu: 87551.88148518567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 189111.95650998806,
            "unit": "ns/iter",
            "extra": "iterations: 3702\ncpu: 189109.61642355524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 46377.41597139642,
            "unit": "ns/iter",
            "extra": "iterations: 15102\ncpu: 46373.50019864891 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 45955.36533665649,
            "unit": "ns/iter",
            "extra": "iterations: 15238\ncpu: 45954.93503084355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 46505.21130596497,
            "unit": "ns/iter",
            "extra": "iterations: 15054\ncpu: 46502.65710110283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 96276.81064356738,
            "unit": "ns/iter",
            "extra": "iterations: 7272\ncpu: 96278.34158415768 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 86809.39789212566,
            "unit": "ns/iter",
            "extra": "iterations: 8065\ncpu: 86804.02975821444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 22876.451583414997,
            "unit": "ns/iter",
            "extra": "iterations: 30630\ncpu: 22875.91250408095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 110928.75223499593,
            "unit": "ns/iter",
            "extra": "iterations: 6264\ncpu: 110923.65900383203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 89310.92754919661,
            "unit": "ns/iter",
            "extra": "iterations: 7826\ncpu: 89307.41119345755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 88425.84042553327,
            "unit": "ns/iter",
            "extra": "iterations: 7896\ncpu: 88424.70871327206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 89903.36957638043,
            "unit": "ns/iter",
            "extra": "iterations: 7790\ncpu: 89901.19383825475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 168612.32629279594,
            "unit": "ns/iter",
            "extra": "iterations: 4119\ncpu: 168604.34571497753 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 799295.6925675485,
            "unit": "ns/iter",
            "extra": "iterations: 888\ncpu: 798946.7342342321 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 668389.6829501574,
            "unit": "ns/iter",
            "extra": "iterations: 1044\ncpu: 668363.5057471282 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 656301.097652557,
            "unit": "ns/iter",
            "extra": "iterations: 1065\ncpu: 656291.54929577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 664983.0607787486,
            "unit": "ns/iter",
            "extra": "iterations: 1053\ncpu: 664964.957264955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 411559.2168532648,
            "unit": "ns/iter",
            "extra": "iterations: 1697\ncpu: 411565.64525633544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 650853.802790734,
            "unit": "ns/iter",
            "extra": "iterations: 1075\ncpu: 650830.8837209274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 22578.453452775284,
            "unit": "ns/iter",
            "extra": "iterations: 31033\ncpu: 22578.812876615542 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 112871.16411413853,
            "unit": "ns/iter",
            "extra": "iterations: 6203\ncpu: 112868.09608254193 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 89664.61962090309,
            "unit": "ns/iter",
            "extra": "iterations: 7808\ncpu: 89662.83299180341 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 88539.170540678,
            "unit": "ns/iter",
            "extra": "iterations: 7916\ncpu: 88534.72713491699 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 90484.70405266204,
            "unit": "ns/iter",
            "extra": "iterations: 7748\ncpu: 90483.42798141361 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 165637.71065749624,
            "unit": "ns/iter",
            "extra": "iterations: 4213\ncpu: 165640.37502966952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 790244.6241534833,
            "unit": "ns/iter",
            "extra": "iterations: 886\ncpu: 790204.7404063211 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 670490.8275862217,
            "unit": "ns/iter",
            "extra": "iterations: 1044\ncpu: 670473.084291191 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 660704.0387523486,
            "unit": "ns/iter",
            "extra": "iterations: 1058\ncpu: 660664.7448015073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 668261.3810888033,
            "unit": "ns/iter",
            "extra": "iterations: 1047\ncpu: 668253.0085959865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 412344.81132077007,
            "unit": "ns/iter",
            "extra": "iterations: 1696\ncpu: 412339.09198112664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 650075.9619312958,
            "unit": "ns/iter",
            "extra": "iterations: 1077\ncpu: 650056.4531104963 ns\nthreads: 1"
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
          "id": "89047ca37b911c271e1749e8de13632f782d585c",
          "message": "cmt clang 15 build",
          "timestamp": "2023-12-12T16:57:18+03:00",
          "tree_id": "2f2c9ed08ef5734141953c56ba19061c15b85598",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/89047ca37b911c271e1749e8de13632f782d585c"
        },
        "date": 1702390781071,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 7881.784419314696,
            "unit": "ns/iter",
            "extra": "iterations: 89136\ncpu: 7881.752602764315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 97253.96845927485,
            "unit": "ns/iter",
            "extra": "iterations: 8814\ncpu: 97252.90447016111 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 188939.2037355036,
            "unit": "ns/iter",
            "extra": "iterations: 4658\ncpu: 188941.26234435374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 283709.84325916774,
            "unit": "ns/iter",
            "extra": "iterations: 3056\ncpu: 283702.6832460733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 367741.77993110655,
            "unit": "ns/iter",
            "extra": "iterations: 2322\ncpu: 367735.0559862187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 460979.19779645157,
            "unit": "ns/iter",
            "extra": "iterations: 1906\ncpu: 460969.4648478485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 548969.6273252134,
            "unit": "ns/iter",
            "extra": "iterations: 1559\ncpu: 548959.0121872996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 514340.3449999937,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 514321.99999999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 584764.3729999845,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 584771.100000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6248.083356381352,
            "unit": "ns/iter",
            "extra": "iterations: 112085\ncpu: 6247.883302850511 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5100.334198061678,
            "unit": "ns/iter",
            "extra": "iterations: 137230\ncpu: 5100.158857392706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4920.929190548586,
            "unit": "ns/iter",
            "extra": "iterations: 142368\ncpu: 4920.749747134187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5135.291518838817,
            "unit": "ns/iter",
            "extra": "iterations: 136420\ncpu: 5135.272687289261 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 9107.17240347543,
            "unit": "ns/iter",
            "extra": "iterations: 76872\ncpu: 9106.941409095643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 45981.909717206385,
            "unit": "ns/iter",
            "extra": "iterations: 17999\ncpu: 45980.760042224654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 196469.30282975538,
            "unit": "ns/iter",
            "extra": "iterations: 4382\ncpu: 196464.28571428583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 163974.80991421273,
            "unit": "ns/iter",
            "extra": "iterations: 5245\ncpu: 163968.67492850331 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 162561.48103186223,
            "unit": "ns/iter",
            "extra": "iterations: 5272\ncpu: 162554.70409711663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 162290.33257403134,
            "unit": "ns/iter",
            "extra": "iterations: 5268\ncpu: 162284.24449506472 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 377731.2931184712,
            "unit": "ns/iter",
            "extra": "iterations: 2296\ncpu: 377712.5871080148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 3037504.1168830628,
            "unit": "ns/iter",
            "extra": "iterations: 308\ncpu: 3037365.5844155913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 2501799.568000024,
            "unit": "ns/iter",
            "extra": "iterations: 375\ncpu: 2501746.133333332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 2467847.124010544,
            "unit": "ns/iter",
            "extra": "iterations: 379\ncpu: 2467756.2005277076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 2525951.2899729116,
            "unit": "ns/iter",
            "extra": "iterations: 369\ncpu: 2525857.4525745236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1477037.1650794032,
            "unit": "ns/iter",
            "extra": "iterations: 630\ncpu: 1476985.7142857192 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 2425888.8207791406,
            "unit": "ns/iter",
            "extra": "iterations: 385\ncpu: 2425820.0000000023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 10324511.16504856,
            "unit": "ns/iter",
            "extra": "iterations: 103\ncpu: 10324348.543689335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 5751541.44171797,
            "unit": "ns/iter",
            "extra": "iterations: 163\ncpu: 5751201.226993859 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 11947008.977777312,
            "unit": "ns/iter",
            "extra": "iterations: 90\ncpu: 11946537.77777776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 47424.7950852598,
            "unit": "ns/iter",
            "extra": "iterations: 17417\ncpu: 47423.56892691053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 200452.13210193568,
            "unit": "ns/iter",
            "extra": "iterations: 4277\ncpu: 200448.63221884455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 165437.81974167138,
            "unit": "ns/iter",
            "extra": "iterations: 5187\ncpu: 165435.26122999797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 162627.90239270663,
            "unit": "ns/iter",
            "extra": "iterations: 5266\ncpu: 162624.51576148794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 164394.01263158236,
            "unit": "ns/iter",
            "extra": "iterations: 5225\ncpu: 164391.23444976006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 377495.8555846467,
            "unit": "ns/iter",
            "extra": "iterations: 2292\ncpu: 377485.68935427454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 3049090.592833959,
            "unit": "ns/iter",
            "extra": "iterations: 307\ncpu: 3049025.0814332333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 2522281.312668577,
            "unit": "ns/iter",
            "extra": "iterations: 371\ncpu: 2522139.8921832973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 2482323.588859448,
            "unit": "ns/iter",
            "extra": "iterations: 377\ncpu: 2482256.233421741 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 2549686.1198909287,
            "unit": "ns/iter",
            "extra": "iterations: 367\ncpu: 2549601.0899182465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1467055.5532915406,
            "unit": "ns/iter",
            "extra": "iterations: 638\ncpu: 1467018.4952978122 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 2433129.7402596506,
            "unit": "ns/iter",
            "extra": "iterations: 385\ncpu: 2433051.4285714296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 10461743.647619229,
            "unit": "ns/iter",
            "extra": "iterations: 105\ncpu: 10461501.90476188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 5617570.592814396,
            "unit": "ns/iter",
            "extra": "iterations: 167\ncpu: 5617383.832335368 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 45656.73226784315,
            "unit": "ns/iter",
            "extra": "iterations: 18145\ncpu: 45655.69027280254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 206526.15072464323,
            "unit": "ns/iter",
            "extra": "iterations: 4140\ncpu: 206522.63285024095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 163889.20822966096,
            "unit": "ns/iter",
            "extra": "iterations: 5225\ncpu: 163883.46411483255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 158595.70738952555,
            "unit": "ns/iter",
            "extra": "iterations: 5386\ncpu: 158596.17526921674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 159581.6401650085,
            "unit": "ns/iter",
            "extra": "iterations: 5333\ncpu: 159580.0300018753 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 370005.26415092434,
            "unit": "ns/iter",
            "extra": "iterations: 2332\ncpu: 369995.8833619211 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 3033209.1298702555,
            "unit": "ns/iter",
            "extra": "iterations: 308\ncpu: 3033087.9870129856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 2498506.490616701,
            "unit": "ns/iter",
            "extra": "iterations: 373\ncpu: 2498458.7131367316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 2460409.907651603,
            "unit": "ns/iter",
            "extra": "iterations: 379\ncpu: 2460308.707124009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 2532219.0189701957,
            "unit": "ns/iter",
            "extra": "iterations: 369\ncpu: 2532225.4742547437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1462658.3029827285,
            "unit": "ns/iter",
            "extra": "iterations: 637\ncpu: 1462622.76295133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 2423444.733160623,
            "unit": "ns/iter",
            "extra": "iterations: 386\ncpu: 2423411.9170984463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 2674.673787416211,
            "unit": "ns/iter",
            "extra": "iterations: 261817\ncpu: 2674.6238785105443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 20797.209270580865,
            "unit": "ns/iter",
            "extra": "iterations: 33698\ncpu: 20797.047302510582 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 14953.537241320457,
            "unit": "ns/iter",
            "extra": "iterations: 46776\ncpu: 14953.25380537034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 15544.459043309342,
            "unit": "ns/iter",
            "extra": "iterations: 45072\ncpu: 15544.630812921643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 12127.96023952897,
            "unit": "ns/iter",
            "extra": "iterations: 57947\ncpu: 12127.48200942243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 85646.79280487869,
            "unit": "ns/iter",
            "extra": "iterations: 8200\ncpu: 85646.98780487794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 192022.62667029983,
            "unit": "ns/iter",
            "extra": "iterations: 3667\ncpu: 192015.5713116975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 47049.32731906794,
            "unit": "ns/iter",
            "extra": "iterations: 14909\ncpu: 47049.889328593854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 46603.29814369658,
            "unit": "ns/iter",
            "extra": "iterations: 14976\ncpu: 46601.308760684034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 47439.391310248735,
            "unit": "ns/iter",
            "extra": "iterations: 14730\ncpu: 47439.416157501786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 99071.88362862806,
            "unit": "ns/iter",
            "extra": "iterations: 7055\ncpu: 99067.41318213947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 83519.92128141287,
            "unit": "ns/iter",
            "extra": "iterations: 8397\ncpu: 83520.87650351254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 22694.834906118933,
            "unit": "ns/iter",
            "extra": "iterations: 30837\ncpu: 22694.2341991765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 110081.74681353029,
            "unit": "ns/iter",
            "extra": "iterations: 6355\ncpu: 110081.55782848083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 88781.2253682025,
            "unit": "ns/iter",
            "extra": "iterations: 7876\ncpu: 88778.94870492679 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 88188.1760181543,
            "unit": "ns/iter",
            "extra": "iterations: 7931\ncpu: 88187.25255327209 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 90172.47979927901,
            "unit": "ns/iter",
            "extra": "iterations: 7772\ncpu: 90173.48172928432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 164789.85899246545,
            "unit": "ns/iter",
            "extra": "iterations: 4248\ncpu: 164782.9096045177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 822016.3538812792,
            "unit": "ns/iter",
            "extra": "iterations: 876\ncpu: 822016.3242009033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 684047.9980430452,
            "unit": "ns/iter",
            "extra": "iterations: 1022\ncpu: 684026.1252446155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 667771.6391554495,
            "unit": "ns/iter",
            "extra": "iterations: 1042\ncpu: 667765.5470249454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 683929.9550342077,
            "unit": "ns/iter",
            "extra": "iterations: 1023\ncpu: 683938.0254154403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 421596.54201680823,
            "unit": "ns/iter",
            "extra": "iterations: 1666\ncpu: 421588.7154861903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 661387.6679281022,
            "unit": "ns/iter",
            "extra": "iterations: 1057\ncpu: 661386.8495742668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 23001.245964163674,
            "unit": "ns/iter",
            "extra": "iterations: 30415\ncpu: 23000.532631925205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 113694.0048512271,
            "unit": "ns/iter",
            "extra": "iterations: 6184\ncpu: 113695.2943078916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 90183.81334023019,
            "unit": "ns/iter",
            "extra": "iterations: 7736\ncpu: 90181.2047569803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 89829.67067183672,
            "unit": "ns/iter",
            "extra": "iterations: 7740\ncpu: 89827.93281653759 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 90857.31981923599,
            "unit": "ns/iter",
            "extra": "iterations: 7745\ncpu: 90856.73337637339 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 166886.12535749224,
            "unit": "ns/iter",
            "extra": "iterations: 4196\ncpu: 166879.7426120121 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 801888.5234822434,
            "unit": "ns/iter",
            "extra": "iterations: 873\ncpu: 801897.365406637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 678090.77272728,
            "unit": "ns/iter",
            "extra": "iterations: 1034\ncpu: 678076.0154738869 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 667672.8912213655,
            "unit": "ns/iter",
            "extra": "iterations: 1048\ncpu: 667665.3625954189 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 684141.7011718698,
            "unit": "ns/iter",
            "extra": "iterations: 1024\ncpu: 684129.3945312465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 420590.15514131094,
            "unit": "ns/iter",
            "extra": "iterations: 1663\ncpu: 420586.59049909364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 661267.8134469435,
            "unit": "ns/iter",
            "extra": "iterations: 1056\ncpu: 661275.2840908988 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}