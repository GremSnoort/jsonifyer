window.BENCHMARK_DATA = {
  "lastUpdate": 1705963398910,
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
        "date": 1702492228402,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 7618.772714373098,
            "unit": "ns/iter",
            "extra": "iterations: 91616\ncpu: 7618.268643031784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 65644.82565968274,
            "unit": "ns/iter",
            "extra": "iterations: 12923\ncpu: 65640.40083571927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 125154.16317514324,
            "unit": "ns/iter",
            "extra": "iterations: 7017\ncpu: 125150.30639874587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 183907.55593292575,
            "unit": "ns/iter",
            "extra": "iterations: 4711\ncpu: 183898.85374655068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 243195.92312025366,
            "unit": "ns/iter",
            "extra": "iterations: 3551\ncpu: 243186.51084201626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 298911.66250868904,
            "unit": "ns/iter",
            "extra": "iterations: 2886\ncpu: 298900.97020097036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 357934.8247634697,
            "unit": "ns/iter",
            "extra": "iterations: 2431\ncpu: 357916.53640477144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 415835.30229224963,
            "unit": "ns/iter",
            "extra": "iterations: 2094\ncpu: 415831.9484240686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 473090.75995635637,
            "unit": "ns/iter",
            "extra": "iterations: 1833\ncpu: 473087.07037643174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 5391.023632280524,
            "unit": "ns/iter",
            "extra": "iterations: 130034\ncpu: 5390.723195471953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 4616.0530755737545,
            "unit": "ns/iter",
            "extra": "iterations: 151614\ncpu: 4616.036118036584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4552.589079115,
            "unit": "ns/iter",
            "extra": "iterations: 153852\ncpu: 4552.455606686946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 4593.419170852725,
            "unit": "ns/iter",
            "extra": "iterations: 152711\ncpu: 4593.4484090864435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 8390.308770875617,
            "unit": "ns/iter",
            "extra": "iterations: 76526\ncpu: 8390.361445783139 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 26619.18317605051,
            "unit": "ns/iter",
            "extra": "iterations: 30730\ncpu: 26619.349170191974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 110084.95313709519,
            "unit": "ns/iter",
            "extra": "iterations: 7746\ncpu: 110083.062225665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 88296.80976622831,
            "unit": "ns/iter",
            "extra": "iterations: 9625\ncpu: 88297.381818182 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 88900.43817877633,
            "unit": "ns/iter",
            "extra": "iterations: 9576\ncpu: 88900.95029239748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 87898.99876236991,
            "unit": "ns/iter",
            "extra": "iterations: 9696\ncpu: 87899.50495049507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 244233.50856981994,
            "unit": "ns/iter",
            "extra": "iterations: 3559\ncpu: 244229.89603821348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 1924074.0352698308,
            "unit": "ns/iter",
            "extra": "iterations: 482\ncpu: 1924072.1991701233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1578781.4421769497,
            "unit": "ns/iter",
            "extra": "iterations: 588\ncpu: 1578760.3741496631 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1584804.1319797058,
            "unit": "ns/iter",
            "extra": "iterations: 591\ncpu: 1584801.1844331652 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1586029.9318569675,
            "unit": "ns/iter",
            "extra": "iterations: 587\ncpu: 1585996.5928449712 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 945650.3275332198,
            "unit": "ns/iter",
            "extra": "iterations: 977\ncpu: 945655.3735926319 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1544122.7192690517,
            "unit": "ns/iter",
            "extra": "iterations: 602\ncpu: 1544120.9302325596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 6450958.959999298,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6450794.999999979 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 3616293.675675577,
            "unit": "ns/iter",
            "extra": "iterations: 259\ncpu: 3616182.2393822344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 8144438.992536861,
            "unit": "ns/iter",
            "extra": "iterations: 134\ncpu: 8144351.492537309 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 25437.069422050918,
            "unit": "ns/iter",
            "extra": "iterations: 32252\ncpu: 25436.906238372874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 109008.77830429684,
            "unit": "ns/iter",
            "extra": "iterations: 7808\ncpu: 109008.68340163917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 88809.60033444082,
            "unit": "ns/iter",
            "extra": "iterations: 9568\ncpu: 88806.26045150502 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 88028.96919431287,
            "unit": "ns/iter",
            "extra": "iterations: 9706\ncpu: 88029.4869153102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 90772.54968378294,
            "unit": "ns/iter",
            "extra": "iterations: 9329\ncpu: 90772.37646049932 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 248398.93631124587,
            "unit": "ns/iter",
            "extra": "iterations: 3470\ncpu: 248397.26224783887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 1938391.3424368082,
            "unit": "ns/iter",
            "extra": "iterations: 476\ncpu: 1938326.2605041957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1583769.0991451708,
            "unit": "ns/iter",
            "extra": "iterations: 585\ncpu: 1583769.2307692287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1606658.4234079053,
            "unit": "ns/iter",
            "extra": "iterations: 581\ncpu: 1606639.0705679872 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1601387.1595197287,
            "unit": "ns/iter",
            "extra": "iterations: 583\ncpu: 1601379.2452830132 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 967898.2632125072,
            "unit": "ns/iter",
            "extra": "iterations: 965\ncpu: 967876.5803108818 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1559392.4117647933,
            "unit": "ns/iter",
            "extra": "iterations: 595\ncpu: 1559391.092436983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 6522444.199999882,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6522403.9999999665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 3572019.2323651644,
            "unit": "ns/iter",
            "extra": "iterations: 241\ncpu: 3571990.041493783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 24688.37216662589,
            "unit": "ns/iter",
            "extra": "iterations: 33176\ncpu: 24687.940077164178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 110659.88706952547,
            "unit": "ns/iter",
            "extra": "iterations: 7695\ncpu: 110660.51981806367 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 87998.327628869,
            "unit": "ns/iter",
            "extra": "iterations: 9700\ncpu: 87998.19587628884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 86091.20679168499,
            "unit": "ns/iter",
            "extra": "iterations: 9865\ncpu: 86091.70805879387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 88175.6075440584,
            "unit": "ns/iter",
            "extra": "iterations: 9703\ncpu: 88174.05956920533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 243597.96367763742,
            "unit": "ns/iter",
            "extra": "iterations: 3524\ncpu: 243599.43246310903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 1935302.498964826,
            "unit": "ns/iter",
            "extra": "iterations: 483\ncpu: 1935299.9999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1579309.7979626516,
            "unit": "ns/iter",
            "extra": "iterations: 589\ncpu: 1579288.2852292047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1596187.8421955635,
            "unit": "ns/iter",
            "extra": "iterations: 583\ncpu: 1596128.4734133773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1586792.683134593,
            "unit": "ns/iter",
            "extra": "iterations: 587\ncpu: 1586803.4071550334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 953721.1538462287,
            "unit": "ns/iter",
            "extra": "iterations: 975\ncpu: 953713.4358974297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1550511.7662771686,
            "unit": "ns/iter",
            "extra": "iterations: 599\ncpu: 1550510.016694493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 2978.72559686604,
            "unit": "ns/iter",
            "extra": "iterations: 241721\ncpu: 2978.6464560381637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 14219.943459451646,
            "unit": "ns/iter",
            "extra": "iterations: 49239\ncpu: 14220.030869839036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 10783.155268420196,
            "unit": "ns/iter",
            "extra": "iterations: 65010\ncpu: 10783.031841255206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 10922.225155207527,
            "unit": "ns/iter",
            "extra": "iterations: 63947\ncpu: 10922.116752936037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 9600.45739018235,
            "unit": "ns/iter",
            "extra": "iterations: 72894\ncpu: 9600.363541580935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 57524.70595492843,
            "unit": "ns/iter",
            "extra": "iterations: 12158\ncpu: 57523.712781707334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 127258.48898196667,
            "unit": "ns/iter",
            "extra": "iterations: 5491\ncpu: 127257.91294846075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 32993.886612149436,
            "unit": "ns/iter",
            "extra": "iterations: 21034\ncpu: 32993.44394789396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 32889.41136085502,
            "unit": "ns/iter",
            "extra": "iterations: 21266\ncpu: 32889.60782469656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 33303.97567927094,
            "unit": "ns/iter",
            "extra": "iterations: 21052\ncpu: 33303.60060801815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 67040.88711527368,
            "unit": "ns/iter",
            "extra": "iterations: 10462\ncpu: 67040.81437583615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 59567.14557985946,
            "unit": "ns/iter",
            "extra": "iterations: 11753\ncpu: 59565.47264528112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 18989.472112202177,
            "unit": "ns/iter",
            "extra": "iterations: 36862\ncpu: 18988.904562964457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 89120.00548399024,
            "unit": "ns/iter",
            "extra": "iterations: 7841\ncpu: 89116.61777834514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 72430.04832867648,
            "unit": "ns/iter",
            "extra": "iterations: 9663\ncpu: 72427.67256545607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 72243.1831903229,
            "unit": "ns/iter",
            "extra": "iterations: 9673\ncpu: 72243.0683345399 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 73087.85007841226,
            "unit": "ns/iter",
            "extra": "iterations: 9565\ncpu: 73084.40146366869 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 146405.38625889653,
            "unit": "ns/iter",
            "extra": "iterations: 4774\ncpu: 146391.0347716788 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 546305.7350628399,
            "unit": "ns/iter",
            "extra": "iterations: 1272\ncpu: 546280.50314465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 465047.4259136011,
            "unit": "ns/iter",
            "extra": "iterations: 1505\ncpu: 465047.2425249194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 465617.37034568173,
            "unit": "ns/iter",
            "extra": "iterations: 1504\ncpu: 465616.02393617306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 464385.28305645497,
            "unit": "ns/iter",
            "extra": "iterations: 1505\ncpu: 464383.8538206002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 324904.2296395224,
            "unit": "ns/iter",
            "extra": "iterations: 2247\ncpu: 324894.8820649767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 456589.046254065,
            "unit": "ns/iter",
            "extra": "iterations: 1535\ncpu: 456591.79153094755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 18999.891787912977,
            "unit": "ns/iter",
            "extra": "iterations: 36909\ncpu: 18999.701969709033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 91343.53892451519,
            "unit": "ns/iter",
            "extra": "iterations: 7643\ncpu: 91343.21601465491 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 72455.53850919029,
            "unit": "ns/iter",
            "extra": "iterations: 9686\ncpu: 72452.63266570283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 71430.6009806947,
            "unit": "ns/iter",
            "extra": "iterations: 9789\ncpu: 71427.18357339785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 72963.61659216133,
            "unit": "ns/iter",
            "extra": "iterations: 9619\ncpu: 72962.34535814504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 147590.15899492157,
            "unit": "ns/iter",
            "extra": "iterations: 4736\ncpu: 147583.72043918795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 543523.6900858547,
            "unit": "ns/iter",
            "extra": "iterations: 1281\ncpu: 543517.1740827394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 466347.8058706415,
            "unit": "ns/iter",
            "extra": "iterations: 1499\ncpu: 466328.3522348271 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 467801.7553476335,
            "unit": "ns/iter",
            "extra": "iterations: 1496\ncpu: 467792.847593584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 463155.86072607775,
            "unit": "ns/iter",
            "extra": "iterations: 1515\ncpu: 463138.8118811873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 316299.3355855887,
            "unit": "ns/iter",
            "extra": "iterations: 2220\ncpu: 316283.55855856056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 458664.6162409302,
            "unit": "ns/iter",
            "extra": "iterations: 1527\ncpu: 458655.99214145454 ns\nthreads: 1"
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
        "date": 1702503300831,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 7504.593850715886,
            "unit": "ns/iter",
            "extra": "iterations: 93084\ncpu: 7504.558248463754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 65083.43477594133,
            "unit": "ns/iter",
            "extra": "iterations: 13055\ncpu: 65082.28265032555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 123921.73914278646,
            "unit": "ns/iter",
            "extra": "iterations: 7046\ncpu: 123918.08118081183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 182803.68144567966,
            "unit": "ns/iter",
            "extra": "iterations: 4759\ncpu: 182802.56356377393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 241335.25738163933,
            "unit": "ns/iter",
            "extra": "iterations: 3590\ncpu: 241330.91922005574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 296371.7922971137,
            "unit": "ns/iter",
            "extra": "iterations: 2908\ncpu: 296365.2682255846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 355432.5085714277,
            "unit": "ns/iter",
            "extra": "iterations: 2450\ncpu: 355418.40816326544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 415003.11842728476,
            "unit": "ns/iter",
            "extra": "iterations: 2111\ncpu: 414988.72572240705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 472125.4288034802,
            "unit": "ns/iter",
            "extra": "iterations: 1847\ncpu: 472117.21710882534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 5584.410070849393,
            "unit": "ns/iter",
            "extra": "iterations: 125054\ncpu: 5584.126057543137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 4668.080724677998,
            "unit": "ns/iter",
            "extra": "iterations: 149694\ncpu: 4667.951955322191 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4752.810459248323,
            "unit": "ns/iter",
            "extra": "iterations: 147219\ncpu: 4752.719418009905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 4748.492415196186,
            "unit": "ns/iter",
            "extra": "iterations: 147400\ncpu: 4748.278154681137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 8267.325991034519,
            "unit": "ns/iter",
            "extra": "iterations: 84760\ncpu: 8267.084709768753 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 27013.11615059665,
            "unit": "ns/iter",
            "extra": "iterations: 29324\ncpu: 27012.22889101079 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 107497.9969616485,
            "unit": "ns/iter",
            "extra": "iterations: 7899\ncpu: 107488.35295607046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 87070.20747185235,
            "unit": "ns/iter",
            "extra": "iterations: 9770\ncpu: 87065.2814738995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 87354.50235848443,
            "unit": "ns/iter",
            "extra": "iterations: 9752\ncpu: 87348.2670221493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 87430.84974786593,
            "unit": "ns/iter",
            "extra": "iterations: 9717\ncpu: 87428.51703200607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 244025.81568516776,
            "unit": "ns/iter",
            "extra": "iterations: 3532\ncpu: 244009.59796149537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 1932542.014583542,
            "unit": "ns/iter",
            "extra": "iterations: 480\ncpu: 1932408.9583333316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1588394.8251274591,
            "unit": "ns/iter",
            "extra": "iterations: 589\ncpu: 1588240.9168081523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1642207.792920331,
            "unit": "ns/iter",
            "extra": "iterations: 565\ncpu: 1642179.4690265465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1624052.9545453996,
            "unit": "ns/iter",
            "extra": "iterations: 572\ncpu: 1624022.0279720293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 978172.837037005,
            "unit": "ns/iter",
            "extra": "iterations: 945\ncpu: 978168.0423280422 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1630163.1430976943,
            "unit": "ns/iter",
            "extra": "iterations: 594\ncpu: 1630120.707070704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 6570243.910000499,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6569928.000000012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 3829266.991869841,
            "unit": "ns/iter",
            "extra": "iterations: 246\ncpu: 3829150.40650406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 8159069.731342996,
            "unit": "ns/iter",
            "extra": "iterations: 134\ncpu: 8158855.970149255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 25474.791922578428,
            "unit": "ns/iter",
            "extra": "iterations: 32238\ncpu: 25473.413363111904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 108901.05187172652,
            "unit": "ns/iter",
            "extra": "iterations: 7827\ncpu: 108897.73859716412 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 87586.66089612973,
            "unit": "ns/iter",
            "extra": "iterations: 9820\ncpu: 87584.97963340115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 88964.92742359191,
            "unit": "ns/iter",
            "extra": "iterations: 9521\ncpu: 88963.0921121732 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 89829.27678571171,
            "unit": "ns/iter",
            "extra": "iterations: 9520\ncpu: 89826.69117647017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 255282.67897222677,
            "unit": "ns/iter",
            "extra": "iterations: 3386\ncpu: 255278.4997046664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 1956212.0778946816,
            "unit": "ns/iter",
            "extra": "iterations: 475\ncpu: 1956201.052631576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1596741.9416810044,
            "unit": "ns/iter",
            "extra": "iterations: 583\ncpu: 1596671.5265866157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1646431.570671536,
            "unit": "ns/iter",
            "extra": "iterations: 566\ncpu: 1646369.787985864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1629669.0979021022,
            "unit": "ns/iter",
            "extra": "iterations: 572\ncpu: 1629644.4055944039 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 988339.0063762553,
            "unit": "ns/iter",
            "extra": "iterations: 941\ncpu: 988334.9628055269 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1573731.465313098,
            "unit": "ns/iter",
            "extra": "iterations: 591\ncpu: 1573706.09137056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 6686544.739999362,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6686169.000000034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 3697364.8705881326,
            "unit": "ns/iter",
            "extra": "iterations: 255\ncpu: 3697305.098039211 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 24756.87151358683,
            "unit": "ns/iter",
            "extra": "iterations: 33272\ncpu: 24756.74741524405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 107548.81402092133,
            "unit": "ns/iter",
            "extra": "iterations: 7931\ncpu: 107546.55150674548 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 87510.0304526726,
            "unit": "ns/iter",
            "extra": "iterations: 9720\ncpu: 87506.72839506107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 87870.50398180529,
            "unit": "ns/iter",
            "extra": "iterations: 9669\ncpu: 87869.07642982756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 88395.4894413782,
            "unit": "ns/iter",
            "extra": "iterations: 9613\ncpu: 88393.83127015497 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 249600.5046189324,
            "unit": "ns/iter",
            "extra": "iterations: 3464\ncpu: 249594.16859122374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 1935841.6479166844,
            "unit": "ns/iter",
            "extra": "iterations: 480\ncpu: 1935772.2916666672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1595777.3673469964,
            "unit": "ns/iter",
            "extra": "iterations: 588\ncpu: 1595712.585034016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1641095.9702277374,
            "unit": "ns/iter",
            "extra": "iterations: 571\ncpu: 1640990.5429071786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1623422.5468750985,
            "unit": "ns/iter",
            "extra": "iterations: 576\ncpu: 1623272.0486111117 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 983251.8951270445,
            "unit": "ns/iter",
            "extra": "iterations: 944\ncpu: 983155.0847457586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1568953.2797318976,
            "unit": "ns/iter",
            "extra": "iterations: 597\ncpu: 1568870.6867671786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 2923.9974861529286,
            "unit": "ns/iter",
            "extra": "iterations: 238678\ncpu: 2923.9477454981184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 14608.890259428063,
            "unit": "ns/iter",
            "extra": "iterations: 47913\ncpu: 14608.319245298866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 11331.649953755805,
            "unit": "ns/iter",
            "extra": "iterations: 61629\ncpu: 11330.490515828558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 11062.266585620884,
            "unit": "ns/iter",
            "extra": "iterations: 63338\ncpu: 11061.214436831004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 9686.556292859404,
            "unit": "ns/iter",
            "extra": "iterations: 72185\ncpu: 9685.907044399823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 58855.592857145835,
            "unit": "ns/iter",
            "extra": "iterations: 11900\ncpu: 58852.04201680638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 127384.84478976611,
            "unit": "ns/iter",
            "extra": "iterations: 5470\ncpu: 127376.81901279603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 33551.599357745545,
            "unit": "ns/iter",
            "extra": "iterations: 20864\ncpu: 33551.011311349714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 34147.38945826998,
            "unit": "ns/iter",
            "extra": "iterations: 20490\ncpu: 34144.46559297204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 34207.228416473954,
            "unit": "ns/iter",
            "extra": "iterations: 20467\ncpu: 34204.543899936594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 67044.68269784085,
            "unit": "ns/iter",
            "extra": "iterations: 10438\ncpu: 67041.74171297209 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 60923.37831472165,
            "unit": "ns/iter",
            "extra": "iterations: 11464\ncpu: 60918.05652477364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 18364.258986607914,
            "unit": "ns/iter",
            "extra": "iterations: 38307\ncpu: 18362.35152844112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 89881.80202720464,
            "unit": "ns/iter",
            "extra": "iterations: 7794\ncpu: 89873.82602001562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 71348.90403833694,
            "unit": "ns/iter",
            "extra": "iterations: 9806\ncpu: 71342.58617173196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 73168.62412678347,
            "unit": "ns/iter",
            "extra": "iterations: 9591\ncpu: 73163.3614847256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 73773.73337542916,
            "unit": "ns/iter",
            "extra": "iterations: 9504\ncpu: 73770.49663299654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 141191.10606061164,
            "unit": "ns/iter",
            "extra": "iterations: 4950\ncpu: 141173.81818181803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 550340.5670587573,
            "unit": "ns/iter",
            "extra": "iterations: 1275\ncpu: 550294.588235294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 470515.29032255383,
            "unit": "ns/iter",
            "extra": "iterations: 1488\ncpu: 470441.19623655215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 480206.6026081042,
            "unit": "ns/iter",
            "extra": "iterations: 1457\ncpu: 480182.4296499606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 477645.5184426165,
            "unit": "ns/iter",
            "extra": "iterations: 1464\ncpu: 477576.5027322434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 315076.8212517141,
            "unit": "ns/iter",
            "extra": "iterations: 2221\ncpu: 315054.8851868486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 464327.28334439726,
            "unit": "ns/iter",
            "extra": "iterations: 1507\ncpu: 464270.93563371 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 18959.989944983103,
            "unit": "ns/iter",
            "extra": "iterations: 36897\ncpu: 18958.264899585363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 90104.75733880447,
            "unit": "ns/iter",
            "extra": "iterations: 7801\ncpu: 90094.55198051612 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 71539.49984677238,
            "unit": "ns/iter",
            "extra": "iterations: 9789\ncpu: 71538.30830524195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 73499.89538300151,
            "unit": "ns/iter",
            "extra": "iterations: 9530\ncpu: 73490.7135362016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 74147.98838191715,
            "unit": "ns/iter",
            "extra": "iterations: 9468\ncpu: 74141.18081960382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 140704.51112448718,
            "unit": "ns/iter",
            "extra": "iterations: 4989\ncpu: 140690.39887753132 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 544957.6374223111,
            "unit": "ns/iter",
            "extra": "iterations: 1288\ncpu: 544912.6552795027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 466815.5696202731,
            "unit": "ns/iter",
            "extra": "iterations: 1501\ncpu: 466779.813457696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 486094.4188267693,
            "unit": "ns/iter",
            "extra": "iterations: 1466\ncpu: 486051.77353342023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 472518.16655427066,
            "unit": "ns/iter",
            "extra": "iterations: 1483\ncpu: 472457.92312878737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 315501.8281535866,
            "unit": "ns/iter",
            "extra": "iterations: 2188\ncpu: 315495.1553930487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 462262.17095706245,
            "unit": "ns/iter",
            "extra": "iterations: 1515\ncpu: 462218.67986798286 ns\nthreads: 1"
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
        "date": 1705574963369,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 7874.33032336506,
            "unit": "ns/iter",
            "extra": "iterations: 88816\ncpu: 7873.758106647451 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 72524.7381297352,
            "unit": "ns/iter",
            "extra": "iterations: 11731\ncpu: 72523.51888159578 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 137006.18752990064,
            "unit": "ns/iter",
            "extra": "iterations: 6271\ncpu: 136997.41667995532 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 201692.43020540665,
            "unit": "ns/iter",
            "extra": "iterations: 4284\ncpu: 201684.05695611582 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 263994.0158533071,
            "unit": "ns/iter",
            "extra": "iterations: 3217\ncpu: 263977.7743239043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 328995.4488248439,
            "unit": "ns/iter",
            "extra": "iterations: 2638\ncpu: 328985.2918877939 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 394587.70948705124,
            "unit": "ns/iter",
            "extra": "iterations: 2203\ncpu: 394561.7793917386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 458373.1481286377,
            "unit": "ns/iter",
            "extra": "iterations: 1897\ncpu: 458347.49604638934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 519380.74699521874,
            "unit": "ns/iter",
            "extra": "iterations: 1664\ncpu: 519358.41346153815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 5578.235767815465,
            "unit": "ns/iter",
            "extra": "iterations: 125297\ncpu: 5578.187825726071 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 4751.480873241414,
            "unit": "ns/iter",
            "extra": "iterations: 147359\ncpu: 4751.233382419803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4694.840695517569,
            "unit": "ns/iter",
            "extra": "iterations: 149299\ncpu: 4694.379064829642 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 4915.659719360249,
            "unit": "ns/iter",
            "extra": "iterations: 148019\ncpu: 4915.470311243821 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 8306.921158487572,
            "unit": "ns/iter",
            "extra": "iterations: 84524\ncpu: 8306.304718186551 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 26648.8031226571,
            "unit": "ns/iter",
            "extra": "iterations: 30679\ncpu: 26647.12343948636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 107822.60821084902,
            "unit": "ns/iter",
            "extra": "iterations: 7892\ncpu: 107817.00456158127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 89134.86668050583,
            "unit": "ns/iter",
            "extra": "iterations: 9631\ncpu: 89131.76201848198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 86022.52573045933,
            "unit": "ns/iter",
            "extra": "iterations: 9891\ncpu: 86017.71307249008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 87158.08569383537,
            "unit": "ns/iter",
            "extra": "iterations: 9779\ncpu: 87153.4205951529 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 250367.20318841643,
            "unit": "ns/iter",
            "extra": "iterations: 3450\ncpu: 250350.92753623147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 1907543.7119341614,
            "unit": "ns/iter",
            "extra": "iterations: 486\ncpu: 1907475.1028806593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1589529.9675212612,
            "unit": "ns/iter",
            "extra": "iterations: 585\ncpu: 1589435.7264957295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1578277.00000014,
            "unit": "ns/iter",
            "extra": "iterations: 587\ncpu: 1578177.3424190783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1582401.1313993076,
            "unit": "ns/iter",
            "extra": "iterations: 586\ncpu: 1582317.064846417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 976481.1930744863,
            "unit": "ns/iter",
            "extra": "iterations: 953\ncpu: 976446.2749213045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1542706.845514906,
            "unit": "ns/iter",
            "extra": "iterations: 602\ncpu: 1542621.9269102986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 6656838.870000001,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6656112.999999983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 3809698.0731704826,
            "unit": "ns/iter",
            "extra": "iterations: 246\ncpu: 3809499.186991874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 8392483.992248492,
            "unit": "ns/iter",
            "extra": "iterations: 129\ncpu: 8392173.64341086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 25775.35185127124,
            "unit": "ns/iter",
            "extra": "iterations: 31843\ncpu: 25774.038250164795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 108732.6293786848,
            "unit": "ns/iter",
            "extra": "iterations: 7822\ncpu: 108727.5760675023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 88415.49164258679,
            "unit": "ns/iter",
            "extra": "iterations: 9692\ncpu: 88410.07016095804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 87065.81472393431,
            "unit": "ns/iter",
            "extra": "iterations: 9780\ncpu: 87063.90593047073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 91335.27399446907,
            "unit": "ns/iter",
            "extra": "iterations: 9398\ncpu: 91334.63502872984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 255021.75110326597,
            "unit": "ns/iter",
            "extra": "iterations: 3399\ncpu: 255010.56192997997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 1936974.2379960148,
            "unit": "ns/iter",
            "extra": "iterations: 479\ncpu: 1936946.5553235968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1597090.3556700887,
            "unit": "ns/iter",
            "extra": "iterations: 582\ncpu: 1597079.0378006948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1606267.89862555,
            "unit": "ns/iter",
            "extra": "iterations: 582\ncpu: 1606245.1890034298 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1602164.6746987256,
            "unit": "ns/iter",
            "extra": "iterations: 581\ncpu: 1602125.8175559433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 971631.5142554897,
            "unit": "ns/iter",
            "extra": "iterations: 947\ncpu: 971617.8458289339 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1560230.4519394056,
            "unit": "ns/iter",
            "extra": "iterations: 593\ncpu: 1560221.5851602058 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 6710599.449999108,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6710028.000000037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 4094882.673729024,
            "unit": "ns/iter",
            "extra": "iterations: 236\ncpu: 4094719.4915254246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 25120.565190895246,
            "unit": "ns/iter",
            "extra": "iterations: 32819\ncpu: 25119.91224595502 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 110506.51321387406,
            "unit": "ns/iter",
            "extra": "iterations: 7757\ncpu: 110504.30578832029 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 88301.51223558931,
            "unit": "ns/iter",
            "extra": "iterations: 9644\ncpu: 88299.09788469525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 85410.15267021416,
            "unit": "ns/iter",
            "extra": "iterations: 9943\ncpu: 85407.50276576533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 88526.30222268218,
            "unit": "ns/iter",
            "extra": "iterations: 9718\ncpu: 88524.99485490851 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 251888.8559420109,
            "unit": "ns/iter",
            "extra": "iterations: 3450\ncpu: 251886.78260869448 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 1940828.9853557823,
            "unit": "ns/iter",
            "extra": "iterations: 478\ncpu: 1940768.6192468544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1608299.4965398652,
            "unit": "ns/iter",
            "extra": "iterations: 578\ncpu: 1608250.3460207689 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1604222.3453607606,
            "unit": "ns/iter",
            "extra": "iterations: 582\ncpu: 1604185.738831617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1600178.1032701633,
            "unit": "ns/iter",
            "extra": "iterations: 581\ncpu: 1600153.8726333922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 973394.8029504981,
            "unit": "ns/iter",
            "extra": "iterations: 949\ncpu: 973364.5943097948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1568009.1989880102,
            "unit": "ns/iter",
            "extra": "iterations: 593\ncpu: 1567997.6391231052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 2975.5188786598515,
            "unit": "ns/iter",
            "extra": "iterations: 235504\ncpu: 2975.4530708607867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 14559.610266752246,
            "unit": "ns/iter",
            "extra": "iterations: 48097\ncpu: 14559.63989438006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 11297.961699175703,
            "unit": "ns/iter",
            "extra": "iterations: 61983\ncpu: 11297.636448703597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 11531.385019602252,
            "unit": "ns/iter",
            "extra": "iterations: 60706\ncpu: 11530.80255658421 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 9643.14020519165,
            "unit": "ns/iter",
            "extra": "iterations: 72615\ncpu: 9642.478826688759 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 58905.52117181012,
            "unit": "ns/iter",
            "extra": "iterations: 11879\ncpu: 58903.36728680898 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 129838.58266986023,
            "unit": "ns/iter",
            "extra": "iterations: 5401\ncpu: 129833.67894834308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 33821.42015181332,
            "unit": "ns/iter",
            "extra": "iterations: 20683\ncpu: 33818.570806942866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 33840.5162568207,
            "unit": "ns/iter",
            "extra": "iterations: 20699\ncpu: 33838.542924778885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 34322.96032878914,
            "unit": "ns/iter",
            "extra": "iterations: 20317\ncpu: 34321.72564847195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 69740.1339898458,
            "unit": "ns/iter",
            "extra": "iterations: 10053\ncpu: 69737.65045260155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 61077.92032080793,
            "unit": "ns/iter",
            "extra": "iterations: 11471\ncpu: 61075.69523145389 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 19146.06816052055,
            "unit": "ns/iter",
            "extra": "iterations: 36282\ncpu: 19145.716884405494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 88691.20379747268,
            "unit": "ns/iter",
            "extra": "iterations: 7900\ncpu: 88684.31645569642 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 74181.40260841943,
            "unit": "ns/iter",
            "extra": "iterations: 9431\ncpu: 74178.40101791878 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 70894.84207860923,
            "unit": "ns/iter",
            "extra": "iterations: 9872\ncpu: 70892.00769854129 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 73047.7401500988,
            "unit": "ns/iter",
            "extra": "iterations: 9594\ncpu: 73045.18449030624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 140196.19146364735,
            "unit": "ns/iter",
            "extra": "iterations: 4967\ncpu: 140193.27561908728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 564490.9903303685,
            "unit": "ns/iter",
            "extra": "iterations: 1241\ncpu: 564448.3481063687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 481124.3402203271,
            "unit": "ns/iter",
            "extra": "iterations: 1452\ncpu: 481125.20661156863 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 477699.30580199097,
            "unit": "ns/iter",
            "extra": "iterations: 1465\ncpu: 477685.0511945374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 477685.4829467672,
            "unit": "ns/iter",
            "extra": "iterations: 1466\ncpu: 477659.6862210148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 322329.9126617297,
            "unit": "ns/iter",
            "extra": "iterations: 2164\ncpu: 322318.0683918657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 471806.9602157899,
            "unit": "ns/iter",
            "extra": "iterations: 1483\ncpu: 471768.57720835414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 19342.406049012603,
            "unit": "ns/iter",
            "extra": "iterations: 36072\ncpu: 19341.228653803406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 91113.553640842,
            "unit": "ns/iter",
            "extra": "iterations: 7718\ncpu: 91107.57968385612 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 72646.71593150495,
            "unit": "ns/iter",
            "extra": "iterations: 9635\ncpu: 72644.89880643428 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 71430.14596082846,
            "unit": "ns/iter",
            "extra": "iterations: 9804\ncpu: 71430.31415748558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 73969.02735241644,
            "unit": "ns/iter",
            "extra": "iterations: 9469\ncpu: 73963.50195374315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 139247.40757057964,
            "unit": "ns/iter",
            "extra": "iterations: 4993\ncpu: 139239.13478870492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 560695.8716920156,
            "unit": "ns/iter",
            "extra": "iterations: 1247\ncpu: 560668.4041700034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 480181.48043925565,
            "unit": "ns/iter",
            "extra": "iterations: 1457\ncpu: 480163.3493479716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 502060.475634889,
            "unit": "ns/iter",
            "extra": "iterations: 1457\ncpu: 502020.1098146941 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 479244.9122687043,
            "unit": "ns/iter",
            "extra": "iterations: 1459\ncpu: 479241.19259766414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 331475.18930432736,
            "unit": "ns/iter",
            "extra": "iterations: 2113\ncpu: 331468.3388547093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 473666.60677961574,
            "unit": "ns/iter",
            "extra": "iterations: 1475\ncpu: 473643.25423728337 ns\nthreads: 1"
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
        "date": 1705773023674,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 7635.256309070241,
            "unit": "ns/iter",
            "extra": "iterations: 91733\ncpu: 7635.254488570089 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 68347.29106813026,
            "unit": "ns/iter",
            "extra": "iterations: 12461\ncpu: 68347.8613273413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 130948.54756206031,
            "unit": "ns/iter",
            "extra": "iterations: 6686\ncpu: 130948.08555189951 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 192224.60363556995,
            "unit": "ns/iter",
            "extra": "iterations: 4511\ncpu: 192221.43648858348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 254479.6687224803,
            "unit": "ns/iter",
            "extra": "iterations: 3405\ncpu: 254476.6519823788 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 313252.0682395901,
            "unit": "ns/iter",
            "extra": "iterations: 2755\ncpu: 313246.4246823957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 375549.3357726962,
            "unit": "ns/iter",
            "extra": "iterations: 2323\ncpu: 375543.090830822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 434935.2890000091,
            "unit": "ns/iter",
            "extra": "iterations: 2000\ncpu: 434932.64999999944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 495371.68451023847,
            "unit": "ns/iter",
            "extra": "iterations: 1756\ncpu: 495372.2095671982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 5767.072265222563,
            "unit": "ns/iter",
            "extra": "iterations: 121317\ncpu: 5767.07963434638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 4825.571754254038,
            "unit": "ns/iter",
            "extra": "iterations: 144751\ncpu: 4825.525903102564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4800.937755977315,
            "unit": "ns/iter",
            "extra": "iterations: 145765\ncpu: 4800.695640242855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 4821.453196811115,
            "unit": "ns/iter",
            "extra": "iterations: 145129\ncpu: 4821.496737385355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 8204.55067492224,
            "unit": "ns/iter",
            "extra": "iterations: 85121\ncpu: 8203.77110231317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 25539.781258740473,
            "unit": "ns/iter",
            "extra": "iterations: 32175\ncpu: 25539.437451437476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 109257.36279784834,
            "unit": "ns/iter",
            "extra": "iterations: 7806\ncpu: 109257.62234178853 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 87935.88645479924,
            "unit": "ns/iter",
            "extra": "iterations: 9723\ncpu: 87936.06911447084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 86975.67095325094,
            "unit": "ns/iter",
            "extra": "iterations: 9798\ncpu: 86975.80118391525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 85610.13642304161,
            "unit": "ns/iter",
            "extra": "iterations: 9947\ncpu: 85608.14315874125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 251449.70230545627,
            "unit": "ns/iter",
            "extra": "iterations: 3470\ncpu: 251445.82132564796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 1997243.8387097304,
            "unit": "ns/iter",
            "extra": "iterations: 465\ncpu: 1997247.0967741953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1642791.4190140194,
            "unit": "ns/iter",
            "extra": "iterations: 568\ncpu: 1642782.0422535182 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1678448.5567567826,
            "unit": "ns/iter",
            "extra": "iterations: 555\ncpu: 1678438.7387387396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1659307.6368514772,
            "unit": "ns/iter",
            "extra": "iterations: 559\ncpu: 1659310.3756708398 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1001511.8354979262,
            "unit": "ns/iter",
            "extra": "iterations: 924\ncpu: 1001520.4545454548 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1609754.2958478322,
            "unit": "ns/iter",
            "extra": "iterations: 578\ncpu: 1609744.9826989614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 6752006.460000075,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6751732.999999973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 3754155.375000048,
            "unit": "ns/iter",
            "extra": "iterations: 248\ncpu: 3754113.3064516042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 8378920.137404242,
            "unit": "ns/iter",
            "extra": "iterations: 131\ncpu: 8378937.404580158 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 25385.30915628498,
            "unit": "ns/iter",
            "extra": "iterations: 32262\ncpu: 25385.152811357028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 107476.65263423148,
            "unit": "ns/iter",
            "extra": "iterations: 7934\ncpu: 107475.96420468808 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 87579.78895503783,
            "unit": "ns/iter",
            "extra": "iterations: 9742\ncpu: 87579.94251693653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 86573.3174779793,
            "unit": "ns/iter",
            "extra": "iterations: 9881\ncpu: 86574.07145025778 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 90613.72903497428,
            "unit": "ns/iter",
            "extra": "iterations: 9492\ncpu: 90612.78971765682 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 254916.4622312326,
            "unit": "ns/iter",
            "extra": "iterations: 3442\ncpu: 254914.52643811778 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2011964.1601731475,
            "unit": "ns/iter",
            "extra": "iterations: 462\ncpu: 2011953.8961038953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1659360.286987582,
            "unit": "ns/iter",
            "extra": "iterations: 561\ncpu: 1659375.2228163965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1683178.9509981053,
            "unit": "ns/iter",
            "extra": "iterations: 551\ncpu: 1683156.805807619 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1682323.8540540317,
            "unit": "ns/iter",
            "extra": "iterations: 555\ncpu: 1682236.3963964032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1002735.0847084532,
            "unit": "ns/iter",
            "extra": "iterations: 909\ncpu: 1002685.2585258473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1617672.8191304272,
            "unit": "ns/iter",
            "extra": "iterations: 575\ncpu: 1617623.3043478304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 6764153.149999857,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6763712.999999995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 3749469.0919997995,
            "unit": "ns/iter",
            "extra": "iterations: 250\ncpu: 3749220.8000000175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 24455.11318103135,
            "unit": "ns/iter",
            "extra": "iterations: 33442\ncpu: 24453.615214400892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 106974.48848560819,
            "unit": "ns/iter",
            "extra": "iterations: 7990\ncpu: 106970.08760951132 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 86922.29747676189,
            "unit": "ns/iter",
            "extra": "iterations: 9789\ncpu: 86914.38349167432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 85071.75612428301,
            "unit": "ns/iter",
            "extra": "iterations: 10042\ncpu: 85069.89643497315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 86843.34276121143,
            "unit": "ns/iter",
            "extra": "iterations: 9829\ncpu: 86839.01719401735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 248605.27667424575,
            "unit": "ns/iter",
            "extra": "iterations: 3524\ncpu: 248607.51986379208 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2024983.573913074,
            "unit": "ns/iter",
            "extra": "iterations: 460\ncpu: 2024887.3913043444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1663077.138790151,
            "unit": "ns/iter",
            "extra": "iterations: 562\ncpu: 1663022.953736649 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1679775.0527273985,
            "unit": "ns/iter",
            "extra": "iterations: 550\ncpu: 1679691.2727272683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1666398.0910714876,
            "unit": "ns/iter",
            "extra": "iterations: 560\ncpu: 1666364.821428574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 992138.4807280612,
            "unit": "ns/iter",
            "extra": "iterations: 934\ncpu: 992079.4432548232 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1620022.9305556805,
            "unit": "ns/iter",
            "extra": "iterations: 576\ncpu: 1619976.2152777752 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 2950.7997472277093,
            "unit": "ns/iter",
            "extra": "iterations: 238159\ncpu: 2950.7312341754896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 14663.911692968044,
            "unit": "ns/iter",
            "extra": "iterations: 47969\ncpu: 14663.149117138122 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 11631.770844423987,
            "unit": "ns/iter",
            "extra": "iterations: 60112\ncpu: 11631.07366249662 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 11187.846470710581,
            "unit": "ns/iter",
            "extra": "iterations: 62633\ncpu: 11187.749269554428 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 9680.61676969628,
            "unit": "ns/iter",
            "extra": "iterations: 72309\ncpu: 9680.323334578035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 57283.75550102389,
            "unit": "ns/iter",
            "extra": "iterations: 12225\ncpu: 57282.511247444214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 131715.61484831048,
            "unit": "ns/iter",
            "extra": "iterations: 5307\ncpu: 131711.4000376864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 34879.95952463937,
            "unit": "ns/iter",
            "extra": "iterations: 20111\ncpu: 34877.80319228253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 35287.24045034333,
            "unit": "ns/iter",
            "extra": "iterations: 19896\ncpu: 35284.926618415855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 35003.03304835055,
            "unit": "ns/iter",
            "extra": "iterations: 20001\ncpu: 35002.06989650519 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 70565.94031655716,
            "unit": "ns/iter",
            "extra": "iterations: 9919\ncpu: 70563.28258897082 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 62231.774473031895,
            "unit": "ns/iter",
            "extra": "iterations: 11196\ncpu: 62231.12718828107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 18557.33998520002,
            "unit": "ns/iter",
            "extra": "iterations: 37834\ncpu: 18557.345245017692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 93198.8746336317,
            "unit": "ns/iter",
            "extra": "iterations: 7506\ncpu: 93198.8942179578 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 73232.01600251294,
            "unit": "ns/iter",
            "extra": "iterations: 9561\ncpu: 73231.45068507497 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 73806.51286900156,
            "unit": "ns/iter",
            "extra": "iterations: 9519\ncpu: 73806.50278390475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 74982.46623862951,
            "unit": "ns/iter",
            "extra": "iterations: 9345\ncpu: 74981.9796682722 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 141189.01131314947,
            "unit": "ns/iter",
            "extra": "iterations: 4950\ncpu: 141190.2424242433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 575550.8939144548,
            "unit": "ns/iter",
            "extra": "iterations: 1216\ncpu: 575551.0690789577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 493122.7320169203,
            "unit": "ns/iter",
            "extra": "iterations: 1418\ncpu: 493127.3624823719 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 492500.08621905505,
            "unit": "ns/iter",
            "extra": "iterations: 1415\ncpu: 492495.5477031852 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 495224.89194917865,
            "unit": "ns/iter",
            "extra": "iterations: 1416\ncpu: 495225.0000000075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 321972.98301974643,
            "unit": "ns/iter",
            "extra": "iterations: 2179\ncpu: 321975.76870123757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 481386.29841485753,
            "unit": "ns/iter",
            "extra": "iterations: 1451\ncpu: 481373.1909028313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 18792.775016808817,
            "unit": "ns/iter",
            "extra": "iterations: 37185\ncpu: 18792.370579534458 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 93882.87116235579,
            "unit": "ns/iter",
            "extra": "iterations: 7459\ncpu: 93881.69995978006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 74866.49058228401,
            "unit": "ns/iter",
            "extra": "iterations: 9291\ncpu: 74867.1725325583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 73945.37957284924,
            "unit": "ns/iter",
            "extra": "iterations: 9458\ncpu: 73946.01395643975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 75891.21181572262,
            "unit": "ns/iter",
            "extra": "iterations: 9225\ncpu: 75890.43902439045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 140190.34370608156,
            "unit": "ns/iter",
            "extra": "iterations: 4981\ncpu: 140188.51636217616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 578992.148301616,
            "unit": "ns/iter",
            "extra": "iterations: 1207\ncpu: 578991.5492957698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 491612.5235749533,
            "unit": "ns/iter",
            "extra": "iterations: 1421\ncpu: 491617.10063336155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 495869.1571124949,
            "unit": "ns/iter",
            "extra": "iterations: 1413\ncpu: 495841.40127389296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 493970.8303886827,
            "unit": "ns/iter",
            "extra": "iterations: 1415\ncpu: 493966.8551236751 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 324134.95720934303,
            "unit": "ns/iter",
            "extra": "iterations: 2150\ncpu: 324131.6744186018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 483370.0868965903,
            "unit": "ns/iter",
            "extra": "iterations: 1450\ncpu: 483369.72413792484 ns\nthreads: 1"
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
        "date": 1705774816407,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 7738.590695726362,
            "unit": "ns/iter",
            "extra": "iterations: 90754\ncpu: 7738.548163166363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 69513.79703253724,
            "unit": "ns/iter",
            "extra": "iterations: 12199\ncpu: 69510.90253299451 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 132590.34370233878,
            "unit": "ns/iter",
            "extra": "iterations: 6558\ncpu: 132588.3348581885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 195207.2374634618,
            "unit": "ns/iter",
            "extra": "iterations: 4447\ncpu: 195201.5291207556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 258547.26734147174,
            "unit": "ns/iter",
            "extra": "iterations: 3359\ncpu: 258543.16760940774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 316997.5014738141,
            "unit": "ns/iter",
            "extra": "iterations: 2714\ncpu: 316992.5939572587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 378520.3241710206,
            "unit": "ns/iter",
            "extra": "iterations: 2292\ncpu: 378507.67888307146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 441106.8166582329,
            "unit": "ns/iter",
            "extra": "iterations: 1969\ncpu: 441091.0614525141 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 501981.6001154064,
            "unit": "ns/iter",
            "extra": "iterations: 1733\ncpu: 501975.53375649155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 5748.758377019315,
            "unit": "ns/iter",
            "extra": "iterations: 121702\ncpu: 5748.672166439334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 4872.510117220666,
            "unit": "ns/iter",
            "extra": "iterations: 143320\ncpu: 4872.306726207093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4844.630651673604,
            "unit": "ns/iter",
            "extra": "iterations: 145134\ncpu: 4844.416194689039 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 4852.9665604765105,
            "unit": "ns/iter",
            "extra": "iterations: 144081\ncpu: 4852.771010750893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 8434.266713988836,
            "unit": "ns/iter",
            "extra": "iterations: 83119\ncpu: 8433.867106197145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 26748.692885625216,
            "unit": "ns/iter",
            "extra": "iterations: 30347\ncpu: 26748.077239924827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 112382.97260996338,
            "unit": "ns/iter",
            "extra": "iterations: 7594\ncpu: 112374.62470371347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 88968.69483028751,
            "unit": "ns/iter",
            "extra": "iterations: 9575\ncpu: 88965.20104438631 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 86313.37169676414,
            "unit": "ns/iter",
            "extra": "iterations: 9801\ncpu: 86307.37679828571 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 88105.88410631481,
            "unit": "ns/iter",
            "extra": "iterations: 9595\ncpu: 88099.4476289735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 249718.4077389679,
            "unit": "ns/iter",
            "extra": "iterations: 3463\ncpu: 249699.0181923189 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 1978031.4605544913,
            "unit": "ns/iter",
            "extra": "iterations: 469\ncpu: 1977940.5117270749 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1626335.6904348414,
            "unit": "ns/iter",
            "extra": "iterations: 575\ncpu: 1626223.1304347839 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1612644.0692040427,
            "unit": "ns/iter",
            "extra": "iterations: 578\ncpu: 1612554.3252595165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1612556.980968839,
            "unit": "ns/iter",
            "extra": "iterations: 578\ncpu: 1612494.4636678218 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 984778.0791974588,
            "unit": "ns/iter",
            "extra": "iterations: 947\ncpu: 984765.8922914482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1577166.6615646563,
            "unit": "ns/iter",
            "extra": "iterations: 588\ncpu: 1577045.2380952395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 6564871.080000784,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6564662.000000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 3721037.6388886273,
            "unit": "ns/iter",
            "extra": "iterations: 252\ncpu: 3720914.285714293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 8240244.503760099,
            "unit": "ns/iter",
            "extra": "iterations: 133\ncpu: 8240027.067669192 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 25734.661430954136,
            "unit": "ns/iter",
            "extra": "iterations: 31769\ncpu: 25733.551575435147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 113782.74571086717,
            "unit": "ns/iter",
            "extra": "iterations: 7519\ncpu: 113778.48118100816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 91221.1795201381,
            "unit": "ns/iter",
            "extra": "iterations: 9336\ncpu: 91214.96358183342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 88203.96535318972,
            "unit": "ns/iter",
            "extra": "iterations: 9669\ncpu: 88200.72396318155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 91241.51436227349,
            "unit": "ns/iter",
            "extra": "iterations: 9330\ncpu: 91237.4169346195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 256617.86706234005,
            "unit": "ns/iter",
            "extra": "iterations: 3370\ncpu: 256606.35014836828 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 1993356.5129310805,
            "unit": "ns/iter",
            "extra": "iterations: 464\ncpu: 1993217.6724137906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1652321.723591479,
            "unit": "ns/iter",
            "extra": "iterations: 568\ncpu: 1652233.0985915456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1627765.1491228633,
            "unit": "ns/iter",
            "extra": "iterations: 570\ncpu: 1627650.175438595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1631203.0767888073,
            "unit": "ns/iter",
            "extra": "iterations: 573\ncpu: 1631084.2931937177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 980203.8830347392,
            "unit": "ns/iter",
            "extra": "iterations: 949\ncpu: 980154.6891464647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1587514.499999968,
            "unit": "ns/iter",
            "extra": "iterations: 588\ncpu: 1587418.5374149696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 6642070.029998877,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6640835.999999979 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 3808365.9757084344,
            "unit": "ns/iter",
            "extra": "iterations: 247\ncpu: 3808135.2226720634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 24948.506222413755,
            "unit": "ns/iter",
            "extra": "iterations: 32624\ncpu: 24948.2742766062 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 111803.7470195301,
            "unit": "ns/iter",
            "extra": "iterations: 7633\ncpu: 111802.12236342236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 88786.23284954097,
            "unit": "ns/iter",
            "extra": "iterations: 9577\ncpu: 88783.10535658333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 86804.45196417913,
            "unit": "ns/iter",
            "extra": "iterations: 9826\ncpu: 86802.52391614104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 89158.5848799411,
            "unit": "ns/iter",
            "extra": "iterations: 9537\ncpu: 89156.75789032181 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 247971.24669729656,
            "unit": "ns/iter",
            "extra": "iterations: 3482\ncpu: 247965.79551981742 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 1983548.5340424983,
            "unit": "ns/iter",
            "extra": "iterations: 470\ncpu: 1983484.89361703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1650456.3844797076,
            "unit": "ns/iter",
            "extra": "iterations: 567\ncpu: 1650440.5643738944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1617722.0224137572,
            "unit": "ns/iter",
            "extra": "iterations: 580\ncpu: 1617715.1724137967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1621221.2198953028,
            "unit": "ns/iter",
            "extra": "iterations: 573\ncpu: 1621194.5898778362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 970743.6548487142,
            "unit": "ns/iter",
            "extra": "iterations: 959\ncpu: 970713.2429614195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1580952.4718910018,
            "unit": "ns/iter",
            "extra": "iterations: 587\ncpu: 1580931.1754684895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 3028.497984969156,
            "unit": "ns/iter",
            "extra": "iterations: 231262\ncpu: 3028.484575935535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 15042.20974648933,
            "unit": "ns/iter",
            "extra": "iterations: 46704\ncpu: 15042.144141829489 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 11522.623237514636,
            "unit": "ns/iter",
            "extra": "iterations: 60497\ncpu: 11522.18622411032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 11368.434807328536,
            "unit": "ns/iter",
            "extra": "iterations: 61556\ncpu: 11367.926765871774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 9911.124922143996,
            "unit": "ns/iter",
            "extra": "iterations: 70644\ncpu: 9910.741181133515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 58507.57627969229,
            "unit": "ns/iter",
            "extra": "iterations: 11956\ncpu: 58506.44864503188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 131159.60640089173,
            "unit": "ns/iter",
            "extra": "iterations: 5343\ncpu: 131159.08665543728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 34443.39107546497,
            "unit": "ns/iter",
            "extra": "iterations: 20326\ncpu: 34442.00039358471 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 34017.05011898495,
            "unit": "ns/iter",
            "extra": "iterations: 20591\ncpu: 34016.57520275894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 34470.94431863043,
            "unit": "ns/iter",
            "extra": "iterations: 20312\ncpu: 34470.3771169753 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 69367.54538255131,
            "unit": "ns/iter",
            "extra": "iterations: 10103\ncpu: 69366.42581411528 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 61758.13911433357,
            "unit": "ns/iter",
            "extra": "iterations: 11336\ncpu: 61756.4308398024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 19198.249794759373,
            "unit": "ns/iter",
            "extra": "iterations: 36542\ncpu: 19197.98040610785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 93799.53669971846,
            "unit": "ns/iter",
            "extra": "iterations: 7466\ncpu: 93797.68282882411 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 74564.52619784459,
            "unit": "ns/iter",
            "extra": "iterations: 9371\ncpu: 74562.44797780382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 73911.0771015713,
            "unit": "ns/iter",
            "extra": "iterations: 9481\ncpu: 73910.81109587692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 75842.60526886553,
            "unit": "ns/iter",
            "extra": "iterations: 9224\ncpu: 75839.18039895834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 146716.94173128137,
            "unit": "ns/iter",
            "extra": "iterations: 4771\ncpu: 146713.51917837138 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 560823.0311252262,
            "unit": "ns/iter",
            "extra": "iterations: 1253\ncpu: 560821.6280925757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 482119.2352132001,
            "unit": "ns/iter",
            "extra": "iterations: 1454\ncpu: 482110.5914718051 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 481065.37440107885,
            "unit": "ns/iter",
            "extra": "iterations: 1461\ncpu: 481052.0191649528 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 474093.7217331998,
            "unit": "ns/iter",
            "extra": "iterations: 1477\ncpu: 474091.8754231539 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 316239.570524388,
            "unit": "ns/iter",
            "extra": "iterations: 2212\ncpu: 316231.5551537038 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 469585.7130317576,
            "unit": "ns/iter",
            "extra": "iterations: 1481\ncpu: 469481.0938555026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 19237.512781045472,
            "unit": "ns/iter",
            "extra": "iterations: 36382\ncpu: 19236.946841844623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 93441.47149913541,
            "unit": "ns/iter",
            "extra": "iterations: 7491\ncpu: 93441.08930716715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 74401.41649857056,
            "unit": "ns/iter",
            "extra": "iterations: 9419\ncpu: 74401.11476802132 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 73462.59539819731,
            "unit": "ns/iter",
            "extra": "iterations: 9518\ncpu: 73461.3679344388 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 75324.51886893483,
            "unit": "ns/iter",
            "extra": "iterations: 9301\ncpu: 75323.33082464334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 145284.04088832458,
            "unit": "ns/iter",
            "extra": "iterations: 4818\ncpu: 145279.90867579955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 558886.9407526325,
            "unit": "ns/iter",
            "extra": "iterations: 1249\ncpu: 558878.2225780627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 481221.06712796795,
            "unit": "ns/iter",
            "extra": "iterations: 1445\ncpu: 481212.0415224863 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 478257.56109212013,
            "unit": "ns/iter",
            "extra": "iterations: 1465\ncpu: 478222.1160409636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 480551.69580181665,
            "unit": "ns/iter",
            "extra": "iterations: 1453\ncpu: 480496.2835512782 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 320373.7171022639,
            "unit": "ns/iter",
            "extra": "iterations: 2181\ncpu: 320356.16689592274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 472296.1892255883,
            "unit": "ns/iter",
            "extra": "iterations: 1485\ncpu: 472254.4781144782 ns\nthreads: 1"
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
        "date": 1705777740537,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 7471.927449994304,
            "unit": "ns/iter",
            "extra": "iterations: 93439\ncpu: 7471.522597630541 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 66595.70475441478,
            "unit": "ns/iter",
            "extra": "iterations: 12725\ncpu: 66593.95677799608 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 127360.6288495095,
            "unit": "ns/iter",
            "extra": "iterations: 6884\ncpu: 127354.64846019755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 187947.45293608046,
            "unit": "ns/iter",
            "extra": "iterations: 4632\ncpu: 187940.60880829016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 247114.88409934222,
            "unit": "ns/iter",
            "extra": "iterations: 3503\ncpu: 247104.3962318014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 307769.0254596902,
            "unit": "ns/iter",
            "extra": "iterations: 2828\ncpu: 307750.74257425766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 363520.98071281647,
            "unit": "ns/iter",
            "extra": "iterations: 2385\ncpu: 363505.4088050318 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 421416.8658892077,
            "unit": "ns/iter",
            "extra": "iterations: 2058\ncpu: 421400.2915451897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 480446.9393270648,
            "unit": "ns/iter",
            "extra": "iterations: 1813\ncpu: 480439.65802537266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 5585.563677109079,
            "unit": "ns/iter",
            "extra": "iterations: 125838\ncpu: 5585.393124493394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 4646.412993193665,
            "unit": "ns/iter",
            "extra": "iterations: 150879\ncpu: 4646.355026213062 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4615.742524082132,
            "unit": "ns/iter",
            "extra": "iterations: 151152\ncpu: 4615.539324653324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 4703.7475712519845,
            "unit": "ns/iter",
            "extra": "iterations: 149048\ncpu: 4703.384815629868 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 8145.27816901364,
            "unit": "ns/iter",
            "extra": "iterations: 86052\ncpu: 8144.858922511971 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 26846.671515428283,
            "unit": "ns/iter",
            "extra": "iterations: 30592\ncpu: 26845.489016736396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 109714.17355053834,
            "unit": "ns/iter",
            "extra": "iterations: 7796\ncpu: 109709.17136993325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 88511.09859008239,
            "unit": "ns/iter",
            "extra": "iterations: 9575\ncpu: 88506.27676240234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 87637.7308484259,
            "unit": "ns/iter",
            "extra": "iterations: 9712\ncpu: 87636.35708401962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 88446.43491307384,
            "unit": "ns/iter",
            "extra": "iterations: 9664\ncpu: 88444.21564569508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 259525.0401746579,
            "unit": "ns/iter",
            "extra": "iterations: 3435\ncpu: 259515.54585152873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 1906211.7392196835,
            "unit": "ns/iter",
            "extra": "iterations: 487\ncpu: 1906106.5708418903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1572857.0521886093,
            "unit": "ns/iter",
            "extra": "iterations: 594\ncpu: 1572779.7979798028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1620957.80423281,
            "unit": "ns/iter",
            "extra": "iterations: 567\ncpu: 1620864.902998231 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1607862.6086206094,
            "unit": "ns/iter",
            "extra": "iterations: 580\ncpu: 1607812.2413793076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 962834.0951396066,
            "unit": "ns/iter",
            "extra": "iterations: 967\ncpu: 962786.3495346456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1540864.851913647,
            "unit": "ns/iter",
            "extra": "iterations: 601\ncpu: 1540779.034941761 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 6475345.220000008,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6474647.999999981 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 3721510.912350732,
            "unit": "ns/iter",
            "extra": "iterations: 251\ncpu: 3721409.5617529885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 8203954.548871718,
            "unit": "ns/iter",
            "extra": "iterations: 133\ncpu: 8203352.631578928 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 25580.71627776421,
            "unit": "ns/iter",
            "extra": "iterations: 32056\ncpu: 25579.37359620667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 110598.87004405078,
            "unit": "ns/iter",
            "extra": "iterations: 7718\ncpu: 110592.26483544969 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 89601.33305271751,
            "unit": "ns/iter",
            "extra": "iterations: 9503\ncpu: 89598.8109018207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 87897.97854785052,
            "unit": "ns/iter",
            "extra": "iterations: 9696\ncpu: 87893.13118811873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 91865.2198879563,
            "unit": "ns/iter",
            "extra": "iterations: 9282\ncpu: 91859.70695970704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 258002.4151560411,
            "unit": "ns/iter",
            "extra": "iterations: 3365\ncpu: 257989.658246656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 1949548.6281511732,
            "unit": "ns/iter",
            "extra": "iterations: 476\ncpu: 1949481.3025210006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1589299.3424191456,
            "unit": "ns/iter",
            "extra": "iterations: 587\ncpu: 1589180.5792163499 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1655621.0636041895,
            "unit": "ns/iter",
            "extra": "iterations: 566\ncpu: 1655511.4840989367 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1620097.2993079273,
            "unit": "ns/iter",
            "extra": "iterations: 578\ncpu: 1619989.1003460295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 976390.9514255618,
            "unit": "ns/iter",
            "extra": "iterations: 947\ncpu: 976361.562829985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1563315.1254180963,
            "unit": "ns/iter",
            "extra": "iterations: 598\ncpu: 1563239.130434787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 6562650.770000573,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6562156.00000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 3709383.6007903456,
            "unit": "ns/iter",
            "extra": "iterations: 253\ncpu: 3709183.794466399 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 24698.178474770517,
            "unit": "ns/iter",
            "extra": "iterations: 33254\ncpu: 24697.822818307446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 107902.00630198682,
            "unit": "ns/iter",
            "extra": "iterations: 7934\ncpu: 107894.7567431309 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 87296.20255623368,
            "unit": "ns/iter",
            "extra": "iterations: 9780\ncpu: 87291.48261758697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 87618.44303797145,
            "unit": "ns/iter",
            "extra": "iterations: 9796\ncpu: 87612.22948142081 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 87041.94734135264,
            "unit": "ns/iter",
            "extra": "iterations: 9723\ncpu: 87039.06201789595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 252335.1626961045,
            "unit": "ns/iter",
            "extra": "iterations: 3442\ncpu: 252320.48227774428 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 1920850.2086776434,
            "unit": "ns/iter",
            "extra": "iterations: 484\ncpu: 1920763.6363636313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1593916.7602040886,
            "unit": "ns/iter",
            "extra": "iterations: 588\ncpu: 1593836.9047618962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1641852.193662004,
            "unit": "ns/iter",
            "extra": "iterations: 568\ncpu: 1641821.1267605522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1607395.5593803318,
            "unit": "ns/iter",
            "extra": "iterations: 581\ncpu: 1607285.5421686724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 949483.7693877371,
            "unit": "ns/iter",
            "extra": "iterations: 980\ncpu: 949452.755102045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1553570.6527546158,
            "unit": "ns/iter",
            "extra": "iterations: 599\ncpu: 1553490.6510851486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 2817.227257070813,
            "unit": "ns/iter",
            "extra": "iterations: 249682\ncpu: 2817.1810543010797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 14385.979254730144,
            "unit": "ns/iter",
            "extra": "iterations: 48734\ncpu: 14385.396232609573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 11345.138901468948,
            "unit": "ns/iter",
            "extra": "iterations: 61828\ncpu: 11344.774212331049 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 11222.695265276776,
            "unit": "ns/iter",
            "extra": "iterations: 62369\ncpu: 11221.97405762471 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 9655.784429647847,
            "unit": "ns/iter",
            "extra": "iterations: 72394\ncpu: 9655.38442412349 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 59932.051570275,
            "unit": "ns/iter",
            "extra": "iterations: 11654\ncpu: 59931.49991419286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 125847.88091822334,
            "unit": "ns/iter",
            "extra": "iterations: 5576\ncpu: 125842.8263988531 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 32828.639938065426,
            "unit": "ns/iter",
            "extra": "iterations: 21313\ncpu: 32828.07206869045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 33927.27242331546,
            "unit": "ns/iter",
            "extra": "iterations: 20637\ncpu: 33926.2731986238 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 33058.832199869714,
            "unit": "ns/iter",
            "extra": "iterations: 21174\ncpu: 33057.8020213467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 64550.36754022299,
            "unit": "ns/iter",
            "extra": "iterations: 10875\ncpu: 64547.2919540233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 59588.582041510825,
            "unit": "ns/iter",
            "extra": "iterations: 11805\ncpu: 59586.548072850404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 18259.580587132026,
            "unit": "ns/iter",
            "extra": "iterations: 38356\ncpu: 18257.852747940135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 91749.5553809948,
            "unit": "ns/iter",
            "extra": "iterations: 7638\ncpu: 91744.88085886509 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 75319.08139657098,
            "unit": "ns/iter",
            "extra": "iterations: 9509\ncpu: 75315.2276790408 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 72887.46640935595,
            "unit": "ns/iter",
            "extra": "iterations: 9586\ncpu: 72884.98852493297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 74237.21993235985,
            "unit": "ns/iter",
            "extra": "iterations: 9462\ncpu: 74234.09427182455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 139451.9148214697,
            "unit": "ns/iter",
            "extra": "iterations: 5013\ncpu: 139445.76102134472 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 547054.4746292336,
            "unit": "ns/iter",
            "extra": "iterations: 1281\ncpu: 547035.3629976619 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 468645.9564342703,
            "unit": "ns/iter",
            "extra": "iterations: 1492\ncpu: 468616.55495978566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 482483.4804392722,
            "unit": "ns/iter",
            "extra": "iterations: 1457\ncpu: 482466.575154429 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 471862.78369275836,
            "unit": "ns/iter",
            "extra": "iterations: 1484\ncpu: 471847.0350404306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 315549.1828776167,
            "unit": "ns/iter",
            "extra": "iterations: 2231\ncpu: 315544.1954280583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 460168.6300197376,
            "unit": "ns/iter",
            "extra": "iterations: 1519\ncpu: 460144.96379196964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 18404.38102721247,
            "unit": "ns/iter",
            "extra": "iterations: 38181\ncpu: 18402.679343129028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 89029.980149197,
            "unit": "ns/iter",
            "extra": "iterations: 7909\ncpu: 88809.35642938464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 71823.21530413306,
            "unit": "ns/iter",
            "extra": "iterations: 9749\ncpu: 71821.1303723454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 72571.13823162738,
            "unit": "ns/iter",
            "extra": "iterations: 9636\ncpu: 72563.00332087987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 73740.69623316823,
            "unit": "ns/iter",
            "extra": "iterations: 9504\ncpu: 73732.96506734024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 137975.312712019,
            "unit": "ns/iter",
            "extra": "iterations: 5011\ncpu: 137968.46936739236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 550526.3516484201,
            "unit": "ns/iter",
            "extra": "iterations: 1274\ncpu: 550523.6263736255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 471402.055854636,
            "unit": "ns/iter",
            "extra": "iterations: 1486\ncpu: 471364.0646029589 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 483246.09260538814,
            "unit": "ns/iter",
            "extra": "iterations: 1447\ncpu: 483204.4920525253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 473620.92505069636,
            "unit": "ns/iter",
            "extra": "iterations: 1481\ncpu: 473576.56988521025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 319298.7824305652,
            "unit": "ns/iter",
            "extra": "iterations: 2197\ncpu: 319288.21119708783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 464673.56071668206,
            "unit": "ns/iter",
            "extra": "iterations: 1507\ncpu: 464658.8586595961 ns\nthreads: 1"
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
        "date": 1705952930052,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 7373.022435931344,
            "unit": "ns/iter",
            "extra": "iterations: 94625\ncpu: 7372.629854689565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 66081.05028020048,
            "unit": "ns/iter",
            "extra": "iterations: 12848\ncpu: 66079.47540473225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 125820.6719270281,
            "unit": "ns/iter",
            "extra": "iterations: 6907\ncpu: 125812.1470971478 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 185184.83407881658,
            "unit": "ns/iter",
            "extra": "iterations: 4695\ncpu: 185177.9126730564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 243589.63119367944,
            "unit": "ns/iter",
            "extra": "iterations: 3552\ncpu: 243580.77139639648 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 300971.13938130793,
            "unit": "ns/iter",
            "extra": "iterations: 2877\ncpu: 300958.915537018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 358700.1227779931,
            "unit": "ns/iter",
            "extra": "iterations: 2419\ncpu: 358685.94460520876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 417693.8391742656,
            "unit": "ns/iter",
            "extra": "iterations: 2083\ncpu: 417672.5396063373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 476604.41520785616,
            "unit": "ns/iter",
            "extra": "iterations: 1828\ncpu: 476583.588621444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 5497.707375268306,
            "unit": "ns/iter",
            "extra": "iterations: 126992\ncpu: 5497.395111503085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 4601.760907848314,
            "unit": "ns/iter",
            "extra": "iterations: 152184\ncpu: 4601.603979393362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4674.6769922212825,
            "unit": "ns/iter",
            "extra": "iterations: 152857\ncpu: 4670.268944176589 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 4579.619387346119,
            "unit": "ns/iter",
            "extra": "iterations: 152223\ncpu: 4579.629885102775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 8201.46581896396,
            "unit": "ns/iter",
            "extra": "iterations: 85486\ncpu: 8200.979107690158 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 25821.377930118957,
            "unit": "ns/iter",
            "extra": "iterations: 31654\ncpu: 25820.351298414113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 108601.91073246239,
            "unit": "ns/iter",
            "extra": "iterations: 7864\ncpu: 108594.54476093598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 87846.06439704333,
            "unit": "ns/iter",
            "extra": "iterations: 9752\ncpu: 87841.81706316651 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 86301.47248076978,
            "unit": "ns/iter",
            "extra": "iterations: 9884\ncpu: 86297.09631728027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 86914.71767701737,
            "unit": "ns/iter",
            "extra": "iterations: 9815\ncpu: 86910.73866530838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 239638.8996170414,
            "unit": "ns/iter",
            "extra": "iterations: 3656\ncpu: 239623.7691466088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 1892448.1914459676,
            "unit": "ns/iter",
            "extra": "iterations: 491\ncpu: 1892365.9877800448 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1559945.0436973392,
            "unit": "ns/iter",
            "extra": "iterations: 595\ncpu: 1559866.8907563002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1570490.293333175,
            "unit": "ns/iter",
            "extra": "iterations: 600\ncpu: 1570446.5000000016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1560905.8174062034,
            "unit": "ns/iter",
            "extra": "iterations: 586\ncpu: 1560873.5494880578 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 953711.6543209067,
            "unit": "ns/iter",
            "extra": "iterations: 972\ncpu: 953683.3333333324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1516012.2180327189,
            "unit": "ns/iter",
            "extra": "iterations: 610\ncpu: 1515939.5081967234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 6497321.1799997445,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6496803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 3679045.235294414,
            "unit": "ns/iter",
            "extra": "iterations: 255\ncpu: 3678874.5098039266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 8154153.308270763,
            "unit": "ns/iter",
            "extra": "iterations: 133\ncpu: 8153389.473684191 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 25592.883690626822,
            "unit": "ns/iter",
            "extra": "iterations: 32233\ncpu: 25592.75587131199 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 111771.17056899586,
            "unit": "ns/iter",
            "extra": "iterations: 7645\ncpu: 111766.77567037233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 88180.22962886337,
            "unit": "ns/iter",
            "extra": "iterations: 9646\ncpu: 88175.13995438527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 87703.55381604473,
            "unit": "ns/iter",
            "extra": "iterations: 9709\ncpu: 87700.26779276918 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 88456.62202255677,
            "unit": "ns/iter",
            "extra": "iterations: 9572\ncpu: 88451.71333054718 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 240200.02297893903,
            "unit": "ns/iter",
            "extra": "iterations: 3612\ncpu: 240188.7043189374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 1925541.4120082965,
            "unit": "ns/iter",
            "extra": "iterations: 483\ncpu: 1925431.2629399511 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1578959.5551784316,
            "unit": "ns/iter",
            "extra": "iterations: 589\ncpu: 1578916.977928687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1574288.6779090052,
            "unit": "ns/iter",
            "extra": "iterations: 593\ncpu: 1574234.738617203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1578618.4450084898,
            "unit": "ns/iter",
            "extra": "iterations: 591\ncpu: 1578550.4230118424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 963808.3857290762,
            "unit": "ns/iter",
            "extra": "iterations: 967\ncpu: 963793.4850051712 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1535363.3305647785,
            "unit": "ns/iter",
            "extra": "iterations: 602\ncpu: 1535320.0996677738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 6578314.409999848,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6578339 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 3803197.4285716815,
            "unit": "ns/iter",
            "extra": "iterations: 245\ncpu: 3802977.5510203913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 24694.318605568893,
            "unit": "ns/iter",
            "extra": "iterations: 32931\ncpu: 24694.16051744554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 108777.91383911509,
            "unit": "ns/iter",
            "extra": "iterations: 7869\ncpu: 108777.36688270375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 87678.01200985289,
            "unit": "ns/iter",
            "extra": "iterations: 9742\ncpu: 87677.70478341187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 85935.41706876332,
            "unit": "ns/iter",
            "extra": "iterations: 9948\ncpu: 85931.69481302802 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 87353.45674846953,
            "unit": "ns/iter",
            "extra": "iterations: 9780\ncpu: 87347.93456032727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 238889.2401866681,
            "unit": "ns/iter",
            "extra": "iterations: 3643\ncpu: 238879.82432061498 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 1907093.491769531,
            "unit": "ns/iter",
            "extra": "iterations: 486\ncpu: 1907016.255144037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1583487.625850341,
            "unit": "ns/iter",
            "extra": "iterations: 588\ncpu: 1583465.136054423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1558299.6705684294,
            "unit": "ns/iter",
            "extra": "iterations: 598\ncpu: 1558292.3076923087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1571234.235194469,
            "unit": "ns/iter",
            "extra": "iterations: 591\ncpu: 1571149.4077834184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 969775.8102725929,
            "unit": "ns/iter",
            "extra": "iterations: 954\ncpu: 969745.3878406715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1536401.7109635163,
            "unit": "ns/iter",
            "extra": "iterations: 602\ncpu: 1536308.3056478335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 2907.5478329560733,
            "unit": "ns/iter",
            "extra": "iterations: 240535\ncpu: 2907.406822291991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 14218.782702218368,
            "unit": "ns/iter",
            "extra": "iterations: 49278\ncpu: 14218.5518892812 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 10972.55436809502,
            "unit": "ns/iter",
            "extra": "iterations: 63815\ncpu: 10972.584815482234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 10834.171748329944,
            "unit": "ns/iter",
            "extra": "iterations: 64513\ncpu: 10833.635081301354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 9381.217647845197,
            "unit": "ns/iter",
            "extra": "iterations: 74740\ncpu: 9380.64356435642 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 55565.29912023865,
            "unit": "ns/iter",
            "extra": "iterations: 12617\ncpu: 55562.59808195283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 127194.22976405673,
            "unit": "ns/iter",
            "extra": "iterations: 5510\ncpu: 127185.7350272223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 33113.096196553284,
            "unit": "ns/iter",
            "extra": "iterations: 21165\ncpu: 33111.89699976377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 33223.10046961834,
            "unit": "ns/iter",
            "extra": "iterations: 21081\ncpu: 33220.862387932095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 33276.26922164434,
            "unit": "ns/iter",
            "extra": "iterations: 21083\ncpu: 33273.713418394094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 68590.47551419427,
            "unit": "ns/iter",
            "extra": "iterations: 10210\ncpu: 68585.8178256611 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 59948.67964662391,
            "unit": "ns/iter",
            "extra": "iterations: 11659\ncpu: 59948.82923063767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 18162.251564163264,
            "unit": "ns/iter",
            "extra": "iterations: 38519\ncpu: 18161.452789532508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 91754.81311346672,
            "unit": "ns/iter",
            "extra": "iterations: 7641\ncpu: 91749.66627404645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 73235.0829334484,
            "unit": "ns/iter",
            "extra": "iterations: 9586\ncpu: 73231.11829751726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 70955.05428628693,
            "unit": "ns/iter",
            "extra": "iterations: 9892\ncpu: 70949.92923574618 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 72580.07269706162,
            "unit": "ns/iter",
            "extra": "iterations: 9629\ncpu: 72579.66559351904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 137334.12296528794,
            "unit": "ns/iter",
            "extra": "iterations: 5099\ncpu: 137327.45636399311 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 548348.3609375561,
            "unit": "ns/iter",
            "extra": "iterations: 1280\ncpu: 548315.3906249983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 469264.7742799853,
            "unit": "ns/iter",
            "extra": "iterations: 1493\ncpu: 469236.3697253885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 467384.8036072048,
            "unit": "ns/iter",
            "extra": "iterations: 1497\ncpu: 467382.09752839635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 464714.20106165204,
            "unit": "ns/iter",
            "extra": "iterations: 1507\ncpu: 464682.87989382475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 320977.43956044794,
            "unit": "ns/iter",
            "extra": "iterations: 2184\ncpu: 320960.8516483539 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 460147.0701179548,
            "unit": "ns/iter",
            "extra": "iterations: 1526\ncpu: 460117.3656618588 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 18776.797766382773,
            "unit": "ns/iter",
            "extra": "iterations: 37249\ncpu: 18775.859754624285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 92105.3382527278,
            "unit": "ns/iter",
            "extra": "iterations: 7589\ncpu: 92100.1317696676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 75013.99268659548,
            "unit": "ns/iter",
            "extra": "iterations: 9298\ncpu: 75013.80942138033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 73090.64729899453,
            "unit": "ns/iter",
            "extra": "iterations: 9552\ncpu: 73087.47906197618 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 71534.04799346343,
            "unit": "ns/iter",
            "extra": "iterations: 9793\ncpu: 71529.93975288597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 138627.58044038204,
            "unit": "ns/iter",
            "extra": "iterations: 5041\ncpu: 138621.3648085695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 549092.44819467,
            "unit": "ns/iter",
            "extra": "iterations: 1274\ncpu: 549060.5965463071 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 470911.38866390544,
            "unit": "ns/iter",
            "extra": "iterations: 1482\ncpu: 470881.24156546063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 465981.92543277727,
            "unit": "ns/iter",
            "extra": "iterations: 1502\ncpu: 465952.52996004524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 464154.6275678761,
            "unit": "ns/iter",
            "extra": "iterations: 1509\ncpu: 464149.56925116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 320236.7179486938,
            "unit": "ns/iter",
            "extra": "iterations: 2184\ncpu: 320231.5476190511 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 459477.07944846817,
            "unit": "ns/iter",
            "extra": "iterations: 1523\ncpu: 459478.46355876996 ns\nthreads: 1"
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
        "date": 1705955003783,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 7439.591829791305,
            "unit": "ns/iter",
            "extra": "iterations: 94049\ncpu: 7439.1827664302655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 68649.25187334008,
            "unit": "ns/iter",
            "extra": "iterations: 12411\ncpu: 68645.34686971238 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 130138.0588412332,
            "unit": "ns/iter",
            "extra": "iterations: 6645\ncpu: 130134.05568096311 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 191751.15352331175,
            "unit": "ns/iter",
            "extra": "iterations: 4527\ncpu: 191744.4665341285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 252606.89219653164,
            "unit": "ns/iter",
            "extra": "iterations: 3460\ncpu: 252599.36416184972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 313122.2114142111,
            "unit": "ns/iter",
            "extra": "iterations: 2786\ncpu: 313103.08686288603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 378361.5798536515,
            "unit": "ns/iter",
            "extra": "iterations: 2323\ncpu: 378338.35557468777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 436466.56613486476,
            "unit": "ns/iter",
            "extra": "iterations: 1943\ncpu: 436446.78332475584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 494438.07082155015,
            "unit": "ns/iter",
            "extra": "iterations: 1765\ncpu: 494398.98016997124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 5513.154073087557,
            "unit": "ns/iter",
            "extra": "iterations: 126096\ncpu: 5512.897316330419 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 4744.637612589275,
            "unit": "ns/iter",
            "extra": "iterations: 147105\ncpu: 4744.460759321578 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4634.563310657529,
            "unit": "ns/iter",
            "extra": "iterations: 151112\ncpu: 4634.3884006564695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 4748.844684141743,
            "unit": "ns/iter",
            "extra": "iterations: 146759\ncpu: 4748.753398428721 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 8295.61952243223,
            "unit": "ns/iter",
            "extra": "iterations: 84344\ncpu: 8295.3250972209 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 26395.341970405174,
            "unit": "ns/iter",
            "extra": "iterations: 31222\ncpu: 26394.545512779467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 107866.2317166086,
            "unit": "ns/iter",
            "extra": "iterations: 7876\ncpu: 107863.05231081787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 87808.8015872921,
            "unit": "ns/iter",
            "extra": "iterations: 9702\ncpu: 87801.75221603765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 85286.30180361112,
            "unit": "ns/iter",
            "extra": "iterations: 9980\ncpu: 85282.52505010024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 86464.7568117058,
            "unit": "ns/iter",
            "extra": "iterations: 9836\ncpu: 86461.35624237482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 240333.01662048665,
            "unit": "ns/iter",
            "extra": "iterations: 3610\ncpu: 240321.46814404425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 1918683.7863069389,
            "unit": "ns/iter",
            "extra": "iterations: 482\ncpu: 1918530.0829875518 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1585825.0579216927,
            "unit": "ns/iter",
            "extra": "iterations: 587\ncpu: 1585773.0834752975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1562097.6097972754,
            "unit": "ns/iter",
            "extra": "iterations: 592\ncpu: 1562061.3175675673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1593786.1486486634,
            "unit": "ns/iter",
            "extra": "iterations: 592\ncpu: 1593739.5270270251 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 956188.5155278442,
            "unit": "ns/iter",
            "extra": "iterations: 966\ncpu: 956144.8240165602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1528737.180165419,
            "unit": "ns/iter",
            "extra": "iterations: 605\ncpu: 1528693.5537190046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 6507718.600000772,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6507322.000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 3728436.9003981124,
            "unit": "ns/iter",
            "extra": "iterations: 251\ncpu: 3728294.820717127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 8237437.553030229,
            "unit": "ns/iter",
            "extra": "iterations: 132\ncpu: 8236936.363636376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 25580.54714093876,
            "unit": "ns/iter",
            "extra": "iterations: 32021\ncpu: 25580.366009806057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 113684.31025809563,
            "unit": "ns/iter",
            "extra": "iterations: 7555\ncpu: 113683.66644606226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 89504.51495502391,
            "unit": "ns/iter",
            "extra": "iterations: 9562\ncpu: 89503.29428989785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 86001.35914498652,
            "unit": "ns/iter",
            "extra": "iterations: 9918\ncpu: 85998.43718491646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 90204.22791630942,
            "unit": "ns/iter",
            "extra": "iterations: 9464\ncpu: 90200.35925612807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 249561.37254343758,
            "unit": "ns/iter",
            "extra": "iterations: 3511\ncpu: 249551.60922813942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 1954823.7010526226,
            "unit": "ns/iter",
            "extra": "iterations: 475\ncpu: 1954769.8947368385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1600515.199306732,
            "unit": "ns/iter",
            "extra": "iterations: 577\ncpu: 1600428.0762565043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1585032.5316239086,
            "unit": "ns/iter",
            "extra": "iterations: 585\ncpu: 1585024.1025641048 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1596673.8563923247,
            "unit": "ns/iter",
            "extra": "iterations: 571\ncpu: 1596613.8353765244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 970791.4227557575,
            "unit": "ns/iter",
            "extra": "iterations: 958\ncpu: 970753.8622129413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1555555.944723534,
            "unit": "ns/iter",
            "extra": "iterations: 597\ncpu: 1555472.5293132274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 6590370.609999354,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6590412.999999983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 3767038.4696354857,
            "unit": "ns/iter",
            "extra": "iterations: 247\ncpu: 3766873.279352225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 25221.853672021996,
            "unit": "ns/iter",
            "extra": "iterations: 32557\ncpu: 25220.89565991945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 111023.24944610779,
            "unit": "ns/iter",
            "extra": "iterations: 7673\ncpu: 111016.83826404234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 87630.72838364908,
            "unit": "ns/iter",
            "extra": "iterations: 9738\ncpu: 87631.32059971253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 85053.46391544872,
            "unit": "ns/iter",
            "extra": "iterations: 9935\ncpu: 85054.05133366855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 86670.73822416617,
            "unit": "ns/iter",
            "extra": "iterations: 9787\ncpu: 86664.96372739373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 239797.14506344273,
            "unit": "ns/iter",
            "extra": "iterations: 3626\ncpu: 239793.93270821738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 1939049.941176349,
            "unit": "ns/iter",
            "extra": "iterations: 476\ncpu: 1939022.058823534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1618814.2322356966,
            "unit": "ns/iter",
            "extra": "iterations: 577\ncpu: 1618807.6256499153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1585764.2372880345,
            "unit": "ns/iter",
            "extra": "iterations: 590\ncpu: 1585743.2203389856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1588699.3555554948,
            "unit": "ns/iter",
            "extra": "iterations: 585\ncpu: 1588635.3846153812 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 964109.3371488386,
            "unit": "ns/iter",
            "extra": "iterations: 961\ncpu: 964104.1623309004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1549482.3521594056,
            "unit": "ns/iter",
            "extra": "iterations: 602\ncpu: 1549460.4651162704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 2977.329886053016,
            "unit": "ns/iter",
            "extra": "iterations: 235548\ncpu: 2977.3095080408334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 14446.631370034673,
            "unit": "ns/iter",
            "extra": "iterations: 48371\ncpu: 14446.558888590382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 11473.209229700202,
            "unit": "ns/iter",
            "extra": "iterations: 60522\ncpu: 11473.155216285053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 11172.80939751622,
            "unit": "ns/iter",
            "extra": "iterations: 62591\ncpu: 11172.877889792422 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 9471.515188022515,
            "unit": "ns/iter",
            "extra": "iterations: 73874\ncpu: 9471.038525056174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 57688.116727026085,
            "unit": "ns/iter",
            "extra": "iterations: 12148\ncpu: 57685.14158709245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 129038.36837260307,
            "unit": "ns/iter",
            "extra": "iterations: 5432\ncpu: 129033.85493372631 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 33884.412131768426,
            "unit": "ns/iter",
            "extra": "iterations: 20673\ncpu: 33882.59565617007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 33302.622129239506,
            "unit": "ns/iter",
            "extra": "iterations: 21031\ncpu: 33300.72274261835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 33845.406745265056,
            "unit": "ns/iter",
            "extra": "iterations: 20696\ncpu: 33842.52029377663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 69179.2528656091,
            "unit": "ns/iter",
            "extra": "iterations: 10120\ncpu: 69176.68972331974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 60721.96253577257,
            "unit": "ns/iter",
            "extra": "iterations: 11531\ncpu: 60722.40915792216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 18762.0792583754,
            "unit": "ns/iter",
            "extra": "iterations: 36892\ncpu: 18762.21674075661 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 94186.20384563527,
            "unit": "ns/iter",
            "extra": "iterations: 7437\ncpu: 94182.38537044397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 73183.90534031607,
            "unit": "ns/iter",
            "extra": "iterations: 9550\ncpu: 73177.34031413501 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 71441.91257886747,
            "unit": "ns/iter",
            "extra": "iterations: 9826\ncpu: 71436.81050274849 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 72939.11291498723,
            "unit": "ns/iter",
            "extra": "iterations: 9609\ncpu: 72938.46394005707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 139176.00416833223,
            "unit": "ns/iter",
            "extra": "iterations: 5038\ncpu: 139177.1139341019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 564778.443365681,
            "unit": "ns/iter",
            "extra": "iterations: 1236\ncpu: 564757.0388349477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 483026.17780837236,
            "unit": "ns/iter",
            "extra": "iterations: 1451\ncpu: 483011.23363197903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 476287.61989103653,
            "unit": "ns/iter",
            "extra": "iterations: 1468\ncpu: 476269.9591280699 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 478969.02322404867,
            "unit": "ns/iter",
            "extra": "iterations: 1464\ncpu: 478946.4480874373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 317730.55636037677,
            "unit": "ns/iter",
            "extra": "iterations: 2209\ncpu: 317705.29651426274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 465727.25634174276,
            "unit": "ns/iter",
            "extra": "iterations: 1498\ncpu: 465708.9452603462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 19551.93109130766,
            "unit": "ns/iter",
            "extra": "iterations: 35801\ncpu: 19551.171754978837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 90427.52887576458,
            "unit": "ns/iter",
            "extra": "iterations: 7792\ncpu: 90423.19045174528 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 73216.97232123376,
            "unit": "ns/iter",
            "extra": "iterations: 9538\ncpu: 73213.00062906244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 71853.49512470256,
            "unit": "ns/iter",
            "extra": "iterations: 9743\ncpu: 71851.91419480645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 73186.37599330719,
            "unit": "ns/iter",
            "extra": "iterations: 9564\ncpu: 73183.30196570489 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 139991.223468144,
            "unit": "ns/iter",
            "extra": "iterations: 4994\ncpu: 139984.36123347937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 565009.3053312303,
            "unit": "ns/iter",
            "extra": "iterations: 1238\ncpu: 564984.9757673675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 484368.11026877316,
            "unit": "ns/iter",
            "extra": "iterations: 1451\ncpu: 484326.5334252244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 473643.01556151995,
            "unit": "ns/iter",
            "extra": "iterations: 1478\ncpu: 473646.68470906775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 480528.07029636035,
            "unit": "ns/iter",
            "extra": "iterations: 1451\ncpu: 480531.7022742888 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 318048.2531817833,
            "unit": "ns/iter",
            "extra": "iterations: 2200\ncpu: 318032.4999999972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 471524.2860026848,
            "unit": "ns/iter",
            "extra": "iterations: 1486\ncpu: 471497.71197846666 ns\nthreads: 1"
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
        "date": 1705956486824,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 7247.544968334496,
            "unit": "ns/iter",
            "extra": "iterations: 96479\ncpu: 7247.190580333544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 66824.62676497949,
            "unit": "ns/iter",
            "extra": "iterations: 12748\ncpu: 66822.55255726389 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 127085.62681791962,
            "unit": "ns/iter",
            "extra": "iterations: 6876\ncpu: 127081.31180919141 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 187075.9608686229,
            "unit": "ns/iter",
            "extra": "iterations: 4651\ncpu: 187074.47860675125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 247541.897398851,
            "unit": "ns/iter",
            "extra": "iterations: 3460\ncpu: 247533.75722543345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 304442.29555087397,
            "unit": "ns/iter",
            "extra": "iterations: 2832\ncpu: 304435.9463276838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 363688.5908710025,
            "unit": "ns/iter",
            "extra": "iterations: 2388\ncpu: 363685.59463986626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 421969.6174464262,
            "unit": "ns/iter",
            "extra": "iterations: 2052\ncpu: 421951.2183235866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 484690.2775938071,
            "unit": "ns/iter",
            "extra": "iterations: 1812\ncpu: 484679.6909492277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 5576.204264870336,
            "unit": "ns/iter",
            "extra": "iterations: 125631\ncpu: 5575.985226576245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 4631.9204238245375,
            "unit": "ns/iter",
            "extra": "iterations: 151289\ncpu: 4631.843689891531 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4672.095222883258,
            "unit": "ns/iter",
            "extra": "iterations: 150258\ncpu: 4671.982190632121 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 4697.096998218041,
            "unit": "ns/iter",
            "extra": "iterations: 148745\ncpu: 4696.986117180414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 7919.91244322879,
            "unit": "ns/iter",
            "extra": "iterations: 88514\ncpu: 7919.7516777007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 25415.676602317464,
            "unit": "ns/iter",
            "extra": "iterations: 32375\ncpu: 25415.200000000055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 109936.51102231018,
            "unit": "ns/iter",
            "extra": "iterations: 7757\ncpu: 109933.10558205478 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 88033.89414669025,
            "unit": "ns/iter",
            "extra": "iterations: 9721\ncpu: 88033.29904330849 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 86752.56530115081,
            "unit": "ns/iter",
            "extra": "iterations: 9862\ncpu: 86750.94301358756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 87749.34251644164,
            "unit": "ns/iter",
            "extra": "iterations: 9728\ncpu: 87748.78700657912 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 226602.7526630229,
            "unit": "ns/iter",
            "extra": "iterations: 3849\ncpu: 226591.50428682743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 1944719.7447697415,
            "unit": "ns/iter",
            "extra": "iterations: 478\ncpu: 1944674.686192465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1609815.9826989044,
            "unit": "ns/iter",
            "extra": "iterations: 578\ncpu: 1609790.8304498275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1628494.742556942,
            "unit": "ns/iter",
            "extra": "iterations: 571\ncpu: 1628462.8721541162 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1646913.3451328645,
            "unit": "ns/iter",
            "extra": "iterations: 565\ncpu: 1646870.0884955756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 986552.0849257433,
            "unit": "ns/iter",
            "extra": "iterations: 942\ncpu: 986535.2441613614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1570328.8969594443,
            "unit": "ns/iter",
            "extra": "iterations: 592\ncpu: 1570317.0608108125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 6681725.570000481,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6681530.999999979 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 3755863.035999937,
            "unit": "ns/iter",
            "extra": "iterations: 250\ncpu: 3755739.1999999937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 8531138.875000011,
            "unit": "ns/iter",
            "extra": "iterations: 128\ncpu: 8530922.656249994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 25259.017069481255,
            "unit": "ns/iter",
            "extra": "iterations: 32397\ncpu: 25258.292434484658 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 109204.31363289335,
            "unit": "ns/iter",
            "extra": "iterations: 7834\ncpu: 109200.42124074555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 87868.27380088823,
            "unit": "ns/iter",
            "extra": "iterations: 9653\ncpu: 87865.66870402984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 86857.10572328651,
            "unit": "ns/iter",
            "extra": "iterations: 9837\ncpu: 86855.45389854629 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 88989.13917795986,
            "unit": "ns/iter",
            "extra": "iterations: 9513\ncpu: 88988.5314832332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 232999.25474980217,
            "unit": "ns/iter",
            "extra": "iterations: 3737\ncpu: 232994.59459459502 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 1961537.6877637948,
            "unit": "ns/iter",
            "extra": "iterations: 474\ncpu: 1961481.0126582223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1623398.760489618,
            "unit": "ns/iter",
            "extra": "iterations: 572\ncpu: 1623365.7342657365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1632368.3257043522,
            "unit": "ns/iter",
            "extra": "iterations: 568\ncpu: 1632357.2183098611 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1660740.9751331878,
            "unit": "ns/iter",
            "extra": "iterations: 563\ncpu: 1660696.6252220324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 992241.5390373837,
            "unit": "ns/iter",
            "extra": "iterations: 935\ncpu: 992210.3743315483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1590169.7013652509,
            "unit": "ns/iter",
            "extra": "iterations: 586\ncpu: 1590125.4266211672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 6807454.57999933,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6807378.000000029 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 3769977.449392835,
            "unit": "ns/iter",
            "extra": "iterations: 247\ncpu: 3769905.6680162176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 24861.019086158965,
            "unit": "ns/iter",
            "extra": "iterations: 33113\ncpu: 24860.897532691102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 107701.03668564188,
            "unit": "ns/iter",
            "extra": "iterations: 7905\ncpu: 107699.93674889322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 86635.85207762582,
            "unit": "ns/iter",
            "extra": "iterations: 9843\ncpu: 86636.29990856467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 85235.81975754061,
            "unit": "ns/iter",
            "extra": "iterations: 9981\ncpu: 85234.87626490308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 87205.69256096125,
            "unit": "ns/iter",
            "extra": "iterations: 9719\ncpu: 87203.53945879193 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 226956.66142968478,
            "unit": "ns/iter",
            "extra": "iterations: 3819\ncpu: 226950.17020162265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 1944019.9018788342,
            "unit": "ns/iter",
            "extra": "iterations: 479\ncpu: 1944026.7223382068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1622401.5260415887,
            "unit": "ns/iter",
            "extra": "iterations: 576\ncpu: 1622362.6736111057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1631343.1212653432,
            "unit": "ns/iter",
            "extra": "iterations: 569\ncpu: 1631323.3743409538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1650742.6571935662,
            "unit": "ns/iter",
            "extra": "iterations: 563\ncpu: 1650726.8206039083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 989446.4546425012,
            "unit": "ns/iter",
            "extra": "iterations: 937\ncpu: 989451.9743863359 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1586933.5093062874,
            "unit": "ns/iter",
            "extra": "iterations: 591\ncpu: 1586905.0761421267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 2833.5236632605793,
            "unit": "ns/iter",
            "extra": "iterations: 248085\ncpu: 2833.539311123213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 14154.281881090756,
            "unit": "ns/iter",
            "extra": "iterations: 49567\ncpu: 14154.221558698293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 11185.29398777649,
            "unit": "ns/iter",
            "extra": "iterations: 62506\ncpu: 11185.359805458662 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 10534.736630030553,
            "unit": "ns/iter",
            "extra": "iterations: 66511\ncpu: 10534.634872427101 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 9441.535204618383,
            "unit": "ns/iter",
            "extra": "iterations: 74138\ncpu: 9441.295961585118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 54950.96801939557,
            "unit": "ns/iter",
            "extra": "iterations: 12789\ncpu: 54949.74587536166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 121442.2682630691,
            "unit": "ns/iter",
            "extra": "iterations: 5763\ncpu: 121441.61027242793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 33214.32165514644,
            "unit": "ns/iter",
            "extra": "iterations: 21122\ncpu: 33214.203200454605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 33585.01101796675,
            "unit": "ns/iter",
            "extra": "iterations: 20875\ncpu: 33584.627544910574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 34034.953281479124,
            "unit": "ns/iter",
            "extra": "iterations: 20570\ncpu: 34034.62809917328 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 69970.23172798572,
            "unit": "ns/iter",
            "extra": "iterations: 10029\ncpu: 69969.99700867427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 60394.24811769878,
            "unit": "ns/iter",
            "extra": "iterations: 11555\ncpu: 60394.63435742153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 19324.507854521984,
            "unit": "ns/iter",
            "extra": "iterations: 37367\ncpu: 19324.114860705908 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 90182.6103545672,
            "unit": "ns/iter",
            "extra": "iterations: 7784\ncpu: 90180.25436793426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 72347.85526315452,
            "unit": "ns/iter",
            "extra": "iterations: 9652\ncpu: 72347.06796518814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 73921.65636209851,
            "unit": "ns/iter",
            "extra": "iterations: 9478\ncpu: 73920.78497573333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 74648.73692045831,
            "unit": "ns/iter",
            "extra": "iterations: 9404\ncpu: 74649.170565716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 139227.2999006876,
            "unit": "ns/iter",
            "extra": "iterations: 5035\ncpu: 139223.63455809373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 561360.0520832872,
            "unit": "ns/iter",
            "extra": "iterations: 1248\ncpu: 561343.8301282031 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 478735.17771703564,
            "unit": "ns/iter",
            "extra": "iterations: 1463\ncpu: 478724.1285030784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 488010.19832403807,
            "unit": "ns/iter",
            "extra": "iterations: 1432\ncpu: 488012.9189944161 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 487895.36724740895,
            "unit": "ns/iter",
            "extra": "iterations: 1435\ncpu: 487884.8780487766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 324553.5998142684,
            "unit": "ns/iter",
            "extra": "iterations: 2154\ncpu: 324550.32497678604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 474029.9830738548,
            "unit": "ns/iter",
            "extra": "iterations: 1477\ncpu: 474032.63371699804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 19028.684727460084,
            "unit": "ns/iter",
            "extra": "iterations: 36857\ncpu: 19028.49933526863 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 90956.95923385888,
            "unit": "ns/iter",
            "extra": "iterations: 7727\ncpu: 90954.88546654522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 74231.00961944234,
            "unit": "ns/iter",
            "extra": "iterations: 9460\ncpu: 74230.84566596181 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 73881.75812579005,
            "unit": "ns/iter",
            "extra": "iterations: 9476\ncpu: 73880.65639510381 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 74976.84233076702,
            "unit": "ns/iter",
            "extra": "iterations: 9336\ncpu: 74975.12853470395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 137939.467558013,
            "unit": "ns/iter",
            "extra": "iterations: 5086\ncpu: 137936.23672827127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 558983.4743178387,
            "unit": "ns/iter",
            "extra": "iterations: 1246\ncpu: 558948.3948635652 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 480433.7164383214,
            "unit": "ns/iter",
            "extra": "iterations: 1460\ncpu: 480423.0821917762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 484781.91747577145,
            "unit": "ns/iter",
            "extra": "iterations: 1442\ncpu: 484771.7059639332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 484883.15017298615,
            "unit": "ns/iter",
            "extra": "iterations: 1445\ncpu: 484869.4809688634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 329982.8927563248,
            "unit": "ns/iter",
            "extra": "iterations: 2126\ncpu: 329977.2342427139 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 474462.6495264242,
            "unit": "ns/iter",
            "extra": "iterations: 1478\ncpu: 474429.70230040926 ns\nthreads: 1"
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
        "date": 1705958204440,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 7502.216806704931,
            "unit": "ns/iter",
            "extra": "iterations: 93189\ncpu: 7502.000236079366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 65892.04686042875,
            "unit": "ns/iter",
            "extra": "iterations: 12868\ncpu: 65890.18495492694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 125205.28435746874,
            "unit": "ns/iter",
            "extra": "iterations: 6949\ncpu: 125200.99294862572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 183822.19936374566,
            "unit": "ns/iter",
            "extra": "iterations: 4715\ncpu: 183819.5546129374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 242922.6980973905,
            "unit": "ns/iter",
            "extra": "iterations: 3574\ncpu: 242917.7672076106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 299057.688587346,
            "unit": "ns/iter",
            "extra": "iterations: 2874\ncpu: 299042.3799582463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 358082.89190300857,
            "unit": "ns/iter",
            "extra": "iterations: 2433\ncpu: 358075.2568845047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 421145.0696897512,
            "unit": "ns/iter",
            "extra": "iterations: 2095\ncpu: 421127.2076372312 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 476529.6907895059,
            "unit": "ns/iter",
            "extra": "iterations: 1824\ncpu: 476515.6798245611 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 5546.368670797743,
            "unit": "ns/iter",
            "extra": "iterations: 126023\ncpu: 5546.314561627637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 4764.09433268407,
            "unit": "ns/iter",
            "extra": "iterations: 146842\ncpu: 4764.03345092004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4745.125601901643,
            "unit": "ns/iter",
            "extra": "iterations: 147657\ncpu: 4744.986692131081 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 4756.6910292456,
            "unit": "ns/iter",
            "extra": "iterations: 147234\ncpu: 4756.519553907386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 8257.635388298038,
            "unit": "ns/iter",
            "extra": "iterations: 84819\ncpu: 8257.51069925369 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 26270.36176981111,
            "unit": "ns/iter",
            "extra": "iterations: 31122\ncpu: 26269.847696163502 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 107701.28853204277,
            "unit": "ns/iter",
            "extra": "iterations: 7909\ncpu: 107699.67126058937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 88406.1123700664,
            "unit": "ns/iter",
            "extra": "iterations: 9620\ncpu: 88404.72972972941 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 87635.78121137076,
            "unit": "ns/iter",
            "extra": "iterations: 9708\ncpu: 87634.06468891648 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 89383.40541675266,
            "unit": "ns/iter",
            "extra": "iterations: 9526\ncpu: 89379.44572748289 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 246002.97369182092,
            "unit": "ns/iter",
            "extra": "iterations: 3459\ncpu: 245992.57010696767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 1910521.1759834744,
            "unit": "ns/iter",
            "extra": "iterations: 483\ncpu: 1910460.6625258755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1570797.9225589032,
            "unit": "ns/iter",
            "extra": "iterations: 594\ncpu: 1570705.892255896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1590351.767123249,
            "unit": "ns/iter",
            "extra": "iterations: 584\ncpu: 1590289.0410958934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1573750.2835314593,
            "unit": "ns/iter",
            "extra": "iterations: 589\ncpu: 1573705.602716465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 951808.1738240882,
            "unit": "ns/iter",
            "extra": "iterations: 978\ncpu: 951779.8568507168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1529795.2471170574,
            "unit": "ns/iter",
            "extra": "iterations: 607\ncpu: 1529727.6771004938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 6463188.620000438,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6462785.000000011 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 3743713.1150793917,
            "unit": "ns/iter",
            "extra": "iterations: 252\ncpu: 3743578.1746031735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 8186796.611940097,
            "unit": "ns/iter",
            "extra": "iterations: 134\ncpu: 8186480.597014931 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 27176.545343418424,
            "unit": "ns/iter",
            "extra": "iterations: 30269\ncpu: 27175.658264230802 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 110057.82197605276,
            "unit": "ns/iter",
            "extra": "iterations: 7763\ncpu: 110052.9692129332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 89475.58368510887,
            "unit": "ns/iter",
            "extra": "iterations: 9476\ncpu: 89472.57281553335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 89501.58709812601,
            "unit": "ns/iter",
            "extra": "iterations: 9518\ncpu: 89497.72010926684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 91849.41220463808,
            "unit": "ns/iter",
            "extra": "iterations: 9226\ncpu: 91846.03295035705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 248478.80102914647,
            "unit": "ns/iter",
            "extra": "iterations: 3498\ncpu: 248469.83990852028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 1911514.4483472034,
            "unit": "ns/iter",
            "extra": "iterations: 484\ncpu: 1911439.2561983364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1572910.7979799057,
            "unit": "ns/iter",
            "extra": "iterations: 594\ncpu: 1572845.6228956254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1601915.9999998542,
            "unit": "ns/iter",
            "extra": "iterations: 580\ncpu: 1601872.0689655098 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1589503.9541596654,
            "unit": "ns/iter",
            "extra": "iterations: 589\ncpu: 1589426.655348052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 963243.8792923249,
            "unit": "ns/iter",
            "extra": "iterations: 961\ncpu: 963224.245577528 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1544006.4119601073,
            "unit": "ns/iter",
            "extra": "iterations: 602\ncpu: 1543951.8272425272 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 6541949.170000408,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6541354.000000013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 3709620.4370081834,
            "unit": "ns/iter",
            "extra": "iterations: 254\ncpu: 3709358.267716539 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 25054.64178189329,
            "unit": "ns/iter",
            "extra": "iterations: 32617\ncpu: 25054.02397522759 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 107763.15720964517,
            "unit": "ns/iter",
            "extra": "iterations: 7913\ncpu: 107758.0942752433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 88978.08617109405,
            "unit": "ns/iter",
            "extra": "iterations: 9632\ncpu: 88975.99667774052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 87677.57361553267,
            "unit": "ns/iter",
            "extra": "iterations: 9733\ncpu: 87674.25254289509 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 89715.24626006973,
            "unit": "ns/iter",
            "extra": "iterations: 9559\ncpu: 89711.19363950228 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 244207.24463884084,
            "unit": "ns/iter",
            "extra": "iterations: 3544\ncpu: 244201.38261850993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 1901251.223360577,
            "unit": "ns/iter",
            "extra": "iterations: 488\ncpu: 1901231.1475409835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1577284.9711376065,
            "unit": "ns/iter",
            "extra": "iterations: 589\ncpu: 1577259.2529711335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1594003.9829642205,
            "unit": "ns/iter",
            "extra": "iterations: 587\ncpu: 1593957.5809199254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1577648.2436548346,
            "unit": "ns/iter",
            "extra": "iterations: 591\ncpu: 1577610.998307961 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 954686.1647902146,
            "unit": "ns/iter",
            "extra": "iterations: 977\ncpu: 954675.4350051178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1535470.6716418036,
            "unit": "ns/iter",
            "extra": "iterations: 603\ncpu: 1535448.4245439393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 2836.9488674637196,
            "unit": "ns/iter",
            "extra": "iterations: 246438\ncpu: 2836.947629829796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 14336.799103395484,
            "unit": "ns/iter",
            "extra": "iterations: 48851\ncpu: 14336.672739554944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 11220.225128960425,
            "unit": "ns/iter",
            "extra": "iterations: 62422\ncpu: 11220.053827176363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 10921.409827138135,
            "unit": "ns/iter",
            "extra": "iterations: 64271\ncpu: 10921.076379704717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 9588.374583544912,
            "unit": "ns/iter",
            "extra": "iterations: 72937\ncpu: 9588.267957278209 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 58041.270555695875,
            "unit": "ns/iter",
            "extra": "iterations: 11931\ncpu: 58039.9295951718 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 124755.53288303017,
            "unit": "ns/iter",
            "extra": "iterations: 5626\ncpu: 124753.28830430118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 32923.130878482014,
            "unit": "ns/iter",
            "extra": "iterations: 21264\ncpu: 32923.11888638052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 33030.9849435963,
            "unit": "ns/iter",
            "extra": "iterations: 21187\ncpu: 33030.74054844957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 33335.04802206173,
            "unit": "ns/iter",
            "extra": "iterations: 21032\ncpu: 33334.21928489933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 68033.90336379572,
            "unit": "ns/iter",
            "extra": "iterations: 10286\ncpu: 68033.30740812756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 59350.59538552596,
            "unit": "ns/iter",
            "extra": "iterations: 11789\ncpu: 59349.18992280923 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 18840.944623915166,
            "unit": "ns/iter",
            "extra": "iterations: 37146\ncpu: 18840.152371722426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 87080.4797702388,
            "unit": "ns/iter",
            "extra": "iterations: 8008\ncpu: 87078.93356643268 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 70206.43951855044,
            "unit": "ns/iter",
            "extra": "iterations: 9970\ncpu: 70205.04513540608 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 72043.55194005377,
            "unit": "ns/iter",
            "extra": "iterations: 9742\ncpu: 72042.29111065491 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 72104.37769302161,
            "unit": "ns/iter",
            "extra": "iterations: 9701\ncpu: 72101.989485619 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 142663.84911424317,
            "unit": "ns/iter",
            "extra": "iterations: 4911\ncpu: 142658.8882101399 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 545687.351750937,
            "unit": "ns/iter",
            "extra": "iterations: 1285\ncpu: 545674.6303501928 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 467264.09163347294,
            "unit": "ns/iter",
            "extra": "iterations: 1506\ncpu: 467236.7861885771 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 469261.1782842043,
            "unit": "ns/iter",
            "extra": "iterations: 1492\ncpu: 469252.6139410132 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 464997.30594522826,
            "unit": "ns/iter",
            "extra": "iterations: 1497\ncpu: 464994.0547762228 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 311393.5960766802,
            "unit": "ns/iter",
            "extra": "iterations: 2243\ncpu: 311391.0833704843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 458028.1161417386,
            "unit": "ns/iter",
            "extra": "iterations: 1524\ncpu: 458023.6220472493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 18848.402123531556,
            "unit": "ns/iter",
            "extra": "iterations: 37108\ncpu: 18847.491107039026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 88165.35917182949,
            "unit": "ns/iter",
            "extra": "iterations: 7921\ncpu: 88164.61305390627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 71520.85363117333,
            "unit": "ns/iter",
            "extra": "iterations: 9804\ncpu: 71519.26764585864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 72202.92478649756,
            "unit": "ns/iter",
            "extra": "iterations: 9719\ncpu: 72199.63988064688 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 72936.6529080651,
            "unit": "ns/iter",
            "extra": "iterations: 9594\ncpu: 72933.56264331835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 139932.16713710089,
            "unit": "ns/iter",
            "extra": "iterations: 4960\ncpu: 139928.12499999843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 543825.8596899151,
            "unit": "ns/iter",
            "extra": "iterations: 1290\ncpu: 543813.1782945773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 464372.00132194016,
            "unit": "ns/iter",
            "extra": "iterations: 1513\ncpu: 464357.699933899 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 469434.70836117666,
            "unit": "ns/iter",
            "extra": "iterations: 1495\ncpu: 469428.76254180714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 464774.3554376778,
            "unit": "ns/iter",
            "extra": "iterations: 1508\ncpu: 464756.10079575586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 318438.47792443354,
            "unit": "ns/iter",
            "extra": "iterations: 2197\ncpu: 318432.5898953137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 456226.32089060335,
            "unit": "ns/iter",
            "extra": "iterations: 1527\ncpu: 456214.210870988 ns\nthreads: 1"
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
        "date": 1705959796522,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 7061.758795142086,
            "unit": "ns/iter",
            "extra": "iterations: 98634\ncpu: 7061.0398037188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 63135.68289052487,
            "unit": "ns/iter",
            "extra": "iterations: 13437\ncpu: 63133.3928704324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 120789.77139702298,
            "unit": "ns/iter",
            "extra": "iterations: 7244\ncpu: 120780.86692435123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 179586.57075374728,
            "unit": "ns/iter",
            "extra": "iterations: 4869\ncpu: 179573.52639145617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 234919.15838086442,
            "unit": "ns/iter",
            "extra": "iterations: 3681\ncpu: 234903.58598207013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 288549.47145736695,
            "unit": "ns/iter",
            "extra": "iterations: 2978\ncpu: 288549.83210208215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 344894.5612852056,
            "unit": "ns/iter",
            "extra": "iterations: 2521\ncpu: 344883.3399444666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 401689.2708046077,
            "unit": "ns/iter",
            "extra": "iterations: 2175\ncpu: 401681.0114942533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 457554.8548895897,
            "unit": "ns/iter",
            "extra": "iterations: 1902\ncpu: 457542.2712933754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 5447.837531633844,
            "unit": "ns/iter",
            "extra": "iterations: 128425\ncpu: 5447.788981896043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 4624.736450458937,
            "unit": "ns/iter",
            "extra": "iterations: 143658\ncpu: 4624.688496289799 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4780.203870161988,
            "unit": "ns/iter",
            "extra": "iterations: 152190\ncpu: 4780.155069321238 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 4582.226651599658,
            "unit": "ns/iter",
            "extra": "iterations: 153094\ncpu: 4582.182841914125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 8000.380260469115,
            "unit": "ns/iter",
            "extra": "iterations: 87611\ncpu: 8000.315028934724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 26015.56391144227,
            "unit": "ns/iter",
            "extra": "iterations: 31528\ncpu: 26015.272139051023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 109749.5860471075,
            "unit": "ns/iter",
            "extra": "iterations: 7769\ncpu: 109748.73214055857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 88885.65934066582,
            "unit": "ns/iter",
            "extra": "iterations: 9646\ncpu: 88883.91042919332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 89561.12670443104,
            "unit": "ns/iter",
            "extra": "iterations: 9534\ncpu: 89557.92951541847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 87572.41544004937,
            "unit": "ns/iter",
            "extra": "iterations: 9715\ncpu: 87567.6067936179 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 228188.24575162487,
            "unit": "ns/iter",
            "extra": "iterations: 3825\ncpu: 228163.86928104638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 1848871.9361277323,
            "unit": "ns/iter",
            "extra": "iterations: 501\ncpu: 1848763.073852296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1539313.2928452382,
            "unit": "ns/iter",
            "extra": "iterations: 601\ncpu: 1539192.8452579023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1573051.3590602907,
            "unit": "ns/iter",
            "extra": "iterations: 596\ncpu: 1572980.033557048 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1567346.351351383,
            "unit": "ns/iter",
            "extra": "iterations: 592\ncpu: 1567242.9054054057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 959223.0746888402,
            "unit": "ns/iter",
            "extra": "iterations: 964\ncpu: 959180.2904564325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1512126.5000000682,
            "unit": "ns/iter",
            "extra": "iterations: 612\ncpu: 1512011.7647058847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 6875034.260000348,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6874341.999999984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 3660107.1875002054,
            "unit": "ns/iter",
            "extra": "iterations: 256\ncpu: 3659843.3593750116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 8133368.629629094,
            "unit": "ns/iter",
            "extra": "iterations: 135\ncpu: 8132959.259259249 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 25479.437897097712,
            "unit": "ns/iter",
            "extra": "iterations: 32108\ncpu: 25478.239068145045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 111600.29156343505,
            "unit": "ns/iter",
            "extra": "iterations: 7669\ncpu: 111599.426261572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 89161.57584945532,
            "unit": "ns/iter",
            "extra": "iterations: 9565\ncpu: 89154.13486670176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 88099.55500412695,
            "unit": "ns/iter",
            "extra": "iterations: 9672\ncpu: 88095.626550869 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 90039.5210833815,
            "unit": "ns/iter",
            "extra": "iterations: 9415\ncpu: 90031.88528943142 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 231055.19638587878,
            "unit": "ns/iter",
            "extra": "iterations: 3763\ncpu: 231043.47595004013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 1873127.485886986,
            "unit": "ns/iter",
            "extra": "iterations: 496\ncpu: 1872953.8306451582 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1556433.0921272705,
            "unit": "ns/iter",
            "extra": "iterations: 597\ncpu: 1556358.9614740356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1583142.0337836694,
            "unit": "ns/iter",
            "extra": "iterations: 592\ncpu: 1583059.4594594622 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1566410.1929529954,
            "unit": "ns/iter",
            "extra": "iterations: 596\ncpu: 1566316.2751677807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 956209.1453607742,
            "unit": "ns/iter",
            "extra": "iterations: 970\ncpu: 956117.0103092777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1513229.4350651107,
            "unit": "ns/iter",
            "extra": "iterations: 616\ncpu: 1513166.720779225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 6482788.559999335,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6482451.999999981 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 3703167.173228387,
            "unit": "ns/iter",
            "extra": "iterations: 254\ncpu: 3702914.960629906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 24880.372004124656,
            "unit": "ns/iter",
            "extra": "iterations: 32962\ncpu: 24878.390267580915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 113734.3616823781,
            "unit": "ns/iter",
            "extra": "iterations: 7537\ncpu: 113728.9107071783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 88455.90771124774,
            "unit": "ns/iter",
            "extra": "iterations: 9752\ncpu: 88450.77932731749 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 86633.02841197909,
            "unit": "ns/iter",
            "extra": "iterations: 9855\ncpu: 86631.19228817886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 88331.97786969505,
            "unit": "ns/iter",
            "extra": "iterations: 9670\ncpu: 88324.2916235778 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 230642.16954100615,
            "unit": "ns/iter",
            "extra": "iterations: 3769\ncpu: 230635.07561687546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 1853141.89021944,
            "unit": "ns/iter",
            "extra": "iterations: 501\ncpu: 1852989.6207584778 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1536522.996721368,
            "unit": "ns/iter",
            "extra": "iterations: 610\ncpu: 1536456.3934426317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1571050.834459544,
            "unit": "ns/iter",
            "extra": "iterations: 592\ncpu: 1570918.7500000058 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1560599.736227135,
            "unit": "ns/iter",
            "extra": "iterations: 599\ncpu: 1560513.3555926548 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 958466.3618557223,
            "unit": "ns/iter",
            "extra": "iterations: 970\ncpu: 958400.7216494859 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1509041.0243112931,
            "unit": "ns/iter",
            "extra": "iterations: 617\ncpu: 1508967.5850891399 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 2884.4609539387975,
            "unit": "ns/iter",
            "extra": "iterations: 243328\ncpu: 2884.251298658578 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 14153.873980242111,
            "unit": "ns/iter",
            "extra": "iterations: 48786\ncpu: 14153.248882876203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 11302.635060159164,
            "unit": "ns/iter",
            "extra": "iterations: 62002\ncpu: 11302.282184445674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 11046.83203519305,
            "unit": "ns/iter",
            "extra": "iterations: 63424\ncpu: 11046.543895055558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 9320.441603399084,
            "unit": "ns/iter",
            "extra": "iterations: 74816\ncpu: 9319.725727117153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 54721.87347608486,
            "unit": "ns/iter",
            "extra": "iterations: 12796\ncpu: 54718.310409502985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 121698.10398191436,
            "unit": "ns/iter",
            "extra": "iterations: 5751\ncpu: 121691.20153016901 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 32320.957395793717,
            "unit": "ns/iter",
            "extra": "iterations: 21688\ncpu: 32318.157506455264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 32373.135277158086,
            "unit": "ns/iter",
            "extra": "iterations: 21504\ncpu: 32371.363467261865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 32581.6087118042,
            "unit": "ns/iter",
            "extra": "iterations: 21534\ncpu: 32579.48825113777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 67112.0536758275,
            "unit": "ns/iter",
            "extra": "iterations: 10433\ncpu: 67108.20473497658 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 58125.99825697382,
            "unit": "ns/iter",
            "extra": "iterations: 12048\ncpu: 58122.393758299964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 17818.357621123265,
            "unit": "ns/iter",
            "extra": "iterations: 39279\ncpu: 17818.18528984933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 85390.34150227018,
            "unit": "ns/iter",
            "extra": "iterations: 8161\ncpu: 85382.55115794716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 68510.96914487307,
            "unit": "ns/iter",
            "extra": "iterations: 10209\ncpu: 68505.09354491052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 70371.98118333702,
            "unit": "ns/iter",
            "extra": "iterations: 9938\ncpu: 70367.20668142443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 71513.7377949614,
            "unit": "ns/iter",
            "extra": "iterations: 9832\ncpu: 71509.0825874699 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 137821.64609297254,
            "unit": "ns/iter",
            "extra": "iterations: 5055\ncpu: 137819.92087042335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 528971.786253815,
            "unit": "ns/iter",
            "extra": "iterations: 1324\ncpu: 528934.290030204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 456260.2403657847,
            "unit": "ns/iter",
            "extra": "iterations: 1531\ncpu: 456256.23775309767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 466654.65153541113,
            "unit": "ns/iter",
            "extra": "iterations: 1498\ncpu: 466625.96795727685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 456409.25097782904,
            "unit": "ns/iter",
            "extra": "iterations: 1534\ncpu: 456385.65840938553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 308550.69325691665,
            "unit": "ns/iter",
            "extra": "iterations: 2269\ncpu: 308525.73821066314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 449504.77585099847,
            "unit": "ns/iter",
            "extra": "iterations: 1557\ncpu: 449472.1258831025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 17815.871996539725,
            "unit": "ns/iter",
            "extra": "iterations: 39288\ncpu: 17814.515882712192 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 86781.18026283038,
            "unit": "ns/iter",
            "extra": "iterations: 8066\ncpu: 86773.81601785173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 69649.99147924785,
            "unit": "ns/iter",
            "extra": "iterations: 10093\ncpu: 69645.83374616082 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 71151.81147458119,
            "unit": "ns/iter",
            "extra": "iterations: 9813\ncpu: 71146.78487720356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 70687.02312897859,
            "unit": "ns/iter",
            "extra": "iterations: 9901\ncpu: 70681.64831835219 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 137455.73944630974,
            "unit": "ns/iter",
            "extra": "iterations: 5093\ncpu: 137443.13763989782 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 531266.2924242514,
            "unit": "ns/iter",
            "extra": "iterations: 1320\ncpu: 531239.7727272676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 455288.27111982566,
            "unit": "ns/iter",
            "extra": "iterations: 1527\ncpu: 455240.79895219003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 462388.534620546,
            "unit": "ns/iter",
            "extra": "iterations: 1502\ncpu: 462359.25432755775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 459088.6079842797,
            "unit": "ns/iter",
            "extra": "iterations: 1528\ncpu: 459062.82722513034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 311570.52183598775,
            "unit": "ns/iter",
            "extra": "iterations: 2244\ncpu: 311541.6221033843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 451130.24580645753,
            "unit": "ns/iter",
            "extra": "iterations: 1550\ncpu: 451118.1290322585 ns\nthreads: 1"
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
        "date": 1705961418508,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 7496.091492879949,
            "unit": "ns/iter",
            "extra": "iterations: 93122\ncpu: 7495.730332252314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 65986.6341748622,
            "unit": "ns/iter",
            "extra": "iterations: 12834\ncpu: 65984.26834969611 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 125694.11021116418,
            "unit": "ns/iter",
            "extra": "iterations: 6914\ncpu: 125687.74949378072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 185001.39466947978,
            "unit": "ns/iter",
            "extra": "iterations: 4690\ncpu: 184996.39658848612 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 256473.7736009284,
            "unit": "ns/iter",
            "extra": "iterations: 3538\ncpu: 256460.00565291138 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 302782.3033344773,
            "unit": "ns/iter",
            "extra": "iterations: 2789\ncpu: 302765.75833632145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 360533.74885273405,
            "unit": "ns/iter",
            "extra": "iterations: 2397\ncpu: 360515.47768043395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 418542.59692160896,
            "unit": "ns/iter",
            "extra": "iterations: 2079\ncpu: 418522.70322270336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 479014.1939725824,
            "unit": "ns/iter",
            "extra": "iterations: 1825\ncpu: 478988.8219178086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 5621.250521853218,
            "unit": "ns/iter",
            "extra": "iterations: 124077\ncpu: 5621.011146304316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 4786.819295308078,
            "unit": "ns/iter",
            "extra": "iterations: 146305\ncpu: 4786.716790266905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4748.616467061183,
            "unit": "ns/iter",
            "extra": "iterations: 147458\ncpu: 4748.596888605566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 4780.920719342315,
            "unit": "ns/iter",
            "extra": "iterations: 146467\ncpu: 4780.805915325633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 8334.776281862072,
            "unit": "ns/iter",
            "extra": "iterations: 84155\ncpu: 8334.598063097861 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 25721.502643509146,
            "unit": "ns/iter",
            "extra": "iterations: 31776\ncpu: 25720.499748237675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 107355.231730417,
            "unit": "ns/iter",
            "extra": "iterations: 7923\ncpu: 107348.60532626518 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 88222.30405897953,
            "unit": "ns/iter",
            "extra": "iterations: 9633\ncpu: 88219.21519775777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 88191.3690978188,
            "unit": "ns/iter",
            "extra": "iterations: 9721\ncpu: 88187.40870280845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 88061.11400784938,
            "unit": "ns/iter",
            "extra": "iterations: 9666\ncpu: 88058.49368921998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 233071.5067458231,
            "unit": "ns/iter",
            "extra": "iterations: 3706\ncpu: 233059.76794387438 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 1922311.4365905037,
            "unit": "ns/iter",
            "extra": "iterations: 481\ncpu: 1922223.4927234922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1586091.0355933688,
            "unit": "ns/iter",
            "extra": "iterations: 590\ncpu: 1586037.6271186487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1619756.8024260744,
            "unit": "ns/iter",
            "extra": "iterations: 577\ncpu: 1619669.4974003474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1631178.547992882,
            "unit": "ns/iter",
            "extra": "iterations: 573\ncpu: 1631121.1169284435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 996689.4346895951,
            "unit": "ns/iter",
            "extra": "iterations: 934\ncpu: 996647.5374732323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1560068.447811272,
            "unit": "ns/iter",
            "extra": "iterations: 594\ncpu: 1559995.7912457883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 6739802.160000181,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6739446.000000022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 3814954.534979842,
            "unit": "ns/iter",
            "extra": "iterations: 243\ncpu: 3814840.329218111 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 8459567.945736533,
            "unit": "ns/iter",
            "extra": "iterations: 129\ncpu: 8459017.829457363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 25935.280200860976,
            "unit": "ns/iter",
            "extra": "iterations: 31663\ncpu: 25934.270283927635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 110000.02779573842,
            "unit": "ns/iter",
            "extra": "iterations: 7735\ncpu: 109995.41047188132 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 88112.837720214,
            "unit": "ns/iter",
            "extra": "iterations: 9650\ncpu: 88111.21243523354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 87710.9486758359,
            "unit": "ns/iter",
            "extra": "iterations: 9742\ncpu: 87707.53438719001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 91681.21914410999,
            "unit": "ns/iter",
            "extra": "iterations: 9277\ncpu: 91675.3152958933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 240125.1221140551,
            "unit": "ns/iter",
            "extra": "iterations: 3595\ncpu: 240109.87482614673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 1972029.4501063097,
            "unit": "ns/iter",
            "extra": "iterations: 471\ncpu: 1971971.1252654037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1642875.9999998275,
            "unit": "ns/iter",
            "extra": "iterations: 577\ncpu: 1642770.8838821456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1769863.5658361744,
            "unit": "ns/iter",
            "extra": "iterations: 562\ncpu: 1769761.0320284716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1650105.6707749234,
            "unit": "ns/iter",
            "extra": "iterations: 568\ncpu: 1650027.4647887356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 992168.4511279747,
            "unit": "ns/iter",
            "extra": "iterations: 931\ncpu: 992110.9559613321 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1572331.4553119724,
            "unit": "ns/iter",
            "extra": "iterations: 593\ncpu: 1572279.5952782384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 6753928.460000225,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6753601.00000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 3775664.117409193,
            "unit": "ns/iter",
            "extra": "iterations: 247\ncpu: 3775550.202429144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 24637.43645489934,
            "unit": "ns/iter",
            "extra": "iterations: 33071\ncpu: 24636.30068640214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 109035.2929797722,
            "unit": "ns/iter",
            "extra": "iterations: 7806\ncpu: 109031.50140917259 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 88134.45647668613,
            "unit": "ns/iter",
            "extra": "iterations: 9650\ncpu: 88129.56476683923 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 86552.98103201819,
            "unit": "ns/iter",
            "extra": "iterations: 9806\ncpu: 86548.78645727095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 86759.45730394036,
            "unit": "ns/iter",
            "extra": "iterations: 9755\ncpu: 86756.0328036899 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 237360.11111112928,
            "unit": "ns/iter",
            "extra": "iterations: 3627\ncpu: 237355.63826854122 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 1937238.8580378054,
            "unit": "ns/iter",
            "extra": "iterations: 479\ncpu: 1937140.2922755745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1601749.139931428,
            "unit": "ns/iter",
            "extra": "iterations: 586\ncpu: 1601713.9931740658 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1627473.6505191834,
            "unit": "ns/iter",
            "extra": "iterations: 578\ncpu: 1627416.782006928 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1630967.24479159,
            "unit": "ns/iter",
            "extra": "iterations: 576\ncpu: 1630891.8402777717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 998355.8190578982,
            "unit": "ns/iter",
            "extra": "iterations: 934\ncpu: 998288.222698074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1573145.5692569835,
            "unit": "ns/iter",
            "extra": "iterations: 592\ncpu: 1573057.4324324422 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 2890.915776620054,
            "unit": "ns/iter",
            "extra": "iterations: 242403\ncpu: 2890.7917806297737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 14952.74467948875,
            "unit": "ns/iter",
            "extra": "iterations: 46753\ncpu: 14952.131414026828 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 11683.825080910006,
            "unit": "ns/iter",
            "extra": "iterations: 59942\ncpu: 11683.07363784992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 11341.135397899656,
            "unit": "ns/iter",
            "extra": "iterations: 61611\ncpu: 11340.969956663606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 9876.717219591386,
            "unit": "ns/iter",
            "extra": "iterations: 70896\ncpu: 9876.5163055743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 56660.0797025467,
            "unit": "ns/iter",
            "extra": "iterations: 12371\ncpu: 56658.216797348934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 128343.80635094376,
            "unit": "ns/iter",
            "extra": "iterations: 5448\ncpu: 128338.32599118892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 33841.446847630235,
            "unit": "ns/iter",
            "extra": "iterations: 20667\ncpu: 33840.7267624716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 33921.61226671694,
            "unit": "ns/iter",
            "extra": "iterations: 20576\ncpu: 33920.78149300135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 34027.18160629454,
            "unit": "ns/iter",
            "extra": "iterations: 20594\ncpu: 34026.03185393786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 70135.70802773241,
            "unit": "ns/iter",
            "extra": "iterations: 9953\ncpu: 70133.93951572457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 55277.15484838966,
            "unit": "ns/iter",
            "extra": "iterations: 12664\ncpu: 55273.9971572956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 18350.290565150404,
            "unit": "ns/iter",
            "extra": "iterations: 38167\ncpu: 18349.43799617443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 88571.67067612805,
            "unit": "ns/iter",
            "extra": "iterations: 7898\ncpu: 88570.48619903765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 71721.11297413163,
            "unit": "ns/iter",
            "extra": "iterations: 9781\ncpu: 71718.80175851077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 71423.28286323564,
            "unit": "ns/iter",
            "extra": "iterations: 9821\ncpu: 71420.25252010999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 72445.15741507761,
            "unit": "ns/iter",
            "extra": "iterations: 9656\ncpu: 72441.26967688586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 140573.27951808381,
            "unit": "ns/iter",
            "extra": "iterations: 4980\ncpu: 140568.79518072293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 560050.4215999536,
            "unit": "ns/iter",
            "extra": "iterations: 1250\ncpu: 560039.7599999951 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 475223.33129678003,
            "unit": "ns/iter",
            "extra": "iterations: 1473\ncpu: 475213.2382892032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 483198.4066161992,
            "unit": "ns/iter",
            "extra": "iterations: 1451\ncpu: 483170.503101306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 479129.23763733293,
            "unit": "ns/iter",
            "extra": "iterations: 1456\ncpu: 479100.0686813204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 320195.2065017806,
            "unit": "ns/iter",
            "extra": "iterations: 2184\ncpu: 320180.5860805894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 472340.3708698671,
            "unit": "ns/iter",
            "extra": "iterations: 1483\ncpu: 472325.9608900875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 18796.212029311904,
            "unit": "ns/iter",
            "extra": "iterations: 37259\ncpu: 18795.23605035009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 89768.19314842032,
            "unit": "ns/iter",
            "extra": "iterations: 7823\ncpu: 89764.80889684372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 71666.98708223514,
            "unit": "ns/iter",
            "extra": "iterations: 9754\ncpu: 71663.70719704777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 71812.6701179005,
            "unit": "ns/iter",
            "extra": "iterations: 9755\ncpu: 71809.80010251176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 72946.79487714428,
            "unit": "ns/iter",
            "extra": "iterations: 9604\ncpu: 72945.07496876288 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 140894.03117458447,
            "unit": "ns/iter",
            "extra": "iterations: 4972\ncpu: 140882.94448913832 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 559703.9418789805,
            "unit": "ns/iter",
            "extra": "iterations: 1256\ncpu: 559683.9968152907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 474169.4176271082,
            "unit": "ns/iter",
            "extra": "iterations: 1475\ncpu: 474145.49152542074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 484333.8201935769,
            "unit": "ns/iter",
            "extra": "iterations: 1446\ncpu: 484318.0497925317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 477818.7392491601,
            "unit": "ns/iter",
            "extra": "iterations: 1465\ncpu: 477796.1774743996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 321813.85582676984,
            "unit": "ns/iter",
            "extra": "iterations: 2171\ncpu: 321794.6568401675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 472828.381561198,
            "unit": "ns/iter",
            "extra": "iterations: 1486\ncpu: 472803.2974427996 ns\nthreads: 1"
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
        "date": 1705963398091,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 7472.288451634896,
            "unit": "ns/iter",
            "extra": "iterations: 93208\ncpu: 7471.670886619176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 67334.1350190819,
            "unit": "ns/iter",
            "extra": "iterations: 12576\ncpu: 67330.68543256997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 128938.87060040377,
            "unit": "ns/iter",
            "extra": "iterations: 6762\ncpu: 128935.62555456963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 189347.43203670922,
            "unit": "ns/iter",
            "extra": "iterations: 4576\ncpu: 189337.93706293704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 248822.7983314073,
            "unit": "ns/iter",
            "extra": "iterations: 3476\ncpu: 248807.3647871116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 306007.67826705065,
            "unit": "ns/iter",
            "extra": "iterations: 2816\ncpu: 305981.5340909091 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 366132.02319699904,
            "unit": "ns/iter",
            "extra": "iterations: 2371\ncpu: 366096.2463095741 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 427366.125488271,
            "unit": "ns/iter",
            "extra": "iterations: 2048\ncpu: 427347.998046875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 484653.6275055819,
            "unit": "ns/iter",
            "extra": "iterations: 1796\ncpu: 484622.10467706015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 5461.369453260986,
            "unit": "ns/iter",
            "extra": "iterations: 128544\ncpu: 5461.161936768737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 4682.031640394546,
            "unit": "ns/iter",
            "extra": "iterations: 149208\ncpu: 4681.7415956249015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4682.121054921252,
            "unit": "ns/iter",
            "extra": "iterations: 149395\ncpu: 4681.69617457077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 4653.659697206956,
            "unit": "ns/iter",
            "extra": "iterations: 150466\ncpu: 4653.320351441521 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 8144.342799212191,
            "unit": "ns/iter",
            "extra": "iterations: 86310\ncpu: 8143.595180164519 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 26526.766458343132,
            "unit": "ns/iter",
            "extra": "iterations: 30881\ncpu: 26524.908519801797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 109154.54480195418,
            "unit": "ns/iter",
            "extra": "iterations: 7801\ncpu: 109142.78938597607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 88524.79788665933,
            "unit": "ns/iter",
            "extra": "iterations: 9653\ncpu: 88518.1808764117 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 86977.86300395957,
            "unit": "ns/iter",
            "extra": "iterations: 9847\ncpu: 86970.671270438 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 88119.65826186643,
            "unit": "ns/iter",
            "extra": "iterations: 9677\ncpu: 88113.78526402822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 244778.30245692914,
            "unit": "ns/iter",
            "extra": "iterations: 3541\ncpu: 244749.27986444475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 1971901.244813293,
            "unit": "ns/iter",
            "extra": "iterations: 482\ncpu: 1971751.2448132723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1620790.8202443516,
            "unit": "ns/iter",
            "extra": "iterations: 573\ncpu: 1620636.4746945905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1624876.7162872255,
            "unit": "ns/iter",
            "extra": "iterations: 571\ncpu: 1624767.4255691783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1609749.5347222846,
            "unit": "ns/iter",
            "extra": "iterations: 576\ncpu: 1609594.0972222222 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 984074.4592592365,
            "unit": "ns/iter",
            "extra": "iterations: 945\ncpu: 984008.6772486779 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1571627.8125001441,
            "unit": "ns/iter",
            "extra": "iterations: 592\ncpu: 1571488.5135135103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 6549087.570000437,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6548398.999999989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 3839168.9105694015,
            "unit": "ns/iter",
            "extra": "iterations: 246\ncpu: 3838795.9349593585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 8336541.3863634085,
            "unit": "ns/iter",
            "extra": "iterations: 132\ncpu: 8336053.030303038 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 25351.668401163977,
            "unit": "ns/iter",
            "extra": "iterations: 32286\ncpu: 25349.154432261676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 112911.45843729172,
            "unit": "ns/iter",
            "extra": "iterations: 7615\ncpu: 112903.70321733422 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 90664.53837987481,
            "unit": "ns/iter",
            "extra": "iterations: 9419\ncpu: 90655.21817602718 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 87869.67369828859,
            "unit": "ns/iter",
            "extra": "iterations: 9718\ncpu: 87863.84029635724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 90997.66673771918,
            "unit": "ns/iter",
            "extra": "iterations: 9383\ncpu: 90989.82201854422 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 247727.01146130438,
            "unit": "ns/iter",
            "extra": "iterations: 3490\ncpu: 247706.24641833888 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 1965635.2241015616,
            "unit": "ns/iter",
            "extra": "iterations: 473\ncpu: 1965425.3699788593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1641920.892416318,
            "unit": "ns/iter",
            "extra": "iterations: 567\ncpu: 1641826.9841269755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1657629.7188612928,
            "unit": "ns/iter",
            "extra": "iterations: 562\ncpu: 1657500.1779359404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1626890.789198661,
            "unit": "ns/iter",
            "extra": "iterations: 574\ncpu: 1626776.1324041756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 988626.354941522,
            "unit": "ns/iter",
            "extra": "iterations: 941\ncpu: 988527.2051009613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1588029.4268707193,
            "unit": "ns/iter",
            "extra": "iterations: 588\ncpu: 1587925.6802721177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 6641906.510000126,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6641005.000000035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 3811811.4065040997,
            "unit": "ns/iter",
            "extra": "iterations: 246\ncpu: 3811696.7479674728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 24800.658464327877,
            "unit": "ns/iter",
            "extra": "iterations: 33080\ncpu: 24798.63966142697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 111157.14439264477,
            "unit": "ns/iter",
            "extra": "iterations: 7722\ncpu: 111154.1958041956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 88241.30650042307,
            "unit": "ns/iter",
            "extra": "iterations: 8261\ncpu: 88238.14308195174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 86358.02510081104,
            "unit": "ns/iter",
            "extra": "iterations: 9920\ncpu: 86351.98588709698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 88715.02083984621,
            "unit": "ns/iter",
            "extra": "iterations: 9597\ncpu: 88708.6381160778 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 244060.36747327636,
            "unit": "ns/iter",
            "extra": "iterations: 3554\ncpu: 244048.7900956654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 1946660.9560669998,
            "unit": "ns/iter",
            "extra": "iterations: 478\ncpu: 1946520.0836820086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1639167.629174083,
            "unit": "ns/iter",
            "extra": "iterations: 569\ncpu: 1639113.0052724082 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1651695.0177304833,
            "unit": "ns/iter",
            "extra": "iterations: 564\ncpu: 1650496.6312056792 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1612404.306479778,
            "unit": "ns/iter",
            "extra": "iterations: 571\ncpu: 1612327.8458844197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 978660.3911673006,
            "unit": "ns/iter",
            "extra": "iterations: 951\ncpu: 978584.5425867472 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1572118.4268706988,
            "unit": "ns/iter",
            "extra": "iterations: 588\ncpu: 1572053.061224488 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 2779.291413482449,
            "unit": "ns/iter",
            "extra": "iterations: 251464\ncpu: 2779.202987306337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 14198.53199747945,
            "unit": "ns/iter",
            "extra": "iterations: 49207\ncpu: 14198.437214217438 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 11180.1314208088,
            "unit": "ns/iter",
            "extra": "iterations: 62570\ncpu: 11179.247243087766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 11094.453389830001,
            "unit": "ns/iter",
            "extra": "iterations: 63248\ncpu: 11093.565013913507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 9476.9057103482,
            "unit": "ns/iter",
            "extra": "iterations: 74006\ncpu: 9475.81817690456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 59818.964043597596,
            "unit": "ns/iter",
            "extra": "iterations: 11653\ncpu: 59817.73792156505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 127398.58100255221,
            "unit": "ns/iter",
            "extra": "iterations: 5506\ncpu: 127397.52996730902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 33055.49206198788,
            "unit": "ns/iter",
            "extra": "iterations: 21164\ncpu: 33054.24305424297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 33366.04031567828,
            "unit": "ns/iter",
            "extra": "iterations: 21034\ncpu: 33365.76019777542 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 33451.07546085597,
            "unit": "ns/iter",
            "extra": "iterations: 20885\ncpu: 33449.59540339933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 69340.5734099412,
            "unit": "ns/iter",
            "extra": "iterations: 10094\ncpu: 69337.32910639922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 60253.340108515564,
            "unit": "ns/iter",
            "extra": "iterations: 11611\ncpu: 60251.19283438122 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 18637.82909863465,
            "unit": "ns/iter",
            "extra": "iterations: 37665\ncpu: 18636.840568166426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 92604.91135551046,
            "unit": "ns/iter",
            "extra": "iterations: 7547\ncpu: 92598.66171988967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 72580.97549374915,
            "unit": "ns/iter",
            "extra": "iterations: 9671\ncpu: 72577.38599938071 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 73503.93138701555,
            "unit": "ns/iter",
            "extra": "iterations: 9488\ncpu: 73500.24241146742 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 73829.2714965592,
            "unit": "ns/iter",
            "extra": "iterations: 9455\ncpu: 73827.10735060823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 138973.28054117042,
            "unit": "ns/iter",
            "extra": "iterations: 5026\ncpu: 138965.53919617992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 559960.7794586121,
            "unit": "ns/iter",
            "extra": "iterations: 1256\ncpu: 559922.9299363018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 475541.0960490559,
            "unit": "ns/iter",
            "extra": "iterations: 1468\ncpu: 475505.9264305191 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 485581.2520776179,
            "unit": "ns/iter",
            "extra": "iterations: 1444\ncpu: 485559.8337950195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 477969.0259032046,
            "unit": "ns/iter",
            "extra": "iterations: 1467\ncpu: 477951.87457396364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 320326.62236482836,
            "unit": "ns/iter",
            "extra": "iterations: 2182\ncpu: 320312.8780934909 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 468646.3668678703,
            "unit": "ns/iter",
            "extra": "iterations: 1491\ncpu: 468624.5472837017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 18619.56532148821,
            "unit": "ns/iter",
            "extra": "iterations: 37591\ncpu: 18618.66138171394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 90741.13096932604,
            "unit": "ns/iter",
            "extra": "iterations: 7727\ncpu: 90737.46602821299 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 71931.05008227142,
            "unit": "ns/iter",
            "extra": "iterations: 9724\ncpu: 71927.68408062553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 74153.05505654724,
            "unit": "ns/iter",
            "extra": "iterations: 9463\ncpu: 74149.46634259714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 73401.7061044687,
            "unit": "ns/iter",
            "extra": "iterations: 9534\ncpu: 73397.78686805157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 139946.1882753109,
            "unit": "ns/iter",
            "extra": "iterations: 4998\ncpu: 139938.65546218434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 553620.599209457,
            "unit": "ns/iter",
            "extra": "iterations: 1265\ncpu: 553593.7549407136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 480603.8791208543,
            "unit": "ns/iter",
            "extra": "iterations: 1456\ncpu: 480581.7994505522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 486527.4394993126,
            "unit": "ns/iter",
            "extra": "iterations: 1438\ncpu: 486490.5424200218 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 479120.3271731926,
            "unit": "ns/iter",
            "extra": "iterations: 1461\ncpu: 479104.24366872106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 322810.3576709398,
            "unit": "ns/iter",
            "extra": "iterations: 2164\ncpu: 322793.16081330716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 468947.26492283714,
            "unit": "ns/iter",
            "extra": "iterations: 1491\ncpu: 468918.4439973106 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}