window.BENCHMARK_DATA = {
  "lastUpdate": 1702409128888,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Parse gcc-8 20.04 Release c++-17": [
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
        "date": 1702397899340,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 661.0978607321871,
            "unit": "ns/iter",
            "extra": "iterations: 1046947\ncpu: 661.0874284944703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5934.3443729651235,
            "unit": "ns/iter",
            "extra": "iterations: 138501\ncpu: 5934.233687843409 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 11578.312700741868,
            "unit": "ns/iter",
            "extra": "iterations: 72232\ncpu: 11578.054048067339 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 17096.37364268511,
            "unit": "ns/iter",
            "extra": "iterations: 49178\ncpu: 17095.93110740575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 22617.707250121166,
            "unit": "ns/iter",
            "extra": "iterations: 37158\ncpu: 22617.06496582162 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 27514.26315264009,
            "unit": "ns/iter",
            "extra": "iterations: 30051\ncpu: 27512.392266480325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 32939.625410128516,
            "unit": "ns/iter",
            "extra": "iterations: 25297\ncpu: 32937.739652923265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 38240.227314557495,
            "unit": "ns/iter",
            "extra": "iterations: 21732\ncpu: 38238.17412111169 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 43433.29104672444,
            "unit": "ns/iter",
            "extra": "iterations: 19155\ncpu: 43430.79613677888 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 643.0405505771422,
            "unit": "ns/iter",
            "extra": "iterations: 1089257\ncpu: 642.9995859562989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 508.8909207666835,
            "unit": "ns/iter",
            "extra": "iterations: 1378145\ncpu: 508.8582841428146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 503.8573075223045,
            "unit": "ns/iter",
            "extra": "iterations: 1388966\ncpu: 503.8445145525527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 501.1334628351958,
            "unit": "ns/iter",
            "extra": "iterations: 1396119\ncpu: 501.1155925820076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 985.2377777432781,
            "unit": "ns/iter",
            "extra": "iterations: 707623\ncpu: 985.1777005552385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 2648.9868394057044,
            "unit": "ns/iter",
            "extra": "iterations: 302190\ncpu: 2648.862636089879 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 13207.004328380524,
            "unit": "ns/iter",
            "extra": "iterations: 62379\ncpu: 13206.284166145657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 10193.534835012126,
            "unit": "ns/iter",
            "extra": "iterations: 79733\ncpu: 10193.258751081734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 10284.739632731733,
            "unit": "ns/iter",
            "extra": "iterations: 79288\ncpu: 10284.300272424585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 9741.438160221733,
            "unit": "ns/iter",
            "extra": "iterations: 83684\ncpu: 9741.080732278577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 34229.97153613836,
            "unit": "ns/iter",
            "extra": "iterations: 24171\ncpu: 34228.38525505773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 282046.54574846686,
            "unit": "ns/iter",
            "extra": "iterations: 3093\ncpu: 282039.5085677339 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 214773.02273850513,
            "unit": "ns/iter",
            "extra": "iterations: 4046\ncpu: 214763.6925358374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 213664.2723039268,
            "unit": "ns/iter",
            "extra": "iterations: 4080\ncpu: 213655.3186274503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 214176.72359715882,
            "unit": "ns/iter",
            "extra": "iterations: 4081\ncpu: 214168.63513844617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 109423.88306958275,
            "unit": "ns/iter",
            "extra": "iterations: 7962\ncpu: 109420.14569203719 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 204441.5287356302,
            "unit": "ns/iter",
            "extra": "iterations: 4263\ncpu: 204430.65916021538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5450.313360000223,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5449.918000000018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 29117.58663512708,
            "unit": "ns/iter",
            "extra": "iterations: 28747\ncpu: 29115.95644762933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 22859.964653379393,
            "unit": "ns/iter",
            "extra": "iterations: 36524\ncpu: 22858.9721826744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 22637.26581027629,
            "unit": "ns/iter",
            "extra": "iterations: 36432\ncpu: 22636.308739569602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 22719.08779511821,
            "unit": "ns/iter",
            "extra": "iterations: 37485\ncpu: 22717.919167667114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 50402.60143529091,
            "unit": "ns/iter",
            "extra": "iterations: 16582\ncpu: 50400.98299360759 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 294325.8270980689,
            "unit": "ns/iter",
            "extra": "iterations: 2967\ncpu: 294320.4583754631 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 227086.68302872483,
            "unit": "ns/iter",
            "extra": "iterations: 3830\ncpu: 227079.58224543004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 225846.34997414023,
            "unit": "ns/iter",
            "extra": "iterations: 3866\ncpu: 225833.96275219778 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 224895.5739354818,
            "unit": "ns/iter",
            "extra": "iterations: 3875\ncpu: 224886.63225806432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 119863.60966899955,
            "unit": "ns/iter",
            "extra": "iterations: 7281\ncpu: 119859.19516549895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 215313.54080872997,
            "unit": "ns/iter",
            "extra": "iterations: 4031\ncpu: 215305.6809724638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 857582.1221719238,
            "unit": "ns/iter",
            "extra": "iterations: 1105\ncpu: 857546.425339365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 481960.6940916741,
            "unit": "ns/iter",
            "extra": "iterations: 1811\ncpu: 481941.9105466572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 2487.532127251809,
            "unit": "ns/iter",
            "extra": "iterations: 324522\ncpu: 2487.421499929128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 12014.497705958078,
            "unit": "ns/iter",
            "extra": "iterations: 69310\ncpu: 12014.03693550711 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 9839.456204248787,
            "unit": "ns/iter",
            "extra": "iterations: 83741\ncpu: 9838.991652834391 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 9640.834743491507,
            "unit": "ns/iter",
            "extra": "iterations: 85806\ncpu: 9640.53446145953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 9247.779830188443,
            "unit": "ns/iter",
            "extra": "iterations: 90571\ncpu: 9247.474357134179 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 32285.92587141773,
            "unit": "ns/iter",
            "extra": "iterations: 25820\ncpu: 32284.53911696356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 280008.0573796676,
            "unit": "ns/iter",
            "extra": "iterations: 3137\ncpu: 279992.317500798 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 214115.4118656646,
            "unit": "ns/iter",
            "extra": "iterations: 4079\ncpu: 214107.47732287165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 210426.11663850566,
            "unit": "ns/iter",
            "extra": "iterations: 4141\ncpu: 210416.75923689862 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 210263.7982750388,
            "unit": "ns/iter",
            "extra": "iterations: 4174\ncpu: 210257.57067561088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 106205.87203791004,
            "unit": "ns/iter",
            "extra": "iterations: 8229\ncpu: 106201.5554745408 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 203052.5523897003,
            "unit": "ns/iter",
            "extra": "iterations: 4352\ncpu: 203046.5992647057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 245.89857647754295,
            "unit": "ns/iter",
            "extra": "iterations: 2853766\ncpu: 245.8927956952323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1659.5130875530867,
            "unit": "ns/iter",
            "extra": "iterations: 421813\ncpu: 1659.4303636919662 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1376.5769789710423,
            "unit": "ns/iter",
            "extra": "iterations: 509204\ncpu: 1376.4880087351928 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1350.7058727064784,
            "unit": "ns/iter",
            "extra": "iterations: 518330\ncpu: 1350.6737020816736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 986.9139651663648,
            "unit": "ns/iter",
            "extra": "iterations: 709945\ncpu: 986.9020839642526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 10203.548103763114,
            "unit": "ns/iter",
            "extra": "iterations: 68425\ncpu: 10203.4154183412 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 13726.544732859868,
            "unit": "ns/iter",
            "extra": "iterations: 50891\ncpu: 13726.27576585259 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 3128.4106018155653,
            "unit": "ns/iter",
            "extra": "iterations: 223075\ncpu: 3128.4083828308785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 3115.4406784995117,
            "unit": "ns/iter",
            "extra": "iterations: 222373\ncpu: 3115.388109167927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 3140.1311895785016,
            "unit": "ns/iter",
            "extra": "iterations: 223844\ncpu: 3140.1297332070753 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5515.398161640387,
            "unit": "ns/iter",
            "extra": "iterations: 126961\ncpu: 5515.2802829215425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5989.847920626215,
            "unit": "ns/iter",
            "extra": "iterations: 116814\ncpu: 5989.79745578442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 2005.50485150412,
            "unit": "ns/iter",
            "extra": "iterations: 349067\ncpu: 2005.503527976005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10453.210669945207,
            "unit": "ns/iter",
            "extra": "iterations: 66692\ncpu: 10452.977868410024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8497.098962413318,
            "unit": "ns/iter",
            "extra": "iterations: 82981\ncpu: 8497.049927091646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 8327.915888511317,
            "unit": "ns/iter",
            "extra": "iterations: 84816\ncpu: 8327.767166572405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 8242.277006774168,
            "unit": "ns/iter",
            "extra": "iterations: 84738\ncpu: 8242.284453255834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 18470.109130171,
            "unit": "ns/iter",
            "extra": "iterations: 37973\ncpu: 18470.126142259007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 59547.75102179858,
            "unit": "ns/iter",
            "extra": "iterations: 11744\ncpu: 59546.679155313206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 48373.754992056325,
            "unit": "ns/iter",
            "extra": "iterations: 14473\ncpu: 48373.246735299595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 48167.103983517096,
            "unit": "ns/iter",
            "extra": "iterations: 14560\ncpu: 48167.074175823785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 47693.80755309654,
            "unit": "ns/iter",
            "extra": "iterations: 14643\ncpu: 47692.88397186343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 27662.178156832888,
            "unit": "ns/iter",
            "extra": "iterations: 25326\ncpu: 27662.216694306328 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 47140.41758909289,
            "unit": "ns/iter",
            "extra": "iterations: 14816\ncpu: 47139.059125270054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 2054.611138245416,
            "unit": "ns/iter",
            "extra": "iterations: 339874\ncpu: 2054.582580603382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 10394.498233111599,
            "unit": "ns/iter",
            "extra": "iterations: 67633\ncpu: 10394.306034036668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 9356.62255593135,
            "unit": "ns/iter",
            "extra": "iterations: 75182\ncpu: 9356.618605517313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 9962.783531119518,
            "unit": "ns/iter",
            "extra": "iterations: 70278\ncpu: 9962.698141665964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 8889.112773958177,
            "unit": "ns/iter",
            "extra": "iterations: 78981\ncpu: 8888.91632164698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 18477.997929936886,
            "unit": "ns/iter",
            "extra": "iterations: 37680\ncpu: 18477.866242038275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 63331.563383948334,
            "unit": "ns/iter",
            "extra": "iterations: 11525\ncpu: 63327.982646420875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 48680.798168345784,
            "unit": "ns/iter",
            "extra": "iterations: 14304\ncpu: 48678.74021252859 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 48484.40454419353,
            "unit": "ns/iter",
            "extra": "iterations: 14436\ncpu: 48482.550568024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 48004.26531866739,
            "unit": "ns/iter",
            "extra": "iterations: 14639\ncpu: 48004.26258624203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 27767.239564357147,
            "unit": "ns/iter",
            "extra": "iterations: 25250\ncpu: 27766.772277227617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 48638.40245500697,
            "unit": "ns/iter",
            "extra": "iterations: 14501\ncpu: 48613.42666023009 ns\nthreads: 1"
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
        "date": 1702397899340,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 661.0978607321871,
            "unit": "ns/iter",
            "extra": "iterations: 1046947\ncpu: 661.0874284944703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5934.3443729651235,
            "unit": "ns/iter",
            "extra": "iterations: 138501\ncpu: 5934.233687843409 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 11578.312700741868,
            "unit": "ns/iter",
            "extra": "iterations: 72232\ncpu: 11578.054048067339 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 17096.37364268511,
            "unit": "ns/iter",
            "extra": "iterations: 49178\ncpu: 17095.93110740575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 22617.707250121166,
            "unit": "ns/iter",
            "extra": "iterations: 37158\ncpu: 22617.06496582162 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 27514.26315264009,
            "unit": "ns/iter",
            "extra": "iterations: 30051\ncpu: 27512.392266480325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 32939.625410128516,
            "unit": "ns/iter",
            "extra": "iterations: 25297\ncpu: 32937.739652923265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 38240.227314557495,
            "unit": "ns/iter",
            "extra": "iterations: 21732\ncpu: 38238.17412111169 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 43433.29104672444,
            "unit": "ns/iter",
            "extra": "iterations: 19155\ncpu: 43430.79613677888 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 643.0405505771422,
            "unit": "ns/iter",
            "extra": "iterations: 1089257\ncpu: 642.9995859562989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 508.8909207666835,
            "unit": "ns/iter",
            "extra": "iterations: 1378145\ncpu: 508.8582841428146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 503.8573075223045,
            "unit": "ns/iter",
            "extra": "iterations: 1388966\ncpu: 503.8445145525527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 501.1334628351958,
            "unit": "ns/iter",
            "extra": "iterations: 1396119\ncpu: 501.1155925820076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 985.2377777432781,
            "unit": "ns/iter",
            "extra": "iterations: 707623\ncpu: 985.1777005552385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 2648.9868394057044,
            "unit": "ns/iter",
            "extra": "iterations: 302190\ncpu: 2648.862636089879 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 13207.004328380524,
            "unit": "ns/iter",
            "extra": "iterations: 62379\ncpu: 13206.284166145657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 10193.534835012126,
            "unit": "ns/iter",
            "extra": "iterations: 79733\ncpu: 10193.258751081734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 10284.739632731733,
            "unit": "ns/iter",
            "extra": "iterations: 79288\ncpu: 10284.300272424585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 9741.438160221733,
            "unit": "ns/iter",
            "extra": "iterations: 83684\ncpu: 9741.080732278577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 34229.97153613836,
            "unit": "ns/iter",
            "extra": "iterations: 24171\ncpu: 34228.38525505773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 282046.54574846686,
            "unit": "ns/iter",
            "extra": "iterations: 3093\ncpu: 282039.5085677339 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 214773.02273850513,
            "unit": "ns/iter",
            "extra": "iterations: 4046\ncpu: 214763.6925358374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 213664.2723039268,
            "unit": "ns/iter",
            "extra": "iterations: 4080\ncpu: 213655.3186274503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 214176.72359715882,
            "unit": "ns/iter",
            "extra": "iterations: 4081\ncpu: 214168.63513844617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 109423.88306958275,
            "unit": "ns/iter",
            "extra": "iterations: 7962\ncpu: 109420.14569203719 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 204441.5287356302,
            "unit": "ns/iter",
            "extra": "iterations: 4263\ncpu: 204430.65916021538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5450.313360000223,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5449.918000000018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 29117.58663512708,
            "unit": "ns/iter",
            "extra": "iterations: 28747\ncpu: 29115.95644762933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 22859.964653379393,
            "unit": "ns/iter",
            "extra": "iterations: 36524\ncpu: 22858.9721826744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 22637.26581027629,
            "unit": "ns/iter",
            "extra": "iterations: 36432\ncpu: 22636.308739569602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 22719.08779511821,
            "unit": "ns/iter",
            "extra": "iterations: 37485\ncpu: 22717.919167667114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 50402.60143529091,
            "unit": "ns/iter",
            "extra": "iterations: 16582\ncpu: 50400.98299360759 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 294325.8270980689,
            "unit": "ns/iter",
            "extra": "iterations: 2967\ncpu: 294320.4583754631 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 227086.68302872483,
            "unit": "ns/iter",
            "extra": "iterations: 3830\ncpu: 227079.58224543004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 225846.34997414023,
            "unit": "ns/iter",
            "extra": "iterations: 3866\ncpu: 225833.96275219778 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 224895.5739354818,
            "unit": "ns/iter",
            "extra": "iterations: 3875\ncpu: 224886.63225806432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 119863.60966899955,
            "unit": "ns/iter",
            "extra": "iterations: 7281\ncpu: 119859.19516549895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 215313.54080872997,
            "unit": "ns/iter",
            "extra": "iterations: 4031\ncpu: 215305.6809724638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 857582.1221719238,
            "unit": "ns/iter",
            "extra": "iterations: 1105\ncpu: 857546.425339365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 481960.6940916741,
            "unit": "ns/iter",
            "extra": "iterations: 1811\ncpu: 481941.9105466572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 2487.532127251809,
            "unit": "ns/iter",
            "extra": "iterations: 324522\ncpu: 2487.421499929128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 12014.497705958078,
            "unit": "ns/iter",
            "extra": "iterations: 69310\ncpu: 12014.03693550711 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 9839.456204248787,
            "unit": "ns/iter",
            "extra": "iterations: 83741\ncpu: 9838.991652834391 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 9640.834743491507,
            "unit": "ns/iter",
            "extra": "iterations: 85806\ncpu: 9640.53446145953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 9247.779830188443,
            "unit": "ns/iter",
            "extra": "iterations: 90571\ncpu: 9247.474357134179 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 32285.92587141773,
            "unit": "ns/iter",
            "extra": "iterations: 25820\ncpu: 32284.53911696356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 280008.0573796676,
            "unit": "ns/iter",
            "extra": "iterations: 3137\ncpu: 279992.317500798 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 214115.4118656646,
            "unit": "ns/iter",
            "extra": "iterations: 4079\ncpu: 214107.47732287165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 210426.11663850566,
            "unit": "ns/iter",
            "extra": "iterations: 4141\ncpu: 210416.75923689862 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 210263.7982750388,
            "unit": "ns/iter",
            "extra": "iterations: 4174\ncpu: 210257.57067561088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 106205.87203791004,
            "unit": "ns/iter",
            "extra": "iterations: 8229\ncpu: 106201.5554745408 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 203052.5523897003,
            "unit": "ns/iter",
            "extra": "iterations: 4352\ncpu: 203046.5992647057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 245.89857647754295,
            "unit": "ns/iter",
            "extra": "iterations: 2853766\ncpu: 245.8927956952323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1659.5130875530867,
            "unit": "ns/iter",
            "extra": "iterations: 421813\ncpu: 1659.4303636919662 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1376.5769789710423,
            "unit": "ns/iter",
            "extra": "iterations: 509204\ncpu: 1376.4880087351928 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1350.7058727064784,
            "unit": "ns/iter",
            "extra": "iterations: 518330\ncpu: 1350.6737020816736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 986.9139651663648,
            "unit": "ns/iter",
            "extra": "iterations: 709945\ncpu: 986.9020839642526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 10203.548103763114,
            "unit": "ns/iter",
            "extra": "iterations: 68425\ncpu: 10203.4154183412 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 13726.544732859868,
            "unit": "ns/iter",
            "extra": "iterations: 50891\ncpu: 13726.27576585259 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 3128.4106018155653,
            "unit": "ns/iter",
            "extra": "iterations: 223075\ncpu: 3128.4083828308785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 3115.4406784995117,
            "unit": "ns/iter",
            "extra": "iterations: 222373\ncpu: 3115.388109167927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 3140.1311895785016,
            "unit": "ns/iter",
            "extra": "iterations: 223844\ncpu: 3140.1297332070753 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5515.398161640387,
            "unit": "ns/iter",
            "extra": "iterations: 126961\ncpu: 5515.2802829215425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5989.847920626215,
            "unit": "ns/iter",
            "extra": "iterations: 116814\ncpu: 5989.79745578442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 2005.50485150412,
            "unit": "ns/iter",
            "extra": "iterations: 349067\ncpu: 2005.503527976005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10453.210669945207,
            "unit": "ns/iter",
            "extra": "iterations: 66692\ncpu: 10452.977868410024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8497.098962413318,
            "unit": "ns/iter",
            "extra": "iterations: 82981\ncpu: 8497.049927091646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 8327.915888511317,
            "unit": "ns/iter",
            "extra": "iterations: 84816\ncpu: 8327.767166572405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 8242.277006774168,
            "unit": "ns/iter",
            "extra": "iterations: 84738\ncpu: 8242.284453255834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 18470.109130171,
            "unit": "ns/iter",
            "extra": "iterations: 37973\ncpu: 18470.126142259007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 59547.75102179858,
            "unit": "ns/iter",
            "extra": "iterations: 11744\ncpu: 59546.679155313206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 48373.754992056325,
            "unit": "ns/iter",
            "extra": "iterations: 14473\ncpu: 48373.246735299595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 48167.103983517096,
            "unit": "ns/iter",
            "extra": "iterations: 14560\ncpu: 48167.074175823785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 47693.80755309654,
            "unit": "ns/iter",
            "extra": "iterations: 14643\ncpu: 47692.88397186343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 27662.178156832888,
            "unit": "ns/iter",
            "extra": "iterations: 25326\ncpu: 27662.216694306328 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 47140.41758909289,
            "unit": "ns/iter",
            "extra": "iterations: 14816\ncpu: 47139.059125270054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 2054.611138245416,
            "unit": "ns/iter",
            "extra": "iterations: 339874\ncpu: 2054.582580603382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 10394.498233111599,
            "unit": "ns/iter",
            "extra": "iterations: 67633\ncpu: 10394.306034036668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 9356.62255593135,
            "unit": "ns/iter",
            "extra": "iterations: 75182\ncpu: 9356.618605517313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 9962.783531119518,
            "unit": "ns/iter",
            "extra": "iterations: 70278\ncpu: 9962.698141665964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 8889.112773958177,
            "unit": "ns/iter",
            "extra": "iterations: 78981\ncpu: 8888.91632164698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 18477.997929936886,
            "unit": "ns/iter",
            "extra": "iterations: 37680\ncpu: 18477.866242038275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 63331.563383948334,
            "unit": "ns/iter",
            "extra": "iterations: 11525\ncpu: 63327.982646420875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 48680.798168345784,
            "unit": "ns/iter",
            "extra": "iterations: 14304\ncpu: 48678.74021252859 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 48484.40454419353,
            "unit": "ns/iter",
            "extra": "iterations: 14436\ncpu: 48482.550568024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 48004.26531866739,
            "unit": "ns/iter",
            "extra": "iterations: 14639\ncpu: 48004.26258624203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 27767.239564357147,
            "unit": "ns/iter",
            "extra": "iterations: 25250\ncpu: 27766.772277227617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 48638.40245500697,
            "unit": "ns/iter",
            "extra": "iterations: 14501\ncpu: 48613.42666023009 ns\nthreads: 1"
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
        "date": 1702409128080,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 659.0621041632432,
            "unit": "ns/iter",
            "extra": "iterations: 1066096\ncpu: 659.0640054929388 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5991.3852647508675,
            "unit": "ns/iter",
            "extra": "iterations: 136109\ncpu: 5991.302558978465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 11563.948742719589,
            "unit": "ns/iter",
            "extra": "iterations: 72458\ncpu: 11563.864583620856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 17690.397944288918,
            "unit": "ns/iter",
            "extra": "iterations: 49326\ncpu: 17690.34586222277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 23586.25079356514,
            "unit": "ns/iter",
            "extra": "iterations: 36859\ncpu: 23585.601888276964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 28002.18307345087,
            "unit": "ns/iter",
            "extra": "iterations: 29693\ncpu: 28001.528979894265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 33419.456477610824,
            "unit": "ns/iter",
            "extra": "iterations: 25125\ncpu: 33419.028855721415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 38569.09670991586,
            "unit": "ns/iter",
            "extra": "iterations: 21580\ncpu: 38568.55421686746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 43971.8855818352,
            "unit": "ns/iter",
            "extra": "iterations: 18983\ncpu: 43972.04867513044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 619.7313733942913,
            "unit": "ns/iter",
            "extra": "iterations: 1129661\ncpu: 619.7209605359475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 504.1931229798021,
            "unit": "ns/iter",
            "extra": "iterations: 1394034\ncpu: 504.18619631945796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 508.1960409299986,
            "unit": "ns/iter",
            "extra": "iterations: 1379819\ncpu: 508.19788682428623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 489.5059904019454,
            "unit": "ns/iter",
            "extra": "iterations: 1432792\ncpu: 489.50175601203864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 938.291115513687,
            "unit": "ns/iter",
            "extra": "iterations: 749565\ncpu: 938.2843382495175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 2535.79769503384,
            "unit": "ns/iter",
            "extra": "iterations: 313497\ncpu: 2535.772910107595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 13618.126803102832,
            "unit": "ns/iter",
            "extra": "iterations: 60590\ncpu: 13618.03432909719 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 10147.54289429677,
            "unit": "ns/iter",
            "extra": "iterations: 80745\ncpu: 10147.346584927871 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 10072.146954726473,
            "unit": "ns/iter",
            "extra": "iterations: 81372\ncpu: 10071.756869684881 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 9777.484249866271,
            "unit": "ns/iter",
            "extra": "iterations: 84285\ncpu: 9777.507267010744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 34207.707557366215,
            "unit": "ns/iter",
            "extra": "iterations: 24056\ncpu: 34205.89873628202 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 278448.0944907042,
            "unit": "ns/iter",
            "extra": "iterations: 3122\ncpu: 278433.40807174897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 219732.81553154008,
            "unit": "ns/iter",
            "extra": "iterations: 3979\ncpu: 219718.87408896754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 218426.47572572067,
            "unit": "ns/iter",
            "extra": "iterations: 3996\ncpu: 218417.5675675678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 216592.31251549188,
            "unit": "ns/iter",
            "extra": "iterations: 4035\ncpu: 216579.20693928143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 111250.5122200871,
            "unit": "ns/iter",
            "extra": "iterations: 7815\ncpu: 111244.49136276425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 207798.2125029623,
            "unit": "ns/iter",
            "extra": "iterations: 4207\ncpu: 207780.65129545977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5489.417289999778,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5489.320000000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 29287.176241824785,
            "unit": "ns/iter",
            "extra": "iterations: 28285\ncpu: 29285.13346296615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 23274.80216507972,
            "unit": "ns/iter",
            "extra": "iterations: 35934\ncpu: 23273.609951577902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 23114.502275075614,
            "unit": "ns/iter",
            "extra": "iterations: 35823\ncpu: 23113.055857968422 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 22490.89498534765,
            "unit": "ns/iter",
            "extra": "iterations: 36852\ncpu: 22490.174210354864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 50222.023820983835,
            "unit": "ns/iter",
            "extra": "iterations: 16624\ncpu: 50219.24927815201 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 296172.46475546993,
            "unit": "ns/iter",
            "extra": "iterations: 2965\ncpu: 296158.85328836326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 232328.33386539,
            "unit": "ns/iter",
            "extra": "iterations: 3759\ncpu: 232313.40782122963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 227903.41616531668,
            "unit": "ns/iter",
            "extra": "iterations: 3823\ncpu: 227892.67590897137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 229344.0146788985,
            "unit": "ns/iter",
            "extra": "iterations: 3815\ncpu: 229335.3866317176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 122610.41421602496,
            "unit": "ns/iter",
            "extra": "iterations: 7175\ncpu: 122607.63763066211 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 223348.47861301014,
            "unit": "ns/iter",
            "extra": "iterations: 3951\ncpu: 223333.23209314182 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 866408.4594843427,
            "unit": "ns/iter",
            "extra": "iterations: 1086\ncpu: 866355.5248618755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 482701.5447556269,
            "unit": "ns/iter",
            "extra": "iterations: 1821\ncpu: 482673.4211971431 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 2507.4242695615494,
            "unit": "ns/iter",
            "extra": "iterations: 319363\ncpu: 2507.295460025121 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 12816.462783674833,
            "unit": "ns/iter",
            "extra": "iterations: 64246\ncpu: 12815.765962083235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 9835.798833992396,
            "unit": "ns/iter",
            "extra": "iterations: 84219\ncpu: 9835.287761669031 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 9963.215120772536,
            "unit": "ns/iter",
            "extra": "iterations: 82800\ncpu: 9962.806763285065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 9387.455101834032,
            "unit": "ns/iter",
            "extra": "iterations: 88723\ncpu: 9387.37756838703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 32494.242739553865,
            "unit": "ns/iter",
            "extra": "iterations: 25756\ncpu: 32492.623078117747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 284630.72840688087,
            "unit": "ns/iter",
            "extra": "iterations: 3126\ncpu: 284613.97952655173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 217789.61194766356,
            "unit": "ns/iter",
            "extra": "iterations: 4051\ncpu: 217770.82201925546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 214850.02827199752,
            "unit": "ns/iter",
            "extra": "iterations: 4103\ncpu: 214836.38800877426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 214586.97926829435,
            "unit": "ns/iter",
            "extra": "iterations: 4100\ncpu: 214572.04878048715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 105836.44074519437,
            "unit": "ns/iter",
            "extra": "iterations: 8320\ncpu: 105830.74519230778 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 204819.96151153854,
            "unit": "ns/iter",
            "extra": "iterations: 4287\ncpu: 204807.0912059718 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 251.79236130940373,
            "unit": "ns/iter",
            "extra": "iterations: 2780686\ncpu: 251.7802081932289 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1678.065417208753,
            "unit": "ns/iter",
            "extra": "iterations: 418208\ncpu: 1677.9439895936953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1237.1016464652585,
            "unit": "ns/iter",
            "extra": "iterations: 562174\ncpu: 1236.9789424626492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1186.696700156058,
            "unit": "ns/iter",
            "extra": "iterations: 592028\ncpu: 1186.6508002999885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 973.1996267071399,
            "unit": "ns/iter",
            "extra": "iterations: 706148\ncpu: 973.192163682398 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 10345.808885826542,
            "unit": "ns/iter",
            "extra": "iterations: 68221\ncpu: 10345.186965890276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 13718.282612520181,
            "unit": "ns/iter",
            "extra": "iterations: 51169\ncpu: 13717.54968828785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 3134.7246918681562,
            "unit": "ns/iter",
            "extra": "iterations: 222794\ncpu: 3134.581721231272 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 3119.09501718548,
            "unit": "ns/iter",
            "extra": "iterations: 224612\ncpu: 3118.9513472120934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 3151.581056833394,
            "unit": "ns/iter",
            "extra": "iterations: 223479\ncpu: 3151.4428648776757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5848.695009856657,
            "unit": "ns/iter",
            "extra": "iterations: 120217\ncpu: 5848.326775747176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5888.348094321531,
            "unit": "ns/iter",
            "extra": "iterations: 118488\ncpu: 5888.013132131527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 2012.6682138678764,
            "unit": "ns/iter",
            "extra": "iterations: 350310\ncpu: 2012.5217664354316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10395.859822956549,
            "unit": "ns/iter",
            "extra": "iterations: 67215\ncpu: 10395.81194673797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8487.20958510413,
            "unit": "ns/iter",
            "extra": "iterations: 82816\ncpu: 8486.641470247238 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 8345.97979184441,
            "unit": "ns/iter",
            "extra": "iterations: 83976\ncpu: 8345.578498618626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 8301.965373283825,
            "unit": "ns/iter",
            "extra": "iterations: 83837\ncpu: 8301.395565203879 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 18404.421636798244,
            "unit": "ns/iter",
            "extra": "iterations: 38111\ncpu: 18402.95190364982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 59298.14091178031,
            "unit": "ns/iter",
            "extra": "iterations: 11823\ncpu: 59297.36953395972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 49063.68870561857,
            "unit": "ns/iter",
            "extra": "iterations: 14308\ncpu: 49060.60246016189 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 48460.84474378799,
            "unit": "ns/iter",
            "extra": "iterations: 14402\ncpu: 48457.047632272835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 48342.40146540289,
            "unit": "ns/iter",
            "extra": "iterations: 14467\ncpu: 48340.63731250407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 27468.154541167773,
            "unit": "ns/iter",
            "extra": "iterations: 25456\ncpu: 27466.059082337928 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 48776.50672160641,
            "unit": "ns/iter",
            "extra": "iterations: 14803\ncpu: 48774.47139093435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 2016.8721851524717,
            "unit": "ns/iter",
            "extra": "iterations: 345445\ncpu: 2016.879676938473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 10439.82645365662,
            "unit": "ns/iter",
            "extra": "iterations: 67227\ncpu: 10439.860472726776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 9576.209019794747,
            "unit": "ns/iter",
            "extra": "iterations: 73505\ncpu: 9576.235630229294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 9800.406785763584,
            "unit": "ns/iter",
            "extra": "iterations: 72210\ncpu: 9800.353136684693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 9229.526030968545,
            "unit": "ns/iter",
            "extra": "iterations: 75948\ncpu: 9229.547848527909 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 18936.16206350571,
            "unit": "ns/iter",
            "extra": "iterations: 37257\ncpu: 18935.735566470827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 60214.30506285494,
            "unit": "ns/iter",
            "extra": "iterations: 11614\ncpu: 60214.405028413756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 49076.65980543901,
            "unit": "ns/iter",
            "extra": "iterations: 14186\ncpu: 49076.70943183334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 47809.418717522094,
            "unit": "ns/iter",
            "extra": "iterations: 14628\ncpu: 47809.59119496888 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 48316.322016396494,
            "unit": "ns/iter",
            "extra": "iterations: 14521\ncpu: 48315.90110873906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 29761.177076682427,
            "unit": "ns/iter",
            "extra": "iterations: 23487\ncpu: 29760.50155405115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 48049.13956360303,
            "unit": "ns/iter",
            "extra": "iterations: 14574\ncpu: 48048.73747770041 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}