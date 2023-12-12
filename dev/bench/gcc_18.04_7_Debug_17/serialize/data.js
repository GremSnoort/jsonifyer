window.BENCHMARK_DATA = {
  "lastUpdate": 1702397915843,
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
      }
    ]
  }
}