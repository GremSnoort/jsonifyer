window.BENCHMARK_DATA = {
  "lastUpdate": 1702381141850,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Parse gcc-9 20.04 Debug c++-17": [
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
        "date": 1702381141552,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7136.037266063336,
            "unit": "ns/iter",
            "extra": "iterations: 97676\ncpu: 7135.609566321308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 51688.42150000046,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 51686.26000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 95954.97108729761,
            "unit": "ns/iter",
            "extra": "iterations: 8958\ncpu: 95952.27729403885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 140253.40963265693,
            "unit": "ns/iter",
            "extra": "iterations: 6125\ncpu: 140246.2040816327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 184548.4115639097,
            "unit": "ns/iter",
            "extra": "iterations: 4687\ncpu: 184538.93748666532 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 228721.24727176,
            "unit": "ns/iter",
            "extra": "iterations: 3757\ncpu: 228708.5706680862 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 273148.18520840816,
            "unit": "ns/iter",
            "extra": "iterations: 3191\ncpu: 273129.39517392684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 316896.0571740873,
            "unit": "ns/iter",
            "extra": "iterations: 2746\ncpu: 316883.13911143475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 360186.803978443,
            "unit": "ns/iter",
            "extra": "iterations: 2413\ncpu: 360172.1508495652 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 5788.838216939855,
            "unit": "ns/iter",
            "extra": "iterations: 120983\ncpu: 5788.581040311451 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 4676.083576605704,
            "unit": "ns/iter",
            "extra": "iterations: 149695\ncpu: 4675.840208423795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 4686.802754714269,
            "unit": "ns/iter",
            "extra": "iterations: 149707\ncpu: 4686.721395793113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 4691.169962726544,
            "unit": "ns/iter",
            "extra": "iterations: 149168\ncpu: 4690.993376595519 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 7174.265356871517,
            "unit": "ns/iter",
            "extra": "iterations: 97318\ncpu: 7174.062352288381 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 25754.275586870983,
            "unit": "ns/iter",
            "extra": "iterations: 29947\ncpu: 25753.734931712697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 128523.48846614386,
            "unit": "ns/iter",
            "extra": "iterations: 6676\ncpu: 128519.32294787282 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 100987.99787133327,
            "unit": "ns/iter",
            "extra": "iterations: 8456\ncpu: 100983.0534531696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 100783.46054028616,
            "unit": "ns/iter",
            "extra": "iterations: 8477\ncpu: 100779.0609885573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 98618.0915631888,
            "unit": "ns/iter",
            "extra": "iterations: 8617\ncpu: 98612.96274805623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 204153.44523210693,
            "unit": "ns/iter",
            "extra": "iterations: 4373\ncpu: 204144.88909215608 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1625903.3292469957,
            "unit": "ns/iter",
            "extra": "iterations: 571\ncpu: 1625829.9474606009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1289566.9055555775,
            "unit": "ns/iter",
            "extra": "iterations: 720\ncpu: 1289514.1666666672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1303687.367977562,
            "unit": "ns/iter",
            "extra": "iterations: 712\ncpu: 1303664.325842695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1285193.461326008,
            "unit": "ns/iter",
            "extra": "iterations: 724\ncpu: 1285144.7513812156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 725064.9334898483,
            "unit": "ns/iter",
            "extra": "iterations: 1278\ncpu: 725058.6854460104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1245192.525537675,
            "unit": "ns/iter",
            "extra": "iterations: 744\ncpu: 1245134.2741935493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 33594.259539710365,
            "unit": "ns/iter",
            "extra": "iterations: 23507\ncpu: 33592.89573318576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 164409.99392097586,
            "unit": "ns/iter",
            "extra": "iterations: 5264\ncpu: 164407.19984802447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 125114.58561444169,
            "unit": "ns/iter",
            "extra": "iterations: 6868\ncpu: 125109.76994758283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 126007.90124724446,
            "unit": "ns/iter",
            "extra": "iterations: 6815\ncpu: 126005.39985326477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 121441.41488608962,
            "unit": "ns/iter",
            "extra": "iterations: 7067\ncpu: 121435.50304230968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 216594.43303348921,
            "unit": "ns/iter",
            "extra": "iterations: 4002\ncpu: 216590.12993503307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1668020.772808652,
            "unit": "ns/iter",
            "extra": "iterations: 559\ncpu: 1667936.3148479473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1317605.8411347107,
            "unit": "ns/iter",
            "extra": "iterations: 705\ncpu: 1317560.4255319159 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1329787.4591104514,
            "unit": "ns/iter",
            "extra": "iterations: 697\ncpu: 1329720.086083209 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1321727.1752136576,
            "unit": "ns/iter",
            "extra": "iterations: 702\ncpu: 1321618.2336182257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 764305.8651316069,
            "unit": "ns/iter",
            "extra": "iterations: 1216\ncpu: 764265.9539473663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1282700.9600000407,
            "unit": "ns/iter",
            "extra": "iterations: 725\ncpu: 1282634.7586206922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 6206164.4333330905,
            "unit": "ns/iter",
            "extra": "iterations: 150\ncpu: 6205855.999999983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 2776704.729166553,
            "unit": "ns/iter",
            "extra": "iterations: 336\ncpu: 2776679.76190475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 25009.306659800117,
            "unit": "ns/iter",
            "extra": "iterations: 31067\ncpu: 25008.819647857687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 125730.19606700503,
            "unit": "ns/iter",
            "extra": "iterations: 6865\ncpu: 125727.85142024774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 98298.68456529388,
            "unit": "ns/iter",
            "extra": "iterations: 8753\ncpu: 98297.07528847286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 97838.66479935999,
            "unit": "ns/iter",
            "extra": "iterations: 8747\ncpu: 97835.31496513054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 95541.77446287767,
            "unit": "ns/iter",
            "extra": "iterations: 8983\ncpu: 95537.6711566292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 186345.67361858307,
            "unit": "ns/iter",
            "extra": "iterations: 4651\ncpu: 186334.72371533027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1679357.325174804,
            "unit": "ns/iter",
            "extra": "iterations: 572\ncpu: 1679218.7062937063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1289961.7277856134,
            "unit": "ns/iter",
            "extra": "iterations: 709\ncpu: 1289909.5909732021 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1301424.5558658924,
            "unit": "ns/iter",
            "extra": "iterations: 716\ncpu: 1301376.2569832338 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1280454.106557354,
            "unit": "ns/iter",
            "extra": "iterations: 732\ncpu: 1280394.8087431712 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 714065.8315467265,
            "unit": "ns/iter",
            "extra": "iterations: 1306\ncpu: 714041.8070444111 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1248005.7914438914,
            "unit": "ns/iter",
            "extra": "iterations: 748\ncpu: 1247947.8609625644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2724.6244504927504,
            "unit": "ns/iter",
            "extra": "iterations: 256821\ncpu: 2724.3593787112454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 17489.378241445404,
            "unit": "ns/iter",
            "extra": "iterations: 40067\ncpu: 17488.826216087957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 13448.930176875065,
            "unit": "ns/iter",
            "extra": "iterations: 51788\ncpu: 13448.611647485866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 13899.215624507933,
            "unit": "ns/iter",
            "extra": "iterations: 50792\ncpu: 13898.070562293236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 10344.066065755831,
            "unit": "ns/iter",
            "extra": "iterations: 67675\ncpu: 10343.377909124474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 64731.16073903244,
            "unit": "ns/iter",
            "extra": "iterations: 10825\ncpu: 64726.327944572746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 112314.14058993434,
            "unit": "ns/iter",
            "extra": "iterations: 6238\ncpu: 112307.69477396573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 27654.99109184155,
            "unit": "ns/iter",
            "extra": "iterations: 25370\ncpu: 27653.129680725244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 27697.526324111182,
            "unit": "ns/iter",
            "extra": "iterations: 25300\ncpu: 27695.193675889215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 27523.06654089485,
            "unit": "ns/iter",
            "extra": "iterations: 25443\ncpu: 27521.17281767093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 55272.73446505963,
            "unit": "ns/iter",
            "extra": "iterations: 12665\ncpu: 55270.65929727605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 51525.55915317555,
            "unit": "ns/iter",
            "extra": "iterations: 13651\ncpu: 51523.01662881827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 20702.519487041965,
            "unit": "ns/iter",
            "extra": "iterations: 33843\ncpu: 20701.515823065438 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 102343.14915997618,
            "unit": "ns/iter",
            "extra": "iterations: 6845\ncpu: 102338.20306793172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 84917.29270973674,
            "unit": "ns/iter",
            "extra": "iterations: 8189\ncpu: 84910.70948833805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 83890.65718401068,
            "unit": "ns/iter",
            "extra": "iterations: 8331\ncpu: 83888.14067939055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 84294.9008433771,
            "unit": "ns/iter",
            "extra": "iterations: 8300\ncpu: 84294.13253012003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 121400.66250000538,
            "unit": "ns/iter",
            "extra": "iterations: 5760\ncpu: 121394.32291666807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 480497.49550792837,
            "unit": "ns/iter",
            "extra": "iterations: 1447\ncpu: 480485.6254319286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 401435.3020057442,
            "unit": "ns/iter",
            "extra": "iterations: 1745\ncpu: 401425.845272207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 399011.97261835757,
            "unit": "ns/iter",
            "extra": "iterations: 1753\ncpu: 398982.0308043358 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 405182.381449302,
            "unit": "ns/iter",
            "extra": "iterations: 1725\ncpu: 405152.521739125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 262045.64403600033,
            "unit": "ns/iter",
            "extra": "iterations: 2666\ncpu: 262023.2933233345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 394359.20507044805,
            "unit": "ns/iter",
            "extra": "iterations: 1775\ncpu: 394339.26760563295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 21099.458466453987,
            "unit": "ns/iter",
            "extra": "iterations: 33178\ncpu: 21097.95647718339 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 105035.81592787031,
            "unit": "ns/iter",
            "extra": "iterations: 6655\ncpu: 105029.66190833996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 86994.86680761242,
            "unit": "ns/iter",
            "extra": "iterations: 8041\ncpu: 86992.0283546821 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 87896.27126988824,
            "unit": "ns/iter",
            "extra": "iterations: 7922\ncpu: 87893.75157788325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 87157.9447699809,
            "unit": "ns/iter",
            "extra": "iterations: 8021\ncpu: 87153.80875202642 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 124398.36486246536,
            "unit": "ns/iter",
            "extra": "iterations: 5635\ncpu: 124389.47648624751 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 483993.6728907315,
            "unit": "ns/iter",
            "extra": "iterations: 1446\ncpu: 483969.98616874794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 402407.27873562335,
            "unit": "ns/iter",
            "extra": "iterations: 1740\ncpu: 402395.86206896557 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 402505.1249999961,
            "unit": "ns/iter",
            "extra": "iterations: 1744\ncpu: 402488.5894495422 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 401903.40744986164,
            "unit": "ns/iter",
            "extra": "iterations: 1745\ncpu: 401878.73925501003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 259939.2395098378,
            "unit": "ns/iter",
            "extra": "iterations: 2693\ncpu: 259919.64352023907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 397525.8401592214,
            "unit": "ns/iter",
            "extra": "iterations: 1758\ncpu: 397496.9852104636 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}