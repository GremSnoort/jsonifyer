window.BENCHMARK_DATA = {
  "lastUpdate": 1702492954821,
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
      }
    ]
  }
}