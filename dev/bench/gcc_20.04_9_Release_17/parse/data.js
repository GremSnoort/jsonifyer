window.BENCHMARK_DATA = {
  "lastUpdate": 1702409092463,
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
      }
    ]
  }
}