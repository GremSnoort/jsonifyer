window.BENCHMARK_DATA = {
  "lastUpdate": 1702490337135,
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
      }
    ]
  }
}