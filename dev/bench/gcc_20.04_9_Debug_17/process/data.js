window.BENCHMARK_DATA = {
  "lastUpdate": 1702382286084,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Serialize&Parse gcc-9 20.04 Debug c++-17": [
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
        "date": 1702381138026,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 15462.021640013572,
            "unit": "ns/iter",
            "extra": "iterations: 44085\ncpu: 15461.097879097202 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 147238.82922168425,
            "unit": "ns/iter",
            "extra": "iterations: 5756\ncpu: 147230.73314801947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 279299.372152709,
            "unit": "ns/iter",
            "extra": "iterations: 3117\ncpu: 279287.19923002884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 408080.912305511,
            "unit": "ns/iter",
            "extra": "iterations: 2121\ncpu: 408061.38613861374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 542739.3525402665,
            "unit": "ns/iter",
            "extra": "iterations: 1614\ncpu: 542708.1164807931 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 543450.7040000084,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 543394.0999999995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 654407.0440000098,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 654394.5999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 752381.7125205975,
            "unit": "ns/iter",
            "extra": "iterations: 1214\ncpu: 752363.8385502475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 858246.1572617985,
            "unit": "ns/iter",
            "extra": "iterations: 1081\ncpu: 858222.1091581878 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 12110.740455904686,
            "unit": "ns/iter",
            "extra": "iterations: 57863\ncpu: 12110.49720892455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10040.461901822127,
            "unit": "ns/iter",
            "extra": "iterations: 69649\ncpu: 10039.911556519113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 10087.144087231147,
            "unit": "ns/iter",
            "extra": "iterations: 69333\ncpu: 10086.579262400306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10289.231843736517,
            "unit": "ns/iter",
            "extra": "iterations: 69370\ncpu: 10288.754504829176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 16288.954851798951,
            "unit": "ns/iter",
            "extra": "iterations: 42881\ncpu: 16288.136937105017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 61971.99644024662,
            "unit": "ns/iter",
            "extra": "iterations: 13765\ncpu: 61969.451507446334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 320846.9782282374,
            "unit": "ns/iter",
            "extra": "iterations: 2664\ncpu: 320833.48348348367 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 254697.36959760787,
            "unit": "ns/iter",
            "extra": "iterations: 3355\ncpu: 254686.79582712377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 253393.84387059853,
            "unit": "ns/iter",
            "extra": "iterations: 3369\ncpu: 253382.6357969731 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 253063.37076648898,
            "unit": "ns/iter",
            "extra": "iterations: 3366\ncpu: 253054.87225193036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 567549.5032341544,
            "unit": "ns/iter",
            "extra": "iterations: 1546\ncpu: 567523.3505821478 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4536320.718446711,
            "unit": "ns/iter",
            "extra": "iterations: 206\ncpu: 4536084.951456315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3665961.698039146,
            "unit": "ns/iter",
            "extra": "iterations: 255\ncpu: 3665854.9019607804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3661568.188235432,
            "unit": "ns/iter",
            "extra": "iterations: 255\ncpu: 3661417.2549019544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3673081.736220468,
            "unit": "ns/iter",
            "extra": "iterations: 254\ncpu: 3672955.5118110236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 2117719.690204985,
            "unit": "ns/iter",
            "extra": "iterations: 439\ncpu: 2117614.5785876997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3584982.5961537804,
            "unit": "ns/iter",
            "extra": "iterations: 260\ncpu: 3584666.1538461545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 14126270.119999543,
            "unit": "ns/iter",
            "extra": "iterations: 75\ncpu: 14125336.000000034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 6254582.5299997665,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6254367.999999993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 17868287.79661025,
            "unit": "ns/iter",
            "extra": "iterations: 59\ncpu: 17867342.372881375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 68079.5431726132,
            "unit": "ns/iter",
            "extra": "iterations: 12589\ncpu: 68076.15378505044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 352807.6949918076,
            "unit": "ns/iter",
            "extra": "iterations: 2436\ncpu: 352790.59934318456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 281372.9262537026,
            "unit": "ns/iter",
            "extra": "iterations: 3051\ncpu: 281360.8652900667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 280463.59255631675,
            "unit": "ns/iter",
            "extra": "iterations: 3063\ncpu: 280452.04048318806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 277095.76375403814,
            "unit": "ns/iter",
            "extra": "iterations: 3090\ncpu: 277079.4174757275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 577562.2867647224,
            "unit": "ns/iter",
            "extra": "iterations: 1496\ncpu: 577547.3262032055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4589973.246305394,
            "unit": "ns/iter",
            "extra": "iterations: 203\ncpu: 4589670.4433497535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3715722.745019808,
            "unit": "ns/iter",
            "extra": "iterations: 251\ncpu: 3715468.525896428 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3709901.428571414,
            "unit": "ns/iter",
            "extra": "iterations: 252\ncpu: 3709744.44444444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3708946.9482073737,
            "unit": "ns/iter",
            "extra": "iterations: 251\ncpu: 3708849.8007968185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 2143970.388888813,
            "unit": "ns/iter",
            "extra": "iterations: 432\ncpu: 2143877.314814818 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3608539.3682171344,
            "unit": "ns/iter",
            "extra": "iterations: 258\ncpu: 3608331.7829457293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 14387133.199999576,
            "unit": "ns/iter",
            "extra": "iterations: 75\ncpu: 14386416.000000017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 6209597.449999933,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6209148.999999953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 60739.205798137686,
            "unit": "ns/iter",
            "extra": "iterations: 13970\ncpu: 60736.57838224754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 314630.01063830097,
            "unit": "ns/iter",
            "extra": "iterations: 2726\ncpu: 314606.12619222177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 251528.456284961,
            "unit": "ns/iter",
            "extra": "iterations: 3397\ncpu: 251515.4253753318 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 253667.66251481813,
            "unit": "ns/iter",
            "extra": "iterations: 3372\ncpu: 253654.59667852754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 247568.03302432995,
            "unit": "ns/iter",
            "extra": "iterations: 3452\ncpu: 247555.15643105356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 557096.0824808415,
            "unit": "ns/iter",
            "extra": "iterations: 1564\ncpu: 557072.3785166236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 4544577.731707161,
            "unit": "ns/iter",
            "extra": "iterations: 205\ncpu: 4544362.926829241 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3686861.10276681,
            "unit": "ns/iter",
            "extra": "iterations: 253\ncpu: 3686676.679841886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3688413.05533593,
            "unit": "ns/iter",
            "extra": "iterations: 253\ncpu: 3688268.3794466658 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3668001.573122469,
            "unit": "ns/iter",
            "extra": "iterations: 253\ncpu: 3667819.3675889336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 2113922.106334783,
            "unit": "ns/iter",
            "extra": "iterations: 442\ncpu: 2113812.8959275982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3594156.37837846,
            "unit": "ns/iter",
            "extra": "iterations: 259\ncpu: 3593918.1467181323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 5682.82648290632,
            "unit": "ns/iter",
            "extra": "iterations: 123204\ncpu: 5682.783838187098 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 37246.740006397624,
            "unit": "ns/iter",
            "extra": "iterations: 18762\ncpu: 37244.29165334172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 30892.242176809046,
            "unit": "ns/iter",
            "extra": "iterations: 22657\ncpu: 30890.17522178573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 29598.556277607448,
            "unit": "ns/iter",
            "extra": "iterations: 23544\ncpu: 29596.26656472996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 22939.074734258596,
            "unit": "ns/iter",
            "extra": "iterations: 30575\ncpu: 22937.86099754719 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 147430.96345585983,
            "unit": "ns/iter",
            "extra": "iterations: 4734\ncpu: 147428.24250105798 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 301540.7877358298,
            "unit": "ns/iter",
            "extra": "iterations: 2332\ncpu: 301538.55060034443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 73873.4287981364,
            "unit": "ns/iter",
            "extra": "iterations: 9452\ncpu: 73871.21244181087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 75002.2255655172,
            "unit": "ns/iter",
            "extra": "iterations: 9372\ncpu: 74997.62057191654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 74333.14758781217,
            "unit": "ns/iter",
            "extra": "iterations: 9452\ncpu: 74327.57088446947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 162032.35021740044,
            "unit": "ns/iter",
            "extra": "iterations: 4600\ncpu: 162021.1086956526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 138513.30349430488,
            "unit": "ns/iter",
            "extra": "iterations: 5094\ncpu: 138504.37769925545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 46446.936879058194,
            "unit": "ns/iter",
            "extra": "iterations: 15098\ncpu: 46444.635051 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 224728.05334190113,
            "unit": "ns/iter",
            "extra": "iterations: 3112\ncpu: 224716.70951156673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 181575.51268116123,
            "unit": "ns/iter",
            "extra": "iterations: 3864\ncpu: 181561.9565217401 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 182741.45739675814,
            "unit": "ns/iter",
            "extra": "iterations: 3826\ncpu: 182729.76999477044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 183851.72595521001,
            "unit": "ns/iter",
            "extra": "iterations: 3795\ncpu: 183822.3188405789 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 306624.7683888039,
            "unit": "ns/iter",
            "extra": "iterations: 2284\ncpu: 306610.1576182132 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1290225.8198530264,
            "unit": "ns/iter",
            "extra": "iterations: 544\ncpu: 1290169.8529411633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 1077443.6804915008,
            "unit": "ns/iter",
            "extra": "iterations: 651\ncpu: 1077380.6451612848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 1081093.1486068212,
            "unit": "ns/iter",
            "extra": "iterations: 646\ncpu: 1081036.842105267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 1077757.8515624774,
            "unit": "ns/iter",
            "extra": "iterations: 640\ncpu: 1077721.250000008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 689913.6923076791,
            "unit": "ns/iter",
            "extra": "iterations: 1014\ncpu: 689885.7988165733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 1070464.88496938,
            "unit": "ns/iter",
            "extra": "iterations: 652\ncpu: 1070455.5214723866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 47038.68716361882,
            "unit": "ns/iter",
            "extra": "iterations: 14864\ncpu: 47036.57158234711 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 228185.47294655963,
            "unit": "ns/iter",
            "extra": "iterations: 3068\ncpu: 228171.70795306633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 187341.79200214543,
            "unit": "ns/iter",
            "extra": "iterations: 3726\ncpu: 187329.6296296314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 188635.98483618654,
            "unit": "ns/iter",
            "extra": "iterations: 3693\ncpu: 188630.4630381837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 194823.55301398318,
            "unit": "ns/iter",
            "extra": "iterations: 3716\ncpu: 194818.59526372168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 314038.84970837086,
            "unit": "ns/iter",
            "extra": "iterations: 2229\ncpu: 314023.3288470208 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1283756.5871559868,
            "unit": "ns/iter",
            "extra": "iterations: 545\ncpu: 1283624.4036697366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 1078690.2040185456,
            "unit": "ns/iter",
            "extra": "iterations: 647\ncpu: 1078611.2828438978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 1078059.8030769047,
            "unit": "ns/iter",
            "extra": "iterations: 650\ncpu: 1078008.7692307697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 1076309.6589862043,
            "unit": "ns/iter",
            "extra": "iterations: 651\ncpu: 1076239.7849462256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 690502.0464427115,
            "unit": "ns/iter",
            "extra": "iterations: 1012\ncpu: 690470.9486165966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 1071566.015313987,
            "unit": "ns/iter",
            "extra": "iterations: 653\ncpu: 1071546.5543644796 ns\nthreads: 1"
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
        "date": 1702382285381,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 15247.963551585879,
            "unit": "ns/iter",
            "extra": "iterations: 45681\ncpu: 15246.818151966903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 155760.3033512725,
            "unit": "ns/iter",
            "extra": "iterations: 5759\ncpu: 155751.7624587602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 278577.37633021304,
            "unit": "ns/iter",
            "extra": "iterations: 3101\ncpu: 278562.62495969044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 407055.7456511541,
            "unit": "ns/iter",
            "extra": "iterations: 2127\ncpu: 407037.75270333816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 542234.8089329855,
            "unit": "ns/iter",
            "extra": "iterations: 1612\ncpu: 542194.6029776678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 542611.762999968,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 542603.9000000005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 656005.6519999761,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 655899.9999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 754155.5517522586,
            "unit": "ns/iter",
            "extra": "iterations: 1227\ncpu: 754100.5704971477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 859498.5470479558,
            "unit": "ns/iter",
            "extra": "iterations: 1084\ncpu: 859426.9372693726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 12020.956501037008,
            "unit": "ns/iter",
            "extra": "iterations: 58806\ncpu: 12019.918035574618 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 9878.184841006178,
            "unit": "ns/iter",
            "extra": "iterations: 70915\ncpu: 9877.360219981661 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 9854.084326487184,
            "unit": "ns/iter",
            "extra": "iterations: 70986\ncpu: 9853.935987377801 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 9982.997250006594,
            "unit": "ns/iter",
            "extra": "iterations: 70182\ncpu: 9982.593827477112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 16223.574935670858,
            "unit": "ns/iter",
            "extra": "iterations: 43137\ncpu: 16222.664997565886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 63013.70872858231,
            "unit": "ns/iter",
            "extra": "iterations: 13599\ncpu: 63009.0300757409 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 338136.92115536524,
            "unit": "ns/iter",
            "extra": "iterations: 2562\ncpu: 338114.59797033557 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 265726.9359651922,
            "unit": "ns/iter",
            "extra": "iterations: 3217\ncpu: 265702.9841467206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 264284.6097936626,
            "unit": "ns/iter",
            "extra": "iterations: 3247\ncpu: 264272.9596550655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 260811.97363580402,
            "unit": "ns/iter",
            "extra": "iterations: 3262\ncpu: 260798.55916615555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 558676.2678686493,
            "unit": "ns/iter",
            "extra": "iterations: 1553\ncpu: 558638.634900194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4522281.550724739,
            "unit": "ns/iter",
            "extra": "iterations: 207\ncpu: 4521948.309178751 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3676165.996063085,
            "unit": "ns/iter",
            "extra": "iterations: 254\ncpu: 3675842.51968504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3660947.41245145,
            "unit": "ns/iter",
            "extra": "iterations: 257\ncpu: 3660647.859922185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3646760.960784341,
            "unit": "ns/iter",
            "extra": "iterations: 255\ncpu: 3646449.019607835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 2126359.7214611312,
            "unit": "ns/iter",
            "extra": "iterations: 438\ncpu: 2126188.8127853856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3564591.8735632407,
            "unit": "ns/iter",
            "extra": "iterations: 261\ncpu: 3564224.1379310396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 14180475.039999388,
            "unit": "ns/iter",
            "extra": "iterations: 75\ncpu: 14179361.333333325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 6178460.350000137,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6177913.000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 17866761.316666193,
            "unit": "ns/iter",
            "extra": "iterations: 60\ncpu: 17865380.00000005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 67709.16102702291,
            "unit": "ns/iter",
            "extra": "iterations: 12619\ncpu: 67702.25849908868 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 370450.61882251716,
            "unit": "ns/iter",
            "extra": "iterations: 2327\ncpu: 370409.2393639876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 290117.7646263239,
            "unit": "ns/iter",
            "extra": "iterations: 2957\ncpu: 290108.45451471093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 286533.0294314443,
            "unit": "ns/iter",
            "extra": "iterations: 2990\ncpu: 286505.08361203916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 285593.73424475995,
            "unit": "ns/iter",
            "extra": "iterations: 2999\ncpu: 285577.35911970556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 573151.309822044,
            "unit": "ns/iter",
            "extra": "iterations: 1517\ncpu: 573091.5622940003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4581643.995073858,
            "unit": "ns/iter",
            "extra": "iterations: 203\ncpu: 4581118.226600974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3709249.1274900357,
            "unit": "ns/iter",
            "extra": "iterations: 251\ncpu: 3708965.3386454154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3704787.0992063554,
            "unit": "ns/iter",
            "extra": "iterations: 252\ncpu: 3704433.3333333503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3690765.2500000196,
            "unit": "ns/iter",
            "extra": "iterations: 252\ncpu: 3690517.0634920606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 2148064.113163921,
            "unit": "ns/iter",
            "extra": "iterations: 433\ncpu: 2147812.9330254025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3601471.4942084574,
            "unit": "ns/iter",
            "extra": "iterations: 259\ncpu: 3601130.8880308853 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 14460619.09459448,
            "unit": "ns/iter",
            "extra": "iterations: 74\ncpu: 14459790.540540572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 6173752.08999988,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6162576.999999984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 60898.587732016575,
            "unit": "ns/iter",
            "extra": "iterations: 13792\ncpu: 60893.91676334105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 325725.1924829079,
            "unit": "ns/iter",
            "extra": "iterations: 2634\ncpu: 325715.5656795757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 260248.14125832365,
            "unit": "ns/iter",
            "extra": "iterations: 3306\ncpu: 260231.39745916397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 264692.1343329266,
            "unit": "ns/iter",
            "extra": "iterations: 3268\ncpu: 264684.0269277836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 257866.03143894405,
            "unit": "ns/iter",
            "extra": "iterations: 3308\ncpu: 257854.201934704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 550011.4462025274,
            "unit": "ns/iter",
            "extra": "iterations: 1580\ncpu: 549980.6329113909 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 4531086.082524438,
            "unit": "ns/iter",
            "extra": "iterations: 206\ncpu: 4531045.631067971 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3664382.6850393913,
            "unit": "ns/iter",
            "extra": "iterations: 254\ncpu: 3663764.9606299126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3674552.188976226,
            "unit": "ns/iter",
            "extra": "iterations: 254\ncpu: 3674440.5511810845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3661766.21960801,
            "unit": "ns/iter",
            "extra": "iterations: 255\ncpu: 3661645.0980392247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 2107349.3476297506,
            "unit": "ns/iter",
            "extra": "iterations: 443\ncpu: 2107212.189616254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3564463.1839080383,
            "unit": "ns/iter",
            "extra": "iterations: 261\ncpu: 3564415.708812258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 5651.452806884271,
            "unit": "ns/iter",
            "extra": "iterations: 123874\ncpu: 5651.236740558973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 37556.93109360702,
            "unit": "ns/iter",
            "extra": "iterations: 18663\ncpu: 37556.49145367849 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 30770.535824309634,
            "unit": "ns/iter",
            "extra": "iterations: 22722\ncpu: 30768.739547575067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 30487.606446139376,
            "unit": "ns/iter",
            "extra": "iterations: 24759\ncpu: 30487.23696433635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 22976.551598262427,
            "unit": "ns/iter",
            "extra": "iterations: 30408\ncpu: 22974.677716390164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 145425.88231631165,
            "unit": "ns/iter",
            "extra": "iterations: 4818\ncpu: 145422.47820672631 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 301137.38993981516,
            "unit": "ns/iter",
            "extra": "iterations: 2326\ncpu: 301123.55975923815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 73885.04208754264,
            "unit": "ns/iter",
            "extra": "iterations: 9504\ncpu: 73884.20664983186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 73601.94216005676,
            "unit": "ns/iter",
            "extra": "iterations: 9509\ncpu: 73599.53728047178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 73555.56479140276,
            "unit": "ns/iter",
            "extra": "iterations: 9492\ncpu: 73551.98061525542 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 150673.95866523188,
            "unit": "ns/iter",
            "extra": "iterations: 4645\ncpu: 150669.83853606097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 143587.95405129198,
            "unit": "ns/iter",
            "extra": "iterations: 4875\ncpu: 143579.48717948742 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 45703.64093850121,
            "unit": "ns/iter",
            "extra": "iterations: 15301\ncpu: 45702.62074374234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 225631.45208131833,
            "unit": "ns/iter",
            "extra": "iterations: 3099\ncpu: 225618.16715069461 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 181251.59172057157,
            "unit": "ns/iter",
            "extra": "iterations: 3865\ncpu: 181249.62483829557 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 182201.11249999484,
            "unit": "ns/iter",
            "extra": "iterations: 3840\ncpu: 182192.23958333422 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 182009.18584070055,
            "unit": "ns/iter",
            "extra": "iterations: 3842\ncpu: 182007.49609578418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 304087.7859938944,
            "unit": "ns/iter",
            "extra": "iterations: 2299\ncpu: 304075.25010874047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1282462.7579143697,
            "unit": "ns/iter",
            "extra": "iterations: 537\ncpu: 1282448.0446927352 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 1068252.5716463116,
            "unit": "ns/iter",
            "extra": "iterations: 656\ncpu: 1068216.1585365809 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 1069869.436447156,
            "unit": "ns/iter",
            "extra": "iterations: 653\ncpu: 1069835.2220520652 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 1066248.270106161,
            "unit": "ns/iter",
            "extra": "iterations: 659\ncpu: 1066205.766312608 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 684887.7492654424,
            "unit": "ns/iter",
            "extra": "iterations: 1021\ncpu: 684861.0186092105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 1058553.9273827348,
            "unit": "ns/iter",
            "extra": "iterations: 661\ncpu: 1058540.8472012167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 46380.481155198584,
            "unit": "ns/iter",
            "extra": "iterations: 15097\ncpu: 46377.730674968116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 227647.77122488167,
            "unit": "ns/iter",
            "extra": "iterations: 3086\ncpu: 227645.46338301993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 186184.38101568975,
            "unit": "ns/iter",
            "extra": "iterations: 3761\ncpu: 186176.70832225616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 187133.7856380184,
            "unit": "ns/iter",
            "extra": "iterations: 3746\ncpu: 187131.50026695177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 186600.0692225803,
            "unit": "ns/iter",
            "extra": "iterations: 3756\ncpu: 186590.73482428375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 308091.64643799444,
            "unit": "ns/iter",
            "extra": "iterations: 2274\ncpu: 308087.90677220403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1283663.6263736743,
            "unit": "ns/iter",
            "extra": "iterations: 546\ncpu: 1283606.0439560383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 1075377.8377125156,
            "unit": "ns/iter",
            "extra": "iterations: 647\ncpu: 1075335.7032457464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 1071733.8195719053,
            "unit": "ns/iter",
            "extra": "iterations: 654\ncpu: 1071708.868501536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 1068156.1600609946,
            "unit": "ns/iter",
            "extra": "iterations: 656\ncpu: 1068099.3902438981 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 687432.2858546142,
            "unit": "ns/iter",
            "extra": "iterations: 1018\ncpu: 687427.4066797661 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 1064882.5007610326,
            "unit": "ns/iter",
            "extra": "iterations: 657\ncpu: 1064859.5129375996 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}