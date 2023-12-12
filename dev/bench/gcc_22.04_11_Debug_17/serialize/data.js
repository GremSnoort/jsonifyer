window.BENCHMARK_DATA = {
  "lastUpdate": 1702381094883,
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
      }
    ]
  }
}