window.BENCHMARK_DATA = {
  "lastUpdate": 1702391517723,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Parse gcc-12 22.04 Release c++-17": [
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
        "date": 1702381442184,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 633.9805040733592,
            "unit": "ns/iter",
            "extra": "iterations: 1098332\ncpu: 633.9448363518499 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5657.12254999994,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5656.914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 11246.14616024281,
            "unit": "ns/iter",
            "extra": "iterations: 75773\ncpu: 11245.591437583307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 16664.670831026477,
            "unit": "ns/iter",
            "extra": "iterations: 50588\ncpu: 16664.02506523286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 21905.238810198214,
            "unit": "ns/iter",
            "extra": "iterations: 38830\ncpu: 21903.422611382965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 27135.195433700363,
            "unit": "ns/iter",
            "extra": "iterations: 30747\ncpu: 27134.611506813664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 32441.613986935256,
            "unit": "ns/iter",
            "extra": "iterations: 25867\ncpu: 32439.61418022964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 37647.41138328663,
            "unit": "ns/iter",
            "extra": "iterations: 22208\ncpu: 37646.276116714675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 42126.798371596036,
            "unit": "ns/iter",
            "extra": "iterations: 19774\ncpu: 42124.825528471745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 588.9557428519066,
            "unit": "ns/iter",
            "extra": "iterations: 1191220\ncpu: 588.9411695572599 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 442.1715109910251,
            "unit": "ns/iter",
            "extra": "iterations: 1579374\ncpu: 442.1578422843484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 442.8137804818427,
            "unit": "ns/iter",
            "extra": "iterations: 1574749\ncpu: 442.7732292574883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 435.7562932966994,
            "unit": "ns/iter",
            "extra": "iterations: 1614297\ncpu: 435.7135025339207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 906.6839874369385,
            "unit": "ns/iter",
            "extra": "iterations: 777833\ncpu: 906.6593986112713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1541.5989539269378,
            "unit": "ns/iter",
            "extra": "iterations: 511819\ncpu: 1541.5459371379316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 8433.740605681025,
            "unit": "ns/iter",
            "extra": "iterations: 98996\ncpu: 8433.4276132369 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 7760.872032690076,
            "unit": "ns/iter",
            "extra": "iterations: 105230\ncpu: 7760.588235294115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 8783.13149788163,
            "unit": "ns/iter",
            "extra": "iterations: 93492\ncpu: 8782.739699653433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 9717.674393473446,
            "unit": "ns/iter",
            "extra": "iterations: 84209\ncpu: 9717.242812525981 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 28412.634547265858,
            "unit": "ns/iter",
            "extra": "iterations: 29079\ncpu: 28411.386223735317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 287510.39286891866,
            "unit": "ns/iter",
            "extra": "iterations: 3029\ncpu: 287497.6559920763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 210448.74863659116,
            "unit": "ns/iter",
            "extra": "iterations: 4034\ncpu: 210438.20029747186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 215323.80039427392,
            "unit": "ns/iter",
            "extra": "iterations: 4058\ncpu: 215318.13701330748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 213549.96459960195,
            "unit": "ns/iter",
            "extra": "iterations: 4096\ncpu: 213543.60351562468 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 108584.43930490424,
            "unit": "ns/iter",
            "extra": "iterations: 7999\ncpu: 108581.26015751959 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 205472.54120686094,
            "unit": "ns/iter",
            "extra": "iterations: 4259\ncpu: 205461.93942239985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5603.726402964424,
            "unit": "ns/iter",
            "extra": "iterations: 144658\ncpu: 5603.5946853959 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 27816.766382397895,
            "unit": "ns/iter",
            "extra": "iterations: 31543\ncpu: 27815.597755444946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 21719.48319515786,
            "unit": "ns/iter",
            "extra": "iterations: 37995\ncpu: 21718.936702197647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 21551.038508320355,
            "unit": "ns/iter",
            "extra": "iterations: 38641\ncpu: 21549.763204886025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 21021.729011988562,
            "unit": "ns/iter",
            "extra": "iterations: 39463\ncpu: 21020.763753389278 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 44440.33570283386,
            "unit": "ns/iter",
            "extra": "iterations: 18710\ncpu: 44437.963655799314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 299971.1326460346,
            "unit": "ns/iter",
            "extra": "iterations: 2910\ncpu: 299957.42268041207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 229757.76044129507,
            "unit": "ns/iter",
            "extra": "iterations: 3807\ncpu: 229754.793800893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 228552.66361493646,
            "unit": "ns/iter",
            "extra": "iterations: 3823\ncpu: 228537.03897462753 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 226735.73171999207,
            "unit": "ns/iter",
            "extra": "iterations: 3843\ncpu: 226723.86156648523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 121762.23248361803,
            "unit": "ns/iter",
            "extra": "iterations: 7179\ncpu: 121754.33904443486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 219039.15650199566,
            "unit": "ns/iter",
            "extra": "iterations: 3968\ncpu: 219023.41229838636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 874608.3406998263,
            "unit": "ns/iter",
            "extra": "iterations: 1086\ncpu: 874557.0902394139 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 496062.4836019551,
            "unit": "ns/iter",
            "extra": "iterations: 1799\ncpu: 496036.5758754888 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 1472.1568305221974,
            "unit": "ns/iter",
            "extra": "iterations: 546437\ncpu: 1472.0447187873413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 7957.926563452322,
            "unit": "ns/iter",
            "extra": "iterations: 103409\ncpu: 7957.4814571265415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 7380.510871376716,
            "unit": "ns/iter",
            "extra": "iterations: 114015\ncpu: 7379.79914923474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 8489.771972033572,
            "unit": "ns/iter",
            "extra": "iterations: 97260\ncpu: 8489.313181163914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 9250.439446677727,
            "unit": "ns/iter",
            "extra": "iterations: 89351\ncpu: 9249.819252162779 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 26950.573157877763,
            "unit": "ns/iter",
            "extra": "iterations: 31309\ncpu: 26949.075345747162 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 285213.03428201634,
            "unit": "ns/iter",
            "extra": "iterations: 3092\ncpu: 285185.51099611726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 213500.85181621567,
            "unit": "ns/iter",
            "extra": "iterations: 4157\ncpu: 213489.99278325555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 213260.38767589311,
            "unit": "ns/iter",
            "extra": "iterations: 4122\ncpu: 213247.91363415762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 210525.34744139982,
            "unit": "ns/iter",
            "extra": "iterations: 4182\ncpu: 210517.14490674282 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 104709.98539885439,
            "unit": "ns/iter",
            "extra": "iterations: 8424\ncpu: 104703.2882241219 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 203388.63650974535,
            "unit": "ns/iter",
            "extra": "iterations: 4355\ncpu: 203374.00688863342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 196.34106545998716,
            "unit": "ns/iter",
            "extra": "iterations: 3561504\ncpu: 196.3242776085621 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1474.6400254636385,
            "unit": "ns/iter",
            "extra": "iterations: 474403\ncpu: 1474.5804727204468 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1177.992709445389,
            "unit": "ns/iter",
            "extra": "iterations: 648236\ncpu: 1177.9236265804464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1248.278960975567,
            "unit": "ns/iter",
            "extra": "iterations: 558139\ncpu: 1248.2103920349552 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 957.3886504282909,
            "unit": "ns/iter",
            "extra": "iterations: 729913\ncpu: 957.3184749415312 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 8888.323967129221,
            "unit": "ns/iter",
            "extra": "iterations: 79221\ncpu: 8887.435149770865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 12966.344358732387,
            "unit": "ns/iter",
            "extra": "iterations: 54057\ncpu: 12965.28294207964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 3038.604288312802,
            "unit": "ns/iter",
            "extra": "iterations: 229834\ncpu: 3038.3742179138035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2981.518776833613,
            "unit": "ns/iter",
            "extra": "iterations: 233852\ncpu: 2981.3933599028205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2987.7109666103597,
            "unit": "ns/iter",
            "extra": "iterations: 233755\ncpu: 2987.5099997861043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5576.775050555787,
            "unit": "ns/iter",
            "extra": "iterations: 125606\ncpu: 5576.5417257137815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5707.0731374783,
            "unit": "ns/iter",
            "extra": "iterations: 121757\ncpu: 5706.72815526002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1912.1362484764509,
            "unit": "ns/iter",
            "extra": "iterations: 365105\ncpu: 1912.0247600005625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 9884.073939940698,
            "unit": "ns/iter",
            "extra": "iterations: 70963\ncpu: 9883.31102123639 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 7984.562887420324,
            "unit": "ns/iter",
            "extra": "iterations: 87760\ncpu: 7983.6896080218075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 8085.744544731148,
            "unit": "ns/iter",
            "extra": "iterations: 86751\ncpu: 8085.2866249381195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 7996.440489811188,
            "unit": "ns/iter",
            "extra": "iterations: 88279\ncpu: 7995.827999864008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 17926.221554114778,
            "unit": "ns/iter",
            "extra": "iterations: 38916\ncpu: 17925.254394079733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 60214.34671500742,
            "unit": "ns/iter",
            "extra": "iterations: 11583\ncpu: 60211.96581196591 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 48659.49364892176,
            "unit": "ns/iter",
            "extra": "iterations: 14407\ncpu: 48655.67432498138 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 48255.479015914,
            "unit": "ns/iter",
            "extra": "iterations: 14511\ncpu: 48251.80897250349 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 47347.29324022267,
            "unit": "ns/iter",
            "extra": "iterations: 14749\ncpu: 47344.52505254632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 27145.711853206456,
            "unit": "ns/iter",
            "extra": "iterations: 25723\ncpu: 27143.15593049066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 47016.60134909372,
            "unit": "ns/iter",
            "extra": "iterations: 14973\ncpu: 47015.26080277809 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1923.5411901854607,
            "unit": "ns/iter",
            "extra": "iterations: 364565\ncpu: 1923.4690658730565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 9843.567761160502,
            "unit": "ns/iter",
            "extra": "iterations: 71479\ncpu: 9843.113361966312 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 8034.450030395205,
            "unit": "ns/iter",
            "extra": "iterations: 87183\ncpu: 8033.803608501619 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 7938.003609822666,
            "unit": "ns/iter",
            "extra": "iterations: 88370\ncpu: 7937.380332692186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 8007.223789999058,
            "unit": "ns/iter",
            "extra": "iterations: 87314\ncpu: 8007.0091852394535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 18172.988103278178,
            "unit": "ns/iter",
            "extra": "iterations: 38498\ncpu: 18172.26089667004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 59831.670584224135,
            "unit": "ns/iter",
            "extra": "iterations: 11742\ncpu: 59829.24544370559 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 48499.296953790945,
            "unit": "ns/iter",
            "extra": "iterations: 14477\ncpu: 48496.44954065138 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 47619.244489937664,
            "unit": "ns/iter",
            "extra": "iterations: 14655\ncpu: 47614.91641078157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 47557.82865073845,
            "unit": "ns/iter",
            "extra": "iterations: 14771\ncpu: 47555.588653442224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 26942.666602220725,
            "unit": "ns/iter",
            "extra": "iterations: 25861\ncpu: 26940.419937357732 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 46481.828345297865,
            "unit": "ns/iter",
            "extra": "iterations: 15036\ncpu: 46479.56238361243 ns\nthreads: 1"
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
        "date": 1702382597393,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 636.9974660862744,
            "unit": "ns/iter",
            "extra": "iterations: 1091592\ncpu: 636.9764527405844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5697.399519999635,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5697.099 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10936.625680346073,
            "unit": "ns/iter",
            "extra": "iterations: 75513\ncpu: 10936.557943665332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 16408.21828453997,
            "unit": "ns/iter",
            "extra": "iterations: 50622\ncpu: 16401.696890679937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 21422.91831528532,
            "unit": "ns/iter",
            "extra": "iterations: 38416\ncpu: 21421.38952519784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 27049.257772314082,
            "unit": "ns/iter",
            "extra": "iterations: 30911\ncpu: 27048.558765488036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 32374.546057452088,
            "unit": "ns/iter",
            "extra": "iterations: 25935\ncpu: 32373.52997879312 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 37641.46061318523,
            "unit": "ns/iter",
            "extra": "iterations: 22114\ncpu: 37639.73048747401 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 42502.093741992794,
            "unit": "ns/iter",
            "extra": "iterations: 19511\ncpu: 42500.05125313924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 599.0156729786071,
            "unit": "ns/iter",
            "extra": "iterations: 1160022\ncpu: 598.9754504655945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 458.0818591744809,
            "unit": "ns/iter",
            "extra": "iterations: 1527990\ncpu: 458.0565972290389 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 448.7186077787305,
            "unit": "ns/iter",
            "extra": "iterations: 1568199\ncpu: 448.69547806113894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 447.5052798015027,
            "unit": "ns/iter",
            "extra": "iterations: 1555835\ncpu: 447.4893545909437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 901.9318300624719,
            "unit": "ns/iter",
            "extra": "iterations: 774755\ncpu: 901.8902749901599 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1533.2012264248065,
            "unit": "ns/iter",
            "extra": "iterations: 515156\ncpu: 1533.1117176156356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 8147.667359560928,
            "unit": "ns/iter",
            "extra": "iterations: 97177\ncpu: 8147.249863650877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 7544.98250728894,
            "unit": "ns/iter",
            "extra": "iterations: 108731\ncpu: 7544.633085320659 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 9254.663888672896,
            "unit": "ns/iter",
            "extra": "iterations: 90473\ncpu: 9254.21396438715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 9872.94776561431,
            "unit": "ns/iter",
            "extra": "iterations: 84408\ncpu: 9872.28343284994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 27977.813271815925,
            "unit": "ns/iter",
            "extra": "iterations: 29476\ncpu: 27976.72343601573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 290733.83288771566,
            "unit": "ns/iter",
            "extra": "iterations: 2992\ncpu: 290717.74732620304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 216608.36501242977,
            "unit": "ns/iter",
            "extra": "iterations: 4030\ncpu: 216594.5657568245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 216206.36699509673,
            "unit": "ns/iter",
            "extra": "iterations: 4060\ncpu: 216196.7241379313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 213349.19750366936,
            "unit": "ns/iter",
            "extra": "iterations: 4086\ncpu: 213334.04307391087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 110600.49007537303,
            "unit": "ns/iter",
            "extra": "iterations: 7960\ncpu: 110594.51005025115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 207209.7037914805,
            "unit": "ns/iter",
            "extra": "iterations: 4220\ncpu: 207197.53554502333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5549.833665026202,
            "unit": "ns/iter",
            "extra": "iterations: 146722\ncpu: 5549.848011886421 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 26088.47458637906,
            "unit": "ns/iter",
            "extra": "iterations: 31853\ncpu: 26087.27592377492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 21643.768175546084,
            "unit": "ns/iter",
            "extra": "iterations: 38417\ncpu: 21643.35840903761 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 21491.07805282915,
            "unit": "ns/iter",
            "extra": "iterations: 38538\ncpu: 21490.492500908163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 21530.79290971871,
            "unit": "ns/iter",
            "extra": "iterations: 38447\ncpu: 21530.08297136315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 44503.26954305628,
            "unit": "ns/iter",
            "extra": "iterations: 16873\ncpu: 44500.983820304544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 302481.92700729246,
            "unit": "ns/iter",
            "extra": "iterations: 2877\ncpu: 302459.9930483128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 232592.12127659895,
            "unit": "ns/iter",
            "extra": "iterations: 3760\ncpu: 232573.64361702063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 231351.7503970432,
            "unit": "ns/iter",
            "extra": "iterations: 3778\ncpu: 231339.80942297567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 228158.38775509773,
            "unit": "ns/iter",
            "extra": "iterations: 3822\ncpu: 228142.07221350181 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 122153.14104882875,
            "unit": "ns/iter",
            "extra": "iterations: 7189\ncpu: 122143.80303241062 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 221634.86513409633,
            "unit": "ns/iter",
            "extra": "iterations: 3915\ncpu: 221617.49680715177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 890939.8770948704,
            "unit": "ns/iter",
            "extra": "iterations: 1074\ncpu: 890893.9478584679 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 476397.99193983234,
            "unit": "ns/iter",
            "extra": "iterations: 1861\ncpu: 476381.24664159265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 1453.9707571683662,
            "unit": "ns/iter",
            "extra": "iterations: 536063\ncpu: 1453.9593294071785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 7997.453973587443,
            "unit": "ns/iter",
            "extra": "iterations: 102376\ncpu: 7997.013948581682 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 7373.025060832479,
            "unit": "ns/iter",
            "extra": "iterations: 112606\ncpu: 7372.473047617326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 8244.322952307783,
            "unit": "ns/iter",
            "extra": "iterations: 100247\ncpu: 8243.835725757415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 9130.73110468195,
            "unit": "ns/iter",
            "extra": "iterations: 91266\ncpu: 9130.437402756756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 26702.564339295917,
            "unit": "ns/iter",
            "extra": "iterations: 31194\ncpu: 26700.984163621113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 290611.48150594276,
            "unit": "ns/iter",
            "extra": "iterations: 3028\ncpu: 290595.4095112275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 217506.61673682005,
            "unit": "ns/iter",
            "extra": "iterations: 4039\ncpu: 217491.68110918597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 215527.27989197287,
            "unit": "ns/iter",
            "extra": "iterations: 4073\ncpu: 215518.78222440503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 213258.00121891586,
            "unit": "ns/iter",
            "extra": "iterations: 4102\ncpu: 213251.8039980488 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 107326.00746543212,
            "unit": "ns/iter",
            "extra": "iterations: 8171\ncpu: 107321.88226655284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 207404.53122044512,
            "unit": "ns/iter",
            "extra": "iterations: 4228\ncpu: 207393.35383159987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 196.00989430350018,
            "unit": "ns/iter",
            "extra": "iterations: 3586306\ncpu: 196.00441233960365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1491.3709144801505,
            "unit": "ns/iter",
            "extra": "iterations: 470289\ncpu: 1491.3212939277764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1206.227350625815,
            "unit": "ns/iter",
            "extra": "iterations: 585844\ncpu: 1206.1994319306816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1269.07340021917,
            "unit": "ns/iter",
            "extra": "iterations: 551388\ncpu: 1269.0437586599685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 1033.0299372392813,
            "unit": "ns/iter",
            "extra": "iterations: 706812\ncpu: 1032.9964686507913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 8770.02113800376,
            "unit": "ns/iter",
            "extra": "iterations: 78295\ncpu: 8769.820550482173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 14171.377551020381,
            "unit": "ns/iter",
            "extra": "iterations: 49294\ncpu: 14170.580598044366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 3166.2208905468783,
            "unit": "ns/iter",
            "extra": "iterations: 226198\ncpu: 3166.2379861890804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 3043.7037043749915,
            "unit": "ns/iter",
            "extra": "iterations: 220685\ncpu: 3043.6001540657558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 3143.971444587013,
            "unit": "ns/iter",
            "extra": "iterations: 221219\ncpu: 3143.9496607434157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5870.802202116781,
            "unit": "ns/iter",
            "extra": "iterations: 122246\ncpu: 5870.599447016663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5949.550726500765,
            "unit": "ns/iter",
            "extra": "iterations: 116655\ncpu: 5949.414084265624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1972.0998100297704,
            "unit": "ns/iter",
            "extra": "iterations: 350055\ncpu: 1972.0469640485278 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 9828.291081522872,
            "unit": "ns/iter",
            "extra": "iterations: 68644\ncpu: 9827.939805372502 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8264.294328642016,
            "unit": "ns/iter",
            "extra": "iterations: 84195\ncpu: 8264.247283092773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 8185.95176385107,
            "unit": "ns/iter",
            "extra": "iterations: 85268\ncpu: 8185.597175962838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 8128.884039521593,
            "unit": "ns/iter",
            "extra": "iterations: 88763\ncpu: 8128.730439484922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 17953.61484990624,
            "unit": "ns/iter",
            "extra": "iterations: 38842\ncpu: 17953.210442304586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 61697.512175757576,
            "unit": "ns/iter",
            "extra": "iterations: 11334\ncpu: 61695.66790188825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 49558.51018401779,
            "unit": "ns/iter",
            "extra": "iterations: 14238\ncpu: 49556.70037926691 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 49424.939697780785,
            "unit": "ns/iter",
            "extra": "iterations: 14162\ncpu: 49423.894930094466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 48806.50940111495,
            "unit": "ns/iter",
            "extra": "iterations: 14360\ncpu: 48803.830083565445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 27690.285574512232,
            "unit": "ns/iter",
            "extra": "iterations: 25552\ncpu: 27690.039918597224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 47480.86751988484,
            "unit": "ns/iter",
            "extra": "iterations: 14455\ncpu: 47479.19750951218 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 2012.0555377002725,
            "unit": "ns/iter",
            "extra": "iterations: 342254\ncpu: 2012.0603411501163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 10282.339822905185,
            "unit": "ns/iter",
            "extra": "iterations: 68777\ncpu: 10281.703185658005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 8185.602448353206,
            "unit": "ns/iter",
            "extra": "iterations: 83403\ncpu: 8185.434576693952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 8247.593154185965,
            "unit": "ns/iter",
            "extra": "iterations: 86856\ncpu: 8247.333517546329 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 8180.406344305311,
            "unit": "ns/iter",
            "extra": "iterations: 86156\ncpu: 8180.240493987541 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 18430.45346767922,
            "unit": "ns/iter",
            "extra": "iterations: 38210\ncpu: 18430.484166448834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 61074.938967130525,
            "unit": "ns/iter",
            "extra": "iterations: 11289\ncpu: 61071.75126229011 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 49114.32533089028,
            "unit": "ns/iter",
            "extra": "iterations: 14204\ncpu: 49114.390312587704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 49308.25429819569,
            "unit": "ns/iter",
            "extra": "iterations: 14192\ncpu: 49307.22942502776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 48192.36218375205,
            "unit": "ns/iter",
            "extra": "iterations: 14269\ncpu: 48190.72815193805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 27468.84671219826,
            "unit": "ns/iter",
            "extra": "iterations: 25625\ncpu: 27468.347317073116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 47880.39301670773,
            "unit": "ns/iter",
            "extra": "iterations: 14549\ncpu: 47878.79579352521 ns\nthreads: 1"
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
          "id": "89047ca37b911c271e1749e8de13632f782d585c",
          "message": "cmt clang 15 build",
          "timestamp": "2023-12-12T16:57:18+03:00",
          "tree_id": "2f2c9ed08ef5734141953c56ba19061c15b85598",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/89047ca37b911c271e1749e8de13632f782d585c"
        },
        "date": 1702391517359,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 637.3574720600066,
            "unit": "ns/iter",
            "extra": "iterations: 1099409\ncpu: 637.3601635060292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5709.2287400007535,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5709.174999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 11127.776403337137,
            "unit": "ns/iter",
            "extra": "iterations: 74697\ncpu: 11127.357189713106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 16659.027400986844,
            "unit": "ns/iter",
            "extra": "iterations: 51458\ncpu: 16658.327179447315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 22065.65421532577,
            "unit": "ns/iter",
            "extra": "iterations: 37506\ncpu: 22064.365701487764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 27284.295894682782,
            "unit": "ns/iter",
            "extra": "iterations: 30156\ncpu: 27282.749701551933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 32952.236411858496,
            "unit": "ns/iter",
            "extra": "iterations: 25261\ncpu: 32950.44139186889 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 38159.153580200975,
            "unit": "ns/iter",
            "extra": "iterations: 21982\ncpu: 38157.18314984988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 42577.14894704204,
            "unit": "ns/iter",
            "extra": "iterations: 19564\ncpu: 42574.672868534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 597.2622505609692,
            "unit": "ns/iter",
            "extra": "iterations: 1176089\ncpu: 597.2542044011975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 455.1666581046549,
            "unit": "ns/iter",
            "extra": "iterations: 1537795\ncpu: 455.1435659499477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 448.0655450662129,
            "unit": "ns/iter",
            "extra": "iterations: 1556288\ncpu: 448.04354977998946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 450.59270404337434,
            "unit": "ns/iter",
            "extra": "iterations: 1479477\ncpu: 450.5642872447495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 941.5365239362467,
            "unit": "ns/iter",
            "extra": "iterations: 744060\ncpu: 941.4719243071802 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1541.9338597971314,
            "unit": "ns/iter",
            "extra": "iterations: 512729\ncpu: 1541.8474476770384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 8295.260258116261,
            "unit": "ns/iter",
            "extra": "iterations: 98483\ncpu: 8294.860026603576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 7682.2615296342765,
            "unit": "ns/iter",
            "extra": "iterations: 106313\ncpu: 7681.830067818584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 8829.488640399393,
            "unit": "ns/iter",
            "extra": "iterations: 92917\ncpu: 8829.127070396155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 9588.7966364965,
            "unit": "ns/iter",
            "extra": "iterations: 85625\ncpu: 9588.37956204379 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 28377.526159681187,
            "unit": "ns/iter",
            "extra": "iterations: 28995\ncpu: 28376.72357302979 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 279695.9753694295,
            "unit": "ns/iter",
            "extra": "iterations: 3045\ncpu: 279681.67487684765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 219229.7644826749,
            "unit": "ns/iter",
            "extra": "iterations: 3953\ncpu: 219216.77207184487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 217623.53748127297,
            "unit": "ns/iter",
            "extra": "iterations: 4002\ncpu: 217613.41829085472 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 213455.55555556383,
            "unit": "ns/iter",
            "extra": "iterations: 4050\ncpu: 213444.14814814855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 110697.69918187188,
            "unit": "ns/iter",
            "extra": "iterations: 7945\ncpu: 110693.12775330363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 207145.0938248034,
            "unit": "ns/iter",
            "extra": "iterations: 4178\ncpu: 207133.29344183806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5509.045905767458,
            "unit": "ns/iter",
            "extra": "iterations: 145363\ncpu: 5508.766329808839 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 28161.717146849885,
            "unit": "ns/iter",
            "extra": "iterations: 30058\ncpu: 28159.731186372974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 22171.021313728368,
            "unit": "ns/iter",
            "extra": "iterations: 37816\ncpu: 22169.750899090388 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 22030.37534626169,
            "unit": "ns/iter",
            "extra": "iterations: 38266\ncpu: 22029.247896304838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 21575.032039035454,
            "unit": "ns/iter",
            "extra": "iterations: 38734\ncpu: 21574.242267775022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 44633.27259352604,
            "unit": "ns/iter",
            "extra": "iterations: 19032\ncpu: 44631.82009247596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 306020.2786016769,
            "unit": "ns/iter",
            "extra": "iterations: 2832\ncpu: 306007.45056497253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 236474.83079848145,
            "unit": "ns/iter",
            "extra": "iterations: 3682\ncpu: 236467.21890277092 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 232803.49246906216,
            "unit": "ns/iter",
            "extra": "iterations: 3718\ncpu: 232789.9139322213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 231251.3563462763,
            "unit": "ns/iter",
            "extra": "iterations: 3766\ncpu: 231240.86563993574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 124781.43106580275,
            "unit": "ns/iter",
            "extra": "iterations: 7159\ncpu: 124772.4123480935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 227279.61038960778,
            "unit": "ns/iter",
            "extra": "iterations: 3850\ncpu: 227265.16883116908 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 888028.0215759916,
            "unit": "ns/iter",
            "extra": "iterations: 1066\ncpu: 887975.6097561036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 495561.9081746578,
            "unit": "ns/iter",
            "extra": "iterations: 1786\ncpu: 495533.2586786097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 1475.485346040551,
            "unit": "ns/iter",
            "extra": "iterations: 538694\ncpu: 1475.4138713258324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 8222.966178816992,
            "unit": "ns/iter",
            "extra": "iterations: 101534\ncpu: 8222.689936375995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 7784.293172803831,
            "unit": "ns/iter",
            "extra": "iterations: 106149\ncpu: 7783.818029373818 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 8475.010807191255,
            "unit": "ns/iter",
            "extra": "iterations: 97065\ncpu: 8474.634523257566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 9155.645416984153,
            "unit": "ns/iter",
            "extra": "iterations: 89068\ncpu: 9155.430682175456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 27851.83908712912,
            "unit": "ns/iter",
            "extra": "iterations: 31023\ncpu: 27850.565709312432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 294180.9415887937,
            "unit": "ns/iter",
            "extra": "iterations: 2996\ncpu: 294178.0707610147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 212340.78025709093,
            "unit": "ns/iter",
            "extra": "iterations: 4123\ncpu: 212327.7225321361 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 211630.86950219658,
            "unit": "ns/iter",
            "extra": "iterations: 4138\ncpu: 211628.73368777128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 208432.12929388278,
            "unit": "ns/iter",
            "extra": "iterations: 4192\ncpu: 208427.55248091512 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 105061.60766119127,
            "unit": "ns/iter",
            "extra": "iterations: 8406\ncpu: 105060.77801570232 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 205908.3216799583,
            "unit": "ns/iter",
            "extra": "iterations: 4262\ncpu: 205901.47817925917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 195.97083523725294,
            "unit": "ns/iter",
            "extra": "iterations: 3573799\ncpu: 195.96935921690138 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1598.6813438914176,
            "unit": "ns/iter",
            "extra": "iterations: 469026\ncpu: 1598.6499682320366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1278.8886885408112,
            "unit": "ns/iter",
            "extra": "iterations: 594521\ncpu: 1278.878458456474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1340.6007081211694,
            "unit": "ns/iter",
            "extra": "iterations: 519685\ncpu: 1340.5549515572009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 1018.6749672080592,
            "unit": "ns/iter",
            "extra": "iterations: 688429\ncpu: 1018.6659771741195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9300.276924689886,
            "unit": "ns/iter",
            "extra": "iterations: 76259\ncpu: 9299.964594342986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 13962.112069309702,
            "unit": "ns/iter",
            "extra": "iterations: 49978\ncpu: 13961.979270879134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 3130.265643026809,
            "unit": "ns/iter",
            "extra": "iterations: 221888\ncpu: 3130.240932362278 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 3124.695264822382,
            "unit": "ns/iter",
            "extra": "iterations: 224490\ncpu: 3124.6362866943014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 3127.035604127829,
            "unit": "ns/iter",
            "extra": "iterations: 221435\ncpu: 3126.9632171969297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5659.385484974037,
            "unit": "ns/iter",
            "extra": "iterations: 124285\ncpu: 5659.172868809622 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5888.8268436971175,
            "unit": "ns/iter",
            "extra": "iterations: 119678\ncpu: 5888.7840705893905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1998.0948742256674,
            "unit": "ns/iter",
            "extra": "iterations: 349157\ncpu: 1998.032117356957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10528.265572230472,
            "unit": "ns/iter",
            "extra": "iterations: 68102\ncpu: 10528.175383982749 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8376.749664558405,
            "unit": "ns/iter",
            "extra": "iterations: 83472\ncpu: 8376.680803143548 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 8371.566299004482,
            "unit": "ns/iter",
            "extra": "iterations: 83410\ncpu: 8371.414698477502 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 7945.658093708942,
            "unit": "ns/iter",
            "extra": "iterations: 85307\ncpu: 7945.583598063344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 17862.687607922326,
            "unit": "ns/iter",
            "extra": "iterations: 39380\ncpu: 17862.036566785133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 61182.379437928816,
            "unit": "ns/iter",
            "extra": "iterations: 11351\ncpu: 61180.750594661484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 49247.3693274033,
            "unit": "ns/iter",
            "extra": "iterations: 14169\ncpu: 49245.22549227241 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 49015.37103740369,
            "unit": "ns/iter",
            "extra": "iterations: 13659\ncpu: 49014.96449227633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 49681.22503025582,
            "unit": "ns/iter",
            "extra": "iterations: 14047\ncpu: 49678.73567309812 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 26817.18027498313,
            "unit": "ns/iter",
            "extra": "iterations: 26038\ncpu: 26816.932944158678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 48086.33374341901,
            "unit": "ns/iter",
            "extra": "iterations: 14631\ncpu: 48085.387191580056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1923.8602418843102,
            "unit": "ns/iter",
            "extra": "iterations: 363893\ncpu: 1923.8380512952886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 9919.648473373896,
            "unit": "ns/iter",
            "extra": "iterations: 70777\ncpu: 9919.09236051254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 8142.469427070361,
            "unit": "ns/iter",
            "extra": "iterations: 86171\ncpu: 8142.392452217065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 8132.57530018794,
            "unit": "ns/iter",
            "extra": "iterations: 85863\ncpu: 8132.201297415714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 8145.365570329436,
            "unit": "ns/iter",
            "extra": "iterations: 85740\ncpu: 8145.186610683443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 18465.028263618413,
            "unit": "ns/iter",
            "extra": "iterations: 37964\ncpu: 18465.09851438202 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 59751.93315668228,
            "unit": "ns/iter",
            "extra": "iterations: 11699\ncpu: 59748.969997435066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 48608.196786866014,
            "unit": "ns/iter",
            "extra": "iterations: 14254\ncpu: 48607.632945138335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 48313.04570484644,
            "unit": "ns/iter",
            "extra": "iterations: 14528\ncpu: 48311.5363436123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 48541.73719947313,
            "unit": "ns/iter",
            "extra": "iterations: 14433\ncpu: 48539.1533291765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 26970.83708059457,
            "unit": "ns/iter",
            "extra": "iterations: 26019\ncpu: 26970.58687881927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 46988.88185653652,
            "unit": "ns/iter",
            "extra": "iterations: 14931\ncpu: 46985.38610943733 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}