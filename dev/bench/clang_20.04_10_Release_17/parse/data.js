window.BENCHMARK_DATA = {
  "lastUpdate": 1705957101764,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Parse clang-10 20.04 Release c++-17": [
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
        "date": 1702490331765,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 514.9070602845597,
            "unit": "ns/iter",
            "extra": "iterations: 1350413\ncpu: 514.8802625567141 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5761.814091777846,
            "unit": "ns/iter",
            "extra": "iterations: 140252\ncpu: 5761.629780680491 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 9847.50461776968,
            "unit": "ns/iter",
            "extra": "iterations: 85106\ncpu: 9847.064836791766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 14699.945555535802,
            "unit": "ns/iter",
            "extra": "iterations: 57251\ncpu: 14699.432324326213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 18694.86572389648,
            "unit": "ns/iter",
            "extra": "iterations: 43701\ncpu: 18695.048168234134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 22970.24957541181,
            "unit": "ns/iter",
            "extra": "iterations: 36506\ncpu: 22970.498000328724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 27874.06580477859,
            "unit": "ns/iter",
            "extra": "iterations: 30089\ncpu: 27873.953936654605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 32268.081579048325,
            "unit": "ns/iter",
            "extra": "iterations: 25889\ncpu: 32267.46108385799 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 36789.877489237726,
            "unit": "ns/iter",
            "extra": "iterations: 21141\ncpu: 36789.78761647985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 501.1113599836104,
            "unit": "ns/iter",
            "extra": "iterations: 1403664\ncpu: 501.09926592118995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 392.8511799576877,
            "unit": "ns/iter",
            "extra": "iterations: 1780318\ncpu: 392.8380210726403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 389.5342319186253,
            "unit": "ns/iter",
            "extra": "iterations: 1793560\ncpu: 389.5263609803969 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 388.61204489017985,
            "unit": "ns/iter",
            "extra": "iterations: 1802889\ncpu: 388.6058431772567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 840.0522335783285,
            "unit": "ns/iter",
            "extra": "iterations: 842236\ncpu: 840.0119443956321 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1714.2107361675282,
            "unit": "ns/iter",
            "extra": "iterations: 479035\ncpu: 1714.1453129729557 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 9015.528217588295,
            "unit": "ns/iter",
            "extra": "iterations: 89306\ncpu: 9015.185989743126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 7151.981231107888,
            "unit": "ns/iter",
            "extra": "iterations: 115457\ncpu: 7151.755198905244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 7044.473288597144,
            "unit": "ns/iter",
            "extra": "iterations: 115344\ncpu: 7044.370751837986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 6921.83509044291,
            "unit": "ns/iter",
            "extra": "iterations: 119799\ncpu: 6921.787327106217 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 27548.386642407084,
            "unit": "ns/iter",
            "extra": "iterations: 29676\ncpu: 27547.580536460355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 232427.92582852353,
            "unit": "ns/iter",
            "extra": "iterations: 3802\ncpu: 232425.40768016843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 177859.11554447573,
            "unit": "ns/iter",
            "extra": "iterations: 4812\ncpu: 177851.74563591016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 179596.3462580707,
            "unit": "ns/iter",
            "extra": "iterations: 4797\ncpu: 179589.24327704788 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 181341.7423707633,
            "unit": "ns/iter",
            "extra": "iterations: 4817\ncpu: 181331.63794893093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 95809.81764641029,
            "unit": "ns/iter",
            "extra": "iterations: 9169\ncpu: 95807.40538771944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 175703.72605212082,
            "unit": "ns/iter",
            "extra": "iterations: 4990\ncpu: 175698.95791583182 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5433.6843832108825,
            "unit": "ns/iter",
            "extra": "iterations: 151478\ncpu: 5433.434558153654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 26032.384849802005,
            "unit": "ns/iter",
            "extra": "iterations: 32158\ncpu: 26032.00447789044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 20074.14593052639,
            "unit": "ns/iter",
            "extra": "iterations: 41369\ncpu: 20074.026444922503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 20010.484185502424,
            "unit": "ns/iter",
            "extra": "iterations: 41228\ncpu: 20010.058697972214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 19370.24254988315,
            "unit": "ns/iter",
            "extra": "iterations: 42449\ncpu: 19369.883860632806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 43884.14810326842,
            "unit": "ns/iter",
            "extra": "iterations: 18980\ncpu: 43882.12855637514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 251799.8713550579,
            "unit": "ns/iter",
            "extra": "iterations: 3498\ncpu: 251795.08290451663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 197457.3744603722,
            "unit": "ns/iter",
            "extra": "iterations: 4401\ncpu: 197451.60190865787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 197152.77168020638,
            "unit": "ns/iter",
            "extra": "iterations: 4428\ncpu: 197147.31255645974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 196319.86459040258,
            "unit": "ns/iter",
            "extra": "iterations: 4431\ncpu: 196314.19544120945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 108602.69127349193,
            "unit": "ns/iter",
            "extra": "iterations: 8033\ncpu: 108600.69712436238 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 189343.1114746959,
            "unit": "ns/iter",
            "extra": "iterations: 4584\ncpu: 189336.67102966775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 784410.9106700146,
            "unit": "ns/iter",
            "extra": "iterations: 1209\ncpu: 784372.704714642 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 429445.78682168823,
            "unit": "ns/iter",
            "extra": "iterations: 2064\ncpu: 429430.81395348883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 1630.4339866465627,
            "unit": "ns/iter",
            "extra": "iterations: 510730\ncpu: 1630.3814148375884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 8528.890561883498,
            "unit": "ns/iter",
            "extra": "iterations: 96301\ncpu: 8528.44518748511 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 6531.2792223862725,
            "unit": "ns/iter",
            "extra": "iterations: 125255\ncpu: 6530.896171809495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 6725.639882891647,
            "unit": "ns/iter",
            "extra": "iterations: 124329\ncpu: 6725.424478601111 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 6445.086409370166,
            "unit": "ns/iter",
            "extra": "iterations: 127220\ncpu: 6445.086464392379 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 26783.512076522387,
            "unit": "ns/iter",
            "extra": "iterations: 31259\ncpu: 26783.160049905568 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 238699.43257966347,
            "unit": "ns/iter",
            "extra": "iterations: 3671\ncpu: 238644.07518387225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 179573.8515337501,
            "unit": "ns/iter",
            "extra": "iterations: 4890\ncpu: 179575.7873210628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 180661.6855001933,
            "unit": "ns/iter",
            "extra": "iterations: 4938\ncpu: 180660.4698258407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 180938.43503056502,
            "unit": "ns/iter",
            "extra": "iterations: 4910\ncpu: 180940.40733197588 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 92790.7441959089,
            "unit": "ns/iter",
            "extra": "iterations: 9433\ncpu: 92789.48372734002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 175307.17783504984,
            "unit": "ns/iter",
            "extra": "iterations: 5044\ncpu: 175309.04044409154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 195.88907169038694,
            "unit": "ns/iter",
            "extra": "iterations: 3576436\ncpu: 195.88900793974727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1379.2608022013105,
            "unit": "ns/iter",
            "extra": "iterations: 507304\ncpu: 1379.2455805591876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1031.5423531993802,
            "unit": "ns/iter",
            "extra": "iterations: 678591\ncpu: 1031.5117648185792 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1027.1687980932184,
            "unit": "ns/iter",
            "extra": "iterations: 679279\ncpu: 1027.1811729789938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 818.734243215703,
            "unit": "ns/iter",
            "extra": "iterations: 854616\ncpu: 818.7430378087931 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9494.267481906032,
            "unit": "ns/iter",
            "extra": "iterations: 74334\ncpu: 9494.26910969402 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 10779.312044021313,
            "unit": "ns/iter",
            "extra": "iterations: 64696\ncpu: 10779.431494992004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2587.6559015320995,
            "unit": "ns/iter",
            "extra": "iterations: 271277\ncpu: 2587.606026312606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2583.801906623448,
            "unit": "ns/iter",
            "extra": "iterations: 271160\ncpu: 2583.8294733736675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2564.6699054334154,
            "unit": "ns/iter",
            "extra": "iterations: 273458\ncpu: 2564.6358855838844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 4927.116017097567,
            "unit": "ns/iter",
            "extra": "iterations: 142479\ncpu: 4926.907123155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 4353.129894689875,
            "unit": "ns/iter",
            "extra": "iterations: 161808\ncpu: 4352.8546178186225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1925.6242464432275,
            "unit": "ns/iter",
            "extra": "iterations: 364936\ncpu: 1925.5664006839556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 9871.463127677991,
            "unit": "ns/iter",
            "extra": "iterations: 70717\ncpu: 9871.325141055191 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 7778.661463358883,
            "unit": "ns/iter",
            "extra": "iterations: 88085\ncpu: 7778.579780893465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 7804.327990873007,
            "unit": "ns/iter",
            "extra": "iterations: 90283\ncpu: 7804.01958286721 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 7919.908324124794,
            "unit": "ns/iter",
            "extra": "iterations: 88682\ncpu: 7919.496628402509 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 18746.190204647493,
            "unit": "ns/iter",
            "extra": "iterations: 37528\ncpu: 18745.60594755939 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 51375.80302252683,
            "unit": "ns/iter",
            "extra": "iterations: 13631\ncpu: 51375.26226982693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 41501.266654873565,
            "unit": "ns/iter",
            "extra": "iterations: 16962\ncpu: 41500.12970168615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 41475.87591456068,
            "unit": "ns/iter",
            "extra": "iterations: 16948\ncpu: 41473.54850129833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 41426.15758685883,
            "unit": "ns/iter",
            "extra": "iterations: 16924\ncpu: 41425.11226660378 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 25008.53152700557,
            "unit": "ns/iter",
            "extra": "iterations: 27865\ncpu: 25007.20976134912 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 40683.427863592864,
            "unit": "ns/iter",
            "extra": "iterations: 17155\ncpu: 40681.67881084192 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 2087.7191142188326,
            "unit": "ns/iter",
            "extra": "iterations: 336336\ncpu: 2087.6337947766206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 9895.816730478437,
            "unit": "ns/iter",
            "extra": "iterations: 70781\ncpu: 9895.580734943062 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 9171.60026614227,
            "unit": "ns/iter",
            "extra": "iterations: 76651\ncpu: 9171.014076789494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 9149.100281601039,
            "unit": "ns/iter",
            "extra": "iterations: 76704\ncpu: 9148.951814768552 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 8461.92331198327,
            "unit": "ns/iter",
            "extra": "iterations: 81812\ncpu: 8461.684105021237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 18763.805347422753,
            "unit": "ns/iter",
            "extra": "iterations: 37102\ncpu: 18763.047814134166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 50650.67583223356,
            "unit": "ns/iter",
            "extra": "iterations: 13638\ncpu: 50649.41340372551 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 41342.7191178186,
            "unit": "ns/iter",
            "extra": "iterations: 16822\ncpu: 41341.2138865766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 41246.214332363576,
            "unit": "ns/iter",
            "extra": "iterations: 16843\ncpu: 41244.855429555064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 41225.781540819255,
            "unit": "ns/iter",
            "extra": "iterations: 16978\ncpu: 41225.64495229105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 25125.84858527623,
            "unit": "ns/iter",
            "extra": "iterations: 28062\ncpu: 25125.290428337037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 40728.551259826905,
            "unit": "ns/iter",
            "extra": "iterations: 17304\ncpu: 40728.99329634762 ns\nthreads: 1"
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
        "date": 1702492954341,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 503.68256697958003,
            "unit": "ns/iter",
            "extra": "iterations: 1394417\ncpu: 503.67630343003566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5564.351305217916,
            "unit": "ns/iter",
            "extra": "iterations: 145876\ncpu: 5564.020812196661 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 9591.154903468085,
            "unit": "ns/iter",
            "extra": "iterations: 88468\ncpu: 9590.368268752542 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 13870.05789412708,
            "unit": "ns/iter",
            "extra": "iterations: 60317\ncpu: 13869.880796458709 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 18553.656573245637,
            "unit": "ns/iter",
            "extra": "iterations: 45244\ncpu: 18553.58500574661 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 22834.188080770444,
            "unit": "ns/iter",
            "extra": "iterations: 36697\ncpu: 22833.504101152685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 27623.537943553154,
            "unit": "ns/iter",
            "extra": "iterations: 30295\ncpu: 27622.43274467735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 32020.376327188904,
            "unit": "ns/iter",
            "extra": "iterations: 26089\ncpu: 32018.09574916634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 36451.29572560278,
            "unit": "ns/iter",
            "extra": "iterations: 22974\ncpu: 36449.87377034904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 500.8685300184707,
            "unit": "ns/iter",
            "extra": "iterations: 1393725\ncpu: 500.8340956788458 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 396.3113207814816,
            "unit": "ns/iter",
            "extra": "iterations: 1764251\ncpu: 396.28023450177955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 396.3115100664007,
            "unit": "ns/iter",
            "extra": "iterations: 1766280\ncpu: 396.2791290169171 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 394.9258445784538,
            "unit": "ns/iter",
            "extra": "iterations: 1788851\ncpu: 394.9242278982429 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 825.2951195979477,
            "unit": "ns/iter",
            "extra": "iterations: 836427\ncpu: 825.2234803515437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1647.995599317697,
            "unit": "ns/iter",
            "extra": "iterations: 481289\ncpu: 1647.8687441433306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 8915.95283934272,
            "unit": "ns/iter",
            "extra": "iterations: 90690\ncpu: 8915.30157680009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 7254.301757503547,
            "unit": "ns/iter",
            "extra": "iterations: 113684\ncpu: 7247.388374793266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 6976.934171559153,
            "unit": "ns/iter",
            "extra": "iterations: 116834\ncpu: 6976.591574370459 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 6557.9750207899,
            "unit": "ns/iter",
            "extra": "iterations: 123863\ncpu: 6557.57974536385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 27672.022382525298,
            "unit": "ns/iter",
            "extra": "iterations: 29666\ncpu: 27670.3869749883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 236498.01232585678,
            "unit": "ns/iter",
            "extra": "iterations: 3732\ncpu: 236481.56484458726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 181487.22598392877,
            "unit": "ns/iter",
            "extra": "iterations: 4726\ncpu: 181476.38595006365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 180051.19591141384,
            "unit": "ns/iter",
            "extra": "iterations: 4696\ncpu: 180038.62862010175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 180266.07407407815,
            "unit": "ns/iter",
            "extra": "iterations: 4779\ncpu: 180254.6767106096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 95976.0155770142,
            "unit": "ns/iter",
            "extra": "iterations: 9116\ncpu: 95970.89732338733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 176788.8681407024,
            "unit": "ns/iter",
            "extra": "iterations: 4975\ncpu: 176778.6733668336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5384.876783397988,
            "unit": "ns/iter",
            "extra": "iterations: 150345\ncpu: 5384.522930592962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 25870.7259355019,
            "unit": "ns/iter",
            "extra": "iterations: 32496\ncpu: 25869.174667651358 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 20016.9918287379,
            "unit": "ns/iter",
            "extra": "iterations: 41854\ncpu: 20016.26606775931 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 20119.411485683868,
            "unit": "ns/iter",
            "extra": "iterations: 41321\ncpu: 20118.039253648305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 20051.358861259494,
            "unit": "ns/iter",
            "extra": "iterations: 41941\ncpu: 20050.213395007264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 44122.70686337189,
            "unit": "ns/iter",
            "extra": "iterations: 18708\ncpu: 44121.22086807757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 248210.26797007702,
            "unit": "ns/iter",
            "extra": "iterations: 3478\ncpu: 248200.77630822198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 195312.18151220868,
            "unit": "ns/iter",
            "extra": "iterations: 4457\ncpu: 195299.91025353462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 194200.07955056534,
            "unit": "ns/iter",
            "extra": "iterations: 4450\ncpu: 194186.49438202128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 193047.08469342883,
            "unit": "ns/iter",
            "extra": "iterations: 4534\ncpu: 193035.862373181 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 108303.17164271935,
            "unit": "ns/iter",
            "extra": "iterations: 8005\ncpu: 108295.20299812639 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 187658.89325232827,
            "unit": "ns/iter",
            "extra": "iterations: 4609\ncpu: 187648.60056411434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 778303.9385748826,
            "unit": "ns/iter",
            "extra": "iterations: 1221\ncpu: 778242.0966420943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 441392.83739431086,
            "unit": "ns/iter",
            "extra": "iterations: 2011\ncpu: 441369.16956737946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 1592.6770229557887,
            "unit": "ns/iter",
            "extra": "iterations: 505844\ncpu: 1592.564703742644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 8409.543381064417,
            "unit": "ns/iter",
            "extra": "iterations: 97070\ncpu: 8409.081075512488 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 6468.005386420791,
            "unit": "ns/iter",
            "extra": "iterations: 126986\ncpu: 6467.37514371665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 6589.411160141713,
            "unit": "ns/iter",
            "extra": "iterations: 123959\ncpu: 6589.234343613597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 6200.379142697013,
            "unit": "ns/iter",
            "extra": "iterations: 132462\ncpu: 6200.357838474404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 26878.85319594407,
            "unit": "ns/iter",
            "extra": "iterations: 31055\ncpu: 26878.122685557853 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 236002.4558784251,
            "unit": "ns/iter",
            "extra": "iterations: 3751\ncpu: 235983.7376699557 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 179262.24592833684,
            "unit": "ns/iter",
            "extra": "iterations: 4912\ncpu: 179253.72557003162 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 180300.76093175102,
            "unit": "ns/iter",
            "extra": "iterations: 4894\ncpu: 180287.00449529974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 177072.81913605967,
            "unit": "ns/iter",
            "extra": "iterations: 4954\ncpu: 177063.22163907942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 94214.65350167797,
            "unit": "ns/iter",
            "extra": "iterations: 9267\ncpu: 94206.93859933056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 172123.67788650747,
            "unit": "ns/iter",
            "extra": "iterations: 5110\ncpu: 172114.4031311149 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 194.80746761035687,
            "unit": "ns/iter",
            "extra": "iterations: 3589957\ncpu: 194.7927231440377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1314.9123703484297,
            "unit": "ns/iter",
            "extra": "iterations: 531521\ncpu: 1314.8669572791962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1062.0278364059923,
            "unit": "ns/iter",
            "extra": "iterations: 657628\ncpu: 1062.0005535044136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1139.6421484787454,
            "unit": "ns/iter",
            "extra": "iterations: 645480\ncpu: 1139.5544401065795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 807.4603317425161,
            "unit": "ns/iter",
            "extra": "iterations: 866877\ncpu: 807.4151234834899 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9367.469191926408,
            "unit": "ns/iter",
            "extra": "iterations: 75451\ncpu: 9366.839405707036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 10592.515845788237,
            "unit": "ns/iter",
            "extra": "iterations: 66169\ncpu: 10592.058214571725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2504.752629971134,
            "unit": "ns/iter",
            "extra": "iterations: 278235\ncpu: 2504.6852480816647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2581.9088550689553,
            "unit": "ns/iter",
            "extra": "iterations: 271370\ncpu: 2581.919519475268 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2514.884379096412,
            "unit": "ns/iter",
            "extra": "iterations: 277692\ncpu: 2514.8761937686304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 4867.267688179013,
            "unit": "ns/iter",
            "extra": "iterations: 143839\ncpu: 4867.203609591255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 4566.526952051626,
            "unit": "ns/iter",
            "extra": "iterations: 152122\ncpu: 4566.05553437373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1893.4580369220794,
            "unit": "ns/iter",
            "extra": "iterations: 365905\ncpu: 1893.3504598188129 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 9943.333437278296,
            "unit": "ns/iter",
            "extra": "iterations: 70550\ncpu: 9942.603827073131 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 7948.127201631509,
            "unit": "ns/iter",
            "extra": "iterations: 88741\ncpu: 7947.857247495558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 7736.294973633482,
            "unit": "ns/iter",
            "extra": "iterations: 89886\ncpu: 7735.802015886768 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 7987.19682219471,
            "unit": "ns/iter",
            "extra": "iterations: 88237\ncpu: 7986.501127644979 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 18506.858309612726,
            "unit": "ns/iter",
            "extra": "iterations: 37589\ncpu: 18505.631966799046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 50233.80452704684,
            "unit": "ns/iter",
            "extra": "iterations: 13828\ncpu: 50229.700607462706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 40926.69623279942,
            "unit": "ns/iter",
            "extra": "iterations: 17148\ncpu: 40923.116398413775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 40601.89637395967,
            "unit": "ns/iter",
            "extra": "iterations: 17264\ncpu: 40598.14063948144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 40486.46409827298,
            "unit": "ns/iter",
            "extra": "iterations: 17339\ncpu: 40484.28398408255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 24720.14598770872,
            "unit": "ns/iter",
            "extra": "iterations: 28475\ncpu: 24717.994732220996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 40508.00285564017,
            "unit": "ns/iter",
            "extra": "iterations: 17159\ncpu: 40506.46890844417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1885.7054286939751,
            "unit": "ns/iter",
            "extra": "iterations: 368118\ncpu: 1885.548112290076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 11596.429025213303,
            "unit": "ns/iter",
            "extra": "iterations: 60444\ncpu: 11596.31228906081 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 9819.790947764977,
            "unit": "ns/iter",
            "extra": "iterations: 71695\ncpu: 9819.482530162486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 9358.308207171178,
            "unit": "ns/iter",
            "extra": "iterations: 75300\ncpu: 9358.106241699816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 9456.39359807912,
            "unit": "ns/iter",
            "extra": "iterations: 74134\ncpu: 9456.173955270238 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 20105.10465654907,
            "unit": "ns/iter",
            "extra": "iterations: 34532\ncpu: 20105.059075639983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 50380.894059476166,
            "unit": "ns/iter",
            "extra": "iterations: 13753\ncpu: 50380.767832473095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 40074.28365661132,
            "unit": "ns/iter",
            "extra": "iterations: 17426\ncpu: 40074.15930219237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 41300.84339363439,
            "unit": "ns/iter",
            "extra": "iterations: 16749\ncpu: 41299.665651681054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 40974.8450438743,
            "unit": "ns/iter",
            "extra": "iterations: 16979\ncpu: 40974.35655810128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 24356.877102740345,
            "unit": "ns/iter",
            "extra": "iterations: 28772\ncpu: 24356.794800500677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 40220.07772760686,
            "unit": "ns/iter",
            "extra": "iterations: 17497\ncpu: 40217.60301765975 ns\nthreads: 1"
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
        "date": 1702503963628,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 552.1846657470186,
            "unit": "ns/iter",
            "extra": "iterations: 1274454\ncpu: 552.1719104808806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5007.652109999299,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5007.385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 9974.391805877236,
            "unit": "ns/iter",
            "extra": "iterations: 87038\ncpu: 9974.13888186769 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 14442.370450822784,
            "unit": "ns/iter",
            "extra": "iterations: 58005\ncpu: 14441.97569175071 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 18836.443350751168,
            "unit": "ns/iter",
            "extra": "iterations: 44396\ncpu: 18835.75772592126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 23501.72561403413,
            "unit": "ns/iter",
            "extra": "iterations: 35625\ncpu: 23500.89263157895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 28338.70729665454,
            "unit": "ns/iter",
            "extra": "iterations: 29863\ncpu: 28337.839466898826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 33214.109438425476,
            "unit": "ns/iter",
            "extra": "iterations: 25375\ncpu: 33213.06798029558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 37635.90948313695,
            "unit": "ns/iter",
            "extra": "iterations: 22714\ncpu: 37634.080302896844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 486.61789088470135,
            "unit": "ns/iter",
            "extra": "iterations: 1435692\ncpu: 486.58187132058976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 389.54511622159634,
            "unit": "ns/iter",
            "extra": "iterations: 1796826\ncpu: 389.5245282514835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 388.99001858853205,
            "unit": "ns/iter",
            "extra": "iterations: 1797341\ncpu: 388.95629710778303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 378.76836401487793,
            "unit": "ns/iter",
            "extra": "iterations: 1813574\ncpu: 378.73844684584117 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 812.5739756599461,
            "unit": "ns/iter",
            "extra": "iterations: 860310\ncpu: 812.5526844974494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1645.0974830036282,
            "unit": "ns/iter",
            "extra": "iterations: 479222\ncpu: 1645.0619963190338 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 9401.672040640984,
            "unit": "ns/iter",
            "extra": "iterations: 86218\ncpu: 9401.559999072126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 6963.678686667453,
            "unit": "ns/iter",
            "extra": "iterations: 116528\ncpu: 6963.617328024173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 7150.575245637271,
            "unit": "ns/iter",
            "extra": "iterations: 116432\ncpu: 7150.5745843067225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 6958.476296098836,
            "unit": "ns/iter",
            "extra": "iterations: 115867\ncpu: 6958.402306092329 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 27682.60743150192,
            "unit": "ns/iter",
            "extra": "iterations: 29819\ncpu: 27681.994701364907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 229542.96130401015,
            "unit": "ns/iter",
            "extra": "iterations: 3773\ncpu: 229530.42671614108 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 179566.27445314892,
            "unit": "ns/iter",
            "extra": "iterations: 4846\ncpu: 179564.58935204326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 180552.98678967383,
            "unit": "ns/iter",
            "extra": "iterations: 4769\ncpu: 180550.34598448305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 180393.52625025332,
            "unit": "ns/iter",
            "extra": "iterations: 4819\ncpu: 180391.11848931352 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 94737.23264683413,
            "unit": "ns/iter",
            "extra": "iterations: 9177\ncpu: 94735.04413206907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 176344.558042792,
            "unit": "ns/iter",
            "extra": "iterations: 5048\ncpu: 176342.98732171106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5695.3211509066,
            "unit": "ns/iter",
            "extra": "iterations: 153062\ncpu: 5695.1405312879915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 25474.363386559526,
            "unit": "ns/iter",
            "extra": "iterations: 32753\ncpu: 25473.571886544723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 19971.996046579538,
            "unit": "ns/iter",
            "extra": "iterations: 41736\ncpu: 19971.39160437039 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 19777.691571560055,
            "unit": "ns/iter",
            "extra": "iterations: 42321\ncpu: 19777.53361215475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 19310.948572490393,
            "unit": "ns/iter",
            "extra": "iterations: 43012\ncpu: 19310.441272203076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 44753.234943315816,
            "unit": "ns/iter",
            "extra": "iterations: 18613\ncpu: 44751.9744264763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 248911.19320113896,
            "unit": "ns/iter",
            "extra": "iterations: 3530\ncpu: 248903.99433427755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 195664.5384615325,
            "unit": "ns/iter",
            "extra": "iterations: 4459\ncpu: 195663.3774388884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 195857.1513379912,
            "unit": "ns/iter",
            "extra": "iterations: 4447\ncpu: 195850.3485495845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 195367.4326193762,
            "unit": "ns/iter",
            "extra": "iterations: 4482\ncpu: 195362.96296296365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 106985.38864950382,
            "unit": "ns/iter",
            "extra": "iterations: 8123\ncpu: 106983.89757478819 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 186461.35204300995,
            "unit": "ns/iter",
            "extra": "iterations: 4650\ncpu: 186455.0322580657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 783111.3094650313,
            "unit": "ns/iter",
            "extra": "iterations: 1215\ncpu: 783080.9876543229 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 435004.3731707357,
            "unit": "ns/iter",
            "extra": "iterations: 2050\ncpu: 434984.14634146274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 1601.7566048376434,
            "unit": "ns/iter",
            "extra": "iterations: 507204\ncpu: 1601.6965560208514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 8537.921854635311,
            "unit": "ns/iter",
            "extra": "iterations: 95911\ncpu: 8537.669297577902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 7077.672462209702,
            "unit": "ns/iter",
            "extra": "iterations: 117159\ncpu: 7077.5757730946725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 6926.7530859944445,
            "unit": "ns/iter",
            "extra": "iterations: 116089\ncpu: 6926.672639095867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 6378.332140062013,
            "unit": "ns/iter",
            "extra": "iterations: 129057\ncpu: 6378.118970687359 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 26963.263282671072,
            "unit": "ns/iter",
            "extra": "iterations: 30792\ncpu: 26963.013120290954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 237436.15632555482,
            "unit": "ns/iter",
            "extra": "iterations: 3723\ncpu: 237430.0564061227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 179686.1319288009,
            "unit": "ns/iter",
            "extra": "iterations: 4889\ncpu: 179680.6095316017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 180022.34307912618,
            "unit": "ns/iter",
            "extra": "iterations: 4891\ncpu: 180019.25986505867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 176839.87494950942,
            "unit": "ns/iter",
            "extra": "iterations: 4950\ncpu: 176838.26262626212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 92723.52795823886,
            "unit": "ns/iter",
            "extra": "iterations: 9389\ncpu: 92722.10033017321 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 174248.62023575188,
            "unit": "ns/iter",
            "extra": "iterations: 5090\ncpu: 174244.95088408614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 195.23604527707752,
            "unit": "ns/iter",
            "extra": "iterations: 3591311\ncpu: 195.234052411502 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1320.7936251479368,
            "unit": "ns/iter",
            "extra": "iterations: 530428\ncpu: 1320.8009381103618 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1072.5945377378566,
            "unit": "ns/iter",
            "extra": "iterations: 652184\ncpu: 1072.5626510309924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1069.7417848675395,
            "unit": "ns/iter",
            "extra": "iterations: 656228\ncpu: 1069.702603363459 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 804.4229582746369,
            "unit": "ns/iter",
            "extra": "iterations: 871677\ncpu: 804.4042690124837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9249.018126689138,
            "unit": "ns/iter",
            "extra": "iterations: 75524\ncpu: 9248.93543774171 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 11004.648589468638,
            "unit": "ns/iter",
            "extra": "iterations: 66677\ncpu: 11004.707770295605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2516.039755593235,
            "unit": "ns/iter",
            "extra": "iterations: 278879\ncpu: 2515.988654577808 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2505.4244235757665,
            "unit": "ns/iter",
            "extra": "iterations: 277183\ncpu: 2505.3953525288453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2499.800915137503,
            "unit": "ns/iter",
            "extra": "iterations: 282799\ncpu: 2499.7751052868034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 4872.472623576054,
            "unit": "ns/iter",
            "extra": "iterations: 149563\ncpu: 4872.429009848703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 4739.961503561188,
            "unit": "ns/iter",
            "extra": "iterations: 145468\ncpu: 4739.749635658681 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1892.00094923247,
            "unit": "ns/iter",
            "extra": "iterations: 368719\ncpu: 1891.968138338424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 9775.412563714995,
            "unit": "ns/iter",
            "extra": "iterations: 71412\ncpu: 9775.343079594402 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 7852.715889473821,
            "unit": "ns/iter",
            "extra": "iterations: 88631\ncpu: 7852.780629802164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 7783.130814763565,
            "unit": "ns/iter",
            "extra": "iterations: 89707\ncpu: 7782.874246157036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 7837.6948509191425,
            "unit": "ns/iter",
            "extra": "iterations: 89045\ncpu: 7837.208153180954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 18531.43109203555,
            "unit": "ns/iter",
            "extra": "iterations: 37746\ncpu: 18530.967519737485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 50047.00539878997,
            "unit": "ns/iter",
            "extra": "iterations: 13892\ncpu: 50045.940109414885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 40721.75484620062,
            "unit": "ns/iter",
            "extra": "iterations: 17230\ncpu: 40720.21474172961 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 40759.73296478992,
            "unit": "ns/iter",
            "extra": "iterations: 17185\ncpu: 40757.70730288089 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 40424.861343807795,
            "unit": "ns/iter",
            "extra": "iterations: 17309\ncpu: 40423.710208561664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 24517.415160310215,
            "unit": "ns/iter",
            "extra": "iterations: 28601\ncpu: 24517.20918849003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 40017.89629287373,
            "unit": "ns/iter",
            "extra": "iterations: 17318\ncpu: 40017.10936597739 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1846.1097667380643,
            "unit": "ns/iter",
            "extra": "iterations: 379359\ncpu: 1846.0721901945205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 9671.602853794908,
            "unit": "ns/iter",
            "extra": "iterations: 72535\ncpu: 9671.510305369746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 9246.004914134628,
            "unit": "ns/iter",
            "extra": "iterations: 75700\ncpu: 9245.914134742288 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 9037.949911540916,
            "unit": "ns/iter",
            "extra": "iterations: 78002\ncpu: 9038.000307684355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 9414.167112245112,
            "unit": "ns/iter",
            "extra": "iterations: 74435\ncpu: 9413.881910391745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 18482.613656098838,
            "unit": "ns/iter",
            "extra": "iterations: 38005\ncpu: 18482.1681357716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 49763.6342337212,
            "unit": "ns/iter",
            "extra": "iterations: 13957\ncpu: 49762.67106111656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 40596.0442901311,
            "unit": "ns/iter",
            "extra": "iterations: 17137\ncpu: 40595.769387874345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 41187.67700516067,
            "unit": "ns/iter",
            "extra": "iterations: 17056\ncpu: 41186.409474671505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 41228.756168104104,
            "unit": "ns/iter",
            "extra": "iterations: 16942\ncpu: 41228.22571124958 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 24179.28527723436,
            "unit": "ns/iter",
            "extra": "iterations: 29091\ncpu: 24178.570691966444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 40903.452973599495,
            "unit": "ns/iter",
            "extra": "iterations: 17235\ncpu: 40903.74238468245 ns\nthreads: 1"
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
        "date": 1705575644215,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 511.2666456210157,
            "unit": "ns/iter",
            "extra": "iterations: 1365284\ncpu: 511.26981638985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5011.1311700004535,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5011.041 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 9712.702681884823,
            "unit": "ns/iter",
            "extra": "iterations: 85686\ncpu: 9712.573816025957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 14462.499991345825,
            "unit": "ns/iter",
            "extra": "iterations: 57769\ncpu: 14462.11289792103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 18955.263664048958,
            "unit": "ns/iter",
            "extra": "iterations: 43673\ncpu: 18955.150779657917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 23978.46567542105,
            "unit": "ns/iter",
            "extra": "iterations: 34771\ncpu: 23978.217480083964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 28353.182003878726,
            "unit": "ns/iter",
            "extra": "iterations: 29373\ncpu: 28352.534640656373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 34957.68897638021,
            "unit": "ns/iter",
            "extra": "iterations: 24892\ncpu: 34957.28346456692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 36982.93072262617,
            "unit": "ns/iter",
            "extra": "iterations: 22778\ncpu: 36982.81236280619 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 502.7325515306977,
            "unit": "ns/iter",
            "extra": "iterations: 1395237\ncpu: 502.72563012592195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 401.9423325013527,
            "unit": "ns/iter",
            "extra": "iterations: 1747969\ncpu: 401.9449429595154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 402.3028462395286,
            "unit": "ns/iter",
            "extra": "iterations: 1743634\ncpu: 402.3003107303473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 395.58509024866726,
            "unit": "ns/iter",
            "extra": "iterations: 1776314\ncpu: 395.5836074027453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 843.9942314906169,
            "unit": "ns/iter",
            "extra": "iterations: 818409\ncpu: 843.9186274833253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1657.3257972164258,
            "unit": "ns/iter",
            "extra": "iterations: 474338\ncpu: 1657.241882370796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 9185.505514416705,
            "unit": "ns/iter",
            "extra": "iterations: 88858\ncpu: 9185.008665511263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 7026.09504691106,
            "unit": "ns/iter",
            "extra": "iterations: 116069\ncpu: 7025.762262102726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 7078.394771073201,
            "unit": "ns/iter",
            "extra": "iterations: 116085\ncpu: 7078.080716716202 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 6954.911773582571,
            "unit": "ns/iter",
            "extra": "iterations: 115963\ncpu: 6954.582064969 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 27545.03252963271,
            "unit": "ns/iter",
            "extra": "iterations: 29696\ncpu: 27543.366109913783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 233333.24495364085,
            "unit": "ns/iter",
            "extra": "iterations: 3666\ncpu: 233322.09492635058 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 178524.98368541626,
            "unit": "ns/iter",
            "extra": "iterations: 4781\ncpu: 178515.70801087652 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 178950.04586199054,
            "unit": "ns/iter",
            "extra": "iterations: 4797\ncpu: 178940.858870127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 178809.8014096193,
            "unit": "ns/iter",
            "extra": "iterations: 4824\ncpu: 178797.69900497462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 95237.20464457478,
            "unit": "ns/iter",
            "extra": "iterations: 9172\ncpu: 95231.87963366759 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 174609.740957782,
            "unit": "ns/iter",
            "extra": "iterations: 4949\ncpu: 174600.64659527215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5428.081709442403,
            "unit": "ns/iter",
            "extra": "iterations: 151488\ncpu: 5427.845109843667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 25341.207417923102,
            "unit": "ns/iter",
            "extra": "iterations: 32408\ncpu: 25340.31103431252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 19979.567174516167,
            "unit": "ns/iter",
            "extra": "iterations: 41876\ncpu: 19978.811252268584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 20171.584652833262,
            "unit": "ns/iter",
            "extra": "iterations: 41493\ncpu: 20170.85291494958 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 19573.958640096083,
            "unit": "ns/iter",
            "extra": "iterations: 42650\ncpu: 19573.273153575592 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 44029.23981183233,
            "unit": "ns/iter",
            "extra": "iterations: 18919\ncpu: 44028.637877266345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 249964.19582023117,
            "unit": "ns/iter",
            "extra": "iterations: 3493\ncpu: 249954.05095906067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 194344.96298790298,
            "unit": "ns/iter",
            "extra": "iterations: 4458\ncpu: 194330.10318528514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 195308.07893558257,
            "unit": "ns/iter",
            "extra": "iterations: 4472\ncpu: 195299.19499105442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 193689.45396194002,
            "unit": "ns/iter",
            "extra": "iterations: 4518\ncpu: 193679.1279327129 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 108215.14844620375,
            "unit": "ns/iter",
            "extra": "iterations: 8077\ncpu: 108209.8551442371 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 186594.80845189476,
            "unit": "ns/iter",
            "extra": "iterations: 4709\ncpu: 186584.9012529205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 788363.2029702553,
            "unit": "ns/iter",
            "extra": "iterations: 1212\ncpu: 788325.08250825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 441291.9417571395,
            "unit": "ns/iter",
            "extra": "iterations: 2026\ncpu: 441270.9279368188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 1580.981342906977,
            "unit": "ns/iter",
            "extra": "iterations: 505277\ncpu: 1580.920960186194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 8520.75110205121,
            "unit": "ns/iter",
            "extra": "iterations: 96638\ncpu: 8520.37397297134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 6771.345145713619,
            "unit": "ns/iter",
            "extra": "iterations: 122809\ncpu: 6771.0509816056065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 6395.652898966756,
            "unit": "ns/iter",
            "extra": "iterations: 129046\ncpu: 6395.2985757017195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 6212.035424163372,
            "unit": "ns/iter",
            "extra": "iterations: 131718\ncpu: 6211.952808272185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 27207.394009140608,
            "unit": "ns/iter",
            "extra": "iterations: 30847\ncpu: 27205.945472817362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 238636.5405839894,
            "unit": "ns/iter",
            "extra": "iterations: 3733\ncpu: 238627.75247789896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 182599.37355609605,
            "unit": "ns/iter",
            "extra": "iterations: 4848\ncpu: 182590.28465346663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 183660.92446191885,
            "unit": "ns/iter",
            "extra": "iterations: 4832\ncpu: 183652.2557947014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 182030.90339856074,
            "unit": "ns/iter",
            "extra": "iterations: 4855\ncpu: 182022.08032955707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 95328.03116546,
            "unit": "ns/iter",
            "extra": "iterations: 9241\ncpu: 95322.9953468242 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 175963.90453366432,
            "unit": "ns/iter",
            "extra": "iterations: 5007\ncpu: 175955.98162572415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 197.24121671903885,
            "unit": "ns/iter",
            "extra": "iterations: 3548987\ncpu: 197.2362536126509 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1374.0559304211667,
            "unit": "ns/iter",
            "extra": "iterations: 508775\ncpu: 1374.0126775097024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1136.0862144660682,
            "unit": "ns/iter",
            "extra": "iterations: 617263\ncpu: 1136.083808684476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1133.2093219681371,
            "unit": "ns/iter",
            "extra": "iterations: 619204\ncpu: 1133.175011789321 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 811.7432820082194,
            "unit": "ns/iter",
            "extra": "iterations: 864879\ncpu: 811.7116960869673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9418.535703372529,
            "unit": "ns/iter",
            "extra": "iterations: 75273\ncpu: 9418.59099544324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 11293.772601306066,
            "unit": "ns/iter",
            "extra": "iterations: 64952\ncpu: 11293.58141396722 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2539.477247171439,
            "unit": "ns/iter",
            "extra": "iterations: 274801\ncpu: 2539.4692886852463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2594.3661186709846,
            "unit": "ns/iter",
            "extra": "iterations: 268372\ncpu: 2594.3567138151343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2561.740925596531,
            "unit": "ns/iter",
            "extra": "iterations: 272084\ncpu: 2561.7279957660116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5012.968640714008,
            "unit": "ns/iter",
            "extra": "iterations: 139257\ncpu: 5012.9135339695695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 4855.217226591543,
            "unit": "ns/iter",
            "extra": "iterations: 131982\ncpu: 4855.249200648566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1934.7892904584455,
            "unit": "ns/iter",
            "extra": "iterations: 361360\ncpu: 1934.763393845473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 9872.126375581945,
            "unit": "ns/iter",
            "extra": "iterations: 70243\ncpu: 9871.945959027875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 7933.087181754321,
            "unit": "ns/iter",
            "extra": "iterations: 88218\ncpu: 7933.054478677844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 7848.132720729235,
            "unit": "ns/iter",
            "extra": "iterations: 88366\ncpu: 7848.039970124326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 7890.573425707666,
            "unit": "ns/iter",
            "extra": "iterations: 88770\ncpu: 7890.613946152993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 18698.246115714705,
            "unit": "ns/iter",
            "extra": "iterations: 37523\ncpu: 18697.27367214763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 50764.6112711485,
            "unit": "ns/iter",
            "extra": "iterations: 13539\ncpu: 50763.97075116342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 41429.6708345674,
            "unit": "ns/iter",
            "extra": "iterations: 16955\ncpu: 41429.236213506505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 41114.75473134795,
            "unit": "ns/iter",
            "extra": "iterations: 17067\ncpu: 41115.01142555794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 41019.74904451172,
            "unit": "ns/iter",
            "extra": "iterations: 17007\ncpu: 41019.48609396191 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 24510.337777308665,
            "unit": "ns/iter",
            "extra": "iterations: 28353\ncpu: 24510.11180474691 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 40542.36453744307,
            "unit": "ns/iter",
            "extra": "iterations: 17252\ncpu: 40541.54880593599 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1845.9808666437643,
            "unit": "ns/iter",
            "extra": "iterations: 381010\ncpu: 1845.9633605416989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 12043.181278012165,
            "unit": "ns/iter",
            "extra": "iterations: 58231\ncpu: 12043.11792687746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 9249.564698259268,
            "unit": "ns/iter",
            "extra": "iterations: 75628\ncpu: 9249.340191463481 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 9206.105222289267,
            "unit": "ns/iter",
            "extra": "iterations: 75982\ncpu: 9205.996156984513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 8840.43216695866,
            "unit": "ns/iter",
            "extra": "iterations: 80020\ncpu: 8840.27368157959 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 18544.23217680365,
            "unit": "ns/iter",
            "extra": "iterations: 37872\ncpu: 18544.132868610195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 51464.596205753965,
            "unit": "ns/iter",
            "extra": "iterations: 13336\ncpu: 51464.34463107286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 40488.12791101672,
            "unit": "ns/iter",
            "extra": "iterations: 17262\ncpu: 40487.84034294986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 40950.985231570034,
            "unit": "ns/iter",
            "extra": "iterations: 16928\ncpu: 40950.47258979224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 40546.87458592496,
            "unit": "ns/iter",
            "extra": "iterations: 17207\ncpu: 40545.76625791827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 25115.63901986296,
            "unit": "ns/iter",
            "extra": "iterations: 27996\ncpu: 25115.29147020989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 41339.69168332608,
            "unit": "ns/iter",
            "extra": "iterations: 17002\ncpu: 41339.536525114534 ns\nthreads: 1"
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
        "date": 1705773462336,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 520.0105476278651,
            "unit": "ns/iter",
            "extra": "iterations: 1314798\ncpu: 520.0071037528198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5570.147739679748,
            "unit": "ns/iter",
            "extra": "iterations: 144714\ncpu: 5569.88197410064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 9388.99929506163,
            "unit": "ns/iter",
            "extra": "iterations: 87951\ncpu: 9388.537935896125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 14179.242501821527,
            "unit": "ns/iter",
            "extra": "iterations: 58981\ncpu: 14178.5744561808 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 18538.636502727353,
            "unit": "ns/iter",
            "extra": "iterations: 45098\ncpu: 18538.01498957825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 22980.728983109184,
            "unit": "ns/iter",
            "extra": "iterations: 36887\ncpu: 22980.00108439287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 27482.95682041139,
            "unit": "ns/iter",
            "extra": "iterations: 30570\ncpu: 27482.41413150146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 31898.98570609597,
            "unit": "ns/iter",
            "extra": "iterations: 26165\ncpu: 31898.23810433782 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 36945.30650986392,
            "unit": "ns/iter",
            "extra": "iterations: 22704\ncpu: 36944.27854122622 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 504.21940603703456,
            "unit": "ns/iter",
            "extra": "iterations: 1392309\ncpu: 504.20869217968016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 398.95693331470596,
            "unit": "ns/iter",
            "extra": "iterations: 1747685\ncpu: 398.9498679681978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 397.9629931923244,
            "unit": "ns/iter",
            "extra": "iterations: 1761838\ncpu: 397.95997134810335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 392.8265514083603,
            "unit": "ns/iter",
            "extra": "iterations: 1785555\ncpu: 392.81556714858965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 844.6871480699098,
            "unit": "ns/iter",
            "extra": "iterations: 825448\ncpu: 844.6581735009354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1648.3844132081913,
            "unit": "ns/iter",
            "extra": "iterations: 482062\ncpu: 1648.359132227804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 8993.413840745898,
            "unit": "ns/iter",
            "extra": "iterations: 90472\ncpu: 8993.09952250419 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 7276.30046288105,
            "unit": "ns/iter",
            "extra": "iterations: 112340\ncpu: 7276.18924692897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 6852.690163017992,
            "unit": "ns/iter",
            "extra": "iterations: 118146\ncpu: 6852.495217781393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 6686.44575710158,
            "unit": "ns/iter",
            "extra": "iterations: 122652\ncpu: 6686.276620030666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 27681.809052188775,
            "unit": "ns/iter",
            "extra": "iterations: 29584\ncpu: 27681.18915630065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 230351.0827858109,
            "unit": "ns/iter",
            "extra": "iterations: 3805\ncpu: 230346.20236530923 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 177602.02135678267,
            "unit": "ns/iter",
            "extra": "iterations: 4776\ncpu: 177595.91708542663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 178714.44237216594,
            "unit": "ns/iter",
            "extra": "iterations: 4772\ncpu: 178709.15758591777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 178535.55256571562,
            "unit": "ns/iter",
            "extra": "iterations: 4794\ncpu: 178529.55778055915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 94509.27026147334,
            "unit": "ns/iter",
            "extra": "iterations: 9217\ncpu: 94507.94184658775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 173016.75148867624,
            "unit": "ns/iter",
            "extra": "iterations: 5038\ncpu: 173009.05121079844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5477.127285009858,
            "unit": "ns/iter",
            "extra": "iterations: 148030\ncpu: 5477.009389988519 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 26177.405426797017,
            "unit": "ns/iter",
            "extra": "iterations: 31584\ncpu: 26177.187816615988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 20447.81002144275,
            "unit": "ns/iter",
            "extra": "iterations: 40573\ncpu: 20447.378798708552 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 20028.314568488575,
            "unit": "ns/iter",
            "extra": "iterations: 41123\ncpu: 20027.63903411721 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 19876.052489269132,
            "unit": "ns/iter",
            "extra": "iterations: 42161\ncpu: 19875.633879651836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 45019.169918833424,
            "unit": "ns/iter",
            "extra": "iterations: 18603\ncpu: 45018.80341880334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 248397.87945670992,
            "unit": "ns/iter",
            "extra": "iterations: 3534\ncpu: 248387.83248443762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 195495.49011237125,
            "unit": "ns/iter",
            "extra": "iterations: 4450\ncpu: 195490.69662921256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 196720.6812865645,
            "unit": "ns/iter",
            "extra": "iterations: 4446\ncpu: 196715.27215474538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 195070.16838331948,
            "unit": "ns/iter",
            "extra": "iterations: 4466\ncpu: 195067.2861621149 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 107851.61369254006,
            "unit": "ns/iter",
            "extra": "iterations: 8092\ncpu: 107848.22046465652 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 186700.72738963578,
            "unit": "ns/iter",
            "extra": "iterations: 4666\ncpu: 186694.7706815245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 775879.9137930664,
            "unit": "ns/iter",
            "extra": "iterations: 1218\ncpu: 775859.8522167522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 427764.4707886875,
            "unit": "ns/iter",
            "extra": "iterations: 2054\ncpu: 427758.47127555974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 1574.9230440611573,
            "unit": "ns/iter",
            "extra": "iterations: 510292\ncpu: 1574.8918266404246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 8774.96673272176,
            "unit": "ns/iter",
            "extra": "iterations: 99918\ncpu: 8774.840369102665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 6584.477993049943,
            "unit": "ns/iter",
            "extra": "iterations: 124029\ncpu: 6584.342371542105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 6658.83265269699,
            "unit": "ns/iter",
            "extra": "iterations: 123414\ncpu: 6658.778582656763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 6439.355432117476,
            "unit": "ns/iter",
            "extra": "iterations: 127639\ncpu: 6439.166712368505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 27061.784182869924,
            "unit": "ns/iter",
            "extra": "iterations: 31017\ncpu: 27060.68285133958 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 235902.75305690127,
            "unit": "ns/iter",
            "extra": "iterations: 3762\ncpu: 235894.23179160024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 179565.9264978309,
            "unit": "ns/iter",
            "extra": "iterations: 4857\ncpu: 179562.09594399817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 179795.59554074265,
            "unit": "ns/iter",
            "extra": "iterations: 4799\ncpu: 179789.4144613468 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 178475.3364448025,
            "unit": "ns/iter",
            "extra": "iterations: 4928\ncpu: 178470.96185064947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 93496.29617662546,
            "unit": "ns/iter",
            "extra": "iterations: 9285\ncpu: 93494.36725901983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 171707.92672918813,
            "unit": "ns/iter",
            "extra": "iterations: 5118\ncpu: 171706.5259867134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 196.21299460380385,
            "unit": "ns/iter",
            "extra": "iterations: 3561386\ncpu: 196.20552223207469 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1393.709904120178,
            "unit": "ns/iter",
            "extra": "iterations: 502296\ncpu: 1393.6702661378943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1147.1087500286387,
            "unit": "ns/iter",
            "extra": "iterations: 610078\ncpu: 1147.083323771719 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1097.015445175719,
            "unit": "ns/iter",
            "extra": "iterations: 638905\ncpu: 1097.0067537427296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 814.6113764834935,
            "unit": "ns/iter",
            "extra": "iterations: 869847\ncpu: 814.5978545652305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9455.45603951821,
            "unit": "ns/iter",
            "extra": "iterations: 74294\ncpu: 9455.124236142858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 11063.93388874936,
            "unit": "ns/iter",
            "extra": "iterations: 63136\ncpu: 11063.619804865719 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2523.462759221472,
            "unit": "ns/iter",
            "extra": "iterations: 277948\ncpu: 2523.4000604429652 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2537.3130146305043,
            "unit": "ns/iter",
            "extra": "iterations: 276412\ncpu: 2537.2928816404315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2499.1959022925544,
            "unit": "ns/iter",
            "extra": "iterations: 281084\ncpu: 2499.1105861593046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 4876.947700296747,
            "unit": "ns/iter",
            "extra": "iterations: 142888\ncpu: 4876.690134930864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 4959.7894647315625,
            "unit": "ns/iter",
            "extra": "iterations: 141088\ncpu: 4959.540145157581 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1928.2559274985085,
            "unit": "ns/iter",
            "extra": "iterations: 364572\ncpu: 1928.1557552417398 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 9972.902682559783,
            "unit": "ns/iter",
            "extra": "iterations: 70306\ncpu: 9972.301083833554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 7984.438144799008,
            "unit": "ns/iter",
            "extra": "iterations: 88012\ncpu: 7984.1271644776825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 8036.1725644028775,
            "unit": "ns/iter",
            "extra": "iterations: 87689\ncpu: 8035.6703805494835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 7991.34332156825,
            "unit": "ns/iter",
            "extra": "iterations: 88404\ncpu: 7991.0230306322155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 18745.183381316005,
            "unit": "ns/iter",
            "extra": "iterations: 37512\ncpu: 18744.03124333524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 51095.921256954294,
            "unit": "ns/iter",
            "extra": "iterations: 13652\ncpu: 51092.94608848525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 41065.426170187944,
            "unit": "ns/iter",
            "extra": "iterations: 17134\ncpu: 41063.27185712627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 41186.770575466944,
            "unit": "ns/iter",
            "extra": "iterations: 17047\ncpu: 41186.42576406341 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 40847.441573621756,
            "unit": "ns/iter",
            "extra": "iterations: 17107\ncpu: 40846.442976559374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 24529.134978586462,
            "unit": "ns/iter",
            "extra": "iterations: 28486\ncpu: 24528.480657164782 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 40258.37616592569,
            "unit": "ns/iter",
            "extra": "iterations: 17261\ncpu: 40257.412664388314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 2071.129439978901,
            "unit": "ns/iter",
            "extra": "iterations: 333166\ncpu: 2070.984134035291 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 9806.422344317501,
            "unit": "ns/iter",
            "extra": "iterations: 71347\ncpu: 9805.75357057778 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 9069.06570235582,
            "unit": "ns/iter",
            "extra": "iterations: 76877\ncpu: 9068.517241827873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 8960.957504345935,
            "unit": "ns/iter",
            "extra": "iterations: 77655\ncpu: 8960.633571566479 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 9111.149105085578,
            "unit": "ns/iter",
            "extra": "iterations: 77717\ncpu: 9110.827746825078 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 20027.18055475883,
            "unit": "ns/iter",
            "extra": "iterations: 34898\ncpu: 20027.01874032876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 49646.15715292236,
            "unit": "ns/iter",
            "extra": "iterations: 14190\ncpu: 49643.57293868898 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 41111.98758969339,
            "unit": "ns/iter",
            "extra": "iterations: 17002\ncpu: 41111.092812610994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 41275.41604321901,
            "unit": "ns/iter",
            "extra": "iterations: 16842\ncpu: 41273.67296045635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 40932.14479344873,
            "unit": "ns/iter",
            "extra": "iterations: 16969\ncpu: 40930.59697094706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 24194.27041923306,
            "unit": "ns/iter",
            "extra": "iterations: 29029\ncpu: 24193.34114161703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 40874.10811746439,
            "unit": "ns/iter",
            "extra": "iterations: 17333\ncpu: 40872.36485317008 ns\nthreads: 1"
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
        "date": 1705775080264,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 534.0338453638216,
            "unit": "ns/iter",
            "extra": "iterations: 1296928\ncpu: 534.015920698759 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5029.837209999641,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5029.595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 9698.84651496564,
            "unit": "ns/iter",
            "extra": "iterations: 84992\ncpu: 9698.452795557228 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 14577.455123625357,
            "unit": "ns/iter",
            "extra": "iterations: 57391\ncpu: 14576.91101392204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 19105.576245869146,
            "unit": "ns/iter",
            "extra": "iterations: 44186\ncpu: 19105.0196894944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 23862.31153110359,
            "unit": "ns/iter",
            "extra": "iterations: 35027\ncpu: 23861.155679904088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 28173.958454367363,
            "unit": "ns/iter",
            "extra": "iterations: 29606\ncpu: 28172.640680943074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 32135.798294340737,
            "unit": "ns/iter",
            "extra": "iterations: 25562\ncpu: 32133.870589155766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 36615.38528640504,
            "unit": "ns/iter",
            "extra": "iterations: 23271\ncpu: 36613.91001675905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 498.3798749427949,
            "unit": "ns/iter",
            "extra": "iterations: 1401119\ncpu: 498.3768687741728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 390.9924681863172,
            "unit": "ns/iter",
            "extra": "iterations: 1786024\ncpu: 390.98556346387284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 396.3508197148356,
            "unit": "ns/iter",
            "extra": "iterations: 1767871\ncpu: 396.33791153313746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 391.1218143623008,
            "unit": "ns/iter",
            "extra": "iterations: 1789830\ncpu: 391.11234027812736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 824.1562923172298,
            "unit": "ns/iter",
            "extra": "iterations: 849242\ncpu: 824.1496534556703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1647.924577673066,
            "unit": "ns/iter",
            "extra": "iterations: 481144\ncpu: 1647.835159536436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 8970.584738574587,
            "unit": "ns/iter",
            "extra": "iterations: 90791\ncpu: 8970.221718011693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 7204.727418149398,
            "unit": "ns/iter",
            "extra": "iterations: 113775\ncpu: 7204.583607998248 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 6953.7212676371855,
            "unit": "ns/iter",
            "extra": "iterations: 117794\ncpu: 6953.63770650458 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 6553.52277924407,
            "unit": "ns/iter",
            "extra": "iterations: 125070\ncpu: 6553.431678260184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 27632.997997462364,
            "unit": "ns/iter",
            "extra": "iterations: 29962\ncpu: 27632.304252052567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 231553.2532381872,
            "unit": "ns/iter",
            "extra": "iterations: 3783\ncpu: 231548.9822891887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 182281.47301255315,
            "unit": "ns/iter",
            "extra": "iterations: 4780\ncpu: 182278.17991631763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 182398.0480118445,
            "unit": "ns/iter",
            "extra": "iterations: 4728\ncpu: 182389.995769882 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 180601.52228237558,
            "unit": "ns/iter",
            "extra": "iterations: 4802\ncpu: 180591.92003331945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 96083.73016396177,
            "unit": "ns/iter",
            "extra": "iterations: 9087\ncpu: 96080.29052492561 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 176762.2599512692,
            "unit": "ns/iter",
            "extra": "iterations: 4924\ncpu: 176755.0771730295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5333.732514839504,
            "unit": "ns/iter",
            "extra": "iterations: 152801\ncpu: 5333.483419611129 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 25708.375203364456,
            "unit": "ns/iter",
            "extra": "iterations: 32577\ncpu: 25707.667986616274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 20290.697483469135,
            "unit": "ns/iter",
            "extra": "iterations: 41287\ncpu: 20289.873325744164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 20075.53271073621,
            "unit": "ns/iter",
            "extra": "iterations: 40904\ncpu: 20074.931547037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 20039.54810150921,
            "unit": "ns/iter",
            "extra": "iterations: 41454\ncpu: 20038.367829401268 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 44381.2870950366,
            "unit": "ns/iter",
            "extra": "iterations: 18520\ncpu: 44379.481641468905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 249149.5591336442,
            "unit": "ns/iter",
            "extra": "iterations: 3509\ncpu: 249140.5813622128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 196807.34295378494,
            "unit": "ns/iter",
            "extra": "iterations: 4435\ncpu: 196798.4216459967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 196570.4093959633,
            "unit": "ns/iter",
            "extra": "iterations: 4470\ncpu: 196554.13870246065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 196117.2181899707,
            "unit": "ns/iter",
            "extra": "iterations: 4464\ncpu: 196110.41666666596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 109397.49472228608,
            "unit": "ns/iter",
            "extra": "iterations: 7958\ncpu: 109393.50339281223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 190092.76003472344,
            "unit": "ns/iter",
            "extra": "iterations: 4609\ncpu: 190085.61510089066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 786110.9331683187,
            "unit": "ns/iter",
            "extra": "iterations: 1212\ncpu: 786061.0561056099 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 434642.774703528,
            "unit": "ns/iter",
            "extra": "iterations: 2024\ncpu: 434618.6758893269 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 1578.543170492494,
            "unit": "ns/iter",
            "extra": "iterations: 504685\ncpu: 1578.5264075611535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 8394.276838585547,
            "unit": "ns/iter",
            "extra": "iterations: 97779\ncpu: 8393.962916372633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 6518.680138475464,
            "unit": "ns/iter",
            "extra": "iterations: 124210\ncpu: 6518.319781016025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 6476.666267632249,
            "unit": "ns/iter",
            "extra": "iterations: 126973\ncpu: 6476.583210603829 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 6468.4911608209495,
            "unit": "ns/iter",
            "extra": "iterations: 127048\ncpu: 6468.466248976755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 27021.366839846596,
            "unit": "ns/iter",
            "extra": "iterations: 30989\ncpu: 27020.68798605966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 240990.96505227036,
            "unit": "ns/iter",
            "extra": "iterations: 3634\ncpu: 240984.9201981283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 182838.39966867294,
            "unit": "ns/iter",
            "extra": "iterations: 4829\ncpu: 182833.46448539998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 182166.03715236048,
            "unit": "ns/iter",
            "extra": "iterations: 4818\ncpu: 182166.7496886671 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 180605.70255361882,
            "unit": "ns/iter",
            "extra": "iterations: 4895\ncpu: 180602.36976506637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 94876.71214892741,
            "unit": "ns/iter",
            "extra": "iterations: 9293\ncpu: 94875.27170988968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 174611.03793657685,
            "unit": "ns/iter",
            "extra": "iterations: 4982\ncpu: 174603.11120032155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 196.09783382653615,
            "unit": "ns/iter",
            "extra": "iterations: 3567212\ncpu: 196.09016789582486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1366.9081527871574,
            "unit": "ns/iter",
            "extra": "iterations: 512242\ncpu: 1366.8660515927984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1141.6689627327573,
            "unit": "ns/iter",
            "extra": "iterations: 619175\ncpu: 1141.569023297131 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1070.8858326527939,
            "unit": "ns/iter",
            "extra": "iterations: 652691\ncpu: 1070.7901595088663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 803.1128754759412,
            "unit": "ns/iter",
            "extra": "iterations: 871261\ncpu: 803.0983826890044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9328.80225677866,
            "unit": "ns/iter",
            "extra": "iterations: 74531\ncpu: 9328.562611530804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 11192.826285475914,
            "unit": "ns/iter",
            "extra": "iterations: 61981\ncpu: 11192.31054678051 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2537.7895552280766,
            "unit": "ns/iter",
            "extra": "iterations: 275602\ncpu: 2537.6463160644535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2524.000710035115,
            "unit": "ns/iter",
            "extra": "iterations: 277451\ncpu: 2523.897913505441 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2535.7189083068633,
            "unit": "ns/iter",
            "extra": "iterations: 275572\ncpu: 2535.6248094871744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 4887.838379731009,
            "unit": "ns/iter",
            "extra": "iterations: 142643\ncpu: 4887.665710900641 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 4742.860429727832,
            "unit": "ns/iter",
            "extra": "iterations: 147861\ncpu: 4742.836853531385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1920.488280779617,
            "unit": "ns/iter",
            "extra": "iterations: 365468\ncpu: 1920.472927862362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 9885.812599132461,
            "unit": "ns/iter",
            "extra": "iterations: 71243\ncpu: 9885.849837878863 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 7896.090713896149,
            "unit": "ns/iter",
            "extra": "iterations: 88024\ncpu: 7895.714805053121 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 7816.658987779554,
            "unit": "ns/iter",
            "extra": "iterations: 89032\ncpu: 7816.105445233104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 7841.341550752924,
            "unit": "ns/iter",
            "extra": "iterations: 89363\ncpu: 7841.215044257573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 18443.710883724838,
            "unit": "ns/iter",
            "extra": "iterations: 37919\ncpu: 18443.360848123935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 50029.740924798956,
            "unit": "ns/iter",
            "extra": "iterations: 13884\ncpu: 50028.514837222414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 40578.74388405727,
            "unit": "ns/iter",
            "extra": "iterations: 17250\ncpu: 40578.09855072409 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 40835.42176433016,
            "unit": "ns/iter",
            "extra": "iterations: 17083\ncpu: 40833.19674530223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 40386.213399505796,
            "unit": "ns/iter",
            "extra": "iterations: 17329\ncpu: 40385.97726354641 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 24770.97661024002,
            "unit": "ns/iter",
            "extra": "iterations: 28474\ncpu: 24770.81548078973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 40140.66875963126,
            "unit": "ns/iter",
            "extra": "iterations: 17519\ncpu: 40139.72829499374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 2236.540364608287,
            "unit": "ns/iter",
            "extra": "iterations: 312774\ncpu: 2236.374826552079 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 10647.517197801744,
            "unit": "ns/iter",
            "extra": "iterations: 65677\ncpu: 10647.231146367969 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 9352.13188160484,
            "unit": "ns/iter",
            "extra": "iterations: 75037\ncpu: 9351.986353399023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 9055.752079910424,
            "unit": "ns/iter",
            "extra": "iterations: 76686\ncpu: 9055.423414964926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 8917.793340958246,
            "unit": "ns/iter",
            "extra": "iterations: 78690\ncpu: 8917.088575422527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 20596.473307098466,
            "unit": "ns/iter",
            "extra": "iterations: 34054\ncpu: 20595.527691313862 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 51270.01212254711,
            "unit": "ns/iter",
            "extra": "iterations: 13611\ncpu: 51267.53361251932 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 41850.00679299265,
            "unit": "ns/iter",
            "extra": "iterations: 16782\ncpu: 41848.039566202286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 40897.42406172759,
            "unit": "ns/iter",
            "extra": "iterations: 17106\ncpu: 40894.680229159814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 40013.45150731938,
            "unit": "ns/iter",
            "extra": "iterations: 17415\ncpu: 40012.52942865402 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 26344.91330781442,
            "unit": "ns/iter",
            "extra": "iterations: 26646\ncpu: 26343.942805674425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 41145.35798000538,
            "unit": "ns/iter",
            "extra": "iterations: 17406\ncpu: 41143.89865563599 ns\nthreads: 1"
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
        "date": 1705778424585,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 536.8608650649256,
            "unit": "ns/iter",
            "extra": "iterations: 1310052\ncpu: 536.8414383551188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5703.904618586427,
            "unit": "ns/iter",
            "extra": "iterations: 142208\ncpu: 5703.626378262827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 9709.576512702211,
            "unit": "ns/iter",
            "extra": "iterations: 86600\ncpu: 9709.143187066975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 14443.334627977849,
            "unit": "ns/iter",
            "extra": "iterations: 57416\ncpu: 14442.611815521806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 18605.01131074151,
            "unit": "ns/iter",
            "extra": "iterations: 44471\ncpu: 18604.418609880584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 23236.225848709353,
            "unit": "ns/iter",
            "extra": "iterations: 35878\ncpu: 23235.255588382865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 27779.014516292104,
            "unit": "ns/iter",
            "extra": "iterations: 30173\ncpu: 27778.31173565769 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 31695.317577098092,
            "unit": "ns/iter",
            "extra": "iterations: 26233\ncpu: 31694.28582319981 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 36472.91289347159,
            "unit": "ns/iter",
            "extra": "iterations: 23477\ncpu: 36471.704221152664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 491.82951907395096,
            "unit": "ns/iter",
            "extra": "iterations: 1390484\ncpu: 491.78473107205775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 389.6823320928213,
            "unit": "ns/iter",
            "extra": "iterations: 1805760\ncpu: 389.6719940634412 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 396.3273355425556,
            "unit": "ns/iter",
            "extra": "iterations: 1772875\ncpu: 396.31970669110865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 385.54526798494504,
            "unit": "ns/iter",
            "extra": "iterations: 1807359\ncpu: 385.52982556315624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 834.6831218880875,
            "unit": "ns/iter",
            "extra": "iterations: 824642\ncpu: 834.6661945425998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1651.5548542959807,
            "unit": "ns/iter",
            "extra": "iterations: 478504\ncpu: 1651.5005099225941 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 8634.361667126606,
            "unit": "ns/iter",
            "extra": "iterations: 94222\ncpu: 8633.940056462387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 7203.252892781576,
            "unit": "ns/iter",
            "extra": "iterations: 113040\ncpu: 7202.989207360229 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 7055.805129277452,
            "unit": "ns/iter",
            "extra": "iterations: 114753\ncpu: 7055.513145625845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 6756.91649783504,
            "unit": "ns/iter",
            "extra": "iterations: 118955\ncpu: 6756.6659661216345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 27352.506640350315,
            "unit": "ns/iter",
            "extra": "iterations: 29893\ncpu: 27350.85136988585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 234009.31066915754,
            "unit": "ns/iter",
            "extra": "iterations: 3721\ncpu: 233997.9306637996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 183449.7982308266,
            "unit": "ns/iter",
            "extra": "iterations: 4748\ncpu: 183438.71103622584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 179202.62642704998,
            "unit": "ns/iter",
            "extra": "iterations: 4730\ncpu: 179196.25792811866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 179241.41052631775,
            "unit": "ns/iter",
            "extra": "iterations: 4750\ncpu: 179231.78947368445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 95762.40107952962,
            "unit": "ns/iter",
            "extra": "iterations: 9078\ncpu: 95759.49548358677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 176158.18598545663,
            "unit": "ns/iter",
            "extra": "iterations: 4952\ncpu: 176149.1720516964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5384.704772283975,
            "unit": "ns/iter",
            "extra": "iterations: 151395\ncpu: 5384.56686152118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 25848.22009271704,
            "unit": "ns/iter",
            "extra": "iterations: 32141\ncpu: 25847.599639090233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 19947.657338665605,
            "unit": "ns/iter",
            "extra": "iterations: 42024\ncpu: 19947.02788882547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 19719.737801999123,
            "unit": "ns/iter",
            "extra": "iterations: 42384\ncpu: 19719.023688184192 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 19901.9127521563,
            "unit": "ns/iter",
            "extra": "iterations: 41938\ncpu: 19901.20415851967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 46299.97767345251,
            "unit": "ns/iter",
            "extra": "iterations: 18319\ncpu: 46298.58070855384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 248650.63543442404,
            "unit": "ns/iter",
            "extra": "iterations: 3522\ncpu: 248634.7813742184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 195052.69641648253,
            "unit": "ns/iter",
            "extra": "iterations: 4437\ncpu: 195046.4277665084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 193886.45699642142,
            "unit": "ns/iter",
            "extra": "iterations: 4488\ncpu: 193877.65151515114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 193014.5055358515,
            "unit": "ns/iter",
            "extra": "iterations: 4516\ncpu: 193007.462356067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 108399.41168444233,
            "unit": "ns/iter",
            "extra": "iterations: 8062\ncpu: 108394.7531629873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 187787.9909813132,
            "unit": "ns/iter",
            "extra": "iterations: 4657\ncpu: 187779.47176293688 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 784151.901153205,
            "unit": "ns/iter",
            "extra": "iterations: 1214\ncpu: 784118.5337726524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 433995.1923827967,
            "unit": "ns/iter",
            "extra": "iterations: 2048\ncpu: 433978.9062500002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 1577.9973143337586,
            "unit": "ns/iter",
            "extra": "iterations: 505275\ncpu: 1577.9312255702232 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 8412.705895041754,
            "unit": "ns/iter",
            "extra": "iterations: 97353\ncpu: 8412.366336938736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 6389.7415790184705,
            "unit": "ns/iter",
            "extra": "iterations: 125787\ncpu: 6389.496529848051 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 6619.574155069561,
            "unit": "ns/iter",
            "extra": "iterations: 123235\ncpu: 6619.410881648872 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 6571.847104542156,
            "unit": "ns/iter",
            "extra": "iterations: 122744\ncpu: 6571.57987355801 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 27212.903628968023,
            "unit": "ns/iter",
            "extra": "iterations: 30725\ncpu: 27211.87632221328 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 237888.4737967769,
            "unit": "ns/iter",
            "extra": "iterations: 3740\ncpu: 237878.95721925114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 182251.74782606875,
            "unit": "ns/iter",
            "extra": "iterations: 4830\ncpu: 182247.16356107628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 182351.0333676648,
            "unit": "ns/iter",
            "extra": "iterations: 4855\ncpu: 182341.73017507768 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 180059.122328507,
            "unit": "ns/iter",
            "extra": "iterations: 4913\ncpu: 180055.8518216983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 94489.36206708942,
            "unit": "ns/iter",
            "extra": "iterations: 9211\ncpu: 94485.08305287118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 175332.36767635721,
            "unit": "ns/iter",
            "extra": "iterations: 5018\ncpu: 175327.6803507374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 195.19210352005396,
            "unit": "ns/iter",
            "extra": "iterations: 3590106\ncpu: 195.18200855350653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1365.6290800262232,
            "unit": "ns/iter",
            "extra": "iterations: 513232\ncpu: 1365.5960657168732 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1071.2018356186436,
            "unit": "ns/iter",
            "extra": "iterations: 655038\ncpu: 1071.1570931762715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1017.8764706830508,
            "unit": "ns/iter",
            "extra": "iterations: 681571\ncpu: 1017.855953378304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 809.8502935285802,
            "unit": "ns/iter",
            "extra": "iterations: 866696\ncpu: 809.8244367113692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9384.241224925881,
            "unit": "ns/iter",
            "extra": "iterations: 73931\ncpu: 9383.718602480634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 11123.716336348583,
            "unit": "ns/iter",
            "extra": "iterations: 62768\ncpu: 11123.389306652994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2504.401410843685,
            "unit": "ns/iter",
            "extra": "iterations: 279549\ncpu: 2504.2886935743136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2555.227171573232,
            "unit": "ns/iter",
            "extra": "iterations: 274110\ncpu: 2555.118018313815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2533.550294741038,
            "unit": "ns/iter",
            "extra": "iterations: 275496\ncpu: 2533.461465865198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 4851.165555609748,
            "unit": "ns/iter",
            "extra": "iterations: 144157\ncpu: 4851.013825204495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 4813.497299003324,
            "unit": "ns/iter",
            "extra": "iterations: 145687\ncpu: 4813.290135701862 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1897.0365726485045,
            "unit": "ns/iter",
            "extra": "iterations: 369183\ncpu: 1896.9895688588142 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 9942.89730852976,
            "unit": "ns/iter",
            "extra": "iterations: 70259\ncpu: 9942.206692380936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 7915.516628472703,
            "unit": "ns/iter",
            "extra": "iterations: 87711\ncpu: 7915.220439853583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 7843.703608595048,
            "unit": "ns/iter",
            "extra": "iterations: 88788\ncpu: 7843.597107717343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 7734.130072667752,
            "unit": "ns/iter",
            "extra": "iterations: 90411\ncpu: 7733.700545287611 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 18582.168532783813,
            "unit": "ns/iter",
            "extra": "iterations: 37779\ncpu: 18581.50824532159 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 50167.51560940195,
            "unit": "ns/iter",
            "extra": "iterations: 14030\ncpu: 50166.34354953658 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 40761.243265208504,
            "unit": "ns/iter",
            "extra": "iterations: 17224\ncpu: 40759.271946121175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 40683.673568535705,
            "unit": "ns/iter",
            "extra": "iterations: 17290\ncpu: 40681.584731057985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 40417.40268339401,
            "unit": "ns/iter",
            "extra": "iterations: 17217\ncpu: 40414.892257651874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 24416.491748252316,
            "unit": "ns/iter",
            "extra": "iterations: 28600\ncpu: 24415.580419580114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 39993.025458078155,
            "unit": "ns/iter",
            "extra": "iterations: 17519\ncpu: 39991.192419659295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1986.0977735027877,
            "unit": "ns/iter",
            "extra": "iterations: 353470\ncpu: 1986.04662347582 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 9819.666053034263,
            "unit": "ns/iter",
            "extra": "iterations: 71161\ncpu: 9819.173423644947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 8168.605601275157,
            "unit": "ns/iter",
            "extra": "iterations: 85302\ncpu: 8168.31610044323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 9241.127679366778,
            "unit": "ns/iter",
            "extra": "iterations: 75251\ncpu: 9241.002777371841 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 9226.166786334195,
            "unit": "ns/iter",
            "extra": "iterations: 76601\ncpu: 9225.610631714888 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 18417.835001314586,
            "unit": "ns/iter",
            "extra": "iterations: 37970\ncpu: 18417.11614432459 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 50496.35561867351,
            "unit": "ns/iter",
            "extra": "iterations: 13731\ncpu: 50492.52057388296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 41680.97234526478,
            "unit": "ns/iter",
            "extra": "iterations: 16706\ncpu: 41677.88219801266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 41867.35317154531,
            "unit": "ns/iter",
            "extra": "iterations: 16853\ncpu: 41865.10413576159 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 42102.97831296154,
            "unit": "ns/iter",
            "extra": "iterations: 16692\ncpu: 42101.33596932633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 24243.38886969631,
            "unit": "ns/iter",
            "extra": "iterations: 28948\ncpu: 24242.21707890012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 40620.18015936857,
            "unit": "ns/iter",
            "extra": "iterations: 17318\ncpu: 40619.65007506613 ns\nthreads: 1"
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
        "date": 1705953615900,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 515.2213257017828,
            "unit": "ns/iter",
            "extra": "iterations: 1362056\ncpu: 515.2078181807502 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5772.160440335778,
            "unit": "ns/iter",
            "extra": "iterations: 141710\ncpu: 5772.090889845461 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 9785.254874505988,
            "unit": "ns/iter",
            "extra": "iterations: 85701\ncpu: 9785.14253042555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 14462.339762973463,
            "unit": "ns/iter",
            "extra": "iterations: 57546\ncpu: 14462.082507906722 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 18803.20812125029,
            "unit": "ns/iter",
            "extra": "iterations: 44008\ncpu: 18802.52454099255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 23342.8966713108,
            "unit": "ns/iter",
            "extra": "iterations: 35179\ncpu: 23341.806191193613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 28101.18136366528,
            "unit": "ns/iter",
            "extra": "iterations: 29802\ncpu: 28099.94295684852 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 33198.22734826088,
            "unit": "ns/iter",
            "extra": "iterations: 25274\ncpu: 33196.64081664956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 37427.35996628349,
            "unit": "ns/iter",
            "extra": "iterations: 22541\ncpu: 37427.288052881435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 501.86153718508655,
            "unit": "ns/iter",
            "extra": "iterations: 1398166\ncpu: 501.83311566723853 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 399.2966523615688,
            "unit": "ns/iter",
            "extra": "iterations: 1755088\ncpu: 399.2988385767549 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 398.92200794283997,
            "unit": "ns/iter",
            "extra": "iterations: 1755807\ncpu: 398.9168513395837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 393.60091882287253,
            "unit": "ns/iter",
            "extra": "iterations: 1779886\ncpu: 393.58374637476777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 841.6845758298442,
            "unit": "ns/iter",
            "extra": "iterations: 827286\ncpu: 841.6546393871059 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1655.6968803661482,
            "unit": "ns/iter",
            "extra": "iterations: 485089\ncpu: 1655.6796793990395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 8846.904572935384,
            "unit": "ns/iter",
            "extra": "iterations: 90970\ncpu: 8846.49554798286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 6931.375720206943,
            "unit": "ns/iter",
            "extra": "iterations: 116286\ncpu: 6931.045869666147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 7039.495530548853,
            "unit": "ns/iter",
            "extra": "iterations: 116681\ncpu: 7039.224895227167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 6806.166010348657,
            "unit": "ns/iter",
            "extra": "iterations: 118083\ncpu: 6805.938196014686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 27806.717021057797,
            "unit": "ns/iter",
            "extra": "iterations: 29299\ncpu: 27805.331239974013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 236792.14597184115,
            "unit": "ns/iter",
            "extra": "iterations: 3761\ncpu: 236782.318532306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 181014.10218068538,
            "unit": "ns/iter",
            "extra": "iterations: 4815\ncpu: 181006.60436137088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 181150.80704697713,
            "unit": "ns/iter",
            "extra": "iterations: 4768\ncpu: 181147.63003355672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 180543.4373195989,
            "unit": "ns/iter",
            "extra": "iterations: 4850\ncpu: 180540.72164948427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 95529.91985528442,
            "unit": "ns/iter",
            "extra": "iterations: 9121\ncpu: 95528.17673500734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 174943.90830831305,
            "unit": "ns/iter",
            "extra": "iterations: 4995\ncpu: 174941.56156156203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5457.310282408643,
            "unit": "ns/iter",
            "extra": "iterations: 149712\ncpu: 5457.250587795242 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 26180.852187263452,
            "unit": "ns/iter",
            "extra": "iterations: 31912\ncpu: 26180.593507144647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 20246.543321606114,
            "unit": "ns/iter",
            "extra": "iterations: 41215\ncpu: 20246.497634356427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 19969.65635443518,
            "unit": "ns/iter",
            "extra": "iterations: 41892\ncpu: 19969.399885419683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 19787.81672500466,
            "unit": "ns/iter",
            "extra": "iterations: 41997\ncpu: 19787.606257589825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 45698.205743979765,
            "unit": "ns/iter",
            "extra": "iterations: 18280\ncpu: 45697.23741794286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 249416.9273090072,
            "unit": "ns/iter",
            "extra": "iterations: 3508\ncpu: 249410.49030786808 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 194295.93741620265,
            "unit": "ns/iter",
            "extra": "iterations: 4474\ncpu: 194288.53375055882 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 195888.6180836851,
            "unit": "ns/iter",
            "extra": "iterations: 4446\ncpu: 195886.14484930268 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 194445.52543491774,
            "unit": "ns/iter",
            "extra": "iterations: 4541\ncpu: 194442.65580268716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 107811.08116121218,
            "unit": "ns/iter",
            "extra": "iterations: 8095\ncpu: 107808.96849907405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 186136.15793993307,
            "unit": "ns/iter",
            "extra": "iterations: 4660\ncpu: 186132.7253218886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 786443.8319605134,
            "unit": "ns/iter",
            "extra": "iterations: 1214\ncpu: 786426.8533772645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 434407.2158698969,
            "unit": "ns/iter",
            "extra": "iterations: 2029\ncpu: 434399.408575653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 1578.3514425760486,
            "unit": "ns/iter",
            "extra": "iterations: 505138\ncpu: 1578.343541764828 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 8254.075069861257,
            "unit": "ns/iter",
            "extra": "iterations: 97336\ncpu: 8253.994411112042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 6554.155541289263,
            "unit": "ns/iter",
            "extra": "iterations: 124610\ncpu: 6554.043816708108 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 6602.7213110780995,
            "unit": "ns/iter",
            "extra": "iterations: 123715\ncpu: 6602.635897021395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 6158.733962799084,
            "unit": "ns/iter",
            "extra": "iterations: 134188\ncpu: 6158.4858556651625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 27424.206485423707,
            "unit": "ns/iter",
            "extra": "iterations: 30530\ncpu: 27423.79954143473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 235855.50636268768,
            "unit": "ns/iter",
            "extra": "iterations: 3772\ncpu: 235852.75715800712 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 179778.21016119025,
            "unit": "ns/iter",
            "extra": "iterations: 4901\ncpu: 179774.59702101594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 180153.6364572769,
            "unit": "ns/iter",
            "extra": "iterations: 4855\ncpu: 180151.51390319213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 176531.20775567135,
            "unit": "ns/iter",
            "extra": "iterations: 4977\ncpu: 176529.3148483014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 96624.76625470279,
            "unit": "ns/iter",
            "extra": "iterations: 9305\ncpu: 96619.17248790989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 173716.7827287105,
            "unit": "ns/iter",
            "extra": "iterations: 5072\ncpu: 173710.78470031617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 195.76279314565414,
            "unit": "ns/iter",
            "extra": "iterations: 3575782\ncpu: 195.75382391879594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1357.271019263354,
            "unit": "ns/iter",
            "extra": "iterations: 515539\ncpu: 1357.215651968135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1069.5630171554983,
            "unit": "ns/iter",
            "extra": "iterations: 656234\ncpu: 1069.502799306338 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1037.0221643287384,
            "unit": "ns/iter",
            "extra": "iterations: 673650\ncpu: 1037.004676018704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 827.8051441427539,
            "unit": "ns/iter",
            "extra": "iterations: 863623\ncpu: 827.8098197940592 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9312.672595658167,
            "unit": "ns/iter",
            "extra": "iterations: 75842\ncpu: 9312.270246037817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 11102.386134521996,
            "unit": "ns/iter",
            "extra": "iterations: 62890\ncpu: 11101.726824614361 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2546.3269162870765,
            "unit": "ns/iter",
            "extra": "iterations: 274737\ncpu: 2546.21073972563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2553.411573951041,
            "unit": "ns/iter",
            "extra": "iterations: 275377\ncpu: 2553.304742226114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2553.5140371418593,
            "unit": "ns/iter",
            "extra": "iterations: 275056\ncpu: 2553.397853528014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 4937.5423696483585,
            "unit": "ns/iter",
            "extra": "iterations: 141540\ncpu: 4937.283453440763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 4934.662676983482,
            "unit": "ns/iter",
            "extra": "iterations: 142033\ncpu: 4934.601817887424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1942.536164953207,
            "unit": "ns/iter",
            "extra": "iterations: 359229\ncpu: 1942.5480682238976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 9873.058294552253,
            "unit": "ns/iter",
            "extra": "iterations: 69835\ncpu: 9872.581083983769 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 7942.27319084253,
            "unit": "ns/iter",
            "extra": "iterations: 88052\ncpu: 7941.93431154321 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 7905.352984656784,
            "unit": "ns/iter",
            "extra": "iterations: 89290\ncpu: 7905.018479113067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 7915.338998331246,
            "unit": "ns/iter",
            "extra": "iterations: 88732\ncpu: 7915.100527431034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 18869.463852838275,
            "unit": "ns/iter",
            "extra": "iterations: 37292\ncpu: 18869.567199399375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 51341.979561825836,
            "unit": "ns/iter",
            "extra": "iterations: 13602\ncpu: 51339.597118070524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 41867.79580809561,
            "unit": "ns/iter",
            "extra": "iterations: 16842\ncpu: 41868.02636266525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 41439.9795387326,
            "unit": "ns/iter",
            "extra": "iterations: 16910\ncpu: 41439.053814310326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 41275.91908334233,
            "unit": "ns/iter",
            "extra": "iterations: 16931\ncpu: 41274.437422479714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 24932.855120644035,
            "unit": "ns/iter",
            "extra": "iterations: 27975\ncpu: 24931.199285075956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 40875.70076771322,
            "unit": "ns/iter",
            "extra": "iterations: 17194\ncpu: 40873.96766313835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1979.3756177415012,
            "unit": "ns/iter",
            "extra": "iterations: 356136\ncpu: 1979.2247905294448 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 11288.217477737197,
            "unit": "ns/iter",
            "extra": "iterations: 61873\ncpu: 11288.277600892156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 8870.490360083568,
            "unit": "ns/iter",
            "extra": "iterations: 78787\ncpu: 8870.316168911177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 9442.97176633011,
            "unit": "ns/iter",
            "extra": "iterations: 73848\ncpu: 9442.416856245425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 9623.940048523336,
            "unit": "ns/iter",
            "extra": "iterations: 72542\ncpu: 9623.467784180077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 20018.995597109344,
            "unit": "ns/iter",
            "extra": "iterations: 34977\ncpu: 20017.33138919879 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 51101.857412932615,
            "unit": "ns/iter",
            "extra": "iterations: 13753\ncpu: 51100.10906711276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 42137.32144812698,
            "unit": "ns/iter",
            "extra": "iterations: 16435\ncpu: 42134.438697901096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 42378.41531238473,
            "unit": "ns/iter",
            "extra": "iterations: 16614\ncpu: 42376.74250632028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 40406.042143147286,
            "unit": "ns/iter",
            "extra": "iterations: 17227\ncpu: 40403.73251291513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 24437.166883185255,
            "unit": "ns/iter",
            "extra": "iterations: 28481\ncpu: 24436.00646044733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 41594.901512030774,
            "unit": "ns/iter",
            "extra": "iterations: 16997\ncpu: 41592.663411189664 ns\nthreads: 1"
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
        "date": 1705955075514,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 517.2743184294922,
            "unit": "ns/iter",
            "extra": "iterations: 1353675\ncpu: 517.2775592368922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5788.839787277742,
            "unit": "ns/iter",
            "extra": "iterations: 141593\ncpu: 5788.680937616971 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 9457.580837036405,
            "unit": "ns/iter",
            "extra": "iterations: 88431\ncpu: 9457.391638678744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 14262.919435074002,
            "unit": "ns/iter",
            "extra": "iterations: 58698\ncpu: 14262.455279566595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 18753.952844903368,
            "unit": "ns/iter",
            "extra": "iterations: 44237\ncpu: 18753.500463412995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 23758.774970557584,
            "unit": "ns/iter",
            "extra": "iterations: 35662\ncpu: 23756.5139364029 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 28303.23284753247,
            "unit": "ns/iter",
            "extra": "iterations: 29573\ncpu: 28301.893619179657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 32780.86764189752,
            "unit": "ns/iter",
            "extra": "iterations: 25635\ncpu: 32778.63858006629 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 36080.478688812604,
            "unit": "ns/iter",
            "extra": "iterations: 23063\ncpu: 36079.30884967265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 501.8422995012464,
            "unit": "ns/iter",
            "extra": "iterations: 1394111\ncpu: 501.7980634253663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 395.21174598528734,
            "unit": "ns/iter",
            "extra": "iterations: 1769677\ncpu: 395.192003964566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 397.6679877755137,
            "unit": "ns/iter",
            "extra": "iterations: 1754839\ncpu: 397.64172097839185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 392.47388752940725,
            "unit": "ns/iter",
            "extra": "iterations: 1785373\ncpu: 392.46717632674023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 841.1594292113903,
            "unit": "ns/iter",
            "extra": "iterations: 836597\ncpu: 841.1102358722308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1673.3007381284806,
            "unit": "ns/iter",
            "extra": "iterations: 472411\ncpu: 1673.2322067013667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 9325.55243838527,
            "unit": "ns/iter",
            "extra": "iterations: 87722\ncpu: 9324.704179111292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 6973.152380706281,
            "unit": "ns/iter",
            "extra": "iterations: 115953\ncpu: 6972.86400524351 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 6901.123348843415,
            "unit": "ns/iter",
            "extra": "iterations: 117342\ncpu: 6900.651088271886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 7191.08931954611,
            "unit": "ns/iter",
            "extra": "iterations: 112954\ncpu: 7190.718345521195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 27539.5893614852,
            "unit": "ns/iter",
            "extra": "iterations: 29929\ncpu: 27537.24147148259 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 231599.5030789872,
            "unit": "ns/iter",
            "extra": "iterations: 3735\ncpu: 231587.92503346695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 188189.39837223777,
            "unit": "ns/iter",
            "extra": "iterations: 4669\ncpu: 188177.72542300323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 181988.92718237345,
            "unit": "ns/iter",
            "extra": "iterations: 4628\ncpu: 181980.8340535865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 184841.37715422444,
            "unit": "ns/iter",
            "extra": "iterations: 4526\ncpu: 184826.57976137858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 99100.24305634141,
            "unit": "ns/iter",
            "extra": "iterations: 8821\ncpu: 99096.53100555489 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 183351.648835735,
            "unit": "ns/iter",
            "extra": "iterations: 4767\ncpu: 183341.01111810404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5490.023475939015,
            "unit": "ns/iter",
            "extra": "iterations: 152028\ncpu: 5489.779514299978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 25785.227985375248,
            "unit": "ns/iter",
            "extra": "iterations: 32274\ncpu: 25783.77021751249 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 20328.20206055167,
            "unit": "ns/iter",
            "extra": "iterations: 41057\ncpu: 20327.659108069314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 20016.32719313115,
            "unit": "ns/iter",
            "extra": "iterations: 41801\ncpu: 20015.341738235915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 19578.233738216128,
            "unit": "ns/iter",
            "extra": "iterations: 42646\ncpu: 19577.24757304317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 45543.03476752073,
            "unit": "ns/iter",
            "extra": "iterations: 16711\ncpu: 45542.82807731446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 256825.228101111,
            "unit": "ns/iter",
            "extra": "iterations: 3402\ncpu: 256814.13874191616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 203813.38839284342,
            "unit": "ns/iter",
            "extra": "iterations: 4256\ncpu: 203802.49060150408 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 205823.00649953238,
            "unit": "ns/iter",
            "extra": "iterations: 4308\ncpu: 205807.8922934072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 204273.60463483172,
            "unit": "ns/iter",
            "extra": "iterations: 4272\ncpu: 204260.93164794045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 111836.23996265087,
            "unit": "ns/iter",
            "extra": "iterations: 7497\ncpu: 111825.31679338402 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 191667.62475226657,
            "unit": "ns/iter",
            "extra": "iterations: 4541\ncpu: 191656.08896718782 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 793665.7451801935,
            "unit": "ns/iter",
            "extra": "iterations: 1193\ncpu: 793608.4660519648 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 446527.0341708546,
            "unit": "ns/iter",
            "extra": "iterations: 1990\ncpu: 446508.2412060288 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 1599.6516065872704,
            "unit": "ns/iter",
            "extra": "iterations: 509714\ncpu: 1599.5295400950247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 8721.894919417631,
            "unit": "ns/iter",
            "extra": "iterations: 92824\ncpu: 8721.539688011733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 6615.791668029568,
            "unit": "ns/iter",
            "extra": "iterations: 122324\ncpu: 6615.353487459517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 6675.046782517636,
            "unit": "ns/iter",
            "extra": "iterations: 121306\ncpu: 6674.738265213626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 6277.348221298032,
            "unit": "ns/iter",
            "extra": "iterations: 128605\ncpu: 6277.125306170048 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 27162.406362485868,
            "unit": "ns/iter",
            "extra": "iterations: 30837\ncpu: 27162.172066024377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 247048.28194444417,
            "unit": "ns/iter",
            "extra": "iterations: 3600\ncpu: 247041.8055555553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 187678.94071230397,
            "unit": "ns/iter",
            "extra": "iterations: 4689\ncpu: 187671.14523352665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 189103.64759036325,
            "unit": "ns/iter",
            "extra": "iterations: 4648\ncpu: 189096.01979346003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 188863.84027331197,
            "unit": "ns/iter",
            "extra": "iterations: 4683\ncpu: 188850.45910740984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 97105.19519650239,
            "unit": "ns/iter",
            "extra": "iterations: 9160\ncpu: 97102.28165938854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 179692.78055724455,
            "unit": "ns/iter",
            "extra": "iterations: 4917\ncpu: 179684.9094976616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 193.33492251564473,
            "unit": "ns/iter",
            "extra": "iterations: 3633315\ncpu: 193.32948010288095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1325.5358741043055,
            "unit": "ns/iter",
            "extra": "iterations: 528501\ncpu: 1325.4603113333671 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1065.8053536780214,
            "unit": "ns/iter",
            "extra": "iterations: 658127\ncpu: 1065.771196136916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1065.0385002525009,
            "unit": "ns/iter",
            "extra": "iterations: 657684\ncpu: 1065.0202832971484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 806.4689928902762,
            "unit": "ns/iter",
            "extra": "iterations: 868962\ncpu: 806.4427443317402 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9363.217749877798,
            "unit": "ns/iter",
            "extra": "iterations: 76147\ncpu: 9362.875753476917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 11100.72036156137,
            "unit": "ns/iter",
            "extra": "iterations: 63060\ncpu: 11100.244211861698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2523.260553636947,
            "unit": "ns/iter",
            "extra": "iterations: 278269\ncpu: 2523.159963919791 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2518.5677361532667,
            "unit": "ns/iter",
            "extra": "iterations: 274462\ncpu: 2518.470680822861 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2534.6833460574526,
            "unit": "ns/iter",
            "extra": "iterations: 277688\ncpu: 2534.6147474863865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 4878.700039125085,
            "unit": "ns/iter",
            "extra": "iterations: 143132\ncpu: 4878.42341335272 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 4805.1312953200295,
            "unit": "ns/iter",
            "extra": "iterations: 146319\ncpu: 4804.929640033018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1892.6830073260107,
            "unit": "ns/iter",
            "extra": "iterations: 368141\ncpu: 1892.6367886217329 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10117.527417731862,
            "unit": "ns/iter",
            "extra": "iterations: 69590\ncpu: 10117.29271447044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 7920.547235828947,
            "unit": "ns/iter",
            "extra": "iterations: 88598\ncpu: 7920.098647824959 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 7767.580586489621,
            "unit": "ns/iter",
            "extra": "iterations: 89618\ncpu: 7767.36369925692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 7796.902689677329,
            "unit": "ns/iter",
            "extra": "iterations: 89230\ncpu: 7796.757816877815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 18500.530521261415,
            "unit": "ns/iter",
            "extra": "iterations: 37908\ncpu: 18499.57001160693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 51406.773315776285,
            "unit": "ns/iter",
            "extra": "iterations: 13671\ncpu: 51404.16940969902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 41092.793512421995,
            "unit": "ns/iter",
            "extra": "iterations: 16863\ncpu: 41090.97432248132 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 41079.34719859213,
            "unit": "ns/iter",
            "extra": "iterations: 17045\ncpu: 41077.80580815487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 40859.93220041938,
            "unit": "ns/iter",
            "extra": "iterations: 17124\ncpu: 40859.55384256034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 24700.57005494568,
            "unit": "ns/iter",
            "extra": "iterations: 28392\ncpu: 24700.21484925345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 40795.86639416143,
            "unit": "ns/iter",
            "extra": "iterations: 17125\ncpu: 40794.66277372263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 2013.4422557595146,
            "unit": "ns/iter",
            "extra": "iterations: 347342\ncpu: 2013.4069591353814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 10779.829437096072,
            "unit": "ns/iter",
            "extra": "iterations: 65020\ncpu: 10779.904644724707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 9830.67309727809,
            "unit": "ns/iter",
            "extra": "iterations: 70859\ncpu: 9830.360292976127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 9645.17047702868,
            "unit": "ns/iter",
            "extra": "iterations: 72784\ncpu: 9644.599087711538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 8821.144454564002,
            "unit": "ns/iter",
            "extra": "iterations: 79056\ncpu: 8820.928202793008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 18970.83899689626,
            "unit": "ns/iter",
            "extra": "iterations: 36726\ncpu: 18970.007624026508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 50925.42376338825,
            "unit": "ns/iter",
            "extra": "iterations: 13727\ncpu: 50925.71574269634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 40034.852668345215,
            "unit": "ns/iter",
            "extra": "iterations: 17464\ncpu: 40033.629180027885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 40344.05158593895,
            "unit": "ns/iter",
            "extra": "iterations: 17466\ncpu: 40244.778426657555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 40340.55891885287,
            "unit": "ns/iter",
            "extra": "iterations: 17278\ncpu: 40339.02650769794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 24232.87047678981,
            "unit": "ns/iter",
            "extra": "iterations: 28713\ncpu: 24232.009890990274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 41647.483802573275,
            "unit": "ns/iter",
            "extra": "iterations: 16978\ncpu: 41645.6296383555 ns\nthreads: 1"
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
        "date": 1705957099912,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 524.1171212353569,
            "unit": "ns/iter",
            "extra": "iterations: 1332252\ncpu: 524.0953663421035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5023.198630000252,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5022.796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 9747.656145807936,
            "unit": "ns/iter",
            "extra": "iterations: 84879\ncpu: 9747.055219783457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 14469.042371124326,
            "unit": "ns/iter",
            "extra": "iterations: 57846\ncpu: 14468.352176468556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 19193.776937534607,
            "unit": "ns/iter",
            "extra": "iterations: 44167\ncpu: 19192.763828197512 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 23579.939073855585,
            "unit": "ns/iter",
            "extra": "iterations: 35502\ncpu: 23578.843445439674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 28235.693168943097,
            "unit": "ns/iter",
            "extra": "iterations: 30010\ncpu: 28235.384871709437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 32370.188383405777,
            "unit": "ns/iter",
            "extra": "iterations: 25894\ncpu: 32369.39831621225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 36878.156452868876,
            "unit": "ns/iter",
            "extra": "iterations: 23106\ncpu: 36876.166363715085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 499.5212669374282,
            "unit": "ns/iter",
            "extra": "iterations: 1405468\ncpu: 499.49276682215566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 394.152845240404,
            "unit": "ns/iter",
            "extra": "iterations: 1783909\ncpu: 394.1315392208911 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 396.3360460624748,
            "unit": "ns/iter",
            "extra": "iterations: 1760220\ncpu: 396.30529138403136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 394.71513201922176,
            "unit": "ns/iter",
            "extra": "iterations: 1778150\ncpu: 394.6942046509002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 828.7205564061247,
            "unit": "ns/iter",
            "extra": "iterations: 836727\ncpu: 828.6741075643554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1650.6224627678964,
            "unit": "ns/iter",
            "extra": "iterations: 482514\ncpu: 1650.5353212549244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 8884.745348324142,
            "unit": "ns/iter",
            "extra": "iterations: 90720\ncpu: 8884.178791887143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 6826.100521973588,
            "unit": "ns/iter",
            "extra": "iterations: 118780\ncpu: 6825.953022394354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 7159.123442013646,
            "unit": "ns/iter",
            "extra": "iterations: 111121\ncpu: 7159.002348790962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 6673.8797067810565,
            "unit": "ns/iter",
            "extra": "iterations: 119774\ncpu: 6673.552690901203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 27937.019407317464,
            "unit": "ns/iter",
            "extra": "iterations: 29628\ncpu: 27935.449574726525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 232809.54146729084,
            "unit": "ns/iter",
            "extra": "iterations: 3762\ncpu: 232800.74428495448 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 181959.39987377884,
            "unit": "ns/iter",
            "extra": "iterations: 4754\ncpu: 181948.16996213718 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 181087.09495673288,
            "unit": "ns/iter",
            "extra": "iterations: 4739\ncpu: 181085.41886473936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 180310.72594142598,
            "unit": "ns/iter",
            "extra": "iterations: 4780\ncpu: 180304.8117154813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 95857.51891240233,
            "unit": "ns/iter",
            "extra": "iterations: 9121\ncpu: 95853.4809779627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 174139.9203171448,
            "unit": "ns/iter",
            "extra": "iterations: 5045\ncpu: 174134.66798810678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5449.064395159271,
            "unit": "ns/iter",
            "extra": "iterations: 149064\ncpu: 5448.716658616454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 25942.901390764106,
            "unit": "ns/iter",
            "extra": "iterations: 31853\ncpu: 25941.65698678308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 20711.69764510912,
            "unit": "ns/iter",
            "extra": "iterations: 40469\ncpu: 20710.91205614168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 20420.36521439144,
            "unit": "ns/iter",
            "extra": "iterations: 40557\ncpu: 20419.46149863157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 20337.746844677564,
            "unit": "ns/iter",
            "extra": "iterations: 41121\ncpu: 20336.95678607033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 44295.996734822635,
            "unit": "ns/iter",
            "extra": "iterations: 18682\ncpu: 44294.60978481967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 249209.6192922452,
            "unit": "ns/iter",
            "extra": "iterations: 3504\ncpu: 249198.37328767113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 194857.95892256295,
            "unit": "ns/iter",
            "extra": "iterations: 4455\ncpu: 194848.23793490414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 194457.47783470017,
            "unit": "ns/iter",
            "extra": "iterations: 4489\ncpu: 194447.49387391363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 192837.38322954642,
            "unit": "ns/iter",
            "extra": "iterations: 4496\ncpu: 192831.36120996432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 108691.81635438072,
            "unit": "ns/iter",
            "extra": "iterations: 8059\ncpu: 108685.27112545009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 188164.619346469,
            "unit": "ns/iter",
            "extra": "iterations: 4621\ncpu: 188163.51439082331 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 790543.1747088091,
            "unit": "ns/iter",
            "extra": "iterations: 1202\ncpu: 790533.8602329452 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 441051.7365239494,
            "unit": "ns/iter",
            "extra": "iterations: 1985\ncpu: 441046.8010075566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 1564.173309251689,
            "unit": "ns/iter",
            "extra": "iterations: 505501\ncpu: 1564.1345912273232 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 8703.772811801562,
            "unit": "ns/iter",
            "extra": "iterations: 95181\ncpu: 8703.710824639384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 6615.280781120696,
            "unit": "ns/iter",
            "extra": "iterations: 123566\ncpu: 6615.209685512171 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 6656.961128024128,
            "unit": "ns/iter",
            "extra": "iterations: 123508\ncpu: 6656.967160022007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 6265.3810741882,
            "unit": "ns/iter",
            "extra": "iterations: 130573\ncpu: 6265.3864121985525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 26591.482287963863,
            "unit": "ns/iter",
            "extra": "iterations: 31504\ncpu: 26591.017013712368 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 243220.60104196667,
            "unit": "ns/iter",
            "extra": "iterations: 3647\ncpu: 243215.46476556122 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 185852.78421492697,
            "unit": "ns/iter",
            "extra": "iterations: 4764\ncpu: 185854.1141897556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 185548.97588831454,
            "unit": "ns/iter",
            "extra": "iterations: 4728\ncpu: 185548.5406091373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 182856.91380375432,
            "unit": "ns/iter",
            "extra": "iterations: 4861\ncpu: 182855.89384900118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 93998.58191420058,
            "unit": "ns/iter",
            "extra": "iterations: 9278\ncpu: 93997.35934468619 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 176372.1925823264,
            "unit": "ns/iter",
            "extra": "iterations: 5042\ncpu: 176372.09440698187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 196.36912066446237,
            "unit": "ns/iter",
            "extra": "iterations: 3563179\ncpu: 196.36796242905652 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1374.3417596598902,
            "unit": "ns/iter",
            "extra": "iterations: 510701\ncpu: 1374.3544657245668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1114.1920783175863,
            "unit": "ns/iter",
            "extra": "iterations: 645065\ncpu: 1114.175160642727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1103.6637029280391,
            "unit": "ns/iter",
            "extra": "iterations: 637933\ncpu: 1103.620129386626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 814.8412059158734,
            "unit": "ns/iter",
            "extra": "iterations: 844238\ncpu: 814.8006841672554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9453.598428232295,
            "unit": "ns/iter",
            "extra": "iterations: 75202\ncpu: 9453.305763144566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 11223.695006553511,
            "unit": "ns/iter",
            "extra": "iterations: 62562\ncpu: 11223.501486525438 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2560.706335283529,
            "unit": "ns/iter",
            "extra": "iterations: 272474\ncpu: 2560.6377122220706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2584.8209234173146,
            "unit": "ns/iter",
            "extra": "iterations: 271275\ncpu: 2584.696341351027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2539.901504504656,
            "unit": "ns/iter",
            "extra": "iterations: 275373\ncpu: 2539.7333798157365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 4936.496309442981,
            "unit": "ns/iter",
            "extra": "iterations: 141984\ncpu: 4936.354800540921 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 4917.721237790547,
            "unit": "ns/iter",
            "extra": "iterations: 142609\ncpu: 4917.3495361442765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1909.4433817987858,
            "unit": "ns/iter",
            "extra": "iterations: 366172\ncpu: 1909.2721453306171 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 9918.401570115593,
            "unit": "ns/iter",
            "extra": "iterations: 70568\ncpu: 9918.039337943512 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8037.33092508692,
            "unit": "ns/iter",
            "extra": "iterations: 87062\ncpu: 8036.778387815556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 8138.063580617015,
            "unit": "ns/iter",
            "extra": "iterations: 86756\ncpu: 8137.644658582705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 7972.567582047319,
            "unit": "ns/iter",
            "extra": "iterations: 87723\ncpu: 7971.812409516214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 18590.550801287645,
            "unit": "ns/iter",
            "extra": "iterations: 37627\ncpu: 18589.651048449126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 51384.1992893052,
            "unit": "ns/iter",
            "extra": "iterations: 13508\ncpu: 51383.72816109009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 41342.88640902276,
            "unit": "ns/iter",
            "extra": "iterations: 17026\ncpu: 41340.649594738104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 41694.53792897134,
            "unit": "ns/iter",
            "extra": "iterations: 16755\ncpu: 41692.76037003867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 41307.5324805518,
            "unit": "ns/iter",
            "extra": "iterations: 16964\ncpu: 41305.70030653188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 24842.79494462044,
            "unit": "ns/iter",
            "extra": "iterations: 28168\ncpu: 24841.799204771633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 40710.65198954136,
            "unit": "ns/iter",
            "extra": "iterations: 17215\ncpu: 40708.173104850284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1997.9947570403278,
            "unit": "ns/iter",
            "extra": "iterations: 351519\ncpu: 1997.9190314037248 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 11306.785819889003,
            "unit": "ns/iter",
            "extra": "iterations: 61551\ncpu: 11306.583158681424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 9544.409138525189,
            "unit": "ns/iter",
            "extra": "iterations: 72550\ncpu: 9544.252239834625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 9035.1276069509,
            "unit": "ns/iter",
            "extra": "iterations: 77629\ncpu: 9034.908346107777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 8899.454111460585,
            "unit": "ns/iter",
            "extra": "iterations: 78342\ncpu: 8899.428148375044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 18363.620238844862,
            "unit": "ns/iter",
            "extra": "iterations: 38016\ncpu: 18363.757365319645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 50331.36431686334,
            "unit": "ns/iter",
            "extra": "iterations: 13760\ncpu: 50331.24273255793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 40926.8006955867,
            "unit": "ns/iter",
            "extra": "iterations: 16964\ncpu: 40925.83117189406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 41247.979878336184,
            "unit": "ns/iter",
            "extra": "iterations: 17096\ncpu: 41247.941038839184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 40717.819735773985,
            "unit": "ns/iter",
            "extra": "iterations: 17258\ncpu: 40717.50492525142 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 24206.371340682603,
            "unit": "ns/iter",
            "extra": "iterations: 28933\ncpu: 24206.34569522693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 40467.168103196986,
            "unit": "ns/iter",
            "extra": "iterations: 17519\ncpu: 40466.43644043642 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}