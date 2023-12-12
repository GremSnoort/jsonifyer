window.BENCHMARK_DATA = {
  "lastUpdate": 1702387057790,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Serialize&Parse gcc-11 22.04 Release c++-17": [
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
        "date": 1702381092863,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1576.1156838880675,
            "unit": "ns/iter",
            "extra": "iterations: 438756\ncpu: 1576.0762245986382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 24240.089565803963,
            "unit": "ns/iter",
            "extra": "iterations: 34109\ncpu: 24239.44413497904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 50241.459983099696,
            "unit": "ns/iter",
            "extra": "iterations: 16568\ncpu: 50240.34886528246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 62710.79456171822,
            "unit": "ns/iter",
            "extra": "iterations: 13975\ncpu: 62709.71735241504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 88732.29954268121,
            "unit": "ns/iter",
            "extra": "iterations: 10496\ncpu: 88730.38300304876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 111527.28667512783,
            "unit": "ns/iter",
            "extra": "iterations: 7880\ncpu: 111523.502538071 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 136006.7617602425,
            "unit": "ns/iter",
            "extra": "iterations: 6590\ncpu: 136003.96054628227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 157999.2958698812,
            "unit": "ns/iter",
            "extra": "iterations: 5472\ncpu: 157998.02631578938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 180684.19486253016,
            "unit": "ns/iter",
            "extra": "iterations: 4983\ncpu: 180680.1525185631 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1361.5596363344268,
            "unit": "ns/iter",
            "extra": "iterations: 510469\ncpu: 1361.5451672873382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1110.2306266133985,
            "unit": "ns/iter",
            "extra": "iterations: 633756\ncpu: 1110.1999823275833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1104.3850192845716,
            "unit": "ns/iter",
            "extra": "iterations: 634963\ncpu: 1104.3734831793342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1096.8276769718477,
            "unit": "ns/iter",
            "extra": "iterations: 635214\ncpu: 1096.7969849531003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 2194.8170254862634,
            "unit": "ns/iter",
            "extra": "iterations: 319427\ncpu: 2194.7571745657065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 6775.391562321333,
            "unit": "ns/iter",
            "extra": "iterations: 120673\ncpu: 6775.268701366498 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 32065.826658837537,
            "unit": "ns/iter",
            "extra": "iterations: 25545\ncpu: 32064.56057936969 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 28139.095951972024,
            "unit": "ns/iter",
            "extra": "iterations: 29150\ncpu: 28138.497427101236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 27759.14016335626,
            "unit": "ns/iter",
            "extra": "iterations: 29751\ncpu: 27758.179556989657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 28123.25781009978,
            "unit": "ns/iter",
            "extra": "iterations: 29289\ncpu: 28122.885725016182 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 72532.72837270489,
            "unit": "ns/iter",
            "extra": "iterations: 12149\ncpu: 72530.51279940728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 801524.5021422313,
            "unit": "ns/iter",
            "extra": "iterations: 1167\ncpu: 801504.884318764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 660761.985000022,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 660740.7000000017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 658686.0419999994,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 658666.5000000026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 660085.332000051,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 660076.7999999988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 463267.60915308434,
            "unit": "ns/iter",
            "extra": "iterations: 1901\ncpu: 463258.7585481324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 656698.4419999926,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 656687.9999999991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 3544653.5168538783,
            "unit": "ns/iter",
            "extra": "iterations: 267\ncpu: 3544607.116104874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1550366.9090908861,
            "unit": "ns/iter",
            "extra": "iterations: 605\ncpu: 1550335.206611567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 4546781.427884493,
            "unit": "ns/iter",
            "extra": "iterations: 208\ncpu: 4546658.173076918 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 10265.636761646934,
            "unit": "ns/iter",
            "extra": "iterations: 82684\ncpu: 10265.475787334883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 50279.60745244303,
            "unit": "ns/iter",
            "extra": "iterations: 16612\ncpu: 50278.4794124729 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 42409.00396926348,
            "unit": "ns/iter",
            "extra": "iterations: 19651\ncpu: 42408.32018726785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 42586.12213740712,
            "unit": "ns/iter",
            "extra": "iterations: 19781\ncpu: 42585.243415398494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 42031.269422313286,
            "unit": "ns/iter",
            "extra": "iterations: 20080\ncpu: 42030.55278884447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 83927.88184948677,
            "unit": "ns/iter",
            "extra": "iterations: 10165\ncpu: 83925.50909985263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 842895.0396753738,
            "unit": "ns/iter",
            "extra": "iterations: 1109\ncpu: 842878.1785392263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 682099.379335241,
            "unit": "ns/iter",
            "extra": "iterations: 1384\ncpu: 682089.5231213869 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 675415.8449389979,
            "unit": "ns/iter",
            "extra": "iterations: 1393\ncpu: 675402.8715003587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 677084.8919999821,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 677076.5999999995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 478508.895799252,
            "unit": "ns/iter",
            "extra": "iterations: 1833\ncpu: 478495.9629023459 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 667732.0590000022,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 667719.5999999981 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 3719692.6666667643,
            "unit": "ns/iter",
            "extra": "iterations: 252\ncpu: 3719570.238095244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1605192.5823428917,
            "unit": "ns/iter",
            "extra": "iterations: 589\ncpu: 1605157.724957558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 6777.2843178153325,
            "unit": "ns/iter",
            "extra": "iterations: 122247\ncpu: 6777.173263965568 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 32162.95635968302,
            "unit": "ns/iter",
            "extra": "iterations: 25756\ncpu: 32162.53300201879 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 27843.725826396854,
            "unit": "ns/iter",
            "extra": "iterations: 29919\ncpu: 27842.8991610682 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 27571.843112707393,
            "unit": "ns/iter",
            "extra": "iterations: 30353\ncpu: 27571.08028860396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 27165.204212514564,
            "unit": "ns/iter",
            "extra": "iterations: 30718\ncpu: 27164.75682010562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 69298.93635710092,
            "unit": "ns/iter",
            "extra": "iterations: 12523\ncpu: 69297.32492214296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 824994.0339425735,
            "unit": "ns/iter",
            "extra": "iterations: 1149\ncpu: 824973.8903394217 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 660677.3139999972,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 660662.9000000055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 677921.6830000223,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 677900.1999999963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 658367.8650000024,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 658353.4000000028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 467820.2588484012,
            "unit": "ns/iter",
            "extra": "iterations: 1893\ncpu: 467806.60327522556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 654984.5289999894,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 653857.3999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 569.2374226803893,
            "unit": "ns/iter",
            "extra": "iterations: 1231900\ncpu: 569.21811835376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3835.9265979269626,
            "unit": "ns/iter",
            "extra": "iterations: 182815\ncpu: 3835.9051500150163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 3080.760946662449,
            "unit": "ns/iter",
            "extra": "iterations: 227832\ncpu: 3080.7502896871247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 3307.6380166148783,
            "unit": "ns/iter",
            "extra": "iterations: 211739\ncpu: 3307.6235365237662 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 2446.8948815980266,
            "unit": "ns/iter",
            "extra": "iterations: 286144\ncpu: 2446.865564191451 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 19530.739981620434,
            "unit": "ns/iter",
            "extra": "iterations: 35909\ncpu: 19530.496532902485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 41635.3358058415,
            "unit": "ns/iter",
            "extra": "iterations: 16852\ncpu: 41634.27486351772 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 10188.016473574919,
            "unit": "ns/iter",
            "extra": "iterations: 68534\ncpu: 10187.709749905196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 10109.309186412524,
            "unit": "ns/iter",
            "extra": "iterations: 69298\ncpu: 10109.032006695663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 10087.009245439054,
            "unit": "ns/iter",
            "extra": "iterations: 69007\ncpu: 10086.776703812702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 20899.504738125546,
            "unit": "ns/iter",
            "extra": "iterations: 35246\ncpu: 20899.24246723044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 19840.659423164852,
            "unit": "ns/iter",
            "extra": "iterations: 35296\ncpu: 19840.109360834118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5069.983929595115,
            "unit": "ns/iter",
            "extra": "iterations: 137831\ncpu: 5069.913880041473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 26267.3394205369,
            "unit": "ns/iter",
            "extra": "iterations: 26887\ncpu: 26266.891062595492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 20915.4714711135,
            "unit": "ns/iter",
            "extra": "iterations: 33580\ncpu: 20915.15485407959 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 20712.451618634946,
            "unit": "ns/iter",
            "extra": "iterations: 33763\ncpu: 20712.377454609836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 21541.16660030118,
            "unit": "ns/iter",
            "extra": "iterations: 32647\ncpu: 21540.88277636529 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 50621.68631411738,
            "unit": "ns/iter",
            "extra": "iterations: 13861\ncpu: 50620.09234542913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 195542.0614556789,
            "unit": "ns/iter",
            "extra": "iterations: 3531\ncpu: 195534.3245539481 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 168957.1418935111,
            "unit": "ns/iter",
            "extra": "iterations: 4151\ncpu: 168955.02288604915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 165936.57428773557,
            "unit": "ns/iter",
            "extra": "iterations: 4247\ncpu: 165930.65693430605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 166417.80678047411,
            "unit": "ns/iter",
            "extra": "iterations: 4218\ncpu: 166410.90564248484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 99100.17455369246,
            "unit": "ns/iter",
            "extra": "iterations: 7058\ncpu: 99098.85236610926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 167485.6614285621,
            "unit": "ns/iter",
            "extra": "iterations: 4200\ncpu: 167483.19047618817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 5068.772690903186,
            "unit": "ns/iter",
            "extra": "iterations: 137478\ncpu: 5068.6146147020545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 25583.66875889534,
            "unit": "ns/iter",
            "extra": "iterations: 27403\ncpu: 25582.859540926052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 20621.39484320106,
            "unit": "ns/iter",
            "extra": "iterations: 33897\ncpu: 20620.969407322104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 20344.06124591745,
            "unit": "ns/iter",
            "extra": "iterations: 34288\ncpu: 20343.507932804387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 21212.383075991063,
            "unit": "ns/iter",
            "extra": "iterations: 33030\ncpu: 21211.99212836836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 49043.875140294454,
            "unit": "ns/iter",
            "extra": "iterations: 14256\ncpu: 49041.8490460162 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 192796.5480635218,
            "unit": "ns/iter",
            "extra": "iterations: 3589\ncpu: 192790.49874616656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 165091.3722352845,
            "unit": "ns/iter",
            "extra": "iterations: 4250\ncpu: 165089.03529411528 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 163040.83536299784,
            "unit": "ns/iter",
            "extra": "iterations: 4270\ncpu: 163039.20374707173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 167601.49856665413,
            "unit": "ns/iter",
            "extra": "iterations: 4186\ncpu: 167598.1605351184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 97736.90638119297,
            "unit": "ns/iter",
            "extra": "iterations: 7146\ncpu: 97735.75426812234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 165908.4441816346,
            "unit": "ns/iter",
            "extra": "iterations: 4228\ncpu: 165906.33869441896 ns\nthreads: 1"
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
          "id": "d50bb7d9db5207dc297814766d8c83b14fcc339b",
          "message": "More tests; More BMs; Separate BMs",
          "timestamp": "2023-12-12T14:29:05+03:00",
          "tree_id": "f44cff78a7d652bd003cb40812243c64e409e254",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/d50bb7d9db5207dc297814766d8c83b14fcc339b"
        },
        "date": 1702381092863,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1576.1156838880675,
            "unit": "ns/iter",
            "extra": "iterations: 438756\ncpu: 1576.0762245986382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 24240.089565803963,
            "unit": "ns/iter",
            "extra": "iterations: 34109\ncpu: 24239.44413497904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 50241.459983099696,
            "unit": "ns/iter",
            "extra": "iterations: 16568\ncpu: 50240.34886528246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 62710.79456171822,
            "unit": "ns/iter",
            "extra": "iterations: 13975\ncpu: 62709.71735241504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 88732.29954268121,
            "unit": "ns/iter",
            "extra": "iterations: 10496\ncpu: 88730.38300304876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 111527.28667512783,
            "unit": "ns/iter",
            "extra": "iterations: 7880\ncpu: 111523.502538071 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 136006.7617602425,
            "unit": "ns/iter",
            "extra": "iterations: 6590\ncpu: 136003.96054628227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 157999.2958698812,
            "unit": "ns/iter",
            "extra": "iterations: 5472\ncpu: 157998.02631578938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 180684.19486253016,
            "unit": "ns/iter",
            "extra": "iterations: 4983\ncpu: 180680.1525185631 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1361.5596363344268,
            "unit": "ns/iter",
            "extra": "iterations: 510469\ncpu: 1361.5451672873382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1110.2306266133985,
            "unit": "ns/iter",
            "extra": "iterations: 633756\ncpu: 1110.1999823275833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1104.3850192845716,
            "unit": "ns/iter",
            "extra": "iterations: 634963\ncpu: 1104.3734831793342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1096.8276769718477,
            "unit": "ns/iter",
            "extra": "iterations: 635214\ncpu: 1096.7969849531003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 2194.8170254862634,
            "unit": "ns/iter",
            "extra": "iterations: 319427\ncpu: 2194.7571745657065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 6775.391562321333,
            "unit": "ns/iter",
            "extra": "iterations: 120673\ncpu: 6775.268701366498 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 32065.826658837537,
            "unit": "ns/iter",
            "extra": "iterations: 25545\ncpu: 32064.56057936969 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 28139.095951972024,
            "unit": "ns/iter",
            "extra": "iterations: 29150\ncpu: 28138.497427101236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 27759.14016335626,
            "unit": "ns/iter",
            "extra": "iterations: 29751\ncpu: 27758.179556989657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 28123.25781009978,
            "unit": "ns/iter",
            "extra": "iterations: 29289\ncpu: 28122.885725016182 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 72532.72837270489,
            "unit": "ns/iter",
            "extra": "iterations: 12149\ncpu: 72530.51279940728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 801524.5021422313,
            "unit": "ns/iter",
            "extra": "iterations: 1167\ncpu: 801504.884318764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 660761.985000022,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 660740.7000000017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 658686.0419999994,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 658666.5000000026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 660085.332000051,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 660076.7999999988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 463267.60915308434,
            "unit": "ns/iter",
            "extra": "iterations: 1901\ncpu: 463258.7585481324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 656698.4419999926,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 656687.9999999991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 3544653.5168538783,
            "unit": "ns/iter",
            "extra": "iterations: 267\ncpu: 3544607.116104874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1550366.9090908861,
            "unit": "ns/iter",
            "extra": "iterations: 605\ncpu: 1550335.206611567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 4546781.427884493,
            "unit": "ns/iter",
            "extra": "iterations: 208\ncpu: 4546658.173076918 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 10265.636761646934,
            "unit": "ns/iter",
            "extra": "iterations: 82684\ncpu: 10265.475787334883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 50279.60745244303,
            "unit": "ns/iter",
            "extra": "iterations: 16612\ncpu: 50278.4794124729 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 42409.00396926348,
            "unit": "ns/iter",
            "extra": "iterations: 19651\ncpu: 42408.32018726785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 42586.12213740712,
            "unit": "ns/iter",
            "extra": "iterations: 19781\ncpu: 42585.243415398494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 42031.269422313286,
            "unit": "ns/iter",
            "extra": "iterations: 20080\ncpu: 42030.55278884447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 83927.88184948677,
            "unit": "ns/iter",
            "extra": "iterations: 10165\ncpu: 83925.50909985263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 842895.0396753738,
            "unit": "ns/iter",
            "extra": "iterations: 1109\ncpu: 842878.1785392263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 682099.379335241,
            "unit": "ns/iter",
            "extra": "iterations: 1384\ncpu: 682089.5231213869 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 675415.8449389979,
            "unit": "ns/iter",
            "extra": "iterations: 1393\ncpu: 675402.8715003587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 677084.8919999821,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 677076.5999999995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 478508.895799252,
            "unit": "ns/iter",
            "extra": "iterations: 1833\ncpu: 478495.9629023459 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 667732.0590000022,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 667719.5999999981 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 3719692.6666667643,
            "unit": "ns/iter",
            "extra": "iterations: 252\ncpu: 3719570.238095244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1605192.5823428917,
            "unit": "ns/iter",
            "extra": "iterations: 589\ncpu: 1605157.724957558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 6777.2843178153325,
            "unit": "ns/iter",
            "extra": "iterations: 122247\ncpu: 6777.173263965568 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 32162.95635968302,
            "unit": "ns/iter",
            "extra": "iterations: 25756\ncpu: 32162.53300201879 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 27843.725826396854,
            "unit": "ns/iter",
            "extra": "iterations: 29919\ncpu: 27842.8991610682 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 27571.843112707393,
            "unit": "ns/iter",
            "extra": "iterations: 30353\ncpu: 27571.08028860396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 27165.204212514564,
            "unit": "ns/iter",
            "extra": "iterations: 30718\ncpu: 27164.75682010562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 69298.93635710092,
            "unit": "ns/iter",
            "extra": "iterations: 12523\ncpu: 69297.32492214296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 824994.0339425735,
            "unit": "ns/iter",
            "extra": "iterations: 1149\ncpu: 824973.8903394217 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 660677.3139999972,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 660662.9000000055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 677921.6830000223,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 677900.1999999963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 658367.8650000024,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 658353.4000000028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 467820.2588484012,
            "unit": "ns/iter",
            "extra": "iterations: 1893\ncpu: 467806.60327522556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 654984.5289999894,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 653857.3999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 569.2374226803893,
            "unit": "ns/iter",
            "extra": "iterations: 1231900\ncpu: 569.21811835376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3835.9265979269626,
            "unit": "ns/iter",
            "extra": "iterations: 182815\ncpu: 3835.9051500150163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 3080.760946662449,
            "unit": "ns/iter",
            "extra": "iterations: 227832\ncpu: 3080.7502896871247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 3307.6380166148783,
            "unit": "ns/iter",
            "extra": "iterations: 211739\ncpu: 3307.6235365237662 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 2446.8948815980266,
            "unit": "ns/iter",
            "extra": "iterations: 286144\ncpu: 2446.865564191451 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 19530.739981620434,
            "unit": "ns/iter",
            "extra": "iterations: 35909\ncpu: 19530.496532902485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 41635.3358058415,
            "unit": "ns/iter",
            "extra": "iterations: 16852\ncpu: 41634.27486351772 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 10188.016473574919,
            "unit": "ns/iter",
            "extra": "iterations: 68534\ncpu: 10187.709749905196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 10109.309186412524,
            "unit": "ns/iter",
            "extra": "iterations: 69298\ncpu: 10109.032006695663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 10087.009245439054,
            "unit": "ns/iter",
            "extra": "iterations: 69007\ncpu: 10086.776703812702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 20899.504738125546,
            "unit": "ns/iter",
            "extra": "iterations: 35246\ncpu: 20899.24246723044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 19840.659423164852,
            "unit": "ns/iter",
            "extra": "iterations: 35296\ncpu: 19840.109360834118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5069.983929595115,
            "unit": "ns/iter",
            "extra": "iterations: 137831\ncpu: 5069.913880041473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 26267.3394205369,
            "unit": "ns/iter",
            "extra": "iterations: 26887\ncpu: 26266.891062595492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 20915.4714711135,
            "unit": "ns/iter",
            "extra": "iterations: 33580\ncpu: 20915.15485407959 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 20712.451618634946,
            "unit": "ns/iter",
            "extra": "iterations: 33763\ncpu: 20712.377454609836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 21541.16660030118,
            "unit": "ns/iter",
            "extra": "iterations: 32647\ncpu: 21540.88277636529 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 50621.68631411738,
            "unit": "ns/iter",
            "extra": "iterations: 13861\ncpu: 50620.09234542913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 195542.0614556789,
            "unit": "ns/iter",
            "extra": "iterations: 3531\ncpu: 195534.3245539481 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 168957.1418935111,
            "unit": "ns/iter",
            "extra": "iterations: 4151\ncpu: 168955.02288604915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 165936.57428773557,
            "unit": "ns/iter",
            "extra": "iterations: 4247\ncpu: 165930.65693430605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 166417.80678047411,
            "unit": "ns/iter",
            "extra": "iterations: 4218\ncpu: 166410.90564248484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 99100.17455369246,
            "unit": "ns/iter",
            "extra": "iterations: 7058\ncpu: 99098.85236610926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 167485.6614285621,
            "unit": "ns/iter",
            "extra": "iterations: 4200\ncpu: 167483.19047618817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 5068.772690903186,
            "unit": "ns/iter",
            "extra": "iterations: 137478\ncpu: 5068.6146147020545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 25583.66875889534,
            "unit": "ns/iter",
            "extra": "iterations: 27403\ncpu: 25582.859540926052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 20621.39484320106,
            "unit": "ns/iter",
            "extra": "iterations: 33897\ncpu: 20620.969407322104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 20344.06124591745,
            "unit": "ns/iter",
            "extra": "iterations: 34288\ncpu: 20343.507932804387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 21212.383075991063,
            "unit": "ns/iter",
            "extra": "iterations: 33030\ncpu: 21211.99212836836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 49043.875140294454,
            "unit": "ns/iter",
            "extra": "iterations: 14256\ncpu: 49041.8490460162 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 192796.5480635218,
            "unit": "ns/iter",
            "extra": "iterations: 3589\ncpu: 192790.49874616656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 165091.3722352845,
            "unit": "ns/iter",
            "extra": "iterations: 4250\ncpu: 165089.03529411528 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 163040.83536299784,
            "unit": "ns/iter",
            "extra": "iterations: 4270\ncpu: 163039.20374707173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 167601.49856665413,
            "unit": "ns/iter",
            "extra": "iterations: 4186\ncpu: 167598.1605351184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 97736.90638119297,
            "unit": "ns/iter",
            "extra": "iterations: 7146\ncpu: 97735.75426812234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 165908.4441816346,
            "unit": "ns/iter",
            "extra": "iterations: 4228\ncpu: 165906.33869441896 ns\nthreads: 1"
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
        "date": 1702382262943,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1536.0858300510122,
            "unit": "ns/iter",
            "extra": "iterations: 451159\ncpu: 1536.0542513836585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 23508.013516223353,
            "unit": "ns/iter",
            "extra": "iterations: 34921\ncpu: 23507.783282265686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 48894.576544945485,
            "unit": "ns/iter",
            "extra": "iterations: 17088\ncpu: 48893.31694756554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 64546.11589999785,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 64544.91999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 87646.16193578417,
            "unit": "ns/iter",
            "extra": "iterations: 10745\ncpu: 87646.00279199626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 109436.87437185734,
            "unit": "ns/iter",
            "extra": "iterations: 7960\ncpu: 109434.19597989952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 133428.952245083,
            "unit": "ns/iter",
            "extra": "iterations: 6659\ncpu: 133427.42153476484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 156127.39023951418,
            "unit": "ns/iter",
            "extra": "iterations: 5553\ncpu: 156123.55483522423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 178248.67975411445,
            "unit": "ns/iter",
            "extra": "iterations: 5043\ncpu: 178248.1459448738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1345.550830729703,
            "unit": "ns/iter",
            "extra": "iterations: 519784\ncpu: 1345.5362227386786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1072.9213899308827,
            "unit": "ns/iter",
            "extra": "iterations: 653644\ncpu: 1072.910636370867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1066.7869405432516,
            "unit": "ns/iter",
            "extra": "iterations: 655770\ncpu: 1066.7801210790362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1081.785016007487,
            "unit": "ns/iter",
            "extra": "iterations: 641885\ncpu: 1081.780069638642 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 2205.0796039292845,
            "unit": "ns/iter",
            "extra": "iterations: 318125\ncpu: 2205.0165815324176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 6754.536615760536,
            "unit": "ns/iter",
            "extra": "iterations: 122775\ncpu: 6754.407656281807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 30115.238877608743,
            "unit": "ns/iter",
            "extra": "iterations: 27085\ncpu: 30114.70924866164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 27493.18535521209,
            "unit": "ns/iter",
            "extra": "iterations: 30714\ncpu: 27491.54457250769 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 27349.02415442911,
            "unit": "ns/iter",
            "extra": "iterations: 29891\ncpu: 27348.144926566565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 28237.38018567368,
            "unit": "ns/iter",
            "extra": "iterations: 29191\ncpu: 28235.911753622666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 72023.19064067875,
            "unit": "ns/iter",
            "extra": "iterations: 12159\ncpu: 72020.42931162093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 799300.3114477987,
            "unit": "ns/iter",
            "extra": "iterations: 1188\ncpu: 799280.8080808085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 658228.12600004,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 658219.1000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 648161.8589999698,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 648140.5000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 670154.9949999616,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 670119.4999999985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 466576.4211364886,
            "unit": "ns/iter",
            "extra": "iterations: 1883\ncpu: 466561.1789697288 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 649061.7470000188,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 649040.7999999981 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 3508762.197802278,
            "unit": "ns/iter",
            "extra": "iterations: 273\ncpu: 3508667.7655677623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1521374.284552843,
            "unit": "ns/iter",
            "extra": "iterations: 615\ncpu: 1521309.2682926848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 4519474.663461791,
            "unit": "ns/iter",
            "extra": "iterations: 208\ncpu: 4519486.538461528 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 10241.761185722338,
            "unit": "ns/iter",
            "extra": "iterations: 82650\ncpu: 10241.607985480918 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 50104.781758569996,
            "unit": "ns/iter",
            "extra": "iterations: 16775\ncpu: 50103.87481371087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 42296.052626256445,
            "unit": "ns/iter",
            "extra": "iterations: 19781\ncpu: 42295.323795561446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 41888.305135348885,
            "unit": "ns/iter",
            "extra": "iterations: 20096\ncpu: 41888.06727707016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 40811.39665585289,
            "unit": "ns/iter",
            "extra": "iterations: 20035\ncpu: 40810.51659595689 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 83307.68276249137,
            "unit": "ns/iter",
            "extra": "iterations: 10686\ncpu: 83306.87815833765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 816695.2010676223,
            "unit": "ns/iter",
            "extra": "iterations: 1124\ncpu: 816672.1530249135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 675073.2010000319,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 675068.5999999959 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 672649.0600428648,
            "unit": "ns/iter",
            "extra": "iterations: 1399\ncpu: 672633.095067905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 670171.7729999927,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 670148.4000000021 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 476732.06907717616,
            "unit": "ns/iter",
            "extra": "iterations: 1853\ncpu: 476721.8564490003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 660959.7469999926,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 660944.9999999981 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 3685213.7755905604,
            "unit": "ns/iter",
            "extra": "iterations: 254\ncpu: 3685074.8031496005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1575274.2358803889,
            "unit": "ns/iter",
            "extra": "iterations: 602\ncpu: 1575219.2691029883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 6678.504588785155,
            "unit": "ns/iter",
            "extra": "iterations: 123889\ncpu: 6678.13445907224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 31953.340384542335,
            "unit": "ns/iter",
            "extra": "iterations: 25953\ncpu: 31952.452510307092 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 28140.697676778087,
            "unit": "ns/iter",
            "extra": "iterations: 29571\ncpu: 28140.130533292962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 27886.67500246676,
            "unit": "ns/iter",
            "extra": "iterations: 30391\ncpu: 27885.166661182728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 26804.729145382473,
            "unit": "ns/iter",
            "extra": "iterations: 30341\ncpu: 26804.45601661118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 69171.7724736513,
            "unit": "ns/iter",
            "extra": "iterations: 12904\ncpu: 69169.31184128938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 821287.7000864282,
            "unit": "ns/iter",
            "extra": "iterations: 1157\ncpu: 821271.3050993966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 654793.1030000313,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 654762.7000000062 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 656851.8309999831,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 656820.6999999973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 652509.3959999708,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 652499.5999999987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 461656.22364216,
            "unit": "ns/iter",
            "extra": "iterations: 1878\ncpu: 461635.4632587848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 643291.3090000056,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 643286.8999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 559.4618605262875,
            "unit": "ns/iter",
            "extra": "iterations: 1239359\ncpu: 559.4313673439242 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3909.454198687187,
            "unit": "ns/iter",
            "extra": "iterations: 178532\ncpu: 3909.410077745155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 3161.4173692336326,
            "unit": "ns/iter",
            "extra": "iterations: 225364\ncpu: 3161.358957065023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 3176.813606219757,
            "unit": "ns/iter",
            "extra": "iterations: 220458\ncpu: 3176.8227961788607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 2382.6384283812163,
            "unit": "ns/iter",
            "extra": "iterations: 287907\ncpu: 2382.5749287095987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 19611.4288865628,
            "unit": "ns/iter",
            "extra": "iterations: 35359\ncpu: 19611.20789615098 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 42835.43409145171,
            "unit": "ns/iter",
            "extra": "iterations: 16796\ncpu: 42834.34150988332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 10175.096970051469,
            "unit": "ns/iter",
            "extra": "iterations: 68351\ncpu: 10175.12984447923 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 10170.522302316893,
            "unit": "ns/iter",
            "extra": "iterations: 72414\ncpu: 10170.103847322309 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 10132.220054201027,
            "unit": "ns/iter",
            "extra": "iterations: 71955\ncpu: 10119.417691612805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 19912.024936152968,
            "unit": "ns/iter",
            "extra": "iterations: 34849\ncpu: 19911.340354099102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 19362.145554011833,
            "unit": "ns/iter",
            "extra": "iterations: 35279\ncpu: 19361.912185719408 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 4981.981592036291,
            "unit": "ns/iter",
            "extra": "iterations: 140537\ncpu: 4981.928602432017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 25369.30085240477,
            "unit": "ns/iter",
            "extra": "iterations: 28273\ncpu: 25368.464612881253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 20405.248338560155,
            "unit": "ns/iter",
            "extra": "iterations: 34759\ncpu: 20405.100837193353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 20421.335574031924,
            "unit": "ns/iter",
            "extra": "iterations: 33918\ncpu: 20421.074355799054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 21280.16316762103,
            "unit": "ns/iter",
            "extra": "iterations: 33009\ncpu: 21279.905480323618 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 49049.30859735013,
            "unit": "ns/iter",
            "extra": "iterations: 14109\ncpu: 49048.31667729786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 191235.04867986348,
            "unit": "ns/iter",
            "extra": "iterations: 3636\ncpu: 191234.3234323442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 165525.8884842978,
            "unit": "ns/iter",
            "extra": "iterations: 4394\ncpu: 165523.7596722815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 162851.58451704003,
            "unit": "ns/iter",
            "extra": "iterations: 4224\ncpu: 162848.67424242277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 165128.71563088283,
            "unit": "ns/iter",
            "extra": "iterations: 4248\ncpu: 165127.7071563101 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 97152.06292135212,
            "unit": "ns/iter",
            "extra": "iterations: 7120\ncpu: 97149.59269663022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 167528.57432751337,
            "unit": "ns/iter",
            "extra": "iterations: 4238\ncpu: 167527.51297781782 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 5046.72362000008,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5046.6740000000245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 25076.87940736518,
            "unit": "ns/iter",
            "extra": "iterations: 28078\ncpu: 25076.369399530176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 20430.913087491077,
            "unit": "ns/iter",
            "extra": "iterations: 34575\ncpu: 20430.78235719449 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 20196.460033988616,
            "unit": "ns/iter",
            "extra": "iterations: 34717\ncpu: 20195.973154362262 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 20729.325728807955,
            "unit": "ns/iter",
            "extra": "iterations: 34234\ncpu: 20729.114330782028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 48211.93076175905,
            "unit": "ns/iter",
            "extra": "iterations: 14414\ncpu: 48210.28860829782 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 190382.07447397616,
            "unit": "ns/iter",
            "extra": "iterations: 3612\ncpu: 190379.3743078591 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 163002.59570917988,
            "unit": "ns/iter",
            "extra": "iterations: 4195\ncpu: 162997.0441001186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 161105.24447004517,
            "unit": "ns/iter",
            "extra": "iterations: 4340\ncpu: 161104.40092165623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 160552.70672747944,
            "unit": "ns/iter",
            "extra": "iterations: 4385\ncpu: 160549.92018243988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 95133.13870431724,
            "unit": "ns/iter",
            "extra": "iterations: 7224\ncpu: 95131.82447397635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 160747.4086218758,
            "unit": "ns/iter",
            "extra": "iterations: 4361\ncpu: 160744.0036688843 ns\nthreads: 1"
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
          "id": "7d92f1613fa4ae9edff977fb9a4ee38db56bedcc",
          "message": "Enable another Clangs : try",
          "timestamp": "2023-12-12T16:01:28+03:00",
          "tree_id": "088c43bf274cde79393a5114d044a347c612360f",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/7d92f1613fa4ae9edff977fb9a4ee38db56bedcc"
        },
        "date": 1702387056662,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1616.7077417379512,
            "unit": "ns/iter",
            "extra": "iterations: 444138\ncpu: 1616.5428312821691 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 23615.0917245116,
            "unit": "ns/iter",
            "extra": "iterations: 35007\ncpu: 23613.891507412805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 49302.296911974896,
            "unit": "ns/iter",
            "extra": "iterations: 16904\ncpu: 49299.562233790835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 61655.297099997595,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 61651.32 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 86804.53771289578,
            "unit": "ns/iter",
            "extra": "iterations: 10686\ncpu: 86642.19539584499 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 109555.15440531289,
            "unit": "ns/iter",
            "extra": "iterations: 7979\ncpu: 109548.15139741822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 132870.5451021309,
            "unit": "ns/iter",
            "extra": "iterations: 6707\ncpu: 132861.66691516325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 154305.7299964113,
            "unit": "ns/iter",
            "extra": "iterations: 5574\ncpu: 154289.953354862 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 181302.22907576506,
            "unit": "ns/iter",
            "extra": "iterations: 5042\ncpu: 181288.95279650943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1370.8737739003552,
            "unit": "ns/iter",
            "extra": "iterations: 510766\ncpu: 1370.8618036439384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1096.5516312245866,
            "unit": "ns/iter",
            "extra": "iterations: 636485\ncpu: 1096.554828471999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1104.7331935660793,
            "unit": "ns/iter",
            "extra": "iterations: 632957\ncpu: 1104.7211737922148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1092.4727360881868,
            "unit": "ns/iter",
            "extra": "iterations: 641434\ncpu: 1092.475921139199 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 2149.8271037365716,
            "unit": "ns/iter",
            "extra": "iterations: 325623\ncpu: 2149.781188675249 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 6702.577251031393,
            "unit": "ns/iter",
            "extra": "iterations: 123610\ncpu: 6702.469864897666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 32280.39583743111,
            "unit": "ns/iter",
            "extra": "iterations: 25417\ncpu: 32278.994373844293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 28243.21867471952,
            "unit": "ns/iter",
            "extra": "iterations: 29473\ncpu: 28241.990974790508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 27354.32540945611,
            "unit": "ns/iter",
            "extra": "iterations: 30162\ncpu: 27352.645713148915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 28086.63353951826,
            "unit": "ns/iter",
            "extra": "iterations: 29100\ncpu: 28086.257731958773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 72573.34050414505,
            "unit": "ns/iter",
            "extra": "iterations: 12179\ncpu: 72569.82510879383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 782946.2053422418,
            "unit": "ns/iter",
            "extra": "iterations: 1198\ncpu: 782911.1018363946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 647888.5680000132,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 647831.7000000011 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 649148.7069999949,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 649105.5000000009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 647833.9660000073,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 647837.0999999968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 465792.64342312975,
            "unit": "ns/iter",
            "extra": "iterations: 1893\ncpu: 465765.3988378246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 650155.8450000004,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 650158.7000000022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 3502879.416356817,
            "unit": "ns/iter",
            "extra": "iterations: 269\ncpu: 3502650.1858736104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1520242.43556279,
            "unit": "ns/iter",
            "extra": "iterations: 613\ncpu: 1520183.3605220222 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 4503125.642857174,
            "unit": "ns/iter",
            "extra": "iterations: 210\ncpu: 4502732.857142871 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 9924.902922853524,
            "unit": "ns/iter",
            "extra": "iterations: 85396\ncpu: 9924.278654737898 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 50199.480809912406,
            "unit": "ns/iter",
            "extra": "iterations: 16545\ncpu: 50197.53399818678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 42403.27369384876,
            "unit": "ns/iter",
            "extra": "iterations: 19657\ncpu: 42401.73475097935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 41920.063568957084,
            "unit": "ns/iter",
            "extra": "iterations: 20230\ncpu: 41918.670291646085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 41692.08218428087,
            "unit": "ns/iter",
            "extra": "iterations: 20089\ncpu: 41690.1488376723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 82981.64041619093,
            "unit": "ns/iter",
            "extra": "iterations: 10476\ncpu: 82978.8755250092 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 835085.8303571534,
            "unit": "ns/iter",
            "extra": "iterations: 1120\ncpu: 835054.1071428566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 675046.3875358218,
            "unit": "ns/iter",
            "extra": "iterations: 1396\ncpu: 675020.0573065927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 672234.2370000547,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 672188.5000000043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 668771.3890000283,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 668774.0000000062 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 475605.1118919139,
            "unit": "ns/iter",
            "extra": "iterations: 1850\ncpu: 475577.0270270278 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 657618.0080000426,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 657610.5000000041 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 3716625.4841269264,
            "unit": "ns/iter",
            "extra": "iterations: 252\ncpu: 3716399.603174606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1525479.4003241304,
            "unit": "ns/iter",
            "extra": "iterations: 617\ncpu: 1525423.6628849262 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 6754.990419575535,
            "unit": "ns/iter",
            "extra": "iterations: 124316\ncpu: 6754.8980018662105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 32023.280786650164,
            "unit": "ns/iter",
            "extra": "iterations: 25831\ncpu: 32021.869072045163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 28381.796333944167,
            "unit": "ns/iter",
            "extra": "iterations: 30005\ncpu: 28380.29328445273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 28018.809478548552,
            "unit": "ns/iter",
            "extra": "iterations: 30511\ncpu: 28017.295401658266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 27938.89380588675,
            "unit": "ns/iter",
            "extra": "iterations: 30642\ncpu: 27937.39638404807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 69467.16379793361,
            "unit": "ns/iter",
            "extra": "iterations: 12491\ncpu: 69463.3095828993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 816276.9472774653,
            "unit": "ns/iter",
            "extra": "iterations: 1157\ncpu: 816244.5116681062 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 658002.7480000012,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 657965.0999999985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 655211.7520000138,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 655194.8000000038 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 653019.9239999774,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 652979.2000000043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 467427.5157501055,
            "unit": "ns/iter",
            "extra": "iterations: 1873\ncpu: 467387.5600640671 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 649674.3320000177,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 649643.900000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 549.7065652292348,
            "unit": "ns/iter",
            "extra": "iterations: 1272903\ncpu: 549.6788836227119 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3995.663483386248,
            "unit": "ns/iter",
            "extra": "iterations: 175605\ncpu: 3995.4471683608335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 3125.250361988518,
            "unit": "ns/iter",
            "extra": "iterations: 223764\ncpu: 3125.0527341305974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 3261.7273338657724,
            "unit": "ns/iter",
            "extra": "iterations: 214119\ncpu: 3261.5713691919104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 2420.275351642404,
            "unit": "ns/iter",
            "extra": "iterations: 290494\ncpu: 2420.1367326003365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 19802.818437957903,
            "unit": "ns/iter",
            "extra": "iterations: 35492\ncpu: 19801.60881325356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 44549.767728931016,
            "unit": "ns/iter",
            "extra": "iterations: 15878\ncpu: 44544.835621614984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 10415.460055795778,
            "unit": "ns/iter",
            "extra": "iterations: 67031\ncpu: 10414.948307499479 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 10351.355358677212,
            "unit": "ns/iter",
            "extra": "iterations: 67498\ncpu: 10350.859284719581 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 10381.048744526677,
            "unit": "ns/iter",
            "extra": "iterations: 67146\ncpu: 10380.81791916127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 21563.646123864764,
            "unit": "ns/iter",
            "extra": "iterations: 32842\ncpu: 21563.108215090342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 19933.49565711581,
            "unit": "ns/iter",
            "extra": "iterations: 36957\ncpu: 19932.67310658344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5222.980787575281,
            "unit": "ns/iter",
            "extra": "iterations: 134184\ncpu: 5222.996035294874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 26137.55849972076,
            "unit": "ns/iter",
            "extra": "iterations: 26795\ncpu: 26136.540399328456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 21093.62861615338,
            "unit": "ns/iter",
            "extra": "iterations: 33219\ncpu: 21093.365242783064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 20785.65616978018,
            "unit": "ns/iter",
            "extra": "iterations: 33502\ncpu: 20784.642707898183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 21976.876637451718,
            "unit": "ns/iter",
            "extra": "iterations: 31833\ncpu: 21976.31702949761 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 50855.0615810137,
            "unit": "ns/iter",
            "extra": "iterations: 13738\ncpu: 50852.147328578205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 196211.4649394482,
            "unit": "ns/iter",
            "extra": "iterations: 3551\ncpu: 196207.37820332355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 169822.18663762274,
            "unit": "ns/iter",
            "extra": "iterations: 4131\ncpu: 169822.87581699243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 167519.40524289766,
            "unit": "ns/iter",
            "extra": "iterations: 4158\ncpu: 167513.2034632031 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 168088.66811175324,
            "unit": "ns/iter",
            "extra": "iterations: 4152\ncpu: 168089.4267822729 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 99440.05531067877,
            "unit": "ns/iter",
            "extra": "iterations: 7033\ncpu: 99436.84060856042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 168952.01974952486,
            "unit": "ns/iter",
            "extra": "iterations: 4152\ncpu: 168950.89113680198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 5181.504738354252,
            "unit": "ns/iter",
            "extra": "iterations: 135068\ncpu: 5181.345692540021 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 25729.28145865338,
            "unit": "ns/iter",
            "extra": "iterations: 27258\ncpu: 25728.578765866972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 21021.770368813945,
            "unit": "ns/iter",
            "extra": "iterations: 33323\ncpu: 21021.849773429763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 20713.287894565005,
            "unit": "ns/iter",
            "extra": "iterations: 33613\ncpu: 20711.62050397131 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 21455.289667839745,
            "unit": "ns/iter",
            "extra": "iterations: 32665\ncpu: 21454.119087708594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 50493.06232906225,
            "unit": "ns/iter",
            "extra": "iterations: 13894\ncpu: 50491.341586295384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 196803.1741935454,
            "unit": "ns/iter",
            "extra": "iterations: 3565\ncpu: 196794.89481065678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 166931.71917643916,
            "unit": "ns/iter",
            "extra": "iterations: 4177\ncpu: 166923.17452717086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 165778.88810030278,
            "unit": "ns/iter",
            "extra": "iterations: 4227\ncpu: 165764.37189496204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 167318.70190475156,
            "unit": "ns/iter",
            "extra": "iterations: 4200\ncpu: 167303.92857143088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 97596.37815242767,
            "unit": "ns/iter",
            "extra": "iterations: 7177\ncpu: 97591.0547582559 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 166951.19161676994,
            "unit": "ns/iter",
            "extra": "iterations: 4175\ncpu: 166938.34730538767 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}