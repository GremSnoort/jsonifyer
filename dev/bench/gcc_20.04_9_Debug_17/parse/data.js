window.BENCHMARK_DATA = {
  "lastUpdate": 1702387056008,
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
        "date": 1702382288193,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7102.635519637731,
            "unit": "ns/iter",
            "extra": "iterations: 98126\ncpu: 7102.185964983796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 50799.155699996845,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 50798.639999999985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 94136.45476530568,
            "unit": "ns/iter",
            "extra": "iterations: 9097\ncpu: 94129.44926898975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 138119.78744423424,
            "unit": "ns/iter",
            "extra": "iterations: 6276\ncpu: 138111.32887189294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 180331.5875729803,
            "unit": "ns/iter",
            "extra": "iterations: 4796\ncpu: 180314.63719766474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 223171.66264130562,
            "unit": "ns/iter",
            "extra": "iterations: 3892\ncpu: 223167.6002055498 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 265645.79252221895,
            "unit": "ns/iter",
            "extra": "iterations: 3263\ncpu: 265628.13361936854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 308456.9737681718,
            "unit": "ns/iter",
            "extra": "iterations: 2821\ncpu: 308436.51187522156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 351470.6051675322,
            "unit": "ns/iter",
            "extra": "iterations: 2477\ncpu: 351446.4675010092 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 5859.480565844609,
            "unit": "ns/iter",
            "extra": "iterations: 119326\ncpu: 5859.359234366357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 4813.16306103566,
            "unit": "ns/iter",
            "extra": "iterations: 144866\ncpu: 4812.82840694159 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 4785.045876887307,
            "unit": "ns/iter",
            "extra": "iterations: 146370\ncpu: 4784.707248753155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 4773.288162058131,
            "unit": "ns/iter",
            "extra": "iterations: 145380\ncpu: 4772.930251754019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 7272.359477056708,
            "unit": "ns/iter",
            "extra": "iterations: 96607\ncpu: 7271.627314790858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 26125.596169245164,
            "unit": "ns/iter",
            "extra": "iterations: 31221\ncpu: 26123.935812433952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 130482.99813722458,
            "unit": "ns/iter",
            "extra": "iterations: 6442\ncpu: 130469.06240298013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 104348.11032549228,
            "unit": "ns/iter",
            "extra": "iterations: 8203\ncpu: 104342.61855418772 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 104698.40890192927,
            "unit": "ns/iter",
            "extra": "iterations: 8178\ncpu: 104688.40792369768 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 101941.69988095392,
            "unit": "ns/iter",
            "extra": "iterations: 8400\ncpu: 101934.54761904782 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 205961.27539922355,
            "unit": "ns/iter",
            "extra": "iterations: 4321\ncpu: 205944.54987271424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1651389.827708706,
            "unit": "ns/iter",
            "extra": "iterations: 563\ncpu: 1651313.6767317932 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1317452.9872158917,
            "unit": "ns/iter",
            "extra": "iterations: 704\ncpu: 1317408.380681819 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1321220.8575498965,
            "unit": "ns/iter",
            "extra": "iterations: 702\ncpu: 1321159.4017094013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1304496.2570621485,
            "unit": "ns/iter",
            "extra": "iterations: 708\ncpu: 1304458.4745762679 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 726756.8581504481,
            "unit": "ns/iter",
            "extra": "iterations: 1276\ncpu: 726725.9404388722 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1272583.1438356088,
            "unit": "ns/iter",
            "extra": "iterations: 730\ncpu: 1272529.8630136966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 33157.872606363235,
            "unit": "ns/iter",
            "extra": "iterations: 24962\ncpu: 33157.05071709 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 162139.10046860183,
            "unit": "ns/iter",
            "extra": "iterations: 5335\ncpu: 162132.85848172434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 127891.31451493617,
            "unit": "ns/iter",
            "extra": "iterations: 6731\ncpu: 127888.27811617884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 127497.034615952,
            "unit": "ns/iter",
            "extra": "iterations: 6731\ncpu: 127492.85395929284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 126072.71466276005,
            "unit": "ns/iter",
            "extra": "iterations: 6820\ncpu: 126069.57478005858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 222905.49780077592,
            "unit": "ns/iter",
            "extra": "iterations: 3865\ncpu: 222898.99094437348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1699140.0036297813,
            "unit": "ns/iter",
            "extra": "iterations: 551\ncpu: 1699085.29945554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1334549.138968498,
            "unit": "ns/iter",
            "extra": "iterations: 698\ncpu: 1334429.7994269354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1339521.431654732,
            "unit": "ns/iter",
            "extra": "iterations: 695\ncpu: 1339452.5179856035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1328113.2339515185,
            "unit": "ns/iter",
            "extra": "iterations: 701\ncpu: 1328044.9358059915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 756417.0415648106,
            "unit": "ns/iter",
            "extra": "iterations: 1227\ncpu: 756386.1450692788 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1296553.405857764,
            "unit": "ns/iter",
            "extra": "iterations: 717\ncpu: 1296476.011157603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 6191642.701986704,
            "unit": "ns/iter",
            "extra": "iterations: 151\ncpu: 6191087.417218568 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 2801450.2305388404,
            "unit": "ns/iter",
            "extra": "iterations: 334\ncpu: 2795989.2215568875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 25010.892065415937,
            "unit": "ns/iter",
            "extra": "iterations: 33020\ncpu: 25008.155663234327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 126662.4181630836,
            "unit": "ns/iter",
            "extra": "iterations: 6794\ncpu: 126657.0209007949 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 101770.29229312214,
            "unit": "ns/iter",
            "extra": "iterations: 8447\ncpu: 101762.05753521952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 101244.789709173,
            "unit": "ns/iter",
            "extra": "iterations: 8493\ncpu: 101239.70328505774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 99332.73593023074,
            "unit": "ns/iter",
            "extra": "iterations: 8600\ncpu: 99322.89534883708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 189722.34515212328,
            "unit": "ns/iter",
            "extra": "iterations: 4569\ncpu: 189710.76822061685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1664462.61359571,
            "unit": "ns/iter",
            "extra": "iterations: 559\ncpu: 1664320.7513416728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1311271.310829783,
            "unit": "ns/iter",
            "extra": "iterations: 711\ncpu: 1311214.4866385385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1314482.3146067152,
            "unit": "ns/iter",
            "extra": "iterations: 712\ncpu: 1314359.9719101125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1302965.9665272096,
            "unit": "ns/iter",
            "extra": "iterations: 717\ncpu: 1302889.539748946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 718935.338485303,
            "unit": "ns/iter",
            "extra": "iterations: 1294\ncpu: 718872.7975270484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1266365.9089674533,
            "unit": "ns/iter",
            "extra": "iterations: 736\ncpu: 1266294.0217391285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2689.9089654748695,
            "unit": "ns/iter",
            "extra": "iterations: 260187\ncpu: 2689.7220076329704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 17690.67210881005,
            "unit": "ns/iter",
            "extra": "iterations: 39629\ncpu: 17689.75245401092 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 13972.56499531078,
            "unit": "ns/iter",
            "extra": "iterations: 50119\ncpu: 13971.378120074243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 14393.535462969507,
            "unit": "ns/iter",
            "extra": "iterations: 48459\ncpu: 14392.665965042524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 10520.862019850461,
            "unit": "ns/iter",
            "extra": "iterations: 66698\ncpu: 10519.688746289274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 64523.31308842232,
            "unit": "ns/iter",
            "extra": "iterations: 10834\ncpu: 64521.211002399345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 109371.63623573487,
            "unit": "ns/iter",
            "extra": "iterations: 6397\ncpu: 109370.6581209943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 28434.301684596085,
            "unit": "ns/iter",
            "extra": "iterations: 24635\ncpu: 28433.3752790744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 28081.28517643416,
            "unit": "ns/iter",
            "extra": "iterations: 24967\ncpu: 28081.038971442413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 28258.39626145688,
            "unit": "ns/iter",
            "extra": "iterations: 24769\ncpu: 28257.063264564465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 55610.61342868502,
            "unit": "ns/iter",
            "extra": "iterations: 12585\ncpu: 55610.05164878813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 53202.75634092337,
            "unit": "ns/iter",
            "extra": "iterations: 13129\ncpu: 53201.58427907708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 21139.727045125866,
            "unit": "ns/iter",
            "extra": "iterations: 33152\ncpu: 21139.26761582989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 103799.31338862231,
            "unit": "ns/iter",
            "extra": "iterations: 6752\ncpu: 103798.40047393482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 85522.30089251837,
            "unit": "ns/iter",
            "extra": "iterations: 8179\ncpu: 85519.7456901823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 84624.27277137493,
            "unit": "ns/iter",
            "extra": "iterations: 8245\ncpu: 84621.91631291807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 84994.37841446539,
            "unit": "ns/iter",
            "extra": "iterations: 8237\ncpu: 84992.55797013394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 128753.54296731541,
            "unit": "ns/iter",
            "extra": "iterations: 5446\ncpu: 128750.77120822712 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 493695.0771954757,
            "unit": "ns/iter",
            "extra": "iterations: 1412\ncpu: 493678.6827195446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 409294.87434244785,
            "unit": "ns/iter",
            "extra": "iterations: 1711\ncpu: 409290.82407948654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 407044.25797098404,
            "unit": "ns/iter",
            "extra": "iterations: 1725\ncpu: 407035.5942028989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 407571.4038350283,
            "unit": "ns/iter",
            "extra": "iterations: 1721\ncpu: 407562.347472405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 258820.9545118182,
            "unit": "ns/iter",
            "extra": "iterations: 2704\ncpu: 258812.832840241 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 401716.48512584803,
            "unit": "ns/iter",
            "extra": "iterations: 1748\ncpu: 401703.77574371046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 21263.230526091385,
            "unit": "ns/iter",
            "extra": "iterations: 32903\ncpu: 21262.74199920973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 106800.51286344191,
            "unit": "ns/iter",
            "extra": "iterations: 6569\ncpu: 106799.51286344948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 88124.17233988378,
            "unit": "ns/iter",
            "extra": "iterations: 7932\ncpu: 88120.67574382396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 88310.75164059391,
            "unit": "ns/iter",
            "extra": "iterations: 7924\ncpu: 88309.88137304482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 87822.83105543126,
            "unit": "ns/iter",
            "extra": "iterations: 7902\ncpu: 87820.8934446982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 124690.31772872918,
            "unit": "ns/iter",
            "extra": "iterations: 5618\ncpu: 124687.68244926917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 497306.51741291303,
            "unit": "ns/iter",
            "extra": "iterations: 1407\ncpu: 497291.2579957385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 411187.93263032974,
            "unit": "ns/iter",
            "extra": "iterations: 1707\ncpu: 411184.35852372844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 409353.6287390584,
            "unit": "ns/iter",
            "extra": "iterations: 1705\ncpu: 409344.4574780088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 406029.8186558541,
            "unit": "ns/iter",
            "extra": "iterations: 1726\ncpu: 406026.30359212233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 262977.17587371415,
            "unit": "ns/iter",
            "extra": "iterations: 2661\ncpu: 262966.59150695486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 406072.98496240575,
            "unit": "ns/iter",
            "extra": "iterations: 1729\ncpu: 406069.9248120335 ns\nthreads: 1"
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
        "date": 1702387055536,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7110.844760054412,
            "unit": "ns/iter",
            "extra": "iterations: 98293\ncpu: 7110.851230504715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 51532.55390000595,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 51528.490000000005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 94919.62673879338,
            "unit": "ns/iter",
            "extra": "iterations: 9058\ncpu: 94919.82777655109 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 138039.15860300977,
            "unit": "ns/iter",
            "extra": "iterations: 6242\ncpu: 138035.0528676706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 182337.2458499813,
            "unit": "ns/iter",
            "extra": "iterations: 4759\ncpu: 182333.72557259927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 225721.59921975498,
            "unit": "ns/iter",
            "extra": "iterations: 3845\ncpu: 225707.3081924579 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 269557.9773010164,
            "unit": "ns/iter",
            "extra": "iterations: 3216\ncpu: 269549.3159203981 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 311641.8384201002,
            "unit": "ns/iter",
            "extra": "iterations: 2785\ncpu: 311619.9640933574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 354976.39411280147,
            "unit": "ns/iter",
            "extra": "iterations: 2446\ncpu: 354976.8601798857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 5857.374436466969,
            "unit": "ns/iter",
            "extra": "iterations: 119780\ncpu: 5857.0821506094635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 4852.112530039145,
            "unit": "ns/iter",
            "extra": "iterations: 144397\ncpu: 4852.107730770041 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 4835.782490949457,
            "unit": "ns/iter",
            "extra": "iterations: 144748\ncpu: 4835.779423549897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 4798.958706832053,
            "unit": "ns/iter",
            "extra": "iterations: 146029\ncpu: 4798.659170438751 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 7335.976051602901,
            "unit": "ns/iter",
            "extra": "iterations: 95497\ncpu: 7335.770757196562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 26480.29600154604,
            "unit": "ns/iter",
            "extra": "iterations: 31037\ncpu: 26479.40844798145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 134622.3259234045,
            "unit": "ns/iter",
            "extra": "iterations: 5848\ncpu: 134622.53761969897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 101716.39007597299,
            "unit": "ns/iter",
            "extra": "iterations: 8424\ncpu: 101712.68993352329 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 103127.52232519016,
            "unit": "ns/iter",
            "extra": "iterations: 8309\ncpu: 103123.74533638245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 100059.12099894478,
            "unit": "ns/iter",
            "extra": "iterations: 8529\ncpu: 100056.72411771597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 208883.68217055855,
            "unit": "ns/iter",
            "extra": "iterations: 4257\ncpu: 208876.0159736904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1643579.5982301214,
            "unit": "ns/iter",
            "extra": "iterations: 565\ncpu: 1643516.4601769936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1304809.5568022993,
            "unit": "ns/iter",
            "extra": "iterations: 713\ncpu: 1304767.4614305755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1312137.0365682512,
            "unit": "ns/iter",
            "extra": "iterations: 711\ncpu: 1312097.1870604814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1288954.0721220386,
            "unit": "ns/iter",
            "extra": "iterations: 721\ncpu: 1288967.8224687886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 723669.0835284765,
            "unit": "ns/iter",
            "extra": "iterations: 1281\ncpu: 723648.5558157703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1260230.0883152704,
            "unit": "ns/iter",
            "extra": "iterations: 736\ncpu: 1260232.7445652199 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 33296.24916056607,
            "unit": "ns/iter",
            "extra": "iterations: 24719\ncpu: 33294.967433957725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 161908.45495328042,
            "unit": "ns/iter",
            "extra": "iterations: 5350\ncpu: 161900.85981308395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 126725.95461244496,
            "unit": "ns/iter",
            "extra": "iterations: 6786\ncpu: 126721.04332449175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 126635.4684737754,
            "unit": "ns/iter",
            "extra": "iterations: 6788\ncpu: 126630.49499116097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 124014.20205082791,
            "unit": "ns/iter",
            "extra": "iterations: 6924\ncpu: 124010.09532062378 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 221731.98846151837,
            "unit": "ns/iter",
            "extra": "iterations: 3900\ncpu: 221726.35897435955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1670875.372759818,
            "unit": "ns/iter",
            "extra": "iterations: 558\ncpu: 1670797.8494623688 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1338905.96704878,
            "unit": "ns/iter",
            "extra": "iterations: 698\ncpu: 1338848.2808022867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1332336.525787961,
            "unit": "ns/iter",
            "extra": "iterations: 698\ncpu: 1332260.3151862423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1315535.2678063149,
            "unit": "ns/iter",
            "extra": "iterations: 702\ncpu: 1315492.3076923022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 755317.519902561,
            "unit": "ns/iter",
            "extra": "iterations: 1231\ncpu: 755293.98862713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1289206.0263522237,
            "unit": "ns/iter",
            "extra": "iterations: 721\ncpu: 1289134.8127600558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 6176475.238410585,
            "unit": "ns/iter",
            "extra": "iterations: 151\ncpu: 6176262.251655665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 2804030.006079183,
            "unit": "ns/iter",
            "extra": "iterations: 329\ncpu: 2803985.410334354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 25031.47044736905,
            "unit": "ns/iter",
            "extra": "iterations: 28813\ncpu: 25031.23937111714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 127351.56017764575,
            "unit": "ns/iter",
            "extra": "iterations: 6755\ncpu: 127351.79866765342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 99725.95200465382,
            "unit": "ns/iter",
            "extra": "iterations: 8605\ncpu: 99727.06565949995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 98497.34813109935,
            "unit": "ns/iter",
            "extra": "iterations: 8695\ncpu: 98493.20299022383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 96580.75263866814,
            "unit": "ns/iter",
            "extra": "iterations: 8906\ncpu: 96576.71232876668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 193258.15661565732,
            "unit": "ns/iter",
            "extra": "iterations: 4444\ncpu: 193252.99279928012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1639906.4991213353,
            "unit": "ns/iter",
            "extra": "iterations: 569\ncpu: 1639858.1722319785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1300621.811111095,
            "unit": "ns/iter",
            "extra": "iterations: 720\ncpu: 1300564.3055555576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1306160.7737428944,
            "unit": "ns/iter",
            "extra": "iterations: 716\ncpu: 1306149.7206703962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1286927.839335097,
            "unit": "ns/iter",
            "extra": "iterations: 722\ncpu: 1286906.0941828229 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 713126.2041442788,
            "unit": "ns/iter",
            "extra": "iterations: 1303\ncpu: 713115.3491941653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1256896.595399167,
            "unit": "ns/iter",
            "extra": "iterations: 739\ncpu: 1256891.3396481788 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2748.9298461928192,
            "unit": "ns/iter",
            "extra": "iterations: 253044\ncpu: 2748.841308230989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 17094.76661299817,
            "unit": "ns/iter",
            "extra": "iterations: 40992\ncpu: 17094.691647150605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 14563.09787833695,
            "unit": "ns/iter",
            "extra": "iterations: 48264\ncpu: 14562.810790651467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 12634.255697529323,
            "unit": "ns/iter",
            "extra": "iterations: 55331\ncpu: 12634.22493719621 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 10382.362418693625,
            "unit": "ns/iter",
            "extra": "iterations: 67491\ncpu: 10382.360611044416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 67401.84795490072,
            "unit": "ns/iter",
            "extra": "iterations: 10464\ncpu: 67399.6750764527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 113242.58830199756,
            "unit": "ns/iter",
            "extra": "iterations: 6172\ncpu: 113239.27414128357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 28013.28666986957,
            "unit": "ns/iter",
            "extra": "iterations: 24966\ncpu: 28012.573099415185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 27851.80409858782,
            "unit": "ns/iter",
            "extra": "iterations: 25033\ncpu: 27850.229696800187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 27880.92793438349,
            "unit": "ns/iter",
            "extra": "iterations: 25116\ncpu: 27880.33524446546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 55776.64452937528,
            "unit": "ns/iter",
            "extra": "iterations: 12558\ncpu: 55776.516961299305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 52237.15929468388,
            "unit": "ns/iter",
            "extra": "iterations: 13384\ncpu: 52235.25104602537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 20891.91142253621,
            "unit": "ns/iter",
            "extra": "iterations: 33609\ncpu: 20891.154155137203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 103914.69748148866,
            "unit": "ns/iter",
            "extra": "iterations: 6750\ncpu: 103910.37037037114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 83701.72880344256,
            "unit": "ns/iter",
            "extra": "iterations: 8374\ncpu: 83697.27728684137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 84105.60427679874,
            "unit": "ns/iter",
            "extra": "iterations: 8324\ncpu: 84105.63431042779 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 84092.21000840115,
            "unit": "ns/iter",
            "extra": "iterations: 8333\ncpu: 84092.36769470715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 123004.27325378195,
            "unit": "ns/iter",
            "extra": "iterations: 5698\ncpu: 123000.54405054286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 507138.7729999515,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 507091.5000000014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 404578.8263889152,
            "unit": "ns/iter",
            "extra": "iterations: 1728\ncpu: 404562.7314814837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 403366.7847663343,
            "unit": "ns/iter",
            "extra": "iterations: 1733\ncpu: 403353.8949797995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 401806.8319039611,
            "unit": "ns/iter",
            "extra": "iterations: 1749\ncpu: 401793.53916524013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 254247.5421511774,
            "unit": "ns/iter",
            "extra": "iterations: 2752\ncpu: 254236.8095930225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 396769.12570783444,
            "unit": "ns/iter",
            "extra": "iterations: 1766\ncpu: 396767.9501698788 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 21165.28438911541,
            "unit": "ns/iter",
            "extra": "iterations: 32772\ncpu: 21164.5490052484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 106750.00929453247,
            "unit": "ns/iter",
            "extra": "iterations: 6563\ncpu: 106746.64025597979 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 87511.89694082474,
            "unit": "ns/iter",
            "extra": "iterations: 7976\ncpu: 87508.38766298862 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 87571.88776149815,
            "unit": "ns/iter",
            "extra": "iterations: 7983\ncpu: 87570.23675310044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 86005.98429834003,
            "unit": "ns/iter",
            "extra": "iterations: 8152\ncpu: 86004.84543670216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 124929.78753795057,
            "unit": "ns/iter",
            "extra": "iterations: 5601\ncpu: 124926.60239242848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 485962.71755722706,
            "unit": "ns/iter",
            "extra": "iterations: 1441\ncpu: 485957.59888965543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 404314.9185441793,
            "unit": "ns/iter",
            "extra": "iterations: 1731\ncpu: 404291.6233391055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 403524.8213256673,
            "unit": "ns/iter",
            "extra": "iterations: 1735\ncpu: 403513.3717579283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 401161.29432013654,
            "unit": "ns/iter",
            "extra": "iterations: 1743\ncpu: 401143.71772805904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 260993.08348862248,
            "unit": "ns/iter",
            "extra": "iterations: 2683\ncpu: 260982.40775251403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 398605.4477441344,
            "unit": "ns/iter",
            "extra": "iterations: 1751\ncpu: 398593.0896630481 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}