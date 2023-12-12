window.BENCHMARK_DATA = {
  "lastUpdate": 1702397921244,
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
      }
    ]
  }
}