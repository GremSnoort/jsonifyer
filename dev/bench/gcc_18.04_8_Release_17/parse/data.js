window.BENCHMARK_DATA = {
  "lastUpdate": 1702412574482,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Parse gcc-8 18.04 Release c++-17": [
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
        "date": 1702397920303,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 694.3136545446336,
            "unit": "ns/iter",
            "extra": "iterations: 1011546\ncpu: 694.2711453557229 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 6070.2984166103815,
            "unit": "ns/iter",
            "extra": "iterations: 134711\ncpu: 6069.848045074269 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 11749.92699844434,
            "unit": "ns/iter",
            "extra": "iterations: 70067\ncpu: 11749.409850571601 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 17630.6152821991,
            "unit": "ns/iter",
            "extra": "iterations: 48069\ncpu: 17629.147683538253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 23075.221692857238,
            "unit": "ns/iter",
            "extra": "iterations: 35892\ncpu: 23074.74367547086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 28370.841533436862,
            "unit": "ns/iter",
            "extra": "iterations: 29085\ncpu: 28370.38335911982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 34435.05699228005,
            "unit": "ns/iter",
            "extra": "iterations: 24477\ncpu: 34432.687829390845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 39327.629726641615,
            "unit": "ns/iter",
            "extra": "iterations: 20998\ncpu: 39323.726069149496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 45393.38087003495,
            "unit": "ns/iter",
            "extra": "iterations: 18505\ncpu: 45392.050797081836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 679.2233629500083,
            "unit": "ns/iter",
            "extra": "iterations: 1030726\ncpu: 679.1688576789564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 515.7949093293636,
            "unit": "ns/iter",
            "extra": "iterations: 1366264\ncpu: 515.7678896611484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 513.6167222862401,
            "unit": "ns/iter",
            "extra": "iterations: 1345450\ncpu: 513.5688431379846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 486.7798854683324,
            "unit": "ns/iter",
            "extra": "iterations: 1373594\ncpu: 486.7588239319624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 924.3336294300422,
            "unit": "ns/iter",
            "extra": "iterations: 758761\ncpu: 924.3396800837153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 2652.6136292207752,
            "unit": "ns/iter",
            "extra": "iterations: 302277\ncpu: 2652.576610195284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 12948.288704260383,
            "unit": "ns/iter",
            "extra": "iterations: 62829\ncpu: 12948.098807875362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 10321.073329294164,
            "unit": "ns/iter",
            "extra": "iterations: 79218\ncpu: 10321.029311520102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 10145.371508483833,
            "unit": "ns/iter",
            "extra": "iterations: 80445\ncpu: 10145.150102554546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 9878.097502337174,
            "unit": "ns/iter",
            "extra": "iterations: 82357\ncpu: 9877.888946901907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 41106.18721461049,
            "unit": "ns/iter",
            "extra": "iterations: 20367\ncpu: 41105.90170373655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 261184.78163696383,
            "unit": "ns/iter",
            "extra": "iterations: 3311\ncpu: 261173.3011174873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 213153.29196188613,
            "unit": "ns/iter",
            "extra": "iterations: 4093\ncpu: 213145.32128023473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 213440.57892169125,
            "unit": "ns/iter",
            "extra": "iterations: 4099\ncpu: 213425.9819468163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 211152.32584540846,
            "unit": "ns/iter",
            "extra": "iterations: 4140\ncpu: 211141.18357487937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 108955.10747313384,
            "unit": "ns/iter",
            "extra": "iterations: 8002\ncpu: 108951.48712821801 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 200937.9585552281,
            "unit": "ns/iter",
            "extra": "iterations: 4319\ncpu: 200932.97059504577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5145.801840000104,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5145.291000000007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 26825.83839716877,
            "unit": "ns/iter",
            "extra": "iterations: 31070\ncpu: 26824.12938525907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 20966.364001910275,
            "unit": "ns/iter",
            "extra": "iterations: 39791\ncpu: 20966.17325525878 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 20963.076766494945,
            "unit": "ns/iter",
            "extra": "iterations: 39301\ncpu: 20963.194320755254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 20642.95046291622,
            "unit": "ns/iter",
            "extra": "iterations: 39748\ncpu: 20642.61598067833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 55770.2636579558,
            "unit": "ns/iter",
            "extra": "iterations: 15156\ncpu: 55769.365267880654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 284125.3730417866,
            "unit": "ns/iter",
            "extra": "iterations: 3064\ncpu: 284117.65665796463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 220302.88947900812,
            "unit": "ns/iter",
            "extra": "iterations: 3954\ncpu: 220300.8598887199 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 220110.79989905722,
            "unit": "ns/iter",
            "extra": "iterations: 3963\ncpu: 220106.13171839423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 218387.76384041063,
            "unit": "ns/iter",
            "extra": "iterations: 4010\ncpu: 218385.86034912747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 117126.66111850785,
            "unit": "ns/iter",
            "extra": "iterations: 7510\ncpu: 117124.12782956069 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 211368.4533887942,
            "unit": "ns/iter",
            "extra": "iterations: 4087\ncpu: 211361.2184976746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 843814.8214285742,
            "unit": "ns/iter",
            "extra": "iterations: 1120\ncpu: 843797.3214285728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 477315.60820290423,
            "unit": "ns/iter",
            "extra": "iterations: 1853\ncpu: 477304.4792228828 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 2691.7877652055704,
            "unit": "ns/iter",
            "extra": "iterations: 298542\ncpu: 2691.8051731414726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 12886.208501097299,
            "unit": "ns/iter",
            "extra": "iterations: 63333\ncpu: 12886.03887388878 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 10585.248497843279,
            "unit": "ns/iter",
            "extra": "iterations: 77888\ncpu: 10584.90781635168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 10329.837046333078,
            "unit": "ns/iter",
            "extra": "iterations: 80483\ncpu: 10329.650982195055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 9473.751065829289,
            "unit": "ns/iter",
            "extra": "iterations: 87256\ncpu: 9473.641927202769 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 39855.885474861934,
            "unit": "ns/iter",
            "extra": "iterations: 21122\ncpu: 39855.127355364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 274212.27822580584,
            "unit": "ns/iter",
            "extra": "iterations: 3224\ncpu: 274208.8399503725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 207726.07542694142,
            "unit": "ns/iter",
            "extra": "iterations: 4216\ncpu: 207720.16129032182 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 208882.03774038772,
            "unit": "ns/iter",
            "extra": "iterations: 4160\ncpu: 208883.19711538372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 206337.25877089382,
            "unit": "ns/iter",
            "extra": "iterations: 4247\ncpu: 206327.47821991885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 104560.74315764286,
            "unit": "ns/iter",
            "extra": "iterations: 8367\ncpu: 104559.43587904892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 200575.09510807833,
            "unit": "ns/iter",
            "extra": "iterations: 4395\ncpu: 200569.76109215035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 241.43742190890146,
            "unit": "ns/iter",
            "extra": "iterations: 2889254\ncpu: 241.43605927343188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1659.8304224685191,
            "unit": "ns/iter",
            "extra": "iterations: 421925\ncpu: 1659.7819517686885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1256.3767374202766,
            "unit": "ns/iter",
            "extra": "iterations: 560961\ncpu: 1256.3695158843555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1184.7569499859228,
            "unit": "ns/iter",
            "extra": "iterations: 588994\ncpu: 1184.7307442860194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 931.9905457346007,
            "unit": "ns/iter",
            "extra": "iterations: 740195\ncpu: 931.9713048588582 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 11263.807500605402,
            "unit": "ns/iter",
            "extra": "iterations: 61995\ncpu: 11263.363174449521 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 14448.159775479411,
            "unit": "ns/iter",
            "extra": "iterations: 48637\ncpu: 14447.858626148793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2997.663425582825,
            "unit": "ns/iter",
            "extra": "iterations: 232124\ncpu: 2997.6495321466173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2988.979876623221,
            "unit": "ns/iter",
            "extra": "iterations: 234404\ncpu: 2988.9276633504396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2984.3448658948473,
            "unit": "ns/iter",
            "extra": "iterations: 234033\ncpu: 2984.3034956608644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5727.870725380511,
            "unit": "ns/iter",
            "extra": "iterations: 122584\ncpu: 5727.6920315865445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5761.0791058805125,
            "unit": "ns/iter",
            "extra": "iterations: 122355\ncpu: 5761.030607658063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 2009.0514096710629,
            "unit": "ns/iter",
            "extra": "iterations: 347989\ncpu: 2008.9270063134118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10435.566871092919,
            "unit": "ns/iter",
            "extra": "iterations: 67017\ncpu: 10435.119447304323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8225.995314701671,
            "unit": "ns/iter",
            "extra": "iterations: 85160\ncpu: 8225.665805542503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 8198.354462963445,
            "unit": "ns/iter",
            "extra": "iterations: 85078\ncpu: 8198.269822985983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 8043.268798159755,
            "unit": "ns/iter",
            "extra": "iterations: 86950\ncpu: 8042.898217366178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 18172.33473291419,
            "unit": "ns/iter",
            "extra": "iterations: 38583\ncpu: 18171.272322006946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 59749.767477204114,
            "unit": "ns/iter",
            "extra": "iterations: 11844\ncpu: 59746.57210401835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 48886.17870855093,
            "unit": "ns/iter",
            "extra": "iterations: 14325\ncpu: 48882.443280976695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 49027.816650353336,
            "unit": "ns/iter",
            "extra": "iterations: 14306\ncpu: 49025.527750594076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 48336.5624828338,
            "unit": "ns/iter",
            "extra": "iterations: 14564\ncpu: 48331.694589399114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 27494.46506704212,
            "unit": "ns/iter",
            "extra": "iterations: 25506\ncpu: 27492.966360855866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 47534.11165311966,
            "unit": "ns/iter",
            "extra": "iterations: 14760\ncpu: 47530.96205962019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 2026.2451695331317,
            "unit": "ns/iter",
            "extra": "iterations: 342824\ncpu: 2026.1014398058257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 10536.048298012436,
            "unit": "ns/iter",
            "extra": "iterations: 66628\ncpu: 10535.276460347033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 8363.69475814658,
            "unit": "ns/iter",
            "extra": "iterations: 83501\ncpu: 8363.648339540889 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 8334.872954936944,
            "unit": "ns/iter",
            "extra": "iterations: 83616\ncpu: 8334.079601990057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 8300.950817341807,
            "unit": "ns/iter",
            "extra": "iterations: 84420\ncpu: 8300.593461265107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 17765.31843773787,
            "unit": "ns/iter",
            "extra": "iterations: 39430\ncpu: 17764.308901851393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 58722.454591023416,
            "unit": "ns/iter",
            "extra": "iterations: 11969\ncpu: 58718.25549335755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 50685.69272662175,
            "unit": "ns/iter",
            "extra": "iterations: 13955\ncpu: 50686.026513794415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 50780.535024939876,
            "unit": "ns/iter",
            "extra": "iterations: 13833\ncpu: 50776.657268849805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 46968.834955366874,
            "unit": "ns/iter",
            "extra": "iterations: 14899\ncpu: 46967.66897107248 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 27010.225582738953,
            "unit": "ns/iter",
            "extra": "iterations: 25955\ncpu: 27009.8593719898 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 45897.55812264976,
            "unit": "ns/iter",
            "extra": "iterations: 15149\ncpu: 45895.517855964594 ns\nthreads: 1"
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
          "id": "c1055272ad64f2314a237d4e8aa66cfea2a56aac",
          "message": "rm rdn",
          "timestamp": "2023-12-12T18:46:40+03:00",
          "tree_id": "a8ce2d06ccc561ccf79fea995e3abe4f5e35f6c2",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/c1055272ad64f2314a237d4e8aa66cfea2a56aac"
        },
        "date": 1702397920303,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 694.3136545446336,
            "unit": "ns/iter",
            "extra": "iterations: 1011546\ncpu: 694.2711453557229 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 6070.2984166103815,
            "unit": "ns/iter",
            "extra": "iterations: 134711\ncpu: 6069.848045074269 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 11749.92699844434,
            "unit": "ns/iter",
            "extra": "iterations: 70067\ncpu: 11749.409850571601 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 17630.6152821991,
            "unit": "ns/iter",
            "extra": "iterations: 48069\ncpu: 17629.147683538253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 23075.221692857238,
            "unit": "ns/iter",
            "extra": "iterations: 35892\ncpu: 23074.74367547086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 28370.841533436862,
            "unit": "ns/iter",
            "extra": "iterations: 29085\ncpu: 28370.38335911982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 34435.05699228005,
            "unit": "ns/iter",
            "extra": "iterations: 24477\ncpu: 34432.687829390845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 39327.629726641615,
            "unit": "ns/iter",
            "extra": "iterations: 20998\ncpu: 39323.726069149496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 45393.38087003495,
            "unit": "ns/iter",
            "extra": "iterations: 18505\ncpu: 45392.050797081836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 679.2233629500083,
            "unit": "ns/iter",
            "extra": "iterations: 1030726\ncpu: 679.1688576789564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 515.7949093293636,
            "unit": "ns/iter",
            "extra": "iterations: 1366264\ncpu: 515.7678896611484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 513.6167222862401,
            "unit": "ns/iter",
            "extra": "iterations: 1345450\ncpu: 513.5688431379846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 486.7798854683324,
            "unit": "ns/iter",
            "extra": "iterations: 1373594\ncpu: 486.7588239319624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 924.3336294300422,
            "unit": "ns/iter",
            "extra": "iterations: 758761\ncpu: 924.3396800837153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 2652.6136292207752,
            "unit": "ns/iter",
            "extra": "iterations: 302277\ncpu: 2652.576610195284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 12948.288704260383,
            "unit": "ns/iter",
            "extra": "iterations: 62829\ncpu: 12948.098807875362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 10321.073329294164,
            "unit": "ns/iter",
            "extra": "iterations: 79218\ncpu: 10321.029311520102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 10145.371508483833,
            "unit": "ns/iter",
            "extra": "iterations: 80445\ncpu: 10145.150102554546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 9878.097502337174,
            "unit": "ns/iter",
            "extra": "iterations: 82357\ncpu: 9877.888946901907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 41106.18721461049,
            "unit": "ns/iter",
            "extra": "iterations: 20367\ncpu: 41105.90170373655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 261184.78163696383,
            "unit": "ns/iter",
            "extra": "iterations: 3311\ncpu: 261173.3011174873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 213153.29196188613,
            "unit": "ns/iter",
            "extra": "iterations: 4093\ncpu: 213145.32128023473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 213440.57892169125,
            "unit": "ns/iter",
            "extra": "iterations: 4099\ncpu: 213425.9819468163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 211152.32584540846,
            "unit": "ns/iter",
            "extra": "iterations: 4140\ncpu: 211141.18357487937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 108955.10747313384,
            "unit": "ns/iter",
            "extra": "iterations: 8002\ncpu: 108951.48712821801 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 200937.9585552281,
            "unit": "ns/iter",
            "extra": "iterations: 4319\ncpu: 200932.97059504577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5145.801840000104,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5145.291000000007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 26825.83839716877,
            "unit": "ns/iter",
            "extra": "iterations: 31070\ncpu: 26824.12938525907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 20966.364001910275,
            "unit": "ns/iter",
            "extra": "iterations: 39791\ncpu: 20966.17325525878 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 20963.076766494945,
            "unit": "ns/iter",
            "extra": "iterations: 39301\ncpu: 20963.194320755254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 20642.95046291622,
            "unit": "ns/iter",
            "extra": "iterations: 39748\ncpu: 20642.61598067833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 55770.2636579558,
            "unit": "ns/iter",
            "extra": "iterations: 15156\ncpu: 55769.365267880654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 284125.3730417866,
            "unit": "ns/iter",
            "extra": "iterations: 3064\ncpu: 284117.65665796463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 220302.88947900812,
            "unit": "ns/iter",
            "extra": "iterations: 3954\ncpu: 220300.8598887199 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 220110.79989905722,
            "unit": "ns/iter",
            "extra": "iterations: 3963\ncpu: 220106.13171839423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 218387.76384041063,
            "unit": "ns/iter",
            "extra": "iterations: 4010\ncpu: 218385.86034912747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 117126.66111850785,
            "unit": "ns/iter",
            "extra": "iterations: 7510\ncpu: 117124.12782956069 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 211368.4533887942,
            "unit": "ns/iter",
            "extra": "iterations: 4087\ncpu: 211361.2184976746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 843814.8214285742,
            "unit": "ns/iter",
            "extra": "iterations: 1120\ncpu: 843797.3214285728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 477315.60820290423,
            "unit": "ns/iter",
            "extra": "iterations: 1853\ncpu: 477304.4792228828 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 2691.7877652055704,
            "unit": "ns/iter",
            "extra": "iterations: 298542\ncpu: 2691.8051731414726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 12886.208501097299,
            "unit": "ns/iter",
            "extra": "iterations: 63333\ncpu: 12886.03887388878 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 10585.248497843279,
            "unit": "ns/iter",
            "extra": "iterations: 77888\ncpu: 10584.90781635168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 10329.837046333078,
            "unit": "ns/iter",
            "extra": "iterations: 80483\ncpu: 10329.650982195055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 9473.751065829289,
            "unit": "ns/iter",
            "extra": "iterations: 87256\ncpu: 9473.641927202769 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 39855.885474861934,
            "unit": "ns/iter",
            "extra": "iterations: 21122\ncpu: 39855.127355364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 274212.27822580584,
            "unit": "ns/iter",
            "extra": "iterations: 3224\ncpu: 274208.8399503725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 207726.07542694142,
            "unit": "ns/iter",
            "extra": "iterations: 4216\ncpu: 207720.16129032182 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 208882.03774038772,
            "unit": "ns/iter",
            "extra": "iterations: 4160\ncpu: 208883.19711538372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 206337.25877089382,
            "unit": "ns/iter",
            "extra": "iterations: 4247\ncpu: 206327.47821991885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 104560.74315764286,
            "unit": "ns/iter",
            "extra": "iterations: 8367\ncpu: 104559.43587904892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 200575.09510807833,
            "unit": "ns/iter",
            "extra": "iterations: 4395\ncpu: 200569.76109215035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 241.43742190890146,
            "unit": "ns/iter",
            "extra": "iterations: 2889254\ncpu: 241.43605927343188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1659.8304224685191,
            "unit": "ns/iter",
            "extra": "iterations: 421925\ncpu: 1659.7819517686885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1256.3767374202766,
            "unit": "ns/iter",
            "extra": "iterations: 560961\ncpu: 1256.3695158843555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1184.7569499859228,
            "unit": "ns/iter",
            "extra": "iterations: 588994\ncpu: 1184.7307442860194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 931.9905457346007,
            "unit": "ns/iter",
            "extra": "iterations: 740195\ncpu: 931.9713048588582 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 11263.807500605402,
            "unit": "ns/iter",
            "extra": "iterations: 61995\ncpu: 11263.363174449521 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 14448.159775479411,
            "unit": "ns/iter",
            "extra": "iterations: 48637\ncpu: 14447.858626148793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2997.663425582825,
            "unit": "ns/iter",
            "extra": "iterations: 232124\ncpu: 2997.6495321466173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2988.979876623221,
            "unit": "ns/iter",
            "extra": "iterations: 234404\ncpu: 2988.9276633504396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2984.3448658948473,
            "unit": "ns/iter",
            "extra": "iterations: 234033\ncpu: 2984.3034956608644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5727.870725380511,
            "unit": "ns/iter",
            "extra": "iterations: 122584\ncpu: 5727.6920315865445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5761.0791058805125,
            "unit": "ns/iter",
            "extra": "iterations: 122355\ncpu: 5761.030607658063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 2009.0514096710629,
            "unit": "ns/iter",
            "extra": "iterations: 347989\ncpu: 2008.9270063134118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10435.566871092919,
            "unit": "ns/iter",
            "extra": "iterations: 67017\ncpu: 10435.119447304323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8225.995314701671,
            "unit": "ns/iter",
            "extra": "iterations: 85160\ncpu: 8225.665805542503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 8198.354462963445,
            "unit": "ns/iter",
            "extra": "iterations: 85078\ncpu: 8198.269822985983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 8043.268798159755,
            "unit": "ns/iter",
            "extra": "iterations: 86950\ncpu: 8042.898217366178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 18172.33473291419,
            "unit": "ns/iter",
            "extra": "iterations: 38583\ncpu: 18171.272322006946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 59749.767477204114,
            "unit": "ns/iter",
            "extra": "iterations: 11844\ncpu: 59746.57210401835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 48886.17870855093,
            "unit": "ns/iter",
            "extra": "iterations: 14325\ncpu: 48882.443280976695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 49027.816650353336,
            "unit": "ns/iter",
            "extra": "iterations: 14306\ncpu: 49025.527750594076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 48336.5624828338,
            "unit": "ns/iter",
            "extra": "iterations: 14564\ncpu: 48331.694589399114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 27494.46506704212,
            "unit": "ns/iter",
            "extra": "iterations: 25506\ncpu: 27492.966360855866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 47534.11165311966,
            "unit": "ns/iter",
            "extra": "iterations: 14760\ncpu: 47530.96205962019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 2026.2451695331317,
            "unit": "ns/iter",
            "extra": "iterations: 342824\ncpu: 2026.1014398058257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 10536.048298012436,
            "unit": "ns/iter",
            "extra": "iterations: 66628\ncpu: 10535.276460347033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 8363.69475814658,
            "unit": "ns/iter",
            "extra": "iterations: 83501\ncpu: 8363.648339540889 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 8334.872954936944,
            "unit": "ns/iter",
            "extra": "iterations: 83616\ncpu: 8334.079601990057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 8300.950817341807,
            "unit": "ns/iter",
            "extra": "iterations: 84420\ncpu: 8300.593461265107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 17765.31843773787,
            "unit": "ns/iter",
            "extra": "iterations: 39430\ncpu: 17764.308901851393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 58722.454591023416,
            "unit": "ns/iter",
            "extra": "iterations: 11969\ncpu: 58718.25549335755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 50685.69272662175,
            "unit": "ns/iter",
            "extra": "iterations: 13955\ncpu: 50686.026513794415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 50780.535024939876,
            "unit": "ns/iter",
            "extra": "iterations: 13833\ncpu: 50776.657268849805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 46968.834955366874,
            "unit": "ns/iter",
            "extra": "iterations: 14899\ncpu: 46967.66897107248 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 27010.225582738953,
            "unit": "ns/iter",
            "extra": "iterations: 25955\ncpu: 27009.8593719898 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 45897.55812264976,
            "unit": "ns/iter",
            "extra": "iterations: 15149\ncpu: 45895.517855964594 ns\nthreads: 1"
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
        "date": 1702409127514,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 691.6554944712827,
            "unit": "ns/iter",
            "extra": "iterations: 1009351\ncpu: 691.6187728550326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 6205.273290323149,
            "unit": "ns/iter",
            "extra": "iterations: 131750\ncpu: 6204.982163187856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 11889.82180443661,
            "unit": "ns/iter",
            "extra": "iterations: 69839\ncpu: 11889.281060725381 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 17706.00490679156,
            "unit": "ns/iter",
            "extra": "iterations: 47689\ncpu: 17705.087127010425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 23368.657604337055,
            "unit": "ns/iter",
            "extra": "iterations: 36157\ncpu: 23367.339657604327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 28859.486574982933,
            "unit": "ns/iter",
            "extra": "iterations: 29013\ncpu: 28857.687932995555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 34629.12155953801,
            "unit": "ns/iter",
            "extra": "iterations: 24161\ncpu: 34627.42022267291 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 40293.397813041876,
            "unit": "ns/iter",
            "extra": "iterations: 20668\ncpu: 40292.10373524283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 44541.4851564546,
            "unit": "ns/iter",
            "extra": "iterations: 18695\ncpu: 44540.80235357044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 673.1095495208527,
            "unit": "ns/iter",
            "extra": "iterations: 1041602\ncpu: 673.1034502621923 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 487.24299737252045,
            "unit": "ns/iter",
            "extra": "iterations: 1439781\ncpu: 487.23535037620286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 478.2259754785698,
            "unit": "ns/iter",
            "extra": "iterations: 1460924\ncpu: 478.1882561995008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 466.70745602289816,
            "unit": "ns/iter",
            "extra": "iterations: 1485886\ncpu: 466.6959645625576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 918.6652113053992,
            "unit": "ns/iter",
            "extra": "iterations: 761552\ncpu: 918.6393049982139 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 2591.8674463244547,
            "unit": "ns/iter",
            "extra": "iterations: 308939\ncpu: 2591.7993519756355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 13125.039745476928,
            "unit": "ns/iter",
            "extra": "iterations: 63177\ncpu: 13124.456685186062 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 10338.106141064203,
            "unit": "ns/iter",
            "extra": "iterations: 80035\ncpu: 10337.73349159743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 10442.687979279184,
            "unit": "ns/iter",
            "extra": "iterations: 78373\ncpu: 10442.064231304143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 10003.001190243207,
            "unit": "ns/iter",
            "extra": "iterations: 81496\ncpu: 10002.874987729436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 40395.844290317,
            "unit": "ns/iter",
            "extra": "iterations: 20474\ncpu: 40393.845853277344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 261821.295715171,
            "unit": "ns/iter",
            "extra": "iterations: 3314\ncpu: 261815.4496077252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 214486.69300613462,
            "unit": "ns/iter",
            "extra": "iterations: 4075\ncpu: 214475.68098159466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 213105.67390771938,
            "unit": "ns/iter",
            "extra": "iterations: 4097\ncpu: 213098.09616792793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 211581.5675807039,
            "unit": "ns/iter",
            "extra": "iterations: 4121\ncpu: 211573.62290706075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 112930.61360984287,
            "unit": "ns/iter",
            "extra": "iterations: 7715\ncpu: 112928.412184057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 204408.5989729231,
            "unit": "ns/iter",
            "extra": "iterations: 4284\ncpu: 204392.20354808582 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5180.409700000155,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5180.033000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 26927.294897694643,
            "unit": "ns/iter",
            "extra": "iterations: 30692\ncpu: 26925.772188192357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 21323.206033026247,
            "unit": "ns/iter",
            "extra": "iterations: 38455\ncpu: 21322.228578858354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 21630.839798073917,
            "unit": "ns/iter",
            "extra": "iterations: 38826\ncpu: 21629.57296656875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 20800.580537162372,
            "unit": "ns/iter",
            "extra": "iterations: 40323\ncpu: 20799.670163430266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 54257.188093234654,
            "unit": "ns/iter",
            "extra": "iterations: 15487\ncpu: 54254.40046490639 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 288783.6638073528,
            "unit": "ns/iter",
            "extra": "iterations: 3031\ncpu: 288762.22368855146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 226057.29766235218,
            "unit": "ns/iter",
            "extra": "iterations: 3850\ncpu: 226050.25974025854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 223924.57131822675,
            "unit": "ns/iter",
            "extra": "iterations: 3884\ncpu: 223913.59423274975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 222992.38972656502,
            "unit": "ns/iter",
            "extra": "iterations: 3913\ncpu: 222978.6097623316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 122220.62012117593,
            "unit": "ns/iter",
            "extra": "iterations: 7097\ncpu: 122212.49823869267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 213800.46146221494,
            "unit": "ns/iter",
            "extra": "iterations: 4035\ncpu: 213796.00991325916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 878665.8868100704,
            "unit": "ns/iter",
            "extra": "iterations: 1069\ncpu: 878622.3573433097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 480106.27153766225,
            "unit": "ns/iter",
            "extra": "iterations: 1834\ncpu: 480082.6608505997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 2589.672897679737,
            "unit": "ns/iter",
            "extra": "iterations: 309313\ncpu: 2589.5335792546584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 12797.122276196222,
            "unit": "ns/iter",
            "extra": "iterations: 64845\ncpu: 12796.321998612055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 10123.997270034059,
            "unit": "ns/iter",
            "extra": "iterations: 81686\ncpu: 10123.731116715195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 9880.886544704043,
            "unit": "ns/iter",
            "extra": "iterations: 83469\ncpu: 9880.687440846315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 9520.010261269837,
            "unit": "ns/iter",
            "extra": "iterations: 86539\ncpu: 9519.67436647059 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 39614.44382631352,
            "unit": "ns/iter",
            "extra": "iterations: 21211\ncpu: 39613.0969779829 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 277918.50031347206,
            "unit": "ns/iter",
            "extra": "iterations: 3190\ncpu: 277899.8432601871 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 213103.2730358945,
            "unit": "ns/iter",
            "extra": "iterations: 4124\ncpu: 213096.09602327732 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 214998.05326462013,
            "unit": "ns/iter",
            "extra": "iterations: 4074\ncpu: 214988.14432989727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 210451.51214285137,
            "unit": "ns/iter",
            "extra": "iterations: 4200\ncpu: 210444.38095237978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 108883.04653775106,
            "unit": "ns/iter",
            "extra": "iterations: 8015\ncpu: 108879.35121646967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 200530.371571086,
            "unit": "ns/iter",
            "extra": "iterations: 4411\ncpu: 200525.20970301496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 231.2993684235498,
            "unit": "ns/iter",
            "extra": "iterations: 3024337\ncpu: 231.29459448467577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1627.7356875877529,
            "unit": "ns/iter",
            "extra": "iterations: 432352\ncpu: 1625.1431703796957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1324.6068882914412,
            "unit": "ns/iter",
            "extra": "iterations: 528491\ncpu: 1324.5150816191765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1316.8291498112155,
            "unit": "ns/iter",
            "extra": "iterations: 534199\ncpu: 1316.7795147501208 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 935.7778095575167,
            "unit": "ns/iter",
            "extra": "iterations: 748205\ncpu: 935.7682720644776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 10581.256284028492,
            "unit": "ns/iter",
            "extra": "iterations: 65205\ncpu: 10580.710068246324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 13251.888368461015,
            "unit": "ns/iter",
            "extra": "iterations: 51240\ncpu: 13251.370023419151 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 3059.627298171864,
            "unit": "ns/iter",
            "extra": "iterations: 228660\ncpu: 3059.4358436106068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 3037.814832581599,
            "unit": "ns/iter",
            "extra": "iterations: 231396\ncpu: 3037.6644367232097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 3060.0677651841347,
            "unit": "ns/iter",
            "extra": "iterations: 229218\ncpu: 3059.9551518641542 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5630.7942149288465,
            "unit": "ns/iter",
            "extra": "iterations: 124562\ncpu: 5630.581557778479 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5736.794342488674,
            "unit": "ns/iter",
            "extra": "iterations: 121785\ncpu: 5736.366547604412 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1988.4330277155282,
            "unit": "ns/iter",
            "extra": "iterations: 352728\ncpu: 1988.3570343154213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10349.901239126239,
            "unit": "ns/iter",
            "extra": "iterations: 67709\ncpu: 10349.604926966942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8166.194178832929,
            "unit": "ns/iter",
            "extra": "iterations: 85756\ncpu: 8166.0525211064005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 8053.710193041635,
            "unit": "ns/iter",
            "extra": "iterations: 86147\ncpu: 8053.255481908822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 8020.510079399345,
            "unit": "ns/iter",
            "extra": "iterations: 87406\ncpu: 8020.011212044882 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 17675.83665478522,
            "unit": "ns/iter",
            "extra": "iterations: 37032\ncpu: 17675.102613955663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 59402.35274175961,
            "unit": "ns/iter",
            "extra": "iterations: 11799\ncpu: 59400.13560471132 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 47919.61928619901,
            "unit": "ns/iter",
            "extra": "iterations: 14570\ncpu: 47918.64104323964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 47451.05557059719,
            "unit": "ns/iter",
            "extra": "iterations: 14774\ncpu: 47448.18600243635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 47786.190330266574,
            "unit": "ns/iter",
            "extra": "iterations: 14685\ncpu: 47784.50800136138 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 27618.02051665573,
            "unit": "ns/iter",
            "extra": "iterations: 25394\ncpu: 27617.05520989205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 47087.173159880025,
            "unit": "ns/iter",
            "extra": "iterations: 14836\ncpu: 47085.865462389156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 2042.1233321259845,
            "unit": "ns/iter",
            "extra": "iterations: 339579\ncpu: 2042.0432358891685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 10306.349520963477,
            "unit": "ns/iter",
            "extra": "iterations: 68262\ncpu: 10306.083911986236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 8156.304259990829,
            "unit": "ns/iter",
            "extra": "iterations: 85634\ncpu: 8155.616927855825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 8140.5690034835625,
            "unit": "ns/iter",
            "extra": "iterations: 85829\ncpu: 8139.999300935483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 8122.364208622705,
            "unit": "ns/iter",
            "extra": "iterations: 86261\ncpu: 8122.16412979214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 17842.405746538538,
            "unit": "ns/iter",
            "extra": "iterations: 38980\ncpu: 17841.962544894635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 57426.23899891394,
            "unit": "ns/iter",
            "extra": "iterations: 12067\ncpu: 57423.858456948496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 46878.70014068136,
            "unit": "ns/iter",
            "extra": "iterations: 14927\ncpu: 46877.51055134979 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 46289.96604774281,
            "unit": "ns/iter",
            "extra": "iterations: 15080\ncpu: 46288.7732095496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 46782.91952875793,
            "unit": "ns/iter",
            "extra": "iterations: 15024\ncpu: 46781.116879659894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 27505.331187076845,
            "unit": "ns/iter",
            "extra": "iterations: 25626\ncpu: 27503.570592367272 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 45320.75124217666,
            "unit": "ns/iter",
            "extra": "iterations: 15497\ncpu: 45319.24243401874 ns\nthreads: 1"
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
        "date": 1702412573720,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 688.5711662752848,
            "unit": "ns/iter",
            "extra": "iterations: 1017933\ncpu: 688.5352965273746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 6151.803912148904,
            "unit": "ns/iter",
            "extra": "iterations: 133226\ncpu: 6151.4952036389295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 11937.851356807203,
            "unit": "ns/iter",
            "extra": "iterations: 69354\ncpu: 11937.42394094068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 17447.478333611063,
            "unit": "ns/iter",
            "extra": "iterations: 47816\ncpu: 17446.969633595447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 23055.22857063902,
            "unit": "ns/iter",
            "extra": "iterations: 36142\ncpu: 23054.219467655344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 28835.139379077755,
            "unit": "ns/iter",
            "extra": "iterations: 28957\ncpu: 28833.950340159558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 34415.9954943909,
            "unit": "ns/iter",
            "extra": "iterations: 24414\ncpu: 34414.037027934784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 39737.77336269456,
            "unit": "ns/iter",
            "extra": "iterations: 20888\ncpu: 39736.77230945996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 45844.80007517937,
            "unit": "ns/iter",
            "extra": "iterations: 18622\ncpu: 45842.46053055518 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 660.5338132749783,
            "unit": "ns/iter",
            "extra": "iterations: 1061240\ncpu: 660.5260826957144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 519.6971092982558,
            "unit": "ns/iter",
            "extra": "iterations: 1343653\ncpu: 519.6791880046419 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 513.5230885826118,
            "unit": "ns/iter",
            "extra": "iterations: 1365675\ncpu: 513.5155875299768 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 520.2675777900749,
            "unit": "ns/iter",
            "extra": "iterations: 1347055\ncpu: 520.2521797550955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 985.8166997012498,
            "unit": "ns/iter",
            "extra": "iterations: 711881\ncpu: 985.7979072344959 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 2816.2252568843987,
            "unit": "ns/iter",
            "extra": "iterations: 284564\ncpu: 2816.2149815155763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 13558.85019416562,
            "unit": "ns/iter",
            "extra": "iterations: 60258\ncpu: 13558.533306780859 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 11169.038346051242,
            "unit": "ns/iter",
            "extra": "iterations: 72602\ncpu: 11168.590396958765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 11164.507147830289,
            "unit": "ns/iter",
            "extra": "iterations: 73239\ncpu: 11164.068324253487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 10833.917225326337,
            "unit": "ns/iter",
            "extra": "iterations: 75180\ncpu: 10833.764299015686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 43068.854267435345,
            "unit": "ns/iter",
            "extra": "iterations: 19227\ncpu: 43067.46762365429 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 286080.8244203913,
            "unit": "ns/iter",
            "extra": "iterations: 3235\ncpu: 286073.13755796006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 218683.99249247907,
            "unit": "ns/iter",
            "extra": "iterations: 3996\ncpu: 218676.65165165227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 216806.35920751948,
            "unit": "ns/iter",
            "extra": "iterations: 3079\ncpu: 216802.56576810603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 209833.50943876588,
            "unit": "ns/iter",
            "extra": "iterations: 3920\ncpu: 209828.54591836754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 110993.12225188423,
            "unit": "ns/iter",
            "extra": "iterations: 7869\ncpu: 110989.76998347962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 203723.12135355818,
            "unit": "ns/iter",
            "extra": "iterations: 4285\ncpu: 203715.12252041997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5445.934350000243,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5445.510999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 26604.201334105568,
            "unit": "ns/iter",
            "extra": "iterations: 31182\ncpu: 26602.52068501058 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 21987.82414544804,
            "unit": "ns/iter",
            "extra": "iterations: 37622\ncpu: 21987.27074584021 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 21796.65426052985,
            "unit": "ns/iter",
            "extra": "iterations: 37777\ncpu: 21796.01080022236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 21271.96261706145,
            "unit": "ns/iter",
            "extra": "iterations: 39082\ncpu: 21271.549562458404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 56589.58935361297,
            "unit": "ns/iter",
            "extra": "iterations: 14465\ncpu: 56588.59315589346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 304742.82537469297,
            "unit": "ns/iter",
            "extra": "iterations: 2869\ncpu: 304731.9623562223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 222236.93043244112,
            "unit": "ns/iter",
            "extra": "iterations: 3723\ncpu: 222227.66586086355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 229809.03254149185,
            "unit": "ns/iter",
            "extra": "iterations: 3073\ncpu: 229801.0413276932 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 233260.31006713462,
            "unit": "ns/iter",
            "extra": "iterations: 3725\ncpu: 233252.64429530152 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 117818.79935683472,
            "unit": "ns/iter",
            "extra": "iterations: 7152\ncpu: 117813.15715883682 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 227981.22636338885,
            "unit": "ns/iter",
            "extra": "iterations: 3649\ncpu: 227970.3206357905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 891829.2241593113,
            "unit": "ns/iter",
            "extra": "iterations: 803\ncpu: 891789.6637608993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 469126.6970350277,
            "unit": "ns/iter",
            "extra": "iterations: 1855\ncpu: 469099.4609164415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 2850.0343906428166,
            "unit": "ns/iter",
            "extra": "iterations: 278884\ncpu: 2849.9290027394813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 13206.888627336957,
            "unit": "ns/iter",
            "extra": "iterations: 62448\ncpu: 13206.751217012541 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 10679.8197393786,
            "unit": "ns/iter",
            "extra": "iterations: 77277\ncpu: 10679.626538297343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 10573.914863563847,
            "unit": "ns/iter",
            "extra": "iterations: 77875\ncpu: 10573.707865168553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 10262.753237968656,
            "unit": "ns/iter",
            "extra": "iterations: 79834\ncpu: 10262.472129669084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 42050.313487672924,
            "unit": "ns/iter",
            "extra": "iterations: 19870\ncpu: 42048.802214393705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 273160.540717621,
            "unit": "ns/iter",
            "extra": "iterations: 3205\ncpu: 273149.1419656777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 223100.36895416654,
            "unit": "ns/iter",
            "extra": "iterations: 3949\ncpu: 223091.0103823765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 217566.0158527293,
            "unit": "ns/iter",
            "extra": "iterations: 3911\ncpu: 217558.3738174387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 218775.98380265248,
            "unit": "ns/iter",
            "extra": "iterations: 4013\ncpu: 218768.2780961886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 106624.13557430322,
            "unit": "ns/iter",
            "extra": "iterations: 8062\ncpu: 106620.13148102135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 211066.1211479522,
            "unit": "ns/iter",
            "extra": "iterations: 4251\ncpu: 211059.04493060365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 257.6241518915921,
            "unit": "ns/iter",
            "extra": "iterations: 2737268\ncpu: 257.6137959454479 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1733.523160918512,
            "unit": "ns/iter",
            "extra": "iterations: 402769\ncpu: 1733.4608671471767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1389.0832191210675,
            "unit": "ns/iter",
            "extra": "iterations: 504908\ncpu: 1389.033843789362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1427.648011356331,
            "unit": "ns/iter",
            "extra": "iterations: 494533\ncpu: 1427.5991693173162 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 989.9876345902339,
            "unit": "ns/iter",
            "extra": "iterations: 707053\ncpu: 989.9487025725078 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 11252.845270921362,
            "unit": "ns/iter",
            "extra": "iterations: 62380\ncpu: 11252.685155498577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 13938.941953150548,
            "unit": "ns/iter",
            "extra": "iterations: 49305\ncpu: 13938.334854477129 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 3251.9969199225666,
            "unit": "ns/iter",
            "extra": "iterations: 214605\ncpu: 3251.907457887762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 3285.725724951913,
            "unit": "ns/iter",
            "extra": "iterations: 212152\ncpu: 3285.6546249858625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 3268.7472623884155,
            "unit": "ns/iter",
            "extra": "iterations: 213142\ncpu: 3268.7058392996055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5960.895097872553,
            "unit": "ns/iter",
            "extra": "iterations: 117500\ncpu: 5960.7259574468135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 6150.022534592098,
            "unit": "ns/iter",
            "extra": "iterations: 113825\ncpu: 6149.799253239677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 2068.4193313373567,
            "unit": "ns/iter",
            "extra": "iterations: 350012\ncpu: 2068.3410854484937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10073.710288494674,
            "unit": "ns/iter",
            "extra": "iterations: 69048\ncpu: 10073.276561232817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8073.293787481345,
            "unit": "ns/iter",
            "extra": "iterations: 85875\ncpu: 8073.080640465735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 7998.982094043076,
            "unit": "ns/iter",
            "extra": "iterations: 87066\ncpu: 7998.7296993085865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 8076.483161188121,
            "unit": "ns/iter",
            "extra": "iterations: 86942\ncpu: 8076.1070598790175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 18243.440598713274,
            "unit": "ns/iter",
            "extra": "iterations: 38282\ncpu: 18242.88699649975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 62192.542999733094,
            "unit": "ns/iter",
            "extra": "iterations: 11221\ncpu: 62189.77809464456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 49336.110769234336,
            "unit": "ns/iter",
            "extra": "iterations: 13975\ncpu: 49334.98389982092 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 49617.947560289314,
            "unit": "ns/iter",
            "extra": "iterations: 14264\ncpu: 49615.549635445386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 49094.08396200273,
            "unit": "ns/iter",
            "extra": "iterations: 14316\ncpu: 49092.5468007829 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 27152.95724634796,
            "unit": "ns/iter",
            "extra": "iterations: 25261\ncpu: 27151.894224298387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 48197.922371602224,
            "unit": "ns/iter",
            "extra": "iterations: 14505\ncpu: 48196.249569114174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 2005.5626681318263,
            "unit": "ns/iter",
            "extra": "iterations: 347569\ncpu: 2005.4907083198013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 10408.063924013844,
            "unit": "ns/iter",
            "extra": "iterations: 67064\ncpu: 10407.655373971187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 8244.040838157542,
            "unit": "ns/iter",
            "extra": "iterations: 84137\ncpu: 8243.58605607513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 8263.295375089878,
            "unit": "ns/iter",
            "extra": "iterations: 84953\ncpu: 8263.127847162526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 8221.451055230898,
            "unit": "ns/iter",
            "extra": "iterations: 84626\ncpu: 8221.303145605498 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 18295.253520390826,
            "unit": "ns/iter",
            "extra": "iterations: 38206\ncpu: 18294.43019421052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 61284.28776282309,
            "unit": "ns/iter",
            "extra": "iterations: 11367\ncpu: 61282.264449722956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 48630.72770510949,
            "unit": "ns/iter",
            "extra": "iterations: 14297\ncpu: 48628.005875358904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 52985.749000004034,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 52984.46999999981 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 47685.1695378701,
            "unit": "ns/iter",
            "extra": "iterations: 14628\ncpu: 47683.25129887894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 27644.682423722,
            "unit": "ns/iter",
            "extra": "iterations: 25597\ncpu: 27644.223932491823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 45628.13376740382,
            "unit": "ns/iter",
            "extra": "iterations: 15512\ncpu: 45626.65678184687 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}