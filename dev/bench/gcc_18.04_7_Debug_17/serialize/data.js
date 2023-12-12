window.BENCHMARK_DATA = {
  "lastUpdate": 1702412541274,
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
      }
    ]
  }
}