window.BENCHMARK_DATA = {
  "lastUpdate": 1705773449876,
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
        "date": 1702492915738,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1412.2369064057211,
            "unit": "ns/iter",
            "extra": "iterations: 502574\ncpu: 1412.1287611376636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 16583.374185657663,
            "unit": "ns/iter",
            "extra": "iterations: 49887\ncpu: 16582.199771483556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 35047.85001276626,
            "unit": "ns/iter",
            "extra": "iterations: 23502\ncpu: 35047.625733980094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 52149.37919338742,
            "unit": "ns/iter",
            "extra": "iterations: 16216\ncpu: 52148.45214602863 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 57386.70810000031,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 57386.40000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 72712.0430574954,
            "unit": "ns/iter",
            "extra": "iterations: 12193\ncpu: 72711.51480357579 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 85998.72720071011,
            "unit": "ns/iter",
            "extra": "iterations: 10099\ncpu: 85996.81156550159 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 98840.2512580046,
            "unit": "ns/iter",
            "extra": "iterations: 8744\ncpu: 98836.52790484906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 115527.1950174197,
            "unit": "ns/iter",
            "extra": "iterations: 7466\ncpu: 115522.4886150548 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1204.7852564655423,
            "unit": "ns/iter",
            "extra": "iterations: 580702\ncpu: 1204.7774934475858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 938.6887352136312,
            "unit": "ns/iter",
            "extra": "iterations: 746885\ncpu: 938.6723525040658 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 911.4108285708483,
            "unit": "ns/iter",
            "extra": "iterations: 759066\ncpu: 911.3149581195829 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 921.3349238752161,
            "unit": "ns/iter",
            "extra": "iterations: 763681\ncpu: 921.2909578737704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 1868.4816269292346,
            "unit": "ns/iter",
            "extra": "iterations: 375087\ncpu: 1868.3769365507212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5467.3436962316855,
            "unit": "ns/iter",
            "extra": "iterations: 144136\ncpu: 5467.027668313254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 25546.91698835629,
            "unit": "ns/iter",
            "extra": "iterations: 31863\ncpu: 25544.779210997094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 20365.57346243106,
            "unit": "ns/iter",
            "extra": "iterations: 40177\ncpu: 20363.837518978544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 19608.590328707756,
            "unit": "ns/iter",
            "extra": "iterations: 41587\ncpu: 19607.05508933076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 19690.28557573274,
            "unit": "ns/iter",
            "extra": "iterations: 41243\ncpu: 19688.35196275726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 66786.07332742782,
            "unit": "ns/iter",
            "extra": "iterations: 13542\ncpu: 66781.70875793806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 575375.5880000427,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 575320.1000000025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 556752.8594770605,
            "unit": "ns/iter",
            "extra": "iterations: 1530\ncpu: 556737.4509803934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 567401.5961039028,
            "unit": "ns/iter",
            "extra": "iterations: 1540\ncpu: 567389.7402597395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 558898.9717949015,
            "unit": "ns/iter",
            "extra": "iterations: 1560\ncpu: 558885.8333333327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 329878.3287467771,
            "unit": "ns/iter",
            "extra": "iterations: 2689\ncpu: 329872.8523614721 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 562203.5760102893,
            "unit": "ns/iter",
            "extra": "iterations: 1559\ncpu: 562191.7254650423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2381630.115979409,
            "unit": "ns/iter",
            "extra": "iterations: 388\ncpu: 2381518.0412371065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1082295.1199999326,
            "unit": "ns/iter",
            "extra": "iterations: 850\ncpu: 1082231.1764705884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3276503.450704112,
            "unit": "ns/iter",
            "extra": "iterations: 284\ncpu: 3276439.436619725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 7667.86568665133,
            "unit": "ns/iter",
            "extra": "iterations: 109386\ncpu: 7667.675022397754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 39753.671082423905,
            "unit": "ns/iter",
            "extra": "iterations: 20759\ncpu: 39752.74820559765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 31378.605079867546,
            "unit": "ns/iter",
            "extra": "iterations: 26418\ncpu: 31378.41623135743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 31149.476033118382,
            "unit": "ns/iter",
            "extra": "iterations: 26328\ncpu: 31149.259343664467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 30626.325423471048,
            "unit": "ns/iter",
            "extra": "iterations: 26507\ncpu: 30625.687554230866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 77307.30809399321,
            "unit": "ns/iter",
            "extra": "iterations: 11107\ncpu: 77304.06950571723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 617368.9299999978,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 617366.4000000017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 600515.9338900389,
            "unit": "ns/iter",
            "extra": "iterations: 1437\ncpu: 600511.8302018086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 597596.9888811024,
            "unit": "ns/iter",
            "extra": "iterations: 1439\ncpu: 597585.6150104225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 600453.0289855041,
            "unit": "ns/iter",
            "extra": "iterations: 1449\ncpu: 600444.5134575578 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 346147.4796974535,
            "unit": "ns/iter",
            "extra": "iterations: 2512\ncpu: 346142.55573248386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 593869.0462899456,
            "unit": "ns/iter",
            "extra": "iterations: 1469\ncpu: 593859.496255953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2538014.601092803,
            "unit": "ns/iter",
            "extra": "iterations: 366\ncpu: 2537949.1803278765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1125695.2070217987,
            "unit": "ns/iter",
            "extra": "iterations: 826\ncpu: 1125662.7118644046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5413.749558844822,
            "unit": "ns/iter",
            "extra": "iterations: 148474\ncpu: 5413.71620620445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 24782.547761549722,
            "unit": "ns/iter",
            "extra": "iterations: 33416\ncpu: 24781.64352406022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 19911.179982776142,
            "unit": "ns/iter",
            "extra": "iterations: 41804\ncpu: 19909.59477561967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 18973.688099106334,
            "unit": "ns/iter",
            "extra": "iterations: 42459\ncpu: 18972.893850538097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 18607.653128505197,
            "unit": "ns/iter",
            "extra": "iterations: 43679\ncpu: 18606.165434190472 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 64208.872047394536,
            "unit": "ns/iter",
            "extra": "iterations: 13505\ncpu: 64204.92410218466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 586111.5069999414,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 586090.3999999962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 586480.625166407,
            "unit": "ns/iter",
            "extra": "iterations: 1502\ncpu: 586444.0745672401 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 584040.1894039699,
            "unit": "ns/iter",
            "extra": "iterations: 1510\ncpu: 584004.3708609244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 580198.964403448,
            "unit": "ns/iter",
            "extra": "iterations: 1517\ncpu: 580177.9828609105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 334489.6158559764,
            "unit": "ns/iter",
            "extra": "iterations: 2611\ncpu: 334469.20720030525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 595406.8741031267,
            "unit": "ns/iter",
            "extra": "iterations: 1533\ncpu: 595373.5812133063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 528.0893260809936,
            "unit": "ns/iter",
            "extra": "iterations: 1327563\ncpu: 528.0471058623963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 2984.959463905132,
            "unit": "ns/iter",
            "extra": "iterations: 234063\ncpu: 2984.7942647919585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2392.083420325854,
            "unit": "ns/iter",
            "extra": "iterations: 292171\ncpu: 2391.974220576319 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2269.147473876693,
            "unit": "ns/iter",
            "extra": "iterations: 308536\ncpu: 2268.9763917338555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 1946.7115256330035,
            "unit": "ns/iter",
            "extra": "iterations: 359772\ncpu: 1946.5678262899773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 17488.365435225598,
            "unit": "ns/iter",
            "extra": "iterations: 40278\ncpu: 17487.273449525914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 31212.094906787726,
            "unit": "ns/iter",
            "extra": "iterations: 22422\ncpu: 31210.32468111708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 7373.140430598687,
            "unit": "ns/iter",
            "extra": "iterations: 95727\ncpu: 7373.048356263211 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 7372.770153540716,
            "unit": "ns/iter",
            "extra": "iterations: 94698\ncpu: 7372.214830302605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7361.023716952175,
            "unit": "ns/iter",
            "extra": "iterations: 95164\ncpu: 7360.488209827339 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 14894.934307656908,
            "unit": "ns/iter",
            "extra": "iterations: 47007\ncpu: 14894.117897334529 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 14030.785993231046,
            "unit": "ns/iter",
            "extra": "iterations: 49933\ncpu: 14029.703803096018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5371.539241416835,
            "unit": "ns/iter",
            "extra": "iterations: 130691\ncpu: 5371.311720011287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 26814.17969317489,
            "unit": "ns/iter",
            "extra": "iterations: 26139\ncpu: 26812.712804621366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 21533.618257770693,
            "unit": "ns/iter",
            "extra": "iterations: 32556\ncpu: 21532.780439857463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 21405.79936325207,
            "unit": "ns/iter",
            "extra": "iterations: 32666\ncpu: 21405.234800710467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 21610.70642826221,
            "unit": "ns/iter",
            "extra": "iterations: 32326\ncpu: 21610.307492421052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 47740.149873967675,
            "unit": "ns/iter",
            "extra": "iterations: 14679\ncpu: 47738.45629811223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 156383.34803921598,
            "unit": "ns/iter",
            "extra": "iterations: 4488\ncpu: 156376.5374331539 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 130739.4329530499,
            "unit": "ns/iter",
            "extra": "iterations: 5347\ncpu: 130731.15765850116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 131492.7901072032,
            "unit": "ns/iter",
            "extra": "iterations: 5317\ncpu: 131483.4681211186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 130961.72808820591,
            "unit": "ns/iter",
            "extra": "iterations: 5351\ncpu: 130953.91515604593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 83877.06118777176,
            "unit": "ns/iter",
            "extra": "iterations: 8335\ncpu: 83871.31373725305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 131921.35944875135,
            "unit": "ns/iter",
            "extra": "iterations: 5297\ncpu: 131911.0439871629 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 5100.876087335954,
            "unit": "ns/iter",
            "extra": "iterations: 137492\ncpu: 5100.578215459855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 25929.589790168142,
            "unit": "ns/iter",
            "extra": "iterations: 26974\ncpu: 25928.761029139052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 20638.51683769807,
            "unit": "ns/iter",
            "extra": "iterations: 33912\ncpu: 20637.299481009704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 20471.054351968112,
            "unit": "ns/iter",
            "extra": "iterations: 34111\ncpu: 20470.241271144067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 21012.76969933389,
            "unit": "ns/iter",
            "extra": "iterations: 33326\ncpu: 21012.644781852046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 46582.81685445739,
            "unit": "ns/iter",
            "extra": "iterations: 14999\ncpu: 46582.53883592303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 155672.69302531268,
            "unit": "ns/iter",
            "extra": "iterations: 4502\ncpu: 155671.87916481466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 130271.82602176366,
            "unit": "ns/iter",
            "extra": "iterations: 5334\ncpu: 130269.01012373372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 130347.0641167713,
            "unit": "ns/iter",
            "extra": "iterations: 5412\ncpu: 130346.37841833034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 130110.01561627472,
            "unit": "ns/iter",
            "extra": "iterations: 5379\ncpu: 130103.81111730827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 84016.47056704017,
            "unit": "ns/iter",
            "extra": "iterations: 8324\ncpu: 84013.3829889478 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 130929.83062862318,
            "unit": "ns/iter",
            "extra": "iterations: 5361\ncpu: 130925.94665174595 ns\nthreads: 1"
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
        "date": 1702503951636,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1441.8202639751066,
            "unit": "ns/iter",
            "extra": "iterations: 497168\ncpu: 1441.802569755093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 16937.099200875142,
            "unit": "ns/iter",
            "extra": "iterations: 42046\ncpu: 16936.53855301337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 35271.03533841227,
            "unit": "ns/iter",
            "extra": "iterations: 23374\ncpu: 35270.492855309305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 52486.88329061657,
            "unit": "ns/iter",
            "extra": "iterations: 15997\ncpu: 52484.14702756766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 58095.86409999951,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 58094.690000000075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 72043.93914350499,
            "unit": "ns/iter",
            "extra": "iterations: 11979\ncpu: 72039.66942148762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 85120.9133641465,
            "unit": "ns/iter",
            "extra": "iterations: 10169\ncpu: 85115.5767528764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 98768.08446961176,
            "unit": "ns/iter",
            "extra": "iterations: 8654\ncpu: 98576.47330714119 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 117586.79343036212,
            "unit": "ns/iter",
            "extra": "iterations: 7489\ncpu: 117580.19762318056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1228.4325596471,
            "unit": "ns/iter",
            "extra": "iterations: 567672\ncpu: 1228.357220366692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 964.0300072281917,
            "unit": "ns/iter",
            "extra": "iterations: 726325\ncpu: 963.9749423467463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 955.7756649514175,
            "unit": "ns/iter",
            "extra": "iterations: 738663\ncpu: 955.7189137671722 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 968.1146701221138,
            "unit": "ns/iter",
            "extra": "iterations: 725420\ncpu: 968.08414435775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 1894.141984541845,
            "unit": "ns/iter",
            "extra": "iterations: 367702\ncpu: 1894.0900511827545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5542.477366454946,
            "unit": "ns/iter",
            "extra": "iterations: 144277\ncpu: 5542.209083914961 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 25711.84225475221,
            "unit": "ns/iter",
            "extra": "iterations: 32039\ncpu: 25710.80558069849 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 20229.000472189902,
            "unit": "ns/iter",
            "extra": "iterations: 40238\ncpu: 20227.841841045767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 19426.563204719267,
            "unit": "ns/iter",
            "extra": "iterations: 42038\ncpu: 19425.560207431354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 19331.763164204884,
            "unit": "ns/iter",
            "extra": "iterations: 41704\ncpu: 19331.251198925755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 67628.39891615171,
            "unit": "ns/iter",
            "extra": "iterations: 13286\ncpu: 67627.90155050448 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 559686.5729999649,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 559683.1000000008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 553702.0528375598,
            "unit": "ns/iter",
            "extra": "iterations: 1533\ncpu: 553701.1089367265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 552916.852978426,
            "unit": "ns/iter",
            "extra": "iterations: 1578\ncpu: 552905.8935361215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 567666.2263191375,
            "unit": "ns/iter",
            "extra": "iterations: 1573\ncpu: 567632.7399872859 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 334994.07132076845,
            "unit": "ns/iter",
            "extra": "iterations: 2650\ncpu: 334988.18867924553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 562697.7093628377,
            "unit": "ns/iter",
            "extra": "iterations: 1538\ncpu: 562676.527958387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2406327.4051947948,
            "unit": "ns/iter",
            "extra": "iterations: 385\ncpu: 2406272.727272724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1083764.0059101412,
            "unit": "ns/iter",
            "extra": "iterations: 846\ncpu: 1083701.1820330988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3290906.106761559,
            "unit": "ns/iter",
            "extra": "iterations: 281\ncpu: 3290745.195729543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 7623.673094332698,
            "unit": "ns/iter",
            "extra": "iterations: 110460\ncpu: 7623.222886112619 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 40112.36776303245,
            "unit": "ns/iter",
            "extra": "iterations: 20796\ncpu: 40111.63204462399 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 31422.60178937117,
            "unit": "ns/iter",
            "extra": "iterations: 26378\ncpu: 31421.90461748439 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 30961.913436501436,
            "unit": "ns/iter",
            "extra": "iterations: 26882\ncpu: 30960.57585001122 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 30605.69242820003,
            "unit": "ns/iter",
            "extra": "iterations: 26810\ncpu: 30604.31928384913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 79389.56855094408,
            "unit": "ns/iter",
            "extra": "iterations: 11021\ncpu: 79385.83613102202 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 606519.8219999957,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 606508.8000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 606368.5512910318,
            "unit": "ns/iter",
            "extra": "iterations: 1433\ncpu: 606342.5680390751 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 601791.9874477097,
            "unit": "ns/iter",
            "extra": "iterations: 1434\ncpu: 601773.9888423972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 596011.1146409012,
            "unit": "ns/iter",
            "extra": "iterations: 1448\ncpu: 595990.6077348053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 341588.2897344352,
            "unit": "ns/iter",
            "extra": "iterations: 2523\ncpu: 341569.9960364652 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 589259.777254381,
            "unit": "ns/iter",
            "extra": "iterations: 1486\ncpu: 589236.7429340527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2547664.2076502605,
            "unit": "ns/iter",
            "extra": "iterations: 366\ncpu: 2547529.2349726795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1126552.0998796243,
            "unit": "ns/iter",
            "extra": "iterations: 831\ncpu: 1126495.5475330905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5337.15246402736,
            "unit": "ns/iter",
            "extra": "iterations: 147543\ncpu: 5337.182380729678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 24439.148019377015,
            "unit": "ns/iter",
            "extra": "iterations: 33651\ncpu: 24439.07164720215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 19566.652290976024,
            "unit": "ns/iter",
            "extra": "iterations: 41969\ncpu: 19566.539588744083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 18799.332302051458,
            "unit": "ns/iter",
            "extra": "iterations: 43635\ncpu: 18799.07184599524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 18917.98169705544,
            "unit": "ns/iter",
            "extra": "iterations: 43381\ncpu: 18917.874184550732 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 65322.36140247814,
            "unit": "ns/iter",
            "extra": "iterations: 13633\ncpu: 65322.11545514523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 585493.065000037,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 585483.4000000011 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 585144.2815404986,
            "unit": "ns/iter",
            "extra": "iterations: 1506\ncpu: 585136.0557768947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 579713.145985428,
            "unit": "ns/iter",
            "extra": "iterations: 1507\ncpu: 579710.086264103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 599785.0119442233,
            "unit": "ns/iter",
            "extra": "iterations: 1507\ncpu: 599772.2627737225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 332851.42448210315,
            "unit": "ns/iter",
            "extra": "iterations: 2655\ncpu: 332843.1638418088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 560418.917737834,
            "unit": "ns/iter",
            "extra": "iterations: 1556\ncpu: 560413.1748071968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 521.8632611630654,
            "unit": "ns/iter",
            "extra": "iterations: 1343766\ncpu: 521.8597583210193 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3096.695599319402,
            "unit": "ns/iter",
            "extra": "iterations: 226215\ncpu: 3096.6129567004914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2476.073411799393,
            "unit": "ns/iter",
            "extra": "iterations: 282584\ncpu: 2476.068354896257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2488.9999609914375,
            "unit": "ns/iter",
            "extra": "iterations: 281989\ncpu: 2488.958079925091 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 1954.7107635274022,
            "unit": "ns/iter",
            "extra": "iterations: 361991\ncpu: 1954.682574981144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 17591.61368245016,
            "unit": "ns/iter",
            "extra": "iterations: 39452\ncpu: 17591.252661462026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 30967.75183676872,
            "unit": "ns/iter",
            "extra": "iterations: 22594\ncpu: 30967.55333274339 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 7361.578642593385,
            "unit": "ns/iter",
            "extra": "iterations: 95152\ncpu: 7361.521565495185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 7344.854555761746,
            "unit": "ns/iter",
            "extra": "iterations: 95253\ncpu: 7344.899373247976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7907.0581828156655,
            "unit": "ns/iter",
            "extra": "iterations: 83822\ncpu: 7906.981460714376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 15020.849832216138,
            "unit": "ns/iter",
            "extra": "iterations: 46488\ncpu: 15020.338581999458 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 14388.379220192512,
            "unit": "ns/iter",
            "extra": "iterations: 48576\ncpu: 14388.103178524287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5274.162723451274,
            "unit": "ns/iter",
            "extra": "iterations: 131069\ncpu: 5274.04725755135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 26555.899767077146,
            "unit": "ns/iter",
            "extra": "iterations: 26618\ncpu: 26554.992861972907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 21446.46071461641,
            "unit": "ns/iter",
            "extra": "iterations: 32493\ncpu: 21445.086634043917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 21148.794905112834,
            "unit": "ns/iter",
            "extra": "iterations: 33092\ncpu: 21148.168741690126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 21560.61401722164,
            "unit": "ns/iter",
            "extra": "iterations: 32403\ncpu: 21560.534518408924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 48950.007547695284,
            "unit": "ns/iter",
            "extra": "iterations: 14309\ncpu: 48950.30400447293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 159164.31295455492,
            "unit": "ns/iter",
            "extra": "iterations: 4400\ncpu: 159158.27272727253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 133051.9712381006,
            "unit": "ns/iter",
            "extra": "iterations: 5250\ncpu: 133049.2380952386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 133389.7345620417,
            "unit": "ns/iter",
            "extra": "iterations: 5263\ncpu: 133384.8185445561 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 132981.10285171194,
            "unit": "ns/iter",
            "extra": "iterations: 5260\ncpu: 132978.95437262164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 84495.04704464137,
            "unit": "ns/iter",
            "extra": "iterations: 8290\ncpu: 84494.49939686366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 133480.80659927824,
            "unit": "ns/iter",
            "extra": "iterations: 5243\ncpu: 133478.44745374745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 5187.729447485728,
            "unit": "ns/iter",
            "extra": "iterations: 135689\ncpu: 5187.646014046844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 26248.29624939504,
            "unit": "ns/iter",
            "extra": "iterations: 26849\ncpu: 26248.15821818341 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 20607.24974194127,
            "unit": "ns/iter",
            "extra": "iterations: 33907\ncpu: 20607.00740260127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 20431.247590307194,
            "unit": "ns/iter",
            "extra": "iterations: 34133\ncpu: 20431.116514809848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 20838.300853630662,
            "unit": "ns/iter",
            "extra": "iterations: 33621\ncpu: 20837.57770441107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 46618.047182343165,
            "unit": "ns/iter",
            "extra": "iterations: 15048\ncpu: 46617.1916533754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 154217.15162851915,
            "unit": "ns/iter",
            "extra": "iterations: 4544\ncpu: 154218.00176056527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 130151.10575838842,
            "unit": "ns/iter",
            "extra": "iterations: 5314\ncpu: 130150.60218291245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 129205.01808786344,
            "unit": "ns/iter",
            "extra": "iterations: 5418\ncpu: 129195.81026208839 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 129184.73614189994,
            "unit": "ns/iter",
            "extra": "iterations: 5412\ncpu: 129182.83444198193 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 83828.30354372064,
            "unit": "ns/iter",
            "extra": "iterations: 8381\ncpu: 83824.59133754994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 130006.18759258908,
            "unit": "ns/iter",
            "extra": "iterations: 5400\ncpu: 130001.74074074233 ns\nthreads: 1"
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
        "date": 1705575613195,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1424.5974165421355,
            "unit": "ns/iter",
            "extra": "iterations: 492673\ncpu: 1424.5365587316537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 16737.01242135374,
            "unit": "ns/iter",
            "extra": "iterations: 49431\ncpu: 16736.72391818899 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 35229.83753007861,
            "unit": "ns/iter",
            "extra": "iterations: 23272\ncpu: 35228.89309040908 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 52249.12440132101,
            "unit": "ns/iter",
            "extra": "iterations: 16286\ncpu: 52248.649146506235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 57929.00550000013,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 57926.43999999995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 72749.93612078317,
            "unit": "ns/iter",
            "extra": "iterations: 12054\ncpu: 72745.66948730712 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 85512.354021845,
            "unit": "ns/iter",
            "extra": "iterations: 10070\ncpu: 85506.64349553124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 99384.17953466107,
            "unit": "ns/iter",
            "extra": "iterations: 8639\ncpu: 99377.6015742562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 117485.64651598164,
            "unit": "ns/iter",
            "extra": "iterations: 7477\ncpu: 117480.19259061123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1239.8541423230138,
            "unit": "ns/iter",
            "extra": "iterations: 581944\ncpu: 1239.7943788405773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 925.1360854824325,
            "unit": "ns/iter",
            "extra": "iterations: 762168\ncpu: 925.1066693957247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 905.2195039413748,
            "unit": "ns/iter",
            "extra": "iterations: 774223\ncpu: 905.1579454498245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 915.5484504157697,
            "unit": "ns/iter",
            "extra": "iterations: 764689\ncpu: 915.5151963739504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 1847.6754801113668,
            "unit": "ns/iter",
            "extra": "iterations: 376319\ncpu: 1847.5495523744496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5513.079077315154,
            "unit": "ns/iter",
            "extra": "iterations: 143581\ncpu: 5512.865211970937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 25172.362804122986,
            "unit": "ns/iter",
            "extra": "iterations: 32224\ncpu: 25170.909880834133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 20007.597737074186,
            "unit": "ns/iter",
            "extra": "iterations: 41274\ncpu: 20007.004409555662 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 19101.565935360773,
            "unit": "ns/iter",
            "extra": "iterations: 42390\ncpu: 19100.950695918902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 19065.687906027688,
            "unit": "ns/iter",
            "extra": "iterations: 41715\ncpu: 19064.971832674168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 67004.52490594728,
            "unit": "ns/iter",
            "extra": "iterations: 13290\ncpu: 66999.84951091046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 569728.8709999383,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 569692.2000000022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 559799.3365570767,
            "unit": "ns/iter",
            "extra": "iterations: 1551\ncpu: 559758.027079304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 569596.6215686145,
            "unit": "ns/iter",
            "extra": "iterations: 1530\ncpu: 569586.9934640531 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 557908.0817650915,
            "unit": "ns/iter",
            "extra": "iterations: 1541\ncpu: 557878.3257624914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 328033.72580037627,
            "unit": "ns/iter",
            "extra": "iterations: 2655\ncpu: 328011.56308851263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 563333.6467919119,
            "unit": "ns/iter",
            "extra": "iterations: 1543\ncpu: 563302.7867790009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2412070.149484428,
            "unit": "ns/iter",
            "extra": "iterations: 388\ncpu: 2411936.8556701005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1082343.1878646642,
            "unit": "ns/iter",
            "extra": "iterations: 857\ncpu: 1082292.765460908 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3306506.335714435,
            "unit": "ns/iter",
            "extra": "iterations: 280\ncpu: 3306281.071428582 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 7588.578888919841,
            "unit": "ns/iter",
            "extra": "iterations: 109857\ncpu: 7588.091792056966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 39992.683352734995,
            "unit": "ns/iter",
            "extra": "iterations: 20616\ncpu: 39990.609235545344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 30849.55584298841,
            "unit": "ns/iter",
            "extra": "iterations: 26673\ncpu: 30847.752408803062 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 30715.619837731247,
            "unit": "ns/iter",
            "extra": "iterations: 27362\ncpu: 30714.36298516187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 31982.668339190946,
            "unit": "ns/iter",
            "extra": "iterations: 25909\ncpu: 31980.134316260843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 77660.8123274196,
            "unit": "ns/iter",
            "extra": "iterations: 11227\ncpu: 77656.58679967941 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 608960.3879999004,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 608924.2999999982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 597325.9146425888,
            "unit": "ns/iter",
            "extra": "iterations: 1441\ncpu: 597303.8861901442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 598819.4552341991,
            "unit": "ns/iter",
            "extra": "iterations: 1452\ncpu: 598795.2479338853 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 579270.6416382269,
            "unit": "ns/iter",
            "extra": "iterations: 1465\ncpu: 579230.3071672368 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 340875.80892716855,
            "unit": "ns/iter",
            "extra": "iterations: 2554\ncpu: 340865.309318716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 587237.8826290916,
            "unit": "ns/iter",
            "extra": "iterations: 1491\ncpu: 587221.6633132148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2544684.2986299735,
            "unit": "ns/iter",
            "extra": "iterations: 365\ncpu: 2544522.739726036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1118104.8418491876,
            "unit": "ns/iter",
            "extra": "iterations: 822\ncpu: 1118071.6545012153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5414.504930002874,
            "unit": "ns/iter",
            "extra": "iterations: 147363\ncpu: 5414.279025264107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 24653.701026857765,
            "unit": "ns/iter",
            "extra": "iterations: 32916\ncpu: 24652.679547940217 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 19685.520475906826,
            "unit": "ns/iter",
            "extra": "iterations: 42025\ncpu: 19684.763831053035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 19098.504432765592,
            "unit": "ns/iter",
            "extra": "iterations: 43201\ncpu: 19097.810235874265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 18822.260234189373,
            "unit": "ns/iter",
            "extra": "iterations: 43042\ncpu: 18821.321035267843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 63890.81875365287,
            "unit": "ns/iter",
            "extra": "iterations: 13672\ncpu: 63888.04125219409 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 591593.3169999334,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 591572.4000000041 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 584014.8017473585,
            "unit": "ns/iter",
            "extra": "iterations: 1488\ncpu: 583999.1263440844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 585176.941767062,
            "unit": "ns/iter",
            "extra": "iterations: 1494\ncpu: 585148.9959839357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 582819.335552561,
            "unit": "ns/iter",
            "extra": "iterations: 1502\ncpu: 582804.1278295582 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 334848.2559296434,
            "unit": "ns/iter",
            "extra": "iterations: 2614\ncpu: 334835.1951032908 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 574231.1626984132,
            "unit": "ns/iter",
            "extra": "iterations: 1512\ncpu: 574207.9365079374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 515.3408254434557,
            "unit": "ns/iter",
            "extra": "iterations: 1357428\ncpu: 515.319854902064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3069.8848253536403,
            "unit": "ns/iter",
            "extra": "iterations: 227689\ncpu: 3069.672228346579 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2409.5576360787663,
            "unit": "ns/iter",
            "extra": "iterations: 288656\ncpu: 2409.4936533451514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2387.1186445899375,
            "unit": "ns/iter",
            "extra": "iterations: 292133\ncpu: 2387.0422033799764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 1943.799841358023,
            "unit": "ns/iter",
            "extra": "iterations: 359300\ncpu: 1943.7478430281135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 17094.075128393386,
            "unit": "ns/iter",
            "extra": "iterations: 40890\ncpu: 17093.31621423321 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 29827.117405970857,
            "unit": "ns/iter",
            "extra": "iterations: 23423\ncpu: 29826.405669641 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 7351.885864894478,
            "unit": "ns/iter",
            "extra": "iterations: 95422\ncpu: 7351.722873132048 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 7324.805892203119,
            "unit": "ns/iter",
            "extra": "iterations: 95550\ncpu: 7324.543171114697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7380.810632927435,
            "unit": "ns/iter",
            "extra": "iterations: 95872\ncpu: 7380.5042139517955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 15011.721724330944,
            "unit": "ns/iter",
            "extra": "iterations: 46418\ncpu: 15010.972036709958 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 14231.529552973363,
            "unit": "ns/iter",
            "extra": "iterations: 49572\ncpu: 14197.423949003247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5350.633528385815,
            "unit": "ns/iter",
            "extra": "iterations: 129538\ncpu: 5350.382899226527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 26658.743254542685,
            "unit": "ns/iter",
            "extra": "iterations: 26314\ncpu: 26657.064680398198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 21536.093806447574,
            "unit": "ns/iter",
            "extra": "iterations: 32663\ncpu: 21535.459082141475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 21320.996431010994,
            "unit": "ns/iter",
            "extra": "iterations: 32222\ncpu: 21320.34945068561 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 21684.42957049223,
            "unit": "ns/iter",
            "extra": "iterations: 32316\ncpu: 21684.00482732988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 48536.74142480272,
            "unit": "ns/iter",
            "extra": "iterations: 14402\ncpu: 48534.66185252121 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 160378.46220796145,
            "unit": "ns/iter",
            "extra": "iterations: 4366\ncpu: 160373.56848373884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 133737.2872117278,
            "unit": "ns/iter",
            "extra": "iterations: 5247\ncpu: 133732.70440251566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 133776.79210374525,
            "unit": "ns/iter",
            "extra": "iterations: 5243\ncpu: 133774.11787144936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 133485.99637472312,
            "unit": "ns/iter",
            "extra": "iterations: 5241\ncpu: 133479.83209311144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 84354.5005418431,
            "unit": "ns/iter",
            "extra": "iterations: 8305\ncpu: 84349.18723660585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 133316.71888699578,
            "unit": "ns/iter",
            "extra": "iterations: 5247\ncpu: 133311.09205260364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 5153.775276828959,
            "unit": "ns/iter",
            "extra": "iterations: 135282\ncpu: 5153.551839860494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 26208.410917924703,
            "unit": "ns/iter",
            "extra": "iterations: 26745\ncpu: 26207.896803140844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 20768.26675547725,
            "unit": "ns/iter",
            "extra": "iterations: 33780\ncpu: 20767.504440497265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 20615.4256985524,
            "unit": "ns/iter",
            "extra": "iterations: 33963\ncpu: 20614.992786267445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 21042.221372666605,
            "unit": "ns/iter",
            "extra": "iterations: 33220\ncpu: 21041.37567730276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 46851.442288392354,
            "unit": "ns/iter",
            "extra": "iterations: 14945\ncpu: 46850.57209769125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 156080.54663097838,
            "unit": "ns/iter",
            "extra": "iterations: 4482\ncpu: 156073.42704149894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 130315.89417694183,
            "unit": "ns/iter",
            "extra": "iterations: 5358\ncpu: 130313.15789473742 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 128655.85328400474,
            "unit": "ns/iter",
            "extra": "iterations: 5405\ncpu: 128648.56614246104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 128726.72267207436,
            "unit": "ns/iter",
            "extra": "iterations: 5434\ncpu: 128721.64151637878 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 82717.23211955705,
            "unit": "ns/iter",
            "extra": "iterations: 8431\ncpu: 82712.50148262495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 129093.52337136671,
            "unit": "ns/iter",
            "extra": "iterations: 5434\ncpu: 129085.68273831405 ns\nthreads: 1"
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
          "id": "4c1f90876aa9fbfe7c3d4e17807fabb3578467e0",
          "message": "Update parser.hpp (#2)",
          "timestamp": "2024-01-20T17:20:02Z",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/4c1f90876aa9fbfe7c3d4e17807fabb3578467e0"
        },
        "date": 1705773447229,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1401.429945248773,
            "unit": "ns/iter",
            "extra": "iterations: 482180\ncpu: 1401.349288647393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 16272.53853104711,
            "unit": "ns/iter",
            "extra": "iterations: 50907\ncpu: 16272.19439369831 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 34534.85244458922,
            "unit": "ns/iter",
            "extra": "iterations: 23869\ncpu: 34534.7019146173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 51055.43491698111,
            "unit": "ns/iter",
            "extra": "iterations: 16502\ncpu: 51054.81759786693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 56717.778099994124,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 56717.200000000026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 73744.30453386274,
            "unit": "ns/iter",
            "extra": "iterations: 12153\ncpu: 73743.84925532788 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 86938.29211901949,
            "unit": "ns/iter",
            "extra": "iterations: 9948\ncpu: 86938.54041013274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 100137.55510252347,
            "unit": "ns/iter",
            "extra": "iterations: 8584\ncpu: 100135.6244175209 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 118641.22797371859,
            "unit": "ns/iter",
            "extra": "iterations: 7457\ncpu: 118637.72294488402 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1150.4498253294123,
            "unit": "ns/iter",
            "extra": "iterations: 608574\ncpu: 1150.45812013001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 928.6279117953408,
            "unit": "ns/iter",
            "extra": "iterations: 752886\ncpu: 928.6149563147669 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 913.2251619031273,
            "unit": "ns/iter",
            "extra": "iterations: 765427\ncpu: 913.2208558098935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 927.2915528912412,
            "unit": "ns/iter",
            "extra": "iterations: 753678\ncpu: 927.281677321083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 1905.9723492036496,
            "unit": "ns/iter",
            "extra": "iterations: 367946\ncpu: 1905.9552216901436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5578.894876732097,
            "unit": "ns/iter",
            "extra": "iterations: 143346\ncpu: 5578.844195164156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 25840.82789559483,
            "unit": "ns/iter",
            "extra": "iterations: 31876\ncpu: 25840.538336052163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 20108.02432239515,
            "unit": "ns/iter",
            "extra": "iterations: 40621\ncpu: 20107.747224342143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 19484.121467633257,
            "unit": "ns/iter",
            "extra": "iterations: 41509\ncpu: 19484.09501553874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 19559.758280787417,
            "unit": "ns/iter",
            "extra": "iterations: 41391\ncpu: 19559.406634292503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 66974.14127653082,
            "unit": "ns/iter",
            "extra": "iterations: 13286\ncpu: 66972.81348788197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 575474.5899999989,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 575468.1999999995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 567497.0330524852,
            "unit": "ns/iter",
            "extra": "iterations: 1543\ncpu: 567494.4264419961 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 567074.6006535856,
            "unit": "ns/iter",
            "extra": "iterations: 1530\ncpu: 567059.3464052299 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 571317.7004607999,
            "unit": "ns/iter",
            "extra": "iterations: 1519\ncpu: 571303.0283080981 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 332582.33018513606,
            "unit": "ns/iter",
            "extra": "iterations: 2647\ncpu: 332571.6660370232 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 558319.7276872635,
            "unit": "ns/iter",
            "extra": "iterations: 1535\ncpu: 558306.8403908797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2389072.0874036313,
            "unit": "ns/iter",
            "extra": "iterations: 389\ncpu: 2388991.259640105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1073425.7245369842,
            "unit": "ns/iter",
            "extra": "iterations: 864\ncpu: 1073391.8981481502 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3313461.106761734,
            "unit": "ns/iter",
            "extra": "iterations: 281\ncpu: 3313366.548042698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 7640.750265174574,
            "unit": "ns/iter",
            "extra": "iterations: 110305\ncpu: 7640.752459090688 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 39414.5640522562,
            "unit": "ns/iter",
            "extra": "iterations: 20897\ncpu: 39414.03550748914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 31210.877149968248,
            "unit": "ns/iter",
            "extra": "iterations: 26512\ncpu: 31210.497133373377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 30400.76162556087,
            "unit": "ns/iter",
            "extra": "iterations: 27289\ncpu: 30394.23210817528 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 29945.177359309648,
            "unit": "ns/iter",
            "extra": "iterations: 27667\ncpu: 29944.8801821665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 78083.85370669638,
            "unit": "ns/iter",
            "extra": "iterations: 11142\ncpu: 78082.89355591455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 604629.761999945,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 604619.9000000029 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 600280.6450276151,
            "unit": "ns/iter",
            "extra": "iterations: 1448\ncpu: 600276.2430939222 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 596505.2449687249,
            "unit": "ns/iter",
            "extra": "iterations: 1441\ncpu: 596497.0159611403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 595218.1750171242,
            "unit": "ns/iter",
            "extra": "iterations: 1457\ncpu: 595222.5806451623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 341928.3178082307,
            "unit": "ns/iter",
            "extra": "iterations: 2555\ncpu: 341925.6751467697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 583646.0020161123,
            "unit": "ns/iter",
            "extra": "iterations: 1488\ncpu: 583644.6908602164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2520770.8256130237,
            "unit": "ns/iter",
            "extra": "iterations: 367\ncpu: 2520688.5558583117 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1139529.417178038,
            "unit": "ns/iter",
            "extra": "iterations: 815\ncpu: 1139537.300613493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5409.2745452728905,
            "unit": "ns/iter",
            "extra": "iterations: 149815\ncpu: 5409.312819143607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 24709.22486392889,
            "unit": "ns/iter",
            "extra": "iterations: 33438\ncpu: 24709.076499790517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 19256.64677396399,
            "unit": "ns/iter",
            "extra": "iterations: 42126\ncpu: 19256.52803494275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 19191.55571785133,
            "unit": "ns/iter",
            "extra": "iterations: 42446\ncpu: 19191.184092729538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 19212.83552662456,
            "unit": "ns/iter",
            "extra": "iterations: 42554\ncpu: 19212.97410349196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 65182.04301646601,
            "unit": "ns/iter",
            "extra": "iterations: 13181\ncpu: 65181.49609286091 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 587293.6519999711,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 587291.4999999992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 587344.5408299448,
            "unit": "ns/iter",
            "extra": "iterations: 1494\ncpu: 587336.2784471192 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 588211.50800001,
            "unit": "ns/iter",
            "extra": "iterations: 1500\ncpu: 587847.1999999988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 583788.4629629444,
            "unit": "ns/iter",
            "extra": "iterations: 1512\ncpu: 583777.3148148137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 334725.63957053825,
            "unit": "ns/iter",
            "extra": "iterations: 2608\ncpu: 334725.3834355804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 577092.1375000022,
            "unit": "ns/iter",
            "extra": "iterations: 1520\ncpu: 577090.5921052613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 515.6452131472533,
            "unit": "ns/iter",
            "extra": "iterations: 1364174\ncpu: 515.6403801861024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 2983.5680778736987,
            "unit": "ns/iter",
            "extra": "iterations: 236795\ncpu: 2983.5680652040764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2406.502031794701,
            "unit": "ns/iter",
            "extra": "iterations: 291368\ncpu: 2406.481494192922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2475.1963787415,
            "unit": "ns/iter",
            "extra": "iterations: 283106\ncpu: 2475.175022782995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 1962.0639088824905,
            "unit": "ns/iter",
            "extra": "iterations: 358307\ncpu: 1962.05014135921 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 17530.98752578055,
            "unit": "ns/iter",
            "extra": "iterations: 40243\ncpu: 17530.109584275386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 31190.518342887706,
            "unit": "ns/iter",
            "extra": "iterations: 23197\ncpu: 31189.593481915283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 7344.586532607927,
            "unit": "ns/iter",
            "extra": "iterations: 95282\ncpu: 7344.582397514683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 7332.758168225884,
            "unit": "ns/iter",
            "extra": "iterations: 95645\ncpu: 7332.726227194308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7313.232693693508,
            "unit": "ns/iter",
            "extra": "iterations: 95731\ncpu: 7312.970720038344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 14745.004665825132,
            "unit": "ns/iter",
            "extra": "iterations: 47580\ncpu: 14744.787725935439 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 12481.755465211714,
            "unit": "ns/iter",
            "extra": "iterations: 56082\ncpu: 12480.935059377302 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5332.008591510674,
            "unit": "ns/iter",
            "extra": "iterations: 131176\ncpu: 5331.912849911615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 26631.84705122261,
            "unit": "ns/iter",
            "extra": "iterations: 26316\ncpu: 26631.49414804701 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 21357.46470498552,
            "unit": "ns/iter",
            "extra": "iterations: 32795\ncpu: 21357.316664125625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 21185.51045380547,
            "unit": "ns/iter",
            "extra": "iterations: 33098\ncpu: 21185.473442504237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 21612.32335329415,
            "unit": "ns/iter",
            "extra": "iterations: 32398\ncpu: 21612.124205197902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 48564.623923906496,
            "unit": "ns/iter",
            "extra": "iterations: 14404\ncpu: 48563.64898639259 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 160903.4686423137,
            "unit": "ns/iter",
            "extra": "iterations: 4353\ncpu: 160900.6662072122 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 134415.9040675421,
            "unit": "ns/iter",
            "extra": "iterations: 5212\ncpu: 134416.82655410608 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 133806.55467847185,
            "unit": "ns/iter",
            "extra": "iterations: 5194\ncpu: 133804.12013862128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 134161.36728451986,
            "unit": "ns/iter",
            "extra": "iterations: 5233\ncpu: 134158.57060959423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 84353.66013546991,
            "unit": "ns/iter",
            "extra": "iterations: 8268\ncpu: 84351.70537010158 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 133245.96800767875,
            "unit": "ns/iter",
            "extra": "iterations: 5220\ncpu: 133241.3793103452 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 5113.226859142302,
            "unit": "ns/iter",
            "extra": "iterations: 137160\ncpu: 5113.262613006666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 25829.019625923844,
            "unit": "ns/iter",
            "extra": "iterations: 27107\ncpu: 25829.0257129157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 20558.890099242235,
            "unit": "ns/iter",
            "extra": "iterations: 34058\ncpu: 20558.799694638456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 20288.778281331877,
            "unit": "ns/iter",
            "extra": "iterations: 34422\ncpu: 20288.28946603914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 20870.474871155217,
            "unit": "ns/iter",
            "extra": "iterations: 33567\ncpu: 20870.280334852767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 46544.80879909448,
            "unit": "ns/iter",
            "extra": "iterations: 15047\ncpu: 46544.34106466381 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 156060.25341392934,
            "unit": "ns/iter",
            "extra": "iterations: 4467\ncpu: 156058.04790687014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 130692.01788041784,
            "unit": "ns/iter",
            "extra": "iterations: 5369\ncpu: 130688.89923635668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 130293.7552499517,
            "unit": "ns/iter",
            "extra": "iterations: 5381\ncpu: 130293.0496190324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 129480.73132397118,
            "unit": "ns/iter",
            "extra": "iterations: 5408\ncpu: 129479.41937869949 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 83602.74511671283,
            "unit": "ns/iter",
            "extra": "iterations: 8396\ncpu: 83602.27489280516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 129706.4459459433,
            "unit": "ns/iter",
            "extra": "iterations: 5402\ncpu: 129705.96075527708 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}