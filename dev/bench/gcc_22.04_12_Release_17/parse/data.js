window.BENCHMARK_DATA = {
  "lastUpdate": 1702381442917,
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
      }
    ]
  }
}