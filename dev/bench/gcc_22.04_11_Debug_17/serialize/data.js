window.BENCHMARK_DATA = {
  "lastUpdate": 1702396465020,
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
        "date": 1702391743461,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 7934.4163325407035,
            "unit": "ns/iter",
            "extra": "iterations: 88290\ncpu: 7933.652735304111 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 96955.73164384741,
            "unit": "ns/iter",
            "extra": "iterations: 8839\ncpu: 96951.21620092771 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 187901.77123346343,
            "unit": "ns/iter",
            "extra": "iterations: 4686\ncpu: 187894.472897994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 281693.3557723524,
            "unit": "ns/iter",
            "extra": "iterations: 3075\ncpu: 281681.49593495927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 370395.2640136866,
            "unit": "ns/iter",
            "extra": "iterations: 2337\ncpu: 370376.93624304654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 454622.8395385547,
            "unit": "ns/iter",
            "extra": "iterations: 1907\ncpu: 454601.730466702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 543672.8497409384,
            "unit": "ns/iter",
            "extra": "iterations: 1544\ncpu: 543666.64507772 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 508102.37500002136,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 508102.4000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 580215.1770000138,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 580180.0999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6237.725914481403,
            "unit": "ns/iter",
            "extra": "iterations: 111976\ncpu: 6237.560727298696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5091.216429918036,
            "unit": "ns/iter",
            "extra": "iterations: 137347\ncpu: 5091.087537405254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5005.974180431939,
            "unit": "ns/iter",
            "extra": "iterations: 137725\ncpu: 5005.640951170812 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5250.831225744774,
            "unit": "ns/iter",
            "extra": "iterations: 137598\ncpu: 5250.830680678499 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 8917.548121768368,
            "unit": "ns/iter",
            "extra": "iterations: 78904\ncpu: 8917.237402413068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 46245.49658110051,
            "unit": "ns/iter",
            "extra": "iterations: 17842\ncpu: 46244.832417890415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 193906.7039220053,
            "unit": "ns/iter",
            "extra": "iterations: 4411\ncpu: 193901.49625935144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 160410.34912345698,
            "unit": "ns/iter",
            "extra": "iterations: 5362\ncpu: 160407.7769488998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 158558.6925644372,
            "unit": "ns/iter",
            "extra": "iterations: 5393\ncpu: 158554.8303356207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 158993.51099515046,
            "unit": "ns/iter",
            "extra": "iterations: 5366\ncpu: 158991.12933283637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 379861.1344721858,
            "unit": "ns/iter",
            "extra": "iterations: 2283\ncpu: 379845.2036793677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 3057291.443365632,
            "unit": "ns/iter",
            "extra": "iterations: 309\ncpu: 3057200.000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 2476672.910290295,
            "unit": "ns/iter",
            "extra": "iterations: 379\ncpu: 2476525.5936675444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 2490440.380319175,
            "unit": "ns/iter",
            "extra": "iterations: 376\ncpu: 2490397.3404255304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 2497471.0695186513,
            "unit": "ns/iter",
            "extra": "iterations: 374\ncpu: 2497351.0695187156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1449382.8398134185,
            "unit": "ns/iter",
            "extra": "iterations: 643\ncpu: 1449329.7045101097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 2414070.4599482785,
            "unit": "ns/iter",
            "extra": "iterations: 387\ncpu: 2413951.1627906994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 10157022.428571356,
            "unit": "ns/iter",
            "extra": "iterations: 105\ncpu: 10156645.714285703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 5725971.469512207,
            "unit": "ns/iter",
            "extra": "iterations: 164\ncpu: 5725801.2195121795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 11821354.912087627,
            "unit": "ns/iter",
            "extra": "iterations: 91\ncpu: 11820928.571428576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 47219.86843149225,
            "unit": "ns/iter",
            "extra": "iterations: 17641\ncpu: 47218.79712034468 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 203227.58792900518,
            "unit": "ns/iter",
            "extra": "iterations: 4225\ncpu: 203222.9112426036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 163302.62207421806,
            "unit": "ns/iter",
            "extra": "iterations: 5255\ncpu: 163299.5813510951 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 160384.67338935193,
            "unit": "ns/iter",
            "extra": "iterations: 5355\ncpu: 160380.46685340913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 161023.7900863683,
            "unit": "ns/iter",
            "extra": "iterations: 5326\ncpu: 161020.12767555457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 386632.2097495384,
            "unit": "ns/iter",
            "extra": "iterations: 2236\ncpu: 386628.80143112456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 3041608.626623451,
            "unit": "ns/iter",
            "extra": "iterations: 308\ncpu: 3041492.5324675404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 2491345.99465241,
            "unit": "ns/iter",
            "extra": "iterations: 374\ncpu: 2491246.791443853 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 2504111.2949060975,
            "unit": "ns/iter",
            "extra": "iterations: 373\ncpu: 2504036.1930294847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 2505284.6380698434,
            "unit": "ns/iter",
            "extra": "iterations: 373\ncpu: 2505172.9222520115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1452088.5318817915,
            "unit": "ns/iter",
            "extra": "iterations: 643\ncpu: 1451982.7371695149 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 2424718.806201612,
            "unit": "ns/iter",
            "extra": "iterations: 387\ncpu: 2424611.627906965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 10378151.390476173,
            "unit": "ns/iter",
            "extra": "iterations: 105\ncpu: 10377849.523809567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 5742653.780487563,
            "unit": "ns/iter",
            "extra": "iterations: 164\ncpu: 5731349.999999969 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 45872.04311765219,
            "unit": "ns/iter",
            "extra": "iterations: 18206\ncpu: 45869.65835438886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 197016.17687701454,
            "unit": "ns/iter",
            "extra": "iterations: 4342\ncpu: 197008.33717180893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 160712.31289958826,
            "unit": "ns/iter",
            "extra": "iterations: 5318\ncpu: 160704.55058292559 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 159996.35413940615,
            "unit": "ns/iter",
            "extra": "iterations: 5351\ncpu: 159990.9549616891 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 161336.89762444003,
            "unit": "ns/iter",
            "extra": "iterations: 5304\ncpu: 161328.31825037682 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 379502.5173473813,
            "unit": "ns/iter",
            "extra": "iterations: 2277\ncpu: 379490.2064119448 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 3018110.226537337,
            "unit": "ns/iter",
            "extra": "iterations: 309\ncpu: 3017504.8543689316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 2480436.904509417,
            "unit": "ns/iter",
            "extra": "iterations: 377\ncpu: 2480020.424403187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 2489011.7946667187,
            "unit": "ns/iter",
            "extra": "iterations: 375\ncpu: 2488927.199999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 2503493.486559151,
            "unit": "ns/iter",
            "extra": "iterations: 372\ncpu: 2503437.09677419 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1448561.2768273933,
            "unit": "ns/iter",
            "extra": "iterations: 643\ncpu: 1448504.5101088693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 2416887.485788134,
            "unit": "ns/iter",
            "extra": "iterations: 387\ncpu: 2416797.932816538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 2664.8148024277148,
            "unit": "ns/iter",
            "extra": "iterations: 263119\ncpu: 2664.6878408628763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 20117.464866417522,
            "unit": "ns/iter",
            "extra": "iterations: 34810\ncpu: 20117.2479172652 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 15204.833094181611,
            "unit": "ns/iter",
            "extra": "iterations: 45996\ncpu: 15202.658926863178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 14472.601453025056,
            "unit": "ns/iter",
            "extra": "iterations: 48313\ncpu: 14471.9702771512 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 11915.719175053498,
            "unit": "ns/iter",
            "extra": "iterations: 58816\ncpu: 11915.147238846605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 87784.47106713243,
            "unit": "ns/iter",
            "extra": "iterations: 7984\ncpu: 87779.50901803617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 192406.149573819,
            "unit": "ns/iter",
            "extra": "iterations: 3637\ncpu: 192398.2128127578 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 47104.87116729375,
            "unit": "ns/iter",
            "extra": "iterations: 14872\ncpu: 47102.19203873002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 46742.031084964474,
            "unit": "ns/iter",
            "extra": "iterations: 14959\ncpu: 46740.08957818036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 47205.50417902285,
            "unit": "ns/iter",
            "extra": "iterations: 14836\ncpu: 47204.22620652506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 98402.29764755124,
            "unit": "ns/iter",
            "extra": "iterations: 7099\ncpu: 98394.68939287105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 88168.63030839287,
            "unit": "ns/iter",
            "extra": "iterations: 7912\ncpu: 88163.24570273093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 22395.514224524704,
            "unit": "ns/iter",
            "extra": "iterations: 31284\ncpu: 22394.649021864134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 110455.69168900291,
            "unit": "ns/iter",
            "extra": "iterations: 6341\ncpu: 110453.47736950168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 89389.73445463464,
            "unit": "ns/iter",
            "extra": "iterations: 7848\ncpu: 89385.75433231435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 88951.12997583424,
            "unit": "ns/iter",
            "extra": "iterations: 7863\ncpu: 88948.32761032843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 90077.3643151355,
            "unit": "ns/iter",
            "extra": "iterations: 7768\ncpu: 90073.9958805341 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 167342.42337164158,
            "unit": "ns/iter",
            "extra": "iterations: 4176\ncpu: 167331.01053639766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 821884.675428529,
            "unit": "ns/iter",
            "extra": "iterations: 875\ncpu: 821829.6000000009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 677610.9293320591,
            "unit": "ns/iter",
            "extra": "iterations: 1033\ncpu: 677570.7647628285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 676570.7027026747,
            "unit": "ns/iter",
            "extra": "iterations: 1036\ncpu: 676543.3397683384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 679266.5102040985,
            "unit": "ns/iter",
            "extra": "iterations: 1029\ncpu: 679222.1574343989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 419632.1966426665,
            "unit": "ns/iter",
            "extra": "iterations: 1668\ncpu: 419613.2494004773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 659133.2953904391,
            "unit": "ns/iter",
            "extra": "iterations: 1063\ncpu: 659100.5644402602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 22665.051467968962,
            "unit": "ns/iter",
            "extra": "iterations: 30893\ncpu: 22663.286181335705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 111538.15387066592,
            "unit": "ns/iter",
            "extra": "iterations: 6278\ncpu: 111532.30328129866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 89393.02223357826,
            "unit": "ns/iter",
            "extra": "iterations: 7826\ncpu: 89387.92486583287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 89561.13381902345,
            "unit": "ns/iter",
            "extra": "iterations: 7824\ncpu: 89557.61758691179 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 89802.00513611012,
            "unit": "ns/iter",
            "extra": "iterations: 7788\ncpu: 89800.03852080238 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 169350.9672885865,
            "unit": "ns/iter",
            "extra": "iterations: 4127\ncpu: 169342.54906711885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 796163.2394526952,
            "unit": "ns/iter",
            "extra": "iterations: 877\ncpu: 796115.2793614566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 679016.9105927855,
            "unit": "ns/iter",
            "extra": "iterations: 1029\ncpu: 678990.087463562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 673973.7068467091,
            "unit": "ns/iter",
            "extra": "iterations: 1037\ncpu: 673935.7762777257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 679252.7560738245,
            "unit": "ns/iter",
            "extra": "iterations: 1029\ncpu: 679238.4839650224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 419230.69263029937,
            "unit": "ns/iter",
            "extra": "iterations: 1669\ncpu: 419220.13181545614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 657782.1105904002,
            "unit": "ns/iter",
            "extra": "iterations: 1067\ncpu: 657748.0787254056 ns\nthreads: 1"
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
          "id": "c1055272ad64f2314a237d4e8aa66cfea2a56aac",
          "message": "rm rdn",
          "timestamp": "2023-12-12T18:46:40+03:00",
          "tree_id": "a8ce2d06ccc561ccf79fea995e3abe4f5e35f6c2",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/c1055272ad64f2314a237d4e8aa66cfea2a56aac"
        },
        "date": 1702396464087,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 8044.7729028251615,
            "unit": "ns/iter",
            "extra": "iterations: 86998\ncpu: 8044.634359410561 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 99029.57455682725,
            "unit": "ns/iter",
            "extra": "iterations: 8631\ncpu: 99028.08481056656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 191648.5124508436,
            "unit": "ns/iter",
            "extra": "iterations: 4578\ncpu: 191646.133682831 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 287981.48538205464,
            "unit": "ns/iter",
            "extra": "iterations: 3010\ncpu: 287980.0000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 373971.2923413439,
            "unit": "ns/iter",
            "extra": "iterations: 2285\ncpu: 373952.910284464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 464005.32426666055,
            "unit": "ns/iter",
            "extra": "iterations: 1875\ncpu: 463985.5466666669 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 562083.7821656078,
            "unit": "ns/iter",
            "extra": "iterations: 1570\ncpu: 562059.2993630574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 518971.92100000207,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 518954.2000000005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 592786.0049999936,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 592748.0999999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6347.551761332084,
            "unit": "ns/iter",
            "extra": "iterations: 111251\ncpu: 6347.172609684397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5107.547932688201,
            "unit": "ns/iter",
            "extra": "iterations: 136796\ncpu: 5107.469516652533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5070.655200607769,
            "unit": "ns/iter",
            "extra": "iterations: 138205\ncpu: 5070.443182229288 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5233.2090057824125,
            "unit": "ns/iter",
            "extra": "iterations: 134025\ncpu: 5232.924454392848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 9050.03707820176,
            "unit": "ns/iter",
            "extra": "iterations: 77377\ncpu: 9049.53409928015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 47297.129958959435,
            "unit": "ns/iter",
            "extra": "iterations: 17544\ncpu: 47294.19744642042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 201880.22159358533,
            "unit": "ns/iter",
            "extra": "iterations: 4242\ncpu: 201867.84535596435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 163415.57893734216,
            "unit": "ns/iter",
            "extra": "iterations: 5251\ncpu: 163406.20834126798 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 160777.195456261,
            "unit": "ns/iter",
            "extra": "iterations: 5326\ncpu: 160774.85918137452 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 162468.53631178263,
            "unit": "ns/iter",
            "extra": "iterations: 5260\ncpu: 162467.4714828897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 384662.192427595,
            "unit": "ns/iter",
            "extra": "iterations: 2245\ncpu: 384655.5902004453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 3139642.5813953257,
            "unit": "ns/iter",
            "extra": "iterations: 301\ncpu: 3139572.4252491724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 2561416.1202184493,
            "unit": "ns/iter",
            "extra": "iterations: 366\ncpu: 2561384.69945355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 2536002.703804308,
            "unit": "ns/iter",
            "extra": "iterations: 368\ncpu: 2535971.467391306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 2593477.252077588,
            "unit": "ns/iter",
            "extra": "iterations: 361\ncpu: 2593379.2243767255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1481211.883757914,
            "unit": "ns/iter",
            "extra": "iterations: 628\ncpu: 1481161.7834394893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 2474624.1140584624,
            "unit": "ns/iter",
            "extra": "iterations: 377\ncpu: 2474517.771883286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 10403318.617646867,
            "unit": "ns/iter",
            "extra": "iterations: 102\ncpu: 10402911.764705885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 6004622.410256316,
            "unit": "ns/iter",
            "extra": "iterations: 156\ncpu: 6004528.846153844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 12041611.044943811,
            "unit": "ns/iter",
            "extra": "iterations: 89\ncpu: 12041428.089887662 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 48394.3253116817,
            "unit": "ns/iter",
            "extra": "iterations: 17245\ncpu: 48393.737315163824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 203828.49892984855,
            "unit": "ns/iter",
            "extra": "iterations: 4205\ncpu: 203825.37455410202 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 164592.31005963148,
            "unit": "ns/iter",
            "extra": "iterations: 5199\ncpu: 164591.55606847437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 163010.44567078387,
            "unit": "ns/iter",
            "extra": "iterations: 5255\ncpu: 163007.02188391893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 163306.01201830592,
            "unit": "ns/iter",
            "extra": "iterations: 5242\ncpu: 163303.24303700848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 395982.10265813227,
            "unit": "ns/iter",
            "extra": "iterations: 2182\ncpu: 395976.0769935812 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 3151959.087837881,
            "unit": "ns/iter",
            "extra": "iterations: 296\ncpu: 3151945.2702702745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 2565484.950549548,
            "unit": "ns/iter",
            "extra": "iterations: 364\ncpu: 2565474.725274719 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 2544672.9264304894,
            "unit": "ns/iter",
            "extra": "iterations: 367\ncpu: 2544663.4877384235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 2598449.249999943,
            "unit": "ns/iter",
            "extra": "iterations: 360\ncpu: 2598409.4444444496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1478762.5573249054,
            "unit": "ns/iter",
            "extra": "iterations: 628\ncpu: 1478755.254777062 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 2479742.608465559,
            "unit": "ns/iter",
            "extra": "iterations: 378\ncpu: 2479710.317460322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 10564147.9902915,
            "unit": "ns/iter",
            "extra": "iterations: 103\ncpu: 10563574.757281581 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 5866995.192546662,
            "unit": "ns/iter",
            "extra": "iterations: 161\ncpu: 5866749.689440972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 46763.390462753654,
            "unit": "ns/iter",
            "extra": "iterations: 17720\ncpu: 46762.79345372484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 209158.6676413239,
            "unit": "ns/iter",
            "extra": "iterations: 4104\ncpu: 209155.4824561401 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 165242.1726133026,
            "unit": "ns/iter",
            "extra": "iterations: 5185\ncpu: 165239.7685631639 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 162225.623130807,
            "unit": "ns/iter",
            "extra": "iterations: 5283\ncpu: 162224.85330304707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 161993.25747823576,
            "unit": "ns/iter",
            "extra": "iterations: 5282\ncpu: 161991.04505868952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 390328.7447000297,
            "unit": "ns/iter",
            "extra": "iterations: 2217\ncpu: 390315.7419936852 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 3106711.4437087034,
            "unit": "ns/iter",
            "extra": "iterations: 302\ncpu: 3106693.708609263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 2566791.6219177106,
            "unit": "ns/iter",
            "extra": "iterations: 365\ncpu: 2566706.5753424563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 2536201.043243317,
            "unit": "ns/iter",
            "extra": "iterations: 370\ncpu: 2536165.1351351375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 2581471.0027549397,
            "unit": "ns/iter",
            "extra": "iterations: 363\ncpu: 2581393.3884297516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1474095.3157894057,
            "unit": "ns/iter",
            "extra": "iterations: 627\ncpu: 1474088.6762360448 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 2476765.1379310316,
            "unit": "ns/iter",
            "extra": "iterations: 377\ncpu: 2476712.7320954776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 2731.988821696961,
            "unit": "ns/iter",
            "extra": "iterations: 256479\ncpu: 2731.9390671361007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 20528.636081235425,
            "unit": "ns/iter",
            "extra": "iterations: 34123\ncpu: 20528.526213990637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 14902.791955735483,
            "unit": "ns/iter",
            "extra": "iterations: 46990\ncpu: 14902.730368163404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 15904.140886049536,
            "unit": "ns/iter",
            "extra": "iterations: 43993\ncpu: 15903.732411974719 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 11998.799790769588,
            "unit": "ns/iter",
            "extra": "iterations: 58309\ncpu: 11998.624569106001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 91404.72638052738,
            "unit": "ns/iter",
            "extra": "iterations: 7642\ncpu: 91400.30096833318 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 194932.8284122475,
            "unit": "ns/iter",
            "extra": "iterations: 3590\ncpu: 194931.25348189558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 47841.993365252434,
            "unit": "ns/iter",
            "extra": "iterations: 14620\ncpu: 47840.793433652965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 48002.97434334973,
            "unit": "ns/iter",
            "extra": "iterations: 14772\ncpu: 48000.66341727529 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 47842.35350078514,
            "unit": "ns/iter",
            "extra": "iterations: 14611\ncpu: 47838.190404489855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 100121.99486008004,
            "unit": "ns/iter",
            "extra": "iterations: 7004\ncpu: 100118.20388349605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 89767.1057409582,
            "unit": "ns/iter",
            "extra": "iterations: 7821\ncpu: 89762.69019307145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 23089.099525598278,
            "unit": "ns/iter",
            "extra": "iterations: 30354\ncpu: 23088.980035580083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 111680.83058181849,
            "unit": "ns/iter",
            "extra": "iterations: 6239\ncpu: 111670.29972752166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 90548.70058102353,
            "unit": "ns/iter",
            "extra": "iterations: 7745\ncpu: 90541.60103292494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 90629.1625129787,
            "unit": "ns/iter",
            "extra": "iterations: 7704\ncpu: 90625.92159916884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 92254.44161834367,
            "unit": "ns/iter",
            "extra": "iterations: 7588\ncpu: 92246.2967843961 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 170211.4073712463,
            "unit": "ns/iter",
            "extra": "iterations: 4097\ncpu: 170210.3246277761 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 817780.25700938,
            "unit": "ns/iter",
            "extra": "iterations: 856\ncpu: 817740.5373831794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 707273.3040877052,
            "unit": "ns/iter",
            "extra": "iterations: 1003\ncpu: 707213.4596211265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 680827.2679611755,
            "unit": "ns/iter",
            "extra": "iterations: 1030\ncpu: 680782.4271844709 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 697704.9500998458,
            "unit": "ns/iter",
            "extra": "iterations: 1002\ncpu: 697650.8982035908 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 424053.01455428253,
            "unit": "ns/iter",
            "extra": "iterations: 1649\ncpu: 424026.5615524527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 674338.2957610982,
            "unit": "ns/iter",
            "extra": "iterations: 1038\ncpu: 674269.0751445129 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 23161.466119368444,
            "unit": "ns/iter",
            "extra": "iterations: 30209\ncpu: 23160.975206064533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 115352.0463849487,
            "unit": "ns/iter",
            "extra": "iterations: 6058\ncpu: 115349.4552657636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 91544.30424005778,
            "unit": "ns/iter",
            "extra": "iterations: 7665\ncpu: 91537.99086758039 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 91507.1212715853,
            "unit": "ns/iter",
            "extra": "iterations: 7644\ncpu: 91497.3966509668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 92129.84282520025,
            "unit": "ns/iter",
            "extra": "iterations: 7603\ncpu: 92122.03077732523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 172350.3984220862,
            "unit": "ns/iter",
            "extra": "iterations: 4056\ncpu: 172341.3708086768 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 813891.5128504444,
            "unit": "ns/iter",
            "extra": "iterations: 856\ncpu: 813861.9158878566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 693545.6009900896,
            "unit": "ns/iter",
            "extra": "iterations: 1010\ncpu: 693508.4158415898 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 681495.0711501149,
            "unit": "ns/iter",
            "extra": "iterations: 1026\ncpu: 681427.5828460088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 696408.8419483014,
            "unit": "ns/iter",
            "extra": "iterations: 1006\ncpu: 696353.8767395723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 424233.7912561374,
            "unit": "ns/iter",
            "extra": "iterations: 1624\ncpu: 424196.85960590467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 670549.7365900031,
            "unit": "ns/iter",
            "extra": "iterations: 1044\ncpu: 670544.3486590096 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}