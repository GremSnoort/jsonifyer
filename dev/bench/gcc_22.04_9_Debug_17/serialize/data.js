window.BENCHMARK_DATA = {
  "lastUpdate": 1702479567631,
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
        "date": 1702412529765,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 7208.567743664788,
            "unit": "ns/iter",
            "extra": "iterations: 96998\ncpu: 7207.759953813482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 67848.2609361186,
            "unit": "ns/iter",
            "extra": "iterations: 12413\ncpu: 67844.29227422865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 130718.95352894271,
            "unit": "ns/iter",
            "extra": "iterations: 6305\ncpu: 130710.35685963521 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 192811.5825393187,
            "unit": "ns/iter",
            "extra": "iterations: 4513\ncpu: 192804.6089076003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 255337.65934717996,
            "unit": "ns/iter",
            "extra": "iterations: 3370\ncpu: 255319.8516320476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 313965.2712727225,
            "unit": "ns/iter",
            "extra": "iterations: 2750\ncpu: 313952.9090909092 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 376424.0897712539,
            "unit": "ns/iter",
            "extra": "iterations: 2317\ncpu: 376402.8485110056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 438418.46716792445,
            "unit": "ns/iter",
            "extra": "iterations: 1995\ncpu: 438384.6616541352 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 497736.53283839085,
            "unit": "ns/iter",
            "extra": "iterations: 1751\ncpu: 497710.7938320963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 5400.630211349548,
            "unit": "ns/iter",
            "extra": "iterations: 129501\ncpu: 5400.453278353052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 4589.488886700192,
            "unit": "ns/iter",
            "extra": "iterations: 152295\ncpu: 4589.246528119767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4570.117817369131,
            "unit": "ns/iter",
            "extra": "iterations: 153008\ncpu: 4569.834257032314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 4577.570065277582,
            "unit": "ns/iter",
            "extra": "iterations: 152886\ncpu: 4577.33670839711 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 8310.003309530131,
            "unit": "ns/iter",
            "extra": "iterations: 84302\ncpu: 8309.55849208796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 29612.9113997116,
            "unit": "ns/iter",
            "extra": "iterations: 27720\ncpu: 29611.77128427129 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 123644.03660469942,
            "unit": "ns/iter",
            "extra": "iterations: 6939\ncpu: 123638.31964259966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 101188.37482269124,
            "unit": "ns/iter",
            "extra": "iterations: 8460\ncpu: 101184.34988179666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 99223.40626090973,
            "unit": "ns/iter",
            "extra": "iterations: 8593\ncpu: 99217.06039799807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 100001.21242911226,
            "unit": "ns/iter",
            "extra": "iterations: 8464\ncpu: 99996.63279773157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 277289.79649122414,
            "unit": "ns/iter",
            "extra": "iterations: 3135\ncpu: 277259.6810207334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2069016.0487804876,
            "unit": "ns/iter",
            "extra": "iterations: 451\ncpu: 2068911.5299334822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1682546.6213767324,
            "unit": "ns/iter",
            "extra": "iterations: 552\ncpu: 1682435.14492754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1675261.5252707712,
            "unit": "ns/iter",
            "extra": "iterations: 554\ncpu: 1675190.6137184124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1702766.1587590924,
            "unit": "ns/iter",
            "extra": "iterations: 548\ncpu: 1702658.5766423363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1000019.276641541,
            "unit": "ns/iter",
            "extra": "iterations: 929\ncpu: 1000000.5382131333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1638281.5528169484,
            "unit": "ns/iter",
            "extra": "iterations: 568\ncpu: 1638256.161971835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 6737988.800000493,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6737829.000000026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 3783968.5060728546,
            "unit": "ns/iter",
            "extra": "iterations: 247\ncpu: 3783868.0161943403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 8589758.283464765,
            "unit": "ns/iter",
            "extra": "iterations: 127\ncpu: 8589513.385826766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 28865.31425258375,
            "unit": "ns/iter",
            "extra": "iterations: 28458\ncpu: 28864.400168669636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 127067.5658891709,
            "unit": "ns/iter",
            "extra": "iterations: 6731\ncpu: 127061.90759174005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 102217.37852429702,
            "unit": "ns/iter",
            "extra": "iterations: 8335\ncpu: 102213.37732453496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 101309.70773232738,
            "unit": "ns/iter",
            "extra": "iterations: 8458\ncpu: 101304.1144478597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 101551.91156220282,
            "unit": "ns/iter",
            "extra": "iterations: 8424\ncpu: 101547.73266856607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 278321.3073967399,
            "unit": "ns/iter",
            "extra": "iterations: 3123\ncpu: 278303.9065001586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2085408.5672645636,
            "unit": "ns/iter",
            "extra": "iterations: 446\ncpu: 2085322.6457399041 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1688829.3502722448,
            "unit": "ns/iter",
            "extra": "iterations: 551\ncpu: 1688736.11615246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1688395.3097826396,
            "unit": "ns/iter",
            "extra": "iterations: 552\ncpu: 1688381.3405797114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1707910.6051187867,
            "unit": "ns/iter",
            "extra": "iterations: 547\ncpu: 1707767.4588665366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 989278.6858359915,
            "unit": "ns/iter",
            "extra": "iterations: 939\ncpu: 989213.205537802 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1643040.9190140723,
            "unit": "ns/iter",
            "extra": "iterations: 568\ncpu: 1642942.78169014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 6765825.740000082,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6765781.000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 3781646.2307693143,
            "unit": "ns/iter",
            "extra": "iterations: 247\ncpu: 3781283.4008097113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 29158.563805023274,
            "unit": "ns/iter",
            "extra": "iterations: 27921\ncpu: 29157.114716521504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 123160.09459845164,
            "unit": "ns/iter",
            "extra": "iterations: 6998\ncpu: 123152.7436410403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 101450.52578779456,
            "unit": "ns/iter",
            "extra": "iterations: 8473\ncpu: 101447.01994571011 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 100732.97204251381,
            "unit": "ns/iter",
            "extra": "iterations: 8656\ncpu: 100723.94870610016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 100751.32588345646,
            "unit": "ns/iter",
            "extra": "iterations: 8546\ncpu: 100748.43201497792 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 277440.9865643068,
            "unit": "ns/iter",
            "extra": "iterations: 3126\ncpu: 277418.6500319901 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2064140.5607064273,
            "unit": "ns/iter",
            "extra": "iterations: 453\ncpu: 2064062.6931567308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1681062.7459165577,
            "unit": "ns/iter",
            "extra": "iterations: 551\ncpu: 1680948.638838471 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1670179.2198197942,
            "unit": "ns/iter",
            "extra": "iterations: 555\ncpu: 1670093.6936936907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1690360.2105263069,
            "unit": "ns/iter",
            "extra": "iterations: 551\ncpu: 1690260.2540834842 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 990224.8872340303,
            "unit": "ns/iter",
            "extra": "iterations: 940\ncpu: 990181.1702127648 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1633928.11228072,
            "unit": "ns/iter",
            "extra": "iterations: 570\ncpu: 1633816.6666666633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 2812.1873069894073,
            "unit": "ns/iter",
            "extra": "iterations: 253872\ncpu: 2812.0848301506308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 14592.030454630773,
            "unit": "ns/iter",
            "extra": "iterations: 47973\ncpu: 14591.309695036814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 11703.233308576708,
            "unit": "ns/iter",
            "extra": "iterations: 63281\ncpu: 11702.694331631965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 10843.46453000724,
            "unit": "ns/iter",
            "extra": "iterations: 64618\ncpu: 10842.32721532698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 9414.308568664812,
            "unit": "ns/iter",
            "extra": "iterations: 74434\ncpu: 9414.106456726799 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 62896.640021607906,
            "unit": "ns/iter",
            "extra": "iterations: 11109\ncpu: 62895.20208839675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 133148.90257282843,
            "unit": "ns/iter",
            "extra": "iterations: 5286\ncpu: 133145.6110480512 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 33734.26578073166,
            "unit": "ns/iter",
            "extra": "iterations: 20769\ncpu: 33733.64629977349 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 33638.12810275035,
            "unit": "ns/iter",
            "extra": "iterations: 20788\ncpu: 33637.53607850669 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 33985.2223192181,
            "unit": "ns/iter",
            "extra": "iterations: 20619\ncpu: 33984.64523012756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 68747.03775068633,
            "unit": "ns/iter",
            "extra": "iterations: 10172\ncpu: 68745.38930397177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 61366.27408899508,
            "unit": "ns/iter",
            "extra": "iterations: 11416\ncpu: 61365.76734407824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 19578.79210474645,
            "unit": "ns/iter",
            "extra": "iterations: 35667\ncpu: 19578.131045504502 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 93085.84811810213,
            "unit": "ns/iter",
            "extra": "iterations: 7519\ncpu: 93085.15760074566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 75435.96888078371,
            "unit": "ns/iter",
            "extra": "iterations: 9319\ncpu: 75434.72475587454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 74895.12388811764,
            "unit": "ns/iter",
            "extra": "iterations: 9331\ncpu: 74894.06280141452 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 75633.5521339857,
            "unit": "ns/iter",
            "extra": "iterations: 9255\ncpu: 75633.03079416577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 149033.83922487,
            "unit": "ns/iter",
            "extra": "iterations: 4696\ncpu: 149029.85519591166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 584408.8021702754,
            "unit": "ns/iter",
            "extra": "iterations: 1198\ncpu: 584393.2387312244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 493834.571731418,
            "unit": "ns/iter",
            "extra": "iterations: 1415\ncpu: 493821.41342756967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 494205.04087388783,
            "unit": "ns/iter",
            "extra": "iterations: 1419\ncpu: 494196.19450317085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 496143.08794326324,
            "unit": "ns/iter",
            "extra": "iterations: 1410\ncpu: 496130.7801418394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 324495.17130917805,
            "unit": "ns/iter",
            "extra": "iterations: 2154\ncpu: 324489.13649025344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 483446.3204419836,
            "unit": "ns/iter",
            "extra": "iterations: 1448\ncpu: 483443.23204419314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 19983.564139900132,
            "unit": "ns/iter",
            "extra": "iterations: 35025\ncpu: 19982.466809422196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 94848.88248036707,
            "unit": "ns/iter",
            "extra": "iterations: 7386\ncpu: 94847.21093961547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 76316.37077426034,
            "unit": "ns/iter",
            "extra": "iterations: 9170\ncpu: 76315.77971646696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 76727.10322438355,
            "unit": "ns/iter",
            "extra": "iterations: 9087\ncpu: 76724.96973698612 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 76908.43982808331,
            "unit": "ns/iter",
            "extra": "iterations: 9074\ncpu: 76907.81353317191 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 150740.6704667602,
            "unit": "ns/iter",
            "extra": "iterations: 4649\ncpu: 150735.23338352438 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 581960.0946843927,
            "unit": "ns/iter",
            "extra": "iterations: 1204\ncpu: 581950.6644518274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 490639.14025246556,
            "unit": "ns/iter",
            "extra": "iterations: 1426\ncpu: 490625.5960729329 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 489929.62385961635,
            "unit": "ns/iter",
            "extra": "iterations: 1425\ncpu: 489925.19298246066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 493059.35377025325,
            "unit": "ns/iter",
            "extra": "iterations: 1419\ncpu: 493050.95137420803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 324421.8319444243,
            "unit": "ns/iter",
            "extra": "iterations: 2160\ncpu: 324416.29629629676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 481905.9924190072,
            "unit": "ns/iter",
            "extra": "iterations: 1451\ncpu: 481904.0661612635 ns\nthreads: 1"
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
        "date": 1702418345297,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 7163.089513647922,
            "unit": "ns/iter",
            "extra": "iterations: 97851\ncpu: 7162.825111649345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 66561.26992611372,
            "unit": "ns/iter",
            "extra": "iterations: 12722\ncpu: 66561.05958182673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 127146.71237263226,
            "unit": "ns/iter",
            "extra": "iterations: 6870\ncpu: 127142.18340611356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 187496.42272041162,
            "unit": "ns/iter",
            "extra": "iterations: 4639\ncpu: 187492.80017245098 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 248068.14486920816,
            "unit": "ns/iter",
            "extra": "iterations: 3479\ncpu: 248060.3909169302 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 304424.8631541574,
            "unit": "ns/iter",
            "extra": "iterations: 2828\ncpu: 304410.43140028283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 366916.5776475656,
            "unit": "ns/iter",
            "extra": "iterations: 2389\ncpu: 366580.159062369 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 423300.67982455075,
            "unit": "ns/iter",
            "extra": "iterations: 2052\ncpu: 423295.6627680313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 484708.54101996607,
            "unit": "ns/iter",
            "extra": "iterations: 1804\ncpu: 484705.3215077606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 5331.43064519818,
            "unit": "ns/iter",
            "extra": "iterations: 131231\ncpu: 5331.346252028858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 4545.04633966796,
            "unit": "ns/iter",
            "extra": "iterations: 153497\ncpu: 4545.039316729317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4548.941825645915,
            "unit": "ns/iter",
            "extra": "iterations: 153951\ncpu: 4548.894778208658 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 4587.726832496936,
            "unit": "ns/iter",
            "extra": "iterations: 152606\ncpu: 4587.625650367616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 8095.466377089832,
            "unit": "ns/iter",
            "extra": "iterations: 86563\ncpu: 8095.059089911397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 30959.055584846963,
            "unit": "ns/iter",
            "extra": "iterations: 26554\ncpu: 30958.492129246057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 130695.11304347696,
            "unit": "ns/iter",
            "extra": "iterations: 6555\ncpu: 130692.4942791761 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 105035.74158550547,
            "unit": "ns/iter",
            "extra": "iterations: 8111\ncpu: 105034.75527061993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 103693.09007151927,
            "unit": "ns/iter",
            "extra": "iterations: 8249\ncpu: 103690.45944963027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 106572.00338473001,
            "unit": "ns/iter",
            "extra": "iterations: 7977\ncpu: 106570.94145668767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 263330.0877458337,
            "unit": "ns/iter",
            "extra": "iterations: 3305\ncpu: 263319.1830559759 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2002152.5452586606,
            "unit": "ns/iter",
            "extra": "iterations: 464\ncpu: 2002120.905172408 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1648839.442273541,
            "unit": "ns/iter",
            "extra": "iterations: 563\ncpu: 1648750.444049734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1650284.8983957444,
            "unit": "ns/iter",
            "extra": "iterations: 561\ncpu: 1650268.8057041017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1651918.4188948497,
            "unit": "ns/iter",
            "extra": "iterations: 561\ncpu: 1651897.3262032112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 993623.990374311,
            "unit": "ns/iter",
            "extra": "iterations: 935\ncpu: 993599.5721925168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1604938.1882555913,
            "unit": "ns/iter",
            "extra": "iterations: 579\ncpu: 1604916.5803108811 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 6740585.119999878,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6740442.999999984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 3803903.528455382,
            "unit": "ns/iter",
            "extra": "iterations: 246\ncpu: 3803819.9186991835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 8483583.929133838,
            "unit": "ns/iter",
            "extra": "iterations: 127\ncpu: 8483305.511811046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 30058.77124777224,
            "unit": "ns/iter",
            "extra": "iterations: 27497\ncpu: 30057.82085318392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 132508.59377408525,
            "unit": "ns/iter",
            "extra": "iterations: 6489\ncpu: 132506.76529511463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 106528.742690061,
            "unit": "ns/iter",
            "extra": "iterations: 8037\ncpu: 106528.09506034567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 105028.84244648709,
            "unit": "ns/iter",
            "extra": "iterations: 8175\ncpu: 105027.15596330227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 106205.0016137078,
            "unit": "ns/iter",
            "extra": "iterations: 8056\ncpu: 106203.72393247345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 263357.92839805014,
            "unit": "ns/iter",
            "extra": "iterations: 3296\ncpu: 263353.3070388346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2017934.1363636854,
            "unit": "ns/iter",
            "extra": "iterations: 462\ncpu: 2017885.497835498 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1662220.2271914731,
            "unit": "ns/iter",
            "extra": "iterations: 559\ncpu: 1662200.5366726303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1657497.6327985248,
            "unit": "ns/iter",
            "extra": "iterations: 561\ncpu: 1657460.784313731 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1660001.5133690045,
            "unit": "ns/iter",
            "extra": "iterations: 561\ncpu: 1659980.213903743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 991719.0042780692,
            "unit": "ns/iter",
            "extra": "iterations: 935\ncpu: 991702.780748664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1610204.0535406128,
            "unit": "ns/iter",
            "extra": "iterations: 579\ncpu: 1610173.5751295348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 6792688.150000003,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6792455.000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 3789551.9672129364,
            "unit": "ns/iter",
            "extra": "iterations: 244\ncpu: 3789442.6229507965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 30417.900868278975,
            "unit": "ns/iter",
            "extra": "iterations: 27065\ncpu: 30417.790504341287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 129864.50302846426,
            "unit": "ns/iter",
            "extra": "iterations: 6604\ncpu: 129861.7807389456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 105209.89615809209,
            "unit": "ns/iter",
            "extra": "iterations: 8147\ncpu: 105208.73941328088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 103731.81509662062,
            "unit": "ns/iter",
            "extra": "iterations: 8280\ncpu: 103730.20531401045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 104460.7544137355,
            "unit": "ns/iter",
            "extra": "iterations: 8213\ncpu: 104458.79702910036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 262596.26264768164,
            "unit": "ns/iter",
            "extra": "iterations: 3301\ncpu: 262590.76037564286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2005491.7192224588,
            "unit": "ns/iter",
            "extra": "iterations: 463\ncpu: 2005474.0820734296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1655276.7043011591,
            "unit": "ns/iter",
            "extra": "iterations: 558\ncpu: 1655216.4874551948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1648068.3989362244,
            "unit": "ns/iter",
            "extra": "iterations: 564\ncpu: 1647995.0354609925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1651399.2049910894,
            "unit": "ns/iter",
            "extra": "iterations: 561\ncpu: 1651314.081996436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 991127.1789137457,
            "unit": "ns/iter",
            "extra": "iterations: 939\ncpu: 991075.3993610173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1603745.4570446524,
            "unit": "ns/iter",
            "extra": "iterations: 582\ncpu: 1603665.9793814512 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 2755.9824917334863,
            "unit": "ns/iter",
            "extra": "iterations: 254337\ncpu: 2755.8750791273037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 15063.695381042333,
            "unit": "ns/iter",
            "extra": "iterations: 46504\ncpu: 15062.988130053323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 11691.439768577848,
            "unit": "ns/iter",
            "extra": "iterations: 59977\ncpu: 11690.863164212935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 11792.755062823651,
            "unit": "ns/iter",
            "extra": "iterations: 60885\ncpu: 11792.300238153905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 9556.530260739666,
            "unit": "ns/iter",
            "extra": "iterations: 73445\ncpu: 9555.943903601286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 59946.78470085352,
            "unit": "ns/iter",
            "extra": "iterations: 11700\ncpu: 59946.53846153846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 123119.4809658086,
            "unit": "ns/iter",
            "extra": "iterations: 5674\ncpu: 123115.10398308074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 33525.81568120969,
            "unit": "ns/iter",
            "extra": "iterations: 20904\ncpu: 33526.12418675873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 33536.3509023906,
            "unit": "ns/iter",
            "extra": "iterations: 20889\ncpu: 33536.16257360279 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 33748.539843901584,
            "unit": "ns/iter",
            "extra": "iterations: 20756\ncpu: 33748.891886683225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 69438.4454554456,
            "unit": "ns/iter",
            "extra": "iterations: 10111\ncpu: 69276.56018198018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 57557.86730832695,
            "unit": "ns/iter",
            "extra": "iterations: 12156\ncpu: 57557.38729845327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 19010.060045184426,
            "unit": "ns/iter",
            "extra": "iterations: 36739\ncpu: 19009.839679904195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 90245.0435286575,
            "unit": "ns/iter",
            "extra": "iterations: 7765\ncpu: 90243.45138441736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 73314.41074976251,
            "unit": "ns/iter",
            "extra": "iterations: 9563\ncpu: 73314.36787618893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 72654.54007911707,
            "unit": "ns/iter",
            "extra": "iterations: 9606\ncpu: 72653.01894649299 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 73597.55410937381,
            "unit": "ns/iter",
            "extra": "iterations: 9527\ncpu: 73596.6831111585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 142670.79333606057,
            "unit": "ns/iter",
            "extra": "iterations: 4892\ncpu: 142669.419460344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 568378.4788617948,
            "unit": "ns/iter",
            "extra": "iterations: 1230\ncpu: 568366.3414634074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 483519.0636678383,
            "unit": "ns/iter",
            "extra": "iterations: 1445\ncpu: 483510.5190311341 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 483440.28591158334,
            "unit": "ns/iter",
            "extra": "iterations: 1448\ncpu: 483426.5193370118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 486863.2435629825,
            "unit": "ns/iter",
            "extra": "iterations: 1437\ncpu: 486858.3159359771 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 320469.1465201325,
            "unit": "ns/iter",
            "extra": "iterations: 2184\ncpu: 320472.8021977978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 479395.8569491409,
            "unit": "ns/iter",
            "extra": "iterations: 1475\ncpu: 479383.186440685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 19188.935353204073,
            "unit": "ns/iter",
            "extra": "iterations: 36537\ncpu: 19188.42543175411 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 91741.80523559901,
            "unit": "ns/iter",
            "extra": "iterations: 7640\ncpu: 91740.74607329885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 74213.41476367427,
            "unit": "ns/iter",
            "extra": "iterations: 9415\ncpu: 74213.21295804638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 74980.10925091052,
            "unit": "ns/iter",
            "extra": "iterations: 9318\ncpu: 74978.79373256066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 75363.10488225902,
            "unit": "ns/iter",
            "extra": "iterations: 9258\ncpu: 75361.4171527336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 142693.38895680846,
            "unit": "ns/iter",
            "extra": "iterations: 4908\ncpu: 142688.56968215204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 567472.5072815653,
            "unit": "ns/iter",
            "extra": "iterations: 1236\ncpu: 567460.5177993529 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 481348.23553719814,
            "unit": "ns/iter",
            "extra": "iterations: 1452\ncpu: 481344.2837465557 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 480125.41660946986,
            "unit": "ns/iter",
            "extra": "iterations: 1457\ncpu: 480119.7666437876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 485819.9152189184,
            "unit": "ns/iter",
            "extra": "iterations: 1439\ncpu: 485809.93745656277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 321999.7215073711,
            "unit": "ns/iter",
            "extra": "iterations: 2176\ncpu: 321995.2665441166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 473421.03110210533,
            "unit": "ns/iter",
            "extra": "iterations: 1479\ncpu: 473411.42663962155 ns\nthreads: 1"
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
          "id": "93a417e35b7cddb2aff5c69874155ac65b18afac",
          "message": "Upd README",
          "timestamp": "2023-12-13T01:35:38+03:00",
          "tree_id": "ac2b7d38c5e0b561e002516e4bf347cf5169f70d",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/93a417e35b7cddb2aff5c69874155ac65b18afac"
        },
        "date": 1702420966091,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 7285.69802613137,
            "unit": "ns/iter",
            "extra": "iterations: 96207\ncpu: 7285.1518080804935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 67371.71110935665,
            "unit": "ns/iter",
            "extra": "iterations: 12638\ncpu: 67369.54423168222 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 128541.3748532898,
            "unit": "ns/iter",
            "extra": "iterations: 6816\ncpu: 128537.3386150235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 190388.64073426378,
            "unit": "ns/iter",
            "extra": "iterations: 4576\ncpu: 190382.99825174827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 250630.75739987293,
            "unit": "ns/iter",
            "extra": "iterations: 3446\ncpu: 250624.89843296577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 308910.3561151058,
            "unit": "ns/iter",
            "extra": "iterations: 2780\ncpu: 308891.61870503594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 369291.0966511238,
            "unit": "ns/iter",
            "extra": "iterations: 2359\ncpu: 369278.2958880882 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 429467.602368035,
            "unit": "ns/iter",
            "extra": "iterations: 2027\ncpu: 429450.41933892504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 489347.93876405613,
            "unit": "ns/iter",
            "extra": "iterations: 1780\ncpu: 489335.44943820196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 5406.527175260377,
            "unit": "ns/iter",
            "extra": "iterations: 129088\ncpu: 5406.418102379781 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 4600.760784931832,
            "unit": "ns/iter",
            "extra": "iterations: 152319\ncpu: 4600.672929838031 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4588.467737409192,
            "unit": "ns/iter",
            "extra": "iterations: 153227\ncpu: 4588.357143323313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 4623.971032579163,
            "unit": "ns/iter",
            "extra": "iterations: 151446\ncpu: 4623.897626876908 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 8125.079207920859,
            "unit": "ns/iter",
            "extra": "iterations: 86254\ncpu: 8124.520601943098 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 30334.347571744136,
            "unit": "ns/iter",
            "extra": "iterations: 27180\ncpu: 30276.629874908023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 126597.20383763968,
            "unit": "ns/iter",
            "extra": "iterations: 6775\ncpu: 126592.67896678994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 101402.05024881022,
            "unit": "ns/iter",
            "extra": "iterations: 8239\ncpu: 101398.84694744488 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 101071.18515459207,
            "unit": "ns/iter",
            "extra": "iterations: 8474\ncpu: 101068.44465423684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 100746.18270269698,
            "unit": "ns/iter",
            "extra": "iterations: 8325\ncpu: 100745.12912912884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 257153.90568818888,
            "unit": "ns/iter",
            "extra": "iterations: 3393\ncpu: 257147.98113763615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2014628.813852838,
            "unit": "ns/iter",
            "extra": "iterations: 462\ncpu: 2014604.7619047647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1641895.709219859,
            "unit": "ns/iter",
            "extra": "iterations: 564\ncpu: 1641853.368794326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1658356.4139785545,
            "unit": "ns/iter",
            "extra": "iterations: 558\ncpu: 1658331.899641576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1666174.1510791702,
            "unit": "ns/iter",
            "extra": "iterations: 556\ncpu: 1666135.6115107862 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1000401.1120689819,
            "unit": "ns/iter",
            "extra": "iterations: 928\ncpu: 1000385.021551726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1612410.3020833915,
            "unit": "ns/iter",
            "extra": "iterations: 576\ncpu: 1612360.5902777752 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 6757315.57000006,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6756834.999999981 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 3870804.333333289,
            "unit": "ns/iter",
            "extra": "iterations: 243\ncpu: 3870638.6831275793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 8428234.715384739,
            "unit": "ns/iter",
            "extra": "iterations: 130\ncpu: 8428161.538461536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 29761.60440391966,
            "unit": "ns/iter",
            "extra": "iterations: 27748\ncpu: 29760.570131180637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 127865.8321156976,
            "unit": "ns/iter",
            "extra": "iterations: 6707\ncpu: 127863.41136126452 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 104115.42047665,
            "unit": "ns/iter",
            "extra": "iterations: 8224\ncpu: 104113.60651750973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 102037.42970980205,
            "unit": "ns/iter",
            "extra": "iterations: 8408\ncpu: 102036.32254995184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 102520.98868968822,
            "unit": "ns/iter",
            "extra": "iterations: 8311\ncpu: 102518.51762724116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 258699.5416790276,
            "unit": "ns/iter",
            "extra": "iterations: 3371\ncpu: 258696.7368733307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2021827.7363834355,
            "unit": "ns/iter",
            "extra": "iterations: 459\ncpu: 2021781.9172113317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1661872.1019678204,
            "unit": "ns/iter",
            "extra": "iterations: 559\ncpu: 1661840.2504472248 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1659056.6577539754,
            "unit": "ns/iter",
            "extra": "iterations: 561\ncpu: 1659002.3172905492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1668251.4398564007,
            "unit": "ns/iter",
            "extra": "iterations: 557\ncpu: 1668222.2621184906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 991405.7736051738,
            "unit": "ns/iter",
            "extra": "iterations: 932\ncpu: 991382.403433476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1613986.5069444426,
            "unit": "ns/iter",
            "extra": "iterations: 576\ncpu: 1613957.9861111054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 6766944.539999712,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6766714.999999976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 3773225.919028502,
            "unit": "ns/iter",
            "extra": "iterations: 247\ncpu: 3773144.9392712465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 29882.43336933036,
            "unit": "ns/iter",
            "extra": "iterations: 27780\ncpu: 29881.83945284378 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 125290.69787856378,
            "unit": "ns/iter",
            "extra": "iterations: 6835\ncpu: 125286.80321872786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 101618.27514862969,
            "unit": "ns/iter",
            "extra": "iterations: 8410\ncpu: 101615.56480380511 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 100659.23824119075,
            "unit": "ns/iter",
            "extra": "iterations: 8483\ncpu: 100654.48544147074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 100599.59849198692,
            "unit": "ns/iter",
            "extra": "iterations: 8488\ncpu: 100598.8689915181 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 258489.9804386437,
            "unit": "ns/iter",
            "extra": "iterations: 3374\ncpu: 258484.024896265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2027941.2451193458,
            "unit": "ns/iter",
            "extra": "iterations: 461\ncpu: 2027887.8524945767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1646839.8286218625,
            "unit": "ns/iter",
            "extra": "iterations: 566\ncpu: 1646803.5335689 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1655636.2103386694,
            "unit": "ns/iter",
            "extra": "iterations: 561\ncpu: 1655627.8074866207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1662840.2450804457,
            "unit": "ns/iter",
            "extra": "iterations: 559\ncpu: 1662770.6618962458 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 994549.5069075666,
            "unit": "ns/iter",
            "extra": "iterations: 941\ncpu: 994530.9245483545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1607267.6752577876,
            "unit": "ns/iter",
            "extra": "iterations: 582\ncpu: 1607190.378006875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 2793.763646015808,
            "unit": "ns/iter",
            "extra": "iterations: 250531\ncpu: 2793.688206249925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 14833.693966521338,
            "unit": "ns/iter",
            "extra": "iterations: 47253\ncpu: 14833.458193130502 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 11787.529562634769,
            "unit": "ns/iter",
            "extra": "iterations: 59264\ncpu: 11787.270518358459 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 11610.678217156179,
            "unit": "ns/iter",
            "extra": "iterations: 59478\ncpu: 11610.50304314204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 9437.456582973029,
            "unit": "ns/iter",
            "extra": "iterations: 74199\ncpu: 9437.384600870682 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 58752.57838839952,
            "unit": "ns/iter",
            "extra": "iterations: 11864\ncpu: 58751.19689817948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 129940.43090335409,
            "unit": "ns/iter",
            "extra": "iterations: 5391\ncpu: 129937.24726395856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 33334.32417007347,
            "unit": "ns/iter",
            "extra": "iterations: 21026\ncpu: 33333.60125558867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 33396.61384248422,
            "unit": "ns/iter",
            "extra": "iterations: 20950\ncpu: 33395.82338902196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 33718.223457504035,
            "unit": "ns/iter",
            "extra": "iterations: 20778\ncpu: 33717.436711907096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 65494.53239962833,
            "unit": "ns/iter",
            "extra": "iterations: 10710\ncpu: 65492.95051353905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 54747.070959162906,
            "unit": "ns/iter",
            "extra": "iterations: 12782\ncpu: 54745.79095603183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 19370.99433967375,
            "unit": "ns/iter",
            "extra": "iterations: 36217\ncpu: 19370.704365353613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 92342.64308425869,
            "unit": "ns/iter",
            "extra": "iterations: 7548\ncpu: 92342.03762586077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 74324.45723684288,
            "unit": "ns/iter",
            "extra": "iterations: 9424\ncpu: 74322.71859083322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 74415.74772101376,
            "unit": "ns/iter",
            "extra": "iterations: 9434\ncpu: 74413.23934704305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 74596.93816745398,
            "unit": "ns/iter",
            "extra": "iterations: 9364\ncpu: 74595.18368218686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 144461.48559499503,
            "unit": "ns/iter",
            "extra": "iterations: 4790\ncpu: 144459.33194154422 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 570505.648979587,
            "unit": "ns/iter",
            "extra": "iterations: 1225\ncpu: 570501.6326530605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 485925.8805555871,
            "unit": "ns/iter",
            "extra": "iterations: 1440\ncpu: 485919.86111110845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 485333.20859318355,
            "unit": "ns/iter",
            "extra": "iterations: 1443\ncpu: 485322.7997227998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 489462.3605869802,
            "unit": "ns/iter",
            "extra": "iterations: 1431\ncpu: 489448.2180293547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 321538.6295277513,
            "unit": "ns/iter",
            "extra": "iterations: 2181\ncpu: 321531.6827143502 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 475963.35724045424,
            "unit": "ns/iter",
            "extra": "iterations: 1464\ncpu: 475954.09836065664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 19723.824942888292,
            "unit": "ns/iter",
            "extra": "iterations: 35457\ncpu: 19723.558112643474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 93826.03895061542,
            "unit": "ns/iter",
            "extra": "iterations: 7471\ncpu: 93822.87511712046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 75703.57478702029,
            "unit": "ns/iter",
            "extra": "iterations: 9273\ncpu: 75701.3156475798 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 75887.47161618933,
            "unit": "ns/iter",
            "extra": "iterations: 9213\ncpu: 75886.44306957479 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 76560.49629387408,
            "unit": "ns/iter",
            "extra": "iterations: 9174\ncpu: 76558.57859167115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 143733.4904261875,
            "unit": "ns/iter",
            "extra": "iterations: 4857\ncpu: 143732.5715462212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 570474.7034313333,
            "unit": "ns/iter",
            "extra": "iterations: 1224\ncpu: 570450.0816993569 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 483465.38259667193,
            "unit": "ns/iter",
            "extra": "iterations: 1448\ncpu: 483466.3674033097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 482689.2125603972,
            "unit": "ns/iter",
            "extra": "iterations: 1449\ncpu: 482663.4230503823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 486490.1756944404,
            "unit": "ns/iter",
            "extra": "iterations: 1440\ncpu: 486479.30555555754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 321046.9675650893,
            "unit": "ns/iter",
            "extra": "iterations: 2189\ncpu: 321037.5057103702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 474987.03050847724,
            "unit": "ns/iter",
            "extra": "iterations: 1475\ncpu: 474966.5762711876 ns\nthreads: 1"
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
        "date": 1702421404580,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 7200.437999876541,
            "unit": "ns/iter",
            "extra": "iterations: 97274\ncpu: 7200.246725743776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 65368.546516096525,
            "unit": "ns/iter",
            "extra": "iterations: 13017\ncpu: 65369.02512099562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 125420.80452527535,
            "unit": "ns/iter",
            "extra": "iterations: 6983\ncpu: 125415.91006730628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 185630.1171841819,
            "unit": "ns/iter",
            "extra": "iterations: 4702\ncpu: 185631.4121650362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 244498.548213257,
            "unit": "ns/iter",
            "extra": "iterations: 3526\ncpu: 244490.49914917757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 301789.48963092326,
            "unit": "ns/iter",
            "extra": "iterations: 2845\ncpu: 301784.07732864685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 361521.3244837709,
            "unit": "ns/iter",
            "extra": "iterations: 2373\ncpu: 361519.34260429826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 418984.1627347174,
            "unit": "ns/iter",
            "extra": "iterations: 2077\ncpu: 418958.7867116034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 477273.6162280591,
            "unit": "ns/iter",
            "extra": "iterations: 1824\ncpu: 477264.144736842 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 5210.009433258731,
            "unit": "ns/iter",
            "extra": "iterations: 134100\ncpu: 5209.697240865022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 4489.088523602306,
            "unit": "ns/iter",
            "extra": "iterations: 155981\ncpu: 4489.124316423147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4432.004687599127,
            "unit": "ns/iter",
            "extra": "iterations: 157650\ncpu: 4431.957500792893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 4508.066928220571,
            "unit": "ns/iter",
            "extra": "iterations: 155226\ncpu: 4507.983842912919 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 7999.040957349586,
            "unit": "ns/iter",
            "extra": "iterations: 87408\ncpu: 7998.878821160534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 29865.394315001486,
            "unit": "ns/iter",
            "extra": "iterations: 27511\ncpu: 29865.6282941369 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 123221.31782163838,
            "unit": "ns/iter",
            "extra": "iterations: 6941\ncpu: 123217.5623109063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 101162.09570058048,
            "unit": "ns/iter",
            "extra": "iterations: 8443\ncpu: 101162.84496032241 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 99120.7164282478,
            "unit": "ns/iter",
            "extra": "iterations: 8668\ncpu: 99117.35117674214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 100235.49713215219,
            "unit": "ns/iter",
            "extra": "iterations: 8543\ncpu: 100234.4258457217 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 263568.6414294358,
            "unit": "ns/iter",
            "extra": "iterations: 3302\ncpu: 263554.57298606826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 1944424.5794979916,
            "unit": "ns/iter",
            "extra": "iterations: 478\ncpu: 1944422.1757322138 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1582624.172649561,
            "unit": "ns/iter",
            "extra": "iterations: 585\ncpu: 1582590.2564102565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1605555.3604853058,
            "unit": "ns/iter",
            "extra": "iterations: 577\ncpu: 1605550.9532062442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1613342.2465034183,
            "unit": "ns/iter",
            "extra": "iterations: 572\ncpu: 1613327.7972027967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 987162.7705443199,
            "unit": "ns/iter",
            "extra": "iterations: 937\ncpu: 987153.8954108865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1565731.3790185363,
            "unit": "ns/iter",
            "extra": "iterations: 591\ncpu: 1565727.0727580374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 6723494.390000155,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6723543.999999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 3836429.8897957327,
            "unit": "ns/iter",
            "extra": "iterations: 245\ncpu: 3836354.2857142827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 8431662.03846146,
            "unit": "ns/iter",
            "extra": "iterations: 130\ncpu: 8431236.923076924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 29071.36459206393,
            "unit": "ns/iter",
            "extra": "iterations: 28632\ncpu: 29070.19069572507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 129043.44918821384,
            "unit": "ns/iter",
            "extra": "iterations: 6652\ncpu: 129036.60553217043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 102759.55452687145,
            "unit": "ns/iter",
            "extra": "iterations: 8317\ncpu: 102754.88757965619 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 100774.93024902407,
            "unit": "ns/iter",
            "extra": "iterations: 8473\ncpu: 100771.20264369217 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 101133.95662934576,
            "unit": "ns/iter",
            "extra": "iterations: 8485\ncpu: 101130.71302298202 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 263922.74134789803,
            "unit": "ns/iter",
            "extra": "iterations: 3294\ncpu: 263910.9896782025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 1949255.5609244253,
            "unit": "ns/iter",
            "extra": "iterations: 476\ncpu: 1949191.1764705935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1596085.168384916,
            "unit": "ns/iter",
            "extra": "iterations: 582\ncpu: 1596034.8797250877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1611940.63020837,
            "unit": "ns/iter",
            "extra": "iterations: 576\ncpu: 1611899.4791666726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1627053.1655051738,
            "unit": "ns/iter",
            "extra": "iterations: 574\ncpu: 1626900.5226480835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 977617.5015773126,
            "unit": "ns/iter",
            "extra": "iterations: 951\ncpu: 977617.7707676087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1566281.1596638784,
            "unit": "ns/iter",
            "extra": "iterations: 595\ncpu: 1566215.1260504148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 6694009.789999882,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6693951.999999967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 3844728.401639335,
            "unit": "ns/iter",
            "extra": "iterations: 244\ncpu: 3844502.049180344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 29102.365073789053,
            "unit": "ns/iter",
            "extra": "iterations: 28460\ncpu: 29102.610681658596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 121543.49130558873,
            "unit": "ns/iter",
            "extra": "iterations: 7016\ncpu: 121540.15108323738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 100235.82239156398,
            "unit": "ns/iter",
            "extra": "iterations: 8530\ncpu: 100236.600234467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 98031.07135493636,
            "unit": "ns/iter",
            "extra": "iterations: 8731\ncpu: 98026.77814683261 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 98491.02162908824,
            "unit": "ns/iter",
            "extra": "iterations: 8692\ncpu: 98491.774045099 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 263482.78277944785,
            "unit": "ns/iter",
            "extra": "iterations: 3310\ncpu: 263462.0543806661 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 1946906.9601676755,
            "unit": "ns/iter",
            "extra": "iterations: 477\ncpu: 1946921.3836478055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1594148.9261168896,
            "unit": "ns/iter",
            "extra": "iterations: 582\ncpu: 1594066.6666666567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1607455.7885615183,
            "unit": "ns/iter",
            "extra": "iterations: 577\ncpu: 1607468.4575389896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1622612.1856392568,
            "unit": "ns/iter",
            "extra": "iterations: 571\ncpu: 1622536.777583185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 978148.344210551,
            "unit": "ns/iter",
            "extra": "iterations: 950\ncpu: 978155.2631578974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1568609.870370302,
            "unit": "ns/iter",
            "extra": "iterations: 594\ncpu: 1568538.720538716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 2739.634465120746,
            "unit": "ns/iter",
            "extra": "iterations: 254936\ncpu: 2739.655050679394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 14472.739747243533,
            "unit": "ns/iter",
            "extra": "iterations: 48426\ncpu: 14472.211208854838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 11172.478921497592,
            "unit": "ns/iter",
            "extra": "iterations: 62457\ncpu: 11172.419424564125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 10939.788749784613,
            "unit": "ns/iter",
            "extra": "iterations: 63981\ncpu: 10938.93343336308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 9193.835058588998,
            "unit": "ns/iter",
            "extra": "iterations: 76124\ncpu: 9193.905995481146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 60580.61758585022,
            "unit": "ns/iter",
            "extra": "iterations: 11532\ncpu: 60581.07873742654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 125434.06584140501,
            "unit": "ns/iter",
            "extra": "iterations: 5574\ncpu: 125431.52134912112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 32536.31914992442,
            "unit": "ns/iter",
            "extra": "iterations: 21504\ncpu: 32536.588541666468 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 32477.977869537353,
            "unit": "ns/iter",
            "extra": "iterations: 21554\ncpu: 32477.73963069495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 32912.66747629461,
            "unit": "ns/iter",
            "extra": "iterations: 21409\ncpu: 32912.9198000843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 67554.89098431617,
            "unit": "ns/iter",
            "extra": "iterations: 10393\ncpu: 67553.01645338198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 59055.648559878275,
            "unit": "ns/iter",
            "extra": "iterations: 11874\ncpu: 59056.20683847117 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 18978.586161136333,
            "unit": "ns/iter",
            "extra": "iterations: 36925\ncpu: 18977.911983751106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 88957.27585331844,
            "unit": "ns/iter",
            "extra": "iterations: 7881\ncpu: 88950.52658292049 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 72094.5878294905,
            "unit": "ns/iter",
            "extra": "iterations: 9712\ncpu: 72091.64950576668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 71873.71050200176,
            "unit": "ns/iter",
            "extra": "iterations: 9741\ncpu: 71872.31290421954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 72444.2733009189,
            "unit": "ns/iter",
            "extra": "iterations: 9667\ncpu: 72443.42608875499 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 143078.1828266178,
            "unit": "ns/iter",
            "extra": "iterations: 4868\ncpu: 143067.76910435676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 556796.3955342568,
            "unit": "ns/iter",
            "extra": "iterations: 1254\ncpu: 556750.5582137203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 472174.2885135196,
            "unit": "ns/iter",
            "extra": "iterations: 1480\ncpu: 472154.4594594597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 472525.8329952932,
            "unit": "ns/iter",
            "extra": "iterations: 1479\ncpu: 472529.41176471335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 481103.93951891485,
            "unit": "ns/iter",
            "extra": "iterations: 1455\ncpu: 481073.2646048073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 317965.3031406442,
            "unit": "ns/iter",
            "extra": "iterations: 2197\ncpu: 317955.07510241296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 464952.6234198098,
            "unit": "ns/iter",
            "extra": "iterations: 1503\ncpu: 464919.6274118352 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 19201.32488712545,
            "unit": "ns/iter",
            "extra": "iterations: 36545\ncpu: 19200.300998768493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 91021.28755532733,
            "unit": "ns/iter",
            "extra": "iterations: 7682\ncpu: 91013.94168185261 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 72906.32579704399,
            "unit": "ns/iter",
            "extra": "iterations: 9598\ncpu: 72906.92852677629 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 72841.64248488433,
            "unit": "ns/iter",
            "extra": "iterations: 9594\ncpu: 72837.07525536792 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 73770.86540284574,
            "unit": "ns/iter",
            "extra": "iterations: 9495\ncpu: 73765.00263296407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 140847.6214530078,
            "unit": "ns/iter",
            "extra": "iterations: 4969\ncpu: 140840.45079493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 553135.1169036363,
            "unit": "ns/iter",
            "extra": "iterations: 1266\ncpu: 553099.2101105853 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 469423.14563758654,
            "unit": "ns/iter",
            "extra": "iterations: 1490\ncpu: 469411.40939597046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 471080.3427609474,
            "unit": "ns/iter",
            "extra": "iterations: 1485\ncpu: 471057.3737373703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 480051.33447802305,
            "unit": "ns/iter",
            "extra": "iterations: 1456\ncpu: 480012.2939560479 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 316879.67135087063,
            "unit": "ns/iter",
            "extra": "iterations: 2206\ncpu: 316882.5022665462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 464309.87765960896,
            "unit": "ns/iter",
            "extra": "iterations: 1504\ncpu: 464279.0558510615 ns\nthreads: 1"
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
        "date": 1702421902468,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 7052.438419386045,
            "unit": "ns/iter",
            "extra": "iterations: 99455\ncpu: 7052.089889899955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 65440.27167718866,
            "unit": "ns/iter",
            "extra": "iterations: 12986\ncpu: 65436.92438010166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 125551.18286041576,
            "unit": "ns/iter",
            "extra": "iterations: 6978\ncpu: 125545.1991974778 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 186177.93711362247,
            "unit": "ns/iter",
            "extra": "iterations: 4691\ncpu: 186170.0490300575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 247100.9163605546,
            "unit": "ns/iter",
            "extra": "iterations: 3539\ncpu: 247075.04944899693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 300496.52266388125,
            "unit": "ns/iter",
            "extra": "iterations: 2868\ncpu: 300491.66666666686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 361862.9234271465,
            "unit": "ns/iter",
            "extra": "iterations: 2416\ncpu: 361856.9122516557 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 419880.70744682604,
            "unit": "ns/iter",
            "extra": "iterations: 2068\ncpu: 419864.7485493227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 478249.4543454248,
            "unit": "ns/iter",
            "extra": "iterations: 1818\ncpu: 478235.3685368539 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 5272.356515796361,
            "unit": "ns/iter",
            "extra": "iterations: 133161\ncpu: 5272.115709554592 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 4462.595373832248,
            "unit": "ns/iter",
            "extra": "iterations: 155939\ncpu: 4462.393628277732 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4473.951084457428,
            "unit": "ns/iter",
            "extra": "iterations: 156576\ncpu: 4473.826767831594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 4540.019788883992,
            "unit": "ns/iter",
            "extra": "iterations: 154228\ncpu: 4539.90131493633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 8075.364024235179,
            "unit": "ns/iter",
            "extra": "iterations: 86486\ncpu: 8074.987859306703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 30085.372307124766,
            "unit": "ns/iter",
            "extra": "iterations: 27155\ncpu: 30084.157613699164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 126463.32040124312,
            "unit": "ns/iter",
            "extra": "iterations: 6779\ncpu: 126458.97625018455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 101947.69947506988,
            "unit": "ns/iter",
            "extra": "iterations: 8382\ncpu: 101944.26151276543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 99586.72759144224,
            "unit": "ns/iter",
            "extra": "iterations: 8557\ncpu: 99583.73261657124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 101632.11440829367,
            "unit": "ns/iter",
            "extra": "iterations: 8391\ncpu: 101629.72232153469 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 256724.3007719723,
            "unit": "ns/iter",
            "extra": "iterations: 3368\ncpu: 256711.52019002408 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 1948556.2138365544,
            "unit": "ns/iter",
            "extra": "iterations: 477\ncpu: 1948504.8218029377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1606885.095818859,
            "unit": "ns/iter",
            "extra": "iterations: 574\ncpu: 1606832.229965159 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1608760.186411097,
            "unit": "ns/iter",
            "extra": "iterations: 574\ncpu: 1608683.1010452958 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1611433.0224913678,
            "unit": "ns/iter",
            "extra": "iterations: 578\ncpu: 1611345.1557093437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 984298.5265392566,
            "unit": "ns/iter",
            "extra": "iterations: 942\ncpu: 984238.5350318478 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1560460.694772325,
            "unit": "ns/iter",
            "extra": "iterations: 593\ncpu: 1560399.8313659374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 6653884.540000376,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6653693.000000018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 3683544.4685038514,
            "unit": "ns/iter",
            "extra": "iterations: 254\ncpu: 3683398.42519685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 8482914.5234373,
            "unit": "ns/iter",
            "extra": "iterations: 128\ncpu: 8482482.812499998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 29975.080705175573,
            "unit": "ns/iter",
            "extra": "iterations: 27681\ncpu: 29973.335500885092 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 127203.77590577336,
            "unit": "ns/iter",
            "extra": "iterations: 6707\ncpu: 127196.27255106613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 103601.03655130259,
            "unit": "ns/iter",
            "extra": "iterations: 8235\ncpu: 103594.51123254401 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 103119.9746698664,
            "unit": "ns/iter",
            "extra": "iterations: 8330\ncpu: 103115.69027610967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 103621.78881459039,
            "unit": "ns/iter",
            "extra": "iterations: 8225\ncpu: 103619.96352583631 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 259201.725719435,
            "unit": "ns/iter",
            "extra": "iterations: 3336\ncpu: 259189.71822541967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 1963616.9388185435,
            "unit": "ns/iter",
            "extra": "iterations: 474\ncpu: 1963550.4219409267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1624035.7062937026,
            "unit": "ns/iter",
            "extra": "iterations: 572\ncpu: 1623985.3146853154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1612049.8393782119,
            "unit": "ns/iter",
            "extra": "iterations: 579\ncpu: 1611998.1001727057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1608211.5199306721,
            "unit": "ns/iter",
            "extra": "iterations: 577\ncpu: 1608149.566724436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 979126.7154899884,
            "unit": "ns/iter",
            "extra": "iterations: 949\ncpu: 979098.6301369863 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1565107.0402010158,
            "unit": "ns/iter",
            "extra": "iterations: 597\ncpu: 1565049.413735341 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 6698622.459999797,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6698190.000000039 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 3734600.3253010698,
            "unit": "ns/iter",
            "extra": "iterations: 249\ncpu: 3734397.1887550135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 29383.07744107668,
            "unit": "ns/iter",
            "extra": "iterations: 28215\ncpu: 29382.46677299317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 122840.90147925173,
            "unit": "ns/iter",
            "extra": "iterations: 6963\ncpu: 122835.50193881936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 100822.25143325714,
            "unit": "ns/iter",
            "extra": "iterations: 8547\ncpu: 100819.23481923495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 99972.54719402587,
            "unit": "ns/iter",
            "extra": "iterations: 8571\ncpu: 99969.10512192265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 100604.99420118364,
            "unit": "ns/iter",
            "extra": "iterations: 8450\ncpu: 100601.7159763315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 257575.34543291864,
            "unit": "ns/iter",
            "extra": "iterations: 3361\ncpu: 257565.66498065987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 1954947.4748953627,
            "unit": "ns/iter",
            "extra": "iterations: 478\ncpu: 1954890.3765690282 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1611187.2642487125,
            "unit": "ns/iter",
            "extra": "iterations: 579\ncpu: 1611113.6442141535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1611339.4825174985,
            "unit": "ns/iter",
            "extra": "iterations: 572\ncpu: 1611323.4265734185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1601350.7838765474,
            "unit": "ns/iter",
            "extra": "iterations: 583\ncpu: 1601229.5025728983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 972966.9654088283,
            "unit": "ns/iter",
            "extra": "iterations: 954\ncpu: 972930.1886792459 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1562332.2596314787,
            "unit": "ns/iter",
            "extra": "iterations: 597\ncpu: 1562244.3886097108 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 2720.1883478840737,
            "unit": "ns/iter",
            "extra": "iterations: 257258\ncpu: 2720.1198796538715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 14522.13928615311,
            "unit": "ns/iter",
            "extra": "iterations: 48806\ncpu: 14515.85051018322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 11134.669334140744,
            "unit": "ns/iter",
            "extra": "iterations: 62731\ncpu: 11134.257384706207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 10832.756673987315,
            "unit": "ns/iter",
            "extra": "iterations: 64654\ncpu: 10832.642991926255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 9316.074524735115,
            "unit": "ns/iter",
            "extra": "iterations: 75116\ncpu: 9315.575909260368 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 59331.75962353612,
            "unit": "ns/iter",
            "extra": "iterations: 11794\ncpu: 59329.9643886721 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 125407.91083948273,
            "unit": "ns/iter",
            "extra": "iterations: 5563\ncpu: 125404.67373719253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 32538.376099811067,
            "unit": "ns/iter",
            "extra": "iterations: 21481\ncpu: 32537.833434197863 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 32421.443144899527,
            "unit": "ns/iter",
            "extra": "iterations: 21546\ncpu: 32420.249698319974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 32581.01856590961,
            "unit": "ns/iter",
            "extra": "iterations: 21491\ncpu: 32580.340607696307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 64959.26528151521,
            "unit": "ns/iter",
            "extra": "iterations: 10781\ncpu: 64954.06734069205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 59425.3432633727,
            "unit": "ns/iter",
            "extra": "iterations: 11816\ncpu: 59423.12965470493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 19026.434424670508,
            "unit": "ns/iter",
            "extra": "iterations: 36805\ncpu: 19025.29547615815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 90927.16046814267,
            "unit": "ns/iter",
            "extra": "iterations: 7690\ncpu: 90925.31859558004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 72756.37324602329,
            "unit": "ns/iter",
            "extra": "iterations: 9621\ncpu: 72754.96310154804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 72553.0814362553,
            "unit": "ns/iter",
            "extra": "iterations: 9664\ncpu: 72550.45529801246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 73507.49600252455,
            "unit": "ns/iter",
            "extra": "iterations: 9506\ncpu: 73504.87060803604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 142094.642538527,
            "unit": "ns/iter",
            "extra": "iterations: 4932\ncpu: 142086.67883211718 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 557565.4407319211,
            "unit": "ns/iter",
            "extra": "iterations: 1257\ncpu: 557550.3579952337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 475506.9516678058,
            "unit": "ns/iter",
            "extra": "iterations: 1469\ncpu: 475475.69775357534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 474031.02517006383,
            "unit": "ns/iter",
            "extra": "iterations: 1470\ncpu: 474013.8095238044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 477703.0815627289,
            "unit": "ns/iter",
            "extra": "iterations: 1459\ncpu: 477680.19191226934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 318930.4195166581,
            "unit": "ns/iter",
            "extra": "iterations: 2193\ncpu: 318920.7934336576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 466900.94856377464,
            "unit": "ns/iter",
            "extra": "iterations: 1497\ncpu: 466897.39478957886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 19210.50575596798,
            "unit": "ns/iter",
            "extra": "iterations: 36397\ncpu: 19210.13819820325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 91814.89899656326,
            "unit": "ns/iter",
            "extra": "iterations: 7574\ncpu: 91811.13018220125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 73535.53080967312,
            "unit": "ns/iter",
            "extra": "iterations: 9510\ncpu: 73533.25972660378 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 74556.26862974059,
            "unit": "ns/iter",
            "extra": "iterations: 9407\ncpu: 74552.45030296587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 74220.63523678001,
            "unit": "ns/iter",
            "extra": "iterations: 9439\ncpu: 74220.02330755378 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 141600.06902834456,
            "unit": "ns/iter",
            "extra": "iterations: 4940\ncpu: 141597.30769230737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 554963.7409783184,
            "unit": "ns/iter",
            "extra": "iterations: 1247\ncpu: 554938.0112269372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 471886.6093117664,
            "unit": "ns/iter",
            "extra": "iterations: 1482\ncpu: 471877.1255060736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 470178.6491582256,
            "unit": "ns/iter",
            "extra": "iterations: 1485\ncpu: 470163.0976430936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 475965.49796468875,
            "unit": "ns/iter",
            "extra": "iterations: 1474\ncpu: 475939.4843962039 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 319170.65815862396,
            "unit": "ns/iter",
            "extra": "iterations: 2194\ncpu: 319158.0674567042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 464813.56428078533,
            "unit": "ns/iter",
            "extra": "iterations: 1439\ncpu: 464799.791521894 ns\nthreads: 1"
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
        "date": 1702453369094,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 7242.732925596682,
            "unit": "ns/iter",
            "extra": "iterations: 96958\ncpu: 7242.236844819407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 66227.03254437758,
            "unit": "ns/iter",
            "extra": "iterations: 12844\ncpu: 66222.50856431019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 126409.70483057201,
            "unit": "ns/iter",
            "extra": "iterations: 6935\ncpu: 126404.3403028118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 186907.39495798305,
            "unit": "ns/iter",
            "extra": "iterations: 4641\ncpu: 186898.94419306188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 251761.85530454625,
            "unit": "ns/iter",
            "extra": "iterations: 3497\ncpu: 251757.9925650559 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 305378.466713885,
            "unit": "ns/iter",
            "extra": "iterations: 2824\ncpu: 305377.4079320114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 364315.05778894917,
            "unit": "ns/iter",
            "extra": "iterations: 2388\ncpu: 364312.0603015076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 423231.71881092695,
            "unit": "ns/iter",
            "extra": "iterations: 2052\ncpu: 423234.7953216374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 483202.80476985726,
            "unit": "ns/iter",
            "extra": "iterations: 1803\ncpu: 483202.99500832014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 5419.336948785197,
            "unit": "ns/iter",
            "extra": "iterations: 129260\ncpu: 5419.24880086647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 4628.416124734366,
            "unit": "ns/iter",
            "extra": "iterations: 151618\ncpu: 4628.236093339836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4634.534212095128,
            "unit": "ns/iter",
            "extra": "iterations: 150970\ncpu: 4634.562495860101 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 4664.989102072058,
            "unit": "ns/iter",
            "extra": "iterations: 149845\ncpu: 4665.058560512538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 8117.6989473196745,
            "unit": "ns/iter",
            "extra": "iterations: 86161\ncpu: 8117.721474913251 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 29395.663437476305,
            "unit": "ns/iter",
            "extra": "iterations: 27974\ncpu: 29395.79252162728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 124103.81582002778,
            "unit": "ns/iter",
            "extra": "iterations: 6890\ncpu: 124105.67489114654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 100833.70292837605,
            "unit": "ns/iter",
            "extra": "iterations: 8503\ncpu: 100833.95272256862 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 97633.98002510618,
            "unit": "ns/iter",
            "extra": "iterations: 8761\ncpu: 97633.70619792285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 98608.07363803932,
            "unit": "ns/iter",
            "extra": "iterations: 8664\ncpu: 98608.61034164383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 253168.57850028377,
            "unit": "ns/iter",
            "extra": "iterations: 3414\ncpu: 253168.6291739897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 1996986.8950749799,
            "unit": "ns/iter",
            "extra": "iterations: 467\ncpu: 1996983.5117772988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1623321.798245526,
            "unit": "ns/iter",
            "extra": "iterations: 570\ncpu: 1623273.6842105275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1642613.8327465253,
            "unit": "ns/iter",
            "extra": "iterations: 568\ncpu: 1642620.5985915486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1653088.3557521496,
            "unit": "ns/iter",
            "extra": "iterations: 565\ncpu: 1653100.8849557515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1002925.3545945795,
            "unit": "ns/iter",
            "extra": "iterations: 925\ncpu: 1002912.5405405407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1596901.9262435578,
            "unit": "ns/iter",
            "extra": "iterations: 583\ncpu: 1596879.073756433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 6740081.949999989,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6739952.999999979 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 3762367.504032181,
            "unit": "ns/iter",
            "extra": "iterations: 248\ncpu: 3762202.016129044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 8467453.569230743,
            "unit": "ns/iter",
            "extra": "iterations: 130\ncpu: 8467333.846153835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 29303.69513409756,
            "unit": "ns/iter",
            "extra": "iterations: 28114\ncpu: 29301.913637333695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 125873.60530558141,
            "unit": "ns/iter",
            "extra": "iterations: 6823\ncpu: 125869.04587424856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 101771.92407911921,
            "unit": "ns/iter",
            "extra": "iterations: 8443\ncpu: 101767.53523629 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 99654.6434045471,
            "unit": "ns/iter",
            "extra": "iterations: 8612\ncpu: 99650.92893636812 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 100477.21928587796,
            "unit": "ns/iter",
            "extra": "iterations: 8514\ncpu: 100473.9487902273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 254075.39452779837,
            "unit": "ns/iter",
            "extra": "iterations: 3399\ncpu: 254078.9644012933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2016821.5639913462,
            "unit": "ns/iter",
            "extra": "iterations: 461\ncpu: 2016795.0108459787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1646832.6855123397,
            "unit": "ns/iter",
            "extra": "iterations: 566\ncpu: 1646822.6148409944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1646461.7893804838,
            "unit": "ns/iter",
            "extra": "iterations: 565\ncpu: 1646426.7256637174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1657101.0477031283,
            "unit": "ns/iter",
            "extra": "iterations: 566\ncpu: 1657099.8233215585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 997033.395498357,
            "unit": "ns/iter",
            "extra": "iterations: 933\ncpu: 997023.2583065322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1602534.8605852204,
            "unit": "ns/iter",
            "extra": "iterations: 581\ncpu: 1602501.3769363202 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 6762844.7699996745,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6762463.999999966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 3833559.167346767,
            "unit": "ns/iter",
            "extra": "iterations: 245\ncpu: 3833531.4285714272 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 28790.04331205759,
            "unit": "ns/iter",
            "extra": "iterations: 28514\ncpu: 28789.584063968687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 122627.22677165459,
            "unit": "ns/iter",
            "extra": "iterations: 6985\ncpu: 122624.88188976358 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 99758.50892961727,
            "unit": "ns/iter",
            "extra": "iterations: 8567\ncpu: 99755.94723940687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 97528.04722158729,
            "unit": "ns/iter",
            "extra": "iterations: 8746\ncpu: 97529.37342785265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 98557.5489878555,
            "unit": "ns/iter",
            "extra": "iterations: 8645\ncpu: 98556.96934644275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 253011.5644640285,
            "unit": "ns/iter",
            "extra": "iterations: 3405\ncpu: 253008.2525697495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 1991148.085469974,
            "unit": "ns/iter",
            "extra": "iterations: 468\ncpu: 1991109.6153846155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1628875.4045534153,
            "unit": "ns/iter",
            "extra": "iterations: 571\ncpu: 1628887.5656742542 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1632847.0244327376,
            "unit": "ns/iter",
            "extra": "iterations: 573\ncpu: 1632842.059336818 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1648678.1637323976,
            "unit": "ns/iter",
            "extra": "iterations: 568\ncpu: 1648647.8873239497 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 987844.5670212382,
            "unit": "ns/iter",
            "extra": "iterations: 940\ncpu: 987839.042553191 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1593811.1457975972,
            "unit": "ns/iter",
            "extra": "iterations: 583\ncpu: 1593819.8970840394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 2728.209414778996,
            "unit": "ns/iter",
            "extra": "iterations: 256023\ncpu: 2728.22129261826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 14359.827287082038,
            "unit": "ns/iter",
            "extra": "iterations: 48763\ncpu: 14359.77688001145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 11525.023061140924,
            "unit": "ns/iter",
            "extra": "iterations: 60925\ncpu: 11524.907673368974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 10994.674112678673,
            "unit": "ns/iter",
            "extra": "iterations: 63703\ncpu: 10994.700406574226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 9304.646951786332,
            "unit": "ns/iter",
            "extra": "iterations: 75290\ncpu: 9304.441492894179 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 59057.71888776025,
            "unit": "ns/iter",
            "extra": "iterations: 11796\ncpu: 59057.917938284256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 128188.33278358907,
            "unit": "ns/iter",
            "extra": "iterations: 5457\ncpu: 128187.83214220346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 33174.47737931517,
            "unit": "ns/iter",
            "extra": "iterations: 21109\ncpu: 33174.59851248289 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 33135.69161973948,
            "unit": "ns/iter",
            "extra": "iterations: 21133\ncpu: 33135.85387782142 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 33665.08739584541,
            "unit": "ns/iter",
            "extra": "iterations: 20882\ncpu: 33665.20927114272 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 65764.19520451434,
            "unit": "ns/iter",
            "extra": "iterations: 10635\ncpu: 65763.90220968441 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 60179.51285137105,
            "unit": "ns/iter",
            "extra": "iterations: 11633\ncpu: 60178.81887733259 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 18861.151864241878,
            "unit": "ns/iter",
            "extra": "iterations: 37066\ncpu: 18861.412075756627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 89425.7897894077,
            "unit": "ns/iter",
            "extra": "iterations: 7835\ncpu: 89425.07977026078 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 72660.95503522553,
            "unit": "ns/iter",
            "extra": "iterations: 9652\ncpu: 72661.25155408199 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 72539.9853093325,
            "unit": "ns/iter",
            "extra": "iterations: 9666\ncpu: 72537.97848127474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 73585.18327738225,
            "unit": "ns/iter",
            "extra": "iterations: 9532\ncpu: 73584.35795216111 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 141745.78907987798,
            "unit": "ns/iter",
            "extra": "iterations: 4945\ncpu: 141747.9676440842 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 568504.9381611083,
            "unit": "ns/iter",
            "extra": "iterations: 1229\ncpu: 568500.9764035865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 481463.80494505813,
            "unit": "ns/iter",
            "extra": "iterations: 1456\ncpu: 481460.16483516945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 482106.40536822967,
            "unit": "ns/iter",
            "extra": "iterations: 1453\ncpu: 482079.76600138174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 486762.7258848076,
            "unit": "ns/iter",
            "extra": "iterations: 1441\ncpu: 486741.08258154016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 319989.9473443263,
            "unit": "ns/iter",
            "extra": "iterations: 2184\ncpu: 319982.371794872 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 472980.37347766553,
            "unit": "ns/iter",
            "extra": "iterations: 1478\ncpu: 472946.8876860633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 19151.22096464784,
            "unit": "ns/iter",
            "extra": "iterations: 36490\ncpu: 19150.739928747418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 90717.2939802831,
            "unit": "ns/iter",
            "extra": "iterations: 7708\ncpu: 90712.36377789272 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 72970.03629745316,
            "unit": "ns/iter",
            "extra": "iterations: 9615\ncpu: 72966.86427457177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 73471.75201845617,
            "unit": "ns/iter",
            "extra": "iterations: 9537\ncpu: 73470.63017720474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 74126.64807957163,
            "unit": "ns/iter",
            "extra": "iterations: 9451\ncpu: 74119.8709131317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 141862.1020905206,
            "unit": "ns/iter",
            "extra": "iterations: 4927\ncpu: 141857.17475137016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 565546.3449111263,
            "unit": "ns/iter",
            "extra": "iterations: 1238\ncpu: 565515.42810985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 478097.72540982306,
            "unit": "ns/iter",
            "extra": "iterations: 1464\ncpu: 478078.0737704884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 478793.74965800374,
            "unit": "ns/iter",
            "extra": "iterations: 1462\ncpu: 478784.7469220243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 487173.1906750188,
            "unit": "ns/iter",
            "extra": "iterations: 1437\ncpu: 487151.009046623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 319350.1521242531,
            "unit": "ns/iter",
            "extra": "iterations: 2189\ncpu: 319334.6276838719 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 470955.36859834805,
            "unit": "ns/iter",
            "extra": "iterations: 1484\ncpu: 470922.3719676505 ns\nthreads: 1"
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
          "id": "6b4e127b9da4264cc4740cb5bb6d3f7bf848fe6d",
          "message": "fail-fast: false",
          "timestamp": "2023-12-13T17:51:42+03:00",
          "tree_id": "d2ed956f4cc316eb0fee876ba27a22bed47f08d6",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/6b4e127b9da4264cc4740cb5bb6d3f7bf848fe6d"
        },
        "date": 1702479564398,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 6935.093896203981,
            "unit": "ns/iter",
            "extra": "iterations: 101314\ncpu: 6934.669443512249 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 64544.58519078171,
            "unit": "ns/iter",
            "extra": "iterations: 13235\ncpu: 64541.54136758595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 124815.90329421837,
            "unit": "ns/iter",
            "extra": "iterations: 7073\ncpu: 124808.10123002967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 183710.6472941662,
            "unit": "ns/iter",
            "extra": "iterations: 4749\ncpu: 183706.29606232885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 241693.5920356484,
            "unit": "ns/iter",
            "extra": "iterations: 3591\ncpu: 241682.67891952113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 297571.5181347072,
            "unit": "ns/iter",
            "extra": "iterations: 2895\ncpu: 297555.4404145076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 356074.52085038676,
            "unit": "ns/iter",
            "extra": "iterations: 2446\ncpu: 356068.3156173344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 414514.7635585361,
            "unit": "ns/iter",
            "extra": "iterations: 2102\ncpu: 414486.06089438585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 472545.3550135686,
            "unit": "ns/iter",
            "extra": "iterations: 1845\ncpu: 472524.17344173434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 5247.416604859124,
            "unit": "ns/iter",
            "extra": "iterations: 133479\ncpu: 5247.0942994778225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 4402.667451671786,
            "unit": "ns/iter",
            "extra": "iterations: 158810\ncpu: 4402.568478055536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4388.671458715535,
            "unit": "ns/iter",
            "extra": "iterations: 159709\ncpu: 4388.719483560724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 4440.537330467302,
            "unit": "ns/iter",
            "extra": "iterations: 157713\ncpu: 4440.435474564568 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 7893.940085688517,
            "unit": "ns/iter",
            "extra": "iterations: 88927\ncpu: 7893.860132468198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 30005.743432065345,
            "unit": "ns/iter",
            "extra": "iterations: 27482\ncpu: 30005.519976712036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 126640.8185722725,
            "unit": "ns/iter",
            "extra": "iterations: 6752\ncpu: 126638.99585308076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 100667.18684551577,
            "unit": "ns/iter",
            "extra": "iterations: 8499\ncpu: 100664.92528532777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 97961.90670487475,
            "unit": "ns/iter",
            "extra": "iterations: 8725\ncpu: 97959.74785100302 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 99555.8181288587,
            "unit": "ns/iter",
            "extra": "iterations: 8583\ncpu: 99554.79436094593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 249824.80952381136,
            "unit": "ns/iter",
            "extra": "iterations: 3465\ncpu: 249817.5757575758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2049859.389937107,
            "unit": "ns/iter",
            "extra": "iterations: 477\ncpu: 2049800.6289308192 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1588394.8886985644,
            "unit": "ns/iter",
            "extra": "iterations: 584\ncpu: 1588371.4041095877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1591309.0963854787,
            "unit": "ns/iter",
            "extra": "iterations: 581\ncpu: 1591261.9621342502 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1591305.9965635564,
            "unit": "ns/iter",
            "extra": "iterations: 582\ncpu: 1591309.9656357383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 986628.472901188,
            "unit": "ns/iter",
            "extra": "iterations: 941\ncpu: 986591.392136027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1557035.0570469783,
            "unit": "ns/iter",
            "extra": "iterations: 596\ncpu: 1557013.0872483267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 6696190.879999903,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6696131.00000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 3666436.035294006,
            "unit": "ns/iter",
            "extra": "iterations: 255\ncpu: 3666415.2941176444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 8372253.346153859,
            "unit": "ns/iter",
            "extra": "iterations: 130\ncpu: 8372143.846153844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 28907.16627395689,
            "unit": "ns/iter",
            "extra": "iterations: 28435\ncpu: 28906.66783893087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 128136.01057177028,
            "unit": "ns/iter",
            "extra": "iterations: 6716\ncpu: 128124.59797498486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 102340.72656623764,
            "unit": "ns/iter",
            "extra": "iterations: 8364\ncpu: 102335.83213773352 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 100590.1682983642,
            "unit": "ns/iter",
            "extra": "iterations: 8580\ncpu: 100586.18881118835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 101247.46949413049,
            "unit": "ns/iter",
            "extra": "iterations: 8441\ncpu: 101246.77170951238 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 250829.11820535536,
            "unit": "ns/iter",
            "extra": "iterations: 3477\ncpu: 250823.06586137446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 1966110.280590758,
            "unit": "ns/iter",
            "extra": "iterations: 474\ncpu: 1966089.029535879 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1599514.590673592,
            "unit": "ns/iter",
            "extra": "iterations: 579\ncpu: 1599481.5198618236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1596491.8061749688,
            "unit": "ns/iter",
            "extra": "iterations: 583\ncpu: 1596472.3842195494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1636982.102076108,
            "unit": "ns/iter",
            "extra": "iterations: 578\ncpu: 1636878.719723175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 972265.4780793071,
            "unit": "ns/iter",
            "extra": "iterations: 958\ncpu: 972254.1753653412 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1563455.429048396,
            "unit": "ns/iter",
            "extra": "iterations: 599\ncpu: 1563437.5626043389 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 6704192.359999865,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6703819.000000024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 3723198.199999843,
            "unit": "ns/iter",
            "extra": "iterations: 250\ncpu: 3723122.7999999984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 29150.568651189642,
            "unit": "ns/iter",
            "extra": "iterations: 28084\ncpu: 29149.878934624656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 123112.72020651728,
            "unit": "ns/iter",
            "extra": "iterations: 6973\ncpu: 123098.59457909114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 99959.5930042099,
            "unit": "ns/iter",
            "extra": "iterations: 8548\ncpu: 99958.42302292943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 98589.20599164335,
            "unit": "ns/iter",
            "extra": "iterations: 8612\ncpu: 98586.2749651646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 99553.10153234273,
            "unit": "ns/iter",
            "extra": "iterations: 8549\ncpu: 99553.43315007623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 252414.2767624128,
            "unit": "ns/iter",
            "extra": "iterations: 3447\ncpu: 252411.6042935885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 1956377.661764774,
            "unit": "ns/iter",
            "extra": "iterations: 476\ncpu: 1956367.2268907449 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1596675.256013741,
            "unit": "ns/iter",
            "extra": "iterations: 582\ncpu: 1596645.3608247484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1587537.063356164,
            "unit": "ns/iter",
            "extra": "iterations: 584\ncpu: 1587503.253424664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1601321.5820379548,
            "unit": "ns/iter",
            "extra": "iterations: 579\ncpu: 1601285.1468048352 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 973289.6628272781,
            "unit": "ns/iter",
            "extra": "iterations: 955\ncpu: 973279.8952879545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1560824.1859296847,
            "unit": "ns/iter",
            "extra": "iterations: 597\ncpu: 1560799.4974874363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 2734.3380512509184,
            "unit": "ns/iter",
            "extra": "iterations: 256893\ncpu: 2734.2687422389718 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 14423.605746359144,
            "unit": "ns/iter",
            "extra": "iterations: 47926\ncpu: 14423.118975086594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 10956.798851384294,
            "unit": "ns/iter",
            "extra": "iterations: 63903\ncpu: 10956.69686869162 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 11107.631557182043,
            "unit": "ns/iter",
            "extra": "iterations: 62870\ncpu: 11107.348496898441 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 9362.878475204532,
            "unit": "ns/iter",
            "extra": "iterations: 74528\ncpu: 9362.992432374458 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 57898.4695759566,
            "unit": "ns/iter",
            "extra": "iterations: 12145\ncpu: 57897.719226018584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 114486.61661238,
            "unit": "ns/iter",
            "extra": "iterations: 6140\ncpu: 114482.1009771987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 32279.213679940036,
            "unit": "ns/iter",
            "extra": "iterations: 21696\ncpu: 32278.005162241796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 32331.407091144367,
            "unit": "ns/iter",
            "extra": "iterations: 21548\ncpu: 32329.40876183391 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 32616.77543418734,
            "unit": "ns/iter",
            "extra": "iterations: 21477\ncpu: 32616.315127811053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 67641.13133462067,
            "unit": "ns/iter",
            "extra": "iterations: 10340\ncpu: 67636.94390715782 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 59724.21050858754,
            "unit": "ns/iter",
            "extra": "iterations: 11876\ncpu: 59721.06769956295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 18950.148801778654,
            "unit": "ns/iter",
            "extra": "iterations: 36888\ncpu: 18948.929191064683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 88341.17776658843,
            "unit": "ns/iter",
            "extra": "iterations: 7943\ncpu: 88341.13055520567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 72637.0282940897,
            "unit": "ns/iter",
            "extra": "iterations: 9684\ncpu: 72636.30731102904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 71900.40585516246,
            "unit": "ns/iter",
            "extra": "iterations: 9735\ncpu: 71896.39445300512 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 72959.51428571384,
            "unit": "ns/iter",
            "extra": "iterations: 9590\ncpu: 72956.19395203306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 144162.3804878053,
            "unit": "ns/iter",
            "extra": "iterations: 4920\ncpu: 144157.25609755912 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 554680.4239302799,
            "unit": "ns/iter",
            "extra": "iterations: 1262\ncpu: 554686.4500792444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 470646.30443548865,
            "unit": "ns/iter",
            "extra": "iterations: 1488\ncpu: 470629.16666666453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 470302.6888440721,
            "unit": "ns/iter",
            "extra": "iterations: 1488\ncpu: 470303.2930107481 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 473424.81178063795,
            "unit": "ns/iter",
            "extra": "iterations: 1477\ncpu: 473425.6601218754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 316282.1817771909,
            "unit": "ns/iter",
            "extra": "iterations: 2217\ncpu: 316277.6725304453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 462950.24734747724,
            "unit": "ns/iter",
            "extra": "iterations: 1508\ncpu: 462944.2307692367 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 18845.326346339072,
            "unit": "ns/iter",
            "extra": "iterations: 37212\ncpu: 18845.015048908732 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 90681.57481539022,
            "unit": "ns/iter",
            "extra": "iterations: 7719\ncpu: 90680.9690374393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 74669.38906719582,
            "unit": "ns/iter",
            "extra": "iterations: 9659\ncpu: 74668.5371156434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 73578.93540051805,
            "unit": "ns/iter",
            "extra": "iterations: 7353\ncpu: 73577.57377941045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 73035.38581116126,
            "unit": "ns/iter",
            "extra": "iterations: 9585\ncpu: 73034.60615545105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 139518.7684503617,
            "unit": "ns/iter",
            "extra": "iterations: 5027\ncpu: 139518.50009946196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 550796.7081038302,
            "unit": "ns/iter",
            "extra": "iterations: 1271\ncpu: 550779.7797010284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 467595.25700935343,
            "unit": "ns/iter",
            "extra": "iterations: 1498\ncpu: 467586.71562083304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 466657.89059372933,
            "unit": "ns/iter",
            "extra": "iterations: 1499\ncpu: 466652.23482320743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 474473.95273464615,
            "unit": "ns/iter",
            "extra": "iterations: 1481\ncpu: 474456.85347738327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 316404.9389968254,
            "unit": "ns/iter",
            "extra": "iterations: 2213\ncpu: 316400.31631269865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 461938.1761213871,
            "unit": "ns/iter",
            "extra": "iterations: 1516\ncpu: 461924.8021108255 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}