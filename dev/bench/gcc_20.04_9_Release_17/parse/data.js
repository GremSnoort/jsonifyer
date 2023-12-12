window.BENCHMARK_DATA = {
  "lastUpdate": 1702418391812,
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
      }
    ]
  }
}