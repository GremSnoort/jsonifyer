window.BENCHMARK_DATA = {
  "lastUpdate": 1702421919453,
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
        "date": 1702412551697,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 655.4059675188824,
            "unit": "ns/iter",
            "extra": "iterations: 1067881\ncpu: 655.3831372596759 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 6075.446652750686,
            "unit": "ns/iter",
            "extra": "iterations: 135096\ncpu: 6075.12287558477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 11724.789817999363,
            "unit": "ns/iter",
            "extra": "iterations: 71538\ncpu: 11724.215102463028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 17198.1854850249,
            "unit": "ns/iter",
            "extra": "iterations: 48915\ncpu: 17198.11305325565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 22369.222779849973,
            "unit": "ns/iter",
            "extra": "iterations: 37261\ncpu: 22369.219827701894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 27875.316726335255,
            "unit": "ns/iter",
            "extra": "iterations: 29887\ncpu: 27874.905477297805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 33220.74874914962,
            "unit": "ns/iter",
            "extra": "iterations: 24983\ncpu: 33220.24976984351 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 38878.79059392156,
            "unit": "ns/iter",
            "extra": "iterations: 21518\ncpu: 38878.30653406452 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 44131.684360435,
            "unit": "ns/iter",
            "extra": "iterations: 19310\ncpu: 44131.532884515764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 644.603828085329,
            "unit": "ns/iter",
            "extra": "iterations: 1102640\ncpu: 644.5966045128058 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 504.1947048336191,
            "unit": "ns/iter",
            "extra": "iterations: 1383186\ncpu: 504.1893859538776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 502.326863999997,
            "unit": "ns/iter",
            "extra": "iterations: 1000000\ncpu: 502.3151000000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 488.13748898602097,
            "unit": "ns/iter",
            "extra": "iterations: 1424325\ncpu: 488.14111947764724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 1000.5242689476746,
            "unit": "ns/iter",
            "extra": "iterations: 713834\ncpu: 1000.5202890307818 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 2793.152374589719,
            "unit": "ns/iter",
            "extra": "iterations: 287397\ncpu: 2793.1432826369137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 12718.407973359885,
            "unit": "ns/iter",
            "extra": "iterations: 64264\ncpu: 12718.234159093725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 10753.532711497983,
            "unit": "ns/iter",
            "extra": "iterations: 76762\ncpu: 10753.534300825933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 10638.727468599995,
            "unit": "ns/iter",
            "extra": "iterations: 76116\ncpu: 10638.671238635734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 10303.991162224938,
            "unit": "ns/iter",
            "extra": "iterations: 78866\ncpu: 10303.907894403166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 36173.60527478213,
            "unit": "ns/iter",
            "extra": "iterations: 22636\ncpu: 36173.04294044894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 275946.23498121573,
            "unit": "ns/iter",
            "extra": "iterations: 3196\ncpu: 275946.55819774757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 217189.82960755273,
            "unit": "ns/iter",
            "extra": "iterations: 4026\ncpu: 217186.63686040795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 211927.30022405682,
            "unit": "ns/iter",
            "extra": "iterations: 4017\ncpu: 211928.47896440083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 211644.2919653959,
            "unit": "ns/iter",
            "extra": "iterations: 4045\ncpu: 211638.83807169314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 110804.22843792968,
            "unit": "ns/iter",
            "extra": "iterations: 7919\ncpu: 110804.53340068209 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 210321.6427553457,
            "unit": "ns/iter",
            "extra": "iterations: 4210\ncpu: 210317.14964370543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5899.420169999985,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5899.426000000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 29104.176228776887,
            "unit": "ns/iter",
            "extra": "iterations: 27975\ncpu: 29103.531724754183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 23466.12033078198,
            "unit": "ns/iter",
            "extra": "iterations: 35552\ncpu: 23466.086296129695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 23594.31291554601,
            "unit": "ns/iter",
            "extra": "iterations: 35345\ncpu: 23594.177394256618 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 22920.736305136783,
            "unit": "ns/iter",
            "extra": "iterations: 36364\ncpu: 22920.872291277134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 53133.86399307746,
            "unit": "ns/iter",
            "extra": "iterations: 16183\ncpu: 53133.559908545925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 294093.95963672374,
            "unit": "ns/iter",
            "extra": "iterations: 2973\ncpu: 294092.5327951582 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 230819.82889835126,
            "unit": "ns/iter",
            "extra": "iterations: 3758\ncpu: 230810.37786056506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 231259.27547770497,
            "unit": "ns/iter",
            "extra": "iterations: 3768\ncpu: 231255.46709129665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 236529.70007831426,
            "unit": "ns/iter",
            "extra": "iterations: 3831\ncpu: 236527.09475332694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 122921.64300832486,
            "unit": "ns/iter",
            "extra": "iterations: 7087\ncpu: 122921.71581769413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 219320.80620741844,
            "unit": "ns/iter",
            "extra": "iterations: 3963\ncpu: 219317.48675246065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 871976.1332116604,
            "unit": "ns/iter",
            "extra": "iterations: 1096\ncpu: 871921.6240875879 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 494391.80837988434,
            "unit": "ns/iter",
            "extra": "iterations: 1790\ncpu: 494379.8324022342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 2690.3399284975594,
            "unit": "ns/iter",
            "extra": "iterations: 298451\ncpu: 2690.248985595637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 12504.176223542841,
            "unit": "ns/iter",
            "extra": "iterations: 65956\ncpu: 12504.175510946667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 10172.28338420097,
            "unit": "ns/iter",
            "extra": "iterations: 80929\ncpu: 10172.09158645226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 10000.184590553525,
            "unit": "ns/iter",
            "extra": "iterations: 82404\ncpu: 10000.080093199304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 9613.626747925773,
            "unit": "ns/iter",
            "extra": "iterations: 85816\ncpu: 9613.50797054167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 34624.64756623709,
            "unit": "ns/iter",
            "extra": "iterations: 24345\ncpu: 34624.871636886404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 280601.27842888504,
            "unit": "ns/iter",
            "extra": "iterations: 3157\ncpu: 280579.9493189748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 215147.05059887416,
            "unit": "ns/iter",
            "extra": "iterations: 4091\ncpu: 215137.05695429008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 216189.05853418325,
            "unit": "ns/iter",
            "extra": "iterations: 4066\ncpu: 216172.62666010726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 212299.37385653052,
            "unit": "ns/iter",
            "extra": "iterations: 4154\ncpu: 212292.7298988927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 109694.11195046265,
            "unit": "ns/iter",
            "extra": "iterations: 8075\ncpu: 109687.47987616135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 206215.47125354127,
            "unit": "ns/iter",
            "extra": "iterations: 4244\ncpu: 206209.66069745514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 260.52618899604096,
            "unit": "ns/iter",
            "extra": "iterations: 2681527\ncpu: 260.5167503441147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1753.4685610549484,
            "unit": "ns/iter",
            "extra": "iterations: 399918\ncpu: 1753.4131997059462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1392.8726595930013,
            "unit": "ns/iter",
            "extra": "iterations: 502904\ncpu: 1392.8608641013013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1342.5612949251597,
            "unit": "ns/iter",
            "extra": "iterations: 518640\ncpu: 1342.5580364029024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 1011.413266705808,
            "unit": "ns/iter",
            "extra": "iterations: 696209\ncpu: 1011.3975831970006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 10765.954000091582,
            "unit": "ns/iter",
            "extra": "iterations: 65261\ncpu: 10765.89693691478 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 13522.684018034624,
            "unit": "ns/iter",
            "extra": "iterations: 51677\ncpu: 13522.642568260484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 3129.683712019648,
            "unit": "ns/iter",
            "extra": "iterations: 223932\ncpu: 3129.662129575048 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 3124.143328498436,
            "unit": "ns/iter",
            "extra": "iterations: 223368\ncpu: 3124.1162565810523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 3156.910423871394,
            "unit": "ns/iter",
            "extra": "iterations: 221789\ncpu: 3156.914454729501 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5877.1738648298215,
            "unit": "ns/iter",
            "extra": "iterations: 119035\ncpu: 5877.155458478628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5936.234461621957,
            "unit": "ns/iter",
            "extra": "iterations: 117789\ncpu: 5936.249564899925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 2061.020100103665,
            "unit": "ns/iter",
            "extra": "iterations: 340247\ncpu: 2061.0412435671897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10347.493279849137,
            "unit": "ns/iter",
            "extra": "iterations: 67558\ncpu: 10347.458480120773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8351.128541423235,
            "unit": "ns/iter",
            "extra": "iterations: 83794\ncpu: 8351.115831682435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 8347.50853617322,
            "unit": "ns/iter",
            "extra": "iterations: 82824\ncpu: 8347.457258765451 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 8220.674028041454,
            "unit": "ns/iter",
            "extra": "iterations: 85446\ncpu: 8220.555672588534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 19178.522986775246,
            "unit": "ns/iter",
            "extra": "iterations: 36521\ncpu: 19178.708140521965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 58698.94085976222,
            "unit": "ns/iter",
            "extra": "iterations: 11887\ncpu: 58698.66240430814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 47477.71302757401,
            "unit": "ns/iter",
            "extra": "iterations: 14761\ncpu: 47478.21285820731 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 47424.94462474948,
            "unit": "ns/iter",
            "extra": "iterations: 14790\ncpu: 47424.773495604815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 47555.782634973955,
            "unit": "ns/iter",
            "extra": "iterations: 14892\ncpu: 47556.23824872417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 27334.607417528237,
            "unit": "ns/iter",
            "extra": "iterations: 25615\ncpu: 27334.561780206877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 46474.1249336885,
            "unit": "ns/iter",
            "extra": "iterations: 15080\ncpu: 46473.34880636553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 2216.803489359171,
            "unit": "ns/iter",
            "extra": "iterations: 318110\ncpu: 2216.800163465494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 11752.284277510626,
            "unit": "ns/iter",
            "extra": "iterations: 59558\ncpu: 11752.395983747037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 9772.663944592307,
            "unit": "ns/iter",
            "extra": "iterations: 71759\ncpu: 9772.553965356263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 9551.971951800911,
            "unit": "ns/iter",
            "extra": "iterations: 73445\ncpu: 9552.06617196533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 9681.334186834521,
            "unit": "ns/iter",
            "extra": "iterations: 72642\ncpu: 9681.331736460963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 20432.098590307054,
            "unit": "ns/iter",
            "extra": "iterations: 34050\ncpu: 20432.264317180805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 60382.873389451604,
            "unit": "ns/iter",
            "extra": "iterations: 11642\ncpu: 60383.35337570892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 47128.64392396525,
            "unit": "ns/iter",
            "extra": "iterations: 14730\ncpu: 47129.083503055015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 47753.15796656471,
            "unit": "ns/iter",
            "extra": "iterations: 14655\ncpu: 47752.664619584546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 47970.36939097162,
            "unit": "ns/iter",
            "extra": "iterations: 14597\ncpu: 47970.76796602067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 28646.692716267673,
            "unit": "ns/iter",
            "extra": "iterations: 24287\ncpu: 28646.24284596721 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 47816.20268900748,
            "unit": "ns/iter",
            "extra": "iterations: 14801\ncpu: 47815.654347678945 ns\nthreads: 1"
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
        "date": 1702418373422,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 666.8871662327078,
            "unit": "ns/iter",
            "extra": "iterations: 1047736\ncpu: 666.8770568158391 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 6136.155966178629,
            "unit": "ns/iter",
            "extra": "iterations: 133997\ncpu: 6136.047075680798 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 11727.883416829362,
            "unit": "ns/iter",
            "extra": "iterations: 70662\ncpu: 11727.470210296904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 17457.92323590877,
            "unit": "ns/iter",
            "extra": "iterations: 47900\ncpu: 17457.943632567858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 22754.645099013607,
            "unit": "ns/iter",
            "extra": "iterations: 36258\ncpu: 22753.68470406531 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 28417.6554868669,
            "unit": "ns/iter",
            "extra": "iterations: 29279\ncpu: 28416.21298541618 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 34111.236156486484,
            "unit": "ns/iter",
            "extra": "iterations: 24488\ncpu: 34110.91146684088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 39366.94873618866,
            "unit": "ns/iter",
            "extra": "iterations: 21087\ncpu: 39366.5623369849 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 44119.984312276196,
            "unit": "ns/iter",
            "extra": "iterations: 18932\ncpu: 44119.58588633001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 636.3136935686755,
            "unit": "ns/iter",
            "extra": "iterations: 1098282\ncpu: 636.2963246233662 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 500.8221399999684,
            "unit": "ns/iter",
            "extra": "iterations: 1000000\ncpu: 500.809799999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 498.65556619107804,
            "unit": "ns/iter",
            "extra": "iterations: 1391562\ncpu: 498.65719242117876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 501.6535060412149,
            "unit": "ns/iter",
            "extra": "iterations: 1390942\ncpu: 501.63989584037256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 988.4565296024115,
            "unit": "ns/iter",
            "extra": "iterations: 707746\ncpu: 988.4488220350223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 2816.2991284189447,
            "unit": "ns/iter",
            "extra": "iterations: 285573\ncpu: 2816.280250583911 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 12513.855310627376,
            "unit": "ns/iter",
            "extra": "iterations: 65416\ncpu: 12513.727528433406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 10652.841031388092,
            "unit": "ns/iter",
            "extra": "iterations: 76751\ncpu: 10652.12049354406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 10778.42877476075,
            "unit": "ns/iter",
            "extra": "iterations: 76581\ncpu: 10777.762108094686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 10288.542977912699,
            "unit": "ns/iter",
            "extra": "iterations: 79727\ncpu: 10288.162103177121 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 36507.011405332894,
            "unit": "ns/iter",
            "extra": "iterations: 22621\ncpu: 36504.84063480842 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 274241.97516505345,
            "unit": "ns/iter",
            "extra": "iterations: 3181\ncpu: 274231.6881483807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 210926.2316650195,
            "unit": "ns/iter",
            "extra": "iterations: 4036\ncpu: 210913.40436075372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 214310.1817957581,
            "unit": "ns/iter",
            "extra": "iterations: 4054\ncpu: 214302.93537247143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 210905.19405551843,
            "unit": "ns/iter",
            "extra": "iterations: 4071\ncpu: 210891.91844755562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 109707.15471840157,
            "unit": "ns/iter",
            "extra": "iterations: 7937\ncpu: 109703.91835706214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 206663.75764037747,
            "unit": "ns/iter",
            "extra": "iterations: 4221\ncpu: 206650.864723999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5639.032840000482,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5638.599000000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 28411.18914030175,
            "unit": "ns/iter",
            "extra": "iterations: 29301\ncpu: 28409.02358281288 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 23663.25417617338,
            "unit": "ns/iter",
            "extra": "iterations: 35499\ncpu: 23662.45528043049 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 23445.37365546223,
            "unit": "ns/iter",
            "extra": "iterations: 35514\ncpu: 23444.207918004162 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 23342.85432553842,
            "unit": "ns/iter",
            "extra": "iterations: 35799\ncpu: 23342.087767814824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 52037.50914518395,
            "unit": "ns/iter",
            "extra": "iterations: 15746\ncpu: 52036.942715610305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 294135.4544843686,
            "unit": "ns/iter",
            "extra": "iterations: 2977\ncpu: 294118.81088343885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 235592.2946593009,
            "unit": "ns/iter",
            "extra": "iterations: 3801\ncpu: 235583.8726650874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 229489.83197047136,
            "unit": "ns/iter",
            "extra": "iterations: 3791\ncpu: 229475.3099446046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 228244.88516873086,
            "unit": "ns/iter",
            "extra": "iterations: 3823\ncpu: 228231.70285116462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 122693.26445350666,
            "unit": "ns/iter",
            "extra": "iterations: 7109\ncpu: 122685.80672387131 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 217689.41073656996,
            "unit": "ns/iter",
            "extra": "iterations: 4005\ncpu: 217678.9013732845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 873225.5737854436,
            "unit": "ns/iter",
            "extra": "iterations: 1091\ncpu: 873168.9275893705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 483322.579148487,
            "unit": "ns/iter",
            "extra": "iterations: 1832\ncpu: 483307.1506550232 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 2688.5424947611505,
            "unit": "ns/iter",
            "extra": "iterations: 299684\ncpu: 2688.4094579623948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 12387.216535373494,
            "unit": "ns/iter",
            "extra": "iterations: 65883\ncpu: 12386.832718607306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 10092.078125954535,
            "unit": "ns/iter",
            "extra": "iterations: 81791\ncpu: 10091.609101245935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 10337.517205944889,
            "unit": "ns/iter",
            "extra": "iterations: 79798\ncpu: 10337.28539562388 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 9696.969506462883,
            "unit": "ns/iter",
            "extra": "iterations: 85100\ncpu: 9696.531139835477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 34673.71126410099,
            "unit": "ns/iter",
            "extra": "iterations: 24112\ncpu: 34671.70703384198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 284112.9217002037,
            "unit": "ns/iter",
            "extra": "iterations: 3129\ncpu: 284096.9638862251 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 215688.99705521483,
            "unit": "ns/iter",
            "extra": "iterations: 4075\ncpu: 215677.20245398756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 215996.49373311645,
            "unit": "ns/iter",
            "extra": "iterations: 4069\ncpu: 215987.09756697057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 213828.23037544187,
            "unit": "ns/iter",
            "extra": "iterations: 4102\ncpu: 213815.69965870265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 108593.53919622648,
            "unit": "ns/iter",
            "extra": "iterations: 8062\ncpu: 108586.69064748244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 205844.9086058757,
            "unit": "ns/iter",
            "extra": "iterations: 4311\ncpu: 205837.67107399568 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 249.8257981830318,
            "unit": "ns/iter",
            "extra": "iterations: 2803461\ncpu: 249.82651800756423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1666.5884639030492,
            "unit": "ns/iter",
            "extra": "iterations: 419674\ncpu: 1666.5504653612188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1295.0400282051744,
            "unit": "ns/iter",
            "extra": "iterations: 565851\ncpu: 1295.0428646410548 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1361.0494528719548,
            "unit": "ns/iter",
            "extra": "iterations: 544114\ncpu: 1361.053382195653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 998.046811567463,
            "unit": "ns/iter",
            "extra": "iterations: 703010\ncpu: 998.0011664130034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 10786.867973715032,
            "unit": "ns/iter",
            "extra": "iterations: 64828\ncpu: 10786.740297402448 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 13585.166234168957,
            "unit": "ns/iter",
            "extra": "iterations: 51638\ncpu: 13584.60436112933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 3158.4354387039816,
            "unit": "ns/iter",
            "extra": "iterations: 221402\ncpu: 3158.445271497072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 3138.8666358670416,
            "unit": "ns/iter",
            "extra": "iterations: 222946\ncpu: 3138.78338252313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 3139.709357834487,
            "unit": "ns/iter",
            "extra": "iterations: 222466\ncpu: 3139.626729477761 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5840.547856660023,
            "unit": "ns/iter",
            "extra": "iterations: 119743\ncpu: 5840.2954661232725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5992.993542935852,
            "unit": "ns/iter",
            "extra": "iterations: 115997\ncpu: 5993.009301964672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 2069.0062811151406,
            "unit": "ns/iter",
            "extra": "iterations: 340067\ncpu: 2069.012282873686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10450.627260268704,
            "unit": "ns/iter",
            "extra": "iterations: 67138\ncpu: 10450.330662217948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8340.053658828945,
            "unit": "ns/iter",
            "extra": "iterations: 83155\ncpu: 8339.957909927343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 8463.608467396936,
            "unit": "ns/iter",
            "extra": "iterations: 82859\ncpu: 8463.306339685618 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 8242.366268323774,
            "unit": "ns/iter",
            "extra": "iterations: 84935\ncpu: 8242.39006298945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 19262.344306173298,
            "unit": "ns/iter",
            "extra": "iterations: 36241\ncpu: 19262.09265748728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 59632.495035946275,
            "unit": "ns/iter",
            "extra": "iterations: 11684\ncpu: 59631.31633002342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 47696.483844580966,
            "unit": "ns/iter",
            "extra": "iterations: 14670\ncpu: 47695.207907293516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 47460.21737951448,
            "unit": "ns/iter",
            "extra": "iterations: 14753\ncpu: 47459.62177184251 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 47330.496720531395,
            "unit": "ns/iter",
            "extra": "iterations: 14789\ncpu: 47327.74359321178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 27674.172933821945,
            "unit": "ns/iter",
            "extra": "iterations: 25264\ncpu: 27673.883787206913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 47068.68516657181,
            "unit": "ns/iter",
            "extra": "iterations: 14919\ncpu: 47066.58623232135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 2070.2853567143075,
            "unit": "ns/iter",
            "extra": "iterations: 339193\ncpu: 2070.289776027226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 10516.291610627586,
            "unit": "ns/iter",
            "extra": "iterations: 66918\ncpu: 10515.906034250798 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 9872.10929100084,
            "unit": "ns/iter",
            "extra": "iterations: 71058\ncpu: 9872.136845956727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 9875.36979343131,
            "unit": "ns/iter",
            "extra": "iterations: 70872\ncpu: 9875.165086352865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 9581.293548652242,
            "unit": "ns/iter",
            "extra": "iterations: 72884\ncpu: 9581.194775259164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 19458.993310851958,
            "unit": "ns/iter",
            "extra": "iterations: 35879\ncpu: 19459.026171298232 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 58656.15919092363,
            "unit": "ns/iter",
            "extra": "iterations: 11816\ncpu: 58653.410629655176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 48041.60521775529,
            "unit": "ns/iter",
            "extra": "iterations: 14489\ncpu: 48041.14845745042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 48773.626559466815,
            "unit": "ns/iter",
            "extra": "iterations: 14428\ncpu: 48773.73856390304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 48712.697344638305,
            "unit": "ns/iter",
            "extra": "iterations: 14386\ncpu: 48710.85777839524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 29628.09205314574,
            "unit": "ns/iter",
            "extra": "iterations: 24236\ncpu: 29628.193596303263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 48016.91406569379,
            "unit": "ns/iter",
            "extra": "iterations: 14674\ncpu: 48014.495025215074 ns\nthreads: 1"
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
        "date": 1702420980279,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 670.3253220548581,
            "unit": "ns/iter",
            "extra": "iterations: 1046483\ncpu: 670.2961252117809 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 6185.049238647659,
            "unit": "ns/iter",
            "extra": "iterations: 132396\ncpu: 6184.970089730808 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 11815.942555035568,
            "unit": "ns/iter",
            "extra": "iterations: 70363\ncpu: 11815.721330813065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 17541.18818495987,
            "unit": "ns/iter",
            "extra": "iterations: 47448\ncpu: 17540.910048895632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 23105.88290981486,
            "unit": "ns/iter",
            "extra": "iterations: 36126\ncpu: 23105.59984498699 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 28364.08778418936,
            "unit": "ns/iter",
            "extra": "iterations: 29470\ncpu: 28363.125212080064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 33651.719196556725,
            "unit": "ns/iter",
            "extra": "iterations: 24843\ncpu: 33650.726562814474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 39783.96368794395,
            "unit": "ns/iter",
            "extra": "iterations: 21150\ncpu: 39783.24822695038 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 43834.67874320314,
            "unit": "ns/iter",
            "extra": "iterations: 19128\ncpu: 43833.33333333338 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 634.2973990345279,
            "unit": "ns/iter",
            "extra": "iterations: 1096093\ncpu: 634.2848645142345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 505.67199978628463,
            "unit": "ns/iter",
            "extra": "iterations: 1384743\ncpu: 505.6624225578315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 502.1213601111159,
            "unit": "ns/iter",
            "extra": "iterations: 1394239\ncpu: 502.11943576388234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 493.3439842600624,
            "unit": "ns/iter",
            "extra": "iterations: 1421097\ncpu: 493.34190417684323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 993.4970490366946,
            "unit": "ns/iter",
            "extra": "iterations: 707735\ncpu: 993.4832953012079 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 2806.4542211113653,
            "unit": "ns/iter",
            "extra": "iterations: 286453\ncpu: 2806.4059374487306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 12591.523541072851,
            "unit": "ns/iter",
            "extra": "iterations: 64568\ncpu: 12591.471007310109 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 10507.66239475899,
            "unit": "ns/iter",
            "extra": "iterations: 77561\ncpu: 10507.532135996167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 10605.405436042261,
            "unit": "ns/iter",
            "extra": "iterations: 76747\ncpu: 10605.264049409056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 10276.096038887497,
            "unit": "ns/iter",
            "extra": "iterations: 78791\ncpu: 10275.82972674544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 36605.94829968553,
            "unit": "ns/iter",
            "extra": "iterations: 22437\ncpu: 36605.59343940813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 273676.168183276,
            "unit": "ns/iter",
            "extra": "iterations: 3187\ncpu: 273673.26639472856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 210559.50568182877,
            "unit": "ns/iter",
            "extra": "iterations: 4048\ncpu: 210555.2124505923 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 210769.9024450306,
            "unit": "ns/iter",
            "extra": "iterations: 4049\ncpu: 210761.0521116329 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 210376.95722714224,
            "unit": "ns/iter",
            "extra": "iterations: 4068\ncpu: 210365.95378564374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 109732.20694426559,
            "unit": "ns/iter",
            "extra": "iterations: 7949\ncpu: 109727.81481947444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 206184.2382075602,
            "unit": "ns/iter",
            "extra": "iterations: 4240\ncpu: 206172.00471698074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5674.421499999197,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5674.329 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 29657.33520231704,
            "unit": "ns/iter",
            "extra": "iterations: 28001\ncpu: 29655.48730402477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 23739.59313767205,
            "unit": "ns/iter",
            "extra": "iterations: 35265\ncpu: 23739.23720402666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 23492.124419815664,
            "unit": "ns/iter",
            "extra": "iterations: 35549\ncpu: 23491.383723874125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 23023.53754407344,
            "unit": "ns/iter",
            "extra": "iterations: 36304\ncpu: 23023.278426619632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 51871.46296067047,
            "unit": "ns/iter",
            "extra": "iterations: 16172\ncpu: 51869.42245857037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 293400.566532291,
            "unit": "ns/iter",
            "extra": "iterations: 2976\ncpu: 293359.71102150535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 231854.54306917463,
            "unit": "ns/iter",
            "extra": "iterations: 3773\ncpu: 231839.59713755493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 229371.27414248648,
            "unit": "ns/iter",
            "extra": "iterations: 3790\ncpu: 229358.6015831145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 226932.77283370195,
            "unit": "ns/iter",
            "extra": "iterations: 3843\ncpu: 226917.980744209 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 122523.71166247025,
            "unit": "ns/iter",
            "extra": "iterations: 7134\ncpu: 122515.64339781337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 219003.10763455,
            "unit": "ns/iter",
            "extra": "iterations: 3995\ncpu: 218986.48310387976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 865635.7461186666,
            "unit": "ns/iter",
            "extra": "iterations: 1095\ncpu: 865562.5570776211 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 485276.09271523275,
            "unit": "ns/iter",
            "extra": "iterations: 1812\ncpu: 485274.668874169 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 2694.0326302142985,
            "unit": "ns/iter",
            "extra": "iterations: 298527\ncpu: 2693.8464527496685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 12595.098963992203,
            "unit": "ns/iter",
            "extra": "iterations: 65347\ncpu: 12594.907187782132 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 10243.24885878671,
            "unit": "ns/iter",
            "extra": "iterations: 80616\ncpu: 10242.977820779945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 10283.758920442844,
            "unit": "ns/iter",
            "extra": "iterations: 80181\ncpu: 10283.217969344341 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 9758.184156817892,
            "unit": "ns/iter",
            "extra": "iterations: 84276\ncpu: 9757.554938535233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 34439.929420935805,
            "unit": "ns/iter",
            "extra": "iterations: 24384\ncpu: 34439.5464238847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 284988.70789387537,
            "unit": "ns/iter",
            "extra": "iterations: 3129\ncpu: 284975.487376158 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 215217.62158837556,
            "unit": "ns/iter",
            "extra": "iterations: 4067\ncpu: 215209.90902384958 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 216141.7708231735,
            "unit": "ns/iter",
            "extra": "iterations: 4106\ncpu: 216127.15538236673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 211788.50717358603,
            "unit": "ns/iter",
            "extra": "iterations: 4182\ncpu: 211778.93352463003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 108060.13610492396,
            "unit": "ns/iter",
            "extra": "iterations: 8082\ncpu: 108054.2811185353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 203682.45282148232,
            "unit": "ns/iter",
            "extra": "iterations: 4324\ncpu: 203676.15633672453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 250.0282557522073,
            "unit": "ns/iter",
            "extra": "iterations: 2797802\ncpu: 250.01740652126142 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1750.1010327413258,
            "unit": "ns/iter",
            "extra": "iterations: 400197\ncpu: 1750.0233634934757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1316.0207836829213,
            "unit": "ns/iter",
            "extra": "iterations: 532052\ncpu: 1315.9843398765595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1402.3690202366076,
            "unit": "ns/iter",
            "extra": "iterations: 499539\ncpu: 1402.3631788509072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 1013.1679745989068,
            "unit": "ns/iter",
            "extra": "iterations: 692569\ncpu: 1013.1117621493287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 10807.2220315132,
            "unit": "ns/iter",
            "extra": "iterations: 64671\ncpu: 10806.751093998852 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 13543.797462733013,
            "unit": "ns/iter",
            "extra": "iterations: 51788\ncpu: 13542.953966169805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 3128.759216043693,
            "unit": "ns/iter",
            "extra": "iterations: 223686\ncpu: 3128.6075123163637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 3178.03733467084,
            "unit": "ns/iter",
            "extra": "iterations: 221376\ncpu: 3177.903205406176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 3112.9808068866764,
            "unit": "ns/iter",
            "extra": "iterations: 224195\ncpu: 3112.905729387368 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5786.075202258482,
            "unit": "ns/iter",
            "extra": "iterations: 126818\ncpu: 5786.013026541972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5334.867066474575,
            "unit": "ns/iter",
            "extra": "iterations: 132397\ncpu: 5334.846711028193 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 2062.93275891401,
            "unit": "ns/iter",
            "extra": "iterations: 340982\ncpu: 2062.925315705832 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10481.763000954035,
            "unit": "ns/iter",
            "extra": "iterations: 67072\ncpu: 10481.645097805382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8275.185366722084,
            "unit": "ns/iter",
            "extra": "iterations: 84260\ncpu: 8275.085449798147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 8378.740220471313,
            "unit": "ns/iter",
            "extra": "iterations: 84002\ncpu: 8378.46836980059 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 8147.560145765804,
            "unit": "ns/iter",
            "extra": "iterations: 85617\ncpu: 8147.247626055595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 19280.19545592539,
            "unit": "ns/iter",
            "extra": "iterations: 36223\ncpu: 19279.510255914538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 59287.216874621445,
            "unit": "ns/iter",
            "extra": "iterations: 11781\ncpu: 59285.00127323604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 47500.69543354479,
            "unit": "ns/iter",
            "extra": "iterations: 14716\ncpu: 47499.374830117384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 47480.313898308,
            "unit": "ns/iter",
            "extra": "iterations: 14750\ncpu: 47478.71864406735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 47340.09243923836,
            "unit": "ns/iter",
            "extra": "iterations: 14853\ncpu: 47337.31232747579 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 27515.57610532908,
            "unit": "ns/iter",
            "extra": "iterations: 25445\ncpu: 27514.45863627425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 46867.90720757284,
            "unit": "ns/iter",
            "extra": "iterations: 15012\ncpu: 46865.447641886625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 2197.012432351936,
            "unit": "ns/iter",
            "extra": "iterations: 315789\ncpu: 2196.916612041587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 11985.12774763105,
            "unit": "ns/iter",
            "extra": "iterations: 58232\ncpu: 11984.058593213444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 9405.761591957591,
            "unit": "ns/iter",
            "extra": "iterations: 75203\ncpu: 9405.245801364303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 9373.12320149865,
            "unit": "ns/iter",
            "extra": "iterations: 74715\ncpu: 9372.669477347183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 9609.5048014602,
            "unit": "ns/iter",
            "extra": "iterations: 71749\ncpu: 9609.193159486455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 18933.492988770882,
            "unit": "ns/iter",
            "extra": "iterations: 37226\ncpu: 18933.41481760079 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 58872.570737501424,
            "unit": "ns/iter",
            "extra": "iterations: 11783\ncpu: 58869.02316897214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 47775.091276636624,
            "unit": "ns/iter",
            "extra": "iterations: 14593\ncpu: 47774.446652505154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 47815.516502567254,
            "unit": "ns/iter",
            "extra": "iterations: 14422\ncpu: 47813.18125086664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 48106.412518859295,
            "unit": "ns/iter",
            "extra": "iterations: 14586\ncpu: 48103.61990950259 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 27836.95724796323,
            "unit": "ns/iter",
            "extra": "iterations: 25145\ncpu: 27835.557764963276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 48221.191019684564,
            "unit": "ns/iter",
            "extra": "iterations: 14632\ncpu: 48220.25013668653 ns\nthreads: 1"
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
        "date": 1702421417413,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 665.5120965714813,
            "unit": "ns/iter",
            "extra": "iterations: 1054307\ncpu: 665.4784612072195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 6238.470567546632,
            "unit": "ns/iter",
            "extra": "iterations: 130791\ncpu: 6238.238869646994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 12101.188318270815,
            "unit": "ns/iter",
            "extra": "iterations: 69048\ncpu: 12100.7603406326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 17926.752713595528,
            "unit": "ns/iter",
            "extra": "iterations: 46525\ncpu: 17926.654486835032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 23659.086644435756,
            "unit": "ns/iter",
            "extra": "iterations: 35386\ncpu: 23658.203809416154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 29303.56635671871,
            "unit": "ns/iter",
            "extra": "iterations: 28392\ncpu: 29302.926880811498 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 35391.036237373926,
            "unit": "ns/iter",
            "extra": "iterations: 23760\ncpu: 35389.70959595962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 40864.51868131692,
            "unit": "ns/iter",
            "extra": "iterations: 20475\ncpu: 40863.87789987791 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 46483.08461749453,
            "unit": "ns/iter",
            "extra": "iterations: 18235\ncpu: 46481.60680010968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 644.7927340110178,
            "unit": "ns/iter",
            "extra": "iterations: 1085248\ncpu: 644.7842336498204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 504.6777617140252,
            "unit": "ns/iter",
            "extra": "iterations: 1385453\ncpu: 504.66352882414515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 504.58547722599656,
            "unit": "ns/iter",
            "extra": "iterations: 1386691\ncpu: 504.58335707089736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 494.9057889131929,
            "unit": "ns/iter",
            "extra": "iterations: 1414186\ncpu: 494.89190247958913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 969.3857665452224,
            "unit": "ns/iter",
            "extra": "iterations: 718940\ncpu: 969.3814504687455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 2814.7014526960293,
            "unit": "ns/iter",
            "extra": "iterations: 284712\ncpu: 2814.62214448285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 12454.990510681628,
            "unit": "ns/iter",
            "extra": "iterations: 65442\ncpu: 12454.931084013326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 10751.206853161208,
            "unit": "ns/iter",
            "extra": "iterations: 75498\ncpu: 10750.82121380699 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 10706.104108107025,
            "unit": "ns/iter",
            "extra": "iterations: 75777\ncpu: 10705.880412262322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 10224.094829430307,
            "unit": "ns/iter",
            "extra": "iterations: 79469\ncpu: 10223.651990084165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 36387.95225920135,
            "unit": "ns/iter",
            "extra": "iterations: 22685\ncpu: 36387.37491734628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 273712.78665828344,
            "unit": "ns/iter",
            "extra": "iterations: 3178\ncpu: 273699.49653870397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 217539.32070771133,
            "unit": "ns/iter",
            "extra": "iterations: 4013\ncpu: 217535.95813605742 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 211438.4800995142,
            "unit": "ns/iter",
            "extra": "iterations: 4020\ncpu: 211431.0696517417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 220369.07756916565,
            "unit": "ns/iter",
            "extra": "iterations: 4048\ncpu: 220364.97035573111 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 110912.1690551685,
            "unit": "ns/iter",
            "extra": "iterations: 7885\ncpu: 110907.52060875097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 205982.37735848644,
            "unit": "ns/iter",
            "extra": "iterations: 4187\ncpu: 205978.38547886303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5611.205500000551,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5611.034000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 30191.896994506234,
            "unit": "ns/iter",
            "extra": "iterations: 28581\ncpu: 30191.749763829135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 23582.995763916628,
            "unit": "ns/iter",
            "extra": "iterations: 35174\ncpu: 23581.23614033088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 23551.25168966854,
            "unit": "ns/iter",
            "extra": "iterations: 35214\ncpu: 23551.12171295508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 23047.063855755645,
            "unit": "ns/iter",
            "extra": "iterations: 36050\ncpu: 23046.27739251032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 53028.6903749712,
            "unit": "ns/iter",
            "extra": "iterations: 15761\ncpu: 53028.39921324787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 295007.8917004005,
            "unit": "ns/iter",
            "extra": "iterations: 2964\ncpu: 294995.7827260453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 230731.47194281532,
            "unit": "ns/iter",
            "extra": "iterations: 3778\ncpu: 230723.23980942334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 230875.3930084859,
            "unit": "ns/iter",
            "extra": "iterations: 3776\ncpu: 230868.03495762803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 228739.55666056668,
            "unit": "ns/iter",
            "extra": "iterations: 3821\ncpu: 228733.9439937186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 123452.61285332486,
            "unit": "ns/iter",
            "extra": "iterations: 7111\ncpu: 123448.5163830683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 218127.1633013645,
            "unit": "ns/iter",
            "extra": "iterations: 3962\ncpu: 218117.41544674517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 877275.3974240285,
            "unit": "ns/iter",
            "extra": "iterations: 1087\ncpu: 877234.8666053361 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 481372.5068343425,
            "unit": "ns/iter",
            "extra": "iterations: 1829\ncpu: 481351.5035538542 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 2685.8220169442006,
            "unit": "ns/iter",
            "extra": "iterations: 297916\ncpu: 2685.7798842626685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 12248.74067645833,
            "unit": "ns/iter",
            "extra": "iterations: 67410\ncpu: 12248.234683281327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 9993.383703293628,
            "unit": "ns/iter",
            "extra": "iterations: 83072\ncpu: 9993.116814329695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 10413.097538718717,
            "unit": "ns/iter",
            "extra": "iterations: 79999\ncpu: 10412.705158814542 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 9701.225125140454,
            "unit": "ns/iter",
            "extra": "iterations: 86503\ncpu: 9701.028866050829 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 34724.21265487223,
            "unit": "ns/iter",
            "extra": "iterations: 24133\ncpu: 34723.337338913654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 281435.7217997743,
            "unit": "ns/iter",
            "extra": "iterations: 3156\ncpu: 281431.90747782047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 214724.52435459467,
            "unit": "ns/iter",
            "extra": "iterations: 4106\ncpu: 214713.17584023392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 216870.52871580198,
            "unit": "ns/iter",
            "extra": "iterations: 4057\ncpu: 216866.45304412156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 212820.0844798503,
            "unit": "ns/iter",
            "extra": "iterations: 4143\ncpu: 212814.21675114598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 109107.1846307379,
            "unit": "ns/iter",
            "extra": "iterations: 8016\ncpu: 109106.53692614757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 204862.67271460386,
            "unit": "ns/iter",
            "extra": "iterations: 4299\ncpu: 204855.1756222381 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 250.38878959197126,
            "unit": "ns/iter",
            "extra": "iterations: 2791852\ncpu: 250.38748472340328 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1720.113757171004,
            "unit": "ns/iter",
            "extra": "iterations: 408238\ncpu: 1720.0907313870866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1308.9075249082075,
            "unit": "ns/iter",
            "extra": "iterations: 531754\ncpu: 1308.9009203503954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1373.3003678725431,
            "unit": "ns/iter",
            "extra": "iterations: 510231\ncpu: 1373.2452555803172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 1010.4768409169252,
            "unit": "ns/iter",
            "extra": "iterations: 692644\ncpu: 1010.4726237432249 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 11150.486063794377,
            "unit": "ns/iter",
            "extra": "iterations: 63109\ncpu: 11150.105373243077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 13491.9539352218,
            "unit": "ns/iter",
            "extra": "iterations: 51992\ncpu: 13491.30250807822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 3141.1484273837737,
            "unit": "ns/iter",
            "extra": "iterations: 221637\ncpu: 3141.133023818236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 3127.269282247143,
            "unit": "ns/iter",
            "extra": "iterations: 224144\ncpu: 3127.2173245770546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 3130.961487621525,
            "unit": "ns/iter",
            "extra": "iterations: 223175\ncpu: 3130.90265486725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5855.799414960154,
            "unit": "ns/iter",
            "extra": "iterations: 119650\ncpu: 5855.69828666943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5922.245207441409,
            "unit": "ns/iter",
            "extra": "iterations: 116587\ncpu: 5922.216027515895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 2079.828275286387,
            "unit": "ns/iter",
            "extra": "iterations: 340184\ncpu: 2079.7342026667875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10615.065426387986,
            "unit": "ns/iter",
            "extra": "iterations: 65738\ncpu: 10615.0111046883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8574.41763346857,
            "unit": "ns/iter",
            "extra": "iterations: 80937\ncpu: 8574.28370213872 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 8470.020036231677,
            "unit": "ns/iter",
            "extra": "iterations: 82800\ncpu: 8469.881642512135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 8319.830002030187,
            "unit": "ns/iter",
            "extra": "iterations: 83701\ncpu: 8319.687936822736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 19451.56977782644,
            "unit": "ns/iter",
            "extra": "iterations: 35828\ncpu: 19450.65032935106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 59309.855678834916,
            "unit": "ns/iter",
            "extra": "iterations: 11807\ncpu: 59309.57906326725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 47720.51847826166,
            "unit": "ns/iter",
            "extra": "iterations: 14720\ncpu: 47719.12364130461 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 47899.79476012291,
            "unit": "ns/iter",
            "extra": "iterations: 14695\ncpu: 47899.52364749939 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 47289.219522100284,
            "unit": "ns/iter",
            "extra": "iterations: 14773\ncpu: 47288.4045217627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 27629.067042851584,
            "unit": "ns/iter",
            "extra": "iterations: 25342\ncpu: 27628.494199353045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 46850.05599358889,
            "unit": "ns/iter",
            "extra": "iterations: 14966\ncpu: 46849.779500200464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 2259.4445388261925,
            "unit": "ns/iter",
            "extra": "iterations: 316681\ncpu: 2259.3767861033793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 10402.080910615468,
            "unit": "ns/iter",
            "extra": "iterations: 67383\ncpu: 10401.9025570247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 8697.572792216817,
            "unit": "ns/iter",
            "extra": "iterations: 81190\ncpu: 8697.276758221487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 9929.415877297979,
            "unit": "ns/iter",
            "extra": "iterations: 70415\ncpu: 9929.027905985895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 9317.411663201918,
            "unit": "ns/iter",
            "extra": "iterations: 73599\ncpu: 9317.367083791996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 19149.937558555328,
            "unit": "ns/iter",
            "extra": "iterations: 36290\ncpu: 19149.344171948276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 58369.47636638083,
            "unit": "ns/iter",
            "extra": "iterations: 11911\ncpu: 58369.154563008706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 47045.12419757769,
            "unit": "ns/iter",
            "extra": "iterations: 14799\ncpu: 47044.38813433337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 47807.36241056517,
            "unit": "ns/iter",
            "extra": "iterations: 14536\ncpu: 47807.1546505235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 46843.514095851875,
            "unit": "ns/iter",
            "extra": "iterations: 14898\ncpu: 46842.025775272545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 27714.502549104953,
            "unit": "ns/iter",
            "extra": "iterations: 25303\ncpu: 27714.350077065523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 47455.061136833145,
            "unit": "ns/iter",
            "extra": "iterations: 14901\ncpu: 47454.23125964704 ns\nthreads: 1"
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
        "date": 1702421918898,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 667.978047661794,
            "unit": "ns/iter",
            "extra": "iterations: 1046540\ncpu: 667.9522999598679 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 6081.890538116476,
            "unit": "ns/iter",
            "extra": "iterations: 133800\ncpu: 6081.644245142003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 11807.866439944375,
            "unit": "ns/iter",
            "extra": "iterations: 71159\ncpu: 11807.376438679574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 17328.73492359517,
            "unit": "ns/iter",
            "extra": "iterations: 47707\ncpu: 17327.765317458652 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 22881.011639186356,
            "unit": "ns/iter",
            "extra": "iterations: 36085\ncpu: 22879.70902036857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 28330.85282045985,
            "unit": "ns/iter",
            "extra": "iterations: 29481\ncpu: 28328.977985821377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 34126.59988626336,
            "unit": "ns/iter",
            "extra": "iterations: 24618\ncpu: 34124.2992932001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 39743.897460288805,
            "unit": "ns/iter",
            "extra": "iterations: 21026\ncpu: 39741.02539712736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 45054.26313286108,
            "unit": "ns/iter",
            "extra": "iterations: 18922\ncpu: 45052.404608392295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 642.5846766814955,
            "unit": "ns/iter",
            "extra": "iterations: 1087519\ncpu: 642.562750627805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 512.9625544784088,
            "unit": "ns/iter",
            "extra": "iterations: 1364302\ncpu: 512.9491857374683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 508.4434950822087,
            "unit": "ns/iter",
            "extra": "iterations: 1383853\ncpu: 508.42596720894494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 508.97015047075206,
            "unit": "ns/iter",
            "extra": "iterations: 1373556\ncpu: 508.9472143836873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 977.3939650144961,
            "unit": "ns/iter",
            "extra": "iterations: 716754\ncpu: 977.3528993211062 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 2805.130382687009,
            "unit": "ns/iter",
            "extra": "iterations: 285429\ncpu: 2804.923115731056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 12747.20158904961,
            "unit": "ns/iter",
            "extra": "iterations: 63560\ncpu: 12746.43014474513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 10694.518564520282,
            "unit": "ns/iter",
            "extra": "iterations: 75682\ncpu: 10693.780555482146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 10584.084019067552,
            "unit": "ns/iter",
            "extra": "iterations: 77411\ncpu: 10583.4041673664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 10179.644244505134,
            "unit": "ns/iter",
            "extra": "iterations: 79802\ncpu: 10179.23360316786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 36091.32844536096,
            "unit": "ns/iter",
            "extra": "iterations: 22777\ncpu: 36089.85819027971 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 273737.90546949266,
            "unit": "ns/iter",
            "extra": "iterations: 3163\ncpu: 273713.8159974707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 213758.00473225588,
            "unit": "ns/iter",
            "extra": "iterations: 4015\ncpu: 213744.28393524291 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 216028.21710036494,
            "unit": "ns/iter",
            "extra": "iterations: 4035\ncpu: 216013.65551425022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 212710.8946713078,
            "unit": "ns/iter",
            "extra": "iterations: 4016\ncpu: 212694.87051792865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 110791.40986308767,
            "unit": "ns/iter",
            "extra": "iterations: 7888\ncpu: 110781.94726166314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 206605.9479043392,
            "unit": "ns/iter",
            "extra": "iterations: 4223\ncpu: 206589.74662562195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5618.387389999953,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5618.169999999977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 29296.076575472027,
            "unit": "ns/iter",
            "extra": "iterations: 28547\ncpu: 29294.96269310266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 23610.782200610876,
            "unit": "ns/iter",
            "extra": "iterations: 35372\ncpu: 23609.38595499265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 23634.521304965092,
            "unit": "ns/iter",
            "extra": "iterations: 35250\ncpu: 23633.61134751768 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 23458.995477528024,
            "unit": "ns/iter",
            "extra": "iterations: 35600\ncpu: 23458.120786516865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 51626.43741209756,
            "unit": "ns/iter",
            "extra": "iterations: 16353\ncpu: 51521.2010028742 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 295200.9117348667,
            "unit": "ns/iter",
            "extra": "iterations: 2957\ncpu: 295185.18769022584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 231184.9362939433,
            "unit": "ns/iter",
            "extra": "iterations: 3783\ncpu: 231181.20539254538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 231684.58484043245,
            "unit": "ns/iter",
            "extra": "iterations: 3760\ncpu: 231679.22872340545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 228357.28771097804,
            "unit": "ns/iter",
            "extra": "iterations: 3792\ncpu: 228343.19620253224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 122390.51666200241,
            "unit": "ns/iter",
            "extra": "iterations: 7142\ncpu: 122385.39624754986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 217520.83978038174,
            "unit": "ns/iter",
            "extra": "iterations: 4007\ncpu: 217511.62964811455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 876264.0986301615,
            "unit": "ns/iter",
            "extra": "iterations: 1095\ncpu: 876213.6073059423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 483150.4252310799,
            "unit": "ns/iter",
            "extra": "iterations: 1839\ncpu: 483115.878194671 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 2692.7394505170523,
            "unit": "ns/iter",
            "extra": "iterations: 298972\ncpu: 2692.6059965481636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 12135.503464916772,
            "unit": "ns/iter",
            "extra": "iterations: 67967\ncpu: 12134.911059778999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 10000.779366614326,
            "unit": "ns/iter",
            "extra": "iterations: 82730\ncpu: 10000.44965550589 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 10172.84392397316,
            "unit": "ns/iter",
            "extra": "iterations: 81550\ncpu: 10172.196198651176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 9691.27151201541,
            "unit": "ns/iter",
            "extra": "iterations: 85429\ncpu: 9690.935162532664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 34460.29576127841,
            "unit": "ns/iter",
            "extra": "iterations: 24229\ncpu: 34458.26076189687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 279367.22011384874,
            "unit": "ns/iter",
            "extra": "iterations: 3162\ncpu: 279358.03289057396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 215195.1903714632,
            "unit": "ns/iter",
            "extra": "iterations: 4092\ncpu: 215180.47409579688 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 214155.60532096395,
            "unit": "ns/iter",
            "extra": "iterations: 4097\ncpu: 214147.10763973565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 211911.85027906258,
            "unit": "ns/iter",
            "extra": "iterations: 4121\ncpu: 211901.23756369916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 108116.72880725085,
            "unit": "ns/iter",
            "extra": "iterations: 8057\ncpu: 108112.06404368888 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 204213.34997677268,
            "unit": "ns/iter",
            "extra": "iterations: 4306\ncpu: 204200.20901068315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 250.5294672579445,
            "unit": "ns/iter",
            "extra": "iterations: 2791013\ncpu: 250.52183562025846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1710.7384551728417,
            "unit": "ns/iter",
            "extra": "iterations: 406026\ncpu: 1710.661878795941 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1309.0840748189416,
            "unit": "ns/iter",
            "extra": "iterations: 533501\ncpu: 1309.0284741734358 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1366.3759398345564,
            "unit": "ns/iter",
            "extra": "iterations: 497162\ncpu: 1366.2727642096554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 1005.3251780785912,
            "unit": "ns/iter",
            "extra": "iterations: 695339\ncpu: 1005.274980980501 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 10683.841374426733,
            "unit": "ns/iter",
            "extra": "iterations: 64958\ncpu: 10683.675605776067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 12956.031886690593,
            "unit": "ns/iter",
            "extra": "iterations: 53941\ncpu: 12955.234422795264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 3194.3837129529925,
            "unit": "ns/iter",
            "extra": "iterations: 218640\ncpu: 3194.29884742043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 3160.286752581002,
            "unit": "ns/iter",
            "extra": "iterations: 223168\ncpu: 3160.101806710638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 3169.2444998112155,
            "unit": "ns/iter",
            "extra": "iterations: 219947\ncpu: 3169.1957607969193 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5818.094857440385,
            "unit": "ns/iter",
            "extra": "iterations: 118968\ncpu: 5817.708963754981 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5920.407077926124,
            "unit": "ns/iter",
            "extra": "iterations: 118368\ncpu: 5920.176061097616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 2057.5854817243508,
            "unit": "ns/iter",
            "extra": "iterations: 340371\ncpu: 2057.3812105026414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10557.340925438017,
            "unit": "ns/iter",
            "extra": "iterations: 66736\ncpu: 10556.458283385335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8353.693580664169,
            "unit": "ns/iter",
            "extra": "iterations: 83451\ncpu: 8353.566763729617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 8279.032478429212,
            "unit": "ns/iter",
            "extra": "iterations: 84025\ncpu: 8278.427848854546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 8166.595474282055,
            "unit": "ns/iter",
            "extra": "iterations: 84981\ncpu: 8165.857073934268 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 19223.24754328439,
            "unit": "ns/iter",
            "extra": "iterations: 36329\ncpu: 19221.492471579277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 59152.92772420605,
            "unit": "ns/iter",
            "extra": "iterations: 11719\ncpu: 59148.34030207346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 47743.42700061223,
            "unit": "ns/iter",
            "extra": "iterations: 14733\ncpu: 47739.598180954774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 47422.37365481613,
            "unit": "ns/iter",
            "extra": "iterations: 14682\ncpu: 47418.03568995993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 46930.81046283091,
            "unit": "ns/iter",
            "extra": "iterations: 14757\ncpu: 46929.34200718306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 27528.898709425368,
            "unit": "ns/iter",
            "extra": "iterations: 25570\ncpu: 27528.478685960075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 46586.127987817774,
            "unit": "ns/iter",
            "extra": "iterations: 15103\ncpu: 46584.33423823114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 2068.2952074860295,
            "unit": "ns/iter",
            "extra": "iterations: 341011\ncpu: 2068.2063041954884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 11441.842480620122,
            "unit": "ns/iter",
            "extra": "iterations: 61275\ncpu: 11441.359445124444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 9177.250500818307,
            "unit": "ns/iter",
            "extra": "iterations: 76375\ncpu: 9176.53158756127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 9843.964109383967,
            "unit": "ns/iter",
            "extra": "iterations: 70687\ncpu: 9843.201720259776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 10128.286725791006,
            "unit": "ns/iter",
            "extra": "iterations: 69345\ncpu: 10127.52613742871 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 19324.55802203179,
            "unit": "ns/iter",
            "extra": "iterations: 36219\ncpu: 19322.918909964163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 59394.21175468822,
            "unit": "ns/iter",
            "extra": "iterations: 11740\ncpu: 59392.785349233134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 47380.16921189067,
            "unit": "ns/iter",
            "extra": "iterations: 14668\ncpu: 47376.86801199933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 46978.4358420523,
            "unit": "ns/iter",
            "extra": "iterations: 14815\ncpu: 46974.424569693445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 46423.10239432785,
            "unit": "ns/iter",
            "extra": "iterations: 14952\ncpu: 46419.23488496508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 27603.26749890274,
            "unit": "ns/iter",
            "extra": "iterations: 25073\ncpu: 27601.14465760025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 47225.9577767333,
            "unit": "ns/iter",
            "extra": "iterations: 14897\ncpu: 47223.74303550991 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}