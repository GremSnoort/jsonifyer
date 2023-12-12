window.BENCHMARK_DATA = {
  "lastUpdate": 1702382596403,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Serialize gcc-12 22.04 Release c++-17": [
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
        "date": 1702381440315,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 957.9285496467545,
            "unit": "ns/iter",
            "extra": "iterations: 731277\ncpu: 957.8704102549376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 18991.198616690475,
            "unit": "ns/iter",
            "extra": "iterations: 43808\ncpu: 18990.46292914536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 43850.38233428922,
            "unit": "ns/iter",
            "extra": "iterations: 20503\ncpu: 43846.5639174755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 54882.40959999757,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 54879.01000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 66817.40787705262,
            "unit": "ns/iter",
            "extra": "iterations: 11908\ncpu: 66815.15787705741 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 83474.85599847775,
            "unit": "ns/iter",
            "extra": "iterations: 10486\ncpu: 83469.53080297537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 99805.22092491818,
            "unit": "ns/iter",
            "extra": "iterations: 8736\ncpu: 99799.29029304035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 116263.99277978195,
            "unit": "ns/iter",
            "extra": "iterations: 7479\ncpu: 116256.79903730443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 147589.55006144027,
            "unit": "ns/iter",
            "extra": "iterations: 6512\ncpu: 147580.4514742015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 824.0485474501239,
            "unit": "ns/iter",
            "extra": "iterations: 849334\ncpu: 824.0003343796426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 660.1054264575974,
            "unit": "ns/iter",
            "extra": "iterations: 1060047\ncpu: 660.076298503746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 660.3091878045362,
            "unit": "ns/iter",
            "extra": "iterations: 1059437\ncpu: 660.2727675170864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 643.3283393091248,
            "unit": "ns/iter",
            "extra": "iterations: 1087433\ncpu: 643.3125535090428 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1258.3298589492026,
            "unit": "ns/iter",
            "extra": "iterations: 557317\ncpu: 1258.300033912476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 5660.362024108044,
            "unit": "ns/iter",
            "extra": "iterations: 140289\ncpu: 5660.179344068315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 25662.469134263698,
            "unit": "ns/iter",
            "extra": "iterations: 32123\ncpu: 25661.087071568632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 20403.46753150025,
            "unit": "ns/iter",
            "extra": "iterations: 40316\ncpu: 20402.366306181208 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 19286.81470810538,
            "unit": "ns/iter",
            "extra": "iterations: 42344\ncpu: 19285.313149442678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 20276.88228472834,
            "unit": "ns/iter",
            "extra": "iterations: 40530\ncpu: 20275.99309153712 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 56720.416876830066,
            "unit": "ns/iter",
            "extra": "iterations: 14671\ncpu: 56717.76974984669 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 645431.3429999274,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 645246.3999999977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 507691.5649999592,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 507647.20000000094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 506838.63300002937,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 506803.00000000146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 502727.9920000183,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 502720.89999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 362147.32588917913,
            "unit": "ns/iter",
            "extra": "iterations: 2418\ncpu: 362129.19768403645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 615696.7737330345,
            "unit": "ns/iter",
            "extra": "iterations: 1401\ncpu: 615671.5917202 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 2797783.7823531153,
            "unit": "ns/iter",
            "extra": "iterations: 340\ncpu: 2797555.2941176407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 1176782.7371006208,
            "unit": "ns/iter",
            "extra": "iterations: 814\ncpu: 1176703.4398034401 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 3472566.3713234332,
            "unit": "ns/iter",
            "extra": "iterations: 272\ncpu: 3472308.0882352875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 5017.334909999818,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5017.05900000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 25429.048851455645,
            "unit": "ns/iter",
            "extra": "iterations: 32650\ncpu: 25427.252679938716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 20441.84888527964,
            "unit": "ns/iter",
            "extra": "iterations: 40638\ncpu: 20440.83124169498 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 19361.74553018612,
            "unit": "ns/iter",
            "extra": "iterations: 42787\ncpu: 19360.719377380992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 20630.169858242818,
            "unit": "ns/iter",
            "extra": "iterations: 40210\ncpu: 20629.39318577467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 55982.65434898827,
            "unit": "ns/iter",
            "extra": "iterations: 14992\ncpu: 55980.2161152614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 632438.9020001036,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 632408.2000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 518464.1459999284,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 518429.09999999875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 516278.80299997743,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 516254.7999999987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 509199.1670000198,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 509184.70000000583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 362072.70556921605,
            "unit": "ns/iter",
            "extra": "iterations: 2442\ncpu: 362057.7395577382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 501048.93299999274,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 501024.60000000097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 2911132.185758579,
            "unit": "ns/iter",
            "extra": "iterations: 323\ncpu: 2910977.3993808003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 1208042.4814814895,
            "unit": "ns/iter",
            "extra": "iterations: 783\ncpu: 1207989.0166028088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 5656.1153083631725,
            "unit": "ns/iter",
            "extra": "iterations: 140727\ncpu: 5655.933829329152 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 25783.222571116254,
            "unit": "ns/iter",
            "extra": "iterations: 32165\ncpu: 25781.64464480037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 20481.691449812508,
            "unit": "ns/iter",
            "extra": "iterations: 40619\ncpu: 20480.248159728308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 19560.569547014326,
            "unit": "ns/iter",
            "extra": "iterations: 42518\ncpu: 19559.224328519627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 20089.238120533657,
            "unit": "ns/iter",
            "extra": "iterations: 41416\ncpu: 20088.468224840602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 55439.1703979309,
            "unit": "ns/iter",
            "extra": "iterations: 15053\ncpu: 55436.63057197872 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 620371.9349999801,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 620356.3000000046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 506753.16399997426,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 506728.29999999894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 505462.2440000003,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 505432.2999999954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 502299.12200006767,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 502277.1000000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 367348.66777684283,
            "unit": "ns/iter",
            "extra": "iterations: 2402\ncpu: 367327.35220649606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 505385.9509999939,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 505359.8999999949 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 359.01055583102493,
            "unit": "ns/iter",
            "extra": "iterations: 1962233\ncpu: 358.9944721141665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 2558.6354122302514,
            "unit": "ns/iter",
            "extra": "iterations: 274713\ncpu: 2558.5367274209707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1897.0174716091165,
            "unit": "ns/iter",
            "extra": "iterations: 369571\ncpu: 1896.9746002797826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1873.1429117992902,
            "unit": "ns/iter",
            "extra": "iterations: 373762\ncpu: 1873.0499622754508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1503.256484718575,
            "unit": "ns/iter",
            "extra": "iterations: 466250\ncpu: 1503.222091152819 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 10323.347908773085,
            "unit": "ns/iter",
            "extra": "iterations: 67831\ncpu: 10322.771299258426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 32503.95047804796,
            "unit": "ns/iter",
            "extra": "iterations: 21546\ncpu: 32502.817228255884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 7531.802441042679,
            "unit": "ns/iter",
            "extra": "iterations: 91846\ncpu: 7531.209851272746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 7584.691993588112,
            "unit": "ns/iter",
            "extra": "iterations: 92326\ncpu: 7584.221129475953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 7579.1906966630995,
            "unit": "ns/iter",
            "extra": "iterations: 92010\ncpu: 7578.538202369301 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 14918.465719384212,
            "unit": "ns/iter",
            "extra": "iterations: 47082\ncpu: 14918.034493012154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 14725.343635676525,
            "unit": "ns/iter",
            "extra": "iterations: 47562\ncpu: 14725.156637651911 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3524.9411658031186,
            "unit": "ns/iter",
            "extra": "iterations: 198524\ncpu: 3524.8488847695767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 17110.774952274063,
            "unit": "ns/iter",
            "extra": "iterations: 40858\ncpu: 17110.34069215328 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 13430.458410138137,
            "unit": "ns/iter",
            "extra": "iterations: 52080\ncpu: 13429.51996927804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 13152.34004050654,
            "unit": "ns/iter",
            "extra": "iterations: 53326\ncpu: 13151.170160897165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 13877.370234141792,
            "unit": "ns/iter",
            "extra": "iterations: 50568\ncpu: 13876.621578864064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 31425.597763104397,
            "unit": "ns/iter",
            "extra": "iterations: 22263\ncpu: 31422.768719399945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 145380.82811193977,
            "unit": "ns/iter",
            "extra": "iterations: 4788\ncpu: 145372.89055973323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 124443.59007971849,
            "unit": "ns/iter",
            "extra": "iterations: 5645\ncpu: 124434.15411868945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 123836.88210303556,
            "unit": "ns/iter",
            "extra": "iterations: 5649\ncpu: 123834.04142325874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 125041.04840149786,
            "unit": "ns/iter",
            "extra": "iterations: 5599\ncpu: 125037.88176460165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 71435.13266762123,
            "unit": "ns/iter",
            "extra": "iterations: 9814\ncpu: 71430.8742612596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 122662.98179590456,
            "unit": "ns/iter",
            "extra": "iterations: 5713\ncpu: 122656.66024855636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3380.124520481879,
            "unit": "ns/iter",
            "extra": "iterations: 207500\ncpu: 3379.85397590361 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 16492.855382512986,
            "unit": "ns/iter",
            "extra": "iterations: 42443\ncpu: 16491.92799754948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 13064.176590914485,
            "unit": "ns/iter",
            "extra": "iterations: 53287\ncpu: 13063.278097847498 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 12992.057190697164,
            "unit": "ns/iter",
            "extra": "iterations: 53750\ncpu: 12991.18697674425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 13846.376101472864,
            "unit": "ns/iter",
            "extra": "iterations: 50614\ncpu: 13845.716600150145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 30579.861217890833,
            "unit": "ns/iter",
            "extra": "iterations: 22892\ncpu: 30579.289708195032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 145818.6565298971,
            "unit": "ns/iter",
            "extra": "iterations: 4801\ncpu: 145814.6636117458 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 122990.89610389346,
            "unit": "ns/iter",
            "extra": "iterations: 5698\ncpu: 122982.62548262565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 123596.19529328166,
            "unit": "ns/iter",
            "extra": "iterations: 5694\ncpu: 123589.84896382352 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 123664.84074401004,
            "unit": "ns/iter",
            "extra": "iterations: 5645\ncpu: 123655.53587245404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 70314.16110610837,
            "unit": "ns/iter",
            "extra": "iterations: 9981\ncpu: 70310.60014026696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 121881.41961329196,
            "unit": "ns/iter",
            "extra": "iterations: 5741\ncpu: 121878.29646402995 ns\nthreads: 1"
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
        "date": 1702382595864,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 943.9494716497385,
            "unit": "ns/iter",
            "extra": "iterations: 740891\ncpu: 943.9241399882034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 18968.270037775525,
            "unit": "ns/iter",
            "extra": "iterations: 43942\ncpu: 18967.386555004323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 43701.80724532037,
            "unit": "ns/iter",
            "extra": "iterations: 20565\ncpu: 43700.69049355702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 54642.987299996545,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 54641.12000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 66518.9868921739,
            "unit": "ns/iter",
            "extra": "iterations: 11825\ncpu: 66514.89217758986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 83201.88369441572,
            "unit": "ns/iter",
            "extra": "iterations: 10524\ncpu: 83197.48194602809 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 100152.32534247547,
            "unit": "ns/iter",
            "extra": "iterations: 8760\ncpu: 100147.28310502283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 116813.62018397827,
            "unit": "ns/iter",
            "extra": "iterations: 7501\ncpu: 116806.1191841088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 147315.1764615989,
            "unit": "ns/iter",
            "extra": "iterations: 6534\ncpu: 147306.8564432202 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 810.4158092027686,
            "unit": "ns/iter",
            "extra": "iterations: 859803\ncpu: 810.3559768923809 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 644.0542687108156,
            "unit": "ns/iter",
            "extra": "iterations: 1084824\ncpu: 644.0498182193598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 645.6269617776967,
            "unit": "ns/iter",
            "extra": "iterations: 1084157\ncpu: 645.6130431293617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 638.0965210903645,
            "unit": "ns/iter",
            "extra": "iterations: 1097729\ncpu: 638.0541098941544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1284.8715245793157,
            "unit": "ns/iter",
            "extra": "iterations: 557990\ncpu: 1284.786107277908 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 5574.539624497338,
            "unit": "ns/iter",
            "extra": "iterations: 140292\ncpu: 5573.957175034927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 25619.109272869722,
            "unit": "ns/iter",
            "extra": "iterations: 31975\ncpu: 25617.429241595004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 20496.541538688234,
            "unit": "ns/iter",
            "extra": "iterations: 40372\ncpu: 20495.499355989294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 19590.777662142445,
            "unit": "ns/iter",
            "extra": "iterations: 42278\ncpu: 19589.864705047497 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 20280.909081992897,
            "unit": "ns/iter",
            "extra": "iterations: 40773\ncpu: 20279.832241924763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 56300.88897832922,
            "unit": "ns/iter",
            "extra": "iterations: 14907\ncpu: 56298.31622727572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 644461.6670000869,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 644181.4000000008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 507282.6680000162,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 507277.20000000077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 504975.9519999952,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 504966.1999999984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 507012.20300004474,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 506988.0000000033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 362902.90161891305,
            "unit": "ns/iter",
            "extra": "iterations: 2409\ncpu: 362895.97343295894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 625764.7458958122,
            "unit": "ns/iter",
            "extra": "iterations: 1401\ncpu: 625729.9785867234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 2823414.530120405,
            "unit": "ns/iter",
            "extra": "iterations: 332\ncpu: 2823362.650602406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 1203129.2964824177,
            "unit": "ns/iter",
            "extra": "iterations: 796\ncpu: 1203076.884422109 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 3489987.7564577926,
            "unit": "ns/iter",
            "extra": "iterations: 271\ncpu: 3489809.2250922457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 5009.472069999674,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5009.276000000007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 25534.916764944555,
            "unit": "ns/iter",
            "extra": "iterations: 32222\ncpu: 25534.4205822109 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 20531.960263592915,
            "unit": "ns/iter",
            "extra": "iterations: 40517\ncpu: 20531.571932768955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 19518.683315571914,
            "unit": "ns/iter",
            "extra": "iterations: 42225\ncpu: 19518.534043812906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 20803.058718507546,
            "unit": "ns/iter",
            "extra": "iterations: 40328\ncpu: 20802.499504066654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 57175.53246396266,
            "unit": "ns/iter",
            "extra": "iterations: 14570\ncpu: 57172.80713795451 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 630768.8100000632,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 630762.0999999983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 523721.69099999155,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 523722.99999999686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 514818.847000015,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 514801.9000000019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 505441.8790000454,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 505424.3000000014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 362048.0981996733,
            "unit": "ns/iter",
            "extra": "iterations: 2444\ncpu: 362041.73486088414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 503651.2369999855,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 503632.8000000054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 2909491.7129628826,
            "unit": "ns/iter",
            "extra": "iterations: 324\ncpu: 2909410.8024691264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 1242219.5598455777,
            "unit": "ns/iter",
            "extra": "iterations: 777\ncpu: 1242163.577863582 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 5685.919470723801,
            "unit": "ns/iter",
            "extra": "iterations: 142383\ncpu: 5685.837494644702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 25694.736016711697,
            "unit": "ns/iter",
            "extra": "iterations: 32074\ncpu: 25694.08555216065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 20496.54738501493,
            "unit": "ns/iter",
            "extra": "iterations: 40593\ncpu: 20496.169290271853 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 19507.557298259922,
            "unit": "ns/iter",
            "extra": "iterations: 42654\ncpu: 19505.99005954894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 20007.076428210163,
            "unit": "ns/iter",
            "extra": "iterations: 41503\ncpu: 20006.524829530365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 55676.71401378233,
            "unit": "ns/iter",
            "extra": "iterations: 15235\ncpu: 55675.77289136872 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 624628.2070000008,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 624602.2999999993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 508278.3010000185,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 508263.5000000053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 503943.8109999992,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 503927.39999999496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 506645.23900002224,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 506646.4000000011 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 366804.6518855999,
            "unit": "ns/iter",
            "extra": "iterations: 2413\ncpu: 366792.12598425156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 507294.3919999489,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 507286.40000000526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 323.43798217422267,
            "unit": "ns/iter",
            "extra": "iterations: 2170118\ncpu: 323.418910861068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 2560.1633133481787,
            "unit": "ns/iter",
            "extra": "iterations: 271870\ncpu: 2560.142347445478 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1975.0637510898498,
            "unit": "ns/iter",
            "extra": "iterations: 354441\ncpu: 1974.9664965396087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1893.6071117480778,
            "unit": "ns/iter",
            "extra": "iterations: 382297\ncpu: 1893.5521335506332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1504.3580068740612,
            "unit": "ns/iter",
            "extra": "iterations: 464938\ncpu: 1504.2982075029431 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 10580.203464362181,
            "unit": "ns/iter",
            "extra": "iterations: 67314\ncpu: 10579.619395668047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 31241.950173659934,
            "unit": "ns/iter",
            "extra": "iterations: 22458\ncpu: 31240.689286668596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 7584.631535656037,
            "unit": "ns/iter",
            "extra": "iterations: 92397\ncpu: 7584.459452146667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 7490.7534806826025,
            "unit": "ns/iter",
            "extra": "iterations: 93157\ncpu: 7490.685616754529 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 7544.744981429215,
            "unit": "ns/iter",
            "extra": "iterations: 91809\ncpu: 7544.388894334917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 14977.945856942384,
            "unit": "ns/iter",
            "extra": "iterations: 46765\ncpu: 14977.675612103107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 15000.233311939755,
            "unit": "ns/iter",
            "extra": "iterations: 46740\ncpu: 14999.627727856214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3252.529207978174,
            "unit": "ns/iter",
            "extra": "iterations: 215335\ncpu: 3252.457798314243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 17155.74613291313,
            "unit": "ns/iter",
            "extra": "iterations: 40793\ncpu: 17155.036403304373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 13455.334932176595,
            "unit": "ns/iter",
            "extra": "iterations: 52121\ncpu: 13454.835862704196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 13162.778703198033,
            "unit": "ns/iter",
            "extra": "iterations: 53069\ncpu: 13162.771109310535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 13975.071786078535,
            "unit": "ns/iter",
            "extra": "iterations: 50149\ncpu: 13974.23876847016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 31094.76864474433,
            "unit": "ns/iter",
            "extra": "iterations: 22446\ncpu: 31094.809765659986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 144536.2510876318,
            "unit": "ns/iter",
            "extra": "iterations: 4827\ncpu: 144529.0656722601 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 124779.84529108687,
            "unit": "ns/iter",
            "extra": "iterations: 5617\ncpu: 124777.55029375025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 124596.57295183276,
            "unit": "ns/iter",
            "extra": "iterations: 5627\ncpu: 124590.93655589056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 124877.7669642972,
            "unit": "ns/iter",
            "extra": "iterations: 5600\ncpu: 124875.24999999927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 71253.27950310243,
            "unit": "ns/iter",
            "extra": "iterations: 9821\ncpu: 71252.5506567554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 122577.4974574738,
            "unit": "ns/iter",
            "extra": "iterations: 5703\ncpu: 122571.38348237544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3184.1480567186536,
            "unit": "ns/iter",
            "extra": "iterations: 219963\ncpu: 3184.1568809299697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 16480.381867808293,
            "unit": "ns/iter",
            "extra": "iterations: 42499\ncpu: 16479.65363890931 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 13161.054463361374,
            "unit": "ns/iter",
            "extra": "iterations: 53155\ncpu: 13160.940645282511 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 13012.78466588371,
            "unit": "ns/iter",
            "extra": "iterations: 53619\ncpu: 13012.109513418827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 13765.710683776011,
            "unit": "ns/iter",
            "extra": "iterations: 50806\ncpu: 13765.321025075538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 30681.632471480523,
            "unit": "ns/iter",
            "extra": "iterations: 22703\ncpu: 30680.698586089708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 141724.26552985943,
            "unit": "ns/iter",
            "extra": "iterations: 4926\ncpu: 141716.86967113288 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 123757.32454900439,
            "unit": "ns/iter",
            "extra": "iterations: 5654\ncpu: 123752.81216837684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 122635.9313657072,
            "unit": "ns/iter",
            "extra": "iterations: 5726\ncpu: 122629.33985329892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 124042.1025686317,
            "unit": "ns/iter",
            "extra": "iterations: 5645\ncpu: 124041.20460584594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 70189.3715600919,
            "unit": "ns/iter",
            "extra": "iterations: 9993\ncpu: 70184.54918442882 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 122360.63224576515,
            "unit": "ns/iter",
            "extra": "iterations: 5762\ncpu: 122354.30406108966 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}