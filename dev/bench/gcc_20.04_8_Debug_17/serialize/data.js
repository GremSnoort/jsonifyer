window.BENCHMARK_DATA = {
  "lastUpdate": 1702390832400,
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
        "date": 1702382294092,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 8553.064940790042,
            "unit": "ns/iter",
            "extra": "iterations: 81659\ncpu: 8552.567383876854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 100137.69608415898,
            "unit": "ns/iter",
            "extra": "iterations: 8555\ncpu: 100134.03857393339 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 193331.0097280546,
            "unit": "ns/iter",
            "extra": "iterations: 4523\ncpu: 193325.53614857394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 287657.8326137515,
            "unit": "ns/iter",
            "extra": "iterations: 3011\ncpu: 287655.49651278654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 375216.9315188778,
            "unit": "ns/iter",
            "extra": "iterations: 2278\ncpu: 375210.7111501317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 467266.06115879555,
            "unit": "ns/iter",
            "extra": "iterations: 1864\ncpu: 467268.6158798283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 559195.2332474326,
            "unit": "ns/iter",
            "extra": "iterations: 1552\ncpu: 559195.8118556701 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 522436.49199999706,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 522433.20000000007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 596821.3500000275,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 596798.0999999992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6677.369168821833,
            "unit": "ns/iter",
            "extra": "iterations: 104803\ncpu: 6677.338434968471 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5522.710065014581,
            "unit": "ns/iter",
            "extra": "iterations: 126587\ncpu: 5522.613696509123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5773.9077303374925,
            "unit": "ns/iter",
            "extra": "iterations: 126217\ncpu: 5773.791169176905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5438.911749858356,
            "unit": "ns/iter",
            "extra": "iterations: 128759\ncpu: 5438.935530720175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 9339.236418564518,
            "unit": "ns/iter",
            "extra": "iterations: 74808\ncpu: 9339.080044914977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 52787.02310630091,
            "unit": "ns/iter",
            "extra": "iterations: 15710\ncpu: 52786.148949713584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 225459.34914017134,
            "unit": "ns/iter",
            "extra": "iterations: 3838\ncpu: 225458.0510682644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 177950.7721151847,
            "unit": "ns/iter",
            "extra": "iterations: 4827\ncpu: 177951.81272011565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 176496.21740020637,
            "unit": "ns/iter",
            "extra": "iterations: 4885\ncpu: 176489.9488229274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 178999.27548037432,
            "unit": "ns/iter",
            "extra": "iterations: 4788\ncpu: 178997.41019214707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 388179.2270703397,
            "unit": "ns/iter",
            "extra": "iterations: 2246\ncpu: 388160.64113980415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 3141313.9,
            "unit": "ns/iter",
            "extra": "iterations: 300\ncpu: 3141190.6666666665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 2523907.6972973854,
            "unit": "ns/iter",
            "extra": "iterations: 370\ncpu: 2523925.94594595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 2554701.34699457,
            "unit": "ns/iter",
            "extra": "iterations: 366\ncpu: 2554695.081967205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 2566716.60989018,
            "unit": "ns/iter",
            "extra": "iterations: 364\ncpu: 2566731.3186813174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1512184.849270609,
            "unit": "ns/iter",
            "extra": "iterations: 617\ncpu: 1512152.3500810335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 2481860.632000007,
            "unit": "ns/iter",
            "extra": "iterations: 375\ncpu: 2481809.866666661 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 10561624.82178245,
            "unit": "ns/iter",
            "extra": "iterations: 101\ncpu: 10561379.20792079 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 6096573.688311806,
            "unit": "ns/iter",
            "extra": "iterations: 154\ncpu: 6096438.961038958 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 12653569.000000127,
            "unit": "ns/iter",
            "extra": "iterations: 84\ncpu: 12653438.095238091 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 53009.677472984076,
            "unit": "ns/iter",
            "extra": "iterations: 15639\ncpu: 53009.51467485114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 220696.11661958025,
            "unit": "ns/iter",
            "extra": "iterations: 3893\ncpu: 220697.66247110238 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 178832.91301626846,
            "unit": "ns/iter",
            "extra": "iterations: 4794\ncpu: 178831.20567375876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 178797.46118721177,
            "unit": "ns/iter",
            "extra": "iterations: 4818\ncpu: 178795.08094645012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 179970.5817418646,
            "unit": "ns/iter",
            "extra": "iterations: 4765\ncpu: 179968.37355718683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 383839.6950198281,
            "unit": "ns/iter",
            "extra": "iterations: 2269\ncpu: 383830.71837814146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 3121479.344481661,
            "unit": "ns/iter",
            "extra": "iterations: 299\ncpu: 3121477.5919732256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 2559438.041208844,
            "unit": "ns/iter",
            "extra": "iterations: 364\ncpu: 2559380.4945055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 2646051.000000042,
            "unit": "ns/iter",
            "extra": "iterations: 364\ncpu: 2646072.252747257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 2577879.3829202126,
            "unit": "ns/iter",
            "extra": "iterations: 363\ncpu: 2577850.413223136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1503533.5860390333,
            "unit": "ns/iter",
            "extra": "iterations: 616\ncpu: 1503506.4935064984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 2487499.659574548,
            "unit": "ns/iter",
            "extra": "iterations: 376\ncpu: 2487493.882978722 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 10619306.702970238,
            "unit": "ns/iter",
            "extra": "iterations: 101\ncpu: 10619253.46534654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 6037535.583333354,
            "unit": "ns/iter",
            "extra": "iterations: 156\ncpu: 6037520.512820493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 53542.57114395643,
            "unit": "ns/iter",
            "extra": "iterations: 15560\ncpu: 53541.6195372754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 217071.76715123147,
            "unit": "ns/iter",
            "extra": "iterations: 3921\ncpu: 217073.52716143813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 178798.6119558481,
            "unit": "ns/iter",
            "extra": "iterations: 4801\ncpu: 178795.62591126823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 174450.0862033846,
            "unit": "ns/iter",
            "extra": "iterations: 4907\ncpu: 174447.99266354193 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 177035.19483470297,
            "unit": "ns/iter",
            "extra": "iterations: 4840\ncpu: 177032.14876032987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 382093.56502634723,
            "unit": "ns/iter",
            "extra": "iterations: 2276\ncpu: 382096.0456942003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 3128346.5652174824,
            "unit": "ns/iter",
            "extra": "iterations: 299\ncpu: 3128370.903010011 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 2545099.013624026,
            "unit": "ns/iter",
            "extra": "iterations: 367\ncpu: 2545042.506811989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 2571415.429752076,
            "unit": "ns/iter",
            "extra": "iterations: 363\ncpu: 2571430.3030303004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 2566477.060606138,
            "unit": "ns/iter",
            "extra": "iterations: 363\ncpu: 2566441.322314057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1515067.1284552703,
            "unit": "ns/iter",
            "extra": "iterations: 615\ncpu: 1515055.121951217 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 2496316.245989289,
            "unit": "ns/iter",
            "extra": "iterations: 374\ncpu: 2496296.256684494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 2993.328059076161,
            "unit": "ns/iter",
            "extra": "iterations: 233461\ncpu: 2993.3453553270188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 21654.6748475748,
            "unit": "ns/iter",
            "extra": "iterations: 32311\ncpu: 21654.619169942136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 16384.604252929035,
            "unit": "ns/iter",
            "extra": "iterations: 42747\ncpu: 16384.50651507714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 16073.825179326941,
            "unit": "ns/iter",
            "extra": "iterations: 43496\ncpu: 16073.071086996459 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 12846.39597730409,
            "unit": "ns/iter",
            "extra": "iterations: 54988\ncpu: 12845.924565359683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 87260.21616236938,
            "unit": "ns/iter",
            "extra": "iterations: 8031\ncpu: 87254.6756319265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 198767.889674685,
            "unit": "ns/iter",
            "extra": "iterations: 3535\ncpu: 198767.18528995683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 48088.61190034706,
            "unit": "ns/iter",
            "extra": "iterations: 14571\ncpu: 48087.488847710905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 48234.36139432393,
            "unit": "ns/iter",
            "extra": "iterations: 14516\ncpu: 48234.63764122278 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 48658.439446608965,
            "unit": "ns/iter",
            "extra": "iterations: 14384\ncpu: 48658.349555061046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 102080.75386184642,
            "unit": "ns/iter",
            "extra": "iterations: 6862\ncpu: 102079.74351501162 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 91415.63361169367,
            "unit": "ns/iter",
            "extra": "iterations: 7664\ncpu: 91413.54384133645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 27004.784634325886,
            "unit": "ns/iter",
            "extra": "iterations: 25993\ncpu: 27004.943638671743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 131399.87007206876,
            "unit": "ns/iter",
            "extra": "iterations: 4718\ncpu: 131385.82026282244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 105383.39838008059,
            "unit": "ns/iter",
            "extra": "iterations: 6667\ncpu: 105375.92620369089 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 105314.71851517352,
            "unit": "ns/iter",
            "extra": "iterations: 6654\ncpu: 105311.52690111342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 106188.79015897277,
            "unit": "ns/iter",
            "extra": "iterations: 6605\ncpu: 106186.19227857771 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 193442.73474800878,
            "unit": "ns/iter",
            "extra": "iterations: 3770\ncpu: 193444.1379310338 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 847021.3224242082,
            "unit": "ns/iter",
            "extra": "iterations: 825\ncpu: 846993.4545454613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 710722.859454045,
            "unit": "ns/iter",
            "extra": "iterations: 989\ncpu: 710728.7158746248 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 706692.9949545931,
            "unit": "ns/iter",
            "extra": "iterations: 991\ncpu: 706697.780020185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 709275.6418367279,
            "unit": "ns/iter",
            "extra": "iterations: 980\ncpu: 709265.9183673441 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 456443.0593994603,
            "unit": "ns/iter",
            "extra": "iterations: 1532\ncpu: 456445.430809395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 696149.6156901722,
            "unit": "ns/iter",
            "extra": "iterations: 1007\ncpu: 696140.814299899 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 27690.726987281185,
            "unit": "ns/iter",
            "extra": "iterations: 25160\ncpu: 27690.42130365665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 132902.13225500286,
            "unit": "ns/iter",
            "extra": "iterations: 5255\ncpu: 132900.30447193325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 108098.61428130895,
            "unit": "ns/iter",
            "extra": "iterations: 6484\ncpu: 108099.39851943326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 107915.97550454758,
            "unit": "ns/iter",
            "extra": "iterations: 6491\ncpu: 107912.91018333119 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 109179.81862209829,
            "unit": "ns/iter",
            "extra": "iterations: 6401\ncpu: 109179.25324168272 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 188446.39509168707,
            "unit": "ns/iter",
            "extra": "iterations: 3708\ncpu: 188442.34088457585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 842839.6449274893,
            "unit": "ns/iter",
            "extra": "iterations: 828\ncpu: 842820.8937197959 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 711707.4463738449,
            "unit": "ns/iter",
            "extra": "iterations: 979\ncpu: 711712.155260469 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 748795.8966565662,
            "unit": "ns/iter",
            "extra": "iterations: 987\ncpu: 748778.1155015124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 716206.0265036009,
            "unit": "ns/iter",
            "extra": "iterations: 981\ncpu: 716211.0091743082 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 453925.8020765765,
            "unit": "ns/iter",
            "extra": "iterations: 1541\ncpu: 453920.1817002005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 702042.7434869766,
            "unit": "ns/iter",
            "extra": "iterations: 998\ncpu: 702048.4969939897 ns\nthreads: 1"
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
        "date": 1702390830904,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 8607.258937066616,
            "unit": "ns/iter",
            "extra": "iterations: 80927\ncpu: 8606.530576939711 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 100474.47560258514,
            "unit": "ns/iter",
            "extra": "iterations: 8505\ncpu: 100465.96119929451 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 196103.78356224205,
            "unit": "ns/iter",
            "extra": "iterations: 4514\ncpu: 196083.29641116524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 290944.4136424623,
            "unit": "ns/iter",
            "extra": "iterations: 2976\ncpu: 290943.07795698935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 377264.4304694426,
            "unit": "ns/iter",
            "extra": "iterations: 2258\ncpu: 377245.34986713907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 471513.16549103014,
            "unit": "ns/iter",
            "extra": "iterations: 1843\ncpu: 471493.0548019537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 562638.159793794,
            "unit": "ns/iter",
            "extra": "iterations: 1552\ncpu: 562619.6520618554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 526213.7400000029,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 526168.600000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 599094.316999981,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 599044.1999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6767.510842279939,
            "unit": "ns/iter",
            "extra": "iterations: 103576\ncpu: 6767.258824438091 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5473.314016921367,
            "unit": "ns/iter",
            "extra": "iterations: 127767\ncpu: 5472.892844005105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5471.205801570074,
            "unit": "ns/iter",
            "extra": "iterations: 127793\ncpu: 5471.135351701576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5541.186314797854,
            "unit": "ns/iter",
            "extra": "iterations: 126297\ncpu: 5540.926546157069 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 9329.512767205144,
            "unit": "ns/iter",
            "extra": "iterations: 75036\ncpu: 9329.012740551207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 51955.583056903044,
            "unit": "ns/iter",
            "extra": "iterations: 15676\ncpu: 51952.194437356426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 218063.94009217795,
            "unit": "ns/iter",
            "extra": "iterations: 3906\ncpu: 218054.8899129544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 176282.2672131206,
            "unit": "ns/iter",
            "extra": "iterations: 4880\ncpu: 176274.46721311513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 174910.47859763395,
            "unit": "ns/iter",
            "extra": "iterations: 4906\ncpu: 174904.54545454538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 175648.02976801048,
            "unit": "ns/iter",
            "extra": "iterations: 4871\ncpu: 175635.02360911565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 373308.4465435801,
            "unit": "ns/iter",
            "extra": "iterations: 2329\ncpu: 373299.4418205239 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 3165075.22147647,
            "unit": "ns/iter",
            "extra": "iterations: 298\ncpu: 3164972.8187919455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 2574209.101928353,
            "unit": "ns/iter",
            "extra": "iterations: 363\ncpu: 2574109.6418732777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 2543420.915531334,
            "unit": "ns/iter",
            "extra": "iterations: 367\ncpu: 2543157.765667572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 2581387.099447475,
            "unit": "ns/iter",
            "extra": "iterations: 362\ncpu: 2581277.3480663053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1483451.5208333298,
            "unit": "ns/iter",
            "extra": "iterations: 624\ncpu: 1483395.833333334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 2486966.900804344,
            "unit": "ns/iter",
            "extra": "iterations: 373\ncpu: 2486765.951742628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 10266650.669902967,
            "unit": "ns/iter",
            "extra": "iterations: 103\ncpu: 10265886.407767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 5804909.238993732,
            "unit": "ns/iter",
            "extra": "iterations: 159\ncpu: 5804292.452830189 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 12403951.383721162,
            "unit": "ns/iter",
            "extra": "iterations: 86\ncpu: 12403136.04651161 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 51228.52599369304,
            "unit": "ns/iter",
            "extra": "iterations: 16177\ncpu: 51227.112567225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 221753.3786157007,
            "unit": "ns/iter",
            "extra": "iterations: 3872\ncpu: 221744.13739669396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 177542.80441966208,
            "unit": "ns/iter",
            "extra": "iterations: 4842\ncpu: 177531.10285006088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 175007.60377741724,
            "unit": "ns/iter",
            "extra": "iterations: 4924\ncpu: 174990.29244516545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 176362.95706655204,
            "unit": "ns/iter",
            "extra": "iterations: 4868\ncpu: 176350.78060805227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 373536.4539249239,
            "unit": "ns/iter",
            "extra": "iterations: 2344\ncpu: 373511.73208191205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 3136987.312080575,
            "unit": "ns/iter",
            "extra": "iterations: 298\ncpu: 3136784.8993288525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 2585623.808864169,
            "unit": "ns/iter",
            "extra": "iterations: 361\ncpu: 2585354.8476454276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 2558058.098360725,
            "unit": "ns/iter",
            "extra": "iterations: 366\ncpu: 2557890.4371584705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 2596752.651810635,
            "unit": "ns/iter",
            "extra": "iterations: 359\ncpu: 2596594.150417825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1482835.0462519948,
            "unit": "ns/iter",
            "extra": "iterations: 627\ncpu: 1482705.7416267944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 2509020.6424732376,
            "unit": "ns/iter",
            "extra": "iterations: 372\ncpu: 2508859.946236552 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 10457190.98076876,
            "unit": "ns/iter",
            "extra": "iterations: 104\ncpu: 10456556.730769234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 5908146.499999962,
            "unit": "ns/iter",
            "extra": "iterations: 158\ncpu: 5907710.126582269 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 50649.22769795193,
            "unit": "ns/iter",
            "extra": "iterations: 16355\ncpu: 50646.083766432406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 216088.6093434293,
            "unit": "ns/iter",
            "extra": "iterations: 3960\ncpu: 216074.52020202018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 175009.37507661319,
            "unit": "ns/iter",
            "extra": "iterations: 4895\ncpu: 175004.65781409698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 173593.31353871332,
            "unit": "ns/iter",
            "extra": "iterations: 4934\ncpu: 173589.25820835042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 175026.4488381561,
            "unit": "ns/iter",
            "extra": "iterations: 4906\ncpu: 175021.3819812484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 374669.58344115474,
            "unit": "ns/iter",
            "extra": "iterations: 2319\ncpu: 374651.1427339381 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 3159771.128813476,
            "unit": "ns/iter",
            "extra": "iterations: 295\ncpu: 3159719.6610169546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 2582348.4806630732,
            "unit": "ns/iter",
            "extra": "iterations: 362\ncpu: 2582192.541436449 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 2560291.9041095246,
            "unit": "ns/iter",
            "extra": "iterations: 365\ncpu: 2560280.82191781 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 2599991.092178752,
            "unit": "ns/iter",
            "extra": "iterations: 358\ncpu: 2599887.9888268304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1501147.0387722175,
            "unit": "ns/iter",
            "extra": "iterations: 619\ncpu: 1501058.9660743137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 2504753.231182798,
            "unit": "ns/iter",
            "extra": "iterations: 372\ncpu: 2504661.021505389 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 2954.1678340572585,
            "unit": "ns/iter",
            "extra": "iterations: 236853\ncpu: 2954.0567356123993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 21149.696359083893,
            "unit": "ns/iter",
            "extra": "iterations: 33151\ncpu: 21149.3258121926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 15362.765402270847,
            "unit": "ns/iter",
            "extra": "iterations: 45529\ncpu: 15362.274594214567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 16369.270385362775,
            "unit": "ns/iter",
            "extra": "iterations: 42739\ncpu: 16368.412924963237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 12818.048801988865,
            "unit": "ns/iter",
            "extra": "iterations: 56719\ncpu: 12818.002785662591 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 91494.25828460083,
            "unit": "ns/iter",
            "extra": "iterations: 8208\ncpu: 91489.10818713387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 200553.39318441373,
            "unit": "ns/iter",
            "extra": "iterations: 3492\ncpu: 200552.77777777906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 48921.59827983982,
            "unit": "ns/iter",
            "extra": "iterations: 14301\ncpu: 48918.6000978956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 48836.58011165599,
            "unit": "ns/iter",
            "extra": "iterations: 14330\ncpu: 48835.70830425595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 49328.89341494506,
            "unit": "ns/iter",
            "extra": "iterations: 14214\ncpu: 49327.48698466291 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 102373.40820797045,
            "unit": "ns/iter",
            "extra": "iterations: 6847\ncpu: 102367.54783116697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 92430.78543046513,
            "unit": "ns/iter",
            "extra": "iterations: 7550\ncpu: 92424.14569536322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 26995.423128884835,
            "unit": "ns/iter",
            "extra": "iterations: 25907\ncpu: 26994.067240514196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 134045.60425043007,
            "unit": "ns/iter",
            "extra": "iterations: 5223\ncpu: 134038.73252919785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 107203.31947184014,
            "unit": "ns/iter",
            "extra": "iterations: 6589\ncpu: 107196.49415692817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 106469.21149740844,
            "unit": "ns/iter",
            "extra": "iterations: 6558\ncpu: 106466.22445867646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 107718.72773420239,
            "unit": "ns/iter",
            "extra": "iterations: 6501\ncpu: 107715.45916013037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 187058.11197013198,
            "unit": "ns/iter",
            "extra": "iterations: 3751\ncpu: 187048.2271394301 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 858438.4359605826,
            "unit": "ns/iter",
            "extra": "iterations: 812\ncpu: 858393.8423645352 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 717779.8973306346,
            "unit": "ns/iter",
            "extra": "iterations: 974\ncpu: 717729.2607802952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 717408.3302563817,
            "unit": "ns/iter",
            "extra": "iterations: 975\ncpu: 717318.5641025635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 721773.6656346547,
            "unit": "ns/iter",
            "extra": "iterations: 969\ncpu: 721743.137254915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 452972.4566623519,
            "unit": "ns/iter",
            "extra": "iterations: 1546\ncpu: 452969.85769728175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 703753.8092369718,
            "unit": "ns/iter",
            "extra": "iterations: 996\ncpu: 703741.2650602328 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 27375.94685462224,
            "unit": "ns/iter",
            "extra": "iterations: 25609\ncpu: 27375.0087859736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 135099.95879067853,
            "unit": "ns/iter",
            "extra": "iterations: 5193\ncpu: 135095.6094742911 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 108063.95476300923,
            "unit": "ns/iter",
            "extra": "iterations: 6477\ncpu: 108063.51706036634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 107689.96355528383,
            "unit": "ns/iter",
            "extra": "iterations: 6503\ncpu: 107681.90066123377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 109383.3478125017,
            "unit": "ns/iter",
            "extra": "iterations: 6400\ncpu: 109382.96875000032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 188222.36566363386,
            "unit": "ns/iter",
            "extra": "iterations: 3722\ncpu: 188203.65394948737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 856294.308353846,
            "unit": "ns/iter",
            "extra": "iterations: 814\ncpu: 856249.5085995101 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 723239.5367114267,
            "unit": "ns/iter",
            "extra": "iterations: 967\ncpu: 723236.5046535733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 715493.4114636556,
            "unit": "ns/iter",
            "extra": "iterations: 977\ncpu: 715449.3346980542 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 737178.8432989592,
            "unit": "ns/iter",
            "extra": "iterations: 970\ncpu: 737167.2164948478 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 451554.4336340297,
            "unit": "ns/iter",
            "extra": "iterations: 1552\ncpu: 451525.77319587406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 704470.5376884579,
            "unit": "ns/iter",
            "extra": "iterations: 995\ncpu: 704419.6984924527 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}