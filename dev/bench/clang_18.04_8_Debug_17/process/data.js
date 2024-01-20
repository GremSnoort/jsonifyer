window.BENCHMARK_DATA = {
  "lastUpdate": 1705777746355,
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
      }
    ]
  }
}