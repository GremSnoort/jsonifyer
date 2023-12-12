window.BENCHMARK_DATA = {
  "lastUpdate": 1702381093991,
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
      }
    ]
  }
}