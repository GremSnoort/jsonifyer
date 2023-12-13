window.BENCHMARK_DATA = {
  "lastUpdate": 1702488564458,
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
        "date": 1702418340645,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 614.7067758097064,
            "unit": "ns/iter",
            "extra": "iterations: 1138078\ncpu: 614.6974987654625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5569.314089999579,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5569.132999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10755.852528053634,
            "unit": "ns/iter",
            "extra": "iterations: 77174\ncpu: 10755.570528934615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 16289.357900011557,
            "unit": "ns/iter",
            "extra": "iterations: 51886\ncpu: 16289.26685425741 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 21468.048909544883,
            "unit": "ns/iter",
            "extra": "iterations: 35719\ncpu: 21467.305915619152 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 26622.571323671058,
            "unit": "ns/iter",
            "extra": "iterations: 31322\ncpu: 26622.080326926745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 31997.698190820498,
            "unit": "ns/iter",
            "extra": "iterations: 26255\ncpu: 31996.735859836204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 37053.58318260092,
            "unit": "ns/iter",
            "extra": "iterations: 22667\ncpu: 37051.67424008471 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 41989.74429559845,
            "unit": "ns/iter",
            "extra": "iterations: 20379\ncpu: 41989.38122577171 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 571.9649550840232,
            "unit": "ns/iter",
            "extra": "iterations: 1224286\ncpu: 571.930496632323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 439.8986595346249,
            "unit": "ns/iter",
            "extra": "iterations: 1590194\ncpu: 439.8968301980769 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 446.0261416659474,
            "unit": "ns/iter",
            "extra": "iterations: 1571782\ncpu: 445.9981727745955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 427.14941073146434,
            "unit": "ns/iter",
            "extra": "iterations: 1618023\ncpu: 427.1519008073432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 949.386922713661,
            "unit": "ns/iter",
            "extra": "iterations: 739083\ncpu: 949.3426313418099 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1552.9459064328043,
            "unit": "ns/iter",
            "extra": "iterations: 510948\ncpu: 1552.8705465135379 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 9725.124656547012,
            "unit": "ns/iter",
            "extra": "iterations: 81889\ncpu: 9724.607700667975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 10232.163081053744,
            "unit": "ns/iter",
            "extra": "iterations: 84179\ncpu: 10231.676546407069 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 10125.067554900195,
            "unit": "ns/iter",
            "extra": "iterations: 80009\ncpu: 10124.680973390514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 9396.868615154533,
            "unit": "ns/iter",
            "extra": "iterations: 86905\ncpu: 9396.368448305622 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 27616.078412423445,
            "unit": "ns/iter",
            "extra": "iterations: 30008\ncpu: 27614.329512130163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 278848.22853612324,
            "unit": "ns/iter",
            "extra": "iterations: 3238\ncpu: 278833.0142063006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 211022.87697160037,
            "unit": "ns/iter",
            "extra": "iterations: 4121\ncpu: 211010.82261587016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 216007.68535749707,
            "unit": "ns/iter",
            "extra": "iterations: 4084\ncpu: 215985.33300685606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 211214.7155361107,
            "unit": "ns/iter",
            "extra": "iterations: 4113\ncpu: 211209.16605883784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 106758.31128499536,
            "unit": "ns/iter",
            "extra": "iterations: 8179\ncpu: 106756.92627460601 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 204681.65825152173,
            "unit": "ns/iter",
            "extra": "iterations: 4278\ncpu: 204675.22206638663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5666.289600000027,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5666.264000000005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 26917.818655871044,
            "unit": "ns/iter",
            "extra": "iterations: 30875\ncpu: 26917.0979757085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 23875.276856216973,
            "unit": "ns/iter",
            "extra": "iterations: 35206\ncpu: 23875.41328182704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 23533.728382644436,
            "unit": "ns/iter",
            "extra": "iterations: 35793\ncpu: 23533.392004023175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 22841.195305653822,
            "unit": "ns/iter",
            "extra": "iterations: 36512\ncpu: 22841.30696757231 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 45994.88780836142,
            "unit": "ns/iter",
            "extra": "iterations: 18201\ncpu: 45993.54431075208 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 293722.31359354354,
            "unit": "ns/iter",
            "extra": "iterations: 2972\ncpu: 293710.2288021519 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 226222.68622847358,
            "unit": "ns/iter",
            "extra": "iterations: 3834\ncpu: 226219.5618153373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 226330.68105703892,
            "unit": "ns/iter",
            "extra": "iterations: 3822\ncpu: 226331.89429618165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 224678.1349185855,
            "unit": "ns/iter",
            "extra": "iterations: 3869\ncpu: 224661.28198501043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 115447.28081643354,
            "unit": "ns/iter",
            "extra": "iterations: 7496\ncpu: 115446.99839914606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 216173.90726006698,
            "unit": "ns/iter",
            "extra": "iterations: 4022\ncpu: 216157.53356539062 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 878682.166044777,
            "unit": "ns/iter",
            "extra": "iterations: 1072\ncpu: 878650.9328358159 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 475954.7544426468,
            "unit": "ns/iter",
            "extra": "iterations: 1857\ncpu: 475930.4792676355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 2487.024849573411,
            "unit": "ns/iter",
            "extra": "iterations: 321253\ncpu: 2486.917476257016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 9420.451484698666,
            "unit": "ns/iter",
            "extra": "iterations: 88065\ncpu: 9419.742235848522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 9745.777502698134,
            "unit": "ns/iter",
            "extra": "iterations: 85228\ncpu: 9745.245693903462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 9194.655286818353,
            "unit": "ns/iter",
            "extra": "iterations: 90423\ncpu: 9194.265839443431 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 8837.048209145703,
            "unit": "ns/iter",
            "extra": "iterations: 93447\ncpu: 8836.787697839412 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 27032.533691423454,
            "unit": "ns/iter",
            "extra": "iterations: 31091\ncpu: 27031.163359171453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 281528.8248569462,
            "unit": "ns/iter",
            "extra": "iterations: 3146\ncpu: 281513.0642085176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 211592.83337317477,
            "unit": "ns/iter",
            "extra": "iterations: 4183\ncpu: 211584.15013148566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 209968.92538736732,
            "unit": "ns/iter",
            "extra": "iterations: 4195\ncpu: 209952.68176400533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 210569.0307728958,
            "unit": "ns/iter",
            "extra": "iterations: 4192\ncpu: 210567.7242366409 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 105416.54512678886,
            "unit": "ns/iter",
            "extra": "iterations: 8321\ncpu: 105413.73632976829 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 201896.82420353012,
            "unit": "ns/iter",
            "extra": "iterations: 4363\ncpu: 201885.62915425247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 204.00389262135744,
            "unit": "ns/iter",
            "extra": "iterations: 3423400\ncpu: 203.994303908394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1541.1809061693418,
            "unit": "ns/iter",
            "extra": "iterations: 457729\ncpu: 1541.112754490108 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1191.6103211940376,
            "unit": "ns/iter",
            "extra": "iterations: 589021\ncpu: 1191.5678727923116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1208.7550141726185,
            "unit": "ns/iter",
            "extra": "iterations: 585989\ncpu: 1208.7336110404892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 916.8915186215281,
            "unit": "ns/iter",
            "extra": "iterations: 747520\ncpu: 916.8974743150673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 8888.384319548733,
            "unit": "ns/iter",
            "extra": "iterations: 78786\ncpu: 8887.930596806496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 13337.032879309698,
            "unit": "ns/iter",
            "extra": "iterations: 40086\ncpu: 13336.184702888839 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2976.370821093087,
            "unit": "ns/iter",
            "extra": "iterations: 236246\ncpu: 2976.146474437642 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 3015.2484643904313,
            "unit": "ns/iter",
            "extra": "iterations: 234923\ncpu: 3015.109631666539 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 3006.7029140591985,
            "unit": "ns/iter",
            "extra": "iterations: 233626\ncpu: 3006.5553491477904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5302.35059320419,
            "unit": "ns/iter",
            "extra": "iterations: 140171\ncpu: 5302.18019419137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5621.022191522617,
            "unit": "ns/iter",
            "extra": "iterations: 125228\ncpu: 5620.7102245504075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1897.8638275414507,
            "unit": "ns/iter",
            "extra": "iterations: 369480\ncpu: 1897.7738984518733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10164.103079787721,
            "unit": "ns/iter",
            "extra": "iterations: 69810\ncpu: 10163.745881678939 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8111.364601524043,
            "unit": "ns/iter",
            "extra": "iterations: 86467\ncpu: 8111.3338036476825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 8088.161858196803,
            "unit": "ns/iter",
            "extra": "iterations: 86514\ncpu: 8088.213468340373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 7985.289069206142,
            "unit": "ns/iter",
            "extra": "iterations: 87377\ncpu: 7984.846126554989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 17978.91540723207,
            "unit": "ns/iter",
            "extra": "iterations: 38774\ncpu: 17977.98266879871 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 58534.70605984579,
            "unit": "ns/iter",
            "extra": "iterations: 11931\ncpu: 58531.76598776259 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 46294.22465104084,
            "unit": "ns/iter",
            "extra": "iterations: 15188\ncpu: 46291.789570713016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 46164.71856406084,
            "unit": "ns/iter",
            "extra": "iterations: 15126\ncpu: 46161.69509453861 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 45955.45066157629,
            "unit": "ns/iter",
            "extra": "iterations: 15191\ncpu: 45955.697452438435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 26889.850776763753,
            "unit": "ns/iter",
            "extra": "iterations: 25941\ncpu: 26889.6187502405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 45450.95832788349,
            "unit": "ns/iter",
            "extra": "iterations: 15286\ncpu: 45449.20188407632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1910.5364756927218,
            "unit": "ns/iter",
            "extra": "iterations: 367834\ncpu: 1910.5278468004576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 10038.047663523885,
            "unit": "ns/iter",
            "extra": "iterations: 69592\ncpu: 10038.100643752154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 8215.645635567567,
            "unit": "ns/iter",
            "extra": "iterations: 85223\ncpu: 8215.174307405337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 8191.827872489614,
            "unit": "ns/iter",
            "extra": "iterations: 85640\ncpu: 8191.472442783705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 8137.815406556323,
            "unit": "ns/iter",
            "extra": "iterations: 86249\ncpu: 8137.2549246948865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 18040.354755386452,
            "unit": "ns/iter",
            "extra": "iterations: 38714\ncpu: 18039.432763341378 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 57297.88210647505,
            "unit": "ns/iter",
            "extra": "iterations: 12172\ncpu: 57297.346368716004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 45916.51458553774,
            "unit": "ns/iter",
            "extra": "iterations: 15152\ncpu: 45914.077349525294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 45727.14298695034,
            "unit": "ns/iter",
            "extra": "iterations: 15407\ncpu: 45725.585772700135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 45878.293339476004,
            "unit": "ns/iter",
            "extra": "iterations: 15194\ncpu: 45875.97735948378 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 27004.43321505968,
            "unit": "ns/iter",
            "extra": "iterations: 26211\ncpu: 27003.12464232551 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 45462.27785937818,
            "unit": "ns/iter",
            "extra": "iterations: 15659\ncpu: 45460.693530877266 ns\nthreads: 1"
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
          "id": "93a417e35b7cddb2aff5c69874155ac65b18afac",
          "message": "Upd README",
          "timestamp": "2023-12-13T01:35:38+03:00",
          "tree_id": "ac2b7d38c5e0b561e002516e4bf347cf5169f70d",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/93a417e35b7cddb2aff5c69874155ac65b18afac"
        },
        "date": 1702420958096,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 615.9854250727473,
            "unit": "ns/iter",
            "extra": "iterations: 1137570\ncpu: 615.9788848158795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5570.8225400007905,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5570.646999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10840.78912768934,
            "unit": "ns/iter",
            "extra": "iterations: 76819\ncpu: 10840.591520327001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 16166.365537619075,
            "unit": "ns/iter",
            "extra": "iterations: 51784\ncpu: 16165.887146608995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 21320.612140573412,
            "unit": "ns/iter",
            "extra": "iterations: 39125\ncpu: 21320.002555910538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 26760.408035313263,
            "unit": "ns/iter",
            "extra": "iterations: 31262\ncpu: 26759.65709167679 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 32116.725800932916,
            "unit": "ns/iter",
            "extra": "iterations: 26313\ncpu: 32116.16691369286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 37046.725088183295,
            "unit": "ns/iter",
            "extra": "iterations: 22680\ncpu: 37045.141093474434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 41202.72260797049,
            "unit": "ns/iter",
            "extra": "iterations: 20307\ncpu: 41201.99438617227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 593.5223050078008,
            "unit": "ns/iter",
            "extra": "iterations: 1242165\ncpu: 593.5060962110517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 445.6439099463979,
            "unit": "ns/iter",
            "extra": "iterations: 1556185\ncpu: 445.6360908246768 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 445.42308519318914,
            "unit": "ns/iter",
            "extra": "iterations: 1562612\ncpu: 445.41306479151484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 429.62830053987136,
            "unit": "ns/iter",
            "extra": "iterations: 1617955\ncpu: 429.6171401553195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 951.6730638885933,
            "unit": "ns/iter",
            "extra": "iterations: 730317\ncpu: 951.672082123242 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1575.368865866334,
            "unit": "ns/iter",
            "extra": "iterations: 505593\ncpu: 1575.3503311952484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 10035.613827704805,
            "unit": "ns/iter",
            "extra": "iterations: 81720\ncpu: 10035.264317180623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 9793.008902779973,
            "unit": "ns/iter",
            "extra": "iterations: 84468\ncpu: 9792.008808069326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 10256.157679434136,
            "unit": "ns/iter",
            "extra": "iterations: 80670\ncpu: 10255.96752200323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 9596.31444346517,
            "unit": "ns/iter",
            "extra": "iterations: 85125\ncpu: 9595.846108663722 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 27447.038978449404,
            "unit": "ns/iter",
            "extra": "iterations: 29837\ncpu: 27446.190970942152 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 273035.2990654247,
            "unit": "ns/iter",
            "extra": "iterations: 3210\ncpu: 273008.90965732076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 211965.3922759173,
            "unit": "ns/iter",
            "extra": "iterations: 4117\ncpu: 211957.56618897253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 211299.7872961656,
            "unit": "ns/iter",
            "extra": "iterations: 4109\ncpu: 211283.52397176932 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 209676.48466404824,
            "unit": "ns/iter",
            "extra": "iterations: 4108\ncpu: 209659.85881207406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 108065.78876210262,
            "unit": "ns/iter",
            "extra": "iterations: 8062\ncpu: 108055.70578020338 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 205096.77140836034,
            "unit": "ns/iter",
            "extra": "iterations: 4239\ncpu: 205084.85491861345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5655.872959999898,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5655.393999999987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 26875.26880648414,
            "unit": "ns/iter",
            "extra": "iterations: 31093\ncpu: 26874.28681696846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 24017.602397601848,
            "unit": "ns/iter",
            "extra": "iterations: 35035\ncpu: 24015.136292279083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 23857.131941107622,
            "unit": "ns/iter",
            "extra": "iterations: 35387\ncpu: 23855.865148218283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 23271.97963870519,
            "unit": "ns/iter",
            "extra": "iterations: 35705\ncpu: 23269.113569528075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 45524.7240946077,
            "unit": "ns/iter",
            "extra": "iterations: 18307\ncpu: 45520.93734637038 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 289686.53750836855,
            "unit": "ns/iter",
            "extra": "iterations: 2986\ncpu: 289673.14132618904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 226627.74506236572,
            "unit": "ns/iter",
            "extra": "iterations: 3848\ncpu: 226627.28690228623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 225277.98632611817,
            "unit": "ns/iter",
            "extra": "iterations: 3876\ncpu: 225271.18163054727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 224605.22987914085,
            "unit": "ns/iter",
            "extra": "iterations: 3889\ncpu: 224599.94857289668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 116310.9456419746,
            "unit": "ns/iter",
            "extra": "iterations: 7469\ncpu: 116299.93305663389 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 213922.22073742823,
            "unit": "ns/iter",
            "extra": "iterations: 4041\ncpu: 213908.53749072138 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 867599.5435380914,
            "unit": "ns/iter",
            "extra": "iterations: 1091\ncpu: 867517.6901924853 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 477848.745002674,
            "unit": "ns/iter",
            "extra": "iterations: 1851\ncpu: 477802.80929227563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 2459.88385939621,
            "unit": "ns/iter",
            "extra": "iterations: 324486\ncpu: 2459.7304660293476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 9109.012894300618,
            "unit": "ns/iter",
            "extra": "iterations: 90350\ncpu: 9108.364139457628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 9352.882396818295,
            "unit": "ns/iter",
            "extra": "iterations: 88484\ncpu: 9352.567695854585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 9325.554773030704,
            "unit": "ns/iter",
            "extra": "iterations: 88602\ncpu: 9324.789508137495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 9099.669723563851,
            "unit": "ns/iter",
            "extra": "iterations: 91269\ncpu: 9099.207836176574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 26987.69518441223,
            "unit": "ns/iter",
            "extra": "iterations: 31045\ncpu: 26985.79481397958 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 277602.5006289228,
            "unit": "ns/iter",
            "extra": "iterations: 3180\ncpu: 277586.25786163507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 209865.71309720082,
            "unit": "ns/iter",
            "extra": "iterations: 4207\ncpu: 209847.6586641317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 207791.52116341746,
            "unit": "ns/iter",
            "extra": "iterations: 4229\ncpu: 207779.99527075113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 206971.81561618327,
            "unit": "ns/iter",
            "extra": "iterations: 4252\ncpu: 206954.72718720516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 105247.54455563109,
            "unit": "ns/iter",
            "extra": "iterations: 8394\ncpu: 105240.24303073557 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 200794.5244403999,
            "unit": "ns/iter",
            "extra": "iterations: 4378\ncpu: 200777.1813613519 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 209.7590734761452,
            "unit": "ns/iter",
            "extra": "iterations: 3337723\ncpu: 209.75260679211644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1506.7856988618855,
            "unit": "ns/iter",
            "extra": "iterations: 467739\ncpu: 1506.763601068116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1111.5998253076261,
            "unit": "ns/iter",
            "extra": "iterations: 628533\ncpu: 1111.5841173017118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1310.70351709742,
            "unit": "ns/iter",
            "extra": "iterations: 532712\ncpu: 1310.6733094054537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 940.5969585630902,
            "unit": "ns/iter",
            "extra": "iterations: 744385\ncpu: 940.5721501642341 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 8892.220200217025,
            "unit": "ns/iter",
            "extra": "iterations: 78415\ncpu: 8892.042338838199 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 13137.995304725217,
            "unit": "ns/iter",
            "extra": "iterations: 53458\ncpu: 13137.648247222058 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2959.4263689797453,
            "unit": "ns/iter",
            "extra": "iterations: 236490\ncpu: 2959.4236542771464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2939.228751007532,
            "unit": "ns/iter",
            "extra": "iterations: 238176\ncpu: 2939.1546587397484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2954.4237381534936,
            "unit": "ns/iter",
            "extra": "iterations: 237727\ncpu: 2954.38423065112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5212.355460496995,
            "unit": "ns/iter",
            "extra": "iterations: 133953\ncpu: 5212.246086313825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5529.068179675648,
            "unit": "ns/iter",
            "extra": "iterations: 127296\ncpu: 5528.9985545500285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1890.0984300963876,
            "unit": "ns/iter",
            "extra": "iterations: 372061\ncpu: 1890.076895992855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 9991.657182325256,
            "unit": "ns/iter",
            "extra": "iterations: 70221\ncpu: 9991.499693823827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 7981.011619943148,
            "unit": "ns/iter",
            "extra": "iterations: 87608\ncpu: 7981.026846863432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 7996.477358446858,
            "unit": "ns/iter",
            "extra": "iterations: 88024\ncpu: 7996.260110878807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 7959.291200327727,
            "unit": "ns/iter",
            "extra": "iterations: 87651\ncpu: 7959.215525207911 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 18006.765144309888,
            "unit": "ns/iter",
            "extra": "iterations: 38909\ncpu: 18006.584594823664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 57951.2651012292,
            "unit": "ns/iter",
            "extra": "iterations: 12052\ncpu: 57949.92532359803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 48334.77286545227,
            "unit": "ns/iter",
            "extra": "iterations: 15132\ncpu: 48334.74755485131 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 45991.240690875806,
            "unit": "ns/iter",
            "extra": "iterations: 15227\ncpu: 45989.853549615924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 45714.405788582044,
            "unit": "ns/iter",
            "extra": "iterations: 15306\ncpu: 45713.06023781517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 26738.824647080597,
            "unit": "ns/iter",
            "extra": "iterations: 26210\ncpu: 26738.927890118284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 45096.01789867753,
            "unit": "ns/iter",
            "extra": "iterations: 15476\ncpu: 45095.1408632722 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1886.4574135043997,
            "unit": "ns/iter",
            "extra": "iterations: 370857\ncpu: 1886.390980890223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 10024.385479972889,
            "unit": "ns/iter",
            "extra": "iterations: 69931\ncpu: 10024.115199267762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 8148.374078295822,
            "unit": "ns/iter",
            "extra": "iterations: 85982\ncpu: 8148.372915261271 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 8122.494557522993,
            "unit": "ns/iter",
            "extra": "iterations: 86174\ncpu: 8122.497505047929 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 7888.805163895504,
            "unit": "ns/iter",
            "extra": "iterations: 88654\ncpu: 7888.56791571724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 17898.705334265534,
            "unit": "ns/iter",
            "extra": "iterations: 38637\ncpu: 17898.242617180655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 56915.74559172769,
            "unit": "ns/iter",
            "extra": "iterations: 12193\ncpu: 56914.60674157318 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 45380.14738769697,
            "unit": "ns/iter",
            "extra": "iterations: 15293\ncpu: 45379.29117897055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 45120.32648964033,
            "unit": "ns/iter",
            "extra": "iterations: 15440\ncpu: 45117.04015544096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 45111.81085053687,
            "unit": "ns/iter",
            "extra": "iterations: 15649\ncpu: 45109.82810403218 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 26552.033424491834,
            "unit": "ns/iter",
            "extra": "iterations: 26328\ncpu: 26551.23442722577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 44872.32583559748,
            "unit": "ns/iter",
            "extra": "iterations: 15827\ncpu: 44871.845580337926 ns\nthreads: 1"
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
          "id": "77ee5ac1275c2ccd5522ff1af82b18cf56a24aa5",
          "message": "Upd README",
          "timestamp": "2023-12-13T01:37:25+03:00",
          "tree_id": "48d22aa37f5519c83d0d68355b1973cd5206100e",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/77ee5ac1275c2ccd5522ff1af82b18cf56a24aa5"
        },
        "date": 1702421387692,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 624.4751737875085,
            "unit": "ns/iter",
            "extra": "iterations: 1123067\ncpu: 624.4825998805059 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5593.336660000432,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5593.182 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10854.440883516425,
            "unit": "ns/iter",
            "extra": "iterations: 76603\ncpu: 10854.45478636607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 16076.100919021264,
            "unit": "ns/iter",
            "extra": "iterations: 51903\ncpu: 16075.583299616592 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 21471.320175215034,
            "unit": "ns/iter",
            "extra": "iterations: 39038\ncpu: 21471.535427019822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 26337.3703691362,
            "unit": "ns/iter",
            "extra": "iterations: 29989\ncpu: 26336.81016372672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 31490.067331669285,
            "unit": "ns/iter",
            "extra": "iterations: 26867\ncpu: 31488.7557226337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 38382.15625403598,
            "unit": "ns/iter",
            "extra": "iterations: 23225\ncpu: 38381.093649085065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 41043.01527987861,
            "unit": "ns/iter",
            "extra": "iterations: 19830\ncpu: 41042.17851739789 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 569.2349023765266,
            "unit": "ns/iter",
            "extra": "iterations: 1231005\ncpu: 569.2202712417891 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 438.6117500349853,
            "unit": "ns/iter",
            "extra": "iterations: 1571740\ncpu: 438.5972870831045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 443.6764743383829,
            "unit": "ns/iter",
            "extra": "iterations: 1560717\ncpu: 443.6684549473091 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 427.4931855872914,
            "unit": "ns/iter",
            "extra": "iterations: 1617821\ncpu: 427.48740435437554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 955.0140659803596,
            "unit": "ns/iter",
            "extra": "iterations: 731339\ncpu: 954.9730015765601 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1560.3364461181216,
            "unit": "ns/iter",
            "extra": "iterations: 508762\ncpu: 1560.303835585204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 9903.0479327773,
            "unit": "ns/iter",
            "extra": "iterations: 82115\ncpu: 9902.826523777643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 10321.092196250644,
            "unit": "ns/iter",
            "extra": "iterations: 79103\ncpu: 10320.78682224444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 10360.700283449434,
            "unit": "ns/iter",
            "extra": "iterations: 79732\ncpu: 10360.798675563135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 10364.280284526945,
            "unit": "ns/iter",
            "extra": "iterations: 79430\ncpu: 10363.676192874209 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 27383.842431306366,
            "unit": "ns/iter",
            "extra": "iterations: 30025\ncpu: 27382.26810990838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 270413.74152409367,
            "unit": "ns/iter",
            "extra": "iterations: 3215\ncpu: 270399.595645412 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 205091.1191509841,
            "unit": "ns/iter",
            "extra": "iterations: 4146\ncpu: 205080.68017366173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 205239.49315726632,
            "unit": "ns/iter",
            "extra": "iterations: 4165\ncpu: 205233.66146458525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 204997.18915542914,
            "unit": "ns/iter",
            "extra": "iterations: 4002\ncpu: 204994.30284857634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 106410.38170998309,
            "unit": "ns/iter",
            "extra": "iterations: 8234\ncpu: 106403.88632499377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 203032.5775104231,
            "unit": "ns/iter",
            "extra": "iterations: 4322\ncpu: 203029.73160573747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5889.603167145144,
            "unit": "ns/iter",
            "extra": "iterations: 136211\ncpu: 5889.327587346097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 27316.34363887833,
            "unit": "ns/iter",
            "extra": "iterations: 30372\ncpu: 27316.083893059378 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 23916.638369195272,
            "unit": "ns/iter",
            "extra": "iterations: 34903\ncpu: 23915.485774861707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 23925.78742181385,
            "unit": "ns/iter",
            "extra": "iterations: 35013\ncpu: 23925.499100334157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 23278.34921783639,
            "unit": "ns/iter",
            "extra": "iterations: 35926\ncpu: 23277.60953070203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 46144.461911052735,
            "unit": "ns/iter",
            "extra": "iterations: 18168\ncpu: 46143.884852488 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 295023.0037174602,
            "unit": "ns/iter",
            "extra": "iterations: 2959\ncpu: 295017.0665765473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 226897.8273887094,
            "unit": "ns/iter",
            "extra": "iterations: 3841\ncpu: 226893.33506899283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 227375.61586639174,
            "unit": "ns/iter",
            "extra": "iterations: 3832\ncpu: 227373.4864300623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 226349.94147975647,
            "unit": "ns/iter",
            "extra": "iterations: 3879\ncpu: 226343.54215004045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 116434.49718347825,
            "unit": "ns/iter",
            "extra": "iterations: 7456\ncpu: 116433.54345493526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 217899.9942542959,
            "unit": "ns/iter",
            "extra": "iterations: 4003\ncpu: 217893.82962777847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 869910.6930147468,
            "unit": "ns/iter",
            "extra": "iterations: 1088\ncpu: 869881.2500000015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 484017.0748224973,
            "unit": "ns/iter",
            "extra": "iterations: 1831\ncpu: 483997.5969415607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 2984.9136915399736,
            "unit": "ns/iter",
            "extra": "iterations: 268560\ncpu: 2984.5326928805625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 9088.512418184366,
            "unit": "ns/iter",
            "extra": "iterations: 89989\ncpu: 9088.451921901535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 9439.036066991825,
            "unit": "ns/iter",
            "extra": "iterations: 87892\ncpu: 9438.940973012339 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 9365.7011079731,
            "unit": "ns/iter",
            "extra": "iterations: 88179\ncpu: 9365.031356672196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 9038.665740316908,
            "unit": "ns/iter",
            "extra": "iterations: 91758\ncpu: 9038.669107870699 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 27172.29701846014,
            "unit": "ns/iter",
            "extra": "iterations: 30823\ncpu: 27170.901599455003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 281882.9063395981,
            "unit": "ns/iter",
            "extra": "iterations: 3139\ncpu: 281881.29977699806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 211869.15031115056,
            "unit": "ns/iter",
            "extra": "iterations: 4178\ncpu: 211869.62661560444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 214950.7312319561,
            "unit": "ns/iter",
            "extra": "iterations: 4156\ncpu: 214951.37151106805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 214630.33111953447,
            "unit": "ns/iter",
            "extra": "iterations: 4216\ncpu: 214617.40986717204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 105715.85609610152,
            "unit": "ns/iter",
            "extra": "iterations: 8325\ncpu: 105714.41441441493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 203066.85156971504,
            "unit": "ns/iter",
            "extra": "iterations: 4332\ncpu: 203059.8568790388 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 208.43225831010488,
            "unit": "ns/iter",
            "extra": "iterations: 3362656\ncpu: 208.4261369584058 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1555.3084029565368,
            "unit": "ns/iter",
            "extra": "iterations: 450401\ncpu: 1555.3082697418545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1289.8435883985662,
            "unit": "ns/iter",
            "extra": "iterations: 550931\ncpu: 1289.8435557265698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1342.1664208338893,
            "unit": "ns/iter",
            "extra": "iterations: 524069\ncpu: 1342.1383443783172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 965.7288766139744,
            "unit": "ns/iter",
            "extra": "iterations: 724150\ncpu: 965.6916384726954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 8885.763483537032,
            "unit": "ns/iter",
            "extra": "iterations: 79115\ncpu: 8885.476837515052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 13165.7428463709,
            "unit": "ns/iter",
            "extra": "iterations: 53050\ncpu: 13165.004712535436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2978.2870188756124,
            "unit": "ns/iter",
            "extra": "iterations: 235542\ncpu: 2978.2259639469808 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2958.3505418442887,
            "unit": "ns/iter",
            "extra": "iterations: 234477\ncpu: 2958.2180768262856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2943.9255811991097,
            "unit": "ns/iter",
            "extra": "iterations: 237010\ncpu: 2943.8357031348914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5242.021193039493,
            "unit": "ns/iter",
            "extra": "iterations: 132921\ncpu: 5242.016686603312 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5580.115570245101,
            "unit": "ns/iter",
            "extra": "iterations: 125560\ncpu: 5580.07645747052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1892.06216344543,
            "unit": "ns/iter",
            "extra": "iterations: 370668\ncpu: 1891.990676292553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10014.015710401542,
            "unit": "ns/iter",
            "extra": "iterations: 69890\ncpu: 10013.50837029628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8071.22282271241,
            "unit": "ns/iter",
            "extra": "iterations: 86966\ncpu: 8070.966814617189 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 8071.560413199258,
            "unit": "ns/iter",
            "extra": "iterations: 87125\ncpu: 8071.252797704395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 8035.779571062969,
            "unit": "ns/iter",
            "extra": "iterations: 87239\ncpu: 8035.729432937167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 17934.624370308877,
            "unit": "ns/iter",
            "extra": "iterations: 38908\ncpu: 17934.393954970696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 57678.374845154714,
            "unit": "ns/iter",
            "extra": "iterations: 12109\ncpu: 57674.622181847815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 46513.69623655774,
            "unit": "ns/iter",
            "extra": "iterations: 15252\ncpu: 46511.53947023362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 45794.775806032456,
            "unit": "ns/iter",
            "extra": "iterations: 15384\ncpu: 45795.26131045239 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 45240.12197332706,
            "unit": "ns/iter",
            "extra": "iterations: 15446\ncpu: 45235.90573611338 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 26470.534160789433,
            "unit": "ns/iter",
            "extra": "iterations: 26507\ncpu: 26469.721205718968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 45401.640286842216,
            "unit": "ns/iter",
            "extra": "iterations: 15479\ncpu: 45398.45597260775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1904.7597563308607,
            "unit": "ns/iter",
            "extra": "iterations: 366070\ncpu: 1904.7179501188134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 9946.728728388116,
            "unit": "ns/iter",
            "extra": "iterations: 70446\ncpu: 9946.201345711557 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 8205.784854142588,
            "unit": "ns/iter",
            "extra": "iterations: 85700\ncpu: 8205.794632438703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 8252.487813672844,
            "unit": "ns/iter",
            "extra": "iterations: 74879\ncpu: 8252.18419049409 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 8019.782934182861,
            "unit": "ns/iter",
            "extra": "iterations: 87227\ncpu: 8019.3839063593705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 17968.518984087972,
            "unit": "ns/iter",
            "extra": "iterations: 38901\ncpu: 17968.083082696903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 56897.500365765445,
            "unit": "ns/iter",
            "extra": "iterations: 12303\ncpu: 56893.53816142438 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 45312.53950090484,
            "unit": "ns/iter",
            "extra": "iterations: 15468\ncpu: 45310.97103697977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 44801.155717133865,
            "unit": "ns/iter",
            "extra": "iterations: 15541\ncpu: 44799.446625055854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 45036.00025703688,
            "unit": "ns/iter",
            "extra": "iterations: 15562\ncpu: 45034.648502763215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 26465.15116498615,
            "unit": "ns/iter",
            "extra": "iterations: 26481\ncpu: 26463.86088138662 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 44480.15487897009,
            "unit": "ns/iter",
            "extra": "iterations: 15864\ncpu: 44479.53857791272 ns\nthreads: 1"
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
          "id": "77ee5ac1275c2ccd5522ff1af82b18cf56a24aa5",
          "message": "Upd README",
          "timestamp": "2023-12-13T01:37:25+03:00",
          "tree_id": "48d22aa37f5519c83d0d68355b1973cd5206100e",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/77ee5ac1275c2ccd5522ff1af82b18cf56a24aa5"
        },
        "date": 1702422469314,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 627.1480118165777,
            "unit": "ns/iter",
            "extra": "iterations: 1129599\ncpu: 627.1265289717855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5565.191860000027,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5564.761999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10866.413162681634,
            "unit": "ns/iter",
            "extra": "iterations: 76960\ncpu: 10866.051195426195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 16252.051122953364,
            "unit": "ns/iter",
            "extra": "iterations: 52540\ncpu: 16251.791016368486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 21450.254537017296,
            "unit": "ns/iter",
            "extra": "iterations: 38792\ncpu: 21449.940709424616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 26726.116230565316,
            "unit": "ns/iter",
            "extra": "iterations: 31644\ncpu: 26725.022121097223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 32110.925726014862,
            "unit": "ns/iter",
            "extra": "iterations: 26308\ncpu: 32109.179717196286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 37010.472118127625,
            "unit": "ns/iter",
            "extra": "iterations: 22416\ncpu: 37008.95342612416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 42709.1974904535,
            "unit": "ns/iter",
            "extra": "iterations: 20163\ncpu: 42706.54168526514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 572.271647864989,
            "unit": "ns/iter",
            "extra": "iterations: 1220282\ncpu: 572.2405968456476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 441.8523170893641,
            "unit": "ns/iter",
            "extra": "iterations: 1575619\ncpu: 441.8338443494274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 443.5446717254546,
            "unit": "ns/iter",
            "extra": "iterations: 1578907\ncpu: 443.5402465123026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 425.4851591218758,
            "unit": "ns/iter",
            "extra": "iterations: 1644714\ncpu: 425.47500659689183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 947.7972820408507,
            "unit": "ns/iter",
            "extra": "iterations: 736067\ncpu: 947.7652170250801 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1565.3801435501955,
            "unit": "ns/iter",
            "extra": "iterations: 507140\ncpu: 1565.3604527349446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 9627.331700608216,
            "unit": "ns/iter",
            "extra": "iterations: 82888\ncpu: 9627.183669529952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 9864.732878614217,
            "unit": "ns/iter",
            "extra": "iterations: 82835\ncpu: 9864.32425906924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 10039.548921529904,
            "unit": "ns/iter",
            "extra": "iterations: 81968\ncpu: 10039.106724575422 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 9351.648302611928,
            "unit": "ns/iter",
            "extra": "iterations: 87399\ncpu: 9351.121866382902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 27508.892333763964,
            "unit": "ns/iter",
            "extra": "iterations: 30093\ncpu: 27507.197687169864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 276327.8175115313,
            "unit": "ns/iter",
            "extra": "iterations: 3255\ncpu: 276312.3502304149 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 206004.6698795211,
            "unit": "ns/iter",
            "extra": "iterations: 4150\ncpu: 205994.4096385541 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 202963.67517291344,
            "unit": "ns/iter",
            "extra": "iterations: 4193\ncpu: 202960.93489148558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 206096.49834827567,
            "unit": "ns/iter",
            "extra": "iterations: 4238\ncpu: 206092.8268050971 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 107855.57426702099,
            "unit": "ns/iter",
            "extra": "iterations: 8254\ncpu: 107852.33826023723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 200423.10869066062,
            "unit": "ns/iter",
            "extra": "iterations: 4361\ncpu: 200412.35955056184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5716.241030000333,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5715.904999999992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 27344.439585431337,
            "unit": "ns/iter",
            "extra": "iterations: 30779\ncpu: 27342.639461970844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 23884.849682548753,
            "unit": "ns/iter",
            "extra": "iterations: 34966\ncpu: 23883.372418921226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 23888.50078497441,
            "unit": "ns/iter",
            "extra": "iterations: 35033\ncpu: 23888.111209431063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 23820.955497307274,
            "unit": "ns/iter",
            "extra": "iterations: 35099\ncpu: 23821.029089147916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 44936.788867976655,
            "unit": "ns/iter",
            "extra": "iterations: 18595\ncpu: 44935.85372411944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 293420.377263578,
            "unit": "ns/iter",
            "extra": "iterations: 2982\ncpu: 293413.8832997977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 227391.3716075099,
            "unit": "ns/iter",
            "extra": "iterations: 3832\ncpu: 227386.45615866492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 226744.871814873,
            "unit": "ns/iter",
            "extra": "iterations: 3846\ncpu: 226741.83567342645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 225091.65447049425,
            "unit": "ns/iter",
            "extra": "iterations: 3881\ncpu: 225083.53517134744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 115192.5317117825,
            "unit": "ns/iter",
            "extra": "iterations: 7647\ncpu: 115189.4729959459 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 214501.09319526103,
            "unit": "ns/iter",
            "extra": "iterations: 4056\ncpu: 214495.43885601568 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 859140.400000013,
            "unit": "ns/iter",
            "extra": "iterations: 1105\ncpu: 859130.0452488674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 481913.1410743442,
            "unit": "ns/iter",
            "extra": "iterations: 1843\ncpu: 481907.54205100634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 2507.4840752282516,
            "unit": "ns/iter",
            "extra": "iterations: 322485\ncpu: 2507.4366249593086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 8854.273607072371,
            "unit": "ns/iter",
            "extra": "iterations: 93203\ncpu: 8854.219284786956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 9783.48839949149,
            "unit": "ns/iter",
            "extra": "iterations: 85729\ncpu: 9783.359190005745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 9547.12612363774,
            "unit": "ns/iter",
            "extra": "iterations: 86883\ncpu: 9547.164577650396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 8918.033829088856,
            "unit": "ns/iter",
            "extra": "iterations: 92317\ncpu: 8917.777874064348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 27195.160770350103,
            "unit": "ns/iter",
            "extra": "iterations: 30895\ncpu: 27194.513675352107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 286605.0567997561,
            "unit": "ns/iter",
            "extra": "iterations: 3081\ncpu: 286597.4358974368 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 214804.90967265712,
            "unit": "ns/iter",
            "extra": "iterations: 4063\ncpu: 214800.1722864873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 214401.85026868322,
            "unit": "ns/iter",
            "extra": "iterations: 4094\ncpu: 214390.79140205312 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 213982.9731379714,
            "unit": "ns/iter",
            "extra": "iterations: 4095\ncpu: 213973.57753357833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 105887.46319612906,
            "unit": "ns/iter",
            "extra": "iterations: 8260\ncpu: 105882.48184019416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 207304.3087295973,
            "unit": "ns/iter",
            "extra": "iterations: 4227\ncpu: 207291.71989590718 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 203.48017739453655,
            "unit": "ns/iter",
            "extra": "iterations: 3444300\ncpu: 203.47071973986107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1537.5357261162176,
            "unit": "ns/iter",
            "extra": "iterations: 455843\ncpu: 1537.4275792323117 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1281.0479349273312,
            "unit": "ns/iter",
            "extra": "iterations: 603756\ncpu: 1280.969630115477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1261.0603620499176,
            "unit": "ns/iter",
            "extra": "iterations: 555614\ncpu: 1260.989823870529 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 960.5428861971836,
            "unit": "ns/iter",
            "extra": "iterations: 731634\ncpu: 960.420647482213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 8952.083133666247,
            "unit": "ns/iter",
            "extra": "iterations: 78464\ncpu: 8951.90660685151 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 13196.130182137198,
            "unit": "ns/iter",
            "extra": "iterations: 52488\ncpu: 13196.145785703462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 3019.6151706688315,
            "unit": "ns/iter",
            "extra": "iterations: 234782\ncpu: 3019.625439769668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2976.202680116618,
            "unit": "ns/iter",
            "extra": "iterations: 236333\ncpu: 2976.123097493793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2946.2003207502353,
            "unit": "ns/iter",
            "extra": "iterations: 236321\ncpu: 2946.151209583579 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5222.253291639131,
            "unit": "ns/iter",
            "extra": "iterations: 133672\ncpu: 5222.051738583959 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5607.2209917651035,
            "unit": "ns/iter",
            "extra": "iterations: 124344\ncpu: 5607.05623110085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1877.2606252706255,
            "unit": "ns/iter",
            "extra": "iterations: 371967\ncpu: 1877.2313135305014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10085.253742236664,
            "unit": "ns/iter",
            "extra": "iterations: 69878\ncpu: 10084.723375025029 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8015.7583562650825,
            "unit": "ns/iter",
            "extra": "iterations: 86851\ncpu: 8015.69930110195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 8069.549911542259,
            "unit": "ns/iter",
            "extra": "iterations: 86483\ncpu: 8069.129193020678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 8041.872773914107,
            "unit": "ns/iter",
            "extra": "iterations: 87710\ncpu: 8041.225629916887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 17968.23243576418,
            "unit": "ns/iter",
            "extra": "iterations: 38957\ncpu: 17967.358882870747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 59695.130304591636,
            "unit": "ns/iter",
            "extra": "iterations: 11688\ncpu: 59687.910677618864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 47109.459506801824,
            "unit": "ns/iter",
            "extra": "iterations: 14842\ncpu: 47106.57593316263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 46843.75199036879,
            "unit": "ns/iter",
            "extra": "iterations: 14947\ncpu: 46841.10523850977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 46652.26151716798,
            "unit": "ns/iter",
            "extra": "iterations: 15173\ncpu: 46651.88822249984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 26762.776964632612,
            "unit": "ns/iter",
            "extra": "iterations: 26099\ncpu: 26762.57711023404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 45690.34113276059,
            "unit": "ns/iter",
            "extra": "iterations: 15343\ncpu: 45688.535488496265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1897.154530203085,
            "unit": "ns/iter",
            "extra": "iterations: 370756\ncpu: 1897.1390887807484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 10176.509761797253,
            "unit": "ns/iter",
            "extra": "iterations: 68891\ncpu: 10176.430883569712 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 8137.545654655481,
            "unit": "ns/iter",
            "extra": "iterations: 85862\ncpu: 8136.8894272205425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 8137.777915517562,
            "unit": "ns/iter",
            "extra": "iterations: 86314\ncpu: 8137.232662140561 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 7973.4771537287315,
            "unit": "ns/iter",
            "extra": "iterations: 88045\ncpu: 7972.92180135151 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 18077.985286905987,
            "unit": "ns/iter",
            "extra": "iterations: 38741\ncpu: 18077.476058955584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 57678.45247179688,
            "unit": "ns/iter",
            "extra": "iterations: 12056\ncpu: 57677.83676177819 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 45729.108576644285,
            "unit": "ns/iter",
            "extra": "iterations: 15344\ncpu: 45727.665537018365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 44972.8137727295,
            "unit": "ns/iter",
            "extra": "iterations: 15567\ncpu: 44969.02421789699 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 45314.26535200697,
            "unit": "ns/iter",
            "extra": "iterations: 15568\ncpu: 45311.95400822189 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 26095.534219895024,
            "unit": "ns/iter",
            "extra": "iterations: 26695\ncpu: 26093.245926203253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 44428.72037705419,
            "unit": "ns/iter",
            "extra": "iterations: 15807\ncpu: 44426.47561207004 ns\nthreads: 1"
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
          "id": "77ee5ac1275c2ccd5522ff1af82b18cf56a24aa5",
          "message": "Upd README",
          "timestamp": "2023-12-13T01:37:25+03:00",
          "tree_id": "48d22aa37f5519c83d0d68355b1973cd5206100e",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/77ee5ac1275c2ccd5522ff1af82b18cf56a24aa5"
        },
        "date": 1702453361497,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 619.3943830847018,
            "unit": "ns/iter",
            "extra": "iterations: 1127594\ncpu: 619.3547500252752 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5556.987630000094,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5556.617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10758.42218708281,
            "unit": "ns/iter",
            "extra": "iterations: 77153\ncpu: 10757.785180096691 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 16323.789447342544,
            "unit": "ns/iter",
            "extra": "iterations: 51949\ncpu: 16323.155402413908 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 21212.14769582299,
            "unit": "ns/iter",
            "extra": "iterations: 39385\ncpu: 21210.94833058271 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 26291.92655291854,
            "unit": "ns/iter",
            "extra": "iterations: 30008\ncpu: 26290.295921087698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 31422.271519440335,
            "unit": "ns/iter",
            "extra": "iterations: 26569\ncpu: 31420.791147578024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 36673.15953120132,
            "unit": "ns/iter",
            "extra": "iterations: 22867\ncpu: 36671.85026457341 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 41583.840671166836,
            "unit": "ns/iter",
            "extra": "iterations: 20442\ncpu: 41582.868603854826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 572.1579345609548,
            "unit": "ns/iter",
            "extra": "iterations: 1222481\ncpu: 572.1366630647017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 438.23057765211894,
            "unit": "ns/iter",
            "extra": "iterations: 1583202\ncpu: 438.21514879339526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 447.6486670674161,
            "unit": "ns/iter",
            "extra": "iterations: 1555405\ncpu: 447.6502261468887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 426.43015491821257,
            "unit": "ns/iter",
            "extra": "iterations: 1630215\ncpu: 426.426514294127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 949.8585421955187,
            "unit": "ns/iter",
            "extra": "iterations: 738206\ncpu: 949.844894243613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1552.806858954617,
            "unit": "ns/iter",
            "extra": "iterations: 510311\ncpu: 1552.7413675190242 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 9524.442693909617,
            "unit": "ns/iter",
            "extra": "iterations: 85942\ncpu: 9524.130227362642 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 9982.553204956826,
            "unit": "ns/iter",
            "extra": "iterations: 82154\ncpu: 9981.9874869148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 9837.882838962716,
            "unit": "ns/iter",
            "extra": "iterations: 82664\ncpu: 9837.43830446144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 9380.601994914628,
            "unit": "ns/iter",
            "extra": "iterations: 86921\ncpu: 9380.146339779818 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 27870.973621023193,
            "unit": "ns/iter",
            "extra": "iterations: 29986\ncpu: 27868.928833455546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 276932.29231916287,
            "unit": "ns/iter",
            "extra": "iterations: 2682\ncpu: 276920.1715137963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 210106.79733655945,
            "unit": "ns/iter",
            "extra": "iterations: 4130\ncpu: 210094.8184019372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 205059.60211690946,
            "unit": "ns/iter",
            "extra": "iterations: 4157\ncpu: 205049.07385133478 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 206538.8034765837,
            "unit": "ns/iter",
            "extra": "iterations: 4142\ncpu: 206531.62723322108 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 107368.2978328134,
            "unit": "ns/iter",
            "extra": "iterations: 8075\ncpu: 107362.66253869982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 203323.24235348948,
            "unit": "ns/iter",
            "extra": "iterations: 4283\ncpu: 203316.06350688738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5630.748620000077,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5630.407000000019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 27488.585078235385,
            "unit": "ns/iter",
            "extra": "iterations: 30613\ncpu: 27486.9728546696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 23996.771160051518,
            "unit": "ns/iter",
            "extra": "iterations: 35326\ncpu: 23995.513219724893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 23891.215593721852,
            "unit": "ns/iter",
            "extra": "iterations: 35168\ncpu: 23890.167197452145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 23324.029331224287,
            "unit": "ns/iter",
            "extra": "iterations: 35423\ncpu: 23323.117748355602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 44591.298401037675,
            "unit": "ns/iter",
            "extra": "iterations: 18512\ncpu: 44589.806611927495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 290801.06954195484,
            "unit": "ns/iter",
            "extra": "iterations: 2991\ncpu: 290788.7997325317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 227239.15120187032,
            "unit": "ns/iter",
            "extra": "iterations: 3869\ncpu: 227234.71181183783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 224077.5986552797,
            "unit": "ns/iter",
            "extra": "iterations: 3867\ncpu: 224072.51099043226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 222082.92685422342,
            "unit": "ns/iter",
            "extra": "iterations: 3910\ncpu: 222075.67774936033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 114869.49624356965,
            "unit": "ns/iter",
            "extra": "iterations: 7587\ncpu: 114863.92513510006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 215341.29332668823,
            "unit": "ns/iter",
            "extra": "iterations: 4016\ncpu: 215329.3326693224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 864749.407509107,
            "unit": "ns/iter",
            "extra": "iterations: 1092\ncpu: 864710.4395604411 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 468580.833070885,
            "unit": "ns/iter",
            "extra": "iterations: 1905\ncpu: 468552.6509186366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 2459.807595423717,
            "unit": "ns/iter",
            "extra": "iterations: 327513\ncpu: 2459.693203017881 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 9460.138658832477,
            "unit": "ns/iter",
            "extra": "iterations: 88505\ncpu: 9459.809050336127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 9582.445079623956,
            "unit": "ns/iter",
            "extra": "iterations: 85715\ncpu: 9581.958817009863 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 9509.192987274522,
            "unit": "ns/iter",
            "extra": "iterations: 87384\ncpu: 9508.670923738928 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 9170.96525631596,
            "unit": "ns/iter",
            "extra": "iterations: 90923\ncpu: 9170.49811378864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 26996.46731804872,
            "unit": "ns/iter",
            "extra": "iterations: 31011\ncpu: 26995.230724581757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 276076.60661879677,
            "unit": "ns/iter",
            "extra": "iterations: 3203\ncpu: 276059.9438026847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 208360.4872400694,
            "unit": "ns/iter",
            "extra": "iterations: 4232\ncpu: 207895.58128544528 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 205640.93204341613,
            "unit": "ns/iter",
            "extra": "iterations: 4238\ncpu: 205630.6040585181 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 205804.57342656972,
            "unit": "ns/iter",
            "extra": "iterations: 4290\ncpu: 205795.92074591995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 103824.2980849285,
            "unit": "ns/iter",
            "extra": "iterations: 8407\ncpu: 103820.22124420127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 196669.74576271343,
            "unit": "ns/iter",
            "extra": "iterations: 4425\ncpu: 196660.00000000047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 205.5672855268754,
            "unit": "ns/iter",
            "extra": "iterations: 3406639\ncpu: 205.55676724184585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1533.078270343044,
            "unit": "ns/iter",
            "extra": "iterations: 457108\ncpu: 1532.983671254933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1167.371927510556,
            "unit": "ns/iter",
            "extra": "iterations: 597439\ncpu: 1167.3176675777786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1257.1955062753184,
            "unit": "ns/iter",
            "extra": "iterations: 584682\ncpu: 1257.1996401462661 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 951.3163054359363,
            "unit": "ns/iter",
            "extra": "iterations: 735264\ncpu: 951.2856606606647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 8885.583900456397,
            "unit": "ns/iter",
            "extra": "iterations: 78760\ncpu: 8885.620873539892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 12535.952646736361,
            "unit": "ns/iter",
            "extra": "iterations: 56258\ncpu: 12535.897116854478 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2976.9716952647377,
            "unit": "ns/iter",
            "extra": "iterations: 231834\ncpu: 2976.9602387915743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2982.532151812855,
            "unit": "ns/iter",
            "extra": "iterations: 230889\ncpu: 2982.514974728095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2953.056243735214,
            "unit": "ns/iter",
            "extra": "iterations: 236453\ncpu: 2953.0642453256837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5270.131230202925,
            "unit": "ns/iter",
            "extra": "iterations: 132279\ncpu: 5270.110145979321 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5523.433480282338,
            "unit": "ns/iter",
            "extra": "iterations: 124760\ncpu: 5523.253446617471 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1869.522984393976,
            "unit": "ns/iter",
            "extra": "iterations: 374602\ncpu: 1869.5316629382773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10062.863923554976,
            "unit": "ns/iter",
            "extra": "iterations: 70115\ncpu: 10062.319047279589 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 7978.80816205628,
            "unit": "ns/iter",
            "extra": "iterations: 87772\ncpu: 7978.758601831928 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 7985.241149911795,
            "unit": "ns/iter",
            "extra": "iterations: 87485\ncpu: 7985.190604103577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 7894.2953264226135,
            "unit": "ns/iter",
            "extra": "iterations: 87984\ncpu: 7893.990952900491 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 18046.797301125058,
            "unit": "ns/iter",
            "extra": "iterations: 38831\ncpu: 18046.882645309484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 57963.11898838978,
            "unit": "ns/iter",
            "extra": "iterations: 12060\ncpu: 57960.82089552301 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 46576.61239598809,
            "unit": "ns/iter",
            "extra": "iterations: 15263\ncpu: 46575.94837187959 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 45816.70215677453,
            "unit": "ns/iter",
            "extra": "iterations: 15347\ncpu: 45814.97361047749 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 45392.01253897501,
            "unit": "ns/iter",
            "extra": "iterations: 15392\ncpu: 45391.833419958326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 26907.829431566013,
            "unit": "ns/iter",
            "extra": "iterations: 26142\ncpu: 26907.455435697742 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 44997.83492125426,
            "unit": "ns/iter",
            "extra": "iterations: 15429\ncpu: 44998.088016073845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1883.8166025663397,
            "unit": "ns/iter",
            "extra": "iterations: 371292\ncpu: 1883.8272841860282 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 10006.330164070156,
            "unit": "ns/iter",
            "extra": "iterations: 70153\ncpu: 10006.313343691663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 8084.21670444504,
            "unit": "ns/iter",
            "extra": "iterations: 86911\ncpu: 8083.859350369965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 8116.017998794186,
            "unit": "ns/iter",
            "extra": "iterations: 86228\ncpu: 8115.867235700712 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 8041.584102769214,
            "unit": "ns/iter",
            "extra": "iterations: 87185\ncpu: 8041.449790674948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 17946.89315244011,
            "unit": "ns/iter",
            "extra": "iterations: 39065\ncpu: 17946.967874056016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 56965.690482057646,
            "unit": "ns/iter",
            "extra": "iterations: 12177\ncpu: 56965.48410938683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 45056.72109110236,
            "unit": "ns/iter",
            "extra": "iterations: 15324\ncpu: 45056.480031323124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 45159.38300737436,
            "unit": "ns/iter",
            "extra": "iterations: 15595\ncpu: 45158.11478037793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 45294.21937889714,
            "unit": "ns/iter",
            "extra": "iterations: 15553\ncpu: 45293.7696907348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 26730.683798881317,
            "unit": "ns/iter",
            "extra": "iterations: 25955\ncpu: 26729.000192640884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 45218.42568469061,
            "unit": "ns/iter",
            "extra": "iterations: 15737\ncpu: 45217.38577873781 ns\nthreads: 1"
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
          "id": "6b4e127b9da4264cc4740cb5bb6d3f7bf848fe6d",
          "message": "fail-fast: false",
          "timestamp": "2023-12-13T17:51:42+03:00",
          "tree_id": "d2ed956f4cc316eb0fee876ba27a22bed47f08d6",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/6b4e127b9da4264cc4740cb5bb6d3f7bf848fe6d"
        },
        "date": 1702479525503,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 614.8236927271562,
            "unit": "ns/iter",
            "extra": "iterations: 1141422\ncpu: 614.8028511803698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5559.332430000268,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5559.086999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10642.862833337807,
            "unit": "ns/iter",
            "extra": "iterations: 71774\ncpu: 10642.242316159052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 16400.57732709726,
            "unit": "ns/iter",
            "extra": "iterations: 52168\ncpu: 16399.848566170833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 21551.012736056353,
            "unit": "ns/iter",
            "extra": "iterations: 38709\ncpu: 21550.25704616499 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 26640.308261326634,
            "unit": "ns/iter",
            "extra": "iterations: 31363\ncpu: 26639.463699263466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 32021.96222826072,
            "unit": "ns/iter",
            "extra": "iterations: 25760\ncpu: 32020.512422360265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 37177.56894772316,
            "unit": "ns/iter",
            "extra": "iterations: 22285\ncpu: 37175.98384563608 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 41248.793806646514,
            "unit": "ns/iter",
            "extra": "iterations: 19860\ncpu: 41246.520644511584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 568.4049217493981,
            "unit": "ns/iter",
            "extra": "iterations: 1228872\ncpu: 568.3808403153467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 441.8044749278551,
            "unit": "ns/iter",
            "extra": "iterations: 1554215\ncpu: 441.7998153408641 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 449.29214284207,
            "unit": "ns/iter",
            "extra": "iterations: 1562537\ncpu: 449.2869608847661 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 425.6939640069341,
            "unit": "ns/iter",
            "extra": "iterations: 1643872\ncpu: 425.67000350392266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 943.4293609214849,
            "unit": "ns/iter",
            "extra": "iterations: 740801\ncpu: 943.4252923524668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1571.3367968626292,
            "unit": "ns/iter",
            "extra": "iterations: 504880\ncpu: 1571.3428933607977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 9760.023931520771,
            "unit": "ns/iter",
            "extra": "iterations: 82945\ncpu: 9759.584061727655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 9811.484136606568,
            "unit": "ns/iter",
            "extra": "iterations: 83305\ncpu: 9811.007742632499 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 9706.608182923237,
            "unit": "ns/iter",
            "extra": "iterations: 84713\ncpu: 9706.137192638676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 9623.261736003078,
            "unit": "ns/iter",
            "extra": "iterations: 85357\ncpu: 9622.872172170988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 27261.232210968617,
            "unit": "ns/iter",
            "extra": "iterations: 30412\ncpu: 27259.95659608052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 278970.1900648091,
            "unit": "ns/iter",
            "extra": "iterations: 3241\ncpu: 278956.0629435356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 207192.2254712372,
            "unit": "ns/iter",
            "extra": "iterations: 4138\ncpu: 207181.39197680057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 210072.9511369054,
            "unit": "ns/iter",
            "extra": "iterations: 4134\ncpu: 210066.95694242828 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 208887.3570219953,
            "unit": "ns/iter",
            "extra": "iterations: 4137\ncpu: 208875.10273144857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 106723.29837824809,
            "unit": "ns/iter",
            "extra": "iterations: 8201\ncpu: 106716.90037800248 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 204113.68884219864,
            "unit": "ns/iter",
            "extra": "iterations: 4284\ncpu: 204109.7338935578 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5772.0010599996385,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5771.733999999995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 27504.99710809843,
            "unit": "ns/iter",
            "extra": "iterations: 30084\ncpu: 27503.786065682736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 23586.71818845537,
            "unit": "ns/iter",
            "extra": "iterations: 35616\ncpu: 23585.82378706195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 23576.411763053547,
            "unit": "ns/iter",
            "extra": "iterations: 35620\ncpu: 23576.15103874223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 23222.58061923204,
            "unit": "ns/iter",
            "extra": "iterations: 36077\ncpu: 23222.42980292152 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 44203.06981253823,
            "unit": "ns/iter",
            "extra": "iterations: 18564\ncpu: 44202.54255548387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 291175.8374253517,
            "unit": "ns/iter",
            "extra": "iterations: 3014\ncpu: 291167.9495686785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 225216.71122580476,
            "unit": "ns/iter",
            "extra": "iterations: 3875\ncpu: 225215.48387096717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 224648.11398293212,
            "unit": "ns/iter",
            "extra": "iterations: 3869\ncpu: 224638.95063323792 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 222610.95764225765,
            "unit": "ns/iter",
            "extra": "iterations: 3919\ncpu: 222609.64531768253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 114376.3800159414,
            "unit": "ns/iter",
            "extra": "iterations: 7526\ncpu: 114372.08344406054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 212622.56996337822,
            "unit": "ns/iter",
            "extra": "iterations: 4095\ncpu: 212616.94749694687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 868763.0333642489,
            "unit": "ns/iter",
            "extra": "iterations: 1079\ncpu: 868711.399443931 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 479923.48172042955,
            "unit": "ns/iter",
            "extra": "iterations: 1860\ncpu: 479901.2365591399 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 2514.304225563733,
            "unit": "ns/iter",
            "extra": "iterations: 319342\ncpu: 2514.171640435651 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 8829.638398972804,
            "unit": "ns/iter",
            "extra": "iterations: 93440\ncpu: 8829.363227739668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 9497.954923001775,
            "unit": "ns/iter",
            "extra": "iterations: 88249\ncpu: 9497.26115876665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 9219.450273211647,
            "unit": "ns/iter",
            "extra": "iterations: 90223\ncpu: 9218.998481540166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 9088.279714186436,
            "unit": "ns/iter",
            "extra": "iterations: 91808\ncpu: 9087.857267340563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 27285.971323029742,
            "unit": "ns/iter",
            "extra": "iterations: 30861\ncpu: 27285.123618806865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 283515.6796302223,
            "unit": "ns/iter",
            "extra": "iterations: 3137\ncpu: 283501.84890022385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 212151.2813250104,
            "unit": "ns/iter",
            "extra": "iterations: 4166\ncpu: 212140.42246759532 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 213012.34552454483,
            "unit": "ns/iter",
            "extra": "iterations: 4156\ncpu: 213002.91145331983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 210326.49452640946,
            "unit": "ns/iter",
            "extra": "iterations: 4202\ncpu: 210318.1818181808 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 104985.1109251714,
            "unit": "ns/iter",
            "extra": "iterations: 8366\ncpu: 104977.95840305997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 202169.84705075301,
            "unit": "ns/iter",
            "extra": "iterations: 4374\ncpu: 202158.48193872845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 205.2511910739587,
            "unit": "ns/iter",
            "extra": "iterations: 3409528\ncpu: 205.2487910350053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1539.9097339970301,
            "unit": "ns/iter",
            "extra": "iterations: 455897\ncpu: 1539.914498230952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1206.7819189430438,
            "unit": "ns/iter",
            "extra": "iterations: 577964\ncpu: 1206.7519776318202 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1274.7064299691779,
            "unit": "ns/iter",
            "extra": "iterations: 550407\ncpu: 1274.6959976889893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 954.2225250305252,
            "unit": "ns/iter",
            "extra": "iterations: 733504\ncpu: 954.1956144751796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9542.403128021471,
            "unit": "ns/iter",
            "extra": "iterations: 76534\ncpu: 9542.341965662352 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 13882.221305355657,
            "unit": "ns/iter",
            "extra": "iterations: 50898\ncpu: 13882.262564344286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 3019.7018187950707,
            "unit": "ns/iter",
            "extra": "iterations: 231252\ncpu: 3019.6806946534607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 3046.4351562093407,
            "unit": "ns/iter",
            "extra": "iterations: 231356\ncpu: 3046.404675046261 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2995.9705701970834,
            "unit": "ns/iter",
            "extra": "iterations: 233165\ncpu: 2995.981815452605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5297.787482677132,
            "unit": "ns/iter",
            "extra": "iterations: 133495\ncpu: 5297.600659200682 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5635.51008493881,
            "unit": "ns/iter",
            "extra": "iterations: 123501\ncpu: 5635.089594416281 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1909.1910852533556,
            "unit": "ns/iter",
            "extra": "iterations: 366449\ncpu: 1909.125144290213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10171.547192594116,
            "unit": "ns/iter",
            "extra": "iterations: 69566\ncpu: 10170.980076474232 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8211.24348347458,
            "unit": "ns/iter",
            "extra": "iterations: 85053\ncpu: 8211.270619496225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 8141.5183728247675,
            "unit": "ns/iter",
            "extra": "iterations: 86432\ncpu: 8141.54132728617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 8023.842122670318,
            "unit": "ns/iter",
            "extra": "iterations: 87682\ncpu: 8023.3753792112375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 17972.947769622904,
            "unit": "ns/iter",
            "extra": "iterations: 38962\ncpu: 17972.373081464077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 59668.59551531113,
            "unit": "ns/iter",
            "extra": "iterations: 11595\ncpu: 59665.304010349086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 47483.47227675829,
            "unit": "ns/iter",
            "extra": "iterations: 14771\ncpu: 47481.82249001387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 47282.17565005541,
            "unit": "ns/iter",
            "extra": "iterations: 14768\ncpu: 47279.32015167957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 46992.18143885845,
            "unit": "ns/iter",
            "extra": "iterations: 14859\ncpu: 46990.941516926316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 27312.63007624237,
            "unit": "ns/iter",
            "extra": "iterations: 25708\ncpu: 27312.498055080396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 46515.14793454845,
            "unit": "ns/iter",
            "extra": "iterations: 14912\ncpu: 46513.19742489289 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1890.7878876447944,
            "unit": "ns/iter",
            "extra": "iterations: 369507\ncpu: 1890.7815007564054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 10115.68887449628,
            "unit": "ns/iter",
            "extra": "iterations: 69480\ncpu: 10115.542602187717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 8091.350088295492,
            "unit": "ns/iter",
            "extra": "iterations: 86641\ncpu: 8090.916540667687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 8125.683989999079,
            "unit": "ns/iter",
            "extra": "iterations: 86396\ncpu: 8125.4514097874435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 8011.411029831802,
            "unit": "ns/iter",
            "extra": "iterations: 87490\ncpu: 8010.96811064114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 18047.397408541477,
            "unit": "ns/iter",
            "extra": "iterations: 38897\ncpu: 18046.756819292103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 59170.53800819667,
            "unit": "ns/iter",
            "extra": "iterations: 11708\ncpu: 59168.893064570955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 46546.904647753654,
            "unit": "ns/iter",
            "extra": "iterations: 15018\ncpu: 46545.23904647695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 46256.59306243787,
            "unit": "ns/iter",
            "extra": "iterations: 15135\ncpu: 46253.22101090155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 46304.10371547639,
            "unit": "ns/iter",
            "extra": "iterations: 15099\ncpu: 46301.46367309081 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 26874.442495798296,
            "unit": "ns/iter",
            "extra": "iterations: 26172\ncpu: 26873.227112945064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 46302.99610642539,
            "unit": "ns/iter",
            "extra": "iterations: 15410\ncpu: 46303.21868916338 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "33685945+GremSnoort@users.noreply.github.com",
            "name": "GremSnoort",
            "username": "GremSnoort"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d00df85748c367e34b838c50472cb85d5c89201f",
          "message": "Add Parser& Serializer with tests, example, benchmarks and CI CD (gcc & clang) (#1)",
          "timestamp": "2023-12-13T20:22:18+03:00",
          "tree_id": "d2ed956f4cc316eb0fee876ba27a22bed47f08d6",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/d00df85748c367e34b838c50472cb85d5c89201f"
        },
        "date": 1702488562117,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 613.9293599472375,
            "unit": "ns/iter",
            "extra": "iterations: 1140656\ncpu: 613.8875348922024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5595.336159999532,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5594.872 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10800.490780215794,
            "unit": "ns/iter",
            "extra": "iterations: 77171\ncpu: 10800.377084656151 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 16138.33683343229,
            "unit": "ns/iter",
            "extra": "iterations: 52189\ncpu: 16138.019506026176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 21257.038068711776,
            "unit": "ns/iter",
            "extra": "iterations: 38772\ncpu: 21256.502114928295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 26461.808604316862,
            "unit": "ns/iter",
            "extra": "iterations: 31798\ncpu: 26460.145292156743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 32344.06552250294,
            "unit": "ns/iter",
            "extra": "iterations: 26220\ncpu: 32342.761250953463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 37321.033243730904,
            "unit": "ns/iter",
            "extra": "iterations: 22320\ncpu: 37318.59318996418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 42123.60653134166,
            "unit": "ns/iter",
            "extra": "iterations: 20149\ncpu: 42121.0481909772 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 562.9761337819151,
            "unit": "ns/iter",
            "extra": "iterations: 1244772\ncpu: 562.9359432892123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 437.2007534973738,
            "unit": "ns/iter",
            "extra": "iterations: 1590981\ncpu: 437.20503261824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 441.1076148807101,
            "unit": "ns/iter",
            "extra": "iterations: 1584818\ncpu: 441.1085689334676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 429.3031785301382,
            "unit": "ns/iter",
            "extra": "iterations: 1645100\ncpu: 429.2928089477845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 948.7157677987714,
            "unit": "ns/iter",
            "extra": "iterations: 708558\ncpu: 948.6744910084994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1550.3040430432943,
            "unit": "ns/iter",
            "extra": "iterations: 510556\ncpu: 1550.3178887330678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 9648.225542979904,
            "unit": "ns/iter",
            "extra": "iterations: 81909\ncpu: 9647.93490336837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 10269.021368801401,
            "unit": "ns/iter",
            "extra": "iterations: 80070\ncpu: 10268.88222805047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 10183.57829977683,
            "unit": "ns/iter",
            "extra": "iterations: 80460\ncpu: 10183.496147153883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 9468.470628223517,
            "unit": "ns/iter",
            "extra": "iterations: 85320\ncpu: 9468.172761368993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 28011.305607066097,
            "unit": "ns/iter",
            "extra": "iterations: 29659\ncpu: 28010.846623284724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 273713.6703014749,
            "unit": "ns/iter",
            "extra": "iterations: 3118\ncpu: 273711.545862733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 208829.00192538244,
            "unit": "ns/iter",
            "extra": "iterations: 4155\ncpu: 208823.70637785838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 209828.2926351722,
            "unit": "ns/iter",
            "extra": "iterations: 4087\ncpu: 209820.74871543876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 212566.29101562564,
            "unit": "ns/iter",
            "extra": "iterations: 4096\ncpu: 212553.41796875064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 108974.79011576906,
            "unit": "ns/iter",
            "extra": "iterations: 8033\ncpu: 108970.79546869168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 207031.8518872401,
            "unit": "ns/iter",
            "extra": "iterations: 4186\ncpu: 207018.49020544652 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5822.193779999907,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5821.96200000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 27334.943037144272,
            "unit": "ns/iter",
            "extra": "iterations: 30476\ncpu: 27333.39677122982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 24042.072079896363,
            "unit": "ns/iter",
            "extra": "iterations: 34545\ncpu: 24041.563178462893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 24315.98279570047,
            "unit": "ns/iter",
            "extra": "iterations: 34875\ncpu: 24315.678853046626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 23531.61468897906,
            "unit": "ns/iter",
            "extra": "iterations: 35496\ncpu: 23531.809217940052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 45684.867258101876,
            "unit": "ns/iter",
            "extra": "iterations: 18148\ncpu: 45684.83028432898 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 297997.7816208929,
            "unit": "ns/iter",
            "extra": "iterations: 2949\ncpu: 297995.21871821163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 228833.61086445357,
            "unit": "ns/iter",
            "extra": "iterations: 3829\ncpu: 228829.17210760002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 229789.48908756103,
            "unit": "ns/iter",
            "extra": "iterations: 3803\ncpu: 229787.22061530425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 228792.17755047904,
            "unit": "ns/iter",
            "extra": "iterations: 3813\ncpu: 228792.10595331766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 118439.26902320646,
            "unit": "ns/iter",
            "extra": "iterations: 7412\ncpu: 118439.32811656772 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 218623.21346346659,
            "unit": "ns/iter",
            "extra": "iterations: 3996\ncpu: 218621.9969969964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 873864.5310472642,
            "unit": "ns/iter",
            "extra": "iterations: 1079\ncpu: 873835.4031510674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 486008.72777166415,
            "unit": "ns/iter",
            "extra": "iterations: 1822\ncpu: 486000.8781558748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 2494.133247555509,
            "unit": "ns/iter",
            "extra": "iterations: 321762\ncpu: 2494.088176975526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 9224.071848603375,
            "unit": "ns/iter",
            "extra": "iterations: 89619\ncpu: 9224.152244501676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 9764.799918448469,
            "unit": "ns/iter",
            "extra": "iterations: 85835\ncpu: 9764.728840216685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 9111.68783774827,
            "unit": "ns/iter",
            "extra": "iterations: 90674\ncpu: 9111.692436641191 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 9080.556270166515,
            "unit": "ns/iter",
            "extra": "iterations: 92047\ncpu: 9080.37524308233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 26885.656765358726,
            "unit": "ns/iter",
            "extra": "iterations: 31410\ncpu: 26885.90257879652 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 282910.5763844799,
            "unit": "ns/iter",
            "extra": "iterations: 3142\ncpu: 282900.60471037484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 211635.6246693732,
            "unit": "ns/iter",
            "extra": "iterations: 4159\ncpu: 211635.84996393294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 212166.30871030263,
            "unit": "ns/iter",
            "extra": "iterations: 4156\ncpu: 212164.509143407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 210816.89837786448,
            "unit": "ns/iter",
            "extra": "iterations: 4192\ncpu: 210818.77385496127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 106949.94634383816,
            "unit": "ns/iter",
            "extra": "iterations: 8219\ncpu: 106949.03272904236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 204206.70805446073,
            "unit": "ns/iter",
            "extra": "iterations: 4333\ncpu: 204206.9236095081 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 204.46367965431065,
            "unit": "ns/iter",
            "extra": "iterations: 3433241\ncpu: 204.46330449857805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1523.2272486639097,
            "unit": "ns/iter",
            "extra": "iterations: 459017\ncpu: 1523.252515702028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1293.7524040806663,
            "unit": "ns/iter",
            "extra": "iterations: 543139\ncpu: 1293.7264678102672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1265.9083149765017,
            "unit": "ns/iter",
            "extra": "iterations: 554289\ncpu: 1265.9206659341987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 971.9331429751919,
            "unit": "ns/iter",
            "extra": "iterations: 720747\ncpu: 971.9420268138443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9021.466348455206,
            "unit": "ns/iter",
            "extra": "iterations: 77307\ncpu: 9021.344768261588 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 13469.6030031752,
            "unit": "ns/iter",
            "extra": "iterations: 51945\ncpu: 13469.72759649634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 3044.7778571987747,
            "unit": "ns/iter",
            "extra": "iterations: 229438\ncpu: 3044.74367803066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 3007.750999060655,
            "unit": "ns/iter",
            "extra": "iterations: 230967\ncpu: 3007.7565193296105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 3002.4735433379283,
            "unit": "ns/iter",
            "extra": "iterations: 231265\ncpu: 3002.4365987071105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5417.426894351601,
            "unit": "ns/iter",
            "extra": "iterations: 129477\ncpu: 5417.471056635556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5683.673504555693,
            "unit": "ns/iter",
            "extra": "iterations: 121285\ncpu: 5683.629467782528 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1893.2696051188223,
            "unit": "ns/iter",
            "extra": "iterations: 372441\ncpu: 1893.284036934717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10126.766646155862,
            "unit": "ns/iter",
            "extra": "iterations: 69881\ncpu: 10126.713985203382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8085.057998820921,
            "unit": "ns/iter",
            "extra": "iterations: 86519\ncpu: 8084.962840532124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 8098.305400330183,
            "unit": "ns/iter",
            "extra": "iterations: 86254\ncpu: 8098.278340714553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 7965.672228245748,
            "unit": "ns/iter",
            "extra": "iterations: 87625\ncpu: 7965.515549215436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 17986.412623597535,
            "unit": "ns/iter",
            "extra": "iterations: 39038\ncpu: 17986.37737589017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 57852.290953339194,
            "unit": "ns/iter",
            "extra": "iterations: 11916\ncpu: 57852.769385699576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 46701.682491200554,
            "unit": "ns/iter",
            "extra": "iterations: 15061\ncpu: 46702.098134254455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 46347.05638924083,
            "unit": "ns/iter",
            "extra": "iterations: 15127\ncpu: 46346.44014014719 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 45916.759258037004,
            "unit": "ns/iter",
            "extra": "iterations: 15095\ncpu: 45916.223915203256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 26810.748172807645,
            "unit": "ns/iter",
            "extra": "iterations: 26133\ncpu: 26810.040944399603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 45830.251627179314,
            "unit": "ns/iter",
            "extra": "iterations: 15364\ncpu: 45829.386878417026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1906.3054710210454,
            "unit": "ns/iter",
            "extra": "iterations: 367043\ncpu: 1906.2717447274802 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 9994.66371870715,
            "unit": "ns/iter",
            "extra": "iterations: 70105\ncpu: 9994.649454389782 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 8072.311312478688,
            "unit": "ns/iter",
            "extra": "iterations: 86630\ncpu: 8072.216322290176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 8116.008372136309,
            "unit": "ns/iter",
            "extra": "iterations: 86119\ncpu: 8116.068463405346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 8093.505177702611,
            "unit": "ns/iter",
            "extra": "iterations: 86718\ncpu: 8093.56073710197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 17921.538917697613,
            "unit": "ns/iter",
            "extra": "iterations: 38954\ncpu: 17921.273810134895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 57222.86148871842,
            "unit": "ns/iter",
            "extra": "iterations: 12064\ncpu: 57222.72877984122 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 46137.029724556705,
            "unit": "ns/iter",
            "extra": "iterations: 15139\ncpu: 46136.51496135796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 45307.24896587401,
            "unit": "ns/iter",
            "extra": "iterations: 15472\ncpu: 45307.60082730081 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 45277.596403856376,
            "unit": "ns/iter",
            "extra": "iterations: 15461\ncpu: 45277.530560766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 26423.844954727803,
            "unit": "ns/iter",
            "extra": "iterations: 26173\ncpu: 26423.71909983555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 45053.92213584541,
            "unit": "ns/iter",
            "extra": "iterations: 15694\ncpu: 45054.32649420114 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}