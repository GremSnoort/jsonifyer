window.BENCHMARK_DATA = {
  "lastUpdate": 1702479566134,
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
        "date": 1702416021046,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 704.2534020079298,
            "unit": "ns/iter",
            "extra": "iterations: 990371\ncpu: 704.230838746288 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 6162.092342921411,
            "unit": "ns/iter",
            "extra": "iterations: 132322\ncpu: 6161.618627287979 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 11922.098477681315,
            "unit": "ns/iter",
            "extra": "iterations: 69762\ncpu: 11921.503110575955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 17552.1515935085,
            "unit": "ns/iter",
            "extra": "iterations: 47568\ncpu: 17550.71897073663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 22993.71382984536,
            "unit": "ns/iter",
            "extra": "iterations: 36038\ncpu: 22992.24152283702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 28888.386368336996,
            "unit": "ns/iter",
            "extra": "iterations: 29006\ncpu: 28886.244225332674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 34371.443945238505,
            "unit": "ns/iter",
            "extra": "iterations: 23593\ncpu: 34370.22421904801 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 40250.709627999204,
            "unit": "ns/iter",
            "extra": "iterations: 20887\ncpu: 40247.531957676976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 46892.180952885945,
            "unit": "ns/iter",
            "extra": "iterations: 18806\ncpu: 46889.955333404265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 657.7584007344735,
            "unit": "ns/iter",
            "extra": "iterations: 1065264\ncpu: 657.733200408536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 518.7340488871397,
            "unit": "ns/iter",
            "extra": "iterations: 1350376\ncpu: 518.7124919281746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 475.4466096490898,
            "unit": "ns/iter",
            "extra": "iterations: 1362971\ncpu: 475.39734887976255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 508.9528562533958,
            "unit": "ns/iter",
            "extra": "iterations: 1376471\ncpu: 508.921873399439 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 981.6491777844695,
            "unit": "ns/iter",
            "extra": "iterations: 714168\ncpu: 981.5785641473719 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 2705.327432761183,
            "unit": "ns/iter",
            "extra": "iterations: 295960\ncpu: 2705.2057710501404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 12850.1895408404,
            "unit": "ns/iter",
            "extra": "iterations: 63638\ncpu: 12849.649580439365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 10808.451185632548,
            "unit": "ns/iter",
            "extra": "iterations: 75951\ncpu: 10807.902463430351 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 10904.40760188397,
            "unit": "ns/iter",
            "extra": "iterations: 75797\ncpu: 10904.12681240683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 10560.31546065694,
            "unit": "ns/iter",
            "extra": "iterations: 77791\ncpu: 10559.88224858917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 43418.805644611,
            "unit": "ns/iter",
            "extra": "iterations: 19027\ncpu: 43416.12971041152 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 280113.88688945206,
            "unit": "ns/iter",
            "extra": "iterations: 3112\ncpu: 280100.2249357323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 216604.52726802952,
            "unit": "ns/iter",
            "extra": "iterations: 3869\ncpu: 216582.60532437274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 210108.21375225508,
            "unit": "ns/iter",
            "extra": "iterations: 3883\ncpu: 210095.82796806569 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 214768.54716023844,
            "unit": "ns/iter",
            "extra": "iterations: 3944\ncpu: 214751.2423935091 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 111450.99157840952,
            "unit": "ns/iter",
            "extra": "iterations: 7837\ncpu: 111444.3409467908 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 224178.76761433927,
            "unit": "ns/iter",
            "extra": "iterations: 4045\ncpu: 224152.83065513003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5366.975009999919,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5366.827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 27152.659208767258,
            "unit": "ns/iter",
            "extra": "iterations: 30661\ncpu: 27151.5508300447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 22073.107080572914,
            "unit": "ns/iter",
            "extra": "iterations: 37271\ncpu: 22071.80381529876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 21755.508375410718,
            "unit": "ns/iter",
            "extra": "iterations: 37431\ncpu: 21753.901846063436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 21449.245232167432,
            "unit": "ns/iter",
            "extra": "iterations: 38959\ncpu: 21448.00944582765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 56846.374855824426,
            "unit": "ns/iter",
            "extra": "iterations: 14739\ncpu: 56841.65818576562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 304118.49930021213,
            "unit": "ns/iter",
            "extra": "iterations: 2858\ncpu: 304100.3149055288 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 232060.05273069738,
            "unit": "ns/iter",
            "extra": "iterations: 3717\ncpu: 232039.1982781807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 235565.2169582802,
            "unit": "ns/iter",
            "extra": "iterations: 3715\ncpu: 235561.9919246309 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 233783.5056119689,
            "unit": "ns/iter",
            "extra": "iterations: 3742\ncpu: 233778.22020309983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 122506.3170457764,
            "unit": "ns/iter",
            "extra": "iterations: 7122\ncpu: 122502.85032294324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 227177.45499869616,
            "unit": "ns/iter",
            "extra": "iterations: 3811\ncpu: 227171.844660194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 874438.2217111532,
            "unit": "ns/iter",
            "extra": "iterations: 1087\ncpu: 874418.1232750651 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 485596.4585635272,
            "unit": "ns/iter",
            "extra": "iterations: 1810\ncpu: 485585.69060773414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 2854.072461830369,
            "unit": "ns/iter",
            "extra": "iterations: 284191\ncpu: 2853.957021862065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 13049.70399207238,
            "unit": "ns/iter",
            "extra": "iterations: 63576\ncpu: 13049.331508745421 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 10618.706050543376,
            "unit": "ns/iter",
            "extra": "iterations: 77993\ncpu: 10618.517046401601 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 10959.168995095952,
            "unit": "ns/iter",
            "extra": "iterations: 75659\ncpu: 10958.973816730382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 10298.26558773834,
            "unit": "ns/iter",
            "extra": "iterations: 80512\ncpu: 10297.950616057296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 42292.416365097895,
            "unit": "ns/iter",
            "extra": "iterations: 19896\ncpu: 42291.75713711283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 293628.9165016411,
            "unit": "ns/iter",
            "extra": "iterations: 3030\ncpu: 293624.15841584106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 222393.35334346475,
            "unit": "ns/iter",
            "extra": "iterations: 3948\ncpu: 222389.96960486282 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 222734.66607414995,
            "unit": "ns/iter",
            "extra": "iterations: 3938\ncpu: 222726.7902488567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 223716.52779193403,
            "unit": "ns/iter",
            "extra": "iterations: 3922\ncpu: 223714.73737888894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 109349.05314133223,
            "unit": "ns/iter",
            "extra": "iterations: 7847\ncpu: 109347.27921498632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 213843.95773271399,
            "unit": "ns/iter",
            "extra": "iterations: 4093\ncpu: 213840.55704861993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 258.81457672126066,
            "unit": "ns/iter",
            "extra": "iterations: 2706219\ncpu: 258.80787918494434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1687.636238870093,
            "unit": "ns/iter",
            "extra": "iterations: 415322\ncpu: 1687.6235788135375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1397.0776487185651,
            "unit": "ns/iter",
            "extra": "iterations: 500459\ncpu: 1397.0519063499667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1351.0501240799404,
            "unit": "ns/iter",
            "extra": "iterations: 518214\ncpu: 1351.0287255844119 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 970.0882139318687,
            "unit": "ns/iter",
            "extra": "iterations: 703551\ncpu: 970.0182360624827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 11309.828840268787,
            "unit": "ns/iter",
            "extra": "iterations: 61428\ncpu: 11309.318226216072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 14286.292049778256,
            "unit": "ns/iter",
            "extra": "iterations: 48615\ncpu: 14285.580582124861 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 3340.7946529138653,
            "unit": "ns/iter",
            "extra": "iterations: 225506\ncpu: 3340.608232153473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 3406.1288075838024,
            "unit": "ns/iter",
            "extra": "iterations: 208761\ncpu: 3406.038963216306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 3311.2471325624824,
            "unit": "ns/iter",
            "extra": "iterations: 212036\ncpu: 3311.1235827878295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 6057.235199582775,
            "unit": "ns/iter",
            "extra": "iterations: 115115\ncpu: 6057.101159709872 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 6238.172453262292,
            "unit": "ns/iter",
            "extra": "iterations: 112703\ncpu: 6237.737238582803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1967.0878179850215,
            "unit": "ns/iter",
            "extra": "iterations: 350213\ncpu: 1966.9875190241228 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10244.809499466923,
            "unit": "ns/iter",
            "extra": "iterations: 68467\ncpu: 10243.964245548987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8121.336983291354,
            "unit": "ns/iter",
            "extra": "iterations: 86485\ncpu: 8120.985141932006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 8128.415587112459,
            "unit": "ns/iter",
            "extra": "iterations: 86687\ncpu: 8128.210689030706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 8125.117145739541,
            "unit": "ns/iter",
            "extra": "iterations: 86243\ncpu: 8124.4472015120355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 18430.17316996192,
            "unit": "ns/iter",
            "extra": "iterations: 38032\ncpu: 18429.309528817717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 63187.76146956868,
            "unit": "ns/iter",
            "extra": "iterations: 10942\ncpu: 63183.092670443504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 50073.96972099814,
            "unit": "ns/iter",
            "extra": "iterations: 13871\ncpu: 50070.038209214006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 52047.548300004106,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 52047.1999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 49382.78332628098,
            "unit": "ns/iter",
            "extra": "iterations: 14178\ncpu: 49380.41331640638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 27618.01408842048,
            "unit": "ns/iter",
            "extra": "iterations: 25198\ncpu: 27617.092626399157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 48811.10792813972,
            "unit": "ns/iter",
            "extra": "iterations: 14417\ncpu: 48807.69924394757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 2025.260825739732,
            "unit": "ns/iter",
            "extra": "iterations: 346235\ncpu: 2025.1667220240388 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 10606.848180735375,
            "unit": "ns/iter",
            "extra": "iterations: 65466\ncpu: 10606.401796352231 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 8440.347198519203,
            "unit": "ns/iter",
            "extra": "iterations: 83206\ncpu: 8439.951445809236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 8268.655659986865,
            "unit": "ns/iter",
            "extra": "iterations: 84585\ncpu: 8268.04516167183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 8289.456975144258,
            "unit": "ns/iter",
            "extra": "iterations: 85009\ncpu: 8288.943523627004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 18477.49692606782,
            "unit": "ns/iter",
            "extra": "iterations: 38062\ncpu: 18476.51463401812 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 61762.14077154514,
            "unit": "ns/iter",
            "extra": "iterations: 11302\ncpu: 61758.96301539596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 49217.25068176957,
            "unit": "ns/iter",
            "extra": "iterations: 14301\ncpu: 49214.30669184016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 48767.70958021309,
            "unit": "ns/iter",
            "extra": "iterations: 14269\ncpu: 48765.33744481062 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 47891.184601680434,
            "unit": "ns/iter",
            "extra": "iterations: 14599\ncpu: 47887.38269744512 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 27809.2024483936,
            "unit": "ns/iter",
            "extra": "iterations: 25241\ncpu: 27807.92361633876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 47836.78077365618,
            "unit": "ns/iter",
            "extra": "iterations: 14761\ncpu: 47834.923108191266 ns\nthreads: 1"
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
        "date": 1702418362494,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 686.3091998731692,
            "unit": "ns/iter",
            "extra": "iterations: 1018351\ncpu: 686.3033472741718 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 6235.906212867741,
            "unit": "ns/iter",
            "extra": "iterations: 132129\ncpu: 6235.883114229274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 11847.18615865163,
            "unit": "ns/iter",
            "extra": "iterations: 69473\ncpu: 11846.83690066645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 17574.869870421888,
            "unit": "ns/iter",
            "extra": "iterations: 47153\ncpu: 17574.63788094076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 24689.72066383577,
            "unit": "ns/iter",
            "extra": "iterations: 35792\ncpu: 24689.357957085387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 28820.19507337593,
            "unit": "ns/iter",
            "extra": "iterations: 28620\ncpu: 28819.78336827396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 34466.84391469242,
            "unit": "ns/iter",
            "extra": "iterations: 24288\ncpu: 34466.08613306984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 39963.6935662933,
            "unit": "ns/iter",
            "extra": "iterations: 20719\ncpu: 39962.020367778336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 44768.142771901315,
            "unit": "ns/iter",
            "extra": "iterations: 18435\ncpu: 44767.24708435045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 660.4783664838808,
            "unit": "ns/iter",
            "extra": "iterations: 1058404\ncpu: 660.4678364783201 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 523.2916493715919,
            "unit": "ns/iter",
            "extra": "iterations: 1339492\ncpu: 523.2862159684411 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 514.1056214245922,
            "unit": "ns/iter",
            "extra": "iterations: 1358588\ncpu: 514.0944863343425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 520.210823977996,
            "unit": "ns/iter",
            "extra": "iterations: 1344866\ncpu: 520.1997819857153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 986.2335839333253,
            "unit": "ns/iter",
            "extra": "iterations: 699787\ncpu: 986.2378123629062 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 2849.0430562467654,
            "unit": "ns/iter",
            "extra": "iterations: 281260\ncpu: 2848.989902581242 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 13717.536027288237,
            "unit": "ns/iter",
            "extra": "iterations: 59219\ncpu: 13717.58894949256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 11279.224740031908,
            "unit": "ns/iter",
            "extra": "iterations: 71932\ncpu: 11278.994049936053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 11335.557505146695,
            "unit": "ns/iter",
            "extra": "iterations: 71411\ncpu: 11335.381103751486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 11023.565255553107,
            "unit": "ns/iter",
            "extra": "iterations: 74055\ncpu: 11023.378569981765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 43495.39854153573,
            "unit": "ns/iter",
            "extra": "iterations: 18924\ncpu: 43493.09871063194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 281347.5165116988,
            "unit": "ns/iter",
            "extra": "iterations: 3119\ncpu: 281337.5761462004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 215824.50579448746,
            "unit": "ns/iter",
            "extra": "iterations: 3883\ncpu: 215813.77800669623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 221859.93643410955,
            "unit": "ns/iter",
            "extra": "iterations: 3870\ncpu: 221846.45994832084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 216696.95073133102,
            "unit": "ns/iter",
            "extra": "iterations: 3897\ncpu: 216688.27303053683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 112427.96286232042,
            "unit": "ns/iter",
            "extra": "iterations: 7728\ncpu: 112424.2494824017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 213976.47257591636,
            "unit": "ns/iter",
            "extra": "iterations: 4084\ncpu: 213967.72771792376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5366.357789999938,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5366.103999999971 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 26918.069924836203,
            "unit": "ns/iter",
            "extra": "iterations: 30733\ncpu: 26916.607555396455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 21905.730817143096,
            "unit": "ns/iter",
            "extra": "iterations: 37729\ncpu: 21904.66749715077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 21803.065182196333,
            "unit": "ns/iter",
            "extra": "iterations: 37679\ncpu: 21801.642824915736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 21500.367552250824,
            "unit": "ns/iter",
            "extra": "iterations: 38468\ncpu: 21499.57107205991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 57661.07451626146,
            "unit": "ns/iter",
            "extra": "iterations: 14574\ncpu: 57657.90448744327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 297038.30407524627,
            "unit": "ns/iter",
            "extra": "iterations: 2871\ncpu: 297032.88052943273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 237256.22279651277,
            "unit": "ns/iter",
            "extra": "iterations: 3676\ncpu: 237254.43416757393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 235761.21409140417,
            "unit": "ns/iter",
            "extra": "iterations: 3676\ncpu: 235752.01305767117 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 234446.59021241887,
            "unit": "ns/iter",
            "extra": "iterations: 3719\ncpu: 234445.254100564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 119340.99591434716,
            "unit": "ns/iter",
            "extra": "iterations: 7098\ncpu: 119337.70076077791 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 226453.48774765694,
            "unit": "ns/iter",
            "extra": "iterations: 3836\ncpu: 226454.35349322186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 867294.2610700759,
            "unit": "ns/iter",
            "extra": "iterations: 1084\ncpu: 867265.4981549758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 467186.800210297,
            "unit": "ns/iter",
            "extra": "iterations: 1902\ncpu: 467176.6561514203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 2904.453150090269,
            "unit": "ns/iter",
            "extra": "iterations: 276500\ncpu: 2904.4473779385094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 13439.895507622707,
            "unit": "ns/iter",
            "extra": "iterations: 61660\ncpu: 13439.66590982808 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 10720.520023847776,
            "unit": "ns/iter",
            "extra": "iterations: 77158\ncpu: 10720.490422250445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 10897.986856197958,
            "unit": "ns/iter",
            "extra": "iterations: 75625\ncpu: 10897.810247933821 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 10534.38310338304,
            "unit": "ns/iter",
            "extra": "iterations: 79365\ncpu: 10534.35393435392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 42515.12951898665,
            "unit": "ns/iter",
            "extra": "iterations: 19750\ncpu: 42514.43037974694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 295960.3524288066,
            "unit": "ns/iter",
            "extra": "iterations: 2985\ncpu: 295959.39698492474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 224377.91946137662,
            "unit": "ns/iter",
            "extra": "iterations: 3936\ncpu: 224372.48475609638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 219473.7900636955,
            "unit": "ns/iter",
            "extra": "iterations: 3925\ncpu: 219474.6751592359 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 211782.33702213663,
            "unit": "ns/iter",
            "extra": "iterations: 3976\ncpu: 211776.0563380288 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 107086.6515657919,
            "unit": "ns/iter",
            "extra": "iterations: 8079\ncpu: 107085.64178735044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 210938.008616566,
            "unit": "ns/iter",
            "extra": "iterations: 4178\ncpu: 210933.96361895645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 255.31623750637206,
            "unit": "ns/iter",
            "extra": "iterations: 2729594\ncpu: 255.31734756157823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1720.856266096809,
            "unit": "ns/iter",
            "extra": "iterations: 401478\ncpu: 1720.8163336471805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1237.0922963110181,
            "unit": "ns/iter",
            "extra": "iterations: 565028\ncpu: 1237.0432969693625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1353.7559275484994,
            "unit": "ns/iter",
            "extra": "iterations: 516318\ncpu: 1353.7201879461836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 986.9896293946098,
            "unit": "ns/iter",
            "extra": "iterations: 706034\ncpu: 986.9460960803611 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 11432.963360899717,
            "unit": "ns/iter",
            "extra": "iterations: 62638\ncpu: 11433.008716753491 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 13896.576467030016,
            "unit": "ns/iter",
            "extra": "iterations: 49590\ncpu: 13896.418632788864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 3296.1537496582273,
            "unit": "ns/iter",
            "extra": "iterations: 212046\ncpu: 3296.1192382784798 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 3295.817992103724,
            "unit": "ns/iter",
            "extra": "iterations: 212760\ncpu: 3295.8060725700266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 3266.717715177894,
            "unit": "ns/iter",
            "extra": "iterations: 215194\ncpu: 3266.677509595995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5706.669297759183,
            "unit": "ns/iter",
            "extra": "iterations: 122636\ncpu: 5706.455690009416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 6117.325497446795,
            "unit": "ns/iter",
            "extra": "iterations: 113580\ncpu: 6117.04701531964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 2007.254057496179,
            "unit": "ns/iter",
            "extra": "iterations: 348614\ncpu: 2007.2122748943073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10037.01490560737,
            "unit": "ns/iter",
            "extra": "iterations: 67961\ncpu: 10036.492988625985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8113.244976332033,
            "unit": "ns/iter",
            "extra": "iterations: 86192\ncpu: 8113.20540189347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 8096.452664678434,
            "unit": "ns/iter",
            "extra": "iterations: 86183\ncpu: 8096.368193263225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 8119.795897855156,
            "unit": "ns/iter",
            "extra": "iterations: 85565\ncpu: 8119.482264944794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 18386.166321256424,
            "unit": "ns/iter",
            "extra": "iterations: 38119\ncpu: 18385.395734410893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 58866.189555995494,
            "unit": "ns/iter",
            "extra": "iterations: 11126\ncpu: 58862.82581341036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 50100.389363994764,
            "unit": "ns/iter",
            "extra": "iterations: 13915\ncpu: 50100.172475745625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 47674.88947621563,
            "unit": "ns/iter",
            "extra": "iterations: 14567\ncpu: 47672.52694446371 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 47437.28875008385,
            "unit": "ns/iter",
            "extra": "iterations: 14729\ncpu: 47435.80012220768 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 27303.668108319023,
            "unit": "ns/iter",
            "extra": "iterations: 25665\ncpu: 27302.154685369118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 48917.07273613214,
            "unit": "ns/iter",
            "extra": "iterations: 14367\ncpu: 48915.92538456161 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 2023.732397839365,
            "unit": "ns/iter",
            "extra": "iterations: 348764\ncpu: 2023.6294456996643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 10452.602026460912,
            "unit": "ns/iter",
            "extra": "iterations: 66816\ncpu: 10452.397629310366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 8296.08575157213,
            "unit": "ns/iter",
            "extra": "iterations: 84290\ncpu: 8295.695812077467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 8256.284567538392,
            "unit": "ns/iter",
            "extra": "iterations: 85210\ncpu: 8256.15890153736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 8203.95551977221,
            "unit": "ns/iter",
            "extra": "iterations: 85701\ncpu: 8203.667401780625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 18385.14429063058,
            "unit": "ns/iter",
            "extra": "iterations: 38069\ncpu: 18384.32582941508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 61993.23322371449,
            "unit": "ns/iter",
            "extra": "iterations: 11251\ncpu: 61990.169762687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 49334.09893444037,
            "unit": "ns/iter",
            "extra": "iterations: 14171\ncpu: 49332.98285230471 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 46031.33592041142,
            "unit": "ns/iter",
            "extra": "iterations: 14173\ncpu: 46031.1225569743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 47852.1691398708,
            "unit": "ns/iter",
            "extra": "iterations: 14556\ncpu: 47849.587798845714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 27755.26325629609,
            "unit": "ns/iter",
            "extra": "iterations: 25139\ncpu: 27754.08329686967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 47684.39607289477,
            "unit": "ns/iter",
            "extra": "iterations: 14871\ncpu: 47682.70459283104 ns\nthreads: 1"
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
        "date": 1702453374049,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 714.1168547375842,
            "unit": "ns/iter",
            "extra": "iterations: 977025\ncpu: 714.1082367390803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 6465.914308126496,
            "unit": "ns/iter",
            "extra": "iterations: 127480\ncpu: 6465.958581738312 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 12264.19278562525,
            "unit": "ns/iter",
            "extra": "iterations: 67116\ncpu: 12264.221646105247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 18211.129062657754,
            "unit": "ns/iter",
            "extra": "iterations: 45629\ncpu: 18211.23408358719 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 24859.889873562857,
            "unit": "ns/iter",
            "extra": "iterations: 34642\ncpu: 24859.78292246407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 29544.36139681186,
            "unit": "ns/iter",
            "extra": "iterations: 28293\ncpu: 29543.954334994516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 35328.59152627738,
            "unit": "ns/iter",
            "extra": "iterations: 23862\ncpu: 35328.00268208867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 40887.69278782722,
            "unit": "ns/iter",
            "extra": "iterations: 20507\ncpu: 40887.03857219489 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 45887.17471403472,
            "unit": "ns/iter",
            "extra": "iterations: 18184\ncpu: 45887.23053233616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 661.233168499743,
            "unit": "ns/iter",
            "extra": "iterations: 1060868\ncpu: 661.2312747674548 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 520.3555791913102,
            "unit": "ns/iter",
            "extra": "iterations: 1345419\ncpu: 520.360274382924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 518.4892645894128,
            "unit": "ns/iter",
            "extra": "iterations: 1352673\ncpu: 518.4927177521841 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 521.1448700090368,
            "unit": "ns/iter",
            "extra": "iterations: 1346055\ncpu: 521.1326431683702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 990.0104203171309,
            "unit": "ns/iter",
            "extra": "iterations: 699115\ncpu: 990.0148044313165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 2849.380856434029,
            "unit": "ns/iter",
            "extra": "iterations: 280909\ncpu: 2849.276812063691 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 13699.224126332956,
            "unit": "ns/iter",
            "extra": "iterations: 59462\ncpu: 13698.881638693625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 11218.716086020202,
            "unit": "ns/iter",
            "extra": "iterations: 72448\ncpu: 11218.418727915214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 11447.489284657111,
            "unit": "ns/iter",
            "extra": "iterations: 70973\ncpu: 11447.147506798328 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 10821.748257175163,
            "unit": "ns/iter",
            "extra": "iterations: 74735\ncpu: 10821.376864922708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 43331.60666944863,
            "unit": "ns/iter",
            "extra": "iterations: 19162\ncpu: 43330.46132971501 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 271053.4897693928,
            "unit": "ns/iter",
            "extra": "iterations: 3079\ncpu: 271044.3325755118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 215577.70960186207,
            "unit": "ns/iter",
            "extra": "iterations: 3843\ncpu: 215571.14233671592 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 218066.41569238846,
            "unit": "ns/iter",
            "extra": "iterations: 3849\ncpu: 218063.34112756496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 207684.73543927935,
            "unit": "ns/iter",
            "extra": "iterations: 4052\ncpu: 207679.24481737378 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 109490.70423420375,
            "unit": "ns/iter",
            "extra": "iterations: 7959\ncpu: 109487.76228169388 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 202366.1700824469,
            "unit": "ns/iter",
            "extra": "iterations: 4245\ncpu: 202358.20965842114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5425.514410000004,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5425.276999999973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 26869.386817619692,
            "unit": "ns/iter",
            "extra": "iterations: 30738\ncpu: 26868.498275749913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 21869.420110631363,
            "unit": "ns/iter",
            "extra": "iterations: 37602\ncpu: 21868.3580660603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 22035.38894207718,
            "unit": "ns/iter",
            "extra": "iterations: 37602\ncpu: 22034.69496303382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 21264.97144193534,
            "unit": "ns/iter",
            "extra": "iterations: 38483\ncpu: 21264.498609775797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 57364.519698645054,
            "unit": "ns/iter",
            "extra": "iterations: 14468\ncpu: 57365.3787669338 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 309127.7876857667,
            "unit": "ns/iter",
            "extra": "iterations: 2826\ncpu: 309117.5159235661 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 233200.71091844936,
            "unit": "ns/iter",
            "extra": "iterations: 3691\ncpu: 233188.9460850715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 236357.41251701204,
            "unit": "ns/iter",
            "extra": "iterations: 3675\ncpu: 236351.59183673488 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 235012.54209391912,
            "unit": "ns/iter",
            "extra": "iterations: 3706\ncpu: 235005.58553696773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 123002.8835481951,
            "unit": "ns/iter",
            "extra": "iterations: 7136\ncpu: 123000.53251121068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 225949.19707647306,
            "unit": "ns/iter",
            "extra": "iterations: 3831\ncpu: 225934.27303576047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 864082.7396122165,
            "unit": "ns/iter",
            "extra": "iterations: 1083\ncpu: 864066.2049861512 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 471212.1533406377,
            "unit": "ns/iter",
            "extra": "iterations: 1826\ncpu: 471191.4019715201 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 2831.6100865052445,
            "unit": "ns/iter",
            "extra": "iterations: 282873\ncpu: 2831.526868948246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 12815.854257742394,
            "unit": "ns/iter",
            "extra": "iterations: 64964\ncpu: 12815.577858506322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 10375.901594808094,
            "unit": "ns/iter",
            "extra": "iterations: 79508\ncpu: 10375.695527494132 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 10805.44396450536,
            "unit": "ns/iter",
            "extra": "iterations: 76630\ncpu: 10805.080255774537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 10361.78302513631,
            "unit": "ns/iter",
            "extra": "iterations: 79765\ncpu: 10361.548298125757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 42724.91949198987,
            "unit": "ns/iter",
            "extra": "iterations: 18110\ncpu: 42723.91496410832 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 294954.95283959224,
            "unit": "ns/iter",
            "extra": "iterations: 3011\ncpu: 294950.9133178337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 223378.0461811933,
            "unit": "ns/iter",
            "extra": "iterations: 3941\ncpu: 223368.43440751176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 224217.8937468479,
            "unit": "ns/iter",
            "extra": "iterations: 3934\ncpu: 224218.14946619168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 217292.971964934,
            "unit": "ns/iter",
            "extra": "iterations: 3995\ncpu: 217294.4931163951 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 109222.44782387384,
            "unit": "ns/iter",
            "extra": "iterations: 7858\ncpu: 109224.07737337716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 202610.444928608,
            "unit": "ns/iter",
            "extra": "iterations: 4131\ncpu: 202610.11861534652 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 257.4470243342203,
            "unit": "ns/iter",
            "extra": "iterations: 2721391\ncpu: 257.44488755934185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1732.436615871878,
            "unit": "ns/iter",
            "extra": "iterations: 417431\ncpu: 1732.4489556357892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1251.4104150835133,
            "unit": "ns/iter",
            "extra": "iterations: 559285\ncpu: 1251.3734500299468 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1417.4159241468774,
            "unit": "ns/iter",
            "extra": "iterations: 495273\ncpu: 1417.360930234434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 998.4432080050747,
            "unit": "ns/iter",
            "extra": "iterations: 699949\ncpu: 998.423599433681 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 12013.520122112308,
            "unit": "ns/iter",
            "extra": "iterations: 60928\ncpu: 12013.010438550376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 14605.556295297574,
            "unit": "ns/iter",
            "extra": "iterations: 47464\ncpu: 14605.21869206135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 3412.0995887135286,
            "unit": "ns/iter",
            "extra": "iterations: 205696\ncpu: 3411.972522557584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 3301.4665977875925,
            "unit": "ns/iter",
            "extra": "iterations: 207127\ncpu: 3301.3943136336547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 3378.757810701852,
            "unit": "ns/iter",
            "extra": "iterations: 208560\ncpu: 3378.663214422698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 6032.850581320016,
            "unit": "ns/iter",
            "extra": "iterations: 116545\ncpu: 6032.7298468403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 6307.617321077145,
            "unit": "ns/iter",
            "extra": "iterations: 112060\ncpu: 6307.646796359129 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 2001.1766716574455,
            "unit": "ns/iter",
            "extra": "iterations: 349309\ncpu: 2001.1645849377019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10158.989206183416,
            "unit": "ns/iter",
            "extra": "iterations: 69021\ncpu: 10158.60100549118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8135.18688182108,
            "unit": "ns/iter",
            "extra": "iterations: 86140\ncpu: 8134.9419549571185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 8207.87834227689,
            "unit": "ns/iter",
            "extra": "iterations: 85346\ncpu: 8207.712136479839 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 8056.682055117648,
            "unit": "ns/iter",
            "extra": "iterations: 86905\ncpu: 8056.570968298755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 18422.062682022544,
            "unit": "ns/iter",
            "extra": "iterations: 38113\ncpu: 18421.94264424188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 62449.423339925364,
            "unit": "ns/iter",
            "extra": "iterations: 11114\ncpu: 62447.21072521167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 49821.25871428674,
            "unit": "ns/iter",
            "extra": "iterations: 14000\ncpu: 49819.57857142914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 49381.548398481165,
            "unit": "ns/iter",
            "extra": "iterations: 14174\ncpu: 49380.351347537275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 49361.901063529855,
            "unit": "ns/iter",
            "extra": "iterations: 14292\ncpu: 49361.670864819615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 27747.703370434225,
            "unit": "ns/iter",
            "extra": "iterations: 25338\ncpu: 27747.24129765582 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 48332.878263398714,
            "unit": "ns/iter",
            "extra": "iterations: 13751\ncpu: 48331.20500327195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 2001.105077127194,
            "unit": "ns/iter",
            "extra": "iterations: 345727\ncpu: 2001.058349506977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 10417.494354180704,
            "unit": "ns/iter",
            "extra": "iterations: 67395\ncpu: 10417.15705912907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 8282.096255036553,
            "unit": "ns/iter",
            "extra": "iterations: 84380\ncpu: 8281.926996918743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 8333.497430493893,
            "unit": "ns/iter",
            "extra": "iterations: 84452\ncpu: 8333.411878937251 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 8240.334170232763,
            "unit": "ns/iter",
            "extra": "iterations: 84837\ncpu: 8240.372714735173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 18185.89304365999,
            "unit": "ns/iter",
            "extra": "iterations: 38296\ncpu: 18185.45540004164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 57491.380557403194,
            "unit": "ns/iter",
            "extra": "iterations: 12056\ncpu: 57489.25846051732 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 45570.82775398793,
            "unit": "ns/iter",
            "extra": "iterations: 15414\ncpu: 45569.36551187224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 47943.83821343308,
            "unit": "ns/iter",
            "extra": "iterations: 15471\ncpu: 47944.24406954942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 47683.532912161085,
            "unit": "ns/iter",
            "extra": "iterations: 14721\ncpu: 47682.412879560405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 27510.403583048872,
            "unit": "ns/iter",
            "extra": "iterations: 25509\ncpu: 27509.698537770757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 45424.61474571875,
            "unit": "ns/iter",
            "extra": "iterations: 15652\ncpu: 45422.5849731662 ns\nthreads: 1"
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
        "date": 1702479562795,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 702.0184510633945,
            "unit": "ns/iter",
            "extra": "iterations: 999292\ncpu: 701.9769997157989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 6294.353286847221,
            "unit": "ns/iter",
            "extra": "iterations: 129501\ncpu: 6294.031706318869 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 12165.304357456316,
            "unit": "ns/iter",
            "extra": "iterations: 67723\ncpu: 12164.839124078972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 18278.002848879107,
            "unit": "ns/iter",
            "extra": "iterations: 46334\ncpu: 18277.16795441792 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 24004.76083711332,
            "unit": "ns/iter",
            "extra": "iterations: 34834\ncpu: 24003.00281334329 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 30180.131635871257,
            "unit": "ns/iter",
            "extra": "iterations: 28199\ncpu: 30178.102060356738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 35278.14257061705,
            "unit": "ns/iter",
            "extra": "iterations: 23932\ncpu: 35275.98194885509 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 41093.62259650176,
            "unit": "ns/iter",
            "extra": "iterations: 20543\ncpu: 41091.052913401196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 46593.49716792808,
            "unit": "ns/iter",
            "extra": "iterations: 18008\ncpu: 46591.98134162595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 660.6932454748435,
            "unit": "ns/iter",
            "extra": "iterations: 1056092\ncpu: 660.6895043234875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 520.6148693058659,
            "unit": "ns/iter",
            "extra": "iterations: 1346465\ncpu: 520.6015752358952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 513.3831689840911,
            "unit": "ns/iter",
            "extra": "iterations: 1356258\ncpu: 513.3688428012963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 519.6340471260202,
            "unit": "ns/iter",
            "extra": "iterations: 1348384\ncpu: 519.618966110544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 982.4183626040292,
            "unit": "ns/iter",
            "extra": "iterations: 712143\ncpu: 982.396653481114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 2736.7339357498977,
            "unit": "ns/iter",
            "extra": "iterations: 294038\ncpu: 2736.7194036144983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 13479.36679511161,
            "unit": "ns/iter",
            "extra": "iterations: 60467\ncpu: 13478.851274248758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 11238.441980600188,
            "unit": "ns/iter",
            "extra": "iterations: 72786\ncpu: 11238.242244387688 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 10828.330272442758,
            "unit": "ns/iter",
            "extra": "iterations: 75686\ncpu: 10827.952329360764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 10485.704117782467,
            "unit": "ns/iter",
            "extra": "iterations: 77906\ncpu: 10485.316920391217 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 43006.21770546553,
            "unit": "ns/iter",
            "extra": "iterations: 19237\ncpu: 43005.29188542905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 285528.83659491234,
            "unit": "ns/iter",
            "extra": "iterations: 3066\ncpu: 285523.18982387485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 216940.9647850855,
            "unit": "ns/iter",
            "extra": "iterations: 3862\ncpu: 216934.67115484204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 217923.75443168645,
            "unit": "ns/iter",
            "extra": "iterations: 3836\ncpu: 217921.03753910417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 217812.3773827842,
            "unit": "ns/iter",
            "extra": "iterations: 3882\ncpu: 217802.9881504381 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 110182.60646387163,
            "unit": "ns/iter",
            "extra": "iterations: 7890\ncpu: 110180.02534854239 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 214988.99605524095,
            "unit": "ns/iter",
            "extra": "iterations: 4056\ncpu: 214981.58284023742 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5386.6178699991,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5386.585000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 26611.381926056354,
            "unit": "ns/iter",
            "extra": "iterations: 31349\ncpu: 26610.87753995343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 21430.89120711559,
            "unit": "ns/iter",
            "extra": "iterations: 38679\ncpu: 21430.603169678572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 21910.458735687105,
            "unit": "ns/iter",
            "extra": "iterations: 37902\ncpu: 21910.323993456772 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 21303.445138799303,
            "unit": "ns/iter",
            "extra": "iterations: 38725\ncpu: 21303.145255003263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 57760.396656959,
            "unit": "ns/iter",
            "extra": "iterations: 14418\ncpu: 57758.697461506505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 306082.6678358301,
            "unit": "ns/iter",
            "extra": "iterations: 2851\ncpu: 306073.7285163099 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 236219.12074137345,
            "unit": "ns/iter",
            "extra": "iterations: 3669\ncpu: 236210.82038702705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 235403.49246367675,
            "unit": "ns/iter",
            "extra": "iterations: 3649\ncpu: 235393.64209372297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 230780.82971970856,
            "unit": "ns/iter",
            "extra": "iterations: 3782\ncpu: 230769.8043363294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 118995.0812413842,
            "unit": "ns/iter",
            "extra": "iterations: 7250\ncpu: 118991.75172413835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 214011.57864175778,
            "unit": "ns/iter",
            "extra": "iterations: 3961\ncpu: 213999.62130774936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 874474.4849038993,
            "unit": "ns/iter",
            "extra": "iterations: 1093\ncpu: 874422.6898444674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 479003.73224932357,
            "unit": "ns/iter",
            "extra": "iterations: 1845\ncpu: 478968.9430894304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 2870.0105917038054,
            "unit": "ns/iter",
            "extra": "iterations: 279464\ncpu: 2869.835828586149 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 13170.704388645285,
            "unit": "ns/iter",
            "extra": "iterations: 63482\ncpu: 13170.223055354205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 10772.897629225368,
            "unit": "ns/iter",
            "extra": "iterations: 76262\ncpu: 10772.376806273192 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 10848.821328269629,
            "unit": "ns/iter",
            "extra": "iterations: 75843\ncpu: 10848.13232598921 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 10521.020315795955,
            "unit": "ns/iter",
            "extra": "iterations: 78215\ncpu: 10520.319631784192 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 42231.666003671286,
            "unit": "ns/iter",
            "extra": "iterations: 19608\ncpu: 42229.72256221945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 293948.3400402468,
            "unit": "ns/iter",
            "extra": "iterations: 2982\ncpu: 293938.2964453375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 222094.98657395926,
            "unit": "ns/iter",
            "extra": "iterations: 4171\ncpu: 222090.6976744185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 221914.70368500586,
            "unit": "ns/iter",
            "extra": "iterations: 3962\ncpu: 221908.43008581633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 218663.3525423544,
            "unit": "ns/iter",
            "extra": "iterations: 4130\ncpu: 218660.2663438254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 109765.32287729076,
            "unit": "ns/iter",
            "extra": "iterations: 7938\ncpu: 109762.16931216906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 210358.93296491637,
            "unit": "ns/iter",
            "extra": "iterations: 4162\ncpu: 210354.68524747732 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 263.7378589566384,
            "unit": "ns/iter",
            "extra": "iterations: 2640918\ncpu: 263.72685558582225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1731.8423553853743,
            "unit": "ns/iter",
            "extra": "iterations: 403382\ncpu: 1731.8333490339194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1330.5669363293218,
            "unit": "ns/iter",
            "extra": "iterations: 527449\ncpu: 1330.47953451424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1409.2391281619389,
            "unit": "ns/iter",
            "extra": "iterations: 506929\ncpu: 1409.2194370414686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 999.5589465210444,
            "unit": "ns/iter",
            "extra": "iterations: 701865\ncpu: 999.516716177621 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 11134.869381096441,
            "unit": "ns/iter",
            "extra": "iterations: 63758\ncpu: 11134.227861601597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 14256.619304178674,
            "unit": "ns/iter",
            "extra": "iterations: 52341\ncpu: 14255.9255650446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 3155.703294046644,
            "unit": "ns/iter",
            "extra": "iterations: 210926\ncpu: 3155.5317978817175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 3286.7446812404964,
            "unit": "ns/iter",
            "extra": "iterations: 218566\ncpu: 3286.6955519156495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 3263.3319687609383,
            "unit": "ns/iter",
            "extra": "iterations: 214475\ncpu: 3263.2703112250624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5953.373547005598,
            "unit": "ns/iter",
            "extra": "iterations: 117688\ncpu: 5953.287505947952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 6118.766654932683,
            "unit": "ns/iter",
            "extra": "iterations: 113630\ncpu: 6118.507436416417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 2014.893328575456,
            "unit": "ns/iter",
            "extra": "iterations: 350300\ncpu: 2014.8464173565444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10419.630072548525,
            "unit": "ns/iter",
            "extra": "iterations: 67816\ncpu: 10419.334670284434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8206.969260135756,
            "unit": "ns/iter",
            "extra": "iterations: 85394\ncpu: 8206.768625430408 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 8041.638551570958,
            "unit": "ns/iter",
            "extra": "iterations: 86549\ncpu: 8041.338432564216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 8053.27560190104,
            "unit": "ns/iter",
            "extra": "iterations: 86019\ncpu: 8053.005731291775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 18143.97394305732,
            "unit": "ns/iter",
            "extra": "iterations: 38531\ncpu: 18142.752588824544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 62432.9057348253,
            "unit": "ns/iter",
            "extra": "iterations: 11404\ncpu: 62431.87478077819 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 49494.75063380254,
            "unit": "ns/iter",
            "extra": "iterations: 14200\ncpu: 49491.443661971396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 47479.83847345456,
            "unit": "ns/iter",
            "extra": "iterations: 14202\ncpu: 47477.17927052501 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 48741.26624327856,
            "unit": "ns/iter",
            "extra": "iterations: 14329\ncpu: 48737.923093027886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 27252.202591659785,
            "unit": "ns/iter",
            "extra": "iterations: 25312\ncpu: 27250.77038558811 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 48399.23159055226,
            "unit": "ns/iter",
            "extra": "iterations: 14517\ncpu: 48397.95412275273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 2014.110315301453,
            "unit": "ns/iter",
            "extra": "iterations: 348492\ncpu: 2014.029877299917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 10286.14238783001,
            "unit": "ns/iter",
            "extra": "iterations: 67576\ncpu: 10285.872203149098 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 8266.963885533634,
            "unit": "ns/iter",
            "extra": "iterations: 84426\ncpu: 8266.513870134784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 8264.166411812103,
            "unit": "ns/iter",
            "extra": "iterations: 83708\ncpu: 8264.119319539226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 8258.97375522954,
            "unit": "ns/iter",
            "extra": "iterations: 84855\ncpu: 8258.638854516565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 18384.183408295074,
            "unit": "ns/iter",
            "extra": "iterations: 38019\ncpu: 18383.76601173108 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 61073.34353086311,
            "unit": "ns/iter",
            "extra": "iterations: 11408\ncpu: 61072.4754558213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 48178.62779683786,
            "unit": "ns/iter",
            "extra": "iterations: 14570\ncpu: 48178.29787234059 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 47957.457575963956,
            "unit": "ns/iter",
            "extra": "iterations: 14579\ncpu: 47954.16695246653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 48302.85920117473,
            "unit": "ns/iter",
            "extra": "iterations: 14922\ncpu: 48301.44082562711 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 27686.203222106065,
            "unit": "ns/iter",
            "extra": "iterations: 25263\ncpu: 27684.87511380238 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 47618.23849643275,
            "unit": "ns/iter",
            "extra": "iterations: 15430\ncpu: 47614.98379779706 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}