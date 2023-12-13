window.BENCHMARK_DATA = {
  "lastUpdate": 1702503262649,
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
      }
    ]
  }
}