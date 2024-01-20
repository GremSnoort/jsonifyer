window.BENCHMARK_DATA = {
  "lastUpdate": 1705778467150,
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
        "date": 1702503996666,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 545.1760967548104,
            "unit": "ns/iter",
            "extra": "iterations: 1274396\ncpu: 545.1693194266146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5063.124240000434,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5063.082000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 9893.613070845564,
            "unit": "ns/iter",
            "extra": "iterations: 84677\ncpu: 9893.21539497148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 14870.35691627863,
            "unit": "ns/iter",
            "extra": "iterations: 56114\ncpu: 14869.852443240545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 19536.830209016134,
            "unit": "ns/iter",
            "extra": "iterations: 42676\ncpu: 19535.74140031868 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 24349.382438081535,
            "unit": "ns/iter",
            "extra": "iterations: 34199\ncpu: 24348.04234041933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 29045.13433970344,
            "unit": "ns/iter",
            "extra": "iterations: 28949\ncpu: 29044.132785243022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 34164.811747537045,
            "unit": "ns/iter",
            "extra": "iterations: 24669\ncpu: 34163.12781223399 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 38596.073821870166,
            "unit": "ns/iter",
            "extra": "iterations: 22175\ncpu: 38594.01578353997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 560.4306985528002,
            "unit": "ns/iter",
            "extra": "iterations: 1242254\ncpu: 560.4184007457415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 418.01860372956804,
            "unit": "ns/iter",
            "extra": "iterations: 1675578\ncpu: 417.9990427183936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 429.1119851386614,
            "unit": "ns/iter",
            "extra": "iterations: 1630002\ncpu: 429.0917434457131 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 417.50471657890586,
            "unit": "ns/iter",
            "extra": "iterations: 1677169\ncpu: 417.4842845294668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 863.0115722377416,
            "unit": "ns/iter",
            "extra": "iterations: 794142\ncpu: 862.9818092985888 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1998.8857594555816,
            "unit": "ns/iter",
            "extra": "iterations: 400392\ncpu: 1998.772203240824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 10264.364522294009,
            "unit": "ns/iter",
            "extra": "iterations: 79013\ncpu: 10263.818612127121 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 8038.96501051034,
            "unit": "ns/iter",
            "extra": "iterations: 101802\ncpu: 8038.437358794508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 7541.380695699809,
            "unit": "ns/iter",
            "extra": "iterations: 105189\ncpu: 7541.18586544222 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 7476.149440889097,
            "unit": "ns/iter",
            "extra": "iterations: 108297\ncpu: 7475.969786790013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 35909.213487914734,
            "unit": "ns/iter",
            "extra": "iterations: 21219\ncpu: 35908.31330411421 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 225068.1981627227,
            "unit": "ns/iter",
            "extra": "iterations: 3810\ncpu: 225056.37795275563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 170782.279639725,
            "unit": "ns/iter",
            "extra": "iterations: 4774\ncpu: 170777.27272727242 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 183150.25452138847,
            "unit": "ns/iter",
            "extra": "iterations: 4534\ncpu: 183142.01588001772 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 183731.24435185143,
            "unit": "ns/iter",
            "extra": "iterations: 4559\ncpu: 183726.2557578415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 98435.90003379938,
            "unit": "ns/iter",
            "extra": "iterations: 8873\ncpu: 98429.02062436636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 184191.85247628612,
            "unit": "ns/iter",
            "extra": "iterations: 4745\ncpu: 184186.99683877773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5351.0280707473885,
            "unit": "ns/iter",
            "extra": "iterations: 153505\ncpu: 5350.866095566916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 24711.893780553495,
            "unit": "ns/iter",
            "extra": "iterations: 33958\ncpu: 24710.995936156425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 18885.591887945284,
            "unit": "ns/iter",
            "extra": "iterations: 43836\ncpu: 18884.978100191605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 18888.440371966746,
            "unit": "ns/iter",
            "extra": "iterations: 44090\ncpu: 18888.20821047853 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 18694.26057670862,
            "unit": "ns/iter",
            "extra": "iterations: 44390\ncpu: 18693.58639333183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 51274.13048584539,
            "unit": "ns/iter",
            "extra": "iterations: 16178\ncpu: 51271.999011002554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 249719.1989182609,
            "unit": "ns/iter",
            "extra": "iterations: 3328\ncpu: 249709.55528846016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 203868.6291686212,
            "unit": "ns/iter",
            "extra": "iterations: 4258\ncpu: 203859.67590418042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 204027.22284777174,
            "unit": "ns/iter",
            "extra": "iterations: 4263\ncpu: 204021.81562280125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 201392.87306715501,
            "unit": "ns/iter",
            "extra": "iterations: 4333\ncpu: 201383.037156704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 107185.8418398674,
            "unit": "ns/iter",
            "extra": "iterations: 8131\ncpu: 107183.17550116852 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 191882.03882195617,
            "unit": "ns/iter",
            "extra": "iterations: 4482\ncpu: 191877.97858099086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 778256.9983443024,
            "unit": "ns/iter",
            "extra": "iterations: 1208\ncpu: 778236.837748343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 430203.4482248198,
            "unit": "ns/iter",
            "extra": "iterations: 2028\ncpu: 430178.3530572015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 1909.100822382384,
            "unit": "ns/iter",
            "extra": "iterations: 422188\ncpu: 1909.0741565368853 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 10072.854843038307,
            "unit": "ns/iter",
            "extra": "iterations: 81994\ncpu: 10072.544332512152 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 7746.82146522216,
            "unit": "ns/iter",
            "extra": "iterations: 110113\ncpu: 7746.568525060668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 7485.616162073879,
            "unit": "ns/iter",
            "extra": "iterations: 110122\ncpu: 7485.368046348609 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 7189.812203365755,
            "unit": "ns/iter",
            "extra": "iterations: 114198\ncpu: 7189.517329550404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 35506.19245972608,
            "unit": "ns/iter",
            "extra": "iterations: 23527\ncpu: 35504.95600799076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 240570.6439104163,
            "unit": "ns/iter",
            "extra": "iterations: 3662\ncpu: 240562.7252867276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 183366.43914577222,
            "unit": "ns/iter",
            "extra": "iterations: 4823\ncpu: 183359.07111756102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 183051.81475341614,
            "unit": "ns/iter",
            "extra": "iterations: 4826\ncpu: 183049.58557811822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 182245.2311971857,
            "unit": "ns/iter",
            "extra": "iterations: 4853\ncpu: 182238.80074180916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 93790.09892818489,
            "unit": "ns/iter",
            "extra": "iterations: 9330\ncpu: 93788.93890675207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 183267.47809839406,
            "unit": "ns/iter",
            "extra": "iterations: 4817\ncpu: 183262.52854473787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 195.8845225651328,
            "unit": "ns/iter",
            "extra": "iterations: 3576006\ncpu: 195.88199796085343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1439.1328088704104,
            "unit": "ns/iter",
            "extra": "iterations: 486466\ncpu: 1439.0950241126798 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1106.5666025299859,
            "unit": "ns/iter",
            "extra": "iterations: 633024\ncpu: 1106.5389305934614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1179.2573787399472,
            "unit": "ns/iter",
            "extra": "iterations: 593394\ncpu: 1179.2227423937657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 846.1603194452974,
            "unit": "ns/iter",
            "extra": "iterations: 826057\ncpu: 846.1209093319209 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9459.098208209743,
            "unit": "ns/iter",
            "extra": "iterations: 74953\ncpu: 9459.079689939037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 12216.75518483588,
            "unit": "ns/iter",
            "extra": "iterations: 57186\ncpu: 12216.295946560305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2758.424287909569,
            "unit": "ns/iter",
            "extra": "iterations: 253163\ncpu: 2758.3505488558667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2738.6587108445906,
            "unit": "ns/iter",
            "extra": "iterations: 255997\ncpu: 2738.578577092693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2740.4146429312805,
            "unit": "ns/iter",
            "extra": "iterations: 255427\ncpu: 2740.382966561887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5110.825138091028,
            "unit": "ns/iter",
            "extra": "iterations: 144108\ncpu: 5110.657978738171 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5182.415900809833,
            "unit": "ns/iter",
            "extra": "iterations: 135578\ncpu: 5182.343743085159 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1952.4648912656876,
            "unit": "ns/iter",
            "extra": "iterations: 356051\ncpu: 1952.4228270669018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 9871.210604307378,
            "unit": "ns/iter",
            "extra": "iterations: 70858\ncpu: 9870.896723023534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 7939.368532890116,
            "unit": "ns/iter",
            "extra": "iterations: 88003\ncpu: 7939.150938036244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 7908.093604414712,
            "unit": "ns/iter",
            "extra": "iterations: 88436\ncpu: 7907.825998462178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 7784.479043447505,
            "unit": "ns/iter",
            "extra": "iterations: 89948\ncpu: 7784.375416907645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 17309.68021613093,
            "unit": "ns/iter",
            "extra": "iterations: 40346\ncpu: 17308.82119664899 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 52834.18792464039,
            "unit": "ns/iter",
            "extra": "iterations: 12952\ncpu: 52833.407967881 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 43093.42220599169,
            "unit": "ns/iter",
            "extra": "iterations: 16428\ncpu: 43092.76844411952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 42642.00156178048,
            "unit": "ns/iter",
            "extra": "iterations: 17288\ncpu: 42640.28227672413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 42827.39546459673,
            "unit": "ns/iter",
            "extra": "iterations: 16272\ncpu: 42825.21509341191 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 24941.237060404907,
            "unit": "ns/iter",
            "extra": "iterations: 28208\ncpu: 24940.50269427099 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 42198.091491908206,
            "unit": "ns/iter",
            "extra": "iterations: 16690\ncpu: 42196.7525464354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1868.4457138686932,
            "unit": "ns/iter",
            "extra": "iterations: 369984\ncpu: 1868.2918720809346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 9897.062362374818,
            "unit": "ns/iter",
            "extra": "iterations: 70844\ncpu: 9896.728022133206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 7885.281666517021,
            "unit": "ns/iter",
            "extra": "iterations: 88832\ncpu: 7885.176512968329 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 7805.638235326288,
            "unit": "ns/iter",
            "extra": "iterations: 89807\ncpu: 7805.414945382929 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 8051.594609063057,
            "unit": "ns/iter",
            "extra": "iterations: 89669\ncpu: 8051.393458162803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 17273.935397206867,
            "unit": "ns/iter",
            "extra": "iterations: 40571\ncpu: 17273.11873012724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 51763.2241301765,
            "unit": "ns/iter",
            "extra": "iterations: 13336\ncpu: 51760.58038392413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 41293.70483310639,
            "unit": "ns/iter",
            "extra": "iterations: 16987\ncpu: 41292.40007064178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 40812.29321765494,
            "unit": "ns/iter",
            "extra": "iterations: 17059\ncpu: 40810.48127088325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 41028.84484975693,
            "unit": "ns/iter",
            "extra": "iterations: 17106\ncpu: 41026.207178767865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 24697.39010220054,
            "unit": "ns/iter",
            "extra": "iterations: 28572\ncpu: 24696.234075318687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 40698.18319773813,
            "unit": "ns/iter",
            "extra": "iterations: 17331\ncpu: 40696.9303560097 ns\nthreads: 1"
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
        "date": 1705575646509,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 559.438346356162,
            "unit": "ns/iter",
            "extra": "iterations: 1251394\ncpu: 559.4113444686485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5262.661830000752,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5262.309 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 9848.783969138272,
            "unit": "ns/iter",
            "extra": "iterations: 83988\ncpu: 9848.272372243653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 14465.377391363685,
            "unit": "ns/iter",
            "extra": "iterations: 57969\ncpu: 14464.893305042347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 19402.741285126034,
            "unit": "ns/iter",
            "extra": "iterations: 43202\ncpu: 19401.710568955154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 23778.397367678823,
            "unit": "ns/iter",
            "extra": "iterations: 35330\ncpu: 23777.421454854244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 29065.989489795575,
            "unit": "ns/iter",
            "extra": "iterations: 29400\ncpu: 29064.99659863943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 33609.08508496586,
            "unit": "ns/iter",
            "extra": "iterations: 24834\ncpu: 33608.53668357895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 37176.634186295196,
            "unit": "ns/iter",
            "extra": "iterations: 22588\ncpu: 37174.0348857801 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 564.2291819681463,
            "unit": "ns/iter",
            "extra": "iterations: 1241712\ncpu: 564.2056290025387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 415.8702916301795,
            "unit": "ns/iter",
            "extra": "iterations: 1677810\ncpu: 415.8510796812504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 425.88715977103004,
            "unit": "ns/iter",
            "extra": "iterations: 1635259\ncpu: 425.8749837181755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 396.3715757529761,
            "unit": "ns/iter",
            "extra": "iterations: 1689459\ncpu: 396.3269898825601 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 855.6385364458099,
            "unit": "ns/iter",
            "extra": "iterations: 814237\ncpu: 855.5902028524866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1901.6060517839119,
            "unit": "ns/iter",
            "extra": "iterations: 422487\ncpu: 1901.4788620714942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 9545.696438375591,
            "unit": "ns/iter",
            "extra": "iterations: 83782\ncpu: 9545.635100618261 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 7669.662766931206,
            "unit": "ns/iter",
            "extra": "iterations: 108127\ncpu: 7669.1168718266645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 7467.870811684194,
            "unit": "ns/iter",
            "extra": "iterations: 108934\ncpu: 7467.410542163145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 7253.723441263215,
            "unit": "ns/iter",
            "extra": "iterations: 112110\ncpu: 7253.258406921778 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 36144.13992348946,
            "unit": "ns/iter",
            "extra": "iterations: 22741\ncpu: 36142.00782727227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 239150.89406897285,
            "unit": "ns/iter",
            "extra": "iterations: 3625\ncpu: 239131.33793103395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 182306.8232201423,
            "unit": "ns/iter",
            "extra": "iterations: 4565\ncpu: 182295.70646221246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 189279.1132445982,
            "unit": "ns/iter",
            "extra": "iterations: 4583\ncpu: 189267.3139864716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 191924.7908252815,
            "unit": "ns/iter",
            "extra": "iterations: 4556\ncpu: 191921.4881474983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 97530.7021894502,
            "unit": "ns/iter",
            "extra": "iterations: 8952\ncpu: 97523.9946380696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 187011.07937858198,
            "unit": "ns/iter",
            "extra": "iterations: 4699\ncpu: 187006.51202383486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5187.147995102538,
            "unit": "ns/iter",
            "extra": "iterations: 156816\ncpu: 5186.95860116315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 24357.81524256163,
            "unit": "ns/iter",
            "extra": "iterations: 34548\ncpu: 24335.061363899564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 18245.781522461417,
            "unit": "ns/iter",
            "extra": "iterations: 45190\ncpu: 18244.59393671166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 18439.625725830014,
            "unit": "ns/iter",
            "extra": "iterations: 45293\ncpu: 18438.53354823043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 18078.610180871965,
            "unit": "ns/iter",
            "extra": "iterations: 46165\ncpu: 18077.186180006505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 52104.18784495607,
            "unit": "ns/iter",
            "extra": "iterations: 15944\ncpu: 52102.03838434522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 266116.15901489614,
            "unit": "ns/iter",
            "extra": "iterations: 3289\ncpu: 266097.3244147162 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 202979.4455098129,
            "unit": "ns/iter",
            "extra": "iterations: 4276\ncpu: 202964.61646398588 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 202497.8914312509,
            "unit": "ns/iter",
            "extra": "iterations: 4283\ncpu: 202486.10786831743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 187368.13824884765,
            "unit": "ns/iter",
            "extra": "iterations: 4340\ncpu: 187359.861751153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 107714.81035543191,
            "unit": "ns/iter",
            "extra": "iterations: 8131\ncpu: 107711.48690198024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 193907.0956078048,
            "unit": "ns/iter",
            "extra": "iterations: 4508\ncpu: 193898.53593611345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 772931.1098360346,
            "unit": "ns/iter",
            "extra": "iterations: 1220\ncpu: 772903.2786885264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 430901.513793115,
            "unit": "ns/iter",
            "extra": "iterations: 2030\ncpu: 430855.8620689643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 1940.1166026033509,
            "unit": "ns/iter",
            "extra": "iterations: 412092\ncpu: 1940.0133950671218 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 10443.131412207078,
            "unit": "ns/iter",
            "extra": "iterations: 78912\ncpu: 10442.908556366601 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 8032.968886542526,
            "unit": "ns/iter",
            "extra": "iterations: 102303\ncpu: 8032.649091424453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 7703.303566905949,
            "unit": "ns/iter",
            "extra": "iterations: 106619\ncpu: 7702.799688610797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 7596.160850417626,
            "unit": "ns/iter",
            "extra": "iterations: 108088\ncpu: 7595.7164532602565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 35619.20599092049,
            "unit": "ns/iter",
            "extra": "iterations: 23569\ncpu: 35617.17086002775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 252077.90865248648,
            "unit": "ns/iter",
            "extra": "iterations: 3525\ncpu: 252066.4964539 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 189235.56646655014,
            "unit": "ns/iter",
            "extra": "iterations: 4664\ncpu: 189229.86706689544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 188808.8974689091,
            "unit": "ns/iter",
            "extra": "iterations: 4662\ncpu: 188801.02960102886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 181783.7419978725,
            "unit": "ns/iter",
            "extra": "iterations: 4655\ncpu: 181779.95703544567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 95680.16396121505,
            "unit": "ns/iter",
            "extra": "iterations: 9179\ncpu: 95678.45081163479 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 182313.26626482466,
            "unit": "ns/iter",
            "extra": "iterations: 4811\ncpu: 182307.56599459678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 194.8674816718569,
            "unit": "ns/iter",
            "extra": "iterations: 3594333\ncpu: 194.8613831829157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1436.9699937734908,
            "unit": "ns/iter",
            "extra": "iterations: 488232\ncpu: 1436.9275262580118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1166.462040250027,
            "unit": "ns/iter",
            "extra": "iterations: 599701\ncpu: 1166.4040913722088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1168.8918484658072,
            "unit": "ns/iter",
            "extra": "iterations: 598096\ncpu: 1168.8334314223853 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 841.0719535480041,
            "unit": "ns/iter",
            "extra": "iterations: 830105\ncpu: 841.0079447780658 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9340.178935296395,
            "unit": "ns/iter",
            "extra": "iterations: 74988\ncpu: 9339.631674401237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 11946.362289951017,
            "unit": "ns/iter",
            "extra": "iterations: 60700\ncpu: 11946.034596375692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2754.098154740195,
            "unit": "ns/iter",
            "extra": "iterations: 259855\ncpu: 2754.042831579163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2739.212426575562,
            "unit": "ns/iter",
            "extra": "iterations: 253151\ncpu: 2739.1359307290973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2752.0841124420845,
            "unit": "ns/iter",
            "extra": "iterations: 255741\ncpu: 2751.977586699028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5046.669666993391,
            "unit": "ns/iter",
            "extra": "iterations: 137985\ncpu: 5046.336195963322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5096.851644562451,
            "unit": "ns/iter",
            "extra": "iterations: 137757\ncpu: 5096.57367683673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1930.0706293241724,
            "unit": "ns/iter",
            "extra": "iterations: 361054\ncpu: 1929.9725248854825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 9673.008957026728,
            "unit": "ns/iter",
            "extra": "iterations: 71229\ncpu: 9672.601047326047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 7584.680903364456,
            "unit": "ns/iter",
            "extra": "iterations: 91126\ncpu: 7584.5335030617025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 7722.9876746544205,
            "unit": "ns/iter",
            "extra": "iterations: 91681\ncpu: 7722.760441094649 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 7626.044542190394,
            "unit": "ns/iter",
            "extra": "iterations: 91621\ncpu: 7625.887078289926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 17354.90417113871,
            "unit": "ns/iter",
            "extra": "iterations: 40061\ncpu: 17353.99515738503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 51754.10625239809,
            "unit": "ns/iter",
            "extra": "iterations: 13035\ncpu: 51749.451476792834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 43387.61478503241,
            "unit": "ns/iter",
            "extra": "iterations: 16165\ncpu: 43385.45004639693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 43699.074460601565,
            "unit": "ns/iter",
            "extra": "iterations: 17056\ncpu: 43697.43198874364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 43698.919067216215,
            "unit": "ns/iter",
            "extra": "iterations: 16038\ncpu: 43697.52462900678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 25115.604338097455,
            "unit": "ns/iter",
            "extra": "iterations: 27708\ncpu: 25114.714161974596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 43134.624001977085,
            "unit": "ns/iter",
            "extra": "iterations: 16157\ncpu: 43133.18685399592 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1887.8904745313582,
            "unit": "ns/iter",
            "extra": "iterations: 370197\ncpu: 1887.848631944587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 9936.930863248474,
            "unit": "ns/iter",
            "extra": "iterations: 70281\ncpu: 9936.319915766728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 7923.0564749174255,
            "unit": "ns/iter",
            "extra": "iterations: 88588\ncpu: 7922.604641712217 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 7864.295129132484,
            "unit": "ns/iter",
            "extra": "iterations: 89327\ncpu: 7864.035509980097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 7751.845596251097,
            "unit": "ns/iter",
            "extra": "iterations: 88981\ncpu: 7751.521111248624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 17353.913796983277,
            "unit": "ns/iter",
            "extra": "iterations: 39987\ncpu: 17353.807487433205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 52830.872312856474,
            "unit": "ns/iter",
            "extra": "iterations: 13118\ncpu: 52828.11404177487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 41712.24834140219,
            "unit": "ns/iter",
            "extra": "iterations: 16731\ncpu: 41711.194788117544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 40256.723174141945,
            "unit": "ns/iter",
            "extra": "iterations: 16458\ncpu: 40255.85733381986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 41479.528324180355,
            "unit": "ns/iter",
            "extra": "iterations: 16929\ncpu: 41476.47232559555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 24345.289646269437,
            "unit": "ns/iter",
            "extra": "iterations: 28666\ncpu: 24344.397544128944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 41955.35354959976,
            "unit": "ns/iter",
            "extra": "iterations: 17016\ncpu: 41953.3497884342 ns\nthreads: 1"
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
          "id": "4c1f90876aa9fbfe7c3d4e17807fabb3578467e0",
          "message": "Update parser.hpp (#2)",
          "timestamp": "2024-01-20T17:20:02Z",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/4c1f90876aa9fbfe7c3d4e17807fabb3578467e0"
        },
        "date": 1705773446221,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 553.285821742311,
            "unit": "ns/iter",
            "extra": "iterations: 1257651\ncpu: 553.2790098365922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5162.2872099994765,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5162.3150000000005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10105.811199980402,
            "unit": "ns/iter",
            "extra": "iterations: 82643\ncpu: 10105.586680057597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 15086.747955160497,
            "unit": "ns/iter",
            "extra": "iterations: 54772\ncpu: 15085.591177974144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 19723.150359339994,
            "unit": "ns/iter",
            "extra": "iterations: 42578\ncpu: 19722.196909201928 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 24493.179598799306,
            "unit": "ns/iter",
            "extra": "iterations: 33998\ncpu: 24492.190717101013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 29459.481579504063,
            "unit": "ns/iter",
            "extra": "iterations: 28338\ncpu: 29459.31611264026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 34335.53515720698,
            "unit": "ns/iter",
            "extra": "iterations: 24490\ncpu: 34335.13270722746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 38377.66425327383,
            "unit": "ns/iter",
            "extra": "iterations: 22237\ncpu: 38377.26312002521 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 545.9763072241243,
            "unit": "ns/iter",
            "extra": "iterations: 1251985\ncpu: 545.9671641433406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 417.56633276365045,
            "unit": "ns/iter",
            "extra": "iterations: 1678831\ncpu: 417.55435776442096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 429.2713534098561,
            "unit": "ns/iter",
            "extra": "iterations: 1632292\ncpu: 429.2585517787261 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 417.6299610277728,
            "unit": "ns/iter",
            "extra": "iterations: 1676064\ncpu: 417.6116186494081 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 860.7575553313455,
            "unit": "ns/iter",
            "extra": "iterations: 814458\ncpu: 860.7128912724796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1896.0893865882997,
            "unit": "ns/iter",
            "extra": "iterations: 421495\ncpu: 1896.0220168685246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 9871.751058466834,
            "unit": "ns/iter",
            "extra": "iterations: 82903\ncpu: 9871.452179052641 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 7790.791065678117,
            "unit": "ns/iter",
            "extra": "iterations: 104966\ncpu: 7790.73033172646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 7513.0488107821,
            "unit": "ns/iter",
            "extra": "iterations: 107886\ncpu: 7512.946072706391 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 7365.1845581754105,
            "unit": "ns/iter",
            "extra": "iterations: 109987\ncpu: 7364.8458454181055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 36065.1322938494,
            "unit": "ns/iter",
            "extra": "iterations: 22896\ncpu: 36065.07686932225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 241502.5416550014,
            "unit": "ns/iter",
            "extra": "iterations: 3565\ncpu: 241502.18793828905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 182784.9765434664,
            "unit": "ns/iter",
            "extra": "iterations: 4519\ncpu: 182780.50453640198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 185812.96364837454,
            "unit": "ns/iter",
            "extra": "iterations: 4539\ncpu: 185807.73298083295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 186504.7873857829,
            "unit": "ns/iter",
            "extra": "iterations: 4487\ncpu: 186500.35658569136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 98157.3232685961,
            "unit": "ns/iter",
            "extra": "iterations: 8909\ncpu: 98153.2831967673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 186478.42814434425,
            "unit": "ns/iter",
            "extra": "iterations: 4683\ncpu: 186475.82746102946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5377.177362602842,
            "unit": "ns/iter",
            "extra": "iterations: 152332\ncpu: 5377.128246199099 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 24780.101661487864,
            "unit": "ns/iter",
            "extra": "iterations: 33464\ncpu: 24780.28030121929 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 19607.758623933547,
            "unit": "ns/iter",
            "extra": "iterations: 42498\ncpu: 19607.833309802783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 19007.26227895528,
            "unit": "ns/iter",
            "extra": "iterations: 43713\ncpu: 19006.819481618768 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 18302.473443884282,
            "unit": "ns/iter",
            "extra": "iterations: 45771\ncpu: 18302.41200760309 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 51592.30244602374,
            "unit": "ns/iter",
            "extra": "iterations: 16026\ncpu: 51592.624485211665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 262951.02647783473,
            "unit": "ns/iter",
            "extra": "iterations: 3248\ncpu: 262946.82881773455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 202708.81569807918,
            "unit": "ns/iter",
            "extra": "iterations: 4319\ncpu: 202708.12688122154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 203420.42827053304,
            "unit": "ns/iter",
            "extra": "iterations: 4273\ncpu: 203417.06061315187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 204072.6482742423,
            "unit": "ns/iter",
            "extra": "iterations: 4259\ncpu: 204072.01220943994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 108128.57934132683,
            "unit": "ns/iter",
            "extra": "iterations: 8016\ncpu: 108127.08333333336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 195335.05324907368,
            "unit": "ns/iter",
            "extra": "iterations: 4432\ncpu: 195331.27256317696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 787057.3327814956,
            "unit": "ns/iter",
            "extra": "iterations: 1208\ncpu: 787045.198675496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 438694.91381871846,
            "unit": "ns/iter",
            "extra": "iterations: 2019\ncpu: 438689.79692917346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 1874.651767581614,
            "unit": "ns/iter",
            "extra": "iterations: 427901\ncpu: 1874.6305804379986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 9840.718644796518,
            "unit": "ns/iter",
            "extra": "iterations: 83766\ncpu: 9840.706253133681 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 7762.1713779923475,
            "unit": "ns/iter",
            "extra": "iterations: 106198\ncpu: 7762.086856626295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 7311.297355279506,
            "unit": "ns/iter",
            "extra": "iterations: 112337\ncpu: 7311.269661821129 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 7182.0804168317845,
            "unit": "ns/iter",
            "extra": "iterations: 108149\ncpu: 7181.620726959978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 35410.13746676286,
            "unit": "ns/iter",
            "extra": "iterations: 23693\ncpu: 35409.964968556014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 256299.98584224068,
            "unit": "ns/iter",
            "extra": "iterations: 3461\ncpu: 256297.16844842583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 192660.3630862431,
            "unit": "ns/iter",
            "extra": "iterations: 4627\ncpu: 192654.74389453183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 192515.5632759812,
            "unit": "ns/iter",
            "extra": "iterations: 4591\ncpu: 192506.27314310614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 192948.70955081278,
            "unit": "ns/iter",
            "extra": "iterations: 4586\ncpu: 192941.60488443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 97912.8985924875,
            "unit": "ns/iter",
            "extra": "iterations: 9023\ncpu: 97909.49794968394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 186001.56977722698,
            "unit": "ns/iter",
            "extra": "iterations: 4758\ncpu: 185996.88944934943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 196.68560267036162,
            "unit": "ns/iter",
            "extra": "iterations: 3559674\ncpu: 196.67503260130044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1427.0242611011295,
            "unit": "ns/iter",
            "extra": "iterations: 489343\ncpu: 1426.9810746245453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1043.7724339975086,
            "unit": "ns/iter",
            "extra": "iterations: 669709\ncpu: 1043.729739334545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1180.376079513019,
            "unit": "ns/iter",
            "extra": "iterations: 597839\ncpu: 1180.3274794719084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 852.0351586302479,
            "unit": "ns/iter",
            "extra": "iterations: 823866\ncpu: 851.9897653259151 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9346.400103667902,
            "unit": "ns/iter",
            "extra": "iterations: 73311\ncpu: 9346.295917392996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 11872.523993911662,
            "unit": "ns/iter",
            "extra": "iterations: 59140\ncpu: 11872.495772742646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2700.5965588802023,
            "unit": "ns/iter",
            "extra": "iterations: 261659\ncpu: 2700.5702077895303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2692.587173191861,
            "unit": "ns/iter",
            "extra": "iterations: 259862\ncpu: 2692.579138157955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2683.5458504905723,
            "unit": "ns/iter",
            "extra": "iterations: 260826\ncpu: 2683.532316563519 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5143.401072294048,
            "unit": "ns/iter",
            "extra": "iterations: 134851\ncpu: 5143.315214570133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5168.809773628602,
            "unit": "ns/iter",
            "extra": "iterations: 134955\ncpu: 5168.780704679367 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1991.7516016283173,
            "unit": "ns/iter",
            "extra": "iterations: 351049\ncpu: 1991.7433178843944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10008.3340365077,
            "unit": "ns/iter",
            "extra": "iterations: 69684\ncpu: 10007.82819585572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 7927.173137795292,
            "unit": "ns/iter",
            "extra": "iterations: 87826\ncpu: 7927.10359119169 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 7849.173408251628,
            "unit": "ns/iter",
            "extra": "iterations: 88629\ncpu: 7849.034740321898 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 7753.191637166404,
            "unit": "ns/iter",
            "extra": "iterations: 90113\ncpu: 7753.118861873369 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 17450.7115031069,
            "unit": "ns/iter",
            "extra": "iterations: 40250\ncpu: 17450.53167701866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 51762.22758512093,
            "unit": "ns/iter",
            "extra": "iterations: 12659\ncpu: 51757.92716644229 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 41393.213253938535,
            "unit": "ns/iter",
            "extra": "iterations: 16961\ncpu: 41392.60067212987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 41441.43617646906,
            "unit": "ns/iter",
            "extra": "iterations: 17000\ncpu: 41441.276470588746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 42177.35900996382,
            "unit": "ns/iter",
            "extra": "iterations: 16565\ncpu: 42177.62752791985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 25091.733783494874,
            "unit": "ns/iter",
            "extra": "iterations: 27842\ncpu: 25091.57388118649 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 42022.01050546146,
            "unit": "ns/iter",
            "extra": "iterations: 16658\ncpu: 42021.413134829854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1950.9129871807975,
            "unit": "ns/iter",
            "extra": "iterations: 363751\ncpu: 1950.8889322641317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 9973.836890373488,
            "unit": "ns/iter",
            "extra": "iterations: 70002\ncpu: 9973.915030998924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 7904.411851411527,
            "unit": "ns/iter",
            "extra": "iterations: 87517\ncpu: 7904.387718957375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 7914.949521351644,
            "unit": "ns/iter",
            "extra": "iterations: 88374\ncpu: 7914.922941136559 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 7842.494936695486,
            "unit": "ns/iter",
            "extra": "iterations: 89171\ncpu: 7842.4801785334585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 17278.61351832571,
            "unit": "ns/iter",
            "extra": "iterations: 40434\ncpu: 17278.520552010712 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 51970.64691854789,
            "unit": "ns/iter",
            "extra": "iterations: 13419\ncpu: 51970.97399210117 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 42073.8953620265,
            "unit": "ns/iter",
            "extra": "iterations: 16753\ncpu: 42073.65248015295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 41740.273521663876,
            "unit": "ns/iter",
            "extra": "iterations: 16708\ncpu: 41740.130476418286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 41936.15682268465,
            "unit": "ns/iter",
            "extra": "iterations: 16643\ncpu: 41935.97308177657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 24555.11497307657,
            "unit": "ns/iter",
            "extra": "iterations: 28598\ncpu: 24554.6506748725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 41143.06367759605,
            "unit": "ns/iter",
            "extra": "iterations: 17196\ncpu: 41142.335426843645 ns\nthreads: 1"
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
          "id": "4c1f90876aa9fbfe7c3d4e17807fabb3578467e0",
          "message": "Update parser.hpp (#2)",
          "timestamp": "2024-01-20T17:20:02Z",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/4c1f90876aa9fbfe7c3d4e17807fabb3578467e0"
        },
        "date": 1705774902162,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 556.8367867046773,
            "unit": "ns/iter",
            "extra": "iterations: 1246994\ncpu: 556.8158307096907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5119.20952999958,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5119.175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10080.155050578722,
            "unit": "ns/iter",
            "extra": "iterations: 82644\ncpu: 10079.894487198104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 14979.907428389026,
            "unit": "ns/iter",
            "extra": "iterations: 56486\ncpu: 14979.474560067982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 20136.326267370896,
            "unit": "ns/iter",
            "extra": "iterations: 42174\ncpu: 20135.384360032243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 24220.71555800419,
            "unit": "ns/iter",
            "extra": "iterations: 34471\ncpu: 24219.601984276636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 29075.954916901,
            "unit": "ns/iter",
            "extra": "iterations: 28880\ncpu: 29074.97576177286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 34313.35052812546,
            "unit": "ns/iter",
            "extra": "iterations: 24426\ncpu: 34311.066077130934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 38018.982126693954,
            "unit": "ns/iter",
            "extra": "iterations: 22100\ncpu: 38016.17647058828 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 561.7306360270748,
            "unit": "ns/iter",
            "extra": "iterations: 1241881\ncpu: 561.7073616554239 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 406.03819714328506,
            "unit": "ns/iter",
            "extra": "iterations: 1830739\ncpu: 406.0098135233911 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 428.33987089228907,
            "unit": "ns/iter",
            "extra": "iterations: 1642815\ncpu: 428.3173698803576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 412.42713956381385,
            "unit": "ns/iter",
            "extra": "iterations: 1689106\ncpu: 412.407391839233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 847.1986707742873,
            "unit": "ns/iter",
            "extra": "iterations: 831612\ncpu: 847.1424173773345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1895.521667809909,
            "unit": "ns/iter",
            "extra": "iterations: 428562\ncpu: 1895.4060322660418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 10210.493881772234,
            "unit": "ns/iter",
            "extra": "iterations: 80252\ncpu: 10210.15426406817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 7500.549979607159,
            "unit": "ns/iter",
            "extra": "iterations: 107884\ncpu: 7500.367987838807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 7233.907213366628,
            "unit": "ns/iter",
            "extra": "iterations: 112042\ncpu: 7233.49636743366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 7485.312687304148,
            "unit": "ns/iter",
            "extra": "iterations: 114453\ncpu: 7484.90209955177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 36039.31501084625,
            "unit": "ns/iter",
            "extra": "iterations: 23050\ncpu: 36037.86117136648 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 240790.37650601522,
            "unit": "ns/iter",
            "extra": "iterations: 3652\ncpu: 240781.40744797373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 189717.72161090487,
            "unit": "ns/iter",
            "extra": "iterations: 4544\ncpu: 189710.8054577461 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 192218.6033149167,
            "unit": "ns/iter",
            "extra": "iterations: 4525\ncpu: 192210.34254143634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 183335.9995210686,
            "unit": "ns/iter",
            "extra": "iterations: 4176\ncpu: 183328.9990421458 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 97740.04330268012,
            "unit": "ns/iter",
            "extra": "iterations: 8914\ncpu: 97737.9291002915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 184325.74029281686,
            "unit": "ns/iter",
            "extra": "iterations: 4713\ncpu: 184317.69573520045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5316.085724917655,
            "unit": "ns/iter",
            "extra": "iterations: 155859\ncpu: 5315.834825066237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 24491.58685683735,
            "unit": "ns/iter",
            "extra": "iterations: 33584\ncpu: 24490.742615531195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 19778.432243044623,
            "unit": "ns/iter",
            "extra": "iterations: 43811\ncpu: 19777.756727762404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 18761.613942447686,
            "unit": "ns/iter",
            "extra": "iterations: 45071\ncpu: 18759.07124314968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 19048.029185732546,
            "unit": "ns/iter",
            "extra": "iterations: 45022\ncpu: 19047.236906401355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 50462.709499240846,
            "unit": "ns/iter",
            "extra": "iterations: 16475\ncpu: 50461.76631259465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 262548.398061179,
            "unit": "ns/iter",
            "extra": "iterations: 3301\ncpu: 262537.17055437673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 203332.75005852204,
            "unit": "ns/iter",
            "extra": "iterations: 4273\ncpu: 203328.57477182284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 192802.97135478968,
            "unit": "ns/iter",
            "extra": "iterations: 4259\ncpu: 192792.39258041757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 202549.3592953083,
            "unit": "ns/iter",
            "extra": "iterations: 4314\ncpu: 202538.20120537755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 107530.09990083873,
            "unit": "ns/iter",
            "extra": "iterations: 8068\ncpu: 107523.01685671779 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 195136.41799416128,
            "unit": "ns/iter",
            "extra": "iterations: 4457\ncpu: 195129.41440430743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 773725.4921938713,
            "unit": "ns/iter",
            "extra": "iterations: 1217\ncpu: 773696.8775677851 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 426337.95684157644,
            "unit": "ns/iter",
            "extra": "iterations: 2039\ncpu: 426326.3364394293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 1866.9428033217696,
            "unit": "ns/iter",
            "extra": "iterations: 435305\ncpu: 1866.8809225715372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 9876.98592755137,
            "unit": "ns/iter",
            "extra": "iterations: 82928\ncpu: 9876.729210881795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 7569.668097109313,
            "unit": "ns/iter",
            "extra": "iterations: 107426\ncpu: 7569.437566324744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 7430.91028089706,
            "unit": "ns/iter",
            "extra": "iterations: 107335\ncpu: 7430.702007732818 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 7248.019886161606,
            "unit": "ns/iter",
            "extra": "iterations: 112440\ncpu: 7247.612949128407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 35427.347395594086,
            "unit": "ns/iter",
            "extra": "iterations: 23633\ncpu: 35426.530698599505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 256424.57402073173,
            "unit": "ns/iter",
            "extra": "iterations: 3472\ncpu: 256412.24078341038 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 191190.7455454311,
            "unit": "ns/iter",
            "extra": "iterations: 4602\ncpu: 191181.79052585835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 191017.6459830295,
            "unit": "ns/iter",
            "extra": "iterations: 4593\ncpu: 191002.67798824163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 191615.52235551184,
            "unit": "ns/iter",
            "extra": "iterations: 4585\ncpu: 191607.8516902937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 96377.15008246081,
            "unit": "ns/iter",
            "extra": "iterations: 9095\ncpu: 96373.32600329877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 185001.19797169123,
            "unit": "ns/iter",
            "extra": "iterations: 4733\ncpu: 184992.60511303533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 196.16202682986994,
            "unit": "ns/iter",
            "extra": "iterations: 3566397\ncpu: 196.1532885991091 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1436.3565180184842,
            "unit": "ns/iter",
            "extra": "iterations: 488469\ncpu: 1436.3451928372042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1055.3599885187223,
            "unit": "ns/iter",
            "extra": "iterations: 665424\ncpu: 1055.3208180047561 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1123.3497103191262,
            "unit": "ns/iter",
            "extra": "iterations: 627242\ncpu: 1123.3251281004832 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 846.2268123666296,
            "unit": "ns/iter",
            "extra": "iterations: 829192\ncpu: 846.202327084684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9876.265015849423,
            "unit": "ns/iter",
            "extra": "iterations: 73822\ncpu: 9875.66985451496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 11881.891508955017,
            "unit": "ns/iter",
            "extra": "iterations: 59074\ncpu: 11881.265869925777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2785.487789408228,
            "unit": "ns/iter",
            "extra": "iterations: 250684\ncpu: 2785.323355299905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2820.7133315566457,
            "unit": "ns/iter",
            "extra": "iterations: 247638\ncpu: 2820.601442428055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2798.9907229750415,
            "unit": "ns/iter",
            "extra": "iterations: 249649\ncpu: 2798.8632039383083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5138.258590436402,
            "unit": "ns/iter",
            "extra": "iterations: 136780\ncpu: 5138.16420529319 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5075.7807459862215,
            "unit": "ns/iter",
            "extra": "iterations: 137831\ncpu: 5075.589671409196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1996.160496954486,
            "unit": "ns/iter",
            "extra": "iterations: 335564\ncpu: 1996.1530438306709 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10089.72539773597,
            "unit": "ns/iter",
            "extra": "iterations: 69770\ncpu: 10089.423821126551 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 7853.445999125329,
            "unit": "ns/iter",
            "extra": "iterations: 89193\ncpu: 7853.136456896837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 7892.782460865081,
            "unit": "ns/iter",
            "extra": "iterations: 89115\ncpu: 7892.757672670194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 7704.439921983761,
            "unit": "ns/iter",
            "extra": "iterations: 89725\ncpu: 7704.110337141159 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 17407.327681927894,
            "unit": "ns/iter",
            "extra": "iterations: 40167\ncpu: 17406.209077103267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 54426.876925484474,
            "unit": "ns/iter",
            "extra": "iterations: 12789\ncpu: 54422.683556181066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 43083.25206160716,
            "unit": "ns/iter",
            "extra": "iterations: 16492\ncpu: 43080.402619451794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 41947.06992171393,
            "unit": "ns/iter",
            "extra": "iterations: 16733\ncpu: 41944.618418693324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 41435.364110469454,
            "unit": "ns/iter",
            "extra": "iterations: 16874\ncpu: 41433.193078107935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 24790.707287805977,
            "unit": "ns/iter",
            "extra": "iterations: 28335\ncpu: 24789.910005294045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 39943.921069161894,
            "unit": "ns/iter",
            "extra": "iterations: 17509\ncpu: 39942.926494945445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1878.3266018737668,
            "unit": "ns/iter",
            "extra": "iterations: 371440\ncpu: 1878.2710531983648 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 9937.98921367301,
            "unit": "ns/iter",
            "extra": "iterations: 70645\ncpu: 9937.347299879686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 7717.977236134203,
            "unit": "ns/iter",
            "extra": "iterations: 90055\ncpu: 7717.286102936973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 7877.60428574558,
            "unit": "ns/iter",
            "extra": "iterations: 89926\ncpu: 7876.904343571341 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 7693.20471816574,
            "unit": "ns/iter",
            "extra": "iterations: 90798\ncpu: 7687.183638406183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 17319.552321142008,
            "unit": "ns/iter",
            "extra": "iterations: 40605\ncpu: 17318.93362886351 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 52131.559555951375,
            "unit": "ns/iter",
            "extra": "iterations: 13332\ncpu: 52130.59555955619 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 41228.35655106902,
            "unit": "ns/iter",
            "extra": "iterations: 16898\ncpu: 41226.73097408003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 38734.11184018149,
            "unit": "ns/iter",
            "extra": "iterations: 17069\ncpu: 38732.310035737515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 40778.80242523678,
            "unit": "ns/iter",
            "extra": "iterations: 17153\ncpu: 40775.77100215775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 24443.327610225093,
            "unit": "ns/iter",
            "extra": "iterations: 28714\ncpu: 24442.533259037496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 40773.84768441187,
            "unit": "ns/iter",
            "extra": "iterations: 17339\ncpu: 40770.494261490974 ns\nthreads: 1"
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
          "id": "4c1f90876aa9fbfe7c3d4e17807fabb3578467e0",
          "message": "Update parser.hpp (#2)",
          "timestamp": "2024-01-20T17:20:02Z",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/4c1f90876aa9fbfe7c3d4e17807fabb3578467e0"
        },
        "date": 1705778465996,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 547.6243886312606,
            "unit": "ns/iter",
            "extra": "iterations: 1270510\ncpu: 547.6163902684749 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5061.68543000058,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5061.536999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 9822.993153429668,
            "unit": "ns/iter",
            "extra": "iterations: 84860\ncpu: 9822.411029931653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 14655.538148291942,
            "unit": "ns/iter",
            "extra": "iterations: 56726\ncpu: 14654.452984522095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 19578.306839187986,
            "unit": "ns/iter",
            "extra": "iterations: 42739\ncpu: 19576.60918598937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 24517.198427259507,
            "unit": "ns/iter",
            "extra": "iterations: 34335\ncpu: 24515.404106596776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 29190.89353034563,
            "unit": "ns/iter",
            "extra": "iterations: 28966\ncpu: 29188.95946972311 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 34040.0328433144,
            "unit": "ns/iter",
            "extra": "iterations: 24693\ncpu: 34037.38711375693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 38775.793002779006,
            "unit": "ns/iter",
            "extra": "iterations: 21580\ncpu: 38774.050046339216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 566.8910022926242,
            "unit": "ns/iter",
            "extra": "iterations: 1238760\ncpu: 566.8760696180061 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 415.69153170150486,
            "unit": "ns/iter",
            "extra": "iterations: 1691733\ncpu: 415.68663612993305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 422.0885641515007,
            "unit": "ns/iter",
            "extra": "iterations: 1655286\ncpu: 422.05377197656486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 409.26991657547705,
            "unit": "ns/iter",
            "extra": "iterations: 1680560\ncpu: 409.24864330937396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 860.2000466421746,
            "unit": "ns/iter",
            "extra": "iterations: 823288\ncpu: 860.1409227390668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1991.3776202367285,
            "unit": "ns/iter",
            "extra": "iterations: 401729\ncpu: 1991.2777021325358 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 10377.142079596544,
            "unit": "ns/iter",
            "extra": "iterations: 77717\ncpu: 10376.746400401442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 7729.416064594336,
            "unit": "ns/iter",
            "extra": "iterations: 104777\ncpu: 7728.651326149843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 8103.228497079595,
            "unit": "ns/iter",
            "extra": "iterations: 100684\ncpu: 8102.707480831136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 7667.668407804417,
            "unit": "ns/iter",
            "extra": "iterations: 105678\ncpu: 7667.171975245544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 36206.537496733894,
            "unit": "ns/iter",
            "extra": "iterations: 22962\ncpu: 36203.475307029075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 228098.52451383622,
            "unit": "ns/iter",
            "extra": "iterations: 3651\ncpu: 228074.3631881677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 181516.14226488656,
            "unit": "ns/iter",
            "extra": "iterations: 4583\ncpu: 181504.473052586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 189108.82157767683,
            "unit": "ns/iter",
            "extra": "iterations: 4551\ncpu: 189102.74664908825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 184892.01774759294,
            "unit": "ns/iter",
            "extra": "iterations: 4564\ncpu: 184880.06134969337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 97700.71494538488,
            "unit": "ns/iter",
            "extra": "iterations: 8879\ncpu: 97695.01069940302 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 184546.09739572267,
            "unit": "ns/iter",
            "extra": "iterations: 4723\ncpu: 184535.69764979853 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5242.401150083261,
            "unit": "ns/iter",
            "extra": "iterations: 153728\ncpu: 5241.961776644458 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 24419.5105148231,
            "unit": "ns/iter",
            "extra": "iterations: 33429\ncpu: 24417.469861497535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 18784.181390932998,
            "unit": "ns/iter",
            "extra": "iterations: 43194\ncpu: 18783.009214242764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 19119.373322665557,
            "unit": "ns/iter",
            "extra": "iterations: 43745\ncpu: 19118.200937249967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 18373.07409414377,
            "unit": "ns/iter",
            "extra": "iterations: 44295\ncpu: 18372.005869736964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 51331.76272874286,
            "unit": "ns/iter",
            "extra": "iterations: 16066\ncpu: 51327.337233910184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 263283.0541027957,
            "unit": "ns/iter",
            "extra": "iterations: 3327\ncpu: 263263.0297565393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 204464.43084485785,
            "unit": "ns/iter",
            "extra": "iterations: 4273\ncpu: 204454.10718464738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 205159.29348081548,
            "unit": "ns/iter",
            "extra": "iterations: 4249\ncpu: 205141.04495175328 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 199017.46206089476,
            "unit": "ns/iter",
            "extra": "iterations: 4270\ncpu: 198998.19672131227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 107660.65259378501,
            "unit": "ns/iter",
            "extra": "iterations: 8077\ncpu: 107655.8128017824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 191587.84918537468,
            "unit": "ns/iter",
            "extra": "iterations: 4542\ncpu: 191574.63672390976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 762820.0080710612,
            "unit": "ns/iter",
            "extra": "iterations: 1239\ncpu: 762792.1711057344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 436439.19219370245,
            "unit": "ns/iter",
            "extra": "iterations: 2024\ncpu: 436416.2055335979 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 1906.55605651379,
            "unit": "ns/iter",
            "extra": "iterations: 426516\ncpu: 1906.4665803862008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 9785.465342637397,
            "unit": "ns/iter",
            "extra": "iterations: 83835\ncpu: 9785.206655931279 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 7468.197228960151,
            "unit": "ns/iter",
            "extra": "iterations: 107180\ncpu: 7467.831685015867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 7003.043040018372,
            "unit": "ns/iter",
            "extra": "iterations: 116473\ncpu: 7002.573128536233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 6973.351968026513,
            "unit": "ns/iter",
            "extra": "iterations: 120349\ncpu: 6972.941196021544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 35402.88082945201,
            "unit": "ns/iter",
            "extra": "iterations: 23630\ncpu: 35400.81675835807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 255367.93771527847,
            "unit": "ns/iter",
            "extra": "iterations: 3484\ncpu: 255346.18254879475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 188279.52726876186,
            "unit": "ns/iter",
            "extra": "iterations: 4584\ncpu: 188265.27050610835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 191255.12771504166,
            "unit": "ns/iter",
            "extra": "iterations: 4604\ncpu: 191234.70894873957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 191157.5241603393,
            "unit": "ns/iter",
            "extra": "iterations: 4615\ncpu: 191153.13109425802 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 95957.40813203464,
            "unit": "ns/iter",
            "extra": "iterations: 9149\ncpu: 95950.38802054907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 175507.6027096892,
            "unit": "ns/iter",
            "extra": "iterations: 5019\ncpu: 175501.8529587569 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 193.9203380351519,
            "unit": "ns/iter",
            "extra": "iterations: 3613707\ncpu: 193.91469756679297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1393.5748880001026,
            "unit": "ns/iter",
            "extra": "iterations: 500000\ncpu: 1393.4990000000055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 986.8566553285773,
            "unit": "ns/iter",
            "extra": "iterations: 708823\ncpu: 986.7715917796212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1002.1718971000685,
            "unit": "ns/iter",
            "extra": "iterations: 699942\ncpu: 1002.0914590065998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 826.7571317756829,
            "unit": "ns/iter",
            "extra": "iterations: 852137\ncpu: 826.700870869352 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9276.326642118627,
            "unit": "ns/iter",
            "extra": "iterations: 75771\ncpu: 9276.081878291154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 10682.598177829706,
            "unit": "ns/iter",
            "extra": "iterations: 65636\ncpu: 10682.313059906084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2593.774120585003,
            "unit": "ns/iter",
            "extra": "iterations: 276320\ncpu: 2593.5824406485362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2548.199487457693,
            "unit": "ns/iter",
            "extra": "iterations: 274709\ncpu: 2547.950740601872 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2528.003783369416,
            "unit": "ns/iter",
            "extra": "iterations: 278059\ncpu: 2527.8171179497836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 4765.6525419108475,
            "unit": "ns/iter",
            "extra": "iterations: 146858\ncpu: 4765.586484903812 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5027.506580884308,
            "unit": "ns/iter",
            "extra": "iterations: 139267\ncpu: 5027.097589522302 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1935.8468482159608,
            "unit": "ns/iter",
            "extra": "iterations: 361922\ncpu: 1935.6969181204593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 9800.366689854194,
            "unit": "ns/iter",
            "extra": "iterations: 70441\ncpu: 9799.779957695137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 7846.195622725793,
            "unit": "ns/iter",
            "extra": "iterations: 89325\ncpu: 7845.644556395202 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 7832.8892856749835,
            "unit": "ns/iter",
            "extra": "iterations: 88769\ncpu: 7832.701731460246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 7711.625735755818,
            "unit": "ns/iter",
            "extra": "iterations: 90893\ncpu: 7711.429923096488 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 17312.204222370085,
            "unit": "ns/iter",
            "extra": "iterations: 40167\ncpu: 17310.47377200199 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 54305.36273359814,
            "unit": "ns/iter",
            "extra": "iterations: 12789\ncpu: 54302.9243881455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 42790.7356006567,
            "unit": "ns/iter",
            "extra": "iterations: 16407\ncpu: 42789.18754190247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 42564.487880442066,
            "unit": "ns/iter",
            "extra": "iterations: 16461\ncpu: 42562.87588846426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 42109.54002044462,
            "unit": "ns/iter",
            "extra": "iterations: 16629\ncpu: 42108.08226592077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 24817.91202637201,
            "unit": "ns/iter",
            "extra": "iterations: 28213\ncpu: 24816.967355474517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 41990.908711460674,
            "unit": "ns/iter",
            "extra": "iterations: 16771\ncpu: 41989.76208932084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1880.5807096680237,
            "unit": "ns/iter",
            "extra": "iterations: 371554\ncpu: 1880.4835905413538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 10029.739083760369,
            "unit": "ns/iter",
            "extra": "iterations: 68934\ncpu: 10029.299039661222 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 7886.931533171986,
            "unit": "ns/iter",
            "extra": "iterations: 88992\ncpu: 7886.611156058836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 7824.753152430993,
            "unit": "ns/iter",
            "extra": "iterations: 89772\ncpu: 7824.244753375176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 7738.444662258263,
            "unit": "ns/iter",
            "extra": "iterations: 90291\ncpu: 7737.730227818926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 17164.143848299216,
            "unit": "ns/iter",
            "extra": "iterations: 40501\ncpu: 17162.72190810098 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 51938.93381969488,
            "unit": "ns/iter",
            "extra": "iterations: 13433\ncpu: 51937.57909625531 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 39741.687717226465,
            "unit": "ns/iter",
            "extra": "iterations: 16975\ncpu: 39738.992636229494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 40810.838393845566,
            "unit": "ns/iter",
            "extra": "iterations: 17159\ncpu: 40809.784952503454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 40707.186967852635,
            "unit": "ns/iter",
            "extra": "iterations: 17265\ncpu: 40704.36721691208 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 23652.34618485239,
            "unit": "ns/iter",
            "extra": "iterations: 28531\ncpu: 23650.57306088108 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 40799.641921143506,
            "unit": "ns/iter",
            "extra": "iterations: 17552\ncpu: 40796.986098449976 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}