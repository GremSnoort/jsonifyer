window.BENCHMARK_DATA = {
  "lastUpdate": 1702416011896,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Parse gcc-10 22.04 Release c++-17": [
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
        "date": 1702397913398,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 624.8764944424588,
            "unit": "ns/iter",
            "extra": "iterations: 1113626\ncpu: 624.8288922852017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5643.148180000139,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5642.744999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 11238.487257379596,
            "unit": "ns/iter",
            "extra": "iterations: 74396\ncpu: 11238.278939727947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 16760.497299002654,
            "unit": "ns/iter",
            "extra": "iterations: 50722\ncpu: 16760.488545404358 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 21953.318015412122,
            "unit": "ns/iter",
            "extra": "iterations: 39061\ncpu: 21951.642303064447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 26965.329497632945,
            "unit": "ns/iter",
            "extra": "iterations: 30416\ncpu: 26963.75263019464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 32704.173784919476,
            "unit": "ns/iter",
            "extra": "iterations: 25451\ncpu: 32701.764174295728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 37577.61773922561,
            "unit": "ns/iter",
            "extra": "iterations: 22019\ncpu: 37575.12602752168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 42962.881976023265,
            "unit": "ns/iter",
            "extra": "iterations: 19352\ncpu: 42959.358205870194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 578.2068676480933,
            "unit": "ns/iter",
            "extra": "iterations: 1208536\ncpu: 578.1601044569627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 441.65288129982787,
            "unit": "ns/iter",
            "extra": "iterations: 1582862\ncpu: 441.6136087669046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 452.02954241953705,
            "unit": "ns/iter",
            "extra": "iterations: 1545608\ncpu: 452.02244036003964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 437.8555823801913,
            "unit": "ns/iter",
            "extra": "iterations: 1600518\ncpu: 437.85499444554864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 936.5471498295099,
            "unit": "ns/iter",
            "extra": "iterations: 747850\ncpu: 936.5454302333343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1533.7208657965293,
            "unit": "ns/iter",
            "extra": "iterations: 514301\ncpu: 1533.6277782854781 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 9695.826095956847,
            "unit": "ns/iter",
            "extra": "iterations: 82120\ncpu: 9695.32878714078 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 9924.318574513505,
            "unit": "ns/iter",
            "extra": "iterations: 97230\ncpu: 9923.636737632398 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 9855.012744849346,
            "unit": "ns/iter",
            "extra": "iterations: 82857\ncpu: 9854.550611294168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 8632.079461119887,
            "unit": "ns/iter",
            "extra": "iterations: 97016\ncpu: 8631.55046590256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 27224.33315541844,
            "unit": "ns/iter",
            "extra": "iterations: 29977\ncpu: 27222.06024618876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 290518.78594558453,
            "unit": "ns/iter",
            "extra": "iterations: 3088\ncpu: 290492.616580311 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 212275.41473467424,
            "unit": "ns/iter",
            "extra": "iterations: 3882\ncpu: 212265.61051004558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 213149.3644563693,
            "unit": "ns/iter",
            "extra": "iterations: 4102\ncpu: 213133.861530961 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 211267.49235623048,
            "unit": "ns/iter",
            "extra": "iterations: 4121\ncpu: 211252.8997816062 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 107854.44287833977,
            "unit": "ns/iter",
            "extra": "iterations: 8088\ncpu: 107841.14737883284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 205101.39275634338,
            "unit": "ns/iter",
            "extra": "iterations: 4252\ncpu: 205089.41674506132 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5735.810129999664,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5735.433000000007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 27115.46308965249,
            "unit": "ns/iter",
            "extra": "iterations: 30696\ncpu: 27113.825905655456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 21918.101424955894,
            "unit": "ns/iter",
            "extra": "iterations: 37545\ncpu: 21916.508190171808 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 23531.244735953373,
            "unit": "ns/iter",
            "extra": "iterations: 35524\ncpu: 23529.464587321283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 22275.32598844033,
            "unit": "ns/iter",
            "extra": "iterations: 36851\ncpu: 22273.764619684687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 44637.40455994588,
            "unit": "ns/iter",
            "extra": "iterations: 18509\ncpu: 44635.085634015915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 295769.22833053046,
            "unit": "ns/iter",
            "extra": "iterations: 2965\ncpu: 295753.4569983129 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 228132.7896814899,
            "unit": "ns/iter",
            "extra": "iterations: 3799\ncpu: 228121.05817320387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 228830.9473959695,
            "unit": "ns/iter",
            "extra": "iterations: 3821\ncpu: 228815.67652446905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 226457.50000000163,
            "unit": "ns/iter",
            "extra": "iterations: 3834\ncpu: 226442.67083985452 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 116482.35255047547,
            "unit": "ns/iter",
            "extra": "iterations: 7528\ncpu: 116476.75345377284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 217551.89102245515,
            "unit": "ns/iter",
            "extra": "iterations: 4010\ncpu: 217535.1371571064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 869819.2736455222,
            "unit": "ns/iter",
            "extra": "iterations: 1089\ncpu: 869746.4646464679 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 466859.9623940696,
            "unit": "ns/iter",
            "extra": "iterations: 1888\ncpu: 466825.7944915247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 2415.5461683997437,
            "unit": "ns/iter",
            "extra": "iterations: 330345\ncpu: 2415.40631763763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 9294.285324561673,
            "unit": "ns/iter",
            "extra": "iterations: 89074\ncpu: 9293.642364775314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 9535.680306612761,
            "unit": "ns/iter",
            "extra": "iterations: 87537\ncpu: 9535.097158915709 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 8609.366565567761,
            "unit": "ns/iter",
            "extra": "iterations: 94627\ncpu: 8608.845255582431 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 8129.09388159761,
            "unit": "ns/iter",
            "extra": "iterations: 101873\ncpu: 8128.711238502816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 26816.59262226719,
            "unit": "ns/iter",
            "extra": "iterations: 31202\ncpu: 26814.58239856429 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 279284.3358681891,
            "unit": "ns/iter",
            "extra": "iterations: 3156\ncpu: 279266.06463878375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 210090.97252747134,
            "unit": "ns/iter",
            "extra": "iterations: 4186\ncpu: 210075.08361204062 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 209822.2042624558,
            "unit": "ns/iter",
            "extra": "iterations: 4176\ncpu: 209813.62547892806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 208452.09372763673,
            "unit": "ns/iter",
            "extra": "iterations: 4193\ncpu: 208436.53708561926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 102613.7369718324,
            "unit": "ns/iter",
            "extra": "iterations: 8520\ncpu: 102607.6643192486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 201692.9335632111,
            "unit": "ns/iter",
            "extra": "iterations: 4350\ncpu: 201682.68965517267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 202.47943988396327,
            "unit": "ns/iter",
            "extra": "iterations: 3456498\ncpu: 202.46937796579087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1534.1512329382088,
            "unit": "ns/iter",
            "extra": "iterations: 454524\ncpu: 1534.042426802553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1072.0843126470531,
            "unit": "ns/iter",
            "extra": "iterations: 654540\ncpu: 1072.0186696000242 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1292.636668236589,
            "unit": "ns/iter",
            "extra": "iterations: 541395\ncpu: 1292.568272702925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 1022.2436849318766,
            "unit": "ns/iter",
            "extra": "iterations: 734711\ncpu: 1022.241670534396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 8951.461954496872,
            "unit": "ns/iter",
            "extra": "iterations: 77841\ncpu: 8951.326421808548 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 13237.84059321183,
            "unit": "ns/iter",
            "extra": "iterations: 52595\ncpu: 13236.893240802416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 3040.735664474933,
            "unit": "ns/iter",
            "extra": "iterations: 231017\ncpu: 3040.557188432025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 3047.713162541156,
            "unit": "ns/iter",
            "extra": "iterations: 228816\ncpu: 3047.650513950073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2995.2348603856453,
            "unit": "ns/iter",
            "extra": "iterations: 234897\ncpu: 2995.1395718123213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5373.087917749616,
            "unit": "ns/iter",
            "extra": "iterations: 130042\ncpu: 5372.714200027682 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5636.499371819103,
            "unit": "ns/iter",
            "extra": "iterations: 124168\ncpu: 5636.181624895326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1848.2077195220859,
            "unit": "ns/iter",
            "extra": "iterations: 379324\ncpu: 1848.0631333635672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 9949.525787562292,
            "unit": "ns/iter",
            "extra": "iterations: 71042\ncpu: 9949.518594634219 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8146.140384884837,
            "unit": "ns/iter",
            "extra": "iterations: 85636\ncpu: 8146.033210332255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 7996.090952933121,
            "unit": "ns/iter",
            "extra": "iterations: 87089\ncpu: 7995.431110702787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 8030.174461455816,
            "unit": "ns/iter",
            "extra": "iterations: 86019\ncpu: 8029.5934619096615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 17986.41406952592,
            "unit": "ns/iter",
            "extra": "iterations: 38921\ncpu: 17984.787132910293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 59543.68816013676,
            "unit": "ns/iter",
            "extra": "iterations: 11740\ncpu: 59540.562180579174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 47766.41187726139,
            "unit": "ns/iter",
            "extra": "iterations: 14633\ncpu: 47762.35221758986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 48100.1749845954,
            "unit": "ns/iter",
            "extra": "iterations: 14607\ncpu: 48096.17306770784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 47335.80117950091,
            "unit": "ns/iter",
            "extra": "iterations: 14752\ncpu: 47334.51735357898 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 27188.836149631545,
            "unit": "ns/iter",
            "extra": "iterations: 25743\ncpu: 27187.996736976747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 47143.628985505835,
            "unit": "ns/iter",
            "extra": "iterations: 14835\ncpu: 47142.500842601075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1867.0756042344149,
            "unit": "ns/iter",
            "extra": "iterations: 373696\ncpu: 1867.0290824627275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 9738.690610953758,
            "unit": "ns/iter",
            "extra": "iterations: 72084\ncpu: 9737.99456189995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 7955.945542414794,
            "unit": "ns/iter",
            "extra": "iterations: 87940\ncpu: 7955.524221059894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 7987.405032005444,
            "unit": "ns/iter",
            "extra": "iterations: 87798\ncpu: 7986.738877878881 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 7876.258026199404,
            "unit": "ns/iter",
            "extra": "iterations: 88398\ncpu: 7875.648770334076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 17828.056591263106,
            "unit": "ns/iter",
            "extra": "iterations: 39211\ncpu: 17827.58154599476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 58528.447887796974,
            "unit": "ns/iter",
            "extra": "iterations: 11907\ncpu: 58524.24624170699 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 47358.08421902302,
            "unit": "ns/iter",
            "extra": "iterations: 14866\ncpu: 47357.46670254299 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 47381.79847059681,
            "unit": "ns/iter",
            "extra": "iterations: 14777\ncpu: 47378.35825945693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 47276.838751103234,
            "unit": "ns/iter",
            "extra": "iterations: 14797\ncpu: 47272.51469892542 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 27136.3932014384,
            "unit": "ns/iter",
            "extra": "iterations: 25829\ncpu: 27134.93360176554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 46535.56154203462,
            "unit": "ns/iter",
            "extra": "iterations: 15071\ncpu: 46531.417955012636 ns\nthreads: 1"
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
        "date": 1702409125054,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 619.0008851351819,
            "unit": "ns/iter",
            "extra": "iterations: 1134290\ncpu: 618.9640215465181 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5517.183510000336,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5516.682999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10641.21773563165,
            "unit": "ns/iter",
            "extra": "iterations: 78035\ncpu: 10640.65996027424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 16005.296308247129,
            "unit": "ns/iter",
            "extra": "iterations: 52685\ncpu: 16004.006833064435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 21358.59314551132,
            "unit": "ns/iter",
            "extra": "iterations: 39186\ncpu: 21357.20410350637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 26271.95003615733,
            "unit": "ns/iter",
            "extra": "iterations: 30422\ncpu: 26269.420156465712 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 31555.945746086232,
            "unit": "ns/iter",
            "extra": "iterations: 26505\ncpu: 31555.415959252954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 36533.237121111866,
            "unit": "ns/iter",
            "extra": "iterations: 22731\ncpu: 36529.27279926089 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 41264.69951055624,
            "unit": "ns/iter",
            "extra": "iterations: 20227\ncpu: 41261.4673456272 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 571.3859750463024,
            "unit": "ns/iter",
            "extra": "iterations: 1223947\ncpu: 571.3445108325773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 440.38181191928663,
            "unit": "ns/iter",
            "extra": "iterations: 1570666\ncpu: 440.3682896300041 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 433.5351716495385,
            "unit": "ns/iter",
            "extra": "iterations: 1600849\ncpu: 433.52739702495336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 439.3766035401909,
            "unit": "ns/iter",
            "extra": "iterations: 1590933\ncpu: 439.3782139159852 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 957.0321428571128,
            "unit": "ns/iter",
            "extra": "iterations: 731080\ncpu: 957.0131859714398 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1507.217364421056,
            "unit": "ns/iter",
            "extra": "iterations: 527239\ncpu: 1507.1827008244832 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 9454.059909045021,
            "unit": "ns/iter",
            "extra": "iterations: 87516\ncpu: 9453.71817724759 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 8899.336880510406,
            "unit": "ns/iter",
            "extra": "iterations: 92092\ncpu: 8899.206228554063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 9379.605299412222,
            "unit": "ns/iter",
            "extra": "iterations: 87104\ncpu: 9379.32127112419 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 9018.174762320235,
            "unit": "ns/iter",
            "extra": "iterations: 90563\ncpu: 9017.984165718857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 26908.41305632203,
            "unit": "ns/iter",
            "extra": "iterations: 30468\ncpu: 26907.040173296617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 267043.0206662504,
            "unit": "ns/iter",
            "extra": "iterations: 3242\ncpu: 267033.8371375695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 207810.28169684444,
            "unit": "ns/iter",
            "extra": "iterations: 4196\ncpu: 207802.97902764528 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 208477.53631816842,
            "unit": "ns/iter",
            "extra": "iterations: 4199\ncpu: 208471.23124553412 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 205042.71713337165,
            "unit": "ns/iter",
            "extra": "iterations: 4214\ncpu: 205035.95158993825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 105889.35433070808,
            "unit": "ns/iter",
            "extra": "iterations: 8255\ncpu: 105887.91035735919 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 198737.172819561,
            "unit": "ns/iter",
            "extra": "iterations: 4334\ncpu: 198727.8264882328 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5688.138630000026,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5687.971000000012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 27053.828809548122,
            "unit": "ns/iter",
            "extra": "iterations: 30837\ncpu: 27052.696436099573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 22712.14316122726,
            "unit": "ns/iter",
            "extra": "iterations: 36644\ncpu: 22711.497107302694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 23292.79456549101,
            "unit": "ns/iter",
            "extra": "iterations: 35661\ncpu: 23290.995765682397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 23101.591620575342,
            "unit": "ns/iter",
            "extra": "iterations: 36160\ncpu: 23100.008296460164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 44632.92933584378,
            "unit": "ns/iter",
            "extra": "iterations: 18595\ncpu: 44630.74482387742 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 290855.8659999964,
            "unit": "ns/iter",
            "extra": "iterations: 3000\ncpu: 290850.9 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 224891.43367875047,
            "unit": "ns/iter",
            "extra": "iterations: 3860\ncpu: 224885.0518134713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 223885.3013485521,
            "unit": "ns/iter",
            "extra": "iterations: 3856\ncpu: 223877.4636929469 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 222165.4233144594,
            "unit": "ns/iter",
            "extra": "iterations: 3886\ncpu: 222161.24549665453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 115088.2641187291,
            "unit": "ns/iter",
            "extra": "iterations: 7614\ncpu: 115087.02390333597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 215471.6384348721,
            "unit": "ns/iter",
            "extra": "iterations: 4038\ncpu: 215466.59237246093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 873514.7873722927,
            "unit": "ns/iter",
            "extra": "iterations: 1077\ncpu: 873477.2516248807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 487452.03391686233,
            "unit": "ns/iter",
            "extra": "iterations: 1828\ncpu: 487448.35886214126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 2363.346963566334,
            "unit": "ns/iter",
            "extra": "iterations: 335871\ncpu: 2363.266551741609 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 8508.036572710242,
            "unit": "ns/iter",
            "extra": "iterations: 95399\ncpu: 8507.891068040519 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 9039.88761738328,
            "unit": "ns/iter",
            "extra": "iterations: 91580\ncpu: 9039.504258571713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 8837.668265086491,
            "unit": "ns/iter",
            "extra": "iterations: 92800\ncpu: 8837.690732758583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 8052.756493599269,
            "unit": "ns/iter",
            "extra": "iterations: 105065\ncpu: 8052.586494075132 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 26432.800643388386,
            "unit": "ns/iter",
            "extra": "iterations: 32018\ncpu: 26425.56062214992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 280345.64388374443,
            "unit": "ns/iter",
            "extra": "iterations: 3131\ncpu: 280319.3548387109 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 210664.95516992087,
            "unit": "ns/iter",
            "extra": "iterations: 4149\ncpu: 210662.54519161297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 210300.61365269456,
            "unit": "ns/iter",
            "extra": "iterations: 4175\ncpu: 210291.61676646632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 208578.57664061603,
            "unit": "ns/iter",
            "extra": "iterations: 4221\ncpu: 208567.42478085685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 103674.91883886044,
            "unit": "ns/iter",
            "extra": "iterations: 8440\ncpu: 103663.42417061634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 202041.66962456197,
            "unit": "ns/iter",
            "extra": "iterations: 4395\ncpu: 202031.17178612007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 201.1728345322859,
            "unit": "ns/iter",
            "extra": "iterations: 3482377\ncpu: 201.1635730422061 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1521.758935647663,
            "unit": "ns/iter",
            "extra": "iterations: 459284\ncpu: 1521.7444979576826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1178.6810925042519,
            "unit": "ns/iter",
            "extra": "iterations: 593865\ncpu: 1178.5825061251296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1279.007415750452,
            "unit": "ns/iter",
            "extra": "iterations: 548697\ncpu: 1278.935368700749 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 908.8306906742527,
            "unit": "ns/iter",
            "extra": "iterations: 772202\ncpu: 908.7916115213434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 8740.801935030786,
            "unit": "ns/iter",
            "extra": "iterations: 79792\ncpu: 8739.931321435712 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 13180.09430333224,
            "unit": "ns/iter",
            "extra": "iterations: 53031\ncpu: 13179.713752333566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2983.322073734521,
            "unit": "ns/iter",
            "extra": "iterations: 235710\ncpu: 2982.9498112086926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2978.6578262008506,
            "unit": "ns/iter",
            "extra": "iterations: 236526\ncpu: 2978.5097621403206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2995.867142740889,
            "unit": "ns/iter",
            "extra": "iterations: 233717\ncpu: 2995.5724230586416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5066.156676300508,
            "unit": "ns/iter",
            "extra": "iterations: 138400\ncpu: 5066.10910404624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5423.554174164106,
            "unit": "ns/iter",
            "extra": "iterations: 128936\ncpu: 5423.057175653068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1865.4686915974237,
            "unit": "ns/iter",
            "extra": "iterations: 379371\ncpu: 1865.299139892091 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 9912.219010744171,
            "unit": "ns/iter",
            "extra": "iterations: 69992\ncpu: 9911.748485541291 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 7923.63721684352,
            "unit": "ns/iter",
            "extra": "iterations: 87584\ncpu: 7922.8534892218495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 7966.241434380073,
            "unit": "ns/iter",
            "extra": "iterations: 88289\ncpu: 7966.161129925581 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 7725.342567325649,
            "unit": "ns/iter",
            "extra": "iterations: 89416\ncpu: 7724.635412006865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 17870.582736388857,
            "unit": "ns/iter",
            "extra": "iterations: 39088\ncpu: 17869.56610724514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 57975.59328481643,
            "unit": "ns/iter",
            "extra": "iterations: 12092\ncpu: 57970.35229904013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 47300.17336109453,
            "unit": "ns/iter",
            "extra": "iterations: 14888\ncpu: 47297.152068780335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 47254.77934208691,
            "unit": "ns/iter",
            "extra": "iterations: 14774\ncpu: 47252.79545146907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 46895.28151176294,
            "unit": "ns/iter",
            "extra": "iterations: 14923\ncpu: 46892.17985659787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 27335.281741418963,
            "unit": "ns/iter",
            "extra": "iterations: 25818\ncpu: 27332.77170965966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 46070.38713488851,
            "unit": "ns/iter",
            "extra": "iterations: 15235\ncpu: 46067.39087627182 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1846.7038409872275,
            "unit": "ns/iter",
            "extra": "iterations: 377429\ncpu: 1846.5419986275608 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 9756.254719604196,
            "unit": "ns/iter",
            "extra": "iterations: 71934\ncpu: 9756.161203325202 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 7848.679016515022,
            "unit": "ns/iter",
            "extra": "iterations: 88827\ncpu: 7848.410956128077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 7867.377140734117,
            "unit": "ns/iter",
            "extra": "iterations: 88813\ncpu: 7866.831432335302 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 7771.044363684824,
            "unit": "ns/iter",
            "extra": "iterations: 90254\ncpu: 7770.647284330976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 18052.29247394841,
            "unit": "ns/iter",
            "extra": "iterations: 38865\ncpu: 18050.58535957814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 58043.335095836286,
            "unit": "ns/iter",
            "extra": "iterations: 12104\ncpu: 58042.93621943166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 47170.95808544997,
            "unit": "ns/iter",
            "extra": "iterations: 14792\ncpu: 47166.31963223348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 46456.4214909081,
            "unit": "ns/iter",
            "extra": "iterations: 15011\ncpu: 46454.03370861375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 46587.554869544474,
            "unit": "ns/iter",
            "extra": "iterations: 15063\ncpu: 46584.750713669906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 27120.662290016953,
            "unit": "ns/iter",
            "extra": "iterations: 25895\ncpu: 27119.003668661717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 45316.025709450936,
            "unit": "ns/iter",
            "extra": "iterations: 15364\ncpu: 45315.39963551116 ns\nthreads: 1"
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
          "id": "a2fdd4a8b08935139af31fad37c86ca12b1dc63b",
          "message": "Add BMs; Setters Improve",
          "timestamp": "2023-12-12T23:14:54+03:00",
          "tree_id": "e41c2c9b1f31589e76e0363e3cfb6528364c4fdc",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/a2fdd4a8b08935139af31fad37c86ca12b1dc63b"
        },
        "date": 1702412550205,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 608.0511526668907,
            "unit": "ns/iter",
            "extra": "iterations: 1149031\ncpu: 608.0352923463337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5531.392070000152,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5530.928 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10778.364652896315,
            "unit": "ns/iter",
            "extra": "iterations: 77268\ncpu: 10777.80711290573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 16262.224087494178,
            "unit": "ns/iter",
            "extra": "iterations: 52301\ncpu: 16261.180474560724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 21293.31507473965,
            "unit": "ns/iter",
            "extra": "iterations: 39470\ncpu: 21291.634152520895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 26456.538071708073,
            "unit": "ns/iter",
            "extra": "iterations: 31572\ncpu: 26455.127961484857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 32001.69319509912,
            "unit": "ns/iter",
            "extra": "iterations: 26525\ncpu: 31999.732327992468 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 37138.37819518977,
            "unit": "ns/iter",
            "extra": "iterations: 22573\ncpu: 37135.63549373147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 41713.71538649029,
            "unit": "ns/iter",
            "extra": "iterations: 20505\ncpu: 41711.59717142156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 573.7620380493997,
            "unit": "ns/iter",
            "extra": "iterations: 1232924\ncpu: 573.7291998533573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 440.6977414562373,
            "unit": "ns/iter",
            "extra": "iterations: 1589874\ncpu: 440.6930989499794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 444.1713839688747,
            "unit": "ns/iter",
            "extra": "iterations: 1571979\ncpu: 444.15981383975236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 425.30894222307495,
            "unit": "ns/iter",
            "extra": "iterations: 1642265\ncpu: 425.2785634474338 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 954.1179263933262,
            "unit": "ns/iter",
            "extra": "iterations: 733466\ncpu: 954.0931685994972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1552.8199406339309,
            "unit": "ns/iter",
            "extra": "iterations: 509382\ncpu: 1552.7411647839929 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 9564.03066865428,
            "unit": "ns/iter",
            "extra": "iterations: 85201\ncpu: 9563.667093109229 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 10150.488901761473,
            "unit": "ns/iter",
            "extra": "iterations: 81139\ncpu: 10150.080725668318 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 9887.206246127142,
            "unit": "ns/iter",
            "extra": "iterations: 80690\ncpu: 9886.660057008317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 9611.870031206081,
            "unit": "ns/iter",
            "extra": "iterations: 85559\ncpu: 9611.220327493325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 27301.96817431389,
            "unit": "ns/iter",
            "extra": "iterations: 30290\ncpu: 27300.019808517714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 268939.09900682885,
            "unit": "ns/iter",
            "extra": "iterations: 3222\ncpu: 268926.9708255738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 209816.8904899106,
            "unit": "ns/iter",
            "extra": "iterations: 4164\ncpu: 209808.5014409222 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 209698.5758670494,
            "unit": "ns/iter",
            "extra": "iterations: 4152\ncpu: 209691.23314065498 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 208578.22115383914,
            "unit": "ns/iter",
            "extra": "iterations: 4160\ncpu: 208565.26442307731 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 107358.66880181611,
            "unit": "ns/iter",
            "extra": "iterations: 5308\ncpu: 107354.42727957793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 205891.5892898693,
            "unit": "ns/iter",
            "extra": "iterations: 4295\ncpu: 205875.71594877768 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5791.71706000011,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5791.158999999979 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 27380.17365111852,
            "unit": "ns/iter",
            "extra": "iterations: 30377\ncpu: 27378.55614445132 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 24032.7806243138,
            "unit": "ns/iter",
            "extra": "iterations: 34662\ncpu: 24030.205989267757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 23832.667839066922,
            "unit": "ns/iter",
            "extra": "iterations: 34971\ncpu: 23831.0085499414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 23312.439621794,
            "unit": "ns/iter",
            "extra": "iterations: 35642\ncpu: 23310.29684080581 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 44441.2743589759,
            "unit": "ns/iter",
            "extra": "iterations: 18720\ncpu: 44438.78205128196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 291059.55607632454,
            "unit": "ns/iter",
            "extra": "iterations: 2987\ncpu: 291048.577167728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 226787.91566264327,
            "unit": "ns/iter",
            "extra": "iterations: 3818\ncpu: 226768.59612362518 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 226325.2174364245,
            "unit": "ns/iter",
            "extra": "iterations: 3854\ncpu: 226304.56668396544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 224224.43916990698,
            "unit": "ns/iter",
            "extra": "iterations: 3855\ncpu: 224209.75356679645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 116237.58908656261,
            "unit": "ns/iter",
            "extra": "iterations: 7532\ncpu: 116231.75783324538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 215413.96424167993,
            "unit": "ns/iter",
            "extra": "iterations: 4055\ncpu: 215405.64734895277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 865568.4113345762,
            "unit": "ns/iter",
            "extra": "iterations: 1094\ncpu: 865513.7111517359 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 477065.0970873987,
            "unit": "ns/iter",
            "extra": "iterations: 1854\ncpu: 477046.8176914763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 2457.784861873044,
            "unit": "ns/iter",
            "extra": "iterations: 324122\ncpu: 2457.6545251479524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 9067.109154703967,
            "unit": "ns/iter",
            "extra": "iterations: 93766\ncpu: 9066.545442911085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 9571.89997697691,
            "unit": "ns/iter",
            "extra": "iterations: 86870\ncpu: 9571.235179003092 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 9434.163541595743,
            "unit": "ns/iter",
            "extra": "iterations: 87678\ncpu: 9433.810077784625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 9069.618068644964,
            "unit": "ns/iter",
            "extra": "iterations: 91252\ncpu: 9069.155744531654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 26786.39035171357,
            "unit": "ns/iter",
            "extra": "iterations: 31446\ncpu: 26785.607072441544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 279720.7472107045,
            "unit": "ns/iter",
            "extra": "iterations: 3137\ncpu: 279702.26330889604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 210879.58028236724,
            "unit": "ns/iter",
            "extra": "iterations: 4179\ncpu: 210872.52931323225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 210495.90874159258,
            "unit": "ns/iter",
            "extra": "iterations: 4164\ncpu: 210482.51681075967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 208776.30493915448,
            "unit": "ns/iter",
            "extra": "iterations: 4191\ncpu: 208774.4213791451 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 104803.14789574174,
            "unit": "ns/iter",
            "extra": "iterations: 8364\ncpu: 104795.56432328996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 201432.20539181936,
            "unit": "ns/iter",
            "extra": "iterations: 4377\ncpu: 201428.92392049398 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 205.3416990116654,
            "unit": "ns/iter",
            "extra": "iterations: 3419129\ncpu: 205.33091907324882 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1488.8536205133726,
            "unit": "ns/iter",
            "extra": "iterations: 470831\ncpu: 1488.8418562074198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1181.6766881219346,
            "unit": "ns/iter",
            "extra": "iterations: 591930\ncpu: 1181.5981619448255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1323.4239325948647,
            "unit": "ns/iter",
            "extra": "iterations: 528150\ncpu: 1323.3585155732214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 956.2658387537865,
            "unit": "ns/iter",
            "extra": "iterations: 731639\ncpu: 956.2344270876738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 8922.737166694009,
            "unit": "ns/iter",
            "extra": "iterations: 77669\ncpu: 8922.441385881104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 13413.231029408604,
            "unit": "ns/iter",
            "extra": "iterations: 52331\ncpu: 13413.07255737508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 3000.3346430909373,
            "unit": "ns/iter",
            "extra": "iterations: 233631\ncpu: 3000.22728148232 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 3010.518386090375,
            "unit": "ns/iter",
            "extra": "iterations: 232132\ncpu: 3010.475936105335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 3022.697724122036,
            "unit": "ns/iter",
            "extra": "iterations: 233009\ncpu: 3022.594406224647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5308.953670695326,
            "unit": "ns/iter",
            "extra": "iterations: 132400\ncpu: 5308.889728096678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5431.76310301455,
            "unit": "ns/iter",
            "extra": "iterations: 130428\ncpu: 5431.499371300634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1867.5864085398225,
            "unit": "ns/iter",
            "extra": "iterations: 369379\ncpu: 1867.4873233183298 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10061.638343161549,
            "unit": "ns/iter",
            "extra": "iterations: 69530\ncpu: 10061.370631382078 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 7929.866321400821,
            "unit": "ns/iter",
            "extra": "iterations: 85152\ncpu: 7929.4990135287835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 7938.182446267998,
            "unit": "ns/iter",
            "extra": "iterations: 87423\ncpu: 7937.4764078104245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 7999.149128544322,
            "unit": "ns/iter",
            "extra": "iterations: 87153\ncpu: 7998.686218489281 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 18016.211760441645,
            "unit": "ns/iter",
            "extra": "iterations: 38638\ncpu: 18014.36409752055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 57635.65915470207,
            "unit": "ns/iter",
            "extra": "iterations: 12114\ncpu: 57635.537394749816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 46253.864283373645,
            "unit": "ns/iter",
            "extra": "iterations: 15245\ncpu: 46251.24303050206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 46225.911820381385,
            "unit": "ns/iter",
            "extra": "iterations: 15321\ncpu: 46222.94236668607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 45894.61369001142,
            "unit": "ns/iter",
            "extra": "iterations: 15252\ncpu: 45887.93600839218 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 26832.3854763437,
            "unit": "ns/iter",
            "extra": "iterations: 26357\ncpu: 26831.558978639194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 45595.21556770116,
            "unit": "ns/iter",
            "extra": "iterations: 15545\ncpu: 45593.63139273088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1919.9558951940223,
            "unit": "ns/iter",
            "extra": "iterations: 361888\ncpu: 1919.9003559111984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 10098.220944861838,
            "unit": "ns/iter",
            "extra": "iterations: 69153\ncpu: 10098.024669934759 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 8152.767331268413,
            "unit": "ns/iter",
            "extra": "iterations: 86217\ncpu: 8152.0941345673655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 8094.927409188416,
            "unit": "ns/iter",
            "extra": "iterations: 86471\ncpu: 8094.561182361685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 8088.469771777248,
            "unit": "ns/iter",
            "extra": "iterations: 86889\ncpu: 8088.329938196924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 18167.848474707942,
            "unit": "ns/iter",
            "extra": "iterations: 38845\ncpu: 18166.88119449087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 57604.25078266909,
            "unit": "ns/iter",
            "extra": "iterations: 12138\ncpu: 57597.38012852092 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 45090.77394435193,
            "unit": "ns/iter",
            "extra": "iterations: 15275\ncpu: 45088.26186579367 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 45210.590708830525,
            "unit": "ns/iter",
            "extra": "iterations: 15434\ncpu: 45206.887391472745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 44697.71367851671,
            "unit": "ns/iter",
            "extra": "iterations: 15528\ncpu: 44693.51494075258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 26514.786135694107,
            "unit": "ns/iter",
            "extra": "iterations: 26442\ncpu: 26513.474774979215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 44901.02869531824,
            "unit": "ns/iter",
            "extra": "iterations: 15682\ncpu: 44897.01568677394 ns\nthreads: 1"
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
          "id": "3da6f92518ebbffed2e11d1053cee2ce52bff1f0",
          "message": "Upd README",
          "timestamp": "2023-12-13T00:12:53+03:00",
          "tree_id": "2f3e289da6746982a8c43b0c572e183f11742827",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/3da6f92518ebbffed2e11d1053cee2ce52bff1f0"
        },
        "date": 1702416006799,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 609.5093786215162,
            "unit": "ns/iter",
            "extra": "iterations: 1142492\ncpu: 609.4571340543304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5635.549319999882,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5635.105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10916.007535599632,
            "unit": "ns/iter",
            "extra": "iterations: 76968\ncpu: 10915.968974119116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 16294.291755775343,
            "unit": "ns/iter",
            "extra": "iterations: 51903\ncpu: 16294.10246035875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 21550.54076340765,
            "unit": "ns/iter",
            "extra": "iterations: 38564\ncpu: 21550.60159734467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 26851.90829904847,
            "unit": "ns/iter",
            "extra": "iterations: 31112\ncpu: 26850.279634867584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 31840.165292122125,
            "unit": "ns/iter",
            "extra": "iterations: 25948\ncpu: 31838.527054108243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 36941.84313209646,
            "unit": "ns/iter",
            "extra": "iterations: 22809\ncpu: 36939.66416765311 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 43217.10996942249,
            "unit": "ns/iter",
            "extra": "iterations: 19951\ncpu: 43214.48548944923 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 571.9687768288828,
            "unit": "ns/iter",
            "extra": "iterations: 1217205\ncpu: 571.9361159377419 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 445.85946927064407,
            "unit": "ns/iter",
            "extra": "iterations: 1577904\ncpu: 445.66114288321774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 448.7351595336411,
            "unit": "ns/iter",
            "extra": "iterations: 1561238\ncpu: 448.73664361231295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 428.894884977076,
            "unit": "ns/iter",
            "extra": "iterations: 1624763\ncpu: 428.8829817025624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 954.6870644433213,
            "unit": "ns/iter",
            "extra": "iterations: 733544\ncpu: 954.6647508533918 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1541.3488566670253,
            "unit": "ns/iter",
            "extra": "iterations: 499592\ncpu: 1541.247257762336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 9640.853434230099,
            "unit": "ns/iter",
            "extra": "iterations: 82857\ncpu: 9640.454035265588 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 9907.512128730941,
            "unit": "ns/iter",
            "extra": "iterations: 83026\ncpu: 9907.124274323718 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 10334.648123476167,
            "unit": "ns/iter",
            "extra": "iterations: 79562\ncpu: 10334.571780498209 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 9848.410653377998,
            "unit": "ns/iter",
            "extra": "iterations: 82678\ncpu: 9847.55799608115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 27574.532689964788,
            "unit": "ns/iter",
            "extra": "iterations: 30361\ncpu: 27573.008135436903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 273499.7763897392,
            "unit": "ns/iter",
            "extra": "iterations: 3202\ncpu: 273479.95003123046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 209059.5992555783,
            "unit": "ns/iter",
            "extra": "iterations: 4030\ncpu: 209047.17121588095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 214186.49459725362,
            "unit": "ns/iter",
            "extra": "iterations: 4072\ncpu: 214169.25343811457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 208708.06923643092,
            "unit": "ns/iter",
            "extra": "iterations: 4073\ncpu: 208698.03584581436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 107988.71685476831,
            "unit": "ns/iter",
            "extra": "iterations: 8063\ncpu: 107981.69415850153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 208551.13682956106,
            "unit": "ns/iter",
            "extra": "iterations: 4195\ncpu: 208538.4743742553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5730.92708000047,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5730.395000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 27646.78015197746,
            "unit": "ns/iter",
            "extra": "iterations: 30794\ncpu: 27645.42443333128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 23735.63098655517,
            "unit": "ns/iter",
            "extra": "iterations: 35183\ncpu: 23734.206861268205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 23638.78958791282,
            "unit": "ns/iter",
            "extra": "iterations: 35478\ncpu: 23637.516207227083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 23063.375964625757,
            "unit": "ns/iter",
            "extra": "iterations: 35506\ncpu: 23061.936010815065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 45637.88529059206,
            "unit": "ns/iter",
            "extra": "iterations: 18342\ncpu: 45637.4059535493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 297347.0267433961,
            "unit": "ns/iter",
            "extra": "iterations: 2954\ncpu: 297334.5971563977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 228733.2958115136,
            "unit": "ns/iter",
            "extra": "iterations: 3820\ncpu: 228726.15183246013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 228012.0288562371,
            "unit": "ns/iter",
            "extra": "iterations: 3812\ncpu: 228000.8394543545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 226627.1459417344,
            "unit": "ns/iter",
            "extra": "iterations: 3844\ncpu: 226622.5026014558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 117122.16951186715,
            "unit": "ns/iter",
            "extra": "iterations: 7498\ncpu: 117119.05841557751 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 219155.31922884646,
            "unit": "ns/iter",
            "extra": "iterations: 3994\ncpu: 219146.77015523228 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 908001.4455626538,
            "unit": "ns/iter",
            "extra": "iterations: 1093\ncpu: 907976.0292772171 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 466603.32184515736,
            "unit": "ns/iter",
            "extra": "iterations: 1886\ncpu: 466593.9024390242 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 2535.0499965192153,
            "unit": "ns/iter",
            "extra": "iterations: 316022\ncpu: 2535.0067400370904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 8907.388855159901,
            "unit": "ns/iter",
            "extra": "iterations: 92240\ncpu: 8907.165004336546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 9287.615443493423,
            "unit": "ns/iter",
            "extra": "iterations: 88840\ncpu: 9287.549527240028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 9363.593503559132,
            "unit": "ns/iter",
            "extra": "iterations: 88510\ncpu: 9363.5385832109 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 9100.979832605377,
            "unit": "ns/iter",
            "extra": "iterations: 92476\ncpu: 9100.923482849597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 27002.925904429532,
            "unit": "ns/iter",
            "extra": "iterations: 31014\ncpu: 27002.202231250514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 280498.59175912035,
            "unit": "ns/iter",
            "extra": "iterations: 3155\ncpu: 280496.4817749592 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 211224.23693715435,
            "unit": "ns/iter",
            "extra": "iterations: 4153\ncpu: 211222.8509511201 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 210578.8676893616,
            "unit": "ns/iter",
            "extra": "iterations: 4172\ncpu: 210575.599232981 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 208487.36402672797,
            "unit": "ns/iter",
            "extra": "iterations: 4192\ncpu: 208482.9675572511 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 106257.23162745764,
            "unit": "ns/iter",
            "extra": "iterations: 8246\ncpu: 106256.56075673037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 201735.7707328302,
            "unit": "ns/iter",
            "extra": "iterations: 4353\ncpu: 201734.68872042192 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 205.04071482057947,
            "unit": "ns/iter",
            "extra": "iterations: 3404043\ncpu: 205.03850862048472 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1569.86641704298,
            "unit": "ns/iter",
            "extra": "iterations: 446539\ncpu: 1569.8369011441364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1249.7937778015948,
            "unit": "ns/iter",
            "extra": "iterations: 559770\ncpu: 1249.78491166014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1323.8438411161956,
            "unit": "ns/iter",
            "extra": "iterations: 544977\ncpu: 1323.849263363411 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 955.8865586948932,
            "unit": "ns/iter",
            "extra": "iterations: 732414\ncpu: 955.8682657622559 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 8803.210902918108,
            "unit": "ns/iter",
            "extra": "iterations: 79520\ncpu: 8803.058350100602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 12890.895462283845,
            "unit": "ns/iter",
            "extra": "iterations: 54631\ncpu: 12890.671962804981 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 3033.1951369362573,
            "unit": "ns/iter",
            "extra": "iterations: 234379\ncpu: 3033.1774604380043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 3065.3869247593343,
            "unit": "ns/iter",
            "extra": "iterations: 228600\ncpu: 3065.350831146111 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 3033.787144444687,
            "unit": "ns/iter",
            "extra": "iterations: 231293\ncpu: 3033.7355648463026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5445.143218060079,
            "unit": "ns/iter",
            "extra": "iterations: 129432\ncpu: 5445.04759255829 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5672.384514957256,
            "unit": "ns/iter",
            "extra": "iterations: 123319\ncpu: 5672.34651594647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1938.0171546240563,
            "unit": "ns/iter",
            "extra": "iterations: 365674\ncpu: 1938.0264935434072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10232.4046057425,
            "unit": "ns/iter",
            "extra": "iterations: 68610\ncpu: 10232.22708060041 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8123.540479959381,
            "unit": "ns/iter",
            "extra": "iterations: 86549\ncpu: 8123.379819524052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 8418.038596409802,
            "unit": "ns/iter",
            "extra": "iterations: 86692\ncpu: 8417.872468047757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 8079.455767311279,
            "unit": "ns/iter",
            "extra": "iterations: 86158\ncpu: 8079.41224262402 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 17986.13177451467,
            "unit": "ns/iter",
            "extra": "iterations: 38619\ncpu: 17986.211450322342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 57702.55018804509,
            "unit": "ns/iter",
            "extra": "iterations: 11965\ncpu: 57702.13121604645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 46753.40662428941,
            "unit": "ns/iter",
            "extra": "iterations: 14945\ncpu: 46752.365339578704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 45953.719931390166,
            "unit": "ns/iter",
            "extra": "iterations: 14575\ncpu: 45954.209262436016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 46238.00479584291,
            "unit": "ns/iter",
            "extra": "iterations: 15013\ncpu: 46236.56830746611 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 27162.145023585635,
            "unit": "ns/iter",
            "extra": "iterations: 25651\ncpu: 27162.25878133414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 45772.69969713031,
            "unit": "ns/iter",
            "extra": "iterations: 15188\ncpu: 45770.89149328363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1930.5167389675216,
            "unit": "ns/iter",
            "extra": "iterations: 364449\ncpu: 1930.4725764098964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 9996.838197193327,
            "unit": "ns/iter",
            "extra": "iterations: 70246\ncpu: 9996.530763317534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 8109.016258748861,
            "unit": "ns/iter",
            "extra": "iterations: 86292\ncpu: 8108.985769248744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 8140.846912605937,
            "unit": "ns/iter",
            "extra": "iterations: 86173\ncpu: 8140.59392152998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 8123.557581374274,
            "unit": "ns/iter",
            "extra": "iterations: 86330\ncpu: 8123.149542453426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 18088.82874201286,
            "unit": "ns/iter",
            "extra": "iterations: 38188\ncpu: 18088.229286686845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 57714.58726061641,
            "unit": "ns/iter",
            "extra": "iterations: 12010\ncpu: 57709.683597002586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 46146.22264951632,
            "unit": "ns/iter",
            "extra": "iterations: 15082\ncpu: 46144.881315475475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 45847.04815586865,
            "unit": "ns/iter",
            "extra": "iterations: 15346\ncpu: 45843.47061123449 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 46194.3246496952,
            "unit": "ns/iter",
            "extra": "iterations: 15201\ncpu: 46192.0992039997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 26683.926806048497,
            "unit": "ns/iter",
            "extra": "iterations: 26259\ncpu: 26682.41364865385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 45547.32012546597,
            "unit": "ns/iter",
            "extra": "iterations: 15622\ncpu: 45543.95723979045 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}