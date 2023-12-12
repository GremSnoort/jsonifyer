window.BENCHMARK_DATA = {
  "lastUpdate": 1702382557368,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Parse gcc-12 22.04 Debug c++-17": [
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
        "date": 1702381397489,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7327.002126968368,
            "unit": "ns/iter",
            "extra": "iterations: 95441\ncpu: 7326.725411510776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 53366.057300002016,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 53364.799999999974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 98660.89205069243,
            "unit": "ns/iter",
            "extra": "iterations: 8680\ncpu: 98658.76728110599 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 143232.41837075193,
            "unit": "ns/iter",
            "extra": "iterations: 5966\ncpu: 143229.41669460275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 188310.849522965,
            "unit": "ns/iter",
            "extra": "iterations: 4612\ncpu: 188309.23677363398 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 232736.7939752517,
            "unit": "ns/iter",
            "extra": "iterations: 3718\ncpu: 232727.67616998387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 282232.6294628701,
            "unit": "ns/iter",
            "extra": "iterations: 3109\ncpu: 282223.7375361852 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 321279.61160061887,
            "unit": "ns/iter",
            "extra": "iterations: 2724\ncpu: 321273.75183553586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 366710.93488367595,
            "unit": "ns/iter",
            "extra": "iterations: 2365\ncpu: 366691.07822410204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6060.243586740723,
            "unit": "ns/iter",
            "extra": "iterations: 115269\ncpu: 6060.12978337628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 4941.310317610425,
            "unit": "ns/iter",
            "extra": "iterations: 143163\ncpu: 4941.125151051608 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 4955.089049010876,
            "unit": "ns/iter",
            "extra": "iterations: 143640\ncpu: 4955.0327206906195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 4962.365367689105,
            "unit": "ns/iter",
            "extra": "iterations: 140880\ncpu: 4962.311186825675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 7738.024432233187,
            "unit": "ns/iter",
            "extra": "iterations: 90618\ncpu: 7737.808161733879 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 26970.168008214187,
            "unit": "ns/iter",
            "extra": "iterations: 30189\ncpu: 26969.651197456024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 135849.285261992,
            "unit": "ns/iter",
            "extra": "iterations: 6317\ncpu: 135848.0291277503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 102513.13204161677,
            "unit": "ns/iter",
            "extra": "iterations: 8361\ncpu: 102510.28585097515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 103111.82389252145,
            "unit": "ns/iter",
            "extra": "iterations: 8262\ncpu: 103108.90825466007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 99128.22718287767,
            "unit": "ns/iter",
            "extra": "iterations: 8601\ncpu: 99125.14823857682 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 209124.10114996505,
            "unit": "ns/iter",
            "extra": "iterations: 4261\ncpu: 209118.42290542193 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1764600.9603024505,
            "unit": "ns/iter",
            "extra": "iterations: 529\ncpu: 1764545.5576559573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1382277.8971682827,
            "unit": "ns/iter",
            "extra": "iterations: 671\ncpu: 1382238.7481371087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1380895.869436134,
            "unit": "ns/iter",
            "extra": "iterations: 674\ncpu: 1380869.881305639 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1366726.3902798984,
            "unit": "ns/iter",
            "extra": "iterations: 679\ncpu: 1366712.2238586175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 750772.028478453,
            "unit": "ns/iter",
            "extra": "iterations: 1229\ncpu: 750741.9039869815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1333577.111908116,
            "unit": "ns/iter",
            "extra": "iterations: 697\ncpu: 1333554.2324246797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 34493.712465117365,
            "unit": "ns/iter",
            "extra": "iterations: 24011\ncpu: 34493.48631877052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 166437.96594844168,
            "unit": "ns/iter",
            "extra": "iterations: 5198\ncpu: 166435.12889572946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 128557.11209483742,
            "unit": "ns/iter",
            "extra": "iterations: 6664\ncpu: 128552.92617046839 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 131383.0978277226,
            "unit": "ns/iter",
            "extra": "iterations: 6675\ncpu: 131378.17228464416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 123228.57299165044,
            "unit": "ns/iter",
            "extra": "iterations: 6946\ncpu: 123226.90757270357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 220225.83881664198,
            "unit": "ns/iter",
            "extra": "iterations: 3921\ncpu: 220223.8204539655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1792088.4799999231,
            "unit": "ns/iter",
            "extra": "iterations: 525\ncpu: 1792055.0476190469 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1415528.082442791,
            "unit": "ns/iter",
            "extra": "iterations: 655\ncpu: 1415492.9770992387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1414712.6966462783,
            "unit": "ns/iter",
            "extra": "iterations: 656\ncpu: 1414700.9146341535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1382818.082582581,
            "unit": "ns/iter",
            "extra": "iterations: 666\ncpu: 1382778.8288288282 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 793553.9866220519,
            "unit": "ns/iter",
            "extra": "iterations: 1196\ncpu: 793541.0535117071 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1373795.871301759,
            "unit": "ns/iter",
            "extra": "iterations: 676\ncpu: 1373751.3313609504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 6473471.000000067,
            "unit": "ns/iter",
            "extra": "iterations: 143\ncpu: 6473210.489510492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 2974700.312101901,
            "unit": "ns/iter",
            "extra": "iterations: 314\ncpu: 2974580.254777083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 25891.158822785623,
            "unit": "ns/iter",
            "extra": "iterations: 31702\ncpu: 25890.729291527543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 128728.04564990493,
            "unit": "ns/iter",
            "extra": "iterations: 6747\ncpu: 128726.45620275705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 101309.54338060733,
            "unit": "ns/iter",
            "extra": "iterations: 8460\ncpu: 101308.53427896011 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 100473.0734106084,
            "unit": "ns/iter",
            "extra": "iterations: 8541\ncpu: 100470.54209109014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 95115.69799553626,
            "unit": "ns/iter",
            "extra": "iterations: 8980\ncpu: 95112.33853006669 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 189361.1498470947,
            "unit": "ns/iter",
            "extra": "iterations: 4578\ncpu: 189355.67933595504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1752456.0132575615,
            "unit": "ns/iter",
            "extra": "iterations: 528\ncpu: 1752387.8787878724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1380036.4400000304,
            "unit": "ns/iter",
            "extra": "iterations: 675\ncpu: 1379998.814814811 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1385739.6383928726,
            "unit": "ns/iter",
            "extra": "iterations: 672\ncpu: 1385662.2023809524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1372298.1536190244,
            "unit": "ns/iter",
            "extra": "iterations: 677\ncpu: 1372257.902511077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 751573.245755911,
            "unit": "ns/iter",
            "extra": "iterations: 1237\ncpu: 751547.3726758258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1331656.0658083481,
            "unit": "ns/iter",
            "extra": "iterations: 699\ncpu: 1331608.1545064377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2679.8779535701433,
            "unit": "ns/iter",
            "extra": "iterations: 261040\ncpu: 2679.7632546736086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 18299.031647232125,
            "unit": "ns/iter",
            "extra": "iterations: 38076\ncpu: 18298.397940960185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 14352.937977510373,
            "unit": "ns/iter",
            "extra": "iterations: 48821\ncpu: 14352.512238585745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 14657.695489585241,
            "unit": "ns/iter",
            "extra": "iterations: 47867\ncpu: 14657.160465456443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 10764.973046111103,
            "unit": "ns/iter",
            "extra": "iterations: 65037\ncpu: 10764.736995863901 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 66408.60570183262,
            "unit": "ns/iter",
            "extra": "iterations: 10558\ncpu: 66406.50691418779 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 122018.19496416385,
            "unit": "ns/iter",
            "extra": "iterations: 5719\ncpu: 122017.83528588916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 29929.01615446458,
            "unit": "ns/iter",
            "extra": "iterations: 23461\ncpu: 29928.49409658594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 29877.6498592269,
            "unit": "ns/iter",
            "extra": "iterations: 23442\ncpu: 29876.994283764066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 29531.90939823927,
            "unit": "ns/iter",
            "extra": "iterations: 23664\ncpu: 29531.076741041026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 58249.26401868933,
            "unit": "ns/iter",
            "extra": "iterations: 11984\ncpu: 58249.12383177607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 56251.86522088169,
            "unit": "ns/iter",
            "extra": "iterations: 12450\ncpu: 56251.25301204763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 21902.603660059922,
            "unit": "ns/iter",
            "extra": "iterations: 32076\ncpu: 21901.942262127668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 106568.72863019705,
            "unit": "ns/iter",
            "extra": "iterations: 6563\ncpu: 106565.7321346941 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 88664.65007617699,
            "unit": "ns/iter",
            "extra": "iterations: 7876\ncpu: 88662.22701879266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 87210.88944346436,
            "unit": "ns/iter",
            "extra": "iterations: 8014\ncpu: 87210.60643873294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 86958.77274981722,
            "unit": "ns/iter",
            "extra": "iterations: 8066\ncpu: 86957.04190429009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 131155.50787105074,
            "unit": "ns/iter",
            "extra": "iterations: 5336\ncpu: 131151.14317841275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 525548.6272590139,
            "unit": "ns/iter",
            "extra": "iterations: 1328\ncpu: 525528.4638554299 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 426803.1695121907,
            "unit": "ns/iter",
            "extra": "iterations: 1640\ncpu: 426792.98780487606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 433179.0160990229,
            "unit": "ns/iter",
            "extra": "iterations: 1615\ncpu: 433173.622291022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 423835.04476712405,
            "unit": "ns/iter",
            "extra": "iterations: 1653\ncpu: 423829.94555353577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 267842.05197268986,
            "unit": "ns/iter",
            "extra": "iterations: 2636\ncpu: 267838.3156297428 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 421596.7413173786,
            "unit": "ns/iter",
            "extra": "iterations: 1670\ncpu: 421595.20958083984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 21897.874297663864,
            "unit": "ns/iter",
            "extra": "iterations: 32036\ncpu: 21897.287426644776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 108575.96672341792,
            "unit": "ns/iter",
            "extra": "iterations: 6461\ncpu: 108574.78718464766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 88467.19339323608,
            "unit": "ns/iter",
            "extra": "iterations: 7901\ncpu: 88464.02986963636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 88458.45869702655,
            "unit": "ns/iter",
            "extra": "iterations: 7905\ncpu: 88456.39468690637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 88082.09229412641,
            "unit": "ns/iter",
            "extra": "iterations: 7942\ncpu: 88081.81818181943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 128502.534815364,
            "unit": "ns/iter",
            "extra": "iterations: 5443\ncpu: 128500.79000551245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 518540.85353156854,
            "unit": "ns/iter",
            "extra": "iterations: 1345\ncpu: 518521.4126394043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 426101.90450126195,
            "unit": "ns/iter",
            "extra": "iterations: 1644\ncpu: 426087.1046228697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 427053.4697247926,
            "unit": "ns/iter",
            "extra": "iterations: 1635\ncpu: 427041.16207950737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 418515.5763930113,
            "unit": "ns/iter",
            "extra": "iterations: 1669\ncpu: 418510.844817258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 266590.59123808437,
            "unit": "ns/iter",
            "extra": "iterations: 2625\ncpu: 266580.3428571421 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 420293.26934617123,
            "unit": "ns/iter",
            "extra": "iterations: 1667\ncpu: 420288.1823635305 ns\nthreads: 1"
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
        "date": 1702382557060,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7385.064720543631,
            "unit": "ns/iter",
            "extra": "iterations: 94684\ncpu: 7384.640488361286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 54104.148099997925,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 54103.73 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 99656.20871080995,
            "unit": "ns/iter",
            "extra": "iterations: 8610\ncpu: 99649.74448315911 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 144877.81063794668,
            "unit": "ns/iter",
            "extra": "iterations: 5941\ncpu: 144869.75256690796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 194446.11228300727,
            "unit": "ns/iter",
            "extra": "iterations: 4551\ncpu: 194437.02482970775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 236748.79376367354,
            "unit": "ns/iter",
            "extra": "iterations: 3656\ncpu: 236734.9288840263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 280592.80083924695,
            "unit": "ns/iter",
            "extra": "iterations: 3098\ncpu: 280587.86313750816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 327264.67695783766,
            "unit": "ns/iter",
            "extra": "iterations: 2656\ncpu: 327248.2680722891 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 374268.42789901805,
            "unit": "ns/iter",
            "extra": "iterations: 2337\ncpu: 374253.23063756997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6163.543107252416,
            "unit": "ns/iter",
            "extra": "iterations: 113322\ncpu: 6163.168669808164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5043.220293794316,
            "unit": "ns/iter",
            "extra": "iterations: 133903\ncpu: 5043.075957969578 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5042.210524041824,
            "unit": "ns/iter",
            "extra": "iterations: 138901\ncpu: 5041.808914262678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 4981.179501381193,
            "unit": "ns/iter",
            "extra": "iterations: 140829\ncpu: 4981.1658110190365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 7779.908409022259,
            "unit": "ns/iter",
            "extra": "iterations: 90391\ncpu: 7779.489108428951 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 26761.439269197148,
            "unit": "ns/iter",
            "extra": "iterations: 30487\ncpu: 26760.44215567295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 134660.15214341859,
            "unit": "ns/iter",
            "extra": "iterations: 6415\ncpu: 134652.7045985972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 103555.12477374593,
            "unit": "ns/iter",
            "extra": "iterations: 8287\ncpu: 103551.64715819959 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 104799.84072531108,
            "unit": "ns/iter",
            "extra": "iterations: 8162\ncpu: 104794.69492771367 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 99671.95854921658,
            "unit": "ns/iter",
            "extra": "iterations: 8492\ncpu: 99666.61563824753 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 214322.65496512916,
            "unit": "ns/iter",
            "extra": "iterations: 4159\ncpu: 214310.45924501074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1767202.4118774568,
            "unit": "ns/iter",
            "extra": "iterations: 522\ncpu: 1767124.712643675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1396993.8328312582,
            "unit": "ns/iter",
            "extra": "iterations: 664\ncpu: 1396918.5240963849 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1398385.4622356484,
            "unit": "ns/iter",
            "extra": "iterations: 662\ncpu: 1398324.6223564944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1371357.767751513,
            "unit": "ns/iter",
            "extra": "iterations: 676\ncpu: 1371290.8284023644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 757915.3611793037,
            "unit": "ns/iter",
            "extra": "iterations: 1221\ncpu: 757880.4258804254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1371738.2031929938,
            "unit": "ns/iter",
            "extra": "iterations: 689\ncpu: 1371651.37880987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 34297.43291621684,
            "unit": "ns/iter",
            "extra": "iterations: 24134\ncpu: 34296.98350874285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 163943.56966121122,
            "unit": "ns/iter",
            "extra": "iterations: 5254\ncpu: 163938.02816901408 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 130680.20625284586,
            "unit": "ns/iter",
            "extra": "iterations: 6589\ncpu: 130680.93792684762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 131076.4110576871,
            "unit": "ns/iter",
            "extra": "iterations: 6656\ncpu: 131073.78305288454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 122659.76778136901,
            "unit": "ns/iter",
            "extra": "iterations: 5891\ncpu: 122658.68273637738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 226285.83887000327,
            "unit": "ns/iter",
            "extra": "iterations: 3823\ncpu: 226275.0719330366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1811180.9785993078,
            "unit": "ns/iter",
            "extra": "iterations: 514\ncpu: 1811082.8793774329 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1433055.7607361604,
            "unit": "ns/iter",
            "extra": "iterations: 652\ncpu: 1433050.7668711634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1430752.2519200256,
            "unit": "ns/iter",
            "extra": "iterations: 651\ncpu: 1430679.4162826415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1403267.454135406,
            "unit": "ns/iter",
            "extra": "iterations: 665\ncpu: 1403204.5112781895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 791991.67969414,
            "unit": "ns/iter",
            "extra": "iterations: 1177\ncpu: 791961.5123194588 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1374678.1595272198,
            "unit": "ns/iter",
            "extra": "iterations: 677\ncpu: 1374572.6735598254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 6505427.440559358,
            "unit": "ns/iter",
            "extra": "iterations: 143\ncpu: 6505091.608391615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 2965156.396165899,
            "unit": "ns/iter",
            "extra": "iterations: 313\ncpu: 2964992.9712460064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 25578.530935831186,
            "unit": "ns/iter",
            "extra": "iterations: 32228\ncpu: 25578.149435273837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 133680.23055426535,
            "unit": "ns/iter",
            "extra": "iterations: 6441\ncpu: 133673.18739326246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 100930.46696501371,
            "unit": "ns/iter",
            "extra": "iterations: 8491\ncpu: 100925.89800965735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 101281.68649158068,
            "unit": "ns/iter",
            "extra": "iterations: 8491\ncpu: 101277.72936049967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 96165.98543907453,
            "unit": "ns/iter",
            "extra": "iterations: 8928\ncpu: 96159.66621863809 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 192812.75038966408,
            "unit": "ns/iter",
            "extra": "iterations: 4491\ncpu: 192800.31173458011 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1776715.125475276,
            "unit": "ns/iter",
            "extra": "iterations: 526\ncpu: 1776582.5095057038 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1385732.6498514852,
            "unit": "ns/iter",
            "extra": "iterations: 674\ncpu: 1385635.9050445184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1387928.3348281237,
            "unit": "ns/iter",
            "extra": "iterations: 669\ncpu: 1387860.538116591 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1371132.4365781995,
            "unit": "ns/iter",
            "extra": "iterations: 678\ncpu: 1371103.0973451335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 759615.2079288333,
            "unit": "ns/iter",
            "extra": "iterations: 1236\ncpu: 759575.9708737871 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1339374.0273381448,
            "unit": "ns/iter",
            "extra": "iterations: 695\ncpu: 1339369.0647482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2737.767365029865,
            "unit": "ns/iter",
            "extra": "iterations: 256075\ncpu: 2737.7350385629156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 17796.544378395607,
            "unit": "ns/iter",
            "extra": "iterations: 39366\ncpu: 17796.441091296987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 14365.893051966976,
            "unit": "ns/iter",
            "extra": "iterations: 48762\ncpu: 14365.66178581684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 14511.481886306907,
            "unit": "ns/iter",
            "extra": "iterations: 48306\ncpu: 14510.762638181619 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 10772.127647465764,
            "unit": "ns/iter",
            "extra": "iterations: 65015\ncpu: 10771.42813196955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 67344.2073661936,
            "unit": "ns/iter",
            "extra": "iterations: 10426\ncpu: 67339.8618837523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 121652.78191581221,
            "unit": "ns/iter",
            "extra": "iterations: 5773\ncpu: 121646.97730815932 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 29478.67327691464,
            "unit": "ns/iter",
            "extra": "iterations: 23751\ncpu: 29476.931497621368 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 29705.94874299701,
            "unit": "ns/iter",
            "extra": "iterations: 23548\ncpu: 29704.3697978596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 29140.24795935249,
            "unit": "ns/iter",
            "extra": "iterations: 24012\ncpu: 29138.651507579445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 58620.46460250701,
            "unit": "ns/iter",
            "extra": "iterations: 11950\ncpu: 58620.05020920533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 55857.28470119662,
            "unit": "ns/iter",
            "extra": "iterations: 12550\ncpu: 55853.25099601565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 21822.918073192617,
            "unit": "ns/iter",
            "extra": "iterations: 32053\ncpu: 21821.88874676325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 108350.5277433287,
            "unit": "ns/iter",
            "extra": "iterations: 6452\ncpu: 108344.73031618087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 88169.02735064153,
            "unit": "ns/iter",
            "extra": "iterations: 7934\ncpu: 88164.14166876885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 86796.85483871275,
            "unit": "ns/iter",
            "extra": "iterations: 8060\ncpu: 86793.75930521089 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 86754.82118959213,
            "unit": "ns/iter",
            "extra": "iterations: 8070\ncpu: 86753.54399008646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 132231.94891201472,
            "unit": "ns/iter",
            "extra": "iterations: 5285\ncpu: 132225.052034059 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 525593.398805037,
            "unit": "ns/iter",
            "extra": "iterations: 1339\ncpu: 525563.7042569119 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 428942.3174019247,
            "unit": "ns/iter",
            "extra": "iterations: 1632\ncpu: 428917.0955882327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 432974.21494749124,
            "unit": "ns/iter",
            "extra": "iterations: 1619\ncpu: 432961.51945645467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 425106.83120823017,
            "unit": "ns/iter",
            "extra": "iterations: 1647\ncpu: 425108.13600486243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 266656.4451219643,
            "unit": "ns/iter",
            "extra": "iterations: 2624\ncpu: 266652.97256097756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 419558.9676840279,
            "unit": "ns/iter",
            "extra": "iterations: 1671\ncpu: 419531.35846798646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 22122.560228060724,
            "unit": "ns/iter",
            "extra": "iterations: 31746\ncpu: 22121.35387135382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 109253.13902742928,
            "unit": "ns/iter",
            "extra": "iterations: 6416\ncpu: 109252.38466334133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 89525.59526854196,
            "unit": "ns/iter",
            "extra": "iterations: 7820\ncpu: 89523.01790281468 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 89556.78625367976,
            "unit": "ns/iter",
            "extra": "iterations: 7813\ncpu: 89551.20952258976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 88381.24038461724,
            "unit": "ns/iter",
            "extra": "iterations: 7904\ncpu: 88376.61943319906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 130193.04184488724,
            "unit": "ns/iter",
            "extra": "iterations: 5377\ncpu: 130186.4980472375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 523782.942451377,
            "unit": "ns/iter",
            "extra": "iterations: 1338\ncpu: 523774.14050822257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 432319.7831695464,
            "unit": "ns/iter",
            "extra": "iterations: 1628\ncpu: 432294.10319410625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 430761.00739823683,
            "unit": "ns/iter",
            "extra": "iterations: 1622\ncpu: 430739.33415536914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 427406.5066991045,
            "unit": "ns/iter",
            "extra": "iterations: 1642\ncpu: 427385.9926918386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 275021.98330093786,
            "unit": "ns/iter",
            "extra": "iterations: 2575\ncpu: 275007.1844660216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 423414.96000000753,
            "unit": "ns/iter",
            "extra": "iterations: 1650\ncpu: 423389.6363636414 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}