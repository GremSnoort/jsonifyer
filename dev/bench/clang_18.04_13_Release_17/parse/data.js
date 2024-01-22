window.BENCHMARK_DATA = {
  "lastUpdate": 1705963508384,
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
        "date": 1705953623858,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 564.4073146485468,
            "unit": "ns/iter",
            "extra": "iterations: 1247360\ncpu: 564.3958440225758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5143.35640000013,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5143.079999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 9927.176159192864,
            "unit": "ns/iter",
            "extra": "iterations: 83873\ncpu: 9926.947885493542 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 15040.238515396082,
            "unit": "ns/iter",
            "extra": "iterations: 55988\ncpu: 15039.808530399367 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 19716.75421364575,
            "unit": "ns/iter",
            "extra": "iterations: 42659\ncpu: 19716.36700344594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 24651.715220013353,
            "unit": "ns/iter",
            "extra": "iterations: 33180\ncpu: 24650.91922845088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 29169.982286743867,
            "unit": "ns/iter",
            "extra": "iterations: 29413\ncpu: 29169.435283718092 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 33531.891370718775,
            "unit": "ns/iter",
            "extra": "iterations: 24892\ncpu: 33529.49542021534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 38644.446214589036,
            "unit": "ns/iter",
            "extra": "iterations: 21781\ncpu: 38641.77953262019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 562.8516858386988,
            "unit": "ns/iter",
            "extra": "iterations: 1245997\ncpu: 562.8272780753077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 415.2645775156145,
            "unit": "ns/iter",
            "extra": "iterations: 1684512\ncpu: 415.2460772021805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 426.5183193475768,
            "unit": "ns/iter",
            "extra": "iterations: 1641434\ncpu: 426.4987200216394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 433.70703785916834,
            "unit": "ns/iter",
            "extra": "iterations: 1773707\ncpu: 433.6947421417401 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 847.1521968238494,
            "unit": "ns/iter",
            "extra": "iterations: 825510\ncpu: 847.1369214182728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1893.2262741287548,
            "unit": "ns/iter",
            "extra": "iterations: 420817\ncpu: 1893.219142762772 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 9953.250043321394,
            "unit": "ns/iter",
            "extra": "iterations: 80790\ncpu: 9952.968189132318 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 7583.763219976896,
            "unit": "ns/iter",
            "extra": "iterations: 107243\ncpu: 7583.552306444235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 7740.149729908939,
            "unit": "ns/iter",
            "extra": "iterations: 108482\ncpu: 7739.701517302391 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 7753.219381211142,
            "unit": "ns/iter",
            "extra": "iterations: 104462\ncpu: 7753.206907775066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 36039.04553964436,
            "unit": "ns/iter",
            "extra": "iterations: 22969\ncpu: 36037.75958901124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 230326.25788751664,
            "unit": "ns/iter",
            "extra": "iterations: 3645\ncpu: 230313.4979423871 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 190484.91652098508,
            "unit": "ns/iter",
            "extra": "iterations: 4576\ncpu: 190476.94493006932 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 174027.6990817931,
            "unit": "ns/iter",
            "extra": "iterations: 4792\ncpu: 174017.50834724563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 182642.73151832414,
            "unit": "ns/iter",
            "extra": "iterations: 4775\ncpu: 182632.98429319405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 94891.78925753944,
            "unit": "ns/iter",
            "extra": "iterations: 9253\ncpu: 94885.70193450761 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 173905.96427861627,
            "unit": "ns/iter",
            "extra": "iterations: 5039\ncpu: 173901.44870013843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5205.482926236063,
            "unit": "ns/iter",
            "extra": "iterations: 156351\ncpu: 5205.25484326929 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 24327.3004958111,
            "unit": "ns/iter",
            "extra": "iterations: 33884\ncpu: 24326.626136229454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 18977.74027226421,
            "unit": "ns/iter",
            "extra": "iterations: 43561\ncpu: 18976.62817657999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 18883.0792153662,
            "unit": "ns/iter",
            "extra": "iterations: 43893\ncpu: 18882.450504636327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 19080.165463325044,
            "unit": "ns/iter",
            "extra": "iterations: 43490\ncpu: 19079.243504253842 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 51831.48568411702,
            "unit": "ns/iter",
            "extra": "iterations: 16101\ncpu: 51831.29619278328 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 249107.15460993344,
            "unit": "ns/iter",
            "extra": "iterations: 3525\ncpu: 249088.08510638177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 203692.93814907773,
            "unit": "ns/iter",
            "extra": "iterations: 4333\ncpu: 203681.88322178661 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 194491.23550243952,
            "unit": "ns/iter",
            "extra": "iterations: 4518\ncpu: 194482.71359008524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 192619.4304783131,
            "unit": "ns/iter",
            "extra": "iterations: 4495\ncpu: 192610.67853170246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 106290.39435081939,
            "unit": "ns/iter",
            "extra": "iterations: 8249\ncpu: 106286.91962662135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 185937.17331616726,
            "unit": "ns/iter",
            "extra": "iterations: 4662\ncpu: 185928.82882882885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 769474.1844660267,
            "unit": "ns/iter",
            "extra": "iterations: 1236\ncpu: 769443.8511326843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 435808.2591132752,
            "unit": "ns/iter",
            "extra": "iterations: 2030\ncpu: 435780.6896551727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 1944.7174218819334,
            "unit": "ns/iter",
            "extra": "iterations: 413061\ncpu: 1944.6573266418395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 10384.588603750006,
            "unit": "ns/iter",
            "extra": "iterations: 79026\ncpu: 10384.278591855837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 7967.13109446724,
            "unit": "ns/iter",
            "extra": "iterations: 103475\ncpu: 7966.8055085769765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 7847.987101502877,
            "unit": "ns/iter",
            "extra": "iterations: 105051\ncpu: 7847.58736232874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 7748.786703705293,
            "unit": "ns/iter",
            "extra": "iterations: 106195\ncpu: 7748.352558971691 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 35498.99473840271,
            "unit": "ns/iter",
            "extra": "iterations: 23567\ncpu: 35498.014172359806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 253555.7380201061,
            "unit": "ns/iter",
            "extra": "iterations: 3485\ncpu: 253548.2352941173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 181505.42635025393,
            "unit": "ns/iter",
            "extra": "iterations: 4888\ncpu: 181493.39198035983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 185269.60058429188,
            "unit": "ns/iter",
            "extra": "iterations: 4792\ncpu: 185262.39565943184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 191383.9246440382,
            "unit": "ns/iter",
            "extra": "iterations: 4565\ncpu: 191374.52354874054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 96810.24768416192,
            "unit": "ns/iter",
            "extra": "iterations: 9068\ncpu: 96807.3996471111 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 175879.47619048637,
            "unit": "ns/iter",
            "extra": "iterations: 5124\ncpu: 175869.20374707182 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 194.59482274221344,
            "unit": "ns/iter",
            "extra": "iterations: 3559336\ncpu: 194.58677124047924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1440.8475251043285,
            "unit": "ns/iter",
            "extra": "iterations: 489556\ncpu: 1440.8024822492239 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1050.0128657109162,
            "unit": "ns/iter",
            "extra": "iterations: 667433\ncpu: 1049.9773010924036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1117.3727723087586,
            "unit": "ns/iter",
            "extra": "iterations: 627780\ncpu: 1117.3643633119882 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 849.1403506856102,
            "unit": "ns/iter",
            "extra": "iterations: 824499\ncpu: 849.0780461832029 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9309.081631573612,
            "unit": "ns/iter",
            "extra": "iterations: 75559\ncpu: 9308.753424476206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 12164.319945182478,
            "unit": "ns/iter",
            "extra": "iterations: 56916\ncpu: 12163.874833087462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2668.155323383551,
            "unit": "ns/iter",
            "extra": "iterations: 257759\ncpu: 2668.0073246714874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2720.006688885455,
            "unit": "ns/iter",
            "extra": "iterations: 257741\ncpu: 2719.8365801327723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2669.222349342757,
            "unit": "ns/iter",
            "extra": "iterations: 262218\ncpu: 2669.1321724671807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 4782.947440690645,
            "unit": "ns/iter",
            "extra": "iterations: 147110\ncpu: 4782.777513425329 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5034.4372983672065,
            "unit": "ns/iter",
            "extra": "iterations: 144446\ncpu: 5034.355399249554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1929.503227262438,
            "unit": "ns/iter",
            "extra": "iterations: 363311\ncpu: 1929.4351120665294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 9718.25597956637,
            "unit": "ns/iter",
            "extra": "iterations: 72037\ncpu: 9718.089315213052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 7723.4980520761455,
            "unit": "ns/iter",
            "extra": "iterations: 90866\ncpu: 7723.464222041272 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 7758.878313386743,
            "unit": "ns/iter",
            "extra": "iterations: 90240\ncpu: 7758.864140070952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 7683.060243617303,
            "unit": "ns/iter",
            "extra": "iterations: 90798\ncpu: 7682.934646137433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 17307.40721764416,
            "unit": "ns/iter",
            "extra": "iterations: 40401\ncpu: 17306.856265933868 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 50222.80848458262,
            "unit": "ns/iter",
            "extra": "iterations: 13884\ncpu: 50221.81647940044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 40809.45519857611,
            "unit": "ns/iter",
            "extra": "iterations: 17399\ncpu: 40809.213173171316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 41722.93289473548,
            "unit": "ns/iter",
            "extra": "iterations: 16720\ncpu: 41721.62081339727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 42888.702900305645,
            "unit": "ns/iter",
            "extra": "iterations: 16550\ncpu: 42888.57401812727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 25028.65566745144,
            "unit": "ns/iter",
            "extra": "iterations: 28002\ncpu: 25028.27298050132 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 42402.25426610714,
            "unit": "ns/iter",
            "extra": "iterations: 16467\ncpu: 42401.31778708933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1893.4941673895491,
            "unit": "ns/iter",
            "extra": "iterations: 368960\ncpu: 1893.4697528187312 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 9915.034506212847,
            "unit": "ns/iter",
            "extra": "iterations: 70567\ncpu: 9914.761857525371 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 8022.010796886767,
            "unit": "ns/iter",
            "extra": "iterations: 87340\ncpu: 8021.894893519524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 7964.073258447915,
            "unit": "ns/iter",
            "extra": "iterations: 87867\ncpu: 7964.1048402699425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 7740.841754295229,
            "unit": "ns/iter",
            "extra": "iterations: 89677\ncpu: 7740.794183569918 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 17311.095383478583,
            "unit": "ns/iter",
            "extra": "iterations: 40615\ncpu: 17310.981164594366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 51673.940044744195,
            "unit": "ns/iter",
            "extra": "iterations: 13410\ncpu: 51672.5801640569 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 41192.45237535049,
            "unit": "ns/iter",
            "extra": "iterations: 17008\ncpu: 41192.31538099734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 40903.26144550262,
            "unit": "ns/iter",
            "extra": "iterations: 17212\ncpu: 40903.061817337046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 40860.432834953055,
            "unit": "ns/iter",
            "extra": "iterations: 17189\ncpu: 40859.27046366883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 24567.39842195395,
            "unit": "ns/iter",
            "extra": "iterations: 28643\ncpu: 24566.997172083797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 42092.70703927785,
            "unit": "ns/iter",
            "extra": "iterations: 17999\ncpu: 42092.9996110891 ns\nthreads: 1"
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
        "date": 1705955071162,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 535.0802111431494,
            "unit": "ns/iter",
            "extra": "iterations: 1290120\ncpu: 535.059839394785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5972.796001988938,
            "unit": "ns/iter",
            "extra": "iterations: 140820\ncpu: 5972.5855702315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 9696.591777260177,
            "unit": "ns/iter",
            "extra": "iterations: 86127\ncpu: 9696.524899276645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 14569.036079689971,
            "unit": "ns/iter",
            "extra": "iterations: 57373\ncpu: 14568.420685688387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 19219.371208805664,
            "unit": "ns/iter",
            "extra": "iterations: 43423\ncpu: 19219.44130990489 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 23989.668209521034,
            "unit": "ns/iter",
            "extra": "iterations: 34784\ncpu: 23988.946067157314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 28611.865727764845,
            "unit": "ns/iter",
            "extra": "iterations: 29254\ncpu: 28611.242906952884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 33433.34945168441,
            "unit": "ns/iter",
            "extra": "iterations: 25168\ncpu: 33432.11617927526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 39645.19060194831,
            "unit": "ns/iter",
            "extra": "iterations: 21962\ncpu: 39644.18996448411 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 576.0120508650255,
            "unit": "ns/iter",
            "extra": "iterations: 1217340\ncpu: 575.9934775822693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 430.299879671635,
            "unit": "ns/iter",
            "extra": "iterations: 1625552\ncpu: 430.2788222093177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 437.39524241518865,
            "unit": "ns/iter",
            "extra": "iterations: 1590639\ncpu: 437.3811405353448 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 426.94622618939906,
            "unit": "ns/iter",
            "extra": "iterations: 1642491\ncpu: 426.9370730189695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 873.8993599973165,
            "unit": "ns/iter",
            "extra": "iterations: 800934\ncpu: 873.8732529771494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1994.7973334395456,
            "unit": "ns/iter",
            "extra": "iterations: 401191\ncpu: 1994.7144876131308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 10769.707302639195,
            "unit": "ns/iter",
            "extra": "iterations: 76041\ncpu: 10769.479622835057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 8292.620483027282,
            "unit": "ns/iter",
            "extra": "iterations: 98628\ncpu: 8292.35713996023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 7869.179390701856,
            "unit": "ns/iter",
            "extra": "iterations: 104448\ncpu: 7868.961588541665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 7779.82197789576,
            "unit": "ns/iter",
            "extra": "iterations: 104414\ncpu: 7779.677054801074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 36263.903914433045,
            "unit": "ns/iter",
            "extra": "iterations: 22813\ncpu: 36262.652873361745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 231439.15422450964,
            "unit": "ns/iter",
            "extra": "iterations: 3456\ncpu: 231432.55208333328 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 196218.239252754,
            "unit": "ns/iter",
            "extra": "iterations: 4443\ncpu: 196209.2730137297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 188204.9020873781,
            "unit": "ns/iter",
            "extra": "iterations: 4647\ncpu: 188195.30880137702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 190065.63118812218,
            "unit": "ns/iter",
            "extra": "iterations: 4444\ncpu: 190061.6336633659 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 98114.90675096592,
            "unit": "ns/iter",
            "extra": "iterations: 8858\ncpu: 98112.5310453826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 183177.27268790526,
            "unit": "ns/iter",
            "extra": "iterations: 4617\ncpu: 183170.0021659084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5286.117954639349,
            "unit": "ns/iter",
            "extra": "iterations: 154144\ncpu: 5285.922254515262 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 24487.7456877348,
            "unit": "ns/iter",
            "extra": "iterations: 33683\ncpu: 24487.227978505456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 19297.127337881182,
            "unit": "ns/iter",
            "extra": "iterations: 43255\ncpu: 19296.705583169525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 18974.547386695704,
            "unit": "ns/iter",
            "extra": "iterations: 42628\ncpu: 18973.95843107812 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 18680.288984684845,
            "unit": "ns/iter",
            "extra": "iterations: 44075\ncpu: 18679.096993760642 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 51926.317205648695,
            "unit": "ns/iter",
            "extra": "iterations: 16018\ncpu: 51923.39243351245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 263172.98819613253,
            "unit": "ns/iter",
            "extra": "iterations: 3304\ncpu: 263152.14891041117 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 201254.06864347355,
            "unit": "ns/iter",
            "extra": "iterations: 4283\ncpu: 201238.87462059277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 203165.43460015082,
            "unit": "ns/iter",
            "extra": "iterations: 4289\ncpu: 203155.4907903948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 201326.2901206004,
            "unit": "ns/iter",
            "extra": "iterations: 4312\ncpu: 201318.2050092758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 108494.65750528972,
            "unit": "ns/iter",
            "extra": "iterations: 8041\ncpu: 108489.2675040424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 191766.837402022,
            "unit": "ns/iter",
            "extra": "iterations: 4465\ncpu: 191752.653975364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 776371.4803278707,
            "unit": "ns/iter",
            "extra": "iterations: 1220\ncpu: 776323.0327868854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 445563.7811704821,
            "unit": "ns/iter",
            "extra": "iterations: 1965\ncpu: 445520.1017811711 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 1902.48567220972,
            "unit": "ns/iter",
            "extra": "iterations: 423722\ncpu: 1902.3524858279632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 10014.440797925206,
            "unit": "ns/iter",
            "extra": "iterations: 82514\ncpu: 10013.434083913013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 7564.951044159688,
            "unit": "ns/iter",
            "extra": "iterations: 109466\ncpu: 7564.533279739814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 7601.686618220687,
            "unit": "ns/iter",
            "extra": "iterations: 108162\ncpu: 7601.451526414077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 7386.000107169094,
            "unit": "ns/iter",
            "extra": "iterations: 111972\ncpu: 7385.529418068772 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 35464.38890299508,
            "unit": "ns/iter",
            "extra": "iterations: 23628\ncpu: 35462.10005078726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 252446.8425580622,
            "unit": "ns/iter",
            "extra": "iterations: 3487\ncpu: 252433.98336679224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 189072.93807585657,
            "unit": "ns/iter",
            "extra": "iterations: 4667\ncpu: 189063.5954574665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 190645.44122731788,
            "unit": "ns/iter",
            "extra": "iterations: 4628\ncpu: 190633.23249783902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 189256.46802577234,
            "unit": "ns/iter",
            "extra": "iterations: 4660\ncpu: 189235.4935622322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 93512.16852947895,
            "unit": "ns/iter",
            "extra": "iterations: 9126\ncpu: 93504.14201183473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 181146.89837481634,
            "unit": "ns/iter",
            "extra": "iterations: 4861\ncpu: 181142.1518206135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 196.96889112586035,
            "unit": "ns/iter",
            "extra": "iterations: 3550466\ncpu: 196.96741216505112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1426.700773738036,
            "unit": "ns/iter",
            "extra": "iterations: 490993\ncpu: 1426.650278109873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1060.6051447628706,
            "unit": "ns/iter",
            "extra": "iterations: 659700\ncpu: 1060.6096710626043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1118.9914102022462,
            "unit": "ns/iter",
            "extra": "iterations: 629002\ncpu: 1118.9951701266532 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 837.921527377347,
            "unit": "ns/iter",
            "extra": "iterations: 836126\ncpu: 837.909956154937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9412.052784346832,
            "unit": "ns/iter",
            "extra": "iterations: 74416\ncpu: 9411.967856374966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 11980.944236063906,
            "unit": "ns/iter",
            "extra": "iterations: 58120\ncpu: 11980.359600825834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2686.449179937074,
            "unit": "ns/iter",
            "extra": "iterations: 259858\ncpu: 2686.4233542934926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2690.1444205346465,
            "unit": "ns/iter",
            "extra": "iterations: 260240\ncpu: 2690.1052874270026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2590.601706871893,
            "unit": "ns/iter",
            "extra": "iterations: 260125\ncpu: 2590.5568476693848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5074.051196211325,
            "unit": "ns/iter",
            "extra": "iterations: 144874\ncpu: 5073.875919764736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 4958.265702884051,
            "unit": "ns/iter",
            "extra": "iterations: 138828\ncpu: 4958.219523439128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1945.2254032077228,
            "unit": "ns/iter",
            "extra": "iterations: 358624\ncpu: 1945.1539774248135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 9941.477130031386,
            "unit": "ns/iter",
            "extra": "iterations: 70398\ncpu: 9940.866217790135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 7882.541722480765,
            "unit": "ns/iter",
            "extra": "iterations: 88837\ncpu: 7882.38121503426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 7842.025276798183,
            "unit": "ns/iter",
            "extra": "iterations: 89054\ncpu: 7841.707278729654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 7710.310399770426,
            "unit": "ns/iter",
            "extra": "iterations: 90377\ncpu: 7709.810018035498 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 17454.83416218955,
            "unit": "ns/iter",
            "extra": "iterations: 40015\ncpu: 17454.122204173404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 51658.71375493467,
            "unit": "ns/iter",
            "extra": "iterations: 12919\ncpu: 51654.624970972734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 43856.824467084814,
            "unit": "ns/iter",
            "extra": "iterations: 15997\ncpu: 43853.453772582085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 41774.10339663698,
            "unit": "ns/iter",
            "extra": "iterations: 16693\ncpu: 41769.897561851874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 41561.46835893463,
            "unit": "ns/iter",
            "extra": "iterations: 16861\ncpu: 41558.175671668374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 24526.306930000028,
            "unit": "ns/iter",
            "extra": "iterations: 28557\ncpu: 24524.75049900211 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 40939.72958204692,
            "unit": "ns/iter",
            "extra": "iterations: 17203\ncpu: 40937.5574027787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1876.930301097838,
            "unit": "ns/iter",
            "extra": "iterations: 373234\ncpu: 1876.806239517297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 9886.07385424099,
            "unit": "ns/iter",
            "extra": "iterations: 70761\ncpu: 9885.475049815686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 7814.455765908677,
            "unit": "ns/iter",
            "extra": "iterations: 89162\ncpu: 7814.023911531818 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 7928.351586408602,
            "unit": "ns/iter",
            "extra": "iterations: 88880\ncpu: 7927.905040504119 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 7797.317619697314,
            "unit": "ns/iter",
            "extra": "iterations: 89434\ncpu: 7796.797638481994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 17209.05311040113,
            "unit": "ns/iter",
            "extra": "iterations: 40670\ncpu: 17208.682075239605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 49907.5600662176,
            "unit": "ns/iter",
            "extra": "iterations: 13893\ncpu: 49903.7860793205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 41169.352294907476,
            "unit": "ns/iter",
            "extra": "iterations: 17931\ncpu: 41166.99012882669 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 40456.06700167228,
            "unit": "ns/iter",
            "extra": "iterations: 17313\ncpu: 40453.76306821496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 40556.630984115116,
            "unit": "ns/iter",
            "extra": "iterations: 17254\ncpu: 40556.19566477342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 24577.895783028827,
            "unit": "ns/iter",
            "extra": "iterations: 28575\ncpu: 24576.752405949355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 41457.12265688959,
            "unit": "ns/iter",
            "extra": "iterations: 17178\ncpu: 41454.52322738406 ns\nthreads: 1"
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
        "date": 1705957128783,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 551.8620815709257,
            "unit": "ns/iter",
            "extra": "iterations: 1231003\ncpu: 551.852513763167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5268.709220000574,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5268.717999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10019.32611340922,
            "unit": "ns/iter",
            "extra": "iterations: 82180\ncpu: 10019.087369189583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 15000.156167464282,
            "unit": "ns/iter",
            "extra": "iterations: 56036\ncpu: 14999.514597758583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 19727.09971356066,
            "unit": "ns/iter",
            "extra": "iterations: 42592\ncpu: 19726.610631104442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 24675.92952852248,
            "unit": "ns/iter",
            "extra": "iterations: 33957\ncpu: 24675.06552404513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 29015.33453399334,
            "unit": "ns/iter",
            "extra": "iterations: 28873\ncpu: 29014.400997471697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 34123.71662458193,
            "unit": "ns/iter",
            "extra": "iterations: 24554\ncpu: 34123.32817463547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 38508.49394106374,
            "unit": "ns/iter",
            "extra": "iterations: 21786\ncpu: 38507.65629303225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 577.3823347847568,
            "unit": "ns/iter",
            "extra": "iterations: 1214930\ncpu: 577.3834706526306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 426.5333689437742,
            "unit": "ns/iter",
            "extra": "iterations: 1638095\ncpu: 426.5212335059931 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 436.8332418163137,
            "unit": "ns/iter",
            "extra": "iterations: 1604437\ncpu: 436.82257389975405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 427.9751907474654,
            "unit": "ns/iter",
            "extra": "iterations: 1634753\ncpu: 427.9660597044322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 867.8138497769129,
            "unit": "ns/iter",
            "extra": "iterations: 806800\ncpu: 867.7947446703037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1994.0021517893783,
            "unit": "ns/iter",
            "extra": "iterations: 396879\ncpu: 1993.9326595763432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 10554.525563532023,
            "unit": "ns/iter",
            "extra": "iterations: 77591\ncpu: 10549.96971298218 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 7941.804693719698,
            "unit": "ns/iter",
            "extra": "iterations: 101753\ncpu: 7941.278389826355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 7871.341142697513,
            "unit": "ns/iter",
            "extra": "iterations: 103807\ncpu: 7871.079984972106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 7709.153304524762,
            "unit": "ns/iter",
            "extra": "iterations: 105522\ncpu: 7708.8578685013335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 35808.23226781751,
            "unit": "ns/iter",
            "extra": "iterations: 23150\ncpu: 35806.9632829375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 241491.1008333181,
            "unit": "ns/iter",
            "extra": "iterations: 3600\ncpu: 241476.97222222222 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 182510.54842266516,
            "unit": "ns/iter",
            "extra": "iterations: 4533\ncpu: 182501.83101698666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 183484.87305073524,
            "unit": "ns/iter",
            "extra": "iterations: 4553\ncpu: 183471.22776191554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 185802.21734309458,
            "unit": "ns/iter",
            "extra": "iterations: 4509\ncpu: 185790.10867154523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 96888.43662128564,
            "unit": "ns/iter",
            "extra": "iterations: 9033\ncpu: 96881.16904682819 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 182096.02593296388,
            "unit": "ns/iter",
            "extra": "iterations: 4743\ncpu: 182086.31667720847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5439.768013426395,
            "unit": "ns/iter",
            "extra": "iterations: 152539\ncpu: 5439.51579596037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 24110.177220715923,
            "unit": "ns/iter",
            "extra": "iterations: 34347\ncpu: 24109.04009083769 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 18309.539663567448,
            "unit": "ns/iter",
            "extra": "iterations: 45180\ncpu: 18308.574590526794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 18843.382723266448,
            "unit": "ns/iter",
            "extra": "iterations: 44476\ncpu: 18842.643223311497 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 18042.8232284414,
            "unit": "ns/iter",
            "extra": "iterations: 45539\ncpu: 18041.87619403146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 51506.12952123248,
            "unit": "ns/iter",
            "extra": "iterations: 16229\ncpu: 51503.91274878331 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 263355.572203796,
            "unit": "ns/iter",
            "extra": "iterations: 3317\ncpu: 263339.85529092595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 200368.51730543893,
            "unit": "ns/iter",
            "extra": "iterations: 4305\ncpu: 200354.47154471607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 203015.6853538878,
            "unit": "ns/iter",
            "extra": "iterations: 4281\ncpu: 203006.04998831928 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 202004.73434972245,
            "unit": "ns/iter",
            "extra": "iterations: 4329\ncpu: 201990.29799029883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 107795.77484837803,
            "unit": "ns/iter",
            "extra": "iterations: 8079\ncpu: 107791.49647233613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 191631.09307983718,
            "unit": "ns/iter",
            "extra": "iterations: 4523\ncpu: 191617.7979217323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 775181.5486224144,
            "unit": "ns/iter",
            "extra": "iterations: 1234\ncpu: 775154.7001620748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 436271.98966026417,
            "unit": "ns/iter",
            "extra": "iterations: 2031\ncpu: 436268.8330871505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 1883.2185704423825,
            "unit": "ns/iter",
            "extra": "iterations: 420130\ncpu: 1883.1761597600848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 9834.324436275367,
            "unit": "ns/iter",
            "extra": "iterations: 83773\ncpu: 9834.107648048943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 7683.195330446358,
            "unit": "ns/iter",
            "extra": "iterations: 106220\ncpu: 7683.133119939732 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 7597.421452943446,
            "unit": "ns/iter",
            "extra": "iterations: 108731\ncpu: 7597.246415465657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 7328.772983752062,
            "unit": "ns/iter",
            "extra": "iterations: 111829\ncpu: 7328.698280410272 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 35494.06787003415,
            "unit": "ns/iter",
            "extra": "iterations: 23545\ncpu: 35493.3743894668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 252337.2354285779,
            "unit": "ns/iter",
            "extra": "iterations: 3500\ncpu: 252331.2571428562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 188183.29907348013,
            "unit": "ns/iter",
            "extra": "iterations: 4641\ncpu: 188177.78496013713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 182541.13467358175,
            "unit": "ns/iter",
            "extra": "iterations: 4626\ncpu: 182539.32122784306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 178285.1338342862,
            "unit": "ns/iter",
            "extra": "iterations: 4924\ncpu: 178278.53371242838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 93712.1521014718,
            "unit": "ns/iter",
            "extra": "iterations: 9303\ncpu: 93711.31892937772 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 171880.50756533,
            "unit": "ns/iter",
            "extra": "iterations: 5089\ncpu: 171876.53763018304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 193.19876049832055,
            "unit": "ns/iter",
            "extra": "iterations: 3620810\ncpu: 193.19679850641077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1401.6890099905568,
            "unit": "ns/iter",
            "extra": "iterations: 499672\ncpu: 1401.6762996525686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1070.9386550635322,
            "unit": "ns/iter",
            "extra": "iterations: 651317\ncpu: 1070.9431812773237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1151.5277548770448,
            "unit": "ns/iter",
            "extra": "iterations: 607695\ncpu: 1151.5204173146114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 820.7410719520385,
            "unit": "ns/iter",
            "extra": "iterations: 852986\ncpu: 820.7295313170426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9604.814038248662,
            "unit": "ns/iter",
            "extra": "iterations: 73257\ncpu: 9604.74903422199 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 12590.962000502268,
            "unit": "ns/iter",
            "extra": "iterations: 55606\ncpu: 12590.684458511649 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2815.414293587639,
            "unit": "ns/iter",
            "extra": "iterations: 248587\ncpu: 2815.3813353071555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2802.6690208952728,
            "unit": "ns/iter",
            "extra": "iterations: 249197\ncpu: 2802.5770775731576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2793.900225797098,
            "unit": "ns/iter",
            "extra": "iterations: 250225\ncpu: 2793.8271555600013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5149.420079153639,
            "unit": "ns/iter",
            "extra": "iterations: 136191\ncpu: 5149.312362784621 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5245.832991841321,
            "unit": "ns/iter",
            "extra": "iterations: 134215\ncpu: 5245.746004544954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1951.102853962558,
            "unit": "ns/iter",
            "extra": "iterations: 355786\ncpu: 1951.0781762070435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10034.983025023905,
            "unit": "ns/iter",
            "extra": "iterations: 69573\ncpu: 10034.776421887795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 7830.283932001464,
            "unit": "ns/iter",
            "extra": "iterations: 89532\ncpu: 7830.183621498505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 7891.522483698221,
            "unit": "ns/iter",
            "extra": "iterations: 88642\ncpu: 7891.446492633164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 7752.975794116514,
            "unit": "ns/iter",
            "extra": "iterations: 90226\ncpu: 7752.861702835184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 17417.76139376748,
            "unit": "ns/iter",
            "extra": "iterations: 39978\ncpu: 17417.309520236173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 50016.54709999457,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 50015.12999999989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 39555.499492559495,
            "unit": "ns/iter",
            "extra": "iterations: 17736\ncpu: 39555.057510148115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 39257.58912606099,
            "unit": "ns/iter",
            "extra": "iterations: 17896\ncpu: 39257.20831470695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 42061.69648977294,
            "unit": "ns/iter",
            "extra": "iterations: 16922\ncpu: 42059.89835716772 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 24778.65697240806,
            "unit": "ns/iter",
            "extra": "iterations: 28161\ncpu: 24777.032065622498 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 42294.08008658072,
            "unit": "ns/iter",
            "extra": "iterations: 16632\ncpu: 42292.35209235158 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1892.7068109359168,
            "unit": "ns/iter",
            "extra": "iterations: 367923\ncpu: 1892.5851333023722 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 9905.767183273529,
            "unit": "ns/iter",
            "extra": "iterations: 69879\ncpu: 9905.27769430026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 7851.758265898069,
            "unit": "ns/iter",
            "extra": "iterations: 89222\ncpu: 7851.507475734642 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 7882.424940492847,
            "unit": "ns/iter",
            "extra": "iterations: 88643\ncpu: 7882.1181593582805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 7841.269010884695,
            "unit": "ns/iter",
            "extra": "iterations: 89383\ncpu: 7840.963046664387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 17173.76403804305,
            "unit": "ns/iter",
            "extra": "iterations: 40693\ncpu: 17173.066620795013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 52576.79713331907,
            "unit": "ns/iter",
            "extra": "iterations: 13186\ncpu: 52574.131654785124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 41976.72989994102,
            "unit": "ns/iter",
            "extra": "iterations: 16990\ncpu: 41974.36727486749 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 41528.22938236464,
            "unit": "ns/iter",
            "extra": "iterations: 16806\ncpu: 41526.67499702451 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 41476.60541918522,
            "unit": "ns/iter",
            "extra": "iterations: 16866\ncpu: 41474.98517727939 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 24559.306217925645,
            "unit": "ns/iter",
            "extra": "iterations: 28643\ncpu: 24558.42614251268 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 42264.94949856649,
            "unit": "ns/iter",
            "extra": "iterations: 16752\ncpu: 42263.59837631389 ns\nthreads: 1"
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
        "date": 1705958582863,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 571.2947397182478,
            "unit": "ns/iter",
            "extra": "iterations: 1222387\ncpu: 571.2830715640793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5155.655199999956,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5155.67 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10223.164524016674,
            "unit": "ns/iter",
            "extra": "iterations: 82608\ncpu: 10223.141826457486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 15245.607803356641,
            "unit": "ns/iter",
            "extra": "iterations: 55207\ncpu: 15245.546760374587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 20239.149490427844,
            "unit": "ns/iter",
            "extra": "iterations: 41996\ncpu: 20238.37032098294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 24720.51691288589,
            "unit": "ns/iter",
            "extra": "iterations: 34116\ncpu: 24720.099073748384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 29879.78637847479,
            "unit": "ns/iter",
            "extra": "iterations: 28176\ncpu: 29878.886286201032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 34703.17468886246,
            "unit": "ns/iter",
            "extra": "iterations: 24266\ncpu: 34701.60306601829 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 38755.58068348161,
            "unit": "ns/iter",
            "extra": "iterations: 21888\ncpu: 38753.74177631577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 578.2728394643053,
            "unit": "ns/iter",
            "extra": "iterations: 1209781\ncpu: 578.2481292068562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 428.0405522507243,
            "unit": "ns/iter",
            "extra": "iterations: 1637517\ncpu: 428.0229151819495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 440.574081614648,
            "unit": "ns/iter",
            "extra": "iterations: 1598757\ncpu: 440.5421837089699 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 425.47615108000514,
            "unit": "ns/iter",
            "extra": "iterations: 1649907\ncpu: 425.4539801334252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 872.3181819304705,
            "unit": "ns/iter",
            "extra": "iterations: 809584\ncpu: 872.2650151188757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1887.4259129162974,
            "unit": "ns/iter",
            "extra": "iterations: 421342\ncpu: 1887.3361782115232 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 10779.397540718535,
            "unit": "ns/iter",
            "extra": "iterations: 77421\ncpu: 10778.60012141407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 7963.790842268384,
            "unit": "ns/iter",
            "extra": "iterations: 103257\ncpu: 7963.323551914165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 7720.259965764462,
            "unit": "ns/iter",
            "extra": "iterations: 105737\ncpu: 7719.915450599129 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 7619.851173244135,
            "unit": "ns/iter",
            "extra": "iterations: 108119\ncpu: 7619.489636419155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 35678.375322553715,
            "unit": "ns/iter",
            "extra": "iterations: 23252\ncpu: 35675.851539652445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 251949.7583264638,
            "unit": "ns/iter",
            "extra": "iterations: 3633\ncpu: 251936.85659234744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 182725.22698307995,
            "unit": "ns/iter",
            "extra": "iterations: 4551\ncpu: 182714.6780927269 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 190583.6616228235,
            "unit": "ns/iter",
            "extra": "iterations: 4560\ncpu: 190581.35964912258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 186189.77551467717,
            "unit": "ns/iter",
            "extra": "iterations: 4566\ncpu: 186183.70565045992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 97713.13446226476,
            "unit": "ns/iter",
            "extra": "iterations: 8917\ncpu: 97712.39206010991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 185367.81622198835,
            "unit": "ns/iter",
            "extra": "iterations: 4685\ncpu: 185363.5005336175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5320.908043501053,
            "unit": "ns/iter",
            "extra": "iterations: 153192\ncpu: 5320.897305342303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 24684.163077668094,
            "unit": "ns/iter",
            "extra": "iterations: 33064\ncpu: 24683.565206871594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 18901.891364399075,
            "unit": "ns/iter",
            "extra": "iterations: 44166\ncpu: 18901.969841054175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 18708.752773447253,
            "unit": "ns/iter",
            "extra": "iterations: 44259\ncpu: 18708.545154657775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 18587.25118621922,
            "unit": "ns/iter",
            "extra": "iterations: 44469\ncpu: 18586.509703388885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 50922.18793939455,
            "unit": "ns/iter",
            "extra": "iterations: 16500\ncpu: 50918.54545454548 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 254084.6466686846,
            "unit": "ns/iter",
            "extra": "iterations: 3317\ncpu: 254077.14802532544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 202397.96616453896,
            "unit": "ns/iter",
            "extra": "iterations: 4315\ncpu: 202396.26882966343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 202360.5311338345,
            "unit": "ns/iter",
            "extra": "iterations: 4304\ncpu: 202356.87732342043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 201246.91260115325,
            "unit": "ns/iter",
            "extra": "iterations: 4325\ncpu: 201236.78612716892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 104567.18184009701,
            "unit": "ns/iter",
            "extra": "iterations: 8293\ncpu: 104564.34342216393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 190489.6789473772,
            "unit": "ns/iter",
            "extra": "iterations: 4560\ncpu: 190486.51315789553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 776123.7572016577,
            "unit": "ns/iter",
            "extra": "iterations: 1215\ncpu: 776113.9094650157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 423321.36354919686,
            "unit": "ns/iter",
            "extra": "iterations: 2085\ncpu: 423317.6019184645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 1904.024439144085,
            "unit": "ns/iter",
            "extra": "iterations: 423460\ncpu: 1904.0164360270253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 10033.846526005138,
            "unit": "ns/iter",
            "extra": "iterations: 81851\ncpu: 10033.807772660044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 7725.731132740996,
            "unit": "ns/iter",
            "extra": "iterations: 106335\ncpu: 7725.524991771267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 7685.235389625195,
            "unit": "ns/iter",
            "extra": "iterations: 107783\ncpu: 7685.215664807952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 7492.960680357873,
            "unit": "ns/iter",
            "extra": "iterations: 110530\ncpu: 7492.991043155695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 35866.21871229046,
            "unit": "ns/iter",
            "extra": "iterations: 23204\ncpu: 35864.79917255652 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 252426.25313569105,
            "unit": "ns/iter",
            "extra": "iterations: 3508\ncpu: 252409.0935005714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 190513.25767003634,
            "unit": "ns/iter",
            "extra": "iterations: 4661\ncpu: 190505.2349281272 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 190127.49537732868,
            "unit": "ns/iter",
            "extra": "iterations: 4651\ncpu: 190116.08256288842 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 188791.16372526856,
            "unit": "ns/iter",
            "extra": "iterations: 4703\ncpu: 188781.88390389047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 93373.21398952254,
            "unit": "ns/iter",
            "extra": "iterations: 9164\ncpu: 93365.61545176739 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 183270.833298907,
            "unit": "ns/iter",
            "extra": "iterations: 4841\ncpu: 183262.4457756668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 195.7637068797155,
            "unit": "ns/iter",
            "extra": "iterations: 3597117\ncpu: 195.75254293924678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1431.2162481921303,
            "unit": "ns/iter",
            "extra": "iterations: 490233\ncpu: 1431.1659965771344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1175.8068481596297,
            "unit": "ns/iter",
            "extra": "iterations: 593999\ncpu: 1175.748612371404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1186.7603140434667,
            "unit": "ns/iter",
            "extra": "iterations: 586288\ncpu: 1186.7218841252118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 859.7154556971183,
            "unit": "ns/iter",
            "extra": "iterations: 809902\ncpu: 859.6846285106083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9888.34359427399,
            "unit": "ns/iter",
            "extra": "iterations: 72443\ncpu: 9887.681349474713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 11882.32209515418,
            "unit": "ns/iter",
            "extra": "iterations: 58936\ncpu: 11881.663160038035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2818.8549561709165,
            "unit": "ns/iter",
            "extra": "iterations: 248125\ncpu: 2818.615214105778 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2779.3430934597,
            "unit": "ns/iter",
            "extra": "iterations: 251841\ncpu: 2779.190044512211 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2774.079709110078,
            "unit": "ns/iter",
            "extra": "iterations: 252054\ncpu: 2773.911939505042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5122.083130317151,
            "unit": "ns/iter",
            "extra": "iterations: 136689\ncpu: 5121.867158293626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5249.2871012274,
            "unit": "ns/iter",
            "extra": "iterations: 133284\ncpu: 5249.209957684357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1972.552592242912,
            "unit": "ns/iter",
            "extra": "iterations: 292353\ncpu: 1972.482580989409 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 9986.130944886656,
            "unit": "ns/iter",
            "extra": "iterations: 69892\ncpu: 9985.596348652152 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 7962.989808917317,
            "unit": "ns/iter",
            "extra": "iterations: 87920\ncpu: 7962.5295723385125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 8286.319909599704,
            "unit": "ns/iter",
            "extra": "iterations: 88053\ncpu: 8285.901672856058 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 7742.677494667825,
            "unit": "ns/iter",
            "extra": "iterations: 79239\ncpu: 7742.5308244676935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 17393.23747022576,
            "unit": "ns/iter",
            "extra": "iterations: 40304\ncpu: 17392.643410083143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 54647.73762259499,
            "unit": "ns/iter",
            "extra": "iterations: 12745\ncpu: 54644.401726166645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 43557.517063785424,
            "unit": "ns/iter",
            "extra": "iterations: 16116\ncpu: 43556.94961528924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 41286.53186593004,
            "unit": "ns/iter",
            "extra": "iterations: 16946\ncpu: 41285.83146465259 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 41287.39616953153,
            "unit": "ns/iter",
            "extra": "iterations: 16917\ncpu: 41285.88402199 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 24978.765603131327,
            "unit": "ns/iter",
            "extra": "iterations: 27863\ncpu: 24977.680077522054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 40970.845205964564,
            "unit": "ns/iter",
            "extra": "iterations: 17042\ncpu: 40968.94730665421 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1921.9726611486726,
            "unit": "ns/iter",
            "extra": "iterations: 362817\ncpu: 1921.8608830347202 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 9962.237985206348,
            "unit": "ns/iter",
            "extra": "iterations: 70975\ncpu: 9961.871081366793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 7891.218261046055,
            "unit": "ns/iter",
            "extra": "iterations: 88582\ncpu: 7890.792711837656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 7888.903786040098,
            "unit": "ns/iter",
            "extra": "iterations: 88615\ncpu: 7888.3676578456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 7857.8884000716425,
            "unit": "ns/iter",
            "extra": "iterations: 89104\ncpu: 7857.543993535672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 17117.633639644126,
            "unit": "ns/iter",
            "extra": "iterations: 40482\ncpu: 17117.518897287642 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 51999.12561760289,
            "unit": "ns/iter",
            "extra": "iterations: 13358\ncpu: 51997.806557868105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 41225.40160075342,
            "unit": "ns/iter",
            "extra": "iterations: 16992\ncpu: 41225.04708097935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 41173.66475611242,
            "unit": "ns/iter",
            "extra": "iterations: 17098\ncpu: 41173.412094981504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 40793.20411134725,
            "unit": "ns/iter",
            "extra": "iterations: 17172\ncpu: 40791.8064290713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 24526.809660583272,
            "unit": "ns/iter",
            "extra": "iterations: 28549\ncpu: 24526.687449648405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 41052.36777432063,
            "unit": "ns/iter",
            "extra": "iterations: 17334\ncpu: 41052.146071305004 ns\nthreads: 1"
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
        "date": 1705960055736,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 543.7226770471435,
            "unit": "ns/iter",
            "extra": "iterations: 1282667\ncpu: 543.7095520505322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5108.495590000075,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5108.436999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 9935.194687414001,
            "unit": "ns/iter",
            "extra": "iterations: 83801\ncpu: 9935.011515375712 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 15036.948316127966,
            "unit": "ns/iter",
            "extra": "iterations: 56091\ncpu: 15036.811609705657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 19965.90044427301,
            "unit": "ns/iter",
            "extra": "iterations: 41866\ncpu: 19965.657096450588 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 24930.509266167504,
            "unit": "ns/iter",
            "extra": "iterations: 33509\ncpu: 24930.188904473416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 29619.72830735324,
            "unit": "ns/iter",
            "extra": "iterations: 28293\ncpu: 29618.92694306013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 33387.0494363952,
            "unit": "ns/iter",
            "extra": "iterations: 24840\ncpu: 33384.15056360708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 37946.96435034527,
            "unit": "ns/iter",
            "extra": "iterations: 22104\ncpu: 37945.18639160336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 571.696968327354,
            "unit": "ns/iter",
            "extra": "iterations: 1238986\ncpu: 571.6679607356334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 412.25476804472123,
            "unit": "ns/iter",
            "extra": "iterations: 1642235\ncpu: 412.24812526830857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 425.6764821120505,
            "unit": "ns/iter",
            "extra": "iterations: 1651309\ncpu: 425.6636401787918 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 416.34417183502705,
            "unit": "ns/iter",
            "extra": "iterations: 1690086\ncpu: 416.34041107967295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 826.6521503480544,
            "unit": "ns/iter",
            "extra": "iterations: 808125\ncpu: 826.5827687548325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 2010.6869589187954,
            "unit": "ns/iter",
            "extra": "iterations: 395389\ncpu: 2010.6358548163962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 10708.135286701334,
            "unit": "ns/iter",
            "extra": "iterations: 76142\ncpu: 10707.777573481144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 7894.296603091446,
            "unit": "ns/iter",
            "extra": "iterations: 102976\ncpu: 7894.047156619025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 7956.303695872819,
            "unit": "ns/iter",
            "extra": "iterations: 102168\ncpu: 7955.908895153084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 7837.127450127393,
            "unit": "ns/iter",
            "extra": "iterations: 103413\ncpu: 7836.748764662075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 35321.797771994265,
            "unit": "ns/iter",
            "extra": "iterations: 23429\ncpu: 35320.91425156857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 221747.90304133482,
            "unit": "ns/iter",
            "extra": "iterations: 3847\ncpu: 221734.44242266723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 181737.5705494529,
            "unit": "ns/iter",
            "extra": "iterations: 4550\ncpu: 181731.27472527465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 183854.86470459966,
            "unit": "ns/iter",
            "extra": "iterations: 4553\ncpu: 183845.7061278276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 172234.74846085694,
            "unit": "ns/iter",
            "extra": "iterations: 4548\ncpu: 172228.8918205807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 97283.4393635992,
            "unit": "ns/iter",
            "extra": "iterations: 8988\ncpu: 97279.50600801068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 183910.96925667927,
            "unit": "ns/iter",
            "extra": "iterations: 4749\ncpu: 183906.0223204888 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5311.942256040222,
            "unit": "ns/iter",
            "extra": "iterations: 153765\ncpu: 5311.791369947661 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 24738.00755335735,
            "unit": "ns/iter",
            "extra": "iterations: 34157\ncpu: 24727.461428111394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 19270.335864299755,
            "unit": "ns/iter",
            "extra": "iterations: 43330\ncpu: 19269.29840756978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 18441.02005429942,
            "unit": "ns/iter",
            "extra": "iterations: 43831\ncpu: 18439.417307385214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 18098.757459327997,
            "unit": "ns/iter",
            "extra": "iterations: 45547\ncpu: 18097.543197137056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 51151.699147160136,
            "unit": "ns/iter",
            "extra": "iterations: 16533\ncpu: 51148.013064779814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 262117.02252927958,
            "unit": "ns/iter",
            "extra": "iterations: 3329\ncpu: 262110.24331630956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 202093.49779839575,
            "unit": "ns/iter",
            "extra": "iterations: 4315\ncpu: 202084.6581691777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 205857.7605071717,
            "unit": "ns/iter",
            "extra": "iterations: 4259\ncpu: 205848.53251937006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 204948.59239384698,
            "unit": "ns/iter",
            "extra": "iterations: 4286\ncpu: 204930.98460102605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 108215.03291926211,
            "unit": "ns/iter",
            "extra": "iterations: 8050\ncpu: 108208.81987577687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 195532.401655844,
            "unit": "ns/iter",
            "extra": "iterations: 4469\ncpu: 195509.59946296745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 810601.3593109538,
            "unit": "ns/iter",
            "extra": "iterations: 1219\ncpu: 810558.2444626737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 443307.655550025,
            "unit": "ns/iter",
            "extra": "iterations: 2009\ncpu: 443282.9766052752 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 1870.7194686723599,
            "unit": "ns/iter",
            "extra": "iterations: 427307\ncpu: 1870.5909334506678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 9753.37327992408,
            "unit": "ns/iter",
            "extra": "iterations: 84880\ncpu: 9752.930018850115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 7810.608143690016,
            "unit": "ns/iter",
            "extra": "iterations: 106340\ncpu: 7810.235094978407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 7599.86638271309,
            "unit": "ns/iter",
            "extra": "iterations: 108938\ncpu: 7599.338155648149 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 7202.438343117421,
            "unit": "ns/iter",
            "extra": "iterations: 115494\ncpu: 7202.088420177664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 35482.7403401639,
            "unit": "ns/iter",
            "extra": "iterations: 23577\ncpu: 35480.99418925234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 251792.6225392458,
            "unit": "ns/iter",
            "extra": "iterations: 3505\ncpu: 251788.1883024251 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 190379.0655844305,
            "unit": "ns/iter",
            "extra": "iterations: 4620\ncpu: 190374.2857142858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 188747.8833512268,
            "unit": "ns/iter",
            "extra": "iterations: 4655\ncpu: 188745.06981740135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 189051.1601202076,
            "unit": "ns/iter",
            "extra": "iterations: 4659\ncpu: 189048.10045074072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 97462.92996065858,
            "unit": "ns/iter",
            "extra": "iterations: 9152\ncpu: 97462.82779720295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 175349.24728538663,
            "unit": "ns/iter",
            "extra": "iterations: 4881\ncpu: 175347.367342758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 195.08848808084838,
            "unit": "ns/iter",
            "extra": "iterations: 3600338\ncpu: 195.0860446991359 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1427.8784343487896,
            "unit": "ns/iter",
            "extra": "iterations: 492779\ncpu: 1427.8656355080027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1040.0850051791836,
            "unit": "ns/iter",
            "extra": "iterations: 671912\ncpu: 1040.075039588515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1177.0245056961278,
            "unit": "ns/iter",
            "extra": "iterations: 594270\ncpu: 1177.013142174435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 835.2568506651396,
            "unit": "ns/iter",
            "extra": "iterations: 839663\ncpu: 835.2481888567189 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9357.465415357843,
            "unit": "ns/iter",
            "extra": "iterations: 72937\ncpu: 9357.463290236814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 11945.108939787686,
            "unit": "ns/iter",
            "extra": "iterations: 58592\ncpu: 11944.97030311312 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2672.723743863801,
            "unit": "ns/iter",
            "extra": "iterations: 260939\ncpu: 2672.7258094803906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2556.900649582701,
            "unit": "ns/iter",
            "extra": "iterations: 260321\ncpu: 2556.8140872230597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2652.7853733017137,
            "unit": "ns/iter",
            "extra": "iterations: 263942\ncpu: 2652.6699047517945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 4822.911150199601,
            "unit": "ns/iter",
            "extra": "iterations: 148948\ncpu: 4822.631388135454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 4984.953493340957,
            "unit": "ns/iter",
            "extra": "iterations: 140410\ncpu: 4984.896374902079 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1934.4296959990427,
            "unit": "ns/iter",
            "extra": "iterations: 362170\ncpu: 1934.4095314355077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 9831.163853972126,
            "unit": "ns/iter",
            "extra": "iterations: 71521\ncpu: 9831.154486095073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 7771.039572204339,
            "unit": "ns/iter",
            "extra": "iterations: 90417\ncpu: 7770.851720362295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 7743.624609002387,
            "unit": "ns/iter",
            "extra": "iterations: 90154\ncpu: 7743.533287485841 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 7726.04909096909,
            "unit": "ns/iter",
            "extra": "iterations: 90811\ncpu: 7725.881225842657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 17222.91305100271,
            "unit": "ns/iter",
            "extra": "iterations: 40449\ncpu: 17222.49746594485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 53289.794498502575,
            "unit": "ns/iter",
            "extra": "iterations: 13051\ncpu: 53288.882078001305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 41285.133027258526,
            "unit": "ns/iter",
            "extra": "iterations: 16989\ncpu: 41284.76661369138 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 41034.87937217003,
            "unit": "ns/iter",
            "extra": "iterations: 17011\ncpu: 41034.36011992259 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 41396.01665974829,
            "unit": "ns/iter",
            "extra": "iterations: 16867\ncpu: 41396.02181775102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 24885.724085368034,
            "unit": "ns/iter",
            "extra": "iterations: 28208\ncpu: 24884.890811117522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 41021.99905910308,
            "unit": "ns/iter",
            "extra": "iterations: 17005\ncpu: 41021.54660394008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1885.5219915608798,
            "unit": "ns/iter",
            "extra": "iterations: 372552\ncpu: 1885.486589791499 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 9919.822596533108,
            "unit": "ns/iter",
            "extra": "iterations: 71064\ncpu: 9919.714623438047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 8221.590178694687,
            "unit": "ns/iter",
            "extra": "iterations: 78849\ncpu: 8221.477761290598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 7890.034864329479,
            "unit": "ns/iter",
            "extra": "iterations: 88744\ncpu: 7889.901289101294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 7731.153004196696,
            "unit": "ns/iter",
            "extra": "iterations: 90540\ncpu: 7731.075767616499 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 17222.622981396504,
            "unit": "ns/iter",
            "extra": "iterations: 40746\ncpu: 17222.291758700292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 51734.729872645614,
            "unit": "ns/iter",
            "extra": "iterations: 13427\ncpu: 51734.110374619326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 41110.74964597648,
            "unit": "ns/iter",
            "extra": "iterations: 16948\ncpu: 41110.2666981361 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 40447.70038495494,
            "unit": "ns/iter",
            "extra": "iterations: 16885\ncpu: 40447.19573586075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 40872.76990460133,
            "unit": "ns/iter",
            "extra": "iterations: 16667\ncpu: 40871.452570949 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 24469.126185058987,
            "unit": "ns/iter",
            "extra": "iterations: 28585\ncpu: 24469.12016792011 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 40853.55730402151,
            "unit": "ns/iter",
            "extra": "iterations: 17285\ncpu: 40853.08649117728 ns\nthreads: 1"
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
        "date": 1705962070528,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 554.302921902894,
            "unit": "ns/iter",
            "extra": "iterations: 1250418\ncpu: 554.3021613572421 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5087.847920000286,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5087.517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 9851.553096280739,
            "unit": "ns/iter",
            "extra": "iterations: 83132\ncpu: 9851.432661309724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 15014.909795241305,
            "unit": "ns/iter",
            "extra": "iterations: 56017\ncpu: 15014.488458860704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 19799.67770059453,
            "unit": "ns/iter",
            "extra": "iterations: 42324\ncpu: 19799.371514979684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 24664.83081758946,
            "unit": "ns/iter",
            "extra": "iterations: 33721\ncpu: 24664.102488063818 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 29249.726375816666,
            "unit": "ns/iter",
            "extra": "iterations: 28583\ncpu: 29248.948675786305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 34419.224043719405,
            "unit": "ns/iter",
            "extra": "iterations: 24339\ncpu: 34418.50117096017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 37979.594212131255,
            "unit": "ns/iter",
            "extra": "iterations: 21977\ncpu: 37979.15548072982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 572.1607954957815,
            "unit": "ns/iter",
            "extra": "iterations: 1224997\ncpu: 572.1183806980757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 421.1045785084237,
            "unit": "ns/iter",
            "extra": "iterations: 1656937\ncpu: 421.0828776229874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 431.05480838742454,
            "unit": "ns/iter",
            "extra": "iterations: 1617143\ncpu: 431.0490785292332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 421.02236387636196,
            "unit": "ns/iter",
            "extra": "iterations: 1658970\ncpu: 421.0218991301823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 880.3302852994682,
            "unit": "ns/iter",
            "extra": "iterations: 804453\ncpu: 880.323399875442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1993.7010119002039,
            "unit": "ns/iter",
            "extra": "iterations: 402016\ncpu: 1993.6604513253212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 10431.839675751775,
            "unit": "ns/iter",
            "extra": "iterations: 78335\ncpu: 10431.630816365621 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 7923.233495422914,
            "unit": "ns/iter",
            "extra": "iterations: 104880\ncpu: 7923.121662852774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 7967.304510981734,
            "unit": "ns/iter",
            "extra": "iterations: 101530\ncpu: 7967.182113660975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 7778.336974982208,
            "unit": "ns/iter",
            "extra": "iterations: 104806\ncpu: 7778.049920806066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 36249.611997724685,
            "unit": "ns/iter",
            "extra": "iterations: 22871\ncpu: 36247.335053123934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 241300.48483177347,
            "unit": "ns/iter",
            "extra": "iterations: 3626\ncpu: 241294.89795918384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 188519.71802198002,
            "unit": "ns/iter",
            "extra": "iterations: 4550\ncpu: 188511.18681318723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 183020.3857456294,
            "unit": "ns/iter",
            "extra": "iterations: 4560\ncpu: 183018.15789473694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 184502.06962441342,
            "unit": "ns/iter",
            "extra": "iterations: 4553\ncpu: 184499.09949483874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 97213.3028615994,
            "unit": "ns/iter",
            "extra": "iterations: 8981\ncpu: 97212.80481015502 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 185020.4031303027,
            "unit": "ns/iter",
            "extra": "iterations: 4728\ncpu: 185014.61505922218 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5274.10232750005,
            "unit": "ns/iter",
            "extra": "iterations: 152696\ncpu: 5274.042542044337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 24875.634519305426,
            "unit": "ns/iter",
            "extra": "iterations: 33025\ncpu: 24875.500378501154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 19040.24109825171,
            "unit": "ns/iter",
            "extra": "iterations: 42941\ncpu: 19040.259891479032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 18595.85670440588,
            "unit": "ns/iter",
            "extra": "iterations: 43986\ncpu: 18595.073432455843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 18367.117282848976,
            "unit": "ns/iter",
            "extra": "iterations: 44738\ncpu: 18366.842505252815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 49850.71379248218,
            "unit": "ns/iter",
            "extra": "iterations: 16509\ncpu: 49850.075716275875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 266155.75441805506,
            "unit": "ns/iter",
            "extra": "iterations: 3282\ncpu: 266150.1218769059 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 190100.1439287159,
            "unit": "ns/iter",
            "extra": "iterations: 4266\ncpu: 190094.3037974685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 202894.43935498636,
            "unit": "ns/iter",
            "extra": "iterations: 4279\ncpu: 202890.16125262904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 199688.10118083176,
            "unit": "ns/iter",
            "extra": "iterations: 4319\ncpu: 199682.35702708852 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 107201.02167487716,
            "unit": "ns/iter",
            "extra": "iterations: 8120\ncpu: 107198.94088670005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 193540.48924851342,
            "unit": "ns/iter",
            "extra": "iterations: 4511\ncpu: 193532.09931279093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 778141.3401640062,
            "unit": "ns/iter",
            "extra": "iterations: 1220\ncpu: 778118.4426229481 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 428558.4775309164,
            "unit": "ns/iter",
            "extra": "iterations: 2025\ncpu: 428537.9259259251 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 1909.007698269148,
            "unit": "ns/iter",
            "extra": "iterations: 424511\ncpu: 1908.9679654944134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 10582.372804262894,
            "unit": "ns/iter",
            "extra": "iterations: 78049\ncpu: 10582.302143525154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 7712.70075578456,
            "unit": "ns/iter",
            "extra": "iterations: 103601\ncpu: 7712.561654810267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 7592.589122638131,
            "unit": "ns/iter",
            "extra": "iterations: 108188\ncpu: 7592.513032868677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 7445.752796117227,
            "unit": "ns/iter",
            "extra": "iterations: 110868\ncpu: 7445.677742901469 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 35468.26240417692,
            "unit": "ns/iter",
            "extra": "iterations: 23742\ncpu: 35467.39533316481 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 254106.7837684415,
            "unit": "ns/iter",
            "extra": "iterations: 3524\ncpu: 254102.35527809418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 190803.874541943,
            "unit": "ns/iter",
            "extra": "iterations: 4639\ncpu: 190803.77236473505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 191427.6655052327,
            "unit": "ns/iter",
            "extra": "iterations: 4592\ncpu: 191420.3179442511 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 188002.90966341528,
            "unit": "ns/iter",
            "extra": "iterations: 4605\ncpu: 187981.30293159568 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 96495.81866929175,
            "unit": "ns/iter",
            "extra": "iterations: 9138\ncpu: 96492.74458306028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 176556.60766345737,
            "unit": "ns/iter",
            "extra": "iterations: 4802\ncpu: 176554.06080799762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 197.6534238718799,
            "unit": "ns/iter",
            "extra": "iterations: 3546482\ncpu: 197.64690755514866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1447.4475064444684,
            "unit": "ns/iter",
            "extra": "iterations: 482183\ncpu: 1447.3940391925896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1129.1866510078273,
            "unit": "ns/iter",
            "extra": "iterations: 620736\ncpu: 1129.1481402721859 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1172.1089525811237,
            "unit": "ns/iter",
            "extra": "iterations: 597526\ncpu: 1172.1086613804296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 851.4233884037823,
            "unit": "ns/iter",
            "extra": "iterations: 823733\ncpu: 851.4314711198923 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9659.831276625344,
            "unit": "ns/iter",
            "extra": "iterations: 72770\ncpu: 9659.54101965093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 12424.724586331466,
            "unit": "ns/iter",
            "extra": "iterations: 56446\ncpu: 12424.162916770023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2796.1797065236296,
            "unit": "ns/iter",
            "extra": "iterations: 250514\ncpu: 2796.0473266963086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2817.3783759870676,
            "unit": "ns/iter",
            "extra": "iterations: 248668\ncpu: 2817.3086203291214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2807.6289336206,
            "unit": "ns/iter",
            "extra": "iterations: 249039\ncpu: 2807.5072578993877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5119.680909838116,
            "unit": "ns/iter",
            "extra": "iterations: 137563\ncpu: 5119.548861249054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5221.683752706885,
            "unit": "ns/iter",
            "extra": "iterations: 133930\ncpu: 5221.599342940315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1973.811552153389,
            "unit": "ns/iter",
            "extra": "iterations: 355345\ncpu: 1973.816713334923 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10114.245968544705,
            "unit": "ns/iter",
            "extra": "iterations: 70322\ncpu: 10114.334063308752 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 7861.658043035244,
            "unit": "ns/iter",
            "extra": "iterations: 88903\ncpu: 7861.3871297931255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 7879.505384814079,
            "unit": "ns/iter",
            "extra": "iterations: 88861\ncpu: 7879.252990625789 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 7833.91890540704,
            "unit": "ns/iter",
            "extra": "iterations: 90006\ncpu: 7833.658867186652 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 17574.6538471197,
            "unit": "ns/iter",
            "extra": "iterations: 39809\ncpu: 17574.086261900524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 56020.75519073488,
            "unit": "ns/iter",
            "extra": "iterations: 12426\ncpu: 56021.23772734584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 44275.57696202182,
            "unit": "ns/iter",
            "extra": "iterations: 15800\ncpu: 44275.14556961974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 44105.11561457623,
            "unit": "ns/iter",
            "extra": "iterations: 15889\ncpu: 44103.392283970206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 44458.052798781915,
            "unit": "ns/iter",
            "extra": "iterations: 15739\ncpu: 44457.176440689145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 25239.900522232852,
            "unit": "ns/iter",
            "extra": "iterations: 27574\ncpu: 25238.837310510145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 42796.52933970021,
            "unit": "ns/iter",
            "extra": "iterations: 16326\ncpu: 42794.97121156487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1901.5413518421092,
            "unit": "ns/iter",
            "extra": "iterations: 370709\ncpu: 1901.4733928768787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 9760.478872257163,
            "unit": "ns/iter",
            "extra": "iterations: 71683\ncpu: 9760.252779598992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 7772.946806390925,
            "unit": "ns/iter",
            "extra": "iterations: 90368\ncpu: 7772.605347025579 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 7678.2674871320905,
            "unit": "ns/iter",
            "extra": "iterations: 90924\ncpu: 7678.257665742885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 7730.066402236797,
            "unit": "ns/iter",
            "extra": "iterations: 90509\ncpu: 7729.862223646258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 17209.150433967596,
            "unit": "ns/iter",
            "extra": "iterations: 40556\ncpu: 17208.376072591047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 51872.31382780311,
            "unit": "ns/iter",
            "extra": "iterations: 13415\ncpu: 51870.77152441355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 39268.07996448539,
            "unit": "ns/iter",
            "extra": "iterations: 16895\ncpu: 39265.90115418726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 40944.91007321881,
            "unit": "ns/iter",
            "extra": "iterations: 16936\ncpu: 40944.04227680727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 40542.35757857519,
            "unit": "ns/iter",
            "extra": "iterations: 17213\ncpu: 40542.008946726186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 24500.43893502358,
            "unit": "ns/iter",
            "extra": "iterations: 28658\ncpu: 24500.38383697368 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 41129.79326239076,
            "unit": "ns/iter",
            "extra": "iterations: 17573\ncpu: 41129.76156603882 ns\nthreads: 1"
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
        "date": 1705963507696,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 553.3299661663564,
            "unit": "ns/iter",
            "extra": "iterations: 1255556\ncpu: 553.3149457292228 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5015.236309999409,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5014.806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 9787.790053431612,
            "unit": "ns/iter",
            "extra": "iterations: 85155\ncpu: 9787.286712465506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 14879.230408224623,
            "unit": "ns/iter",
            "extra": "iterations: 55827\ncpu: 14878.451287011661 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 19687.424419962917,
            "unit": "ns/iter",
            "extra": "iterations: 42842\ncpu: 19686.63694505392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 24612.682535517448,
            "unit": "ns/iter",
            "extra": "iterations: 34281\ncpu: 24611.703275867116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 30288.95489977563,
            "unit": "ns/iter",
            "extra": "iterations: 28736\ncpu: 30287.44084075725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 33986.637307392695,
            "unit": "ns/iter",
            "extra": "iterations: 24467\ncpu: 33984.325826623644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 38850.87958333126,
            "unit": "ns/iter",
            "extra": "iterations: 21600\ncpu: 38849.842592592584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 582.901254935167,
            "unit": "ns/iter",
            "extra": "iterations: 1245642\ncpu: 582.8795914074839 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 418.04029453454007,
            "unit": "ns/iter",
            "extra": "iterations: 1828784\ncpu: 418.0195692875705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 428.5180181008542,
            "unit": "ns/iter",
            "extra": "iterations: 1630860\ncpu: 428.511644163202 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 415.1822579852379,
            "unit": "ns/iter",
            "extra": "iterations: 1687531\ncpu: 415.1616177717617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 853.8093198476536,
            "unit": "ns/iter",
            "extra": "iterations: 815979\ncpu: 853.7882715118878 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1902.1982969235519,
            "unit": "ns/iter",
            "extra": "iterations: 422412\ncpu: 1902.1464825809862 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 10040.112710839838,
            "unit": "ns/iter",
            "extra": "iterations: 80986\ncpu: 10039.715506383818 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 7479.304424034697,
            "unit": "ns/iter",
            "extra": "iterations: 109538\ncpu: 7478.8210484033025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 7535.677441296812,
            "unit": "ns/iter",
            "extra": "iterations: 107320\ncpu: 7535.315877748786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 7419.813398274928,
            "unit": "ns/iter",
            "extra": "iterations: 108611\ncpu: 7419.4759278525835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 36327.43196506723,
            "unit": "ns/iter",
            "extra": "iterations: 22900\ncpu: 36324.66812227076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 238815.9733443159,
            "unit": "ns/iter",
            "extra": "iterations: 3639\ncpu: 238795.68562791968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 193259.06251379132,
            "unit": "ns/iter",
            "extra": "iterations: 4527\ncpu: 193246.16743980613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 183519.05289839962,
            "unit": "ns/iter",
            "extra": "iterations: 4537\ncpu: 183506.2155609438 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 200300.10413883597,
            "unit": "ns/iter",
            "extra": "iterations: 4494\ncpu: 200289.0298175352 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 97607.96088493813,
            "unit": "ns/iter",
            "extra": "iterations: 8769\ncpu: 97602.91937507117 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 185081.63200511856,
            "unit": "ns/iter",
            "extra": "iterations: 4693\ncpu: 185071.21244406578 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5113.980967369409,
            "unit": "ns/iter",
            "extra": "iterations: 156941\ncpu: 5113.697504157592 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 24120.603036813143,
            "unit": "ns/iter",
            "extra": "iterations: 33983\ncpu: 24119.695141688535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 18657.529020170747,
            "unit": "ns/iter",
            "extra": "iterations: 45365\ncpu: 18656.583269039984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 18717.852194048526,
            "unit": "ns/iter",
            "extra": "iterations: 44484\ncpu: 18717.06456253937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 18276.14686268819,
            "unit": "ns/iter",
            "extra": "iterations: 45437\ncpu: 18274.92572132839 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 50542.613996319255,
            "unit": "ns/iter",
            "extra": "iterations: 16290\ncpu: 50540.245549416795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 266459.95453166787,
            "unit": "ns/iter",
            "extra": "iterations: 3299\ncpu: 266437.5265231878 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 206372.7048636009,
            "unit": "ns/iter",
            "extra": "iterations: 4215\ncpu: 206364.4128113887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 205226.45330189797,
            "unit": "ns/iter",
            "extra": "iterations: 4240\ncpu: 205217.0518867916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 206007.78563016345,
            "unit": "ns/iter",
            "extra": "iterations: 4245\ncpu: 206000.42402826902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 109006.223451053,
            "unit": "ns/iter",
            "extra": "iterations: 7957\ncpu: 109001.8348623848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 194568.77484647738,
            "unit": "ns/iter",
            "extra": "iterations: 4397\ncpu: 194558.08505799356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 770384.6329742563,
            "unit": "ns/iter",
            "extra": "iterations: 1207\ncpu: 770334.3827671884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 425405.7455249337,
            "unit": "ns/iter",
            "extra": "iterations: 2067\ncpu: 425384.42186744104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 1871.0037440817448,
            "unit": "ns/iter",
            "extra": "iterations: 430012\ncpu: 1870.8915100043748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 9888.02841176536,
            "unit": "ns/iter",
            "extra": "iterations: 82853\ncpu: 9887.740938771076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 7586.383376526805,
            "unit": "ns/iter",
            "extra": "iterations: 108040\ncpu: 7586.090336912264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 7460.214695470736,
            "unit": "ns/iter",
            "extra": "iterations: 110170\ncpu: 7459.990015430686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 7471.440204680934,
            "unit": "ns/iter",
            "extra": "iterations: 113738\ncpu: 7471.223337846678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 35723.23932388438,
            "unit": "ns/iter",
            "extra": "iterations: 23487\ncpu: 35722.386852301286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 256870.47243868036,
            "unit": "ns/iter",
            "extra": "iterations: 3465\ncpu: 256861.24098124073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 193392.2938481627,
            "unit": "ns/iter",
            "extra": "iterations: 4584\ncpu: 193386.8673647465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 192702.36632137292,
            "unit": "ns/iter",
            "extra": "iterations: 4537\ncpu: 192691.7787083981 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 192474.29118608643,
            "unit": "ns/iter",
            "extra": "iterations: 4595\ncpu: 192469.35799782447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 96737.55540690212,
            "unit": "ns/iter",
            "extra": "iterations: 8970\ncpu: 96731.8617614269 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 175524.5366730105,
            "unit": "ns/iter",
            "extra": "iterations: 4731\ncpu: 175518.03001479578 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 196.34795149587345,
            "unit": "ns/iter",
            "extra": "iterations: 3555326\ncpu: 196.33850735488113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1452.4426463295829,
            "unit": "ns/iter",
            "extra": "iterations: 485941\ncpu: 1452.4040984399348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1135.784266681607,
            "unit": "ns/iter",
            "extra": "iterations: 625615\ncpu: 1135.7457861464272 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1130.647308079352,
            "unit": "ns/iter",
            "extra": "iterations: 606983\ncpu: 1130.626557910187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 876.5142710904763,
            "unit": "ns/iter",
            "extra": "iterations: 797136\ncpu: 876.4888300114387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9553.264788617455,
            "unit": "ns/iter",
            "extra": "iterations: 73587\ncpu: 9552.918314376187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 11637.224711999585,
            "unit": "ns/iter",
            "extra": "iterations: 55382\ncpu: 11636.916326604329 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2847.743097297936,
            "unit": "ns/iter",
            "extra": "iterations: 245556\ncpu: 2847.5976966557578 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2839.3322526060647,
            "unit": "ns/iter",
            "extra": "iterations: 246439\ncpu: 2839.261237060685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2828.3364504121682,
            "unit": "ns/iter",
            "extra": "iterations: 247347\ncpu: 2828.2089534136153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5232.442463509042,
            "unit": "ns/iter",
            "extra": "iterations: 133663\ncpu: 5232.291658873439 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5345.360720784378,
            "unit": "ns/iter",
            "extra": "iterations: 130802\ncpu: 5345.237075885719 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1971.3212293873469,
            "unit": "ns/iter",
            "extra": "iterations: 356275\ncpu: 1971.2623675531752 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 9754.506553651992,
            "unit": "ns/iter",
            "extra": "iterations: 69961\ncpu: 9754.320264147203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 7773.487595800997,
            "unit": "ns/iter",
            "extra": "iterations: 90292\ncpu: 7773.196960971102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 7757.182598352036,
            "unit": "ns/iter",
            "extra": "iterations: 89957\ncpu: 7757.01279500207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 7640.839201507752,
            "unit": "ns/iter",
            "extra": "iterations: 91823\ncpu: 7640.594404452026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 17542.844689577352,
            "unit": "ns/iter",
            "extra": "iterations: 39978\ncpu: 17542.13317324519 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 54482.630278392106,
            "unit": "ns/iter",
            "extra": "iterations: 12788\ncpu: 54481.24804504177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 41753.350913840906,
            "unit": "ns/iter",
            "extra": "iterations: 17235\ncpu: 41751.0995068181 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 42031.499788332505,
            "unit": "ns/iter",
            "extra": "iterations: 16535\ncpu: 42029.077713940176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 41407.85833481208,
            "unit": "ns/iter",
            "extra": "iterations: 16899\ncpu: 41404.745842948876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 24807.918369499377,
            "unit": "ns/iter",
            "extra": "iterations: 28433\ncpu: 24806.358808426514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 40799.29672083209,
            "unit": "ns/iter",
            "extra": "iterations: 16925\ncpu: 40796.61447562801 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1872.869072096038,
            "unit": "ns/iter",
            "extra": "iterations: 374015\ncpu: 1872.7786318730355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 9919.817439770728,
            "unit": "ns/iter",
            "extra": "iterations: 70689\ncpu: 9919.249105235616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 7824.015652717467,
            "unit": "ns/iter",
            "extra": "iterations: 89633\ncpu: 7823.511429942072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 7745.315453540324,
            "unit": "ns/iter",
            "extra": "iterations: 90400\ncpu: 7745.138274336233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 7725.194451967607,
            "unit": "ns/iter",
            "extra": "iterations: 88608\ncpu: 7724.741558324309 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 17205.570924246007,
            "unit": "ns/iter",
            "extra": "iterations: 40790\ncpu: 17204.79284138246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 51409.7241634612,
            "unit": "ns/iter",
            "extra": "iterations: 13508\ncpu: 51407.38081137165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 41238.85761511036,
            "unit": "ns/iter",
            "extra": "iterations: 16940\ncpu: 41235.73789846447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 40861.64886694331,
            "unit": "ns/iter",
            "extra": "iterations: 17210\ncpu: 40858.413712957765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 39884.59531268456,
            "unit": "ns/iter",
            "extra": "iterations: 17238\ncpu: 39883.21731059302 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 24851.033297871232,
            "unit": "ns/iter",
            "extra": "iterations: 28200\ncpu: 24850.09929077999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 41452.609374081905,
            "unit": "ns/iter",
            "extra": "iterations: 17111\ncpu: 41451.74449184746 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}