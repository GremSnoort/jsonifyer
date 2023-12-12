window.BENCHMARK_DATA = {
  "lastUpdate": 1702394270845,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Serialize clang-13 18.04 Debug c++-17": [
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
        "date": 1702392429046,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 9169.92062163182,
            "unit": "ns/iter",
            "extra": "iterations: 76444\ncpu: 9169.667992255769 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 109606.3623299062,
            "unit": "ns/iter",
            "extra": "iterations: 7863\ncpu: 109589.30433676713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 212441.82655037372,
            "unit": "ns/iter",
            "extra": "iterations: 4128\ncpu: 212433.9389534883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 315120.3040466857,
            "unit": "ns/iter",
            "extra": "iterations: 2743\ncpu: 315107.40065621585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 414811.05174889206,
            "unit": "ns/iter",
            "extra": "iterations: 2087\ncpu: 414786.91902252036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 516509.89614241145,
            "unit": "ns/iter",
            "extra": "iterations: 1685\ncpu: 516488.1899109794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 620495.3113942404,
            "unit": "ns/iter",
            "extra": "iterations: 1413\ncpu: 620463.6234961071 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 579122.861999963,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 579091.5000000005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 661966.3280000623,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 661945.1000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 7138.254842060832,
            "unit": "ns/iter",
            "extra": "iterations: 98202\ncpu: 7137.902486711061 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 6004.100777990369,
            "unit": "ns/iter",
            "extra": "iterations: 116454\ncpu: 6003.830697099298 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 6025.219007554561,
            "unit": "ns/iter",
            "extra": "iterations: 116480\ncpu: 6024.915006868139 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 6059.272935164097,
            "unit": "ns/iter",
            "extra": "iterations: 115445\ncpu: 6059.124258304826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 10142.247105701686,
            "unit": "ns/iter",
            "extra": "iterations: 69015\ncpu: 10141.945953778164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 50474.795727964505,
            "unit": "ns/iter",
            "extra": "iterations: 16292\ncpu: 50474.39847778054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 212690.53957552588,
            "unit": "ns/iter",
            "extra": "iterations: 4005\ncpu: 212681.72284644222 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 170520.9000399059,
            "unit": "ns/iter",
            "extra": "iterations: 5012\ncpu: 170507.5019952118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 175625.72990749535,
            "unit": "ns/iter",
            "extra": "iterations: 4865\ncpu: 175614.55292908585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 176239.65847106278,
            "unit": "ns/iter",
            "extra": "iterations: 4840\ncpu: 176233.98760330575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 390342.79006770556,
            "unit": "ns/iter",
            "extra": "iterations: 2215\ncpu: 390318.60045146744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 3322521.9187279246,
            "unit": "ns/iter",
            "extra": "iterations: 283\ncpu: 3322425.0883392296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 2749209.5411764025,
            "unit": "ns/iter",
            "extra": "iterations: 340\ncpu: 2749072.941176469 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 2748571.850000136,
            "unit": "ns/iter",
            "extra": "iterations: 340\ncpu: 2748512.9411764764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 2770434.922619001,
            "unit": "ns/iter",
            "extra": "iterations: 336\ncpu: 2770340.7738095224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1617797.066317501,
            "unit": "ns/iter",
            "extra": "iterations: 573\ncpu: 1617738.917975566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 2660832.7714283015,
            "unit": "ns/iter",
            "extra": "iterations: 350\ncpu: 2660714.571428571 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 11323732.505376538,
            "unit": "ns/iter",
            "extra": "iterations: 93\ncpu: 11323316.129032267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 6482590.298610881,
            "unit": "ns/iter",
            "extra": "iterations: 144\ncpu: 6482382.638888895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 13705382.038960738,
            "unit": "ns/iter",
            "extra": "iterations: 77\ncpu: 13704812.987012986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 51509.71865861866,
            "unit": "ns/iter",
            "extra": "iterations: 16073\ncpu: 51508.09431966645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 217405.1695431451,
            "unit": "ns/iter",
            "extra": "iterations: 3940\ncpu: 217395.98984771606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 176860.49751551013,
            "unit": "ns/iter",
            "extra": "iterations: 4830\ncpu: 176853.60248447146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 179533.19970752153,
            "unit": "ns/iter",
            "extra": "iterations: 4787\ncpu: 179528.6609567582 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 174583.01023962777,
            "unit": "ns/iter",
            "extra": "iterations: 4883\ncpu: 174578.23059594532 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 398967.4072543684,
            "unit": "ns/iter",
            "extra": "iterations: 2178\ncpu: 398953.53535353445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 3325566.5125445514,
            "unit": "ns/iter",
            "extra": "iterations: 279\ncpu: 3325456.2724014455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 2773516.7321430203,
            "unit": "ns/iter",
            "extra": "iterations: 336\ncpu: 2773440.773809514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 2785113.5044774134,
            "unit": "ns/iter",
            "extra": "iterations: 335\ncpu: 2785023.283582083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 2778774.6179106464,
            "unit": "ns/iter",
            "extra": "iterations: 335\ncpu: 2778620.29850746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1629025.346153889,
            "unit": "ns/iter",
            "extra": "iterations: 572\ncpu: 1628958.741258739 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 2694158.258620895,
            "unit": "ns/iter",
            "extra": "iterations: 348\ncpu: 2694081.034482761 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 11403784.548386734,
            "unit": "ns/iter",
            "extra": "iterations: 93\ncpu: 11403433.333333364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 6591816.401408508,
            "unit": "ns/iter",
            "extra": "iterations: 142\ncpu: 6591657.042253479 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 49580.781833511865,
            "unit": "ns/iter",
            "extra": "iterations: 16602\ncpu: 49578.90615588497 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 207195.6626945385,
            "unit": "ns/iter",
            "extra": "iterations: 4112\ncpu: 207189.8103112843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 170574.46417134674,
            "unit": "ns/iter",
            "extra": "iterations: 4996\ncpu: 170567.53402722196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 173099.01236068297,
            "unit": "ns/iter",
            "extra": "iterations: 4935\ncpu: 173094.24518743792 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 175450.48049282227,
            "unit": "ns/iter",
            "extra": "iterations: 4870\ncpu: 175440.4517453792 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 390513.1157469518,
            "unit": "ns/iter",
            "extra": "iterations: 2229\ncpu: 390486.0475549563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 3348819.946043202,
            "unit": "ns/iter",
            "extra": "iterations: 278\ncpu: 3348588.4892086247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 2798692.670658696,
            "unit": "ns/iter",
            "extra": "iterations: 334\ncpu: 2798176.0479041985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 2780537.7833829643,
            "unit": "ns/iter",
            "extra": "iterations: 337\ncpu: 2780429.9703264246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 2798697.441441383,
            "unit": "ns/iter",
            "extra": "iterations: 333\ncpu: 2798563.0630630674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1633151.8266199513,
            "unit": "ns/iter",
            "extra": "iterations: 571\ncpu: 1633101.5761821277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 2684390.111747698,
            "unit": "ns/iter",
            "extra": "iterations: 349\ncpu: 2684248.710601726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 3259.6426309630924,
            "unit": "ns/iter",
            "extra": "iterations: 214431\ncpu: 3259.500258824504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 23200.724241821765,
            "unit": "ns/iter",
            "extra": "iterations: 30204\ncpu: 23199.344457687734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 16666.506327303083,
            "unit": "ns/iter",
            "extra": "iterations: 41961\ncpu: 16665.89928743347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 17711.999543770922,
            "unit": "ns/iter",
            "extra": "iterations: 39454\ncpu: 17711.167435494495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 13695.3180212018,
            "unit": "ns/iter",
            "extra": "iterations: 51223\ncpu: 13694.824590515975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 91245.75312989371,
            "unit": "ns/iter",
            "extra": "iterations: 7668\ncpu: 91243.14032342266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 217188.78391958697,
            "unit": "ns/iter",
            "extra": "iterations: 3383\ncpu: 217187.37806680746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 53963.04562678873,
            "unit": "ns/iter",
            "extra": "iterations: 12931\ncpu: 53960.62176165816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 53959.00678645224,
            "unit": "ns/iter",
            "extra": "iterations: 12967\ncpu: 53955.32505591071 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 53612.29850746516,
            "unit": "ns/iter",
            "extra": "iterations: 13065\ncpu: 53609.735935706456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 112851.77215596587,
            "unit": "ns/iter",
            "extra": "iterations: 6206\ncpu: 112847.51853045548 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 100607.84280165422,
            "unit": "ns/iter",
            "extra": "iterations: 6953\ncpu: 100607.26305191977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 29778.6775515421,
            "unit": "ns/iter",
            "extra": "iterations: 23427\ncpu: 29778.482093311108 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 148151.42566708903,
            "unit": "ns/iter",
            "extra": "iterations: 4722\ncpu: 148144.76916560958 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 117544.90443401084,
            "unit": "ns/iter",
            "extra": "iterations: 5954\ncpu: 117540.52737655377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 117065.15298444046,
            "unit": "ns/iter",
            "extra": "iterations: 5981\ncpu: 117055.79334559612 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 119694.41651000109,
            "unit": "ns/iter",
            "extra": "iterations: 5851\ncpu: 119687.43804477785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 208982.96629883736,
            "unit": "ns/iter",
            "extra": "iterations: 3353\ncpu: 208973.66537429186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 934015.0227271953,
            "unit": "ns/iter",
            "extra": "iterations: 748\ncpu: 933973.7967914273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 788922.4807692289,
            "unit": "ns/iter",
            "extra": "iterations: 884\ncpu: 788884.1628959181 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 790770.7604520658,
            "unit": "ns/iter",
            "extra": "iterations: 885\ncpu: 790729.2655367224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 800498.6342857593,
            "unit": "ns/iter",
            "extra": "iterations: 875\ncpu: 800451.7714285677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 508481.81659387023,
            "unit": "ns/iter",
            "extra": "iterations: 1374\ncpu: 508457.35080058954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 769636.0819490999,
            "unit": "ns/iter",
            "extra": "iterations: 903\ncpu: 769610.5204872604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 29996.96228924519,
            "unit": "ns/iter",
            "extra": "iterations: 23309\ncpu: 29996.36621047648 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 143450.2479507974,
            "unit": "ns/iter",
            "extra": "iterations: 4880\ncpu: 143441.20901639352 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 117117.31162323884,
            "unit": "ns/iter",
            "extra": "iterations: 5988\ncpu: 117111.85704742845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 115804.62512429153,
            "unit": "ns/iter",
            "extra": "iterations: 6034\ncpu: 115798.57474312156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 117460.49446866497,
            "unit": "ns/iter",
            "extra": "iterations: 5966\ncpu: 117453.55346966207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 206802.51893491033,
            "unit": "ns/iter",
            "extra": "iterations: 3380\ncpu: 206787.75147928853 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 922138.059210385,
            "unit": "ns/iter",
            "extra": "iterations: 760\ncpu: 922109.4736842049 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 796107.8440678129,
            "unit": "ns/iter",
            "extra": "iterations: 885\ncpu: 796078.5310734538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 787348.5454546672,
            "unit": "ns/iter",
            "extra": "iterations: 891\ncpu: 787306.1728395113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 793486.5827664629,
            "unit": "ns/iter",
            "extra": "iterations: 882\ncpu: 793440.2494331064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 506575.98991353344,
            "unit": "ns/iter",
            "extra": "iterations: 1388\ncpu: 506563.83285302756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 774092.8626799511,
            "unit": "ns/iter",
            "extra": "iterations: 903\ncpu: 774079.2912513937 ns\nthreads: 1"
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
        "date": 1702392429046,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 9169.92062163182,
            "unit": "ns/iter",
            "extra": "iterations: 76444\ncpu: 9169.667992255769 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 109606.3623299062,
            "unit": "ns/iter",
            "extra": "iterations: 7863\ncpu: 109589.30433676713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 212441.82655037372,
            "unit": "ns/iter",
            "extra": "iterations: 4128\ncpu: 212433.9389534883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 315120.3040466857,
            "unit": "ns/iter",
            "extra": "iterations: 2743\ncpu: 315107.40065621585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 414811.05174889206,
            "unit": "ns/iter",
            "extra": "iterations: 2087\ncpu: 414786.91902252036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 516509.89614241145,
            "unit": "ns/iter",
            "extra": "iterations: 1685\ncpu: 516488.1899109794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 620495.3113942404,
            "unit": "ns/iter",
            "extra": "iterations: 1413\ncpu: 620463.6234961071 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 579122.861999963,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 579091.5000000005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 661966.3280000623,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 661945.1000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 7138.254842060832,
            "unit": "ns/iter",
            "extra": "iterations: 98202\ncpu: 7137.902486711061 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 6004.100777990369,
            "unit": "ns/iter",
            "extra": "iterations: 116454\ncpu: 6003.830697099298 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 6025.219007554561,
            "unit": "ns/iter",
            "extra": "iterations: 116480\ncpu: 6024.915006868139 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 6059.272935164097,
            "unit": "ns/iter",
            "extra": "iterations: 115445\ncpu: 6059.124258304826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 10142.247105701686,
            "unit": "ns/iter",
            "extra": "iterations: 69015\ncpu: 10141.945953778164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 50474.795727964505,
            "unit": "ns/iter",
            "extra": "iterations: 16292\ncpu: 50474.39847778054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 212690.53957552588,
            "unit": "ns/iter",
            "extra": "iterations: 4005\ncpu: 212681.72284644222 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 170520.9000399059,
            "unit": "ns/iter",
            "extra": "iterations: 5012\ncpu: 170507.5019952118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 175625.72990749535,
            "unit": "ns/iter",
            "extra": "iterations: 4865\ncpu: 175614.55292908585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 176239.65847106278,
            "unit": "ns/iter",
            "extra": "iterations: 4840\ncpu: 176233.98760330575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 390342.79006770556,
            "unit": "ns/iter",
            "extra": "iterations: 2215\ncpu: 390318.60045146744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 3322521.9187279246,
            "unit": "ns/iter",
            "extra": "iterations: 283\ncpu: 3322425.0883392296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 2749209.5411764025,
            "unit": "ns/iter",
            "extra": "iterations: 340\ncpu: 2749072.941176469 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 2748571.850000136,
            "unit": "ns/iter",
            "extra": "iterations: 340\ncpu: 2748512.9411764764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 2770434.922619001,
            "unit": "ns/iter",
            "extra": "iterations: 336\ncpu: 2770340.7738095224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1617797.066317501,
            "unit": "ns/iter",
            "extra": "iterations: 573\ncpu: 1617738.917975566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 2660832.7714283015,
            "unit": "ns/iter",
            "extra": "iterations: 350\ncpu: 2660714.571428571 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 11323732.505376538,
            "unit": "ns/iter",
            "extra": "iterations: 93\ncpu: 11323316.129032267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 6482590.298610881,
            "unit": "ns/iter",
            "extra": "iterations: 144\ncpu: 6482382.638888895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 13705382.038960738,
            "unit": "ns/iter",
            "extra": "iterations: 77\ncpu: 13704812.987012986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 51509.71865861866,
            "unit": "ns/iter",
            "extra": "iterations: 16073\ncpu: 51508.09431966645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 217405.1695431451,
            "unit": "ns/iter",
            "extra": "iterations: 3940\ncpu: 217395.98984771606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 176860.49751551013,
            "unit": "ns/iter",
            "extra": "iterations: 4830\ncpu: 176853.60248447146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 179533.19970752153,
            "unit": "ns/iter",
            "extra": "iterations: 4787\ncpu: 179528.6609567582 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 174583.01023962777,
            "unit": "ns/iter",
            "extra": "iterations: 4883\ncpu: 174578.23059594532 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 398967.4072543684,
            "unit": "ns/iter",
            "extra": "iterations: 2178\ncpu: 398953.53535353445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 3325566.5125445514,
            "unit": "ns/iter",
            "extra": "iterations: 279\ncpu: 3325456.2724014455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 2773516.7321430203,
            "unit": "ns/iter",
            "extra": "iterations: 336\ncpu: 2773440.773809514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 2785113.5044774134,
            "unit": "ns/iter",
            "extra": "iterations: 335\ncpu: 2785023.283582083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 2778774.6179106464,
            "unit": "ns/iter",
            "extra": "iterations: 335\ncpu: 2778620.29850746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1629025.346153889,
            "unit": "ns/iter",
            "extra": "iterations: 572\ncpu: 1628958.741258739 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 2694158.258620895,
            "unit": "ns/iter",
            "extra": "iterations: 348\ncpu: 2694081.034482761 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 11403784.548386734,
            "unit": "ns/iter",
            "extra": "iterations: 93\ncpu: 11403433.333333364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 6591816.401408508,
            "unit": "ns/iter",
            "extra": "iterations: 142\ncpu: 6591657.042253479 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 49580.781833511865,
            "unit": "ns/iter",
            "extra": "iterations: 16602\ncpu: 49578.90615588497 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 207195.6626945385,
            "unit": "ns/iter",
            "extra": "iterations: 4112\ncpu: 207189.8103112843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 170574.46417134674,
            "unit": "ns/iter",
            "extra": "iterations: 4996\ncpu: 170567.53402722196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 173099.01236068297,
            "unit": "ns/iter",
            "extra": "iterations: 4935\ncpu: 173094.24518743792 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 175450.48049282227,
            "unit": "ns/iter",
            "extra": "iterations: 4870\ncpu: 175440.4517453792 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 390513.1157469518,
            "unit": "ns/iter",
            "extra": "iterations: 2229\ncpu: 390486.0475549563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 3348819.946043202,
            "unit": "ns/iter",
            "extra": "iterations: 278\ncpu: 3348588.4892086247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 2798692.670658696,
            "unit": "ns/iter",
            "extra": "iterations: 334\ncpu: 2798176.0479041985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 2780537.7833829643,
            "unit": "ns/iter",
            "extra": "iterations: 337\ncpu: 2780429.9703264246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 2798697.441441383,
            "unit": "ns/iter",
            "extra": "iterations: 333\ncpu: 2798563.0630630674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1633151.8266199513,
            "unit": "ns/iter",
            "extra": "iterations: 571\ncpu: 1633101.5761821277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 2684390.111747698,
            "unit": "ns/iter",
            "extra": "iterations: 349\ncpu: 2684248.710601726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 3259.6426309630924,
            "unit": "ns/iter",
            "extra": "iterations: 214431\ncpu: 3259.500258824504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 23200.724241821765,
            "unit": "ns/iter",
            "extra": "iterations: 30204\ncpu: 23199.344457687734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 16666.506327303083,
            "unit": "ns/iter",
            "extra": "iterations: 41961\ncpu: 16665.89928743347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 17711.999543770922,
            "unit": "ns/iter",
            "extra": "iterations: 39454\ncpu: 17711.167435494495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 13695.3180212018,
            "unit": "ns/iter",
            "extra": "iterations: 51223\ncpu: 13694.824590515975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 91245.75312989371,
            "unit": "ns/iter",
            "extra": "iterations: 7668\ncpu: 91243.14032342266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 217188.78391958697,
            "unit": "ns/iter",
            "extra": "iterations: 3383\ncpu: 217187.37806680746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 53963.04562678873,
            "unit": "ns/iter",
            "extra": "iterations: 12931\ncpu: 53960.62176165816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 53959.00678645224,
            "unit": "ns/iter",
            "extra": "iterations: 12967\ncpu: 53955.32505591071 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 53612.29850746516,
            "unit": "ns/iter",
            "extra": "iterations: 13065\ncpu: 53609.735935706456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 112851.77215596587,
            "unit": "ns/iter",
            "extra": "iterations: 6206\ncpu: 112847.51853045548 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 100607.84280165422,
            "unit": "ns/iter",
            "extra": "iterations: 6953\ncpu: 100607.26305191977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 29778.6775515421,
            "unit": "ns/iter",
            "extra": "iterations: 23427\ncpu: 29778.482093311108 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 148151.42566708903,
            "unit": "ns/iter",
            "extra": "iterations: 4722\ncpu: 148144.76916560958 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 117544.90443401084,
            "unit": "ns/iter",
            "extra": "iterations: 5954\ncpu: 117540.52737655377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 117065.15298444046,
            "unit": "ns/iter",
            "extra": "iterations: 5981\ncpu: 117055.79334559612 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 119694.41651000109,
            "unit": "ns/iter",
            "extra": "iterations: 5851\ncpu: 119687.43804477785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 208982.96629883736,
            "unit": "ns/iter",
            "extra": "iterations: 3353\ncpu: 208973.66537429186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 934015.0227271953,
            "unit": "ns/iter",
            "extra": "iterations: 748\ncpu: 933973.7967914273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 788922.4807692289,
            "unit": "ns/iter",
            "extra": "iterations: 884\ncpu: 788884.1628959181 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 790770.7604520658,
            "unit": "ns/iter",
            "extra": "iterations: 885\ncpu: 790729.2655367224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 800498.6342857593,
            "unit": "ns/iter",
            "extra": "iterations: 875\ncpu: 800451.7714285677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 508481.81659387023,
            "unit": "ns/iter",
            "extra": "iterations: 1374\ncpu: 508457.35080058954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 769636.0819490999,
            "unit": "ns/iter",
            "extra": "iterations: 903\ncpu: 769610.5204872604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 29996.96228924519,
            "unit": "ns/iter",
            "extra": "iterations: 23309\ncpu: 29996.36621047648 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 143450.2479507974,
            "unit": "ns/iter",
            "extra": "iterations: 4880\ncpu: 143441.20901639352 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 117117.31162323884,
            "unit": "ns/iter",
            "extra": "iterations: 5988\ncpu: 117111.85704742845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 115804.62512429153,
            "unit": "ns/iter",
            "extra": "iterations: 6034\ncpu: 115798.57474312156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 117460.49446866497,
            "unit": "ns/iter",
            "extra": "iterations: 5966\ncpu: 117453.55346966207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 206802.51893491033,
            "unit": "ns/iter",
            "extra": "iterations: 3380\ncpu: 206787.75147928853 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 922138.059210385,
            "unit": "ns/iter",
            "extra": "iterations: 760\ncpu: 922109.4736842049 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 796107.8440678129,
            "unit": "ns/iter",
            "extra": "iterations: 885\ncpu: 796078.5310734538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 787348.5454546672,
            "unit": "ns/iter",
            "extra": "iterations: 891\ncpu: 787306.1728395113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 793486.5827664629,
            "unit": "ns/iter",
            "extra": "iterations: 882\ncpu: 793440.2494331064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 506575.98991353344,
            "unit": "ns/iter",
            "extra": "iterations: 1388\ncpu: 506563.83285302756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 774092.8626799511,
            "unit": "ns/iter",
            "extra": "iterations: 903\ncpu: 774079.2912513937 ns\nthreads: 1"
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
        "date": 1702394264712,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 9191.81197085281,
            "unit": "ns/iter",
            "extra": "iterations: 76302\ncpu: 9191.515294487694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 108239.96965882371,
            "unit": "ns/iter",
            "extra": "iterations: 7943\ncpu: 108237.98312979982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 209056.6698496151,
            "unit": "ns/iter",
            "extra": "iterations: 4189\ncpu: 209055.4547624732 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 312630.5642498265,
            "unit": "ns/iter",
            "extra": "iterations: 2786\ncpu: 312623.9052404883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 407238.5493562066,
            "unit": "ns/iter",
            "extra": "iterations: 2097\ncpu: 407238.86504530266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 505396.63350782666,
            "unit": "ns/iter",
            "extra": "iterations: 1719\ncpu: 505392.1465968585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 604260.0909090964,
            "unit": "ns/iter",
            "extra": "iterations: 1441\ncpu: 604247.3282442752 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 567514.7959999549,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 567509.1999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 643051.6119999083,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 643052.1999999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 7076.443498420866,
            "unit": "ns/iter",
            "extra": "iterations: 98776\ncpu: 7076.179436300317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5946.055579652516,
            "unit": "ns/iter",
            "extra": "iterations: 117579\ncpu: 5946.060095765401 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 6042.321483784707,
            "unit": "ns/iter",
            "extra": "iterations: 115785\ncpu: 6042.1755840566575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5975.657980234087,
            "unit": "ns/iter",
            "extra": "iterations: 117271\ncpu: 5975.5907257548815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 10327.899806353631,
            "unit": "ns/iter",
            "extra": "iterations: 67649\ncpu: 10327.90876435719 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 51554.13615053405,
            "unit": "ns/iter",
            "extra": "iterations: 15997\ncpu: 51553.753828842855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 217176.66708637468,
            "unit": "ns/iter",
            "extra": "iterations: 3971\ncpu: 217169.80609418306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 175387.72434316593,
            "unit": "ns/iter",
            "extra": "iterations: 4872\ncpu: 175383.41543513973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 174240.00408581182,
            "unit": "ns/iter",
            "extra": "iterations: 4895\ncpu: 174237.01736465728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 179219.9983203735,
            "unit": "ns/iter",
            "extra": "iterations: 4763\ncpu: 179218.30778920872 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 406118.1771616371,
            "unit": "ns/iter",
            "extra": "iterations: 2128\ncpu: 406105.9210526322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 3285989.294736761,
            "unit": "ns/iter",
            "extra": "iterations: 285\ncpu: 3285967.7192982496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 2742225.5395893715,
            "unit": "ns/iter",
            "extra": "iterations: 341\ncpu: 2742166.568914954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 2771800.395833119,
            "unit": "ns/iter",
            "extra": "iterations: 336\ncpu: 2771777.380952377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 2740031.6863903506,
            "unit": "ns/iter",
            "extra": "iterations: 338\ncpu: 2739987.27810651 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1573673.2806122098,
            "unit": "ns/iter",
            "extra": "iterations: 588\ncpu: 1573675.6802721093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 2654079.2869318025,
            "unit": "ns/iter",
            "extra": "iterations: 352\ncpu: 2653996.590909086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 10908644.628866756,
            "unit": "ns/iter",
            "extra": "iterations: 97\ncpu: 10908473.195876285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 6190443.913907309,
            "unit": "ns/iter",
            "extra": "iterations: 151\ncpu: 6190270.1986755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 13304327.101266181,
            "unit": "ns/iter",
            "extra": "iterations: 79\ncpu: 13303739.240506303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 51579.561775343536,
            "unit": "ns/iter",
            "extra": "iterations: 16042\ncpu: 51578.35681336492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 216229.25381874686,
            "unit": "ns/iter",
            "extra": "iterations: 3928\ncpu: 216222.70875763736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 178912.22898673287,
            "unit": "ns/iter",
            "extra": "iterations: 4747\ncpu: 178908.93195702578 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 181390.2059821674,
            "unit": "ns/iter",
            "extra": "iterations: 4714\ncpu: 181387.20831565562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 181489.30656156552,
            "unit": "ns/iter",
            "extra": "iterations: 4694\ncpu: 181486.32296548758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 403440.2020389394,
            "unit": "ns/iter",
            "extra": "iterations: 2158\ncpu: 403440.77849860943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 3301238.190812409,
            "unit": "ns/iter",
            "extra": "iterations: 283\ncpu: 3301122.9681978766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 2754409.2781062797,
            "unit": "ns/iter",
            "extra": "iterations: 338\ncpu: 2754391.124260348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 2790655.7365269125,
            "unit": "ns/iter",
            "extra": "iterations: 334\ncpu: 2790616.1676646606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 2765467.3727811207,
            "unit": "ns/iter",
            "extra": "iterations: 338\ncpu: 2765443.195266261 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1585650.2691653373,
            "unit": "ns/iter",
            "extra": "iterations: 587\ncpu: 1585616.5247018717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 2657275.014244765,
            "unit": "ns/iter",
            "extra": "iterations: 351\ncpu: 2657228.7749287686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 11037522.278350236,
            "unit": "ns/iter",
            "extra": "iterations: 97\ncpu: 11037283.505154638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 6047426.8451608,
            "unit": "ns/iter",
            "extra": "iterations: 155\ncpu: 6046718.709677405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 49789.76300264935,
            "unit": "ns/iter",
            "extra": "iterations: 16612\ncpu: 49788.14110281737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 217895.60460992204,
            "unit": "ns/iter",
            "extra": "iterations: 3948\ncpu: 217873.6322188458 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 177636.46260906695,
            "unit": "ns/iter",
            "extra": "iterations: 4814\ncpu: 177633.13253011994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 175520.58269665798,
            "unit": "ns/iter",
            "extra": "iterations: 4843\ncpu: 175517.96407185672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 180563.8071777464,
            "unit": "ns/iter",
            "extra": "iterations: 4709\ncpu: 180559.99150562735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 410041.9668403455,
            "unit": "ns/iter",
            "extra": "iterations: 2111\ncpu: 410042.77593557414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 3286609.1549296253,
            "unit": "ns/iter",
            "extra": "iterations: 284\ncpu: 3286518.3098591673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 2751996.058996987,
            "unit": "ns/iter",
            "extra": "iterations: 339\ncpu: 2751976.6961651826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 2780196.15178576,
            "unit": "ns/iter",
            "extra": "iterations: 336\ncpu: 2780122.0238095163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 2758187.3382789628,
            "unit": "ns/iter",
            "extra": "iterations: 337\ncpu: 2758156.3798219687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1587069.0954003073,
            "unit": "ns/iter",
            "extra": "iterations: 587\ncpu: 1587042.5894378263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 2652071.601139538,
            "unit": "ns/iter",
            "extra": "iterations: 351\ncpu: 2651972.6495726584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 3216.963200665014,
            "unit": "ns/iter",
            "extra": "iterations: 216580\ncpu: 3216.970634407602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 22837.95419723015,
            "unit": "ns/iter",
            "extra": "iterations: 30675\ncpu: 22837.704971475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 17758.541653995864,
            "unit": "ns/iter",
            "extra": "iterations: 39468\ncpu: 17758.57910205743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 17502.379748418385,
            "unit": "ns/iter",
            "extra": "iterations: 39987\ncpu: 17502.020656713456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 13617.347005663723,
            "unit": "ns/iter",
            "extra": "iterations: 51564\ncpu: 13617.007990070477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 97449.90955893576,
            "unit": "ns/iter",
            "extra": "iterations: 7187\ncpu: 97450.11826909649 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 202946.90513489628,
            "unit": "ns/iter",
            "extra": "iterations: 3447\ncpu: 202943.71917609795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 53051.95919909826,
            "unit": "ns/iter",
            "extra": "iterations: 13235\ncpu: 53052.13449187772 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 53220.67630057818,
            "unit": "ns/iter",
            "extra": "iterations: 13148\ncpu: 53218.77091572893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 52834.91306312837,
            "unit": "ns/iter",
            "extra": "iterations: 13274\ncpu: 52833.44884737021 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 109809.73537254399,
            "unit": "ns/iter",
            "extra": "iterations: 6375\ncpu: 109808.69019607888 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 98046.61958805307,
            "unit": "ns/iter",
            "extra": "iterations: 7137\ncpu: 98042.41277847956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 28665.955159528567,
            "unit": "ns/iter",
            "extra": "iterations: 24353\ncpu: 28665.712643206207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 144405.75961340973,
            "unit": "ns/iter",
            "extra": "iterations: 4863\ncpu: 144400.63746658305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 115694.00115358857,
            "unit": "ns/iter",
            "extra": "iterations: 6068\ncpu: 115692.84772577403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 114480.08590057283,
            "unit": "ns/iter",
            "extra": "iterations: 6135\ncpu: 114476.74001629931 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 117409.63450585217,
            "unit": "ns/iter",
            "extra": "iterations: 5970\ncpu: 117406.29815745425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 206269.20666273515,
            "unit": "ns/iter",
            "extra": "iterations: 3392\ncpu: 206267.0695754733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 908169.7776333393,
            "unit": "ns/iter",
            "extra": "iterations: 769\ncpu: 908154.2262678856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 783843.2836645002,
            "unit": "ns/iter",
            "extra": "iterations: 906\ncpu: 783844.9227373148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 778688.8581005017,
            "unit": "ns/iter",
            "extra": "iterations: 895\ncpu: 778681.2290502739 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 771944.4917308766,
            "unit": "ns/iter",
            "extra": "iterations: 907\ncpu: 771925.7993384803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 489722.1185133455,
            "unit": "ns/iter",
            "extra": "iterations: 1426\ncpu: 489718.6535764389 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 753278.7978494595,
            "unit": "ns/iter",
            "extra": "iterations: 930\ncpu: 753262.4731182782 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 28967.106128862724,
            "unit": "ns/iter",
            "extra": "iterations: 24197\ncpu: 28966.301607636917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 143117.68288693664,
            "unit": "ns/iter",
            "extra": "iterations: 4891\ncpu: 143115.29339603268 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 115001.77014139303,
            "unit": "ns/iter",
            "extra": "iterations: 6082\ncpu: 114999.7862545213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 114532.60860321464,
            "unit": "ns/iter",
            "extra": "iterations: 6114\ncpu: 114528.94995093306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 115702.4972713745,
            "unit": "ns/iter",
            "extra": "iterations: 6047\ncpu: 115702.66247726303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 203683.74469940772,
            "unit": "ns/iter",
            "extra": "iterations: 3443\ncpu: 203681.38251525114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 903512.8529031652,
            "unit": "ns/iter",
            "extra": "iterations: 775\ncpu: 903514.8387096848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 773338.3020949174,
            "unit": "ns/iter",
            "extra": "iterations: 907\ncpu: 773331.7530319698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 775535.6622368827,
            "unit": "ns/iter",
            "extra": "iterations: 903\ncpu: 775521.4839424145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 772871.9479512288,
            "unit": "ns/iter",
            "extra": "iterations: 903\ncpu: 772856.8106312186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 488397.1837875214,
            "unit": "ns/iter",
            "extra": "iterations: 1431\ncpu: 488382.2501747038 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 751592.3716433974,
            "unit": "ns/iter",
            "extra": "iterations: 931\ncpu: 751582.7067669223 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}