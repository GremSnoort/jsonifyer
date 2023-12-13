window.BENCHMARK_DATA = {
  "lastUpdate": 1702492955752,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Parse clang-9 18.04 Release c++-17": [
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
        "date": 1702490316934,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 568.8012131642861,
            "unit": "ns/iter",
            "extra": "iterations: 1232974\ncpu: 568.7729019427824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5304.480629999944,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5304.286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10878.197094771333,
            "unit": "ns/iter",
            "extra": "iterations: 81164\ncpu: 10877.836232812579 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 15328.80633913279,
            "unit": "ns/iter",
            "extra": "iterations: 54203\ncpu: 15328.146043576924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 20212.57915001381,
            "unit": "ns/iter",
            "extra": "iterations: 41036\ncpu: 20212.55482990545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 25368.11660885225,
            "unit": "ns/iter",
            "extra": "iterations: 32862\ncpu: 25366.90706591199 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 30517.579439251516,
            "unit": "ns/iter",
            "extra": "iterations: 27713\ncpu: 30515.63886984446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 35241.11472315777,
            "unit": "ns/iter",
            "extra": "iterations: 23840\ncpu: 35239.45889261745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 39441.70147066003,
            "unit": "ns/iter",
            "extra": "iterations: 21147\ncpu: 39439.996216957414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 569.2488292845154,
            "unit": "ns/iter",
            "extra": "iterations: 1224892\ncpu: 569.2151634593084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 412.81330149423025,
            "unit": "ns/iter",
            "extra": "iterations: 1657919\ncpu: 412.8072601858109 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 424.9193027542312,
            "unit": "ns/iter",
            "extra": "iterations: 1660763\ncpu: 424.91860668861284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 412.3284503993492,
            "unit": "ns/iter",
            "extra": "iterations: 1696521\ncpu: 412.32304227298096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 869.2151356760769,
            "unit": "ns/iter",
            "extra": "iterations: 831466\ncpu: 869.2033107787938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1575.8951381574266,
            "unit": "ns/iter",
            "extra": "iterations: 507935\ncpu: 1575.8492720525253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 9834.235955867176,
            "unit": "ns/iter",
            "extra": "iterations: 83113\ncpu: 9834.151095496492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 7756.400415705063,
            "unit": "ns/iter",
            "extra": "iterations: 105363\ncpu: 7756.307242580391 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 7394.4468311420505,
            "unit": "ns/iter",
            "extra": "iterations: 106237\ncpu: 7394.052919416025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 7005.590552469671,
            "unit": "ns/iter",
            "extra": "iterations: 116115\ncpu: 7005.436851397316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 35868.74846869093,
            "unit": "ns/iter",
            "extra": "iterations: 22693\ncpu: 35866.29797734997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 244922.6177136498,
            "unit": "ns/iter",
            "extra": "iterations: 3534\ncpu: 244909.25297113735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 196951.23826713063,
            "unit": "ns/iter",
            "extra": "iterations: 4432\ncpu: 196939.57581227398 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 188801.30586908606,
            "unit": "ns/iter",
            "extra": "iterations: 4430\ncpu: 188791.6252821668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 178982.20467835874,
            "unit": "ns/iter",
            "extra": "iterations: 4446\ncpu: 178972.58209626618 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 98867.97932670824,
            "unit": "ns/iter",
            "extra": "iterations: 8852\ncpu: 98864.42611839152 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 186712.38498058383,
            "unit": "ns/iter",
            "extra": "iterations: 4634\ncpu: 186699.395770393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5200.70402831504,
            "unit": "ns/iter",
            "extra": "iterations: 154829\ncpu: 5200.386232553335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 23990.630992259772,
            "unit": "ns/iter",
            "extra": "iterations: 34628\ncpu: 23990.04273997916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 18177.44237844421,
            "unit": "ns/iter",
            "extra": "iterations: 45391\ncpu: 18176.44466964812 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 18049.730262160785,
            "unit": "ns/iter",
            "extra": "iterations: 46193\ncpu: 18048.7519754075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 18347.865649738585,
            "unit": "ns/iter",
            "extra": "iterations: 44972\ncpu: 18346.742417504214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 50266.7530581519,
            "unit": "ns/iter",
            "extra": "iterations: 16595\ncpu: 50265.36908707416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 268658.47876919917,
            "unit": "ns/iter",
            "extra": "iterations: 3250\ncpu: 268643.5384615388 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 205176.1986301163,
            "unit": "ns/iter",
            "extra": "iterations: 4234\ncpu: 205169.10722720754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 205460.71147462376,
            "unit": "ns/iter",
            "extra": "iterations: 4218\ncpu: 205446.8942626831 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 197856.56486041454,
            "unit": "ns/iter",
            "extra": "iterations: 4263\ncpu: 197849.61294862852 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 107163.11823596417,
            "unit": "ns/iter",
            "extra": "iterations: 7891\ncpu: 107158.14218730183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 199365.37124512554,
            "unit": "ns/iter",
            "extra": "iterations: 4361\ncpu: 199354.1618894744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 787650.4500832167,
            "unit": "ns/iter",
            "extra": "iterations: 1202\ncpu: 787576.9550748725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 437679.7511155397,
            "unit": "ns/iter",
            "extra": "iterations: 2017\ncpu: 437648.73574616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 1532.8245745162096,
            "unit": "ns/iter",
            "extra": "iterations: 524462\ncpu: 1532.8023765306193 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 9054.415052390312,
            "unit": "ns/iter",
            "extra": "iterations: 90856\ncpu: 9054.33102932116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 7041.689640811746,
            "unit": "ns/iter",
            "extra": "iterations: 115260\ncpu: 7041.613742842255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 7138.937731035946,
            "unit": "ns/iter",
            "extra": "iterations: 115242\ncpu: 7138.931118862876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 6817.433581649566,
            "unit": "ns/iter",
            "extra": "iterations: 120411\ncpu: 6817.276660770154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 33591.77488637846,
            "unit": "ns/iter",
            "extra": "iterations: 24863\ncpu: 33590.72115191256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 245191.47914379477,
            "unit": "ns/iter",
            "extra": "iterations: 3644\ncpu: 245188.9132821065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 182781.52924038458,
            "unit": "ns/iter",
            "extra": "iterations: 4805\ncpu: 182779.3548387098 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 195561.3262748586,
            "unit": "ns/iter",
            "extra": "iterations: 4628\ncpu: 195556.87121866798 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 195188.7366909743,
            "unit": "ns/iter",
            "extra": "iterations: 4527\ncpu: 195184.47095206435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 98189.09166945852,
            "unit": "ns/iter",
            "extra": "iterations: 8967\ncpu: 98187.86662205822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 184435.46687964632,
            "unit": "ns/iter",
            "extra": "iterations: 4695\ncpu: 184433.01384451523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 184.34998186364513,
            "unit": "ns/iter",
            "extra": "iterations: 3801757\ncpu: 184.34797384472517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1421.305667004473,
            "unit": "ns/iter",
            "extra": "iterations: 494247\ncpu: 1421.2883436824045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1086.7172829115038,
            "unit": "ns/iter",
            "extra": "iterations: 642791\ncpu: 1086.7022095828997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1122.9137417840514,
            "unit": "ns/iter",
            "extra": "iterations: 622874\ncpu: 1122.894357446281 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 830.0279195313263,
            "unit": "ns/iter",
            "extra": "iterations: 843209\ncpu: 830.0034748206017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9652.569100418497,
            "unit": "ns/iter",
            "extra": "iterations: 72467\ncpu: 9652.430761587995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 12628.613881877347,
            "unit": "ns/iter",
            "extra": "iterations: 55079\ncpu: 12628.342925615972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2598.708598966429,
            "unit": "ns/iter",
            "extra": "iterations: 251914\ncpu: 2598.4236683947765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2685.989804164974,
            "unit": "ns/iter",
            "extra": "iterations: 261087\ncpu: 2685.823116432456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2667.3914364827056,
            "unit": "ns/iter",
            "extra": "iterations: 262906\ncpu: 2667.1521380265176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5078.027196805834,
            "unit": "ns/iter",
            "extra": "iterations: 136744\ncpu: 5076.164950564588 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5163.636397137706,
            "unit": "ns/iter",
            "extra": "iterations: 135681\ncpu: 5163.368489324198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1956.0874620114832,
            "unit": "ns/iter",
            "extra": "iterations: 360305\ncpu: 1956.0819305865857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 9959.514320849406,
            "unit": "ns/iter",
            "extra": "iterations: 69933\ncpu: 9959.029356669971 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8012.053046562847,
            "unit": "ns/iter",
            "extra": "iterations: 87131\ncpu: 8011.553867165534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 8104.128200984943,
            "unit": "ns/iter",
            "extra": "iterations: 86653\ncpu: 8104.029866248056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 7953.802285051079,
            "unit": "ns/iter",
            "extra": "iterations: 87788\ncpu: 7953.391124071564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 17718.47310281981,
            "unit": "ns/iter",
            "extra": "iterations: 39651\ncpu: 17717.50775516396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 55079.99732220479,
            "unit": "ns/iter",
            "extra": "iterations: 12697\ncpu: 55075.22249350232 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 43425.74159314259,
            "unit": "ns/iter",
            "extra": "iterations: 16207\ncpu: 43422.58900475137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 43573.56686589758,
            "unit": "ns/iter",
            "extra": "iterations: 16062\ncpu: 43569.91034740434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 42907.35833904259,
            "unit": "ns/iter",
            "extra": "iterations: 16063\ncpu: 42907.21533960056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 25117.59151402274,
            "unit": "ns/iter",
            "extra": "iterations: 27952\ncpu: 25117.479965655297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 42855.68759561886,
            "unit": "ns/iter",
            "extra": "iterations: 16341\ncpu: 42853.87063215219 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1879.7571958615956,
            "unit": "ns/iter",
            "extra": "iterations: 377057\ncpu: 1879.7370158888612 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 9956.86574376664,
            "unit": "ns/iter",
            "extra": "iterations: 70358\ncpu: 9956.854941868705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 7932.413477205438,
            "unit": "ns/iter",
            "extra": "iterations: 87763\ncpu: 7931.802695896831 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 7992.626094461534,
            "unit": "ns/iter",
            "extra": "iterations: 88057\ncpu: 7992.083536799992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 7925.2484469219,
            "unit": "ns/iter",
            "extra": "iterations: 87729\ncpu: 7924.367085000456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 17377.147038466366,
            "unit": "ns/iter",
            "extra": "iterations: 40452\ncpu: 17376.78977553671 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 53378.215627180085,
            "unit": "ns/iter",
            "extra": "iterations: 12939\ncpu: 53378.097225442376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 42015.117392613975,
            "unit": "ns/iter",
            "extra": "iterations: 16645\ncpu: 42015.02553319233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 42041.3004322792,
            "unit": "ns/iter",
            "extra": "iterations: 16656\ncpu: 42037.5600384248 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 41899.06908308058,
            "unit": "ns/iter",
            "extra": "iterations: 16719\ncpu: 41896.61463006143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 24964.93408434593,
            "unit": "ns/iter",
            "extra": "iterations: 28051\ncpu: 24962.942497593347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 42788.968539064466,
            "unit": "ns/iter",
            "extra": "iterations: 17037\ncpu: 42785.71344720379 ns\nthreads: 1"
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
        "date": 1702492953542,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 625.0498050956,
            "unit": "ns/iter",
            "extra": "iterations: 1136711\ncpu: 625.0117224166918 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5356.17587000047,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5356.071 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10241.787252072327,
            "unit": "ns/iter",
            "extra": "iterations: 81425\ncpu: 10241.321461467609 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 15348.44917227176,
            "unit": "ns/iter",
            "extra": "iterations: 54124\ncpu: 15347.285862094457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 20144.608974821345,
            "unit": "ns/iter",
            "extra": "iterations: 41739\ncpu: 20143.127530606867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 24464.404695842488,
            "unit": "ns/iter",
            "extra": "iterations: 33519\ncpu: 24461.946955458094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 29936.091634315104,
            "unit": "ns/iter",
            "extra": "iterations: 28079\ncpu: 29934.44923252254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 34796.651027000626,
            "unit": "ns/iter",
            "extra": "iterations: 24148\ncpu: 34795.159019380495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 39538.401898002056,
            "unit": "ns/iter",
            "extra": "iterations: 21707\ncpu: 39536.3983968305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 544.4310084589492,
            "unit": "ns/iter",
            "extra": "iterations: 1287281\ncpu: 544.4125253149855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 418.73009098866714,
            "unit": "ns/iter",
            "extra": "iterations: 1671856\ncpu: 418.7053191183933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 414.9788680296325,
            "unit": "ns/iter",
            "extra": "iterations: 1801867\ncpu: 414.9648669962874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 415.7950365420378,
            "unit": "ns/iter",
            "extra": "iterations: 1688057\ncpu: 415.7824646916539 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 841.5124245829502,
            "unit": "ns/iter",
            "extra": "iterations: 832704\ncpu: 841.4999807854889 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1571.0807510052011,
            "unit": "ns/iter",
            "extra": "iterations: 512167\ncpu: 1571.0449911845174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 9425.892687869438,
            "unit": "ns/iter",
            "extra": "iterations: 85871\ncpu: 9425.873694262336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 7426.76809298932,
            "unit": "ns/iter",
            "extra": "iterations: 109863\ncpu: 7426.728743981138 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 7391.306196807397,
            "unit": "ns/iter",
            "extra": "iterations: 110331\ncpu: 7391.1357642004505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 6518.774375509924,
            "unit": "ns/iter",
            "extra": "iterations: 123741\ncpu: 6518.551652241365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 35220.08551290841,
            "unit": "ns/iter",
            "extra": "iterations: 23552\ncpu: 35219.22129755439 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 243990.78277886708,
            "unit": "ns/iter",
            "extra": "iterations: 3577\ncpu: 243980.51439754054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 185389.48505281378,
            "unit": "ns/iter",
            "extra": "iterations: 4449\ncpu: 185380.062935491 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 189723.41604558754,
            "unit": "ns/iter",
            "extra": "iterations: 4562\ncpu: 189712.29723805375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 186613.01482628894,
            "unit": "ns/iter",
            "extra": "iterations: 4519\ncpu: 186609.16131887614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 98272.07518881558,
            "unit": "ns/iter",
            "extra": "iterations: 8871\ncpu: 98267.45575470667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 181928.16868751042,
            "unit": "ns/iter",
            "extra": "iterations: 4701\ncpu: 181906.8496064668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 4868.3723726633425,
            "unit": "ns/iter",
            "extra": "iterations: 165329\ncpu: 4868.161060672953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 24313.948181262538,
            "unit": "ns/iter",
            "extra": "iterations: 34447\ncpu: 24311.90524573985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 18842.68885251955,
            "unit": "ns/iter",
            "extra": "iterations: 43992\ncpu: 18841.432533187864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 18315.307507376456,
            "unit": "ns/iter",
            "extra": "iterations: 45755\ncpu: 18313.950387935714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 18075.75518672179,
            "unit": "ns/iter",
            "extra": "iterations: 46754\ncpu: 18074.543354579273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 50679.016413522986,
            "unit": "ns/iter",
            "extra": "iterations: 16328\ncpu: 50675.312346888866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 267191.93870672863,
            "unit": "ns/iter",
            "extra": "iterations: 3263\ncpu: 267177.2908366517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 203601.12344227586,
            "unit": "ns/iter",
            "extra": "iterations: 4253\ncpu: 203588.64331060398 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 204738.41740966288,
            "unit": "ns/iter",
            "extra": "iterations: 4262\ncpu: 204723.6743313006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 204060.56106692294,
            "unit": "ns/iter",
            "extra": "iterations: 4274\ncpu: 204054.32849789396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 108915.42504672304,
            "unit": "ns/iter",
            "extra": "iterations: 8025\ncpu: 108910.76635514016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 197754.2585156797,
            "unit": "ns/iter",
            "extra": "iterations: 4433\ncpu: 197747.14640198514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 774530.901993365,
            "unit": "ns/iter",
            "extra": "iterations: 1204\ncpu: 774485.9634551528 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 436392.85482283,
            "unit": "ns/iter",
            "extra": "iterations: 2032\ncpu: 436368.2578740163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 1488.732637550081,
            "unit": "ns/iter",
            "extra": "iterations: 531679\ncpu: 1488.6689148903758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 9063.631050924214,
            "unit": "ns/iter",
            "extra": "iterations: 90606\ncpu: 9063.431781559702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 6594.9543265500115,
            "unit": "ns/iter",
            "extra": "iterations: 122303\ncpu: 6594.710677579453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 6679.68248780541,
            "unit": "ns/iter",
            "extra": "iterations: 122389\ncpu: 6679.294707857769 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 5992.729359702444,
            "unit": "ns/iter",
            "extra": "iterations: 134906\ncpu: 5992.402858286463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 33677.156751923365,
            "unit": "ns/iter",
            "extra": "iterations: 24593\ncpu: 33676.794209734304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 256698.63937282126,
            "unit": "ns/iter",
            "extra": "iterations: 3444\ncpu: 256693.81533101053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 192402.09982562042,
            "unit": "ns/iter",
            "extra": "iterations: 4588\ncpu: 192395.57541412365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 192823.2121145697,
            "unit": "ns/iter",
            "extra": "iterations: 4573\ncpu: 192817.6689263067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 190374.32777296117,
            "unit": "ns/iter",
            "extra": "iterations: 4616\ncpu: 190369.69237434972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 96773.14140409186,
            "unit": "ns/iter",
            "extra": "iterations: 9045\ncpu: 96771.63073521316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 184470.78870293443,
            "unit": "ns/iter",
            "extra": "iterations: 4780\ncpu: 184463.41004184107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 186.76429833305835,
            "unit": "ns/iter",
            "extra": "iterations: 3756312\ncpu: 186.75815533959985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1407.7826604351465,
            "unit": "ns/iter",
            "extra": "iterations: 497475\ncpu: 1407.7429016533436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1090.1709169136002,
            "unit": "ns/iter",
            "extra": "iterations: 640551\ncpu: 1090.1662787194052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1132.3600463901691,
            "unit": "ns/iter",
            "extra": "iterations: 619959\ncpu: 1132.3263312573897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 838.0135522534842,
            "unit": "ns/iter",
            "extra": "iterations: 836835\ncpu: 838.0036685846113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9716.06788960482,
            "unit": "ns/iter",
            "extra": "iterations: 72721\ncpu: 9715.977503059661 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 12602.303317876167,
            "unit": "ns/iter",
            "extra": "iterations: 55638\ncpu: 12601.779359430695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2779.9915553659575,
            "unit": "ns/iter",
            "extra": "iterations: 251047\ncpu: 2779.9133230032435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2818.1459606274534,
            "unit": "ns/iter",
            "extra": "iterations: 249259\ncpu: 2818.0912223831583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2788.7622752335383,
            "unit": "ns/iter",
            "extra": "iterations: 250260\ncpu: 2788.688164309142 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5204.8460388860085,
            "unit": "ns/iter",
            "extra": "iterations: 133826\ncpu: 5204.7173195044115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5279.33032400796,
            "unit": "ns/iter",
            "extra": "iterations: 132034\ncpu: 5279.209143099511 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1946.2244574699807,
            "unit": "ns/iter",
            "extra": "iterations: 360487\ncpu: 1946.1470177842602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10083.917086334266,
            "unit": "ns/iter",
            "extra": "iterations: 69301\ncpu: 10083.904994155766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8057.130569114285,
            "unit": "ns/iter",
            "extra": "iterations: 87065\ncpu: 8056.805834721117 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 8068.2421503930245,
            "unit": "ns/iter",
            "extra": "iterations: 86533\ncpu: 8067.97291206823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 7903.288808050683,
            "unit": "ns/iter",
            "extra": "iterations: 88242\ncpu: 7902.5985358446405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 17676.862385089305,
            "unit": "ns/iter",
            "extra": "iterations: 39705\ncpu: 17675.229819922028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 55293.286609054085,
            "unit": "ns/iter",
            "extra": "iterations: 12613\ncpu: 55289.30468564126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 43992.301454000095,
            "unit": "ns/iter",
            "extra": "iterations: 15956\ncpu: 43988.399348207386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 43487.108628370144,
            "unit": "ns/iter",
            "extra": "iterations: 16156\ncpu: 43481.72196088219 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 43738.203293970764,
            "unit": "ns/iter",
            "extra": "iterations: 16090\ncpu: 43736.59415786183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 25166.30994994752,
            "unit": "ns/iter",
            "extra": "iterations: 27769\ncpu: 25165.77478483188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 42664.072843644084,
            "unit": "ns/iter",
            "extra": "iterations: 16405\ncpu: 42661.25571472099 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1866.7666609623327,
            "unit": "ns/iter",
            "extra": "iterations: 373988\ncpu: 1866.726472507126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 9970.602062292819,
            "unit": "ns/iter",
            "extra": "iterations: 70795\ncpu: 9969.665936860009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 7793.024077357403,
            "unit": "ns/iter",
            "extra": "iterations: 88008\ncpu: 7791.893918734675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 7860.22526751563,
            "unit": "ns/iter",
            "extra": "iterations: 88406\ncpu: 7859.63961722053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 7860.789432380025,
            "unit": "ns/iter",
            "extra": "iterations: 89197\ncpu: 7860.651142975742 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 17306.053664921943,
            "unit": "ns/iter",
            "extra": "iterations: 40492\ncpu: 17305.398597254014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 52681.062551998075,
            "unit": "ns/iter",
            "extra": "iterations: 13221\ncpu: 52679.87292943052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 42590.52677602365,
            "unit": "ns/iter",
            "extra": "iterations: 16582\ncpu: 42589.58509226876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 42142.49413967837,
            "unit": "ns/iter",
            "extra": "iterations: 16552\ncpu: 42140.9074432095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 41927.8050409086,
            "unit": "ns/iter",
            "extra": "iterations: 16624\ncpu: 41927.370067373064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 24718.489358707582,
            "unit": "ns/iter",
            "extra": "iterations: 28427\ncpu: 24718.067330355207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 41695.91641808339,
            "unit": "ns/iter",
            "extra": "iterations: 17097\ncpu: 41695.12195121966 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}