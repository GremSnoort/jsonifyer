window.BENCHMARK_DATA = {
  "lastUpdate": 1702489578778,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Serialize&Parse clang-8 18.04 Debug c++-17": [
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
        "date": 1702489576890,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 17882.80016375825,
            "unit": "ns/iter",
            "extra": "iterations: 39082\ncpu: 17880.90681131979 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 143554.3165285132,
            "unit": "ns/iter",
            "extra": "iterations: 5911\ncpu: 143544.62865843342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 269428.221841934,
            "unit": "ns/iter",
            "extra": "iterations: 3214\ncpu: 269407.93403858127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 391747.4471175588,
            "unit": "ns/iter",
            "extra": "iterations: 2203\ncpu: 391723.5133908305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 515274.8089020259,
            "unit": "ns/iter",
            "extra": "iterations: 1685\ncpu: 515205.341246291 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 515519.47400002973,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 515471.5000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 613097.42800006,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 613100.0999999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 712178.0802469787,
            "unit": "ns/iter",
            "extra": "iterations: 1296\ncpu: 712101.9290123457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 811433.5760774099,
            "unit": "ns/iter",
            "extra": "iterations: 1137\ncpu: 811386.6314863672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 14361.650180445855,
            "unit": "ns/iter",
            "extra": "iterations: 48768\ncpu: 14360.76115485565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 11988.093461467008,
            "unit": "ns/iter",
            "extra": "iterations: 58377\ncpu: 11987.435119995898 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 11945.249769569175,
            "unit": "ns/iter",
            "extra": "iterations: 58586\ncpu: 11944.350186051264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 11980.82502432001,
            "unit": "ns/iter",
            "extra": "iterations: 58591\ncpu: 11979.892816302861 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 20086.812707879333,
            "unit": "ns/iter",
            "extra": "iterations: 34876\ncpu: 20084.91799518293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 59097.432099997604,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 59094.870000000024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 295837.11842106713,
            "unit": "ns/iter",
            "extra": "iterations: 2888\ncpu: 295832.1675900281 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 235032.6449275352,
            "unit": "ns/iter",
            "extra": "iterations: 3588\ncpu: 235028.92976588628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 239885.35840584064,
            "unit": "ns/iter",
            "extra": "iterations: 3563\ncpu: 239880.94302553977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 235474.38743455862,
            "unit": "ns/iter",
            "extra": "iterations: 3629\ncpu: 235466.21658859204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 500985.8779999376,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 500986.19999999984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4456956.807692664,
            "unit": "ns/iter",
            "extra": "iterations: 208\ncpu: 4456806.249999992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3573699.265384588,
            "unit": "ns/iter",
            "extra": "iterations: 260\ncpu: 3573505.0000000093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3547200.2366415095,
            "unit": "ns/iter",
            "extra": "iterations: 262\ncpu: 3547029.770992368 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3567081.694980614,
            "unit": "ns/iter",
            "extra": "iterations: 259\ncpu: 3566926.2548262617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 2048527.3636363964,
            "unit": "ns/iter",
            "extra": "iterations: 451\ncpu: 2048466.9623059926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3466620.4644193896,
            "unit": "ns/iter",
            "extra": "iterations: 267\ncpu: 3466431.8352059866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 12964045.024389401,
            "unit": "ns/iter",
            "extra": "iterations: 82\ncpu: 12963748.780487796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5725045.369999861,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5724947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 16968508.56451566,
            "unit": "ns/iter",
            "extra": "iterations: 62\ncpu: 16968217.74193548 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 62504.16346366435,
            "unit": "ns/iter",
            "extra": "iterations: 13581\ncpu: 62502.74648405861 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 348820.8079577586,
            "unit": "ns/iter",
            "extra": "iterations: 2463\ncpu: 348817.29598051176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 265862.04340987,
            "unit": "ns/iter",
            "extra": "iterations: 3179\ncpu: 265861.24567474093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 269455.54431172815,
            "unit": "ns/iter",
            "extra": "iterations: 3182\ncpu: 269440.1319924565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 268976.3717787469,
            "unit": "ns/iter",
            "extra": "iterations: 3182\ncpu: 268972.187303584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 619323.7801418158,
            "unit": "ns/iter",
            "extra": "iterations: 1410\ncpu: 619302.7659574436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4515106.956521619,
            "unit": "ns/iter",
            "extra": "iterations: 207\ncpu: 4515072.946859887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3643427.9019609746,
            "unit": "ns/iter",
            "extra": "iterations: 255\ncpu: 3643292.5490196194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3626524.5019453703,
            "unit": "ns/iter",
            "extra": "iterations: 257\ncpu: 3626370.8171206214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3651170.46666696,
            "unit": "ns/iter",
            "extra": "iterations: 255\ncpu: 3650993.725490202 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 2081747.8468468832,
            "unit": "ns/iter",
            "extra": "iterations: 444\ncpu: 2081656.9819819895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3509969.0339620793,
            "unit": "ns/iter",
            "extra": "iterations: 265\ncpu: 3509823.0188679383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 13181432.462499741,
            "unit": "ns/iter",
            "extra": "iterations: 80\ncpu: 13180873.750000011 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5673218.780000298,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5673153.000000042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 53594.40990000621,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 53592.10000000019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 297358.18295218475,
            "unit": "ns/iter",
            "extra": "iterations: 2886\ncpu: 297341.2681912664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 231624.45326849446,
            "unit": "ns/iter",
            "extra": "iterations: 3702\ncpu: 231617.5040518633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 236430.7299834176,
            "unit": "ns/iter",
            "extra": "iterations: 3622\ncpu: 236430.72887907102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 235332.65175629497,
            "unit": "ns/iter",
            "extra": "iterations: 3644\ncpu: 235329.41822173374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 588644.7123565373,
            "unit": "ns/iter",
            "extra": "iterations: 1481\ncpu: 588636.1917623229 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 4497400.456310754,
            "unit": "ns/iter",
            "extra": "iterations: 206\ncpu: 4497115.0485437075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3591828.7769229314,
            "unit": "ns/iter",
            "extra": "iterations: 260\ncpu: 3591645.3846153966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3561992.942748315,
            "unit": "ns/iter",
            "extra": "iterations: 262\ncpu: 3561913.740458018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3581670.8275860357,
            "unit": "ns/iter",
            "extra": "iterations: 261\ncpu: 3581388.888888884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 2056460.0000001665,
            "unit": "ns/iter",
            "extra": "iterations: 452\ncpu: 2056326.106194688 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3469634.2873137076,
            "unit": "ns/iter",
            "extra": "iterations: 268\ncpu: 3469372.3880596897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6890.607920441324,
            "unit": "ns/iter",
            "extra": "iterations: 101459\ncpu: 6890.293616140516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 36839.87227660352,
            "unit": "ns/iter",
            "extra": "iterations: 19002\ncpu: 36837.10135775189 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 30301.217295284372,
            "unit": "ns/iter",
            "extra": "iterations: 23093\ncpu: 30297.80885982741 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 31294.41149158629,
            "unit": "ns/iter",
            "extra": "iterations: 22399\ncpu: 31291.856779320493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 23985.297431164596,
            "unit": "ns/iter",
            "extra": "iterations: 29274\ncpu: 23983.309421329624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 173918.32670808252,
            "unit": "ns/iter",
            "extra": "iterations: 4025\ncpu: 173905.96273292016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 300241.74229452363,
            "unit": "ns/iter",
            "extra": "iterations: 2336\ncpu: 300214.55479452194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 76368.05796942714,
            "unit": "ns/iter",
            "extra": "iterations: 9160\ncpu: 76365.94978165858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 75860.01495935349,
            "unit": "ns/iter",
            "extra": "iterations: 9225\ncpu: 75859.03523035138 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 76113.48388501839,
            "unit": "ns/iter",
            "extra": "iterations: 9184\ncpu: 76108.73257839806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 144211.77414041854,
            "unit": "ns/iter",
            "extra": "iterations: 4857\ncpu: 144202.01770640386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 140544.6222935001,
            "unit": "ns/iter",
            "extra": "iterations: 4988\ncpu: 140531.0745789897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 47268.545181957124,
            "unit": "ns/iter",
            "extra": "iterations: 14674\ncpu: 47265.16968788366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 235878.85897432655,
            "unit": "ns/iter",
            "extra": "iterations: 2964\ncpu: 235858.36707152546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 187606.8870449599,
            "unit": "ns/iter",
            "extra": "iterations: 3736\ncpu: 187595.20877944466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 187362.0772520884,
            "unit": "ns/iter",
            "extra": "iterations: 3741\ncpu: 187341.48623362798 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 188349.31970962312,
            "unit": "ns/iter",
            "extra": "iterations: 3719\ncpu: 188337.02608228027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 338010.2545805498,
            "unit": "ns/iter",
            "extra": "iterations: 2074\ncpu: 337981.96721311234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1306759.5597013806,
            "unit": "ns/iter",
            "extra": "iterations: 536\ncpu: 1306679.850746269 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 1088343.7651632824,
            "unit": "ns/iter",
            "extra": "iterations: 643\ncpu: 1088312.1306376283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 1075378.2030769798,
            "unit": "ns/iter",
            "extra": "iterations: 650\ncpu: 1075328.3076923026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 1078393.4144837873,
            "unit": "ns/iter",
            "extra": "iterations: 649\ncpu: 1078342.835130967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 696060.7878486244,
            "unit": "ns/iter",
            "extra": "iterations: 1004\ncpu: 696001.1952191268 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 1073323.9557252617,
            "unit": "ns/iter",
            "extra": "iterations: 655\ncpu: 1073259.9999999919 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 47080.58069058237,
            "unit": "ns/iter",
            "extra": "iterations: 14915\ncpu: 47076.0040227957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 229356.34913370933,
            "unit": "ns/iter",
            "extra": "iterations: 3059\ncpu: 229341.1572409312 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 190293.67308736566,
            "unit": "ns/iter",
            "extra": "iterations: 3686\ncpu: 190284.6988605525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 187728.74684902973,
            "unit": "ns/iter",
            "extra": "iterations: 3729\ncpu: 187726.2536873151 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 187561.7559603662,
            "unit": "ns/iter",
            "extra": "iterations: 3733\ncpu: 187560.05893383213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 331762.6086338227,
            "unit": "ns/iter",
            "extra": "iterations: 2108\ncpu: 331763.51992410107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1299561.2304833476,
            "unit": "ns/iter",
            "extra": "iterations: 538\ncpu: 1299540.7063197054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 1109372.693023287,
            "unit": "ns/iter",
            "extra": "iterations: 645\ncpu: 1109342.7906976826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 1074324.7849461655,
            "unit": "ns/iter",
            "extra": "iterations: 651\ncpu: 1074325.80645161 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 1069988.4215383604,
            "unit": "ns/iter",
            "extra": "iterations: 650\ncpu: 1069969.692307692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 699972.1361361715,
            "unit": "ns/iter",
            "extra": "iterations: 999\ncpu: 699973.1731731665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 1068271.6453575848,
            "unit": "ns/iter",
            "extra": "iterations: 657\ncpu: 1068261.3394216164 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}