window.BENCHMARK_DATA = {
  "lastUpdate": 1702488558781,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Serialize gcc-7 18.04 Debug c++-17": [
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
        "date": 1702397912417,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 8486.543932345003,
            "unit": "ns/iter",
            "extra": "iterations: 82536\ncpu: 8486.287195890278 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 98986.04877200637,
            "unit": "ns/iter",
            "extra": "iterations: 8632\ncpu: 98984.75440222428 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 193364.6940890986,
            "unit": "ns/iter",
            "extra": "iterations: 4534\ncpu: 193361.5571239524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 289302.4805583226,
            "unit": "ns/iter",
            "extra": "iterations: 3009\ncpu: 289256.0319042872 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 375099.30694810813,
            "unit": "ns/iter",
            "extra": "iterations: 2274\ncpu: 375080.9586631489 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 478491.4219839261,
            "unit": "ns/iter",
            "extra": "iterations: 1865\ncpu: 478462.52010723844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 560202.9001919291,
            "unit": "ns/iter",
            "extra": "iterations: 1563\ncpu: 560193.0902111324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 521339.4439999775,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 521335.9999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 594364.3649999899,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 594353.9000000015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6741.603299352996,
            "unit": "ns/iter",
            "extra": "iterations: 104081\ncpu: 6741.488840422348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5498.355289624858,
            "unit": "ns/iter",
            "extra": "iterations: 127268\ncpu: 5498.191218530976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5605.144446571291,
            "unit": "ns/iter",
            "extra": "iterations: 125382\ncpu: 5605.102805825409 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5505.558045297749,
            "unit": "ns/iter",
            "extra": "iterations: 128572\ncpu: 5505.487197834679 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 9295.863838040157,
            "unit": "ns/iter",
            "extra": "iterations: 75278\ncpu: 9295.750418448946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 50999.58180254516,
            "unit": "ns/iter",
            "extra": "iterations: 16277\ncpu: 50999.373348897156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 214526.0341108587,
            "unit": "ns/iter",
            "extra": "iterations: 3987\ncpu: 214520.7674943568 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 174163.95970696094,
            "unit": "ns/iter",
            "extra": "iterations: 4914\ncpu: 174159.27960927933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 172501.2649848621,
            "unit": "ns/iter",
            "extra": "iterations: 4955\ncpu: 172493.29969727583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 170900.77268175108,
            "unit": "ns/iter",
            "extra": "iterations: 4993\ncpu: 170900.58081313834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 383707.853917652,
            "unit": "ns/iter",
            "extra": "iterations: 2259\ncpu: 383687.8707392665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 3023415.971153754,
            "unit": "ns/iter",
            "extra": "iterations: 312\ncpu: 3023261.85897436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 2469392.8552632146,
            "unit": "ns/iter",
            "extra": "iterations: 380\ncpu: 2469269.7368421005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 2478460.3888888126,
            "unit": "ns/iter",
            "extra": "iterations: 378\ncpu: 2478326.9841269883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 2454633.1178009235,
            "unit": "ns/iter",
            "extra": "iterations: 382\ncpu: 2454510.732984293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1539403.4767441545,
            "unit": "ns/iter",
            "extra": "iterations: 602\ncpu: 1539339.0365448517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 2405259.098191158,
            "unit": "ns/iter",
            "extra": "iterations: 387\ncpu: 2405177.777777777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 10596133.37373732,
            "unit": "ns/iter",
            "extra": "iterations: 99\ncpu: 10595195.959595965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 6076497.110389293,
            "unit": "ns/iter",
            "extra": "iterations: 154\ncpu: 6076192.857142858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 12569570.107143048,
            "unit": "ns/iter",
            "extra": "iterations: 84\ncpu: 12568925.00000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 52069.04659475567,
            "unit": "ns/iter",
            "extra": "iterations: 15946\ncpu: 52067.389941050926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 219943.9004811343,
            "unit": "ns/iter",
            "extra": "iterations: 3949\ncpu: 219930.96986578935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 174463.5229955193,
            "unit": "ns/iter",
            "extra": "iterations: 4914\ncpu: 174457.50915750963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 173465.89997954475,
            "unit": "ns/iter",
            "extra": "iterations: 4889\ncpu: 173464.0826344859 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 175898.09903629418,
            "unit": "ns/iter",
            "extra": "iterations: 4877\ncpu: 175890.13737953556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 388373.5607142772,
            "unit": "ns/iter",
            "extra": "iterations: 2240\ncpu: 388360.4464285722 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 3019087.0841422724,
            "unit": "ns/iter",
            "extra": "iterations: 309\ncpu: 3019014.2394822016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 2488646.029333419,
            "unit": "ns/iter",
            "extra": "iterations: 375\ncpu: 2488576.533333325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 2495229.613333322,
            "unit": "ns/iter",
            "extra": "iterations: 375\ncpu: 2495175.466666675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 2462831.807387876,
            "unit": "ns/iter",
            "extra": "iterations: 379\ncpu: 2462759.6306068534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1537711.527272722,
            "unit": "ns/iter",
            "extra": "iterations: 605\ncpu: 1537691.2396694173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 2418410.8958332413,
            "unit": "ns/iter",
            "extra": "iterations: 384\ncpu: 2418301.562499984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 10734732.899999812,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 10734574.999999965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 6040546.596154082,
            "unit": "ns/iter",
            "extra": "iterations: 156\ncpu: 6040460.256410249 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 50369.742680114876,
            "unit": "ns/iter",
            "extra": "iterations: 16462\ncpu: 50367.70137285865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 211421.60719602913,
            "unit": "ns/iter",
            "extra": "iterations: 4030\ncpu: 211420.62034739426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 172790.05891848856,
            "unit": "ns/iter",
            "extra": "iterations: 4956\ncpu: 172786.35996771543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 170839.9563388654,
            "unit": "ns/iter",
            "extra": "iterations: 4993\ncpu: 170840.91728419863 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 174997.74330128173,
            "unit": "ns/iter",
            "extra": "iterations: 4889\ncpu: 174992.37062794014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 385175.3616926471,
            "unit": "ns/iter",
            "extra": "iterations: 2245\ncpu: 385168.5968819587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 3009342.3290322204,
            "unit": "ns/iter",
            "extra": "iterations: 310\ncpu: 3009311.6129032364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 2484365.2234042254,
            "unit": "ns/iter",
            "extra": "iterations: 376\ncpu: 2484271.276595746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 2477819.898936159,
            "unit": "ns/iter",
            "extra": "iterations: 376\ncpu: 2477772.606382985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 2472339.970822228,
            "unit": "ns/iter",
            "extra": "iterations: 377\ncpu: 2472227.851458895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1553401.5946843964,
            "unit": "ns/iter",
            "extra": "iterations: 602\ncpu: 1553398.504983392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 2424460.0389610324,
            "unit": "ns/iter",
            "extra": "iterations: 385\ncpu: 2424328.051948041 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 2933.0498644328914,
            "unit": "ns/iter",
            "extra": "iterations: 238627\ncpu: 2933.0394297376206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 21234.530177009794,
            "unit": "ns/iter",
            "extra": "iterations: 32823\ncpu: 21234.162020534215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 16562.006333750087,
            "unit": "ns/iter",
            "extra": "iterations: 42313\ncpu: 16561.257769479762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 16312.626554081056,
            "unit": "ns/iter",
            "extra": "iterations: 42871\ncpu: 16312.262368500844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 12500.144941755249,
            "unit": "ns/iter",
            "extra": "iterations: 56057\ncpu: 12499.916156769066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 86875.27965260558,
            "unit": "ns/iter",
            "extra": "iterations: 8060\ncpu: 86873.5980148886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 185125.9143083882,
            "unit": "ns/iter",
            "extra": "iterations: 3781\ncpu: 185123.53874636456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 47611.49071744133,
            "unit": "ns/iter",
            "extra": "iterations: 14705\ncpu: 47609.064943896425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 47567.22877727058,
            "unit": "ns/iter",
            "extra": "iterations: 14713\ncpu: 47565.5134914697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 47569.31820346851,
            "unit": "ns/iter",
            "extra": "iterations: 14695\ncpu: 47568.152432800634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 105043.89060623961,
            "unit": "ns/iter",
            "extra": "iterations: 6664\ncpu: 105044.47779111579 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 90345.22885508183,
            "unit": "ns/iter",
            "extra": "iterations: 7756\ncpu: 90341.03919546174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 26540.145580329456,
            "unit": "ns/iter",
            "extra": "iterations: 26597\ncpu: 26528.454336955358 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 127797.76917444568,
            "unit": "ns/iter",
            "extra": "iterations: 5463\ncpu: 127792.44005125393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 103560.98264866824,
            "unit": "ns/iter",
            "extra": "iterations: 6743\ncpu: 103557.34836126292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 103497.79252805599,
            "unit": "ns/iter",
            "extra": "iterations: 6772\ncpu: 103497.46012994644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 103396.7226678501,
            "unit": "ns/iter",
            "extra": "iterations: 6732\ncpu: 103394.80095068352 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 181915.70220494005,
            "unit": "ns/iter",
            "extra": "iterations: 3855\ncpu: 181908.01556420073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 819661.3555555176,
            "unit": "ns/iter",
            "extra": "iterations: 855\ncpu: 819627.2514619915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 698930.6796406948,
            "unit": "ns/iter",
            "extra": "iterations: 1002\ncpu: 698906.0878243599 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 698538.4760478932,
            "unit": "ns/iter",
            "extra": "iterations: 1002\ncpu: 698526.1477045914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 692567.0178571322,
            "unit": "ns/iter",
            "extra": "iterations: 1008\ncpu: 692552.9761904809 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 462778.9324950308,
            "unit": "ns/iter",
            "extra": "iterations: 1511\ncpu: 462778.6234281927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 683103.7964774887,
            "unit": "ns/iter",
            "extra": "iterations: 1022\ncpu: 683101.7612524522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 26666.688972305914,
            "unit": "ns/iter",
            "extra": "iterations: 26107\ncpu: 26666.55686214425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 128639.98569332856,
            "unit": "ns/iter",
            "extra": "iterations: 5452\ncpu: 128633.60234776174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 103716.80115402225,
            "unit": "ns/iter",
            "extra": "iterations: 6759\ncpu: 103711.93963603975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 103595.33239852513,
            "unit": "ns/iter",
            "extra": "iterations: 6775\ncpu: 103591.80811808177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 104576.5643401571,
            "unit": "ns/iter",
            "extra": "iterations: 6691\ncpu: 104572.41070094275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 182956.43066075628,
            "unit": "ns/iter",
            "extra": "iterations: 3829\ncpu: 182957.71741969167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 814454.9185099397,
            "unit": "ns/iter",
            "extra": "iterations: 859\ncpu: 814428.5215366691 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 697330.1491053321,
            "unit": "ns/iter",
            "extra": "iterations: 1006\ncpu: 697328.3300198852 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 694887.3608350063,
            "unit": "ns/iter",
            "extra": "iterations: 1006\ncpu: 694881.9085487073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 691568.188548867,
            "unit": "ns/iter",
            "extra": "iterations: 1013\ncpu: 691574.7285291211 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 462389.6062005111,
            "unit": "ns/iter",
            "extra": "iterations: 1516\ncpu: 462394.3271767824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 679903.8833819117,
            "unit": "ns/iter",
            "extra": "iterations: 1029\ncpu: 679866.4723032065 ns\nthreads: 1"
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
        "date": 1702397912417,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 8486.543932345003,
            "unit": "ns/iter",
            "extra": "iterations: 82536\ncpu: 8486.287195890278 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 98986.04877200637,
            "unit": "ns/iter",
            "extra": "iterations: 8632\ncpu: 98984.75440222428 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 193364.6940890986,
            "unit": "ns/iter",
            "extra": "iterations: 4534\ncpu: 193361.5571239524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 289302.4805583226,
            "unit": "ns/iter",
            "extra": "iterations: 3009\ncpu: 289256.0319042872 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 375099.30694810813,
            "unit": "ns/iter",
            "extra": "iterations: 2274\ncpu: 375080.9586631489 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 478491.4219839261,
            "unit": "ns/iter",
            "extra": "iterations: 1865\ncpu: 478462.52010723844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 560202.9001919291,
            "unit": "ns/iter",
            "extra": "iterations: 1563\ncpu: 560193.0902111324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 521339.4439999775,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 521335.9999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 594364.3649999899,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 594353.9000000015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6741.603299352996,
            "unit": "ns/iter",
            "extra": "iterations: 104081\ncpu: 6741.488840422348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5498.355289624858,
            "unit": "ns/iter",
            "extra": "iterations: 127268\ncpu: 5498.191218530976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5605.144446571291,
            "unit": "ns/iter",
            "extra": "iterations: 125382\ncpu: 5605.102805825409 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5505.558045297749,
            "unit": "ns/iter",
            "extra": "iterations: 128572\ncpu: 5505.487197834679 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 9295.863838040157,
            "unit": "ns/iter",
            "extra": "iterations: 75278\ncpu: 9295.750418448946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 50999.58180254516,
            "unit": "ns/iter",
            "extra": "iterations: 16277\ncpu: 50999.373348897156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 214526.0341108587,
            "unit": "ns/iter",
            "extra": "iterations: 3987\ncpu: 214520.7674943568 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 174163.95970696094,
            "unit": "ns/iter",
            "extra": "iterations: 4914\ncpu: 174159.27960927933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 172501.2649848621,
            "unit": "ns/iter",
            "extra": "iterations: 4955\ncpu: 172493.29969727583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 170900.77268175108,
            "unit": "ns/iter",
            "extra": "iterations: 4993\ncpu: 170900.58081313834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 383707.853917652,
            "unit": "ns/iter",
            "extra": "iterations: 2259\ncpu: 383687.8707392665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 3023415.971153754,
            "unit": "ns/iter",
            "extra": "iterations: 312\ncpu: 3023261.85897436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 2469392.8552632146,
            "unit": "ns/iter",
            "extra": "iterations: 380\ncpu: 2469269.7368421005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 2478460.3888888126,
            "unit": "ns/iter",
            "extra": "iterations: 378\ncpu: 2478326.9841269883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 2454633.1178009235,
            "unit": "ns/iter",
            "extra": "iterations: 382\ncpu: 2454510.732984293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1539403.4767441545,
            "unit": "ns/iter",
            "extra": "iterations: 602\ncpu: 1539339.0365448517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 2405259.098191158,
            "unit": "ns/iter",
            "extra": "iterations: 387\ncpu: 2405177.777777777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 10596133.37373732,
            "unit": "ns/iter",
            "extra": "iterations: 99\ncpu: 10595195.959595965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 6076497.110389293,
            "unit": "ns/iter",
            "extra": "iterations: 154\ncpu: 6076192.857142858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 12569570.107143048,
            "unit": "ns/iter",
            "extra": "iterations: 84\ncpu: 12568925.00000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 52069.04659475567,
            "unit": "ns/iter",
            "extra": "iterations: 15946\ncpu: 52067.389941050926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 219943.9004811343,
            "unit": "ns/iter",
            "extra": "iterations: 3949\ncpu: 219930.96986578935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 174463.5229955193,
            "unit": "ns/iter",
            "extra": "iterations: 4914\ncpu: 174457.50915750963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 173465.89997954475,
            "unit": "ns/iter",
            "extra": "iterations: 4889\ncpu: 173464.0826344859 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 175898.09903629418,
            "unit": "ns/iter",
            "extra": "iterations: 4877\ncpu: 175890.13737953556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 388373.5607142772,
            "unit": "ns/iter",
            "extra": "iterations: 2240\ncpu: 388360.4464285722 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 3019087.0841422724,
            "unit": "ns/iter",
            "extra": "iterations: 309\ncpu: 3019014.2394822016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 2488646.029333419,
            "unit": "ns/iter",
            "extra": "iterations: 375\ncpu: 2488576.533333325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 2495229.613333322,
            "unit": "ns/iter",
            "extra": "iterations: 375\ncpu: 2495175.466666675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 2462831.807387876,
            "unit": "ns/iter",
            "extra": "iterations: 379\ncpu: 2462759.6306068534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1537711.527272722,
            "unit": "ns/iter",
            "extra": "iterations: 605\ncpu: 1537691.2396694173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 2418410.8958332413,
            "unit": "ns/iter",
            "extra": "iterations: 384\ncpu: 2418301.562499984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 10734732.899999812,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 10734574.999999965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 6040546.596154082,
            "unit": "ns/iter",
            "extra": "iterations: 156\ncpu: 6040460.256410249 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 50369.742680114876,
            "unit": "ns/iter",
            "extra": "iterations: 16462\ncpu: 50367.70137285865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 211421.60719602913,
            "unit": "ns/iter",
            "extra": "iterations: 4030\ncpu: 211420.62034739426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 172790.05891848856,
            "unit": "ns/iter",
            "extra": "iterations: 4956\ncpu: 172786.35996771543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 170839.9563388654,
            "unit": "ns/iter",
            "extra": "iterations: 4993\ncpu: 170840.91728419863 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 174997.74330128173,
            "unit": "ns/iter",
            "extra": "iterations: 4889\ncpu: 174992.37062794014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 385175.3616926471,
            "unit": "ns/iter",
            "extra": "iterations: 2245\ncpu: 385168.5968819587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 3009342.3290322204,
            "unit": "ns/iter",
            "extra": "iterations: 310\ncpu: 3009311.6129032364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 2484365.2234042254,
            "unit": "ns/iter",
            "extra": "iterations: 376\ncpu: 2484271.276595746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 2477819.898936159,
            "unit": "ns/iter",
            "extra": "iterations: 376\ncpu: 2477772.606382985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 2472339.970822228,
            "unit": "ns/iter",
            "extra": "iterations: 377\ncpu: 2472227.851458895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1553401.5946843964,
            "unit": "ns/iter",
            "extra": "iterations: 602\ncpu: 1553398.504983392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 2424460.0389610324,
            "unit": "ns/iter",
            "extra": "iterations: 385\ncpu: 2424328.051948041 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 2933.0498644328914,
            "unit": "ns/iter",
            "extra": "iterations: 238627\ncpu: 2933.0394297376206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 21234.530177009794,
            "unit": "ns/iter",
            "extra": "iterations: 32823\ncpu: 21234.162020534215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 16562.006333750087,
            "unit": "ns/iter",
            "extra": "iterations: 42313\ncpu: 16561.257769479762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 16312.626554081056,
            "unit": "ns/iter",
            "extra": "iterations: 42871\ncpu: 16312.262368500844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 12500.144941755249,
            "unit": "ns/iter",
            "extra": "iterations: 56057\ncpu: 12499.916156769066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 86875.27965260558,
            "unit": "ns/iter",
            "extra": "iterations: 8060\ncpu: 86873.5980148886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 185125.9143083882,
            "unit": "ns/iter",
            "extra": "iterations: 3781\ncpu: 185123.53874636456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 47611.49071744133,
            "unit": "ns/iter",
            "extra": "iterations: 14705\ncpu: 47609.064943896425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 47567.22877727058,
            "unit": "ns/iter",
            "extra": "iterations: 14713\ncpu: 47565.5134914697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 47569.31820346851,
            "unit": "ns/iter",
            "extra": "iterations: 14695\ncpu: 47568.152432800634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 105043.89060623961,
            "unit": "ns/iter",
            "extra": "iterations: 6664\ncpu: 105044.47779111579 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 90345.22885508183,
            "unit": "ns/iter",
            "extra": "iterations: 7756\ncpu: 90341.03919546174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 26540.145580329456,
            "unit": "ns/iter",
            "extra": "iterations: 26597\ncpu: 26528.454336955358 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 127797.76917444568,
            "unit": "ns/iter",
            "extra": "iterations: 5463\ncpu: 127792.44005125393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 103560.98264866824,
            "unit": "ns/iter",
            "extra": "iterations: 6743\ncpu: 103557.34836126292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 103497.79252805599,
            "unit": "ns/iter",
            "extra": "iterations: 6772\ncpu: 103497.46012994644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 103396.7226678501,
            "unit": "ns/iter",
            "extra": "iterations: 6732\ncpu: 103394.80095068352 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 181915.70220494005,
            "unit": "ns/iter",
            "extra": "iterations: 3855\ncpu: 181908.01556420073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 819661.3555555176,
            "unit": "ns/iter",
            "extra": "iterations: 855\ncpu: 819627.2514619915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 698930.6796406948,
            "unit": "ns/iter",
            "extra": "iterations: 1002\ncpu: 698906.0878243599 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 698538.4760478932,
            "unit": "ns/iter",
            "extra": "iterations: 1002\ncpu: 698526.1477045914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 692567.0178571322,
            "unit": "ns/iter",
            "extra": "iterations: 1008\ncpu: 692552.9761904809 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 462778.9324950308,
            "unit": "ns/iter",
            "extra": "iterations: 1511\ncpu: 462778.6234281927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 683103.7964774887,
            "unit": "ns/iter",
            "extra": "iterations: 1022\ncpu: 683101.7612524522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 26666.688972305914,
            "unit": "ns/iter",
            "extra": "iterations: 26107\ncpu: 26666.55686214425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 128639.98569332856,
            "unit": "ns/iter",
            "extra": "iterations: 5452\ncpu: 128633.60234776174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 103716.80115402225,
            "unit": "ns/iter",
            "extra": "iterations: 6759\ncpu: 103711.93963603975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 103595.33239852513,
            "unit": "ns/iter",
            "extra": "iterations: 6775\ncpu: 103591.80811808177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 104576.5643401571,
            "unit": "ns/iter",
            "extra": "iterations: 6691\ncpu: 104572.41070094275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 182956.43066075628,
            "unit": "ns/iter",
            "extra": "iterations: 3829\ncpu: 182957.71741969167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 814454.9185099397,
            "unit": "ns/iter",
            "extra": "iterations: 859\ncpu: 814428.5215366691 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 697330.1491053321,
            "unit": "ns/iter",
            "extra": "iterations: 1006\ncpu: 697328.3300198852 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 694887.3608350063,
            "unit": "ns/iter",
            "extra": "iterations: 1006\ncpu: 694881.9085487073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 691568.188548867,
            "unit": "ns/iter",
            "extra": "iterations: 1013\ncpu: 691574.7285291211 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 462389.6062005111,
            "unit": "ns/iter",
            "extra": "iterations: 1516\ncpu: 462394.3271767824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 679903.8833819117,
            "unit": "ns/iter",
            "extra": "iterations: 1029\ncpu: 679866.4723032065 ns\nthreads: 1"
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
        "date": 1702397912417,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 8486.543932345003,
            "unit": "ns/iter",
            "extra": "iterations: 82536\ncpu: 8486.287195890278 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 98986.04877200637,
            "unit": "ns/iter",
            "extra": "iterations: 8632\ncpu: 98984.75440222428 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 193364.6940890986,
            "unit": "ns/iter",
            "extra": "iterations: 4534\ncpu: 193361.5571239524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 289302.4805583226,
            "unit": "ns/iter",
            "extra": "iterations: 3009\ncpu: 289256.0319042872 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 375099.30694810813,
            "unit": "ns/iter",
            "extra": "iterations: 2274\ncpu: 375080.9586631489 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 478491.4219839261,
            "unit": "ns/iter",
            "extra": "iterations: 1865\ncpu: 478462.52010723844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 560202.9001919291,
            "unit": "ns/iter",
            "extra": "iterations: 1563\ncpu: 560193.0902111324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 521339.4439999775,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 521335.9999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 594364.3649999899,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 594353.9000000015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6741.603299352996,
            "unit": "ns/iter",
            "extra": "iterations: 104081\ncpu: 6741.488840422348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5498.355289624858,
            "unit": "ns/iter",
            "extra": "iterations: 127268\ncpu: 5498.191218530976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5605.144446571291,
            "unit": "ns/iter",
            "extra": "iterations: 125382\ncpu: 5605.102805825409 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5505.558045297749,
            "unit": "ns/iter",
            "extra": "iterations: 128572\ncpu: 5505.487197834679 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 9295.863838040157,
            "unit": "ns/iter",
            "extra": "iterations: 75278\ncpu: 9295.750418448946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 50999.58180254516,
            "unit": "ns/iter",
            "extra": "iterations: 16277\ncpu: 50999.373348897156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 214526.0341108587,
            "unit": "ns/iter",
            "extra": "iterations: 3987\ncpu: 214520.7674943568 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 174163.95970696094,
            "unit": "ns/iter",
            "extra": "iterations: 4914\ncpu: 174159.27960927933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 172501.2649848621,
            "unit": "ns/iter",
            "extra": "iterations: 4955\ncpu: 172493.29969727583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 170900.77268175108,
            "unit": "ns/iter",
            "extra": "iterations: 4993\ncpu: 170900.58081313834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 383707.853917652,
            "unit": "ns/iter",
            "extra": "iterations: 2259\ncpu: 383687.8707392665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 3023415.971153754,
            "unit": "ns/iter",
            "extra": "iterations: 312\ncpu: 3023261.85897436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 2469392.8552632146,
            "unit": "ns/iter",
            "extra": "iterations: 380\ncpu: 2469269.7368421005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 2478460.3888888126,
            "unit": "ns/iter",
            "extra": "iterations: 378\ncpu: 2478326.9841269883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 2454633.1178009235,
            "unit": "ns/iter",
            "extra": "iterations: 382\ncpu: 2454510.732984293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1539403.4767441545,
            "unit": "ns/iter",
            "extra": "iterations: 602\ncpu: 1539339.0365448517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 2405259.098191158,
            "unit": "ns/iter",
            "extra": "iterations: 387\ncpu: 2405177.777777777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 10596133.37373732,
            "unit": "ns/iter",
            "extra": "iterations: 99\ncpu: 10595195.959595965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 6076497.110389293,
            "unit": "ns/iter",
            "extra": "iterations: 154\ncpu: 6076192.857142858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 12569570.107143048,
            "unit": "ns/iter",
            "extra": "iterations: 84\ncpu: 12568925.00000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 52069.04659475567,
            "unit": "ns/iter",
            "extra": "iterations: 15946\ncpu: 52067.389941050926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 219943.9004811343,
            "unit": "ns/iter",
            "extra": "iterations: 3949\ncpu: 219930.96986578935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 174463.5229955193,
            "unit": "ns/iter",
            "extra": "iterations: 4914\ncpu: 174457.50915750963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 173465.89997954475,
            "unit": "ns/iter",
            "extra": "iterations: 4889\ncpu: 173464.0826344859 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 175898.09903629418,
            "unit": "ns/iter",
            "extra": "iterations: 4877\ncpu: 175890.13737953556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 388373.5607142772,
            "unit": "ns/iter",
            "extra": "iterations: 2240\ncpu: 388360.4464285722 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 3019087.0841422724,
            "unit": "ns/iter",
            "extra": "iterations: 309\ncpu: 3019014.2394822016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 2488646.029333419,
            "unit": "ns/iter",
            "extra": "iterations: 375\ncpu: 2488576.533333325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 2495229.613333322,
            "unit": "ns/iter",
            "extra": "iterations: 375\ncpu: 2495175.466666675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 2462831.807387876,
            "unit": "ns/iter",
            "extra": "iterations: 379\ncpu: 2462759.6306068534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1537711.527272722,
            "unit": "ns/iter",
            "extra": "iterations: 605\ncpu: 1537691.2396694173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 2418410.8958332413,
            "unit": "ns/iter",
            "extra": "iterations: 384\ncpu: 2418301.562499984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 10734732.899999812,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 10734574.999999965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 6040546.596154082,
            "unit": "ns/iter",
            "extra": "iterations: 156\ncpu: 6040460.256410249 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 50369.742680114876,
            "unit": "ns/iter",
            "extra": "iterations: 16462\ncpu: 50367.70137285865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 211421.60719602913,
            "unit": "ns/iter",
            "extra": "iterations: 4030\ncpu: 211420.62034739426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 172790.05891848856,
            "unit": "ns/iter",
            "extra": "iterations: 4956\ncpu: 172786.35996771543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 170839.9563388654,
            "unit": "ns/iter",
            "extra": "iterations: 4993\ncpu: 170840.91728419863 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 174997.74330128173,
            "unit": "ns/iter",
            "extra": "iterations: 4889\ncpu: 174992.37062794014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 385175.3616926471,
            "unit": "ns/iter",
            "extra": "iterations: 2245\ncpu: 385168.5968819587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 3009342.3290322204,
            "unit": "ns/iter",
            "extra": "iterations: 310\ncpu: 3009311.6129032364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 2484365.2234042254,
            "unit": "ns/iter",
            "extra": "iterations: 376\ncpu: 2484271.276595746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 2477819.898936159,
            "unit": "ns/iter",
            "extra": "iterations: 376\ncpu: 2477772.606382985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 2472339.970822228,
            "unit": "ns/iter",
            "extra": "iterations: 377\ncpu: 2472227.851458895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1553401.5946843964,
            "unit": "ns/iter",
            "extra": "iterations: 602\ncpu: 1553398.504983392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 2424460.0389610324,
            "unit": "ns/iter",
            "extra": "iterations: 385\ncpu: 2424328.051948041 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 2933.0498644328914,
            "unit": "ns/iter",
            "extra": "iterations: 238627\ncpu: 2933.0394297376206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 21234.530177009794,
            "unit": "ns/iter",
            "extra": "iterations: 32823\ncpu: 21234.162020534215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 16562.006333750087,
            "unit": "ns/iter",
            "extra": "iterations: 42313\ncpu: 16561.257769479762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 16312.626554081056,
            "unit": "ns/iter",
            "extra": "iterations: 42871\ncpu: 16312.262368500844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 12500.144941755249,
            "unit": "ns/iter",
            "extra": "iterations: 56057\ncpu: 12499.916156769066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 86875.27965260558,
            "unit": "ns/iter",
            "extra": "iterations: 8060\ncpu: 86873.5980148886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 185125.9143083882,
            "unit": "ns/iter",
            "extra": "iterations: 3781\ncpu: 185123.53874636456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 47611.49071744133,
            "unit": "ns/iter",
            "extra": "iterations: 14705\ncpu: 47609.064943896425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 47567.22877727058,
            "unit": "ns/iter",
            "extra": "iterations: 14713\ncpu: 47565.5134914697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 47569.31820346851,
            "unit": "ns/iter",
            "extra": "iterations: 14695\ncpu: 47568.152432800634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 105043.89060623961,
            "unit": "ns/iter",
            "extra": "iterations: 6664\ncpu: 105044.47779111579 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 90345.22885508183,
            "unit": "ns/iter",
            "extra": "iterations: 7756\ncpu: 90341.03919546174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 26540.145580329456,
            "unit": "ns/iter",
            "extra": "iterations: 26597\ncpu: 26528.454336955358 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 127797.76917444568,
            "unit": "ns/iter",
            "extra": "iterations: 5463\ncpu: 127792.44005125393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 103560.98264866824,
            "unit": "ns/iter",
            "extra": "iterations: 6743\ncpu: 103557.34836126292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 103497.79252805599,
            "unit": "ns/iter",
            "extra": "iterations: 6772\ncpu: 103497.46012994644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 103396.7226678501,
            "unit": "ns/iter",
            "extra": "iterations: 6732\ncpu: 103394.80095068352 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 181915.70220494005,
            "unit": "ns/iter",
            "extra": "iterations: 3855\ncpu: 181908.01556420073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 819661.3555555176,
            "unit": "ns/iter",
            "extra": "iterations: 855\ncpu: 819627.2514619915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 698930.6796406948,
            "unit": "ns/iter",
            "extra": "iterations: 1002\ncpu: 698906.0878243599 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 698538.4760478932,
            "unit": "ns/iter",
            "extra": "iterations: 1002\ncpu: 698526.1477045914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 692567.0178571322,
            "unit": "ns/iter",
            "extra": "iterations: 1008\ncpu: 692552.9761904809 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 462778.9324950308,
            "unit": "ns/iter",
            "extra": "iterations: 1511\ncpu: 462778.6234281927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 683103.7964774887,
            "unit": "ns/iter",
            "extra": "iterations: 1022\ncpu: 683101.7612524522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 26666.688972305914,
            "unit": "ns/iter",
            "extra": "iterations: 26107\ncpu: 26666.55686214425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 128639.98569332856,
            "unit": "ns/iter",
            "extra": "iterations: 5452\ncpu: 128633.60234776174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 103716.80115402225,
            "unit": "ns/iter",
            "extra": "iterations: 6759\ncpu: 103711.93963603975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 103595.33239852513,
            "unit": "ns/iter",
            "extra": "iterations: 6775\ncpu: 103591.80811808177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 104576.5643401571,
            "unit": "ns/iter",
            "extra": "iterations: 6691\ncpu: 104572.41070094275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 182956.43066075628,
            "unit": "ns/iter",
            "extra": "iterations: 3829\ncpu: 182957.71741969167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 814454.9185099397,
            "unit": "ns/iter",
            "extra": "iterations: 859\ncpu: 814428.5215366691 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 697330.1491053321,
            "unit": "ns/iter",
            "extra": "iterations: 1006\ncpu: 697328.3300198852 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 694887.3608350063,
            "unit": "ns/iter",
            "extra": "iterations: 1006\ncpu: 694881.9085487073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 691568.188548867,
            "unit": "ns/iter",
            "extra": "iterations: 1013\ncpu: 691574.7285291211 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 462389.6062005111,
            "unit": "ns/iter",
            "extra": "iterations: 1516\ncpu: 462394.3271767824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 679903.8833819117,
            "unit": "ns/iter",
            "extra": "iterations: 1029\ncpu: 679866.4723032065 ns\nthreads: 1"
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
        "date": 1702397912417,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 8486.543932345003,
            "unit": "ns/iter",
            "extra": "iterations: 82536\ncpu: 8486.287195890278 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 98986.04877200637,
            "unit": "ns/iter",
            "extra": "iterations: 8632\ncpu: 98984.75440222428 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 193364.6940890986,
            "unit": "ns/iter",
            "extra": "iterations: 4534\ncpu: 193361.5571239524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 289302.4805583226,
            "unit": "ns/iter",
            "extra": "iterations: 3009\ncpu: 289256.0319042872 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 375099.30694810813,
            "unit": "ns/iter",
            "extra": "iterations: 2274\ncpu: 375080.9586631489 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 478491.4219839261,
            "unit": "ns/iter",
            "extra": "iterations: 1865\ncpu: 478462.52010723844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 560202.9001919291,
            "unit": "ns/iter",
            "extra": "iterations: 1563\ncpu: 560193.0902111324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 521339.4439999775,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 521335.9999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 594364.3649999899,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 594353.9000000015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6741.603299352996,
            "unit": "ns/iter",
            "extra": "iterations: 104081\ncpu: 6741.488840422348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5498.355289624858,
            "unit": "ns/iter",
            "extra": "iterations: 127268\ncpu: 5498.191218530976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5605.144446571291,
            "unit": "ns/iter",
            "extra": "iterations: 125382\ncpu: 5605.102805825409 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5505.558045297749,
            "unit": "ns/iter",
            "extra": "iterations: 128572\ncpu: 5505.487197834679 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 9295.863838040157,
            "unit": "ns/iter",
            "extra": "iterations: 75278\ncpu: 9295.750418448946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 50999.58180254516,
            "unit": "ns/iter",
            "extra": "iterations: 16277\ncpu: 50999.373348897156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 214526.0341108587,
            "unit": "ns/iter",
            "extra": "iterations: 3987\ncpu: 214520.7674943568 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 174163.95970696094,
            "unit": "ns/iter",
            "extra": "iterations: 4914\ncpu: 174159.27960927933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 172501.2649848621,
            "unit": "ns/iter",
            "extra": "iterations: 4955\ncpu: 172493.29969727583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 170900.77268175108,
            "unit": "ns/iter",
            "extra": "iterations: 4993\ncpu: 170900.58081313834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 383707.853917652,
            "unit": "ns/iter",
            "extra": "iterations: 2259\ncpu: 383687.8707392665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 3023415.971153754,
            "unit": "ns/iter",
            "extra": "iterations: 312\ncpu: 3023261.85897436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 2469392.8552632146,
            "unit": "ns/iter",
            "extra": "iterations: 380\ncpu: 2469269.7368421005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 2478460.3888888126,
            "unit": "ns/iter",
            "extra": "iterations: 378\ncpu: 2478326.9841269883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 2454633.1178009235,
            "unit": "ns/iter",
            "extra": "iterations: 382\ncpu: 2454510.732984293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1539403.4767441545,
            "unit": "ns/iter",
            "extra": "iterations: 602\ncpu: 1539339.0365448517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 2405259.098191158,
            "unit": "ns/iter",
            "extra": "iterations: 387\ncpu: 2405177.777777777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 10596133.37373732,
            "unit": "ns/iter",
            "extra": "iterations: 99\ncpu: 10595195.959595965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 6076497.110389293,
            "unit": "ns/iter",
            "extra": "iterations: 154\ncpu: 6076192.857142858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 12569570.107143048,
            "unit": "ns/iter",
            "extra": "iterations: 84\ncpu: 12568925.00000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 52069.04659475567,
            "unit": "ns/iter",
            "extra": "iterations: 15946\ncpu: 52067.389941050926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 219943.9004811343,
            "unit": "ns/iter",
            "extra": "iterations: 3949\ncpu: 219930.96986578935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 174463.5229955193,
            "unit": "ns/iter",
            "extra": "iterations: 4914\ncpu: 174457.50915750963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 173465.89997954475,
            "unit": "ns/iter",
            "extra": "iterations: 4889\ncpu: 173464.0826344859 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 175898.09903629418,
            "unit": "ns/iter",
            "extra": "iterations: 4877\ncpu: 175890.13737953556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 388373.5607142772,
            "unit": "ns/iter",
            "extra": "iterations: 2240\ncpu: 388360.4464285722 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 3019087.0841422724,
            "unit": "ns/iter",
            "extra": "iterations: 309\ncpu: 3019014.2394822016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 2488646.029333419,
            "unit": "ns/iter",
            "extra": "iterations: 375\ncpu: 2488576.533333325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 2495229.613333322,
            "unit": "ns/iter",
            "extra": "iterations: 375\ncpu: 2495175.466666675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 2462831.807387876,
            "unit": "ns/iter",
            "extra": "iterations: 379\ncpu: 2462759.6306068534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1537711.527272722,
            "unit": "ns/iter",
            "extra": "iterations: 605\ncpu: 1537691.2396694173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 2418410.8958332413,
            "unit": "ns/iter",
            "extra": "iterations: 384\ncpu: 2418301.562499984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 10734732.899999812,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 10734574.999999965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 6040546.596154082,
            "unit": "ns/iter",
            "extra": "iterations: 156\ncpu: 6040460.256410249 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 50369.742680114876,
            "unit": "ns/iter",
            "extra": "iterations: 16462\ncpu: 50367.70137285865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 211421.60719602913,
            "unit": "ns/iter",
            "extra": "iterations: 4030\ncpu: 211420.62034739426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 172790.05891848856,
            "unit": "ns/iter",
            "extra": "iterations: 4956\ncpu: 172786.35996771543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 170839.9563388654,
            "unit": "ns/iter",
            "extra": "iterations: 4993\ncpu: 170840.91728419863 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 174997.74330128173,
            "unit": "ns/iter",
            "extra": "iterations: 4889\ncpu: 174992.37062794014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 385175.3616926471,
            "unit": "ns/iter",
            "extra": "iterations: 2245\ncpu: 385168.5968819587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 3009342.3290322204,
            "unit": "ns/iter",
            "extra": "iterations: 310\ncpu: 3009311.6129032364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 2484365.2234042254,
            "unit": "ns/iter",
            "extra": "iterations: 376\ncpu: 2484271.276595746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 2477819.898936159,
            "unit": "ns/iter",
            "extra": "iterations: 376\ncpu: 2477772.606382985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 2472339.970822228,
            "unit": "ns/iter",
            "extra": "iterations: 377\ncpu: 2472227.851458895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1553401.5946843964,
            "unit": "ns/iter",
            "extra": "iterations: 602\ncpu: 1553398.504983392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 2424460.0389610324,
            "unit": "ns/iter",
            "extra": "iterations: 385\ncpu: 2424328.051948041 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 2933.0498644328914,
            "unit": "ns/iter",
            "extra": "iterations: 238627\ncpu: 2933.0394297376206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 21234.530177009794,
            "unit": "ns/iter",
            "extra": "iterations: 32823\ncpu: 21234.162020534215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 16562.006333750087,
            "unit": "ns/iter",
            "extra": "iterations: 42313\ncpu: 16561.257769479762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 16312.626554081056,
            "unit": "ns/iter",
            "extra": "iterations: 42871\ncpu: 16312.262368500844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 12500.144941755249,
            "unit": "ns/iter",
            "extra": "iterations: 56057\ncpu: 12499.916156769066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 86875.27965260558,
            "unit": "ns/iter",
            "extra": "iterations: 8060\ncpu: 86873.5980148886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 185125.9143083882,
            "unit": "ns/iter",
            "extra": "iterations: 3781\ncpu: 185123.53874636456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 47611.49071744133,
            "unit": "ns/iter",
            "extra": "iterations: 14705\ncpu: 47609.064943896425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 47567.22877727058,
            "unit": "ns/iter",
            "extra": "iterations: 14713\ncpu: 47565.5134914697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 47569.31820346851,
            "unit": "ns/iter",
            "extra": "iterations: 14695\ncpu: 47568.152432800634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 105043.89060623961,
            "unit": "ns/iter",
            "extra": "iterations: 6664\ncpu: 105044.47779111579 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 90345.22885508183,
            "unit": "ns/iter",
            "extra": "iterations: 7756\ncpu: 90341.03919546174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 26540.145580329456,
            "unit": "ns/iter",
            "extra": "iterations: 26597\ncpu: 26528.454336955358 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 127797.76917444568,
            "unit": "ns/iter",
            "extra": "iterations: 5463\ncpu: 127792.44005125393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 103560.98264866824,
            "unit": "ns/iter",
            "extra": "iterations: 6743\ncpu: 103557.34836126292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 103497.79252805599,
            "unit": "ns/iter",
            "extra": "iterations: 6772\ncpu: 103497.46012994644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 103396.7226678501,
            "unit": "ns/iter",
            "extra": "iterations: 6732\ncpu: 103394.80095068352 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 181915.70220494005,
            "unit": "ns/iter",
            "extra": "iterations: 3855\ncpu: 181908.01556420073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 819661.3555555176,
            "unit": "ns/iter",
            "extra": "iterations: 855\ncpu: 819627.2514619915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 698930.6796406948,
            "unit": "ns/iter",
            "extra": "iterations: 1002\ncpu: 698906.0878243599 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 698538.4760478932,
            "unit": "ns/iter",
            "extra": "iterations: 1002\ncpu: 698526.1477045914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 692567.0178571322,
            "unit": "ns/iter",
            "extra": "iterations: 1008\ncpu: 692552.9761904809 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 462778.9324950308,
            "unit": "ns/iter",
            "extra": "iterations: 1511\ncpu: 462778.6234281927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 683103.7964774887,
            "unit": "ns/iter",
            "extra": "iterations: 1022\ncpu: 683101.7612524522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 26666.688972305914,
            "unit": "ns/iter",
            "extra": "iterations: 26107\ncpu: 26666.55686214425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 128639.98569332856,
            "unit": "ns/iter",
            "extra": "iterations: 5452\ncpu: 128633.60234776174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 103716.80115402225,
            "unit": "ns/iter",
            "extra": "iterations: 6759\ncpu: 103711.93963603975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 103595.33239852513,
            "unit": "ns/iter",
            "extra": "iterations: 6775\ncpu: 103591.80811808177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 104576.5643401571,
            "unit": "ns/iter",
            "extra": "iterations: 6691\ncpu: 104572.41070094275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 182956.43066075628,
            "unit": "ns/iter",
            "extra": "iterations: 3829\ncpu: 182957.71741969167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 814454.9185099397,
            "unit": "ns/iter",
            "extra": "iterations: 859\ncpu: 814428.5215366691 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 697330.1491053321,
            "unit": "ns/iter",
            "extra": "iterations: 1006\ncpu: 697328.3300198852 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 694887.3608350063,
            "unit": "ns/iter",
            "extra": "iterations: 1006\ncpu: 694881.9085487073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 691568.188548867,
            "unit": "ns/iter",
            "extra": "iterations: 1013\ncpu: 691574.7285291211 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 462389.6062005111,
            "unit": "ns/iter",
            "extra": "iterations: 1516\ncpu: 462394.3271767824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 679903.8833819117,
            "unit": "ns/iter",
            "extra": "iterations: 1029\ncpu: 679866.4723032065 ns\nthreads: 1"
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
        "date": 1702397912417,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 8486.543932345003,
            "unit": "ns/iter",
            "extra": "iterations: 82536\ncpu: 8486.287195890278 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 98986.04877200637,
            "unit": "ns/iter",
            "extra": "iterations: 8632\ncpu: 98984.75440222428 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 193364.6940890986,
            "unit": "ns/iter",
            "extra": "iterations: 4534\ncpu: 193361.5571239524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 289302.4805583226,
            "unit": "ns/iter",
            "extra": "iterations: 3009\ncpu: 289256.0319042872 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 375099.30694810813,
            "unit": "ns/iter",
            "extra": "iterations: 2274\ncpu: 375080.9586631489 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 478491.4219839261,
            "unit": "ns/iter",
            "extra": "iterations: 1865\ncpu: 478462.52010723844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 560202.9001919291,
            "unit": "ns/iter",
            "extra": "iterations: 1563\ncpu: 560193.0902111324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 521339.4439999775,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 521335.9999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 594364.3649999899,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 594353.9000000015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6741.603299352996,
            "unit": "ns/iter",
            "extra": "iterations: 104081\ncpu: 6741.488840422348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5498.355289624858,
            "unit": "ns/iter",
            "extra": "iterations: 127268\ncpu: 5498.191218530976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5605.144446571291,
            "unit": "ns/iter",
            "extra": "iterations: 125382\ncpu: 5605.102805825409 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5505.558045297749,
            "unit": "ns/iter",
            "extra": "iterations: 128572\ncpu: 5505.487197834679 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 9295.863838040157,
            "unit": "ns/iter",
            "extra": "iterations: 75278\ncpu: 9295.750418448946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 50999.58180254516,
            "unit": "ns/iter",
            "extra": "iterations: 16277\ncpu: 50999.373348897156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 214526.0341108587,
            "unit": "ns/iter",
            "extra": "iterations: 3987\ncpu: 214520.7674943568 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 174163.95970696094,
            "unit": "ns/iter",
            "extra": "iterations: 4914\ncpu: 174159.27960927933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 172501.2649848621,
            "unit": "ns/iter",
            "extra": "iterations: 4955\ncpu: 172493.29969727583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 170900.77268175108,
            "unit": "ns/iter",
            "extra": "iterations: 4993\ncpu: 170900.58081313834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 383707.853917652,
            "unit": "ns/iter",
            "extra": "iterations: 2259\ncpu: 383687.8707392665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 3023415.971153754,
            "unit": "ns/iter",
            "extra": "iterations: 312\ncpu: 3023261.85897436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 2469392.8552632146,
            "unit": "ns/iter",
            "extra": "iterations: 380\ncpu: 2469269.7368421005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 2478460.3888888126,
            "unit": "ns/iter",
            "extra": "iterations: 378\ncpu: 2478326.9841269883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 2454633.1178009235,
            "unit": "ns/iter",
            "extra": "iterations: 382\ncpu: 2454510.732984293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1539403.4767441545,
            "unit": "ns/iter",
            "extra": "iterations: 602\ncpu: 1539339.0365448517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 2405259.098191158,
            "unit": "ns/iter",
            "extra": "iterations: 387\ncpu: 2405177.777777777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 10596133.37373732,
            "unit": "ns/iter",
            "extra": "iterations: 99\ncpu: 10595195.959595965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 6076497.110389293,
            "unit": "ns/iter",
            "extra": "iterations: 154\ncpu: 6076192.857142858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 12569570.107143048,
            "unit": "ns/iter",
            "extra": "iterations: 84\ncpu: 12568925.00000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 52069.04659475567,
            "unit": "ns/iter",
            "extra": "iterations: 15946\ncpu: 52067.389941050926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 219943.9004811343,
            "unit": "ns/iter",
            "extra": "iterations: 3949\ncpu: 219930.96986578935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 174463.5229955193,
            "unit": "ns/iter",
            "extra": "iterations: 4914\ncpu: 174457.50915750963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 173465.89997954475,
            "unit": "ns/iter",
            "extra": "iterations: 4889\ncpu: 173464.0826344859 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 175898.09903629418,
            "unit": "ns/iter",
            "extra": "iterations: 4877\ncpu: 175890.13737953556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 388373.5607142772,
            "unit": "ns/iter",
            "extra": "iterations: 2240\ncpu: 388360.4464285722 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 3019087.0841422724,
            "unit": "ns/iter",
            "extra": "iterations: 309\ncpu: 3019014.2394822016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 2488646.029333419,
            "unit": "ns/iter",
            "extra": "iterations: 375\ncpu: 2488576.533333325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 2495229.613333322,
            "unit": "ns/iter",
            "extra": "iterations: 375\ncpu: 2495175.466666675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 2462831.807387876,
            "unit": "ns/iter",
            "extra": "iterations: 379\ncpu: 2462759.6306068534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1537711.527272722,
            "unit": "ns/iter",
            "extra": "iterations: 605\ncpu: 1537691.2396694173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 2418410.8958332413,
            "unit": "ns/iter",
            "extra": "iterations: 384\ncpu: 2418301.562499984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 10734732.899999812,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 10734574.999999965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 6040546.596154082,
            "unit": "ns/iter",
            "extra": "iterations: 156\ncpu: 6040460.256410249 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 50369.742680114876,
            "unit": "ns/iter",
            "extra": "iterations: 16462\ncpu: 50367.70137285865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 211421.60719602913,
            "unit": "ns/iter",
            "extra": "iterations: 4030\ncpu: 211420.62034739426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 172790.05891848856,
            "unit": "ns/iter",
            "extra": "iterations: 4956\ncpu: 172786.35996771543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 170839.9563388654,
            "unit": "ns/iter",
            "extra": "iterations: 4993\ncpu: 170840.91728419863 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 174997.74330128173,
            "unit": "ns/iter",
            "extra": "iterations: 4889\ncpu: 174992.37062794014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 385175.3616926471,
            "unit": "ns/iter",
            "extra": "iterations: 2245\ncpu: 385168.5968819587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 3009342.3290322204,
            "unit": "ns/iter",
            "extra": "iterations: 310\ncpu: 3009311.6129032364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 2484365.2234042254,
            "unit": "ns/iter",
            "extra": "iterations: 376\ncpu: 2484271.276595746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 2477819.898936159,
            "unit": "ns/iter",
            "extra": "iterations: 376\ncpu: 2477772.606382985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 2472339.970822228,
            "unit": "ns/iter",
            "extra": "iterations: 377\ncpu: 2472227.851458895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1553401.5946843964,
            "unit": "ns/iter",
            "extra": "iterations: 602\ncpu: 1553398.504983392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 2424460.0389610324,
            "unit": "ns/iter",
            "extra": "iterations: 385\ncpu: 2424328.051948041 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 2933.0498644328914,
            "unit": "ns/iter",
            "extra": "iterations: 238627\ncpu: 2933.0394297376206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 21234.530177009794,
            "unit": "ns/iter",
            "extra": "iterations: 32823\ncpu: 21234.162020534215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 16562.006333750087,
            "unit": "ns/iter",
            "extra": "iterations: 42313\ncpu: 16561.257769479762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 16312.626554081056,
            "unit": "ns/iter",
            "extra": "iterations: 42871\ncpu: 16312.262368500844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 12500.144941755249,
            "unit": "ns/iter",
            "extra": "iterations: 56057\ncpu: 12499.916156769066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 86875.27965260558,
            "unit": "ns/iter",
            "extra": "iterations: 8060\ncpu: 86873.5980148886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 185125.9143083882,
            "unit": "ns/iter",
            "extra": "iterations: 3781\ncpu: 185123.53874636456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 47611.49071744133,
            "unit": "ns/iter",
            "extra": "iterations: 14705\ncpu: 47609.064943896425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 47567.22877727058,
            "unit": "ns/iter",
            "extra": "iterations: 14713\ncpu: 47565.5134914697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 47569.31820346851,
            "unit": "ns/iter",
            "extra": "iterations: 14695\ncpu: 47568.152432800634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 105043.89060623961,
            "unit": "ns/iter",
            "extra": "iterations: 6664\ncpu: 105044.47779111579 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 90345.22885508183,
            "unit": "ns/iter",
            "extra": "iterations: 7756\ncpu: 90341.03919546174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 26540.145580329456,
            "unit": "ns/iter",
            "extra": "iterations: 26597\ncpu: 26528.454336955358 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 127797.76917444568,
            "unit": "ns/iter",
            "extra": "iterations: 5463\ncpu: 127792.44005125393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 103560.98264866824,
            "unit": "ns/iter",
            "extra": "iterations: 6743\ncpu: 103557.34836126292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 103497.79252805599,
            "unit": "ns/iter",
            "extra": "iterations: 6772\ncpu: 103497.46012994644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 103396.7226678501,
            "unit": "ns/iter",
            "extra": "iterations: 6732\ncpu: 103394.80095068352 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 181915.70220494005,
            "unit": "ns/iter",
            "extra": "iterations: 3855\ncpu: 181908.01556420073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 819661.3555555176,
            "unit": "ns/iter",
            "extra": "iterations: 855\ncpu: 819627.2514619915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 698930.6796406948,
            "unit": "ns/iter",
            "extra": "iterations: 1002\ncpu: 698906.0878243599 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 698538.4760478932,
            "unit": "ns/iter",
            "extra": "iterations: 1002\ncpu: 698526.1477045914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 692567.0178571322,
            "unit": "ns/iter",
            "extra": "iterations: 1008\ncpu: 692552.9761904809 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 462778.9324950308,
            "unit": "ns/iter",
            "extra": "iterations: 1511\ncpu: 462778.6234281927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 683103.7964774887,
            "unit": "ns/iter",
            "extra": "iterations: 1022\ncpu: 683101.7612524522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 26666.688972305914,
            "unit": "ns/iter",
            "extra": "iterations: 26107\ncpu: 26666.55686214425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 128639.98569332856,
            "unit": "ns/iter",
            "extra": "iterations: 5452\ncpu: 128633.60234776174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 103716.80115402225,
            "unit": "ns/iter",
            "extra": "iterations: 6759\ncpu: 103711.93963603975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 103595.33239852513,
            "unit": "ns/iter",
            "extra": "iterations: 6775\ncpu: 103591.80811808177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 104576.5643401571,
            "unit": "ns/iter",
            "extra": "iterations: 6691\ncpu: 104572.41070094275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 182956.43066075628,
            "unit": "ns/iter",
            "extra": "iterations: 3829\ncpu: 182957.71741969167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 814454.9185099397,
            "unit": "ns/iter",
            "extra": "iterations: 859\ncpu: 814428.5215366691 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 697330.1491053321,
            "unit": "ns/iter",
            "extra": "iterations: 1006\ncpu: 697328.3300198852 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 694887.3608350063,
            "unit": "ns/iter",
            "extra": "iterations: 1006\ncpu: 694881.9085487073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 691568.188548867,
            "unit": "ns/iter",
            "extra": "iterations: 1013\ncpu: 691574.7285291211 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 462389.6062005111,
            "unit": "ns/iter",
            "extra": "iterations: 1516\ncpu: 462394.3271767824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 679903.8833819117,
            "unit": "ns/iter",
            "extra": "iterations: 1029\ncpu: 679866.4723032065 ns\nthreads: 1"
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
        "date": 1702409135248,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 8527.827919859208,
            "unit": "ns/iter",
            "extra": "iterations: 81956\ncpu: 8527.33417931573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 97697.10175117254,
            "unit": "ns/iter",
            "extra": "iterations: 8737\ncpu: 97686.94059745906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 189354.56816712453,
            "unit": "ns/iter",
            "extra": "iterations: 4643\ncpu: 189348.95541675636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 280409.7191378113,
            "unit": "ns/iter",
            "extra": "iterations: 3062\ncpu: 280367.66819072503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 369718.5647359495,
            "unit": "ns/iter",
            "extra": "iterations: 2348\ncpu: 369710.60477001686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 455578.86147412827,
            "unit": "ns/iter",
            "extra": "iterations: 1913\ncpu: 455574.5948771563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 543815.126954362,
            "unit": "ns/iter",
            "extra": "iterations: 1599\ncpu: 543807.1294559098 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 508536.5369999977,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 508500.39999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 578911.5269999456,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 578917.9999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6488.433548721133,
            "unit": "ns/iter",
            "extra": "iterations: 108177\ncpu: 6488.290486887224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5349.196102974353,
            "unit": "ns/iter",
            "extra": "iterations: 131023\ncpu: 5349.088328003483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5305.81362707183,
            "unit": "ns/iter",
            "extra": "iterations: 131591\ncpu: 5305.804348321698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5345.471009376234,
            "unit": "ns/iter",
            "extra": "iterations: 131715\ncpu: 5345.4564780017545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 9282.173685954262,
            "unit": "ns/iter",
            "extra": "iterations: 75435\ncpu: 9282.272154835295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 49696.21234152585,
            "unit": "ns/iter",
            "extra": "iterations: 16643\ncpu: 49691.9125157724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 211183.30381605448,
            "unit": "ns/iter",
            "extra": "iterations: 4088\ncpu: 211185.46966731886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 168892.72011775788,
            "unit": "ns/iter",
            "extra": "iterations: 5095\ncpu: 168887.61530912668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 163997.06371613557,
            "unit": "ns/iter",
            "extra": "iterations: 5242\ncpu: 163998.70278519663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 168228.12736492718,
            "unit": "ns/iter",
            "extra": "iterations: 5127\ncpu: 168219.0169689877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 391433.7922487562,
            "unit": "ns/iter",
            "extra": "iterations: 2219\ncpu: 391432.98783235793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2979052.2683707224,
            "unit": "ns/iter",
            "extra": "iterations: 313\ncpu: 2979030.0319488826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 2460738.3474800983,
            "unit": "ns/iter",
            "extra": "iterations: 377\ncpu: 2460707.9575596848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 2461443.2883597133,
            "unit": "ns/iter",
            "extra": "iterations: 378\ncpu: 2461441.5343915396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 2458960.111405865,
            "unit": "ns/iter",
            "extra": "iterations: 377\ncpu: 2458952.7851458862 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1486177.4320000224,
            "unit": "ns/iter",
            "extra": "iterations: 625\ncpu: 1486175.8399999985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 2396957.369508948,
            "unit": "ns/iter",
            "extra": "iterations: 387\ncpu: 2396965.116279073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 10213585.723809479,
            "unit": "ns/iter",
            "extra": "iterations: 105\ncpu: 10213425.714285728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 5745179.40123473,
            "unit": "ns/iter",
            "extra": "iterations: 162\ncpu: 5745179.629629614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 12007397.550562065,
            "unit": "ns/iter",
            "extra": "iterations: 89\ncpu: 12007144.943820229 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 50540.448696818356,
            "unit": "ns/iter",
            "extra": "iterations: 16383\ncpu: 50540.01098699871 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 212290.5682321126,
            "unit": "ns/iter",
            "extra": "iterations: 4067\ncpu: 212287.36169166444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 170247.14198382775,
            "unit": "ns/iter",
            "extra": "iterations: 5071\ncpu: 170244.6263064479 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 169130.36083889237,
            "unit": "ns/iter",
            "extra": "iterations: 5102\ncpu: 169128.79263034023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 170142.8797318608,
            "unit": "ns/iter",
            "extra": "iterations: 5072\ncpu: 170143.45425867458 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 400406.0353373115,
            "unit": "ns/iter",
            "extra": "iterations: 2179\ncpu: 400410.2340523185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 3036430.5895764697,
            "unit": "ns/iter",
            "extra": "iterations: 307\ncpu: 3036387.6221498265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 2489653.352941187,
            "unit": "ns/iter",
            "extra": "iterations: 374\ncpu: 2489680.748663099 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 2489937.8571427693,
            "unit": "ns/iter",
            "extra": "iterations: 364\ncpu: 2489905.494505501 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 2492886.344919712,
            "unit": "ns/iter",
            "extra": "iterations: 374\ncpu: 2492871.6577540226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1505886.1118314166,
            "unit": "ns/iter",
            "extra": "iterations: 617\ncpu: 1505875.3646677362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 2417308.640624949,
            "unit": "ns/iter",
            "extra": "iterations: 384\ncpu: 2417271.6145833456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 10353633.409523528,
            "unit": "ns/iter",
            "extra": "iterations: 105\ncpu: 10353419.999999993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 5770692.679012626,
            "unit": "ns/iter",
            "extra": "iterations: 162\ncpu: 5770506.790123445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 49021.61891828337,
            "unit": "ns/iter",
            "extra": "iterations: 16936\ncpu: 49021.49858290071 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 205972.4734693896,
            "unit": "ns/iter",
            "extra": "iterations: 4165\ncpu: 205972.4609843946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 165554.98997493892,
            "unit": "ns/iter",
            "extra": "iterations: 5187\ncpu: 165554.34740697878 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 164893.31329479654,
            "unit": "ns/iter",
            "extra": "iterations: 5190\ncpu: 164891.52215799602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 167811.542650796,
            "unit": "ns/iter",
            "extra": "iterations: 5123\ncpu: 167810.65781768586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 396568.50068335905,
            "unit": "ns/iter",
            "extra": "iterations: 2195\ncpu: 396565.69476082 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 3029857.0618892126,
            "unit": "ns/iter",
            "extra": "iterations: 307\ncpu: 3029793.485342021 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 2474587.0476191076,
            "unit": "ns/iter",
            "extra": "iterations: 378\ncpu: 2474614.5502645364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 2494887.935999941,
            "unit": "ns/iter",
            "extra": "iterations: 375\ncpu: 2494825.866666664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 2496568.128342211,
            "unit": "ns/iter",
            "extra": "iterations: 374\ncpu: 2496594.652406411 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1497564.6404494592,
            "unit": "ns/iter",
            "extra": "iterations: 623\ncpu: 1497529.8555377207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 2413524.11369512,
            "unit": "ns/iter",
            "extra": "iterations: 387\ncpu: 2413469.767441855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 3006.1648573819207,
            "unit": "ns/iter",
            "extra": "iterations: 232965\ncpu: 3006.097053205421 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 19545.24642387293,
            "unit": "ns/iter",
            "extra": "iterations: 35723\ncpu: 19545.14738403821 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 15821.425738799,
            "unit": "ns/iter",
            "extra": "iterations: 47205\ncpu: 15821.088867704662 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 15833.562729373522,
            "unit": "ns/iter",
            "extra": "iterations: 44142\ncpu: 15832.504191019847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 12226.752451449476,
            "unit": "ns/iter",
            "extra": "iterations: 57415\ncpu: 12225.911347208876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 87528.34770619108,
            "unit": "ns/iter",
            "extra": "iterations: 7978\ncpu: 87528.50338430631 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 192050.61919164116,
            "unit": "ns/iter",
            "extra": "iterations: 3637\ncpu: 192049.40885344983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 47248.49201428537,
            "unit": "ns/iter",
            "extra": "iterations: 14839\ncpu: 47248.91165172917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 47086.11502995209,
            "unit": "ns/iter",
            "extra": "iterations: 14857\ncpu: 47085.057548630895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 46902.657831163706,
            "unit": "ns/iter",
            "extra": "iterations: 14902\ncpu: 46902.4157831167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 100649.50173359702,
            "unit": "ns/iter",
            "extra": "iterations: 6922\ncpu: 100646.61947414078 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 79911.20891938226,
            "unit": "ns/iter",
            "extra": "iterations: 8745\ncpu: 79912.09834190908 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 24258.454962151747,
            "unit": "ns/iter",
            "extra": "iterations: 28798\ncpu: 24258.038752691133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 117074.94999166475,
            "unit": "ns/iter",
            "extra": "iterations: 5999\ncpu: 117076.19603267223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 94326.0175343939,
            "unit": "ns/iter",
            "extra": "iterations: 7414\ncpu: 94325.38440787875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 94195.68664337843,
            "unit": "ns/iter",
            "extra": "iterations: 7442\ncpu: 94193.03950550903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 94670.48756757347,
            "unit": "ns/iter",
            "extra": "iterations: 7400\ncpu: 94671.51351351211 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 175208.21562734718,
            "unit": "ns/iter",
            "extra": "iterations: 3993\ncpu: 175205.15902830128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 803409.4608295228,
            "unit": "ns/iter",
            "extra": "iterations: 868\ncpu: 803417.8571428448 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 681546.044790683,
            "unit": "ns/iter",
            "extra": "iterations: 1027\ncpu: 681544.7906523815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 679632.2378640627,
            "unit": "ns/iter",
            "extra": "iterations: 1030\ncpu: 679615.7281553351 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 682895.1421616211,
            "unit": "ns/iter",
            "extra": "iterations: 1027\ncpu: 682903.4079844153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 436624.13312500087,
            "unit": "ns/iter",
            "extra": "iterations: 1600\ncpu: 436615.18749999575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 664927.7267551913,
            "unit": "ns/iter",
            "extra": "iterations: 1054\ncpu: 664934.5351043614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 24018.04969667908,
            "unit": "ns/iter",
            "extra": "iterations: 29177\ncpu: 24017.551496041284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 116586.4009975057,
            "unit": "ns/iter",
            "extra": "iterations: 6015\ncpu: 116587.6974231105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 95137.43497758008,
            "unit": "ns/iter",
            "extra": "iterations: 7359\ncpu: 95136.75771164523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 94579.63550392081,
            "unit": "ns/iter",
            "extra": "iterations: 7402\ncpu: 94577.39800053964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 94519.84034636807,
            "unit": "ns/iter",
            "extra": "iterations: 7391\ncpu: 94519.03666621543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 174630.02829244052,
            "unit": "ns/iter",
            "extra": "iterations: 3994\ncpu: 174624.96244366362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 806825.6057471386,
            "unit": "ns/iter",
            "extra": "iterations: 870\ncpu: 806834.7126436884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 679788.7145631489,
            "unit": "ns/iter",
            "extra": "iterations: 1030\ncpu: 679785.6310679689 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 680454.5078125113,
            "unit": "ns/iter",
            "extra": "iterations: 1024\ncpu: 680436.9140624988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 684138.9902343953,
            "unit": "ns/iter",
            "extra": "iterations: 1024\ncpu: 684134.4726562503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 435655.88334372826,
            "unit": "ns/iter",
            "extra": "iterations: 1603\ncpu: 435640.92326886975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 666909.8015267128,
            "unit": "ns/iter",
            "extra": "iterations: 1048\ncpu: 666914.980916034 ns\nthreads: 1"
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
        "date": 1702412537855,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 7960.275264633916,
            "unit": "ns/iter",
            "extra": "iterations: 88424\ncpu: 7959.419388401339 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 71407.84416345574,
            "unit": "ns/iter",
            "extra": "iterations: 11942\ncpu: 71403.90219393736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 136700.45589615832,
            "unit": "ns/iter",
            "extra": "iterations: 6394\ncpu: 136688.20769471378 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 203019.80078667833,
            "unit": "ns/iter",
            "extra": "iterations: 4322\ncpu: 202998.1027302175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 268948.69804893545,
            "unit": "ns/iter",
            "extra": "iterations: 3229\ncpu: 268919.1080829978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 330688.34049902984,
            "unit": "ns/iter",
            "extra": "iterations: 2605\ncpu: 330671.09404990403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 396067.6338027975,
            "unit": "ns/iter",
            "extra": "iterations: 2201\ncpu: 396062.69877328485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 461299.0559366751,
            "unit": "ns/iter",
            "extra": "iterations: 1895\ncpu: 461282.37467018486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 525452.9001803924,
            "unit": "ns/iter",
            "extra": "iterations: 1663\ncpu: 525438.5447985567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6012.283617231916,
            "unit": "ns/iter",
            "extra": "iterations: 115945\ncpu: 6011.819397127953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 4999.368919289121,
            "unit": "ns/iter",
            "extra": "iterations: 138594\ncpu: 4999.078603691361 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4997.2222500106245,
            "unit": "ns/iter",
            "extra": "iterations: 139946\ncpu: 4996.9080931216295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5038.182803743965,
            "unit": "ns/iter",
            "extra": "iterations: 139007\ncpu: 5037.780831181168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 8551.171539007406,
            "unit": "ns/iter",
            "extra": "iterations: 81754\ncpu: 8551.206057195976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 34193.212542541485,
            "unit": "ns/iter",
            "extra": "iterations: 24094\ncpu: 34191.147173570185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 139458.60113544628,
            "unit": "ns/iter",
            "extra": "iterations: 6165\ncpu: 139446.9748580698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 112972.30329380475,
            "unit": "ns/iter",
            "extra": "iterations: 7590\ncpu: 112969.72332015823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 111729.15046326956,
            "unit": "ns/iter",
            "extra": "iterations: 7663\ncpu: 111727.93944930212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 111684.09581541257,
            "unit": "ns/iter",
            "extra": "iterations: 7671\ncpu: 111680.81084604333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 266582.4567938883,
            "unit": "ns/iter",
            "extra": "iterations: 3275\ncpu: 266566.01526717504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2127605.169336287,
            "unit": "ns/iter",
            "extra": "iterations: 437\ncpu: 2127499.7711670506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1743515.262569862,
            "unit": "ns/iter",
            "extra": "iterations: 537\ncpu: 1743442.4581005583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1800271.0416666903,
            "unit": "ns/iter",
            "extra": "iterations: 528\ncpu: 1800230.113636365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1770884.0000000063,
            "unit": "ns/iter",
            "extra": "iterations: 527\ncpu: 1770827.7039848198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1046643.0022497472,
            "unit": "ns/iter",
            "extra": "iterations: 889\ncpu: 1046616.3104611903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1703300.1117216004,
            "unit": "ns/iter",
            "extra": "iterations: 546\ncpu: 1703242.8571428584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 7047207.960000037,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7046895.000000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 3923705.1673639445,
            "unit": "ns/iter",
            "extra": "iterations: 239\ncpu: 3923522.175732211 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 8799503.262295382,
            "unit": "ns/iter",
            "extra": "iterations: 122\ncpu: 8799127.04918034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 33731.88560416662,
            "unit": "ns/iter",
            "extra": "iterations: 24389\ncpu: 33730.8335725122 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 142823.26642274804,
            "unit": "ns/iter",
            "extra": "iterations: 6013\ncpu: 142818.50989522724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 115090.8763758399,
            "unit": "ns/iter",
            "extra": "iterations: 7450\ncpu: 115086.81879194584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 114486.5534784393,
            "unit": "ns/iter",
            "extra": "iterations: 7489\ncpu: 114483.61597008929 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 114056.73724007685,
            "unit": "ns/iter",
            "extra": "iterations: 7406\ncpu: 114053.06508236623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 275413.2982345531,
            "unit": "ns/iter",
            "extra": "iterations: 3172\ncpu: 275405.13871374517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2167861.70465118,
            "unit": "ns/iter",
            "extra": "iterations: 430\ncpu: 2167794.8837209297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1757137.5852273004,
            "unit": "ns/iter",
            "extra": "iterations: 528\ncpu: 1757103.0303030317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1778025.679389361,
            "unit": "ns/iter",
            "extra": "iterations: 524\ncpu: 1777964.8854961777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1788706.6819923804,
            "unit": "ns/iter",
            "extra": "iterations: 522\ncpu: 1788613.2183908052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1056272.1774744021,
            "unit": "ns/iter",
            "extra": "iterations: 879\ncpu: 1056245.1649601858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1718328.8173431866,
            "unit": "ns/iter",
            "extra": "iterations: 542\ncpu: 1718292.4354243658 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 7119444.410000142,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7118998.999999988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 4037999.722688968,
            "unit": "ns/iter",
            "extra": "iterations: 238\ncpu: 4037755.042016815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 32575.121468811867,
            "unit": "ns/iter",
            "extra": "iterations: 24673\ncpu: 32573.513557329978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 139166.5175936382,
            "unit": "ns/iter",
            "extra": "iterations: 6167\ncpu: 139162.78579536275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 111279.68414902888,
            "unit": "ns/iter",
            "extra": "iterations: 7703\ncpu: 111276.10022069297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 110772.74118559061,
            "unit": "ns/iter",
            "extra": "iterations: 7743\ncpu: 110767.90649618968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 111154.08988473628,
            "unit": "ns/iter",
            "extra": "iterations: 7721\ncpu: 111148.7372102056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 270638.7529448319,
            "unit": "ns/iter",
            "extra": "iterations: 3226\ncpu: 270630.71915685193 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2153458.6420323714,
            "unit": "ns/iter",
            "extra": "iterations: 433\ncpu: 2153374.5958429496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1768241.356736253,
            "unit": "ns/iter",
            "extra": "iterations: 527\ncpu: 1768153.8899430672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1765439.2178030128,
            "unit": "ns/iter",
            "extra": "iterations: 528\ncpu: 1765394.3181818202 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1770860.7142857807,
            "unit": "ns/iter",
            "extra": "iterations: 525\ncpu: 1770746.2857142834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1058040.7795454892,
            "unit": "ns/iter",
            "extra": "iterations: 880\ncpu: 1058002.954545452 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1714196.7495395828,
            "unit": "ns/iter",
            "extra": "iterations: 543\ncpu: 1714128.17679558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 2994.687171944084,
            "unit": "ns/iter",
            "extra": "iterations: 233192\ncpu: 2994.6087344334396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 15826.054961623433,
            "unit": "ns/iter",
            "extra": "iterations: 43776\ncpu: 15825.443165204675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 12181.58902004618,
            "unit": "ns/iter",
            "extra": "iterations: 57268\ncpu: 12181.371795767245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 12540.612081474905,
            "unit": "ns/iter",
            "extra": "iterations: 55821\ncpu: 12540.022572150243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 10076.12076564118,
            "unit": "ns/iter",
            "extra": "iterations: 69432\ncpu: 10075.63515381953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 62485.69988371227,
            "unit": "ns/iter",
            "extra": "iterations: 11179\ncpu: 62483.87154486105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 139889.35294116967,
            "unit": "ns/iter",
            "extra": "iterations: 4998\ncpu: 139884.09363745517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 35433.969212008706,
            "unit": "ns/iter",
            "extra": "iterations: 19683\ncpu: 35432.469643854995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 35350.24400406486,
            "unit": "ns/iter",
            "extra": "iterations: 19680\ncpu: 35348.61280487757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 35547.09854645284,
            "unit": "ns/iter",
            "extra": "iterations: 19676\ncpu: 35546.21366131349 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 72635.57549324883,
            "unit": "ns/iter",
            "extra": "iterations: 9630\ncpu: 72631.61993769508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 64515.28773671198,
            "unit": "ns/iter",
            "extra": "iterations: 10878\ncpu: 64514.460378746466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 20025.30826207464,
            "unit": "ns/iter",
            "extra": "iterations: 34967\ncpu: 20024.77192781756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 92597.07847295969,
            "unit": "ns/iter",
            "extra": "iterations: 7544\ncpu: 92592.53711558871 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 75583.03766276347,
            "unit": "ns/iter",
            "extra": "iterations: 9293\ncpu: 75580.89960184987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 75559.7409521771,
            "unit": "ns/iter",
            "extra": "iterations: 9284\ncpu: 75555.19172770389 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 76160.04049066339,
            "unit": "ns/iter",
            "extra": "iterations: 9212\ncpu: 76158.15240990146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 143486.79442507055,
            "unit": "ns/iter",
            "extra": "iterations: 4879\ncpu: 143482.8858372611 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 608105.0651606793,
            "unit": "ns/iter",
            "extra": "iterations: 1151\ncpu: 608078.1928757519 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 511997.47071744764,
            "unit": "ns/iter",
            "extra": "iterations: 1366\ncpu: 511975.18301610375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 515365.96465392073,
            "unit": "ns/iter",
            "extra": "iterations: 1358\ncpu: 515317.96759940265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 510464.3587508699,
            "unit": "ns/iter",
            "extra": "iterations: 1377\ncpu: 510458.46042121114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 335985.15635491104,
            "unit": "ns/iter",
            "extra": "iterations: 2085\ncpu: 335974.4364508351 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 500626.90599997947,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 500607.599999995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 20257.651403676216,
            "unit": "ns/iter",
            "extra": "iterations: 34659\ncpu: 20257.125133442885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 93280.90241880546,
            "unit": "ns/iter",
            "extra": "iterations: 7235\ncpu: 93275.64616447699 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 76808.29924284661,
            "unit": "ns/iter",
            "extra": "iterations: 9113\ncpu: 76806.24382749839 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 76149.48986928062,
            "unit": "ns/iter",
            "extra": "iterations: 9180\ncpu: 76144.01960784328 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 76184.76732295845,
            "unit": "ns/iter",
            "extra": "iterations: 9193\ncpu: 76178.07027085827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 143388.82396390013,
            "unit": "ns/iter",
            "extra": "iterations: 4874\ncpu: 143380.93967993354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 599799.2455089769,
            "unit": "ns/iter",
            "extra": "iterations: 1169\ncpu: 599786.3986313165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 505515.75289016904,
            "unit": "ns/iter",
            "extra": "iterations: 1384\ncpu: 505481.93641619093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 509791.8206996925,
            "unit": "ns/iter",
            "extra": "iterations: 1372\ncpu: 509755.75801750185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 504667.47615610337,
            "unit": "ns/iter",
            "extra": "iterations: 1384\ncpu: 504624.78323698946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 336972.92204043566,
            "unit": "ns/iter",
            "extra": "iterations: 2078\ncpu: 336950.7699711245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 496708.79787240113,
            "unit": "ns/iter",
            "extra": "iterations: 1410\ncpu: 496675.7446808453 ns\nthreads: 1"
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
        "date": 1702415985894,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 7849.144214588534,
            "unit": "ns/iter",
            "extra": "iterations: 89138\ncpu: 7849.082321793176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 71598.30454967516,
            "unit": "ns/iter",
            "extra": "iterations: 11847\ncpu: 71595.26462395545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 136826.60169358333,
            "unit": "ns/iter",
            "extra": "iterations: 6377\ncpu: 136821.73435784853 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 202021.62317158058,
            "unit": "ns/iter",
            "extra": "iterations: 4307\ncpu: 202011.53935453919 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 267853.246296287,
            "unit": "ns/iter",
            "extra": "iterations: 3240\ncpu: 267836.4814814816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 327607.4448262667,
            "unit": "ns/iter",
            "extra": "iterations: 2619\ncpu: 327600.72546773555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 391666.42541686166,
            "unit": "ns/iter",
            "extra": "iterations: 2219\ncpu: 391648.3100495719 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 456584.63171759254,
            "unit": "ns/iter",
            "extra": "iterations: 1898\ncpu: 456566.5964172816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 520140.0985074814,
            "unit": "ns/iter",
            "extra": "iterations: 1675\ncpu: 520117.8507462685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 5970.873439113734,
            "unit": "ns/iter",
            "extra": "iterations: 117161\ncpu: 5970.613941499292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5027.722473886307,
            "unit": "ns/iter",
            "extra": "iterations: 139295\ncpu: 5027.445349797194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4979.80670642355,
            "unit": "ns/iter",
            "extra": "iterations: 140522\ncpu: 4979.650161540536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5035.28401771347,
            "unit": "ns/iter",
            "extra": "iterations: 139104\ncpu: 5035.077352196906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 8679.420157744455,
            "unit": "ns/iter",
            "extra": "iterations: 71635\ncpu: 8677.693864730914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 34529.14761203448,
            "unit": "ns/iter",
            "extra": "iterations: 23765\ncpu: 34527.6372817168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 138870.78626943348,
            "unit": "ns/iter",
            "extra": "iterations: 6176\ncpu: 138865.78691709836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 113504.79042313514,
            "unit": "ns/iter",
            "extra": "iterations: 7539\ncpu: 113501.44581509494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 112581.86389910782,
            "unit": "ns/iter",
            "extra": "iterations: 7612\ncpu: 112578.10036784036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 112145.73340317572,
            "unit": "ns/iter",
            "extra": "iterations: 7637\ncpu: 112144.8343590415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 277660.3571201009,
            "unit": "ns/iter",
            "extra": "iterations: 3139\ncpu: 277649.7610704051 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2142305.2477064333,
            "unit": "ns/iter",
            "extra": "iterations: 436\ncpu: 2142197.2477064277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1746120.3707864697,
            "unit": "ns/iter",
            "extra": "iterations: 534\ncpu: 1746080.8988764046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1731539.3072626004,
            "unit": "ns/iter",
            "extra": "iterations: 537\ncpu: 1731487.8957169505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1752079.0469924512,
            "unit": "ns/iter",
            "extra": "iterations: 532\ncpu: 1752037.0300751876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1031537.9799555076,
            "unit": "ns/iter",
            "extra": "iterations: 898\ncpu: 1031483.4075723853 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1685823.0345454477,
            "unit": "ns/iter",
            "extra": "iterations: 550\ncpu: 1685766.0000000023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 7006973.559999778,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7006414.999999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 3812074.8861787454,
            "unit": "ns/iter",
            "extra": "iterations: 246\ncpu: 3811923.983739843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 8701308.591999805,
            "unit": "ns/iter",
            "extra": "iterations: 125\ncpu: 8700963.19999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 34505.79413492304,
            "unit": "ns/iter",
            "extra": "iterations: 23836\ncpu: 34504.7365329752 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 148407.41624978255,
            "unit": "ns/iter",
            "extra": "iterations: 5797\ncpu: 148400.53475935824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 116573.31284840006,
            "unit": "ns/iter",
            "extra": "iterations: 7355\ncpu: 116570.08837525529 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 113510.54534622339,
            "unit": "ns/iter",
            "extra": "iterations: 7553\ncpu: 113506.48748841534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 113980.45420660343,
            "unit": "ns/iter",
            "extra": "iterations: 7512\ncpu: 113976.86368477068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 280610.82789797813,
            "unit": "ns/iter",
            "extra": "iterations: 3097\ncpu: 280596.12528252957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2145033.2396313283,
            "unit": "ns/iter",
            "extra": "iterations: 434\ncpu: 2144968.202764974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1768317.2775665356,
            "unit": "ns/iter",
            "extra": "iterations: 526\ncpu: 1768290.4942965729 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1758083.637051101,
            "unit": "ns/iter",
            "extra": "iterations: 529\ncpu: 1758032.32514177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1760799.3069679185,
            "unit": "ns/iter",
            "extra": "iterations: 531\ncpu: 1760717.5141242975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1041602.1101123538,
            "unit": "ns/iter",
            "extra": "iterations: 890\ncpu: 1041574.8314606787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1704580.952380929,
            "unit": "ns/iter",
            "extra": "iterations: 546\ncpu: 1704528.5714285737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 7093059.7399996035,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7092889.999999983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 4011288.4848486707,
            "unit": "ns/iter",
            "extra": "iterations: 231\ncpu: 4011137.6623376724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 32762.508525457146,
            "unit": "ns/iter",
            "extra": "iterations: 24984\ncpu: 32760.81492154973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 142261.03349281827,
            "unit": "ns/iter",
            "extra": "iterations: 6061\ncpu: 142257.0202936818 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 112827.99383121276,
            "unit": "ns/iter",
            "extra": "iterations: 7619\ncpu: 112822.01076256734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 111281.58103738316,
            "unit": "ns/iter",
            "extra": "iterations: 7731\ncpu: 111277.88125727656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 112324.73151188726,
            "unit": "ns/iter",
            "extra": "iterations: 7613\ncpu: 112321.10862997506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 279763.7112676074,
            "unit": "ns/iter",
            "extra": "iterations: 3124\ncpu: 279755.88988476375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2140934.3686636216,
            "unit": "ns/iter",
            "extra": "iterations: 434\ncpu: 2140838.4792626738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1765208.3636363614,
            "unit": "ns/iter",
            "extra": "iterations: 528\ncpu: 1765161.3636363617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1747914.1857411745,
            "unit": "ns/iter",
            "extra": "iterations: 533\ncpu: 1747900.187617262 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1750530.4379698471,
            "unit": "ns/iter",
            "extra": "iterations: 532\ncpu: 1750480.075187979 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1047851.2553430983,
            "unit": "ns/iter",
            "extra": "iterations: 889\ncpu: 1047806.6366704173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1701783.6465201264,
            "unit": "ns/iter",
            "extra": "iterations: 546\ncpu: 1701749.0842490871 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 2954.7817618154636,
            "unit": "ns/iter",
            "extra": "iterations: 237085\ncpu: 2954.73311259673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 15882.084813922374,
            "unit": "ns/iter",
            "extra": "iterations: 44014\ncpu: 15881.696732857676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 12135.71916051417,
            "unit": "ns/iter",
            "extra": "iterations: 57702\ncpu: 12135.482305639289 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 11858.380295282668,
            "unit": "ns/iter",
            "extra": "iterations: 59062\ncpu: 11858.091497070847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 10075.509733952966,
            "unit": "ns/iter",
            "extra": "iterations: 69499\ncpu: 10075.340652383515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 64176.50252085755,
            "unit": "ns/iter",
            "extra": "iterations: 10909\ncpu: 64174.965624713346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 139044.42074984848,
            "unit": "ns/iter",
            "extra": "iterations: 5041\ncpu: 139040.32929974265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 35783.56361407617,
            "unit": "ns/iter",
            "extra": "iterations: 19579\ncpu: 35782.27692936283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 35472.69918410723,
            "unit": "ns/iter",
            "extra": "iterations: 19733\ncpu: 35471.81371306887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 35590.968078074715,
            "unit": "ns/iter",
            "extra": "iterations: 19673\ncpu: 35590.128602653065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 71974.31639174846,
            "unit": "ns/iter",
            "extra": "iterations: 9700\ncpu: 71973.17525773121 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 64308.456052606496,
            "unit": "ns/iter",
            "extra": "iterations: 10797\ncpu: 64307.1223488001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 20135.114540366787,
            "unit": "ns/iter",
            "extra": "iterations: 34669\ncpu: 20134.75439153139 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 93095.71523707814,
            "unit": "ns/iter",
            "extra": "iterations: 7508\ncpu: 93094.17954182235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 75991.11304818648,
            "unit": "ns/iter",
            "extra": "iterations: 9235\ncpu: 75989.22577152049 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 75616.00323659497,
            "unit": "ns/iter",
            "extra": "iterations: 9269\ncpu: 75614.70493041222 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 76057.87502714754,
            "unit": "ns/iter",
            "extra": "iterations: 9210\ncpu: 76056.31921824005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 142730.65174739438,
            "unit": "ns/iter",
            "extra": "iterations: 4893\ncpu: 142728.22399346044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 609641.8072916658,
            "unit": "ns/iter",
            "extra": "iterations: 1152\ncpu: 609632.3784722122 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 517114.0457902257,
            "unit": "ns/iter",
            "extra": "iterations: 1354\ncpu: 517105.39143279014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 513840.35876744735,
            "unit": "ns/iter",
            "extra": "iterations: 1363\ncpu: 513827.0726338903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 508314.6913580111,
            "unit": "ns/iter",
            "extra": "iterations: 1377\ncpu: 508291.57588961365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 335836.143338143,
            "unit": "ns/iter",
            "extra": "iterations: 2079\ncpu: 335830.4954304892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 501202.24463520513,
            "unit": "ns/iter",
            "extra": "iterations: 1398\ncpu: 501198.2117310429 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 20179.294925270693,
            "unit": "ns/iter",
            "extra": "iterations: 34524\ncpu: 20178.745220716104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 93938.625100772,
            "unit": "ns/iter",
            "extra": "iterations: 7442\ncpu: 93936.26713249121 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 77155.06948109376,
            "unit": "ns/iter",
            "extra": "iterations: 9096\ncpu: 77152.39665787233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 76638.86815348962,
            "unit": "ns/iter",
            "extra": "iterations: 9147\ncpu: 76636.94107357522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 76467.44250985462,
            "unit": "ns/iter",
            "extra": "iterations: 9132\ncpu: 76466.84187472511 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 142138.9206252525,
            "unit": "ns/iter",
            "extra": "iterations: 4926\ncpu: 142135.38367844198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 609957.0278503151,
            "unit": "ns/iter",
            "extra": "iterations: 1149\ncpu: 609947.0844212369 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 511742.3957571189,
            "unit": "ns/iter",
            "extra": "iterations: 1367\ncpu: 511727.4323335757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 513144.71292217774,
            "unit": "ns/iter",
            "extra": "iterations: 1362\ncpu: 513135.75624081865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 508518.86865020904,
            "unit": "ns/iter",
            "extra": "iterations: 1378\ncpu: 508509.9419448506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 338144.75882067246,
            "unit": "ns/iter",
            "extra": "iterations: 2069\ncpu: 338137.07104882185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 500967.6087267839,
            "unit": "ns/iter",
            "extra": "iterations: 1398\ncpu: 500958.5836909808 ns\nthreads: 1"
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
        "date": 1702418342941,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 7809.3527459671395,
            "unit": "ns/iter",
            "extra": "iterations: 88894\ncpu: 7809.186221792247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 72828.89075134727,
            "unit": "ns/iter",
            "extra": "iterations: 11872\ncpu: 72828.4787735849 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 139454.4328644495,
            "unit": "ns/iter",
            "extra": "iterations: 6256\ncpu: 139452.84526854215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 206050.21683613473,
            "unit": "ns/iter",
            "extra": "iterations: 4229\ncpu: 206050.31922440298 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 272955.69380696636,
            "unit": "ns/iter",
            "extra": "iterations: 3181\ncpu: 272950.2043382585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 335162.0581123179,
            "unit": "ns/iter",
            "extra": "iterations: 2564\ncpu: 335160.1794071764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 410764.99077916896,
            "unit": "ns/iter",
            "extra": "iterations: 2169\ncpu: 410719.7786998614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 467590.5724249137,
            "unit": "ns/iter",
            "extra": "iterations: 1864\ncpu: 467585.1394849784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 536237.8765281391,
            "unit": "ns/iter",
            "extra": "iterations: 1636\ncpu: 536222.1882640582 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6036.342169505975,
            "unit": "ns/iter",
            "extra": "iterations: 115925\ncpu: 6036.189777873625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5066.578822453837,
            "unit": "ns/iter",
            "extra": "iterations: 137778\ncpu: 5066.585376475203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5068.330199594985,
            "unit": "ns/iter",
            "extra": "iterations: 138280\ncpu: 5068.262944749779 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5128.125273855695,
            "unit": "ns/iter",
            "extra": "iterations: 136477\ncpu: 5128.017175055136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 8614.939076589366,
            "unit": "ns/iter",
            "extra": "iterations: 81069\ncpu: 8614.863881384976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 35217.58467707567,
            "unit": "ns/iter",
            "extra": "iterations: 23442\ncpu: 35217.246821943554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 139649.71921503995,
            "unit": "ns/iter",
            "extra": "iterations: 6115\ncpu: 139649.74652493853 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 116069.30583194789,
            "unit": "ns/iter",
            "extra": "iterations: 7236\ncpu: 116066.4179104479 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 115406.7173707694,
            "unit": "ns/iter",
            "extra": "iterations: 7409\ncpu: 115406.00620866509 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 114252.35021378864,
            "unit": "ns/iter",
            "extra": "iterations: 7484\ncpu: 114249.71940139002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 274222.2875898791,
            "unit": "ns/iter",
            "extra": "iterations: 3199\ncpu: 274218.6620819011 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2166805.934731924,
            "unit": "ns/iter",
            "extra": "iterations: 429\ncpu: 2166748.018648019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1782466.835564079,
            "unit": "ns/iter",
            "extra": "iterations: 523\ncpu: 1782452.0076481847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1802013.2042801527,
            "unit": "ns/iter",
            "extra": "iterations: 514\ncpu: 1801991.0505836601 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1803950.3145631482,
            "unit": "ns/iter",
            "extra": "iterations: 515\ncpu: 1803950.291262134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1073621.2872093003,
            "unit": "ns/iter",
            "extra": "iterations: 860\ncpu: 1073601.2790697664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1724251.0185528155,
            "unit": "ns/iter",
            "extra": "iterations: 539\ncpu: 1724250.463821892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 7247811.529999808,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7247596.999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 4021501.7068964858,
            "unit": "ns/iter",
            "extra": "iterations: 232\ncpu: 4021437.5000000116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 8934822.702479113,
            "unit": "ns/iter",
            "extra": "iterations: 121\ncpu: 8934380.165289262 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 36041.60269066048,
            "unit": "ns/iter",
            "extra": "iterations: 22894\ncpu: 36041.94548790067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 143109.33394403243,
            "unit": "ns/iter",
            "extra": "iterations: 6004\ncpu: 143109.47701532295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 117220.87185792426,
            "unit": "ns/iter",
            "extra": "iterations: 7320\ncpu: 117220.13661202148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 116644.4650687706,
            "unit": "ns/iter",
            "extra": "iterations: 7343\ncpu: 116642.48944573072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 118415.90049682453,
            "unit": "ns/iter",
            "extra": "iterations: 7246\ncpu: 118416.93348054132 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 281487.7341772201,
            "unit": "ns/iter",
            "extra": "iterations: 3160\ncpu: 281486.64556962054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2154266.0624999884,
            "unit": "ns/iter",
            "extra": "iterations: 432\ncpu: 2154226.8518518605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1772112.104761921,
            "unit": "ns/iter",
            "extra": "iterations: 525\ncpu: 1772082.2857142778 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1796002.996168636,
            "unit": "ns/iter",
            "extra": "iterations: 522\ncpu: 1795958.6206896582 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1813398.0077071781,
            "unit": "ns/iter",
            "extra": "iterations: 519\ncpu: 1813396.5317919028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1081256.7990654202,
            "unit": "ns/iter",
            "extra": "iterations: 856\ncpu: 1081247.5467289696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1749804.6660412352,
            "unit": "ns/iter",
            "extra": "iterations: 533\ncpu: 1749806.003752342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 7293588.840000211,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7293437.000000012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 3963970.37288123,
            "unit": "ns/iter",
            "extra": "iterations: 236\ncpu: 3963948.7288135695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 34474.874140822096,
            "unit": "ns/iter",
            "extra": "iterations: 23860\ncpu: 34474.02347024317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 139729.49746441634,
            "unit": "ns/iter",
            "extra": "iterations: 6113\ncpu: 139727.97317192898 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 112631.34028786489,
            "unit": "ns/iter",
            "extra": "iterations: 7573\ncpu: 112630.30503103114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 114087.40010662467,
            "unit": "ns/iter",
            "extra": "iterations: 7503\ncpu: 114085.71238171466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 112543.49999999872,
            "unit": "ns/iter",
            "extra": "iterations: 7502\ncpu: 112538.7763263125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 273539.3904643196,
            "unit": "ns/iter",
            "extra": "iterations: 3209\ncpu: 273539.26456840034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2164820.298122176,
            "unit": "ns/iter",
            "extra": "iterations: 426\ncpu: 2164797.8873239425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1798358.5868726044,
            "unit": "ns/iter",
            "extra": "iterations: 518\ncpu: 1798344.015444007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1793065.3721373824,
            "unit": "ns/iter",
            "extra": "iterations: 524\ncpu: 1793031.297709923 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1794187.7442306865,
            "unit": "ns/iter",
            "extra": "iterations: 520\ncpu: 1794175.576923074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1081962.4185228243,
            "unit": "ns/iter",
            "extra": "iterations: 853\ncpu: 1081948.7690504068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1739956.6233767,
            "unit": "ns/iter",
            "extra": "iterations: 539\ncpu: 1739929.4990723508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 3035.795978226175,
            "unit": "ns/iter",
            "extra": "iterations: 231838\ncpu: 3035.7995669390043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 15884.924330171876,
            "unit": "ns/iter",
            "extra": "iterations: 44377\ncpu: 15885.064335128574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 11962.848587338938,
            "unit": "ns/iter",
            "extra": "iterations: 58542\ncpu: 11962.695159031107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 12885.254988014267,
            "unit": "ns/iter",
            "extra": "iterations: 54230\ncpu: 12885.220357735578 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 10143.594187849721,
            "unit": "ns/iter",
            "extra": "iterations: 68374\ncpu: 10143.34542369903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 63335.69154318595,
            "unit": "ns/iter",
            "extra": "iterations: 11068\ncpu: 63334.938561618714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 141535.6894949582,
            "unit": "ns/iter",
            "extra": "iterations: 4950\ncpu: 141536.80808080814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 36678.63732634418,
            "unit": "ns/iter",
            "extra": "iterations: 19075\ncpu: 36678.4062909565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 36528.946860155076,
            "unit": "ns/iter",
            "extra": "iterations: 19157\ncpu: 36527.681787335845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 36788.28189224601,
            "unit": "ns/iter",
            "extra": "iterations: 19025\ncpu: 36788.220762154386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 75730.79273550397,
            "unit": "ns/iter",
            "extra": "iterations: 9278\ncpu: 75731.52619098833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 66332.23328281417,
            "unit": "ns/iter",
            "extra": "iterations: 10558\ncpu: 66332.17465429095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 20189.076295377698,
            "unit": "ns/iter",
            "extra": "iterations: 34681\ncpu: 20189.057408955916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 94307.3385030282,
            "unit": "ns/iter",
            "extra": "iterations: 7415\ncpu: 94303.4120026982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 76431.3609448095,
            "unit": "ns/iter",
            "extra": "iterations: 9187\ncpu: 76430.60846848812 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 76029.70230744021,
            "unit": "ns/iter",
            "extra": "iterations: 9231\ncpu: 76028.82677933063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 76510.14377729408,
            "unit": "ns/iter",
            "extra": "iterations: 9160\ncpu: 76510.84061135353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 143464.00983807447,
            "unit": "ns/iter",
            "extra": "iterations: 4879\ncpu: 143463.86554621696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 618904.2716049184,
            "unit": "ns/iter",
            "extra": "iterations: 1134\ncpu: 618885.4497354515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 522511.7667924369,
            "unit": "ns/iter",
            "extra": "iterations: 1325\ncpu: 522510.8679245265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 524247.3703148569,
            "unit": "ns/iter",
            "extra": "iterations: 1334\ncpu: 524252.398800604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 522720.87164183107,
            "unit": "ns/iter",
            "extra": "iterations: 1340\ncpu: 522719.70149254415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 344748.63810929406,
            "unit": "ns/iter",
            "extra": "iterations: 2031\ncpu: 344743.87001477065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 511454.87042460655,
            "unit": "ns/iter",
            "extra": "iterations: 1366\ncpu: 511440.2635431966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 20228.4841806928,
            "unit": "ns/iter",
            "extra": "iterations: 34578\ncpu: 20228.431372549254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 94383.9517910046,
            "unit": "ns/iter",
            "extra": "iterations: 7426\ncpu: 94381.51090762182 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 77073.28595004881,
            "unit": "ns/iter",
            "extra": "iterations: 9089\ncpu: 77072.95632082755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 76535.79410158443,
            "unit": "ns/iter",
            "extra": "iterations: 9155\ncpu: 76534.8880393233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 77018.21758651122,
            "unit": "ns/iter",
            "extra": "iterations: 9132\ncpu: 77016.56811213314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 143841.1193170147,
            "unit": "ns/iter",
            "extra": "iterations: 4861\ncpu: 143840.79407529355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 619710.205467333,
            "unit": "ns/iter",
            "extra": "iterations: 1134\ncpu: 619699.2945326226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 524383.6464873062,
            "unit": "ns/iter",
            "extra": "iterations: 1338\ncpu: 524382.5859491789 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 524463.6571856495,
            "unit": "ns/iter",
            "extra": "iterations: 1336\ncpu: 524457.4850299448 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 522176.71609540266,
            "unit": "ns/iter",
            "extra": "iterations: 1342\ncpu: 522165.49925483554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 345653.3738271564,
            "unit": "ns/iter",
            "extra": "iterations: 2025\ncpu: 345653.4814814828 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 511541.3088235494,
            "unit": "ns/iter",
            "extra": "iterations: 1360\ncpu: 511525.8823529387 ns\nthreads: 1"
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
        "date": 1702420961847,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 7681.87560903493,
            "unit": "ns/iter",
            "extra": "iterations: 91333\ncpu: 7681.523655195823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 70442.30918434648,
            "unit": "ns/iter",
            "extra": "iterations: 12064\ncpu: 70437.51657824933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 135084.22333849053,
            "unit": "ns/iter",
            "extra": "iterations: 6470\ncpu: 135076.12055641421 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 199856.35851648723,
            "unit": "ns/iter",
            "extra": "iterations: 4368\ncpu: 199845.23809523814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 265061.16558341315,
            "unit": "ns/iter",
            "extra": "iterations: 3231\ncpu: 265055.4008047044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 326067.4061433416,
            "unit": "ns/iter",
            "extra": "iterations: 2637\ncpu: 326044.25483504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 390082.9717108079,
            "unit": "ns/iter",
            "extra": "iterations: 2227\ncpu: 390035.24921418936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 454602.0860271268,
            "unit": "ns/iter",
            "extra": "iterations: 1918\ncpu: 454563.0344108452 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 517768.54243326216,
            "unit": "ns/iter",
            "extra": "iterations: 1685\ncpu: 517707.7744807121 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 5824.4759278718975,
            "unit": "ns/iter",
            "extra": "iterations: 118955\ncpu: 5823.90063469378 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 4883.406291377038,
            "unit": "ns/iter",
            "extra": "iterations: 143498\ncpu: 4883.18234400479 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4859.542077536107,
            "unit": "ns/iter",
            "extra": "iterations: 140657\ncpu: 4859.291041327487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 4903.3232719105235,
            "unit": "ns/iter",
            "extra": "iterations: 142889\ncpu: 4902.963839063884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 8530.976613600655,
            "unit": "ns/iter",
            "extra": "iterations: 82099\ncpu: 8530.591115604328 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 34402.83136812199,
            "unit": "ns/iter",
            "extra": "iterations: 23916\ncpu: 34399.38953002174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 142085.8785398522,
            "unit": "ns/iter",
            "extra": "iterations: 6109\ncpu: 142074.62759862508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 117850.59739396271,
            "unit": "ns/iter",
            "extra": "iterations: 7521\ncpu: 117837.2556840847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 111081.97722540145,
            "unit": "ns/iter",
            "extra": "iterations: 7684\ncpu: 111074.79177511705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 111763.51925336424,
            "unit": "ns/iter",
            "extra": "iterations: 7661\ncpu: 111755.11029891671 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 271767.879999995,
            "unit": "ns/iter",
            "extra": "iterations: 3225\ncpu: 271735.0697674409 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2100247.8690744922,
            "unit": "ns/iter",
            "extra": "iterations: 443\ncpu: 2100029.7968397303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1734573.392923584,
            "unit": "ns/iter",
            "extra": "iterations: 537\ncpu: 1734359.5903165746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1732320.4152700217,
            "unit": "ns/iter",
            "extra": "iterations: 537\ncpu: 1732198.6964618196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1750051.6355140235,
            "unit": "ns/iter",
            "extra": "iterations: 535\ncpu: 1749884.2990654185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1026690.9468438406,
            "unit": "ns/iter",
            "extra": "iterations: 903\ncpu: 1026580.3986710996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1675300.787003659,
            "unit": "ns/iter",
            "extra": "iterations: 554\ncpu: 1675131.949458485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 6954867.690000129,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6954252.999999966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 4004300.3617021916,
            "unit": "ns/iter",
            "extra": "iterations: 235\ncpu: 4003891.4893617094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 8676955.936000014,
            "unit": "ns/iter",
            "extra": "iterations: 125\ncpu: 8676126.399999987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 34046.132703776406,
            "unit": "ns/iter",
            "extra": "iterations: 24144\ncpu: 34043.60917826385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 143616.16897876418,
            "unit": "ns/iter",
            "extra": "iterations: 5983\ncpu: 143612.21795086155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 116074.34487890241,
            "unit": "ns/iter",
            "extra": "iterations: 7391\ncpu: 116068.52929238208 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 113811.6670207098,
            "unit": "ns/iter",
            "extra": "iterations: 7532\ncpu: 113805.58948486461 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 114842.53109919751,
            "unit": "ns/iter",
            "extra": "iterations: 7460\ncpu: 114835.37533511997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 275772.81780995696,
            "unit": "ns/iter",
            "extra": "iterations: 3178\ncpu: 275762.52359974966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2126789.7312072655,
            "unit": "ns/iter",
            "extra": "iterations: 439\ncpu: 2126666.970387243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1742121.7947761086,
            "unit": "ns/iter",
            "extra": "iterations: 536\ncpu: 1742050.000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1759578.926275987,
            "unit": "ns/iter",
            "extra": "iterations: 529\ncpu: 1759491.682419662 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1767883.5246212154,
            "unit": "ns/iter",
            "extra": "iterations: 528\ncpu: 1767812.500000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1036559.4469273887,
            "unit": "ns/iter",
            "extra": "iterations: 895\ncpu: 1036517.0949720665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1687533.5263157533,
            "unit": "ns/iter",
            "extra": "iterations: 551\ncpu: 1687440.4718693367 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 7040036.249999844,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7039602.999999986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 3935392.7932490925,
            "unit": "ns/iter",
            "extra": "iterations: 237\ncpu: 3935197.468354426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 32730.706711115654,
            "unit": "ns/iter",
            "extra": "iterations: 25197\ncpu: 32729.428106520532 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 138152.0369652932,
            "unit": "ns/iter",
            "extra": "iterations: 6195\ncpu: 138127.50605326952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 110594.78531944875,
            "unit": "ns/iter",
            "extra": "iterations: 7779\ncpu: 110585.94935081627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 109147.6504013245,
            "unit": "ns/iter",
            "extra": "iterations: 7849\ncpu: 109138.98585807155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 111065.69596784227,
            "unit": "ns/iter",
            "extra": "iterations: 7713\ncpu: 111057.16323090845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 273183.9264109872,
            "unit": "ns/iter",
            "extra": "iterations: 3207\ncpu: 273161.1786716548 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2108407.2782805245,
            "unit": "ns/iter",
            "extra": "iterations: 442\ncpu: 2108319.004524887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1745757.6341463495,
            "unit": "ns/iter",
            "extra": "iterations: 533\ncpu: 1745661.91369606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1748193.6516853755,
            "unit": "ns/iter",
            "extra": "iterations: 534\ncpu: 1748117.6029962648 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1753075.7871940478,
            "unit": "ns/iter",
            "extra": "iterations: 531\ncpu: 1752997.1751412423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1039498.0728699414,
            "unit": "ns/iter",
            "extra": "iterations: 892\ncpu: 1039472.3094170417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1691712.6678765747,
            "unit": "ns/iter",
            "extra": "iterations: 551\ncpu: 1691596.0072595337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 2940.2031391790806,
            "unit": "ns/iter",
            "extra": "iterations: 238024\ncpu: 2940.0610862770395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 15724.287330265519,
            "unit": "ns/iter",
            "extra": "iterations: 44555\ncpu: 15723.640444394505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 12357.699029982383,
            "unit": "ns/iter",
            "extra": "iterations: 56700\ncpu: 12357.500881834192 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 12352.420883562443,
            "unit": "ns/iter",
            "extra": "iterations: 56657\ncpu: 12352.048290590723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 9926.116215066073,
            "unit": "ns/iter",
            "extra": "iterations: 70490\ncpu: 9925.840544758097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 62872.45272334608,
            "unit": "ns/iter",
            "extra": "iterations: 11126\ncpu: 62869.40499730323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 130181.7602968484,
            "unit": "ns/iter",
            "extra": "iterations: 5390\ncpu: 130173.15398886912 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 34983.62051409829,
            "unit": "ns/iter",
            "extra": "iterations: 20035\ncpu: 34982.74519590701 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 34996.086530286084,
            "unit": "ns/iter",
            "extra": "iterations: 19993\ncpu: 34994.30300605181 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 35126.13822200051,
            "unit": "ns/iter",
            "extra": "iterations: 19910\ncpu: 35123.962832747326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 71705.80794838007,
            "unit": "ns/iter",
            "extra": "iterations: 9763\ncpu: 71699.1600942345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 63407.34967773513,
            "unit": "ns/iter",
            "extra": "iterations: 12257\ncpu: 63405.78444970222 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 20107.69033075948,
            "unit": "ns/iter",
            "extra": "iterations: 34708\ncpu: 20106.969574737952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 92473.86137174605,
            "unit": "ns/iter",
            "extra": "iterations: 7567\ncpu: 92470.51671732441 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 75127.89050470818,
            "unit": "ns/iter",
            "extra": "iterations: 9352\ncpu: 75124.17664670652 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 75370.44391870203,
            "unit": "ns/iter",
            "extra": "iterations: 9299\ncpu: 75366.60931282875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 75770.7931183728,
            "unit": "ns/iter",
            "extra": "iterations: 9242\ncpu: 75768.96775589604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 142543.90104059316,
            "unit": "ns/iter",
            "extra": "iterations: 4901\ncpu: 142537.42093450495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 601372.9201031021,
            "unit": "ns/iter",
            "extra": "iterations: 1164\ncpu: 601358.3333333352 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 506058.0890014384,
            "unit": "ns/iter",
            "extra": "iterations: 1382\ncpu: 506033.28509406466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 511061.08114032587,
            "unit": "ns/iter",
            "extra": "iterations: 1368\ncpu: 511037.8654970753 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 507349.530138011,
            "unit": "ns/iter",
            "extra": "iterations: 1377\ncpu: 507338.271604937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 335022.14196641615,
            "unit": "ns/iter",
            "extra": "iterations: 2085\ncpu: 335005.5155875306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 495675.0106383095,
            "unit": "ns/iter",
            "extra": "iterations: 1410\ncpu: 495649.50354610436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 20208.63092030919,
            "unit": "ns/iter",
            "extra": "iterations: 34521\ncpu: 20207.430259841512 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 93331.4006653415,
            "unit": "ns/iter",
            "extra": "iterations: 7515\ncpu: 93329.3812375241 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 76233.65154482216,
            "unit": "ns/iter",
            "extra": "iterations: 9192\ncpu: 76230.13489991285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 76427.69153577698,
            "unit": "ns/iter",
            "extra": "iterations: 9168\ncpu: 76425.89441535823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 76153.56839136795,
            "unit": "ns/iter",
            "extra": "iterations: 9219\ncpu: 76149.83186896653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 143353.16113840727,
            "unit": "ns/iter",
            "extra": "iterations: 4884\ncpu: 143347.09254709067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 601584.8053172878,
            "unit": "ns/iter",
            "extra": "iterations: 1166\ncpu: 601576.6723842202 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 503766.9090908977,
            "unit": "ns/iter",
            "extra": "iterations: 1386\ncpu: 503747.7633477674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 510661.12590973615,
            "unit": "ns/iter",
            "extra": "iterations: 1374\ncpu: 510640.24745268916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 506944.1115133822,
            "unit": "ns/iter",
            "extra": "iterations: 1381\ncpu: 506913.97538015764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 335806.2544322151,
            "unit": "ns/iter",
            "extra": "iterations: 2087\ncpu: 335798.3229516031 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 498061.8256555668,
            "unit": "ns/iter",
            "extra": "iterations: 1411\ncpu: 498029.0574060963 ns\nthreads: 1"
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
        "date": 1702421914274,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 7816.444006564112,
            "unit": "ns/iter",
            "extra": "iterations: 89573\ncpu: 7816.269411541424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 71342.85973154439,
            "unit": "ns/iter",
            "extra": "iterations: 11920\ncpu: 71338.27181208054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 138185.74105887665,
            "unit": "ns/iter",
            "extra": "iterations: 6403\ncpu: 138176.60471653912 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 202946.91076850978,
            "unit": "ns/iter",
            "extra": "iterations: 4281\ncpu: 202939.47675776688 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 268505.7868649238,
            "unit": "ns/iter",
            "extra": "iterations: 3228\ncpu: 268499.6902106567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 336203.49157088855,
            "unit": "ns/iter",
            "extra": "iterations: 2610\ncpu: 336185.3256704983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 395553.5309091054,
            "unit": "ns/iter",
            "extra": "iterations: 2200\ncpu: 395533.00000000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 460108.15461742063,
            "unit": "ns/iter",
            "extra": "iterations: 1895\ncpu: 460074.98680738756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 525635.5087402212,
            "unit": "ns/iter",
            "extra": "iterations: 1659\ncpu: 525615.1295961426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6074.024705586747,
            "unit": "ns/iter",
            "extra": "iterations: 115399\ncpu: 6073.627154481407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5069.152736833432,
            "unit": "ns/iter",
            "extra": "iterations: 138061\ncpu: 5068.9637189358355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5050.348199094792,
            "unit": "ns/iter",
            "extra": "iterations: 138708\ncpu: 5049.9704415030155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5107.615044731679,
            "unit": "ns/iter",
            "extra": "iterations: 137151\ncpu: 5107.305816217155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 8636.849707703212,
            "unit": "ns/iter",
            "extra": "iterations: 81082\ncpu: 8636.458153474252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 33966.98587489104,
            "unit": "ns/iter",
            "extra": "iterations: 24283\ncpu: 33965.0496231932 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 137952.87409434197,
            "unit": "ns/iter",
            "extra": "iterations: 6211\ncpu: 137946.35324424403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 111296.1486240928,
            "unit": "ns/iter",
            "extra": "iterations: 7704\ncpu: 111286.99376947043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 110134.82319660649,
            "unit": "ns/iter",
            "extra": "iterations: 7777\ncpu: 110130.73164459276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 110785.94581982892,
            "unit": "ns/iter",
            "extra": "iterations: 7715\ncpu: 110778.05573557991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 283116.20335699286,
            "unit": "ns/iter",
            "extra": "iterations: 3098\ncpu: 283106.0684312467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2156587.972157828,
            "unit": "ns/iter",
            "extra": "iterations: 431\ncpu: 2156398.8399071866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1759828.022727238,
            "unit": "ns/iter",
            "extra": "iterations: 528\ncpu: 1759729.5454545445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1770398.9734345013,
            "unit": "ns/iter",
            "extra": "iterations: 527\ncpu: 1770308.7286527539 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1769036.2971428018,
            "unit": "ns/iter",
            "extra": "iterations: 525\ncpu: 1768927.8095238118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1040850.0976431253,
            "unit": "ns/iter",
            "extra": "iterations: 891\ncpu: 1040810.5499438804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1702560.4272560696,
            "unit": "ns/iter",
            "extra": "iterations: 543\ncpu: 1702435.3591160239 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 6988898.630000335,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6988468.999999995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 3900003.1882845378,
            "unit": "ns/iter",
            "extra": "iterations: 239\ncpu: 3899728.870292893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 8639355.607999733,
            "unit": "ns/iter",
            "extra": "iterations: 125\ncpu: 8639118.400000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 34366.67502294223,
            "unit": "ns/iter",
            "extra": "iterations: 23974\ncpu: 34365.46675565198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 143053.89541070015,
            "unit": "ns/iter",
            "extra": "iterations: 6014\ncpu: 143051.33022946448 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 118739.50420392278,
            "unit": "ns/iter",
            "extra": "iterations: 7493\ncpu: 118736.6742292808 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 112685.32583530806,
            "unit": "ns/iter",
            "extra": "iterations: 7602\ncpu: 112683.43856879778 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 113112.91676575584,
            "unit": "ns/iter",
            "extra": "iterations: 7569\ncpu: 113109.28788479371 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 283851.12908443646,
            "unit": "ns/iter",
            "extra": "iterations: 3091\ncpu: 283846.29569718556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2168893.6279070033,
            "unit": "ns/iter",
            "extra": "iterations: 430\ncpu: 2168842.0930232485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1772179.2148289233,
            "unit": "ns/iter",
            "extra": "iterations: 526\ncpu: 1772148.098859327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1767757.0322580521,
            "unit": "ns/iter",
            "extra": "iterations: 527\ncpu: 1767720.6831119547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1783900.8733205583,
            "unit": "ns/iter",
            "extra": "iterations: 521\ncpu: 1783872.552783112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1049091.8139797251,
            "unit": "ns/iter",
            "extra": "iterations: 887\ncpu: 1049062.4577226571 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1715368.3996317084,
            "unit": "ns/iter",
            "extra": "iterations: 543\ncpu: 1715325.7826887597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 7063839.260000008,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7063396.999999938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 3869819.387499973,
            "unit": "ns/iter",
            "extra": "iterations: 240\ncpu: 3869732.916666694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 32702.50487834087,
            "unit": "ns/iter",
            "extra": "iterations: 25111\ncpu: 32702.305762414948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 139409.0944805123,
            "unit": "ns/iter",
            "extra": "iterations: 6160\ncpu: 139404.77272727247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 111144.76977015975,
            "unit": "ns/iter",
            "extra": "iterations: 7701\ncpu: 111142.86456304393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 110289.94709743901,
            "unit": "ns/iter",
            "extra": "iterations: 7769\ncpu: 110287.06397219736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 111031.14606595798,
            "unit": "ns/iter",
            "extra": "iterations: 7702\ncpu: 111028.7717475987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 284323.44892648957,
            "unit": "ns/iter",
            "extra": "iterations: 3074\ncpu: 284317.2739102147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2174815.463869455,
            "unit": "ns/iter",
            "extra": "iterations: 429\ncpu: 2174808.158508158 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1777464.6749048873,
            "unit": "ns/iter",
            "extra": "iterations: 526\ncpu: 1777408.1749049472 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1752403.0696798682,
            "unit": "ns/iter",
            "extra": "iterations: 531\ncpu: 1752393.2203389765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1783007.7686424237,
            "unit": "ns/iter",
            "extra": "iterations: 523\ncpu: 1782949.5219885146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1050359.3593220448,
            "unit": "ns/iter",
            "extra": "iterations: 885\ncpu: 1050349.2655367218 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1741390.2946592337,
            "unit": "ns/iter",
            "extra": "iterations: 543\ncpu: 1741305.3406998126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 3015.4633948576093,
            "unit": "ns/iter",
            "extra": "iterations: 234325\ncpu: 3015.4678331377486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 15821.130026627685,
            "unit": "ns/iter",
            "extra": "iterations: 44314\ncpu: 15820.67292503485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 12438.997760398433,
            "unit": "ns/iter",
            "extra": "iterations: 56260\ncpu: 12438.871311766845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 11726.68555406763,
            "unit": "ns/iter",
            "extra": "iterations: 59740\ncpu: 11726.553398058204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 10038.903779328395,
            "unit": "ns/iter",
            "extra": "iterations: 69642\ncpu: 10038.725194566496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 65033.15959126822,
            "unit": "ns/iter",
            "extra": "iterations: 10765\ncpu: 65033.2466326055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 139711.59357541992,
            "unit": "ns/iter",
            "extra": "iterations: 5012\ncpu: 139710.3551476455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 35582.909788962665,
            "unit": "ns/iter",
            "extra": "iterations: 19665\ncpu: 35582.954487668736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 35540.03843611947,
            "unit": "ns/iter",
            "extra": "iterations: 19669\ncpu: 35539.70715338854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 36200.26262832419,
            "unit": "ns/iter",
            "extra": "iterations: 19579\ncpu: 36136.48296644367 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 69294.45867066359,
            "unit": "ns/iter",
            "extra": "iterations: 10005\ncpu: 69290.76461769159 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 64854.046283437725,
            "unit": "ns/iter",
            "extra": "iterations: 10803\ncpu: 64851.207997778925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 20146.11179784837,
            "unit": "ns/iter",
            "extra": "iterations: 34786\ncpu: 20144.831253952783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 94176.09438775576,
            "unit": "ns/iter",
            "extra": "iterations: 7448\ncpu: 94170.26047260934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 75828.60386580837,
            "unit": "ns/iter",
            "extra": "iterations: 9002\ncpu: 75824.19462341764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 76292.18193732061,
            "unit": "ns/iter",
            "extra": "iterations: 9157\ncpu: 76289.76739106682 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 76634.56625191453,
            "unit": "ns/iter",
            "extra": "iterations: 9162\ncpu: 76631.72888015643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 145487.63519402037,
            "unit": "ns/iter",
            "extra": "iterations: 4819\ncpu: 145479.6638306724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 612773.5268249945,
            "unit": "ns/iter",
            "extra": "iterations: 1137\ncpu: 612742.8320140736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 515501.34142750216,
            "unit": "ns/iter",
            "extra": "iterations: 1359\ncpu: 515469.75717439933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 514784.10816780315,
            "unit": "ns/iter",
            "extra": "iterations: 1359\ncpu: 514763.1346578306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 517709.83530278754,
            "unit": "ns/iter",
            "extra": "iterations: 1354\ncpu: 517689.66026587784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 333240.21045133023,
            "unit": "ns/iter",
            "extra": "iterations: 2105\ncpu: 333219.2399049865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 504451.82902295847,
            "unit": "ns/iter",
            "extra": "iterations: 1392\ncpu: 504411.49425287003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 20136.33126222499,
            "unit": "ns/iter",
            "extra": "iterations: 34764\ncpu: 20135.34115751922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 94628.20546832962,
            "unit": "ns/iter",
            "extra": "iterations: 7388\ncpu: 94623.52463454347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 76745.94065934213,
            "unit": "ns/iter",
            "extra": "iterations: 9100\ncpu: 76744.56043956171 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 76236.13864403573,
            "unit": "ns/iter",
            "extra": "iterations: 9189\ncpu: 76233.77951898918 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 76650.81414185275,
            "unit": "ns/iter",
            "extra": "iterations: 9136\ncpu: 76648.05166374813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 144987.19904721557,
            "unit": "ns/iter",
            "extra": "iterations: 4828\ncpu: 144978.39685169628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 615949.8839050418,
            "unit": "ns/iter",
            "extra": "iterations: 1137\ncpu: 615915.3034300775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 514819.62794117,
            "unit": "ns/iter",
            "extra": "iterations: 1360\ncpu: 514806.54411764996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 518852.97706420143,
            "unit": "ns/iter",
            "extra": "iterations: 1308\ncpu: 518823.4709480129 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 517317.79808401235,
            "unit": "ns/iter",
            "extra": "iterations: 1357\ncpu: 517280.17686072324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 333717.6620590976,
            "unit": "ns/iter",
            "extra": "iterations: 2098\ncpu: 333701.4299332701 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 504830.2135641982,
            "unit": "ns/iter",
            "extra": "iterations: 1386\ncpu: 504806.2770562805 ns\nthreads: 1"
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
        "date": 1702453384190,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 7838.516083947407,
            "unit": "ns/iter",
            "extra": "iterations: 88722\ncpu: 7838.447059353938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 71173.46876561845,
            "unit": "ns/iter",
            "extra": "iterations: 12006\ncpu: 71170.89788439113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 134098.08493192945,
            "unit": "ns/iter",
            "extra": "iterations: 6464\ncpu: 134097.60210396038 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 198104.03220035488,
            "unit": "ns/iter",
            "extra": "iterations: 4472\ncpu: 198101.09570661897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 264518.46672772226,
            "unit": "ns/iter",
            "extra": "iterations: 3276\ncpu: 264518.31501831504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 325285.57602118165,
            "unit": "ns/iter",
            "extra": "iterations: 2644\ncpu: 325285.9304084721 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 388441.33393097157,
            "unit": "ns/iter",
            "extra": "iterations: 2231\ncpu: 388429.0004482295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 452273.99688310584,
            "unit": "ns/iter",
            "extra": "iterations: 1925\ncpu: 452258.493506493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 515013.75340843596,
            "unit": "ns/iter",
            "extra": "iterations: 1687\ncpu: 514996.91760521615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6019.516069258635,
            "unit": "ns/iter",
            "extra": "iterations: 116029\ncpu: 6019.4123882822305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5021.803782709837,
            "unit": "ns/iter",
            "extra": "iterations: 139371\ncpu: 5021.702506260272 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5022.605031545867,
            "unit": "ns/iter",
            "extra": "iterations: 139639\ncpu: 5022.527374157645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5093.085927843104,
            "unit": "ns/iter",
            "extra": "iterations: 137534\ncpu: 5093.038085128036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 8553.891383850527,
            "unit": "ns/iter",
            "extra": "iterations: 82032\ncpu: 8553.642480983026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 34477.2130110112,
            "unit": "ns/iter",
            "extra": "iterations: 23703\ncpu: 34476.62743112683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 140217.68069832373,
            "unit": "ns/iter",
            "extra": "iterations: 6129\ncpu: 140214.92902594229 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 113845.90728476988,
            "unit": "ns/iter",
            "extra": "iterations: 7550\ncpu: 113845.08609271531 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 114440.2307485535,
            "unit": "ns/iter",
            "extra": "iterations: 7441\ncpu: 114437.03803252248 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 115424.98474210298,
            "unit": "ns/iter",
            "extra": "iterations: 7406\ncpu: 115424.18309478795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 266428.108231695,
            "unit": "ns/iter",
            "extra": "iterations: 3280\ncpu: 266420.88414634124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2129805.6087963786,
            "unit": "ns/iter",
            "extra": "iterations: 432\ncpu: 2129767.1296296287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1755196.9133709464,
            "unit": "ns/iter",
            "extra": "iterations: 531\ncpu: 1755155.932203393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1746714.6120526819,
            "unit": "ns/iter",
            "extra": "iterations: 531\ncpu: 1746675.7062146864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1770475.6520913418,
            "unit": "ns/iter",
            "extra": "iterations: 526\ncpu: 1770442.395437259 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1044090.5298759976,
            "unit": "ns/iter",
            "extra": "iterations: 887\ncpu: 1044072.4915445287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1713425.2854511784,
            "unit": "ns/iter",
            "extra": "iterations: 543\ncpu: 1713387.661141807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 7114487.690000147,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7114151 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 3965309.8340426018,
            "unit": "ns/iter",
            "extra": "iterations: 235\ncpu: 3965234.8936170223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 8832234.379032262,
            "unit": "ns/iter",
            "extra": "iterations: 124\ncpu: 8831890.32258066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 34610.19011118546,
            "unit": "ns/iter",
            "extra": "iterations: 23744\ncpu: 34609.47186657687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 143848.35660346213,
            "unit": "ns/iter",
            "extra": "iterations: 5959\ncpu: 143846.08155730824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 117868.94787961325,
            "unit": "ns/iter",
            "extra": "iterations: 7310\ncpu: 117868.96032831713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 115518.05752391272,
            "unit": "ns/iter",
            "extra": "iterations: 7423\ncpu: 115517.32453186018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 116088.4198100429,
            "unit": "ns/iter",
            "extra": "iterations: 7370\ncpu: 116088.16824966145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 270704.44152228197,
            "unit": "ns/iter",
            "extra": "iterations: 3232\ncpu: 270700.2165841598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2152960.965357935,
            "unit": "ns/iter",
            "extra": "iterations: 433\ncpu: 2152933.0254041594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1771623.5047618328,
            "unit": "ns/iter",
            "extra": "iterations: 525\ncpu: 1771589.1428571376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1780060.1335877916,
            "unit": "ns/iter",
            "extra": "iterations: 524\ncpu: 1780047.7099236585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1775813.3582375392,
            "unit": "ns/iter",
            "extra": "iterations: 522\ncpu: 1775741.9540229859 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1050553.0419026383,
            "unit": "ns/iter",
            "extra": "iterations: 883\ncpu: 1050545.7531143846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1717419.304428027,
            "unit": "ns/iter",
            "extra": "iterations: 542\ncpu: 1717397.232472323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 7160609.0199998105,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7160451.999999965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 4035089.329004449,
            "unit": "ns/iter",
            "extra": "iterations: 231\ncpu: 4034948.9177489085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 33478.67615528285,
            "unit": "ns/iter",
            "extra": "iterations: 24626\ncpu: 33478.40087712171 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 142093.98809917498,
            "unit": "ns/iter",
            "extra": "iterations: 6050\ncpu: 142094.165289257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 113287.94522712246,
            "unit": "ns/iter",
            "extra": "iterations: 7595\ncpu: 113286.47794601764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 111661.8505342761,
            "unit": "ns/iter",
            "extra": "iterations: 7674\ncpu: 111661.81912952883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 112663.78932141405,
            "unit": "ns/iter",
            "extra": "iterations: 7604\ncpu: 112662.59863229892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 269706.4037631132,
            "unit": "ns/iter",
            "extra": "iterations: 3242\ncpu: 269706.1381863054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2148664.7921478814,
            "unit": "ns/iter",
            "extra": "iterations: 433\ncpu: 2148595.1501154727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1775543.8212927752,
            "unit": "ns/iter",
            "extra": "iterations: 526\ncpu: 1775544.2965779451 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1759706.4128788514,
            "unit": "ns/iter",
            "extra": "iterations: 528\ncpu: 1759675.3787878775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1852719.4618320838,
            "unit": "ns/iter",
            "extra": "iterations: 524\ncpu: 1852719.6564885613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1053141.1775486923,
            "unit": "ns/iter",
            "extra": "iterations: 873\ncpu: 1053115.1202749163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1714118.3363970798,
            "unit": "ns/iter",
            "extra": "iterations: 544\ncpu: 1714113.602941165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 3028.589063081416,
            "unit": "ns/iter",
            "extra": "iterations: 231162\ncpu: 3028.5193933258824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 16006.780880773882,
            "unit": "ns/iter",
            "extra": "iterations: 43757\ncpu: 16006.712068926217 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 12244.08767938371,
            "unit": "ns/iter",
            "extra": "iterations: 57140\ncpu: 12243.713685684292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 12320.264762808873,
            "unit": "ns/iter",
            "extra": "iterations: 56832\ncpu: 12320.337134008996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 10139.838837344128,
            "unit": "ns/iter",
            "extra": "iterations: 68980\ncpu: 10139.779646274352 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 62342.894632742995,
            "unit": "ns/iter",
            "extra": "iterations: 11123\ncpu: 62341.427672390884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 139325.16961974365,
            "unit": "ns/iter",
            "extra": "iterations: 5023\ncpu: 139324.84570973474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 35536.31444557425,
            "unit": "ns/iter",
            "extra": "iterations: 19660\ncpu: 35535.43743641904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 35628.86021998291,
            "unit": "ns/iter",
            "extra": "iterations: 19638\ncpu: 35628.760566248806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 35876.273099358004,
            "unit": "ns/iter",
            "extra": "iterations: 19546\ncpu: 35875.897881919154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 73147.67545596421,
            "unit": "ns/iter",
            "extra": "iterations: 9595\ncpu: 73147.42053152627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 64495.344147469594,
            "unit": "ns/iter",
            "extra": "iterations: 10850\ncpu: 64493.20737327082 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 20077.39332378328,
            "unit": "ns/iter",
            "extra": "iterations: 34900\ncpu: 20077.501432664667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 92404.48964613405,
            "unit": "ns/iter",
            "extra": "iterations: 7630\ncpu: 92404.16775884647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 75675.26109971158,
            "unit": "ns/iter",
            "extra": "iterations: 9257\ncpu: 75675.16474019649 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 75246.4569543567,
            "unit": "ns/iter",
            "extra": "iterations: 9246\ncpu: 75245.71706684073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 76023.24252310871,
            "unit": "ns/iter",
            "extra": "iterations: 9195\ncpu: 76020.21750951484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 142940.9254797854,
            "unit": "ns/iter",
            "extra": "iterations: 4898\ncpu: 142941.75173540087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 607586.4770164692,
            "unit": "ns/iter",
            "extra": "iterations: 1153\ncpu: 607589.6790980018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 516777.20206488407,
            "unit": "ns/iter",
            "extra": "iterations: 1356\ncpu: 516772.3451327428 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 511874.8422205831,
            "unit": "ns/iter",
            "extra": "iterations: 1369\ncpu: 511872.7538349168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 510368.4325309971,
            "unit": "ns/iter",
            "extra": "iterations: 1371\ncpu: 510351.42231948266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 333423.03471230477,
            "unit": "ns/iter",
            "extra": "iterations: 2103\ncpu: 333421.25534950127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 499643.97428571567,
            "unit": "ns/iter",
            "extra": "iterations: 1400\ncpu: 499629.00000000076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 20072.797382813496,
            "unit": "ns/iter",
            "extra": "iterations: 34923\ncpu: 20072.56535807338 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 92686.03645280955,
            "unit": "ns/iter",
            "extra": "iterations: 7544\ncpu: 92682.18451749683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 76168.99544666505,
            "unit": "ns/iter",
            "extra": "iterations: 9224\ncpu: 76169.46010407658 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 75898.24137558376,
            "unit": "ns/iter",
            "extra": "iterations: 9247\ncpu: 75898.03179409512 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 76093.32380123783,
            "unit": "ns/iter",
            "extra": "iterations: 9197\ncpu: 76091.77992823819 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 143226.0147088833,
            "unit": "ns/iter",
            "extra": "iterations: 4895\ncpu: 143225.57711951228 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 607516.3321738925,
            "unit": "ns/iter",
            "extra": "iterations: 1150\ncpu: 607498.3478260923 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 511260.9686589038,
            "unit": "ns/iter",
            "extra": "iterations: 1372\ncpu: 511264.6501457755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 513449.5418502513,
            "unit": "ns/iter",
            "extra": "iterations: 1362\ncpu: 513444.566813515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 510864.45860805846,
            "unit": "ns/iter",
            "extra": "iterations: 1365\ncpu: 510849.2307692356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 335181.4837320657,
            "unit": "ns/iter",
            "extra": "iterations: 2090\ncpu: 335174.8803827725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 498092.07911619125,
            "unit": "ns/iter",
            "extra": "iterations: 1403\ncpu: 498091.0905203067 ns\nthreads: 1"
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
        "date": 1702476629084,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 7871.282824266986,
            "unit": "ns/iter",
            "extra": "iterations: 88037\ncpu: 7871.118961345799 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 71924.40094818824,
            "unit": "ns/iter",
            "extra": "iterations: 11812\ncpu: 71924.11953945139 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 135346.8156353828,
            "unit": "ns/iter",
            "extra": "iterations: 6319\ncpu: 135342.395948726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 202558.57365241382,
            "unit": "ns/iter",
            "extra": "iterations: 4304\ncpu: 202552.06784386619 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 274648.3047530294,
            "unit": "ns/iter",
            "extra": "iterations: 3219\ncpu: 274554.7996272135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 332725.8715170381,
            "unit": "ns/iter",
            "extra": "iterations: 2584\ncpu: 332720.35603715177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 396256.83707092603,
            "unit": "ns/iter",
            "extra": "iterations: 2185\ncpu: 396248.74141876434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 459979.38143235137,
            "unit": "ns/iter",
            "extra": "iterations: 1885\ncpu: 459970.0265251996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 528135.2512048237,
            "unit": "ns/iter",
            "extra": "iterations: 1660\ncpu: 528127.5903614456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 5985.287430660485,
            "unit": "ns/iter",
            "extra": "iterations: 117357\ncpu: 5985.1589594144425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 4967.638625751834,
            "unit": "ns/iter",
            "extra": "iterations: 141139\ncpu: 4967.417935510377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5401.205690000096,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5400.746000000005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 4985.208441521614,
            "unit": "ns/iter",
            "extra": "iterations: 140188\ncpu: 4985.1149884440865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 8598.194388509897,
            "unit": "ns/iter",
            "extra": "iterations: 82438\ncpu: 8597.943909362193 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 34065.97222682804,
            "unit": "ns/iter",
            "extra": "iterations: 24124\ncpu: 34065.20892057695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 136364.0384061492,
            "unit": "ns/iter",
            "extra": "iterations: 6249\ncpu: 136360.32965274426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 112329.7361238689,
            "unit": "ns/iter",
            "extra": "iterations: 7621\ncpu: 112327.85723658308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 112019.30805439713,
            "unit": "ns/iter",
            "extra": "iterations: 7648\ncpu: 112015.2981171548 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 111073.51162790676,
            "unit": "ns/iter",
            "extra": "iterations: 7697\ncpu: 111069.26075094171 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 271420.3905086903,
            "unit": "ns/iter",
            "extra": "iterations: 3224\ncpu: 271395.62655086914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2132722.866666615,
            "unit": "ns/iter",
            "extra": "iterations: 435\ncpu: 2132693.333333329 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1742750.7327103196,
            "unit": "ns/iter",
            "extra": "iterations: 535\ncpu: 1742680.7476635508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1754496.6101695108,
            "unit": "ns/iter",
            "extra": "iterations: 531\ncpu: 1754466.2900188318 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1758200.4905303598,
            "unit": "ns/iter",
            "extra": "iterations: 528\ncpu: 1758171.5909090913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1062979.9897024855,
            "unit": "ns/iter",
            "extra": "iterations: 874\ncpu: 1062966.7048054913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1703385.3047445582,
            "unit": "ns/iter",
            "extra": "iterations: 548\ncpu: 1703350.5474452518 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 7224756.470000102,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7223877.999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 3945973.8347458006,
            "unit": "ns/iter",
            "extra": "iterations: 236\ncpu: 3945855.9322033823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 8889072.803278813,
            "unit": "ns/iter",
            "extra": "iterations: 122\ncpu: 8888752.459016396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 33681.16949983754,
            "unit": "ns/iter",
            "extra": "iterations: 24472\ncpu: 33680.381660673396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 143277.07651186522,
            "unit": "ns/iter",
            "extra": "iterations: 5986\ncpu: 143271.7674574012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 115030.78456159172,
            "unit": "ns/iter",
            "extra": "iterations: 7436\ncpu: 115029.19580419568 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 112897.89717901307,
            "unit": "ns/iter",
            "extra": "iterations: 7586\ncpu: 112897.11310308443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 112576.58132172353,
            "unit": "ns/iter",
            "extra": "iterations: 7581\ncpu: 112575.09563382082 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 273378.4289702365,
            "unit": "ns/iter",
            "extra": "iterations: 3224\ncpu: 273375.24813895795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2144823.884259258,
            "unit": "ns/iter",
            "extra": "iterations: 432\ncpu: 2144753.9351851856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1762885.326375741,
            "unit": "ns/iter",
            "extra": "iterations: 527\ncpu: 1762795.635673628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1770124.398854934,
            "unit": "ns/iter",
            "extra": "iterations: 524\ncpu: 1770094.2748091554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1767469.780534378,
            "unit": "ns/iter",
            "extra": "iterations: 524\ncpu: 1767373.8549618341 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1063458.2528735274,
            "unit": "ns/iter",
            "extra": "iterations: 870\ncpu: 1063453.1034482794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1716653.7638376325,
            "unit": "ns/iter",
            "extra": "iterations: 542\ncpu: 1716618.8191881918 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 7210306.599999967,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7210147.000000048 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 4071033.7205238063,
            "unit": "ns/iter",
            "extra": "iterations: 229\ncpu: 4070884.7161572007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 32826.07611297191,
            "unit": "ns/iter",
            "extra": "iterations: 25068\ncpu: 32825.41088239986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 139700.3017423935,
            "unit": "ns/iter",
            "extra": "iterations: 6141\ncpu: 139697.86679693835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 110995.56122184586,
            "unit": "ns/iter",
            "extra": "iterations: 7726\ncpu: 110994.30494434407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 109382.52395553146,
            "unit": "ns/iter",
            "extra": "iterations: 7827\ncpu: 109379.43017759017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 111003.99183726397,
            "unit": "ns/iter",
            "extra": "iterations: 7718\ncpu: 111003.49831562638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 271854.08590851974,
            "unit": "ns/iter",
            "extra": "iterations: 3236\ncpu: 271848.7948084063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2160307.262181056,
            "unit": "ns/iter",
            "extra": "iterations: 431\ncpu: 2160282.5986078912 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1773371.7619046816,
            "unit": "ns/iter",
            "extra": "iterations: 525\ncpu: 1773332.571428571 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1768479.0681818097,
            "unit": "ns/iter",
            "extra": "iterations: 528\ncpu: 1768438.0681818223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1774438.7047618406,
            "unit": "ns/iter",
            "extra": "iterations: 525\ncpu: 1774405.142857144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1075998.4733795924,
            "unit": "ns/iter",
            "extra": "iterations: 864\ncpu: 1075986.8055555522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1720293.9537893387,
            "unit": "ns/iter",
            "extra": "iterations: 541\ncpu: 1720257.3012939019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 3001.550570846996,
            "unit": "ns/iter",
            "extra": "iterations: 233425\ncpu: 3001.5259719395804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 16096.994553852875,
            "unit": "ns/iter",
            "extra": "iterations: 43517\ncpu: 16096.886274329627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 12280.536708594142,
            "unit": "ns/iter",
            "extra": "iterations: 57003\ncpu: 12280.36243706474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 11920.755755413966,
            "unit": "ns/iter",
            "extra": "iterations: 58597\ncpu: 11920.414014369362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 10073.95970197827,
            "unit": "ns/iter",
            "extra": "iterations: 70599\ncpu: 10073.894814374147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 62427.803346155764,
            "unit": "ns/iter",
            "extra": "iterations: 11177\ncpu: 62426.554531627495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 139948.36693951458,
            "unit": "ns/iter",
            "extra": "iterations: 5009\ncpu: 139945.97724096716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 36274.46490554215,
            "unit": "ns/iter",
            "extra": "iterations: 19533\ncpu: 36273.322070342205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 35720.88702950154,
            "unit": "ns/iter",
            "extra": "iterations: 19660\ncpu: 35720.640895218785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 35765.17105734403,
            "unit": "ns/iter",
            "extra": "iterations: 19549\ncpu: 35764.92915238596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 74148.81641537456,
            "unit": "ns/iter",
            "extra": "iterations: 9418\ncpu: 74147.41983435975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 64886.08812899653,
            "unit": "ns/iter",
            "extra": "iterations: 10791\ncpu: 64885.070892410266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 19935.947372913193,
            "unit": "ns/iter",
            "extra": "iterations: 35153\ncpu: 19935.544619236032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 92493.9591029076,
            "unit": "ns/iter",
            "extra": "iterations: 7580\ncpu: 92491.54353561944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 75193.04841278018,
            "unit": "ns/iter",
            "extra": "iterations: 9419\ncpu: 75191.84626818085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 75126.07364465778,
            "unit": "ns/iter",
            "extra": "iterations: 9315\ncpu: 75125.03488996207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 75552.28940540276,
            "unit": "ns/iter",
            "extra": "iterations: 9250\ncpu: 75551.15675675681 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 140144.6309116504,
            "unit": "ns/iter",
            "extra": "iterations: 4969\ncpu: 140141.57778225074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 609674.2848378492,
            "unit": "ns/iter",
            "extra": "iterations: 1141\ncpu: 609658.1945661746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 509314.32114119374,
            "unit": "ns/iter",
            "extra": "iterations: 1367\ncpu: 509305.12070226105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 516852.9755193189,
            "unit": "ns/iter",
            "extra": "iterations: 1348\ncpu: 516843.3234421306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 508800.779000012,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 508795.5999999991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 339413.51411878044,
            "unit": "ns/iter",
            "extra": "iterations: 2054\ncpu: 339404.96592015243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 502945.3689999741,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 502940.60000000225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 20061.83480328721,
            "unit": "ns/iter",
            "extra": "iterations: 33221\ncpu: 20061.391890671624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 93038.13030668862,
            "unit": "ns/iter",
            "extra": "iterations: 7467\ncpu: 93036.5072987809 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 76996.88791976147,
            "unit": "ns/iter",
            "extra": "iterations: 9172\ncpu: 76995.62799825617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 75960.971044575,
            "unit": "ns/iter",
            "extra": "iterations: 9152\ncpu: 75958.55550699306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 76221.11542223519,
            "unit": "ns/iter",
            "extra": "iterations: 9201\ncpu: 76220.60645582003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 141699.40934958667,
            "unit": "ns/iter",
            "extra": "iterations: 4920\ncpu: 141696.84959349537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 611327.8628821039,
            "unit": "ns/iter",
            "extra": "iterations: 1145\ncpu: 611322.8820960658 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 513919.5029411697,
            "unit": "ns/iter",
            "extra": "iterations: 1360\ncpu: 513906.8382352948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 517338.3205033469,
            "unit": "ns/iter",
            "extra": "iterations: 1351\ncpu: 517326.35085121746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 508090.1675126583,
            "unit": "ns/iter",
            "extra": "iterations: 1379\ncpu: 508086.9470630972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 342474.0044052735,
            "unit": "ns/iter",
            "extra": "iterations: 2043\ncpu: 342468.6735193342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 502515.7700072157,
            "unit": "ns/iter",
            "extra": "iterations: 1387\ncpu: 502507.13770727784 ns\nthreads: 1"
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
        "date": 1702479534877,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 7966.131935348081,
            "unit": "ns/iter",
            "extra": "iterations: 87793\ncpu: 7965.983620562005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 72540.1608606552,
            "unit": "ns/iter",
            "extra": "iterations: 11712\ncpu: 72538.88319672132 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 138793.75639600007,
            "unit": "ns/iter",
            "extra": "iterations: 6293\ncpu: 138786.9219767996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 204667.70308844437,
            "unit": "ns/iter",
            "extra": "iterations: 4274\ncpu: 204650.93589143662 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 270474.9665833719,
            "unit": "ns/iter",
            "extra": "iterations: 3202\ncpu: 270468.7070580888 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 332069.4452611296,
            "unit": "ns/iter",
            "extra": "iterations: 2585\ncpu: 332044.71953578346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 397979.67945204116,
            "unit": "ns/iter",
            "extra": "iterations: 2190\ncpu: 397945.15981735155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 462232.96928881126,
            "unit": "ns/iter",
            "extra": "iterations: 1856\ncpu: 462202.8556034484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 525071.8636911908,
            "unit": "ns/iter",
            "extra": "iterations: 1658\ncpu: 525047.5271411344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6015.022207825865,
            "unit": "ns/iter",
            "extra": "iterations: 115770\ncpu: 6014.773257320547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5005.140149376208,
            "unit": "ns/iter",
            "extra": "iterations: 139915\ncpu: 5004.813636850938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4956.269289041816,
            "unit": "ns/iter",
            "extra": "iterations: 141246\ncpu: 4955.9208756354155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5007.4876299999005,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5007.1570000000065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 8604.940401662749,
            "unit": "ns/iter",
            "extra": "iterations: 79868\ncpu: 8604.482395953331 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 34048.93833091623,
            "unit": "ns/iter",
            "extra": "iterations: 24145\ncpu: 34047.27686891695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 137379.33595506178,
            "unit": "ns/iter",
            "extra": "iterations: 6230\ncpu: 137370.2407704656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 111462.97979139206,
            "unit": "ns/iter",
            "extra": "iterations: 7670\ncpu: 111456.96219035186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 110842.59353169215,
            "unit": "ns/iter",
            "extra": "iterations: 7730\ncpu: 110838.1630012936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 110617.48581790071,
            "unit": "ns/iter",
            "extra": "iterations: 7721\ncpu: 110614.1950524541 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 271014.4284380744,
            "unit": "ns/iter",
            "extra": "iterations: 3214\ncpu: 270995.799626634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2164518.043981479,
            "unit": "ns/iter",
            "extra": "iterations: 432\ncpu: 2164396.759259263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1778049.609942608,
            "unit": "ns/iter",
            "extra": "iterations: 523\ncpu: 1777929.6367112757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1752940.8396226375,
            "unit": "ns/iter",
            "extra": "iterations: 530\ncpu: 1752833.962264152 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1772093.6666666733,
            "unit": "ns/iter",
            "extra": "iterations: 525\ncpu: 1772004.7619047614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1058800.9610983557,
            "unit": "ns/iter",
            "extra": "iterations: 874\ncpu: 1058753.0892448518 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1697141.1733576767,
            "unit": "ns/iter",
            "extra": "iterations: 548\ncpu: 1697032.846715331 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 7114595.670000199,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7114152.000000012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 4089443.832599109,
            "unit": "ns/iter",
            "extra": "iterations: 227\ncpu: 4089234.36123348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 8862662.601625917,
            "unit": "ns/iter",
            "extra": "iterations: 123\ncpu: 8862404.878048789 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 33370.7532414253,
            "unit": "ns/iter",
            "extra": "iterations: 24372\ncpu: 33369.57163958644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 144265.8352644833,
            "unit": "ns/iter",
            "extra": "iterations: 5955\ncpu: 144254.8614609569 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 115299.4563289471,
            "unit": "ns/iter",
            "extra": "iterations: 7442\ncpu: 115294.58478903545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 112354.12178814899,
            "unit": "ns/iter",
            "extra": "iterations: 7628\ncpu: 112350.97011012118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 113896.57203502691,
            "unit": "ns/iter",
            "extra": "iterations: 7538\ncpu: 113892.90262669194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 276987.18009478715,
            "unit": "ns/iter",
            "extra": "iterations: 3165\ncpu: 276980.9162717216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2157438.5893270886,
            "unit": "ns/iter",
            "extra": "iterations: 431\ncpu: 2157388.1670533717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1783571.024856625,
            "unit": "ns/iter",
            "extra": "iterations: 523\ncpu: 1783545.3154875648 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1780256.8761905085,
            "unit": "ns/iter",
            "extra": "iterations: 525\ncpu: 1780224.0000000054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1781043.9026717646,
            "unit": "ns/iter",
            "extra": "iterations: 524\ncpu: 1781008.778625952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1060985.5234822305,
            "unit": "ns/iter",
            "extra": "iterations: 873\ncpu: 1060965.864833909 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1721105.9815157065,
            "unit": "ns/iter",
            "extra": "iterations: 541\ncpu: 1721068.0221811524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 7210827.55999987,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7210438.9999999795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 3991383.3659574403,
            "unit": "ns/iter",
            "extra": "iterations: 235\ncpu: 3991308.085106361 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 32592.552380197343,
            "unit": "ns/iter",
            "extra": "iterations: 25229\ncpu: 32591.957667763323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 137198.0961168163,
            "unit": "ns/iter",
            "extra": "iterations: 6232\ncpu: 137197.57702182254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 110198.58203175788,
            "unit": "ns/iter",
            "extra": "iterations: 7747\ncpu: 110196.55350458194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 109096.10693272152,
            "unit": "ns/iter",
            "extra": "iterations: 7818\ncpu: 109094.79406497812 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 110466.63595185804,
            "unit": "ns/iter",
            "extra": "iterations: 7727\ncpu: 110463.28458651523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 269147.4202226257,
            "unit": "ns/iter",
            "extra": "iterations: 3234\ncpu: 269143.56833642646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2154261.136574049,
            "unit": "ns/iter",
            "extra": "iterations: 432\ncpu: 2154218.7499999963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1778492.4580152093,
            "unit": "ns/iter",
            "extra": "iterations: 524\ncpu: 1778453.4351144987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1768222.4144485833,
            "unit": "ns/iter",
            "extra": "iterations: 526\ncpu: 1768196.958174901 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1770971.7452470881,
            "unit": "ns/iter",
            "extra": "iterations: 526\ncpu: 1770938.212927759 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1066088.3125720806,
            "unit": "ns/iter",
            "extra": "iterations: 867\ncpu: 1066067.704728947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1713879.233766302,
            "unit": "ns/iter",
            "extra": "iterations: 539\ncpu: 1713845.640074209 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 3021.27847725311,
            "unit": "ns/iter",
            "extra": "iterations: 232317\ncpu: 3021.233056556332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 15692.884864282512,
            "unit": "ns/iter",
            "extra": "iterations: 44504\ncpu: 15692.542243393775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 12107.817604276595,
            "unit": "ns/iter",
            "extra": "iterations: 57611\ncpu: 12107.665202825947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 12481.467947161884,
            "unit": "ns/iter",
            "extra": "iterations: 57686\ncpu: 12481.428769545462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 10020.490898162774,
            "unit": "ns/iter",
            "extra": "iterations: 69876\ncpu: 10020.253019634838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 63266.259376413196,
            "unit": "ns/iter",
            "extra": "iterations: 11065\ncpu: 63258.72571170357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 140844.23616978363,
            "unit": "ns/iter",
            "extra": "iterations: 4971\ncpu: 140836.8135184061 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 35855.98272326328,
            "unit": "ns/iter",
            "extra": "iterations: 19506\ncpu: 35855.18814723649 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 36009.66344969258,
            "unit": "ns/iter",
            "extra": "iterations: 19480\ncpu: 36008.82956878867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 36172.11142176651,
            "unit": "ns/iter",
            "extra": "iterations: 19314\ncpu: 36171.487004245384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 74044.30118568236,
            "unit": "ns/iter",
            "extra": "iterations: 9446\ncpu: 74041.94367986445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 65313.23612015594,
            "unit": "ns/iter",
            "extra": "iterations: 10753\ncpu: 65311.4386682787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 20196.06942717623,
            "unit": "ns/iter",
            "extra": "iterations: 34583\ncpu: 20195.781164155884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 93243.16864102041,
            "unit": "ns/iter",
            "extra": "iterations: 7513\ncpu: 93242.81911353701 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 75880.0072573675,
            "unit": "ns/iter",
            "extra": "iterations: 9232\ncpu: 75878.83448873389 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 76071.04777970935,
            "unit": "ns/iter",
            "extra": "iterations: 9188\ncpu: 76069.0683500221 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 76025.63856863178,
            "unit": "ns/iter",
            "extra": "iterations: 9194\ncpu: 76023.76549923791 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 143061.08211866053,
            "unit": "ns/iter",
            "extra": "iterations: 4871\ncpu: 143058.8380209411 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 617481.492063523,
            "unit": "ns/iter",
            "extra": "iterations: 1134\ncpu: 617474.2504409128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 516064.49815770215,
            "unit": "ns/iter",
            "extra": "iterations: 1357\ncpu: 516056.6691230685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 517677.1856508889,
            "unit": "ns/iter",
            "extra": "iterations: 1352\ncpu: 517663.97928993474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 513310.43318648357,
            "unit": "ns/iter",
            "extra": "iterations: 1362\ncpu: 513297.9441997042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 338969.4743217063,
            "unit": "ns/iter",
            "extra": "iterations: 2064\ncpu: 338960.99806201214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 503429.62859197124,
            "unit": "ns/iter",
            "extra": "iterations: 1392\ncpu: 503428.01724137814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 19993.114453180187,
            "unit": "ns/iter",
            "extra": "iterations: 34975\ncpu: 19993.05218012834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 93561.60152487471,
            "unit": "ns/iter",
            "extra": "iterations: 7476\ncpu: 93559.7779561259 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 76993.25619653445,
            "unit": "ns/iter",
            "extra": "iterations: 9118\ncpu: 76991.59903487546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 75822.49351071226,
            "unit": "ns/iter",
            "extra": "iterations: 9246\ncpu: 75820.917153363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 76113.4706656453,
            "unit": "ns/iter",
            "extra": "iterations: 9119\ncpu: 76113.40059217004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 144238.29455293,
            "unit": "ns/iter",
            "extra": "iterations: 4865\ncpu: 144229.24974306082 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 615902.0782761662,
            "unit": "ns/iter",
            "extra": "iterations: 1137\ncpu: 615856.3764291967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 511974.7902046965,
            "unit": "ns/iter",
            "extra": "iterations: 1368\ncpu: 511954.23976607993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 517398.7751478952,
            "unit": "ns/iter",
            "extra": "iterations: 1352\ncpu: 517368.491124254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 520750.4072164981,
            "unit": "ns/iter",
            "extra": "iterations: 1358\ncpu: 520717.8203240101 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 342466.43150684773,
            "unit": "ns/iter",
            "extra": "iterations: 2044\ncpu: 342444.3737769064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 503609.7208633008,
            "unit": "ns/iter",
            "extra": "iterations: 1390\ncpu: 503573.38129496464 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "33685945+GremSnoort@users.noreply.github.com",
            "name": "GremSnoort",
            "username": "GremSnoort"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d00df85748c367e34b838c50472cb85d5c89201f",
          "message": "Add Parser& Serializer with tests, example, benchmarks and CI CD (gcc & clang) (#1)",
          "timestamp": "2023-12-13T20:22:18+03:00",
          "tree_id": "d2ed956f4cc316eb0fee876ba27a22bed47f08d6",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/d00df85748c367e34b838c50472cb85d5c89201f"
        },
        "date": 1702488556825,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 7772.332252440156,
            "unit": "ns/iter",
            "extra": "iterations: 90049\ncpu: 7772.025230707727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 71062.16876196743,
            "unit": "ns/iter",
            "extra": "iterations: 12011\ncpu: 71058.79610357173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 136017.21754713604,
            "unit": "ns/iter",
            "extra": "iterations: 6417\ncpu: 136012.3733832009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 200996.08106863228,
            "unit": "ns/iter",
            "extra": "iterations: 4342\ncpu: 200983.07231690467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 273868.4546017931,
            "unit": "ns/iter",
            "extra": "iterations: 3227\ncpu: 273863.99132321036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 326955.0247524897,
            "unit": "ns/iter",
            "extra": "iterations: 2626\ncpu: 326936.5575019041 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 391284.5494604209,
            "unit": "ns/iter",
            "extra": "iterations: 2224\ncpu: 391241.45683453244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 453768.2895148622,
            "unit": "ns/iter",
            "extra": "iterations: 1917\ncpu: 453736.0980699008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 519688.5642092938,
            "unit": "ns/iter",
            "extra": "iterations: 1682\ncpu: 519651.1296076093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 5907.506582563239,
            "unit": "ns/iter",
            "extra": "iterations: 118267\ncpu: 5907.4289531314735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 4933.658673702812,
            "unit": "ns/iter",
            "extra": "iterations: 142125\ncpu: 4933.590853122249 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4918.035688150951,
            "unit": "ns/iter",
            "extra": "iterations: 142120\ncpu: 4918.0889389248505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 4954.652097530341,
            "unit": "ns/iter",
            "extra": "iterations: 141166\ncpu: 4954.705807347381 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 8482.389953774287,
            "unit": "ns/iter",
            "extra": "iterations: 82638\ncpu: 8482.268447929524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 34284.81156887263,
            "unit": "ns/iter",
            "extra": "iterations: 24030\ncpu: 34284.46109030378 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 140120.28307440746,
            "unit": "ns/iter",
            "extra": "iterations: 6115\ncpu: 140120.2616516764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 114268.538595084,
            "unit": "ns/iter",
            "extra": "iterations: 7488\ncpu: 114269.7248931623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 112036.82463028788,
            "unit": "ns/iter",
            "extra": "iterations: 7641\ncpu: 112034.00078523792 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 112173.8397536644,
            "unit": "ns/iter",
            "extra": "iterations: 7632\ncpu: 112174.01729559757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 270264.91370244557,
            "unit": "ns/iter",
            "extra": "iterations: 3233\ncpu: 270267.6770801112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2114546.2811791585,
            "unit": "ns/iter",
            "extra": "iterations: 441\ncpu: 2114532.4263038565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1757582.646616593,
            "unit": "ns/iter",
            "extra": "iterations: 532\ncpu: 1757548.3082706784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1748192.6015037708,
            "unit": "ns/iter",
            "extra": "iterations: 532\ncpu: 1748193.6090225577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1753115.5415095128,
            "unit": "ns/iter",
            "extra": "iterations: 530\ncpu: 1753133.584905657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1053274.4722537135,
            "unit": "ns/iter",
            "extra": "iterations: 883\ncpu: 1053275.6511891256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1699110.3711151527,
            "unit": "ns/iter",
            "extra": "iterations: 547\ncpu: 1699060.6946983542 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 7055706.370000508,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7055650.999999976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 3961351.2595744226,
            "unit": "ns/iter",
            "extra": "iterations: 235\ncpu: 3961357.446808508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 8644037.523809507,
            "unit": "ns/iter",
            "extra": "iterations: 126\ncpu: 8644017.460317448 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 34232.627683779545,
            "unit": "ns/iter",
            "extra": "iterations: 24173\ncpu: 34232.22190046737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 145799.42205258404,
            "unit": "ns/iter",
            "extra": "iterations: 5895\ncpu: 145799.6098388465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 115601.27525286983,
            "unit": "ns/iter",
            "extra": "iterations: 7415\ncpu: 115602.44099797693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 113187.96633663069,
            "unit": "ns/iter",
            "extra": "iterations: 7575\ncpu: 113189.09570957092 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 113692.75547009526,
            "unit": "ns/iter",
            "extra": "iterations: 7541\ncpu: 113691.03567166142 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 270485.79422719916,
            "unit": "ns/iter",
            "extra": "iterations: 3222\ncpu: 270485.63004345214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2143328.210161774,
            "unit": "ns/iter",
            "extra": "iterations: 433\ncpu: 2143351.7321016146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1769952.8403041647,
            "unit": "ns/iter",
            "extra": "iterations: 526\ncpu: 1769934.2205323142 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1769466.7908745594,
            "unit": "ns/iter",
            "extra": "iterations: 526\ncpu: 1769465.2091254736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1768015.8152381321,
            "unit": "ns/iter",
            "extra": "iterations: 525\ncpu: 1768033.142857145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1061968.0935005692,
            "unit": "ns/iter",
            "extra": "iterations: 877\ncpu: 1061978.5632839291 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1712557.4025734717,
            "unit": "ns/iter",
            "extra": "iterations: 544\ncpu: 1712531.2500000054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 7126066.420000256,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7126037.999999966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 3893097.80334713,
            "unit": "ns/iter",
            "extra": "iterations: 239\ncpu: 3893106.6945606745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 33075.454825913876,
            "unit": "ns/iter",
            "extra": "iterations: 24959\ncpu: 33075.335550302676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 139175.10648298968,
            "unit": "ns/iter",
            "extra": "iterations: 6170\ncpu: 139168.84927066506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 111363.91337662668,
            "unit": "ns/iter",
            "extra": "iterations: 7700\ncpu: 111363.94805194822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 109869.8085706946,
            "unit": "ns/iter",
            "extra": "iterations: 7794\ncpu: 109869.4380292537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 110520.45445134437,
            "unit": "ns/iter",
            "extra": "iterations: 7728\ncpu: 110521.64855072458 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 273716.8870917506,
            "unit": "ns/iter",
            "extra": "iterations: 3215\ncpu: 273713.0326594082 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2134467.018390751,
            "unit": "ns/iter",
            "extra": "iterations: 435\ncpu: 2134468.965517243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1771583.0476190387,
            "unit": "ns/iter",
            "extra": "iterations: 525\ncpu: 1771600.9523809496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1758230.1811320928,
            "unit": "ns/iter",
            "extra": "iterations: 530\ncpu: 1758249.0566037842 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1763509.6280835299,
            "unit": "ns/iter",
            "extra": "iterations: 527\ncpu: 1763437.0018975355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1059101.8867276881,
            "unit": "ns/iter",
            "extra": "iterations: 874\ncpu: 1059099.6567505698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1708370.3382352453,
            "unit": "ns/iter",
            "extra": "iterations: 544\ncpu: 1708370.4044117606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 2962.994933929311,
            "unit": "ns/iter",
            "extra": "iterations: 235883\ncpu: 2963.0304006647402 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 15828.992846632873,
            "unit": "ns/iter",
            "extra": "iterations: 44175\ncpu: 15828.828522920201 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 11852.253389988042,
            "unit": "ns/iter",
            "extra": "iterations: 59071\ncpu: 11852.167730358356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 11569.320003303601,
            "unit": "ns/iter",
            "extra": "iterations: 60540\ncpu: 11569.454905847328 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 10120.512773749404,
            "unit": "ns/iter",
            "extra": "iterations: 69087\ncpu: 10120.629061907459 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 61963.41887906033,
            "unit": "ns/iter",
            "extra": "iterations: 11187\ncpu: 61963.18047733988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 138185.49319660474,
            "unit": "ns/iter",
            "extra": "iterations: 5071\ncpu: 138183.15914020868 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 35644.74236029822,
            "unit": "ns/iter",
            "extra": "iterations: 19667\ncpu: 35645.16194640769 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 35515.65811009941,
            "unit": "ns/iter",
            "extra": "iterations: 19673\ncpu: 35516.08803944474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 35407.42609137052,
            "unit": "ns/iter",
            "extra": "iterations: 19700\ncpu: 35407.17258883276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 66415.60949942781,
            "unit": "ns/iter",
            "extra": "iterations: 10548\ncpu: 66415.49108835794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 64160.48410444203,
            "unit": "ns/iter",
            "extra": "iterations: 10915\ncpu: 64159.57856161165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 19610.00552718691,
            "unit": "ns/iter",
            "extra": "iterations: 35642\ncpu: 19609.811458391858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 92383.54895518515,
            "unit": "ns/iter",
            "extra": "iterations: 7609\ncpu: 92384.62347220373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 74977.87520034052,
            "unit": "ns/iter",
            "extra": "iterations: 9359\ncpu: 74976.84581686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 74861.83827463866,
            "unit": "ns/iter",
            "extra": "iterations: 9343\ncpu: 74861.73605908181 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 75020.39914255205,
            "unit": "ns/iter",
            "extra": "iterations: 9330\ncpu: 75021.22186495243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 141358.43251966455,
            "unit": "ns/iter",
            "extra": "iterations: 4957\ncpu: 141360.0766592707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 601723.4867180858,
            "unit": "ns/iter",
            "extra": "iterations: 1167\ncpu: 601730.3341902278 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 509427.46243614756,
            "unit": "ns/iter",
            "extra": "iterations: 1371\ncpu: 509424.36177972873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 512846.46964153444,
            "unit": "ns/iter",
            "extra": "iterations: 1367\ncpu: 512846.23262618383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 505340.86859206646,
            "unit": "ns/iter",
            "extra": "iterations: 1385\ncpu: 505337.4729241848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 332460.4327014254,
            "unit": "ns/iter",
            "extra": "iterations: 2110\ncpu: 332459.0521327036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 495600.0489014814,
            "unit": "ns/iter",
            "extra": "iterations: 1411\ncpu: 495595.3933380563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 19947.895274694434,
            "unit": "ns/iter",
            "extra": "iterations: 35130\ncpu: 19947.87076572723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 91973.36543760802,
            "unit": "ns/iter",
            "extra": "iterations: 7621\ncpu: 91974.33407689138 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 75967.3080236957,
            "unit": "ns/iter",
            "extra": "iterations: 9285\ncpu: 75968.07754442631 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 75301.68643064822,
            "unit": "ns/iter",
            "extra": "iterations: 9293\ncpu: 75302.55030668201 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 75006.33986089152,
            "unit": "ns/iter",
            "extra": "iterations: 9345\ncpu: 75006.22792937492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 141511.60943511355,
            "unit": "ns/iter",
            "extra": "iterations: 4939\ncpu: 141511.33832759748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 600580.7129391653,
            "unit": "ns/iter",
            "extra": "iterations: 1167\ncpu: 600586.718080551 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 507030.3347921296,
            "unit": "ns/iter",
            "extra": "iterations: 1371\ncpu: 507035.7403355275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 510352.4569971074,
            "unit": "ns/iter",
            "extra": "iterations: 1372\ncpu: 510358.0903790032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 506015.8568329643,
            "unit": "ns/iter",
            "extra": "iterations: 1383\ncpu: 506021.33044107887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 333731.4067877655,
            "unit": "ns/iter",
            "extra": "iterations: 2092\ncpu: 333731.07074569474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 496333.1070921864,
            "unit": "ns/iter",
            "extra": "iterations: 1410\ncpu: 496338.9361702168 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}