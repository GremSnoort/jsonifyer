window.BENCHMARK_DATA = {
  "lastUpdate": 1705952930624,
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
      }
    ]
  }
}