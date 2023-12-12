window.BENCHMARK_DATA = {
  "lastUpdate": 1702392481113,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Parse clang-15 20.04 Debug c++-17": [
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
        "date": 1702392480728,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 6736.89124357504,
            "unit": "ns/iter",
            "extra": "iterations: 104095\ncpu: 6736.799077765502 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 56260.177716642436,
            "unit": "ns/iter",
            "extra": "iterations: 14540\ncpu: 56258.99587345255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 90467.97665936737,
            "unit": "ns/iter",
            "extra": "iterations: 9597\ncpu: 90463.48859018444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 130385.44728824259,
            "unit": "ns/iter",
            "extra": "iterations: 6564\ncpu: 130380.40828762957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 172277.6448931066,
            "unit": "ns/iter",
            "extra": "iterations: 5052\ncpu: 172273.25811559774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 212510.89857561575,
            "unit": "ns/iter",
            "extra": "iterations: 4072\ncpu: 212501.006876228 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 253413.05059956067,
            "unit": "ns/iter",
            "extra": "iterations: 3419\ncpu: 253399.21029540797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 294708.824086599,
            "unit": "ns/iter",
            "extra": "iterations: 2956\ncpu: 294698.1732070365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 334300.0767165489,
            "unit": "ns/iter",
            "extra": "iterations: 2607\ncpu: 334287.3417721517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 5631.118187217557,
            "unit": "ns/iter",
            "extra": "iterations: 124582\ncpu: 5630.941869611978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 4524.707603510966,
            "unit": "ns/iter",
            "extra": "iterations: 154718\ncpu: 4524.544655437636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 4503.655264671498,
            "unit": "ns/iter",
            "extra": "iterations: 154739\ncpu: 4503.5078422375755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 4554.969247924713,
            "unit": "ns/iter",
            "extra": "iterations: 155144\ncpu: 4554.823260970453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 7265.854851908265,
            "unit": "ns/iter",
            "extra": "iterations: 94097\ncpu: 7265.500494170902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 25804.695449645344,
            "unit": "ns/iter",
            "extra": "iterations: 31558\ncpu: 25803.672602826573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 123651.4570725338,
            "unit": "ns/iter",
            "extra": "iterations: 6907\ncpu: 123646.72071811208 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 94367.22773045223,
            "unit": "ns/iter",
            "extra": "iterations: 9037\ncpu: 94362.19984508134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 93755.62595838835,
            "unit": "ns/iter",
            "extra": "iterations: 9130\ncpu: 93751.44578313264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 89127.32859383289,
            "unit": "ns/iter",
            "extra": "iterations: 9565\ncpu: 89123.46053319416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 188767.34403081544,
            "unit": "ns/iter",
            "extra": "iterations: 4674\ncpu: 188761.83140778833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1668665.361510872,
            "unit": "ns/iter",
            "extra": "iterations: 556\ncpu: 1668572.6618705054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1287819.223611248,
            "unit": "ns/iter",
            "extra": "iterations: 720\ncpu: 1287776.5277777768 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1288686.6319444973,
            "unit": "ns/iter",
            "extra": "iterations: 720\ncpu: 1288623.4722222204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1277971.5528120317,
            "unit": "ns/iter",
            "extra": "iterations: 729\ncpu: 1277922.0850480108 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 726611.7860500924,
            "unit": "ns/iter",
            "extra": "iterations: 1276\ncpu: 726584.0125391865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1255119.2801081897,
            "unit": "ns/iter",
            "extra": "iterations: 739\ncpu: 1255058.9986468204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 34337.42448707728,
            "unit": "ns/iter",
            "extra": "iterations: 24029\ncpu: 34336.447625785615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 161046.86152987412,
            "unit": "ns/iter",
            "extra": "iterations: 5373\ncpu: 161042.00632793616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 121013.97607722617,
            "unit": "ns/iter",
            "extra": "iterations: 7148\ncpu: 121008.01622831533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 122155.44929797287,
            "unit": "ns/iter",
            "extra": "iterations: 7051\ncpu: 122149.95036165077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 118147.9121075031,
            "unit": "ns/iter",
            "extra": "iterations: 7293\ncpu: 118142.06773618539 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 208682.18347509613,
            "unit": "ns/iter",
            "extra": "iterations: 4115\ncpu: 208672.9040097201 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1728185.40259735,
            "unit": "ns/iter",
            "extra": "iterations: 539\ncpu: 1728119.1094619657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1319046.1093750952,
            "unit": "ns/iter",
            "extra": "iterations: 704\ncpu: 1318982.5284090983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1324966.779516398,
            "unit": "ns/iter",
            "extra": "iterations: 703\ncpu: 1324926.0312944558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1309080.3884993214,
            "unit": "ns/iter",
            "extra": "iterations: 713\ncpu: 1309044.8807854133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 754054.0684596403,
            "unit": "ns/iter",
            "extra": "iterations: 1227\ncpu: 754038.8753056229 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1288645.4763888526,
            "unit": "ns/iter",
            "extra": "iterations: 720\ncpu: 1288594.3055555534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 6195333.284768363,
            "unit": "ns/iter",
            "extra": "iterations: 151\ncpu: 6195090.728476808 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 2941135.996864968,
            "unit": "ns/iter",
            "extra": "iterations: 319\ncpu: 2940982.445141055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 23802.587438996357,
            "unit": "ns/iter",
            "extra": "iterations: 34424\ncpu: 23801.54252846864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 117196.37742868804,
            "unit": "ns/iter",
            "extra": "iterations: 7257\ncpu: 117191.78723990636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 92433.67299191504,
            "unit": "ns/iter",
            "extra": "iterations: 9275\ncpu: 92429.13207547151 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 92503.45474185255,
            "unit": "ns/iter",
            "extra": "iterations: 9258\ncpu: 92498.97386044495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 90905.5178117037,
            "unit": "ns/iter",
            "extra": "iterations: 9432\ncpu: 90901.84478371432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 193755.0833890843,
            "unit": "ns/iter",
            "extra": "iterations: 4485\ncpu: 193747.00111482633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1669123.87188603,
            "unit": "ns/iter",
            "extra": "iterations: 562\ncpu: 1665990.3914590792 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1283801.929945112,
            "unit": "ns/iter",
            "extra": "iterations: 728\ncpu: 1283732.554945057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1294874.2946058572,
            "unit": "ns/iter",
            "extra": "iterations: 723\ncpu: 1294830.2904564308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1276334.377049107,
            "unit": "ns/iter",
            "extra": "iterations: 732\ncpu: 1276282.9234972764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 708544.931245235,
            "unit": "ns/iter",
            "extra": "iterations: 1309\ncpu: 708522.0015278826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1250557.0508701713,
            "unit": "ns/iter",
            "extra": "iterations: 747\ncpu: 1250514.0562248998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2550.045074358092,
            "unit": "ns/iter",
            "extra": "iterations: 274147\ncpu: 2550.0071129722382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 17533.644603668065,
            "unit": "ns/iter",
            "extra": "iterations: 39916\ncpu: 17532.93416173962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 13943.080347905077,
            "unit": "ns/iter",
            "extra": "iterations: 52198\ncpu: 13942.438407601778 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 12904.73579786715,
            "unit": "ns/iter",
            "extra": "iterations: 54182\ncpu: 12904.113912369354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 10118.954896664176,
            "unit": "ns/iter",
            "extra": "iterations: 69241\ncpu: 10118.535260900331 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 64086.01340433836,
            "unit": "ns/iter",
            "extra": "iterations: 10892\ncpu: 64083.62100624317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 103147.74727540734,
            "unit": "ns/iter",
            "extra": "iterations: 6790\ncpu: 103146.17083946939 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 27611.917130561636,
            "unit": "ns/iter",
            "extra": "iterations: 25329\ncpu: 27611.7020016583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 27707.047913447837,
            "unit": "ns/iter",
            "extra": "iterations: 25233\ncpu: 27706.543019062272 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 28081.604547088114,
            "unit": "ns/iter",
            "extra": "iterations: 25027\ncpu: 28080.91661006125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 55361.84314808881,
            "unit": "ns/iter",
            "extra": "iterations: 12668\ncpu: 55359.49636880372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 51844.243878983754,
            "unit": "ns/iter",
            "extra": "iterations: 13519\ncpu: 51842.1184998892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 19118.501259447356,
            "unit": "ns/iter",
            "extra": "iterations: 36524\ncpu: 19117.64045559078 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 94792.45617124764,
            "unit": "ns/iter",
            "extra": "iterations: 7381\ncpu: 94785.90976832491 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 78726.14684452492,
            "unit": "ns/iter",
            "extra": "iterations: 8921\ncpu: 78723.6744759557 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 76247.8439407159,
            "unit": "ns/iter",
            "extra": "iterations: 9176\ncpu: 76244.74716652166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 75998.7980935916,
            "unit": "ns/iter",
            "extra": "iterations: 9232\ncpu: 75995.41811091849 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 118134.24548978674,
            "unit": "ns/iter",
            "extra": "iterations: 5931\ncpu: 118128.49435171047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 480408.7630494715,
            "unit": "ns/iter",
            "extra": "iterations: 1456\ncpu: 480386.0576923069 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 393912.8774011467,
            "unit": "ns/iter",
            "extra": "iterations: 1770\ncpu: 393896.61016949307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 391764.2328918062,
            "unit": "ns/iter",
            "extra": "iterations: 1812\ncpu: 391761.1479028748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 390759.01340785046,
            "unit": "ns/iter",
            "extra": "iterations: 1790\ncpu: 390752.625698321 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 248506.82266716723,
            "unit": "ns/iter",
            "extra": "iterations: 2797\ncpu: 248499.82123703932 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 386253.60210290866,
            "unit": "ns/iter",
            "extra": "iterations: 1807\ncpu: 386240.0664084096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 20600.877939397848,
            "unit": "ns/iter",
            "extra": "iterations: 33893\ncpu: 20600.460272032728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 100216.23445112458,
            "unit": "ns/iter",
            "extra": "iterations: 6978\ncpu: 100214.67469188862 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 81888.89134007054,
            "unit": "ns/iter",
            "extra": "iterations: 8522\ncpu: 81884.53414691472 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 82533.604820699,
            "unit": "ns/iter",
            "extra": "iterations: 8505\ncpu: 82529.9353321579 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 82837.15249821685,
            "unit": "ns/iter",
            "extra": "iterations: 8446\ncpu: 82833.15178782772 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 124633.78397971205,
            "unit": "ns/iter",
            "extra": "iterations: 5518\ncpu: 124631.87749184576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 484922.9612188375,
            "unit": "ns/iter",
            "extra": "iterations: 1444\ncpu: 484902.2853185621 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 395748.7672316558,
            "unit": "ns/iter",
            "extra": "iterations: 1770\ncpu: 395725.9322033925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 393593.5100896698,
            "unit": "ns/iter",
            "extra": "iterations: 1784\ncpu: 393580.43721972825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 397754.1687500005,
            "unit": "ns/iter",
            "extra": "iterations: 1760\ncpu: 397740.3409090919 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 261235.79828486577,
            "unit": "ns/iter",
            "extra": "iterations: 2682\ncpu: 261224.68307233084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 392795.0955592559,
            "unit": "ns/iter",
            "extra": "iterations: 1779\ncpu: 392783.8673412034 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}