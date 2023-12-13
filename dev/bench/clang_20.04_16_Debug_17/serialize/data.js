window.BENCHMARK_DATA = {
  "lastUpdate": 1702489605884,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Serialize clang-16 20.04 Debug c++-17": [
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
        "date": 1702489604804,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 7216.519793405966,
            "unit": "ns/iter",
            "extra": "iterations: 97002\ncpu: 7216.32028205604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 64018.497132076176,
            "unit": "ns/iter",
            "extra": "iterations: 13250\ncpu: 64016.92075471699 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 121937.27983825105,
            "unit": "ns/iter",
            "extra": "iterations: 7172\ncpu: 121935.15058561068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 179631.5157154679,
            "unit": "ns/iter",
            "extra": "iterations: 4836\ncpu: 179628.53598014882 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 238055.049532208,
            "unit": "ns/iter",
            "extra": "iterations: 3634\ncpu: 238051.76114474412 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 292923.38707483356,
            "unit": "ns/iter",
            "extra": "iterations: 2940\ncpu: 292914.96598639473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 349810.6838294353,
            "unit": "ns/iter",
            "extra": "iterations: 2486\ncpu: 349799.4368463394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 404809.91239519214,
            "unit": "ns/iter",
            "extra": "iterations: 2146\ncpu: 404791.8452935694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 461579.04352436896,
            "unit": "ns/iter",
            "extra": "iterations: 1884\ncpu: 461567.35668789846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 5511.718497188491,
            "unit": "ns/iter",
            "extra": "iterations: 125711\ncpu: 5511.438935335812 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 4639.317256965724,
            "unit": "ns/iter",
            "extra": "iterations: 150884\ncpu: 4639.098910421258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4701.125891645737,
            "unit": "ns/iter",
            "extra": "iterations: 148882\ncpu: 4701.0384062546145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 4733.629500557581,
            "unit": "ns/iter",
            "extra": "iterations: 148065\ncpu: 4733.514334920482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 8164.669989145425,
            "unit": "ns/iter",
            "extra": "iterations: 85679\ncpu: 8164.588755704423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 27509.70775235023,
            "unit": "ns/iter",
            "extra": "iterations: 29978\ncpu: 27509.680432317007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 111603.5859111056,
            "unit": "ns/iter",
            "extra": "iterations: 7694\ncpu: 111601.66363400035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 91589.92373859824,
            "unit": "ns/iter",
            "extra": "iterations: 9533\ncpu: 91461.65949858395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 90301.78214134122,
            "unit": "ns/iter",
            "extra": "iterations: 9396\ncpu: 90300.85142613885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 90075.35190088282,
            "unit": "ns/iter",
            "extra": "iterations: 9443\ncpu: 90069.9565815951 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 240121.63638859426,
            "unit": "ns/iter",
            "extra": "iterations: 3644\ncpu: 240108.78155872627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 1862174.587525121,
            "unit": "ns/iter",
            "extra": "iterations: 497\ncpu: 1862061.5694164964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1537462.1490064748,
            "unit": "ns/iter",
            "extra": "iterations: 604\ncpu: 1537400.4966887452 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1570719.9477234883,
            "unit": "ns/iter",
            "extra": "iterations: 593\ncpu: 1570678.9207419925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1573279.4628379866,
            "unit": "ns/iter",
            "extra": "iterations: 592\ncpu: 1573220.60810811 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 940613.3572149366,
            "unit": "ns/iter",
            "extra": "iterations: 991\ncpu: 940563.9757820381 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1510213.8441557293,
            "unit": "ns/iter",
            "extra": "iterations: 616\ncpu: 1510169.4805194784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 6322895.440000594,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6322796.9999999795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 3644627.8093385994,
            "unit": "ns/iter",
            "extra": "iterations: 257\ncpu: 3644519.45525292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 8107700.176470236,
            "unit": "ns/iter",
            "extra": "iterations: 136\ncpu: 8107244.117647059 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 26521.28161568024,
            "unit": "ns/iter",
            "extra": "iterations: 31021\ncpu: 26519.780148931364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 118053.784422039,
            "unit": "ns/iter",
            "extra": "iterations: 7241\ncpu: 118048.30824471764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 91897.50833423625,
            "unit": "ns/iter",
            "extra": "iterations: 9299\ncpu: 91892.85944725275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 90957.78309767554,
            "unit": "ns/iter",
            "extra": "iterations: 9336\ncpu: 90952.2707797772 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 93397.16115974003,
            "unit": "ns/iter",
            "extra": "iterations: 9140\ncpu: 93395.24070021919 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 240572.0853658536,
            "unit": "ns/iter",
            "extra": "iterations: 3608\ncpu: 240563.55321507857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 1900522.7995908887,
            "unit": "ns/iter",
            "extra": "iterations: 489\ncpu: 1900486.91206543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1554688.3722870427,
            "unit": "ns/iter",
            "extra": "iterations: 599\ncpu: 1554670.7846410586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1590908.6689420673,
            "unit": "ns/iter",
            "extra": "iterations: 586\ncpu: 1590859.7269624486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1587510.436115813,
            "unit": "ns/iter",
            "extra": "iterations: 587\ncpu: 1587497.1039182327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 940763.8002038378,
            "unit": "ns/iter",
            "extra": "iterations: 981\ncpu: 940718.3486238592 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1523021.7921439682,
            "unit": "ns/iter",
            "extra": "iterations: 611\ncpu: 1523003.9279869115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 6394462.819999944,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6393954.999999992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 3575320.4214558615,
            "unit": "ns/iter",
            "extra": "iterations: 261\ncpu: 3575152.873563217 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 25566.98837354228,
            "unit": "ns/iter",
            "extra": "iterations: 32082\ncpu: 25565.25777694672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 113976.71715692896,
            "unit": "ns/iter",
            "extra": "iterations: 7513\ncpu: 113971.34300545804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 89966.88271733648,
            "unit": "ns/iter",
            "extra": "iterations: 9524\ncpu: 89962.72574548524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 88251.30661841163,
            "unit": "ns/iter",
            "extra": "iterations: 9670\ncpu: 88247.30093071365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 89410.4234827128,
            "unit": "ns/iter",
            "extra": "iterations: 9573\ncpu: 89404.43956962311 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 244779.73958048839,
            "unit": "ns/iter",
            "extra": "iterations: 3671\ncpu: 244763.2252792159 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 1885400.0975608882,
            "unit": "ns/iter",
            "extra": "iterations: 492\ncpu: 1885298.170731707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1556843.4323872856,
            "unit": "ns/iter",
            "extra": "iterations: 599\ncpu: 1556771.9532554278 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1582283.3361486776,
            "unit": "ns/iter",
            "extra": "iterations: 592\ncpu: 1582181.9256756736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1579532.7918781545,
            "unit": "ns/iter",
            "extra": "iterations: 591\ncpu: 1579457.191201356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 940095.1688573944,
            "unit": "ns/iter",
            "extra": "iterations: 989\ncpu: 940052.881698684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1518960.1996726063,
            "unit": "ns/iter",
            "extra": "iterations: 611\ncpu: 1518913.9116202875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 2913.4753237693835,
            "unit": "ns/iter",
            "extra": "iterations: 240758\ncpu: 2913.2689256431504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 13659.577402100229,
            "unit": "ns/iter",
            "extra": "iterations: 51226\ncpu: 13659.053996017628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 11343.84240134762,
            "unit": "ns/iter",
            "extra": "iterations: 61682\ncpu: 11343.088745501054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 10808.386458302059,
            "unit": "ns/iter",
            "extra": "iterations: 64822\ncpu: 10808.389127148235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 9529.747257988422,
            "unit": "ns/iter",
            "extra": "iterations: 73395\ncpu: 9529.515634579966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 55481.29634330292,
            "unit": "ns/iter",
            "extra": "iterations: 12607\ncpu: 55480.74085825322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 123837.02570875459,
            "unit": "ns/iter",
            "extra": "iterations: 5679\ncpu: 123835.19985913039 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 32549.138777600016,
            "unit": "ns/iter",
            "extra": "iterations: 21466\ncpu: 32546.687785334776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 33104.08241472583,
            "unit": "ns/iter",
            "extra": "iterations: 21137\ncpu: 33102.51218242855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 33262.429720212676,
            "unit": "ns/iter",
            "extra": "iterations: 21016\ncpu: 33258.35553863723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 66950.3935335771,
            "unit": "ns/iter",
            "extra": "iterations: 10454\ncpu: 66944.97799885202 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 58752.84232608929,
            "unit": "ns/iter",
            "extra": "iterations: 11917\ncpu: 58748.3343123271 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 18069.551847652125,
            "unit": "ns/iter",
            "extra": "iterations: 38806\ncpu: 18068.458485801126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 89232.49923449905,
            "unit": "ns/iter",
            "extra": "iterations: 7838\ncpu: 89231.41107425425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 70229.36662985913,
            "unit": "ns/iter",
            "extra": "iterations: 9961\ncpu: 70223.25067764272 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 71046.11518165754,
            "unit": "ns/iter",
            "extra": "iterations: 9854\ncpu: 71041.81043231179 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 71899.34283362448,
            "unit": "ns/iter",
            "extra": "iterations: 9719\ncpu: 71896.20331309784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 139504.0617406725,
            "unit": "ns/iter",
            "extra": "iterations: 5021\ncpu: 139502.35012945515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 541040.5863671713,
            "unit": "ns/iter",
            "extra": "iterations: 1291\ncpu: 541029.8218435334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 459758.8509521269,
            "unit": "ns/iter",
            "extra": "iterations: 1523\ncpu: 459747.66907420155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 483079.6761779014,
            "unit": "ns/iter",
            "extra": "iterations: 1507\ncpu: 483067.48506967374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 463580.26892431325,
            "unit": "ns/iter",
            "extra": "iterations: 1506\ncpu: 463574.50199203455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 307552.28388520656,
            "unit": "ns/iter",
            "extra": "iterations: 2265\ncpu: 307531.8322295808 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 453279.2294763484,
            "unit": "ns/iter",
            "extra": "iterations: 1547\ncpu: 453278.86231415113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 18757.84379794021,
            "unit": "ns/iter",
            "extra": "iterations: 37157\ncpu: 18756.25588718161 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 89282.74207107321,
            "unit": "ns/iter",
            "extra": "iterations: 7851\ncpu: 89278.9453572796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 71067.11170916076,
            "unit": "ns/iter",
            "extra": "iterations: 9847\ncpu: 71061.24708032899 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 72058.55271795606,
            "unit": "ns/iter",
            "extra": "iterations: 9750\ncpu: 72054.9025641034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 72537.06678383554,
            "unit": "ns/iter",
            "extra": "iterations: 9673\ncpu: 72537.02057272902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 137618.15187881343,
            "unit": "ns/iter",
            "extra": "iterations: 5083\ncpu: 137608.55793822315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 540331.8701700578,
            "unit": "ns/iter",
            "extra": "iterations: 1294\ncpu: 540309.814528601 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 463400.4622015503,
            "unit": "ns/iter",
            "extra": "iterations: 1508\ncpu: 463360.94164456596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 464472.7141910293,
            "unit": "ns/iter",
            "extra": "iterations: 1508\ncpu: 464471.9496021232 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 462980.0634920799,
            "unit": "ns/iter",
            "extra": "iterations: 1512\ncpu: 462956.5476190544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 309300.77493381646,
            "unit": "ns/iter",
            "extra": "iterations: 2266\ncpu: 309287.46690202627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 453794.37726103596,
            "unit": "ns/iter",
            "extra": "iterations: 1548\ncpu: 453762.919896635 ns\nthreads: 1"
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
        "date": 1702489604804,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 7216.519793405966,
            "unit": "ns/iter",
            "extra": "iterations: 97002\ncpu: 7216.32028205604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 64018.497132076176,
            "unit": "ns/iter",
            "extra": "iterations: 13250\ncpu: 64016.92075471699 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 121937.27983825105,
            "unit": "ns/iter",
            "extra": "iterations: 7172\ncpu: 121935.15058561068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 179631.5157154679,
            "unit": "ns/iter",
            "extra": "iterations: 4836\ncpu: 179628.53598014882 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 238055.049532208,
            "unit": "ns/iter",
            "extra": "iterations: 3634\ncpu: 238051.76114474412 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 292923.38707483356,
            "unit": "ns/iter",
            "extra": "iterations: 2940\ncpu: 292914.96598639473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 349810.6838294353,
            "unit": "ns/iter",
            "extra": "iterations: 2486\ncpu: 349799.4368463394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 404809.91239519214,
            "unit": "ns/iter",
            "extra": "iterations: 2146\ncpu: 404791.8452935694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 461579.04352436896,
            "unit": "ns/iter",
            "extra": "iterations: 1884\ncpu: 461567.35668789846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 5511.718497188491,
            "unit": "ns/iter",
            "extra": "iterations: 125711\ncpu: 5511.438935335812 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 4639.317256965724,
            "unit": "ns/iter",
            "extra": "iterations: 150884\ncpu: 4639.098910421258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4701.125891645737,
            "unit": "ns/iter",
            "extra": "iterations: 148882\ncpu: 4701.0384062546145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 4733.629500557581,
            "unit": "ns/iter",
            "extra": "iterations: 148065\ncpu: 4733.514334920482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 8164.669989145425,
            "unit": "ns/iter",
            "extra": "iterations: 85679\ncpu: 8164.588755704423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 27509.70775235023,
            "unit": "ns/iter",
            "extra": "iterations: 29978\ncpu: 27509.680432317007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 111603.5859111056,
            "unit": "ns/iter",
            "extra": "iterations: 7694\ncpu: 111601.66363400035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 91589.92373859824,
            "unit": "ns/iter",
            "extra": "iterations: 9533\ncpu: 91461.65949858395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 90301.78214134122,
            "unit": "ns/iter",
            "extra": "iterations: 9396\ncpu: 90300.85142613885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 90075.35190088282,
            "unit": "ns/iter",
            "extra": "iterations: 9443\ncpu: 90069.9565815951 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 240121.63638859426,
            "unit": "ns/iter",
            "extra": "iterations: 3644\ncpu: 240108.78155872627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 1862174.587525121,
            "unit": "ns/iter",
            "extra": "iterations: 497\ncpu: 1862061.5694164964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1537462.1490064748,
            "unit": "ns/iter",
            "extra": "iterations: 604\ncpu: 1537400.4966887452 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1570719.9477234883,
            "unit": "ns/iter",
            "extra": "iterations: 593\ncpu: 1570678.9207419925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1573279.4628379866,
            "unit": "ns/iter",
            "extra": "iterations: 592\ncpu: 1573220.60810811 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 940613.3572149366,
            "unit": "ns/iter",
            "extra": "iterations: 991\ncpu: 940563.9757820381 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1510213.8441557293,
            "unit": "ns/iter",
            "extra": "iterations: 616\ncpu: 1510169.4805194784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 6322895.440000594,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6322796.9999999795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 3644627.8093385994,
            "unit": "ns/iter",
            "extra": "iterations: 257\ncpu: 3644519.45525292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 8107700.176470236,
            "unit": "ns/iter",
            "extra": "iterations: 136\ncpu: 8107244.117647059 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 26521.28161568024,
            "unit": "ns/iter",
            "extra": "iterations: 31021\ncpu: 26519.780148931364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 118053.784422039,
            "unit": "ns/iter",
            "extra": "iterations: 7241\ncpu: 118048.30824471764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 91897.50833423625,
            "unit": "ns/iter",
            "extra": "iterations: 9299\ncpu: 91892.85944725275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 90957.78309767554,
            "unit": "ns/iter",
            "extra": "iterations: 9336\ncpu: 90952.2707797772 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 93397.16115974003,
            "unit": "ns/iter",
            "extra": "iterations: 9140\ncpu: 93395.24070021919 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 240572.0853658536,
            "unit": "ns/iter",
            "extra": "iterations: 3608\ncpu: 240563.55321507857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 1900522.7995908887,
            "unit": "ns/iter",
            "extra": "iterations: 489\ncpu: 1900486.91206543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1554688.3722870427,
            "unit": "ns/iter",
            "extra": "iterations: 599\ncpu: 1554670.7846410586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1590908.6689420673,
            "unit": "ns/iter",
            "extra": "iterations: 586\ncpu: 1590859.7269624486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1587510.436115813,
            "unit": "ns/iter",
            "extra": "iterations: 587\ncpu: 1587497.1039182327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 940763.8002038378,
            "unit": "ns/iter",
            "extra": "iterations: 981\ncpu: 940718.3486238592 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1523021.7921439682,
            "unit": "ns/iter",
            "extra": "iterations: 611\ncpu: 1523003.9279869115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 6394462.819999944,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6393954.999999992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 3575320.4214558615,
            "unit": "ns/iter",
            "extra": "iterations: 261\ncpu: 3575152.873563217 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 25566.98837354228,
            "unit": "ns/iter",
            "extra": "iterations: 32082\ncpu: 25565.25777694672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 113976.71715692896,
            "unit": "ns/iter",
            "extra": "iterations: 7513\ncpu: 113971.34300545804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 89966.88271733648,
            "unit": "ns/iter",
            "extra": "iterations: 9524\ncpu: 89962.72574548524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 88251.30661841163,
            "unit": "ns/iter",
            "extra": "iterations: 9670\ncpu: 88247.30093071365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 89410.4234827128,
            "unit": "ns/iter",
            "extra": "iterations: 9573\ncpu: 89404.43956962311 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 244779.73958048839,
            "unit": "ns/iter",
            "extra": "iterations: 3671\ncpu: 244763.2252792159 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 1885400.0975608882,
            "unit": "ns/iter",
            "extra": "iterations: 492\ncpu: 1885298.170731707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1556843.4323872856,
            "unit": "ns/iter",
            "extra": "iterations: 599\ncpu: 1556771.9532554278 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1582283.3361486776,
            "unit": "ns/iter",
            "extra": "iterations: 592\ncpu: 1582181.9256756736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1579532.7918781545,
            "unit": "ns/iter",
            "extra": "iterations: 591\ncpu: 1579457.191201356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 940095.1688573944,
            "unit": "ns/iter",
            "extra": "iterations: 989\ncpu: 940052.881698684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1518960.1996726063,
            "unit": "ns/iter",
            "extra": "iterations: 611\ncpu: 1518913.9116202875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 2913.4753237693835,
            "unit": "ns/iter",
            "extra": "iterations: 240758\ncpu: 2913.2689256431504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 13659.577402100229,
            "unit": "ns/iter",
            "extra": "iterations: 51226\ncpu: 13659.053996017628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 11343.84240134762,
            "unit": "ns/iter",
            "extra": "iterations: 61682\ncpu: 11343.088745501054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 10808.386458302059,
            "unit": "ns/iter",
            "extra": "iterations: 64822\ncpu: 10808.389127148235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 9529.747257988422,
            "unit": "ns/iter",
            "extra": "iterations: 73395\ncpu: 9529.515634579966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 55481.29634330292,
            "unit": "ns/iter",
            "extra": "iterations: 12607\ncpu: 55480.74085825322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 123837.02570875459,
            "unit": "ns/iter",
            "extra": "iterations: 5679\ncpu: 123835.19985913039 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 32549.138777600016,
            "unit": "ns/iter",
            "extra": "iterations: 21466\ncpu: 32546.687785334776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 33104.08241472583,
            "unit": "ns/iter",
            "extra": "iterations: 21137\ncpu: 33102.51218242855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 33262.429720212676,
            "unit": "ns/iter",
            "extra": "iterations: 21016\ncpu: 33258.35553863723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 66950.3935335771,
            "unit": "ns/iter",
            "extra": "iterations: 10454\ncpu: 66944.97799885202 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 58752.84232608929,
            "unit": "ns/iter",
            "extra": "iterations: 11917\ncpu: 58748.3343123271 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 18069.551847652125,
            "unit": "ns/iter",
            "extra": "iterations: 38806\ncpu: 18068.458485801126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 89232.49923449905,
            "unit": "ns/iter",
            "extra": "iterations: 7838\ncpu: 89231.41107425425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 70229.36662985913,
            "unit": "ns/iter",
            "extra": "iterations: 9961\ncpu: 70223.25067764272 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 71046.11518165754,
            "unit": "ns/iter",
            "extra": "iterations: 9854\ncpu: 71041.81043231179 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 71899.34283362448,
            "unit": "ns/iter",
            "extra": "iterations: 9719\ncpu: 71896.20331309784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 139504.0617406725,
            "unit": "ns/iter",
            "extra": "iterations: 5021\ncpu: 139502.35012945515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 541040.5863671713,
            "unit": "ns/iter",
            "extra": "iterations: 1291\ncpu: 541029.8218435334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 459758.8509521269,
            "unit": "ns/iter",
            "extra": "iterations: 1523\ncpu: 459747.66907420155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 483079.6761779014,
            "unit": "ns/iter",
            "extra": "iterations: 1507\ncpu: 483067.48506967374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 463580.26892431325,
            "unit": "ns/iter",
            "extra": "iterations: 1506\ncpu: 463574.50199203455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 307552.28388520656,
            "unit": "ns/iter",
            "extra": "iterations: 2265\ncpu: 307531.8322295808 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 453279.2294763484,
            "unit": "ns/iter",
            "extra": "iterations: 1547\ncpu: 453278.86231415113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 18757.84379794021,
            "unit": "ns/iter",
            "extra": "iterations: 37157\ncpu: 18756.25588718161 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 89282.74207107321,
            "unit": "ns/iter",
            "extra": "iterations: 7851\ncpu: 89278.9453572796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 71067.11170916076,
            "unit": "ns/iter",
            "extra": "iterations: 9847\ncpu: 71061.24708032899 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 72058.55271795606,
            "unit": "ns/iter",
            "extra": "iterations: 9750\ncpu: 72054.9025641034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 72537.06678383554,
            "unit": "ns/iter",
            "extra": "iterations: 9673\ncpu: 72537.02057272902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 137618.15187881343,
            "unit": "ns/iter",
            "extra": "iterations: 5083\ncpu: 137608.55793822315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 540331.8701700578,
            "unit": "ns/iter",
            "extra": "iterations: 1294\ncpu: 540309.814528601 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 463400.4622015503,
            "unit": "ns/iter",
            "extra": "iterations: 1508\ncpu: 463360.94164456596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 464472.7141910293,
            "unit": "ns/iter",
            "extra": "iterations: 1508\ncpu: 464471.9496021232 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 462980.0634920799,
            "unit": "ns/iter",
            "extra": "iterations: 1512\ncpu: 462956.5476190544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 309300.77493381646,
            "unit": "ns/iter",
            "extra": "iterations: 2266\ncpu: 309287.46690202627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 453794.37726103596,
            "unit": "ns/iter",
            "extra": "iterations: 1548\ncpu: 453762.919896635 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}