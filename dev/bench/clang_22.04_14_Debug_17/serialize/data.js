window.BENCHMARK_DATA = {
  "lastUpdate": 1702392467154,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Serialize clang-14 22.04 Debug c++-17": [
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
        "date": 1702392466727,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 8546.846249923181,
            "unit": "ns/iter",
            "extra": "iterations: 81665\ncpu: 8546.89769178963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 103615.54353339315,
            "unit": "ns/iter",
            "extra": "iterations: 8281\ncpu: 103614.00797005193 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 201194.98076482472,
            "unit": "ns/iter",
            "extra": "iterations: 4367\ncpu: 201196.03847034578 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 301062.53411844943,
            "unit": "ns/iter",
            "extra": "iterations: 2887\ncpu: 301059.715968133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 391636.22090372763,
            "unit": "ns/iter",
            "extra": "iterations: 2191\ncpu: 391632.587859425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 486994.4770949872,
            "unit": "ns/iter",
            "extra": "iterations: 1790\ncpu: 486967.9888268154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 581748.6085504736,
            "unit": "ns/iter",
            "extra": "iterations: 1497\ncpu: 581727.5217100872 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 544233.1089999471,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 544217.8999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 620162.6429999578,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 620143.5999999987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6628.696869632454,
            "unit": "ns/iter",
            "extra": "iterations: 105387\ncpu: 6628.431400457359 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5453.522560782101,
            "unit": "ns/iter",
            "extra": "iterations: 129273\ncpu: 5453.448902709766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5430.5770236202525,
            "unit": "ns/iter",
            "extra": "iterations: 128532\ncpu: 5430.607163974729 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5408.091698250757,
            "unit": "ns/iter",
            "extra": "iterations: 129021\ncpu: 5407.864611187332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 9720.191430161492,
            "unit": "ns/iter",
            "extra": "iterations: 71880\ncpu: 9720.143294379506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 51315.908581285716,
            "unit": "ns/iter",
            "extra": "iterations: 16233\ncpu: 51313.571120556975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 211883.481775355,
            "unit": "ns/iter",
            "extra": "iterations: 4033\ncpu: 211881.57698983385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 171575.11351784214,
            "unit": "ns/iter",
            "extra": "iterations: 4986\ncpu: 171568.11070998784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 170106.5731731797,
            "unit": "ns/iter",
            "extra": "iterations: 4995\ncpu: 170103.7237237235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 175127.61023947524,
            "unit": "ns/iter",
            "extra": "iterations: 4844\ncpu: 175123.63748967787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 389803.1505861264,
            "unit": "ns/iter",
            "extra": "iterations: 2218\ncpu: 389805.0946798908 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 3184760.5387206124,
            "unit": "ns/iter",
            "extra": "iterations: 297\ncpu: 3184503.367003371 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 2631333.991572955,
            "unit": "ns/iter",
            "extra": "iterations: 356\ncpu: 2631209.2696629222 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 2571230.493150598,
            "unit": "ns/iter",
            "extra": "iterations: 365\ncpu: 2571245.479452059 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 2599486.140883834,
            "unit": "ns/iter",
            "extra": "iterations: 362\ncpu: 2599421.2707182267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1499441.4080644543,
            "unit": "ns/iter",
            "extra": "iterations: 620\ncpu: 1499385.000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 2511717.0269541657,
            "unit": "ns/iter",
            "extra": "iterations: 371\ncpu: 2511506.738544472 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 10488479.801980734,
            "unit": "ns/iter",
            "extra": "iterations: 101\ncpu: 10488051.485148506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 6085889.690322596,
            "unit": "ns/iter",
            "extra": "iterations: 155\ncpu: 6085503.225806465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 12451636.85882343,
            "unit": "ns/iter",
            "extra": "iterations: 85\ncpu: 12450527.058823515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 49087.25854295599,
            "unit": "ns/iter",
            "extra": "iterations: 16856\ncpu: 49084.82439487424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 220158.70246028,
            "unit": "ns/iter",
            "extra": "iterations: 3902\ncpu: 220145.4382368018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 172139.96210441293,
            "unit": "ns/iter",
            "extra": "iterations: 4961\ncpu: 172129.44970771973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 174548.64300368243,
            "unit": "ns/iter",
            "extra": "iterations: 4874\ncpu: 174535.80221584046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 170752.08247836708,
            "unit": "ns/iter",
            "extra": "iterations: 4971\ncpu: 170743.77388855335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 398814.317409283,
            "unit": "ns/iter",
            "extra": "iterations: 2177\ncpu: 398790.90491502156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 3156980.4711861545,
            "unit": "ns/iter",
            "extra": "iterations: 295\ncpu: 3156849.1525423853 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 2644762.3323945943,
            "unit": "ns/iter",
            "extra": "iterations: 355\ncpu: 2644754.3661971926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 2595281.930555555,
            "unit": "ns/iter",
            "extra": "iterations: 360\ncpu: 2595118.6111111073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 2617520.125348172,
            "unit": "ns/iter",
            "extra": "iterations: 359\ncpu: 2617445.9610027974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1511144.8474026578,
            "unit": "ns/iter",
            "extra": "iterations: 616\ncpu: 1511059.7402597372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 2522311.9891891014,
            "unit": "ns/iter",
            "extra": "iterations: 370\ncpu: 2522237.5675675827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 10734792.686275573,
            "unit": "ns/iter",
            "extra": "iterations: 102\ncpu: 10734227.450980386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 6152329.856209108,
            "unit": "ns/iter",
            "extra": "iterations: 153\ncpu: 6151885.620915014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 46842.66888462756,
            "unit": "ns/iter",
            "extra": "iterations: 17734\ncpu: 46842.92319837617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 218588.14416710802,
            "unit": "ns/iter",
            "extra": "iterations: 3926\ncpu: 218581.17677024924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 178183.6726364101,
            "unit": "ns/iter",
            "extra": "iterations: 4802\ncpu: 178179.82090795567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 170020.4361083087,
            "unit": "ns/iter",
            "extra": "iterations: 4985\ncpu: 170002.60782347136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 170942.56060909512,
            "unit": "ns/iter",
            "extra": "iterations: 4991\ncpu: 170934.94289721412 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 377950.81411663065,
            "unit": "ns/iter",
            "extra": "iterations: 2281\ncpu: 377928.1017097767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 3168602.277966044,
            "unit": "ns/iter",
            "extra": "iterations: 295\ncpu: 3168588.4745762516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 2632484.5337080276,
            "unit": "ns/iter",
            "extra": "iterations: 356\ncpu: 2632427.528089884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 2570808.837912257,
            "unit": "ns/iter",
            "extra": "iterations: 364\ncpu: 2570737.9120879225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 2619915.3352113366,
            "unit": "ns/iter",
            "extra": "iterations: 355\ncpu: 2619884.5070422534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1511622.0713128357,
            "unit": "ns/iter",
            "extra": "iterations: 617\ncpu: 1511553.8087520294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 2525070.119241006,
            "unit": "ns/iter",
            "extra": "iterations: 369\ncpu: 2525082.1138211545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 2846.8788591638036,
            "unit": "ns/iter",
            "extra": "iterations: 246556\ncpu: 2846.7747692207813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 21366.570865782596,
            "unit": "ns/iter",
            "extra": "iterations: 32745\ncpu: 21365.961215452793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 15200.61379190693,
            "unit": "ns/iter",
            "extra": "iterations: 46027\ncpu: 15199.793599409046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 16814.84286436665,
            "unit": "ns/iter",
            "extra": "iterations: 41531\ncpu: 16814.625219715366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 12548.60250630964,
            "unit": "ns/iter",
            "extra": "iterations: 55460\ncpu: 12548.337540569768 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 89742.23463759889,
            "unit": "ns/iter",
            "extra": "iterations: 7795\ncpu: 89738.12700448949 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 202573.23128458494,
            "unit": "ns/iter",
            "extra": "iterations: 3433\ncpu: 202560.76318088986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 50567.18871970776,
            "unit": "ns/iter",
            "extra": "iterations: 13989\ncpu: 50562.94231181623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 49480.26532486176,
            "unit": "ns/iter",
            "extra": "iterations: 14160\ncpu: 49478.00141242947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 49893.18910003589,
            "unit": "ns/iter",
            "extra": "iterations: 13945\ncpu: 49888.20365722558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 98920.8972466711,
            "unit": "ns/iter",
            "extra": "iterations: 7046\ncpu: 98914.76014760122 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 93833.34079036073,
            "unit": "ns/iter",
            "extra": "iterations: 7465\ncpu: 93828.82786336163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 23269.72954891557,
            "unit": "ns/iter",
            "extra": "iterations: 30194\ncpu: 23269.00708750104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 116660.9268903255,
            "unit": "ns/iter",
            "extra": "iterations: 5991\ncpu: 116655.66683358385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 94747.66216216439,
            "unit": "ns/iter",
            "extra": "iterations: 7400\ncpu: 94742.45945945945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 93941.66841680094,
            "unit": "ns/iter",
            "extra": "iterations: 7428\ncpu: 93933.03715670298 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 95572.944868999,
            "unit": "ns/iter",
            "extra": "iterations: 7328\ncpu: 95566.71670305678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 182357.14631607712,
            "unit": "ns/iter",
            "extra": "iterations: 3841\ncpu: 182352.64254100568 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 845407.9143547405,
            "unit": "ns/iter",
            "extra": "iterations: 829\ncpu: 845370.6875753866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 721150.6965020288,
            "unit": "ns/iter",
            "extra": "iterations: 972\ncpu: 721111.2139917597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 707469.3144590739,
            "unit": "ns/iter",
            "extra": "iterations: 989\ncpu: 707415.3690596571 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 715475.360655683,
            "unit": "ns/iter",
            "extra": "iterations: 976\ncpu: 715414.6516393333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 443231.7780595584,
            "unit": "ns/iter",
            "extra": "iterations: 1577\ncpu: 443211.0336081135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 696430.9407630917,
            "unit": "ns/iter",
            "extra": "iterations: 996\ncpu: 696375.1004016163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 23456.863050825636,
            "unit": "ns/iter",
            "extra": "iterations: 29887\ncpu: 23456.372335798136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 115625.84767557165,
            "unit": "ns/iter",
            "extra": "iterations: 6066\ncpu: 115619.99670293345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 93034.03368393346,
            "unit": "ns/iter",
            "extra": "iterations: 7511\ncpu: 93029.67647450484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 93432.48912608711,
            "unit": "ns/iter",
            "extra": "iterations: 7495\ncpu: 93429.19279519729 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 95382.89269283389,
            "unit": "ns/iter",
            "extra": "iterations: 7390\ncpu: 95374.66847090638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 179355.4300716972,
            "unit": "ns/iter",
            "extra": "iterations: 3904\ncpu: 179341.7264344231 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 842539.1650718392,
            "unit": "ns/iter",
            "extra": "iterations: 836\ncpu: 842508.373205736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 717781.0071428963,
            "unit": "ns/iter",
            "extra": "iterations: 980\ncpu: 717763.9795918338 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 707410.453524025,
            "unit": "ns/iter",
            "extra": "iterations: 979\ncpu: 707389.581205311 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 710753.9344262625,
            "unit": "ns/iter",
            "extra": "iterations: 976\ncpu: 710702.2540983692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 443464.65825978544,
            "unit": "ns/iter",
            "extra": "iterations: 1586\ncpu: 443437.26355611975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 695365.9384310638,
            "unit": "ns/iter",
            "extra": "iterations: 1007\ncpu: 695321.449851041 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}