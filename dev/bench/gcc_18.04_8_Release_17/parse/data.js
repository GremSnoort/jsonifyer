window.BENCHMARK_DATA = {
  "lastUpdate": 1705772060936,
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
        "date": 1702488600358,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 691.9409048617628,
            "unit": "ns/iter",
            "extra": "iterations: 1010320\ncpu: 691.8954390688099 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 6244.949394404095,
            "unit": "ns/iter",
            "extra": "iterations: 131606\ncpu: 6244.540522468581 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 11960.99347499961,
            "unit": "ns/iter",
            "extra": "iterations: 68659\ncpu: 11960.281973230023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 17742.827316742612,
            "unit": "ns/iter",
            "extra": "iterations: 47092\ncpu: 17741.503864775335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 23648.884320577814,
            "unit": "ns/iter",
            "extra": "iterations: 35486\ncpu: 23631.39547990757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 29299.04611052316,
            "unit": "ns/iter",
            "extra": "iterations: 28410\ncpu: 29298.53924674413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 34784.651484651076,
            "unit": "ns/iter",
            "extra": "iterations: 23844\ncpu: 34783.80305317901 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 40362.07392447142,
            "unit": "ns/iter",
            "extra": "iterations: 20548\ncpu: 40361.43663616896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 45140.44162545514,
            "unit": "ns/iter",
            "extra": "iterations: 18604\ncpu: 45139.01311545902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 660.0205566172017,
            "unit": "ns/iter",
            "extra": "iterations: 1063891\ncpu: 660.015076732485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 544.5362525848568,
            "unit": "ns/iter",
            "extra": "iterations: 1286791\ncpu: 544.5313186057404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 512.7219403847815,
            "unit": "ns/iter",
            "extra": "iterations: 1363276\ncpu: 512.7076248683318 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 518.9922339167448,
            "unit": "ns/iter",
            "extra": "iterations: 1350874\ncpu: 518.992222812786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 985.5093987210016,
            "unit": "ns/iter",
            "extra": "iterations: 711001\ncpu: 985.5093030811495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 2715.7963481149463,
            "unit": "ns/iter",
            "extra": "iterations: 295190\ncpu: 2715.7949117517533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 13405.049181141243,
            "unit": "ns/iter",
            "extra": "iterations: 60511\ncpu: 13404.837137049451 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 10987.11529867507,
            "unit": "ns/iter",
            "extra": "iterations: 73843\ncpu: 10987.03736305406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 11191.858258432912,
            "unit": "ns/iter",
            "extra": "iterations: 72096\ncpu: 11191.701342654274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 10822.182801282848,
            "unit": "ns/iter",
            "extra": "iterations: 75087\ncpu: 10821.49639751225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 43495.68053367527,
            "unit": "ns/iter",
            "extra": "iterations: 19038\ncpu: 43494.04349196346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 274889.3408129962,
            "unit": "ns/iter",
            "extra": "iterations: 3075\ncpu: 274874.9593495932 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 214771.04890475434,
            "unit": "ns/iter",
            "extra": "iterations: 3926\ncpu: 214760.64696892546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 225086.19835770858,
            "unit": "ns/iter",
            "extra": "iterations: 3897\ncpu: 225074.77546830857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 215244.6535433026,
            "unit": "ns/iter",
            "extra": "iterations: 3937\ncpu: 215227.9146558295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 111855.73523761117,
            "unit": "ns/iter",
            "extra": "iterations: 7807\ncpu: 111849.81426924554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 214542.86307766847,
            "unit": "ns/iter",
            "extra": "iterations: 4068\ncpu: 214526.9911504431 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5346.214679999548,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5346.137999999989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 27074.812830536874,
            "unit": "ns/iter",
            "extra": "iterations: 30443\ncpu: 27074.398055382135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 22326.189036721575,
            "unit": "ns/iter",
            "extra": "iterations: 37580\ncpu: 22325.117083555077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 22349.723551504594,
            "unit": "ns/iter",
            "extra": "iterations: 37280\ncpu: 22348.771459227475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 21370.880821491803,
            "unit": "ns/iter",
            "extra": "iterations: 38564\ncpu: 21370.176848874555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 56882.96110654884,
            "unit": "ns/iter",
            "extra": "iterations: 14604\ncpu: 56882.032319912396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 305164.17828373756,
            "unit": "ns/iter",
            "extra": "iterations: 2855\ncpu: 305160.2101576183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 235518.07889760178,
            "unit": "ns/iter",
            "extra": "iterations: 3701\ncpu: 235512.29397460166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 236253.04730831247,
            "unit": "ns/iter",
            "extra": "iterations: 3678\ncpu: 236249.59216965793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 232912.7695815437,
            "unit": "ns/iter",
            "extra": "iterations: 3728\ncpu: 232907.61802575135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 121896.09589231249,
            "unit": "ns/iter",
            "extra": "iterations: 7206\ncpu: 121895.28170968709 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 223359.03677037297,
            "unit": "ns/iter",
            "extra": "iterations: 3889\ncpu: 223352.3013628186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 878587.1149953773,
            "unit": "ns/iter",
            "extra": "iterations: 1087\ncpu: 878566.6053357858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 482533.1807817517,
            "unit": "ns/iter",
            "extra": "iterations: 1842\ncpu: 482533.00760043395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 2891.743752691404,
            "unit": "ns/iter",
            "extra": "iterations: 278680\ncpu: 2891.7062580737643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 13491.09492002399,
            "unit": "ns/iter",
            "extra": "iterations: 61831\ncpu: 13491.086995196672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 10785.518764220802,
            "unit": "ns/iter",
            "extra": "iterations: 78234\ncpu: 10785.360584911881 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 11075.052032302761,
            "unit": "ns/iter",
            "extra": "iterations: 74915\ncpu: 11074.728692518187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 10423.824758396267,
            "unit": "ns/iter",
            "extra": "iterations: 79262\ncpu: 10423.728899094163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 42437.129681244136,
            "unit": "ns/iter",
            "extra": "iterations: 19733\ncpu: 42437.1002888562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 296563.1896321258,
            "unit": "ns/iter",
            "extra": "iterations: 2990\ncpu: 296552.3076923089 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 223334.2883980836,
            "unit": "ns/iter",
            "extra": "iterations: 3939\ncpu: 223334.2980451885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 223171.46583373912,
            "unit": "ns/iter",
            "extra": "iterations: 3922\ncpu: 223162.74859765568 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 219395.2984999896,
            "unit": "ns/iter",
            "extra": "iterations: 4000\ncpu: 219393.4249999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 109313.15176426375,
            "unit": "ns/iter",
            "extra": "iterations: 7907\ncpu: 109309.06791450632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 212034.66819609926,
            "unit": "ns/iter",
            "extra": "iterations: 4141\ncpu: 212019.99517024972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 258.452181877098,
            "unit": "ns/iter",
            "extra": "iterations: 2712183\ncpu: 258.4364698104811 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1749.4194957335062,
            "unit": "ns/iter",
            "extra": "iterations: 399749\ncpu: 1749.2949325701777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1371.1107430260358,
            "unit": "ns/iter",
            "extra": "iterations: 500790\ncpu: 1371.0469458255905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1353.7217156268225,
            "unit": "ns/iter",
            "extra": "iterations: 519810\ncpu: 1353.7234758854217 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 996.6062584685324,
            "unit": "ns/iter",
            "extra": "iterations: 701130\ncpu: 996.6061928601011 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 11043.213049079322,
            "unit": "ns/iter",
            "extra": "iterations: 63652\ncpu: 11042.87217997857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 14161.688069144013,
            "unit": "ns/iter",
            "extra": "iterations: 49636\ncpu: 14161.687081956568 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 3309.0629304661684,
            "unit": "ns/iter",
            "extra": "iterations: 210963\ncpu: 3308.956546882659 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 3255.4187820221996,
            "unit": "ns/iter",
            "extra": "iterations: 214109\ncpu: 3255.421304102118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 3227.1088445113855,
            "unit": "ns/iter",
            "extra": "iterations: 216575\ncpu: 3227.0091192427567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5811.590961094183,
            "unit": "ns/iter",
            "extra": "iterations: 118001\ncpu: 5811.593122092184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 6266.823210683433,
            "unit": "ns/iter",
            "extra": "iterations: 112026\ncpu: 6266.594362023108 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 2002.7843681582326,
            "unit": "ns/iter",
            "extra": "iterations: 349415\ncpu: 2002.7846543508517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10202.899554352394,
            "unit": "ns/iter",
            "extra": "iterations: 68664\ncpu: 10202.903996271645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8106.804574165391,
            "unit": "ns/iter",
            "extra": "iterations: 86442\ncpu: 8106.55121353039 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 8056.087662487431,
            "unit": "ns/iter",
            "extra": "iterations: 86776\ncpu: 8055.9982022678605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 8000.678865831058,
            "unit": "ns/iter",
            "extra": "iterations: 87465\ncpu: 8000.43560281268 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 18366.379674666932,
            "unit": "ns/iter",
            "extra": "iterations: 38238\ncpu: 18366.378994717412 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 62087.89947653782,
            "unit": "ns/iter",
            "extra": "iterations: 11271\ncpu: 62087.27708277815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 49457.17924660896,
            "unit": "ns/iter",
            "extra": "iterations: 14176\ncpu: 49457.1670428891 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 49382.158476478486,
            "unit": "ns/iter",
            "extra": "iterations: 14204\ncpu: 49380.61109546534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 49053.366386554604,
            "unit": "ns/iter",
            "extra": "iterations: 14280\ncpu: 49053.32633053187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 27611.870260663727,
            "unit": "ns/iter",
            "extra": "iterations: 25320\ncpu: 27611.011058451804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 48674.22436429369,
            "unit": "ns/iter",
            "extra": "iterations: 14472\ncpu: 48673.15505804336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 2016.909645114858,
            "unit": "ns/iter",
            "extra": "iterations: 347098\ncpu: 2016.909345487434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 10354.114583952543,
            "unit": "ns/iter",
            "extra": "iterations: 67252\ncpu: 10354.010289656813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 8284.696557514564,
            "unit": "ns/iter",
            "extra": "iterations: 83370\ncpu: 8284.456039342773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 8290.955026986552,
            "unit": "ns/iter",
            "extra": "iterations: 84673\ncpu: 8290.874304678118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 8137.666619154332,
            "unit": "ns/iter",
            "extra": "iterations: 84189\ncpu: 8137.389682737545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 18320.5749445385,
            "unit": "ns/iter",
            "extra": "iterations: 38315\ncpu: 18320.365392144246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 60967.37895568953,
            "unit": "ns/iter",
            "extra": "iterations: 11376\ncpu: 60966.78973277059 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 48349.09876287134,
            "unit": "ns/iter",
            "extra": "iterations: 14469\ncpu: 48349.04969244626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 48344.006276295375,
            "unit": "ns/iter",
            "extra": "iterations: 14499\ncpu: 48342.0580729708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 47760.773334240046,
            "unit": "ns/iter",
            "extra": "iterations: 14678\ncpu: 47760.771222237694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 27460.849069227017,
            "unit": "ns/iter",
            "extra": "iterations: 25409\ncpu: 27459.966940847866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 47726.228729510134,
            "unit": "ns/iter",
            "extra": "iterations: 14821\ncpu: 47725.7539977059 ns\nthreads: 1"
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
        "date": 1702490835865,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 706.2293684954477,
            "unit": "ns/iter",
            "extra": "iterations: 1014577\ncpu: 706.1991352061007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 6188.9255013023785,
            "unit": "ns/iter",
            "extra": "iterations: 131707\ncpu: 6188.2709347263235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 11949.64390730447,
            "unit": "ns/iter",
            "extra": "iterations: 69173\ncpu: 11949.418125569227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 17769.56764206975,
            "unit": "ns/iter",
            "extra": "iterations: 47160\ncpu: 17768.687446988974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 23243.109278748743,
            "unit": "ns/iter",
            "extra": "iterations: 36201\ncpu: 23243.142454628316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 29094.424128409533,
            "unit": "ns/iter",
            "extra": "iterations: 28970\ncpu: 29092.847773558853 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 35119.40409675621,
            "unit": "ns/iter",
            "extra": "iterations: 24019\ncpu: 35118.139805986924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 39843.32610492536,
            "unit": "ns/iter",
            "extra": "iterations: 20567\ncpu: 39841.91180045705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 45697.246200118774,
            "unit": "ns/iter",
            "extra": "iterations: 18619\ncpu: 45693.75906332243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 672.5924904833224,
            "unit": "ns/iter",
            "extra": "iterations: 1040280\ncpu: 672.576806244474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 504.6635699288094,
            "unit": "ns/iter",
            "extra": "iterations: 1330217\ncpu: 504.6503690751209 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 521.5176290446168,
            "unit": "ns/iter",
            "extra": "iterations: 1338161\ncpu: 521.4940504169521 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 516.3171292732918,
            "unit": "ns/iter",
            "extra": "iterations: 1351184\ncpu: 516.300592665396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 988.4373513639964,
            "unit": "ns/iter",
            "extra": "iterations: 707685\ncpu: 988.3915866522542 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 2716.010376723008,
            "unit": "ns/iter",
            "extra": "iterations: 295469\ncpu: 2715.9857717730156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 12712.812419512231,
            "unit": "ns/iter",
            "extra": "iterations: 63674\ncpu: 12712.163520432194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 10680.79250913689,
            "unit": "ns/iter",
            "extra": "iterations: 76066\ncpu: 10680.48536796991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 10769.625178504719,
            "unit": "ns/iter",
            "extra": "iterations: 75628\ncpu: 10769.192627069313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 10479.13700842295,
            "unit": "ns/iter",
            "extra": "iterations: 77404\ncpu: 10478.855097927772 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 43050.402172783106,
            "unit": "ns/iter",
            "extra": "iterations: 19238\ncpu: 43047.697265828145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 282546.5535656053,
            "unit": "ns/iter",
            "extra": "iterations: 3071\ncpu: 282535.7863887979 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 224014.91584671396,
            "unit": "ns/iter",
            "extra": "iterations: 3862\ncpu: 223991.55877783513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 208739.13844622287,
            "unit": "ns/iter",
            "extra": "iterations: 4016\ncpu: 208732.34561753026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 206668.461368635,
            "unit": "ns/iter",
            "extra": "iterations: 4077\ncpu: 206650.45376502333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 110305.32324132715,
            "unit": "ns/iter",
            "extra": "iterations: 7861\ncpu: 110301.8191069838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 203142.95935726142,
            "unit": "ns/iter",
            "extra": "iterations: 4232\ncpu: 203126.46502835516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5380.946520000406,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5380.7869999999975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 25324.422242540157,
            "unit": "ns/iter",
            "extra": "iterations: 31714\ncpu: 25323.59841079656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 21318.418837363082,
            "unit": "ns/iter",
            "extra": "iterations: 38774\ncpu: 21317.937277557085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 21459.13636246959,
            "unit": "ns/iter",
            "extra": "iterations: 38999\ncpu: 21458.23482653397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 21138.156082534337,
            "unit": "ns/iter",
            "extra": "iterations: 38627\ncpu: 21137.16053537686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 57949.301297982005,
            "unit": "ns/iter",
            "extra": "iterations: 14484\ncpu: 57945.167080916974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 307563.01234567544,
            "unit": "ns/iter",
            "extra": "iterations: 2835\ncpu: 307540.9523809532 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 236335.32280893117,
            "unit": "ns/iter",
            "extra": "iterations: 3674\ncpu: 236317.25639630007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 236554.223978197,
            "unit": "ns/iter",
            "extra": "iterations: 3670\ncpu: 236535.64032697625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 234373.19508903698,
            "unit": "ns/iter",
            "extra": "iterations: 3706\ncpu: 234354.85698866713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 122053.37046378921,
            "unit": "ns/iter",
            "extra": "iterations: 7137\ncpu: 122047.98935126828 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 231038.25247901233,
            "unit": "ns/iter",
            "extra": "iterations: 3933\ncpu: 231027.86676836948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 863993.3916279112,
            "unit": "ns/iter",
            "extra": "iterations: 1075\ncpu: 863972.6511627907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 493563.3019498669,
            "unit": "ns/iter",
            "extra": "iterations: 1795\ncpu: 493524.7910863514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 2828.7107950840536,
            "unit": "ns/iter",
            "extra": "iterations: 282184\ncpu: 2828.4675956113783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 13251.512206475049,
            "unit": "ns/iter",
            "extra": "iterations: 62303\ncpu: 13250.790491629616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 10714.331300131022,
            "unit": "ns/iter",
            "extra": "iterations: 77546\ncpu: 10713.759574961925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 10837.260683094628,
            "unit": "ns/iter",
            "extra": "iterations: 76944\ncpu: 10836.399199417736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 10320.338861784694,
            "unit": "ns/iter",
            "extra": "iterations: 79528\ncpu: 10319.77416758881 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 42398.2692365917,
            "unit": "ns/iter",
            "extra": "iterations: 19819\ncpu: 42395.741460215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 276361.1152487827,
            "unit": "ns/iter",
            "extra": "iterations: 3115\ncpu: 276339.9357945422 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 215824.98337532958,
            "unit": "ns/iter",
            "extra": "iterations: 3970\ncpu: 215792.84634760625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 213364.08240647407,
            "unit": "ns/iter",
            "extra": "iterations: 3956\ncpu: 213348.98887765477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 221893.56041454725,
            "unit": "ns/iter",
            "extra": "iterations: 3956\ncpu: 221878.23559150717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 110618.37549106541,
            "unit": "ns/iter",
            "extra": "iterations: 7891\ncpu: 110605.38588265158 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 214946.473039223,
            "unit": "ns/iter",
            "extra": "iterations: 4080\ncpu: 214929.63235294135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 258.0210623706789,
            "unit": "ns/iter",
            "extra": "iterations: 2711803\ncpu: 258.0001202152205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1743.2361386300104,
            "unit": "ns/iter",
            "extra": "iterations: 400231\ncpu: 1743.1235961232367 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1339.167055961147,
            "unit": "ns/iter",
            "extra": "iterations: 523597\ncpu: 1339.0781459786806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1341.3606772721198,
            "unit": "ns/iter",
            "extra": "iterations: 516897\ncpu: 1341.2616053101406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 992.3262437449349,
            "unit": "ns/iter",
            "extra": "iterations: 701028\ncpu: 992.3289797269126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 11267.458530673734,
            "unit": "ns/iter",
            "extra": "iterations: 62709\ncpu: 11266.80221339839 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 14315.143940016096,
            "unit": "ns/iter",
            "extra": "iterations: 48680\ncpu: 14314.16187345925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 3255.59904911399,
            "unit": "ns/iter",
            "extra": "iterations: 214747\ncpu: 3255.4163736862192 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 3283.938229273602,
            "unit": "ns/iter",
            "extra": "iterations: 213483\ncpu: 3283.8427415766264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 3229.1589346564165,
            "unit": "ns/iter",
            "extra": "iterations: 216869\ncpu: 3228.9806288588816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5900.20976007275,
            "unit": "ns/iter",
            "extra": "iterations: 119036\ncpu: 5899.88238852109 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 6167.502161795706,
            "unit": "ns/iter",
            "extra": "iterations: 113563\ncpu: 6167.043843505413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1961.597907560516,
            "unit": "ns/iter",
            "extra": "iterations: 354610\ncpu: 1961.4111277177863 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10077.733537607273,
            "unit": "ns/iter",
            "extra": "iterations: 69841\ncpu: 10077.360003436212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 7981.91745926272,
            "unit": "ns/iter",
            "extra": "iterations: 87266\ncpu: 7981.673274814954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 8017.021843884463,
            "unit": "ns/iter",
            "extra": "iterations: 87576\ncpu: 8016.4462866538925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 7925.301175484832,
            "unit": "ns/iter",
            "extra": "iterations: 88304\ncpu: 7924.586655191283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 18095.6544296584,
            "unit": "ns/iter",
            "extra": "iterations: 38626\ncpu: 18093.93672655712 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 59352.400543339885,
            "unit": "ns/iter",
            "extra": "iterations: 11779\ncpu: 59349.86840988184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 47564.98010726644,
            "unit": "ns/iter",
            "extra": "iterations: 14729\ncpu: 47560.49290515318 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 47228.35985236783,
            "unit": "ns/iter",
            "extra": "iterations: 14631\ncpu: 47223.54589570112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 46735.1551712064,
            "unit": "ns/iter",
            "extra": "iterations: 14281\ncpu: 46733.74413556457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 27073.48109467738,
            "unit": "ns/iter",
            "extra": "iterations: 26236\ncpu: 27071.992681811265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 46114.293157228596,
            "unit": "ns/iter",
            "extra": "iterations: 15067\ncpu: 46113.6656268663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1974.392845579235,
            "unit": "ns/iter",
            "extra": "iterations: 352090\ncpu: 1974.3491720866712 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 10260.127598859704,
            "unit": "ns/iter",
            "extra": "iterations: 68684\ncpu: 10259.759187001402 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 8102.308961963197,
            "unit": "ns/iter",
            "extra": "iterations: 86153\ncpu: 8101.814214246732 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 8107.633632484815,
            "unit": "ns/iter",
            "extra": "iterations: 86244\ncpu: 8107.046287277915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 8026.027484532393,
            "unit": "ns/iter",
            "extra": "iterations: 86958\ncpu: 8025.836610777714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 18254.93166239272,
            "unit": "ns/iter",
            "extra": "iterations: 38222\ncpu: 18253.924441421008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 58059.127275746265,
            "unit": "ns/iter",
            "extra": "iterations: 12029\ncpu: 58056.638124532124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 46299.980558132105,
            "unit": "ns/iter",
            "extra": "iterations: 15122\ncpu: 46298.09549001522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 46261.359016603405,
            "unit": "ns/iter",
            "extra": "iterations: 15172\ncpu: 46258.06749274974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 45670.19814585326,
            "unit": "ns/iter",
            "extra": "iterations: 15317\ncpu: 45665.13677613091 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 26955.0491797012,
            "unit": "ns/iter",
            "extra": "iterations: 26027\ncpu: 26953.025704076517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 46201.305440679025,
            "unit": "ns/iter",
            "extra": "iterations: 15476\ncpu: 46172.001809253205 ns\nthreads: 1"
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
          "id": "380c708d79f348a900173c4fb482ef4fb63a6372",
          "message": "Update parser.hpp",
          "timestamp": "2024-01-18T13:25:10+03:00",
          "tree_id": "728a97bf0015154eea5578165c8b4ccc440a3077",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/380c708d79f348a900173c4fb482ef4fb63a6372"
        },
        "date": 1705573969608,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 705.2535841782059,
            "unit": "ns/iter",
            "extra": "iterations: 998067\ncpu: 705.233917161874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 6209.5422143342075,
            "unit": "ns/iter",
            "extra": "iterations: 129032\ncpu: 6209.421693843387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 11744.97024449761,
            "unit": "ns/iter",
            "extra": "iterations: 69735\ncpu: 11744.518534451856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 17852.554749941733,
            "unit": "ns/iter",
            "extra": "iterations: 47169\ncpu: 17851.917572982253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 23724.163973518225,
            "unit": "ns/iter",
            "extra": "iterations: 35646\ncpu: 23723.50053301914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 28621.413391357295,
            "unit": "ns/iter",
            "extra": "iterations: 29183\ncpu: 28620.888873659336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 34388.26678921593,
            "unit": "ns/iter",
            "extra": "iterations: 24480\ncpu: 34386.58496732024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 40027.227770662284,
            "unit": "ns/iter",
            "extra": "iterations: 21087\ncpu: 40025.99705979985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 45344.4763401809,
            "unit": "ns/iter",
            "extra": "iterations: 18449\ncpu: 45341.655374274975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 665.9993205218937,
            "unit": "ns/iter",
            "extra": "iterations: 1047863\ncpu: 665.9730327342419 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 525.343722521333,
            "unit": "ns/iter",
            "extra": "iterations: 1307834\ncpu: 525.3269145778445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 518.0783144246233,
            "unit": "ns/iter",
            "extra": "iterations: 1347172\ncpu: 518.0534482605043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 547.3385780817744,
            "unit": "ns/iter",
            "extra": "iterations: 1278231\ncpu: 547.3269698513021 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 991.4946911764208,
            "unit": "ns/iter",
            "extra": "iterations: 706277\ncpu: 991.4622733007035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 2815.6170852892396,
            "unit": "ns/iter",
            "extra": "iterations: 284186\ncpu: 2815.5377112172996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 13435.540543218254,
            "unit": "ns/iter",
            "extra": "iterations: 60565\ncpu: 13435.127548914405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 11004.236595580342,
            "unit": "ns/iter",
            "extra": "iterations: 72588\ncpu: 11004.025458753516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 11254.473791208882,
            "unit": "ns/iter",
            "extra": "iterations: 72800\ncpu: 11254.00961538461 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 10808.45569705096,
            "unit": "ns/iter",
            "extra": "iterations: 74600\ncpu: 10808.265415549593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 43301.19084407842,
            "unit": "ns/iter",
            "extra": "iterations: 19157\ncpu: 43298.49663308467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 298120.27045533276,
            "unit": "ns/iter",
            "extra": "iterations: 2921\ncpu: 298111.7767887707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 204843.37942708505,
            "unit": "ns/iter",
            "extra": "iterations: 3840\ncpu: 204830.23437500026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 215460.6697341587,
            "unit": "ns/iter",
            "extra": "iterations: 3912\ncpu: 215441.8200408996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 216820.00507098797,
            "unit": "ns/iter",
            "extra": "iterations: 3944\ncpu: 216805.27383367164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 111059.6547588725,
            "unit": "ns/iter",
            "extra": "iterations: 7838\ncpu: 111051.33962745605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 204233.17546848944,
            "unit": "ns/iter",
            "extra": "iterations: 4109\ncpu: 204219.4694572888 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5432.712379999884,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5432.221999999989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 27312.81295736328,
            "unit": "ns/iter",
            "extra": "iterations: 30747\ncpu: 27311.139298142938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 21776.18474634148,
            "unit": "ns/iter",
            "extra": "iterations: 38063\ncpu: 21775.703439035206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 21822.765746344558,
            "unit": "ns/iter",
            "extra": "iterations: 38501\ncpu: 21821.422820186504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 21619.33273484229,
            "unit": "ns/iter",
            "extra": "iterations: 38430\ncpu: 21618.53499869893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 56669.36783593195,
            "unit": "ns/iter",
            "extra": "iterations: 14482\ncpu: 56667.11089628489 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 306027.3762688013,
            "unit": "ns/iter",
            "extra": "iterations: 2857\ncpu: 306015.7157857885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 233876.8869191518,
            "unit": "ns/iter",
            "extra": "iterations: 3723\ncpu: 233866.74724684338 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 222347.35683530514,
            "unit": "ns/iter",
            "extra": "iterations: 3716\ncpu: 222338.48223896686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 228365.77452804675,
            "unit": "ns/iter",
            "extra": "iterations: 3761\ncpu: 228353.23052379754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 121147.55291041236,
            "unit": "ns/iter",
            "extra": "iterations: 7267\ncpu: 121143.07141874183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 221617.5493748422,
            "unit": "ns/iter",
            "extra": "iterations: 3919\ncpu: 221611.81423832467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 846322.0972727082,
            "unit": "ns/iter",
            "extra": "iterations: 1100\ncpu: 846280.4545454555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 478233.261413037,
            "unit": "ns/iter",
            "extra": "iterations: 1840\ncpu: 478203.15217391186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 2881.6347354109653,
            "unit": "ns/iter",
            "extra": "iterations: 280227\ncpu: 2881.536040424387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 13196.335694506755,
            "unit": "ns/iter",
            "extra": "iterations: 62116\ncpu: 13196.001030330275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 10802.251463971694,
            "unit": "ns/iter",
            "extra": "iterations: 76675\ncpu: 10801.953700684691 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 10854.04877855653,
            "unit": "ns/iter",
            "extra": "iterations: 75771\ncpu: 10853.307993823526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 10194.687347841238,
            "unit": "ns/iter",
            "extra": "iterations: 80508\ncpu: 10194.11114423417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 42640.620097541985,
            "unit": "ns/iter",
            "extra": "iterations: 19684\ncpu: 42637.81243649656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 303869.853881267,
            "unit": "ns/iter",
            "extra": "iterations: 3066\ncpu: 303857.7299412919 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 223517.03832486397,
            "unit": "ns/iter",
            "extra": "iterations: 3940\ncpu: 223503.07106598915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 223265.08405063878,
            "unit": "ns/iter",
            "extra": "iterations: 3950\ncpu: 223256.05063291095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 220735.1528646372,
            "unit": "ns/iter",
            "extra": "iterations: 3997\ncpu: 220719.78984238108 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 110240.43154049611,
            "unit": "ns/iter",
            "extra": "iterations: 7939\ncpu: 110233.37951883185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 211151.37872238917,
            "unit": "ns/iter",
            "extra": "iterations: 4164\ncpu: 211139.0489913556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 256.9049129733526,
            "unit": "ns/iter",
            "extra": "iterations: 2691934\ncpu: 256.90302956907357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1743.142575157827,
            "unit": "ns/iter",
            "extra": "iterations: 400224\ncpu: 1743.0146617893997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1333.2949005259718,
            "unit": "ns/iter",
            "extra": "iterations: 524760\ncpu: 1333.1995578931273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1407.6688357213352,
            "unit": "ns/iter",
            "extra": "iterations: 496376\ncpu: 1407.5716795332619 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 992.4663750659809,
            "unit": "ns/iter",
            "extra": "iterations: 700730\ncpu: 992.407632040872 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 11360.069474092637,
            "unit": "ns/iter",
            "extra": "iterations: 61836\ncpu: 11359.353774500243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 14413.399641429325,
            "unit": "ns/iter",
            "extra": "iterations: 48526\ncpu: 14412.521122697111 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 3296.8638674394233,
            "unit": "ns/iter",
            "extra": "iterations: 213035\ncpu: 3296.7338700213763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 3338.845855248331,
            "unit": "ns/iter",
            "extra": "iterations: 210471\ncpu: 3338.6347762874584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 3378.6066449254763,
            "unit": "ns/iter",
            "extra": "iterations: 207286\ncpu: 3378.379630076343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5970.693805007385,
            "unit": "ns/iter",
            "extra": "iterations: 117030\ncpu: 5970.490472528407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 6238.290535125938,
            "unit": "ns/iter",
            "extra": "iterations: 112310\ncpu: 6237.869290357064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 2079.2333412765406,
            "unit": "ns/iter",
            "extra": "iterations: 348301\ncpu: 2079.109735544853 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10192.608420621851,
            "unit": "ns/iter",
            "extra": "iterations: 68451\ncpu: 10192.102379804657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8080.339998157414,
            "unit": "ns/iter",
            "extra": "iterations: 86824\ncpu: 8079.7855431678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 8139.14637265068,
            "unit": "ns/iter",
            "extra": "iterations: 86027\ncpu: 8138.844781289612 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 8165.320939061061,
            "unit": "ns/iter",
            "extra": "iterations: 85873\ncpu: 8165.082156207372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 18280.994917508484,
            "unit": "ns/iter",
            "extra": "iterations: 38367\ncpu: 18279.818594104534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 62315.138568902665,
            "unit": "ns/iter",
            "extra": "iterations: 11893\ncpu: 62311.6370974522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 49797.44087403833,
            "unit": "ns/iter",
            "extra": "iterations: 14004\ncpu: 49795.72979148743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 49649.78970473713,
            "unit": "ns/iter",
            "extra": "iterations: 14123\ncpu: 49647.81561991063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 49348.37839350887,
            "unit": "ns/iter",
            "extra": "iterations: 14292\ncpu: 49345.28407500754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 28533.125174308072,
            "unit": "ns/iter",
            "extra": "iterations: 24382\ncpu: 28531.350996636975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 48914.494209572396,
            "unit": "ns/iter",
            "extra": "iterations: 14334\ncpu: 48911.37854053273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 2001.2919621715978,
            "unit": "ns/iter",
            "extra": "iterations: 349261\ncpu: 2001.164458671298 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 10416.033629980764,
            "unit": "ns/iter",
            "extra": "iterations: 67083\ncpu: 10415.134982037174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 8279.279316614786,
            "unit": "ns/iter",
            "extra": "iterations: 84696\ncpu: 8278.784122036455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 8209.26930296003,
            "unit": "ns/iter",
            "extra": "iterations: 85777\ncpu: 8208.868344661267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 8106.812898348595,
            "unit": "ns/iter",
            "extra": "iterations: 85980\ncpu: 8106.30728076305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 18282.606290359618,
            "unit": "ns/iter",
            "extra": "iterations: 38249\ncpu: 18281.12368950836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 60872.12593886495,
            "unit": "ns/iter",
            "extra": "iterations: 11450\ncpu: 60867.88646288226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 48650.10532889173,
            "unit": "ns/iter",
            "extra": "iterations: 14412\ncpu: 48645.64252012226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 48535.23026590434,
            "unit": "ns/iter",
            "extra": "iterations: 14366\ncpu: 48533.69761937911 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 47830.35376271211,
            "unit": "ns/iter",
            "extra": "iterations: 14750\ncpu: 47829.45762711845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 27506.493307468612,
            "unit": "ns/iter",
            "extra": "iterations: 25775\ncpu: 27504.779825412137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 44579.015703800804,
            "unit": "ns/iter",
            "extra": "iterations: 15665\ncpu: 44576.450686242846 ns\nthreads: 1"
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
          "id": "4c1f90876aa9fbfe7c3d4e17807fabb3578467e0",
          "message": "Update parser.hpp (#2)",
          "timestamp": "2024-01-20T20:20:02+03:00",
          "tree_id": "728a97bf0015154eea5578165c8b4ccc440a3077",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/4c1f90876aa9fbfe7c3d4e17807fabb3578467e0"
        },
        "date": 1705771643726,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 698.8143622452369,
            "unit": "ns/iter",
            "extra": "iterations: 993995\ncpu: 698.8043199412472 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 6328.332870374457,
            "unit": "ns/iter",
            "extra": "iterations: 130321\ncpu: 6328.252545637311 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 12036.382984650603,
            "unit": "ns/iter",
            "extra": "iterations: 68209\ncpu: 12036.06562183876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 18022.920255116263,
            "unit": "ns/iter",
            "extra": "iterations: 46724\ncpu: 18022.814827497645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 23181.366477829553,
            "unit": "ns/iter",
            "extra": "iterations: 35833\ncpu: 23180.70214606648 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 29067.275563740444,
            "unit": "ns/iter",
            "extra": "iterations: 28781\ncpu: 29066.48135923005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 34815.08620833533,
            "unit": "ns/iter",
            "extra": "iterations: 24000\ncpu: 34814.420833333344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 40148.77440138734,
            "unit": "ns/iter",
            "extra": "iterations: 20798\ncpu: 40147.576690066315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 46384.439065471415,
            "unit": "ns/iter",
            "extra": "iterations: 18405\ncpu: 46383.70551480576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 679.469798171422,
            "unit": "ns/iter",
            "extra": "iterations: 1035285\ncpu: 679.4438246473185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 535.5695321552892,
            "unit": "ns/iter",
            "extra": "iterations: 1304792\ncpu: 535.5641358929238 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 527.5623971935944,
            "unit": "ns/iter",
            "extra": "iterations: 1328954\ncpu: 527.5542268581158 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 541.3652341178864,
            "unit": "ns/iter",
            "extra": "iterations: 1306436\ncpu: 541.3510497261259 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 1003.620702990725,
            "unit": "ns/iter",
            "extra": "iterations: 677477\ncpu: 1003.6160637187663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 2810.7761779829116,
            "unit": "ns/iter",
            "extra": "iterations: 285106\ncpu: 2810.726536796844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 13428.158762475667,
            "unit": "ns/iter",
            "extra": "iterations: 60411\ncpu: 13428.104153217128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 11207.9131959243,
            "unit": "ns/iter",
            "extra": "iterations: 72727\ncpu: 11207.552903323387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 11318.208830431779,
            "unit": "ns/iter",
            "extra": "iterations: 72001\ncpu: 11317.934473132316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 10980.993374798061,
            "unit": "ns/iter",
            "extra": "iterations: 73960\ncpu: 10980.874797187666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 43696.10934466848,
            "unit": "ns/iter",
            "extra": "iterations: 19059\ncpu: 43696.274725851436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 284711.821167881,
            "unit": "ns/iter",
            "extra": "iterations: 3014\ncpu: 284702.8533510281 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 216198.7467599875,
            "unit": "ns/iter",
            "extra": "iterations: 3858\ncpu: 216195.30844997405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 216266.4179026854,
            "unit": "ns/iter",
            "extra": "iterations: 3843\ncpu: 216260.26541764245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 214385.0845070373,
            "unit": "ns/iter",
            "extra": "iterations: 3905\ncpu: 214384.43021766972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 112489.82655826135,
            "unit": "ns/iter",
            "extra": "iterations: 7749\ncpu: 112484.77222867448 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 215524.23984241308,
            "unit": "ns/iter",
            "extra": "iterations: 4061\ncpu: 215518.73922679137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5439.9609099993995,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5439.892999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 26632.733027612685,
            "unit": "ns/iter",
            "extra": "iterations: 30093\ncpu: 26632.64214269097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 21591.45917993291,
            "unit": "ns/iter",
            "extra": "iterations: 38192\ncpu: 21590.995496439038 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 22032.189374669546,
            "unit": "ns/iter",
            "extra": "iterations: 37740\ncpu: 22031.942236353985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 21383.297968746054,
            "unit": "ns/iter",
            "extra": "iterations: 38843\ncpu: 21382.87722369541 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 56144.60405674211,
            "unit": "ns/iter",
            "extra": "iterations: 14593\ncpu: 56144.81600767482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 305265.905812344,
            "unit": "ns/iter",
            "extra": "iterations: 2856\ncpu: 305255.00700280163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 234471.66071911866,
            "unit": "ns/iter",
            "extra": "iterations: 3699\ncpu: 234467.6128683427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 235280.09280303924,
            "unit": "ns/iter",
            "extra": "iterations: 3696\ncpu: 235272.91666666532 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 232836.17324094166,
            "unit": "ns/iter",
            "extra": "iterations: 3752\ncpu: 232831.13006396688 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 122934.40449596755,
            "unit": "ns/iter",
            "extra": "iterations: 7073\ncpu: 122930.55280644729 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 223373.0395074476,
            "unit": "ns/iter",
            "extra": "iterations: 3898\ncpu: 223371.9086711134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 869200.9271889877,
            "unit": "ns/iter",
            "extra": "iterations: 1085\ncpu: 869173.1797235003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 474490.1388888862,
            "unit": "ns/iter",
            "extra": "iterations: 1836\ncpu: 474475.8714596942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 2884.9848931115826,
            "unit": "ns/iter",
            "extra": "iterations: 281461\ncpu: 2884.937877716617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 12914.676899936281,
            "unit": "ns/iter",
            "extra": "iterations: 63160\ncpu: 12914.306523115858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 10555.795211469682,
            "unit": "ns/iter",
            "extra": "iterations: 77978\ncpu: 10555.770858447251 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 10890.962664335879,
            "unit": "ns/iter",
            "extra": "iterations: 75531\ncpu: 10890.716394592979 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 10429.42797119623,
            "unit": "ns/iter",
            "extra": "iterations: 79017\ncpu: 10429.407595833809 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 42549.599263406715,
            "unit": "ns/iter",
            "extra": "iterations: 19821\ncpu: 42548.589879420935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 281743.86591436475,
            "unit": "ns/iter",
            "extra": "iterations: 3013\ncpu: 281744.8390308673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 222598.7097018779,
            "unit": "ns/iter",
            "extra": "iterations: 3958\ncpu: 222589.11066194993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 222697.0208333281,
            "unit": "ns/iter",
            "extra": "iterations: 3936\ncpu: 222697.71341463385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 218803.0697441319,
            "unit": "ns/iter",
            "extra": "iterations: 3986\ncpu: 218796.78876066397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 109659.29948045047,
            "unit": "ns/iter",
            "extra": "iterations: 8084\ncpu: 109659.68579910976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 208326.38919566062,
            "unit": "ns/iter",
            "extra": "iterations: 4165\ncpu: 208319.9519807922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 257.2976157697034,
            "unit": "ns/iter",
            "extra": "iterations: 2716600\ncpu: 257.29397040418127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1757.9396556056608,
            "unit": "ns/iter",
            "extra": "iterations: 397916\ncpu: 1757.88734305733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1270.579465375894,
            "unit": "ns/iter",
            "extra": "iterations: 552014\ncpu: 1270.5733912545782 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1279.7252342519273,
            "unit": "ns/iter",
            "extra": "iterations: 544926\ncpu: 1279.6750384455893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 986.6586290798688,
            "unit": "ns/iter",
            "extra": "iterations: 708546\ncpu: 986.6511136891603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 11015.895100928077,
            "unit": "ns/iter",
            "extra": "iterations: 63461\ncpu: 11015.836498006618 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 12829.919622785175,
            "unit": "ns/iter",
            "extra": "iterations: 54717\ncpu: 12829.404024343381 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 3236.0235057863565,
            "unit": "ns/iter",
            "extra": "iterations: 216117\ncpu: 3235.9976309128883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 3252.194128097241,
            "unit": "ns/iter",
            "extra": "iterations: 213900\ncpu: 3252.095371669004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 3223.75050355514,
            "unit": "ns/iter",
            "extra": "iterations: 217454\ncpu: 3223.7346749197563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5959.028546149911,
            "unit": "ns/iter",
            "extra": "iterations: 119806\ncpu: 5958.827604627467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 6165.80566369139,
            "unit": "ns/iter",
            "extra": "iterations: 113283\ncpu: 6165.8271761870765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1973.525767249274,
            "unit": "ns/iter",
            "extra": "iterations: 351939\ncpu: 1973.4658562989575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 9910.625460298712,
            "unit": "ns/iter",
            "extra": "iterations: 71421\ncpu: 9910.471710001342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 7962.593718430853,
            "unit": "ns/iter",
            "extra": "iterations: 87112\ncpu: 7962.478188998199 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 8050.667955360948,
            "unit": "ns/iter",
            "extra": "iterations: 86651\ncpu: 8050.352563732728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 8006.128969413239,
            "unit": "ns/iter",
            "extra": "iterations: 87261\ncpu: 8006.079462761083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 18329.148936170677,
            "unit": "ns/iter",
            "extra": "iterations: 38305\ncpu: 18328.612452682453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 58662.639291050655,
            "unit": "ns/iter",
            "extra": "iterations: 11397\ncpu: 58661.6127050981 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 49924.94253609049,
            "unit": "ns/iter",
            "extra": "iterations: 14061\ncpu: 49923.09935282049 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 49508.56322247371,
            "unit": "ns/iter",
            "extra": "iterations: 14101\ncpu: 49505.61662293429 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 49828.21618357008,
            "unit": "ns/iter",
            "extra": "iterations: 14076\ncpu: 49826.23614663279 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 28184.64506894645,
            "unit": "ns/iter",
            "extra": "iterations: 24802\ncpu: 28183.739214578974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 49715.87459352206,
            "unit": "ns/iter",
            "extra": "iterations: 14146\ncpu: 49715.05019086668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 2024.095026976437,
            "unit": "ns/iter",
            "extra": "iterations: 346228\ncpu: 2024.0789306468632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 10385.874163538678,
            "unit": "ns/iter",
            "extra": "iterations: 67397\ncpu: 10385.50232206181 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 8254.51043919049,
            "unit": "ns/iter",
            "extra": "iterations: 84633\ncpu: 8254.092375314613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 8199.374565418626,
            "unit": "ns/iter",
            "extra": "iterations: 85427\ncpu: 8198.910180622128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 8356.499330925593,
            "unit": "ns/iter",
            "extra": "iterations: 84445\ncpu: 8356.439102374277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 18300.342087419096,
            "unit": "ns/iter",
            "extra": "iterations: 38344\ncpu: 18300.169518047176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 58960.106675723866,
            "unit": "ns/iter",
            "extra": "iterations: 11774\ncpu: 58958.365890947054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 47361.65231832894,
            "unit": "ns/iter",
            "extra": "iterations: 14752\ncpu: 47361.80178958813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 47070.87934186659,
            "unit": "ns/iter",
            "extra": "iterations: 14769\ncpu: 47069.27347823106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 47556.055672051145,
            "unit": "ns/iter",
            "extra": "iterations: 14783\ncpu: 47554.52208617956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 27553.138281588872,
            "unit": "ns/iter",
            "extra": "iterations: 25477\ncpu: 27553.224476979558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 47444.56669555611,
            "unit": "ns/iter",
            "extra": "iterations: 15001\ncpu: 47442.86380908 ns\nthreads: 1"
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
          "id": "4c1f90876aa9fbfe7c3d4e17807fabb3578467e0",
          "message": "Update parser.hpp (#2)",
          "timestamp": "2024-01-20T20:20:02+03:00",
          "tree_id": "728a97bf0015154eea5578165c8b4ccc440a3077",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/4c1f90876aa9fbfe7c3d4e17807fabb3578467e0"
        },
        "date": 1705772060496,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 708.4306405868704,
            "unit": "ns/iter",
            "extra": "iterations: 989015\ncpu: 708.3842004418539 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 6216.246512824813,
            "unit": "ns/iter",
            "extra": "iterations: 132127\ncpu: 6216.084524737563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 12104.233642698595,
            "unit": "ns/iter",
            "extra": "iterations: 69174\ncpu: 12103.713823112732 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 17933.891975374325,
            "unit": "ns/iter",
            "extra": "iterations: 46943\ncpu: 17933.46611848412 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 23881.712897728266,
            "unit": "ns/iter",
            "extra": "iterations: 35200\ncpu: 23880.54545454546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 29058.052661745478,
            "unit": "ns/iter",
            "extra": "iterations: 27914\ncpu: 29057.376226982866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 35053.95618825328,
            "unit": "ns/iter",
            "extra": "iterations: 23989\ncpu: 35052.728333819665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 41400.107924897005,
            "unit": "ns/iter",
            "extra": "iterations: 20505\ncpu: 41395.11826383807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 46135.643293349625,
            "unit": "ns/iter",
            "extra": "iterations: 18340\ncpu: 46134.47110141764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 666.5552861382048,
            "unit": "ns/iter",
            "extra": "iterations: 1057426\ncpu: 666.5311804324841 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 495.9174507328855,
            "unit": "ns/iter",
            "extra": "iterations: 1346081\ncpu: 495.882417179946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 531.6819723345309,
            "unit": "ns/iter",
            "extra": "iterations: 1316876\ncpu: 531.6450447878162 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 511.08314839266325,
            "unit": "ns/iter",
            "extra": "iterations: 1368457\ncpu: 511.0471136469763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 934.3472932279362,
            "unit": "ns/iter",
            "extra": "iterations: 712971\ncpu: 934.3114937353705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 2806.6263097926803,
            "unit": "ns/iter",
            "extra": "iterations: 286114\ncpu: 2806.576050105902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 13522.524426505102,
            "unit": "ns/iter",
            "extra": "iterations: 60201\ncpu: 13522.253783159747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 11519.494552917258,
            "unit": "ns/iter",
            "extra": "iterations: 71139\ncpu: 11519.125936546754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 11864.380242670257,
            "unit": "ns/iter",
            "extra": "iterations: 67499\ncpu: 11864.04243025822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 11386.262207860622,
            "unit": "ns/iter",
            "extra": "iterations: 71798\ncpu: 11386.119390512305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 43339.736945607605,
            "unit": "ns/iter",
            "extra": "iterations: 19323\ncpu: 43339.114009211786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 280769.41808817745,
            "unit": "ns/iter",
            "extra": "iterations: 3107\ncpu: 280763.08336015494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 214489.4258974371,
            "unit": "ns/iter",
            "extra": "iterations: 3900\ncpu: 214482.30769230748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 218290.73928042993,
            "unit": "ns/iter",
            "extra": "iterations: 4058\ncpu: 218288.24544110397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 212801.17827298446,
            "unit": "ns/iter",
            "extra": "iterations: 3949\ncpu: 212796.68270448208 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 110930.5817813267,
            "unit": "ns/iter",
            "extra": "iterations: 7893\ncpu: 110928.15152666945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 213089.46720312702,
            "unit": "ns/iter",
            "extra": "iterations: 4101\ncpu: 213086.66178980804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5345.483689999924,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5345.347999999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 26960.241799406907,
            "unit": "ns/iter",
            "extra": "iterations: 30699\ncpu: 26959.891201667837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 21542.39832225134,
            "unit": "ns/iter",
            "extra": "iterations: 38504\ncpu: 21542.08653646372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 22047.438811142263,
            "unit": "ns/iter",
            "extra": "iterations: 37515\ncpu: 22046.850593096155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 21456.03961327958,
            "unit": "ns/iter",
            "extra": "iterations: 39305\ncpu: 21454.990459229073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 56469.895238746474,
            "unit": "ns/iter",
            "extra": "iterations: 14681\ncpu: 56467.05946461409 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 303715.56849791174,
            "unit": "ns/iter",
            "extra": "iterations: 2876\ncpu: 303695.1668984699 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 221982.6365597104,
            "unit": "ns/iter",
            "extra": "iterations: 3709\ncpu: 221966.89134537548 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 234447.96080021813,
            "unit": "ns/iter",
            "extra": "iterations: 3699\ncpu: 234434.68505001476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 224859.38949324042,
            "unit": "ns/iter",
            "extra": "iterations: 3769\ncpu: 224838.25948527534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 120560.44836656014,
            "unit": "ns/iter",
            "extra": "iterations: 7224\ncpu: 120553.69601328882 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 219995.96709234617,
            "unit": "ns/iter",
            "extra": "iterations: 4072\ncpu: 219978.26620825045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 865165.535714297,
            "unit": "ns/iter",
            "extra": "iterations: 1092\ncpu: 865106.3186813137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 468468.65029683505,
            "unit": "ns/iter",
            "extra": "iterations: 1853\ncpu: 468441.98596869985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 2843.53998334316,
            "unit": "ns/iter",
            "extra": "iterations: 283368\ncpu: 2843.5327912820103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 13015.725592544146,
            "unit": "ns/iter",
            "extra": "iterations: 63413\ncpu: 13015.217699840694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 10702.831038149341,
            "unit": "ns/iter",
            "extra": "iterations: 77118\ncpu: 10702.34056899813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 10854.36971082328,
            "unit": "ns/iter",
            "extra": "iterations: 75248\ncpu: 10853.396768020384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 10422.774838873129,
            "unit": "ns/iter",
            "extra": "iterations: 79130\ncpu: 10422.331606217564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 42341.65447113515,
            "unit": "ns/iter",
            "extra": "iterations: 19816\ncpu: 42339.59426725882 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 276682.2453947414,
            "unit": "ns/iter",
            "extra": "iterations: 3040\ncpu: 276681.0855263155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 214442.41837242924,
            "unit": "ns/iter",
            "extra": "iterations: 4006\ncpu: 214092.63604592992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 224850.2102993413,
            "unit": "ns/iter",
            "extra": "iterations: 3942\ncpu: 224844.3176052774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 214559.40647117727,
            "unit": "ns/iter",
            "extra": "iterations: 3956\ncpu: 214553.91809908993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 110741.23867948074,
            "unit": "ns/iter",
            "extra": "iterations: 7906\ncpu: 110739.5016443208 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 207623.70557332708,
            "unit": "ns/iter",
            "extra": "iterations: 4378\ncpu: 207613.45363179455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 259.4251601953016,
            "unit": "ns/iter",
            "extra": "iterations: 2693119\ncpu: 259.41709222652105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1725.057833377593,
            "unit": "ns/iter",
            "extra": "iterations: 406236\ncpu: 1724.9891688574999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1255.9953076411268,
            "unit": "ns/iter",
            "extra": "iterations: 557289\ncpu: 1255.9906978246454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1400.6435696679023,
            "unit": "ns/iter",
            "extra": "iterations: 501436\ncpu: 1400.5919000630188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 994.2533106725446,
            "unit": "ns/iter",
            "extra": "iterations: 692533\ncpu: 994.2202032249677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 11077.302148226196,
            "unit": "ns/iter",
            "extra": "iterations: 63727\ncpu: 11076.761812104709 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 14240.642845501372,
            "unit": "ns/iter",
            "extra": "iterations: 49088\ncpu: 14240.211456975285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 3290.554226111064,
            "unit": "ns/iter",
            "extra": "iterations: 212453\ncpu: 3290.347982847991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 3407.4570715061354,
            "unit": "ns/iter",
            "extra": "iterations: 205423\ncpu: 3407.3083345097643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 3270.6124048336296,
            "unit": "ns/iter",
            "extra": "iterations: 214755\ncpu: 3270.445856906724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5675.6096497628405,
            "unit": "ns/iter",
            "extra": "iterations: 123402\ncpu: 5675.443671901607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 6132.047459113609,
            "unit": "ns/iter",
            "extra": "iterations: 114035\ncpu: 6131.833209102491 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1999.1446731044186,
            "unit": "ns/iter",
            "extra": "iterations: 349913\ncpu: 1999.0711976977277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10191.216981681031,
            "unit": "ns/iter",
            "extra": "iterations: 68780\ncpu: 10191.176214015739 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8197.607841534273,
            "unit": "ns/iter",
            "extra": "iterations: 85621\ncpu: 8197.132712768947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 8101.739151549262,
            "unit": "ns/iter",
            "extra": "iterations: 86487\ncpu: 8101.479991212533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 8046.694703045833,
            "unit": "ns/iter",
            "extra": "iterations: 86899\ncpu: 8046.433215572189 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 18413.18022567594,
            "unit": "ns/iter",
            "extra": "iterations: 38019\ncpu: 18412.067650385376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 62883.27113754844,
            "unit": "ns/iter",
            "extra": "iterations: 11094\ncpu: 62883.0268613666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 49578.50877318555,
            "unit": "ns/iter",
            "extra": "iterations: 13963\ncpu: 49575.95072692097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 49657.047857697005,
            "unit": "ns/iter",
            "extra": "iterations: 14167\ncpu: 49656.83630973373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 49195.12330585487,
            "unit": "ns/iter",
            "extra": "iterations: 14314\ncpu: 49192.28727120337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 27743.837355344895,
            "unit": "ns/iter",
            "extra": "iterations: 25319\ncpu: 27742.89663888792 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 48312.89423453873,
            "unit": "ns/iter",
            "extra": "iterations: 15298\ncpu: 48311.38710942597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1994.2572149180492,
            "unit": "ns/iter",
            "extra": "iterations: 352083\ncpu: 1994.1715447777951 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 10299.870969187219,
            "unit": "ns/iter",
            "extra": "iterations: 66953\ncpu: 10299.44139919063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 8212.758074752972,
            "unit": "ns/iter",
            "extra": "iterations: 85080\ncpu: 8212.731546779401 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 8226.861075830315,
            "unit": "ns/iter",
            "extra": "iterations: 85032\ncpu: 8226.613510207908 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 8090.285985484238,
            "unit": "ns/iter",
            "extra": "iterations: 86389\ncpu: 8090.072810195845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 18424.001389325756,
            "unit": "ns/iter",
            "extra": "iterations: 38148\ncpu: 18423.138827723636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 59827.85408610744,
            "unit": "ns/iter",
            "extra": "iterations: 11637\ncpu: 59825.87436624638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 47775.91265390011,
            "unit": "ns/iter",
            "extra": "iterations: 14620\ncpu: 47774.4049247599 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 45638.756348840565,
            "unit": "ns/iter",
            "extra": "iterations: 15239\ncpu: 45635.77662576314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 47603.39115321931,
            "unit": "ns/iter",
            "extra": "iterations: 14672\ncpu: 47601.581243184315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 27283.92260001557,
            "unit": "ns/iter",
            "extra": "iterations: 25646\ncpu: 27283.81813928076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 46836.78998073417,
            "unit": "ns/iter",
            "extra": "iterations: 15051\ncpu: 46835.32655637533 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}