window.BENCHMARK_DATA = {
  "lastUpdate": 1702490329533,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Serialize&Parse clang-6.0 18.04 Release c++-17": [
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
        "date": 1702490325987,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1494.2952659141495,
            "unit": "ns/iter",
            "extra": "iterations: 507363\ncpu: 1494.2618992713305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 16510.994536600832,
            "unit": "ns/iter",
            "extra": "iterations: 50518\ncpu: 16510.750623540123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 35315.129677945646,
            "unit": "ns/iter",
            "extra": "iterations: 23381\ncpu: 35313.04477994954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 52243.19956615752,
            "unit": "ns/iter",
            "extra": "iterations: 16135\ncpu: 52241.053610164265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 58674.55060000566,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 58670.47000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 74429.29724114564,
            "unit": "ns/iter",
            "extra": "iterations: 12034\ncpu: 74428.12863553266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 88633.49989581971,
            "unit": "ns/iter",
            "extra": "iterations: 9598\ncpu: 88630.27714107103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 100721.9670078273,
            "unit": "ns/iter",
            "extra": "iterations: 8305\ncpu: 100718.98856110778 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 117377.87471093207,
            "unit": "ns/iter",
            "extra": "iterations: 7351\ncpu: 117370.95633247188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1175.5229409829806,
            "unit": "ns/iter",
            "extra": "iterations: 595964\ncpu: 1175.4758676698582 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 936.7547064658862,
            "unit": "ns/iter",
            "extra": "iterations: 750032\ncpu: 936.7177667086196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 922.505015049182,
            "unit": "ns/iter",
            "extra": "iterations: 763502\ncpu: 922.4449968696872 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 942.9318912141384,
            "unit": "ns/iter",
            "extra": "iterations: 743443\ncpu: 942.881969431416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 1880.9045877132498,
            "unit": "ns/iter",
            "extra": "iterations: 372059\ncpu: 1880.824815419059 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5549.094677972084,
            "unit": "ns/iter",
            "extra": "iterations: 143761\ncpu: 5548.839393159486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 27428.428978338878,
            "unit": "ns/iter",
            "extra": "iterations: 31948\ncpu: 27426.730937773857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 20204.293399072987,
            "unit": "ns/iter",
            "extra": "iterations: 40767\ncpu: 20203.426791277223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 19555.94269429664,
            "unit": "ns/iter",
            "extra": "iterations: 41933\ncpu: 19554.823170295476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 19455.037205426623,
            "unit": "ns/iter",
            "extra": "iterations: 42010\ncpu: 19454.539395382068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 67665.21200980294,
            "unit": "ns/iter",
            "extra": "iterations: 13056\ncpu: 67527.28247549012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 571420.4470000368,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 571400.599999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 603730.4832664118,
            "unit": "ns/iter",
            "extra": "iterations: 1494\ncpu: 603690.0937081663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 592885.302486196,
            "unit": "ns/iter",
            "extra": "iterations: 1448\ncpu: 592863.6740331491 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 601898.6284558215,
            "unit": "ns/iter",
            "extra": "iterations: 1483\ncpu: 601853.1355360757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 331683.3169766546,
            "unit": "ns/iter",
            "extra": "iterations: 2527\ncpu: 331651.32568262756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 586830.8835341415,
            "unit": "ns/iter",
            "extra": "iterations: 1494\ncpu: 586809.103078983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2507807.8285716474,
            "unit": "ns/iter",
            "extra": "iterations: 385\ncpu: 2507583.1168831154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1143590.8529784328,
            "unit": "ns/iter",
            "extra": "iterations: 789\ncpu: 1143538.7832699644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3409121.5143885096,
            "unit": "ns/iter",
            "extra": "iterations: 278\ncpu: 3408860.4316546796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 8220.740015950458,
            "unit": "ns/iter",
            "extra": "iterations: 102814\ncpu: 8220.214173167053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 40868.296750053065,
            "unit": "ns/iter",
            "extra": "iterations: 19508\ncpu: 40866.86487594839 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 32290.9675652052,
            "unit": "ns/iter",
            "extra": "iterations: 25189\ncpu: 32288.161499067177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 31090.950281734473,
            "unit": "ns/iter",
            "extra": "iterations: 27153\ncpu: 31089.268220822658 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 31335.102742982595,
            "unit": "ns/iter",
            "extra": "iterations: 25228\ncpu: 31332.713651498398 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 78429.08525721774,
            "unit": "ns/iter",
            "extra": "iterations: 11002\ncpu: 78426.04071986926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 641666.3809999364,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 641646.0000000015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 612584.3282229446,
            "unit": "ns/iter",
            "extra": "iterations: 1435\ncpu: 612558.815331009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 603116.7714884586,
            "unit": "ns/iter",
            "extra": "iterations: 1431\ncpu: 603073.3752620528 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 587830.6026352725,
            "unit": "ns/iter",
            "extra": "iterations: 1442\ncpu: 587786.1997226063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 354692.63806549617,
            "unit": "ns/iter",
            "extra": "iterations: 2564\ncpu: 354675.7020280806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 598341.3996050094,
            "unit": "ns/iter",
            "extra": "iterations: 1519\ncpu: 598305.8591178391 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2661678.2719546696,
            "unit": "ns/iter",
            "extra": "iterations: 353\ncpu: 2661444.759206797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1157024.3620474897,
            "unit": "ns/iter",
            "extra": "iterations: 801\ncpu: 1156976.1548064908 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5459.774194203151,
            "unit": "ns/iter",
            "extra": "iterations: 147897\ncpu: 5459.4494817338955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 25022.819186960445,
            "unit": "ns/iter",
            "extra": "iterations: 33012\ncpu: 25020.74094268749 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 19670.08507391509,
            "unit": "ns/iter",
            "extra": "iterations: 41940\ncpu: 19668.006676204233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 19022.99879451191,
            "unit": "ns/iter",
            "extra": "iterations: 43136\ncpu: 19021.68490356088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 18977.59376151126,
            "unit": "ns/iter",
            "extra": "iterations: 43440\ncpu: 18976.3305709023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 64269.651593386974,
            "unit": "ns/iter",
            "extra": "iterations: 13556\ncpu: 64265.77161404572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 612990.7240000421,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 612972.2999999956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 592911.625702186,
            "unit": "ns/iter",
            "extra": "iterations: 1424\ncpu: 592864.7471910107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 581197.1609271356,
            "unit": "ns/iter",
            "extra": "iterations: 1510\ncpu: 581153.2450331114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 587609.9265109729,
            "unit": "ns/iter",
            "extra": "iterations: 1456\ncpu: 587557.0054945052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 345993.95765729976,
            "unit": "ns/iter",
            "extra": "iterations: 2527\ncpu: 345978.0767708737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 592909.4599865534,
            "unit": "ns/iter",
            "extra": "iterations: 1487\ncpu: 592860.322797576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 516.037786990582,
            "unit": "ns/iter",
            "extra": "iterations: 1362109\ncpu: 516.0031245663885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3143.3397834967636,
            "unit": "ns/iter",
            "extra": "iterations: 230020\ncpu: 3143.082775410823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2318.620896116291,
            "unit": "ns/iter",
            "extra": "iterations: 301635\ncpu: 2318.4948696272127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2487.2172640691965,
            "unit": "ns/iter",
            "extra": "iterations: 281915\ncpu: 2487.0414841352876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 1953.9246803901344,
            "unit": "ns/iter",
            "extra": "iterations: 358406\ncpu: 1953.7318013649394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 17534.70605359321,
            "unit": "ns/iter",
            "extra": "iterations: 40191\ncpu: 17533.17409370267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 31682.075124601644,
            "unit": "ns/iter",
            "extra": "iterations: 22070\ncpu: 31679.981875849942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 7427.325189383165,
            "unit": "ns/iter",
            "extra": "iterations: 94385\ncpu: 7427.013826349521 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 7459.948008648566,
            "unit": "ns/iter",
            "extra": "iterations: 93881\ncpu: 7459.73945739816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7464.297994361845,
            "unit": "ns/iter",
            "extra": "iterations: 93636\ncpu: 7464.038404032691 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 14918.322955289832,
            "unit": "ns/iter",
            "extra": "iterations: 46926\ncpu: 14917.314495162549 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 14028.99353184964,
            "unit": "ns/iter",
            "extra": "iterations: 49937\ncpu: 14027.971243767015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5334.588530427443,
            "unit": "ns/iter",
            "extra": "iterations: 131147\ncpu: 5334.158615904287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 26441.677781147933,
            "unit": "ns/iter",
            "extra": "iterations: 26392\ncpu: 26439.883297969194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 21202.65607968971,
            "unit": "ns/iter",
            "extra": "iterations: 33028\ncpu: 21202.028581809158 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 21109.56628610988,
            "unit": "ns/iter",
            "extra": "iterations: 33197\ncpu: 21108.570051510556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 21498.40088766365,
            "unit": "ns/iter",
            "extra": "iterations: 32670\ncpu: 21497.392102846585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 50034.769571425386,
            "unit": "ns/iter",
            "extra": "iterations: 14000\ncpu: 50031.5142857143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 160048.80307552585,
            "unit": "ns/iter",
            "extra": "iterations: 4357\ncpu: 160041.58824879467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 133689.7653588481,
            "unit": "ns/iter",
            "extra": "iterations: 5225\ncpu: 133686.16267942605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 133501.61599545757,
            "unit": "ns/iter",
            "extra": "iterations: 5289\ncpu: 133495.6513518619 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 133047.30312262627,
            "unit": "ns/iter",
            "extra": "iterations: 5252\ncpu: 133039.88956588137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 84513.02219555555,
            "unit": "ns/iter",
            "extra": "iterations: 8335\ncpu: 84508.53029394102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 132895.5612013641,
            "unit": "ns/iter",
            "extra": "iterations: 5294\ncpu: 132885.4930109556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 5057.567452640079,
            "unit": "ns/iter",
            "extra": "iterations: 138512\ncpu: 5057.499711216298 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 25830.58644342865,
            "unit": "ns/iter",
            "extra": "iterations: 27116\ncpu: 25829.849535329664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 20500.96185262137,
            "unit": "ns/iter",
            "extra": "iterations: 34157\ncpu: 20499.408613168507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 20135.905705618818,
            "unit": "ns/iter",
            "extra": "iterations: 34615\ncpu: 20135.08594539917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 20722.905601228995,
            "unit": "ns/iter",
            "extra": "iterations: 33814\ncpu: 20722.63263736903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 47142.606314522505,
            "unit": "ns/iter",
            "extra": "iterations: 14918\ncpu: 47139.710416945505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 155953.35910000317,
            "unit": "ns/iter",
            "extra": "iterations: 4489\ncpu: 155949.98886166068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 130202.92960388698,
            "unit": "ns/iter",
            "extra": "iterations: 5327\ncpu: 130196.95888868216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 128416.33065840458,
            "unit": "ns/iter",
            "extra": "iterations: 5483\ncpu: 128403.3375889092 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 128676.11497870913,
            "unit": "ns/iter",
            "extra": "iterations: 5401\ncpu: 128667.24680614553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 83268.57064569999,
            "unit": "ns/iter",
            "extra": "iterations: 8394\ncpu: 83262.8067667385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 128496.65429148515,
            "unit": "ns/iter",
            "extra": "iterations: 5441\ncpu: 128493.47546406972 ns\nthreads: 1"
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
        "date": 1702490325987,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1494.2952659141495,
            "unit": "ns/iter",
            "extra": "iterations: 507363\ncpu: 1494.2618992713305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 16510.994536600832,
            "unit": "ns/iter",
            "extra": "iterations: 50518\ncpu: 16510.750623540123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 35315.129677945646,
            "unit": "ns/iter",
            "extra": "iterations: 23381\ncpu: 35313.04477994954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 52243.19956615752,
            "unit": "ns/iter",
            "extra": "iterations: 16135\ncpu: 52241.053610164265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 58674.55060000566,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 58670.47000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 74429.29724114564,
            "unit": "ns/iter",
            "extra": "iterations: 12034\ncpu: 74428.12863553266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 88633.49989581971,
            "unit": "ns/iter",
            "extra": "iterations: 9598\ncpu: 88630.27714107103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 100721.9670078273,
            "unit": "ns/iter",
            "extra": "iterations: 8305\ncpu: 100718.98856110778 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 117377.87471093207,
            "unit": "ns/iter",
            "extra": "iterations: 7351\ncpu: 117370.95633247188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1175.5229409829806,
            "unit": "ns/iter",
            "extra": "iterations: 595964\ncpu: 1175.4758676698582 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 936.7547064658862,
            "unit": "ns/iter",
            "extra": "iterations: 750032\ncpu: 936.7177667086196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 922.505015049182,
            "unit": "ns/iter",
            "extra": "iterations: 763502\ncpu: 922.4449968696872 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 942.9318912141384,
            "unit": "ns/iter",
            "extra": "iterations: 743443\ncpu: 942.881969431416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 1880.9045877132498,
            "unit": "ns/iter",
            "extra": "iterations: 372059\ncpu: 1880.824815419059 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5549.094677972084,
            "unit": "ns/iter",
            "extra": "iterations: 143761\ncpu: 5548.839393159486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 27428.428978338878,
            "unit": "ns/iter",
            "extra": "iterations: 31948\ncpu: 27426.730937773857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 20204.293399072987,
            "unit": "ns/iter",
            "extra": "iterations: 40767\ncpu: 20203.426791277223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 19555.94269429664,
            "unit": "ns/iter",
            "extra": "iterations: 41933\ncpu: 19554.823170295476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 19455.037205426623,
            "unit": "ns/iter",
            "extra": "iterations: 42010\ncpu: 19454.539395382068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 67665.21200980294,
            "unit": "ns/iter",
            "extra": "iterations: 13056\ncpu: 67527.28247549012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 571420.4470000368,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 571400.599999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 603730.4832664118,
            "unit": "ns/iter",
            "extra": "iterations: 1494\ncpu: 603690.0937081663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 592885.302486196,
            "unit": "ns/iter",
            "extra": "iterations: 1448\ncpu: 592863.6740331491 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 601898.6284558215,
            "unit": "ns/iter",
            "extra": "iterations: 1483\ncpu: 601853.1355360757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 331683.3169766546,
            "unit": "ns/iter",
            "extra": "iterations: 2527\ncpu: 331651.32568262756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 586830.8835341415,
            "unit": "ns/iter",
            "extra": "iterations: 1494\ncpu: 586809.103078983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2507807.8285716474,
            "unit": "ns/iter",
            "extra": "iterations: 385\ncpu: 2507583.1168831154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1143590.8529784328,
            "unit": "ns/iter",
            "extra": "iterations: 789\ncpu: 1143538.7832699644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3409121.5143885096,
            "unit": "ns/iter",
            "extra": "iterations: 278\ncpu: 3408860.4316546796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 8220.740015950458,
            "unit": "ns/iter",
            "extra": "iterations: 102814\ncpu: 8220.214173167053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 40868.296750053065,
            "unit": "ns/iter",
            "extra": "iterations: 19508\ncpu: 40866.86487594839 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 32290.9675652052,
            "unit": "ns/iter",
            "extra": "iterations: 25189\ncpu: 32288.161499067177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 31090.950281734473,
            "unit": "ns/iter",
            "extra": "iterations: 27153\ncpu: 31089.268220822658 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 31335.102742982595,
            "unit": "ns/iter",
            "extra": "iterations: 25228\ncpu: 31332.713651498398 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 78429.08525721774,
            "unit": "ns/iter",
            "extra": "iterations: 11002\ncpu: 78426.04071986926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 641666.3809999364,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 641646.0000000015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 612584.3282229446,
            "unit": "ns/iter",
            "extra": "iterations: 1435\ncpu: 612558.815331009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 603116.7714884586,
            "unit": "ns/iter",
            "extra": "iterations: 1431\ncpu: 603073.3752620528 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 587830.6026352725,
            "unit": "ns/iter",
            "extra": "iterations: 1442\ncpu: 587786.1997226063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 354692.63806549617,
            "unit": "ns/iter",
            "extra": "iterations: 2564\ncpu: 354675.7020280806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 598341.3996050094,
            "unit": "ns/iter",
            "extra": "iterations: 1519\ncpu: 598305.8591178391 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2661678.2719546696,
            "unit": "ns/iter",
            "extra": "iterations: 353\ncpu: 2661444.759206797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1157024.3620474897,
            "unit": "ns/iter",
            "extra": "iterations: 801\ncpu: 1156976.1548064908 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5459.774194203151,
            "unit": "ns/iter",
            "extra": "iterations: 147897\ncpu: 5459.4494817338955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 25022.819186960445,
            "unit": "ns/iter",
            "extra": "iterations: 33012\ncpu: 25020.74094268749 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 19670.08507391509,
            "unit": "ns/iter",
            "extra": "iterations: 41940\ncpu: 19668.006676204233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 19022.99879451191,
            "unit": "ns/iter",
            "extra": "iterations: 43136\ncpu: 19021.68490356088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 18977.59376151126,
            "unit": "ns/iter",
            "extra": "iterations: 43440\ncpu: 18976.3305709023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 64269.651593386974,
            "unit": "ns/iter",
            "extra": "iterations: 13556\ncpu: 64265.77161404572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 612990.7240000421,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 612972.2999999956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 592911.625702186,
            "unit": "ns/iter",
            "extra": "iterations: 1424\ncpu: 592864.7471910107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 581197.1609271356,
            "unit": "ns/iter",
            "extra": "iterations: 1510\ncpu: 581153.2450331114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 587609.9265109729,
            "unit": "ns/iter",
            "extra": "iterations: 1456\ncpu: 587557.0054945052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 345993.95765729976,
            "unit": "ns/iter",
            "extra": "iterations: 2527\ncpu: 345978.0767708737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 592909.4599865534,
            "unit": "ns/iter",
            "extra": "iterations: 1487\ncpu: 592860.322797576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 516.037786990582,
            "unit": "ns/iter",
            "extra": "iterations: 1362109\ncpu: 516.0031245663885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3143.3397834967636,
            "unit": "ns/iter",
            "extra": "iterations: 230020\ncpu: 3143.082775410823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2318.620896116291,
            "unit": "ns/iter",
            "extra": "iterations: 301635\ncpu: 2318.4948696272127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2487.2172640691965,
            "unit": "ns/iter",
            "extra": "iterations: 281915\ncpu: 2487.0414841352876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 1953.9246803901344,
            "unit": "ns/iter",
            "extra": "iterations: 358406\ncpu: 1953.7318013649394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 17534.70605359321,
            "unit": "ns/iter",
            "extra": "iterations: 40191\ncpu: 17533.17409370267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 31682.075124601644,
            "unit": "ns/iter",
            "extra": "iterations: 22070\ncpu: 31679.981875849942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 7427.325189383165,
            "unit": "ns/iter",
            "extra": "iterations: 94385\ncpu: 7427.013826349521 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 7459.948008648566,
            "unit": "ns/iter",
            "extra": "iterations: 93881\ncpu: 7459.73945739816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7464.297994361845,
            "unit": "ns/iter",
            "extra": "iterations: 93636\ncpu: 7464.038404032691 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 14918.322955289832,
            "unit": "ns/iter",
            "extra": "iterations: 46926\ncpu: 14917.314495162549 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 14028.99353184964,
            "unit": "ns/iter",
            "extra": "iterations: 49937\ncpu: 14027.971243767015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5334.588530427443,
            "unit": "ns/iter",
            "extra": "iterations: 131147\ncpu: 5334.158615904287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 26441.677781147933,
            "unit": "ns/iter",
            "extra": "iterations: 26392\ncpu: 26439.883297969194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 21202.65607968971,
            "unit": "ns/iter",
            "extra": "iterations: 33028\ncpu: 21202.028581809158 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 21109.56628610988,
            "unit": "ns/iter",
            "extra": "iterations: 33197\ncpu: 21108.570051510556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 21498.40088766365,
            "unit": "ns/iter",
            "extra": "iterations: 32670\ncpu: 21497.392102846585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 50034.769571425386,
            "unit": "ns/iter",
            "extra": "iterations: 14000\ncpu: 50031.5142857143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 160048.80307552585,
            "unit": "ns/iter",
            "extra": "iterations: 4357\ncpu: 160041.58824879467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 133689.7653588481,
            "unit": "ns/iter",
            "extra": "iterations: 5225\ncpu: 133686.16267942605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 133501.61599545757,
            "unit": "ns/iter",
            "extra": "iterations: 5289\ncpu: 133495.6513518619 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 133047.30312262627,
            "unit": "ns/iter",
            "extra": "iterations: 5252\ncpu: 133039.88956588137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 84513.02219555555,
            "unit": "ns/iter",
            "extra": "iterations: 8335\ncpu: 84508.53029394102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 132895.5612013641,
            "unit": "ns/iter",
            "extra": "iterations: 5294\ncpu: 132885.4930109556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 5057.567452640079,
            "unit": "ns/iter",
            "extra": "iterations: 138512\ncpu: 5057.499711216298 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 25830.58644342865,
            "unit": "ns/iter",
            "extra": "iterations: 27116\ncpu: 25829.849535329664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 20500.96185262137,
            "unit": "ns/iter",
            "extra": "iterations: 34157\ncpu: 20499.408613168507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 20135.905705618818,
            "unit": "ns/iter",
            "extra": "iterations: 34615\ncpu: 20135.08594539917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 20722.905601228995,
            "unit": "ns/iter",
            "extra": "iterations: 33814\ncpu: 20722.63263736903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 47142.606314522505,
            "unit": "ns/iter",
            "extra": "iterations: 14918\ncpu: 47139.710416945505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 155953.35910000317,
            "unit": "ns/iter",
            "extra": "iterations: 4489\ncpu: 155949.98886166068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 130202.92960388698,
            "unit": "ns/iter",
            "extra": "iterations: 5327\ncpu: 130196.95888868216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 128416.33065840458,
            "unit": "ns/iter",
            "extra": "iterations: 5483\ncpu: 128403.3375889092 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 128676.11497870913,
            "unit": "ns/iter",
            "extra": "iterations: 5401\ncpu: 128667.24680614553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 83268.57064569999,
            "unit": "ns/iter",
            "extra": "iterations: 8394\ncpu: 83262.8067667385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 128496.65429148515,
            "unit": "ns/iter",
            "extra": "iterations: 5441\ncpu: 128493.47546406972 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}