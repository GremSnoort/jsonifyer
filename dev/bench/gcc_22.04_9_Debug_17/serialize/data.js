window.BENCHMARK_DATA = {
  "lastUpdate": 1702409096043,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Serialize gcc-9 22.04 Debug c++-17": [
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
        "date": 1702397929536,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 7700.0681657149335,
            "unit": "ns/iter",
            "extra": "iterations: 90324\ncpu: 7699.888180328596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 94119.68183321017,
            "unit": "ns/iter",
            "extra": "iterations: 9077\ncpu: 94119.16932907348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 182065.4518643308,
            "unit": "ns/iter",
            "extra": "iterations: 4747\ncpu: 182064.48283126176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 272514.1224747462,
            "unit": "ns/iter",
            "extra": "iterations: 3168\ncpu: 272515.9722222223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 354641.07869401935,
            "unit": "ns/iter",
            "extra": "iterations: 2389\ncpu: 354643.15613227297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 440999.60466295166,
            "unit": "ns/iter",
            "extra": "iterations: 1973\ncpu: 440995.3370501773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 528847.8069007384,
            "unit": "ns/iter",
            "extra": "iterations: 1652\ncpu: 528843.8861985471 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 613372.5835693942,
            "unit": "ns/iter",
            "extra": "iterations: 1412\ncpu: 613370.8215297456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 562327.6910000073,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 562333.1999999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 5912.199998343776,
            "unit": "ns/iter",
            "extra": "iterations: 120766\ncpu: 5912.0439527681565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 4781.525390558035,
            "unit": "ns/iter",
            "extra": "iterations: 146137\ncpu: 4781.562506415214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4779.492379547903,
            "unit": "ns/iter",
            "extra": "iterations: 146448\ncpu: 4779.527204195348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 4797.599286368563,
            "unit": "ns/iter",
            "extra": "iterations: 146294\ncpu: 4797.639684471006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 8732.7954336078,
            "unit": "ns/iter",
            "extra": "iterations: 80326\ncpu: 8732.86482583471 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 46056.40549371514,
            "unit": "ns/iter",
            "extra": "iterations: 18057\ncpu: 46055.668161931644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 197366.09556626924,
            "unit": "ns/iter",
            "extra": "iterations: 4353\ncpu: 197365.24236158977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 156877.98428074876,
            "unit": "ns/iter",
            "extra": "iterations: 5471\ncpu: 156876.8049716689 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 153176.65377761863,
            "unit": "ns/iter",
            "extra": "iterations: 5612\ncpu: 153176.1225944407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 153811.66338230358,
            "unit": "ns/iter",
            "extra": "iterations: 5582\ncpu: 153807.75707631634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 357275.131589708,
            "unit": "ns/iter",
            "extra": "iterations: 2447\ncpu: 357272.9873314264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2935093.616099036,
            "unit": "ns/iter",
            "extra": "iterations: 323\ncpu: 2935044.5820433428 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 2389205.1071428,
            "unit": "ns/iter",
            "extra": "iterations: 392\ncpu: 2389222.704081636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 2394709.301790169,
            "unit": "ns/iter",
            "extra": "iterations: 391\ncpu: 2394672.634271106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 2403114.621134045,
            "unit": "ns/iter",
            "extra": "iterations: 388\ncpu: 2403138.144329899 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1426130.1735790663,
            "unit": "ns/iter",
            "extra": "iterations: 651\ncpu: 1426115.9754224266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 2329008.807979979,
            "unit": "ns/iter",
            "extra": "iterations: 401\ncpu: 2329005.2369077276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 9906044.719626378,
            "unit": "ns/iter",
            "extra": "iterations: 107\ncpu: 9905957.009345785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 5562862.301775104,
            "unit": "ns/iter",
            "extra": "iterations: 169\ncpu: 5562600.591715994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 11813057.95555545,
            "unit": "ns/iter",
            "extra": "iterations: 90\ncpu: 11812041.111111112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 46186.76493266895,
            "unit": "ns/iter",
            "extra": "iterations: 17897\ncpu: 46183.96379281439 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 196591.10078053272,
            "unit": "ns/iter",
            "extra": "iterations: 4356\ncpu: 196580.78512396748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 158120.50805406028,
            "unit": "ns/iter",
            "extra": "iterations: 5401\ncpu: 158113.20125902552 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 154207.2815201732,
            "unit": "ns/iter",
            "extra": "iterations: 5552\ncpu: 154198.73919308415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 155940.3626413683,
            "unit": "ns/iter",
            "extra": "iterations: 5482\ncpu: 155932.8712148839 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 348508.12009607215,
            "unit": "ns/iter",
            "extra": "iterations: 2498\ncpu: 348494.27542033803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2975867.261682197,
            "unit": "ns/iter",
            "extra": "iterations: 321\ncpu: 2975614.9532710346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 2398698.5754475747,
            "unit": "ns/iter",
            "extra": "iterations: 391\ncpu: 2398660.1023017825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 2429171.717948701,
            "unit": "ns/iter",
            "extra": "iterations: 390\ncpu: 2429108.2051282167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 2411850.937984422,
            "unit": "ns/iter",
            "extra": "iterations: 387\ncpu: 2411782.6873384994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1415554.4216134665,
            "unit": "ns/iter",
            "extra": "iterations: 657\ncpu: 1415547.1841704806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 2336519.5413533826,
            "unit": "ns/iter",
            "extra": "iterations: 399\ncpu: 2336438.8471177863 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 10068104.944444394,
            "unit": "ns/iter",
            "extra": "iterations: 108\ncpu: 10067974.999999987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 5758296.975609871,
            "unit": "ns/iter",
            "extra": "iterations: 164\ncpu: 5758257.926829271 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 45964.908770555434,
            "unit": "ns/iter",
            "extra": "iterations: 17878\ncpu: 45963.07193198332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 192262.71345290303,
            "unit": "ns/iter",
            "extra": "iterations: 4460\ncpu: 192258.34080717573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 155403.18321856088,
            "unit": "ns/iter",
            "extra": "iterations: 5518\ncpu: 155398.27836172527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 154344.7412953281,
            "unit": "ns/iter",
            "extra": "iterations: 5543\ncpu: 154342.81075230072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 154589.75307303225,
            "unit": "ns/iter",
            "extra": "iterations: 5532\ncpu: 154585.21330441016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 347012.2053535809,
            "unit": "ns/iter",
            "extra": "iterations: 2503\ncpu: 347010.50739113154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2903867.5437499606,
            "unit": "ns/iter",
            "extra": "iterations: 320\ncpu: 2903822.1875000047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 2395459.0969387484,
            "unit": "ns/iter",
            "extra": "iterations: 392\ncpu: 2395413.5204081535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 2399725.8692307426,
            "unit": "ns/iter",
            "extra": "iterations: 390\ncpu: 2399650.2564102504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 2404295.2871795,
            "unit": "ns/iter",
            "extra": "iterations: 390\ncpu: 2404282.5641025626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1417875.5555555462,
            "unit": "ns/iter",
            "extra": "iterations: 657\ncpu: 1417868.6453576894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 2331769.3416459095,
            "unit": "ns/iter",
            "extra": "iterations: 401\ncpu: 2331679.551122196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 2591.395646119837,
            "unit": "ns/iter",
            "extra": "iterations: 270747\ncpu: 2591.3845767450707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 19593.107786437628,
            "unit": "ns/iter",
            "extra": "iterations: 35793\ncpu: 19592.51529628702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 15045.252926143618,
            "unit": "ns/iter",
            "extra": "iterations: 46563\ncpu: 15045.203272985085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 14906.401330519024,
            "unit": "ns/iter",
            "extra": "iterations: 46899\ncpu: 14906.134459157049 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 11274.743583547077,
            "unit": "ns/iter",
            "extra": "iterations: 62067\ncpu: 11274.364799329705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 81610.21150709888,
            "unit": "ns/iter",
            "extra": "iterations: 8586\ncpu: 81609.6552527366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 184669.94796920402,
            "unit": "ns/iter",
            "extra": "iterations: 3767\ncpu: 184662.9944252698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 45459.865690267776,
            "unit": "ns/iter",
            "extra": "iterations: 15226\ncpu: 45459.56915801934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 45555.08279758476,
            "unit": "ns/iter",
            "extra": "iterations: 15399\ncpu: 45554.58146632953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 45596.141901545285,
            "unit": "ns/iter",
            "extra": "iterations: 15398\ncpu: 45595.75918950516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 96684.06857458664,
            "unit": "ns/iter",
            "extra": "iterations: 7233\ncpu: 96683.3125950507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 86028.05945216067,
            "unit": "ns/iter",
            "extra": "iterations: 8141\ncpu: 86026.53236703183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 24208.359225985234,
            "unit": "ns/iter",
            "extra": "iterations: 28940\ncpu: 24207.850725639357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 117713.55542453533,
            "unit": "ns/iter",
            "extra": "iterations: 5936\ncpu: 117713.15700808605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 94897.73310811052,
            "unit": "ns/iter",
            "extra": "iterations: 7400\ncpu: 94893.7837837835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 94901.50717573777,
            "unit": "ns/iter",
            "extra": "iterations: 7386\ncpu: 94899.82399133411 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 95581.94439902039,
            "unit": "ns/iter",
            "extra": "iterations: 7338\ncpu: 95579.9809212318 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 177469.1949302985,
            "unit": "ns/iter",
            "extra": "iterations: 3945\ncpu: 177461.49556400723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 788871.856659166,
            "unit": "ns/iter",
            "extra": "iterations: 886\ncpu: 788867.4943566709 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 664420.6688805036,
            "unit": "ns/iter",
            "extra": "iterations: 1054\ncpu: 664383.7760910805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 668595.207816924,
            "unit": "ns/iter",
            "extra": "iterations: 1049\ncpu: 668592.4690181088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 671296.9788867735,
            "unit": "ns/iter",
            "extra": "iterations: 1042\ncpu: 671284.9328214996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 424806.37037036906,
            "unit": "ns/iter",
            "extra": "iterations: 1647\ncpu: 424804.00728597614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 652357.8602050148,
            "unit": "ns/iter",
            "extra": "iterations: 1073\ncpu: 652363.2805218949 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 24206.328702743245,
            "unit": "ns/iter",
            "extra": "iterations: 28938\ncpu: 24205.58780841802 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 116614.45175804113,
            "unit": "ns/iter",
            "extra": "iterations: 6001\ncpu: 116613.6810531582 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 94808.43217107118,
            "unit": "ns/iter",
            "extra": "iterations: 7342\ncpu: 94803.74557341465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 94942.37923556288,
            "unit": "ns/iter",
            "extra": "iterations: 7378\ncpu: 94941.98969910653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 96351.04449007814,
            "unit": "ns/iter",
            "extra": "iterations: 7305\ncpu: 96349.85626283355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 178158.25356415642,
            "unit": "ns/iter",
            "extra": "iterations: 3928\ncpu: 178158.0193482692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 786228.8653198864,
            "unit": "ns/iter",
            "extra": "iterations: 891\ncpu: 786227.1604938228 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 665362.864632994,
            "unit": "ns/iter",
            "extra": "iterations: 1049\ncpu: 665325.1668255517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 665403.3838862517,
            "unit": "ns/iter",
            "extra": "iterations: 1055\ncpu: 665387.6777251146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 668877.7712106734,
            "unit": "ns/iter",
            "extra": "iterations: 1049\ncpu: 668873.4985700689 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 424417.601212092,
            "unit": "ns/iter",
            "extra": "iterations: 1650\ncpu: 424415.27272727044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 652962.0306406678,
            "unit": "ns/iter",
            "extra": "iterations: 1077\ncpu: 652949.767873714 ns\nthreads: 1"
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
        "date": 1702397929536,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 7700.0681657149335,
            "unit": "ns/iter",
            "extra": "iterations: 90324\ncpu: 7699.888180328596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 94119.68183321017,
            "unit": "ns/iter",
            "extra": "iterations: 9077\ncpu: 94119.16932907348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 182065.4518643308,
            "unit": "ns/iter",
            "extra": "iterations: 4747\ncpu: 182064.48283126176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 272514.1224747462,
            "unit": "ns/iter",
            "extra": "iterations: 3168\ncpu: 272515.9722222223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 354641.07869401935,
            "unit": "ns/iter",
            "extra": "iterations: 2389\ncpu: 354643.15613227297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 440999.60466295166,
            "unit": "ns/iter",
            "extra": "iterations: 1973\ncpu: 440995.3370501773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 528847.8069007384,
            "unit": "ns/iter",
            "extra": "iterations: 1652\ncpu: 528843.8861985471 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 613372.5835693942,
            "unit": "ns/iter",
            "extra": "iterations: 1412\ncpu: 613370.8215297456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 562327.6910000073,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 562333.1999999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 5912.199998343776,
            "unit": "ns/iter",
            "extra": "iterations: 120766\ncpu: 5912.0439527681565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 4781.525390558035,
            "unit": "ns/iter",
            "extra": "iterations: 146137\ncpu: 4781.562506415214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4779.492379547903,
            "unit": "ns/iter",
            "extra": "iterations: 146448\ncpu: 4779.527204195348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 4797.599286368563,
            "unit": "ns/iter",
            "extra": "iterations: 146294\ncpu: 4797.639684471006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 8732.7954336078,
            "unit": "ns/iter",
            "extra": "iterations: 80326\ncpu: 8732.86482583471 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 46056.40549371514,
            "unit": "ns/iter",
            "extra": "iterations: 18057\ncpu: 46055.668161931644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 197366.09556626924,
            "unit": "ns/iter",
            "extra": "iterations: 4353\ncpu: 197365.24236158977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 156877.98428074876,
            "unit": "ns/iter",
            "extra": "iterations: 5471\ncpu: 156876.8049716689 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 153176.65377761863,
            "unit": "ns/iter",
            "extra": "iterations: 5612\ncpu: 153176.1225944407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 153811.66338230358,
            "unit": "ns/iter",
            "extra": "iterations: 5582\ncpu: 153807.75707631634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 357275.131589708,
            "unit": "ns/iter",
            "extra": "iterations: 2447\ncpu: 357272.9873314264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2935093.616099036,
            "unit": "ns/iter",
            "extra": "iterations: 323\ncpu: 2935044.5820433428 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 2389205.1071428,
            "unit": "ns/iter",
            "extra": "iterations: 392\ncpu: 2389222.704081636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 2394709.301790169,
            "unit": "ns/iter",
            "extra": "iterations: 391\ncpu: 2394672.634271106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 2403114.621134045,
            "unit": "ns/iter",
            "extra": "iterations: 388\ncpu: 2403138.144329899 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1426130.1735790663,
            "unit": "ns/iter",
            "extra": "iterations: 651\ncpu: 1426115.9754224266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 2329008.807979979,
            "unit": "ns/iter",
            "extra": "iterations: 401\ncpu: 2329005.2369077276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 9906044.719626378,
            "unit": "ns/iter",
            "extra": "iterations: 107\ncpu: 9905957.009345785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 5562862.301775104,
            "unit": "ns/iter",
            "extra": "iterations: 169\ncpu: 5562600.591715994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 11813057.95555545,
            "unit": "ns/iter",
            "extra": "iterations: 90\ncpu: 11812041.111111112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 46186.76493266895,
            "unit": "ns/iter",
            "extra": "iterations: 17897\ncpu: 46183.96379281439 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 196591.10078053272,
            "unit": "ns/iter",
            "extra": "iterations: 4356\ncpu: 196580.78512396748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 158120.50805406028,
            "unit": "ns/iter",
            "extra": "iterations: 5401\ncpu: 158113.20125902552 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 154207.2815201732,
            "unit": "ns/iter",
            "extra": "iterations: 5552\ncpu: 154198.73919308415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 155940.3626413683,
            "unit": "ns/iter",
            "extra": "iterations: 5482\ncpu: 155932.8712148839 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 348508.12009607215,
            "unit": "ns/iter",
            "extra": "iterations: 2498\ncpu: 348494.27542033803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2975867.261682197,
            "unit": "ns/iter",
            "extra": "iterations: 321\ncpu: 2975614.9532710346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 2398698.5754475747,
            "unit": "ns/iter",
            "extra": "iterations: 391\ncpu: 2398660.1023017825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 2429171.717948701,
            "unit": "ns/iter",
            "extra": "iterations: 390\ncpu: 2429108.2051282167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 2411850.937984422,
            "unit": "ns/iter",
            "extra": "iterations: 387\ncpu: 2411782.6873384994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1415554.4216134665,
            "unit": "ns/iter",
            "extra": "iterations: 657\ncpu: 1415547.1841704806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 2336519.5413533826,
            "unit": "ns/iter",
            "extra": "iterations: 399\ncpu: 2336438.8471177863 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 10068104.944444394,
            "unit": "ns/iter",
            "extra": "iterations: 108\ncpu: 10067974.999999987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 5758296.975609871,
            "unit": "ns/iter",
            "extra": "iterations: 164\ncpu: 5758257.926829271 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 45964.908770555434,
            "unit": "ns/iter",
            "extra": "iterations: 17878\ncpu: 45963.07193198332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 192262.71345290303,
            "unit": "ns/iter",
            "extra": "iterations: 4460\ncpu: 192258.34080717573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 155403.18321856088,
            "unit": "ns/iter",
            "extra": "iterations: 5518\ncpu: 155398.27836172527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 154344.7412953281,
            "unit": "ns/iter",
            "extra": "iterations: 5543\ncpu: 154342.81075230072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 154589.75307303225,
            "unit": "ns/iter",
            "extra": "iterations: 5532\ncpu: 154585.21330441016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 347012.2053535809,
            "unit": "ns/iter",
            "extra": "iterations: 2503\ncpu: 347010.50739113154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2903867.5437499606,
            "unit": "ns/iter",
            "extra": "iterations: 320\ncpu: 2903822.1875000047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 2395459.0969387484,
            "unit": "ns/iter",
            "extra": "iterations: 392\ncpu: 2395413.5204081535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 2399725.8692307426,
            "unit": "ns/iter",
            "extra": "iterations: 390\ncpu: 2399650.2564102504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 2404295.2871795,
            "unit": "ns/iter",
            "extra": "iterations: 390\ncpu: 2404282.5641025626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1417875.5555555462,
            "unit": "ns/iter",
            "extra": "iterations: 657\ncpu: 1417868.6453576894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 2331769.3416459095,
            "unit": "ns/iter",
            "extra": "iterations: 401\ncpu: 2331679.551122196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 2591.395646119837,
            "unit": "ns/iter",
            "extra": "iterations: 270747\ncpu: 2591.3845767450707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 19593.107786437628,
            "unit": "ns/iter",
            "extra": "iterations: 35793\ncpu: 19592.51529628702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 15045.252926143618,
            "unit": "ns/iter",
            "extra": "iterations: 46563\ncpu: 15045.203272985085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 14906.401330519024,
            "unit": "ns/iter",
            "extra": "iterations: 46899\ncpu: 14906.134459157049 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 11274.743583547077,
            "unit": "ns/iter",
            "extra": "iterations: 62067\ncpu: 11274.364799329705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 81610.21150709888,
            "unit": "ns/iter",
            "extra": "iterations: 8586\ncpu: 81609.6552527366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 184669.94796920402,
            "unit": "ns/iter",
            "extra": "iterations: 3767\ncpu: 184662.9944252698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 45459.865690267776,
            "unit": "ns/iter",
            "extra": "iterations: 15226\ncpu: 45459.56915801934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 45555.08279758476,
            "unit": "ns/iter",
            "extra": "iterations: 15399\ncpu: 45554.58146632953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 45596.141901545285,
            "unit": "ns/iter",
            "extra": "iterations: 15398\ncpu: 45595.75918950516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 96684.06857458664,
            "unit": "ns/iter",
            "extra": "iterations: 7233\ncpu: 96683.3125950507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 86028.05945216067,
            "unit": "ns/iter",
            "extra": "iterations: 8141\ncpu: 86026.53236703183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 24208.359225985234,
            "unit": "ns/iter",
            "extra": "iterations: 28940\ncpu: 24207.850725639357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 117713.55542453533,
            "unit": "ns/iter",
            "extra": "iterations: 5936\ncpu: 117713.15700808605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 94897.73310811052,
            "unit": "ns/iter",
            "extra": "iterations: 7400\ncpu: 94893.7837837835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 94901.50717573777,
            "unit": "ns/iter",
            "extra": "iterations: 7386\ncpu: 94899.82399133411 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 95581.94439902039,
            "unit": "ns/iter",
            "extra": "iterations: 7338\ncpu: 95579.9809212318 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 177469.1949302985,
            "unit": "ns/iter",
            "extra": "iterations: 3945\ncpu: 177461.49556400723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 788871.856659166,
            "unit": "ns/iter",
            "extra": "iterations: 886\ncpu: 788867.4943566709 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 664420.6688805036,
            "unit": "ns/iter",
            "extra": "iterations: 1054\ncpu: 664383.7760910805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 668595.207816924,
            "unit": "ns/iter",
            "extra": "iterations: 1049\ncpu: 668592.4690181088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 671296.9788867735,
            "unit": "ns/iter",
            "extra": "iterations: 1042\ncpu: 671284.9328214996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 424806.37037036906,
            "unit": "ns/iter",
            "extra": "iterations: 1647\ncpu: 424804.00728597614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 652357.8602050148,
            "unit": "ns/iter",
            "extra": "iterations: 1073\ncpu: 652363.2805218949 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 24206.328702743245,
            "unit": "ns/iter",
            "extra": "iterations: 28938\ncpu: 24205.58780841802 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 116614.45175804113,
            "unit": "ns/iter",
            "extra": "iterations: 6001\ncpu: 116613.6810531582 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 94808.43217107118,
            "unit": "ns/iter",
            "extra": "iterations: 7342\ncpu: 94803.74557341465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 94942.37923556288,
            "unit": "ns/iter",
            "extra": "iterations: 7378\ncpu: 94941.98969910653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 96351.04449007814,
            "unit": "ns/iter",
            "extra": "iterations: 7305\ncpu: 96349.85626283355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 178158.25356415642,
            "unit": "ns/iter",
            "extra": "iterations: 3928\ncpu: 178158.0193482692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 786228.8653198864,
            "unit": "ns/iter",
            "extra": "iterations: 891\ncpu: 786227.1604938228 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 665362.864632994,
            "unit": "ns/iter",
            "extra": "iterations: 1049\ncpu: 665325.1668255517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 665403.3838862517,
            "unit": "ns/iter",
            "extra": "iterations: 1055\ncpu: 665387.6777251146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 668877.7712106734,
            "unit": "ns/iter",
            "extra": "iterations: 1049\ncpu: 668873.4985700689 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 424417.601212092,
            "unit": "ns/iter",
            "extra": "iterations: 1650\ncpu: 424415.27272727044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 652962.0306406678,
            "unit": "ns/iter",
            "extra": "iterations: 1077\ncpu: 652949.767873714 ns\nthreads: 1"
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
        "date": 1702398817985,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 7742.3364913745445,
            "unit": "ns/iter",
            "extra": "iterations: 90668\ncpu: 7742.0721754091865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 96083.19263583336,
            "unit": "ns/iter",
            "extra": "iterations: 8908\ncpu: 96080.55680287379 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 186295.14048139163,
            "unit": "ns/iter",
            "extra": "iterations: 4570\ncpu: 186294.46389496716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 278672.25168539624,
            "unit": "ns/iter",
            "extra": "iterations: 3115\ncpu: 278662.6003210272 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 362722.02431741974,
            "unit": "ns/iter",
            "extra": "iterations: 2344\ncpu: 362711.34812286677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 449933.3155080115,
            "unit": "ns/iter",
            "extra": "iterations: 1870\ncpu: 449925.18716577545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 538711.9227441178,
            "unit": "ns/iter",
            "extra": "iterations: 1618\ncpu: 538691.1001236093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 503182.37300001556,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 503162.5000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 574340.5100000133,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 574330.3999999992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 5885.887572063402,
            "unit": "ns/iter",
            "extra": "iterations: 118298\ncpu: 5885.643037075859 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 4807.3261900169255,
            "unit": "ns/iter",
            "extra": "iterations: 145124\ncpu: 4807.02847220309 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4791.032613004093,
            "unit": "ns/iter",
            "extra": "iterations: 146322\ncpu: 4790.969232241215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 4850.800016682721,
            "unit": "ns/iter",
            "extra": "iterations: 143862\ncpu: 4850.369103724402 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 8759.340918742317,
            "unit": "ns/iter",
            "extra": "iterations: 80066\ncpu: 8759.224889466186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 50593.943434954155,
            "unit": "ns/iter",
            "extra": "iterations: 16565\ncpu: 50590.48596438275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 196402.28346277223,
            "unit": "ns/iter",
            "extra": "iterations: 4378\ncpu: 196391.3430790317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 159919.94135226466,
            "unit": "ns/iter",
            "extra": "iterations: 5354\ncpu: 159909.43220022388 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 154236.7205035962,
            "unit": "ns/iter",
            "extra": "iterations: 5560\ncpu: 154229.6402877696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 154901.78776394512,
            "unit": "ns/iter",
            "extra": "iterations: 5541\ncpu: 154891.44558743908 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 359742.89975349617,
            "unit": "ns/iter",
            "extra": "iterations: 2434\ncpu: 359716.47493837425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2981182.3396226233,
            "unit": "ns/iter",
            "extra": "iterations: 318\ncpu: 2980998.742138372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 2438625.9948052857,
            "unit": "ns/iter",
            "extra": "iterations: 385\ncpu: 2438479.480519482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 2544214.8363636495,
            "unit": "ns/iter",
            "extra": "iterations: 385\ncpu: 2543966.4935064903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 2462327.322751318,
            "unit": "ns/iter",
            "extra": "iterations: 378\ncpu: 2462211.111111106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1448259.9312500176,
            "unit": "ns/iter",
            "extra": "iterations: 640\ncpu: 1448197.968749998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 2369030.0583756925,
            "unit": "ns/iter",
            "extra": "iterations: 394\ncpu: 2368864.4670050764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 10010701.745283043,
            "unit": "ns/iter",
            "extra": "iterations: 106\ncpu: 10009956.603773592 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 5440373.343023255,
            "unit": "ns/iter",
            "extra": "iterations: 172\ncpu: 5439874.418604658 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 12013293.112359539,
            "unit": "ns/iter",
            "extra": "iterations: 89\ncpu: 12012537.07865167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 48369.01312808488,
            "unit": "ns/iter",
            "extra": "iterations: 17215\ncpu: 48365.890212024526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 203510.0507384462,
            "unit": "ns/iter",
            "extra": "iterations: 4198\ncpu: 203494.87851357862 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 162682.83236014794,
            "unit": "ns/iter",
            "extra": "iterations: 5309\ncpu: 162675.04238086333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 155608.3382940114,
            "unit": "ns/iter",
            "extra": "iterations: 5510\ncpu: 155597.11433756838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 156946.22303876487,
            "unit": "ns/iter",
            "extra": "iterations: 5443\ncpu: 156936.74444240288 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 353906.96477732767,
            "unit": "ns/iter",
            "extra": "iterations: 2470\ncpu: 353882.5101214575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2955206.4132493073,
            "unit": "ns/iter",
            "extra": "iterations: 317\ncpu: 2955056.1514195604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 2446290.863874277,
            "unit": "ns/iter",
            "extra": "iterations: 382\ncpu: 2446121.4659685823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 2436637.572916715,
            "unit": "ns/iter",
            "extra": "iterations: 384\ncpu: 2436470.0520833246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 2451439.601049832,
            "unit": "ns/iter",
            "extra": "iterations: 381\ncpu: 2451303.937007877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1448519.3385093387,
            "unit": "ns/iter",
            "extra": "iterations: 644\ncpu: 1448439.5962733028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 2370172.4759493857,
            "unit": "ns/iter",
            "extra": "iterations: 395\ncpu: 2370028.8607595013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 10142622.676190577,
            "unit": "ns/iter",
            "extra": "iterations: 105\ncpu: 10141834.28571429 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 5601212.712574811,
            "unit": "ns/iter",
            "extra": "iterations: 167\ncpu: 5600858.682634735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 45703.176538587184,
            "unit": "ns/iter",
            "extra": "iterations: 18166\ncpu: 45700.06605746999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 195156.40448673346,
            "unit": "ns/iter",
            "extra": "iterations: 4413\ncpu: 195145.16202130134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 157963.6925202637,
            "unit": "ns/iter",
            "extra": "iterations: 5428\ncpu: 157955.71112748684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 154388.7673285196,
            "unit": "ns/iter",
            "extra": "iterations: 5540\ncpu: 154378.62815884507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 154883.30232977288,
            "unit": "ns/iter",
            "extra": "iterations: 5537\ncpu: 154870.63391728373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 356931.9889615557,
            "unit": "ns/iter",
            "extra": "iterations: 2446\ncpu: 356913.9411283745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2944295.4700315804,
            "unit": "ns/iter",
            "extra": "iterations: 317\ncpu: 2944151.419558355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 2431901.36718748,
            "unit": "ns/iter",
            "extra": "iterations: 384\ncpu: 2431745.0520833414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 2433565.2864582906,
            "unit": "ns/iter",
            "extra": "iterations: 384\ncpu: 2433399.4791666535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 2438937.7859008485,
            "unit": "ns/iter",
            "extra": "iterations: 383\ncpu: 2438833.4203655357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1454935.8018720846,
            "unit": "ns/iter",
            "extra": "iterations: 641\ncpu: 1454906.240249618 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 2363093.2020202437,
            "unit": "ns/iter",
            "extra": "iterations: 396\ncpu: 2363004.797979792 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 2670.8435373888096,
            "unit": "ns/iter",
            "extra": "iterations: 261628\ncpu: 2670.794410384213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 19438.947078221077,
            "unit": "ns/iter",
            "extra": "iterations: 36998\ncpu: 19437.48040434626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 14673.315510708328,
            "unit": "ns/iter",
            "extra": "iterations: 47767\ncpu: 14672.675696610595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 14442.191514327778,
            "unit": "ns/iter",
            "extra": "iterations: 48576\ncpu: 14441.154067852543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 11376.182224606426,
            "unit": "ns/iter",
            "extra": "iterations: 61512\ncpu: 11375.419430355143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 84454.03111808226,
            "unit": "ns/iter",
            "extra": "iterations: 8291\ncpu: 84449.2220480026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 187985.56627155043,
            "unit": "ns/iter",
            "extra": "iterations: 3712\ncpu: 187982.97413793157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 45785.290328910116,
            "unit": "ns/iter",
            "extra": "iterations: 15293\ncpu: 45781.14823775538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 45827.07028335642,
            "unit": "ns/iter",
            "extra": "iterations: 15281\ncpu: 45823.53249132895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 46381.51568912892,
            "unit": "ns/iter",
            "extra": "iterations: 15106\ncpu: 46377.88958029901 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 97943.3596589275,
            "unit": "ns/iter",
            "extra": "iterations: 7154\ncpu: 97938.845401174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 86998.6275827761,
            "unit": "ns/iter",
            "extra": "iterations: 8034\ncpu: 86990.63978093014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 24467.808152973135,
            "unit": "ns/iter",
            "extra": "iterations: 28554\ncpu: 24466.067801358728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 122824.15981734877,
            "unit": "ns/iter",
            "extra": "iterations: 5694\ncpu: 122820.23182297191 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 98566.61610037921,
            "unit": "ns/iter",
            "extra": "iterations: 7093\ncpu: 98565.0359509376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 98473.97733989934,
            "unit": "ns/iter",
            "extra": "iterations: 7105\ncpu: 98468.17733990097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 98895.44568441267,
            "unit": "ns/iter",
            "extra": "iterations: 7079\ncpu: 98888.21867495435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 179040.6711838489,
            "unit": "ns/iter",
            "extra": "iterations: 3911\ncpu: 179027.1797494278 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 812443.7006960477,
            "unit": "ns/iter",
            "extra": "iterations: 862\ncpu: 812368.0974477889 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 682198.754146312,
            "unit": "ns/iter",
            "extra": "iterations: 1025\ncpu: 682179.8048780493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 682972.2441406561,
            "unit": "ns/iter",
            "extra": "iterations: 1024\ncpu: 682931.542968751 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 695306.7564356527,
            "unit": "ns/iter",
            "extra": "iterations: 1010\ncpu: 695254.4554455318 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 438049.3137499997,
            "unit": "ns/iter",
            "extra": "iterations: 1600\ncpu: 438015.3750000027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 670766.2162678946,
            "unit": "ns/iter",
            "extra": "iterations: 1045\ncpu: 670719.0430622072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 24886.077116986682,
            "unit": "ns/iter",
            "extra": "iterations: 28165\ncpu: 24884.63341026087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 130184.60717411012,
            "unit": "ns/iter",
            "extra": "iterations: 5715\ncpu: 130171.51356080636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 98923.1045871535,
            "unit": "ns/iter",
            "extra": "iterations: 7085\ncpu: 98915.49752999289 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 99100.63995469829,
            "unit": "ns/iter",
            "extra": "iterations: 7063\ncpu: 99098.06031431466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 100231.1407926702,
            "unit": "ns/iter",
            "extra": "iterations: 6989\ncpu: 100224.4527114039 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 181068.89317124858,
            "unit": "ns/iter",
            "extra": "iterations: 3866\ncpu: 181060.39834454158 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 808777.66474659,
            "unit": "ns/iter",
            "extra": "iterations: 868\ncpu: 808711.4055299492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 684266.1941176157,
            "unit": "ns/iter",
            "extra": "iterations: 1020\ncpu: 684215.5882352901 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 681924.1062377848,
            "unit": "ns/iter",
            "extra": "iterations: 1026\ncpu: 681903.5087719216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 688901.0108374923,
            "unit": "ns/iter",
            "extra": "iterations: 1015\ncpu: 688821.5763546787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 434373.29503102554,
            "unit": "ns/iter",
            "extra": "iterations: 1610\ncpu: 434366.14906831697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 669428.042065053,
            "unit": "ns/iter",
            "extra": "iterations: 1046\ncpu: 669353.9196940833 ns\nthreads: 1"
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
        "date": 1702409095352,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 7084.85672224694,
            "unit": "ns/iter",
            "extra": "iterations: 98836\ncpu: 7084.561293455826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 88087.57552620495,
            "unit": "ns/iter",
            "extra": "iterations: 9692\ncpu: 88081.58274865866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 170928.00898964636,
            "unit": "ns/iter",
            "extra": "iterations: 5117\ncpu: 170920.73480555016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 256412.21301776424,
            "unit": "ns/iter",
            "extra": "iterations: 3380\ncpu: 256388.3727810651 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 334630.285714289,
            "unit": "ns/iter",
            "extra": "iterations: 2590\ncpu: 334621.3127413129 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 426516.77777777205,
            "unit": "ns/iter",
            "extra": "iterations: 2070\ncpu: 426506.0869565217 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 495399.989374279,
            "unit": "ns/iter",
            "extra": "iterations: 1694\ncpu: 495368.94923258555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 588480.4030443494,
            "unit": "ns/iter",
            "extra": "iterations: 1511\ncpu: 588440.172071475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 539845.6639999836,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 539775.3000000005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 5405.435540069654,
            "unit": "ns/iter",
            "extra": "iterations: 129724\ncpu: 5404.984428478922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 4443.299169538579,
            "unit": "ns/iter",
            "extra": "iterations: 157262\ncpu: 4442.939171573546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4488.961625860142,
            "unit": "ns/iter",
            "extra": "iterations: 156225\ncpu: 4488.702192350771 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 4472.216316424346,
            "unit": "ns/iter",
            "extra": "iterations: 156701\ncpu: 4471.751297056179 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 7920.258190045143,
            "unit": "ns/iter",
            "extra": "iterations: 88400\ncpu: 7919.7816742081395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 45855.02385453652,
            "unit": "ns/iter",
            "extra": "iterations: 17984\ncpu: 45850.32806939501 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 189858.0398415036,
            "unit": "ns/iter",
            "extra": "iterations: 4543\ncpu: 189849.94497028372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 152163.98836183644,
            "unit": "ns/iter",
            "extra": "iterations: 5671\ncpu: 152148.58049726667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 149827.86786153712,
            "unit": "ns/iter",
            "extra": "iterations: 5691\ncpu: 149814.63714637118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 151070.63822704804,
            "unit": "ns/iter",
            "extra": "iterations: 5708\ncpu: 151055.37841625768 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 351727.27587593696,
            "unit": "ns/iter",
            "extra": "iterations: 2483\ncpu: 351706.80628272344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2748842.7958579566,
            "unit": "ns/iter",
            "extra": "iterations: 338\ncpu: 2748626.92307693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 2248849.8454106483,
            "unit": "ns/iter",
            "extra": "iterations: 414\ncpu: 2248695.169082126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 2273102.513447417,
            "unit": "ns/iter",
            "extra": "iterations: 409\ncpu: 2272855.256723716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 2290370.593137249,
            "unit": "ns/iter",
            "extra": "iterations: 408\ncpu: 2290286.0294117625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1382213.0134128476,
            "unit": "ns/iter",
            "extra": "iterations: 671\ncpu: 1382081.669150518 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 2208438.37708828,
            "unit": "ns/iter",
            "extra": "iterations: 419\ncpu: 2208298.8066825774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 9740004.459459458,
            "unit": "ns/iter",
            "extra": "iterations: 111\ncpu: 9739277.477477465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 5543921.511904922,
            "unit": "ns/iter",
            "extra": "iterations: 168\ncpu: 5543448.214285709 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 11520774.946236715,
            "unit": "ns/iter",
            "extra": "iterations: 93\ncpu: 11519792.473118283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 44739.61251959416,
            "unit": "ns/iter",
            "extra": "iterations: 18499\ncpu: 44736.2776366291 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 187750.5652932276,
            "unit": "ns/iter",
            "extra": "iterations: 4587\ncpu: 187740.7237846083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 152911.82069087942,
            "unit": "ns/iter",
            "extra": "iterations: 5616\ncpu: 152902.49287749353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 153702.16028622392,
            "unit": "ns/iter",
            "extra": "iterations: 5590\ncpu: 153690.48300536638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 151744.9608741618,
            "unit": "ns/iter",
            "extra": "iterations: 5674\ncpu: 151734.9841381741 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 358836.49261084624,
            "unit": "ns/iter",
            "extra": "iterations: 2436\ncpu: 358806.2807881745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2753247.7418397465,
            "unit": "ns/iter",
            "extra": "iterations: 337\ncpu: 2753096.1424332308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 2264071.4233575813,
            "unit": "ns/iter",
            "extra": "iterations: 411\ncpu: 2263760.827250612 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 2293817.433168372,
            "unit": "ns/iter",
            "extra": "iterations: 404\ncpu: 2293776.485148515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 2308082.5796019915,
            "unit": "ns/iter",
            "extra": "iterations: 402\ncpu: 2307805.7213930446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1387372.458208941,
            "unit": "ns/iter",
            "extra": "iterations: 670\ncpu: 1387278.9552238768 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 2218902.527315933,
            "unit": "ns/iter",
            "extra": "iterations: 421\ncpu: 2218670.7838479807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 9819709.24107145,
            "unit": "ns/iter",
            "extra": "iterations: 112\ncpu: 9819341.964285767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 5513240.210526334,
            "unit": "ns/iter",
            "extra": "iterations: 171\ncpu: 5512772.51461989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 44080.549474465595,
            "unit": "ns/iter",
            "extra": "iterations: 18838\ncpu: 44078.24609831185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 186937.238416357,
            "unit": "ns/iter",
            "extra": "iterations: 4597\ncpu: 186927.14814009043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 150379.77029390828,
            "unit": "ns/iter",
            "extra": "iterations: 5716\ncpu: 150369.89153254035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 149193.35125261184,
            "unit": "ns/iter",
            "extra": "iterations: 5748\ncpu: 149189.92693110663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 149670.73370511824,
            "unit": "ns/iter",
            "extra": "iterations: 5738\ncpu: 149662.8267689081 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 343487.59400866757,
            "unit": "ns/iter",
            "extra": "iterations: 2537\ncpu: 343474.2215214834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2761344.7544378685,
            "unit": "ns/iter",
            "extra": "iterations: 338\ncpu: 2761095.56213017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 2266639.715328449,
            "unit": "ns/iter",
            "extra": "iterations: 411\ncpu: 2266483.69829685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 2291888.7438422563,
            "unit": "ns/iter",
            "extra": "iterations: 406\ncpu: 2291737.4384236364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 2312259.83084577,
            "unit": "ns/iter",
            "extra": "iterations: 402\ncpu: 2312065.6716417917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1378276.9646539288,
            "unit": "ns/iter",
            "extra": "iterations: 679\ncpu: 1378179.823269513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 2225274.869358719,
            "unit": "ns/iter",
            "extra": "iterations: 421\ncpu: 2225037.0546318297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 2696.8033323871996,
            "unit": "ns/iter",
            "extra": "iterations: 260714\ncpu: 2696.8064622536567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 17933.550683035584,
            "unit": "ns/iter",
            "extra": "iterations: 39017\ncpu: 17932.857472383734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 14358.290803777267,
            "unit": "ns/iter",
            "extra": "iterations: 50412\ncpu: 14357.21058478135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 13375.279652770987,
            "unit": "ns/iter",
            "extra": "iterations: 52415\ncpu: 13374.236382714806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 11041.656136086654,
            "unit": "ns/iter",
            "extra": "iterations: 63371\ncpu: 11040.68895867188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 77985.11659291986,
            "unit": "ns/iter",
            "extra": "iterations: 9040\ncpu: 77981.20575221136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 176722.32481389708,
            "unit": "ns/iter",
            "extra": "iterations: 4030\ncpu: 176705.93052109337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 42805.42081503379,
            "unit": "ns/iter",
            "extra": "iterations: 16392\ncpu: 42802.26939970727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 43314.03400873003,
            "unit": "ns/iter",
            "extra": "iterations: 15349\ncpu: 43310.55443351345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 43524.3873761616,
            "unit": "ns/iter",
            "extra": "iterations: 16049\ncpu: 43520.69910897905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 87366.26999375792,
            "unit": "ns/iter",
            "extra": "iterations: 8015\ncpu: 87357.74173424896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 81858.17981072643,
            "unit": "ns/iter",
            "extra": "iterations: 8559\ncpu: 81851.16251898682 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 21913.994307163943,
            "unit": "ns/iter",
            "extra": "iterations: 31970\ncpu: 21911.4982796372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 104444.34734809192,
            "unit": "ns/iter",
            "extra": "iterations: 6731\ncpu: 104444.33219432556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 84246.02156366617,
            "unit": "ns/iter",
            "extra": "iterations: 8301\ncpu: 84236.89916877376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 85216.15355622534,
            "unit": "ns/iter",
            "extra": "iterations: 8225\ncpu: 85209.43465045629 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 85738.49268233124,
            "unit": "ns/iter",
            "extra": "iterations: 8131\ncpu: 85730.52515065848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 162915.54214069675,
            "unit": "ns/iter",
            "extra": "iterations: 4307\ncpu: 162891.85047597115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 734162.8279118857,
            "unit": "ns/iter",
            "extra": "iterations: 953\ncpu: 734162.7492130074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 622096.329777782,
            "unit": "ns/iter",
            "extra": "iterations: 1125\ncpu: 622032.6222222133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 627336.4270367263,
            "unit": "ns/iter",
            "extra": "iterations: 1117\ncpu: 627278.0662488788 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 632069.9927404654,
            "unit": "ns/iter",
            "extra": "iterations: 1102\ncpu: 632002.9945553491 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 400846.40700345795,
            "unit": "ns/iter",
            "extra": "iterations: 1742\ncpu: 400810.6199770415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 611900.1032371063,
            "unit": "ns/iter",
            "extra": "iterations: 1143\ncpu: 611861.4173228338 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 21942.504285267012,
            "unit": "ns/iter",
            "extra": "iterations: 31970\ncpu: 21940.02502345952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 105263.58518964793,
            "unit": "ns/iter",
            "extra": "iterations: 6644\ncpu: 105260.77664057759 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 85760.72911577635,
            "unit": "ns/iter",
            "extra": "iterations: 8188\ncpu: 85749.01074743563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 84835.09044617297,
            "unit": "ns/iter",
            "extra": "iterations: 8248\ncpu: 84829.77691561723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 86611.81162499786,
            "unit": "ns/iter",
            "extra": "iterations: 8000\ncpu: 86606.23749999986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 161262.26774193803,
            "unit": "ns/iter",
            "extra": "iterations: 4340\ncpu: 161239.42396313377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 731780.7834727768,
            "unit": "ns/iter",
            "extra": "iterations: 956\ncpu: 731754.8117154872 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 622616.3792184953,
            "unit": "ns/iter",
            "extra": "iterations: 1126\ncpu: 622541.6518649982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 624083.2613737322,
            "unit": "ns/iter",
            "extra": "iterations: 1121\ncpu: 624032.4710080317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 629255.2741208369,
            "unit": "ns/iter",
            "extra": "iterations: 1109\ncpu: 629226.6005410238 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 399578.8634285873,
            "unit": "ns/iter",
            "extra": "iterations: 1750\ncpu: 399555.20000000077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 610274.8691099754,
            "unit": "ns/iter",
            "extra": "iterations: 1146\ncpu: 610204.4502617848 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}