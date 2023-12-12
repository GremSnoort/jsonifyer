window.BENCHMARK_DATA = {
  "lastUpdate": 1702397905837,
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
      }
    ]
  }
}