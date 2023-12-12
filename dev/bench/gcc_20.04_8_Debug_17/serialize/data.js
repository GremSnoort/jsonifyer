window.BENCHMARK_DATA = {
  "lastUpdate": 1702381135211,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Serialize gcc-8 20.04 Debug c++-17": [
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
        "date": 1702381134900,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 8584.811873903931,
            "unit": "ns/iter",
            "extra": "iterations: 81557\ncpu: 8584.733376656819 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 100982.56013986381,
            "unit": "ns/iter",
            "extra": "iterations: 8580\ncpu: 100980.9557109557 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 194166.8130820453,
            "unit": "ns/iter",
            "extra": "iterations: 4510\ncpu: 194166.65188470058 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 291729.5986532073,
            "unit": "ns/iter",
            "extra": "iterations: 2970\ncpu: 291727.07070707064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 378760.9639037414,
            "unit": "ns/iter",
            "extra": "iterations: 2244\ncpu: 378763.68092691625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 471181.0325027196,
            "unit": "ns/iter",
            "extra": "iterations: 1846\ncpu: 471164.40953412803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 564450.5730045503,
            "unit": "ns/iter",
            "extra": "iterations: 1541\ncpu: 564431.0837118753 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 526739.2810000046,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 526735.6999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 601782.2840000235,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 600101.6999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6593.772368781544,
            "unit": "ns/iter",
            "extra": "iterations: 105873\ncpu: 6593.454421807257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5508.578624813299,
            "unit": "ns/iter",
            "extra": "iterations: 127110\ncpu: 5508.48792384548 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5485.220197226857,
            "unit": "ns/iter",
            "extra": "iterations: 126859\ncpu: 5484.980174839779 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5487.965241912287,
            "unit": "ns/iter",
            "extra": "iterations: 128373\ncpu: 5487.587732622905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 9286.446784510843,
            "unit": "ns/iter",
            "extra": "iterations: 75354\ncpu: 9285.840167741588 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 50433.007628247964,
            "unit": "ns/iter",
            "extra": "iterations: 15731\ncpu: 50430.68463543326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 216813.14949239203,
            "unit": "ns/iter",
            "extra": "iterations: 3940\ncpu: 216798.7563451774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 173343.3399433459,
            "unit": "ns/iter",
            "extra": "iterations: 4942\ncpu: 173329.36058276024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 172665.03410696582,
            "unit": "ns/iter",
            "extra": "iterations: 4955\ncpu: 172652.0887991924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 174733.3801635913,
            "unit": "ns/iter",
            "extra": "iterations: 4890\ncpu: 174725.4805725975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 373894.9068563989,
            "unit": "ns/iter",
            "extra": "iterations: 2319\ncpu: 373879.90513152175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 3123913.6369635966,
            "unit": "ns/iter",
            "extra": "iterations: 303\ncpu: 3123670.297029707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 2547315.375000018,
            "unit": "ns/iter",
            "extra": "iterations: 368\ncpu: 2547234.2391304397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 2523307.9027027483,
            "unit": "ns/iter",
            "extra": "iterations: 370\ncpu: 2523178.378378375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 2529645.035325987,
            "unit": "ns/iter",
            "extra": "iterations: 368\ncpu: 2529502.989130437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1506150.6038647525,
            "unit": "ns/iter",
            "extra": "iterations: 621\ncpu: 1506056.8438003229 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 2470150.5172414053,
            "unit": "ns/iter",
            "extra": "iterations: 377\ncpu: 2469979.3103448236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 10379130.745097792,
            "unit": "ns/iter",
            "extra": "iterations: 102\ncpu: 10378418.62745099 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 5847688.424999831,
            "unit": "ns/iter",
            "extra": "iterations: 160\ncpu: 5847282.500000017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 12417604.767441643,
            "unit": "ns/iter",
            "extra": "iterations: 86\ncpu: 12416920.930232562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 50717.946769457965,
            "unit": "ns/iter",
            "extra": "iterations: 16344\ncpu: 50715.026921194214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 217496.7449186985,
            "unit": "ns/iter",
            "extra": "iterations: 3936\ncpu: 217484.1717479663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 175388.93823834512,
            "unit": "ns/iter",
            "extra": "iterations: 4825\ncpu: 175383.29533678695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 172854.70566875383,
            "unit": "ns/iter",
            "extra": "iterations: 4957\ncpu: 172851.64413960066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 177893.87559709276,
            "unit": "ns/iter",
            "extra": "iterations: 4815\ncpu: 177895.34787123615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 371645.7840375505,
            "unit": "ns/iter",
            "extra": "iterations: 2343\ncpu: 371636.0221937686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 3106591.8737540883,
            "unit": "ns/iter",
            "extra": "iterations: 301\ncpu: 3106576.079734217 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 2571715.5166666494,
            "unit": "ns/iter",
            "extra": "iterations: 360\ncpu: 2571735.555555558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 2533579.035135007,
            "unit": "ns/iter",
            "extra": "iterations: 370\ncpu: 2533561.0810810905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 2533558.215258764,
            "unit": "ns/iter",
            "extra": "iterations: 367\ncpu: 2533420.7084468687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1485223.4513556545,
            "unit": "ns/iter",
            "extra": "iterations: 627\ncpu: 1485137.001594898 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 2471875.746031763,
            "unit": "ns/iter",
            "extra": "iterations: 378\ncpu: 2471731.2169312118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 10368186.528845824,
            "unit": "ns/iter",
            "extra": "iterations: 104\ncpu: 10367677.884615362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 5988045.872611434,
            "unit": "ns/iter",
            "extra": "iterations: 157\ncpu: 5987644.585987247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 49342.03647325642,
            "unit": "ns/iter",
            "extra": "iterations: 16752\ncpu: 49339.55945558744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 215285.24136192515,
            "unit": "ns/iter",
            "extra": "iterations: 3965\ncpu: 215268.9533417396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 173841.8370445337,
            "unit": "ns/iter",
            "extra": "iterations: 4940\ncpu: 173833.74493927052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 171676.3492477399,
            "unit": "ns/iter",
            "extra": "iterations: 4985\ncpu: 171667.42226680036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 173004.30848694575,
            "unit": "ns/iter",
            "extra": "iterations: 4937\ncpu: 172996.86044156444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 368778.3405428315,
            "unit": "ns/iter",
            "extra": "iterations: 2358\ncpu: 368758.69380831084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 3105104.598006675,
            "unit": "ns/iter",
            "extra": "iterations: 301\ncpu: 3104999.6677740985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 2537430.2384825065,
            "unit": "ns/iter",
            "extra": "iterations: 369\ncpu: 2537287.5338753415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 2529946.8162162416,
            "unit": "ns/iter",
            "extra": "iterations: 370\ncpu: 2529851.3513513515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 2535855.1138212476,
            "unit": "ns/iter",
            "extra": "iterations: 369\ncpu: 2535737.3983739717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1505363.2612903349,
            "unit": "ns/iter",
            "extra": "iterations: 620\ncpu: 1505280.9677419348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 2480618.5370369134,
            "unit": "ns/iter",
            "extra": "iterations: 378\ncpu: 2480475.661375662 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 2949.45398623089,
            "unit": "ns/iter",
            "extra": "iterations: 237342\ncpu: 2949.2298034060586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 21669.225478360728,
            "unit": "ns/iter",
            "extra": "iterations: 33134\ncpu: 21667.60729160374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 15269.226652400552,
            "unit": "ns/iter",
            "extra": "iterations: 45797\ncpu: 15268.021922833272 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 16425.08865514602,
            "unit": "ns/iter",
            "extra": "iterations: 42592\ncpu: 16424.09372652135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 12539.43342036586,
            "unit": "ns/iter",
            "extra": "iterations: 55918\ncpu: 12539.017847562496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 85195.139223722,
            "unit": "ns/iter",
            "extra": "iterations: 8296\ncpu: 85190.73047251711 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 197068.00394034394,
            "unit": "ns/iter",
            "extra": "iterations: 3553\ncpu: 197064.9591894193 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 48496.376096111155,
            "unit": "ns/iter",
            "extra": "iterations: 14483\ncpu: 48494.614375473844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 49391.70463639759,
            "unit": "ns/iter",
            "extra": "iterations: 14494\ncpu: 49383.53111632473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 48692.21932621607,
            "unit": "ns/iter",
            "extra": "iterations: 14426\ncpu: 48620.12338832659 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 101124.40592914225,
            "unit": "ns/iter",
            "extra": "iterations: 6915\ncpu: 101122.40057845227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 90836.8884565491,
            "unit": "ns/iter",
            "extra": "iterations: 7710\ncpu: 90837.66536964967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 27166.399790014013,
            "unit": "ns/iter",
            "extra": "iterations: 25716\ncpu: 27166.608337221962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 135001.56258438434,
            "unit": "ns/iter",
            "extra": "iterations: 5185\ncpu: 135001.40790742566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 107018.68245721396,
            "unit": "ns/iter",
            "extra": "iterations: 6544\ncpu: 107017.00794621086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 106551.98543765146,
            "unit": "ns/iter",
            "extra": "iterations: 6455\ncpu: 106549.38807126196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 108204.44380893657,
            "unit": "ns/iter",
            "extra": "iterations: 6469\ncpu: 108205.20946050578 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 189320.9393939405,
            "unit": "ns/iter",
            "extra": "iterations: 3696\ncpu: 189313.04112554234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 846420.654920994,
            "unit": "ns/iter",
            "extra": "iterations: 823\ncpu: 846427.217496965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 711946.0438327764,
            "unit": "ns/iter",
            "extra": "iterations: 981\ncpu: 711933.6391437256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 712525.75714288,
            "unit": "ns/iter",
            "extra": "iterations: 980\ncpu: 712493.7755101982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 710551.2487309802,
            "unit": "ns/iter",
            "extra": "iterations: 985\ncpu: 710556.9543147181 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 455354.8262849584,
            "unit": "ns/iter",
            "extra": "iterations: 1537\ncpu: 455341.1841249148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 699232.7195608984,
            "unit": "ns/iter",
            "extra": "iterations: 1002\ncpu: 699237.9241516901 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 27543.84646599848,
            "unit": "ns/iter",
            "extra": "iterations: 25382\ncpu: 27543.25506264281 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 133984.46242552678,
            "unit": "ns/iter",
            "extra": "iterations: 5203\ncpu: 133985.45070151988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 108659.40882261444,
            "unit": "ns/iter",
            "extra": "iterations: 6438\ncpu: 108660.22056539153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 108057.64887380644,
            "unit": "ns/iter",
            "extra": "iterations: 6482\ncpu: 108055.58469608155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 109606.22425378385,
            "unit": "ns/iter",
            "extra": "iterations: 6399\ncpu: 109604.96952648937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 190893.9623978262,
            "unit": "ns/iter",
            "extra": "iterations: 3670\ncpu: 190889.23705722103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 847606.6940749552,
            "unit": "ns/iter",
            "extra": "iterations: 827\ncpu: 847612.3337363846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 717880.2605128508,
            "unit": "ns/iter",
            "extra": "iterations: 975\ncpu: 717878.2564102593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 717212.6871165422,
            "unit": "ns/iter",
            "extra": "iterations: 978\ncpu: 717218.3026584933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 710332.1374745542,
            "unit": "ns/iter",
            "extra": "iterations: 982\ncpu: 710320.9775967458 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 456115.7440051964,
            "unit": "ns/iter",
            "extra": "iterations: 1543\ncpu: 456119.24821775296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 701042.6365461485,
            "unit": "ns/iter",
            "extra": "iterations: 996\ncpu: 701047.9919678717 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}