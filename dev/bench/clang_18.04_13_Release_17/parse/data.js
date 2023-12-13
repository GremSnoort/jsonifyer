window.BENCHMARK_DATA = {
  "lastUpdate": 1702492941660,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Parse clang-13 18.04 Release c++-17": [
      {
        "commit": {
          "author": {
            "name": "GremSnoort",
            "username": "GremSnoort",
            "email": "33685945+GremSnoort@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "d00df85748c367e34b838c50472cb85d5c89201f",
          "message": "Add Parser& Serializer with tests, example, benchmarks and CI CD (gcc & clang) (#1)",
          "timestamp": "2023-12-13T17:22:18Z",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/d00df85748c367e34b838c50472cb85d5c89201f"
        },
        "date": 1702490329393,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 564.6396081719354,
            "unit": "ns/iter",
            "extra": "iterations: 1261982\ncpu: 564.6357079577998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5162.937740000189,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5162.811999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 9973.560089448267,
            "unit": "ns/iter",
            "extra": "iterations: 83176\ncpu: 9973.37092430509 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 15081.152814337853,
            "unit": "ns/iter",
            "extra": "iterations: 55466\ncpu: 15080.66743590668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 19705.822201116145,
            "unit": "ns/iter",
            "extra": "iterations: 42115\ncpu: 19705.36388460168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 25136.45021233875,
            "unit": "ns/iter",
            "extra": "iterations: 33673\ncpu: 25135.68437620645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 29890.10276215703,
            "unit": "ns/iter",
            "extra": "iterations: 28094\ncpu: 29888.517121093464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 34504.41172782991,
            "unit": "ns/iter",
            "extra": "iterations: 23926\ncpu: 34503.343642898944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 39474.652959905994,
            "unit": "ns/iter",
            "extra": "iterations: 21352\ncpu: 39474.227238666215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 587.9000452998752,
            "unit": "ns/iter",
            "extra": "iterations: 1189849\ncpu: 587.8906483091544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 437.64852991253304,
            "unit": "ns/iter",
            "extra": "iterations: 1606333\ncpu: 437.6496031644746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 447.3964592285324,
            "unit": "ns/iter",
            "extra": "iterations: 1569319\ncpu: 447.38781598897316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 438.3153185070362,
            "unit": "ns/iter",
            "extra": "iterations: 1608897\ncpu: 438.30848090337673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 883.9170007059678,
            "unit": "ns/iter",
            "extra": "iterations: 780597\ncpu: 883.8966842045261 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1995.4613494667515,
            "unit": "ns/iter",
            "extra": "iterations: 401314\ncpu: 1995.4374878524031 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 9951.802502429271,
            "unit": "ns/iter",
            "extra": "iterations: 78244\ncpu: 9951.46976125965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 7656.221548904261,
            "unit": "ns/iter",
            "extra": "iterations: 105778\ncpu: 7655.740324074951 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 7683.411435880579,
            "unit": "ns/iter",
            "extra": "iterations: 105545\ncpu: 7683.070728125443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 7427.961089923709,
            "unit": "ns/iter",
            "extra": "iterations: 108558\ncpu: 7427.81278210728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 35492.4107755844,
            "unit": "ns/iter",
            "extra": "iterations: 23015\ncpu: 35491.101455572345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 243778.89480520735,
            "unit": "ns/iter",
            "extra": "iterations: 3850\ncpu: 243771.53246753197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 185574.1182387215,
            "unit": "ns/iter",
            "extra": "iterations: 4474\ncpu: 185571.0326329912 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 192407.18641811504,
            "unit": "ns/iter",
            "extra": "iterations: 4506\ncpu: 192407.58988016038 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 195077.67733273658,
            "unit": "ns/iter",
            "extra": "iterations: 4469\ncpu: 195071.91765495675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 97160.2100962656,
            "unit": "ns/iter",
            "extra": "iterations: 8934\ncpu: 97158.79785090646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 187538.64952463575,
            "unit": "ns/iter",
            "extra": "iterations: 4628\ncpu: 187532.86516853978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5183.846326306683,
            "unit": "ns/iter",
            "extra": "iterations: 154327\ncpu: 5183.510986411958 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 24177.09900728432,
            "unit": "ns/iter",
            "extra": "iterations: 34048\ncpu: 24176.183623120385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 19197.401466354684,
            "unit": "ns/iter",
            "extra": "iterations: 43782\ncpu: 19196.58992279931 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 19218.620314528816,
            "unit": "ns/iter",
            "extra": "iterations: 43112\ncpu: 19217.786231211732 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 19032.296962774417,
            "unit": "ns/iter",
            "extra": "iterations: 42901\ncpu: 19031.437495629485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 51868.84510717862,
            "unit": "ns/iter",
            "extra": "iterations: 16095\ncpu: 51865.92730661685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 245403.34689571377,
            "unit": "ns/iter",
            "extra": "iterations: 3318\ncpu: 245395.50934297687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 202725.83732278371,
            "unit": "ns/iter",
            "extra": "iterations: 4303\ncpu: 202722.4029746692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 192874.03883950182,
            "unit": "ns/iter",
            "extra": "iterations: 4274\ncpu: 192866.77585400068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 201514.03557313394,
            "unit": "ns/iter",
            "extra": "iterations: 4301\ncpu: 201506.48686352067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 106813.50000000301,
            "unit": "ns/iter",
            "extra": "iterations: 8104\ncpu: 106807.81095755144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 193031.3789380954,
            "unit": "ns/iter",
            "extra": "iterations: 4539\ncpu: 193028.06785635542 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 774338.4719933422,
            "unit": "ns/iter",
            "extra": "iterations: 1214\ncpu: 774319.3574958794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 429876.6029268247,
            "unit": "ns/iter",
            "extra": "iterations: 2050\ncpu: 429865.7073170752 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 1900.5347789829439,
            "unit": "ns/iter",
            "extra": "iterations: 422094\ncpu: 1900.450136699412 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 10035.64018253652,
            "unit": "ns/iter",
            "extra": "iterations: 82175\ncpu: 10035.331913599057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 7526.482783721689,
            "unit": "ns/iter",
            "extra": "iterations: 108531\ncpu: 7525.945582368201 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 7425.840451081743,
            "unit": "ns/iter",
            "extra": "iterations: 110756\ncpu: 7425.560691971543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 7279.510397561305,
            "unit": "ns/iter",
            "extra": "iterations: 112863\ncpu: 7279.011722176393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 35376.3146332204,
            "unit": "ns/iter",
            "extra": "iterations: 23761\ncpu: 35375.16097807323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 256089.9122006786,
            "unit": "ns/iter",
            "extra": "iterations: 3508\ncpu: 256063.283922464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 190441.95291334522,
            "unit": "ns/iter",
            "extra": "iterations: 4651\ncpu: 190432.7886476023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 190698.40953203334,
            "unit": "ns/iter",
            "extra": "iterations: 4637\ncpu: 190683.13564804863 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 190367.29743700757,
            "unit": "ns/iter",
            "extra": "iterations: 4643\ncpu: 190367.60715054834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 95309.49901208241,
            "unit": "ns/iter",
            "extra": "iterations: 9110\ncpu: 95301.24039517003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 171332.45940086874,
            "unit": "ns/iter",
            "extra": "iterations: 5074\ncpu: 171329.95664170245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 193.31976330925107,
            "unit": "ns/iter",
            "extra": "iterations: 3587466\ncpu: 193.31316310733033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1380.8308048327347,
            "unit": "ns/iter",
            "extra": "iterations: 506888\ncpu: 1380.8344249617362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1094.9882222484016,
            "unit": "ns/iter",
            "extra": "iterations: 635775\ncpu: 1094.9502575596741 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1119.282146468792,
            "unit": "ns/iter",
            "extra": "iterations: 616063\ncpu: 1119.231474703068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 838.6898939489937,
            "unit": "ns/iter",
            "extra": "iterations: 831393\ncpu: 838.6752113621382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9510.516428171684,
            "unit": "ns/iter",
            "extra": "iterations: 75054\ncpu: 9509.884882884295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 11903.291939293233,
            "unit": "ns/iter",
            "extra": "iterations: 58841\ncpu: 11903.332710185057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2667.3152434550766,
            "unit": "ns/iter",
            "extra": "iterations: 263149\ncpu: 2667.270633747425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2682.000540778914,
            "unit": "ns/iter",
            "extra": "iterations: 260735\ncpu: 2681.9506395382173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2650.1237275482235,
            "unit": "ns/iter",
            "extra": "iterations: 263959\ncpu: 2650.0812626203074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5042.981096001171,
            "unit": "ns/iter",
            "extra": "iterations: 139124\ncpu: 5042.892671286055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5017.033787751461,
            "unit": "ns/iter",
            "extra": "iterations: 139666\ncpu: 5016.895307376207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1917.501221676902,
            "unit": "ns/iter",
            "extra": "iterations: 365072\ncpu: 1917.4584739448755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 9702.429347297164,
            "unit": "ns/iter",
            "extra": "iterations: 71809\ncpu: 9702.216992299082 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 7628.584461898593,
            "unit": "ns/iter",
            "extra": "iterations: 91414\ncpu: 7628.435469402867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 7773.337370838922,
            "unit": "ns/iter",
            "extra": "iterations: 89907\ncpu: 7773.223442001125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 7701.996214747224,
            "unit": "ns/iter",
            "extra": "iterations: 90879\ncpu: 7701.856314439985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 17489.551421560034,
            "unit": "ns/iter",
            "extra": "iterations: 40343\ncpu: 17488.70931760146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 53112.50968485403,
            "unit": "ns/iter",
            "extra": "iterations: 13010\ncpu: 53110.86856264464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 42001.74968409624,
            "unit": "ns/iter",
            "extra": "iterations: 16619\ncpu: 42000.86647812721 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 42050.87388037579,
            "unit": "ns/iter",
            "extra": "iterations: 16635\ncpu: 42050.03306281971 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 42229.10450991666,
            "unit": "ns/iter",
            "extra": "iterations: 16630\ncpu: 42227.57666867109 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 24725.45622267229,
            "unit": "ns/iter",
            "extra": "iterations: 28131\ncpu: 24724.27571007073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 40008.49974174834,
            "unit": "ns/iter",
            "extra": "iterations: 17425\ncpu: 40008.195121950914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1914.1159438997552,
            "unit": "ns/iter",
            "extra": "iterations: 371835\ncpu: 1914.0527384457869 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 9701.727704610943,
            "unit": "ns/iter",
            "extra": "iterations: 71147\ncpu: 9701.272014280252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 7737.293089543186,
            "unit": "ns/iter",
            "extra": "iterations: 90515\ncpu: 7737.009335469191 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 7757.285763168364,
            "unit": "ns/iter",
            "extra": "iterations: 90596\ncpu: 7756.891032716616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 7714.024536688293,
            "unit": "ns/iter",
            "extra": "iterations: 90436\ncpu: 7714.041974435019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 17454.265382727415,
            "unit": "ns/iter",
            "extra": "iterations: 40760\ncpu: 17453.594210009924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 49069.788250890786,
            "unit": "ns/iter",
            "extra": "iterations: 14333\ncpu: 49068.9318356241 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 39679.7006014964,
            "unit": "ns/iter",
            "extra": "iterations: 17789\ncpu: 39677.95266737857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 38795.61178432522,
            "unit": "ns/iter",
            "extra": "iterations: 17990\ncpu: 38795.32518065572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 38494.07715775175,
            "unit": "ns/iter",
            "extra": "iterations: 18028\ncpu: 38492.017972043875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 24332.640407269526,
            "unit": "ns/iter",
            "extra": "iterations: 28777\ncpu: 24332.14025089511 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 41129.16867192455,
            "unit": "ns/iter",
            "extra": "iterations: 17371\ncpu: 41127.63801738532 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "GremSnoort",
            "username": "GremSnoort",
            "email": "33685945+GremSnoort@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "d00df85748c367e34b838c50472cb85d5c89201f",
          "message": "Add Parser& Serializer with tests, example, benchmarks and CI CD (gcc & clang) (#1)",
          "timestamp": "2023-12-13T17:22:18Z",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/d00df85748c367e34b838c50472cb85d5c89201f"
        },
        "date": 1702490329393,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 564.6396081719354,
            "unit": "ns/iter",
            "extra": "iterations: 1261982\ncpu: 564.6357079577998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5162.937740000189,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5162.811999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 9973.560089448267,
            "unit": "ns/iter",
            "extra": "iterations: 83176\ncpu: 9973.37092430509 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 15081.152814337853,
            "unit": "ns/iter",
            "extra": "iterations: 55466\ncpu: 15080.66743590668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 19705.822201116145,
            "unit": "ns/iter",
            "extra": "iterations: 42115\ncpu: 19705.36388460168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 25136.45021233875,
            "unit": "ns/iter",
            "extra": "iterations: 33673\ncpu: 25135.68437620645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 29890.10276215703,
            "unit": "ns/iter",
            "extra": "iterations: 28094\ncpu: 29888.517121093464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 34504.41172782991,
            "unit": "ns/iter",
            "extra": "iterations: 23926\ncpu: 34503.343642898944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 39474.652959905994,
            "unit": "ns/iter",
            "extra": "iterations: 21352\ncpu: 39474.227238666215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 587.9000452998752,
            "unit": "ns/iter",
            "extra": "iterations: 1189849\ncpu: 587.8906483091544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 437.64852991253304,
            "unit": "ns/iter",
            "extra": "iterations: 1606333\ncpu: 437.6496031644746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 447.3964592285324,
            "unit": "ns/iter",
            "extra": "iterations: 1569319\ncpu: 447.38781598897316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 438.3153185070362,
            "unit": "ns/iter",
            "extra": "iterations: 1608897\ncpu: 438.30848090337673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 883.9170007059678,
            "unit": "ns/iter",
            "extra": "iterations: 780597\ncpu: 883.8966842045261 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1995.4613494667515,
            "unit": "ns/iter",
            "extra": "iterations: 401314\ncpu: 1995.4374878524031 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 9951.802502429271,
            "unit": "ns/iter",
            "extra": "iterations: 78244\ncpu: 9951.46976125965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 7656.221548904261,
            "unit": "ns/iter",
            "extra": "iterations: 105778\ncpu: 7655.740324074951 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 7683.411435880579,
            "unit": "ns/iter",
            "extra": "iterations: 105545\ncpu: 7683.070728125443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 7427.961089923709,
            "unit": "ns/iter",
            "extra": "iterations: 108558\ncpu: 7427.81278210728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 35492.4107755844,
            "unit": "ns/iter",
            "extra": "iterations: 23015\ncpu: 35491.101455572345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 243778.89480520735,
            "unit": "ns/iter",
            "extra": "iterations: 3850\ncpu: 243771.53246753197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 185574.1182387215,
            "unit": "ns/iter",
            "extra": "iterations: 4474\ncpu: 185571.0326329912 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 192407.18641811504,
            "unit": "ns/iter",
            "extra": "iterations: 4506\ncpu: 192407.58988016038 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 195077.67733273658,
            "unit": "ns/iter",
            "extra": "iterations: 4469\ncpu: 195071.91765495675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 97160.2100962656,
            "unit": "ns/iter",
            "extra": "iterations: 8934\ncpu: 97158.79785090646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 187538.64952463575,
            "unit": "ns/iter",
            "extra": "iterations: 4628\ncpu: 187532.86516853978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5183.846326306683,
            "unit": "ns/iter",
            "extra": "iterations: 154327\ncpu: 5183.510986411958 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 24177.09900728432,
            "unit": "ns/iter",
            "extra": "iterations: 34048\ncpu: 24176.183623120385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 19197.401466354684,
            "unit": "ns/iter",
            "extra": "iterations: 43782\ncpu: 19196.58992279931 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 19218.620314528816,
            "unit": "ns/iter",
            "extra": "iterations: 43112\ncpu: 19217.786231211732 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 19032.296962774417,
            "unit": "ns/iter",
            "extra": "iterations: 42901\ncpu: 19031.437495629485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 51868.84510717862,
            "unit": "ns/iter",
            "extra": "iterations: 16095\ncpu: 51865.92730661685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 245403.34689571377,
            "unit": "ns/iter",
            "extra": "iterations: 3318\ncpu: 245395.50934297687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 202725.83732278371,
            "unit": "ns/iter",
            "extra": "iterations: 4303\ncpu: 202722.4029746692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 192874.03883950182,
            "unit": "ns/iter",
            "extra": "iterations: 4274\ncpu: 192866.77585400068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 201514.03557313394,
            "unit": "ns/iter",
            "extra": "iterations: 4301\ncpu: 201506.48686352067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 106813.50000000301,
            "unit": "ns/iter",
            "extra": "iterations: 8104\ncpu: 106807.81095755144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 193031.3789380954,
            "unit": "ns/iter",
            "extra": "iterations: 4539\ncpu: 193028.06785635542 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 774338.4719933422,
            "unit": "ns/iter",
            "extra": "iterations: 1214\ncpu: 774319.3574958794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 429876.6029268247,
            "unit": "ns/iter",
            "extra": "iterations: 2050\ncpu: 429865.7073170752 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 1900.5347789829439,
            "unit": "ns/iter",
            "extra": "iterations: 422094\ncpu: 1900.450136699412 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 10035.64018253652,
            "unit": "ns/iter",
            "extra": "iterations: 82175\ncpu: 10035.331913599057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 7526.482783721689,
            "unit": "ns/iter",
            "extra": "iterations: 108531\ncpu: 7525.945582368201 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 7425.840451081743,
            "unit": "ns/iter",
            "extra": "iterations: 110756\ncpu: 7425.560691971543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 7279.510397561305,
            "unit": "ns/iter",
            "extra": "iterations: 112863\ncpu: 7279.011722176393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 35376.3146332204,
            "unit": "ns/iter",
            "extra": "iterations: 23761\ncpu: 35375.16097807323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 256089.9122006786,
            "unit": "ns/iter",
            "extra": "iterations: 3508\ncpu: 256063.283922464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 190441.95291334522,
            "unit": "ns/iter",
            "extra": "iterations: 4651\ncpu: 190432.7886476023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 190698.40953203334,
            "unit": "ns/iter",
            "extra": "iterations: 4637\ncpu: 190683.13564804863 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 190367.29743700757,
            "unit": "ns/iter",
            "extra": "iterations: 4643\ncpu: 190367.60715054834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 95309.49901208241,
            "unit": "ns/iter",
            "extra": "iterations: 9110\ncpu: 95301.24039517003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 171332.45940086874,
            "unit": "ns/iter",
            "extra": "iterations: 5074\ncpu: 171329.95664170245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 193.31976330925107,
            "unit": "ns/iter",
            "extra": "iterations: 3587466\ncpu: 193.31316310733033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1380.8308048327347,
            "unit": "ns/iter",
            "extra": "iterations: 506888\ncpu: 1380.8344249617362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1094.9882222484016,
            "unit": "ns/iter",
            "extra": "iterations: 635775\ncpu: 1094.9502575596741 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1119.282146468792,
            "unit": "ns/iter",
            "extra": "iterations: 616063\ncpu: 1119.231474703068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 838.6898939489937,
            "unit": "ns/iter",
            "extra": "iterations: 831393\ncpu: 838.6752113621382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9510.516428171684,
            "unit": "ns/iter",
            "extra": "iterations: 75054\ncpu: 9509.884882884295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 11903.291939293233,
            "unit": "ns/iter",
            "extra": "iterations: 58841\ncpu: 11903.332710185057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2667.3152434550766,
            "unit": "ns/iter",
            "extra": "iterations: 263149\ncpu: 2667.270633747425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2682.000540778914,
            "unit": "ns/iter",
            "extra": "iterations: 260735\ncpu: 2681.9506395382173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2650.1237275482235,
            "unit": "ns/iter",
            "extra": "iterations: 263959\ncpu: 2650.0812626203074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5042.981096001171,
            "unit": "ns/iter",
            "extra": "iterations: 139124\ncpu: 5042.892671286055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5017.033787751461,
            "unit": "ns/iter",
            "extra": "iterations: 139666\ncpu: 5016.895307376207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1917.501221676902,
            "unit": "ns/iter",
            "extra": "iterations: 365072\ncpu: 1917.4584739448755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 9702.429347297164,
            "unit": "ns/iter",
            "extra": "iterations: 71809\ncpu: 9702.216992299082 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 7628.584461898593,
            "unit": "ns/iter",
            "extra": "iterations: 91414\ncpu: 7628.435469402867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 7773.337370838922,
            "unit": "ns/iter",
            "extra": "iterations: 89907\ncpu: 7773.223442001125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 7701.996214747224,
            "unit": "ns/iter",
            "extra": "iterations: 90879\ncpu: 7701.856314439985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 17489.551421560034,
            "unit": "ns/iter",
            "extra": "iterations: 40343\ncpu: 17488.70931760146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 53112.50968485403,
            "unit": "ns/iter",
            "extra": "iterations: 13010\ncpu: 53110.86856264464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 42001.74968409624,
            "unit": "ns/iter",
            "extra": "iterations: 16619\ncpu: 42000.86647812721 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 42050.87388037579,
            "unit": "ns/iter",
            "extra": "iterations: 16635\ncpu: 42050.03306281971 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 42229.10450991666,
            "unit": "ns/iter",
            "extra": "iterations: 16630\ncpu: 42227.57666867109 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 24725.45622267229,
            "unit": "ns/iter",
            "extra": "iterations: 28131\ncpu: 24724.27571007073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 40008.49974174834,
            "unit": "ns/iter",
            "extra": "iterations: 17425\ncpu: 40008.195121950914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1914.1159438997552,
            "unit": "ns/iter",
            "extra": "iterations: 371835\ncpu: 1914.0527384457869 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 9701.727704610943,
            "unit": "ns/iter",
            "extra": "iterations: 71147\ncpu: 9701.272014280252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 7737.293089543186,
            "unit": "ns/iter",
            "extra": "iterations: 90515\ncpu: 7737.009335469191 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 7757.285763168364,
            "unit": "ns/iter",
            "extra": "iterations: 90596\ncpu: 7756.891032716616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 7714.024536688293,
            "unit": "ns/iter",
            "extra": "iterations: 90436\ncpu: 7714.041974435019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 17454.265382727415,
            "unit": "ns/iter",
            "extra": "iterations: 40760\ncpu: 17453.594210009924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 49069.788250890786,
            "unit": "ns/iter",
            "extra": "iterations: 14333\ncpu: 49068.9318356241 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 39679.7006014964,
            "unit": "ns/iter",
            "extra": "iterations: 17789\ncpu: 39677.95266737857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 38795.61178432522,
            "unit": "ns/iter",
            "extra": "iterations: 17990\ncpu: 38795.32518065572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 38494.07715775175,
            "unit": "ns/iter",
            "extra": "iterations: 18028\ncpu: 38492.017972043875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 24332.640407269526,
            "unit": "ns/iter",
            "extra": "iterations: 28777\ncpu: 24332.14025089511 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 41129.16867192455,
            "unit": "ns/iter",
            "extra": "iterations: 17371\ncpu: 41127.63801738532 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "GremSnoort",
            "username": "GremSnoort",
            "email": "33685945+GremSnoort@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "d00df85748c367e34b838c50472cb85d5c89201f",
          "message": "Add Parser& Serializer with tests, example, benchmarks and CI CD (gcc & clang) (#1)",
          "timestamp": "2023-12-13T17:22:18Z",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/d00df85748c367e34b838c50472cb85d5c89201f"
        },
        "date": 1702490329393,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 564.6396081719354,
            "unit": "ns/iter",
            "extra": "iterations: 1261982\ncpu: 564.6357079577998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5162.937740000189,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5162.811999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 9973.560089448267,
            "unit": "ns/iter",
            "extra": "iterations: 83176\ncpu: 9973.37092430509 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 15081.152814337853,
            "unit": "ns/iter",
            "extra": "iterations: 55466\ncpu: 15080.66743590668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 19705.822201116145,
            "unit": "ns/iter",
            "extra": "iterations: 42115\ncpu: 19705.36388460168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 25136.45021233875,
            "unit": "ns/iter",
            "extra": "iterations: 33673\ncpu: 25135.68437620645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 29890.10276215703,
            "unit": "ns/iter",
            "extra": "iterations: 28094\ncpu: 29888.517121093464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 34504.41172782991,
            "unit": "ns/iter",
            "extra": "iterations: 23926\ncpu: 34503.343642898944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 39474.652959905994,
            "unit": "ns/iter",
            "extra": "iterations: 21352\ncpu: 39474.227238666215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 587.9000452998752,
            "unit": "ns/iter",
            "extra": "iterations: 1189849\ncpu: 587.8906483091544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 437.64852991253304,
            "unit": "ns/iter",
            "extra": "iterations: 1606333\ncpu: 437.6496031644746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 447.3964592285324,
            "unit": "ns/iter",
            "extra": "iterations: 1569319\ncpu: 447.38781598897316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 438.3153185070362,
            "unit": "ns/iter",
            "extra": "iterations: 1608897\ncpu: 438.30848090337673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 883.9170007059678,
            "unit": "ns/iter",
            "extra": "iterations: 780597\ncpu: 883.8966842045261 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1995.4613494667515,
            "unit": "ns/iter",
            "extra": "iterations: 401314\ncpu: 1995.4374878524031 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 9951.802502429271,
            "unit": "ns/iter",
            "extra": "iterations: 78244\ncpu: 9951.46976125965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 7656.221548904261,
            "unit": "ns/iter",
            "extra": "iterations: 105778\ncpu: 7655.740324074951 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 7683.411435880579,
            "unit": "ns/iter",
            "extra": "iterations: 105545\ncpu: 7683.070728125443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 7427.961089923709,
            "unit": "ns/iter",
            "extra": "iterations: 108558\ncpu: 7427.81278210728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 35492.4107755844,
            "unit": "ns/iter",
            "extra": "iterations: 23015\ncpu: 35491.101455572345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 243778.89480520735,
            "unit": "ns/iter",
            "extra": "iterations: 3850\ncpu: 243771.53246753197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 185574.1182387215,
            "unit": "ns/iter",
            "extra": "iterations: 4474\ncpu: 185571.0326329912 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 192407.18641811504,
            "unit": "ns/iter",
            "extra": "iterations: 4506\ncpu: 192407.58988016038 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 195077.67733273658,
            "unit": "ns/iter",
            "extra": "iterations: 4469\ncpu: 195071.91765495675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 97160.2100962656,
            "unit": "ns/iter",
            "extra": "iterations: 8934\ncpu: 97158.79785090646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 187538.64952463575,
            "unit": "ns/iter",
            "extra": "iterations: 4628\ncpu: 187532.86516853978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5183.846326306683,
            "unit": "ns/iter",
            "extra": "iterations: 154327\ncpu: 5183.510986411958 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 24177.09900728432,
            "unit": "ns/iter",
            "extra": "iterations: 34048\ncpu: 24176.183623120385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 19197.401466354684,
            "unit": "ns/iter",
            "extra": "iterations: 43782\ncpu: 19196.58992279931 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 19218.620314528816,
            "unit": "ns/iter",
            "extra": "iterations: 43112\ncpu: 19217.786231211732 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 19032.296962774417,
            "unit": "ns/iter",
            "extra": "iterations: 42901\ncpu: 19031.437495629485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 51868.84510717862,
            "unit": "ns/iter",
            "extra": "iterations: 16095\ncpu: 51865.92730661685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 245403.34689571377,
            "unit": "ns/iter",
            "extra": "iterations: 3318\ncpu: 245395.50934297687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 202725.83732278371,
            "unit": "ns/iter",
            "extra": "iterations: 4303\ncpu: 202722.4029746692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 192874.03883950182,
            "unit": "ns/iter",
            "extra": "iterations: 4274\ncpu: 192866.77585400068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 201514.03557313394,
            "unit": "ns/iter",
            "extra": "iterations: 4301\ncpu: 201506.48686352067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 106813.50000000301,
            "unit": "ns/iter",
            "extra": "iterations: 8104\ncpu: 106807.81095755144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 193031.3789380954,
            "unit": "ns/iter",
            "extra": "iterations: 4539\ncpu: 193028.06785635542 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 774338.4719933422,
            "unit": "ns/iter",
            "extra": "iterations: 1214\ncpu: 774319.3574958794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 429876.6029268247,
            "unit": "ns/iter",
            "extra": "iterations: 2050\ncpu: 429865.7073170752 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 1900.5347789829439,
            "unit": "ns/iter",
            "extra": "iterations: 422094\ncpu: 1900.450136699412 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 10035.64018253652,
            "unit": "ns/iter",
            "extra": "iterations: 82175\ncpu: 10035.331913599057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 7526.482783721689,
            "unit": "ns/iter",
            "extra": "iterations: 108531\ncpu: 7525.945582368201 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 7425.840451081743,
            "unit": "ns/iter",
            "extra": "iterations: 110756\ncpu: 7425.560691971543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 7279.510397561305,
            "unit": "ns/iter",
            "extra": "iterations: 112863\ncpu: 7279.011722176393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 35376.3146332204,
            "unit": "ns/iter",
            "extra": "iterations: 23761\ncpu: 35375.16097807323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 256089.9122006786,
            "unit": "ns/iter",
            "extra": "iterations: 3508\ncpu: 256063.283922464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 190441.95291334522,
            "unit": "ns/iter",
            "extra": "iterations: 4651\ncpu: 190432.7886476023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 190698.40953203334,
            "unit": "ns/iter",
            "extra": "iterations: 4637\ncpu: 190683.13564804863 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 190367.29743700757,
            "unit": "ns/iter",
            "extra": "iterations: 4643\ncpu: 190367.60715054834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 95309.49901208241,
            "unit": "ns/iter",
            "extra": "iterations: 9110\ncpu: 95301.24039517003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 171332.45940086874,
            "unit": "ns/iter",
            "extra": "iterations: 5074\ncpu: 171329.95664170245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 193.31976330925107,
            "unit": "ns/iter",
            "extra": "iterations: 3587466\ncpu: 193.31316310733033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1380.8308048327347,
            "unit": "ns/iter",
            "extra": "iterations: 506888\ncpu: 1380.8344249617362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1094.9882222484016,
            "unit": "ns/iter",
            "extra": "iterations: 635775\ncpu: 1094.9502575596741 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1119.282146468792,
            "unit": "ns/iter",
            "extra": "iterations: 616063\ncpu: 1119.231474703068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 838.6898939489937,
            "unit": "ns/iter",
            "extra": "iterations: 831393\ncpu: 838.6752113621382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9510.516428171684,
            "unit": "ns/iter",
            "extra": "iterations: 75054\ncpu: 9509.884882884295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 11903.291939293233,
            "unit": "ns/iter",
            "extra": "iterations: 58841\ncpu: 11903.332710185057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2667.3152434550766,
            "unit": "ns/iter",
            "extra": "iterations: 263149\ncpu: 2667.270633747425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2682.000540778914,
            "unit": "ns/iter",
            "extra": "iterations: 260735\ncpu: 2681.9506395382173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2650.1237275482235,
            "unit": "ns/iter",
            "extra": "iterations: 263959\ncpu: 2650.0812626203074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5042.981096001171,
            "unit": "ns/iter",
            "extra": "iterations: 139124\ncpu: 5042.892671286055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5017.033787751461,
            "unit": "ns/iter",
            "extra": "iterations: 139666\ncpu: 5016.895307376207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1917.501221676902,
            "unit": "ns/iter",
            "extra": "iterations: 365072\ncpu: 1917.4584739448755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 9702.429347297164,
            "unit": "ns/iter",
            "extra": "iterations: 71809\ncpu: 9702.216992299082 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 7628.584461898593,
            "unit": "ns/iter",
            "extra": "iterations: 91414\ncpu: 7628.435469402867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 7773.337370838922,
            "unit": "ns/iter",
            "extra": "iterations: 89907\ncpu: 7773.223442001125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 7701.996214747224,
            "unit": "ns/iter",
            "extra": "iterations: 90879\ncpu: 7701.856314439985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 17489.551421560034,
            "unit": "ns/iter",
            "extra": "iterations: 40343\ncpu: 17488.70931760146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 53112.50968485403,
            "unit": "ns/iter",
            "extra": "iterations: 13010\ncpu: 53110.86856264464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 42001.74968409624,
            "unit": "ns/iter",
            "extra": "iterations: 16619\ncpu: 42000.86647812721 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 42050.87388037579,
            "unit": "ns/iter",
            "extra": "iterations: 16635\ncpu: 42050.03306281971 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 42229.10450991666,
            "unit": "ns/iter",
            "extra": "iterations: 16630\ncpu: 42227.57666867109 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 24725.45622267229,
            "unit": "ns/iter",
            "extra": "iterations: 28131\ncpu: 24724.27571007073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 40008.49974174834,
            "unit": "ns/iter",
            "extra": "iterations: 17425\ncpu: 40008.195121950914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1914.1159438997552,
            "unit": "ns/iter",
            "extra": "iterations: 371835\ncpu: 1914.0527384457869 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 9701.727704610943,
            "unit": "ns/iter",
            "extra": "iterations: 71147\ncpu: 9701.272014280252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 7737.293089543186,
            "unit": "ns/iter",
            "extra": "iterations: 90515\ncpu: 7737.009335469191 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 7757.285763168364,
            "unit": "ns/iter",
            "extra": "iterations: 90596\ncpu: 7756.891032716616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 7714.024536688293,
            "unit": "ns/iter",
            "extra": "iterations: 90436\ncpu: 7714.041974435019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 17454.265382727415,
            "unit": "ns/iter",
            "extra": "iterations: 40760\ncpu: 17453.594210009924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 49069.788250890786,
            "unit": "ns/iter",
            "extra": "iterations: 14333\ncpu: 49068.9318356241 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 39679.7006014964,
            "unit": "ns/iter",
            "extra": "iterations: 17789\ncpu: 39677.95266737857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 38795.61178432522,
            "unit": "ns/iter",
            "extra": "iterations: 17990\ncpu: 38795.32518065572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 38494.07715775175,
            "unit": "ns/iter",
            "extra": "iterations: 18028\ncpu: 38492.017972043875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 24332.640407269526,
            "unit": "ns/iter",
            "extra": "iterations: 28777\ncpu: 24332.14025089511 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 41129.16867192455,
            "unit": "ns/iter",
            "extra": "iterations: 17371\ncpu: 41127.63801738532 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "GremSnoort",
            "username": "GremSnoort",
            "email": "33685945+GremSnoort@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "d00df85748c367e34b838c50472cb85d5c89201f",
          "message": "Add Parser& Serializer with tests, example, benchmarks and CI CD (gcc & clang) (#1)",
          "timestamp": "2023-12-13T17:22:18Z",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/d00df85748c367e34b838c50472cb85d5c89201f"
        },
        "date": 1702490329393,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 564.6396081719354,
            "unit": "ns/iter",
            "extra": "iterations: 1261982\ncpu: 564.6357079577998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5162.937740000189,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5162.811999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 9973.560089448267,
            "unit": "ns/iter",
            "extra": "iterations: 83176\ncpu: 9973.37092430509 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 15081.152814337853,
            "unit": "ns/iter",
            "extra": "iterations: 55466\ncpu: 15080.66743590668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 19705.822201116145,
            "unit": "ns/iter",
            "extra": "iterations: 42115\ncpu: 19705.36388460168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 25136.45021233875,
            "unit": "ns/iter",
            "extra": "iterations: 33673\ncpu: 25135.68437620645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 29890.10276215703,
            "unit": "ns/iter",
            "extra": "iterations: 28094\ncpu: 29888.517121093464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 34504.41172782991,
            "unit": "ns/iter",
            "extra": "iterations: 23926\ncpu: 34503.343642898944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 39474.652959905994,
            "unit": "ns/iter",
            "extra": "iterations: 21352\ncpu: 39474.227238666215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 587.9000452998752,
            "unit": "ns/iter",
            "extra": "iterations: 1189849\ncpu: 587.8906483091544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 437.64852991253304,
            "unit": "ns/iter",
            "extra": "iterations: 1606333\ncpu: 437.6496031644746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 447.3964592285324,
            "unit": "ns/iter",
            "extra": "iterations: 1569319\ncpu: 447.38781598897316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 438.3153185070362,
            "unit": "ns/iter",
            "extra": "iterations: 1608897\ncpu: 438.30848090337673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 883.9170007059678,
            "unit": "ns/iter",
            "extra": "iterations: 780597\ncpu: 883.8966842045261 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1995.4613494667515,
            "unit": "ns/iter",
            "extra": "iterations: 401314\ncpu: 1995.4374878524031 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 9951.802502429271,
            "unit": "ns/iter",
            "extra": "iterations: 78244\ncpu: 9951.46976125965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 7656.221548904261,
            "unit": "ns/iter",
            "extra": "iterations: 105778\ncpu: 7655.740324074951 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 7683.411435880579,
            "unit": "ns/iter",
            "extra": "iterations: 105545\ncpu: 7683.070728125443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 7427.961089923709,
            "unit": "ns/iter",
            "extra": "iterations: 108558\ncpu: 7427.81278210728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 35492.4107755844,
            "unit": "ns/iter",
            "extra": "iterations: 23015\ncpu: 35491.101455572345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 243778.89480520735,
            "unit": "ns/iter",
            "extra": "iterations: 3850\ncpu: 243771.53246753197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 185574.1182387215,
            "unit": "ns/iter",
            "extra": "iterations: 4474\ncpu: 185571.0326329912 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 192407.18641811504,
            "unit": "ns/iter",
            "extra": "iterations: 4506\ncpu: 192407.58988016038 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 195077.67733273658,
            "unit": "ns/iter",
            "extra": "iterations: 4469\ncpu: 195071.91765495675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 97160.2100962656,
            "unit": "ns/iter",
            "extra": "iterations: 8934\ncpu: 97158.79785090646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 187538.64952463575,
            "unit": "ns/iter",
            "extra": "iterations: 4628\ncpu: 187532.86516853978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5183.846326306683,
            "unit": "ns/iter",
            "extra": "iterations: 154327\ncpu: 5183.510986411958 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 24177.09900728432,
            "unit": "ns/iter",
            "extra": "iterations: 34048\ncpu: 24176.183623120385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 19197.401466354684,
            "unit": "ns/iter",
            "extra": "iterations: 43782\ncpu: 19196.58992279931 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 19218.620314528816,
            "unit": "ns/iter",
            "extra": "iterations: 43112\ncpu: 19217.786231211732 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 19032.296962774417,
            "unit": "ns/iter",
            "extra": "iterations: 42901\ncpu: 19031.437495629485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 51868.84510717862,
            "unit": "ns/iter",
            "extra": "iterations: 16095\ncpu: 51865.92730661685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 245403.34689571377,
            "unit": "ns/iter",
            "extra": "iterations: 3318\ncpu: 245395.50934297687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 202725.83732278371,
            "unit": "ns/iter",
            "extra": "iterations: 4303\ncpu: 202722.4029746692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 192874.03883950182,
            "unit": "ns/iter",
            "extra": "iterations: 4274\ncpu: 192866.77585400068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 201514.03557313394,
            "unit": "ns/iter",
            "extra": "iterations: 4301\ncpu: 201506.48686352067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 106813.50000000301,
            "unit": "ns/iter",
            "extra": "iterations: 8104\ncpu: 106807.81095755144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 193031.3789380954,
            "unit": "ns/iter",
            "extra": "iterations: 4539\ncpu: 193028.06785635542 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 774338.4719933422,
            "unit": "ns/iter",
            "extra": "iterations: 1214\ncpu: 774319.3574958794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 429876.6029268247,
            "unit": "ns/iter",
            "extra": "iterations: 2050\ncpu: 429865.7073170752 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 1900.5347789829439,
            "unit": "ns/iter",
            "extra": "iterations: 422094\ncpu: 1900.450136699412 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 10035.64018253652,
            "unit": "ns/iter",
            "extra": "iterations: 82175\ncpu: 10035.331913599057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 7526.482783721689,
            "unit": "ns/iter",
            "extra": "iterations: 108531\ncpu: 7525.945582368201 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 7425.840451081743,
            "unit": "ns/iter",
            "extra": "iterations: 110756\ncpu: 7425.560691971543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 7279.510397561305,
            "unit": "ns/iter",
            "extra": "iterations: 112863\ncpu: 7279.011722176393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 35376.3146332204,
            "unit": "ns/iter",
            "extra": "iterations: 23761\ncpu: 35375.16097807323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 256089.9122006786,
            "unit": "ns/iter",
            "extra": "iterations: 3508\ncpu: 256063.283922464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 190441.95291334522,
            "unit": "ns/iter",
            "extra": "iterations: 4651\ncpu: 190432.7886476023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 190698.40953203334,
            "unit": "ns/iter",
            "extra": "iterations: 4637\ncpu: 190683.13564804863 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 190367.29743700757,
            "unit": "ns/iter",
            "extra": "iterations: 4643\ncpu: 190367.60715054834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 95309.49901208241,
            "unit": "ns/iter",
            "extra": "iterations: 9110\ncpu: 95301.24039517003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 171332.45940086874,
            "unit": "ns/iter",
            "extra": "iterations: 5074\ncpu: 171329.95664170245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 193.31976330925107,
            "unit": "ns/iter",
            "extra": "iterations: 3587466\ncpu: 193.31316310733033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1380.8308048327347,
            "unit": "ns/iter",
            "extra": "iterations: 506888\ncpu: 1380.8344249617362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1094.9882222484016,
            "unit": "ns/iter",
            "extra": "iterations: 635775\ncpu: 1094.9502575596741 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1119.282146468792,
            "unit": "ns/iter",
            "extra": "iterations: 616063\ncpu: 1119.231474703068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 838.6898939489937,
            "unit": "ns/iter",
            "extra": "iterations: 831393\ncpu: 838.6752113621382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9510.516428171684,
            "unit": "ns/iter",
            "extra": "iterations: 75054\ncpu: 9509.884882884295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 11903.291939293233,
            "unit": "ns/iter",
            "extra": "iterations: 58841\ncpu: 11903.332710185057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2667.3152434550766,
            "unit": "ns/iter",
            "extra": "iterations: 263149\ncpu: 2667.270633747425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2682.000540778914,
            "unit": "ns/iter",
            "extra": "iterations: 260735\ncpu: 2681.9506395382173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2650.1237275482235,
            "unit": "ns/iter",
            "extra": "iterations: 263959\ncpu: 2650.0812626203074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5042.981096001171,
            "unit": "ns/iter",
            "extra": "iterations: 139124\ncpu: 5042.892671286055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5017.033787751461,
            "unit": "ns/iter",
            "extra": "iterations: 139666\ncpu: 5016.895307376207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1917.501221676902,
            "unit": "ns/iter",
            "extra": "iterations: 365072\ncpu: 1917.4584739448755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 9702.429347297164,
            "unit": "ns/iter",
            "extra": "iterations: 71809\ncpu: 9702.216992299082 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 7628.584461898593,
            "unit": "ns/iter",
            "extra": "iterations: 91414\ncpu: 7628.435469402867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 7773.337370838922,
            "unit": "ns/iter",
            "extra": "iterations: 89907\ncpu: 7773.223442001125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 7701.996214747224,
            "unit": "ns/iter",
            "extra": "iterations: 90879\ncpu: 7701.856314439985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 17489.551421560034,
            "unit": "ns/iter",
            "extra": "iterations: 40343\ncpu: 17488.70931760146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 53112.50968485403,
            "unit": "ns/iter",
            "extra": "iterations: 13010\ncpu: 53110.86856264464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 42001.74968409624,
            "unit": "ns/iter",
            "extra": "iterations: 16619\ncpu: 42000.86647812721 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 42050.87388037579,
            "unit": "ns/iter",
            "extra": "iterations: 16635\ncpu: 42050.03306281971 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 42229.10450991666,
            "unit": "ns/iter",
            "extra": "iterations: 16630\ncpu: 42227.57666867109 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 24725.45622267229,
            "unit": "ns/iter",
            "extra": "iterations: 28131\ncpu: 24724.27571007073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 40008.49974174834,
            "unit": "ns/iter",
            "extra": "iterations: 17425\ncpu: 40008.195121950914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1914.1159438997552,
            "unit": "ns/iter",
            "extra": "iterations: 371835\ncpu: 1914.0527384457869 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 9701.727704610943,
            "unit": "ns/iter",
            "extra": "iterations: 71147\ncpu: 9701.272014280252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 7737.293089543186,
            "unit": "ns/iter",
            "extra": "iterations: 90515\ncpu: 7737.009335469191 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 7757.285763168364,
            "unit": "ns/iter",
            "extra": "iterations: 90596\ncpu: 7756.891032716616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 7714.024536688293,
            "unit": "ns/iter",
            "extra": "iterations: 90436\ncpu: 7714.041974435019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 17454.265382727415,
            "unit": "ns/iter",
            "extra": "iterations: 40760\ncpu: 17453.594210009924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 49069.788250890786,
            "unit": "ns/iter",
            "extra": "iterations: 14333\ncpu: 49068.9318356241 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 39679.7006014964,
            "unit": "ns/iter",
            "extra": "iterations: 17789\ncpu: 39677.95266737857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 38795.61178432522,
            "unit": "ns/iter",
            "extra": "iterations: 17990\ncpu: 38795.32518065572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 38494.07715775175,
            "unit": "ns/iter",
            "extra": "iterations: 18028\ncpu: 38492.017972043875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 24332.640407269526,
            "unit": "ns/iter",
            "extra": "iterations: 28777\ncpu: 24332.14025089511 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 41129.16867192455,
            "unit": "ns/iter",
            "extra": "iterations: 17371\ncpu: 41127.63801738532 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "GremSnoort",
            "username": "GremSnoort",
            "email": "33685945+GremSnoort@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "d00df85748c367e34b838c50472cb85d5c89201f",
          "message": "Add Parser& Serializer with tests, example, benchmarks and CI CD (gcc & clang) (#1)",
          "timestamp": "2023-12-13T17:22:18Z",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/d00df85748c367e34b838c50472cb85d5c89201f"
        },
        "date": 1702490329393,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 564.6396081719354,
            "unit": "ns/iter",
            "extra": "iterations: 1261982\ncpu: 564.6357079577998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5162.937740000189,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5162.811999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 9973.560089448267,
            "unit": "ns/iter",
            "extra": "iterations: 83176\ncpu: 9973.37092430509 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 15081.152814337853,
            "unit": "ns/iter",
            "extra": "iterations: 55466\ncpu: 15080.66743590668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 19705.822201116145,
            "unit": "ns/iter",
            "extra": "iterations: 42115\ncpu: 19705.36388460168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 25136.45021233875,
            "unit": "ns/iter",
            "extra": "iterations: 33673\ncpu: 25135.68437620645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 29890.10276215703,
            "unit": "ns/iter",
            "extra": "iterations: 28094\ncpu: 29888.517121093464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 34504.41172782991,
            "unit": "ns/iter",
            "extra": "iterations: 23926\ncpu: 34503.343642898944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 39474.652959905994,
            "unit": "ns/iter",
            "extra": "iterations: 21352\ncpu: 39474.227238666215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 587.9000452998752,
            "unit": "ns/iter",
            "extra": "iterations: 1189849\ncpu: 587.8906483091544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 437.64852991253304,
            "unit": "ns/iter",
            "extra": "iterations: 1606333\ncpu: 437.6496031644746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 447.3964592285324,
            "unit": "ns/iter",
            "extra": "iterations: 1569319\ncpu: 447.38781598897316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 438.3153185070362,
            "unit": "ns/iter",
            "extra": "iterations: 1608897\ncpu: 438.30848090337673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 883.9170007059678,
            "unit": "ns/iter",
            "extra": "iterations: 780597\ncpu: 883.8966842045261 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1995.4613494667515,
            "unit": "ns/iter",
            "extra": "iterations: 401314\ncpu: 1995.4374878524031 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 9951.802502429271,
            "unit": "ns/iter",
            "extra": "iterations: 78244\ncpu: 9951.46976125965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 7656.221548904261,
            "unit": "ns/iter",
            "extra": "iterations: 105778\ncpu: 7655.740324074951 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 7683.411435880579,
            "unit": "ns/iter",
            "extra": "iterations: 105545\ncpu: 7683.070728125443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 7427.961089923709,
            "unit": "ns/iter",
            "extra": "iterations: 108558\ncpu: 7427.81278210728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 35492.4107755844,
            "unit": "ns/iter",
            "extra": "iterations: 23015\ncpu: 35491.101455572345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 243778.89480520735,
            "unit": "ns/iter",
            "extra": "iterations: 3850\ncpu: 243771.53246753197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 185574.1182387215,
            "unit": "ns/iter",
            "extra": "iterations: 4474\ncpu: 185571.0326329912 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 192407.18641811504,
            "unit": "ns/iter",
            "extra": "iterations: 4506\ncpu: 192407.58988016038 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 195077.67733273658,
            "unit": "ns/iter",
            "extra": "iterations: 4469\ncpu: 195071.91765495675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 97160.2100962656,
            "unit": "ns/iter",
            "extra": "iterations: 8934\ncpu: 97158.79785090646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 187538.64952463575,
            "unit": "ns/iter",
            "extra": "iterations: 4628\ncpu: 187532.86516853978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5183.846326306683,
            "unit": "ns/iter",
            "extra": "iterations: 154327\ncpu: 5183.510986411958 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 24177.09900728432,
            "unit": "ns/iter",
            "extra": "iterations: 34048\ncpu: 24176.183623120385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 19197.401466354684,
            "unit": "ns/iter",
            "extra": "iterations: 43782\ncpu: 19196.58992279931 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 19218.620314528816,
            "unit": "ns/iter",
            "extra": "iterations: 43112\ncpu: 19217.786231211732 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 19032.296962774417,
            "unit": "ns/iter",
            "extra": "iterations: 42901\ncpu: 19031.437495629485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 51868.84510717862,
            "unit": "ns/iter",
            "extra": "iterations: 16095\ncpu: 51865.92730661685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 245403.34689571377,
            "unit": "ns/iter",
            "extra": "iterations: 3318\ncpu: 245395.50934297687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 202725.83732278371,
            "unit": "ns/iter",
            "extra": "iterations: 4303\ncpu: 202722.4029746692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 192874.03883950182,
            "unit": "ns/iter",
            "extra": "iterations: 4274\ncpu: 192866.77585400068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 201514.03557313394,
            "unit": "ns/iter",
            "extra": "iterations: 4301\ncpu: 201506.48686352067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 106813.50000000301,
            "unit": "ns/iter",
            "extra": "iterations: 8104\ncpu: 106807.81095755144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 193031.3789380954,
            "unit": "ns/iter",
            "extra": "iterations: 4539\ncpu: 193028.06785635542 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 774338.4719933422,
            "unit": "ns/iter",
            "extra": "iterations: 1214\ncpu: 774319.3574958794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 429876.6029268247,
            "unit": "ns/iter",
            "extra": "iterations: 2050\ncpu: 429865.7073170752 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 1900.5347789829439,
            "unit": "ns/iter",
            "extra": "iterations: 422094\ncpu: 1900.450136699412 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 10035.64018253652,
            "unit": "ns/iter",
            "extra": "iterations: 82175\ncpu: 10035.331913599057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 7526.482783721689,
            "unit": "ns/iter",
            "extra": "iterations: 108531\ncpu: 7525.945582368201 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 7425.840451081743,
            "unit": "ns/iter",
            "extra": "iterations: 110756\ncpu: 7425.560691971543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 7279.510397561305,
            "unit": "ns/iter",
            "extra": "iterations: 112863\ncpu: 7279.011722176393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 35376.3146332204,
            "unit": "ns/iter",
            "extra": "iterations: 23761\ncpu: 35375.16097807323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 256089.9122006786,
            "unit": "ns/iter",
            "extra": "iterations: 3508\ncpu: 256063.283922464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 190441.95291334522,
            "unit": "ns/iter",
            "extra": "iterations: 4651\ncpu: 190432.7886476023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 190698.40953203334,
            "unit": "ns/iter",
            "extra": "iterations: 4637\ncpu: 190683.13564804863 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 190367.29743700757,
            "unit": "ns/iter",
            "extra": "iterations: 4643\ncpu: 190367.60715054834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 95309.49901208241,
            "unit": "ns/iter",
            "extra": "iterations: 9110\ncpu: 95301.24039517003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 171332.45940086874,
            "unit": "ns/iter",
            "extra": "iterations: 5074\ncpu: 171329.95664170245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 193.31976330925107,
            "unit": "ns/iter",
            "extra": "iterations: 3587466\ncpu: 193.31316310733033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1380.8308048327347,
            "unit": "ns/iter",
            "extra": "iterations: 506888\ncpu: 1380.8344249617362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1094.9882222484016,
            "unit": "ns/iter",
            "extra": "iterations: 635775\ncpu: 1094.9502575596741 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1119.282146468792,
            "unit": "ns/iter",
            "extra": "iterations: 616063\ncpu: 1119.231474703068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 838.6898939489937,
            "unit": "ns/iter",
            "extra": "iterations: 831393\ncpu: 838.6752113621382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9510.516428171684,
            "unit": "ns/iter",
            "extra": "iterations: 75054\ncpu: 9509.884882884295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 11903.291939293233,
            "unit": "ns/iter",
            "extra": "iterations: 58841\ncpu: 11903.332710185057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2667.3152434550766,
            "unit": "ns/iter",
            "extra": "iterations: 263149\ncpu: 2667.270633747425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2682.000540778914,
            "unit": "ns/iter",
            "extra": "iterations: 260735\ncpu: 2681.9506395382173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2650.1237275482235,
            "unit": "ns/iter",
            "extra": "iterations: 263959\ncpu: 2650.0812626203074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5042.981096001171,
            "unit": "ns/iter",
            "extra": "iterations: 139124\ncpu: 5042.892671286055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5017.033787751461,
            "unit": "ns/iter",
            "extra": "iterations: 139666\ncpu: 5016.895307376207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1917.501221676902,
            "unit": "ns/iter",
            "extra": "iterations: 365072\ncpu: 1917.4584739448755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 9702.429347297164,
            "unit": "ns/iter",
            "extra": "iterations: 71809\ncpu: 9702.216992299082 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 7628.584461898593,
            "unit": "ns/iter",
            "extra": "iterations: 91414\ncpu: 7628.435469402867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 7773.337370838922,
            "unit": "ns/iter",
            "extra": "iterations: 89907\ncpu: 7773.223442001125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 7701.996214747224,
            "unit": "ns/iter",
            "extra": "iterations: 90879\ncpu: 7701.856314439985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 17489.551421560034,
            "unit": "ns/iter",
            "extra": "iterations: 40343\ncpu: 17488.70931760146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 53112.50968485403,
            "unit": "ns/iter",
            "extra": "iterations: 13010\ncpu: 53110.86856264464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 42001.74968409624,
            "unit": "ns/iter",
            "extra": "iterations: 16619\ncpu: 42000.86647812721 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 42050.87388037579,
            "unit": "ns/iter",
            "extra": "iterations: 16635\ncpu: 42050.03306281971 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 42229.10450991666,
            "unit": "ns/iter",
            "extra": "iterations: 16630\ncpu: 42227.57666867109 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 24725.45622267229,
            "unit": "ns/iter",
            "extra": "iterations: 28131\ncpu: 24724.27571007073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 40008.49974174834,
            "unit": "ns/iter",
            "extra": "iterations: 17425\ncpu: 40008.195121950914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1914.1159438997552,
            "unit": "ns/iter",
            "extra": "iterations: 371835\ncpu: 1914.0527384457869 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 9701.727704610943,
            "unit": "ns/iter",
            "extra": "iterations: 71147\ncpu: 9701.272014280252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 7737.293089543186,
            "unit": "ns/iter",
            "extra": "iterations: 90515\ncpu: 7737.009335469191 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 7757.285763168364,
            "unit": "ns/iter",
            "extra": "iterations: 90596\ncpu: 7756.891032716616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 7714.024536688293,
            "unit": "ns/iter",
            "extra": "iterations: 90436\ncpu: 7714.041974435019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 17454.265382727415,
            "unit": "ns/iter",
            "extra": "iterations: 40760\ncpu: 17453.594210009924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 49069.788250890786,
            "unit": "ns/iter",
            "extra": "iterations: 14333\ncpu: 49068.9318356241 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 39679.7006014964,
            "unit": "ns/iter",
            "extra": "iterations: 17789\ncpu: 39677.95266737857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 38795.61178432522,
            "unit": "ns/iter",
            "extra": "iterations: 17990\ncpu: 38795.32518065572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 38494.07715775175,
            "unit": "ns/iter",
            "extra": "iterations: 18028\ncpu: 38492.017972043875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 24332.640407269526,
            "unit": "ns/iter",
            "extra": "iterations: 28777\ncpu: 24332.14025089511 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 41129.16867192455,
            "unit": "ns/iter",
            "extra": "iterations: 17371\ncpu: 41127.63801738532 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "GremSnoort",
            "username": "GremSnoort",
            "email": "33685945+GremSnoort@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "d00df85748c367e34b838c50472cb85d5c89201f",
          "message": "Add Parser& Serializer with tests, example, benchmarks and CI CD (gcc & clang) (#1)",
          "timestamp": "2023-12-13T17:22:18Z",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/d00df85748c367e34b838c50472cb85d5c89201f"
        },
        "date": 1702490329393,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 564.6396081719354,
            "unit": "ns/iter",
            "extra": "iterations: 1261982\ncpu: 564.6357079577998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5162.937740000189,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5162.811999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 9973.560089448267,
            "unit": "ns/iter",
            "extra": "iterations: 83176\ncpu: 9973.37092430509 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 15081.152814337853,
            "unit": "ns/iter",
            "extra": "iterations: 55466\ncpu: 15080.66743590668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 19705.822201116145,
            "unit": "ns/iter",
            "extra": "iterations: 42115\ncpu: 19705.36388460168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 25136.45021233875,
            "unit": "ns/iter",
            "extra": "iterations: 33673\ncpu: 25135.68437620645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 29890.10276215703,
            "unit": "ns/iter",
            "extra": "iterations: 28094\ncpu: 29888.517121093464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 34504.41172782991,
            "unit": "ns/iter",
            "extra": "iterations: 23926\ncpu: 34503.343642898944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 39474.652959905994,
            "unit": "ns/iter",
            "extra": "iterations: 21352\ncpu: 39474.227238666215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 587.9000452998752,
            "unit": "ns/iter",
            "extra": "iterations: 1189849\ncpu: 587.8906483091544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 437.64852991253304,
            "unit": "ns/iter",
            "extra": "iterations: 1606333\ncpu: 437.6496031644746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 447.3964592285324,
            "unit": "ns/iter",
            "extra": "iterations: 1569319\ncpu: 447.38781598897316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 438.3153185070362,
            "unit": "ns/iter",
            "extra": "iterations: 1608897\ncpu: 438.30848090337673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 883.9170007059678,
            "unit": "ns/iter",
            "extra": "iterations: 780597\ncpu: 883.8966842045261 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1995.4613494667515,
            "unit": "ns/iter",
            "extra": "iterations: 401314\ncpu: 1995.4374878524031 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 9951.802502429271,
            "unit": "ns/iter",
            "extra": "iterations: 78244\ncpu: 9951.46976125965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 7656.221548904261,
            "unit": "ns/iter",
            "extra": "iterations: 105778\ncpu: 7655.740324074951 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 7683.411435880579,
            "unit": "ns/iter",
            "extra": "iterations: 105545\ncpu: 7683.070728125443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 7427.961089923709,
            "unit": "ns/iter",
            "extra": "iterations: 108558\ncpu: 7427.81278210728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 35492.4107755844,
            "unit": "ns/iter",
            "extra": "iterations: 23015\ncpu: 35491.101455572345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 243778.89480520735,
            "unit": "ns/iter",
            "extra": "iterations: 3850\ncpu: 243771.53246753197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 185574.1182387215,
            "unit": "ns/iter",
            "extra": "iterations: 4474\ncpu: 185571.0326329912 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 192407.18641811504,
            "unit": "ns/iter",
            "extra": "iterations: 4506\ncpu: 192407.58988016038 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 195077.67733273658,
            "unit": "ns/iter",
            "extra": "iterations: 4469\ncpu: 195071.91765495675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 97160.2100962656,
            "unit": "ns/iter",
            "extra": "iterations: 8934\ncpu: 97158.79785090646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 187538.64952463575,
            "unit": "ns/iter",
            "extra": "iterations: 4628\ncpu: 187532.86516853978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5183.846326306683,
            "unit": "ns/iter",
            "extra": "iterations: 154327\ncpu: 5183.510986411958 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 24177.09900728432,
            "unit": "ns/iter",
            "extra": "iterations: 34048\ncpu: 24176.183623120385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 19197.401466354684,
            "unit": "ns/iter",
            "extra": "iterations: 43782\ncpu: 19196.58992279931 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 19218.620314528816,
            "unit": "ns/iter",
            "extra": "iterations: 43112\ncpu: 19217.786231211732 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 19032.296962774417,
            "unit": "ns/iter",
            "extra": "iterations: 42901\ncpu: 19031.437495629485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 51868.84510717862,
            "unit": "ns/iter",
            "extra": "iterations: 16095\ncpu: 51865.92730661685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 245403.34689571377,
            "unit": "ns/iter",
            "extra": "iterations: 3318\ncpu: 245395.50934297687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 202725.83732278371,
            "unit": "ns/iter",
            "extra": "iterations: 4303\ncpu: 202722.4029746692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 192874.03883950182,
            "unit": "ns/iter",
            "extra": "iterations: 4274\ncpu: 192866.77585400068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 201514.03557313394,
            "unit": "ns/iter",
            "extra": "iterations: 4301\ncpu: 201506.48686352067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 106813.50000000301,
            "unit": "ns/iter",
            "extra": "iterations: 8104\ncpu: 106807.81095755144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 193031.3789380954,
            "unit": "ns/iter",
            "extra": "iterations: 4539\ncpu: 193028.06785635542 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 774338.4719933422,
            "unit": "ns/iter",
            "extra": "iterations: 1214\ncpu: 774319.3574958794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 429876.6029268247,
            "unit": "ns/iter",
            "extra": "iterations: 2050\ncpu: 429865.7073170752 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 1900.5347789829439,
            "unit": "ns/iter",
            "extra": "iterations: 422094\ncpu: 1900.450136699412 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 10035.64018253652,
            "unit": "ns/iter",
            "extra": "iterations: 82175\ncpu: 10035.331913599057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 7526.482783721689,
            "unit": "ns/iter",
            "extra": "iterations: 108531\ncpu: 7525.945582368201 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 7425.840451081743,
            "unit": "ns/iter",
            "extra": "iterations: 110756\ncpu: 7425.560691971543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 7279.510397561305,
            "unit": "ns/iter",
            "extra": "iterations: 112863\ncpu: 7279.011722176393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 35376.3146332204,
            "unit": "ns/iter",
            "extra": "iterations: 23761\ncpu: 35375.16097807323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 256089.9122006786,
            "unit": "ns/iter",
            "extra": "iterations: 3508\ncpu: 256063.283922464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 190441.95291334522,
            "unit": "ns/iter",
            "extra": "iterations: 4651\ncpu: 190432.7886476023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 190698.40953203334,
            "unit": "ns/iter",
            "extra": "iterations: 4637\ncpu: 190683.13564804863 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 190367.29743700757,
            "unit": "ns/iter",
            "extra": "iterations: 4643\ncpu: 190367.60715054834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 95309.49901208241,
            "unit": "ns/iter",
            "extra": "iterations: 9110\ncpu: 95301.24039517003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 171332.45940086874,
            "unit": "ns/iter",
            "extra": "iterations: 5074\ncpu: 171329.95664170245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 193.31976330925107,
            "unit": "ns/iter",
            "extra": "iterations: 3587466\ncpu: 193.31316310733033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1380.8308048327347,
            "unit": "ns/iter",
            "extra": "iterations: 506888\ncpu: 1380.8344249617362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1094.9882222484016,
            "unit": "ns/iter",
            "extra": "iterations: 635775\ncpu: 1094.9502575596741 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1119.282146468792,
            "unit": "ns/iter",
            "extra": "iterations: 616063\ncpu: 1119.231474703068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 838.6898939489937,
            "unit": "ns/iter",
            "extra": "iterations: 831393\ncpu: 838.6752113621382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9510.516428171684,
            "unit": "ns/iter",
            "extra": "iterations: 75054\ncpu: 9509.884882884295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 11903.291939293233,
            "unit": "ns/iter",
            "extra": "iterations: 58841\ncpu: 11903.332710185057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2667.3152434550766,
            "unit": "ns/iter",
            "extra": "iterations: 263149\ncpu: 2667.270633747425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2682.000540778914,
            "unit": "ns/iter",
            "extra": "iterations: 260735\ncpu: 2681.9506395382173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2650.1237275482235,
            "unit": "ns/iter",
            "extra": "iterations: 263959\ncpu: 2650.0812626203074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5042.981096001171,
            "unit": "ns/iter",
            "extra": "iterations: 139124\ncpu: 5042.892671286055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5017.033787751461,
            "unit": "ns/iter",
            "extra": "iterations: 139666\ncpu: 5016.895307376207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1917.501221676902,
            "unit": "ns/iter",
            "extra": "iterations: 365072\ncpu: 1917.4584739448755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 9702.429347297164,
            "unit": "ns/iter",
            "extra": "iterations: 71809\ncpu: 9702.216992299082 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 7628.584461898593,
            "unit": "ns/iter",
            "extra": "iterations: 91414\ncpu: 7628.435469402867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 7773.337370838922,
            "unit": "ns/iter",
            "extra": "iterations: 89907\ncpu: 7773.223442001125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 7701.996214747224,
            "unit": "ns/iter",
            "extra": "iterations: 90879\ncpu: 7701.856314439985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 17489.551421560034,
            "unit": "ns/iter",
            "extra": "iterations: 40343\ncpu: 17488.70931760146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 53112.50968485403,
            "unit": "ns/iter",
            "extra": "iterations: 13010\ncpu: 53110.86856264464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 42001.74968409624,
            "unit": "ns/iter",
            "extra": "iterations: 16619\ncpu: 42000.86647812721 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 42050.87388037579,
            "unit": "ns/iter",
            "extra": "iterations: 16635\ncpu: 42050.03306281971 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 42229.10450991666,
            "unit": "ns/iter",
            "extra": "iterations: 16630\ncpu: 42227.57666867109 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 24725.45622267229,
            "unit": "ns/iter",
            "extra": "iterations: 28131\ncpu: 24724.27571007073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 40008.49974174834,
            "unit": "ns/iter",
            "extra": "iterations: 17425\ncpu: 40008.195121950914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1914.1159438997552,
            "unit": "ns/iter",
            "extra": "iterations: 371835\ncpu: 1914.0527384457869 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 9701.727704610943,
            "unit": "ns/iter",
            "extra": "iterations: 71147\ncpu: 9701.272014280252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 7737.293089543186,
            "unit": "ns/iter",
            "extra": "iterations: 90515\ncpu: 7737.009335469191 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 7757.285763168364,
            "unit": "ns/iter",
            "extra": "iterations: 90596\ncpu: 7756.891032716616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 7714.024536688293,
            "unit": "ns/iter",
            "extra": "iterations: 90436\ncpu: 7714.041974435019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 17454.265382727415,
            "unit": "ns/iter",
            "extra": "iterations: 40760\ncpu: 17453.594210009924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 49069.788250890786,
            "unit": "ns/iter",
            "extra": "iterations: 14333\ncpu: 49068.9318356241 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 39679.7006014964,
            "unit": "ns/iter",
            "extra": "iterations: 17789\ncpu: 39677.95266737857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 38795.61178432522,
            "unit": "ns/iter",
            "extra": "iterations: 17990\ncpu: 38795.32518065572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 38494.07715775175,
            "unit": "ns/iter",
            "extra": "iterations: 18028\ncpu: 38492.017972043875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 24332.640407269526,
            "unit": "ns/iter",
            "extra": "iterations: 28777\ncpu: 24332.14025089511 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 41129.16867192455,
            "unit": "ns/iter",
            "extra": "iterations: 17371\ncpu: 41127.63801738532 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "GremSnoort",
            "username": "GremSnoort",
            "email": "33685945+GremSnoort@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "d00df85748c367e34b838c50472cb85d5c89201f",
          "message": "Add Parser& Serializer with tests, example, benchmarks and CI CD (gcc & clang) (#1)",
          "timestamp": "2023-12-13T17:22:18Z",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/d00df85748c367e34b838c50472cb85d5c89201f"
        },
        "date": 1702492941235,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 545.7225231819536,
            "unit": "ns/iter",
            "extra": "iterations: 1276103\ncpu: 545.7027371614988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5094.954979999784,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5094.854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 9961.033037108073,
            "unit": "ns/iter",
            "extra": "iterations: 83270\ncpu: 9960.858652575958 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 14921.23237324723,
            "unit": "ns/iter",
            "extra": "iterations: 56349\ncpu: 14921.104189959005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 19553.776044227925,
            "unit": "ns/iter",
            "extra": "iterations: 42687\ncpu: 19553.599456509004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 24168.2898261824,
            "unit": "ns/iter",
            "extra": "iterations: 34117\ncpu: 24167.227481900503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 28768.673446018856,
            "unit": "ns/iter",
            "extra": "iterations: 28813\ncpu: 28767.042654357403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 33382.70159828961,
            "unit": "ns/iter",
            "extra": "iterations: 24839\ncpu: 33381.23515439429 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 38430.25553046891,
            "unit": "ns/iter",
            "extra": "iterations: 22150\ncpu: 38427.93679458237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 562.5170520723258,
            "unit": "ns/iter",
            "extra": "iterations: 1246652\ncpu: 562.488810028781 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 412.1286891068724,
            "unit": "ns/iter",
            "extra": "iterations: 1586529\ncpu: 412.12577898040297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 418.2996161703094,
            "unit": "ns/iter",
            "extra": "iterations: 1672096\ncpu: 418.2835196065292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 411.24928684794446,
            "unit": "ns/iter",
            "extra": "iterations: 1703704\ncpu: 411.23733935002844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 850.262436475554,
            "unit": "ns/iter",
            "extra": "iterations: 823304\ncpu: 850.2257975182924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1897.116327350966,
            "unit": "ns/iter",
            "extra": "iterations: 422910\ncpu: 1897.0655695065163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 10121.059497681865,
            "unit": "ns/iter",
            "extra": "iterations: 80188\ncpu: 10120.832294108848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 7580.544930558855,
            "unit": "ns/iter",
            "extra": "iterations: 105485\ncpu: 7579.89951177893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 7502.423048408869,
            "unit": "ns/iter",
            "extra": "iterations: 107912\ncpu: 7502.001630958564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 7332.93628531279,
            "unit": "ns/iter",
            "extra": "iterations: 109802\ncpu: 7332.513979708934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 35930.40123377009,
            "unit": "ns/iter",
            "extra": "iterations: 23181\ncpu: 35928.02726370739 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 232163.69010989575,
            "unit": "ns/iter",
            "extra": "iterations: 3640\ncpu: 232134.8901098904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 177368.72360591023,
            "unit": "ns/iter",
            "extra": "iterations: 4537\ncpu: 177358.76129601017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 176216.11509685515,
            "unit": "ns/iter",
            "extra": "iterations: 4544\ncpu: 176208.6927816897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 185394.6502093884,
            "unit": "ns/iter",
            "extra": "iterations: 4537\ncpu: 185389.35419880983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 97383.11113604074,
            "unit": "ns/iter",
            "extra": "iterations: 8908\ncpu: 97380.64660978883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 174976.4252366115,
            "unit": "ns/iter",
            "extra": "iterations: 4755\ncpu: 174965.46792849578 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5224.011236534493,
            "unit": "ns/iter",
            "extra": "iterations: 155297\ncpu: 5223.868458502095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 24965.09935004853,
            "unit": "ns/iter",
            "extra": "iterations: 33387\ncpu: 24964.468206188045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 19092.819181600564,
            "unit": "ns/iter",
            "extra": "iterations: 43646\ncpu: 19091.960317096633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 18804.602679210737,
            "unit": "ns/iter",
            "extra": "iterations: 42102\ncpu: 18803.797919338802 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 18159.532973066453,
            "unit": "ns/iter",
            "extra": "iterations: 45522\ncpu: 18158.923158033405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 52009.60482862236,
            "unit": "ns/iter",
            "extra": "iterations: 15988\ncpu: 52008.737803352335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 264288.97016271047,
            "unit": "ns/iter",
            "extra": "iterations: 3318\ncpu: 264280.4701627492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 202090.39837394975,
            "unit": "ns/iter",
            "extra": "iterations: 4305\ncpu: 202086.06271776932 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 202290.12252043435,
            "unit": "ns/iter",
            "extra": "iterations: 4285\ncpu: 202281.77362893903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 193642.1031380321,
            "unit": "ns/iter",
            "extra": "iterations: 4557\ncpu: 193632.65306122488 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 108966.12069182315,
            "unit": "ns/iter",
            "extra": "iterations: 7979\ncpu: 108961.73705978213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 184718.42291436365,
            "unit": "ns/iter",
            "extra": "iterations: 4495\ncpu: 184712.74749721837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 774066.8976898348,
            "unit": "ns/iter",
            "extra": "iterations: 1212\ncpu: 774017.1617161732 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 435840.43478268414,
            "unit": "ns/iter",
            "extra": "iterations: 1978\ncpu: 435808.0889787663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 1871.1669807510202,
            "unit": "ns/iter",
            "extra": "iterations: 428229\ncpu: 1871.0526377242143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 10374.7744538881,
            "unit": "ns/iter",
            "extra": "iterations: 81531\ncpu: 10373.664005102335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 7583.30195611357,
            "unit": "ns/iter",
            "extra": "iterations: 109145\ncpu: 7583.133446332798 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 7632.9132174750375,
            "unit": "ns/iter",
            "extra": "iterations: 107948\ncpu: 7632.676844406515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 7161.078739005136,
            "unit": "ns/iter",
            "extra": "iterations: 116194\ncpu: 7160.858564125475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 35424.96858792924,
            "unit": "ns/iter",
            "extra": "iterations: 23717\ncpu: 35424.02074461347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 254361.90927301763,
            "unit": "ns/iter",
            "extra": "iterations: 3494\ncpu: 254354.9513451624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 190735.26019964938,
            "unit": "ns/iter",
            "extra": "iterations: 4608\ncpu: 190729.2100694439 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 193504.33506606676,
            "unit": "ns/iter",
            "extra": "iterations: 4617\ncpu: 193497.162659736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 189341.7785512181,
            "unit": "ns/iter",
            "extra": "iterations: 4597\ncpu: 189331.39003698033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 94556.2064294177,
            "unit": "ns/iter",
            "extra": "iterations: 9301\ncpu: 94554.01569723662 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 173460.40152579732,
            "unit": "ns/iter",
            "extra": "iterations: 4981\ncpu: 173455.63139931858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 192.6462759822624,
            "unit": "ns/iter",
            "extra": "iterations: 3637429\ncpu: 192.63996630587158 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1412.6588543090538,
            "unit": "ns/iter",
            "extra": "iterations: 494985\ncpu: 1412.6484640948731 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1039.6954469206335,
            "unit": "ns/iter",
            "extra": "iterations: 674247\ncpu: 1039.6747779374634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1046.7194185987232,
            "unit": "ns/iter",
            "extra": "iterations: 670105\ncpu: 1046.6967117093538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 777.3326128731862,
            "unit": "ns/iter",
            "extra": "iterations: 901276\ncpu: 777.3031790483726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9523.376183394392,
            "unit": "ns/iter",
            "extra": "iterations: 73940\ncpu: 9523.063294563122 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 11932.230241427835,
            "unit": "ns/iter",
            "extra": "iterations: 58734\ncpu: 11931.989988762938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2791.918705995107,
            "unit": "ns/iter",
            "extra": "iterations: 251962\ncpu: 2791.8043196989834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2771.1733093275334,
            "unit": "ns/iter",
            "extra": "iterations: 252710\ncpu: 2771.0549641881967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2770.2540552486857,
            "unit": "ns/iter",
            "extra": "iterations: 253437\ncpu: 2770.1677339930734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5149.841732583706,
            "unit": "ns/iter",
            "extra": "iterations: 136282\ncpu: 5149.7475822192355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5271.379766496439,
            "unit": "ns/iter",
            "extra": "iterations: 133274\ncpu: 5271.292225040099 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1936.9389102686675,
            "unit": "ns/iter",
            "extra": "iterations: 361190\ncpu: 1936.8988620947546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 9861.752190763966,
            "unit": "ns/iter",
            "extra": "iterations: 71208\ncpu: 9861.41304347832 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 7763.943828224215,
            "unit": "ns/iter",
            "extra": "iterations: 89885\ncpu: 7763.620181342859 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 7736.453035645666,
            "unit": "ns/iter",
            "extra": "iterations: 89355\ncpu: 7736.227407531707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 7646.664473037342,
            "unit": "ns/iter",
            "extra": "iterations: 91629\ncpu: 7646.538759562998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 17325.215459962055,
            "unit": "ns/iter",
            "extra": "iterations: 40634\ncpu: 17324.56809568324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 53292.10645896433,
            "unit": "ns/iter",
            "extra": "iterations: 13160\ncpu: 53287.46960486365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 42232.05043175936,
            "unit": "ns/iter",
            "extra": "iterations: 16676\ncpu: 42229.839289997944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 41911.31863716144,
            "unit": "ns/iter",
            "extra": "iterations: 16671\ncpu: 41909.87343290813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 42274.043399302536,
            "unit": "ns/iter",
            "extra": "iterations: 16521\ncpu: 42273.252224442054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 25156.562218089075,
            "unit": "ns/iter",
            "extra": "iterations: 27934\ncpu: 25155.573852652706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 42583.43975140123,
            "unit": "ns/iter",
            "extra": "iterations: 16573\ncpu: 42580.89663911174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1912.4829190378746,
            "unit": "ns/iter",
            "extra": "iterations: 364997\ncpu: 1912.4677737077109 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 9988.76949590706,
            "unit": "ns/iter",
            "extra": "iterations: 69630\ncpu: 9988.598305328203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 7958.277343263442,
            "unit": "ns/iter",
            "extra": "iterations: 88349\ncpu: 7957.991601489625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 7824.742467285824,
            "unit": "ns/iter",
            "extra": "iterations: 89410\ncpu: 7824.55989262942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 7847.364816206709,
            "unit": "ns/iter",
            "extra": "iterations: 89149\ncpu: 7847.202997229412 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 17219.853904034426,
            "unit": "ns/iter",
            "extra": "iterations: 40535\ncpu: 17219.721228567792 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 51490.863850473324,
            "unit": "ns/iter",
            "extra": "iterations: 13162\ncpu: 51489.598845159904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 42045.07111164004,
            "unit": "ns/iter",
            "extra": "iterations: 16678\ncpu: 42043.98608945908 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 41461.91527024036,
            "unit": "ns/iter",
            "extra": "iterations: 16948\ncpu: 41461.58248760876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 41281.10277916987,
            "unit": "ns/iter",
            "extra": "iterations: 15976\ncpu: 41280.06384576876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 24753.3038233674,
            "unit": "ns/iter",
            "extra": "iterations: 28352\ncpu: 24752.77934537238 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 41041.31934623846,
            "unit": "ns/iter",
            "extra": "iterations: 17254\ncpu: 41039.57922800516 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}