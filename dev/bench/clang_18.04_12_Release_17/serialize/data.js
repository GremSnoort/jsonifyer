window.BENCHMARK_DATA = {
  "lastUpdate": 1702493009811,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Serialize clang-12 18.04 Release c++-17": [
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
        "date": 1702490303208,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 696.7587741677896,
            "unit": "ns/iter",
            "extra": "iterations: 1003400\ncpu: 696.7496511859678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 10887.285402621432,
            "unit": "ns/iter",
            "extra": "iterations: 76089\ncpu: 10887.078289897358 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 24092.252886168666,
            "unit": "ns/iter",
            "extra": "iterations: 34648\ncpu: 24091.95335950127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 37826.056379685186,
            "unit": "ns/iter",
            "extra": "iterations: 21976\ncpu: 37825.44139060795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 47363.72141434738,
            "unit": "ns/iter",
            "extra": "iterations: 16573\ncpu: 47362.022566825544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 59335.726183007435,
            "unit": "ns/iter",
            "extra": "iterations: 14349\ncpu: 59335.01986201131 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 59558.461200003876,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 59555.47000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 68998.47440057014,
            "unit": "ns/iter",
            "extra": "iterations: 12637\ncpu: 68996.18580359258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 78865.7182080963,
            "unit": "ns/iter",
            "extra": "iterations: 11072\ncpu: 78863.35802023114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 582.5419644362438,
            "unit": "ns/iter",
            "extra": "iterations: 1186600\ncpu: 582.5278948255531 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 472.5503408857468,
            "unit": "ns/iter",
            "extra": "iterations: 1483635\ncpu: 472.5311818607676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 464.86611872588355,
            "unit": "ns/iter",
            "extra": "iterations: 1504542\ncpu: 464.8518286628086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 473.3508651172221,
            "unit": "ns/iter",
            "extra": "iterations: 1483325\ncpu: 473.33638953027804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 927.1968501221714,
            "unit": "ns/iter",
            "extra": "iterations: 753680\ncpu: 927.1548933234267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 3316.25640845839,
            "unit": "ns/iter",
            "extra": "iterations: 242453\ncpu: 3316.1783933380875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 15535.324623115546,
            "unit": "ns/iter",
            "extra": "iterations: 52735\ncpu: 15534.665781738873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 12272.870093176973,
            "unit": "ns/iter",
            "extra": "iterations: 66540\ncpu: 12272.46167718665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 10595.685525407704,
            "unit": "ns/iter",
            "extra": "iterations: 76693\ncpu: 10595.202952029531 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 11409.19302563802,
            "unit": "ns/iter",
            "extra": "iterations: 70286\ncpu: 11408.737159605045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 42704.44214535711,
            "unit": "ns/iter",
            "extra": "iterations: 19428\ncpu: 42703.072884496585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 435349.8136272529,
            "unit": "ns/iter",
            "extra": "iterations: 1996\ncpu: 435334.4689378771 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 356929.5899132003,
            "unit": "ns/iter",
            "extra": "iterations: 2419\ncpu: 356925.8784621741 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 353967.85285770654,
            "unit": "ns/iter",
            "extra": "iterations: 2467\ncpu: 353954.03323875193 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 359433.0033222664,
            "unit": "ns/iter",
            "extra": "iterations: 2408\ncpu: 359426.82724252425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 219046.78573631952,
            "unit": "ns/iter",
            "extra": "iterations: 3239\ncpu: 219038.68477925364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 356322.75421982433,
            "unit": "ns/iter",
            "extra": "iterations: 2429\ncpu: 356309.18073281186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 1876824.4838708923,
            "unit": "ns/iter",
            "extra": "iterations: 496\ncpu: 1876623.185483865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 723915.2725868556,
            "unit": "ns/iter",
            "extra": "iterations: 1295\ncpu: 723893.2046332053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2538891.326027362,
            "unit": "ns/iter",
            "extra": "iterations: 365\ncpu: 2538770.684931506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 3632.2734312296284,
            "unit": "ns/iter",
            "extra": "iterations: 219280\ncpu: 3632.1456585187843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 16943.081483320948,
            "unit": "ns/iter",
            "extra": "iterations: 48378\ncpu: 16942.498656414125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 13312.75440890395,
            "unit": "ns/iter",
            "extra": "iterations: 61183\ncpu: 13312.34329797486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 12623.459706171605,
            "unit": "ns/iter",
            "extra": "iterations: 65072\ncpu: 12623.008359970583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 13123.183298064525,
            "unit": "ns/iter",
            "extra": "iterations: 61430\ncpu: 13122.835748005858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 44386.427043420015,
            "unit": "ns/iter",
            "extra": "iterations: 18792\ncpu: 44385.02554278402 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 462145.75991423905,
            "unit": "ns/iter",
            "extra": "iterations: 1866\ncpu: 462134.1371918551 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 380310.8928416266,
            "unit": "ns/iter",
            "extra": "iterations: 2305\ncpu: 380300.5206073736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 379794.0686956241,
            "unit": "ns/iter",
            "extra": "iterations: 2300\ncpu: 379777.60869565245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 380242.09498908295,
            "unit": "ns/iter",
            "extra": "iterations: 2295\ncpu: 380226.66666666674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 223257.9367477585,
            "unit": "ns/iter",
            "extra": "iterations: 3905\ncpu: 223244.68629961502 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 374609.6300900212,
            "unit": "ns/iter",
            "extra": "iterations: 2333\ncpu: 374602.14316330856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 1877991.6796714112,
            "unit": "ns/iter",
            "extra": "iterations: 487\ncpu: 1877869.4045174595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 742666.2011041557,
            "unit": "ns/iter",
            "extra": "iterations: 1268\ncpu: 742652.2082018908 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 3703.0436757288403,
            "unit": "ns/iter",
            "extra": "iterations: 219298\ncpu: 3702.94393929721 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 16936.88309220338,
            "unit": "ns/iter",
            "extra": "iterations: 48936\ncpu: 16936.578388098736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 13357.214992358038,
            "unit": "ns/iter",
            "extra": "iterations: 62165\ncpu: 13356.958095391323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 12602.253359533639,
            "unit": "ns/iter",
            "extra": "iterations: 66155\ncpu: 12602.076940518506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 13137.927235059315,
            "unit": "ns/iter",
            "extra": "iterations: 62750\ncpu: 13137.603187251027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 44212.04602088917,
            "unit": "ns/iter",
            "extra": "iterations: 18861\ncpu: 44211.01214145577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 446977.7784120407,
            "unit": "ns/iter",
            "extra": "iterations: 1927\ncpu: 446962.0134924757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 368219.89669771807,
            "unit": "ns/iter",
            "extra": "iterations: 2362\ncpu: 368215.2836579156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 365792.41927409405,
            "unit": "ns/iter",
            "extra": "iterations: 2397\ncpu: 365780.7676261987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 367406.9516806726,
            "unit": "ns/iter",
            "extra": "iterations: 2380\ncpu: 367401.008403361 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 224111.81661162194,
            "unit": "ns/iter",
            "extra": "iterations: 3937\ncpu: 224108.7630175274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 384766.649137547,
            "unit": "ns/iter",
            "extra": "iterations: 2377\ncpu: 384756.49978965207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 293.3852995942826,
            "unit": "ns/iter",
            "extra": "iterations: 2385009\ncpu: 293.3794379811586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1502.260872004527,
            "unit": "ns/iter",
            "extra": "iterations: 463415\ncpu: 1502.2409719150298 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1181.8824939574963,
            "unit": "ns/iter",
            "extra": "iterations: 608190\ncpu: 1181.8806622930379 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1141.949851652852,
            "unit": "ns/iter",
            "extra": "iterations: 614437\ncpu: 1141.9344863672043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 982.8043028216142,
            "unit": "ns/iter",
            "extra": "iterations: 712974\ncpu: 982.771882284623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 7789.368766243695,
            "unit": "ns/iter",
            "extra": "iterations: 89653\ncpu: 7789.286471172151 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 18868.747211894508,
            "unit": "ns/iter",
            "extra": "iterations: 37122\ncpu: 18868.22100102369 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4443.196223827475,
            "unit": "ns/iter",
            "extra": "iterations: 157514\ncpu: 4443.134578513674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4435.175202514742,
            "unit": "ns/iter",
            "extra": "iterations: 157766\ncpu: 4435.0658570288215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4496.227254378303,
            "unit": "ns/iter",
            "extra": "iterations: 156063\ncpu: 4496.150272646343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 9237.456827122995,
            "unit": "ns/iter",
            "extra": "iterations: 75742\ncpu: 9237.279184600426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 8510.86312743883,
            "unit": "ns/iter",
            "extra": "iterations: 82259\ncpu: 8510.742897433587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3207.856075888583,
            "unit": "ns/iter",
            "extra": "iterations: 218108\ncpu: 3207.7612925706426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 16432.24161691457,
            "unit": "ns/iter",
            "extra": "iterations: 42377\ncpu: 16432.083441489292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 13025.941108760424,
            "unit": "ns/iter",
            "extra": "iterations: 53862\ncpu: 13025.459507630552 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 12860.914744676853,
            "unit": "ns/iter",
            "extra": "iterations: 54284\ncpu: 12860.717706875064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 13353.279476891366,
            "unit": "ns/iter",
            "extra": "iterations: 52838\ncpu: 13353.043264317374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 28675.32342235076,
            "unit": "ns/iter",
            "extra": "iterations: 24451\ncpu: 28674.917181301244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 99670.09357642321,
            "unit": "ns/iter",
            "extra": "iterations: 7021\ncpu: 99670.07548782275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 86022.425683125,
            "unit": "ns/iter",
            "extra": "iterations: 8161\ncpu: 86018.11052567048 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 84646.0952150225,
            "unit": "ns/iter",
            "extra": "iterations: 8255\ncpu: 84644.86977589314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 85744.54132741177,
            "unit": "ns/iter",
            "extra": "iterations: 8106\ncpu: 85741.08068097822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 56271.42155996992,
            "unit": "ns/iter",
            "extra": "iterations: 12449\ncpu: 56270.73660535007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 85750.08911132498,
            "unit": "ns/iter",
            "extra": "iterations: 8192\ncpu: 85749.035644532 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3146.140551267867,
            "unit": "ns/iter",
            "extra": "iterations: 222723\ncpu: 3146.0625979355364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 15636.961772914376,
            "unit": "ns/iter",
            "extra": "iterations: 44785\ncpu: 15636.726582561232 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 12525.409959696404,
            "unit": "ns/iter",
            "extra": "iterations: 55825\ncpu: 12524.879534258713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 12225.099016484628,
            "unit": "ns/iter",
            "extra": "iterations: 57142\ncpu: 12224.981624724483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 12782.600771349937,
            "unit": "ns/iter",
            "extra": "iterations: 54450\ncpu: 12782.387511478337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 27574.025956177105,
            "unit": "ns/iter",
            "extra": "iterations: 25466\ncpu: 27573.639362286896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 98649.6359421154,
            "unit": "ns/iter",
            "extra": "iterations: 7117\ncpu: 98647.99775186143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 84230.343287172,
            "unit": "ns/iter",
            "extra": "iterations: 8305\ncpu: 84227.63395544881 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 82770.59239129619,
            "unit": "ns/iter",
            "extra": "iterations: 8464\ncpu: 82768.98629489519 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 83854.80440243563,
            "unit": "ns/iter",
            "extra": "iterations: 8359\ncpu: 83851.40567053515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 56160.417428250075,
            "unit": "ns/iter",
            "extra": "iterations: 12474\ncpu: 56156.517556518025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 84380.2487015271,
            "unit": "ns/iter",
            "extra": "iterations: 8279\ncpu: 84376.14446189221 ns\nthreads: 1"
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
        "date": 1702493008741,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 720.2119356457786,
            "unit": "ns/iter",
            "extra": "iterations: 973923\ncpu: 720.2000568833471 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 10935.252352483813,
            "unit": "ns/iter",
            "extra": "iterations: 75771\ncpu: 10935.019994456981 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 24386.198292804496,
            "unit": "ns/iter",
            "extra": "iterations: 34091\ncpu: 24385.060573171813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 38793.839248806886,
            "unit": "ns/iter",
            "extra": "iterations: 22258\ncpu: 38793.13954533202 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 48431.497113021316,
            "unit": "ns/iter",
            "extra": "iterations: 16280\ncpu: 48429.84643734649 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 60325.671892735605,
            "unit": "ns/iter",
            "extra": "iterations: 14096\ncpu: 60322.16940976163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 58983.200800003026,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 58982.15999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 67802.64106987935,
            "unit": "ns/iter",
            "extra": "iterations: 12749\ncpu: 67798.39987450004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 77728.77022107661,
            "unit": "ns/iter",
            "extra": "iterations: 11263\ncpu: 77724.6470744917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 571.0371944039583,
            "unit": "ns/iter",
            "extra": "iterations: 1214430\ncpu: 570.9840830677769 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 490.50533533859766,
            "unit": "ns/iter",
            "extra": "iterations: 1426245\ncpu: 490.4690989276044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 490.8365805389382,
            "unit": "ns/iter",
            "extra": "iterations: 1425944\ncpu: 490.8243942258595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 495.95277991008953,
            "unit": "ns/iter",
            "extra": "iterations: 1409506\ncpu: 495.8779884583676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 947.1489254454742,
            "unit": "ns/iter",
            "extra": "iterations: 739981\ncpu: 947.1390481647514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 3331.0720324157314,
            "unit": "ns/iter",
            "extra": "iterations: 240128\ncpu: 3330.9189265724963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 15462.580735953667,
            "unit": "ns/iter",
            "extra": "iterations: 52938\ncpu: 15461.944161094132 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 12664.825805354561,
            "unit": "ns/iter",
            "extra": "iterations: 64692\ncpu: 12663.411240957152 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 11691.708484077024,
            "unit": "ns/iter",
            "extra": "iterations: 69931\ncpu: 11691.251376356686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 12390.576822234101,
            "unit": "ns/iter",
            "extra": "iterations: 66745\ncpu: 12389.546782530531 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 43390.620607689576,
            "unit": "ns/iter",
            "extra": "iterations: 19352\ncpu: 43388.23894171146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 440701.76746558165,
            "unit": "ns/iter",
            "extra": "iterations: 1961\ncpu: 440662.3151453336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 359726.54322527355,
            "unit": "ns/iter",
            "extra": "iterations: 2406\ncpu: 359704.6965918539 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 360236.2544257142,
            "unit": "ns/iter",
            "extra": "iterations: 2429\ncpu: 360210.7039934136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 364048.27055367763,
            "unit": "ns/iter",
            "extra": "iterations: 2384\ncpu: 364013.50671140896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 221729.27179351417,
            "unit": "ns/iter",
            "extra": "iterations: 3797\ncpu: 221715.2225441139 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 364514.6010906016,
            "unit": "ns/iter",
            "extra": "iterations: 2384\ncpu: 364475.4614093963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 1878147.4395160833,
            "unit": "ns/iter",
            "extra": "iterations: 496\ncpu: 1877981.0483870935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 742550.7203124404,
            "unit": "ns/iter",
            "extra": "iterations: 1280\ncpu: 742462.6562500008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2568185.013888701,
            "unit": "ns/iter",
            "extra": "iterations: 360\ncpu: 2567890.0000000047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 3584.0224951552727,
            "unit": "ns/iter",
            "extra": "iterations: 221870\ncpu: 3583.7192950826984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 17144.881720879694,
            "unit": "ns/iter",
            "extra": "iterations: 47836\ncpu: 17144.10276778998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 13994.71469341741,
            "unit": "ns/iter",
            "extra": "iterations: 58516\ncpu: 13993.811948868713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 13033.038995972314,
            "unit": "ns/iter",
            "extra": "iterations: 62827\ncpu: 13032.290257373428 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 13608.925855670846,
            "unit": "ns/iter",
            "extra": "iterations: 60625\ncpu: 13607.755876288706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 43936.39223362472,
            "unit": "ns/iter",
            "extra": "iterations: 18902\ncpu: 43934.827002433565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 459341.5390334836,
            "unit": "ns/iter",
            "extra": "iterations: 1883\ncpu: 459306.10727562424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 382542.1587440043,
            "unit": "ns/iter",
            "extra": "iterations: 2293\ncpu: 382517.79328390653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 377442.1740628663,
            "unit": "ns/iter",
            "extra": "iterations: 2321\ncpu: 377422.5764756572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 374439.81508622644,
            "unit": "ns/iter",
            "extra": "iterations: 2320\ncpu: 374390.51724137954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 221162.55707763016,
            "unit": "ns/iter",
            "extra": "iterations: 3942\ncpu: 221149.6194824956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 371856.73373288487,
            "unit": "ns/iter",
            "extra": "iterations: 2336\ncpu: 371828.4674657528 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 1889913.7567010238,
            "unit": "ns/iter",
            "extra": "iterations: 485\ncpu: 1889764.5360824708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 732154.793076311,
            "unit": "ns/iter",
            "extra": "iterations: 1271\ncpu: 732096.0660896965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 3677.9017760850784,
            "unit": "ns/iter",
            "extra": "iterations: 216037\ncpu: 3677.584858149321 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 16819.42480066498,
            "unit": "ns/iter",
            "extra": "iterations: 49289\ncpu: 16818.227190651025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 13740.530517212797,
            "unit": "ns/iter",
            "extra": "iterations: 60130\ncpu: 13739.639115250364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 12930.568036273738,
            "unit": "ns/iter",
            "extra": "iterations: 64179\ncpu: 12929.28372208977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 13578.713957105881,
            "unit": "ns/iter",
            "extra": "iterations: 61732\ncpu: 13577.753839175826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 44417.23614817832,
            "unit": "ns/iter",
            "extra": "iterations: 18734\ncpu: 44415.79481157244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 453173.8496357902,
            "unit": "ns/iter",
            "extra": "iterations: 1922\ncpu: 453125.7023933416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 375654.2425292345,
            "unit": "ns/iter",
            "extra": "iterations: 2309\ncpu: 375630.8358596795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 373998.83148464217,
            "unit": "ns/iter",
            "extra": "iterations: 2344\ncpu: 373970.1791808893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 373636.73445593443,
            "unit": "ns/iter",
            "extra": "iterations: 2316\ncpu: 373605.13816925586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 229605.65615222114,
            "unit": "ns/iter",
            "extra": "iterations: 3836\ncpu: 229591.97080291965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 376016.79506065365,
            "unit": "ns/iter",
            "extra": "iterations: 2308\ncpu: 375999.61005199316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 297.24208745036293,
            "unit": "ns/iter",
            "extra": "iterations: 2353129\ncpu: 297.22152929142607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1572.7076470784568,
            "unit": "ns/iter",
            "extra": "iterations: 447295\ncpu: 1572.6261192278027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1242.513051325245,
            "unit": "ns/iter",
            "extra": "iterations: 578447\ncpu: 1242.5053634991675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1202.593783809332,
            "unit": "ns/iter",
            "extra": "iterations: 591552\ncpu: 1202.5301241479967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1029.1666581099676,
            "unit": "ns/iter",
            "extra": "iterations: 681725\ncpu: 1029.0980967398796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 7751.530069343677,
            "unit": "ns/iter",
            "extra": "iterations: 90707\ncpu: 7751.120641185392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 18926.167387893773,
            "unit": "ns/iter",
            "extra": "iterations: 36974\ncpu: 18924.195380537727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4474.398966579949,
            "unit": "ns/iter",
            "extra": "iterations: 156374\ncpu: 4474.106948725512 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4433.100954936734,
            "unit": "ns/iter",
            "extra": "iterations: 158021\ncpu: 4432.731092702801 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4473.0475054212875,
            "unit": "ns/iter",
            "extra": "iterations: 156319\ncpu: 4472.762747970503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 9320.690233140458,
            "unit": "ns/iter",
            "extra": "iterations: 75234\ncpu: 9320.080017013534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 8441.214138517395,
            "unit": "ns/iter",
            "extra": "iterations: 82979\ncpu: 8440.798274262084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3210.903670711831,
            "unit": "ns/iter",
            "extra": "iterations: 218459\ncpu: 3210.623045972035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 16247.56181023095,
            "unit": "ns/iter",
            "extra": "iterations: 43221\ncpu: 16246.796696050413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 12961.301182234565,
            "unit": "ns/iter",
            "extra": "iterations: 53881\ncpu: 12959.870826450793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 12841.523453296062,
            "unit": "ns/iter",
            "extra": "iterations: 54406\ncpu: 12841.359408888877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 13349.527829809907,
            "unit": "ns/iter",
            "extra": "iterations: 52318\ncpu: 13349.36159639123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 28740.15662304579,
            "unit": "ns/iter",
            "extra": "iterations: 24377\ncpu: 28739.574188784474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 99672.51834268446,
            "unit": "ns/iter",
            "extra": "iterations: 6951\ncpu: 99659.24327434895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 85604.28139534839,
            "unit": "ns/iter",
            "extra": "iterations: 8170\ncpu: 85595.58139534909 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 84021.57725141673,
            "unit": "ns/iter",
            "extra": "iterations: 8317\ncpu: 84015.55849465015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 85364.0297415846,
            "unit": "ns/iter",
            "extra": "iterations: 8204\ncpu: 85359.1784495376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 55797.51705266448,
            "unit": "ns/iter",
            "extra": "iterations: 12608\ncpu: 55794.217956852386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 85214.43084395603,
            "unit": "ns/iter",
            "extra": "iterations: 8235\ncpu: 85209.73891924709 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3030.18034767183,
            "unit": "ns/iter",
            "extra": "iterations: 230965\ncpu: 3029.9357045440224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 15457.54317474978,
            "unit": "ns/iter",
            "extra": "iterations: 45339\ncpu: 15456.858333884527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 12384.682020881486,
            "unit": "ns/iter",
            "extra": "iterations: 56510\ncpu: 12383.510883029381 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 12117.31713608181,
            "unit": "ns/iter",
            "extra": "iterations: 57767\ncpu: 12116.691190471918 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 12871.43872815636,
            "unit": "ns/iter",
            "extra": "iterations: 55164\ncpu: 12870.861431368361 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 27471.668980664937,
            "unit": "ns/iter",
            "extra": "iterations: 25497\ncpu: 27471.345648507653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 99182.05930644383,
            "unit": "ns/iter",
            "extra": "iterations: 7065\ncpu: 99178.25902335501 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 84842.92185990812,
            "unit": "ns/iter",
            "extra": "iterations: 8280\ncpu: 84836.55797101572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 82982.94806892287,
            "unit": "ns/iter",
            "extra": "iterations: 8415\ncpu: 82978.56209150347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 83192.40167564117,
            "unit": "ns/iter",
            "extra": "iterations: 8355\ncpu: 83185.70915619418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 55821.72043783345,
            "unit": "ns/iter",
            "extra": "iterations: 12516\ncpu: 55819.63886225594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 82826.12517798216,
            "unit": "ns/iter",
            "extra": "iterations: 8428\ncpu: 82820.12339819667 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}