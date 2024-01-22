window.BENCHMARK_DATA = {
  "lastUpdate": 1705962761269,
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
        "date": 1702492196220,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 18201.830262108197,
            "unit": "ns/iter",
            "extra": "iterations: 38801\ncpu: 18200.18040772145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 142496.66313489407,
            "unit": "ns/iter",
            "extra": "iterations: 5946\ncpu: 142488.56374032964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 268840.4359370124,
            "unit": "ns/iter",
            "extra": "iterations: 3239\ncpu: 268817.84501389315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 395525.3891670403,
            "unit": "ns/iter",
            "extra": "iterations: 2197\ncpu: 395510.9239872553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 517699.9952153398,
            "unit": "ns/iter",
            "extra": "iterations: 1672\ncpu: 517676.9736842102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 516755.68699999986,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 516755.2999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 616182.4989999331,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 616148.7000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 714999.8827639977,
            "unit": "ns/iter",
            "extra": "iterations: 1288\ncpu: 715003.4937888198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 812233.5768217267,
            "unit": "ns/iter",
            "extra": "iterations: 1139\ncpu: 812231.8700614582 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 14225.785852025396,
            "unit": "ns/iter",
            "extra": "iterations: 49265\ncpu: 14225.255252207447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 11893.145898569692,
            "unit": "ns/iter",
            "extra": "iterations: 58760\ncpu: 11893.134785568422 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 11837.32071548163,
            "unit": "ns/iter",
            "extra": "iterations: 59149\ncpu: 11837.370031615068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 12550.906188572753,
            "unit": "ns/iter",
            "extra": "iterations: 59012\ncpu: 12551.131973157993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 19809.639684833353,
            "unit": "ns/iter",
            "extra": "iterations: 35283\ncpu: 19809.69021908568 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 57765.37420000522,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 57761.5100000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 304676.6727720911,
            "unit": "ns/iter",
            "extra": "iterations: 2839\ncpu: 304673.96970764344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 236782.81924037202,
            "unit": "ns/iter",
            "extra": "iterations: 3607\ncpu: 236782.33989464966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 241283.19186209104,
            "unit": "ns/iter",
            "extra": "iterations: 3539\ncpu: 241276.23622492215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 236873.20016657162,
            "unit": "ns/iter",
            "extra": "iterations: 3602\ncpu: 236864.46418656263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 524852.9519999465,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 524853.6999999977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4451166.038095488,
            "unit": "ns/iter",
            "extra": "iterations: 210\ncpu: 4451107.61904762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3569366.4923078706,
            "unit": "ns/iter",
            "extra": "iterations: 260\ncpu: 3569338.8461538414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3540704.2775664832,
            "unit": "ns/iter",
            "extra": "iterations: 263\ncpu: 3540513.68821292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3523189.6439392697,
            "unit": "ns/iter",
            "extra": "iterations: 264\ncpu: 3523020.0757575785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 2039431.746696125,
            "unit": "ns/iter",
            "extra": "iterations: 454\ncpu: 2039380.3964757673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3452717.458955378,
            "unit": "ns/iter",
            "extra": "iterations: 268\ncpu: 3452587.6865671594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 12966412.17073063,
            "unit": "ns/iter",
            "extra": "iterations: 82\ncpu: 12966323.170731714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5810837.800000855,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5810707.999999992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 16609438.761904694,
            "unit": "ns/iter",
            "extra": "iterations: 63\ncpu: 16609246.031746032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 62300.818235076,
            "unit": "ns/iter",
            "extra": "iterations: 13655\ncpu: 62299.253020871416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 349606.5359026491,
            "unit": "ns/iter",
            "extra": "iterations: 2465\ncpu: 349602.0689655173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 268892.25117443403,
            "unit": "ns/iter",
            "extra": "iterations: 3193\ncpu: 268887.87973692553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 274085.27322054864,
            "unit": "ns/iter",
            "extra": "iterations: 3133\ncpu: 274074.88030641415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 272150.40786554595,
            "unit": "ns/iter",
            "extra": "iterations: 3153\ncpu: 272149.19124643126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 506804.13100008084,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 506801.29999999935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4470281.903845848,
            "unit": "ns/iter",
            "extra": "iterations: 208\ncpu: 4470302.403846143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3643292.0431372942,
            "unit": "ns/iter",
            "extra": "iterations: 255\ncpu: 3643259.607843154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3597936.571428542,
            "unit": "ns/iter",
            "extra": "iterations: 259\ncpu: 3597891.8918918967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3604192.4922478544,
            "unit": "ns/iter",
            "extra": "iterations: 258\ncpu: 3604153.100775183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 2080636.1856822502,
            "unit": "ns/iter",
            "extra": "iterations: 447\ncpu: 2080592.617449663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3516977.823308128,
            "unit": "ns/iter",
            "extra": "iterations: 266\ncpu: 3516890.601503759 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 13309051.087499313,
            "unit": "ns/iter",
            "extra": "iterations: 80\ncpu: 13310202.500000034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5736641.289998943,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5736643.000000043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 53582.57809999713,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 53581.999999999396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 296568.22283545224,
            "unit": "ns/iter",
            "extra": "iterations: 2899\ncpu: 296560.98654708604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 230676.29204976777,
            "unit": "ns/iter",
            "extra": "iterations: 3698\ncpu: 230676.28447809527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 240864.05480604907,
            "unit": "ns/iter",
            "extra": "iterations: 3558\ncpu: 240854.74985947178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 233678.50480638328,
            "unit": "ns/iter",
            "extra": "iterations: 3641\ncpu: 233676.76462510313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 602611.1143450909,
            "unit": "ns/iter",
            "extra": "iterations: 1443\ncpu: 602599.792099792 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 4484727.283653456,
            "unit": "ns/iter",
            "extra": "iterations: 208\ncpu: 4484671.63461536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3613507.209302254,
            "unit": "ns/iter",
            "extra": "iterations: 258\ncpu: 3613375.5813953476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3548821.2061067354,
            "unit": "ns/iter",
            "extra": "iterations: 262\ncpu: 3548734.7328244336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3537406.4280302497,
            "unit": "ns/iter",
            "extra": "iterations: 264\ncpu: 3537292.803030309 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 2056001.6644591715,
            "unit": "ns/iter",
            "extra": "iterations: 453\ncpu: 2056013.0242825542 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3471098.84386619,
            "unit": "ns/iter",
            "extra": "iterations: 269\ncpu: 3471016.3568773456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6914.515377106285,
            "unit": "ns/iter",
            "extra": "iterations: 101417\ncpu: 6914.357553467363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 38893.937849008704,
            "unit": "ns/iter",
            "extra": "iterations: 17908\ncpu: 38892.634576725664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 30070.89350938864,
            "unit": "ns/iter",
            "extra": "iterations: 23326\ncpu: 30070.779387807575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 31592.126493801377,
            "unit": "ns/iter",
            "extra": "iterations: 22175\ncpu: 31590.949267192762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 23894.88186663126,
            "unit": "ns/iter",
            "extra": "iterations: 29272\ncpu: 23894.74241596058 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 175491.5031305018,
            "unit": "ns/iter",
            "extra": "iterations: 3993\ncpu: 175490.3080390677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 297813.28893617913,
            "unit": "ns/iter",
            "extra": "iterations: 2350\ncpu: 297812.8085106362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 74633.55942862258,
            "unit": "ns/iter",
            "extra": "iterations: 9381\ncpu: 74627.20392282149 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 73985.90945504459,
            "unit": "ns/iter",
            "extra": "iterations: 9487\ncpu: 73979.25582375776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 76808.07973316267,
            "unit": "ns/iter",
            "extra": "iterations: 9444\ncpu: 76802.149512918 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 155989.3746751673,
            "unit": "ns/iter",
            "extra": "iterations: 4233\ncpu: 155981.76234348977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 138240.88370251737,
            "unit": "ns/iter",
            "extra": "iterations: 5056\ncpu: 138239.18117088554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 45885.584647741285,
            "unit": "ns/iter",
            "extra": "iterations: 15216\ncpu: 45884.029968453775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 228174.13097578677,
            "unit": "ns/iter",
            "extra": "iterations: 3054\ncpu: 228174.06679764512 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 181011.9677502528,
            "unit": "ns/iter",
            "extra": "iterations: 3876\ncpu: 181007.53353973082 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 180405.77376964164,
            "unit": "ns/iter",
            "extra": "iterations: 3881\ncpu: 180400.25766554975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 182300.60622568295,
            "unit": "ns/iter",
            "extra": "iterations: 3855\ncpu: 182298.18417639405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 338306.10571838694,
            "unit": "ns/iter",
            "extra": "iterations: 2081\ncpu: 338307.2080730436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1277098.8509090454,
            "unit": "ns/iter",
            "extra": "iterations: 550\ncpu: 1277102.0000000081 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 1070957.4977098582,
            "unit": "ns/iter",
            "extra": "iterations: 655\ncpu: 1070979.5419847285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 1061490.1909090087,
            "unit": "ns/iter",
            "extra": "iterations: 660\ncpu: 1061489.2424242434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 1050173.3819548695,
            "unit": "ns/iter",
            "extra": "iterations: 665\ncpu: 1050153.5338345987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 683774.13769527,
            "unit": "ns/iter",
            "extra": "iterations: 1024\ncpu: 683736.7187500081 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 1041908.3869048032,
            "unit": "ns/iter",
            "extra": "iterations: 672\ncpu: 1041909.5238095323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 46260.24578725431,
            "unit": "ns/iter",
            "extra": "iterations: 15192\ncpu: 46259.017904159715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 224795.05653710637,
            "unit": "ns/iter",
            "extra": "iterations: 3113\ncpu: 224785.1590105994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 182535.66310579388,
            "unit": "ns/iter",
            "extra": "iterations: 3838\ncpu: 182527.54038561875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 181124.8852119978,
            "unit": "ns/iter",
            "extra": "iterations: 3868\ncpu: 181117.4508790076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 181710.7171086801,
            "unit": "ns/iter",
            "extra": "iterations: 3846\ncpu: 181714.45657826343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 334828.7002386651,
            "unit": "ns/iter",
            "extra": "iterations: 2095\ncpu: 334828.16229116893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1275720.806215659,
            "unit": "ns/iter",
            "extra": "iterations: 547\ncpu: 1275710.4204753262 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 1060500.9984894884,
            "unit": "ns/iter",
            "extra": "iterations: 662\ncpu: 1060479.4561933456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 1054808.2951806944,
            "unit": "ns/iter",
            "extra": "iterations: 664\ncpu: 1054806.1746988054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 1045995.8368579021,
            "unit": "ns/iter",
            "extra": "iterations: 662\ncpu: 1045988.2175226541 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 685255.0831703012,
            "unit": "ns/iter",
            "extra": "iterations: 1022\ncpu: 685238.7475538218 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 1041838.1430701015,
            "unit": "ns/iter",
            "extra": "iterations: 671\ncpu: 1041766.9150521592 ns\nthreads: 1"
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
        "date": 1702503258429,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 17708.49983479378,
            "unit": "ns/iter",
            "extra": "iterations: 39345\ncpu: 17707.886643792095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 144241.21469317487,
            "unit": "ns/iter",
            "extra": "iterations: 5785\ncpu: 144232.84356093346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 272526.188442207,
            "unit": "ns/iter",
            "extra": "iterations: 3184\ncpu: 272497.89572864334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 397413.89180478523,
            "unit": "ns/iter",
            "extra": "iterations: 2172\ncpu: 397383.7016574586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 523208.15814795246,
            "unit": "ns/iter",
            "extra": "iterations: 1663\ncpu: 523169.3926638605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 522794.62900003185,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 522727.2999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 623078.3629999906,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 623033.1000000007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 722154.5845790571,
            "unit": "ns/iter",
            "extra": "iterations: 1271\ncpu: 722110.38552321 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 829008.17841214,
            "unit": "ns/iter",
            "extra": "iterations: 1121\ncpu: 828927.4754683328 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 14330.143944055373,
            "unit": "ns/iter",
            "extra": "iterations: 48762\ncpu: 14329.984414092922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 12034.673836359578,
            "unit": "ns/iter",
            "extra": "iterations: 58115\ncpu: 12033.337348361008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 11994.31849097842,
            "unit": "ns/iter",
            "extra": "iterations: 58369\ncpu: 11993.664445167795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 11915.92161894078,
            "unit": "ns/iter",
            "extra": "iterations: 58458\ncpu: 11915.041568305427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 20034.566588382557,
            "unit": "ns/iter",
            "extra": "iterations: 34916\ncpu: 20033.079390537278 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 55567.28399999429,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 55565.690000000075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 301396.2205001564,
            "unit": "ns/iter",
            "extra": "iterations: 2839\ncpu: 301382.07115181425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 241027.46274509229,
            "unit": "ns/iter",
            "extra": "iterations: 3570\ncpu: 241024.76190476157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 238610.0866405883,
            "unit": "ns/iter",
            "extra": "iterations: 3578\ncpu: 238591.30799329255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 237758.92643354725,
            "unit": "ns/iter",
            "extra": "iterations: 3575\ncpu: 237739.72027971988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 504670.26900003024,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 504644.1999999978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4493231.173076795,
            "unit": "ns/iter",
            "extra": "iterations: 208\ncpu: 4492950.480769228 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3632935.3476562966,
            "unit": "ns/iter",
            "extra": "iterations: 256\ncpu: 3632591.796875001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3615142.4863809543,
            "unit": "ns/iter",
            "extra": "iterations: 257\ncpu: 3614780.544747081 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3592278.447470842,
            "unit": "ns/iter",
            "extra": "iterations: 257\ncpu: 3592026.848249025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 2076125.928411475,
            "unit": "ns/iter",
            "extra": "iterations: 447\ncpu: 2075930.8724832255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3505873.0566037893,
            "unit": "ns/iter",
            "extra": "iterations: 265\ncpu: 3505565.6603773586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 13252675.849999208,
            "unit": "ns/iter",
            "extra": "iterations: 80\ncpu: 13251346.249999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 6004083.91999963,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6004018.000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 17004404.209677476,
            "unit": "ns/iter",
            "extra": "iterations: 62\ncpu: 17002709.67741937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 62678.29430473861,
            "unit": "ns/iter",
            "extra": "iterations: 13520\ncpu: 62673.757396449706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 350418.0305747902,
            "unit": "ns/iter",
            "extra": "iterations: 2453\ncpu: 350399.1846718307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 270510.27702490083,
            "unit": "ns/iter",
            "extra": "iterations: 3173\ncpu: 270497.3841790105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 282466.3977609486,
            "unit": "ns/iter",
            "extra": "iterations: 3037\ncpu: 282432.33454066626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 279509.3880012978,
            "unit": "ns/iter",
            "extra": "iterations: 3067\ncpu: 279480.0456472117 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 506976.72299997974,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 506946.7000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4539297.653658783,
            "unit": "ns/iter",
            "extra": "iterations: 205\ncpu: 4539024.878048796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3672748.743082568,
            "unit": "ns/iter",
            "extra": "iterations: 253\ncpu: 3672411.8577075093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3667708.8735179836,
            "unit": "ns/iter",
            "extra": "iterations: 253\ncpu: 3667292.094861678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3691618.7976190583,
            "unit": "ns/iter",
            "extra": "iterations: 252\ncpu: 3691446.8253968325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 2135100.7465437753,
            "unit": "ns/iter",
            "extra": "iterations: 434\ncpu: 2134976.7281105993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3546552.774808937,
            "unit": "ns/iter",
            "extra": "iterations: 262\ncpu: 3546293.893129783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 13527195.632911595,
            "unit": "ns/iter",
            "extra": "iterations: 79\ncpu: 13525673.417721556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5753207.539999039,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5753070.000000022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 56689.01210000286,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 56686.96999999981 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 297872.5361717023,
            "unit": "ns/iter",
            "extra": "iterations: 2889\ncpu: 297853.96330910455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 234068.67348048932,
            "unit": "ns/iter",
            "extra": "iterations: 3669\ncpu: 234042.49114200048 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 238259.78959087186,
            "unit": "ns/iter",
            "extra": "iterations: 3593\ncpu: 238243.91873086622 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 233370.25347505958,
            "unit": "ns/iter",
            "extra": "iterations: 3669\ncpu: 233354.9468520035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 590655.4210884344,
            "unit": "ns/iter",
            "extra": "iterations: 1470\ncpu: 590603.8095238088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 4507318.5291258395,
            "unit": "ns/iter",
            "extra": "iterations: 206\ncpu: 4507025.242718451 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3627162.465116451,
            "unit": "ns/iter",
            "extra": "iterations: 258\ncpu: 3626885.658914746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3629055.1984435925,
            "unit": "ns/iter",
            "extra": "iterations: 257\ncpu: 3628743.9688715967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3640692.730468853,
            "unit": "ns/iter",
            "extra": "iterations: 256\ncpu: 3640387.5000000084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 2086063.9685393283,
            "unit": "ns/iter",
            "extra": "iterations: 445\ncpu: 2085945.1685393187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3516201.196969281,
            "unit": "ns/iter",
            "extra": "iterations: 264\ncpu: 3515924.242424246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6885.311586438238,
            "unit": "ns/iter",
            "extra": "iterations: 101731\ncpu: 6884.6723221043685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 39209.23895987956,
            "unit": "ns/iter",
            "extra": "iterations: 17844\ncpu: 39206.20937009651 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 29355.96934962642,
            "unit": "ns/iter",
            "extra": "iterations: 23817\ncpu: 29352.941176470453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 31436.59046509548,
            "unit": "ns/iter",
            "extra": "iterations: 22318\ncpu: 31432.892732323413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 24140.705602811402,
            "unit": "ns/iter",
            "extra": "iterations: 29039\ncpu: 24137.597713419822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 173556.71942447388,
            "unit": "ns/iter",
            "extra": "iterations: 4031\ncpu: 173542.76854378526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 300910.7795004185,
            "unit": "ns/iter",
            "extra": "iterations: 2322\ncpu: 300891.6451335045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 76115.15874225304,
            "unit": "ns/iter",
            "extra": "iterations: 9191\ncpu: 76107.62702643938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 75450.310835591,
            "unit": "ns/iter",
            "extra": "iterations: 9275\ncpu: 75448.11859838253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 76142.21894393454,
            "unit": "ns/iter",
            "extra": "iterations: 9185\ncpu: 76136.27653783295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 151909.06998477108,
            "unit": "ns/iter",
            "extra": "iterations: 4601\ncpu: 151907.34622908145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 140592.5729208583,
            "unit": "ns/iter",
            "extra": "iterations: 4978\ncpu: 140576.17517075138 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 47556.134165370684,
            "unit": "ns/iter",
            "extra": "iterations: 14743\ncpu: 47554.90063080768 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 231738.41266156957,
            "unit": "ns/iter",
            "extra": "iterations: 3017\ncpu: 231720.41763341072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 185196.5096586348,
            "unit": "ns/iter",
            "extra": "iterations: 3779\ncpu: 185185.89573961598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 184688.6385669054,
            "unit": "ns/iter",
            "extra": "iterations: 3796\ncpu: 184671.89146469953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 187461.5255238984,
            "unit": "ns/iter",
            "extra": "iterations: 3722\ncpu: 187448.89844169546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 347297.80358027783,
            "unit": "ns/iter",
            "extra": "iterations: 2011\ncpu: 347255.8925907453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1302031.3896104046,
            "unit": "ns/iter",
            "extra": "iterations: 539\ncpu: 1301895.3617810742 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 1086776.6630434904,
            "unit": "ns/iter",
            "extra": "iterations: 644\ncpu: 1086689.9068322873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 1084011.0479877284,
            "unit": "ns/iter",
            "extra": "iterations: 646\ncpu: 1083888.5448916429 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 1074524.327188909,
            "unit": "ns/iter",
            "extra": "iterations: 651\ncpu: 1074483.717357898 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 702860.2650000266,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 702752.5999999967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 1065168.000000092,
            "unit": "ns/iter",
            "extra": "iterations: 657\ncpu: 1065088.432267882 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 47790.03194388094,
            "unit": "ns/iter",
            "extra": "iterations: 14682\ncpu: 47787.821822640006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 228745.55921696313,
            "unit": "ns/iter",
            "extra": "iterations: 3065\ncpu: 228729.65742251184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 187647.2360515049,
            "unit": "ns/iter",
            "extra": "iterations: 3728\ncpu: 187621.8347639461 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 185534.1944886115,
            "unit": "ns/iter",
            "extra": "iterations: 3774\ncpu: 185519.4753577124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 186411.08557001705,
            "unit": "ns/iter",
            "extra": "iterations: 3763\ncpu: 186394.28647355596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 339800.86601940176,
            "unit": "ns/iter",
            "extra": "iterations: 2060\ncpu: 339775.82524271414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1290089.3081180542,
            "unit": "ns/iter",
            "extra": "iterations: 542\ncpu: 1289991.3284132977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 1077995.5425038554,
            "unit": "ns/iter",
            "extra": "iterations: 647\ncpu: 1077883.616692426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 1079790.2319508481,
            "unit": "ns/iter",
            "extra": "iterations: 651\ncpu: 1079759.1397849473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 1079612.2353846072,
            "unit": "ns/iter",
            "extra": "iterations: 650\ncpu: 1079530.923076915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 700729.3699999764,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 700721.5999999943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 1064712.50594229,
            "unit": "ns/iter",
            "extra": "iterations: 589\ncpu: 1064665.8743633325 ns\nthreads: 1"
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
        "date": 1705574903971,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 17591.05662457251,
            "unit": "ns/iter",
            "extra": "iterations: 39912\ncpu: 17590.561735818803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 142974.47687372932,
            "unit": "ns/iter",
            "extra": "iterations: 5924\ncpu: 142972.1809588116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 269931.4757914438,
            "unit": "ns/iter",
            "extra": "iterations: 3222\ncpu: 269930.4158907512 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 393123.82945737126,
            "unit": "ns/iter",
            "extra": "iterations: 2193\ncpu: 393125.7637938897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 516708.957066166,
            "unit": "ns/iter",
            "extra": "iterations: 1677\ncpu: 516702.3852116878 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 516336.58399998693,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 516305.1000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 616401.8310000756,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 616376.2000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 721159.9193798848,
            "unit": "ns/iter",
            "extra": "iterations: 1290\ncpu: 721137.3643410848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 813462.4264316559,
            "unit": "ns/iter",
            "extra": "iterations: 1135\ncpu: 813415.2422907486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 14107.63433633891,
            "unit": "ns/iter",
            "extra": "iterations: 49551\ncpu: 14107.148190752969 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 11880.751376238768,
            "unit": "ns/iter",
            "extra": "iterations: 58856\ncpu: 11879.905192333832 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 11809.019313558809,
            "unit": "ns/iter",
            "extra": "iterations: 59233\ncpu: 11808.490199719734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 11838.208299471657,
            "unit": "ns/iter",
            "extra": "iterations: 59064\ncpu: 11837.78613029934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 20022.717850345365,
            "unit": "ns/iter",
            "extra": "iterations: 35187\ncpu: 20022.434421803515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 56846.78950000261,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 56847.14 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 302492.21382978535,
            "unit": "ns/iter",
            "extra": "iterations: 2820\ncpu: 302490.3900709223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 240791.47233202963,
            "unit": "ns/iter",
            "extra": "iterations: 3542\ncpu: 240790.8526256349 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 247104.20151207992,
            "unit": "ns/iter",
            "extra": "iterations: 3439\ncpu: 247102.03547542845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 240760.8687923126,
            "unit": "ns/iter",
            "extra": "iterations: 3544\ncpu: 240758.06997742722 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 520213.54699991207,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 520197.4999999983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4443353.358851709,
            "unit": "ns/iter",
            "extra": "iterations: 209\ncpu: 4443335.885167464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3569618.934362819,
            "unit": "ns/iter",
            "extra": "iterations: 259\ncpu: 3569600.386100382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3536421.309160187,
            "unit": "ns/iter",
            "extra": "iterations: 262\ncpu: 3536322.5190839763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3517115.7727272757,
            "unit": "ns/iter",
            "extra": "iterations: 264\ncpu: 3517105.6818181844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 2049136.3902438085,
            "unit": "ns/iter",
            "extra": "iterations: 451\ncpu: 2049131.9290465647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3444136.71375453,
            "unit": "ns/iter",
            "extra": "iterations: 269\ncpu: 3444085.501858741 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 13003578.597560102,
            "unit": "ns/iter",
            "extra": "iterations: 82\ncpu: 13003291.463414613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5741831.95000046,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5741863.999999986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 16765168.380952818,
            "unit": "ns/iter",
            "extra": "iterations: 63\ncpu: 16765019.047619084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 63798.141289638195,
            "unit": "ns/iter",
            "extra": "iterations: 13306\ncpu: 63797.81301668431 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 341244.42063488107,
            "unit": "ns/iter",
            "extra": "iterations: 2520\ncpu: 341177.97619047674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 270205.3654694221,
            "unit": "ns/iter",
            "extra": "iterations: 3174\ncpu: 270204.2848141145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 273930.71154460736,
            "unit": "ns/iter",
            "extra": "iterations: 3127\ncpu: 273925.32779021346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 277076.4009692915,
            "unit": "ns/iter",
            "extra": "iterations: 3095\ncpu: 277068.6914378044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 515658.1269999378,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 515660.9999999944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4511038.694174415,
            "unit": "ns/iter",
            "extra": "iterations: 206\ncpu: 4511061.650485425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3644341.733333218,
            "unit": "ns/iter",
            "extra": "iterations: 255\ncpu: 3644305.8823529524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3620510.9805443697,
            "unit": "ns/iter",
            "extra": "iterations: 257\ncpu: 3620453.696498052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3597015.0733592305,
            "unit": "ns/iter",
            "extra": "iterations: 259\ncpu: 3597033.9768339973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 2073376.4441965367,
            "unit": "ns/iter",
            "extra": "iterations: 448\ncpu: 2073387.2767857113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3496595.5300752907,
            "unit": "ns/iter",
            "extra": "iterations: 266\ncpu: 3496528.57142857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 13271690.199999852,
            "unit": "ns/iter",
            "extra": "iterations: 80\ncpu: 13271411.249999953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5825668.63000011,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5825712.999999979 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 53806.22899999708,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 53806.50999999971 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 297018.2370163666,
            "unit": "ns/iter",
            "extra": "iterations: 2869\ncpu: 297019.8326943188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 236722.77664274574,
            "unit": "ns/iter",
            "extra": "iterations: 3622\ncpu: 236717.61457758007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 240851.206237718,
            "unit": "ns/iter",
            "extra": "iterations: 3559\ncpu: 240849.28350660144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 236441.47290233476,
            "unit": "ns/iter",
            "extra": "iterations: 3635\ncpu: 236443.1911967005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 594577.0206327348,
            "unit": "ns/iter",
            "extra": "iterations: 1454\ncpu: 594566.7812929853 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 4475438.192307899,
            "unit": "ns/iter",
            "extra": "iterations: 208\ncpu: 4475464.423076909 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3585786.0192309613,
            "unit": "ns/iter",
            "extra": "iterations: 260\ncpu: 3585754.2307692384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3544382.9847908244,
            "unit": "ns/iter",
            "extra": "iterations: 263\ncpu: 3544370.7224334623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3527189.4734846097,
            "unit": "ns/iter",
            "extra": "iterations: 264\ncpu: 3527178.787878782 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 2057470.9601769387,
            "unit": "ns/iter",
            "extra": "iterations: 452\ncpu: 2057480.530973452 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3450378.5315984623,
            "unit": "ns/iter",
            "extra": "iterations: 269\ncpu: 3450395.5390334534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6943.737063483499,
            "unit": "ns/iter",
            "extra": "iterations: 99853\ncpu: 6943.564039137519 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 38966.523601544795,
            "unit": "ns/iter",
            "extra": "iterations: 17859\ncpu: 38966.733859678825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 29335.422507444662,
            "unit": "ns/iter",
            "extra": "iterations: 23841\ncpu: 29335.602533450572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 30600.900109527993,
            "unit": "ns/iter",
            "extra": "iterations: 22825\ncpu: 30601.1084337348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 23924.830030464676,
            "unit": "ns/iter",
            "extra": "iterations: 29217\ncpu: 23923.07902933222 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 172115.89739171325,
            "unit": "ns/iter",
            "extra": "iterations: 4064\ncpu: 172108.12007874114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 301687.5566077928,
            "unit": "ns/iter",
            "extra": "iterations: 2323\ncpu: 301686.78433061123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 75887.61763748823,
            "unit": "ns/iter",
            "extra": "iterations: 9219\ncpu: 75886.25664388838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 75018.48830974213,
            "unit": "ns/iter",
            "extra": "iterations: 9324\ncpu: 75018.15744315788 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 75287.56074765747,
            "unit": "ns/iter",
            "extra": "iterations: 9309\ncpu: 75284.40219142777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 151889.75956522446,
            "unit": "ns/iter",
            "extra": "iterations: 4600\ncpu: 151890.73913043487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 140603.80469219433,
            "unit": "ns/iter",
            "extra": "iterations: 4987\ncpu: 140600.80208542332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 46299.69662846582,
            "unit": "ns/iter",
            "extra": "iterations: 15097\ncpu: 46299.960257004284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 227217.69131000547,
            "unit": "ns/iter",
            "extra": "iterations: 3084\ncpu: 227206.93904021182 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 181632.16541547287,
            "unit": "ns/iter",
            "extra": "iterations: 3863\ncpu: 181631.29691949164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 182544.81576226075,
            "unit": "ns/iter",
            "extra": "iterations: 3870\ncpu: 182543.56589147288 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 183512.61236842364,
            "unit": "ns/iter",
            "extra": "iterations: 3800\ncpu: 183511.5789473687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 337289.8572115227,
            "unit": "ns/iter",
            "extra": "iterations: 2080\ncpu: 337283.9423076876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1293072.284386579,
            "unit": "ns/iter",
            "extra": "iterations: 538\ncpu: 1293079.5539033478 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 1082530.8919752836,
            "unit": "ns/iter",
            "extra": "iterations: 648\ncpu: 1082537.1913580275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 1069192.9067278348,
            "unit": "ns/iter",
            "extra": "iterations: 654\ncpu: 1069157.3394495326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 1065596.1320183442,
            "unit": "ns/iter",
            "extra": "iterations: 659\ncpu: 1065589.8330804105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 688335.1152709303,
            "unit": "ns/iter",
            "extra": "iterations: 1015\ncpu: 688317.5369458159 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 1056759.9194527492,
            "unit": "ns/iter",
            "extra": "iterations: 658\ncpu: 1056766.7173252257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 45780.40548321491,
            "unit": "ns/iter",
            "extra": "iterations: 15283\ncpu: 45780.10207419998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 224037.39441592264,
            "unit": "ns/iter",
            "extra": "iterations: 3116\ncpu: 224034.75609756066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 184594.67291447942,
            "unit": "ns/iter",
            "extra": "iterations: 3788\ncpu: 184588.62196409592 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 181513.58956974102,
            "unit": "ns/iter",
            "extra": "iterations: 3835\ncpu: 181511.342894393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 181048.70840879352,
            "unit": "ns/iter",
            "extra": "iterations: 3865\ncpu: 181048.04657179705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 328769.26572766574,
            "unit": "ns/iter",
            "extra": "iterations: 2130\ncpu: 328771.22065727814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1285533.456721872,
            "unit": "ns/iter",
            "extra": "iterations: 543\ncpu: 1285511.7863720097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 1080165.8415385436,
            "unit": "ns/iter",
            "extra": "iterations: 650\ncpu: 1080143.5384615406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 1063660.796661609,
            "unit": "ns/iter",
            "extra": "iterations: 659\ncpu: 1063645.2200303492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 1057726.7352497107,
            "unit": "ns/iter",
            "extra": "iterations: 661\ncpu: 1057720.423600602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 693614.658366501,
            "unit": "ns/iter",
            "extra": "iterations: 1004\ncpu: 693611.3545816607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 1052222.4549548968,
            "unit": "ns/iter",
            "extra": "iterations: 666\ncpu: 1052227.1771771736 ns\nthreads: 1"
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
        "date": 1705772719389,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 17328.086990576125,
            "unit": "ns/iter",
            "extra": "iterations: 39579\ncpu: 17327.471639000483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 141764.1066889801,
            "unit": "ns/iter",
            "extra": "iterations: 5980\ncpu: 141758.44481605352 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 267158.90083153313,
            "unit": "ns/iter",
            "extra": "iterations: 3247\ncpu: 267141.4536495227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 388512.2886087493,
            "unit": "ns/iter",
            "extra": "iterations: 2221\ncpu: 388501.9810895993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 511361.8261638555,
            "unit": "ns/iter",
            "extra": "iterations: 1697\ncpu: 511314.02474955795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 511271.7660000499,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 511263.70000000065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 609356.8149999556,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 609296.9999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 706512.0757459451,
            "unit": "ns/iter",
            "extra": "iterations: 1307\ncpu: 706457.2302983934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 801982.244367353,
            "unit": "ns/iter",
            "extra": "iterations: 1154\ncpu: 801922.6169844026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 13884.73469833101,
            "unit": "ns/iter",
            "extra": "iterations: 50403\ncpu: 13883.590262484366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 11665.233161053278,
            "unit": "ns/iter",
            "extra": "iterations: 60173\ncpu: 11664.342811559993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 11718.905151089617,
            "unit": "ns/iter",
            "extra": "iterations: 59832\ncpu: 11718.216004813477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 11650.710703229906,
            "unit": "ns/iter",
            "extra": "iterations: 60094\ncpu: 11649.796984723962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 19851.005293101123,
            "unit": "ns/iter",
            "extra": "iterations: 35329\ncpu: 19849.350392029242 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 57206.52839999048,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 57200.150000000074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 299772.21441126836,
            "unit": "ns/iter",
            "extra": "iterations: 2845\ncpu: 299733.8488576449 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 237845.92451774896,
            "unit": "ns/iter",
            "extra": "iterations: 3577\ncpu: 237829.91333519694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 243427.76499283177,
            "unit": "ns/iter",
            "extra": "iterations: 3485\ncpu: 243404.76327116147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 234983.41549103198,
            "unit": "ns/iter",
            "extra": "iterations: 3615\ncpu: 234966.4177040117 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 504696.7619999805,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 504606.29999999894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4371040.12264133,
            "unit": "ns/iter",
            "extra": "iterations: 212\ncpu: 4370687.735849047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3538965.1793893063,
            "unit": "ns/iter",
            "extra": "iterations: 262\ncpu: 3538648.473282443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3571221.643678254,
            "unit": "ns/iter",
            "extra": "iterations: 261\ncpu: 3570914.5593869765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3522296.12500027,
            "unit": "ns/iter",
            "extra": "iterations: 264\ncpu: 3522084.848484849 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 2024197.065789498,
            "unit": "ns/iter",
            "extra": "iterations: 456\ncpu: 2024023.0263157883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3436162.5333333365,
            "unit": "ns/iter",
            "extra": "iterations: 270\ncpu: 3435817.0370370466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 12892575.962963646,
            "unit": "ns/iter",
            "extra": "iterations: 81\ncpu: 12891065.432098767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5660947.589999523,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5660325.000000021 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 16536121.3437496,
            "unit": "ns/iter",
            "extra": "iterations: 64\ncpu: 16534939.062499976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 64491.45911949523,
            "unit": "ns/iter",
            "extra": "iterations: 13197\ncpu: 64484.95870273549 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 350978.7768696148,
            "unit": "ns/iter",
            "extra": "iterations: 2447\ncpu: 350943.6044135673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 267905.06338252244,
            "unit": "ns/iter",
            "extra": "iterations: 3187\ncpu: 267883.62096015096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 269628.5414052723,
            "unit": "ns/iter",
            "extra": "iterations: 3188\ncpu: 269606.52446674986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 268503.0675633409,
            "unit": "ns/iter",
            "extra": "iterations: 3197\ncpu: 268498.62370972824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 615051.7455830354,
            "unit": "ns/iter",
            "extra": "iterations: 1415\ncpu: 615024.0989399282 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4436283.880382954,
            "unit": "ns/iter",
            "extra": "iterations: 209\ncpu: 4436167.464114848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3612662.155641894,
            "unit": "ns/iter",
            "extra": "iterations: 257\ncpu: 3612540.466926074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3617858.9105060175,
            "unit": "ns/iter",
            "extra": "iterations: 257\ncpu: 3617522.9571984475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3617488.8924303465,
            "unit": "ns/iter",
            "extra": "iterations: 251\ncpu: 3617396.0159362527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 2070576.56666671,
            "unit": "ns/iter",
            "extra": "iterations: 450\ncpu: 2070480.666666662 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3501890.759398315,
            "unit": "ns/iter",
            "extra": "iterations: 266\ncpu: 3501643.2330827205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 13087347.074074555,
            "unit": "ns/iter",
            "extra": "iterations: 81\ncpu: 13086913.580246922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5867483.259999062,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5867173.999999978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 53673.54769999793,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 53672.77000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 298034.2001387229,
            "unit": "ns/iter",
            "extra": "iterations: 2883\ncpu: 298026.50017342874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 231467.88645580813,
            "unit": "ns/iter",
            "extra": "iterations: 3699\ncpu: 231452.90619086346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 233769.78898327434,
            "unit": "ns/iter",
            "extra": "iterations: 3649\ncpu: 233756.45382296498 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 235029.00600602853,
            "unit": "ns/iter",
            "extra": "iterations: 3663\ncpu: 235016.73491673433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 575596.2813536699,
            "unit": "ns/iter",
            "extra": "iterations: 1507\ncpu: 575538.8188453877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 4423447.114285885,
            "unit": "ns/iter",
            "extra": "iterations: 210\ncpu: 4423095.238095258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3571665.547892613,
            "unit": "ns/iter",
            "extra": "iterations: 261\ncpu: 3571453.256704977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3567613.007663076,
            "unit": "ns/iter",
            "extra": "iterations: 261\ncpu: 3567186.590038324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3530060.6590910223,
            "unit": "ns/iter",
            "extra": "iterations: 264\ncpu: 3529742.0454545384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 2047166.4348786657,
            "unit": "ns/iter",
            "extra": "iterations: 453\ncpu: 2047007.50551875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3449141.6988848057,
            "unit": "ns/iter",
            "extra": "iterations: 269\ncpu: 3448872.8624535366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6897.6821891310465,
            "unit": "ns/iter",
            "extra": "iterations: 101337\ncpu: 6896.833338267401 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 39319.49379458014,
            "unit": "ns/iter",
            "extra": "iterations: 17807\ncpu: 39316.03863649128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 30393.308316515395,
            "unit": "ns/iter",
            "extra": "iterations: 23784\ncpu: 30390.766902119056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 31676.877145517607,
            "unit": "ns/iter",
            "extra": "iterations: 23654\ncpu: 31674.025534793236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 24130.898033804864,
            "unit": "ns/iter",
            "extra": "iterations: 28990\ncpu: 24128.76164194555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 171965.48661261707,
            "unit": "ns/iter",
            "extra": "iterations: 4071\ncpu: 171948.24367477372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 298004.0511073325,
            "unit": "ns/iter",
            "extra": "iterations: 2348\ncpu: 297974.10562181054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 74693.50556268512,
            "unit": "ns/iter",
            "extra": "iterations: 9348\ncpu: 74685.99700470608 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 74902.99989308967,
            "unit": "ns/iter",
            "extra": "iterations: 9354\ncpu: 74892.6662390409 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 74190.465219698,
            "unit": "ns/iter",
            "extra": "iterations: 9445\ncpu: 74187.62308099533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 149440.0919957141,
            "unit": "ns/iter",
            "extra": "iterations: 4685\ncpu: 149430.35218783343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 137924.2500492262,
            "unit": "ns/iter",
            "extra": "iterations: 5079\ncpu: 137914.7273085261 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 46463.86094871148,
            "unit": "ns/iter",
            "extra": "iterations: 15052\ncpu: 46460.09832580376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 230460.53250162807,
            "unit": "ns/iter",
            "extra": "iterations: 3046\ncpu: 230443.9264609329 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 183816.57004198807,
            "unit": "ns/iter",
            "extra": "iterations: 3812\ncpu: 183798.71458552155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 185640.99444884236,
            "unit": "ns/iter",
            "extra": "iterations: 3783\ncpu: 185628.17869415868 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 185377.60460805264,
            "unit": "ns/iter",
            "extra": "iterations: 3776\ncpu: 185359.3749999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 332705.4771646049,
            "unit": "ns/iter",
            "extra": "iterations: 2102\ncpu: 332672.16936251236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1277272.11657555,
            "unit": "ns/iter",
            "extra": "iterations: 549\ncpu: 1277176.1384335307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 1073414.4631901807,
            "unit": "ns/iter",
            "extra": "iterations: 652\ncpu: 1073333.8957055104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 1078187.8617512367,
            "unit": "ns/iter",
            "extra": "iterations: 651\ncpu: 1078107.5268817176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 1055787.9667673998,
            "unit": "ns/iter",
            "extra": "iterations: 662\ncpu: 1055723.2628398882 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 686611.6519608354,
            "unit": "ns/iter",
            "extra": "iterations: 1020\ncpu: 686557.5490196093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 1050482.671664146,
            "unit": "ns/iter",
            "extra": "iterations: 667\ncpu: 1050393.5532233964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 46572.44495968252,
            "unit": "ns/iter",
            "extra": "iterations: 14880\ncpu: 46571.29704301041 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 231306.27365643193,
            "unit": "ns/iter",
            "extra": "iterations: 3033\ncpu: 231285.78964721548 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 186178.0201377848,
            "unit": "ns/iter",
            "extra": "iterations: 3774\ncpu: 186160.28086910516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 185582.66825903987,
            "unit": "ns/iter",
            "extra": "iterations: 3768\ncpu: 185565.8704883241 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 185311.00105959416,
            "unit": "ns/iter",
            "extra": "iterations: 3775\ncpu: 185297.1125827786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 328657.90603088314,
            "unit": "ns/iter",
            "extra": "iterations: 2139\ncpu: 328630.48153342924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1277575.4680072432,
            "unit": "ns/iter",
            "extra": "iterations: 547\ncpu: 1277437.1115173528 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 1069468.7938930725,
            "unit": "ns/iter",
            "extra": "iterations: 655\ncpu: 1069379.3893129858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 1071342.8702290163,
            "unit": "ns/iter",
            "extra": "iterations: 655\ncpu: 1071273.8931297786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 1058423.50378212,
            "unit": "ns/iter",
            "extra": "iterations: 661\ncpu: 1058393.9485627825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 689314.5712881016,
            "unit": "ns/iter",
            "extra": "iterations: 1017\ncpu: 689268.4365781714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 1052798.5587350621,
            "unit": "ns/iter",
            "extra": "iterations: 664\ncpu: 1052651.8072289077 ns\nthreads: 1"
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
        "date": 1705774137595,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 17783.7609832889,
            "unit": "ns/iter",
            "extra": "iterations: 39378\ncpu: 17783.599979684088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 144781.5461525409,
            "unit": "ns/iter",
            "extra": "iterations: 5861\ncpu: 144775.90854802934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 273475.3650094361,
            "unit": "ns/iter",
            "extra": "iterations: 3178\ncpu: 273464.631843927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 398929.38254410564,
            "unit": "ns/iter",
            "extra": "iterations: 2154\ncpu: 398920.84493964736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 526756.4122646983,
            "unit": "ns/iter",
            "extra": "iterations: 1647\ncpu: 526730.8439587128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 526234.5390000291,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 526192.2999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 630203.9910000303,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 630188.8999999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 729298.7243286229,
            "unit": "ns/iter",
            "extra": "iterations: 1266\ncpu: 729250.1579778828 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 827082.5573476721,
            "unit": "ns/iter",
            "extra": "iterations: 1116\ncpu: 827044.1756272401 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 14213.45279344256,
            "unit": "ns/iter",
            "extra": "iterations: 49294\ncpu: 14212.804803830091 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 12047.173163302927,
            "unit": "ns/iter",
            "extra": "iterations: 58107\ncpu: 12046.240556215262 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 11927.995522947369,
            "unit": "ns/iter",
            "extra": "iterations: 58744\ncpu: 11927.272572518052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 11977.072557141935,
            "unit": "ns/iter",
            "extra": "iterations: 58671\ncpu: 11976.45173936017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 20210.282119359556,
            "unit": "ns/iter",
            "extra": "iterations: 34652\ncpu: 20209.849359344298 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 55958.965399997855,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 55957.54999999993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 298322.7030552997,
            "unit": "ns/iter",
            "extra": "iterations: 2913\ncpu: 298298.7298317884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 231399.25251429746,
            "unit": "ns/iter",
            "extra": "iterations: 3679\ncpu: 231389.37211198715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 238655.55857624297,
            "unit": "ns/iter",
            "extra": "iterations: 3568\ncpu: 238637.83632287013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 234132.82156647538,
            "unit": "ns/iter",
            "extra": "iterations: 3626\ncpu: 234126.1445118591 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 625603.3857938807,
            "unit": "ns/iter",
            "extra": "iterations: 1436\ncpu: 625566.3649025081 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4504014.565217061,
            "unit": "ns/iter",
            "extra": "iterations: 207\ncpu: 4503695.652173918 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3627027.215686087,
            "unit": "ns/iter",
            "extra": "iterations: 255\ncpu: 3626985.098039222 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3625361.929687543,
            "unit": "ns/iter",
            "extra": "iterations: 256\ncpu: 3625198.4375000047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3592787.9922482586,
            "unit": "ns/iter",
            "extra": "iterations: 258\ncpu: 3592718.21705425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 2049393.7995545159,
            "unit": "ns/iter",
            "extra": "iterations: 449\ncpu: 2049359.910913135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3518727.1174241677,
            "unit": "ns/iter",
            "extra": "iterations: 264\ncpu: 3518507.196969687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 12950694.414634775,
            "unit": "ns/iter",
            "extra": "iterations: 82\ncpu: 12950458.536585368 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5772485.559999722,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5772409.999999973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 16918096.822581124,
            "unit": "ns/iter",
            "extra": "iterations: 62\ncpu: 16917537.096774146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 63270.380760926,
            "unit": "ns/iter",
            "extra": "iterations: 13431\ncpu: 63266.97193060827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 334822.3017107315,
            "unit": "ns/iter",
            "extra": "iterations: 2572\ncpu: 334817.96267496044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 261812.53715697883,
            "unit": "ns/iter",
            "extra": "iterations: 3243\ncpu: 261802.12765957337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 265883.59217877296,
            "unit": "ns/iter",
            "extra": "iterations: 3222\ncpu: 265873.8671632527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 270533.244178733,
            "unit": "ns/iter",
            "extra": "iterations: 3178\ncpu: 270519.9811202016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 598255.1217150851,
            "unit": "ns/iter",
            "extra": "iterations: 1446\ncpu: 598247.7869986184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4551639.5441180235,
            "unit": "ns/iter",
            "extra": "iterations: 204\ncpu: 4551492.647058836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3707713.836653542,
            "unit": "ns/iter",
            "extra": "iterations: 251\ncpu: 3707482.071713164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3686653.1501976782,
            "unit": "ns/iter",
            "extra": "iterations: 253\ncpu: 3686566.798418969 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3663169.503936853,
            "unit": "ns/iter",
            "extra": "iterations: 254\ncpu: 3662997.6377952513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 2095818.8696629272,
            "unit": "ns/iter",
            "extra": "iterations: 445\ncpu: 2095730.3370786533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3563911.206896473,
            "unit": "ns/iter",
            "extra": "iterations: 261\ncpu: 3563719.5402298872 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 13238703.474999625,
            "unit": "ns/iter",
            "extra": "iterations: 80\ncpu: 13238028.750000019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5746548.619999886,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5746092.000000047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 54301.85069999424,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 54297.29999999964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 287506.6972070896,
            "unit": "ns/iter",
            "extra": "iterations: 2936\ncpu: 287488.4196185279 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 227853.77002927306,
            "unit": "ns/iter",
            "extra": "iterations: 3757\ncpu: 227842.42746872656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 232486.95278154474,
            "unit": "ns/iter",
            "extra": "iterations: 3685\ncpu: 232471.91316146552 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 234834.31757675804,
            "unit": "ns/iter",
            "extra": "iterations: 3681\ncpu: 234817.0062483021 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 569296.922924917,
            "unit": "ns/iter",
            "extra": "iterations: 1518\ncpu: 569261.1330698298 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 4537083.258536569,
            "unit": "ns/iter",
            "extra": "iterations: 205\ncpu: 4536933.658536565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3668418.4803152853,
            "unit": "ns/iter",
            "extra": "iterations: 254\ncpu: 3668183.464566915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3653780.397637834,
            "unit": "ns/iter",
            "extra": "iterations: 254\ncpu: 3653567.3228346356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3617360.7042801026,
            "unit": "ns/iter",
            "extra": "iterations: 257\ncpu: 3617210.505836578 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 2083458.4650113727,
            "unit": "ns/iter",
            "extra": "iterations: 443\ncpu: 2083346.2753950278 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3538826.9618318863,
            "unit": "ns/iter",
            "extra": "iterations: 262\ncpu: 3538722.137404573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6924.3461394158385,
            "unit": "ns/iter",
            "extra": "iterations: 101280\ncpu: 6924.2920616113615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 39134.54661300771,
            "unit": "ns/iter",
            "extra": "iterations: 17892\ncpu: 39134.21082047832 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 31148.57373728533,
            "unit": "ns/iter",
            "extra": "iterations: 23204\ncpu: 31148.23306326497 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 31114.15276221838,
            "unit": "ns/iter",
            "extra": "iterations: 23206\ncpu: 31111.940877359415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 23872.91295766955,
            "unit": "ns/iter",
            "extra": "iterations: 29388\ncpu: 23872.67932489452 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 169956.5231901831,
            "unit": "ns/iter",
            "extra": "iterations: 4075\ncpu: 169952.49079754623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 302796.310717365,
            "unit": "ns/iter",
            "extra": "iterations: 2314\ncpu: 302792.9559204829 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 76711.630658216,
            "unit": "ns/iter",
            "extra": "iterations: 9146\ncpu: 76705.4668707637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 76472.82367730045,
            "unit": "ns/iter",
            "extra": "iterations: 9148\ncpu: 76464.89943157016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 76274.05381604808,
            "unit": "ns/iter",
            "extra": "iterations: 9198\ncpu: 76270.00434877165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 151844.0309256021,
            "unit": "ns/iter",
            "extra": "iterations: 4624\ncpu: 151832.67733563852 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 141315.9285714139,
            "unit": "ns/iter",
            "extra": "iterations: 4956\ncpu: 141311.8845843442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 47542.93670799488,
            "unit": "ns/iter",
            "extra": "iterations: 14678\ncpu: 47538.54067311668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 235119.2853781386,
            "unit": "ns/iter",
            "extra": "iterations: 2975\ncpu: 235098.25210084286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 186790.0163363638,
            "unit": "ns/iter",
            "extra": "iterations: 3734\ncpu: 186779.83395822233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 187378.0648272322,
            "unit": "ns/iter",
            "extra": "iterations: 3733\ncpu: 187371.57781944846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 188981.4125101171,
            "unit": "ns/iter",
            "extra": "iterations: 3709\ncpu: 188973.1733620885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 340569.4305825218,
            "unit": "ns/iter",
            "extra": "iterations: 2060\ncpu: 340563.6893203886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1312877.1013132392,
            "unit": "ns/iter",
            "extra": "iterations: 533\ncpu: 1312809.193245764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 1095407.9561128207,
            "unit": "ns/iter",
            "extra": "iterations: 638\ncpu: 1095365.9874608077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 1099597.6269593418,
            "unit": "ns/iter",
            "extra": "iterations: 638\ncpu: 1099531.0344827666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 1082657.9396284993,
            "unit": "ns/iter",
            "extra": "iterations: 646\ncpu: 1082621.9814241542 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 696352.0536779537,
            "unit": "ns/iter",
            "extra": "iterations: 1006\ncpu: 696339.4632206797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 1072635.2373659166,
            "unit": "ns/iter",
            "extra": "iterations: 653\ncpu: 1072590.9647779304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 47474.36780831023,
            "unit": "ns/iter",
            "extra": "iterations: 14774\ncpu: 47472.09286584452 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 233456.96765588038,
            "unit": "ns/iter",
            "extra": "iterations: 2999\ncpu: 233437.54584861302 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 189329.8777387243,
            "unit": "ns/iter",
            "extra": "iterations: 3697\ncpu: 189330.32188260576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 187373.37834943432,
            "unit": "ns/iter",
            "extra": "iterations: 3732\ncpu: 187368.8370846753 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 187580.31904635395,
            "unit": "ns/iter",
            "extra": "iterations: 3733\ncpu: 187577.12295740523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 335185.9053084808,
            "unit": "ns/iter",
            "extra": "iterations: 2091\ncpu: 335180.7747489231 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1319787.4839922856,
            "unit": "ns/iter",
            "extra": "iterations: 531\ncpu: 1319764.9717514156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 1101569.1324922673,
            "unit": "ns/iter",
            "extra": "iterations: 634\ncpu: 1101456.4668769597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 1104805.7716535605,
            "unit": "ns/iter",
            "extra": "iterations: 635\ncpu: 1104682.677165341 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 1092317.0998440355,
            "unit": "ns/iter",
            "extra": "iterations: 641\ncpu: 1092202.3400936113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 703650.0505560637,
            "unit": "ns/iter",
            "extra": "iterations: 989\ncpu: 703628.7158746124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 1075081.2496171782,
            "unit": "ns/iter",
            "extra": "iterations: 653\ncpu: 1075036.2940275716 ns\nthreads: 1"
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
        "date": 1705777738940,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 17834.361420310484,
            "unit": "ns/iter",
            "extra": "iterations: 39259\ncpu: 17832.148042487075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 146568.17926829113,
            "unit": "ns/iter",
            "extra": "iterations: 5740\ncpu: 146559.51219512196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 277021.91117481067,
            "unit": "ns/iter",
            "extra": "iterations: 3141\ncpu: 276993.2823941421 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 404510.66338952666,
            "unit": "ns/iter",
            "extra": "iterations: 2136\ncpu: 404490.2621722847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 534963.9815384273,
            "unit": "ns/iter",
            "extra": "iterations: 1625\ncpu: 534898.0923076923 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 533698.1250000008,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 533588.8999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 636128.9220000117,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 636053.9000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 737596.9551282114,
            "unit": "ns/iter",
            "extra": "iterations: 1248\ncpu: 737546.073717949 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 839160.5659690611,
            "unit": "ns/iter",
            "extra": "iterations: 1099\ncpu: 839073.7943585071 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 14191.631254687052,
            "unit": "ns/iter",
            "extra": "iterations: 49343\ncpu: 14191.135520742548 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 11950.838628178339,
            "unit": "ns/iter",
            "extra": "iterations: 58579\ncpu: 11950.6307721197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 11849.825171864115,
            "unit": "ns/iter",
            "extra": "iterations: 59058\ncpu: 11848.926479054462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 11871.865113749087,
            "unit": "ns/iter",
            "extra": "iterations: 58857\ncpu: 11870.85988072786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 20013.718692057275,
            "unit": "ns/iter",
            "extra": "iterations: 33977\ncpu: 20011.319421961904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 57176.61959999987,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 57172.04999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 314370.571271507,
            "unit": "ns/iter",
            "extra": "iterations: 2729\ncpu: 314335.9472334185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 248925.7808338363,
            "unit": "ns/iter",
            "extra": "iterations: 3454\ncpu: 248584.45280833813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 247477.86950230767,
            "unit": "ns/iter",
            "extra": "iterations: 3456\ncpu: 247459.28819444389 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 239978.93095704523,
            "unit": "ns/iter",
            "extra": "iterations: 3563\ncpu: 239972.8318832439 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 511220.66400000674,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 511210.2000000007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4515049.466019784,
            "unit": "ns/iter",
            "extra": "iterations: 206\ncpu: 4514988.3495145645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3680452.126984403,
            "unit": "ns/iter",
            "extra": "iterations: 252\ncpu: 3680306.3492063493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3665789.047430746,
            "unit": "ns/iter",
            "extra": "iterations: 253\ncpu: 3665583.7944663977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3638854.67187508,
            "unit": "ns/iter",
            "extra": "iterations: 256\ncpu: 3638809.37500001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 2110067.453303059,
            "unit": "ns/iter",
            "extra": "iterations: 439\ncpu: 2109998.177676536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3561498.519230956,
            "unit": "ns/iter",
            "extra": "iterations: 260\ncpu: 3561331.1538461572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 13378535.341772314,
            "unit": "ns/iter",
            "extra": "iterations: 79\ncpu: 13377889.873417724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 6131423.660000337,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6131320.000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 17223706.885246072,
            "unit": "ns/iter",
            "extra": "iterations: 61\ncpu: 17222583.606557384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 62591.642548201125,
            "unit": "ns/iter",
            "extra": "iterations: 13641\ncpu: 62589.10637050057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 354696.64133114245,
            "unit": "ns/iter",
            "extra": "iterations: 2434\ncpu: 354668.20049301564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 274888.6539936071,
            "unit": "ns/iter",
            "extra": "iterations: 3130\ncpu: 274883.09904153383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 277959.4527813682,
            "unit": "ns/iter",
            "extra": "iterations: 3092\ncpu: 277941.81759379205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 275117.20737624686,
            "unit": "ns/iter",
            "extra": "iterations: 3091\ncpu: 275106.63215787866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 617724.4254261602,
            "unit": "ns/iter",
            "extra": "iterations: 1408\ncpu: 617722.7272727243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4613811.301980338,
            "unit": "ns/iter",
            "extra": "iterations: 202\ncpu: 4613650.495049513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3755359.6209676242,
            "unit": "ns/iter",
            "extra": "iterations: 248\ncpu: 3755143.548387094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3731089.163999968,
            "unit": "ns/iter",
            "extra": "iterations: 250\ncpu: 3731030.8000000133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3707138.9800794204,
            "unit": "ns/iter",
            "extra": "iterations: 251\ncpu: 3707026.2948207296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 2160391.941860389,
            "unit": "ns/iter",
            "extra": "iterations: 430\ncpu: 2160287.9069767436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3613402.279069827,
            "unit": "ns/iter",
            "extra": "iterations: 258\ncpu: 3613099.6124031246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 13769843.285713663,
            "unit": "ns/iter",
            "extra": "iterations: 77\ncpu: 13769244.155844115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 6013341.580000997,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6012449.999999987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 54141.75340000611,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 54140.260000000504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 311955.35364960704,
            "unit": "ns/iter",
            "extra": "iterations: 2740\ncpu: 311946.20437956403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 239700.7957079081,
            "unit": "ns/iter",
            "extra": "iterations: 3588\ncpu: 239693.84057970872 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 245224.67677052732,
            "unit": "ns/iter",
            "extra": "iterations: 3530\ncpu: 245217.84702549642 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 240396.2670982392,
            "unit": "ns/iter",
            "extra": "iterations: 3553\ncpu: 240390.9653813685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 584185.1736205058,
            "unit": "ns/iter",
            "extra": "iterations: 1486\ncpu: 584145.1547779301 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 4571580.5024630455,
            "unit": "ns/iter",
            "extra": "iterations: 203\ncpu: 4571333.497536941 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3708430.4206352555,
            "unit": "ns/iter",
            "extra": "iterations: 252\ncpu: 3708141.2698412808 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3689307.4703555955,
            "unit": "ns/iter",
            "extra": "iterations: 253\ncpu: 3688994.466403163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3657079.1882352345,
            "unit": "ns/iter",
            "extra": "iterations: 255\ncpu: 3656902.7450980507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 2124779.3621867476,
            "unit": "ns/iter",
            "extra": "iterations: 439\ncpu: 2124497.2665147968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3574350.2346152724,
            "unit": "ns/iter",
            "extra": "iterations: 260\ncpu: 3574049.615384594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6976.037190908522,
            "unit": "ns/iter",
            "extra": "iterations: 100132\ncpu: 6975.201733711514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 39786.11817714799,
            "unit": "ns/iter",
            "extra": "iterations: 17533\ncpu: 39786.03205384148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 31872.760107448747,
            "unit": "ns/iter",
            "extra": "iterations: 21964\ncpu: 31872.181751957483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 31657.919091362506,
            "unit": "ns/iter",
            "extra": "iterations: 22099\ncpu: 31656.37359156526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 24390.005058666826,
            "unit": "ns/iter",
            "extra": "iterations: 28466\ncpu: 24389.95292629807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 170648.48975107126,
            "unit": "ns/iter",
            "extra": "iterations: 4098\ncpu: 170647.99902391518 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 292185.4379958086,
            "unit": "ns/iter",
            "extra": "iterations: 2395\ncpu: 292174.8643006254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 77517.67432864981,
            "unit": "ns/iter",
            "extra": "iterations: 9049\ncpu: 77513.74737540058 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 76629.94519798702,
            "unit": "ns/iter",
            "extra": "iterations: 9142\ncpu: 76625.93524392854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 76819.19747668925,
            "unit": "ns/iter",
            "extra": "iterations: 9115\ncpu: 76817.60833790456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 155360.46097398008,
            "unit": "ns/iter",
            "extra": "iterations: 4497\ncpu: 155357.0824994456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 135986.45705401152,
            "unit": "ns/iter",
            "extra": "iterations: 5146\ncpu: 135982.76331130794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 47666.309926366324,
            "unit": "ns/iter",
            "extra": "iterations: 14668\ncpu: 47664.46004908584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 239787.10402452404,
            "unit": "ns/iter",
            "extra": "iterations: 2932\ncpu: 239786.3574351992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 188144.51293103216,
            "unit": "ns/iter",
            "extra": "iterations: 3712\ncpu: 188131.95043103406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 186451.54458345033,
            "unit": "ns/iter",
            "extra": "iterations: 3757\ncpu: 186448.22997072077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 189981.101630419,
            "unit": "ns/iter",
            "extra": "iterations: 3680\ncpu: 189978.016304349 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 343262.7747792067,
            "unit": "ns/iter",
            "extra": "iterations: 2038\ncpu: 343262.02158979356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1329233.6899809404,
            "unit": "ns/iter",
            "extra": "iterations: 529\ncpu: 1329230.8128544646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 1114779.654458716,
            "unit": "ns/iter",
            "extra": "iterations: 628\ncpu: 1114749.6815286588 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 1101525.0330707547,
            "unit": "ns/iter",
            "extra": "iterations: 635\ncpu: 1101468.3464567028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 1091663.1168225221,
            "unit": "ns/iter",
            "extra": "iterations: 642\ncpu: 1091614.7975077727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 707053.6093117803,
            "unit": "ns/iter",
            "extra": "iterations: 988\ncpu: 707052.1255060687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 1081952.8651163355,
            "unit": "ns/iter",
            "extra": "iterations: 645\ncpu: 1081950.3875968938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 47372.63892835287,
            "unit": "ns/iter",
            "extra": "iterations: 14781\ncpu: 47371.18598200376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 231065.2533024812,
            "unit": "ns/iter",
            "extra": "iterations: 3028\ncpu: 231058.91677674762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 190331.7415699932,
            "unit": "ns/iter",
            "extra": "iterations: 3707\ncpu: 190330.99541408118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 187892.45218097133,
            "unit": "ns/iter",
            "extra": "iterations: 3691\ncpu: 187891.70956380517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 187878.37503354877,
            "unit": "ns/iter",
            "extra": "iterations: 3725\ncpu: 187875.73154362317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 339372.15358529706,
            "unit": "ns/iter",
            "extra": "iterations: 2064\ncpu: 339367.6356589161 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1304654.3780260275,
            "unit": "ns/iter",
            "extra": "iterations: 537\ncpu: 1304613.7802607126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 1111880.4881141512,
            "unit": "ns/iter",
            "extra": "iterations: 631\ncpu: 1111851.6640253605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 1098715.5384615047,
            "unit": "ns/iter",
            "extra": "iterations: 637\ncpu: 1098647.0957613846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 1094343.8255451545,
            "unit": "ns/iter",
            "extra": "iterations: 642\ncpu: 1094258.0996884692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 710495.4385787201,
            "unit": "ns/iter",
            "extra": "iterations: 985\ncpu: 710485.7868020257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 1084596.8310077789,
            "unit": "ns/iter",
            "extra": "iterations: 645\ncpu: 1084554.8837209237 ns\nthreads: 1"
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
        "date": 1705952866216,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 17570.345047123355,
            "unit": "ns/iter",
            "extra": "iterations: 39896\ncpu: 17570.159915781034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 143142.14152570892,
            "unit": "ns/iter",
            "extra": "iterations: 5794\ncpu: 143131.77424922332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 269833.2013801818,
            "unit": "ns/iter",
            "extra": "iterations: 3188\ncpu: 269827.1016311167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 393588.6925182547,
            "unit": "ns/iter",
            "extra": "iterations: 2192\ncpu: 393572.7189781023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 518553.86909741064,
            "unit": "ns/iter",
            "extra": "iterations: 1673\ncpu: 518523.31141661655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 517355.7229999801,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 517325.9000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 620103.8060000314,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 620101.1999999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 715526.614728717,
            "unit": "ns/iter",
            "extra": "iterations: 1290\ncpu: 715474.5736434113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 814718.5457746601,
            "unit": "ns/iter",
            "extra": "iterations: 1136\ncpu: 814693.8380281689 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 14044.187432133594,
            "unit": "ns/iter",
            "extra": "iterations: 49730\ncpu: 14043.701990750036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 11818.016956023355,
            "unit": "ns/iter",
            "extra": "iterations: 59212\ncpu: 11817.530230358727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 11726.059487145174,
            "unit": "ns/iter",
            "extra": "iterations: 59744\ncpu: 11725.893813604705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 11800.301823907439,
            "unit": "ns/iter",
            "extra": "iterations: 59707\ncpu: 11799.790644313054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 20100.62412120748,
            "unit": "ns/iter",
            "extra": "iterations: 34849\ncpu: 20100.367298918205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 56443.8985000038,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 56442.84000000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 295037.43287670566,
            "unit": "ns/iter",
            "extra": "iterations: 2920\ncpu: 295037.260273973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 232690.63291484374,
            "unit": "ns/iter",
            "extra": "iterations: 3664\ncpu: 232680.56768558963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 237128.06828864114,
            "unit": "ns/iter",
            "extra": "iterations: 3617\ncpu: 237123.80425767164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 228774.20931478534,
            "unit": "ns/iter",
            "extra": "iterations: 3736\ncpu: 228767.50535331847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 506630.72800000466,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 506636.49999999907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4386455.674528338,
            "unit": "ns/iter",
            "extra": "iterations: 212\ncpu: 4386287.264150937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3537477.27203106,
            "unit": "ns/iter",
            "extra": "iterations: 261\ncpu: 3537435.249042154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3514131.11742414,
            "unit": "ns/iter",
            "extra": "iterations: 264\ncpu: 3514034.4696969725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3483966.39849637,
            "unit": "ns/iter",
            "extra": "iterations: 266\ncpu: 3483836.0902255694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 2009195.0759220559,
            "unit": "ns/iter",
            "extra": "iterations: 461\ncpu: 2009094.5770065081 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3416973.4423078177,
            "unit": "ns/iter",
            "extra": "iterations: 260\ncpu: 3416843.4615384634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 12737030.915662173,
            "unit": "ns/iter",
            "extra": "iterations: 83\ncpu: 12736640.963855382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5720261.280000614,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5719900.000000031 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 16601814.88888871,
            "unit": "ns/iter",
            "extra": "iterations: 63\ncpu: 16601173.015873019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 64562.21003942513,
            "unit": "ns/iter",
            "extra": "iterations: 13188\ncpu: 64560.592963299976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 333713.2226093469,
            "unit": "ns/iter",
            "extra": "iterations: 2583\ncpu: 333707.3170731717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 265714.15604599245,
            "unit": "ns/iter",
            "extra": "iterations: 3217\ncpu: 265697.9794839914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 267698.09856964636,
            "unit": "ns/iter",
            "extra": "iterations: 3216\ncpu: 267691.884328359 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 263727.1465066412,
            "unit": "ns/iter",
            "extra": "iterations: 3249\ncpu: 263713.35795629356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 501799.5540000583,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 501804.79999999504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4443604.03827721,
            "unit": "ns/iter",
            "extra": "iterations: 209\ncpu: 4443315.311004799 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3592963.4864861504,
            "unit": "ns/iter",
            "extra": "iterations: 259\ncpu: 3592741.312741291 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3575096.839080518,
            "unit": "ns/iter",
            "extra": "iterations: 261\ncpu: 3575003.4482758567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3557818.75572521,
            "unit": "ns/iter",
            "extra": "iterations: 262\ncpu: 3557650.000000023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 2040084.0884957912,
            "unit": "ns/iter",
            "extra": "iterations: 452\ncpu: 2040008.1858407117 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3469829.5985131543,
            "unit": "ns/iter",
            "extra": "iterations: 269\ncpu: 3469642.7509293715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 12943720.69135837,
            "unit": "ns/iter",
            "extra": "iterations: 81\ncpu: 12943056.790123433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 6021127.589999651,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6020982.000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 53155.357599996474,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 53151.62999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 286957.51832109224,
            "unit": "ns/iter",
            "extra": "iterations: 3002\ncpu: 286949.0339773484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 226402.5272631278,
            "unit": "ns/iter",
            "extra": "iterations: 3778\ncpu: 226392.53573319226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 234778.60530633692,
            "unit": "ns/iter",
            "extra": "iterations: 3656\ncpu: 234772.26477024076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 229262.7775106691,
            "unit": "ns/iter",
            "extra": "iterations: 3744\ncpu: 229255.34188034115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 584999.3920911364,
            "unit": "ns/iter",
            "extra": "iterations: 1492\ncpu: 584978.5522788203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 4444938.817307786,
            "unit": "ns/iter",
            "extra": "iterations: 208\ncpu: 4444930.769230778 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3578029.850574776,
            "unit": "ns/iter",
            "extra": "iterations: 261\ncpu: 3577827.2030651323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3545073.37786263,
            "unit": "ns/iter",
            "extra": "iterations: 262\ncpu: 3544996.5648855073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3519894.617424036,
            "unit": "ns/iter",
            "extra": "iterations: 264\ncpu: 3519812.121212127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 2016821.8958784908,
            "unit": "ns/iter",
            "extra": "iterations: 461\ncpu: 2016740.1301518416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3452784.0447762813,
            "unit": "ns/iter",
            "extra": "iterations: 268\ncpu: 3452605.9701492637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6932.0003067510725,
            "unit": "ns/iter",
            "extra": "iterations: 101059\ncpu: 6931.674566342367 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 39126.305094222014,
            "unit": "ns/iter",
            "extra": "iterations: 17883\ncpu: 39126.70692836763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 30555.151799347153,
            "unit": "ns/iter",
            "extra": "iterations: 22925\ncpu: 30553.55725190857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 29489.04060143957,
            "unit": "ns/iter",
            "extra": "iterations: 23743\ncpu: 29488.49345070137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 23979.35763924422,
            "unit": "ns/iter",
            "extra": "iterations: 29211\ncpu: 23978.576563623315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 172359.80982054403,
            "unit": "ns/iter",
            "extra": "iterations: 4012\ncpu: 172361.16650049685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 282967.51558073197,
            "unit": "ns/iter",
            "extra": "iterations: 2471\ncpu: 282960.01618777856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 75692.52507566017,
            "unit": "ns/iter",
            "extra": "iterations: 9252\ncpu: 75691.12624297406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 75513.58770889309,
            "unit": "ns/iter",
            "extra": "iterations: 9275\ncpu: 75511.91374663063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 74779.24687533286,
            "unit": "ns/iter",
            "extra": "iterations: 9361\ncpu: 74776.73325499392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 150030.28390829216,
            "unit": "ns/iter",
            "extra": "iterations: 4667\ncpu: 150027.16948789248 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 139262.45588235915,
            "unit": "ns/iter",
            "extra": "iterations: 5032\ncpu: 139257.27344992012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 46524.8185157989,
            "unit": "ns/iter",
            "extra": "iterations: 14971\ncpu: 46523.27833812039 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 229758.09575519277,
            "unit": "ns/iter",
            "extra": "iterations: 3039\ncpu: 229743.3037183293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 182557.0195465362,
            "unit": "ns/iter",
            "extra": "iterations: 3837\ncpu: 182555.92911128417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 183477.56686730828,
            "unit": "ns/iter",
            "extra": "iterations: 3821\ncpu: 183469.6676262775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 183447.66203825,
            "unit": "ns/iter",
            "extra": "iterations: 3817\ncpu: 183444.3804034604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 337137.85473787657,
            "unit": "ns/iter",
            "extra": "iterations: 2079\ncpu: 337123.61712361616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1292017.8592592205,
            "unit": "ns/iter",
            "extra": "iterations: 540\ncpu: 1292027.7777777703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 1073016.6840491628,
            "unit": "ns/iter",
            "extra": "iterations: 652\ncpu: 1072982.9754601305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 1066615.0762195995,
            "unit": "ns/iter",
            "extra": "iterations: 656\ncpu: 1066584.2987804872 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 1060205.293129696,
            "unit": "ns/iter",
            "extra": "iterations: 655\ncpu: 1060127.02290077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 688525.4783464764,
            "unit": "ns/iter",
            "extra": "iterations: 1016\ncpu: 688501.2795275557 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 1050585.7792791573,
            "unit": "ns/iter",
            "extra": "iterations: 666\ncpu: 1050576.7267267252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 46763.533016659385,
            "unit": "ns/iter",
            "extra": "iterations: 14947\ncpu: 46761.72476082175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 224081.88677419978,
            "unit": "ns/iter",
            "extra": "iterations: 3100\ncpu: 224073.4838709698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 184470.97179755624,
            "unit": "ns/iter",
            "extra": "iterations: 3794\ncpu: 184463.5740643113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 182751.08350732332,
            "unit": "ns/iter",
            "extra": "iterations: 3832\ncpu: 182749.0083507312 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 183597.03824992327,
            "unit": "ns/iter",
            "extra": "iterations: 3817\ncpu: 183590.72570081195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 333031.6563688008,
            "unit": "ns/iter",
            "extra": "iterations: 2104\ncpu: 333031.0361216738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1274799.4397810348,
            "unit": "ns/iter",
            "extra": "iterations: 548\ncpu: 1274789.23357666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 1075196.8021471116,
            "unit": "ns/iter",
            "extra": "iterations: 652\ncpu: 1075138.8036809645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 1066289.5015243744,
            "unit": "ns/iter",
            "extra": "iterations: 656\ncpu: 1066199.999999982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 1055321.5647590093,
            "unit": "ns/iter",
            "extra": "iterations: 664\ncpu: 1055284.3373493992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 690495.3435339801,
            "unit": "ns/iter",
            "extra": "iterations: 1013\ncpu: 690502.7640671205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 1051055.857142889,
            "unit": "ns/iter",
            "extra": "iterations: 665\ncpu: 1051048.721804503 ns\nthreads: 1"
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
        "date": 1705954278080,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 17621.36192135761,
            "unit": "ns/iter",
            "extra": "iterations: 39597\ncpu: 17619.809581533955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 144224.58700102687,
            "unit": "ns/iter",
            "extra": "iterations: 5862\ncpu: 144215.2166496076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 270515.28079428204,
            "unit": "ns/iter",
            "extra": "iterations: 3223\ncpu: 270495.4080049643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 397352.83463481866,
            "unit": "ns/iter",
            "extra": "iterations: 2177\ncpu: 397332.5218190171 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 522120.6867107502,
            "unit": "ns/iter",
            "extra": "iterations: 1663\ncpu: 522084.1250751651 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 522176.25000002957,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 522159.8000000007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 622734.8740000025,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 622656.5000000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 720572.546593546,
            "unit": "ns/iter",
            "extra": "iterations: 1277\ncpu: 720533.7509788566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 843127.1239818902,
            "unit": "ns/iter",
            "extra": "iterations: 1105\ncpu: 843075.2036199099 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 14274.845618689496,
            "unit": "ns/iter",
            "extra": "iterations: 49015\ncpu: 14274.067122309485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 11982.107639065964,
            "unit": "ns/iter",
            "extra": "iterations: 58371\ncpu: 11981.691250792332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 11820.491413116286,
            "unit": "ns/iter",
            "extra": "iterations: 59160\ncpu: 11819.812373225152 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 11883.280099782634,
            "unit": "ns/iter",
            "extra": "iterations: 58929\ncpu: 11882.797943287705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 20120.05628501726,
            "unit": "ns/iter",
            "extra": "iterations: 34805\ncpu: 20118.566297945697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 57227.40040000645,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 57223.49999999992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 303842.6690391522,
            "unit": "ns/iter",
            "extra": "iterations: 2810\ncpu: 303823.309608541 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 247485.75659231056,
            "unit": "ns/iter",
            "extra": "iterations: 3451\ncpu: 247474.3552593447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 244615.397766319,
            "unit": "ns/iter",
            "extra": "iterations: 3492\ncpu: 244606.24284077942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 241094.0206389562,
            "unit": "ns/iter",
            "extra": "iterations: 3537\ncpu: 241081.25530110273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 508180.4960000227,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 508130.50000000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4516156.314009539,
            "unit": "ns/iter",
            "extra": "iterations: 207\ncpu: 4515923.671497589 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3628812.496093925,
            "unit": "ns/iter",
            "extra": "iterations: 256\ncpu: 3628680.8593749967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3571085.792307608,
            "unit": "ns/iter",
            "extra": "iterations: 260\ncpu: 3570898.8461538437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3607885.2762646647,
            "unit": "ns/iter",
            "extra": "iterations: 257\ncpu: 3607582.4902723734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 2062967.9420935363,
            "unit": "ns/iter",
            "extra": "iterations: 449\ncpu: 2062896.8819599133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3513641.098485099,
            "unit": "ns/iter",
            "extra": "iterations: 264\ncpu: 3513440.9090909194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 13121179.172839904,
            "unit": "ns/iter",
            "extra": "iterations: 81\ncpu: 13120353.08641974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5764283.470000464,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5763718.000000005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 16925052.72580635,
            "unit": "ns/iter",
            "extra": "iterations: 62\ncpu: 16924251.612903196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 65279.38093779215,
            "unit": "ns/iter",
            "extra": "iterations: 13052\ncpu: 65275.22218817029 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 341931.3489480119,
            "unit": "ns/iter",
            "extra": "iterations: 2519\ncpu: 341904.4859071058 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 276956.10125362617,
            "unit": "ns/iter",
            "extra": "iterations: 3111\ncpu: 276944.2622950819 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 277216.57723313465,
            "unit": "ns/iter",
            "extra": "iterations: 3101\ncpu: 277191.6801031926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 279004.8535238822,
            "unit": "ns/iter",
            "extra": "iterations: 3079\ncpu: 278986.71646638616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 512874.9579999976,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 512829.0999999976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4596564.059113181,
            "unit": "ns/iter",
            "extra": "iterations: 203\ncpu: 4596363.054187208 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3686554.138888758,
            "unit": "ns/iter",
            "extra": "iterations: 252\ncpu: 3686366.269841286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3642386.290196145,
            "unit": "ns/iter",
            "extra": "iterations: 255\ncpu: 3642131.7647058987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3643584.050980601,
            "unit": "ns/iter",
            "extra": "iterations: 255\ncpu: 3643406.274509807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 2095912.1873588925,
            "unit": "ns/iter",
            "extra": "iterations: 443\ncpu: 2095773.3634311494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3553430.576335858,
            "unit": "ns/iter",
            "extra": "iterations: 262\ncpu: 3551159.9236641284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 13220808.775000136,
            "unit": "ns/iter",
            "extra": "iterations: 80\ncpu: 13220188.749999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5911020.920000282,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5910629.999999983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 55451.70039999902,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 55449.87999999975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 300767.86264306336,
            "unit": "ns/iter",
            "extra": "iterations: 2883\ncpu: 300747.8321193195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 240291.1862527879,
            "unit": "ns/iter",
            "extra": "iterations: 3608\ncpu: 240281.0975609764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 246389.2057061621,
            "unit": "ns/iter",
            "extra": "iterations: 3505\ncpu: 246373.80884450863 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 241141.2417338088,
            "unit": "ns/iter",
            "extra": "iterations: 3599\ncpu: 241131.1475409843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 588868.9979702344,
            "unit": "ns/iter",
            "extra": "iterations: 1478\ncpu: 588847.2259810539 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 4540706.873786225,
            "unit": "ns/iter",
            "extra": "iterations: 206\ncpu: 4540321.844660197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3634189.455252853,
            "unit": "ns/iter",
            "extra": "iterations: 257\ncpu: 3633947.081712071 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3588084.1653846134,
            "unit": "ns/iter",
            "extra": "iterations: 260\ncpu: 3587923.8461538474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3600475.007752005,
            "unit": "ns/iter",
            "extra": "iterations: 258\ncpu: 3600202.325581401 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 2070092.2254463753,
            "unit": "ns/iter",
            "extra": "iterations: 448\ncpu: 2070018.303571421 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3499955.49248105,
            "unit": "ns/iter",
            "extra": "iterations: 266\ncpu: 3499742.8571428605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6913.335272899586,
            "unit": "ns/iter",
            "extra": "iterations: 101741\ncpu: 6912.963308793906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 38868.94909596327,
            "unit": "ns/iter",
            "extra": "iterations: 17975\ncpu: 38868.511821974964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 31332.07654431742,
            "unit": "ns/iter",
            "extra": "iterations: 22340\ncpu: 31330.537153088866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 31387.91307271556,
            "unit": "ns/iter",
            "extra": "iterations: 22306\ncpu: 31386.111360172014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 23793.891395948136,
            "unit": "ns/iter",
            "extra": "iterations: 29428\ncpu: 23791.773141225978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 170873.43920899057,
            "unit": "ns/iter",
            "extra": "iterations: 4096\ncpu: 170867.57812499916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 303086.56258120673,
            "unit": "ns/iter",
            "extra": "iterations: 2309\ncpu: 303083.4993503682 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 76247.74727430727,
            "unit": "ns/iter",
            "extra": "iterations: 9172\ncpu: 76245.76973397312 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 75156.98076510052,
            "unit": "ns/iter",
            "extra": "iterations: 9306\ncpu: 75151.26799914113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 75618.13662382172,
            "unit": "ns/iter",
            "extra": "iterations: 9259\ncpu: 75610.08748244934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 151506.9967567674,
            "unit": "ns/iter",
            "extra": "iterations: 4625\ncpu: 151498.81081081092 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 140751.5243460915,
            "unit": "ns/iter",
            "extra": "iterations: 4970\ncpu: 140746.23742454805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 47224.65702311748,
            "unit": "ns/iter",
            "extra": "iterations: 14794\ncpu: 47221.81289712047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 234003.01066665936,
            "unit": "ns/iter",
            "extra": "iterations: 3000\ncpu: 233993.0333333342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 186307.48219032728,
            "unit": "ns/iter",
            "extra": "iterations: 3762\ncpu: 186291.44072302125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 184225.85424885552,
            "unit": "ns/iter",
            "extra": "iterations: 3801\ncpu: 184212.33885819465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 188623.02312450172,
            "unit": "ns/iter",
            "extra": "iterations: 3719\ncpu: 188612.5033611186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 342828.4190382753,
            "unit": "ns/iter",
            "extra": "iterations: 2038\ncpu: 342803.2384690878 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1303577.5951492363,
            "unit": "ns/iter",
            "extra": "iterations: 536\ncpu: 1303522.5746268623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 1096279.8262911781,
            "unit": "ns/iter",
            "extra": "iterations: 639\ncpu: 1096243.8184663581 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 1080181.5446153833,
            "unit": "ns/iter",
            "extra": "iterations: 650\ncpu: 1080089.2307692433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 1067926.003053299,
            "unit": "ns/iter",
            "extra": "iterations: 655\ncpu: 1067836.3358778576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 697754.8057769551,
            "unit": "ns/iter",
            "extra": "iterations: 1004\ncpu: 697723.9043824635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 1063844.9847793672,
            "unit": "ns/iter",
            "extra": "iterations: 657\ncpu: 1063756.4687975596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 47065.13084741026,
            "unit": "ns/iter",
            "extra": "iterations: 14857\ncpu: 47063.505418320696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 229115.8274394268,
            "unit": "ns/iter",
            "extra": "iterations: 3054\ncpu: 229104.1912246258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 187476.48456375476,
            "unit": "ns/iter",
            "extra": "iterations: 3725\ncpu: 187467.03355704626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 183794.9704952867,
            "unit": "ns/iter",
            "extra": "iterations: 3796\ncpu: 183776.50158061273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 186449.35082577603,
            "unit": "ns/iter",
            "extra": "iterations: 3754\ncpu: 186442.96750133246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 335468.2246168314,
            "unit": "ns/iter",
            "extra": "iterations: 2088\ncpu: 335448.6590038311 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1310054.313909758,
            "unit": "ns/iter",
            "extra": "iterations: 532\ncpu: 1309993.2330827187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 1097969.860501476,
            "unit": "ns/iter",
            "extra": "iterations: 638\ncpu: 1097910.6583071928 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 1074262.714723947,
            "unit": "ns/iter",
            "extra": "iterations: 652\ncpu: 1074176.6871165617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 1074561.1569231746,
            "unit": "ns/iter",
            "extra": "iterations: 650\ncpu: 1074524.307692308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 699209.3689999592,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 699143.9999999898 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 1063663.152207035,
            "unit": "ns/iter",
            "extra": "iterations: 657\ncpu: 1063608.9802130808 ns\nthreads: 1"
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
        "date": 1705956372831,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 17540.422160693444,
            "unit": "ns/iter",
            "extra": "iterations: 38284\ncpu: 17539.233099989557 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 142393.24857238762,
            "unit": "ns/iter",
            "extra": "iterations: 5954\ncpu: 142384.3298622775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 267592.9722991662,
            "unit": "ns/iter",
            "extra": "iterations: 3249\ncpu: 267582.5176977532 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 391336.65504751273,
            "unit": "ns/iter",
            "extra": "iterations: 2209\ncpu: 391310.09506564075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 517316.4096890076,
            "unit": "ns/iter",
            "extra": "iterations: 1672\ncpu: 517279.3062200958 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 517613.7299999937,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 517606.29999999976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 617074.9259999867,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 617044.3000000007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 723046.6790410029,
            "unit": "ns/iter",
            "extra": "iterations: 1293\ncpu: 723013.3023975255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 813181.2809187314,
            "unit": "ns/iter",
            "extra": "iterations: 1132\ncpu: 813151.5901060066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 14191.171151274562,
            "unit": "ns/iter",
            "extra": "iterations: 49354\ncpu: 14190.776836730569 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 11843.150561570696,
            "unit": "ns/iter",
            "extra": "iterations: 59298\ncpu: 11842.92556241358 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 11871.815154137472,
            "unit": "ns/iter",
            "extra": "iterations: 58941\ncpu: 11871.647919105557 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 11806.782119228164,
            "unit": "ns/iter",
            "extra": "iterations: 59248\ncpu: 11806.02720766948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 20057.211949560766,
            "unit": "ns/iter",
            "extra": "iterations: 35131\ncpu: 20056.531268680086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 54566.4477999992,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 54564.590000000026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 288716.1929173643,
            "unit": "ns/iter",
            "extra": "iterations: 2965\ncpu: 288699.79763912276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 231232.93665403264,
            "unit": "ns/iter",
            "extra": "iterations: 3694\ncpu: 231220.27612344373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 237165.5966666708,
            "unit": "ns/iter",
            "extra": "iterations: 3600\ncpu: 237157.6666666665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 228164.46366317643,
            "unit": "ns/iter",
            "extra": "iterations: 3729\ncpu: 228160.41834271964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 515121.7110000061,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 515114.0000000005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4403008.900473847,
            "unit": "ns/iter",
            "extra": "iterations: 211\ncpu: 4402836.492890989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3532537.6398466397,
            "unit": "ns/iter",
            "extra": "iterations: 261\ncpu: 3532407.6628352534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3544839.6641221847,
            "unit": "ns/iter",
            "extra": "iterations: 262\ncpu: 3544639.694656479 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3519748.908745087,
            "unit": "ns/iter",
            "extra": "iterations: 263\ncpu: 3519592.3954372555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 2033529.0483515833,
            "unit": "ns/iter",
            "extra": "iterations: 455\ncpu: 2033443.7362637415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3436865.0740740728,
            "unit": "ns/iter",
            "extra": "iterations: 270\ncpu: 3436775.5555555555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 12885277.6506022,
            "unit": "ns/iter",
            "extra": "iterations: 83\ncpu: 12884727.710843375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5594003.409999574,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5593931.000000012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 16953392.396825194,
            "unit": "ns/iter",
            "extra": "iterations: 63\ncpu: 16952511.111111075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 61159.37701496582,
            "unit": "ns/iter",
            "extra": "iterations: 13896\ncpu: 61157.268278641255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 327978.8563283896,
            "unit": "ns/iter",
            "extra": "iterations: 2631\ncpu: 327965.10832383076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 259503.54245995445,
            "unit": "ns/iter",
            "extra": "iterations: 3309\ncpu: 259492.23330311215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 268360.5513698565,
            "unit": "ns/iter",
            "extra": "iterations: 3212\ncpu: 268347.1668742216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 263965.54054053884,
            "unit": "ns/iter",
            "extra": "iterations: 3256\ncpu: 263961.7936117939 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 508661.2570000284,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 508626.4000000042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4470272.3574877875,
            "unit": "ns/iter",
            "extra": "iterations: 207\ncpu: 4470122.705314022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3605544.0193797317,
            "unit": "ns/iter",
            "extra": "iterations: 258\ncpu: 3605415.891472853 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3595826.399224806,
            "unit": "ns/iter",
            "extra": "iterations: 258\ncpu: 3595731.3953488395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3594534.8494209712,
            "unit": "ns/iter",
            "extra": "iterations: 259\ncpu: 3594449.8069498055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 2071017.4766146492,
            "unit": "ns/iter",
            "extra": "iterations: 449\ncpu: 2070909.3541202676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3499980.9245282193,
            "unit": "ns/iter",
            "extra": "iterations: 265\ncpu: 3499854.716981131 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 13210779.02469125,
            "unit": "ns/iter",
            "extra": "iterations: 81\ncpu: 13210364.197530864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5739872.799999829,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5739643.000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 52443.87299999857,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 52442.35999999986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 284181.35331126157,
            "unit": "ns/iter",
            "extra": "iterations: 3020\ncpu: 284170.86092715216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 226011.87757255853,
            "unit": "ns/iter",
            "extra": "iterations: 3790\ncpu: 226009.7889182065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 228379.4751131243,
            "unit": "ns/iter",
            "extra": "iterations: 3757\ncpu: 228374.18152781387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 224847.83823528604,
            "unit": "ns/iter",
            "extra": "iterations: 3808\ncpu: 224836.3970588223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 589274.0061349717,
            "unit": "ns/iter",
            "extra": "iterations: 1467\ncpu: 589251.0565780503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 4445597.526315933,
            "unit": "ns/iter",
            "extra": "iterations: 209\ncpu: 4445438.755980873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3546935.328244259,
            "unit": "ns/iter",
            "extra": "iterations: 262\ncpu: 3546780.534351149 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3568104.3026819928,
            "unit": "ns/iter",
            "extra": "iterations: 261\ncpu: 3568019.9233716493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3545984.950757658,
            "unit": "ns/iter",
            "extra": "iterations: 264\ncpu: 3545806.0606060503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 2068777.404395575,
            "unit": "ns/iter",
            "extra": "iterations: 455\ncpu: 2068716.2637362743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3442094.705179439,
            "unit": "ns/iter",
            "extra": "iterations: 251\ncpu: 3441948.20717131 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6944.83267548621,
            "unit": "ns/iter",
            "extra": "iterations: 100834\ncpu: 6944.634746216503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 38403.62246524211,
            "unit": "ns/iter",
            "extra": "iterations: 18197\ncpu: 38401.555201407005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 29895.452642370416,
            "unit": "ns/iter",
            "extra": "iterations: 23407\ncpu: 29893.92489426227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 29685.19889877101,
            "unit": "ns/iter",
            "extra": "iterations: 23610\ncpu: 29683.803473104632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 23784.364301688907,
            "unit": "ns/iter",
            "extra": "iterations: 29514\ncpu: 23783.523073795346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 175504.1531305055,
            "unit": "ns/iter",
            "extra": "iterations: 3977\ncpu: 175494.74478249875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 298518.6804431023,
            "unit": "ns/iter",
            "extra": "iterations: 2347\ncpu: 298506.3059224537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 74785.81874532715,
            "unit": "ns/iter",
            "extra": "iterations: 9357\ncpu: 74780.78443945719 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 74451.76368080698,
            "unit": "ns/iter",
            "extra": "iterations: 9411\ncpu: 74448.7514610565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 74559.21206309569,
            "unit": "ns/iter",
            "extra": "iterations: 9384\ncpu: 74558.49317987998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 149145.05159916077,
            "unit": "ns/iter",
            "extra": "iterations: 4690\ncpu: 149143.68869936123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 138461.73779885672,
            "unit": "ns/iter",
            "extra": "iterations: 5061\ncpu: 138456.94526773365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 46987.503227536545,
            "unit": "ns/iter",
            "extra": "iterations: 14872\ncpu: 46987.50000000032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 227747.7078981714,
            "unit": "ns/iter",
            "extra": "iterations: 3064\ncpu: 227744.84334203863 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 183410.04275971683,
            "unit": "ns/iter",
            "extra": "iterations: 3812\ncpu: 183402.33473242403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 183190.6837002101,
            "unit": "ns/iter",
            "extra": "iterations: 3816\ncpu: 183182.8878406696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 184917.74445615665,
            "unit": "ns/iter",
            "extra": "iterations: 3788\ncpu: 184910.374868004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 338023.708212549,
            "unit": "ns/iter",
            "extra": "iterations: 2070\ncpu: 338012.8502415492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1291405.259668468,
            "unit": "ns/iter",
            "extra": "iterations: 543\ncpu: 1291344.0147329608 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 1080266.8166411389,
            "unit": "ns/iter",
            "extra": "iterations: 649\ncpu: 1080232.0493066167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 1073880.1612903,
            "unit": "ns/iter",
            "extra": "iterations: 651\ncpu: 1073817.511520743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 1071755.2343032109,
            "unit": "ns/iter",
            "extra": "iterations: 653\ncpu: 1071707.6569678597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 700677.9628886237,
            "unit": "ns/iter",
            "extra": "iterations: 997\ncpu: 700647.4423269897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 1061827.842662622,
            "unit": "ns/iter",
            "extra": "iterations: 661\ncpu: 1061786.5355522053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 46656.76780949482,
            "unit": "ns/iter",
            "extra": "iterations: 14992\ncpu: 46654.39567769516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 228182.64267099227,
            "unit": "ns/iter",
            "extra": "iterations: 3070\ncpu: 228175.21172638502 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 186302.19113719967,
            "unit": "ns/iter",
            "extra": "iterations: 3746\ncpu: 186296.82327816487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 185120.81380588864,
            "unit": "ns/iter",
            "extra": "iterations: 3781\ncpu: 185113.80587146277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 185360.85661277053,
            "unit": "ns/iter",
            "extra": "iterations: 3773\ncpu: 185353.00821627508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 332720.7884981142,
            "unit": "ns/iter",
            "extra": "iterations: 2104\ncpu: 332709.74334600905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1281655.7728936395,
            "unit": "ns/iter",
            "extra": "iterations: 546\ncpu: 1281599.4505494463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 1074971.7923076437,
            "unit": "ns/iter",
            "extra": "iterations: 650\ncpu: 1074920.3076923008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 1065169.164634275,
            "unit": "ns/iter",
            "extra": "iterations: 656\ncpu: 1065152.2865853545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 1062344.7526554787,
            "unit": "ns/iter",
            "extra": "iterations: 659\ncpu: 1062319.8786039406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 698278.6975123956,
            "unit": "ns/iter",
            "extra": "iterations: 1005\ncpu: 698255.1243781141 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 1055645.1948639038,
            "unit": "ns/iter",
            "extra": "iterations: 662\ncpu: 1055607.0996978784 ns\nthreads: 1"
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
        "date": 1705957834016,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 18026.30457608845,
            "unit": "ns/iter",
            "extra": "iterations: 39619\ncpu: 18025.028395466823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 143589.11526742554,
            "unit": "ns/iter",
            "extra": "iterations: 5908\ncpu: 143582.90453622208 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 270451.4923604654,
            "unit": "ns/iter",
            "extra": "iterations: 3207\ncpu: 270413.595260368 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 394680.8683127727,
            "unit": "ns/iter",
            "extra": "iterations: 2187\ncpu: 394662.91723822587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 520875.6026410733,
            "unit": "ns/iter",
            "extra": "iterations: 1666\ncpu: 520829.3517406966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 520758.1349999373,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 520720.50000000035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 621410.6319999929,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 621404.7000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 720145.5737705217,
            "unit": "ns/iter",
            "extra": "iterations: 1281\ncpu: 720109.2115534736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 818447.7755101788,
            "unit": "ns/iter",
            "extra": "iterations: 1127\ncpu: 818424.223602484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 14136.763330706171,
            "unit": "ns/iter",
            "extra": "iterations: 49491\ncpu: 14136.053019740955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 11909.33710204236,
            "unit": "ns/iter",
            "extra": "iterations: 59083\ncpu: 11908.757172113817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 11829.71470628034,
            "unit": "ns/iter",
            "extra": "iterations: 59104\ncpu: 11828.932051976164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 11830.82981056386,
            "unit": "ns/iter",
            "extra": "iterations: 59281\ncpu: 11830.411092930259 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 19767.48556919125,
            "unit": "ns/iter",
            "extra": "iterations: 35445\ncpu: 19766.192692904468 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 58191.80229999575,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 58188.879999999976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 300142.05927742575,
            "unit": "ns/iter",
            "extra": "iterations: 2851\ncpu: 300125.46474921086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 241029.3738028127,
            "unit": "ns/iter",
            "extra": "iterations: 3550\ncpu: 241018.1126760566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 242262.18631069968,
            "unit": "ns/iter",
            "extra": "iterations: 3521\ncpu: 242254.30275489826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 241397.35884352238,
            "unit": "ns/iter",
            "extra": "iterations: 3528\ncpu: 241385.99773242688 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 504072.05800001975,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 504066.6999999992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4422772.2322274195,
            "unit": "ns/iter",
            "extra": "iterations: 211\ncpu: 4422538.388625588 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3592499.953488063,
            "unit": "ns/iter",
            "extra": "iterations: 258\ncpu: 3592256.5891472907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3575910.2123550093,
            "unit": "ns/iter",
            "extra": "iterations: 259\ncpu: 3575717.760617765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3582258.6423075963,
            "unit": "ns/iter",
            "extra": "iterations: 260\ncpu: 3581919.2307692277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 2041476.5088495829,
            "unit": "ns/iter",
            "extra": "iterations: 452\ncpu: 2041376.9911504472 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3464284.3283581524,
            "unit": "ns/iter",
            "extra": "iterations: 268\ncpu: 3463947.7611940303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 13037429.146342076,
            "unit": "ns/iter",
            "extra": "iterations: 82\ncpu: 13036421.951219497 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5766349.560000207,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5766294.000000017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 16820162.222222913,
            "unit": "ns/iter",
            "extra": "iterations: 63\ncpu: 16819225.39682544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 64368.495043516756,
            "unit": "ns/iter",
            "extra": "iterations: 13215\ncpu: 64363.91222096086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 351676.2063621266,
            "unit": "ns/iter",
            "extra": "iterations: 2452\ncpu: 351670.30995106016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 273830.4298469413,
            "unit": "ns/iter",
            "extra": "iterations: 3136\ncpu: 273820.95025510195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 271647.4151063282,
            "unit": "ns/iter",
            "extra": "iterations: 3151\ncpu: 271638.7813392582 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 277780.04940261785,
            "unit": "ns/iter",
            "extra": "iterations: 3097\ncpu: 277767.54924120044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 620088.8822269961,
            "unit": "ns/iter",
            "extra": "iterations: 1401\ncpu: 620072.9478943616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4498395.086956415,
            "unit": "ns/iter",
            "extra": "iterations: 207\ncpu: 4498238.647343006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3652493.6653545694,
            "unit": "ns/iter",
            "extra": "iterations: 254\ncpu: 3652399.2125984165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3635632.7812501197,
            "unit": "ns/iter",
            "extra": "iterations: 256\ncpu: 3635370.312499997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3637296.503906651,
            "unit": "ns/iter",
            "extra": "iterations: 256\ncpu: 3637193.3593750126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 2082485.6568847804,
            "unit": "ns/iter",
            "extra": "iterations: 443\ncpu: 2082460.2708803627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3519347.9924240108,
            "unit": "ns/iter",
            "extra": "iterations: 264\ncpu: 3519253.409090899 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 13266049.987500139,
            "unit": "ns/iter",
            "extra": "iterations: 80\ncpu: 13265680.000000035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5772234.209999851,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5772090.999999975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 56546.78760000707,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 56543.639999999585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 307155.83666059986,
            "unit": "ns/iter",
            "extra": "iterations: 2755\ncpu: 307148.6751361176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 232948.84971412213,
            "unit": "ns/iter",
            "extra": "iterations: 3673\ncpu: 232941.38306561395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 243233.93602502308,
            "unit": "ns/iter",
            "extra": "iterations: 3517\ncpu: 243224.39579186938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 239487.65479529582,
            "unit": "ns/iter",
            "extra": "iterations: 3566\ncpu: 239480.98710039284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 571920.2844940999,
            "unit": "ns/iter",
            "extra": "iterations: 1522\ncpu: 571895.9264126131 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 4494227.951922788,
            "unit": "ns/iter",
            "extra": "iterations: 208\ncpu: 4493288.9423076995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3585991.1769228764,
            "unit": "ns/iter",
            "extra": "iterations: 260\ncpu: 3585744.2307692314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3574767.4423078024,
            "unit": "ns/iter",
            "extra": "iterations: 260\ncpu: 3574573.0769230514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3578274.049808116,
            "unit": "ns/iter",
            "extra": "iterations: 261\ncpu: 3578057.471264362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 2057669.5884953884,
            "unit": "ns/iter",
            "extra": "iterations: 452\ncpu: 2057573.6725663603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3473754.1492535993,
            "unit": "ns/iter",
            "extra": "iterations: 268\ncpu: 3473592.9104477568 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6936.473617443412,
            "unit": "ns/iter",
            "extra": "iterations: 100900\ncpu: 6936.033696729421 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 39097.0259020998,
            "unit": "ns/iter",
            "extra": "iterations: 17875\ncpu: 39095.42377622389 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 29242.36428601472,
            "unit": "ns/iter",
            "extra": "iterations: 23929\ncpu: 29239.984955493346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 32107.461565883506,
            "unit": "ns/iter",
            "extra": "iterations: 22441\ncpu: 32106.033599215785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 23983.515175388606,
            "unit": "ns/iter",
            "extra": "iterations: 29192\ncpu: 23981.66620992056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 169815.48351113472,
            "unit": "ns/iter",
            "extra": "iterations: 4124\ncpu: 169808.51115421896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 299508.13319053623,
            "unit": "ns/iter",
            "extra": "iterations: 2335\ncpu: 299482.9122055704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 75799.8265139098,
            "unit": "ns/iter",
            "extra": "iterations: 9165\ncpu: 75793.98799781897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 75624.77630157424,
            "unit": "ns/iter",
            "extra": "iterations: 9258\ncpu: 75620.8036292925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 75994.99212852523,
            "unit": "ns/iter",
            "extra": "iterations: 9274\ncpu: 75993.70282510263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 145023.6982187225,
            "unit": "ns/iter",
            "extra": "iterations: 4828\ncpu: 145019.42833471615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 140114.66613355486,
            "unit": "ns/iter",
            "extra": "iterations: 5002\ncpu: 140108.33666533552 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 47433.587601623796,
            "unit": "ns/iter",
            "extra": "iterations: 14760\ncpu: 47433.07588075829 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 234846.19294119795,
            "unit": "ns/iter",
            "extra": "iterations: 2975\ncpu: 234842.6554621859 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 186241.15053191362,
            "unit": "ns/iter",
            "extra": "iterations: 3760\ncpu: 186234.86702127891 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 184304.92528283191,
            "unit": "ns/iter",
            "extra": "iterations: 3801\ncpu: 184294.58037358554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 186808.0074587063,
            "unit": "ns/iter",
            "extra": "iterations: 3754\ncpu: 186798.5881726157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 338688.0869565052,
            "unit": "ns/iter",
            "extra": "iterations: 2070\ncpu: 338659.2270531385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1303374.0651767326,
            "unit": "ns/iter",
            "extra": "iterations: 537\ncpu: 1303299.2551210478 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 1090429.781931393,
            "unit": "ns/iter",
            "extra": "iterations: 642\ncpu: 1090371.4953271009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 1080394.8533950313,
            "unit": "ns/iter",
            "extra": "iterations: 648\ncpu: 1080354.320987642 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 1076642.8325653756,
            "unit": "ns/iter",
            "extra": "iterations: 651\ncpu: 1076623.041474658 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 699962.7015967869,
            "unit": "ns/iter",
            "extra": "iterations: 1002\ncpu: 699918.1636726552 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 1067699.882621922,
            "unit": "ns/iter",
            "extra": "iterations: 656\ncpu: 1067666.4634146397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 46836.73769286917,
            "unit": "ns/iter",
            "extra": "iterations: 14971\ncpu: 46832.155500634246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 230999.61932935545,
            "unit": "ns/iter",
            "extra": "iterations: 3042\ncpu: 230988.9217619984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 186767.89176217117,
            "unit": "ns/iter",
            "extra": "iterations: 3751\ncpu: 186755.53185817046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 183993.50170737633,
            "unit": "ns/iter",
            "extra": "iterations: 3807\ncpu: 183983.03125820623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 183646.2586659593,
            "unit": "ns/iter",
            "extra": "iterations: 3808\ncpu: 183633.79726890966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 334875.89360687125,
            "unit": "ns/iter",
            "extra": "iterations: 2096\ncpu: 334856.9656488543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1292976.6462963033,
            "unit": "ns/iter",
            "extra": "iterations: 540\ncpu: 1292901.4814814997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 1081930.4775889479,
            "unit": "ns/iter",
            "extra": "iterations: 647\ncpu: 1081915.9196290544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 1070639.4189601159,
            "unit": "ns/iter",
            "extra": "iterations: 654\ncpu: 1070627.064220184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 1073343.3738461756,
            "unit": "ns/iter",
            "extra": "iterations: 650\ncpu: 1073350.1538461628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 699042.0507462438,
            "unit": "ns/iter",
            "extra": "iterations: 1005\ncpu: 699014.5273631831 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 1063026.8861913283,
            "unit": "ns/iter",
            "extra": "iterations: 659\ncpu: 1062943.0955993931 ns\nthreads: 1"
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
        "date": 1705959256747,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 18105.27685875775,
            "unit": "ns/iter",
            "extra": "iterations: 38749\ncpu: 18104.126558104726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 150130.8924635625,
            "unit": "ns/iter",
            "extra": "iterations: 5626\ncpu: 150125.32883043017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 282693.28687987936,
            "unit": "ns/iter",
            "extra": "iterations: 3064\ncpu: 282687.43472584867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 413167.7595785201,
            "unit": "ns/iter",
            "extra": "iterations: 2088\ncpu: 413162.9310344827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 544823.9880653478,
            "unit": "ns/iter",
            "extra": "iterations: 1592\ncpu: 544800.2512562813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 544967.5509999564,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 544950.2000000007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 651383.4267147947,
            "unit": "ns/iter",
            "extra": "iterations: 1385\ncpu: 651351.9133574005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 756404.6987754966,
            "unit": "ns/iter",
            "extra": "iterations: 1225\ncpu: 756380.8163265305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 862463.1541318594,
            "unit": "ns/iter",
            "extra": "iterations: 1077\ncpu: 862431.8477251636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 14538.404487139444,
            "unit": "ns/iter",
            "extra": "iterations: 48093\ncpu: 14537.92651737258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 12072.394671954728,
            "unit": "ns/iter",
            "extra": "iterations: 57995\ncpu: 12072.216570393999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 11989.605032654035,
            "unit": "ns/iter",
            "extra": "iterations: 58339\ncpu: 11989.643291794515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 12026.640483806505,
            "unit": "ns/iter",
            "extra": "iterations: 57213\ncpu: 12026.359393844059 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 20248.123529581906,
            "unit": "ns/iter",
            "extra": "iterations: 34599\ncpu: 20246.556258851448 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 55026.42999999807,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 55024.44000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 293599.09849005216,
            "unit": "ns/iter",
            "extra": "iterations: 2914\ncpu: 293582.4296499659 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 233411.88831097307,
            "unit": "ns/iter",
            "extra": "iterations: 3653\ncpu: 233406.51519299258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 238095.67168340107,
            "unit": "ns/iter",
            "extra": "iterations: 3588\ncpu: 238085.36789297668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 235635.72360420274,
            "unit": "ns/iter",
            "extra": "iterations: 3618\ncpu: 235632.86346047497 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 501317.55400002474,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 501307.19999999943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4608036.15346512,
            "unit": "ns/iter",
            "extra": "iterations: 202\ncpu: 4607954.950495051 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3709833.5378487604,
            "unit": "ns/iter",
            "extra": "iterations: 251\ncpu: 3709678.88446215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3708795.556000041,
            "unit": "ns/iter",
            "extra": "iterations: 250\ncpu: 3708699.2000000123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3643427.627450953,
            "unit": "ns/iter",
            "extra": "iterations: 255\ncpu: 3643362.745098035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 2095846.365079334,
            "unit": "ns/iter",
            "extra": "iterations: 441\ncpu: 2095764.399092973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3578994.2625481663,
            "unit": "ns/iter",
            "extra": "iterations: 259\ncpu: 3578866.795366797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 13414510.101265736,
            "unit": "ns/iter",
            "extra": "iterations: 79\ncpu: 13413746.83544303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5794984.880000128,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5794713.999999992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 17253987.737704534,
            "unit": "ns/iter",
            "extra": "iterations: 61\ncpu: 17253162.29508201 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 60824.62995467779,
            "unit": "ns/iter",
            "extra": "iterations: 13901\ncpu: 60821.991223652956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 341938.0729083802,
            "unit": "ns/iter",
            "extra": "iterations: 2510\ncpu: 341915.4980079681 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 266848.6488502187,
            "unit": "ns/iter",
            "extra": "iterations: 3218\ncpu: 266842.1068986957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 270451.30327867874,
            "unit": "ns/iter",
            "extra": "iterations: 3172\ncpu: 270434.96216897864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 278543.6507005661,
            "unit": "ns/iter",
            "extra": "iterations: 3069\ncpu: 278535.1906158356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 502894.88800001435,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 502846.80000000034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4685293.333333025,
            "unit": "ns/iter",
            "extra": "iterations: 198\ncpu: 4685053.030303043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3788033.0326534393,
            "unit": "ns/iter",
            "extra": "iterations: 245\ncpu: 3787819.183673482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3760709.493927268,
            "unit": "ns/iter",
            "extra": "iterations: 247\ncpu: 3760593.9271255075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3697798.5298803058,
            "unit": "ns/iter",
            "extra": "iterations: 251\ncpu: 3697723.904382478 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 2131744.501149564,
            "unit": "ns/iter",
            "extra": "iterations: 435\ncpu: 2131661.839080456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3624463.988326736,
            "unit": "ns/iter",
            "extra": "iterations: 257\ncpu: 3624344.3579766653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 13568310.089742506,
            "unit": "ns/iter",
            "extra": "iterations: 78\ncpu: 13567565.384615403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 6031357.850000632,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6031170.999999987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 53337.78259999917,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 53338.00000000011 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 290559.76330958994,
            "unit": "ns/iter",
            "extra": "iterations: 2949\ncpu: 290546.7955239063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 227644.82287232598,
            "unit": "ns/iter",
            "extra": "iterations: 3760\ncpu: 227633.85638297908 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 234112.67504097163,
            "unit": "ns/iter",
            "extra": "iterations: 3662\ncpu: 234108.11032222968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 235784.82608695206,
            "unit": "ns/iter",
            "extra": "iterations: 3634\ncpu: 235782.44358833221 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 582984.5726609268,
            "unit": "ns/iter",
            "extra": "iterations: 1507\ncpu: 582980.2919708017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 4651742.16582964,
            "unit": "ns/iter",
            "extra": "iterations: 199\ncpu: 4651671.356783893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3720208.1880000154,
            "unit": "ns/iter",
            "extra": "iterations: 250\ncpu: 3720175.2 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3713879.210317647,
            "unit": "ns/iter",
            "extra": "iterations: 252\ncpu: 3713820.23809524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3660543.8425196134,
            "unit": "ns/iter",
            "extra": "iterations: 254\ncpu: 3660468.8976377887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 2109478.7573696305,
            "unit": "ns/iter",
            "extra": "iterations: 441\ncpu: 2109458.049886616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3615132.9031006102,
            "unit": "ns/iter",
            "extra": "iterations: 258\ncpu: 3615076.744186041 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6874.113150806213,
            "unit": "ns/iter",
            "extra": "iterations: 102085\ncpu: 6874.068668266639 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 39701.23204137385,
            "unit": "ns/iter",
            "extra": "iterations: 17596\ncpu: 39700.84110025021 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 30550.862189269174,
            "unit": "ns/iter",
            "extra": "iterations: 22930\ncpu: 30550.941997383394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 30764.26976171734,
            "unit": "ns/iter",
            "extra": "iterations: 22746\ncpu: 30763.681526422348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 24238.176781824714,
            "unit": "ns/iter",
            "extra": "iterations: 28917\ncpu: 24236.04454127344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 171297.88393731136,
            "unit": "ns/iter",
            "extra": "iterations: 4084\ncpu: 171296.47404505403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 313335.23758388427,
            "unit": "ns/iter",
            "extra": "iterations: 2235\ncpu: 313336.01789709064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 77778.90963989431,
            "unit": "ns/iter",
            "extra": "iterations: 8942\ncpu: 77777.49944084018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 77747.48586944724,
            "unit": "ns/iter",
            "extra": "iterations: 9023\ncpu: 77746.0489859246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 77661.77681545347,
            "unit": "ns/iter",
            "extra": "iterations: 9006\ncpu: 77657.62824783499 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 142346.14541023734,
            "unit": "ns/iter",
            "extra": "iterations: 4924\ncpu: 142343.35905767878 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 144701.88973775157,
            "unit": "ns/iter",
            "extra": "iterations: 4843\ncpu: 144702.3745612218 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 48014.431446370705,
            "unit": "ns/iter",
            "extra": "iterations: 14609\ncpu: 48013.5122184951 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 237934.3010533775,
            "unit": "ns/iter",
            "extra": "iterations: 2943\ncpu: 237927.72680937665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 190927.1331177577,
            "unit": "ns/iter",
            "extra": "iterations: 3711\ncpu: 190371.8674211792 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 189490.23665765827,
            "unit": "ns/iter",
            "extra": "iterations: 3710\ncpu: 189485.41778975446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 191171.3019747375,
            "unit": "ns/iter",
            "extra": "iterations: 3646\ncpu: 191165.82556225793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 344690.5302509027,
            "unit": "ns/iter",
            "extra": "iterations: 2033\ncpu: 344677.96360058506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1350961.0289575907,
            "unit": "ns/iter",
            "extra": "iterations: 518\ncpu: 1350932.6254826346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 1127464.2903225825,
            "unit": "ns/iter",
            "extra": "iterations: 620\ncpu: 1127451.2903225839 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 1120667.7964744417,
            "unit": "ns/iter",
            "extra": "iterations: 624\ncpu: 1120627.8846153931 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 1105935.9289099392,
            "unit": "ns/iter",
            "extra": "iterations: 633\ncpu: 1105916.1137440673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 718327.9387754041,
            "unit": "ns/iter",
            "extra": "iterations: 980\ncpu: 718305.9183673476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 1096361.180533687,
            "unit": "ns/iter",
            "extra": "iterations: 637\ncpu: 1096352.5902668808 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 47585.15077048477,
            "unit": "ns/iter",
            "extra": "iterations: 14731\ncpu: 47584.59031973362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 233444.12716954006,
            "unit": "ns/iter",
            "extra": "iterations: 2996\ncpu: 233439.4859813118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 190001.17779586368,
            "unit": "ns/iter",
            "extra": "iterations: 3684\ncpu: 189995.84690553448 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 187793.8526570166,
            "unit": "ns/iter",
            "extra": "iterations: 3726\ncpu: 187792.78046162133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 188728.06690139865,
            "unit": "ns/iter",
            "extra": "iterations: 3692\ncpu: 188728.54821235122 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 339202.59658538183,
            "unit": "ns/iter",
            "extra": "iterations: 2050\ncpu: 339192.8292682925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1347376.6096152617,
            "unit": "ns/iter",
            "extra": "iterations: 520\ncpu: 1347365.1923076839 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 1123897.9903380724,
            "unit": "ns/iter",
            "extra": "iterations: 621\ncpu: 1123864.895330097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 1108894.5759492884,
            "unit": "ns/iter",
            "extra": "iterations: 632\ncpu: 1108876.5822784652 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 1104894.9526813917,
            "unit": "ns/iter",
            "extra": "iterations: 634\ncpu: 1104880.914826506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 713280.2640163233,
            "unit": "ns/iter",
            "extra": "iterations: 981\ncpu: 713234.1488277236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 1100740.858712745,
            "unit": "ns/iter",
            "extra": "iterations: 637\ncpu: 1100743.956043957 ns\nthreads: 1"
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
        "date": 1705961331052,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 17988.215710978802,
            "unit": "ns/iter",
            "extra": "iterations: 38890\ncpu: 17986.202108511185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 146519.36595522976,
            "unit": "ns/iter",
            "extra": "iterations: 5763\ncpu: 146513.2743362832 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 277285.2727564084,
            "unit": "ns/iter",
            "extra": "iterations: 3120\ncpu: 277259.13461538474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 405211.45637898915,
            "unit": "ns/iter",
            "extra": "iterations: 2132\ncpu: 405186.4915572234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 534888.3762315332,
            "unit": "ns/iter",
            "extra": "iterations: 1624\ncpu: 534854.6798029554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 538727.4130000037,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 538689.4 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 641414.2890000107,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 641371.1000000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 737552.4572342247,
            "unit": "ns/iter",
            "extra": "iterations: 1251\ncpu: 737498.8808952839 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 847826.494525547,
            "unit": "ns/iter",
            "extra": "iterations: 1096\ncpu: 846341.0583941613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 14508.84905894772,
            "unit": "ns/iter",
            "extra": "iterations: 48297\ncpu: 14508.574031513352 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 12185.661530157187,
            "unit": "ns/iter",
            "extra": "iterations: 57432\ncpu: 12185.224265217974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 12070.784428240817,
            "unit": "ns/iter",
            "extra": "iterations: 57874\ncpu: 12070.459964751026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 12023.998199155947,
            "unit": "ns/iter",
            "extra": "iterations: 58306\ncpu: 12023.67509347237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 20319.70062297956,
            "unit": "ns/iter",
            "extra": "iterations: 34672\ncpu: 20318.26257498846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 60505.878899999734,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 60504.07 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 301219.38808602124,
            "unit": "ns/iter",
            "extra": "iterations: 2837\ncpu: 301207.8251674309 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 241601.22514867896,
            "unit": "ns/iter",
            "extra": "iterations: 3531\ncpu: 241594.8739733788 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 240840.20907016515,
            "unit": "ns/iter",
            "extra": "iterations: 3506\ncpu: 240828.37992013677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 241867.70514998038,
            "unit": "ns/iter",
            "extra": "iterations: 3534\ncpu: 241860.92246745832 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 518885.3770000037,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 518864.1999999995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4575718.009803887,
            "unit": "ns/iter",
            "extra": "iterations: 204\ncpu: 4575391.6666666595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3688198.6877470245,
            "unit": "ns/iter",
            "extra": "iterations: 253\ncpu: 3687982.2134387307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3621319.120622426,
            "unit": "ns/iter",
            "extra": "iterations: 257\ncpu: 3621092.2178988275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3635208.7372548855,
            "unit": "ns/iter",
            "extra": "iterations: 255\ncpu: 3634877.6470588176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 2081236.511261198,
            "unit": "ns/iter",
            "extra": "iterations: 444\ncpu: 2081087.6126126158 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3544644.482758703,
            "unit": "ns/iter",
            "extra": "iterations: 261\ncpu: 3544392.7203065236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 13209928.549999718,
            "unit": "ns/iter",
            "extra": "iterations: 80\ncpu: 13209317.500000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5959144.660000106,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5958642.000000012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 16829704.126984153,
            "unit": "ns/iter",
            "extra": "iterations: 63\ncpu: 16828655.555555552 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 63934.592330296415,
            "unit": "ns/iter",
            "extra": "iterations: 13273\ncpu: 63931.16853763291 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 338771.00788021926,
            "unit": "ns/iter",
            "extra": "iterations: 2538\ncpu: 338753.86130811594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 266195.08255743264,
            "unit": "ns/iter",
            "extra": "iterations: 3222\ncpu: 266186.49906890176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 272078.58769425476,
            "unit": "ns/iter",
            "extra": "iterations: 3153\ncpu: 272059.72090072883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 271558.9914502798,
            "unit": "ns/iter",
            "extra": "iterations: 3158\ncpu: 271547.08676377544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 511642.38999996317,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 511617.99999999854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4610130.935643633,
            "unit": "ns/iter",
            "extra": "iterations: 202\ncpu: 4609821.287128716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3734995.7349397666,
            "unit": "ns/iter",
            "extra": "iterations: 249\ncpu: 3734643.7751003946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3679349.8214287576,
            "unit": "ns/iter",
            "extra": "iterations: 252\ncpu: 3679154.7619047537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3719673.839999814,
            "unit": "ns/iter",
            "extra": "iterations: 250\ncpu: 3719445.200000024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 2115356.3538812757,
            "unit": "ns/iter",
            "extra": "iterations: 438\ncpu: 2115182.6484018164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3599969.647286895,
            "unit": "ns/iter",
            "extra": "iterations: 258\ncpu: 3599727.1317829336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 13464098.999999713,
            "unit": "ns/iter",
            "extra": "iterations: 79\ncpu: 13463193.670886029 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5883808.940000108,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5883199.000000019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 57455.929600001815,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 57454.110000000466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 302093.30876703374,
            "unit": "ns/iter",
            "extra": "iterations: 2863\ncpu: 302079.9511002436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 235950.7352779296,
            "unit": "ns/iter",
            "extra": "iterations: 3634\ncpu: 235943.78095762277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 239867.10267856877,
            "unit": "ns/iter",
            "extra": "iterations: 3584\ncpu: 239851.08816964345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 239089.7966480401,
            "unit": "ns/iter",
            "extra": "iterations: 3580\ncpu: 239072.59776536256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 609635.2151898486,
            "unit": "ns/iter",
            "extra": "iterations: 1422\ncpu: 609605.2039381156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 4600014.059406022,
            "unit": "ns/iter",
            "extra": "iterations: 202\ncpu: 4599597.0297029475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3697049.2788844896,
            "unit": "ns/iter",
            "extra": "iterations: 251\ncpu: 3696799.9999999967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3640653.31372549,
            "unit": "ns/iter",
            "extra": "iterations: 255\ncpu: 3640374.5098039107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3649500.478431322,
            "unit": "ns/iter",
            "extra": "iterations: 255\ncpu: 3649202.3529411745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 2106003.9954648535,
            "unit": "ns/iter",
            "extra": "iterations: 441\ncpu: 2105887.981859399 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3568983.9578544204,
            "unit": "ns/iter",
            "extra": "iterations: 261\ncpu: 3568737.5478927237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 7040.816174701473,
            "unit": "ns/iter",
            "extra": "iterations: 99736\ncpu: 7040.485882730413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 39889.63238225354,
            "unit": "ns/iter",
            "extra": "iterations: 17559\ncpu: 39887.40247166701 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 32068.293167359894,
            "unit": "ns/iter",
            "extra": "iterations: 21851\ncpu: 32065.82765090842 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 30098.071247476168,
            "unit": "ns/iter",
            "extra": "iterations: 23271\ncpu: 30096.068067551798 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 24653.466765036483,
            "unit": "ns/iter",
            "extra": "iterations: 28464\ncpu: 24652.31520517147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 180096.23061066263,
            "unit": "ns/iter",
            "extra": "iterations: 3881\ncpu: 180087.24555526898 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 279951.4426229501,
            "unit": "ns/iter",
            "extra": "iterations: 2501\ncpu: 279940.90363854694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 78269.8418344512,
            "unit": "ns/iter",
            "extra": "iterations: 8940\ncpu: 78263.50111856825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 77299.40706012517,
            "unit": "ns/iter",
            "extra": "iterations: 9065\ncpu: 77295.5874241582 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 77621.18371422251,
            "unit": "ns/iter",
            "extra": "iterations: 9014\ncpu: 77614.88795207329 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 140711.98933172712,
            "unit": "ns/iter",
            "extra": "iterations: 4968\ncpu: 140703.78421899976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 143498.48176230403,
            "unit": "ns/iter",
            "extra": "iterations: 4880\ncpu: 143490.79918032797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 47187.17380968634,
            "unit": "ns/iter",
            "extra": "iterations: 14723\ncpu: 47185.7977314405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 233800.6465287047,
            "unit": "ns/iter",
            "extra": "iterations: 2996\ncpu: 233791.6221628852 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 187288.979662827,
            "unit": "ns/iter",
            "extra": "iterations: 3737\ncpu: 187285.87101953448 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 186422.01672417924,
            "unit": "ns/iter",
            "extra": "iterations: 3767\ncpu: 186416.1932572333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 188031.3940939732,
            "unit": "ns/iter",
            "extra": "iterations: 3725\ncpu: 188028.16107382422 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 335782.0765550266,
            "unit": "ns/iter",
            "extra": "iterations: 2090\ncpu: 335767.32057416154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1318651.6911487554,
            "unit": "ns/iter",
            "extra": "iterations: 531\ncpu: 1318613.747645949 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 1109121.9223455428,
            "unit": "ns/iter",
            "extra": "iterations: 631\ncpu: 1109090.4912836975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 1096308.6056337804,
            "unit": "ns/iter",
            "extra": "iterations: 639\ncpu: 1096203.1298904498 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 1099680.075590526,
            "unit": "ns/iter",
            "extra": "iterations: 635\ncpu: 1099602.3622047368 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 699108.6686686847,
            "unit": "ns/iter",
            "extra": "iterations: 999\ncpu: 699072.3723723725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 1081347.1302325588,
            "unit": "ns/iter",
            "extra": "iterations: 645\ncpu: 1081289.1472868114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 47543.93531527685,
            "unit": "ns/iter",
            "extra": "iterations: 14733\ncpu: 47540.534853729456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 230034.67938177992,
            "unit": "ns/iter",
            "extra": "iterations: 3041\ncpu: 230020.12495889416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 188543.58337814748,
            "unit": "ns/iter",
            "extra": "iterations: 3718\ncpu: 188534.05056482184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 185795.23484245496,
            "unit": "ns/iter",
            "extra": "iterations: 3777\ncpu: 185785.33227428942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 187830.82841032487,
            "unit": "ns/iter",
            "extra": "iterations: 3724\ncpu: 187821.75080558704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 332238.0270270362,
            "unit": "ns/iter",
            "extra": "iterations: 2109\ncpu: 332213.60834519245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1311316.9625468173,
            "unit": "ns/iter",
            "extra": "iterations: 534\ncpu: 1311248.6891385836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 1101343.3562499841,
            "unit": "ns/iter",
            "extra": "iterations: 640\ncpu: 1101243.437499999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 1087017.0264384828,
            "unit": "ns/iter",
            "extra": "iterations: 643\ncpu: 1086913.9968895882 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 1081789.978361569,
            "unit": "ns/iter",
            "extra": "iterations: 647\ncpu: 1081681.4528593644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 701416.2848544873,
            "unit": "ns/iter",
            "extra": "iterations: 997\ncpu: 701354.5636910783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 1076393.1571648982,
            "unit": "ns/iter",
            "extra": "iterations: 649\ncpu: 1076348.0739599434 ns\nthreads: 1"
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
        "date": 1705962757183,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 17447.8091257381,
            "unit": "ns/iter",
            "extra": "iterations: 40194\ncpu: 17447.039359108323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 142664.82807195894,
            "unit": "ns/iter",
            "extra": "iterations: 5892\ncpu: 142658.91038696538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 266676.8873196202,
            "unit": "ns/iter",
            "extra": "iterations: 3257\ncpu: 266666.1344795824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 390951.1965579761,
            "unit": "ns/iter",
            "extra": "iterations: 2208\ncpu: 390934.6920289855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 516094.2264600255,
            "unit": "ns/iter",
            "extra": "iterations: 1678\ncpu: 516065.9117997615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 515697.5600000351,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 515668.8999999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 614403.1719999248,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 614368.9000000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 710629.3248456535,
            "unit": "ns/iter",
            "extra": "iterations: 1296\ncpu: 710614.6604938273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 807455.9894829292,
            "unit": "ns/iter",
            "extra": "iterations: 1141\ncpu: 807419.1936897459 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 13924.812059560549,
            "unit": "ns/iter",
            "extra": "iterations: 50234\ncpu: 13924.001672174223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 11721.679417060332,
            "unit": "ns/iter",
            "extra": "iterations: 59972\ncpu: 11720.778029747202 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 11681.09376780088,
            "unit": "ns/iter",
            "extra": "iterations: 59690\ncpu: 11681.149271234704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 11692.41470145594,
            "unit": "ns/iter",
            "extra": "iterations: 59790\ncpu: 11692.14584378658 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 19874.965090251557,
            "unit": "ns/iter",
            "extra": "iterations: 35291\ncpu: 19873.378481765893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 56819.01649999191,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 56816.14999999987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 302223.73283791257,
            "unit": "ns/iter",
            "extra": "iterations: 2826\ncpu: 302223.63765038934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 242193.41624219748,
            "unit": "ns/iter",
            "extra": "iterations: 3534\ncpu: 242192.10526315763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 240952.89398199873,
            "unit": "ns/iter",
            "extra": "iterations: 3556\ncpu: 240954.24634420645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 241934.06797497038,
            "unit": "ns/iter",
            "extra": "iterations: 3516\ncpu: 241928.12855517684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 527073.6869999836,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 527064.8999999992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4320989.2372091375,
            "unit": "ns/iter",
            "extra": "iterations: 215\ncpu: 4320880.930232553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3497305.87547197,
            "unit": "ns/iter",
            "extra": "iterations: 265\ncpu: 3497103.018867929 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3511398.284091043,
            "unit": "ns/iter",
            "extra": "iterations: 264\ncpu: 3511318.560606057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3477477.366037711,
            "unit": "ns/iter",
            "extra": "iterations: 265\ncpu: 3477384.9056603843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 2003951.396514041,
            "unit": "ns/iter",
            "extra": "iterations: 459\ncpu: 2003875.1633986894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3391270.300366219,
            "unit": "ns/iter",
            "extra": "iterations: 273\ncpu: 3391026.7399267424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 12780064.168675588,
            "unit": "ns/iter",
            "extra": "iterations: 83\ncpu: 12779442.168674719 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5808632.870000565,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5808415.999999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 16558299.656249886,
            "unit": "ns/iter",
            "extra": "iterations: 64\ncpu: 16557693.74999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 64916.96414706562,
            "unit": "ns/iter",
            "extra": "iterations: 13137\ncpu: 64914.272664991964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 339798.8464566933,
            "unit": "ns/iter",
            "extra": "iterations: 2540\ncpu: 339787.08661417407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 275179.7692307802,
            "unit": "ns/iter",
            "extra": "iterations: 3185\ncpu: 275174.34850863396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 276576.8161953575,
            "unit": "ns/iter",
            "extra": "iterations: 3112\ncpu: 276563.2390745508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 272405.01301172696,
            "unit": "ns/iter",
            "extra": "iterations: 3151\ncpu: 272390.28879720706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 526521.4940000079,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 526476.6999999963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4413840.30000011,
            "unit": "ns/iter",
            "extra": "iterations: 210\ncpu: 4413740.476190464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3568493.203064902,
            "unit": "ns/iter",
            "extra": "iterations: 261\ncpu: 3568424.13793105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3553839.7509577004,
            "unit": "ns/iter",
            "extra": "iterations: 261\ncpu: 3553782.7586206794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3537325.7862595315,
            "unit": "ns/iter",
            "extra": "iterations: 262\ncpu: 3537346.183206103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 2064707.368070991,
            "unit": "ns/iter",
            "extra": "iterations: 451\ncpu: 2064579.6008869158 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3440530.6000002786,
            "unit": "ns/iter",
            "extra": "iterations: 270\ncpu: 3440392.5925925844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 13118883.234567504,
            "unit": "ns/iter",
            "extra": "iterations: 81\ncpu: 13118402.469135802 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5782251.33999922,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5781986.999999944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 56685.74570000829,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 56686.089999999465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 293239.6214824732,
            "unit": "ns/iter",
            "extra": "iterations: 2914\ncpu: 293225.703500343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 235260.90543148087,
            "unit": "ns/iter",
            "extra": "iterations: 3627\ncpu: 235246.5122690938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 239507.43730627387,
            "unit": "ns/iter",
            "extra": "iterations: 3549\ncpu: 239499.49281487623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 237308.4519978093,
            "unit": "ns/iter",
            "extra": "iterations: 3604\ncpu: 237294.4228634859 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 610710.4661494372,
            "unit": "ns/iter",
            "extra": "iterations: 1418\ncpu: 610670.0987306072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 4357986.018691522,
            "unit": "ns/iter",
            "extra": "iterations: 214\ncpu: 4357895.327102804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3507944.6830187016,
            "unit": "ns/iter",
            "extra": "iterations: 265\ncpu: 3507711.6981132166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3526113.7680609925,
            "unit": "ns/iter",
            "extra": "iterations: 263\ncpu: 3525949.4296577936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3494118.66165441,
            "unit": "ns/iter",
            "extra": "iterations: 266\ncpu: 3494018.7969924803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 2026098.23580805,
            "unit": "ns/iter",
            "extra": "iterations: 458\ncpu: 2026014.4104803363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3402067.212454439,
            "unit": "ns/iter",
            "extra": "iterations: 273\ncpu: 3402007.3260073215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6909.274189418227,
            "unit": "ns/iter",
            "extra": "iterations: 101532\ncpu: 6909.152779419267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 39268.297762580405,
            "unit": "ns/iter",
            "extra": "iterations: 17833\ncpu: 39268.524645320336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 31309.85095831559,
            "unit": "ns/iter",
            "extra": "iterations: 22383\ncpu: 31309.65911629358 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 29310.47623638041,
            "unit": "ns/iter",
            "extra": "iterations: 23860\ncpu: 29310.268231349495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 22977.23414378018,
            "unit": "ns/iter",
            "extra": "iterations: 30477\ncpu: 22976.805459854917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 177438.6922297998,
            "unit": "ns/iter",
            "extra": "iterations: 3951\ncpu: 177437.15515059518 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 295557.2366316023,
            "unit": "ns/iter",
            "extra": "iterations: 2375\ncpu: 295555.45263157884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 74541.86310978644,
            "unit": "ns/iter",
            "extra": "iterations: 9409\ncpu: 74537.83611435788 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 74250.63092587264,
            "unit": "ns/iter",
            "extra": "iterations: 9429\ncpu: 74245.23279244828 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 74329.7418054457,
            "unit": "ns/iter",
            "extra": "iterations: 9427\ncpu: 74325.35271029966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 149059.76734780584,
            "unit": "ns/iter",
            "extra": "iterations: 4698\ncpu: 149056.06641123715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 137378.87999999052,
            "unit": "ns/iter",
            "extra": "iterations: 5100\ncpu: 137377.8235294124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 46765.47592938975,
            "unit": "ns/iter",
            "extra": "iterations: 14956\ncpu: 46762.76410805034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 226546.43024010022,
            "unit": "ns/iter",
            "extra": "iterations: 3082\ncpu: 226538.12459441775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 182368.59521331353,
            "unit": "ns/iter",
            "extra": "iterations: 3844\ncpu: 182369.64099895867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 181564.6034750909,
            "unit": "ns/iter",
            "extra": "iterations: 3856\ncpu: 181563.22614107828 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 183393.86039812674,
            "unit": "ns/iter",
            "extra": "iterations: 3818\ncpu: 183387.4541644848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 336205.5769971199,
            "unit": "ns/iter",
            "extra": "iterations: 2078\ncpu: 336198.89316650585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1269288.6358694856,
            "unit": "ns/iter",
            "extra": "iterations: 552\ncpu: 1269242.0289855166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 1064164.3521341432,
            "unit": "ns/iter",
            "extra": "iterations: 656\ncpu: 1064136.8902439072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 1057264.5720789123,
            "unit": "ns/iter",
            "extra": "iterations: 659\ncpu: 1057260.3945371762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 1046588.6255707719,
            "unit": "ns/iter",
            "extra": "iterations: 657\ncpu: 1046594.9771689572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 680948.7743191147,
            "unit": "ns/iter",
            "extra": "iterations: 1028\ncpu: 680944.8443579766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 1038454.6127595047,
            "unit": "ns/iter",
            "extra": "iterations: 674\ncpu: 1038460.9792284895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 45924.98509423034,
            "unit": "ns/iter",
            "extra": "iterations: 15229\ncpu: 45925.234749491116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 224262.4097155578,
            "unit": "ns/iter",
            "extra": "iterations: 3129\ncpu: 224258.16554809976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 184825.06126223528,
            "unit": "ns/iter",
            "extra": "iterations: 3787\ncpu: 184821.09849485027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 183768.99529411117,
            "unit": "ns/iter",
            "extra": "iterations: 3825\ncpu: 183762.98039215518 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 182372.35922837205,
            "unit": "ns/iter",
            "extra": "iterations: 3836\ncpu: 182364.2596454643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 334534.62464183813,
            "unit": "ns/iter",
            "extra": "iterations: 2094\ncpu: 334517.76504297374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1261782.683636325,
            "unit": "ns/iter",
            "extra": "iterations: 550\ncpu: 1261712.7272727399 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 1056435.2567976844,
            "unit": "ns/iter",
            "extra": "iterations: 662\ncpu: 1056376.8882175172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 1052893.0195781724,
            "unit": "ns/iter",
            "extra": "iterations: 664\ncpu: 1052853.162650604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 1048543.7912913149,
            "unit": "ns/iter",
            "extra": "iterations: 666\ncpu: 1048524.3243243322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 682006.8370513964,
            "unit": "ns/iter",
            "extra": "iterations: 1031\ncpu: 681985.2570320143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 1039159.9494798821,
            "unit": "ns/iter",
            "extra": "iterations: 673\ncpu: 1039130.3120356527 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}