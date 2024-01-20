window.BENCHMARK_DATA = {
  "lastUpdate": 1705774870698,
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
        "date": 1702503976433,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 563.4806185435012,
            "unit": "ns/iter",
            "extra": "iterations: 1202567\ncpu: 563.4286488819334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5356.345010000041,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5356.016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10305.134514680485,
            "unit": "ns/iter",
            "extra": "iterations: 80586\ncpu: 10304.643486461664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 15305.21030992497,
            "unit": "ns/iter",
            "extra": "iterations: 54239\ncpu: 15304.5889489113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 20380.130963150914,
            "unit": "ns/iter",
            "extra": "iterations: 40897\ncpu: 20379.120717901078 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 25399.898973905685,
            "unit": "ns/iter",
            "extra": "iterations: 32843\ncpu: 25398.474560789193 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 29599.350165039126,
            "unit": "ns/iter",
            "extra": "iterations: 28478\ncpu: 29598.546246225174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 34917.799100260454,
            "unit": "ns/iter",
            "extra": "iterations: 24007\ncpu: 34916.970050401964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 40086.298121959415,
            "unit": "ns/iter",
            "extra": "iterations: 21991\ncpu: 40085.384930198714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 532.1704461933007,
            "unit": "ns/iter",
            "extra": "iterations: 1302059\ncpu: 532.1605242158763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 409.4013802357269,
            "unit": "ns/iter",
            "extra": "iterations: 1709708\ncpu: 409.3680324359485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 410.86189112930026,
            "unit": "ns/iter",
            "extra": "iterations: 1702845\ncpu: 410.85283745731425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 380.29324939936816,
            "unit": "ns/iter",
            "extra": "iterations: 1709122\ncpu: 380.28941175644536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 797.5766874401521,
            "unit": "ns/iter",
            "extra": "iterations: 834237\ncpu: 797.5554908257487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1637.2388349751252,
            "unit": "ns/iter",
            "extra": "iterations: 496573\ncpu: 1637.1425752104908 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 10344.360725786604,
            "unit": "ns/iter",
            "extra": "iterations: 80740\ncpu: 10343.700767896951 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 7622.326031469931,
            "unit": "ns/iter",
            "extra": "iterations: 106959\ncpu: 7621.755065024901 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 7789.574290216219,
            "unit": "ns/iter",
            "extra": "iterations: 105983\ncpu: 7789.141654793695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 7190.305889540783,
            "unit": "ns/iter",
            "extra": "iterations: 112946\ncpu: 7189.764135073416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 35158.26703217419,
            "unit": "ns/iter",
            "extra": "iterations: 23529\ncpu: 35156.43673764299 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 225160.97748345617,
            "unit": "ns/iter",
            "extra": "iterations: 3775\ncpu: 225142.5430463572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 185027.6287172757,
            "unit": "ns/iter",
            "extra": "iterations: 4506\ncpu: 185019.9511762101 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 192932.35925595273,
            "unit": "ns/iter",
            "extra": "iterations: 4462\ncpu: 192912.28148812253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 186154.23263579584,
            "unit": "ns/iter",
            "extra": "iterations: 4492\ncpu: 186146.2154942118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 96574.6348200178,
            "unit": "ns/iter",
            "extra": "iterations: 8834\ncpu: 96569.67398686886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 187042.8932536429,
            "unit": "ns/iter",
            "extra": "iterations: 4684\ncpu: 187038.47139197303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 4961.256771006554,
            "unit": "ns/iter",
            "extra": "iterations: 165965\ncpu: 4961.164703401321 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 24040.67007777623,
            "unit": "ns/iter",
            "extra": "iterations: 34202\ncpu: 24040.61166013687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 18289.148056042697,
            "unit": "ns/iter",
            "extra": "iterations: 45037\ncpu: 18288.567178098034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 18409.100672965847,
            "unit": "ns/iter",
            "extra": "iterations: 44133\ncpu: 18409.077107833084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 17600.944236942527,
            "unit": "ns/iter",
            "extra": "iterations: 45783\ncpu: 17600.609396500884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 51140.96915784347,
            "unit": "ns/iter",
            "extra": "iterations: 16244\ncpu: 51140.75966510742 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 248393.04190886678,
            "unit": "ns/iter",
            "extra": "iterations: 3269\ncpu: 248375.68063628054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 205964.29778196223,
            "unit": "ns/iter",
            "extra": "iterations: 4238\ncpu: 205948.74941009993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 206194.77430801748,
            "unit": "ns/iter",
            "extra": "iterations: 4227\ncpu: 206182.58812396537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 204502.24583624786,
            "unit": "ns/iter",
            "extra": "iterations: 4263\ncpu: 204484.2364532026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 110235.75372756274,
            "unit": "ns/iter",
            "extra": "iterations: 7914\ncpu: 110229.20141521358 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 191114.62082865706,
            "unit": "ns/iter",
            "extra": "iterations: 4465\ncpu: 191097.6035834262 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 797848.8765638681,
            "unit": "ns/iter",
            "extra": "iterations: 1199\ncpu: 797832.6105087595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 433814.27290936565,
            "unit": "ns/iter",
            "extra": "iterations: 1997\ncpu: 433792.68903355044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 1493.9545032016208,
            "unit": "ns/iter",
            "extra": "iterations: 540038\ncpu: 1493.9306122902374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 9252.532123800007,
            "unit": "ns/iter",
            "extra": "iterations: 89015\ncpu: 9252.177722855717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 6531.7896062814625,
            "unit": "ns/iter",
            "extra": "iterations: 125826\ncpu: 6531.770858169217 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 6595.3519214513735,
            "unit": "ns/iter",
            "extra": "iterations: 119467\ncpu: 6595.108272577391 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 6394.222421780459,
            "unit": "ns/iter",
            "extra": "iterations: 129731\ncpu: 6394.082370443457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 33722.18911301453,
            "unit": "ns/iter",
            "extra": "iterations: 24837\ncpu: 33719.66018440227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 260018.24174526555,
            "unit": "ns/iter",
            "extra": "iterations: 3392\ncpu: 260001.50353773482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 201078.69683061473,
            "unit": "ns/iter",
            "extra": "iterations: 4575\ncpu: 201068.72131147594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 194658.93315685264,
            "unit": "ns/iter",
            "extra": "iterations: 4533\ncpu: 194650.7610853731 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 193793.977555038,
            "unit": "ns/iter",
            "extra": "iterations: 4589\ncpu: 193781.49923730575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 98006.86949247001,
            "unit": "ns/iter",
            "extra": "iterations: 8965\ncpu: 98003.45789180182 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 186274.83315823672,
            "unit": "ns/iter",
            "extra": "iterations: 4759\ncpu: 186262.2819920148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 187.2853003539772,
            "unit": "ns/iter",
            "extra": "iterations: 3665891\ncpu: 187.27147097390505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1399.79295022332,
            "unit": "ns/iter",
            "extra": "iterations: 501179\ncpu: 1399.7529824673488 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1143.4005856321514,
            "unit": "ns/iter",
            "extra": "iterations: 621892\ncpu: 1143.3954770281593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 957.918105287496,
            "unit": "ns/iter",
            "extra": "iterations: 714747\ncpu: 957.915598106744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 822.7943878421277,
            "unit": "ns/iter",
            "extra": "iterations: 850475\ncpu: 822.7383520973511 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9415.17321318692,
            "unit": "ns/iter",
            "extra": "iterations: 74798\ncpu: 9414.913500361019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 12266.149300998397,
            "unit": "ns/iter",
            "extra": "iterations: 57153\ncpu: 12265.298409532279 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2735.925784361306,
            "unit": "ns/iter",
            "extra": "iterations: 256132\ncpu: 2735.909218684125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2764.7164842978173,
            "unit": "ns/iter",
            "extra": "iterations: 253150\ncpu: 2764.6316413193713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2715.8434225590404,
            "unit": "ns/iter",
            "extra": "iterations: 254149\ncpu: 2715.826149227447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5149.175846916985,
            "unit": "ns/iter",
            "extra": "iterations: 144967\ncpu: 5148.926307366471 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5142.200517102904,
            "unit": "ns/iter",
            "extra": "iterations: 136143\ncpu: 5142.174037592834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1937.1146756908947,
            "unit": "ns/iter",
            "extra": "iterations: 363172\ncpu: 1937.0463581994109 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10013.713781321023,
            "unit": "ns/iter",
            "extra": "iterations: 70240\ncpu: 10013.536446469387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8050.3380804177705,
            "unit": "ns/iter",
            "extra": "iterations: 87071\ncpu: 8050.16251105406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 8068.1816101729355,
            "unit": "ns/iter",
            "extra": "iterations: 86972\ncpu: 8067.7884836498115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 8089.560656909863,
            "unit": "ns/iter",
            "extra": "iterations: 86709\ncpu: 8089.4267031104755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 17743.139611048322,
            "unit": "ns/iter",
            "extra": "iterations: 39388\ncpu: 17742.40123895599 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 55386.92745098802,
            "unit": "ns/iter",
            "extra": "iterations: 12750\ncpu: 55385.81960784353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 43737.405534828955,
            "unit": "ns/iter",
            "extra": "iterations: 16080\ncpu: 43735.28606965158 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 44245.69287066305,
            "unit": "ns/iter",
            "extra": "iterations: 15850\ncpu: 44245.48895899038 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 43857.85894947966,
            "unit": "ns/iter",
            "extra": "iterations: 15973\ncpu: 43855.49364552638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 25587.40557603018,
            "unit": "ns/iter",
            "extra": "iterations: 27403\ncpu: 25586.680290479337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 43484.68093288985,
            "unit": "ns/iter",
            "extra": "iterations: 16122\ncpu: 43484.530455278415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1955.6026518689823,
            "unit": "ns/iter",
            "extra": "iterations: 358615\ncpu: 1955.5916512136748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 10312.947568208961,
            "unit": "ns/iter",
            "extra": "iterations: 67440\ncpu: 10312.37247924082 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 8108.408701009702,
            "unit": "ns/iter",
            "extra": "iterations: 86036\ncpu: 8108.247710260752 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 8086.310759648091,
            "unit": "ns/iter",
            "extra": "iterations: 86369\ncpu: 8085.976449883741 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 7981.402071174445,
            "unit": "ns/iter",
            "extra": "iterations: 87390\ncpu: 7981.321661517295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 17515.964962882343,
            "unit": "ns/iter",
            "extra": "iterations: 39872\ncpu: 17515.918439005032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 54483.42539359628,
            "unit": "ns/iter",
            "extra": "iterations: 12767\ncpu: 54480.120623481766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 42944.05760354516,
            "unit": "ns/iter",
            "extra": "iterations: 16249\ncpu: 42943.17188750127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 42778.91749436488,
            "unit": "ns/iter",
            "extra": "iterations: 16411\ncpu: 42778.74596307304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 42829.40956088043,
            "unit": "ns/iter",
            "extra": "iterations: 16442\ncpu: 42827.81900012203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 25227.286290760654,
            "unit": "ns/iter",
            "extra": "iterations: 27755\ncpu: 25226.838407494266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 41441.017190772254,
            "unit": "ns/iter",
            "extra": "iterations: 16695\ncpu: 41438.60437256658 ns\nthreads: 1"
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
        "date": 1705575654715,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 547.8695063701166,
            "unit": "ns/iter",
            "extra": "iterations: 1272269\ncpu: 547.827306961028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5086.3425800002915,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5086.272999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10053.851332923523,
            "unit": "ns/iter",
            "extra": "iterations: 82863\ncpu: 10053.91067183182 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 14892.476597878445,
            "unit": "ns/iter",
            "extra": "iterations: 55871\ncpu: 14892.029854486223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 19840.125366345917,
            "unit": "ns/iter",
            "extra": "iterations: 42651\ncpu: 19839.994372933805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 24484.265461636063,
            "unit": "ns/iter",
            "extra": "iterations: 33858\ncpu: 24483.489869454774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 29388.58817561624,
            "unit": "ns/iter",
            "extra": "iterations: 28585\ncpu: 29387.248556935447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 34387.315091074,
            "unit": "ns/iter",
            "extra": "iterations: 24266\ncpu: 34385.23448446388 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 39367.97248125762,
            "unit": "ns/iter",
            "extra": "iterations: 21876\ncpu: 39364.829036386895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 542.1295191927372,
            "unit": "ns/iter",
            "extra": "iterations: 1293013\ncpu: 542.1114868914694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 417.18680049645883,
            "unit": "ns/iter",
            "extra": "iterations: 1681639\ncpu: 417.1670019546412 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 434.8964261485759,
            "unit": "ns/iter",
            "extra": "iterations: 1609692\ncpu: 434.8823874380929 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 418.7441759554133,
            "unit": "ns/iter",
            "extra": "iterations: 1670832\ncpu: 418.7315660700778 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 854.7066209370987,
            "unit": "ns/iter",
            "extra": "iterations: 828931\ncpu: 854.6886290897555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1584.4113522440161,
            "unit": "ns/iter",
            "extra": "iterations: 511705\ncpu: 1584.3450816388356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 9500.37101797195,
            "unit": "ns/iter",
            "extra": "iterations: 84128\ncpu: 9499.895397489536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 7067.319531960715,
            "unit": "ns/iter",
            "extra": "iterations: 114264\ncpu: 7067.187390604226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 7321.591945968938,
            "unit": "ns/iter",
            "extra": "iterations: 110603\ncpu: 7321.23450539316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 7099.2582667633515,
            "unit": "ns/iter",
            "extra": "iterations: 114041\ncpu: 7099.18625757404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 34980.411085253865,
            "unit": "ns/iter",
            "extra": "iterations: 23635\ncpu: 34977.516395176586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 229221.74291711542,
            "unit": "ns/iter",
            "extra": "iterations: 3812\ncpu: 229209.02413431197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 178443.23221448017,
            "unit": "ns/iter",
            "extra": "iterations: 4737\ncpu: 178435.61325733614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 175336.99829860404,
            "unit": "ns/iter",
            "extra": "iterations: 4702\ncpu: 175335.0063802638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 179977.08347601464,
            "unit": "ns/iter",
            "extra": "iterations: 4672\ncpu: 179968.4717465755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 96562.07811462323,
            "unit": "ns/iter",
            "extra": "iterations: 9038\ncpu: 96559.20557645513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 180186.208307628,
            "unit": "ns/iter",
            "extra": "iterations: 4863\ncpu: 180174.95373226402 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 4954.331599332668,
            "unit": "ns/iter",
            "extra": "iterations: 167820\ncpu: 4954.131212012874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 24227.223424365682,
            "unit": "ns/iter",
            "extra": "iterations: 34383\ncpu: 24226.5363697176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 18432.05036664973,
            "unit": "ns/iter",
            "extra": "iterations: 44593\ncpu: 18431.370394456535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 18262.509474153092,
            "unit": "ns/iter",
            "extra": "iterations: 45070\ncpu: 18261.94808076327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 17960.25556778634,
            "unit": "ns/iter",
            "extra": "iterations: 47236\ncpu: 17959.278939791693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 51012.063203513775,
            "unit": "ns/iter",
            "extra": "iterations: 16613\ncpu: 50978.871967736086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 267591.0707937599,
            "unit": "ns/iter",
            "extra": "iterations: 3263\ncpu: 267577.35212994216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 204939.2495287477,
            "unit": "ns/iter",
            "extra": "iterations: 4244\ncpu: 204937.1819038644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 207500.08079848543,
            "unit": "ns/iter",
            "extra": "iterations: 4208\ncpu: 207485.4562737628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 205687.24139524737,
            "unit": "ns/iter",
            "extra": "iterations: 4329\ncpu: 205682.6518826507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 109475.95655983585,
            "unit": "ns/iter",
            "extra": "iterations: 7988\ncpu: 109469.7421131698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 197177.71990282,
            "unit": "ns/iter",
            "extra": "iterations: 4527\ncpu: 197175.2153744206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 784771.9723154175,
            "unit": "ns/iter",
            "extra": "iterations: 1192\ncpu: 784711.4932885899 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 438036.2240356299,
            "unit": "ns/iter",
            "extra": "iterations: 2022\ncpu: 438021.5133531167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 1534.272488640417,
            "unit": "ns/iter",
            "extra": "iterations: 526866\ncpu: 1534.1891486639904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 9014.517668960343,
            "unit": "ns/iter",
            "extra": "iterations: 91856\ncpu: 9014.335481623382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 6816.254388436271,
            "unit": "ns/iter",
            "extra": "iterations: 120658\ncpu: 6815.878764773119 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 6921.008654868455,
            "unit": "ns/iter",
            "extra": "iterations: 118546\ncpu: 6921.045838746163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 6552.863035861239,
            "unit": "ns/iter",
            "extra": "iterations: 123003\ncpu: 6552.89220588118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 34225.51429740241,
            "unit": "ns/iter",
            "extra": "iterations: 24445\ncpu: 34224.70443853556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 260602.90824354216,
            "unit": "ns/iter",
            "extra": "iterations: 3433\ncpu: 260594.96067579289 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 194305.6409580163,
            "unit": "ns/iter",
            "extra": "iterations: 4551\ncpu: 194306.9435288955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 195435.31136665287,
            "unit": "ns/iter",
            "extra": "iterations: 4522\ncpu: 195434.1441839896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 193511.0339019946,
            "unit": "ns/iter",
            "extra": "iterations: 4572\ncpu: 193512.37970253688 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 97466.13642413256,
            "unit": "ns/iter",
            "extra": "iterations: 9016\ncpu: 97462.47781721383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 184648.81399786935,
            "unit": "ns/iter",
            "extra": "iterations: 4715\ncpu: 184647.4231177097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 184.98713454403494,
            "unit": "ns/iter",
            "extra": "iterations: 3782843\ncpu: 184.98586909369345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1410.1931442471775,
            "unit": "ns/iter",
            "extra": "iterations: 496634\ncpu: 1410.2044966715944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1078.485942257058,
            "unit": "ns/iter",
            "extra": "iterations: 640181\ncpu: 1078.4735879384184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1110.2953578231457,
            "unit": "ns/iter",
            "extra": "iterations: 627852\ncpu: 1110.2880933723263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 824.5668282020464,
            "unit": "ns/iter",
            "extra": "iterations: 851826\ncpu: 824.5638193715599 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9417.834694096133,
            "unit": "ns/iter",
            "extra": "iterations: 74958\ncpu: 9417.641879452527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 12413.798851801173,
            "unit": "ns/iter",
            "extra": "iterations: 56262\ncpu: 12413.890370054358 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2744.1839516644222,
            "unit": "ns/iter",
            "extra": "iterations: 255877\ncpu: 2744.1266702360645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2799.1124971492873,
            "unit": "ns/iter",
            "extra": "iterations: 249953\ncpu: 2799.087428436569 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2714.37659706069,
            "unit": "ns/iter",
            "extra": "iterations: 257113\ncpu: 2714.356722530551 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5105.625397686271,
            "unit": "ns/iter",
            "extra": "iterations: 136414\ncpu: 5105.6607093113125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5060.790583550377,
            "unit": "ns/iter",
            "extra": "iterations: 135104\ncpu: 5060.501539554681 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1920.645673959648,
            "unit": "ns/iter",
            "extra": "iterations: 364317\ncpu: 1920.6034854261532 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10053.073283645295,
            "unit": "ns/iter",
            "extra": "iterations: 69770\ncpu: 10052.675935215724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8088.131588609042,
            "unit": "ns/iter",
            "extra": "iterations: 87158\ncpu: 8087.732623511383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 8049.551121163802,
            "unit": "ns/iter",
            "extra": "iterations: 87097\ncpu: 8049.603315843292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 7997.924573049442,
            "unit": "ns/iter",
            "extra": "iterations: 88125\ncpu: 7997.636312056751 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 17644.93197398287,
            "unit": "ns/iter",
            "extra": "iterations: 39823\ncpu: 17644.268387615197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 51795.79841164321,
            "unit": "ns/iter",
            "extra": "iterations: 13473\ncpu: 51793.75046389096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 41467.45181962271,
            "unit": "ns/iter",
            "extra": "iterations: 17009\ncpu: 41465.982715033126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 41691.049704491896,
            "unit": "ns/iter",
            "extra": "iterations: 16920\ncpu: 41689.76950354596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 41596.099923766145,
            "unit": "ns/iter",
            "extra": "iterations: 17053\ncpu: 41594.75752067051 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 24617.527869427977,
            "unit": "ns/iter",
            "extra": "iterations: 28490\ncpu: 24616.346086346053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 40666.02943567479,
            "unit": "ns/iter",
            "extra": "iterations: 17224\ncpu: 40665.10102183045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1868.4605680517375,
            "unit": "ns/iter",
            "extra": "iterations: 373276\ncpu: 1868.3716606478727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 10037.429338386908,
            "unit": "ns/iter",
            "extra": "iterations: 69663\ncpu: 10037.34981266958 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 7900.269577663989,
            "unit": "ns/iter",
            "extra": "iterations: 88034\ncpu: 7899.854601631081 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 7973.0270442683695,
            "unit": "ns/iter",
            "extra": "iterations: 87782\ncpu: 7972.63562005871 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 7826.528314853002,
            "unit": "ns/iter",
            "extra": "iterations: 87304\ncpu: 7826.345871895917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 17348.51168657727,
            "unit": "ns/iter",
            "extra": "iterations: 40431\ncpu: 17346.92438970088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 52560.981833643134,
            "unit": "ns/iter",
            "extra": "iterations: 12936\ncpu: 52560.48237476882 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 43453.90590590928,
            "unit": "ns/iter",
            "extra": "iterations: 15984\ncpu: 43451.82057057033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 40827.133459102704,
            "unit": "ns/iter",
            "extra": "iterations: 16432\ncpu: 40820.539191820964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 41571.509920165205,
            "unit": "ns/iter",
            "extra": "iterations: 17036\ncpu: 41570.16318384602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 24922.304660641094,
            "unit": "ns/iter",
            "extra": "iterations: 28215\ncpu: 24921.761474392773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 41314.93630645535,
            "unit": "ns/iter",
            "extra": "iterations: 17647\ncpu: 41312.09837366076 ns\nthreads: 1"
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
          "id": "4c1f90876aa9fbfe7c3d4e17807fabb3578467e0",
          "message": "Update parser.hpp (#2)",
          "timestamp": "2024-01-20T17:20:02Z",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/4c1f90876aa9fbfe7c3d4e17807fabb3578467e0"
        },
        "date": 1705773470864,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 575.078072591743,
            "unit": "ns/iter",
            "extra": "iterations: 1234300\ncpu: 575.063031677874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5321.717959999432,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5321.577999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10030.361758364606,
            "unit": "ns/iter",
            "extra": "iterations: 82099\ncpu: 10030.15992886637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 15073.348830840507,
            "unit": "ns/iter",
            "extra": "iterations: 54783\ncpu: 15073.261778288888 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 19929.049230549255,
            "unit": "ns/iter",
            "extra": "iterations: 41783\ncpu: 19928.190891032245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 24756.675316606794,
            "unit": "ns/iter",
            "extra": "iterations: 33796\ncpu: 24756.31435672861 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 29846.67800630321,
            "unit": "ns/iter",
            "extra": "iterations: 28249\ncpu: 29844.621048532717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 34731.973227178445,
            "unit": "ns/iter",
            "extra": "iterations: 24241\ncpu: 34730.51854296439 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 38887.582009118734,
            "unit": "ns/iter",
            "extra": "iterations: 21711\ncpu: 38885.72612961169 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 539.1994313360274,
            "unit": "ns/iter",
            "extra": "iterations: 1300944\ncpu: 539.1694800083638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 417.67212485497464,
            "unit": "ns/iter",
            "extra": "iterations: 1675159\ncpu: 417.64805609497375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 418.16317915225756,
            "unit": "ns/iter",
            "extra": "iterations: 1670244\ncpu: 418.138667164797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 418.37018027412347,
            "unit": "ns/iter",
            "extra": "iterations: 1681994\ncpu: 418.3645125963584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 840.3338507902456,
            "unit": "ns/iter",
            "extra": "iterations: 867705\ncpu: 840.29030603719 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1625.738212443485,
            "unit": "ns/iter",
            "extra": "iterations: 508672\ncpu: 1625.6479617513846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 9638.978153621274,
            "unit": "ns/iter",
            "extra": "iterations: 84728\ncpu: 9638.654281937494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 7324.011408173392,
            "unit": "ns/iter",
            "extra": "iterations: 111499\ncpu: 7323.447743925944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 7667.412727220098,
            "unit": "ns/iter",
            "extra": "iterations: 105239\ncpu: 7667.064491300746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 7341.329127224738,
            "unit": "ns/iter",
            "extra": "iterations: 111346\ncpu: 7341.012699154013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 35339.95609652183,
            "unit": "ns/iter",
            "extra": "iterations: 23415\ncpu: 35338.039718129476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 245117.05440850256,
            "unit": "ns/iter",
            "extra": "iterations: 3584\ncpu: 245099.27455357197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 189140.31333037966,
            "unit": "ns/iter",
            "extra": "iterations: 4516\ncpu: 189132.81665190434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 183828.72929652504,
            "unit": "ns/iter",
            "extra": "iterations: 4492\ncpu: 183817.80943900262 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 182774.54708619777,
            "unit": "ns/iter",
            "extra": "iterations: 4513\ncpu: 182767.69333037935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 98177.96462477013,
            "unit": "ns/iter",
            "extra": "iterations: 8848\ncpu: 98170.61482820974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 181161.97790867926,
            "unit": "ns/iter",
            "extra": "iterations: 4753\ncpu: 181154.89164738078 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 4868.671029120995,
            "unit": "ns/iter",
            "extra": "iterations: 167337\ncpu: 4868.414636332678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 23596.37478256154,
            "unit": "ns/iter",
            "extra": "iterations: 35642\ncpu: 23594.455978901264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 18516.561588726006,
            "unit": "ns/iter",
            "extra": "iterations: 44992\ncpu: 18515.402738264547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 18166.134225822316,
            "unit": "ns/iter",
            "extra": "iterations: 45416\ncpu: 18165.0607715343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 17435.495865822555,
            "unit": "ns/iter",
            "extra": "iterations: 46684\ncpu: 17434.804215577067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 50950.696786041946,
            "unit": "ns/iter",
            "extra": "iterations: 16335\ncpu: 50947.30945821855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 265004.91716866835,
            "unit": "ns/iter",
            "extra": "iterations: 3320\ncpu: 264988.042168675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 203747.67628429786,
            "unit": "ns/iter",
            "extra": "iterations: 4263\ncpu: 203734.41238564425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 204270.33956386292,
            "unit": "ns/iter",
            "extra": "iterations: 4494\ncpu: 204259.63506898217 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 210960.34718498925,
            "unit": "ns/iter",
            "extra": "iterations: 3730\ncpu: 210943.67292225137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 109492.3758169839,
            "unit": "ns/iter",
            "extra": "iterations: 7956\ncpu: 109484.48969331295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 182882.99797253552,
            "unit": "ns/iter",
            "extra": "iterations: 4439\ncpu: 182871.93061500325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 789185.6641974839,
            "unit": "ns/iter",
            "extra": "iterations: 1215\ncpu: 789146.0082304521 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 431960.8484997425,
            "unit": "ns/iter",
            "extra": "iterations: 2033\ncpu: 431932.3167732441 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 1558.1934128520854,
            "unit": "ns/iter",
            "extra": "iterations: 521470\ncpu: 1558.1373808656301 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 8919.553897880476,
            "unit": "ns/iter",
            "extra": "iterations: 92499\ncpu: 8919.032638190685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 6474.988770624094,
            "unit": "ns/iter",
            "extra": "iterations: 126365\ncpu: 6474.742215012071 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 6575.249228344709,
            "unit": "ns/iter",
            "extra": "iterations: 124408\ncpu: 6574.812713008796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 6496.059700901856,
            "unit": "ns/iter",
            "extra": "iterations: 126313\ncpu: 6495.633861914474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 33554.00312976214,
            "unit": "ns/iter",
            "extra": "iterations: 24922\ncpu: 33551.80563357668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 260806.68239259525,
            "unit": "ns/iter",
            "extra": "iterations: 3561\ncpu: 260791.5754001685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 190147.0064102519,
            "unit": "ns/iter",
            "extra": "iterations: 4524\ncpu: 190131.0786914228 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 189613.4614364542,
            "unit": "ns/iter",
            "extra": "iterations: 4525\ncpu: 189600.53038674008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 192610.18413597878,
            "unit": "ns/iter",
            "extra": "iterations: 4589\ncpu: 192598.9540204827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 97814.27915509263,
            "unit": "ns/iter",
            "extra": "iterations: 8995\ncpu: 97809.57198443552 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 174556.42914298802,
            "unit": "ns/iter",
            "extra": "iterations: 4749\ncpu: 174541.37713202732 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 185.2748042427189,
            "unit": "ns/iter",
            "extra": "iterations: 3776743\ncpu: 185.26656433863764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1369.6990126774228,
            "unit": "ns/iter",
            "extra": "iterations: 499938\ncpu: 1369.6486364309135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1141.3464112507104,
            "unit": "ns/iter",
            "extra": "iterations: 613222\ncpu: 1141.352560736569 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1149.7650613655046,
            "unit": "ns/iter",
            "extra": "iterations: 616063\ncpu: 1149.7439385257717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 833.9690093175033,
            "unit": "ns/iter",
            "extra": "iterations: 839704\ncpu: 833.9498204129083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9341.324312812254,
            "unit": "ns/iter",
            "extra": "iterations: 75125\ncpu: 9341.064891846967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 12255.928474725486,
            "unit": "ns/iter",
            "extra": "iterations: 56875\ncpu: 12255.662417582478 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2732.7340253965663,
            "unit": "ns/iter",
            "extra": "iterations: 255468\ncpu: 2732.7489157154628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2737.786609423889,
            "unit": "ns/iter",
            "extra": "iterations: 255986\ncpu: 2737.6926863187896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2667.0883471058182,
            "unit": "ns/iter",
            "extra": "iterations: 255945\ncpu: 2667.0749575104137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 4937.615711984468,
            "unit": "ns/iter",
            "extra": "iterations: 142159\ncpu: 4937.550911303577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5363.679240839373,
            "unit": "ns/iter",
            "extra": "iterations: 135887\ncpu: 5363.638169950034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1917.8811897723133,
            "unit": "ns/iter",
            "extra": "iterations: 365280\ncpu: 1917.7532303986088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10101.67605289288,
            "unit": "ns/iter",
            "extra": "iterations: 69499\ncpu: 10101.552540324154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8041.366321177124,
            "unit": "ns/iter",
            "extra": "iterations: 87123\ncpu: 8041.130355933695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 8080.666505133839,
            "unit": "ns/iter",
            "extra": "iterations: 86670\ncpu: 8080.406138225384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 7878.9502171811,
            "unit": "ns/iter",
            "extra": "iterations: 88866\ncpu: 7878.862557108494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 17537.756614021746,
            "unit": "ns/iter",
            "extra": "iterations: 39953\ncpu: 17537.10609966709 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 55246.92460003665,
            "unit": "ns/iter",
            "extra": "iterations: 12626\ncpu: 55246.65769048029 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 42745.097186068466,
            "unit": "ns/iter",
            "extra": "iterations: 16134\ncpu: 42743.73373001066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 43617.855942303955,
            "unit": "ns/iter",
            "extra": "iterations: 15945\ncpu: 43618.04954531139 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 43305.11103584215,
            "unit": "ns/iter",
            "extra": "iterations: 16238\ncpu: 43304.10149033101 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 24596.456403268374,
            "unit": "ns/iter",
            "extra": "iterations: 27892\ncpu: 24596.576079162594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 43004.17891711387,
            "unit": "ns/iter",
            "extra": "iterations: 17047\ncpu: 43003.6370035788 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1857.2077774794468,
            "unit": "ns/iter",
            "extra": "iterations: 376523\ncpu: 1857.2156282617432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 9924.308491411355,
            "unit": "ns/iter",
            "extra": "iterations: 70271\ncpu: 9923.90317485172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 7899.673388504067,
            "unit": "ns/iter",
            "extra": "iterations: 88815\ncpu: 7899.643078308929 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 8007.036775185016,
            "unit": "ns/iter",
            "extra": "iterations: 87695\ncpu: 8006.912594788683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 7875.006325103531,
            "unit": "ns/iter",
            "extra": "iterations: 88378\ncpu: 7875.049220394186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 17134.92690470902,
            "unit": "ns/iter",
            "extra": "iterations: 40413\ncpu: 17134.65963922474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 53728.234906015925,
            "unit": "ns/iter",
            "extra": "iterations: 13035\ncpu: 53725.86114307585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 42179.40067747335,
            "unit": "ns/iter",
            "extra": "iterations: 16532\ncpu: 42179.15557706323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 41066.15022407785,
            "unit": "ns/iter",
            "extra": "iterations: 16735\ncpu: 41066.35793247703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 41584.54274805015,
            "unit": "ns/iter",
            "extra": "iterations: 16761\ncpu: 41583.93293956214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 24647.077124740044,
            "unit": "ns/iter",
            "extra": "iterations: 28227\ncpu: 24646.629113968636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 41287.33342781833,
            "unit": "ns/iter",
            "extra": "iterations: 17638\ncpu: 41286.00748384107 ns\nthreads: 1"
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
          "id": "4c1f90876aa9fbfe7c3d4e17807fabb3578467e0",
          "message": "Update parser.hpp (#2)",
          "timestamp": "2024-01-20T17:20:02Z",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/4c1f90876aa9fbfe7c3d4e17807fabb3578467e0"
        },
        "date": 1705774870160,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 584.9857072839277,
            "unit": "ns/iter",
            "extra": "iterations: 1252736\ncpu: 584.9440744099315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5167.678440000145,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5167.347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10055.017286169936,
            "unit": "ns/iter",
            "extra": "iterations: 82378\ncpu: 10054.735487630192 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 14856.107741737373,
            "unit": "ns/iter",
            "extra": "iterations: 55401\ncpu: 14855.860002527032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 19648.036825186642,
            "unit": "ns/iter",
            "extra": "iterations: 42308\ncpu: 19647.901106173766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 24551.974056323947,
            "unit": "ns/iter",
            "extra": "iterations: 33804\ncpu: 24550.647852325175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 29375.96804411247,
            "unit": "ns/iter",
            "extra": "iterations: 28289\ncpu: 29373.866167061424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 36125.708909084184,
            "unit": "ns/iter",
            "extra": "iterations: 24099\ncpu: 36123.51134901862 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 39359.64892202451,
            "unit": "ns/iter",
            "extra": "iterations: 21058\ncpu: 39357.88773862662 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 534.0692644339133,
            "unit": "ns/iter",
            "extra": "iterations: 1282101\ncpu: 534.0342141531742 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 412.96759389676566,
            "unit": "ns/iter",
            "extra": "iterations: 1696810\ncpu: 412.9428162257415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 412.6747494387883,
            "unit": "ns/iter",
            "extra": "iterations: 1694097\ncpu: 412.6505152892666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 412.9813558599342,
            "unit": "ns/iter",
            "extra": "iterations: 1689378\ncpu: 412.96713938502774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 837.0090326757397,
            "unit": "ns/iter",
            "extra": "iterations: 837072\ncpu: 836.9386384922691 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1568.8281182635424,
            "unit": "ns/iter",
            "extra": "iterations: 505650\ncpu: 1568.769900128549 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 9374.257844620062,
            "unit": "ns/iter",
            "extra": "iterations: 84644\ncpu: 9373.994612730963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 7120.610256681141,
            "unit": "ns/iter",
            "extra": "iterations: 113721\ncpu: 7120.565243006991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 7252.049951438498,
            "unit": "ns/iter",
            "extra": "iterations: 112229\ncpu: 7251.725489846666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 7244.835419302812,
            "unit": "ns/iter",
            "extra": "iterations: 108263\ncpu: 7244.598801067766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 35051.51008072705,
            "unit": "ns/iter",
            "extra": "iterations: 23659\ncpu: 35050.1754089352 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 236278.96743670842,
            "unit": "ns/iter",
            "extra": "iterations: 3593\ncpu: 236261.17450598427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 182884.96735054994,
            "unit": "ns/iter",
            "extra": "iterations: 4533\ncpu: 182869.11537613106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 182410.48175183166,
            "unit": "ns/iter",
            "extra": "iterations: 4521\ncpu: 182400.70780800676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 190975.37153541486,
            "unit": "ns/iter",
            "extra": "iterations: 4546\ncpu: 190963.37439507231 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 98556.38885128293,
            "unit": "ns/iter",
            "extra": "iterations: 8862\ncpu: 98551.70390431036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 185556.32258750097,
            "unit": "ns/iter",
            "extra": "iterations: 4715\ncpu: 185545.0689289503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 4938.574138179068,
            "unit": "ns/iter",
            "extra": "iterations: 166972\ncpu: 4938.293845674723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 24250.52026910645,
            "unit": "ns/iter",
            "extra": "iterations: 34782\ncpu: 24249.281237421692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 19014.18043173324,
            "unit": "ns/iter",
            "extra": "iterations: 44194\ncpu: 19013.13752998144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 18476.755495847246,
            "unit": "ns/iter",
            "extra": "iterations: 45034\ncpu: 18475.518497135527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 17922.948133544003,
            "unit": "ns/iter",
            "extra": "iterations: 46157\ncpu: 17921.985830968213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 49815.126373289764,
            "unit": "ns/iter",
            "extra": "iterations: 16475\ncpu: 49813.742033383794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 266588.1100580711,
            "unit": "ns/iter",
            "extra": "iterations: 3271\ncpu: 266583.06328339915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 203456.05221259154,
            "unit": "ns/iter",
            "extra": "iterations: 4271\ncpu: 203449.68391477532 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 204656.28208146838,
            "unit": "ns/iter",
            "extra": "iterations: 4247\ncpu: 204647.82199199445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 189944.34042054706,
            "unit": "ns/iter",
            "extra": "iterations: 4280\ncpu: 189941.2850467289 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 108630.67453478106,
            "unit": "ns/iter",
            "extra": "iterations: 8007\ncpu: 108628.2003247156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 192594.25388250125,
            "unit": "ns/iter",
            "extra": "iterations: 4443\ncpu: 192588.70132793178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 785900.8694929645,
            "unit": "ns/iter",
            "extra": "iterations: 1203\ncpu: 785872.5685785514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 457458.48892321833,
            "unit": "ns/iter",
            "extra": "iterations: 1941\ncpu: 457446.41937145806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 1518.6291448798438,
            "unit": "ns/iter",
            "extra": "iterations: 526885\ncpu: 1518.538200935686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 8550.158174945092,
            "unit": "ns/iter",
            "extra": "iterations: 95230\ncpu: 8549.765830095514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 6674.5954267415145,
            "unit": "ns/iter",
            "extra": "iterations: 121795\ncpu: 6674.425879551653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 6608.342901968535,
            "unit": "ns/iter",
            "extra": "iterations: 122379\ncpu: 6608.293906634262 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 6255.714760414282,
            "unit": "ns/iter",
            "extra": "iterations: 130308\ncpu: 6255.380329680453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 33733.53274229087,
            "unit": "ns/iter",
            "extra": "iterations: 24815\ncpu: 33732.08946201897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 256430.79423749135,
            "unit": "ns/iter",
            "extra": "iterations: 3436\ncpu: 256426.74621653164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 179418.87717749804,
            "unit": "ns/iter",
            "extra": "iterations: 4535\ncpu: 179414.9062844539 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 191661.2895828708,
            "unit": "ns/iter",
            "extra": "iterations: 4579\ncpu: 191655.12120550452 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 189633.91572455358,
            "unit": "ns/iter",
            "extra": "iterations: 4865\ncpu: 189630.87358684343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 97252.23286457699,
            "unit": "ns/iter",
            "extra": "iterations: 9031\ncpu: 97249.40759605852 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 187355.8281512747,
            "unit": "ns/iter",
            "extra": "iterations: 4760\ncpu: 187351.97478991584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 185.6170473487901,
            "unit": "ns/iter",
            "extra": "iterations: 3771038\ncpu: 185.61374878746884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1411.931590220054,
            "unit": "ns/iter",
            "extra": "iterations: 492108\ncpu: 1411.8947466816203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1082.005240344826,
            "unit": "ns/iter",
            "extra": "iterations: 646904\ncpu: 1081.9875901215655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1067.4478106788956,
            "unit": "ns/iter",
            "extra": "iterations: 656916\ncpu: 1067.414098606207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 827.7348520692559,
            "unit": "ns/iter",
            "extra": "iterations: 845396\ncpu: 827.7226293949803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9445.062488937765,
            "unit": "ns/iter",
            "extra": "iterations: 73453\ncpu: 9444.531877527124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 11728.681777734415,
            "unit": "ns/iter",
            "extra": "iterations: 59559\ncpu: 11728.469248980055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2682.483343213623,
            "unit": "ns/iter",
            "extra": "iterations: 259774\ncpu: 2682.4381962783036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2715.067423218114,
            "unit": "ns/iter",
            "extra": "iterations: 256603\ncpu: 2715.049707135129 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2679.0446856660305,
            "unit": "ns/iter",
            "extra": "iterations: 260710\ncpu: 2679.000421924753 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5152.393801276585,
            "unit": "ns/iter",
            "extra": "iterations: 136028\ncpu: 5151.9216631870095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5104.463436123776,
            "unit": "ns/iter",
            "extra": "iterations: 137335\ncpu: 5104.109658863337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1951.782804212455,
            "unit": "ns/iter",
            "extra": "iterations: 364252\ncpu: 1951.6505056938634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10049.531690040023,
            "unit": "ns/iter",
            "extra": "iterations: 70022\ncpu: 10048.953186141482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8036.002117456112,
            "unit": "ns/iter",
            "extra": "iterations: 87369\ncpu: 8035.700305600359 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 7984.162971162245,
            "unit": "ns/iter",
            "extra": "iterations: 88531\ncpu: 7983.79098846728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 8006.217314346087,
            "unit": "ns/iter",
            "extra": "iterations: 87569\ncpu: 8005.777158583622 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 18043.45623968326,
            "unit": "ns/iter",
            "extra": "iterations: 39385\ncpu: 18041.873809826026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 54817.342401129885,
            "unit": "ns/iter",
            "extra": "iterations: 12719\ncpu: 54815.49650129813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 42947.68900427171,
            "unit": "ns/iter",
            "extra": "iterations: 16370\ncpu: 42946.652412950425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 43048.60298451891,
            "unit": "ns/iter",
            "extra": "iterations: 16284\ncpu: 43048.28666175443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 43220.58018664176,
            "unit": "ns/iter",
            "extra": "iterations: 16181\ncpu: 43219.81336134999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 24918.61646908075,
            "unit": "ns/iter",
            "extra": "iterations: 28089\ncpu: 24918.43782263516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 42491.73743152663,
            "unit": "ns/iter",
            "extra": "iterations: 16430\ncpu: 42490.29823493573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1877.5754676038894,
            "unit": "ns/iter",
            "extra": "iterations: 373286\ncpu: 1877.5619766077737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 10001.8728060799,
            "unit": "ns/iter",
            "extra": "iterations: 70137\ncpu: 10001.715214508793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 7923.342231580884,
            "unit": "ns/iter",
            "extra": "iterations: 88332\ncpu: 7923.286011864294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 7922.255762090953,
            "unit": "ns/iter",
            "extra": "iterations: 88336\ncpu: 7922.039712008743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 7855.373041140313,
            "unit": "ns/iter",
            "extra": "iterations: 88891\ncpu: 7855.140565411521 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 17687.168144669595,
            "unit": "ns/iter",
            "extra": "iterations: 40257\ncpu: 17687.035795016818 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 53484.56176652004,
            "unit": "ns/iter",
            "extra": "iterations: 12952\ncpu: 53482.91383570044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 41940.77000239847,
            "unit": "ns/iter",
            "extra": "iterations: 16648\ncpu: 41939.506246996476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 41771.407330154136,
            "unit": "ns/iter",
            "extra": "iterations: 16780\ncpu: 41770.083432657884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 41792.35774446101,
            "unit": "ns/iter",
            "extra": "iterations: 16741\ncpu: 41791.61340421781 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 24897.02126073389,
            "unit": "ns/iter",
            "extra": "iterations: 28174\ncpu: 24896.564208135114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 41779.997471478906,
            "unit": "ns/iter",
            "extra": "iterations: 17006\ncpu: 41777.649065035985 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}