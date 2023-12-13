window.BENCHMARK_DATA = {
  "lastUpdate": 1702468562333,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Parse gcc-9 20.04 Release c++-17": [
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
        "date": 1702397905533,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 625.524426040897,
            "unit": "ns/iter",
            "extra": "iterations: 1111621\ncpu: 625.4879135964505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5786.139140000159,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5785.491999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 11165.971083883229,
            "unit": "ns/iter",
            "extra": "iterations: 74353\ncpu: 11165.150027571182 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 16737.90363639963,
            "unit": "ns/iter",
            "extra": "iterations: 50517\ncpu: 16736.61737632876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 21800.615561356397,
            "unit": "ns/iter",
            "extra": "iterations: 38300\ncpu: 21799.099216710187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 26969.23153745089,
            "unit": "ns/iter",
            "extra": "iterations: 30440\ncpu: 26966.685282522976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 32273.461396408748,
            "unit": "ns/iter",
            "extra": "iterations: 25451\ncpu: 32270.794860712733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 37665.932016849816,
            "unit": "ns/iter",
            "extra": "iterations: 22079\ncpu: 37662.018207346366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 42994.33710407223,
            "unit": "ns/iter",
            "extra": "iterations: 19448\ncpu: 42992.94529000414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 566.8533873952384,
            "unit": "ns/iter",
            "extra": "iterations: 1239566\ncpu: 566.8099157285695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 425.9541043206792,
            "unit": "ns/iter",
            "extra": "iterations: 1638237\ncpu: 425.94178986312767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 425.0830828926049,
            "unit": "ns/iter",
            "extra": "iterations: 1644767\ncpu: 425.07431143742537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 425.9346423116046,
            "unit": "ns/iter",
            "extra": "iterations: 1640618\ncpu: 425.9117600806527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 872.3506209858913,
            "unit": "ns/iter",
            "extra": "iterations: 794382\ncpu: 872.3364829515268 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1452.5753294237795,
            "unit": "ns/iter",
            "extra": "iterations: 546181\ncpu: 1452.508234449753 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 9115.941491786782,
            "unit": "ns/iter",
            "extra": "iterations: 89919\ncpu: 9115.56400760685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 8725.856940268177,
            "unit": "ns/iter",
            "extra": "iterations: 93786\ncpu: 8725.36519309918 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 9726.176241607935,
            "unit": "ns/iter",
            "extra": "iterations: 84004\ncpu: 9725.651159468596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 8605.0048874224,
            "unit": "ns/iter",
            "extra": "iterations: 95756\ncpu: 8604.684823927506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 28134.824243461342,
            "unit": "ns/iter",
            "extra": "iterations: 29245\ncpu: 28133.91007009745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 262712.7706790027,
            "unit": "ns/iter",
            "extra": "iterations: 3240\ncpu: 262708.36419753166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 205498.44038417074,
            "unit": "ns/iter",
            "extra": "iterations: 4269\ncpu: 205488.80299836013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 205764.44334743088,
            "unit": "ns/iter",
            "extra": "iterations: 4254\ncpu: 205757.12270803994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 205877.7366060936,
            "unit": "ns/iter",
            "extra": "iterations: 4237\ncpu: 205867.07576115197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 108757.09916635498,
            "unit": "ns/iter",
            "extra": "iterations: 8037\ncpu: 108749.98133631921 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 196037.15032679378,
            "unit": "ns/iter",
            "extra": "iterations: 4437\ncpu: 196019.54022988488 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5263.0204692184125,
            "unit": "ns/iter",
            "extra": "iterations: 154427\ncpu: 5262.531811147019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 25349.117693452277,
            "unit": "ns/iter",
            "extra": "iterations: 32967\ncpu: 25346.61327994659 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 21441.676338194626,
            "unit": "ns/iter",
            "extra": "iterations: 38877\ncpu: 21439.859042621643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 21910.405939545402,
            "unit": "ns/iter",
            "extra": "iterations: 37747\ncpu: 21908.92256338249 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 20572.69301617394,
            "unit": "ns/iter",
            "extra": "iterations: 40064\ncpu: 20571.138678115076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 45899.07996257703,
            "unit": "ns/iter",
            "extra": "iterations: 18171\ncpu: 45895.45429530552 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 283545.2923728955,
            "unit": "ns/iter",
            "extra": "iterations: 3068\ncpu: 283525.74967405346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 220433.52553459926,
            "unit": "ns/iter",
            "extra": "iterations: 3975\ncpu: 220416.37735849014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 217337.00100075483,
            "unit": "ns/iter",
            "extra": "iterations: 3997\ncpu: 217318.98924193246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 214977.53537853068,
            "unit": "ns/iter",
            "extra": "iterations: 4042\ncpu: 214967.36763978293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 119696.78908392784,
            "unit": "ns/iter",
            "extra": "iterations: 7292\ncpu: 119687.28743828896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 209496.5239816831,
            "unit": "ns/iter",
            "extra": "iterations: 4149\ncpu: 209485.51458182788 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 845035.885816234,
            "unit": "ns/iter",
            "extra": "iterations: 1121\ncpu: 844964.4959857261 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 479205.6679245233,
            "unit": "ns/iter",
            "extra": "iterations: 1855\ncpu: 479189.75741239893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 1461.3175774235438,
            "unit": "ns/iter",
            "extra": "iterations: 545700\ncpu: 1461.2924683892163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 8707.51695094803,
            "unit": "ns/iter",
            "extra": "iterations: 94390\ncpu: 8707.323869053933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 8223.18794973011,
            "unit": "ns/iter",
            "extra": "iterations: 99782\ncpu: 8223.017177446858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 9179.777990077411,
            "unit": "ns/iter",
            "extra": "iterations: 89496\ncpu: 9179.620318226487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 8152.4703362225155,
            "unit": "ns/iter",
            "extra": "iterations: 101302\ncpu: 8152.067086533349 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 26841.136350385084,
            "unit": "ns/iter",
            "extra": "iterations: 30869\ncpu: 26840.393274806465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 265469.194960999,
            "unit": "ns/iter",
            "extra": "iterations: 3334\ncpu: 265460.85782843473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 199883.97014585213,
            "unit": "ns/iter",
            "extra": "iterations: 4388\ncpu: 199880.15041021002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 200578.07662748243,
            "unit": "ns/iter",
            "extra": "iterations: 4424\ncpu: 200575.83634719643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 198205.69792606105,
            "unit": "ns/iter",
            "extra": "iterations: 4436\ncpu: 198196.95671776443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 101109.52416014884,
            "unit": "ns/iter",
            "extra": "iterations: 8692\ncpu: 101107.44362632252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 191418.286055095,
            "unit": "ns/iter",
            "extra": "iterations: 4611\ncpu: 191414.00997614392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 191.83680128100758,
            "unit": "ns/iter",
            "extra": "iterations: 3652112\ncpu: 191.833191315053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1473.1094928047753,
            "unit": "ns/iter",
            "extra": "iterations: 476424\ncpu: 1473.0439692374878 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1219.5851462577955,
            "unit": "ns/iter",
            "extra": "iterations: 573337\ncpu: 1219.5211542251773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1276.5547863909537,
            "unit": "ns/iter",
            "extra": "iterations: 547636\ncpu: 1276.5532214828827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 914.7010974958067,
            "unit": "ns/iter",
            "extra": "iterations: 760094\ncpu: 914.6648967101386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 8998.427278374194,
            "unit": "ns/iter",
            "extra": "iterations: 78883\ncpu: 8998.289872342502 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 12070.974140174287,
            "unit": "ns/iter",
            "extra": "iterations: 57657\ncpu: 12070.633227535272 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2878.4427290140934,
            "unit": "ns/iter",
            "extra": "iterations: 243282\ncpu: 2878.400374873602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2910.8422035252,
            "unit": "ns/iter",
            "extra": "iterations: 241032\ncpu: 2910.8363204885836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2868.786237273519,
            "unit": "ns/iter",
            "extra": "iterations: 242699\ncpu: 2868.7477080663716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5468.647871835033,
            "unit": "ns/iter",
            "extra": "iterations: 126400\ncpu: 5468.487341772147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5445.220199244083,
            "unit": "ns/iter",
            "extra": "iterations: 128084\ncpu: 5445.069641797599 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1847.3951767767514,
            "unit": "ns/iter",
            "extra": "iterations: 378585\ncpu: 1847.389093598539 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10046.22887683616,
            "unit": "ns/iter",
            "extra": "iterations: 69509\ncpu: 10045.625746306334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 7956.033963676909,
            "unit": "ns/iter",
            "extra": "iterations: 88153\ncpu: 7955.90961169791 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 7991.580619293809,
            "unit": "ns/iter",
            "extra": "iterations: 87293\ncpu: 7991.33607505756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 7786.142060938602,
            "unit": "ns/iter",
            "extra": "iterations: 89532\ncpu: 7785.76933386942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 18106.343793585274,
            "unit": "ns/iter",
            "extra": "iterations: 38718\ncpu: 18106.05403171665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 56496.72237479561,
            "unit": "ns/iter",
            "extra": "iterations: 12380\ncpu: 56493.16639741494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 46238.60671729802,
            "unit": "ns/iter",
            "extra": "iterations: 15274\ncpu: 46237.78970800079 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 45905.53628132883,
            "unit": "ns/iter",
            "extra": "iterations: 15242\ncpu: 45903.33289594584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 45306.98795811844,
            "unit": "ns/iter",
            "extra": "iterations: 15280\ncpu: 45306.93062827263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 26562.428081405877,
            "unit": "ns/iter",
            "extra": "iterations: 26238\ncpu: 26562.066468481185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 44353.0681500332,
            "unit": "ns/iter",
            "extra": "iterations: 15730\ncpu: 44350.01271455747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 2175.0556007571113,
            "unit": "ns/iter",
            "extra": "iterations: 328161\ncpu: 2175.0171409765367 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 10575.093008436013,
            "unit": "ns/iter",
            "extra": "iterations: 65908\ncpu: 10575.07131152499 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 8509.325524569147,
            "unit": "ns/iter",
            "extra": "iterations: 82258\ncpu: 8508.890320698196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 9034.411023202661,
            "unit": "ns/iter",
            "extra": "iterations: 78616\ncpu: 9034.387402055563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 8935.681438938987,
            "unit": "ns/iter",
            "extra": "iterations: 77307\ncpu: 8935.258126689723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 18307.56297265321,
            "unit": "ns/iter",
            "extra": "iterations: 38215\ncpu: 18307.12809106351 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 57063.47903212074,
            "unit": "ns/iter",
            "extra": "iterations: 12233\ncpu: 57063.40227254157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 46382.07379319398,
            "unit": "ns/iter",
            "extra": "iterations: 15164\ncpu: 46381.34397256601 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 45333.06125365768,
            "unit": "ns/iter",
            "extra": "iterations: 15395\ncpu: 45330.97759012662 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 46229.46375379149,
            "unit": "ns/iter",
            "extra": "iterations: 15174\ncpu: 46229.38579148602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 26303.049472246676,
            "unit": "ns/iter",
            "extra": "iterations: 26338\ncpu: 26301.628825271586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 45456.613785911664,
            "unit": "ns/iter",
            "extra": "iterations: 15349\ncpu: 45455.834256303475 ns\nthreads: 1"
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
        "date": 1702409092134,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 631.8196720275495,
            "unit": "ns/iter",
            "extra": "iterations: 1107593\ncpu: 631.8252282201134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5846.416415456505,
            "unit": "ns/iter",
            "extra": "iterations: 138662\ncpu: 5846.5073343814465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 11411.592650465438,
            "unit": "ns/iter",
            "extra": "iterations: 72957\ncpu: 11411.812437463164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 17111.81067500711,
            "unit": "ns/iter",
            "extra": "iterations: 49555\ncpu: 17112.42457875089 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 22547.564217079806,
            "unit": "ns/iter",
            "extra": "iterations: 36945\ncpu: 22548.266341859508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 27956.882589733697,
            "unit": "ns/iter",
            "extra": "iterations: 29810\ncpu: 27958.41999329084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 33264.78280488826,
            "unit": "ns/iter",
            "extra": "iterations: 25042\ncpu: 33264.43574794347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 38324.43273935983,
            "unit": "ns/iter",
            "extra": "iterations: 21662\ncpu: 38322.72181700672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 43286.28666841926,
            "unit": "ns/iter",
            "extra": "iterations: 19015\ncpu: 43284.80147252163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 583.4873021071004,
            "unit": "ns/iter",
            "extra": "iterations: 1200081\ncpu: 583.4815316632786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 439.42205532976874,
            "unit": "ns/iter",
            "extra": "iterations: 1593175\ncpu: 439.41638551948114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 447.5603380268185,
            "unit": "ns/iter",
            "extra": "iterations: 1562953\ncpu: 447.5546609526962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 446.5755106020161,
            "unit": "ns/iter",
            "extra": "iterations: 1579606\ncpu: 446.5769312094283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 877.3425421431807,
            "unit": "ns/iter",
            "extra": "iterations: 797461\ncpu: 877.3256623207889 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1378.2611983121183,
            "unit": "ns/iter",
            "extra": "iterations: 571604\ncpu: 1378.20991455623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 8488.755590190676,
            "unit": "ns/iter",
            "extra": "iterations: 96240\ncpu: 8488.584788029937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 9004.483566658888,
            "unit": "ns/iter",
            "extra": "iterations: 96146\ncpu: 9004.335073741995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 9105.94709721774,
            "unit": "ns/iter",
            "extra": "iterations: 90241\ncpu: 9106.203388703581 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 8185.739572552301,
            "unit": "ns/iter",
            "extra": "iterations: 99521\ncpu: 8185.783904904508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 27212.385829624698,
            "unit": "ns/iter",
            "extra": "iterations: 30345\ncpu: 27212.829131652714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 269810.74004976,
            "unit": "ns/iter",
            "extra": "iterations: 3216\ncpu: 269813.05970149214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 210712.97739297745,
            "unit": "ns/iter",
            "extra": "iterations: 4158\ncpu: 210718.8311688311 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 210169.173118529,
            "unit": "ns/iter",
            "extra": "iterations: 4159\ncpu: 210167.4681413803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 210070.5672683554,
            "unit": "ns/iter",
            "extra": "iterations: 4155\ncpu: 210071.0228640191 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 106482.3491463416,
            "unit": "ns/iter",
            "extra": "iterations: 8200\ncpu: 106481.341463415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 201238.11321627224,
            "unit": "ns/iter",
            "extra": "iterations: 4328\ncpu: 201240.54990757856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5178.052452385303,
            "unit": "ns/iter",
            "extra": "iterations: 157724\ncpu: 5178.209403768609 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 25348.850266398364,
            "unit": "ns/iter",
            "extra": "iterations: 32658\ncpu: 25349.01096209197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 21225.856743571916,
            "unit": "ns/iter",
            "extra": "iterations: 39356\ncpu: 21226.07480435008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 21773.782770658712,
            "unit": "ns/iter",
            "extra": "iterations: 38388\ncpu: 21773.59331040957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 20806.68254522677,
            "unit": "ns/iter",
            "extra": "iterations: 40075\ncpu: 20806.562694947035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 43374.076671071045,
            "unit": "ns/iter",
            "extra": "iterations: 18925\ncpu: 43372.61294583872 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 293368.6941731163,
            "unit": "ns/iter",
            "extra": "iterations: 2969\ncpu: 293367.2280229017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 224500.5309689018,
            "unit": "ns/iter",
            "extra": "iterations: 3891\ncpu: 224498.14957594572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 223932.67121524076,
            "unit": "ns/iter",
            "extra": "iterations: 3884\ncpu: 223937.22966014416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 223773.6849385239,
            "unit": "ns/iter",
            "extra": "iterations: 3904\ncpu: 223776.46004098322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 118146.95344129649,
            "unit": "ns/iter",
            "extra": "iterations: 7410\ncpu: 118145.91093117459 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 214258.13159192362,
            "unit": "ns/iter",
            "extra": "iterations: 4058\ncpu: 214246.32824051243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 842252.849999982,
            "unit": "ns/iter",
            "extra": "iterations: 1120\ncpu: 842231.4285714272 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 468205.1189710662,
            "unit": "ns/iter",
            "extra": "iterations: 1866\ncpu: 468185.26259378303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 1352.6758586295614,
            "unit": "ns/iter",
            "extra": "iterations: 587506\ncpu: 1352.663972793468 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 8302.253635693809,
            "unit": "ns/iter",
            "extra": "iterations: 99087\ncpu: 8302.00127160985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 7991.723158802964,
            "unit": "ns/iter",
            "extra": "iterations: 103153\ncpu: 7991.678380657859 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 8408.28695873921,
            "unit": "ns/iter",
            "extra": "iterations: 98035\ncpu: 8408.145050237146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 7290.516741959641,
            "unit": "ns/iter",
            "extra": "iterations: 111785\ncpu: 7290.459363957627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 26531.676784978394,
            "unit": "ns/iter",
            "extra": "iterations: 31527\ncpu: 26529.891838741318 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 277666.9033166373,
            "unit": "ns/iter",
            "extra": "iterations: 3196\ncpu: 277658.51063829864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 210926.3594382373,
            "unit": "ns/iter",
            "extra": "iterations: 4201\ncpu: 210910.66412758717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 209651.21013977213,
            "unit": "ns/iter",
            "extra": "iterations: 4221\ncpu: 209645.93698175746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 209199.5471519808,
            "unit": "ns/iter",
            "extra": "iterations: 4231\ncpu: 209192.55495154782 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 102271.81314478104,
            "unit": "ns/iter",
            "extra": "iterations: 8627\ncpu: 102271.92535064327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 199299.59719710157,
            "unit": "ns/iter",
            "extra": "iterations: 4424\ncpu: 199296.04430379713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 198.7773487546632,
            "unit": "ns/iter",
            "extra": "iterations: 3517811\ncpu: 198.77386818109346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1465.2217351456686,
            "unit": "ns/iter",
            "extra": "iterations: 477908\ncpu: 1465.1370138185514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1084.7825014706032,
            "unit": "ns/iter",
            "extra": "iterations: 644317\ncpu: 1084.7540884378363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1253.3425135465204,
            "unit": "ns/iter",
            "extra": "iterations: 558629\ncpu: 1253.262182951476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 900.2437000454777,
            "unit": "ns/iter",
            "extra": "iterations: 766196\ncpu: 900.2726456415904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 8966.529114763372,
            "unit": "ns/iter",
            "extra": "iterations: 78431\ncpu: 8966.750392064403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 13200.240979963824,
            "unit": "ns/iter",
            "extra": "iterations: 53104\ncpu: 13199.685522747797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2990.4750519662216,
            "unit": "ns/iter",
            "extra": "iterations: 235730\ncpu: 2990.4530607050515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2909.888670372543,
            "unit": "ns/iter",
            "extra": "iterations: 240511\ncpu: 2909.9941374822847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2947.149441722522,
            "unit": "ns/iter",
            "extra": "iterations: 237785\ncpu: 2947.1627730933556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5519.652205094271,
            "unit": "ns/iter",
            "extra": "iterations: 126888\ncpu: 5519.411607086579 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5554.161905820354,
            "unit": "ns/iter",
            "extra": "iterations: 125993\ncpu: 5554.2680942592415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1854.5039665143677,
            "unit": "ns/iter",
            "extra": "iterations: 378670\ncpu: 1854.487284442906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 9984.298326492746,
            "unit": "ns/iter",
            "extra": "iterations: 69196\ncpu: 9984.486097462144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8110.2214983711265,
            "unit": "ns/iter",
            "extra": "iterations: 86267\ncpu: 8110.301737628613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 8077.225187550975,
            "unit": "ns/iter",
            "extra": "iterations: 87043\ncpu: 8077.362912583561 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 7997.109642319909,
            "unit": "ns/iter",
            "extra": "iterations: 87676\ncpu: 7997.3002874218555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 18206.094424506693,
            "unit": "ns/iter",
            "extra": "iterations: 38454\ncpu: 18206.241223279667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 58215.272523641856,
            "unit": "ns/iter",
            "extra": "iterations: 12054\ncpu: 58217.38841878245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 47337.84528327494,
            "unit": "ns/iter",
            "extra": "iterations: 14756\ncpu: 47337.39495798263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 46765.69528698267,
            "unit": "ns/iter",
            "extra": "iterations: 15001\ncpu: 46765.83561095871 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 53503.703000001224,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 53502.599999998776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 26832.479612248368,
            "unit": "ns/iter",
            "extra": "iterations: 25996\ncpu: 26833.370518541557 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 45885.66629537379,
            "unit": "ns/iter",
            "extra": "iterations: 15262\ncpu: 45886.135499934084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 2290.0079275492485,
            "unit": "ns/iter",
            "extra": "iterations: 307409\ncpu: 2290.036401016203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 10872.884191090294,
            "unit": "ns/iter",
            "extra": "iterations: 63907\ncpu: 10872.835526624607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 9441.036260502291,
            "unit": "ns/iter",
            "extra": "iterations: 75454\ncpu: 9441.358973679336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 9632.420555236527,
            "unit": "ns/iter",
            "extra": "iterations: 72906\ncpu: 9632.508984171303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 9314.435207337228,
            "unit": "ns/iter",
            "extra": "iterations: 75240\ncpu: 9314.46438064864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 19015.531443465054,
            "unit": "ns/iter",
            "extra": "iterations: 36828\ncpu: 19015.577821223018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 58969.28430960955,
            "unit": "ns/iter",
            "extra": "iterations: 11899\ncpu: 58969.01420287406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 48098.17022600205,
            "unit": "ns/iter",
            "extra": "iterations: 14469\ncpu: 48098.486419241184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 48592.84794511106,
            "unit": "ns/iter",
            "extra": "iterations: 14429\ncpu: 48593.23584447924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 46972.49929525509,
            "unit": "ns/iter",
            "extra": "iterations: 14899\ncpu: 46973.5150010075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 27241.31140282963,
            "unit": "ns/iter",
            "extra": "iterations: 25748\ncpu: 27242.18968463581 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 47355.4481033178,
            "unit": "ns/iter",
            "extra": "iterations: 14789\ncpu: 47354.24978024206 ns\nthreads: 1"
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
        "date": 1702412568042,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 628.996832568201,
            "unit": "ns/iter",
            "extra": "iterations: 1115099\ncpu: 628.9889059177706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5591.295980000268,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5591.153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10739.66464778957,
            "unit": "ns/iter",
            "extra": "iterations: 77766\ncpu: 10739.128925237248 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 16042.130111596194,
            "unit": "ns/iter",
            "extra": "iterations: 52063\ncpu: 16041.962622207708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 21180.677612931064,
            "unit": "ns/iter",
            "extra": "iterations: 39161\ncpu: 21179.757922422814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 26500.12665885378,
            "unit": "ns/iter",
            "extra": "iterations: 31573\ncpu: 26499.170177050008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 31704.380925614365,
            "unit": "ns/iter",
            "extra": "iterations: 26685\ncpu: 31703.00168634064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 36820.37537203978,
            "unit": "ns/iter",
            "extra": "iterations: 22511\ncpu: 36818.98627337746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 41671.81248488784,
            "unit": "ns/iter",
            "extra": "iterations: 20681\ncpu: 41671.355350321566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 568.819441665323,
            "unit": "ns/iter",
            "extra": "iterations: 1224391\ncpu: 568.7723121127146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 427.41020178645743,
            "unit": "ns/iter",
            "extra": "iterations: 1639654\ncpu: 427.3930353598994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 436.2702002867646,
            "unit": "ns/iter",
            "extra": "iterations: 1605398\ncpu: 436.2440964795021 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 427.995392623571,
            "unit": "ns/iter",
            "extra": "iterations: 1635638\ncpu: 427.98797777992365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 911.6717035890752,
            "unit": "ns/iter",
            "extra": "iterations: 770444\ncpu: 911.63718583051 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1422.9827378671334,
            "unit": "ns/iter",
            "extra": "iterations: 553292\ncpu: 1422.9777405059178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 8582.16746008395,
            "unit": "ns/iter",
            "extra": "iterations: 94948\ncpu: 8581.803724143745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 8354.27731981782,
            "unit": "ns/iter",
            "extra": "iterations: 98262\ncpu: 8354.01681219595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 9588.895176502096,
            "unit": "ns/iter",
            "extra": "iterations: 85353\ncpu: 9588.298009443146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 7976.479397991937,
            "unit": "ns/iter",
            "extra": "iterations: 101859\ncpu: 7976.224977665222 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 26775.18331713801,
            "unit": "ns/iter",
            "extra": "iterations: 30870\ncpu: 26773.83219954646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 255520.0094983842,
            "unit": "ns/iter",
            "extra": "iterations: 3369\ncpu: 255512.58533689455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 195665.71027175666,
            "unit": "ns/iter",
            "extra": "iterations: 4342\ncpu: 195656.54076462428 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 200655.18476015693,
            "unit": "ns/iter",
            "extra": "iterations: 4357\ncpu: 200649.3229286208 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 197597.76985040845,
            "unit": "ns/iter",
            "extra": "iterations: 4345\ncpu: 197587.22669735336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 105306.68386706163,
            "unit": "ns/iter",
            "extra": "iterations: 8275\ncpu: 105304.65256797592 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 196016.18355555832,
            "unit": "ns/iter",
            "extra": "iterations: 4500\ncpu: 196010.26666666617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5408.789881629828,
            "unit": "ns/iter",
            "extra": "iterations: 151981\ncpu: 5408.682006303428 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 25514.627329193674,
            "unit": "ns/iter",
            "extra": "iterations: 32683\ncpu: 25513.285194137603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 21492.72475998752,
            "unit": "ns/iter",
            "extra": "iterations: 38748\ncpu: 21492.151852998864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 22185.559776830672,
            "unit": "ns/iter",
            "extra": "iterations: 37640\ncpu: 22184.633368756604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 21017.213874713063,
            "unit": "ns/iter",
            "extra": "iterations: 39972\ncpu: 21016.82177524272 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 44125.43226209696,
            "unit": "ns/iter",
            "extra": "iterations: 19199\ncpu: 44124.25647169107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 281171.8967513622,
            "unit": "ns/iter",
            "extra": "iterations: 3109\ncpu: 281163.0749437118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 216496.53145982974,
            "unit": "ns/iter",
            "extra": "iterations: 4021\ncpu: 216489.03257896032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 216068.98144024602,
            "unit": "ns/iter",
            "extra": "iterations: 4041\ncpu: 216061.09873793597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 214448.29714424815,
            "unit": "ns/iter",
            "extra": "iterations: 4062\ncpu: 214441.35893648502 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 118217.75854153176,
            "unit": "ns/iter",
            "extra": "iterations: 7405\ncpu: 118211.76232275485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 205953.27309333434,
            "unit": "ns/iter",
            "extra": "iterations: 4222\ncpu: 205948.05779251404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 837457.5154729846,
            "unit": "ns/iter",
            "extra": "iterations: 1131\ncpu: 837414.5004420856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 468172.756984688,
            "unit": "ns/iter",
            "extra": "iterations: 1897\ncpu: 468161.6236162342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 1434.5583506595497,
            "unit": "ns/iter",
            "extra": "iterations: 552633\ncpu: 1434.4764065844736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 8644.412260464296,
            "unit": "ns/iter",
            "extra": "iterations: 94923\ncpu: 8644.307491335088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 8270.918283634994,
            "unit": "ns/iter",
            "extra": "iterations: 99466\ncpu: 8270.650272454906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 8957.144755909503,
            "unit": "ns/iter",
            "extra": "iterations: 92466\ncpu: 8956.922544502853 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 7515.098908814819,
            "unit": "ns/iter",
            "extra": "iterations: 108231\ncpu: 7514.802598146599 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 26085.360754554957,
            "unit": "ns/iter",
            "extra": "iterations: 32019\ncpu: 26084.624754052278 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 270689.6380130895,
            "unit": "ns/iter",
            "extra": "iterations: 3362\ncpu: 270089.94646044006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 199460.78655233997,
            "unit": "ns/iter",
            "extra": "iterations: 4432\ncpu: 199457.28790613773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 198968.4178667862,
            "unit": "ns/iter",
            "extra": "iterations: 4444\ncpu: 198955.78307830842 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 197000.27359966037,
            "unit": "ns/iter",
            "extra": "iterations: 4481\ncpu: 196998.21468422317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 101608.40905962963,
            "unit": "ns/iter",
            "extra": "iterations: 8720\ncpu: 101599.36926605455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 195494.07198442132,
            "unit": "ns/iter",
            "extra": "iterations: 4626\ncpu: 195493.514915694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 205.5605681998682,
            "unit": "ns/iter",
            "extra": "iterations: 3423232\ncpu: 205.560037999178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1435.0313743305862,
            "unit": "ns/iter",
            "extra": "iterations: 488616\ncpu: 1435.0275062625842 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1264.1526384862584,
            "unit": "ns/iter",
            "extra": "iterations: 553196\ncpu: 1264.0845197723763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1233.1187930356161,
            "unit": "ns/iter",
            "extra": "iterations: 567407\ncpu: 1233.066916692957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 866.0716671409842,
            "unit": "ns/iter",
            "extra": "iterations: 811683\ncpu: 866.016289610603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 8719.369969925116,
            "unit": "ns/iter",
            "extra": "iterations: 80466\ncpu: 8718.839012750701 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 12425.47075727803,
            "unit": "ns/iter",
            "extra": "iterations: 56373\ncpu: 12425.441257339502 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2864.7957949735187,
            "unit": "ns/iter",
            "extra": "iterations: 244612\ncpu: 2864.787500204395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2853.470415079333,
            "unit": "ns/iter",
            "extra": "iterations: 242556\ncpu: 2853.394679991444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2833.837901076504,
            "unit": "ns/iter",
            "extra": "iterations: 248737\ncpu: 2833.832119869598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5482.464927172196,
            "unit": "ns/iter",
            "extra": "iterations: 129003\ncpu: 5482.224444392795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5310.550596347825,
            "unit": "ns/iter",
            "extra": "iterations: 131383\ncpu: 5310.261601577103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1833.872375947914,
            "unit": "ns/iter",
            "extra": "iterations: 382138\ncpu: 1833.7940743919605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10142.797930206303,
            "unit": "ns/iter",
            "extra": "iterations: 69862\ncpu: 10142.407889840015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 7942.004392320163,
            "unit": "ns/iter",
            "extra": "iterations: 88336\ncpu: 7942.010052526633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 7998.056863611034,
            "unit": "ns/iter",
            "extra": "iterations: 88299\ncpu: 7998.029422756687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 7854.123373074781,
            "unit": "ns/iter",
            "extra": "iterations: 89663\ncpu: 7853.7100030113525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 18282.65630564728,
            "unit": "ns/iter",
            "extra": "iterations: 38188\ncpu: 18281.711532418674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 56354.37025113064,
            "unit": "ns/iter",
            "extra": "iterations: 12424\ncpu: 56350.57147456595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 45265.15526671442,
            "unit": "ns/iter",
            "extra": "iterations: 15541\ncpu: 45263.18126246657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 44790.68821875463,
            "unit": "ns/iter",
            "extra": "iterations: 15652\ncpu: 44788.180424226724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 44266.51260237108,
            "unit": "ns/iter",
            "extra": "iterations: 15751\ncpu: 44265.72281124993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 26637.533125548962,
            "unit": "ns/iter",
            "extra": "iterations: 26309\ncpu: 26637.05195940569 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 43770.34120603415,
            "unit": "ns/iter",
            "extra": "iterations: 15920\ncpu: 43770.270100502414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1886.4999472520149,
            "unit": "ns/iter",
            "extra": "iterations: 369683\ncpu: 1886.4805793071346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 10797.64506371919,
            "unit": "ns/iter",
            "extra": "iterations: 65130\ncpu: 10797.27161062508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 9897.8405245053,
            "unit": "ns/iter",
            "extra": "iterations: 70619\ncpu: 9897.439782494801 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 9420.549801707757,
            "unit": "ns/iter",
            "extra": "iterations: 74385\ncpu: 9419.92874907575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 9695.255606194636,
            "unit": "ns/iter",
            "extra": "iterations: 71751\ncpu: 9694.638402252218 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 19582.97556875536,
            "unit": "ns/iter",
            "extra": "iterations: 35692\ncpu: 19582.09963016927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 55136.67493639009,
            "unit": "ns/iter",
            "extra": "iterations: 12576\ncpu: 55135.93352417263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 45020.453598423475,
            "unit": "ns/iter",
            "extra": "iterations: 15743\ncpu: 45018.6114463567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 45673.092888331965,
            "unit": "ns/iter",
            "extra": "iterations: 15341\ncpu: 45670.55602633458 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 44027.75411898124,
            "unit": "ns/iter",
            "extra": "iterations: 15902\ncpu: 44025.05974091294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 27999.246934649007,
            "unit": "ns/iter",
            "extra": "iterations: 25201\ncpu: 27997.73421689607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 45774.71866924763,
            "unit": "ns/iter",
            "extra": "iterations: 15480\ncpu: 45772.771317829414 ns\nthreads: 1"
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
        "date": 1702416016256,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 617.566816958029,
            "unit": "ns/iter",
            "extra": "iterations: 1137346\ncpu: 617.5589486400797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5403.424489999793,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5403.102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10698.060117877902,
            "unit": "ns/iter",
            "extra": "iterations: 78895\ncpu: 10697.560048165284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 15968.240864327368,
            "unit": "ns/iter",
            "extra": "iterations: 52295\ncpu: 15967.824839850846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 20815.923020238246,
            "unit": "ns/iter",
            "extra": "iterations: 37997\ncpu: 20814.780114219546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 25767.380872534803,
            "unit": "ns/iter",
            "extra": "iterations: 32205\ncpu: 25765.160689333967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 31689.591519856454,
            "unit": "ns/iter",
            "extra": "iterations: 26792\ncpu: 31686.92146909523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 36530.40631395411,
            "unit": "ns/iter",
            "extra": "iterations: 22965\ncpu: 36527.16307424342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 41053.91811377997,
            "unit": "ns/iter",
            "extra": "iterations: 20443\ncpu: 41050.3742112215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 566.4210134650469,
            "unit": "ns/iter",
            "extra": "iterations: 1226880\ncpu: 566.3656592331768 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 429.9130155046296,
            "unit": "ns/iter",
            "extra": "iterations: 1630417\ncpu: 429.9078701951719 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 441.2688587289685,
            "unit": "ns/iter",
            "extra": "iterations: 1589158\ncpu: 441.2349181138696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 429.9126439161583,
            "unit": "ns/iter",
            "extra": "iterations: 1622646\ncpu: 429.8948754072053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 882.6262403709208,
            "unit": "ns/iter",
            "extra": "iterations: 791094\ncpu: 882.5790614010486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1414.763672749823,
            "unit": "ns/iter",
            "extra": "iterations: 558154\ncpu: 1414.7453928485697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 9309.515809120843,
            "unit": "ns/iter",
            "extra": "iterations: 88936\ncpu: 9308.918773050296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 8550.707667029315,
            "unit": "ns/iter",
            "extra": "iterations: 95552\ncpu: 8550.200937709318 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 9550.941845096677,
            "unit": "ns/iter",
            "extra": "iterations: 87009\ncpu: 9550.277557494037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 8294.725039037185,
            "unit": "ns/iter",
            "extra": "iterations: 65322\ncpu: 8294.04794709288 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 26768.5512453652,
            "unit": "ns/iter",
            "extra": "iterations: 30754\ncpu: 26766.89861481439 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 256559.9866151138,
            "unit": "ns/iter",
            "extra": "iterations: 3362\ncpu: 256541.01725163622 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 200030.48172833663,
            "unit": "ns/iter",
            "extra": "iterations: 4351\ncpu: 200016.57090324006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 196038.09217750284,
            "unit": "ns/iter",
            "extra": "iterations: 4372\ncpu: 196025.1601097897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 200037.78405241112,
            "unit": "ns/iter",
            "extra": "iterations: 4427\ncpu: 200024.57646261583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 105203.80336195894,
            "unit": "ns/iter",
            "extra": "iterations: 8269\ncpu: 105199.57673237388 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 191803.84841130424,
            "unit": "ns/iter",
            "extra": "iterations: 4532\ncpu: 191794.85878199537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5233.157103627818,
            "unit": "ns/iter",
            "extra": "iterations: 159137\ncpu: 5233.026888781366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 24786.16526910393,
            "unit": "ns/iter",
            "extra": "iterations: 33630\ncpu: 24784.781445138204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 20856.063110687966,
            "unit": "ns/iter",
            "extra": "iterations: 39914\ncpu: 20855.28636568621 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 21729.929129808635,
            "unit": "ns/iter",
            "extra": "iterations: 38888\ncpu: 21728.2555029829 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 20880.94969176271,
            "unit": "ns/iter",
            "extra": "iterations: 40391\ncpu: 20880.567453145588 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 44118.245099088825,
            "unit": "ns/iter",
            "extra": "iterations: 18670\ncpu: 44114.86877343325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 275825.7132446084,
            "unit": "ns/iter",
            "extra": "iterations: 3156\ncpu: 275808.8403041829 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 213448.0951086892,
            "unit": "ns/iter",
            "extra": "iterations: 4048\ncpu: 213440.58794466394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 214166.71674876453,
            "unit": "ns/iter",
            "extra": "iterations: 4060\ncpu: 214154.45812807916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 212042.34683915178,
            "unit": "ns/iter",
            "extra": "iterations: 4097\ncpu: 212033.24383695368 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 117142.91241462002,
            "unit": "ns/iter",
            "extra": "iterations: 7467\ncpu: 117132.63693585154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 203666.00658978705,
            "unit": "ns/iter",
            "extra": "iterations: 4249\ncpu: 203654.8599670514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 835084.3497797613,
            "unit": "ns/iter",
            "extra": "iterations: 1135\ncpu: 835034.713656385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 461617.98537859344,
            "unit": "ns/iter",
            "extra": "iterations: 1915\ncpu: 461579.1644908624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 1484.4328035497256,
            "unit": "ns/iter",
            "extra": "iterations: 540661\ncpu: 1484.3715378028012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 9134.282359648112,
            "unit": "ns/iter",
            "extra": "iterations: 91217\ncpu: 9133.730554611528 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 8354.181832001981,
            "unit": "ns/iter",
            "extra": "iterations: 98668\ncpu: 8353.530019864638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 9171.367305773834,
            "unit": "ns/iter",
            "extra": "iterations: 90230\ncpu: 9171.00299235291 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 8068.293037647369,
            "unit": "ns/iter",
            "extra": "iterations: 102451\ncpu: 8067.833403285414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 25949.899218556464,
            "unit": "ns/iter",
            "extra": "iterations: 32248\ncpu: 25948.319275613976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 262677.0843517147,
            "unit": "ns/iter",
            "extra": "iterations: 3355\ncpu: 262658.24143070093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 197732.68273997464,
            "unit": "ns/iter",
            "extra": "iterations: 4438\ncpu: 197724.20009013018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 196127.18289680767,
            "unit": "ns/iter",
            "extra": "iterations: 4467\ncpu: 196114.34967539748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 195236.54072096263,
            "unit": "ns/iter",
            "extra": "iterations: 4494\ncpu: 195227.90387182892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 101199.91044431667,
            "unit": "ns/iter",
            "extra": "iterations: 8665\ncpu: 101192.63704558542 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 189037.02194493034,
            "unit": "ns/iter",
            "extra": "iterations: 4648\ncpu: 189026.78571428583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 205.22799419090725,
            "unit": "ns/iter",
            "extra": "iterations: 3422903\ncpu: 205.22062705253475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1434.6382703495865,
            "unit": "ns/iter",
            "extra": "iterations: 487798\ncpu: 1434.5694324289934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1253.3161285929514,
            "unit": "ns/iter",
            "extra": "iterations: 558102\ncpu: 1253.2490476651183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1204.278311672205,
            "unit": "ns/iter",
            "extra": "iterations: 582304\ncpu: 1204.1864730450109 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 887.4242671071878,
            "unit": "ns/iter",
            "extra": "iterations: 785722\ncpu: 887.3851056735153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 8665.358384716797,
            "unit": "ns/iter",
            "extra": "iterations: 80927\ncpu: 8665.25634213546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 11799.567030028224,
            "unit": "ns/iter",
            "extra": "iterations: 59078\ncpu: 11798.84220860556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2825.1090400854814,
            "unit": "ns/iter",
            "extra": "iterations: 246845\ncpu: 2824.9338653811096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2835.678927864087,
            "unit": "ns/iter",
            "extra": "iterations: 247991\ncpu: 2835.3944296365567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2811.95945224836,
            "unit": "ns/iter",
            "extra": "iterations: 249237\ncpu: 2811.877851201857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5368.700544879991,
            "unit": "ns/iter",
            "extra": "iterations: 131038\ncpu: 5368.2832460812915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5321.541634649832,
            "unit": "ns/iter",
            "extra": "iterations: 131441\ncpu: 5321.367761961646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1781.662287688608,
            "unit": "ns/iter",
            "extra": "iterations: 386696\ncpu: 1781.5330388728905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 9955.11347637974,
            "unit": "ns/iter",
            "extra": "iterations: 70746\ncpu: 9954.995335425343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 7826.772284826579,
            "unit": "ns/iter",
            "extra": "iterations: 89893\ncpu: 7826.346879067362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 7767.6994686142825,
            "unit": "ns/iter",
            "extra": "iterations: 90330\ncpu: 7767.09066755223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 7763.3897143100485,
            "unit": "ns/iter",
            "extra": "iterations: 91603\ncpu: 7762.842919991607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 18272.506915088423,
            "unit": "ns/iter",
            "extra": "iterations: 38322\ncpu: 18271.306299253658 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 55639.89538682119,
            "unit": "ns/iter",
            "extra": "iterations: 12551\ncpu: 55638.2359971311 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 44413.669291338476,
            "unit": "ns/iter",
            "extra": "iterations: 15748\ncpu: 44410.71247142474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 44587.524099055314,
            "unit": "ns/iter",
            "extra": "iterations: 15789\ncpu: 44584.87554626632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 43798.18125352901,
            "unit": "ns/iter",
            "extra": "iterations: 15939\ncpu: 43796.386222472815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 26131.19608500195,
            "unit": "ns/iter",
            "extra": "iterations: 26871\ncpu: 26129.902124967542 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 43353.22078164043,
            "unit": "ns/iter",
            "extra": "iterations: 16120\ncpu: 43352.14019851109 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1846.1139691763349,
            "unit": "ns/iter",
            "extra": "iterations: 377567\ncpu: 1845.9891886738183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 9873.899067905177,
            "unit": "ns/iter",
            "extra": "iterations: 70701\ncpu: 9873.19415566981 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 8842.24714348758,
            "unit": "ns/iter",
            "extra": "iterations: 79205\ncpu: 8841.624897418118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 8977.498516510243,
            "unit": "ns/iter",
            "extra": "iterations: 78194\ncpu: 8977.387011791116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 9105.48959921438,
            "unit": "ns/iter",
            "extra": "iterations: 75427\ncpu: 9105.293860288763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 18259.250013079625,
            "unit": "ns/iter",
            "extra": "iterations: 38226\ncpu: 18257.889917857054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 55490.00532041726,
            "unit": "ns/iter",
            "extra": "iterations: 12593\ncpu: 55485.81751766936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 45138.11438396297,
            "unit": "ns/iter",
            "extra": "iterations: 15413\ncpu: 45134.31518847754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 44195.23063166874,
            "unit": "ns/iter",
            "extra": "iterations: 15657\ncpu: 44194.666922143224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 45032.30240660604,
            "unit": "ns/iter",
            "extra": "iterations: 15499\ncpu: 45029.42770501316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 26732.500459169165,
            "unit": "ns/iter",
            "extra": "iterations: 26134\ncpu: 26731.460932119044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 44372.03063872448,
            "unit": "ns/iter",
            "extra": "iterations: 15797\ncpu: 44368.46236627201 ns\nthreads: 1"
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
        "date": 1702418391361,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 615.8705872387326,
            "unit": "ns/iter",
            "extra": "iterations: 1121520\ncpu: 615.8475105214352 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5497.855292728946,
            "unit": "ns/iter",
            "extra": "iterations: 114355\ncpu: 5497.62581435005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10629.013138592767,
            "unit": "ns/iter",
            "extra": "iterations: 78395\ncpu: 10628.763313986861 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 16024.943479675503,
            "unit": "ns/iter",
            "extra": "iterations: 52229\ncpu: 16024.434701028162 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 21272.814192794576,
            "unit": "ns/iter",
            "extra": "iterations: 39358\ncpu: 21272.30550332842 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 26293.868758822842,
            "unit": "ns/iter",
            "extra": "iterations: 31865\ncpu: 26293.11156441237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 31490.136464068175,
            "unit": "ns/iter",
            "extra": "iterations: 26703\ncpu: 31489.503052091506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 36400.77248584679,
            "unit": "ns/iter",
            "extra": "iterations: 22970\ncpu: 36399.05528950805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 40294.45534933087,
            "unit": "ns/iter",
            "extra": "iterations: 20582\ncpu: 40292.02701389568 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 567.1038520568305,
            "unit": "ns/iter",
            "extra": "iterations: 1232744\ncpu: 567.0853802573765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 430.9104509353025,
            "unit": "ns/iter",
            "extra": "iterations: 1626974\ncpu: 430.89447034802055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 436.48692288096083,
            "unit": "ns/iter",
            "extra": "iterations: 1601576\ncpu: 436.4751344925241 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 427.01235375657194,
            "unit": "ns/iter",
            "extra": "iterations: 1635373\ncpu: 427.0000177329577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 891.1068102048998,
            "unit": "ns/iter",
            "extra": "iterations: 801459\ncpu: 891.0901243856518 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1421.1451428508715,
            "unit": "ns/iter",
            "extra": "iterations: 554564\ncpu: 1421.107392474088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 8772.49612336179,
            "unit": "ns/iter",
            "extra": "iterations: 92606\ncpu: 8772.185387555886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 8285.705574841733,
            "unit": "ns/iter",
            "extra": "iterations: 98514\ncpu: 8285.33101894147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 9271.401333789707,
            "unit": "ns/iter",
            "extra": "iterations: 87720\ncpu: 9271.216370269014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 8226.712853235711,
            "unit": "ns/iter",
            "extra": "iterations: 98730\ncpu: 8226.468145447163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 26809.538281704445,
            "unit": "ns/iter",
            "extra": "iterations: 30798\ncpu: 26808.96486784856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 258815.6479123669,
            "unit": "ns/iter",
            "extra": "iterations: 3377\ncpu: 258807.3734083506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 198136.57408268805,
            "unit": "ns/iter",
            "extra": "iterations: 4306\ncpu: 198128.56479331182 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 202664.2350763286,
            "unit": "ns/iter",
            "extra": "iterations: 4322\ncpu: 202654.326700601 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 199299.6890130499,
            "unit": "ns/iter",
            "extra": "iterations: 4296\ncpu: 199197.46275605273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 104490.84163764918,
            "unit": "ns/iter",
            "extra": "iterations: 8329\ncpu: 104487.2853884022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 195324.44240249292,
            "unit": "ns/iter",
            "extra": "iterations: 4462\ncpu: 195324.6750336177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5353.071391435149,
            "unit": "ns/iter",
            "extra": "iterations: 151951\ncpu: 5352.814394113891 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 25403.461453575586,
            "unit": "ns/iter",
            "extra": "iterations: 32623\ncpu: 25401.741102902844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 21644.162107235985,
            "unit": "ns/iter",
            "extra": "iterations: 38382\ncpu: 21642.809129279376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 22220.963263144014,
            "unit": "ns/iter",
            "extra": "iterations: 37755\ncpu: 22220.402595682655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 20816.14818290037,
            "unit": "ns/iter",
            "extra": "iterations: 39431\ncpu: 20815.472597702315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 42845.11696761597,
            "unit": "ns/iter",
            "extra": "iterations: 19826\ncpu: 42841.74316554008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 277727.93835833017,
            "unit": "ns/iter",
            "extra": "iterations: 3131\ncpu: 277717.8537208564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 214409.19846570585,
            "unit": "ns/iter",
            "extra": "iterations: 4041\ncpu: 214395.8921059139 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 215034.71421508517,
            "unit": "ns/iter",
            "extra": "iterations: 4045\ncpu: 215027.66378244775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 211501.6236874185,
            "unit": "ns/iter",
            "extra": "iterations: 4095\ncpu: 211494.6031746027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 116948.48280458078,
            "unit": "ns/iter",
            "extra": "iterations: 7502\ncpu: 116947.46734204152 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 203346.2687737866,
            "unit": "ns/iter",
            "extra": "iterations: 4208\ncpu: 203337.5712927766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 835791.2537313033,
            "unit": "ns/iter",
            "extra": "iterations: 1139\ncpu: 835769.5346795468 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 460973.7818371657,
            "unit": "ns/iter",
            "extra": "iterations: 1916\ncpu: 460953.3402922766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 1395.8341965641982,
            "unit": "ns/iter",
            "extra": "iterations: 586170\ncpu: 1395.7817697937426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 8459.863639194598,
            "unit": "ns/iter",
            "extra": "iterations: 96318\ncpu: 8459.406341493832 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 7898.694668635394,
            "unit": "ns/iter",
            "extra": "iterations: 87351\ncpu: 7898.218680953825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 8757.905622594571,
            "unit": "ns/iter",
            "extra": "iterations: 95881\ncpu: 8757.58388001793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 7717.40556339637,
            "unit": "ns/iter",
            "extra": "iterations: 104864\ncpu: 7717.316714983187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 26508.060675640565,
            "unit": "ns/iter",
            "extra": "iterations: 31792\ncpu: 26507.51132360346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 264422.45454545674,
            "unit": "ns/iter",
            "extra": "iterations: 3344\ncpu: 264415.0418660274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 200997.63209260002,
            "unit": "ns/iter",
            "extra": "iterations: 4406\ncpu: 200985.06581933753 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 199136.1595480419,
            "unit": "ns/iter",
            "extra": "iterations: 4425\ncpu: 199127.6158192087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 198189.2232641166,
            "unit": "ns/iter",
            "extra": "iterations: 4479\ncpu: 198180.04018754262 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 101326.0702479273,
            "unit": "ns/iter",
            "extra": "iterations: 8712\ncpu: 101321.45316804369 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 189788.42810948845,
            "unit": "ns/iter",
            "extra": "iterations: 4639\ncpu: 189779.21965940917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 200.1366283369293,
            "unit": "ns/iter",
            "extra": "iterations: 3481979\ncpu: 200.1284901488503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1391.0967155894891,
            "unit": "ns/iter",
            "extra": "iterations: 503104\ncpu: 1391.0314765933026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1227.376906897591,
            "unit": "ns/iter",
            "extra": "iterations: 571478\ncpu: 1227.3431348188417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1154.5200166536972,
            "unit": "ns/iter",
            "extra": "iterations: 605271\ncpu: 1154.4610595914883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 890.9208959148438,
            "unit": "ns/iter",
            "extra": "iterations: 787039\ncpu: 890.8942250638079 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 8766.351151613395,
            "unit": "ns/iter",
            "extra": "iterations: 80105\ncpu: 8765.822358154921 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 11758.860852276333,
            "unit": "ns/iter",
            "extra": "iterations: 59347\ncpu: 11758.178172443408 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2859.7275179451144,
            "unit": "ns/iter",
            "extra": "iterations: 243939\ncpu: 2859.5275868147205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2854.5062473124362,
            "unit": "ns/iter",
            "extra": "iterations: 246506\ncpu: 2854.3333630824445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2838.757579806373,
            "unit": "ns/iter",
            "extra": "iterations: 247005\ncpu: 2838.6708771077483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5062.624368718257,
            "unit": "ns/iter",
            "extra": "iterations: 138013\ncpu: 5062.4513632773815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5285.810279970165,
            "unit": "ns/iter",
            "extra": "iterations: 132121\ncpu: 5285.667683411414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1829.3790549643004,
            "unit": "ns/iter",
            "extra": "iterations: 378610\ncpu: 1829.3082591585126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10181.005133395898,
            "unit": "ns/iter",
            "extra": "iterations: 69155\ncpu: 10180.373074976613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8005.944902475439,
            "unit": "ns/iter",
            "extra": "iterations: 87209\ncpu: 8005.721886502401 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 7809.938406285843,
            "unit": "ns/iter",
            "extra": "iterations: 89100\ncpu: 7809.674523007844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 7743.551489172773,
            "unit": "ns/iter",
            "extra": "iterations: 89815\ncpu: 7743.45933307358 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 18364.322176500966,
            "unit": "ns/iter",
            "extra": "iterations: 38153\ncpu: 18363.688307603636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 56233.44485620283,
            "unit": "ns/iter",
            "extra": "iterations: 12413\ncpu: 56228.59099331307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 44943.30936777561,
            "unit": "ns/iter",
            "extra": "iterations: 15564\ncpu: 44942.73965561536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 44518.76449529504,
            "unit": "ns/iter",
            "extra": "iterations: 15643\ncpu: 44517.29847216027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 44419.31203603889,
            "unit": "ns/iter",
            "extra": "iterations: 15761\ncpu: 44416.88979125699 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 26636.09549712879,
            "unit": "ns/iter",
            "extra": "iterations: 26472\ncpu: 26634.632819583006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 43627.91058587693,
            "unit": "ns/iter",
            "extra": "iterations: 15993\ncpu: 43625.44863377755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1993.7030227074347,
            "unit": "ns/iter",
            "extra": "iterations: 349488\ncpu: 1993.622957011395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 11696.711656646074,
            "unit": "ns/iter",
            "extra": "iterations: 60043\ncpu: 11696.241027263792 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 9043.933535639831,
            "unit": "ns/iter",
            "extra": "iterations: 77440\ncpu: 9043.797778925604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 9005.006440954137,
            "unit": "ns/iter",
            "extra": "iterations: 77473\ncpu: 9004.784892801339 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 9351.283559477364,
            "unit": "ns/iter",
            "extra": "iterations: 74584\ncpu: 9350.59530194145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 18519.13941621269,
            "unit": "ns/iter",
            "extra": "iterations: 37822\ncpu: 18517.870551530694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 56816.493743356645,
            "unit": "ns/iter",
            "extra": "iterations: 12227\ncpu: 56813.830048253454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 44786.686356610655,
            "unit": "ns/iter",
            "extra": "iterations: 15524\ncpu: 44785.6222623033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 44386.58601169871,
            "unit": "ns/iter",
            "extra": "iterations: 15899\ncpu: 44283.60903201422 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 43567.85255692392,
            "unit": "ns/iter",
            "extra": "iterations: 16074\ncpu: 43566.206295881624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 28176.25421065203,
            "unit": "ns/iter",
            "extra": "iterations: 24818\ncpu: 28175.16318800838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 44892.31481714698,
            "unit": "ns/iter",
            "extra": "iterations: 15860\ncpu: 44891.021437579606 ns\nthreads: 1"
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
        "date": 1702421403881,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 608.8317065125308,
            "unit": "ns/iter",
            "extra": "iterations: 1148969\ncpu: 608.7943190808454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5521.716000000083,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5521.564999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10781.183348492932,
            "unit": "ns/iter",
            "extra": "iterations: 78059\ncpu: 10780.95799331275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 16051.458646183055,
            "unit": "ns/iter",
            "extra": "iterations: 52075\ncpu: 16050.638502160347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 21188.897940686988,
            "unit": "ns/iter",
            "extra": "iterations: 39722\ncpu: 21188.86007753889 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 26089.893087242206,
            "unit": "ns/iter",
            "extra": "iterations: 32129\ncpu: 26089.392760434497 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 32092.583437134377,
            "unit": "ns/iter",
            "extra": "iterations: 26493\ncpu: 32091.70346884084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 36900.27153696178,
            "unit": "ns/iter",
            "extra": "iterations: 23065\ncpu: 36899.336657272914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 42191.5876396999,
            "unit": "ns/iter",
            "extra": "iterations: 20938\ncpu: 42155.645238322686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 571.1876617004195,
            "unit": "ns/iter",
            "extra": "iterations: 1210572\ncpu: 571.174040040576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 424.60515483850213,
            "unit": "ns/iter",
            "extra": "iterations: 1644746\ncpu: 424.5724263807295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 429.0145018810097,
            "unit": "ns/iter",
            "extra": "iterations: 1613239\ncpu: 428.94475028188623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 429.33899176416355,
            "unit": "ns/iter",
            "extra": "iterations: 1632019\ncpu: 429.3332369292271 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 918.6251010219653,
            "unit": "ns/iter",
            "extra": "iterations: 752312\ncpu: 918.6079711608999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1422.2819564977622,
            "unit": "ns/iter",
            "extra": "iterations: 553213\ncpu: 1422.2290510165155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 9141.348790893257,
            "unit": "ns/iter",
            "extra": "iterations: 88371\ncpu: 9141.079087030805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 8501.46439263539,
            "unit": "ns/iter",
            "extra": "iterations: 95865\ncpu: 8501.098419652657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 9220.994352252814,
            "unit": "ns/iter",
            "extra": "iterations: 88885\ncpu: 9220.744782584237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 8268.920688622557,
            "unit": "ns/iter",
            "extra": "iterations: 100200\ncpu: 8268.778443113753 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 26790.386555443896,
            "unit": "ns/iter",
            "extra": "iterations: 30689\ncpu: 26789.58258659447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 259337.26831447936,
            "unit": "ns/iter",
            "extra": "iterations: 3358\ncpu: 259328.82668254906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 197489.68354138578,
            "unit": "ns/iter",
            "extra": "iterations: 4326\ncpu: 197484.23485899283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 195666.19793815224,
            "unit": "ns/iter",
            "extra": "iterations: 4365\ncpu: 195661.37457044705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 197439.20278920644,
            "unit": "ns/iter",
            "extra": "iterations: 4374\ncpu: 197433.97347965266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 105279.91022414046,
            "unit": "ns/iter",
            "extra": "iterations: 8343\ncpu: 105271.8566462904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 192595.70874861503,
            "unit": "ns/iter",
            "extra": "iterations: 4515\ncpu: 192585.0941306755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5350.730938184557,
            "unit": "ns/iter",
            "extra": "iterations: 151612\ncpu: 5350.645067672749 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 25067.242316178756,
            "unit": "ns/iter",
            "extra": "iterations: 33089\ncpu: 25066.973918825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 21368.74368425082,
            "unit": "ns/iter",
            "extra": "iterations: 39069\ncpu: 21366.569402851397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 21883.29047102703,
            "unit": "ns/iter",
            "extra": "iterations: 37811\ncpu: 21882.462775382824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 20902.26207206929,
            "unit": "ns/iter",
            "extra": "iterations: 39989\ncpu: 20900.70769461606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 42855.75406493327,
            "unit": "ns/iter",
            "extra": "iterations: 19127\ncpu: 42853.599623568654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 276942.8042512778,
            "unit": "ns/iter",
            "extra": "iterations: 3152\ncpu: 276932.20177665027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 214496.66139787863,
            "unit": "ns/iter",
            "extra": "iterations: 4049\ncpu: 214490.7631513961 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 214385.43361962985,
            "unit": "ns/iter",
            "extra": "iterations: 4075\ncpu: 214379.8527607362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 211410.46454590233,
            "unit": "ns/iter",
            "extra": "iterations: 4118\ncpu: 211393.1034482752 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 117104.6469802261,
            "unit": "ns/iter",
            "extra": "iterations: 7484\ncpu: 117096.53928380559 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 205186.3616619501,
            "unit": "ns/iter",
            "extra": "iterations: 4236\ncpu: 205169.6883852699 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 847510.9352837048,
            "unit": "ns/iter",
            "extra": "iterations: 1128\ncpu: 847450.2659574485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 463118.22228116414,
            "unit": "ns/iter",
            "extra": "iterations: 1885\ncpu: 463082.12201591255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 1413.1118005365677,
            "unit": "ns/iter",
            "extra": "iterations: 563271\ncpu: 1413.0328030379692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 8497.393170517938,
            "unit": "ns/iter",
            "extra": "iterations: 95732\ncpu: 8496.709564200037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 8125.638023704928,
            "unit": "ns/iter",
            "extra": "iterations: 100653\ncpu: 8125.156726575458 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 8986.848978431753,
            "unit": "ns/iter",
            "extra": "iterations: 91477\ncpu: 8986.114542453286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 7832.123424072223,
            "unit": "ns/iter",
            "extra": "iterations: 104145\ncpu: 7831.915118344589 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 26275.10400951511,
            "unit": "ns/iter",
            "extra": "iterations: 31949\ncpu: 26274.352874894434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 265519.61566374113,
            "unit": "ns/iter",
            "extra": "iterations: 3307\ncpu: 265506.01753855613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 204467.11262091054,
            "unit": "ns/iter",
            "extra": "iterations: 4342\ncpu: 204450.6909258411 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 202432.32964244895,
            "unit": "ns/iter",
            "extra": "iterations: 4335\ncpu: 202421.73010380575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 202165.91969800086,
            "unit": "ns/iter",
            "extra": "iterations: 4371\ncpu: 202148.0439258755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 102288.50976930509,
            "unit": "ns/iter",
            "extra": "iterations: 8496\ncpu: 102282.82721280567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 191835.15967847386,
            "unit": "ns/iter",
            "extra": "iterations: 4603\ncpu: 191816.68477080145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 198.6144738466554,
            "unit": "ns/iter",
            "extra": "iterations: 3507181\ncpu: 198.59995820004892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1396.7478291989876,
            "unit": "ns/iter",
            "extra": "iterations: 500161\ncpu: 1396.6514782240065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1181.8059945513237,
            "unit": "ns/iter",
            "extra": "iterations: 592071\ncpu: 1181.7807323783786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1260.27213246005,
            "unit": "ns/iter",
            "extra": "iterations: 579556\ncpu: 1260.2438763467287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 881.8882224816772,
            "unit": "ns/iter",
            "extra": "iterations: 793809\ncpu: 881.8310198045148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 8676.739594503017,
            "unit": "ns/iter",
            "extra": "iterations: 81135\ncpu: 8676.23836815187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 12362.516228007464,
            "unit": "ns/iter",
            "extra": "iterations: 56384\ncpu: 12361.207080022716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2833.8503690404523,
            "unit": "ns/iter",
            "extra": "iterations: 246179\ncpu: 2833.666153489948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2815.484597304989,
            "unit": "ns/iter",
            "extra": "iterations: 247197\ncpu: 2815.191931940915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2819.388579538746,
            "unit": "ns/iter",
            "extra": "iterations: 248011\ncpu: 2819.120522880036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5140.156682976785,
            "unit": "ns/iter",
            "extra": "iterations: 135905\ncpu: 5139.982340605595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5401.940840121343,
            "unit": "ns/iter",
            "extra": "iterations: 129767\ncpu: 5401.686098931176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1860.9365997994914,
            "unit": "ns/iter",
            "extra": "iterations: 375819\ncpu: 1860.816510075306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10122.474981610283,
            "unit": "ns/iter",
            "extra": "iterations: 69329\ncpu: 10121.790304201664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 7867.323648130272,
            "unit": "ns/iter",
            "extra": "iterations: 88692\ncpu: 7866.831281288115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 7764.0574801505645,
            "unit": "ns/iter",
            "extra": "iterations: 90553\ncpu: 7763.498724503783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 7891.091625295427,
            "unit": "ns/iter",
            "extra": "iterations: 89233\ncpu: 7890.902468817597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 19419.799496050793,
            "unit": "ns/iter",
            "extra": "iterations: 38099\ncpu: 19419.33121604228 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 56049.15696607124,
            "unit": "ns/iter",
            "extra": "iterations: 12525\ncpu: 56047.928143712146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 44317.32252320695,
            "unit": "ns/iter",
            "extra": "iterations: 15726\ncpu: 44313.404552969994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 44253.84274219411,
            "unit": "ns/iter",
            "extra": "iterations: 15783\ncpu: 44251.45409617942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 44112.00395703192,
            "unit": "ns/iter",
            "extra": "iterations: 15921\ncpu: 44107.9077947364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 26062.965901496376,
            "unit": "ns/iter",
            "extra": "iterations: 26922\ncpu: 26061.722754624552 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 43823.24625427036,
            "unit": "ns/iter",
            "extra": "iterations: 16085\ncpu: 43821.72831830857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 2076.940048488818,
            "unit": "ns/iter",
            "extra": "iterations: 341109\ncpu: 2076.8115177260065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 10693.536116278176,
            "unit": "ns/iter",
            "extra": "iterations: 65566\ncpu: 10692.479333801039 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 9296.904851912579,
            "unit": "ns/iter",
            "extra": "iterations: 75125\ncpu: 9296.204991680508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 9670.553128884494,
            "unit": "ns/iter",
            "extra": "iterations: 72390\ncpu: 9669.792789059391 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 8442.251120373623,
            "unit": "ns/iter",
            "extra": "iterations: 83008\ncpu: 8441.988723978428 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 19069.520203936587,
            "unit": "ns/iter",
            "extra": "iterations: 36874\ncpu: 19069.056787980895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 55762.765467856196,
            "unit": "ns/iter",
            "extra": "iterations: 12429\ncpu: 55758.484190200455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 43970.90358616062,
            "unit": "ns/iter",
            "extra": "iterations: 15755\ncpu: 43970.92351634361 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 45078.848374274734,
            "unit": "ns/iter",
            "extra": "iterations: 15347\ncpu: 45077.79370561009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 45269.408982386005,
            "unit": "ns/iter",
            "extra": "iterations: 15497\ncpu: 45265.12228173194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 27373.198889408395,
            "unit": "ns/iter",
            "extra": "iterations: 25572\ncpu: 27371.492257156257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 44738.5761718748,
            "unit": "ns/iter",
            "extra": "iterations: 15872\ncpu: 44734.06628024173 ns\nthreads: 1"
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
        "date": 1702421922074,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 611.2421907205999,
            "unit": "ns/iter",
            "extra": "iterations: 1147385\ncpu: 611.231888163084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5586.752810000917,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5586.764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10837.083013634729,
            "unit": "ns/iter",
            "extra": "iterations: 77156\ncpu: 10836.636165690288 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 16121.788458189223,
            "unit": "ns/iter",
            "extra": "iterations: 51673\ncpu: 16120.633599752295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 21264.30829796817,
            "unit": "ns/iter",
            "extra": "iterations: 39118\ncpu: 21263.497622577845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 26639.05697477204,
            "unit": "ns/iter",
            "extra": "iterations: 31277\ncpu: 26637.519583080208 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 31544.81612243242,
            "unit": "ns/iter",
            "extra": "iterations: 26398\ncpu: 31542.272141828937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 37198.17471691706,
            "unit": "ns/iter",
            "extra": "iterations: 22608\ncpu: 37197.2399150743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 41980.8272125478,
            "unit": "ns/iter",
            "extra": "iterations: 20395\ncpu: 41977.921059083106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 567.4441398412376,
            "unit": "ns/iter",
            "extra": "iterations: 1234028\ncpu: 567.4448229699811 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 429.4786971852504,
            "unit": "ns/iter",
            "extra": "iterations: 1627860\ncpu: 429.4481097883104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 437.2035962244977,
            "unit": "ns/iter",
            "extra": "iterations: 1597898\ncpu: 437.17727915048306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 426.9965665204306,
            "unit": "ns/iter",
            "extra": "iterations: 1623426\ncpu: 426.96833733105115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 885.0076585132879,
            "unit": "ns/iter",
            "extra": "iterations: 790754\ncpu: 884.6636248441378 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1417.702363879321,
            "unit": "ns/iter",
            "extra": "iterations: 552947\ncpu: 1417.587580726543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 8796.185734455234,
            "unit": "ns/iter",
            "extra": "iterations: 92783\ncpu: 8795.672698662476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 8302.956894642059,
            "unit": "ns/iter",
            "extra": "iterations: 99338\ncpu: 8302.478407054692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 9110.154826451737,
            "unit": "ns/iter",
            "extra": "iterations: 90004\ncpu: 9110.153993155844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 7806.993775335832,
            "unit": "ns/iter",
            "extra": "iterations: 104102\ncpu: 7806.742425697895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 26446.735791137813,
            "unit": "ns/iter",
            "extra": "iterations: 30949\ncpu: 26446.117806714297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 256872.94110683355,
            "unit": "ns/iter",
            "extra": "iterations: 3379\ncpu: 256867.35720627394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 196682.40372243815,
            "unit": "ns/iter",
            "extra": "iterations: 4352\ncpu: 196677.87224264705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 198168.57894737556,
            "unit": "ns/iter",
            "extra": "iterations: 4351\ncpu: 198157.73385428617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 200695.72927668694,
            "unit": "ns/iter",
            "extra": "iterations: 4355\ncpu: 200684.15614236446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 104163.22121139441,
            "unit": "ns/iter",
            "extra": "iterations: 8354\ncpu: 104158.85803208045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 191638.5868700349,
            "unit": "ns/iter",
            "extra": "iterations: 4524\ncpu: 191636.2953138817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5130.121384392979,
            "unit": "ns/iter",
            "extra": "iterations: 157961\ncpu: 5129.6528890042355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 24639.654517440522,
            "unit": "ns/iter",
            "extra": "iterations: 33747\ncpu: 24638.74418466826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 21072.493367627612,
            "unit": "ns/iter",
            "extra": "iterations: 39654\ncpu: 21071.59681242744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 22009.425715263515,
            "unit": "ns/iter",
            "extra": "iterations: 38063\ncpu: 22009.263589312402 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 20472.789866057283,
            "unit": "ns/iter",
            "extra": "iterations: 40241\ncpu: 20472.262120722604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 42785.25944894054,
            "unit": "ns/iter",
            "extra": "iterations: 19526\ncpu: 42784.83560381029 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 275990.85152286047,
            "unit": "ns/iter",
            "extra": "iterations: 3152\ncpu: 275981.0913705599 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 214278.93655515046,
            "unit": "ns/iter",
            "extra": "iterations: 4035\ncpu: 214277.54646840095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 212642.57012797063,
            "unit": "ns/iter",
            "extra": "iterations: 4064\ncpu: 212637.49999999962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 212132.16698933535,
            "unit": "ns/iter",
            "extra": "iterations: 4132\ncpu: 212127.25072604086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 116955.79506768147,
            "unit": "ns/iter",
            "extra": "iterations: 7461\ncpu: 116954.32247688029 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 204385.20004718032,
            "unit": "ns/iter",
            "extra": "iterations: 4239\ncpu: 204374.1920264226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 831193.3529929635,
            "unit": "ns/iter",
            "extra": "iterations: 1136\ncpu: 831169.3661971838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 458115.9216804754,
            "unit": "ns/iter",
            "extra": "iterations: 1928\ncpu: 458098.2365145241 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 1445.1340924556432,
            "unit": "ns/iter",
            "extra": "iterations: 551075\ncpu: 1445.106382978727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 9154.23653582464,
            "unit": "ns/iter",
            "extra": "iterations: 89014\ncpu: 9153.765699777612 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 8343.093725469253,
            "unit": "ns/iter",
            "extra": "iterations: 98095\ncpu: 8342.788113563325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 9004.106450550024,
            "unit": "ns/iter",
            "extra": "iterations: 91000\ncpu: 9004.013186813187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 7794.173010117855,
            "unit": "ns/iter",
            "extra": "iterations: 105069\ncpu: 7794.048672776945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 26235.498605933295,
            "unit": "ns/iter",
            "extra": "iterations: 31921\ncpu: 26235.349769743993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 265456.4434834439,
            "unit": "ns/iter",
            "extra": "iterations: 3353\ncpu: 265443.0957351616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 198732.9263347567,
            "unit": "ns/iter",
            "extra": "iterations: 4439\ncpu: 198728.8127956751 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 199083.14009877093,
            "unit": "ns/iter",
            "extra": "iterations: 4454\ncpu: 199081.2752581946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 196313.27607087992,
            "unit": "ns/iter",
            "extra": "iterations: 4459\ncpu: 196307.6250280334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 101032.7579580936,
            "unit": "ns/iter",
            "extra": "iterations: 8639\ncpu: 101029.5288806575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 189982.94568276475,
            "unit": "ns/iter",
            "extra": "iterations: 4621\ncpu: 189977.2992858674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 200.9912587584189,
            "unit": "ns/iter",
            "extra": "iterations: 3467242\ncpu: 200.98905700842388 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1424.9147139557022,
            "unit": "ns/iter",
            "extra": "iterations: 492179\ncpu: 1424.8980553822976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1193.677989590102,
            "unit": "ns/iter",
            "extra": "iterations: 585214\ncpu: 1193.6491608198087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1163.4670414659734,
            "unit": "ns/iter",
            "extra": "iterations: 603167\ncpu: 1163.4535709015884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 882.9776276676787,
            "unit": "ns/iter",
            "extra": "iterations: 792899\ncpu: 882.9501613698585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 8704.729690118935,
            "unit": "ns/iter",
            "extra": "iterations: 80515\ncpu: 8704.64261317762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 12404.69501706036,
            "unit": "ns/iter",
            "extra": "iterations: 56272\ncpu: 12404.41782769409 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2876.7316702420912,
            "unit": "ns/iter",
            "extra": "iterations: 248012\ncpu: 2876.643468864417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2842.3060194684413,
            "unit": "ns/iter",
            "extra": "iterations: 245736\ncpu: 2842.2229547156285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2859.636965329068,
            "unit": "ns/iter",
            "extra": "iterations: 244613\ncpu: 2859.590455127065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5328.761837569008,
            "unit": "ns/iter",
            "extra": "iterations: 131108\ncpu: 5328.725935869683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5449.959776527474,
            "unit": "ns/iter",
            "extra": "iterations: 130844\ncpu: 5449.691235364241 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1875.0438287869413,
            "unit": "ns/iter",
            "extra": "iterations: 373476\ncpu: 1875.0219558954416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10137.906287242882,
            "unit": "ns/iter",
            "extra": "iterations: 68806\ncpu: 10137.578118187348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8006.78972357322,
            "unit": "ns/iter",
            "extra": "iterations: 87618\ncpu: 8006.713232440852 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 7925.625423346296,
            "unit": "ns/iter",
            "extra": "iterations: 88580\ncpu: 7925.5701061188465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 7794.782693683379,
            "unit": "ns/iter",
            "extra": "iterations: 89528\ncpu: 7794.587168260186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 18331.093699855915,
            "unit": "ns/iter",
            "extra": "iterations: 38015\ncpu: 18330.879915822898 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 56180.36299104218,
            "unit": "ns/iter",
            "extra": "iterations: 12397\ncpu: 56178.510930064636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 45466.75014545117,
            "unit": "ns/iter",
            "extra": "iterations: 15469\ncpu: 45466.35852349872 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 44753.773093655866,
            "unit": "ns/iter",
            "extra": "iterations: 15632\ncpu: 44751.84877174991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 44756.63375039712,
            "unit": "ns/iter",
            "extra": "iterations: 15585\ncpu: 44754.135386589456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 26427.795253342476,
            "unit": "ns/iter",
            "extra": "iterations: 26545\ncpu: 26427.184027124073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 43798.72699868038,
            "unit": "ns/iter",
            "extra": "iterations: 15923\ncpu: 43796.25698674841 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1909.4799840035855,
            "unit": "ns/iter",
            "extra": "iterations: 367581\ncpu: 1909.3862305179148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 10194.64403369708,
            "unit": "ns/iter",
            "extra": "iterations: 69088\ncpu: 10194.52003242239 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 9564.65719738281,
            "unit": "ns/iter",
            "extra": "iterations: 73360\ncpu: 9564.599236641116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 9564.944645435959,
            "unit": "ns/iter",
            "extra": "iterations: 72695\ncpu: 9564.355182612368 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 9288.842351716936,
            "unit": "ns/iter",
            "extra": "iterations: 74958\ncpu: 9288.019957843002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 20165.485111660273,
            "unit": "ns/iter",
            "extra": "iterations: 34658\ncpu: 20164.242022043934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 57354.94537051972,
            "unit": "ns/iter",
            "extra": "iterations: 12118\ncpu: 57351.59267205751 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 44598.444351835074,
            "unit": "ns/iter",
            "extra": "iterations: 15598\ncpu: 44596.56366200801 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 43914.59353537843,
            "unit": "ns/iter",
            "extra": "iterations: 15871\ncpu: 43910.9381891501 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 44581.65728149307,
            "unit": "ns/iter",
            "extra": "iterations: 15663\ncpu: 44579.524995211534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 27604.912253560036,
            "unit": "ns/iter",
            "extra": "iterations: 25209\ncpu: 27602.800587092173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 44921.0291249809,
            "unit": "ns/iter",
            "extra": "iterations: 15794\ncpu: 44920.60276054167 ns\nthreads: 1"
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
        "date": 1702422462516,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 611.3865943412228,
            "unit": "ns/iter",
            "extra": "iterations: 1139295\ncpu: 611.3802834208876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5539.2081600001575,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5539.042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10767.540917266424,
            "unit": "ns/iter",
            "extra": "iterations: 77840\ncpu: 10767.343268242548 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 16140.697173985158,
            "unit": "ns/iter",
            "extra": "iterations: 51769\ncpu: 16140.418010778654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 21034.165652382144,
            "unit": "ns/iter",
            "extra": "iterations: 39601\ncpu: 21033.78955076891 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 26243.11898512792,
            "unit": "ns/iter",
            "extra": "iterations: 32004\ncpu: 26242.500937382843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 31575.068045517797,
            "unit": "ns/iter",
            "extra": "iterations: 26012\ncpu: 31574.21959095802 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 36629.79390987788,
            "unit": "ns/iter",
            "extra": "iterations: 22791\ncpu: 36628.15146329691 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 41838.92804642176,
            "unit": "ns/iter",
            "extra": "iterations: 20680\ncpu: 41837.93520309476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 574.4440725027041,
            "unit": "ns/iter",
            "extra": "iterations: 1220920\ncpu: 574.4315761884483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 428.4725950573618,
            "unit": "ns/iter",
            "extra": "iterations: 1628885\ncpu: 428.4624758653929 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 433.8552988367099,
            "unit": "ns/iter",
            "extra": "iterations: 1611231\ncpu: 433.8439987810558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 426.15870264840174,
            "unit": "ns/iter",
            "extra": "iterations: 1636904\ncpu: 426.1544965373654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 884.017246748113,
            "unit": "ns/iter",
            "extra": "iterations: 790004\ncpu: 883.9995746856969 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1427.8377288005165,
            "unit": "ns/iter",
            "extra": "iterations: 552501\ncpu: 1427.78004021712 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 8446.245188598332,
            "unit": "ns/iter",
            "extra": "iterations: 95918\ncpu: 8446.00804854147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 8367.476272348675,
            "unit": "ns/iter",
            "extra": "iterations: 97713\ncpu: 8367.421939762367 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 9221.148927218674,
            "unit": "ns/iter",
            "extra": "iterations: 87949\ncpu: 9220.61080853677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 7946.676868153482,
            "unit": "ns/iter",
            "extra": "iterations: 102240\ncpu: 7946.070031298886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 26810.613713619758,
            "unit": "ns/iter",
            "extra": "iterations: 30889\ncpu: 26809.194211531616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 258766.9477413742,
            "unit": "ns/iter",
            "extra": "iterations: 3387\ncpu: 258751.22527310252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 197107.21252900478,
            "unit": "ns/iter",
            "extra": "iterations: 4310\ncpu: 197096.82134570763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 195763.7516099309,
            "unit": "ns/iter",
            "extra": "iterations: 4348\ncpu: 195747.88408463701 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 199638.0219881002,
            "unit": "ns/iter",
            "extra": "iterations: 4366\ncpu: 199626.75217590542 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 104043.52716873099,
            "unit": "ns/iter",
            "extra": "iterations: 8392\ncpu: 104036.9995233558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 192974.08414743017,
            "unit": "ns/iter",
            "extra": "iterations: 4504\ncpu: 192964.60923623468 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5212.789257599059,
            "unit": "ns/iter",
            "extra": "iterations: 156371\ncpu: 5212.628300643984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 25209.16065188496,
            "unit": "ns/iter",
            "extra": "iterations: 33196\ncpu: 25208.44378840826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 21366.085640183264,
            "unit": "ns/iter",
            "extra": "iterations: 38942\ncpu: 21365.605259103286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 22018.015629529687,
            "unit": "ns/iter",
            "extra": "iterations: 37941\ncpu: 22017.62473313835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 20739.481269510292,
            "unit": "ns/iter",
            "extra": "iterations: 40362\ncpu: 20738.994598880163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 43773.106518619636,
            "unit": "ns/iter",
            "extra": "iterations: 18823\ncpu: 43772.746108484236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 277748.327487234,
            "unit": "ns/iter",
            "extra": "iterations: 3136\ncpu: 277746.10969387693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 214318.15718157668,
            "unit": "ns/iter",
            "extra": "iterations: 4059\ncpu: 214311.1850209398 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 215921.7741775874,
            "unit": "ns/iter",
            "extra": "iterations: 4043\ncpu: 215916.15137274438 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 211297.36048485,
            "unit": "ns/iter",
            "extra": "iterations: 4125\ncpu: 211293.38181818146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 117018.64225238573,
            "unit": "ns/iter",
            "extra": "iterations: 7441\ncpu: 117014.62169063342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 204190.8621583436,
            "unit": "ns/iter",
            "extra": "iterations: 4244\ncpu: 204183.01131008478 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 836667.9392070542,
            "unit": "ns/iter",
            "extra": "iterations: 1135\ncpu: 836644.2290748901 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 463668.7043432755,
            "unit": "ns/iter",
            "extra": "iterations: 1911\ncpu: 463664.6781789614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 1423.151734326959,
            "unit": "ns/iter",
            "extra": "iterations: 550963\ncpu: 1423.1289578429064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 8787.923992849503,
            "unit": "ns/iter",
            "extra": "iterations: 93978\ncpu: 8787.702440996794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 8341.977750633327,
            "unit": "ns/iter",
            "extra": "iterations: 99059\ncpu: 8341.78116072235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 8754.776805827754,
            "unit": "ns/iter",
            "extra": "iterations: 94998\ncpu: 8754.504305353765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 7630.1336627219225,
            "unit": "ns/iter",
            "extra": "iterations: 107472\ncpu: 7630.069227333629 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 25976.147942988944,
            "unit": "ns/iter",
            "extra": "iterations: 32134\ncpu: 25975.6986369577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 263129.2342261898,
            "unit": "ns/iter",
            "extra": "iterations: 3360\ncpu: 263120.5952380956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 197316.91308243954,
            "unit": "ns/iter",
            "extra": "iterations: 4464\ncpu: 197315.65860215088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 196627.4609025851,
            "unit": "ns/iter",
            "extra": "iterations: 4476\ncpu: 196618.69973190312 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 196067.4811278845,
            "unit": "ns/iter",
            "extra": "iterations: 4504\ncpu: 196062.5666074594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 100628.90777866585,
            "unit": "ns/iter",
            "extra": "iterations: 8729\ncpu: 100626.0510940543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 189740.43716201588,
            "unit": "ns/iter",
            "extra": "iterations: 4623\ncpu: 189737.05386112802 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 196.05653215457383,
            "unit": "ns/iter",
            "extra": "iterations: 3565776\ncpu: 196.04865813219823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1432.9699120167397,
            "unit": "ns/iter",
            "extra": "iterations: 487138\ncpu: 1432.9442580952489 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1196.2722228768596,
            "unit": "ns/iter",
            "extra": "iterations: 585579\ncpu: 1196.2541347964989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1257.8660203127895,
            "unit": "ns/iter",
            "extra": "iterations: 557383\ncpu: 1257.857344052476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 906.369943476052,
            "unit": "ns/iter",
            "extra": "iterations: 767993\ncpu: 906.3539641637321 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 8632.5030210176,
            "unit": "ns/iter",
            "extra": "iterations: 80933\ncpu: 8632.239012516538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 11809.581241966976,
            "unit": "ns/iter",
            "extra": "iterations: 59132\ncpu: 11809.282621930613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2852.558832502798,
            "unit": "ns/iter",
            "extra": "iterations: 245825\ncpu: 2852.4743211634186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2846.53379595939,
            "unit": "ns/iter",
            "extra": "iterations: 245843\ncpu: 2846.508950834478 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2798.881070576316,
            "unit": "ns/iter",
            "extra": "iterations: 250594\ncpu: 2798.8096283231107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 4895.503740718496,
            "unit": "ns/iter",
            "extra": "iterations: 142486\ncpu: 4895.385511559032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5324.129059458889,
            "unit": "ns/iter",
            "extra": "iterations: 131637\ncpu: 5323.981859203687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1803.8202076358252,
            "unit": "ns/iter",
            "extra": "iterations: 390684\ncpu: 1803.8133120373661 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10135.323148694108,
            "unit": "ns/iter",
            "extra": "iterations: 69451\ncpu: 10135.282429338535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 7882.437596163401,
            "unit": "ns/iter",
            "extra": "iterations: 89041\ncpu: 7882.358688694064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 7861.313422488307,
            "unit": "ns/iter",
            "extra": "iterations: 89432\ncpu: 7861.0027730566135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 7763.311064672125,
            "unit": "ns/iter",
            "extra": "iterations: 89962\ncpu: 7763.009937529201 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 18438.5289331879,
            "unit": "ns/iter",
            "extra": "iterations: 38226\ncpu: 18438.178203317133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 55650.59948898287,
            "unit": "ns/iter",
            "extra": "iterations: 12524\ncpu: 55650.151708719095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 44912.344159579014,
            "unit": "ns/iter",
            "extra": "iterations: 15641\ncpu: 44911.18854293229 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 44480.12283704296,
            "unit": "ns/iter",
            "extra": "iterations: 15777\ncpu: 44478.71585219003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 44046.19658065404,
            "unit": "ns/iter",
            "extra": "iterations: 15851\ncpu: 44045.85830546929 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 26402.853719290124,
            "unit": "ns/iter",
            "extra": "iterations: 26497\ncpu: 26402.17383099947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 43937.9497248629,
            "unit": "ns/iter",
            "extra": "iterations: 15992\ncpu: 43936.955977989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 2196.415701826942,
            "unit": "ns/iter",
            "extra": "iterations: 319224\ncpu: 2196.360862591778 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 10133.038547364187,
            "unit": "ns/iter",
            "extra": "iterations: 68565\ncpu: 10132.860789032271 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 9569.255452940602,
            "unit": "ns/iter",
            "extra": "iterations: 73630\ncpu: 9568.969170175138 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 9741.275325253027,
            "unit": "ns/iter",
            "extra": "iterations: 71944\ncpu: 9741.101412209578 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 9104.373630805208,
            "unit": "ns/iter",
            "extra": "iterations: 76870\ncpu: 9104.238324443853 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 18294.586947985576,
            "unit": "ns/iter",
            "extra": "iterations: 38201\ncpu: 18294.481819847428 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 55775.01644185582,
            "unit": "ns/iter",
            "extra": "iterations: 12529\ncpu: 55774.7066805012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 44306.45036659187,
            "unit": "ns/iter",
            "extra": "iterations: 15685\ncpu: 44306.19062798791 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 45490.84656429035,
            "unit": "ns/iter",
            "extra": "iterations: 15368\ncpu: 45490.226444560125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 45158.060934457426,
            "unit": "ns/iter",
            "extra": "iterations: 15410\ncpu: 45157.728747566216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 26695.265450400362,
            "unit": "ns/iter",
            "extra": "iterations: 26310\ncpu: 26694.7168377042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 44635.39157615696,
            "unit": "ns/iter",
            "extra": "iterations: 15836\ncpu: 44633.92270775433 ns\nthreads: 1"
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
        "date": 1702468561407,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 618.2829328492297,
            "unit": "ns/iter",
            "extra": "iterations: 1128759\ncpu: 618.2686472488813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5587.4616099998775,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5587.305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10819.867672619146,
            "unit": "ns/iter",
            "extra": "iterations: 77671\ncpu: 10819.47959985065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 16251.075018111045,
            "unit": "ns/iter",
            "extra": "iterations: 52454\ncpu: 16250.667251305911 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 21455.33805611396,
            "unit": "ns/iter",
            "extra": "iterations: 39313\ncpu: 21454.633327398064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 26548.08718417745,
            "unit": "ns/iter",
            "extra": "iterations: 31703\ncpu: 26547.484465192563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 31301.78190315995,
            "unit": "ns/iter",
            "extra": "iterations: 26745\ncpu: 31300.889885959994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 36748.066038154015,
            "unit": "ns/iter",
            "extra": "iterations: 22593\ncpu: 36746.57194706325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 42009.22195133815,
            "unit": "ns/iter",
            "extra": "iterations: 20509\ncpu: 42008.57672241458 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 567.9376965865904,
            "unit": "ns/iter",
            "extra": "iterations: 1234507\ncpu: 567.9197444809953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 430.81265524487964,
            "unit": "ns/iter",
            "extra": "iterations: 1632904\ncpu: 430.7937882447463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 436.85573739486864,
            "unit": "ns/iter",
            "extra": "iterations: 1607402\ncpu: 436.8386999642901 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 422.9075071044315,
            "unit": "ns/iter",
            "extra": "iterations: 1653900\ncpu: 422.898482374992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 881.0763603448788,
            "unit": "ns/iter",
            "extra": "iterations: 794339\ncpu: 881.0602274343845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1419.7290384677833,
            "unit": "ns/iter",
            "extra": "iterations: 554802\ncpu: 1419.6720631865041 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 9206.002239491463,
            "unit": "ns/iter",
            "extra": "iterations: 89306\ncpu: 9205.388215797366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 8676.869382612254,
            "unit": "ns/iter",
            "extra": "iterations: 95240\ncpu: 8676.748215035706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 9405.206230229785,
            "unit": "ns/iter",
            "extra": "iterations: 87252\ncpu: 9404.946591482143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 8326.807856881098,
            "unit": "ns/iter",
            "extra": "iterations: 98156\ncpu: 8326.637189779525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 27080.475051599504,
            "unit": "ns/iter",
            "extra": "iterations: 30523\ncpu: 27079.17963502934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 257228.2132070032,
            "unit": "ns/iter",
            "extra": "iterations: 3377\ncpu: 257225.91057151306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 197780.92336188754,
            "unit": "ns/iter",
            "extra": "iterations: 4319\ncpu: 197775.0405186378 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 198139.07713562055,
            "unit": "ns/iter",
            "extra": "iterations: 4343\ncpu: 198135.48238544737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 197697.95846718483,
            "unit": "ns/iter",
            "extra": "iterations: 4358\ncpu: 197690.33960532382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 105339.43023394968,
            "unit": "ns/iter",
            "extra": "iterations: 8335\ncpu: 105337.9004199159 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 193750.95752291303,
            "unit": "ns/iter",
            "extra": "iterations: 4473\ncpu: 193744.42208808355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5145.7106291765695,
            "unit": "ns/iter",
            "extra": "iterations: 158620\ncpu: 5145.5585676459405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 24804.25560390184,
            "unit": "ns/iter",
            "extra": "iterations: 33325\ncpu: 24803.396849212368 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 21029.178112997335,
            "unit": "ns/iter",
            "extra": "iterations: 39576\ncpu: 21028.860925813602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 21749.28163742039,
            "unit": "ns/iter",
            "extra": "iterations: 37669\ncpu: 21748.639464811862 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 20410.540496317833,
            "unit": "ns/iter",
            "extra": "iterations: 40337\ncpu: 20409.968515258937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 44048.82211178606,
            "unit": "ns/iter",
            "extra": "iterations: 18714\ncpu: 44047.889280752264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 277618.6914792537,
            "unit": "ns/iter",
            "extra": "iterations: 3157\ncpu: 277611.18150142534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 215339.23487280498,
            "unit": "ns/iter",
            "extra": "iterations: 4049\ncpu: 215333.04519634545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 214800.65994094496,
            "unit": "ns/iter",
            "extra": "iterations: 4064\ncpu: 214791.5600393708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 213267.3904761887,
            "unit": "ns/iter",
            "extra": "iterations: 4095\ncpu: 213261.75824175894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 117311.25437308481,
            "unit": "ns/iter",
            "extra": "iterations: 7489\ncpu: 117307.79810388581 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 202783.78107074738,
            "unit": "ns/iter",
            "extra": "iterations: 4184\ncpu: 202780.04302103227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 835717.1687062735,
            "unit": "ns/iter",
            "extra": "iterations: 1144\ncpu: 835655.6818181765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 465114.9984309544,
            "unit": "ns/iter",
            "extra": "iterations: 1912\ncpu: 465087.3953974888 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 1378.8271707947765,
            "unit": "ns/iter",
            "extra": "iterations: 563296\ncpu: 1378.7541541214575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 8339.301839789252,
            "unit": "ns/iter",
            "extra": "iterations: 97946\ncpu: 8338.979641843483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 8200.359803401825,
            "unit": "ns/iter",
            "extra": "iterations: 99899\ncpu: 8199.716713881047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 8719.05266109998,
            "unit": "ns/iter",
            "extra": "iterations: 94491\ncpu: 8718.547798202986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 8078.780790458781,
            "unit": "ns/iter",
            "extra": "iterations: 103636\ncpu: 8078.3347485430295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 26186.362440378056,
            "unit": "ns/iter",
            "extra": "iterations: 32077\ncpu: 26184.10699254907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 263427.140429337,
            "unit": "ns/iter",
            "extra": "iterations: 3354\ncpu: 263405.06857483584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 200160.35628539394,
            "unit": "ns/iter",
            "extra": "iterations: 4415\ncpu: 200150.03397508623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 199558.74949175786,
            "unit": "ns/iter",
            "extra": "iterations: 4427\ncpu: 199549.85317370694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 197034.28134761492,
            "unit": "ns/iter",
            "extra": "iterations: 4482\ncpu: 197024.60954930854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 102267.19510490003,
            "unit": "ns/iter",
            "extra": "iterations: 8580\ncpu: 102259.25407925372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 190478.7499461471,
            "unit": "ns/iter",
            "extra": "iterations: 4643\ncpu: 190472.13008830434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 200.1966197867082,
            "unit": "ns/iter",
            "extra": "iterations: 3500075\ncpu: 200.18842453375945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1423.6650818655323,
            "unit": "ns/iter",
            "extra": "iterations: 493858\ncpu: 1423.6007111355968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1124.0712767017196,
            "unit": "ns/iter",
            "extra": "iterations: 622714\ncpu: 1124.0041174600146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1249.3798373735103,
            "unit": "ns/iter",
            "extra": "iterations: 611954\ncpu: 1249.3300150011298 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 886.3118519617557,
            "unit": "ns/iter",
            "extra": "iterations: 788823\ncpu: 886.2694165864852 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 8596.044380877336,
            "unit": "ns/iter",
            "extra": "iterations: 81454\ncpu: 8595.941267463866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 12475.148012962165,
            "unit": "ns/iter",
            "extra": "iterations: 56164\ncpu: 12474.578021508403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2920.8827262737677,
            "unit": "ns/iter",
            "extra": "iterations: 240284\ncpu: 2920.7371277321936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2844.832623111429,
            "unit": "ns/iter",
            "extra": "iterations: 246402\ncpu: 2844.7127052539918 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2809.6702349955967,
            "unit": "ns/iter",
            "extra": "iterations: 248856\ncpu: 2809.545681036397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5357.283332694497,
            "unit": "ns/iter",
            "extra": "iterations: 130585\ncpu: 5357.056323467488 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5355.464626555136,
            "unit": "ns/iter",
            "extra": "iterations: 128359\ncpu: 5354.954463652733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1818.8949401382602,
            "unit": "ns/iter",
            "extra": "iterations: 384971\ncpu: 1818.8063516472687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10057.19346968109,
            "unit": "ns/iter",
            "extra": "iterations: 69675\ncpu: 10056.950125583195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 7912.491297979926,
            "unit": "ns/iter",
            "extra": "iterations: 88083\ncpu: 7912.406480251637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 7945.926840843509,
            "unit": "ns/iter",
            "extra": "iterations: 88492\ncpu: 7945.51484879987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 7853.193070584348,
            "unit": "ns/iter",
            "extra": "iterations: 89185\ncpu: 7852.701687503572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 18672.003298153228,
            "unit": "ns/iter",
            "extra": "iterations: 37900\ncpu: 18671.05277044874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 55601.989961760206,
            "unit": "ns/iter",
            "extra": "iterations: 12552\ncpu: 55600.34257488857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 45267.88422753092,
            "unit": "ns/iter",
            "extra": "iterations: 15470\ncpu: 45265.81771169989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 45318.59955114226,
            "unit": "ns/iter",
            "extra": "iterations: 15595\ncpu: 45315.77428663028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 44496.32008914338,
            "unit": "ns/iter",
            "extra": "iterations: 15705\ncpu: 44494.70869149923 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 26639.79132184353,
            "unit": "ns/iter",
            "extra": "iterations: 26342\ncpu: 26638.73282210921 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 43929.170922518104,
            "unit": "ns/iter",
            "extra": "iterations: 15978\ncpu: 43928.05107022171 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1922.0812971705216,
            "unit": "ns/iter",
            "extra": "iterations: 363838\ncpu: 1921.960597848474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 10044.594527788713,
            "unit": "ns/iter",
            "extra": "iterations: 69990\ncpu: 10043.927703957857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 9587.622427982318,
            "unit": "ns/iter",
            "extra": "iterations: 75816\ncpu: 9587.06473567581 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 9325.01561834291,
            "unit": "ns/iter",
            "extra": "iterations: 75104\ncpu: 9324.529985087196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 9206.19168173568,
            "unit": "ns/iter",
            "extra": "iterations: 75761\ncpu: 9205.807737490268 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 19118.06095466616,
            "unit": "ns/iter",
            "extra": "iterations: 36683\ncpu: 19117.825695826243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 58587.297935097486,
            "unit": "ns/iter",
            "extra": "iterations: 11865\ncpu: 58585.031605562726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 45125.15136636448,
            "unit": "ns/iter",
            "extra": "iterations: 15479\ncpu: 45124.29097486995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 45110.23048326981,
            "unit": "ns/iter",
            "extra": "iterations: 15871\ncpu: 45107.35303383472 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 44930.7038157099,
            "unit": "ns/iter",
            "extra": "iterations: 15541\ncpu: 44928.621066855274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 27059.461196829492,
            "unit": "ns/iter",
            "extra": "iterations: 26119\ncpu: 27058.325357020218 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 45710.950105544944,
            "unit": "ns/iter",
            "extra": "iterations: 15633\ncpu: 45707.58651570394 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}