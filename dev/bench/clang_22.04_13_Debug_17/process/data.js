window.BENCHMARK_DATA = {
  "lastUpdate": 1702394236563,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Serialize&Parse clang-13 22.04 Debug c++-17": [
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
          "id": "253b41ad57af60a2eea32abab15fde66fc4e9843",
          "message": "Enable BMs on Clang builds",
          "timestamp": "2023-12-12T17:28:42+03:00",
          "tree_id": "dc0c8a2e2fe0199e4eb6272c1e2acf70832d7058",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/253b41ad57af60a2eea32abab15fde66fc4e9843"
        },
        "date": 1702394232041,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 16497.017458346174,
            "unit": "ns/iter",
            "extra": "iterations: 42673\ncpu: 16495.453799826588 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 156294.63119777024,
            "unit": "ns/iter",
            "extra": "iterations: 5385\ncpu: 156291.03064066853 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 295699.99864037434,
            "unit": "ns/iter",
            "extra": "iterations: 2942\ncpu: 295682.4269204623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 433564.3951613007,
            "unit": "ns/iter",
            "extra": "iterations: 1984\ncpu: 433564.7177419357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 580016.6600790631,
            "unit": "ns/iter",
            "extra": "iterations: 1518\ncpu: 579985.5072463766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 576699.4349999664,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 576667.9000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 691007.1677802672,
            "unit": "ns/iter",
            "extra": "iterations: 1347\ncpu: 690967.5575352636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 800944.840517265,
            "unit": "ns/iter",
            "extra": "iterations: 1160\ncpu: 800908.2758620693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 915120.5509804006,
            "unit": "ns/iter",
            "extra": "iterations: 1020\ncpu: 915062.3529411764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 13117.709221199842,
            "unit": "ns/iter",
            "extra": "iterations: 52889\ncpu: 13116.943031632294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10610.465019081083,
            "unit": "ns/iter",
            "extra": "iterations: 66036\ncpu: 10609.970319219818 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 10657.992968058854,
            "unit": "ns/iter",
            "extra": "iterations: 65558\ncpu: 10657.552091277954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10850.856943971896,
            "unit": "ns/iter",
            "extra": "iterations: 64646\ncpu: 10850.553785230335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 17691.781652767488,
            "unit": "ns/iter",
            "extra": "iterations: 39570\ncpu: 17691.528936062652 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 64388.94433941078,
            "unit": "ns/iter",
            "extra": "iterations: 13223\ncpu: 64388.482190123206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 348212.59212663345,
            "unit": "ns/iter",
            "extra": "iterations: 2464\ncpu: 348205.96590909053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 271248.8928344919,
            "unit": "ns/iter",
            "extra": "iterations: 3154\ncpu: 271237.2225745088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 267376.0893696947,
            "unit": "ns/iter",
            "extra": "iterations: 3189\ncpu: 267370.14738162485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 259826.23276387528,
            "unit": "ns/iter",
            "extra": "iterations: 3278\ncpu: 259810.3416717512 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 568330.6673176883,
            "unit": "ns/iter",
            "extra": "iterations: 1536\ncpu: 568321.3541666671 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4892772.057894789,
            "unit": "ns/iter",
            "extra": "iterations: 190\ncpu: 4892593.684210536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3980486.876068288,
            "unit": "ns/iter",
            "extra": "iterations: 234\ncpu: 3980220.9401709386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3977249.8076921725,
            "unit": "ns/iter",
            "extra": "iterations: 234\ncpu: 3977177.7777777864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3982825.995726613,
            "unit": "ns/iter",
            "extra": "iterations: 234\ncpu: 3982488.8888888974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 2261370.153284672,
            "unit": "ns/iter",
            "extra": "iterations: 411\ncpu: 2261244.7688564467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3868097.983333267,
            "unit": "ns/iter",
            "extra": "iterations: 240\ncpu: 3867962.0833333316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 15031324.676056743,
            "unit": "ns/iter",
            "extra": "iterations: 71\ncpu: 15030302.816901427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 6743655.429999649,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6743455.999999988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 18452795.086206745,
            "unit": "ns/iter",
            "extra": "iterations: 58\ncpu: 18451555.172413837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 71409.84052232208,
            "unit": "ns/iter",
            "extra": "iterations: 11870\ncpu: 71404.69250210599 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 401379.36346687877,
            "unit": "ns/iter",
            "extra": "iterations: 2146\ncpu: 401361.74277726223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 300479.39719787077,
            "unit": "ns/iter",
            "extra": "iterations: 2855\ncpu: 300464.6935201415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 300156.685334272,
            "unit": "ns/iter",
            "extra": "iterations: 2857\ncpu: 300131.71158557746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 296525.4339950972,
            "unit": "ns/iter",
            "extra": "iterations: 2871\ncpu: 296510.69313827937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 597205.1195576807,
            "unit": "ns/iter",
            "extra": "iterations: 1447\ncpu: 597187.9751209402 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4991245.438502343,
            "unit": "ns/iter",
            "extra": "iterations: 187\ncpu: 4990842.780748663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 4029226.5584419123,
            "unit": "ns/iter",
            "extra": "iterations: 231\ncpu: 4028992.640692634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 4028596.8571432624,
            "unit": "ns/iter",
            "extra": "iterations: 231\ncpu: 4028329.437229432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 4016686.633620785,
            "unit": "ns/iter",
            "extra": "iterations: 232\ncpu: 4016344.827586183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 2296467.1154791815,
            "unit": "ns/iter",
            "extra": "iterations: 407\ncpu: 2296339.3120393134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3901108.376569111,
            "unit": "ns/iter",
            "extra": "iterations: 239\ncpu: 3900834.7280334695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 15797920.100000542,
            "unit": "ns/iter",
            "extra": "iterations: 70\ncpu: 15797121.428571412 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 6753307.600000653,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6752637.000000021 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 63017.49375557291,
            "unit": "ns/iter",
            "extra": "iterations: 13452\ncpu: 63014.36961046683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 347493.39035264537,
            "unit": "ns/iter",
            "extra": "iterations: 2467\ncpu: 347459.627077424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 268075.3728070111,
            "unit": "ns/iter",
            "extra": "iterations: 3192\ncpu: 268059.52380952385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 272357.25737858727,
            "unit": "ns/iter",
            "extra": "iterations: 3151\ncpu: 272233.00539511227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 261675.83988849737,
            "unit": "ns/iter",
            "extra": "iterations: 3229\ncpu: 261667.0176525237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 556769.4942233373,
            "unit": "ns/iter",
            "extra": "iterations: 1558\ncpu: 556757.7663671352 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 4944077.656084176,
            "unit": "ns/iter",
            "extra": "iterations: 189\ncpu: 4943882.539682551 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3995854.9270387134,
            "unit": "ns/iter",
            "extra": "iterations: 233\ncpu: 3995856.652360501 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3987248.957446838,
            "unit": "ns/iter",
            "extra": "iterations: 235\ncpu: 3987122.9787234263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3972179.04680832,
            "unit": "ns/iter",
            "extra": "iterations: 235\ncpu: 3971994.8936170144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 2259445.3990266128,
            "unit": "ns/iter",
            "extra": "iterations: 411\ncpu: 2259418.0048661907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3874906.6970955306,
            "unit": "ns/iter",
            "extra": "iterations: 241\ncpu: 3874702.904564295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 5967.608742796546,
            "unit": "ns/iter",
            "extra": "iterations: 117125\ncpu: 5967.251227321225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 40938.58223684206,
            "unit": "ns/iter",
            "extra": "iterations: 17632\ncpu: 40934.83439201427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 32595.310959645958,
            "unit": "ns/iter",
            "extra": "iterations: 22154\ncpu: 32593.73025187332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 32556.406181733862,
            "unit": "ns/iter",
            "extra": "iterations: 21515\ncpu: 32553.804322565393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 24354.801549356827,
            "unit": "ns/iter",
            "extra": "iterations: 28657\ncpu: 24353.079526817157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 154859.32094965223,
            "unit": "ns/iter",
            "extra": "iterations: 4549\ncpu: 154846.55968344695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 331201.2870662738,
            "unit": "ns/iter",
            "extra": "iterations: 2219\ncpu: 331185.26363226236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 81099.3155222152,
            "unit": "ns/iter",
            "extra": "iterations: 8665\ncpu: 81092.72937103143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 81000.0811466996,
            "unit": "ns/iter",
            "extra": "iterations: 8651\ncpu: 80997.17951681929 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 80669.16972001686,
            "unit": "ns/iter",
            "extra": "iterations: 8679\ncpu: 80666.22882820641 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 165939.58114192117,
            "unit": "ns/iter",
            "extra": "iterations: 4221\ncpu: 165933.4754797455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 156861.85483508976,
            "unit": "ns/iter",
            "extra": "iterations: 4457\ncpu: 156856.20372447598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 45552.513480159636,
            "unit": "ns/iter",
            "extra": "iterations: 15393\ncpu: 45549.97076593253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 230894.90013182812,
            "unit": "ns/iter",
            "extra": "iterations: 3034\ncpu: 230881.17996044602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 185472.61797457124,
            "unit": "ns/iter",
            "extra": "iterations: 3772\ncpu: 185467.17921526902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 184964.1759112489,
            "unit": "ns/iter",
            "extra": "iterations: 3786\ncpu: 184958.71632329383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 185166.45705194378,
            "unit": "ns/iter",
            "extra": "iterations: 3772\ncpu: 185154.29480381802 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 314710.3792172825,
            "unit": "ns/iter",
            "extra": "iterations: 2223\ncpu: 314697.30094466824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1380078.9721670924,
            "unit": "ns/iter",
            "extra": "iterations: 503\ncpu: 1379944.7316103508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 1139012.6861788377,
            "unit": "ns/iter",
            "extra": "iterations: 615\ncpu: 1138954.308943076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 1150755.6480262412,
            "unit": "ns/iter",
            "extra": "iterations: 608\ncpu: 1150693.4210526089 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 1139046.9250813904,
            "unit": "ns/iter",
            "extra": "iterations: 614\ncpu: 1139014.6579804744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 712618.5406503474,
            "unit": "ns/iter",
            "extra": "iterations: 984\ncpu: 712587.500000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 1133976.6985413162,
            "unit": "ns/iter",
            "extra": "iterations: 617\ncpu: 1133890.2755267478 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 46247.22590879426,
            "unit": "ns/iter",
            "extra": "iterations: 15130\ncpu: 46245.76999339039 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 222827.68686224872,
            "unit": "ns/iter",
            "extra": "iterations: 3136\ncpu: 222818.52678571476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 182601.64123334058,
            "unit": "ns/iter",
            "extra": "iterations: 3827\ncpu: 182599.97386987272 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 184508.00422163657,
            "unit": "ns/iter",
            "extra": "iterations: 3790\ncpu: 184495.72559366844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 185165.9354497375,
            "unit": "ns/iter",
            "extra": "iterations: 3780\ncpu: 185155.5820105808 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 311942.6645823945,
            "unit": "ns/iter",
            "extra": "iterations: 2239\ncpu: 311912.1482804783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1379199.635826713,
            "unit": "ns/iter",
            "extra": "iterations: 508\ncpu: 1379105.511811045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 1137560.3030794195,
            "unit": "ns/iter",
            "extra": "iterations: 617\ncpu: 1137494.6515396975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 1173007.563725455,
            "unit": "ns/iter",
            "extra": "iterations: 612\ncpu: 1172977.6143790737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 1136484.1250000366,
            "unit": "ns/iter",
            "extra": "iterations: 616\ncpu: 1136446.266233779 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 714190.6829765576,
            "unit": "ns/iter",
            "extra": "iterations: 981\ncpu: 714159.2252803195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 1134336.3970826839,
            "unit": "ns/iter",
            "extra": "iterations: 617\ncpu: 1134264.667747168 ns\nthreads: 1"
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
          "id": "253b41ad57af60a2eea32abab15fde66fc4e9843",
          "message": "Enable BMs on Clang builds",
          "timestamp": "2023-12-12T17:28:42+03:00",
          "tree_id": "dc0c8a2e2fe0199e4eb6272c1e2acf70832d7058",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/253b41ad57af60a2eea32abab15fde66fc4e9843"
        },
        "date": 1702394232041,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 16497.017458346174,
            "unit": "ns/iter",
            "extra": "iterations: 42673\ncpu: 16495.453799826588 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 156294.63119777024,
            "unit": "ns/iter",
            "extra": "iterations: 5385\ncpu: 156291.03064066853 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 295699.99864037434,
            "unit": "ns/iter",
            "extra": "iterations: 2942\ncpu: 295682.4269204623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 433564.3951613007,
            "unit": "ns/iter",
            "extra": "iterations: 1984\ncpu: 433564.7177419357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 580016.6600790631,
            "unit": "ns/iter",
            "extra": "iterations: 1518\ncpu: 579985.5072463766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 576699.4349999664,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 576667.9000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 691007.1677802672,
            "unit": "ns/iter",
            "extra": "iterations: 1347\ncpu: 690967.5575352636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 800944.840517265,
            "unit": "ns/iter",
            "extra": "iterations: 1160\ncpu: 800908.2758620693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 915120.5509804006,
            "unit": "ns/iter",
            "extra": "iterations: 1020\ncpu: 915062.3529411764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 13117.709221199842,
            "unit": "ns/iter",
            "extra": "iterations: 52889\ncpu: 13116.943031632294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10610.465019081083,
            "unit": "ns/iter",
            "extra": "iterations: 66036\ncpu: 10609.970319219818 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 10657.992968058854,
            "unit": "ns/iter",
            "extra": "iterations: 65558\ncpu: 10657.552091277954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10850.856943971896,
            "unit": "ns/iter",
            "extra": "iterations: 64646\ncpu: 10850.553785230335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 17691.781652767488,
            "unit": "ns/iter",
            "extra": "iterations: 39570\ncpu: 17691.528936062652 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 64388.94433941078,
            "unit": "ns/iter",
            "extra": "iterations: 13223\ncpu: 64388.482190123206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 348212.59212663345,
            "unit": "ns/iter",
            "extra": "iterations: 2464\ncpu: 348205.96590909053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 271248.8928344919,
            "unit": "ns/iter",
            "extra": "iterations: 3154\ncpu: 271237.2225745088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 267376.0893696947,
            "unit": "ns/iter",
            "extra": "iterations: 3189\ncpu: 267370.14738162485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 259826.23276387528,
            "unit": "ns/iter",
            "extra": "iterations: 3278\ncpu: 259810.3416717512 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 568330.6673176883,
            "unit": "ns/iter",
            "extra": "iterations: 1536\ncpu: 568321.3541666671 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4892772.057894789,
            "unit": "ns/iter",
            "extra": "iterations: 190\ncpu: 4892593.684210536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3980486.876068288,
            "unit": "ns/iter",
            "extra": "iterations: 234\ncpu: 3980220.9401709386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3977249.8076921725,
            "unit": "ns/iter",
            "extra": "iterations: 234\ncpu: 3977177.7777777864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3982825.995726613,
            "unit": "ns/iter",
            "extra": "iterations: 234\ncpu: 3982488.8888888974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 2261370.153284672,
            "unit": "ns/iter",
            "extra": "iterations: 411\ncpu: 2261244.7688564467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3868097.983333267,
            "unit": "ns/iter",
            "extra": "iterations: 240\ncpu: 3867962.0833333316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 15031324.676056743,
            "unit": "ns/iter",
            "extra": "iterations: 71\ncpu: 15030302.816901427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 6743655.429999649,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6743455.999999988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 18452795.086206745,
            "unit": "ns/iter",
            "extra": "iterations: 58\ncpu: 18451555.172413837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 71409.84052232208,
            "unit": "ns/iter",
            "extra": "iterations: 11870\ncpu: 71404.69250210599 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 401379.36346687877,
            "unit": "ns/iter",
            "extra": "iterations: 2146\ncpu: 401361.74277726223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 300479.39719787077,
            "unit": "ns/iter",
            "extra": "iterations: 2855\ncpu: 300464.6935201415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 300156.685334272,
            "unit": "ns/iter",
            "extra": "iterations: 2857\ncpu: 300131.71158557746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 296525.4339950972,
            "unit": "ns/iter",
            "extra": "iterations: 2871\ncpu: 296510.69313827937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 597205.1195576807,
            "unit": "ns/iter",
            "extra": "iterations: 1447\ncpu: 597187.9751209402 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4991245.438502343,
            "unit": "ns/iter",
            "extra": "iterations: 187\ncpu: 4990842.780748663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 4029226.5584419123,
            "unit": "ns/iter",
            "extra": "iterations: 231\ncpu: 4028992.640692634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 4028596.8571432624,
            "unit": "ns/iter",
            "extra": "iterations: 231\ncpu: 4028329.437229432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 4016686.633620785,
            "unit": "ns/iter",
            "extra": "iterations: 232\ncpu: 4016344.827586183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 2296467.1154791815,
            "unit": "ns/iter",
            "extra": "iterations: 407\ncpu: 2296339.3120393134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3901108.376569111,
            "unit": "ns/iter",
            "extra": "iterations: 239\ncpu: 3900834.7280334695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 15797920.100000542,
            "unit": "ns/iter",
            "extra": "iterations: 70\ncpu: 15797121.428571412 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 6753307.600000653,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6752637.000000021 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 63017.49375557291,
            "unit": "ns/iter",
            "extra": "iterations: 13452\ncpu: 63014.36961046683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 347493.39035264537,
            "unit": "ns/iter",
            "extra": "iterations: 2467\ncpu: 347459.627077424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 268075.3728070111,
            "unit": "ns/iter",
            "extra": "iterations: 3192\ncpu: 268059.52380952385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 272357.25737858727,
            "unit": "ns/iter",
            "extra": "iterations: 3151\ncpu: 272233.00539511227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 261675.83988849737,
            "unit": "ns/iter",
            "extra": "iterations: 3229\ncpu: 261667.0176525237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 556769.4942233373,
            "unit": "ns/iter",
            "extra": "iterations: 1558\ncpu: 556757.7663671352 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 4944077.656084176,
            "unit": "ns/iter",
            "extra": "iterations: 189\ncpu: 4943882.539682551 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3995854.9270387134,
            "unit": "ns/iter",
            "extra": "iterations: 233\ncpu: 3995856.652360501 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3987248.957446838,
            "unit": "ns/iter",
            "extra": "iterations: 235\ncpu: 3987122.9787234263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3972179.04680832,
            "unit": "ns/iter",
            "extra": "iterations: 235\ncpu: 3971994.8936170144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 2259445.3990266128,
            "unit": "ns/iter",
            "extra": "iterations: 411\ncpu: 2259418.0048661907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3874906.6970955306,
            "unit": "ns/iter",
            "extra": "iterations: 241\ncpu: 3874702.904564295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 5967.608742796546,
            "unit": "ns/iter",
            "extra": "iterations: 117125\ncpu: 5967.251227321225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 40938.58223684206,
            "unit": "ns/iter",
            "extra": "iterations: 17632\ncpu: 40934.83439201427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 32595.310959645958,
            "unit": "ns/iter",
            "extra": "iterations: 22154\ncpu: 32593.73025187332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 32556.406181733862,
            "unit": "ns/iter",
            "extra": "iterations: 21515\ncpu: 32553.804322565393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 24354.801549356827,
            "unit": "ns/iter",
            "extra": "iterations: 28657\ncpu: 24353.079526817157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 154859.32094965223,
            "unit": "ns/iter",
            "extra": "iterations: 4549\ncpu: 154846.55968344695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 331201.2870662738,
            "unit": "ns/iter",
            "extra": "iterations: 2219\ncpu: 331185.26363226236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 81099.3155222152,
            "unit": "ns/iter",
            "extra": "iterations: 8665\ncpu: 81092.72937103143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 81000.0811466996,
            "unit": "ns/iter",
            "extra": "iterations: 8651\ncpu: 80997.17951681929 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 80669.16972001686,
            "unit": "ns/iter",
            "extra": "iterations: 8679\ncpu: 80666.22882820641 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 165939.58114192117,
            "unit": "ns/iter",
            "extra": "iterations: 4221\ncpu: 165933.4754797455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 156861.85483508976,
            "unit": "ns/iter",
            "extra": "iterations: 4457\ncpu: 156856.20372447598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 45552.513480159636,
            "unit": "ns/iter",
            "extra": "iterations: 15393\ncpu: 45549.97076593253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 230894.90013182812,
            "unit": "ns/iter",
            "extra": "iterations: 3034\ncpu: 230881.17996044602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 185472.61797457124,
            "unit": "ns/iter",
            "extra": "iterations: 3772\ncpu: 185467.17921526902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 184964.1759112489,
            "unit": "ns/iter",
            "extra": "iterations: 3786\ncpu: 184958.71632329383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 185166.45705194378,
            "unit": "ns/iter",
            "extra": "iterations: 3772\ncpu: 185154.29480381802 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 314710.3792172825,
            "unit": "ns/iter",
            "extra": "iterations: 2223\ncpu: 314697.30094466824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1380078.9721670924,
            "unit": "ns/iter",
            "extra": "iterations: 503\ncpu: 1379944.7316103508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 1139012.6861788377,
            "unit": "ns/iter",
            "extra": "iterations: 615\ncpu: 1138954.308943076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 1150755.6480262412,
            "unit": "ns/iter",
            "extra": "iterations: 608\ncpu: 1150693.4210526089 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 1139046.9250813904,
            "unit": "ns/iter",
            "extra": "iterations: 614\ncpu: 1139014.6579804744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 712618.5406503474,
            "unit": "ns/iter",
            "extra": "iterations: 984\ncpu: 712587.500000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 1133976.6985413162,
            "unit": "ns/iter",
            "extra": "iterations: 617\ncpu: 1133890.2755267478 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 46247.22590879426,
            "unit": "ns/iter",
            "extra": "iterations: 15130\ncpu: 46245.76999339039 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 222827.68686224872,
            "unit": "ns/iter",
            "extra": "iterations: 3136\ncpu: 222818.52678571476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 182601.64123334058,
            "unit": "ns/iter",
            "extra": "iterations: 3827\ncpu: 182599.97386987272 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 184508.00422163657,
            "unit": "ns/iter",
            "extra": "iterations: 3790\ncpu: 184495.72559366844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 185165.9354497375,
            "unit": "ns/iter",
            "extra": "iterations: 3780\ncpu: 185155.5820105808 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 311942.6645823945,
            "unit": "ns/iter",
            "extra": "iterations: 2239\ncpu: 311912.1482804783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1379199.635826713,
            "unit": "ns/iter",
            "extra": "iterations: 508\ncpu: 1379105.511811045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 1137560.3030794195,
            "unit": "ns/iter",
            "extra": "iterations: 617\ncpu: 1137494.6515396975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 1173007.563725455,
            "unit": "ns/iter",
            "extra": "iterations: 612\ncpu: 1172977.6143790737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 1136484.1250000366,
            "unit": "ns/iter",
            "extra": "iterations: 616\ncpu: 1136446.266233779 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 714190.6829765576,
            "unit": "ns/iter",
            "extra": "iterations: 981\ncpu: 714159.2252803195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 1134336.3970826839,
            "unit": "ns/iter",
            "extra": "iterations: 617\ncpu: 1134264.667747168 ns\nthreads: 1"
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
          "id": "253b41ad57af60a2eea32abab15fde66fc4e9843",
          "message": "Enable BMs on Clang builds",
          "timestamp": "2023-12-12T17:28:42+03:00",
          "tree_id": "dc0c8a2e2fe0199e4eb6272c1e2acf70832d7058",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/253b41ad57af60a2eea32abab15fde66fc4e9843"
        },
        "date": 1702394232041,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 16497.017458346174,
            "unit": "ns/iter",
            "extra": "iterations: 42673\ncpu: 16495.453799826588 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 156294.63119777024,
            "unit": "ns/iter",
            "extra": "iterations: 5385\ncpu: 156291.03064066853 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 295699.99864037434,
            "unit": "ns/iter",
            "extra": "iterations: 2942\ncpu: 295682.4269204623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 433564.3951613007,
            "unit": "ns/iter",
            "extra": "iterations: 1984\ncpu: 433564.7177419357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 580016.6600790631,
            "unit": "ns/iter",
            "extra": "iterations: 1518\ncpu: 579985.5072463766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 576699.4349999664,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 576667.9000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 691007.1677802672,
            "unit": "ns/iter",
            "extra": "iterations: 1347\ncpu: 690967.5575352636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 800944.840517265,
            "unit": "ns/iter",
            "extra": "iterations: 1160\ncpu: 800908.2758620693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 915120.5509804006,
            "unit": "ns/iter",
            "extra": "iterations: 1020\ncpu: 915062.3529411764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 13117.709221199842,
            "unit": "ns/iter",
            "extra": "iterations: 52889\ncpu: 13116.943031632294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10610.465019081083,
            "unit": "ns/iter",
            "extra": "iterations: 66036\ncpu: 10609.970319219818 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 10657.992968058854,
            "unit": "ns/iter",
            "extra": "iterations: 65558\ncpu: 10657.552091277954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10850.856943971896,
            "unit": "ns/iter",
            "extra": "iterations: 64646\ncpu: 10850.553785230335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 17691.781652767488,
            "unit": "ns/iter",
            "extra": "iterations: 39570\ncpu: 17691.528936062652 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 64388.94433941078,
            "unit": "ns/iter",
            "extra": "iterations: 13223\ncpu: 64388.482190123206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 348212.59212663345,
            "unit": "ns/iter",
            "extra": "iterations: 2464\ncpu: 348205.96590909053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 271248.8928344919,
            "unit": "ns/iter",
            "extra": "iterations: 3154\ncpu: 271237.2225745088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 267376.0893696947,
            "unit": "ns/iter",
            "extra": "iterations: 3189\ncpu: 267370.14738162485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 259826.23276387528,
            "unit": "ns/iter",
            "extra": "iterations: 3278\ncpu: 259810.3416717512 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 568330.6673176883,
            "unit": "ns/iter",
            "extra": "iterations: 1536\ncpu: 568321.3541666671 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4892772.057894789,
            "unit": "ns/iter",
            "extra": "iterations: 190\ncpu: 4892593.684210536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3980486.876068288,
            "unit": "ns/iter",
            "extra": "iterations: 234\ncpu: 3980220.9401709386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3977249.8076921725,
            "unit": "ns/iter",
            "extra": "iterations: 234\ncpu: 3977177.7777777864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3982825.995726613,
            "unit": "ns/iter",
            "extra": "iterations: 234\ncpu: 3982488.8888888974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 2261370.153284672,
            "unit": "ns/iter",
            "extra": "iterations: 411\ncpu: 2261244.7688564467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3868097.983333267,
            "unit": "ns/iter",
            "extra": "iterations: 240\ncpu: 3867962.0833333316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 15031324.676056743,
            "unit": "ns/iter",
            "extra": "iterations: 71\ncpu: 15030302.816901427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 6743655.429999649,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6743455.999999988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 18452795.086206745,
            "unit": "ns/iter",
            "extra": "iterations: 58\ncpu: 18451555.172413837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 71409.84052232208,
            "unit": "ns/iter",
            "extra": "iterations: 11870\ncpu: 71404.69250210599 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 401379.36346687877,
            "unit": "ns/iter",
            "extra": "iterations: 2146\ncpu: 401361.74277726223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 300479.39719787077,
            "unit": "ns/iter",
            "extra": "iterations: 2855\ncpu: 300464.6935201415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 300156.685334272,
            "unit": "ns/iter",
            "extra": "iterations: 2857\ncpu: 300131.71158557746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 296525.4339950972,
            "unit": "ns/iter",
            "extra": "iterations: 2871\ncpu: 296510.69313827937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 597205.1195576807,
            "unit": "ns/iter",
            "extra": "iterations: 1447\ncpu: 597187.9751209402 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4991245.438502343,
            "unit": "ns/iter",
            "extra": "iterations: 187\ncpu: 4990842.780748663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 4029226.5584419123,
            "unit": "ns/iter",
            "extra": "iterations: 231\ncpu: 4028992.640692634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 4028596.8571432624,
            "unit": "ns/iter",
            "extra": "iterations: 231\ncpu: 4028329.437229432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 4016686.633620785,
            "unit": "ns/iter",
            "extra": "iterations: 232\ncpu: 4016344.827586183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 2296467.1154791815,
            "unit": "ns/iter",
            "extra": "iterations: 407\ncpu: 2296339.3120393134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3901108.376569111,
            "unit": "ns/iter",
            "extra": "iterations: 239\ncpu: 3900834.7280334695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 15797920.100000542,
            "unit": "ns/iter",
            "extra": "iterations: 70\ncpu: 15797121.428571412 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 6753307.600000653,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6752637.000000021 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 63017.49375557291,
            "unit": "ns/iter",
            "extra": "iterations: 13452\ncpu: 63014.36961046683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 347493.39035264537,
            "unit": "ns/iter",
            "extra": "iterations: 2467\ncpu: 347459.627077424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 268075.3728070111,
            "unit": "ns/iter",
            "extra": "iterations: 3192\ncpu: 268059.52380952385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 272357.25737858727,
            "unit": "ns/iter",
            "extra": "iterations: 3151\ncpu: 272233.00539511227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 261675.83988849737,
            "unit": "ns/iter",
            "extra": "iterations: 3229\ncpu: 261667.0176525237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 556769.4942233373,
            "unit": "ns/iter",
            "extra": "iterations: 1558\ncpu: 556757.7663671352 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 4944077.656084176,
            "unit": "ns/iter",
            "extra": "iterations: 189\ncpu: 4943882.539682551 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3995854.9270387134,
            "unit": "ns/iter",
            "extra": "iterations: 233\ncpu: 3995856.652360501 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3987248.957446838,
            "unit": "ns/iter",
            "extra": "iterations: 235\ncpu: 3987122.9787234263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3972179.04680832,
            "unit": "ns/iter",
            "extra": "iterations: 235\ncpu: 3971994.8936170144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 2259445.3990266128,
            "unit": "ns/iter",
            "extra": "iterations: 411\ncpu: 2259418.0048661907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3874906.6970955306,
            "unit": "ns/iter",
            "extra": "iterations: 241\ncpu: 3874702.904564295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 5967.608742796546,
            "unit": "ns/iter",
            "extra": "iterations: 117125\ncpu: 5967.251227321225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 40938.58223684206,
            "unit": "ns/iter",
            "extra": "iterations: 17632\ncpu: 40934.83439201427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 32595.310959645958,
            "unit": "ns/iter",
            "extra": "iterations: 22154\ncpu: 32593.73025187332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 32556.406181733862,
            "unit": "ns/iter",
            "extra": "iterations: 21515\ncpu: 32553.804322565393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 24354.801549356827,
            "unit": "ns/iter",
            "extra": "iterations: 28657\ncpu: 24353.079526817157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 154859.32094965223,
            "unit": "ns/iter",
            "extra": "iterations: 4549\ncpu: 154846.55968344695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 331201.2870662738,
            "unit": "ns/iter",
            "extra": "iterations: 2219\ncpu: 331185.26363226236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 81099.3155222152,
            "unit": "ns/iter",
            "extra": "iterations: 8665\ncpu: 81092.72937103143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 81000.0811466996,
            "unit": "ns/iter",
            "extra": "iterations: 8651\ncpu: 80997.17951681929 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 80669.16972001686,
            "unit": "ns/iter",
            "extra": "iterations: 8679\ncpu: 80666.22882820641 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 165939.58114192117,
            "unit": "ns/iter",
            "extra": "iterations: 4221\ncpu: 165933.4754797455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 156861.85483508976,
            "unit": "ns/iter",
            "extra": "iterations: 4457\ncpu: 156856.20372447598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 45552.513480159636,
            "unit": "ns/iter",
            "extra": "iterations: 15393\ncpu: 45549.97076593253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 230894.90013182812,
            "unit": "ns/iter",
            "extra": "iterations: 3034\ncpu: 230881.17996044602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 185472.61797457124,
            "unit": "ns/iter",
            "extra": "iterations: 3772\ncpu: 185467.17921526902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 184964.1759112489,
            "unit": "ns/iter",
            "extra": "iterations: 3786\ncpu: 184958.71632329383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 185166.45705194378,
            "unit": "ns/iter",
            "extra": "iterations: 3772\ncpu: 185154.29480381802 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 314710.3792172825,
            "unit": "ns/iter",
            "extra": "iterations: 2223\ncpu: 314697.30094466824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1380078.9721670924,
            "unit": "ns/iter",
            "extra": "iterations: 503\ncpu: 1379944.7316103508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 1139012.6861788377,
            "unit": "ns/iter",
            "extra": "iterations: 615\ncpu: 1138954.308943076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 1150755.6480262412,
            "unit": "ns/iter",
            "extra": "iterations: 608\ncpu: 1150693.4210526089 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 1139046.9250813904,
            "unit": "ns/iter",
            "extra": "iterations: 614\ncpu: 1139014.6579804744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 712618.5406503474,
            "unit": "ns/iter",
            "extra": "iterations: 984\ncpu: 712587.500000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 1133976.6985413162,
            "unit": "ns/iter",
            "extra": "iterations: 617\ncpu: 1133890.2755267478 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 46247.22590879426,
            "unit": "ns/iter",
            "extra": "iterations: 15130\ncpu: 46245.76999339039 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 222827.68686224872,
            "unit": "ns/iter",
            "extra": "iterations: 3136\ncpu: 222818.52678571476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 182601.64123334058,
            "unit": "ns/iter",
            "extra": "iterations: 3827\ncpu: 182599.97386987272 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 184508.00422163657,
            "unit": "ns/iter",
            "extra": "iterations: 3790\ncpu: 184495.72559366844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 185165.9354497375,
            "unit": "ns/iter",
            "extra": "iterations: 3780\ncpu: 185155.5820105808 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 311942.6645823945,
            "unit": "ns/iter",
            "extra": "iterations: 2239\ncpu: 311912.1482804783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1379199.635826713,
            "unit": "ns/iter",
            "extra": "iterations: 508\ncpu: 1379105.511811045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 1137560.3030794195,
            "unit": "ns/iter",
            "extra": "iterations: 617\ncpu: 1137494.6515396975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 1173007.563725455,
            "unit": "ns/iter",
            "extra": "iterations: 612\ncpu: 1172977.6143790737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 1136484.1250000366,
            "unit": "ns/iter",
            "extra": "iterations: 616\ncpu: 1136446.266233779 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 714190.6829765576,
            "unit": "ns/iter",
            "extra": "iterations: 981\ncpu: 714159.2252803195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 1134336.3970826839,
            "unit": "ns/iter",
            "extra": "iterations: 617\ncpu: 1134264.667747168 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}