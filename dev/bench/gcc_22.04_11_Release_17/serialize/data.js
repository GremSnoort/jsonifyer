window.BENCHMARK_DATA = {
  "lastUpdate": 1702387059630,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Serialize gcc-11 22.04 Release c++-17": [
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
        "date": 1702381094885,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 911.5653190122924,
            "unit": "ns/iter",
            "extra": "iterations: 764563\ncpu: 911.523707006486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 18235.753156482304,
            "unit": "ns/iter",
            "extra": "iterations: 45462\ncpu: 18235.194228146585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 42692.127406993626,
            "unit": "ns/iter",
            "extra": "iterations: 21396\ncpu: 42691.67134043747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 52497.433199999934,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 52496.14999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 63802.15250579532,
            "unit": "ns/iter",
            "extra": "iterations: 12511\ncpu: 63800.66341619371 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 79801.35975164143,
            "unit": "ns/iter",
            "extra": "iterations: 10952\ncpu: 79799.14170927684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 95779.01878295692,
            "unit": "ns/iter",
            "extra": "iterations: 9104\ncpu: 95777.60325131814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 111969.52921578336,
            "unit": "ns/iter",
            "extra": "iterations: 7804\ncpu: 111965.60738083032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 142382.6280164753,
            "unit": "ns/iter",
            "extra": "iterations: 6796\ncpu: 142380.16480282522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 760.651016215368,
            "unit": "ns/iter",
            "extra": "iterations: 911667\ncpu: 760.6321167707058 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 618.6126809489311,
            "unit": "ns/iter",
            "extra": "iterations: 1125594\ncpu: 618.6107068801008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 602.339910278638,
            "unit": "ns/iter",
            "extra": "iterations: 1144655\ncpu: 602.3212234253997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 607.8811375409057,
            "unit": "ns/iter",
            "extra": "iterations: 1147528\ncpu: 607.8738819444927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1230.9925238044257,
            "unit": "ns/iter",
            "extra": "iterations: 565127\ncpu: 1230.9648981556334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 5345.629172057358,
            "unit": "ns/iter",
            "extra": "iterations: 149177\ncpu: 5345.6028744377545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 24346.261184726027,
            "unit": "ns/iter",
            "extra": "iterations: 34489\ncpu: 24345.36228942561 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 20279.39091242127,
            "unit": "ns/iter",
            "extra": "iterations: 40935\ncpu: 20278.605105655297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 20947.58828156648,
            "unit": "ns/iter",
            "extra": "iterations: 39408\ncpu: 20946.90671944783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 20341.989726619187,
            "unit": "ns/iter",
            "extra": "iterations: 40493\ncpu: 20341.945521448215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 58069.285387814816,
            "unit": "ns/iter",
            "extra": "iterations: 14440\ncpu: 58067.8185595567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 614108.7010000206,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 613912.7000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 609860.4249134976,
            "unit": "ns/iter",
            "extra": "iterations: 1445\ncpu: 609838.7543252591 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 610314.6295264625,
            "unit": "ns/iter",
            "extra": "iterations: 1436\ncpu: 610302.0194986082 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 613909.0181058471,
            "unit": "ns/iter",
            "extra": "iterations: 1436\ncpu: 613888.6490250691 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 354122.6160032337,
            "unit": "ns/iter",
            "extra": "iterations: 2487\ncpu: 354107.1974266196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 606576.1459649366,
            "unit": "ns/iter",
            "extra": "iterations: 1425\ncpu: 606562.5964912258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 2754294.288629764,
            "unit": "ns/iter",
            "extra": "iterations: 343\ncpu: 2754217.4927113713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 1156300.1990349914,
            "unit": "ns/iter",
            "extra": "iterations: 829\ncpu: 1156261.640530759 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 3373384.1510791276,
            "unit": "ns/iter",
            "extra": "iterations: 278\ncpu: 3373258.9928057548 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 5606.89152740299,
            "unit": "ns/iter",
            "extra": "iterations: 143852\ncpu: 5606.681172315972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 24295.222878998717,
            "unit": "ns/iter",
            "extra": "iterations: 34512\ncpu: 24294.848168752986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 20316.096491655764,
            "unit": "ns/iter",
            "extra": "iterations: 40988\ncpu: 20315.455743144295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 20998.488997679135,
            "unit": "ns/iter",
            "extra": "iterations: 39628\ncpu: 20998.147774301106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 20424.912295364218,
            "unit": "ns/iter",
            "extra": "iterations: 40682\ncpu: 20423.64436360067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 57735.5349708598,
            "unit": "ns/iter",
            "extra": "iterations: 14412\ncpu: 57734.23535942286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 592805.0710000434,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 592798.6000000018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 628760.5666428849,
            "unit": "ns/iter",
            "extra": "iterations: 1403\ncpu: 628748.3962936569 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 625108.8956706731,
            "unit": "ns/iter",
            "extra": "iterations: 1409\ncpu: 625102.3420865884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 623373.8728813546,
            "unit": "ns/iter",
            "extra": "iterations: 1416\ncpu: 623366.3135593225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 352278.3564870291,
            "unit": "ns/iter",
            "extra": "iterations: 2505\ncpu: 352270.0199600783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 615599.8639218301,
            "unit": "ns/iter",
            "extra": "iterations: 1433\ncpu: 615582.9727843693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 2869427.5545454025,
            "unit": "ns/iter",
            "extra": "iterations: 330\ncpu: 2869360.9090909087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 1200144.0318066827,
            "unit": "ns/iter",
            "extra": "iterations: 786\ncpu: 1200118.4478371479 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 5399.586018758709,
            "unit": "ns/iter",
            "extra": "iterations: 146811\ncpu: 5399.497312871686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 24053.67781384084,
            "unit": "ns/iter",
            "extra": "iterations: 34508\ncpu: 24053.152892082962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 19372.858664243213,
            "unit": "ns/iter",
            "extra": "iterations: 42912\ncpu: 19372.52749813567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 19568.41197954795,
            "unit": "ns/iter",
            "extra": "iterations: 42439\ncpu: 19567.859751643547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 19441.784517849355,
            "unit": "ns/iter",
            "extra": "iterations: 42746\ncpu: 19441.437795349324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 57327.807514964545,
            "unit": "ns/iter",
            "extra": "iterations: 14531\ncpu: 57326.38497006387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 591111.6760000255,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 591107.6000000008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 615161.385097487,
            "unit": "ns/iter",
            "extra": "iterations: 1436\ncpu: 615143.6629526459 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 611831.9536332086,
            "unit": "ns/iter",
            "extra": "iterations: 1445\ncpu: 611826.6435986172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 616757.534722249,
            "unit": "ns/iter",
            "extra": "iterations: 1440\ncpu: 616742.2916666659 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 356300.61692738964,
            "unit": "ns/iter",
            "extra": "iterations: 2493\ncpu: 356291.73686321906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 612675.6582984597,
            "unit": "ns/iter",
            "extra": "iterations: 1434\ncpu: 612665.9693165967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 301.1504925465066,
            "unit": "ns/iter",
            "extra": "iterations: 2323537\ncpu: 301.14424689600247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 2342.6208021654525,
            "unit": "ns/iter",
            "extra": "iterations: 298517\ncpu: 2342.5523504524144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1739.7749683284885,
            "unit": "ns/iter",
            "extra": "iterations: 402570\ncpu: 1739.7240231512644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1848.5179709486908,
            "unit": "ns/iter",
            "extra": "iterations: 378778\ncpu: 1848.4912006505012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1431.5708147706391,
            "unit": "ns/iter",
            "extra": "iterations: 485965\ncpu: 1431.5111170557345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 10550.448114771192,
            "unit": "ns/iter",
            "extra": "iterations: 66358\ncpu: 10550.220018686507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 30455.22686995003,
            "unit": "ns/iter",
            "extra": "iterations: 23022\ncpu: 30454.356702285004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 7180.281604596286,
            "unit": "ns/iter",
            "extra": "iterations: 97470\ncpu: 7180.191853903775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 7140.557518781704,
            "unit": "ns/iter",
            "extra": "iterations: 97968\ncpu: 7140.370325004067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 7148.416109574001,
            "unit": "ns/iter",
            "extra": "iterations: 97979\ncpu: 7148.282795292869 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 15179.684018818794,
            "unit": "ns/iter",
            "extra": "iterations: 46123\ncpu: 15179.1318864777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 13933.26199839523,
            "unit": "ns/iter",
            "extra": "iterations: 49840\ncpu: 13932.788924558447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3215.5955642919125,
            "unit": "ns/iter",
            "extra": "iterations: 217733\ncpu: 3215.5681499818556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 15804.621805446857,
            "unit": "ns/iter",
            "extra": "iterations: 44255\ncpu: 15804.087673709326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 12709.993868268528,
            "unit": "ns/iter",
            "extra": "iterations: 54960\ncpu: 12709.923580785886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 12822.854509400966,
            "unit": "ns/iter",
            "extra": "iterations: 54464\ncpu: 12822.56720035276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 13742.867714617118,
            "unit": "ns/iter",
            "extra": "iterations: 50066\ncpu: 13742.493908041311 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 30713.756627667393,
            "unit": "ns/iter",
            "extra": "iterations: 22821\ncpu: 30712.527934797254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 135823.48055231417,
            "unit": "ns/iter",
            "extra": "iterations: 5142\ncpu: 135819.99222092648 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 118492.53400673132,
            "unit": "ns/iter",
            "extra": "iterations: 5940\ncpu: 118492.17171717015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 118814.39059582134,
            "unit": "ns/iter",
            "extra": "iterations: 5891\ncpu: 118809.94737735456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 119960.42181880365,
            "unit": "ns/iter",
            "extra": "iterations: 5839\ncpu: 119958.8114403154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 69527.5240969819,
            "unit": "ns/iter",
            "extra": "iterations: 10105\ncpu: 69526.09599208365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 119365.27826825,
            "unit": "ns/iter",
            "extra": "iterations: 5890\ncpu: 119363.19185059342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3148.7628288151336,
            "unit": "ns/iter",
            "extra": "iterations: 221591\ncpu: 3148.6689441358217 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 15418.043018632861,
            "unit": "ns/iter",
            "extra": "iterations: 45027\ncpu: 15417.602771670508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 12684.186133768522,
            "unit": "ns/iter",
            "extra": "iterations: 55170\ncpu: 12684.03117636413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 12713.812936360853,
            "unit": "ns/iter",
            "extra": "iterations: 54714\ncpu: 12713.285447965804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 13448.606205434178,
            "unit": "ns/iter",
            "extra": "iterations: 51890\ncpu: 13448.379263827324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 30459.667978548387,
            "unit": "ns/iter",
            "extra": "iterations: 23122\ncpu: 30384.992647694748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 134187.72815159068,
            "unit": "ns/iter",
            "extra": "iterations: 5172\ncpu: 134185.8081979908 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 117549.35043889165,
            "unit": "ns/iter",
            "extra": "iterations: 5924\ncpu: 117546.94463200448 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 115164.32251622686,
            "unit": "ns/iter",
            "extra": "iterations: 6009\ncpu: 115162.53952404876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 119317.16769021504,
            "unit": "ns/iter",
            "extra": "iterations: 5862\ncpu: 119315.60900716577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 67971.14152591728,
            "unit": "ns/iter",
            "extra": "iterations: 10302\ncpu: 67967.54028344009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 119026.95821152288,
            "unit": "ns/iter",
            "extra": "iterations: 5815\ncpu: 119024.62596732572 ns\nthreads: 1"
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
          "id": "d50bb7d9db5207dc297814766d8c83b14fcc339b",
          "message": "More tests; More BMs; Separate BMs",
          "timestamp": "2023-12-12T14:29:05+03:00",
          "tree_id": "f44cff78a7d652bd003cb40812243c64e409e254",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/d50bb7d9db5207dc297814766d8c83b14fcc339b"
        },
        "date": 1702381094885,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 911.5653190122924,
            "unit": "ns/iter",
            "extra": "iterations: 764563\ncpu: 911.523707006486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 18235.753156482304,
            "unit": "ns/iter",
            "extra": "iterations: 45462\ncpu: 18235.194228146585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 42692.127406993626,
            "unit": "ns/iter",
            "extra": "iterations: 21396\ncpu: 42691.67134043747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 52497.433199999934,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 52496.14999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 63802.15250579532,
            "unit": "ns/iter",
            "extra": "iterations: 12511\ncpu: 63800.66341619371 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 79801.35975164143,
            "unit": "ns/iter",
            "extra": "iterations: 10952\ncpu: 79799.14170927684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 95779.01878295692,
            "unit": "ns/iter",
            "extra": "iterations: 9104\ncpu: 95777.60325131814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 111969.52921578336,
            "unit": "ns/iter",
            "extra": "iterations: 7804\ncpu: 111965.60738083032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 142382.6280164753,
            "unit": "ns/iter",
            "extra": "iterations: 6796\ncpu: 142380.16480282522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 760.651016215368,
            "unit": "ns/iter",
            "extra": "iterations: 911667\ncpu: 760.6321167707058 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 618.6126809489311,
            "unit": "ns/iter",
            "extra": "iterations: 1125594\ncpu: 618.6107068801008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 602.339910278638,
            "unit": "ns/iter",
            "extra": "iterations: 1144655\ncpu: 602.3212234253997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 607.8811375409057,
            "unit": "ns/iter",
            "extra": "iterations: 1147528\ncpu: 607.8738819444927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1230.9925238044257,
            "unit": "ns/iter",
            "extra": "iterations: 565127\ncpu: 1230.9648981556334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 5345.629172057358,
            "unit": "ns/iter",
            "extra": "iterations: 149177\ncpu: 5345.6028744377545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 24346.261184726027,
            "unit": "ns/iter",
            "extra": "iterations: 34489\ncpu: 24345.36228942561 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 20279.39091242127,
            "unit": "ns/iter",
            "extra": "iterations: 40935\ncpu: 20278.605105655297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 20947.58828156648,
            "unit": "ns/iter",
            "extra": "iterations: 39408\ncpu: 20946.90671944783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 20341.989726619187,
            "unit": "ns/iter",
            "extra": "iterations: 40493\ncpu: 20341.945521448215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 58069.285387814816,
            "unit": "ns/iter",
            "extra": "iterations: 14440\ncpu: 58067.8185595567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 614108.7010000206,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 613912.7000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 609860.4249134976,
            "unit": "ns/iter",
            "extra": "iterations: 1445\ncpu: 609838.7543252591 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 610314.6295264625,
            "unit": "ns/iter",
            "extra": "iterations: 1436\ncpu: 610302.0194986082 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 613909.0181058471,
            "unit": "ns/iter",
            "extra": "iterations: 1436\ncpu: 613888.6490250691 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 354122.6160032337,
            "unit": "ns/iter",
            "extra": "iterations: 2487\ncpu: 354107.1974266196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 606576.1459649366,
            "unit": "ns/iter",
            "extra": "iterations: 1425\ncpu: 606562.5964912258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 2754294.288629764,
            "unit": "ns/iter",
            "extra": "iterations: 343\ncpu: 2754217.4927113713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 1156300.1990349914,
            "unit": "ns/iter",
            "extra": "iterations: 829\ncpu: 1156261.640530759 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 3373384.1510791276,
            "unit": "ns/iter",
            "extra": "iterations: 278\ncpu: 3373258.9928057548 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 5606.89152740299,
            "unit": "ns/iter",
            "extra": "iterations: 143852\ncpu: 5606.681172315972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 24295.222878998717,
            "unit": "ns/iter",
            "extra": "iterations: 34512\ncpu: 24294.848168752986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 20316.096491655764,
            "unit": "ns/iter",
            "extra": "iterations: 40988\ncpu: 20315.455743144295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 20998.488997679135,
            "unit": "ns/iter",
            "extra": "iterations: 39628\ncpu: 20998.147774301106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 20424.912295364218,
            "unit": "ns/iter",
            "extra": "iterations: 40682\ncpu: 20423.64436360067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 57735.5349708598,
            "unit": "ns/iter",
            "extra": "iterations: 14412\ncpu: 57734.23535942286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 592805.0710000434,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 592798.6000000018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 628760.5666428849,
            "unit": "ns/iter",
            "extra": "iterations: 1403\ncpu: 628748.3962936569 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 625108.8956706731,
            "unit": "ns/iter",
            "extra": "iterations: 1409\ncpu: 625102.3420865884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 623373.8728813546,
            "unit": "ns/iter",
            "extra": "iterations: 1416\ncpu: 623366.3135593225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 352278.3564870291,
            "unit": "ns/iter",
            "extra": "iterations: 2505\ncpu: 352270.0199600783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 615599.8639218301,
            "unit": "ns/iter",
            "extra": "iterations: 1433\ncpu: 615582.9727843693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 2869427.5545454025,
            "unit": "ns/iter",
            "extra": "iterations: 330\ncpu: 2869360.9090909087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 1200144.0318066827,
            "unit": "ns/iter",
            "extra": "iterations: 786\ncpu: 1200118.4478371479 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 5399.586018758709,
            "unit": "ns/iter",
            "extra": "iterations: 146811\ncpu: 5399.497312871686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 24053.67781384084,
            "unit": "ns/iter",
            "extra": "iterations: 34508\ncpu: 24053.152892082962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 19372.858664243213,
            "unit": "ns/iter",
            "extra": "iterations: 42912\ncpu: 19372.52749813567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 19568.41197954795,
            "unit": "ns/iter",
            "extra": "iterations: 42439\ncpu: 19567.859751643547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 19441.784517849355,
            "unit": "ns/iter",
            "extra": "iterations: 42746\ncpu: 19441.437795349324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 57327.807514964545,
            "unit": "ns/iter",
            "extra": "iterations: 14531\ncpu: 57326.38497006387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 591111.6760000255,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 591107.6000000008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 615161.385097487,
            "unit": "ns/iter",
            "extra": "iterations: 1436\ncpu: 615143.6629526459 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 611831.9536332086,
            "unit": "ns/iter",
            "extra": "iterations: 1445\ncpu: 611826.6435986172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 616757.534722249,
            "unit": "ns/iter",
            "extra": "iterations: 1440\ncpu: 616742.2916666659 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 356300.61692738964,
            "unit": "ns/iter",
            "extra": "iterations: 2493\ncpu: 356291.73686321906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 612675.6582984597,
            "unit": "ns/iter",
            "extra": "iterations: 1434\ncpu: 612665.9693165967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 301.1504925465066,
            "unit": "ns/iter",
            "extra": "iterations: 2323537\ncpu: 301.14424689600247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 2342.6208021654525,
            "unit": "ns/iter",
            "extra": "iterations: 298517\ncpu: 2342.5523504524144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1739.7749683284885,
            "unit": "ns/iter",
            "extra": "iterations: 402570\ncpu: 1739.7240231512644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1848.5179709486908,
            "unit": "ns/iter",
            "extra": "iterations: 378778\ncpu: 1848.4912006505012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1431.5708147706391,
            "unit": "ns/iter",
            "extra": "iterations: 485965\ncpu: 1431.5111170557345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 10550.448114771192,
            "unit": "ns/iter",
            "extra": "iterations: 66358\ncpu: 10550.220018686507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 30455.22686995003,
            "unit": "ns/iter",
            "extra": "iterations: 23022\ncpu: 30454.356702285004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 7180.281604596286,
            "unit": "ns/iter",
            "extra": "iterations: 97470\ncpu: 7180.191853903775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 7140.557518781704,
            "unit": "ns/iter",
            "extra": "iterations: 97968\ncpu: 7140.370325004067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 7148.416109574001,
            "unit": "ns/iter",
            "extra": "iterations: 97979\ncpu: 7148.282795292869 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 15179.684018818794,
            "unit": "ns/iter",
            "extra": "iterations: 46123\ncpu: 15179.1318864777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 13933.26199839523,
            "unit": "ns/iter",
            "extra": "iterations: 49840\ncpu: 13932.788924558447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3215.5955642919125,
            "unit": "ns/iter",
            "extra": "iterations: 217733\ncpu: 3215.5681499818556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 15804.621805446857,
            "unit": "ns/iter",
            "extra": "iterations: 44255\ncpu: 15804.087673709326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 12709.993868268528,
            "unit": "ns/iter",
            "extra": "iterations: 54960\ncpu: 12709.923580785886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 12822.854509400966,
            "unit": "ns/iter",
            "extra": "iterations: 54464\ncpu: 12822.56720035276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 13742.867714617118,
            "unit": "ns/iter",
            "extra": "iterations: 50066\ncpu: 13742.493908041311 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 30713.756627667393,
            "unit": "ns/iter",
            "extra": "iterations: 22821\ncpu: 30712.527934797254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 135823.48055231417,
            "unit": "ns/iter",
            "extra": "iterations: 5142\ncpu: 135819.99222092648 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 118492.53400673132,
            "unit": "ns/iter",
            "extra": "iterations: 5940\ncpu: 118492.17171717015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 118814.39059582134,
            "unit": "ns/iter",
            "extra": "iterations: 5891\ncpu: 118809.94737735456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 119960.42181880365,
            "unit": "ns/iter",
            "extra": "iterations: 5839\ncpu: 119958.8114403154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 69527.5240969819,
            "unit": "ns/iter",
            "extra": "iterations: 10105\ncpu: 69526.09599208365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 119365.27826825,
            "unit": "ns/iter",
            "extra": "iterations: 5890\ncpu: 119363.19185059342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3148.7628288151336,
            "unit": "ns/iter",
            "extra": "iterations: 221591\ncpu: 3148.6689441358217 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 15418.043018632861,
            "unit": "ns/iter",
            "extra": "iterations: 45027\ncpu: 15417.602771670508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 12684.186133768522,
            "unit": "ns/iter",
            "extra": "iterations: 55170\ncpu: 12684.03117636413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 12713.812936360853,
            "unit": "ns/iter",
            "extra": "iterations: 54714\ncpu: 12713.285447965804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 13448.606205434178,
            "unit": "ns/iter",
            "extra": "iterations: 51890\ncpu: 13448.379263827324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 30459.667978548387,
            "unit": "ns/iter",
            "extra": "iterations: 23122\ncpu: 30384.992647694748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 134187.72815159068,
            "unit": "ns/iter",
            "extra": "iterations: 5172\ncpu: 134185.8081979908 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 117549.35043889165,
            "unit": "ns/iter",
            "extra": "iterations: 5924\ncpu: 117546.94463200448 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 115164.32251622686,
            "unit": "ns/iter",
            "extra": "iterations: 6009\ncpu: 115162.53952404876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 119317.16769021504,
            "unit": "ns/iter",
            "extra": "iterations: 5862\ncpu: 119315.60900716577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 67971.14152591728,
            "unit": "ns/iter",
            "extra": "iterations: 10302\ncpu: 67967.54028344009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 119026.95821152288,
            "unit": "ns/iter",
            "extra": "iterations: 5815\ncpu: 119024.62596732572 ns\nthreads: 1"
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
        "date": 1702382271213,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 918.8666335925509,
            "unit": "ns/iter",
            "extra": "iterations: 776035\ncpu: 918.8402584934958 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 18062.55115602661,
            "unit": "ns/iter",
            "extra": "iterations: 47101\ncpu: 18062.372348782403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 41003.683222598884,
            "unit": "ns/iter",
            "extra": "iterations: 21523\ncpu: 41002.16512567951 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 52901.552499997706,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 52898.71999999995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 63330.80976240192,
            "unit": "ns/iter",
            "extra": "iterations: 12374\ncpu: 63329.40843704543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 78718.26017974911,
            "unit": "ns/iter",
            "extra": "iterations: 10904\ncpu: 78716.42516507706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 93784.05804491177,
            "unit": "ns/iter",
            "extra": "iterations: 9217\ncpu: 93783.74742323956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 109805.3504684742,
            "unit": "ns/iter",
            "extra": "iterations: 7898\ncpu: 109801.60800202581 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 137528.4685253068,
            "unit": "ns/iter",
            "extra": "iterations: 6815\ncpu: 137528.9361702128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 718.366867412216,
            "unit": "ns/iter",
            "extra": "iterations: 992135\ncpu: 718.357683178197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 582.3166476389846,
            "unit": "ns/iter",
            "extra": "iterations: 1227159\ncpu: 582.3060418413583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 593.7761881120772,
            "unit": "ns/iter",
            "extra": "iterations: 1182359\ncpu: 593.7573951735475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 610.4302614508896,
            "unit": "ns/iter",
            "extra": "iterations: 1146984\ncpu: 610.3918624845671 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1226.348015143528,
            "unit": "ns/iter",
            "extra": "iterations: 568958\ncpu: 1226.3342812650485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 5294.792385752414,
            "unit": "ns/iter",
            "extra": "iterations: 148800\ncpu: 5294.614919354839 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 23279.3689521853,
            "unit": "ns/iter",
            "extra": "iterations: 35178\ncpu: 23278.73386775826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 19947.0216095193,
            "unit": "ns/iter",
            "extra": "iterations: 41093\ncpu: 19946.258486846913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 20574.36871748322,
            "unit": "ns/iter",
            "extra": "iterations: 39594\ncpu: 20573.672778703836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 19975.328954384895,
            "unit": "ns/iter",
            "extra": "iterations: 41258\ncpu: 19974.484948373683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 56561.73335118111,
            "unit": "ns/iter",
            "extra": "iterations: 14941\ncpu: 56559.10581621039 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 593696.3489999699,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 593531.9999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 583676.7953176978,
            "unit": "ns/iter",
            "extra": "iterations: 1495\ncpu: 583664.1471571904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 599142.307845727,
            "unit": "ns/iter",
            "extra": "iterations: 1504\ncpu: 599129.7872340424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 593644.123899816,
            "unit": "ns/iter",
            "extra": "iterations: 1477\ncpu: 593619.4989844275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 349216.0535643947,
            "unit": "ns/iter",
            "extra": "iterations: 2539\ncpu: 349206.61677825986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 597249.4303967626,
            "unit": "ns/iter",
            "extra": "iterations: 1487\ncpu: 597235.104236718 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 2768371.801749356,
            "unit": "ns/iter",
            "extra": "iterations: 343\ncpu: 2768239.067055403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 1145953.4927007912,
            "unit": "ns/iter",
            "extra": "iterations: 822\ncpu: 1145918.0048661835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 3367276.5000001653,
            "unit": "ns/iter",
            "extra": "iterations: 280\ncpu: 3367141.428571431 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 5205.611707153247,
            "unit": "ns/iter",
            "extra": "iterations: 142887\ncpu: 5205.178217752494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 23958.569283334455,
            "unit": "ns/iter",
            "extra": "iterations: 34828\ncpu: 23958.128517284913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 19687.77112487266,
            "unit": "ns/iter",
            "extra": "iterations: 41018\ncpu: 19687.47622994781 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 20754.218584377504,
            "unit": "ns/iter",
            "extra": "iterations: 40378\ncpu: 20753.969983654355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 19518.332729137986,
            "unit": "ns/iter",
            "extra": "iterations: 41929\ncpu: 19518.13541939945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 57333.4318762532,
            "unit": "ns/iter",
            "extra": "iterations: 14481\ncpu: 57263.46246806208 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 582280.8969999755,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 582276.6000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 616963.644351462,
            "unit": "ns/iter",
            "extra": "iterations: 1434\ncpu: 616954.5327754552 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 626984.7062986562,
            "unit": "ns/iter",
            "extra": "iterations: 1413\ncpu: 626977.6362349603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 616655.4870900136,
            "unit": "ns/iter",
            "extra": "iterations: 1433\ncpu: 616652.0586182823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 343803.708680143,
            "unit": "ns/iter",
            "extra": "iterations: 2523\ncpu: 343799.1676575511 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 607307.398891962,
            "unit": "ns/iter",
            "extra": "iterations: 1444\ncpu: 607300.4847645418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 2857910.214925311,
            "unit": "ns/iter",
            "extra": "iterations: 335\ncpu: 2857825.3731343304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 1203923.7525125635,
            "unit": "ns/iter",
            "extra": "iterations: 796\ncpu: 1203904.145728642 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 5313.702034017589,
            "unit": "ns/iter",
            "extra": "iterations: 147688\ncpu: 5313.455392448965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 23675.089675089766,
            "unit": "ns/iter",
            "extra": "iterations: 34625\ncpu: 23673.712635379146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 19155.412523317802,
            "unit": "ns/iter",
            "extra": "iterations: 43423\ncpu: 19154.66688160653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 19155.966146859017,
            "unit": "ns/iter",
            "extra": "iterations: 43157\ncpu: 19155.63871446102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 19336.411680151592,
            "unit": "ns/iter",
            "extra": "iterations: 43133\ncpu: 19335.601511603734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 56167.19753086377,
            "unit": "ns/iter",
            "extra": "iterations: 15066\ncpu: 56165.876808708534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 576013.598999964,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 575983.5999999936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 597318.2709766238,
            "unit": "ns/iter",
            "extra": "iterations: 1454\ncpu: 597301.3755158208 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 596004.4107744332,
            "unit": "ns/iter",
            "extra": "iterations: 1485\ncpu: 595996.0942760936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 586234.6279701226,
            "unit": "ns/iter",
            "extra": "iterations: 1473\ncpu: 586212.898845895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 347885.1170731646,
            "unit": "ns/iter",
            "extra": "iterations: 2460\ncpu: 347874.5528455263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 601770.0060606146,
            "unit": "ns/iter",
            "extra": "iterations: 1485\ncpu: 601750.9090909094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 298.0121395031583,
            "unit": "ns/iter",
            "extra": "iterations: 2343918\ncpu: 298.0066282182211 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 2233.4058350358932,
            "unit": "ns/iter",
            "extra": "iterations: 302963\ncpu: 2233.412330878688 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1786.117963972975,
            "unit": "ns/iter",
            "extra": "iterations: 405751\ncpu: 1786.096152566471 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1789.4607830972955,
            "unit": "ns/iter",
            "extra": "iterations: 386874\ncpu: 1789.4024928012648 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1381.815650049141,
            "unit": "ns/iter",
            "extra": "iterations: 518107\ncpu: 1381.7813694854553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 10197.595196909524,
            "unit": "ns/iter",
            "extra": "iterations: 69372\ncpu: 10197.153030040823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 30731.13077961398,
            "unit": "ns/iter",
            "extra": "iterations: 23704\ncpu: 30729.758690516675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 7144.936732094137,
            "unit": "ns/iter",
            "extra": "iterations: 99703\ncpu: 7144.5252399627025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 7397.343908046348,
            "unit": "ns/iter",
            "extra": "iterations: 97875\ncpu: 7397.256704980859 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 7374.794191838327,
            "unit": "ns/iter",
            "extra": "iterations: 93558\ncpu: 7374.643536629669 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 15050.388084272548,
            "unit": "ns/iter",
            "extra": "iterations: 47987\ncpu: 15049.98228686949 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 13521.932314670905,
            "unit": "ns/iter",
            "extra": "iterations: 50262\ncpu: 13521.475468544835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3151.6625448256395,
            "unit": "ns/iter",
            "extra": "iterations: 220856\ncpu: 3151.5707067048193 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 15470.105223101311,
            "unit": "ns/iter",
            "extra": "iterations: 45988\ncpu: 15469.698617030586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 12594.379143891781,
            "unit": "ns/iter",
            "extra": "iterations: 56348\ncpu: 12594.139987222141 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 12616.672088663703,
            "unit": "ns/iter",
            "extra": "iterations: 54408\ncpu: 12616.201661520436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 13829.115098984621,
            "unit": "ns/iter",
            "extra": "iterations: 49957\ncpu: 13828.884840963085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 30598.903246837333,
            "unit": "ns/iter",
            "extra": "iterations: 23007\ncpu: 30598.13535011111 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 137171.77692308067,
            "unit": "ns/iter",
            "extra": "iterations: 5070\ncpu: 137172.20907297786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 116829.55345380977,
            "unit": "ns/iter",
            "extra": "iterations: 5921\ncpu: 116827.15757473264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 119249.74192994682,
            "unit": "ns/iter",
            "extra": "iterations: 5824\ncpu: 119242.46222527623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 118717.66643729953,
            "unit": "ns/iter",
            "extra": "iterations: 5813\ncpu: 118713.31498365864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 70200.0534404839,
            "unit": "ns/iter",
            "extra": "iterations: 9955\ncpu: 70196.17277749915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 116023.53656042297,
            "unit": "ns/iter",
            "extra": "iterations: 5867\ncpu: 116023.91341401234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3113.990418034515,
            "unit": "ns/iter",
            "extra": "iterations: 217805\ncpu: 3113.9735084134463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 15418.938773211234,
            "unit": "ns/iter",
            "extra": "iterations: 44376\ncpu: 15418.848025960084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 12833.574301594186,
            "unit": "ns/iter",
            "extra": "iterations: 54696\ncpu: 12833.232777533989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 12820.327069939574,
            "unit": "ns/iter",
            "extra": "iterations: 56306\ncpu: 12819.990764749758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 13602.65314463629,
            "unit": "ns/iter",
            "extra": "iterations: 52359\ncpu: 13602.28232013592 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 30873.925715544323,
            "unit": "ns/iter",
            "extra": "iterations: 22710\ncpu: 30871.99031263739 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 134914.9461266262,
            "unit": "ns/iter",
            "extra": "iterations: 5086\ncpu: 134911.0302791992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 117838.04469556012,
            "unit": "ns/iter",
            "extra": "iterations: 5929\ncpu: 117831.96154494991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 115191.79649529059,
            "unit": "ns/iter",
            "extra": "iterations: 6049\ncpu: 115192.16399404763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 115011.84245113064,
            "unit": "ns/iter",
            "extra": "iterations: 6087\ncpu: 115012.27205519783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 68270.29619404735,
            "unit": "ns/iter",
            "extra": "iterations: 10142\ncpu: 68267.56063892785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 116037.3137948484,
            "unit": "ns/iter",
            "extra": "iterations: 5937\ncpu: 116034.96715512872 ns\nthreads: 1"
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
          "id": "7d92f1613fa4ae9edff977fb9a4ee38db56bedcc",
          "message": "Enable another Clangs : try",
          "timestamp": "2023-12-12T16:01:28+03:00",
          "tree_id": "088c43bf274cde79393a5114d044a347c612360f",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/7d92f1613fa4ae9edff977fb9a4ee38db56bedcc"
        },
        "date": 1702387058784,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 915.038640943383,
            "unit": "ns/iter",
            "extra": "iterations: 766208\ncpu: 915.0211169812897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 18712.697804515872,
            "unit": "ns/iter",
            "extra": "iterations: 45047\ncpu: 18712.51803671721 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 42513.90224687483,
            "unit": "ns/iter",
            "extra": "iterations: 21452\ncpu: 42510.84747342905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 52432.82509999858,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 52432.27000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 63550.44978201455,
            "unit": "ns/iter",
            "extra": "iterations: 12386\ncpu: 63543.500726626844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 79749.2870159449,
            "unit": "ns/iter",
            "extra": "iterations: 10975\ncpu: 79744.28246013667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 95524.0404262368,
            "unit": "ns/iter",
            "extra": "iterations: 9103\ncpu: 95517.86224321648 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 111018.96078431398,
            "unit": "ns/iter",
            "extra": "iterations: 7854\ncpu: 111014.94779730076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 140096.0352889939,
            "unit": "ns/iter",
            "extra": "iterations: 6886\ncpu: 140089.23903572452 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 742.0235168993662,
            "unit": "ns/iter",
            "extra": "iterations: 944002\ncpu: 741.9842330842513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 604.8552531202184,
            "unit": "ns/iter",
            "extra": "iterations: 1152239\ncpu: 604.8250406382695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 595.728057085705,
            "unit": "ns/iter",
            "extra": "iterations: 1170731\ncpu: 595.7083224071121 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 614.4007992522678,
            "unit": "ns/iter",
            "extra": "iterations: 1144820\ncpu: 614.375535018606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1230.763672302005,
            "unit": "ns/iter",
            "extra": "iterations: 553473\ncpu: 1230.6753897660783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 5348.013863086824,
            "unit": "ns/iter",
            "extra": "iterations: 150183\ncpu: 5347.818994160459 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 24111.726943366997,
            "unit": "ns/iter",
            "extra": "iterations: 34502\ncpu: 24110.457364790487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 20260.620703933946,
            "unit": "ns/iter",
            "extra": "iterations: 41055\ncpu: 20259.88308366825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 21127.00280388018,
            "unit": "ns/iter",
            "extra": "iterations: 39588\ncpu: 21125.775487521503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 20410.190158465386,
            "unit": "ns/iter",
            "extra": "iterations: 40766\ncpu: 20410.160427807554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 57434.87133696789,
            "unit": "ns/iter",
            "extra": "iterations: 14503\ncpu: 57431.48314141886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 623888.4859999984,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 623616.8000000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 600434.0242718431,
            "unit": "ns/iter",
            "extra": "iterations: 1442\ncpu: 600382.4549237158 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 604323.3873812855,
            "unit": "ns/iter",
            "extra": "iterations: 1474\ncpu: 604289.6879240172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 610889.8184300386,
            "unit": "ns/iter",
            "extra": "iterations: 1465\ncpu: 610837.7474402736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 358468.0606557461,
            "unit": "ns/iter",
            "extra": "iterations: 2440\ncpu: 358441.4344262291 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 614239.0465444295,
            "unit": "ns/iter",
            "extra": "iterations: 1418\ncpu: 614183.1452750356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 2780816.6618075366,
            "unit": "ns/iter",
            "extra": "iterations: 343\ncpu: 2780696.2099125423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 1160182.2822383947,
            "unit": "ns/iter",
            "extra": "iterations: 822\ncpu: 1160090.6326034078 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 3420686.394927467,
            "unit": "ns/iter",
            "extra": "iterations: 276\ncpu: 3420551.0869565206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 5598.340159644965,
            "unit": "ns/iter",
            "extra": "iterations: 143318\ncpu: 5598.012810672758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 25083.30943966226,
            "unit": "ns/iter",
            "extra": "iterations: 33105\ncpu: 25081.60398731304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 20517.357077580942,
            "unit": "ns/iter",
            "extra": "iterations: 40487\ncpu: 20515.886580877894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 21291.365409857382,
            "unit": "ns/iter",
            "extra": "iterations: 38855\ncpu: 21289.036160082327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 20699.669517090784,
            "unit": "ns/iter",
            "extra": "iterations: 40111\ncpu: 20698.54404028826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 58546.023281904505,
            "unit": "ns/iter",
            "extra": "iterations: 14260\ncpu: 58544.25666199148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 605437.5569999593,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 605403.7000000037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 517910.1409999589,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 517178.9999999987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 628359.9687500121,
            "unit": "ns/iter",
            "extra": "iterations: 1408\ncpu: 628327.6278409048 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 622913.3173483828,
            "unit": "ns/iter",
            "extra": "iterations: 1418\ncpu: 622864.1043723571 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 361097.02691681124,
            "unit": "ns/iter",
            "extra": "iterations: 2452\ncpu: 361099.79608482885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 622759.7784854618,
            "unit": "ns/iter",
            "extra": "iterations: 1413\ncpu: 622754.6355272465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 2893506.691131437,
            "unit": "ns/iter",
            "extra": "iterations: 327\ncpu: 2893375.8409785917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 1239894.5959079713,
            "unit": "ns/iter",
            "extra": "iterations: 782\ncpu: 1239829.7953964253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 5406.891293352244,
            "unit": "ns/iter",
            "extra": "iterations: 146302\ncpu: 5406.649259750354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 24995.1232637319,
            "unit": "ns/iter",
            "extra": "iterations: 33189\ncpu: 24993.79915032089 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 19691.657182825176,
            "unit": "ns/iter",
            "extra": "iterations: 42177\ncpu: 19690.859947364577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 19925.77435773707,
            "unit": "ns/iter",
            "extra": "iterations: 41455\ncpu: 19924.532625738786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 19912.096806577974,
            "unit": "ns/iter",
            "extra": "iterations: 41836\ncpu: 19911.131561334776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 58017.7569141175,
            "unit": "ns/iter",
            "extra": "iterations: 14427\ncpu: 58014.68080682052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 594767.8289999771,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 594715.100000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 617633.440867769,
            "unit": "ns/iter",
            "extra": "iterations: 1429\ncpu: 617586.214135757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 613871.4353268365,
            "unit": "ns/iter",
            "extra": "iterations: 1438\ncpu: 613836.7176634233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 612469.6129706798,
            "unit": "ns/iter",
            "extra": "iterations: 1434\ncpu: 612434.0306834028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 360181.31821895635,
            "unit": "ns/iter",
            "extra": "iterations: 2448\ncpu: 360159.19117646903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 616548.5571030354,
            "unit": "ns/iter",
            "extra": "iterations: 1436\ncpu: 616539.7632311936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 295.58906318618403,
            "unit": "ns/iter",
            "extra": "iterations: 2368240\ncpu: 295.57950207749417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 2371.87745538891,
            "unit": "ns/iter",
            "extra": "iterations: 295778\ncpu: 2371.892770929542 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1765.2576365186198,
            "unit": "ns/iter",
            "extra": "iterations: 395239\ncpu: 1765.1944772656616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1898.6449910271294,
            "unit": "ns/iter",
            "extra": "iterations: 369447\ncpu: 1898.6195584211107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1408.9824388106954,
            "unit": "ns/iter",
            "extra": "iterations: 493019\ncpu: 1408.903307986097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 11288.354809115792,
            "unit": "ns/iter",
            "extra": "iterations: 62132\ncpu: 11288.163909096866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 29181.133350190637,
            "unit": "ns/iter",
            "extra": "iterations: 23727\ncpu: 29180.30513760692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 7119.884328472022,
            "unit": "ns/iter",
            "extra": "iterations: 98261\ncpu: 7119.707717202248 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 7134.03338799562,
            "unit": "ns/iter",
            "extra": "iterations: 98179\ncpu: 7134.075515130617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 7143.215951007784,
            "unit": "ns/iter",
            "extra": "iterations: 98138\ncpu: 7142.965008457477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 15583.38603219805,
            "unit": "ns/iter",
            "extra": "iterations: 44846\ncpu: 15583.512464879894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 14441.945044220396,
            "unit": "ns/iter",
            "extra": "iterations: 49185\ncpu: 14440.87628341968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3212.1930222207457,
            "unit": "ns/iter",
            "extra": "iterations: 217949\ncpu: 3212.166148961447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 16161.721050968381,
            "unit": "ns/iter",
            "extra": "iterations: 44302\ncpu: 16157.97706649808 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 12656.256268724179,
            "unit": "ns/iter",
            "extra": "iterations: 55075\ncpu: 12655.507943713226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 12697.725298234493,
            "unit": "ns/iter",
            "extra": "iterations: 55158\ncpu: 12696.586170636936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 13530.8446236251,
            "unit": "ns/iter",
            "extra": "iterations: 50973\ncpu: 13529.839326702613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 30328.810152990704,
            "unit": "ns/iter",
            "extra": "iterations: 23008\ncpu: 30327.099269819515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 135660.4947511668,
            "unit": "ns/iter",
            "extra": "iterations: 5144\ncpu: 135649.49455676362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 119131.46541199848,
            "unit": "ns/iter",
            "extra": "iterations: 5898\ncpu: 119130.94269243807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 118470.25263515065,
            "unit": "ns/iter",
            "extra": "iterations: 5882\ncpu: 118462.20673240362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 118384.74404057805,
            "unit": "ns/iter",
            "extra": "iterations: 5915\ncpu: 118384.12510566306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 71025.81246832245,
            "unit": "ns/iter",
            "extra": "iterations: 9865\ncpu: 71026.31525595533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 121298.65916176751,
            "unit": "ns/iter",
            "extra": "iterations: 5774\ncpu: 121294.28472462678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3183.6922054936804,
            "unit": "ns/iter",
            "extra": "iterations: 219783\ncpu: 3183.7130260302133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 15628.731308778002,
            "unit": "ns/iter",
            "extra": "iterations: 44553\ncpu: 15627.971180391687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 12912.198013428026,
            "unit": "ns/iter",
            "extra": "iterations: 54365\ncpu: 12912.283638370245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 12873.162803184792,
            "unit": "ns/iter",
            "extra": "iterations: 54010\ncpu: 12872.266246991314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 13558.829148841687,
            "unit": "ns/iter",
            "extra": "iterations: 51659\ncpu: 13558.711937900433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 30024.991257017566,
            "unit": "ns/iter",
            "extra": "iterations: 23333\ncpu: 30023.147473535715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 137281.76660117853,
            "unit": "ns/iter",
            "extra": "iterations: 5090\ncpu: 137280.56974459568 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 117875.27479373896,
            "unit": "ns/iter",
            "extra": "iterations: 5939\ncpu: 117876.12392658749 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 117095.79296346522,
            "unit": "ns/iter",
            "extra": "iterations: 5912\ncpu: 117090.84912043369 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 119122.32926002025,
            "unit": "ns/iter",
            "extra": "iterations: 5892\ncpu: 119123.16700610881 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 69519.90235423094,
            "unit": "ns/iter",
            "extra": "iterations: 10067\ncpu: 69516.40011920205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 119384.23705721748,
            "unit": "ns/iter",
            "extra": "iterations: 5872\ncpu: 119383.07220708409 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}