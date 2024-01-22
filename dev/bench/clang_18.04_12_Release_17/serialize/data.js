window.BENCHMARK_DATA = {
  "lastUpdate": 1705953647944,
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
        "date": 1702503993754,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 732.2600180153146,
            "unit": "ns/iter",
            "extra": "iterations: 955853\ncpu: 732.254331994564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 10824.125801992703,
            "unit": "ns/iter",
            "extra": "iterations: 76684\ncpu: 10824.169318241093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 24344.37541230327,
            "unit": "ns/iter",
            "extra": "iterations: 34562\ncpu: 24344.337711937966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 37503.01837808827,
            "unit": "ns/iter",
            "extra": "iterations: 22418\ncpu: 37503.18047997146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 49492.82040625387,
            "unit": "ns/iter",
            "extra": "iterations: 17083\ncpu: 49490.66908622606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 58680.86674039247,
            "unit": "ns/iter",
            "extra": "iterations: 14468\ncpu: 58679.285319325376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 58704.352500001274,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 58698.129999999976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 67847.97579012957,
            "unit": "ns/iter",
            "extra": "iterations: 12846\ncpu: 67843.47656858165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 77482.94658080889,
            "unit": "ns/iter",
            "extra": "iterations: 11026\ncpu: 77479.37602031571 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 570.0465267341469,
            "unit": "ns/iter",
            "extra": "iterations: 1177710\ncpu: 570.0304828862786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 479.8088939368935,
            "unit": "ns/iter",
            "extra": "iterations: 1459781\ncpu: 479.8108757409499 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 470.1530585781372,
            "unit": "ns/iter",
            "extra": "iterations: 1492213\ncpu: 470.13114079558363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 482.856595978655,
            "unit": "ns/iter",
            "extra": "iterations: 1447958\ncpu: 482.83748561767624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 953.1603648422446,
            "unit": "ns/iter",
            "extra": "iterations: 734893\ncpu: 953.1186172680934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 3341.7964676933275,
            "unit": "ns/iter",
            "extra": "iterations: 241372\ncpu: 3341.632003712116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 14580.36936920823,
            "unit": "ns/iter",
            "extra": "iterations: 56120\ncpu: 14579.511760513185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 11887.616239043025,
            "unit": "ns/iter",
            "extra": "iterations: 69142\ncpu: 11887.048393161904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 11678.120807285108,
            "unit": "ns/iter",
            "extra": "iterations: 70062\ncpu: 11677.675487425422 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 11891.963925092781,
            "unit": "ns/iter",
            "extra": "iterations: 67443\ncpu: 11891.730794893461 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 43431.6176087473,
            "unit": "ns/iter",
            "extra": "iterations: 19195\ncpu: 43430.794477728596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 443710.3067076293,
            "unit": "ns/iter",
            "extra": "iterations: 1953\ncpu: 443708.9605734763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 362688.32861307723,
            "unit": "ns/iter",
            "extra": "iterations: 2401\ncpu: 362686.96376509825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 356712.50900160644,
            "unit": "ns/iter",
            "extra": "iterations: 2444\ncpu: 356706.8330605567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 364925.2588726401,
            "unit": "ns/iter",
            "extra": "iterations: 2395\ncpu: 364926.7223382046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 224292.42805662105,
            "unit": "ns/iter",
            "extra": "iterations: 3885\ncpu: 224291.27413127408 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 367362.9484060577,
            "unit": "ns/iter",
            "extra": "iterations: 2384\ncpu: 367359.94127516745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 1858130.3494949513,
            "unit": "ns/iter",
            "extra": "iterations: 495\ncpu: 1858073.7373737348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 736290.1211644385,
            "unit": "ns/iter",
            "extra": "iterations: 1271\ncpu: 736280.0944138463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2524072.0000000107,
            "unit": "ns/iter",
            "extra": "iterations: 365\ncpu: 2524007.1232876773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 3341.3619334521295,
            "unit": "ns/iter",
            "extra": "iterations: 234358\ncpu: 3341.3418786642696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 15455.124494230715,
            "unit": "ns/iter",
            "extra": "iterations: 53384\ncpu: 15454.565038213628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 12536.286115267247,
            "unit": "ns/iter",
            "extra": "iterations: 64841\ncpu: 12536.345830570188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 11744.460238098682,
            "unit": "ns/iter",
            "extra": "iterations: 69803\ncpu: 11744.389209632782 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 12418.01593279274,
            "unit": "ns/iter",
            "extra": "iterations: 65588\ncpu: 12417.911813136594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 44004.753469253585,
            "unit": "ns/iter",
            "extra": "iterations: 18736\ncpu: 44003.83753202373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 465702.02564098546,
            "unit": "ns/iter",
            "extra": "iterations: 1872\ncpu: 465700.9081196583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 382061.0343763608,
            "unit": "ns/iter",
            "extra": "iterations: 2269\ncpu: 382058.92463640217 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 380137.99783270736,
            "unit": "ns/iter",
            "extra": "iterations: 2307\ncpu: 380127.9150411775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 377390.0272963336,
            "unit": "ns/iter",
            "extra": "iterations: 2308\ncpu: 377391.89774696715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 221710.21776959483,
            "unit": "ns/iter",
            "extra": "iterations: 3793\ncpu: 221709.14843131913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 371442.60025597445,
            "unit": "ns/iter",
            "extra": "iterations: 2344\ncpu: 371440.87030716677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 1868599.8655804216,
            "unit": "ns/iter",
            "extra": "iterations: 491\ncpu: 1868546.4358452093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 723181.5688854798,
            "unit": "ns/iter",
            "extra": "iterations: 1292\ncpu: 723176.7027863826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 3700.2601875545356,
            "unit": "ns/iter",
            "extra": "iterations: 217643\ncpu: 3700.273383476606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 16798.216464340578,
            "unit": "ns/iter",
            "extra": "iterations: 49343\ncpu: 16797.86393206735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 13668.56691415883,
            "unit": "ns/iter",
            "extra": "iterations: 60473\ncpu: 13668.455343707068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 12824.104093203803,
            "unit": "ns/iter",
            "extra": "iterations: 64375\ncpu: 12824.164660194196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 13959.564037473483,
            "unit": "ns/iter",
            "extra": "iterations: 61058\ncpu: 13959.623636542392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 44381.85817256966,
            "unit": "ns/iter",
            "extra": "iterations: 18868\ncpu: 44380.464278142885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 449594.17264692934,
            "unit": "ns/iter",
            "extra": "iterations: 1923\ncpu: 449595.78783151146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 370755.7879177672,
            "unit": "ns/iter",
            "extra": "iterations: 2334\ncpu: 370753.1276778059 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 364690.8148305178,
            "unit": "ns/iter",
            "extra": "iterations: 2360\ncpu: 364689.27966101526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 371709.3361921355,
            "unit": "ns/iter",
            "extra": "iterations: 2332\ncpu: 371710.5060034282 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 223989.3855050049,
            "unit": "ns/iter",
            "extra": "iterations: 3891\ncpu: 223987.79234129985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 369369.4737954607,
            "unit": "ns/iter",
            "extra": "iterations: 2366\ncpu: 369367.7514792915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 296.58048782148387,
            "unit": "ns/iter",
            "extra": "iterations: 2349343\ncpu: 296.5727865194658 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1572.6240361731673,
            "unit": "ns/iter",
            "extra": "iterations: 444971\ncpu: 1572.6319243276582 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1213.0560089618023,
            "unit": "ns/iter",
            "extra": "iterations: 578461\ncpu: 1213.0622462015526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1218.7941532363034,
            "unit": "ns/iter",
            "extra": "iterations: 575190\ncpu: 1218.8028303690846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1022.711538996833,
            "unit": "ns/iter",
            "extra": "iterations: 682529\ncpu: 1022.7052623404994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 7956.823812606269,
            "unit": "ns/iter",
            "extra": "iterations: 88071\ncpu: 7956.653154841025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 19090.472026648044,
            "unit": "ns/iter",
            "extra": "iterations: 36928\ncpu: 19090.573548526947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4452.131567735947,
            "unit": "ns/iter",
            "extra": "iterations: 157265\ncpu: 4452.099322799032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4436.486438974137,
            "unit": "ns/iter",
            "extra": "iterations: 158137\ncpu: 4436.456996148875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4469.95484056304,
            "unit": "ns/iter",
            "extra": "iterations: 156645\ncpu: 4469.928181557069 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 9378.862862690892,
            "unit": "ns/iter",
            "extra": "iterations: 75202\ncpu: 9378.903486609246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 8501.428977478627,
            "unit": "ns/iter",
            "extra": "iterations: 82326\ncpu: 8501.300925588419 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3274.084242477846,
            "unit": "ns/iter",
            "extra": "iterations: 213479\ncpu: 3274.064427882824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 16425.451909540512,
            "unit": "ns/iter",
            "extra": "iterations: 42628\ncpu: 16425.025804635352 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 13149.049175704564,
            "unit": "ns/iter",
            "extra": "iterations: 53197\ncpu: 13149.109912213211 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 12990.216542750853,
            "unit": "ns/iter",
            "extra": "iterations: 53800\ncpu: 12990.14498141285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 13496.69398266366,
            "unit": "ns/iter",
            "extra": "iterations: 52033\ncpu: 13496.767436050037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 28466.10466392921,
            "unit": "ns/iter",
            "extra": "iterations: 24593\ncpu: 28465.986256251683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 100079.53196346668,
            "unit": "ns/iter",
            "extra": "iterations: 7008\ncpu: 100080.12271689561 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 86566.06193596036,
            "unit": "ns/iter",
            "extra": "iterations: 8089\ncpu: 86566.60897515116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 84979.49515621073,
            "unit": "ns/iter",
            "extra": "iterations: 8258\ncpu: 84978.46936304207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 86979.03745040018,
            "unit": "ns/iter",
            "extra": "iterations: 8064\ncpu: 86978.55902777768 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 56496.3086579713,
            "unit": "ns/iter",
            "extra": "iterations: 12347\ncpu: 56495.65076536806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 86155.27396755663,
            "unit": "ns/iter",
            "extra": "iterations: 8136\ncpu: 86154.71976401245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3151.6124495280715,
            "unit": "ns/iter",
            "extra": "iterations: 221904\ncpu: 3151.629984137274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 15738.106556454162,
            "unit": "ns/iter",
            "extra": "iterations: 44399\ncpu: 15737.933286785594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 12693.542084423309,
            "unit": "ns/iter",
            "extra": "iterations: 55056\ncpu: 12693.439407149217 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 12446.40086084242,
            "unit": "ns/iter",
            "extra": "iterations: 56224\ncpu: 12446.03194365371 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 12966.158271779761,
            "unit": "ns/iter",
            "extra": "iterations: 53882\ncpu: 12966.239189339669 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 27314.25662129044,
            "unit": "ns/iter",
            "extra": "iterations: 25637\ncpu: 27314.07340952531 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 99262.04094063654,
            "unit": "ns/iter",
            "extra": "iterations: 7059\ncpu: 99262.58676866491 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 85045.67398956741,
            "unit": "ns/iter",
            "extra": "iterations: 8239\ncpu: 85045.12683578102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 83010.20514340299,
            "unit": "ns/iter",
            "extra": "iterations: 8438\ncpu: 83007.90471675695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 84141.50198627551,
            "unit": "ns/iter",
            "extra": "iterations: 8307\ncpu: 84141.86830383982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 56492.18914354388,
            "unit": "ns/iter",
            "extra": "iterations: 12435\ncpu: 56491.59630076379 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 85104.12978955818,
            "unit": "ns/iter",
            "extra": "iterations: 8221\ncpu: 85104.69529254409 ns\nthreads: 1"
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
        "date": 1705575669281,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 702.3990295787364,
            "unit": "ns/iter",
            "extra": "iterations: 997505\ncpu: 702.3852512017484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 10711.365564189795,
            "unit": "ns/iter",
            "extra": "iterations: 77855\ncpu: 10710.894611778305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 24014.749411224715,
            "unit": "ns/iter",
            "extra": "iterations: 34818\ncpu: 24014.07030846115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 37864.316369195265,
            "unit": "ns/iter",
            "extra": "iterations: 22243\ncpu: 37863.6919480286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 47406.126206167755,
            "unit": "ns/iter",
            "extra": "iterations: 16996\ncpu: 47404.11861614497 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 59051.62215097344,
            "unit": "ns/iter",
            "extra": "iterations: 14347\ncpu: 59049.40405659723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 58961.85399999467,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 58959.75 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 67988.74270808649,
            "unit": "ns/iter",
            "extra": "iterations: 12651\ncpu: 67984.08821437033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 78137.36606103201,
            "unit": "ns/iter",
            "extra": "iterations: 11173\ncpu: 78135.90799248201 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 576.4690450504391,
            "unit": "ns/iter",
            "extra": "iterations: 1209645\ncpu: 576.457886404689 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 492.46730332880566,
            "unit": "ns/iter",
            "extra": "iterations: 1422209\ncpu: 492.43943752289573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 474.75903763157254,
            "unit": "ns/iter",
            "extra": "iterations: 1474612\ncpu: 474.72989505035844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 497.9341402777406,
            "unit": "ns/iter",
            "extra": "iterations: 1448427\ncpu: 497.900688125808 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 945.7895663256395,
            "unit": "ns/iter",
            "extra": "iterations: 739126\ncpu: 945.7499803822346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 3328.655999863981,
            "unit": "ns/iter",
            "extra": "iterations: 235497\ncpu: 3328.4912334339683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 15563.34665807832,
            "unit": "ns/iter",
            "extra": "iterations: 52784\ncpu: 15562.522734161857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 12714.673876590816,
            "unit": "ns/iter",
            "extra": "iterations: 65003\ncpu: 12713.773210467194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 11750.661015737796,
            "unit": "ns/iter",
            "extra": "iterations: 70018\ncpu: 11750.151389642664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 12537.396812435933,
            "unit": "ns/iter",
            "extra": "iterations: 66132\ncpu: 12536.932196213638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 43413.3707582703,
            "unit": "ns/iter",
            "extra": "iterations: 19096\ncpu: 43411.71449518216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 449452.0978483146,
            "unit": "ns/iter",
            "extra": "iterations: 1952\ncpu: 449408.4528688535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 361325.1756924065,
            "unit": "ns/iter",
            "extra": "iterations: 2419\ncpu: 361315.9156676312 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 359852.7960800976,
            "unit": "ns/iter",
            "extra": "iterations: 2398\ncpu: 359838.698915764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 362657.01813579636,
            "unit": "ns/iter",
            "extra": "iterations: 2371\ncpu: 362639.51919021533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 221053.74194366546,
            "unit": "ns/iter",
            "extra": "iterations: 3941\ncpu: 221050.4694240046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 358877.8343071746,
            "unit": "ns/iter",
            "extra": "iterations: 2396\ncpu: 358871.3689482478 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 1856261.9353535336,
            "unit": "ns/iter",
            "extra": "iterations: 495\ncpu: 1856171.1111111091 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 742197.3375796267,
            "unit": "ns/iter",
            "extra": "iterations: 1256\ncpu: 742163.5350318453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2517519.472826094,
            "unit": "ns/iter",
            "extra": "iterations: 368\ncpu: 2517417.6630434706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 3436.634468108446,
            "unit": "ns/iter",
            "extra": "iterations: 237257\ncpu: 3436.53928018983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 15539.23439303143,
            "unit": "ns/iter",
            "extra": "iterations: 53726\ncpu: 15538.714961098838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 12628.487688266288,
            "unit": "ns/iter",
            "extra": "iterations: 65466\ncpu: 12628.106192527355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 11836.425158806021,
            "unit": "ns/iter",
            "extra": "iterations: 70369\ncpu: 11836.105387315429 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 12358.578563056488,
            "unit": "ns/iter",
            "extra": "iterations: 66558\ncpu: 12358.37465068059 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 44398.71167961123,
            "unit": "ns/iter",
            "extra": "iterations: 18802\ncpu: 44397.81406233382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 464169.7131409964,
            "unit": "ns/iter",
            "extra": "iterations: 1872\ncpu: 464158.76068376086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 382087.81429816916,
            "unit": "ns/iter",
            "extra": "iterations: 2294\ncpu: 382084.30688753055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 379722.291684593,
            "unit": "ns/iter",
            "extra": "iterations: 2321\ncpu: 379711.67600172403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 368363.2765055016,
            "unit": "ns/iter",
            "extra": "iterations: 2358\ncpu: 368341.73027989984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 222053.57310239295,
            "unit": "ns/iter",
            "extra": "iterations: 3926\ncpu: 222041.84921039277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 362840.11786910973,
            "unit": "ns/iter",
            "extra": "iterations: 2384\ncpu: 362836.3674496656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 1868363.971370092,
            "unit": "ns/iter",
            "extra": "iterations: 489\ncpu: 1868211.45194274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 725135.3211508878,
            "unit": "ns/iter",
            "extra": "iterations: 1286\ncpu: 725073.6391912892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 3689.3090940911597,
            "unit": "ns/iter",
            "extra": "iterations: 217141\ncpu: 3689.1043147079563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 15797.313206101111,
            "unit": "ns/iter",
            "extra": "iterations: 52135\ncpu: 15796.549343051656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 12922.698628425396,
            "unit": "ns/iter",
            "extra": "iterations: 64014\ncpu: 12922.156090855111 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 12812.55976685362,
            "unit": "ns/iter",
            "extra": "iterations: 64509\ncpu: 12812.061882838096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 13031.035227112947,
            "unit": "ns/iter",
            "extra": "iterations: 63559\ncpu: 13031.018423826643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 44193.08133642728,
            "unit": "ns/iter",
            "extra": "iterations: 18946\ncpu: 44191.47577325045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 447435.51824813825,
            "unit": "ns/iter",
            "extra": "iterations: 1918\ncpu: 447407.24713242817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 368743.5895458297,
            "unit": "ns/iter",
            "extra": "iterations: 2334\ncpu: 368728.06341045507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 377805.5980475121,
            "unit": "ns/iter",
            "extra": "iterations: 2356\ncpu: 377792.52971137624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 367890.2337441458,
            "unit": "ns/iter",
            "extra": "iterations: 2353\ncpu: 367872.67318316834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 222438.7654226971,
            "unit": "ns/iter",
            "extra": "iterations: 3939\ncpu: 222427.59583650623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 367551.4171934013,
            "unit": "ns/iter",
            "extra": "iterations: 2373\ncpu: 367537.9266750962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 294.82006611479676,
            "unit": "ns/iter",
            "extra": "iterations: 2368909\ncpu: 294.80777860188016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1481.5836046947354,
            "unit": "ns/iter",
            "extra": "iterations: 473538\ncpu: 1481.5144719114296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1148.705219517146,
            "unit": "ns/iter",
            "extra": "iterations: 613141\ncpu: 1148.653409248447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1148.9558862636338,
            "unit": "ns/iter",
            "extra": "iterations: 609198\ncpu: 1148.9543629493305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 994.6226434914008,
            "unit": "ns/iter",
            "extra": "iterations: 704432\ncpu: 994.5869863947053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 7797.9745877585365,
            "unit": "ns/iter",
            "extra": "iterations: 89996\ncpu: 7797.672118760903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 18854.698650107643,
            "unit": "ns/iter",
            "extra": "iterations: 37040\ncpu: 18853.569114470843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4426.209088668995,
            "unit": "ns/iter",
            "extra": "iterations: 158263\ncpu: 4426.018715682107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4449.720497288327,
            "unit": "ns/iter",
            "extra": "iterations: 157655\ncpu: 4449.661602867027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4467.234639614407,
            "unit": "ns/iter",
            "extra": "iterations: 156832\ncpu: 4467.139359314399 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 9365.525505358004,
            "unit": "ns/iter",
            "extra": "iterations: 74749\ncpu: 9365.360071706622 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 8455.351195998874,
            "unit": "ns/iter",
            "extra": "iterations: 82985\ncpu: 8454.994276074063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3234.578128675933,
            "unit": "ns/iter",
            "extra": "iterations: 216777\ncpu: 3234.462143124016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 16194.30417476839,
            "unit": "ns/iter",
            "extra": "iterations: 43212\ncpu: 16193.661482921329 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 13008.801929140767,
            "unit": "ns/iter",
            "extra": "iterations: 53910\ncpu: 13007.9335930254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 12997.073076565192,
            "unit": "ns/iter",
            "extra": "iterations: 53875\ncpu: 12996.516009280933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 13391.86447923258,
            "unit": "ns/iter",
            "extra": "iterations: 51933\ncpu: 13391.479406157949 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 28363.41193666236,
            "unit": "ns/iter",
            "extra": "iterations: 24630\ncpu: 28362.22492894864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 98957.52814220154,
            "unit": "ns/iter",
            "extra": "iterations: 7089\ncpu: 98953.68881365491 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 84794.14235775823,
            "unit": "ns/iter",
            "extra": "iterations: 8296\ncpu: 84788.50048215936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 84105.63849483454,
            "unit": "ns/iter",
            "extra": "iterations: 8318\ncpu: 84103.48641500514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 85385.04081384212,
            "unit": "ns/iter",
            "extra": "iterations: 8208\ncpu: 85384.85623781772 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 55118.265648370354,
            "unit": "ns/iter",
            "extra": "iterations: 12701\ncpu: 55117.65215337402 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 84573.12845253477,
            "unit": "ns/iter",
            "extra": "iterations: 8291\ncpu: 84570.93233626924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3073.5053481118653,
            "unit": "ns/iter",
            "extra": "iterations: 226996\ncpu: 3073.4246418439343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 15622.78014532134,
            "unit": "ns/iter",
            "extra": "iterations: 44866\ncpu: 15622.384433646934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 12519.931871754854,
            "unit": "ns/iter",
            "extra": "iterations: 56423\ncpu: 12519.566488843118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 12319.332310999263,
            "unit": "ns/iter",
            "extra": "iterations: 56733\ncpu: 12318.90610403108 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 12827.522218156872,
            "unit": "ns/iter",
            "extra": "iterations: 54640\ncpu: 12827.289531478746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 27408.519308940522,
            "unit": "ns/iter",
            "extra": "iterations: 25584\ncpu: 27408.098811757485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 98202.3643117559,
            "unit": "ns/iter",
            "extra": "iterations: 7134\ncpu: 98200.30838239522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 83720.79971387841,
            "unit": "ns/iter",
            "extra": "iterations: 8388\ncpu: 83719.42060085922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 82491.86508123757,
            "unit": "ns/iter",
            "extra": "iterations: 8494\ncpu: 82489.86343301281 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 82892.72089977631,
            "unit": "ns/iter",
            "extra": "iterations: 8402\ncpu: 82889.95477267289 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 55457.14519459581,
            "unit": "ns/iter",
            "extra": "iterations: 12590\ncpu: 55456.13979348698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 82991.71279496815,
            "unit": "ns/iter",
            "extra": "iterations: 8433\ncpu: 82991.02336060762 ns\nthreads: 1"
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
        "date": 1705773454419,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 733.9701664467558,
            "unit": "ns/iter",
            "extra": "iterations: 950574\ncpu: 733.9452793785649 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 10992.405097125738,
            "unit": "ns/iter",
            "extra": "iterations: 75572\ncpu: 10992.028793733129 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 24277.365671421518,
            "unit": "ns/iter",
            "extra": "iterations: 33861\ncpu: 24276.565960839904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 37699.298319703725,
            "unit": "ns/iter",
            "extra": "iterations: 22258\ncpu: 37698.148980141974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 49816.95209794678,
            "unit": "ns/iter",
            "extra": "iterations: 16826\ncpu: 49814.40033281827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 59758.91707110819,
            "unit": "ns/iter",
            "extra": "iterations: 14217\ncpu: 59756.11591756344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 59457.800600000606,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 59453.949999999975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 68573.46118577222,
            "unit": "ns/iter",
            "extra": "iterations: 12650\ncpu: 68571.77865612642 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 77673.43913740161,
            "unit": "ns/iter",
            "extra": "iterations: 11222\ncpu: 77670.14792372129 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 585.7349790665587,
            "unit": "ns/iter",
            "extra": "iterations: 1197845\ncpu: 585.7097537661375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 498.31774980972966,
            "unit": "ns/iter",
            "extra": "iterations: 1404539\ncpu: 498.30442586499885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 486.24018360843473,
            "unit": "ns/iter",
            "extra": "iterations: 1443071\ncpu: 486.22853622586746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 492.06285509891086,
            "unit": "ns/iter",
            "extra": "iterations: 1423019\ncpu: 492.0442383411598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 957.8011861815816,
            "unit": "ns/iter",
            "extra": "iterations: 732097\ncpu: 957.7745845154402 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 3338.6982952780654,
            "unit": "ns/iter",
            "extra": "iterations: 241975\ncpu: 3338.592003306129 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 15481.712809334744,
            "unit": "ns/iter",
            "extra": "iterations: 53219\ncpu: 15481.17025874218 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 12974.415266894228,
            "unit": "ns/iter",
            "extra": "iterations: 64951\ncpu: 12973.649366445456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 11636.35216098119,
            "unit": "ns/iter",
            "extra": "iterations: 70269\ncpu: 11635.83941709717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 12364.55495794358,
            "unit": "ns/iter",
            "extra": "iterations: 66933\ncpu: 12363.950517681827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 43642.75464897648,
            "unit": "ns/iter",
            "extra": "iterations: 19144\ncpu: 43639.50062682821 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 444234.6437079573,
            "unit": "ns/iter",
            "extra": "iterations: 1931\ncpu: 444216.0538581054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 362352.25155407656,
            "unit": "ns/iter",
            "extra": "iterations: 2413\ncpu: 362330.99875673425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 361485.7107437774,
            "unit": "ns/iter",
            "extra": "iterations: 2420\ncpu: 361472.02479338716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 368250.85469015763,
            "unit": "ns/iter",
            "extra": "iterations: 2388\ncpu: 368231.8676716921 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 222021.37848196982,
            "unit": "ns/iter",
            "extra": "iterations: 3913\ncpu: 222008.91898798864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 360923.84474126546,
            "unit": "ns/iter",
            "extra": "iterations: 2396\ncpu: 360906.2604340568 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 1869556.6181818459,
            "unit": "ns/iter",
            "extra": "iterations: 495\ncpu: 1869415.7575757576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 736594.8960317123,
            "unit": "ns/iter",
            "extra": "iterations: 1260\ncpu: 736553.0158730161 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2561647.493075032,
            "unit": "ns/iter",
            "extra": "iterations: 361\ncpu: 2561480.0554016586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 3335.381204115432,
            "unit": "ns/iter",
            "extra": "iterations: 235509\ncpu: 3335.3031094353028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 15458.589941208751,
            "unit": "ns/iter",
            "extra": "iterations: 53068\ncpu: 15457.993517750841 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 12611.193021289715,
            "unit": "ns/iter",
            "extra": "iterations: 65055\ncpu: 12610.88924755978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 11776.775673382415,
            "unit": "ns/iter",
            "extra": "iterations: 69537\ncpu: 11776.179587845354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 12607.66796370326,
            "unit": "ns/iter",
            "extra": "iterations: 65020\ncpu: 12607.048600430591 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 44188.233521557224,
            "unit": "ns/iter",
            "extra": "iterations: 18949\ncpu: 44186.54282547919 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 465938.51019316504,
            "unit": "ns/iter",
            "extra": "iterations: 1864\ncpu: 465922.5321888377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 380178.5905340571,
            "unit": "ns/iter",
            "extra": "iterations: 2303\ncpu: 380160.0955275716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 377375.8156543898,
            "unit": "ns/iter",
            "extra": "iterations: 2338\ncpu: 377349.5295124028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 376688.9889031457,
            "unit": "ns/iter",
            "extra": "iterations: 2343\ncpu: 376670.72129748185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 223710.74481167746,
            "unit": "ns/iter",
            "extra": "iterations: 3903\ncpu: 223704.0481680775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 373889.39285713265,
            "unit": "ns/iter",
            "extra": "iterations: 2324\ncpu: 373870.52495697245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 1891601.539094747,
            "unit": "ns/iter",
            "extra": "iterations: 486\ncpu: 1891464.403292189 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 736691.2124104566,
            "unit": "ns/iter",
            "extra": "iterations: 1257\ncpu: 736652.1081941115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 3720.673896780654,
            "unit": "ns/iter",
            "extra": "iterations: 217885\ncpu: 3720.503476604632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 16871.315420938154,
            "unit": "ns/iter",
            "extra": "iterations: 49556\ncpu: 16870.633223020475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 13735.81323194657,
            "unit": "ns/iter",
            "extra": "iterations: 60626\ncpu: 13734.963546992996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 12491.754349242161,
            "unit": "ns/iter",
            "extra": "iterations: 64494\ncpu: 12491.250348869702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 13526.222989293878,
            "unit": "ns/iter",
            "extra": "iterations: 61272\ncpu: 13525.522261391892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 44322.30052356179,
            "unit": "ns/iter",
            "extra": "iterations: 19100\ncpu: 44320.0314136124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 453504.54287220637,
            "unit": "ns/iter",
            "extra": "iterations: 1901\ncpu: 453480.8521830601 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 375607.9761077171,
            "unit": "ns/iter",
            "extra": "iterations: 2302\ncpu: 375587.74978279555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 370413.91806089075,
            "unit": "ns/iter",
            "extra": "iterations: 2331\ncpu: 370395.9244959249 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 371790.5198275785,
            "unit": "ns/iter",
            "extra": "iterations: 2320\ncpu: 371768.2758620676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 223656.5067723134,
            "unit": "ns/iter",
            "extra": "iterations: 3913\ncpu: 223647.9938665992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 370958.72090059763,
            "unit": "ns/iter",
            "extra": "iterations: 2354\ncpu: 370941.29141886055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 295.2782821695886,
            "unit": "ns/iter",
            "extra": "iterations: 2364564\ncpu: 295.25882995765687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1514.150457866479,
            "unit": "ns/iter",
            "extra": "iterations: 462362\ncpu: 1514.0413788330247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1197.6936886328601,
            "unit": "ns/iter",
            "extra": "iterations: 587448\ncpu: 1197.6423445139008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1141.5063374178321,
            "unit": "ns/iter",
            "extra": "iterations: 612789\ncpu: 1141.4333481834656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 990.618421908223,
            "unit": "ns/iter",
            "extra": "iterations: 707462\ncpu: 990.5944064840245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 7796.951864112212,
            "unit": "ns/iter",
            "extra": "iterations: 90016\ncpu: 7796.405083540687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 18065.857165027926,
            "unit": "ns/iter",
            "extra": "iterations: 38660\ncpu: 18064.816347646065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4477.506557661146,
            "unit": "ns/iter",
            "extra": "iterations: 156077\ncpu: 4477.368222095511 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4460.6700845348205,
            "unit": "ns/iter",
            "extra": "iterations: 157213\ncpu: 4460.553516566685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4500.9150507725335,
            "unit": "ns/iter",
            "extra": "iterations: 154610\ncpu: 4500.674600607929 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 9294.969529159318,
            "unit": "ns/iter",
            "extra": "iterations: 75482\ncpu: 9294.649055403923 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 8369.100317108796,
            "unit": "ns/iter",
            "extra": "iterations: 82937\ncpu: 8368.606291522457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3210.7645245230333,
            "unit": "ns/iter",
            "extra": "iterations: 218286\ncpu: 3210.6474991524537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 16108.543546719275,
            "unit": "ns/iter",
            "extra": "iterations: 43505\ncpu: 16107.863463969834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 12854.35026822466,
            "unit": "ns/iter",
            "extra": "iterations: 53873\ncpu: 12853.614983386879 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 12848.125964669876,
            "unit": "ns/iter",
            "extra": "iterations: 54682\ncpu: 12847.584214183833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 13330.029259930241,
            "unit": "ns/iter",
            "extra": "iterations: 52495\ncpu: 13329.45042384969 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 28475.77445044781,
            "unit": "ns/iter",
            "extra": "iterations: 24611\ncpu: 28474.52358701421 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 100448.01681759945,
            "unit": "ns/iter",
            "extra": "iterations: 6957\ncpu: 100440.87968952017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 85825.36398185241,
            "unit": "ns/iter",
            "extra": "iterations: 8157\ncpu: 85823.35417432869 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 84369.98914899446,
            "unit": "ns/iter",
            "extra": "iterations: 8202\ncpu: 84363.35040234074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 85605.07520449333,
            "unit": "ns/iter",
            "extra": "iterations: 8191\ncpu: 85599.07215236289 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 56519.12993486626,
            "unit": "ns/iter",
            "extra": "iterations: 12437\ncpu: 56515.28503658441 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 84509.36828087494,
            "unit": "ns/iter",
            "extra": "iterations: 8260\ncpu: 84504.57627118805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3059.7132554408067,
            "unit": "ns/iter",
            "extra": "iterations: 229204\ncpu: 3059.586220135717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 15739.488986001188,
            "unit": "ns/iter",
            "extra": "iterations: 45079\ncpu: 15738.878413451956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 12532.288465997282,
            "unit": "ns/iter",
            "extra": "iterations: 56069\ncpu: 12531.994506768611 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 12264.844014446497,
            "unit": "ns/iter",
            "extra": "iterations: 57313\ncpu: 12264.17566695159 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 12776.499049846783,
            "unit": "ns/iter",
            "extra": "iterations: 54728\ncpu: 12775.721751205798 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 27231.268808016448,
            "unit": "ns/iter",
            "extra": "iterations: 25747\ncpu: 27230.108362139556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 97998.35979870879,
            "unit": "ns/iter",
            "extra": "iterations: 7154\ncpu: 97993.96142018384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 83314.33873464778,
            "unit": "ns/iter",
            "extra": "iterations: 8393\ncpu: 83310.60407482447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 81968.53500058538,
            "unit": "ns/iter",
            "extra": "iterations: 8557\ncpu: 81965.51361458392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 82802.23475178494,
            "unit": "ns/iter",
            "extra": "iterations: 8460\ncpu: 82797.75413711563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 56030.448292415094,
            "unit": "ns/iter",
            "extra": "iterations: 12503\ncpu: 56027.96928737151 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 84692.69318859623,
            "unit": "ns/iter",
            "extra": "iterations: 8383\ncpu: 84688.95383514237 ns\nthreads: 1"
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
        "date": 1705774903897,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 725.5118172441703,
            "unit": "ns/iter",
            "extra": "iterations: 953141\ncpu: 725.4691593373908 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 10805.252866423178,
            "unit": "ns/iter",
            "extra": "iterations: 77274\ncpu: 10804.672981856771 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 24265.21235172471,
            "unit": "ns/iter",
            "extra": "iterations: 34311\ncpu: 24263.859986593212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 37994.58689987586,
            "unit": "ns/iter",
            "extra": "iterations: 22641\ncpu: 37991.851066649004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 47855.100542167755,
            "unit": "ns/iter",
            "extra": "iterations: 16600\ncpu: 47851.43373493973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 58661.63543658412,
            "unit": "ns/iter",
            "extra": "iterations: 14121\ncpu: 58654.096735358675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 58679.74569999888,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 58676.76 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 67735.27623360844,
            "unit": "ns/iter",
            "extra": "iterations: 12808\ncpu: 67732.96377264215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 77707.42295374144,
            "unit": "ns/iter",
            "extra": "iterations: 11240\ncpu: 77702.9092526689 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 610.4838407299284,
            "unit": "ns/iter",
            "extra": "iterations: 1203365\ncpu: 610.4583397389817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 479.3757073860588,
            "unit": "ns/iter",
            "extra": "iterations: 1430089\ncpu: 479.32744045999937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 474.675667701651,
            "unit": "ns/iter",
            "extra": "iterations: 1481163\ncpu: 474.6449242925998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 478.69926890503035,
            "unit": "ns/iter",
            "extra": "iterations: 1461096\ncpu: 478.6437715249378 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 944.8080012935345,
            "unit": "ns/iter",
            "extra": "iterations: 742130\ncpu: 944.7245091830258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 3333.4529178270222,
            "unit": "ns/iter",
            "extra": "iterations: 241344\ncpu: 3333.184583001854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 15525.50622604483,
            "unit": "ns/iter",
            "extra": "iterations: 52441\ncpu: 15524.360710131365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 12672.835185871934,
            "unit": "ns/iter",
            "extra": "iterations: 64776\ncpu: 12672.02976411018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 11668.319340269412,
            "unit": "ns/iter",
            "extra": "iterations: 74394\ncpu: 11667.775627066685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 12299.731833883614,
            "unit": "ns/iter",
            "extra": "iterations: 66291\ncpu: 12299.372463833712 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 43972.90608759819,
            "unit": "ns/iter",
            "extra": "iterations: 18858\ncpu: 43972.048997772814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 446076.77817807416,
            "unit": "ns/iter",
            "extra": "iterations: 1943\ncpu: 446059.4956253206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 367996.2810651014,
            "unit": "ns/iter",
            "extra": "iterations: 2366\ncpu: 367957.52324598446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 362128.31669463916,
            "unit": "ns/iter",
            "extra": "iterations: 2384\ncpu: 362096.30872483284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 368684.05827307916,
            "unit": "ns/iter",
            "extra": "iterations: 2351\ncpu: 368664.142917906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 222054.2066545482,
            "unit": "ns/iter",
            "extra": "iterations: 3847\ncpu: 222038.18559916803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 360767.712317329,
            "unit": "ns/iter",
            "extra": "iterations: 2395\ncpu: 360745.5532359079 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 1861546.6713709435,
            "unit": "ns/iter",
            "extra": "iterations: 496\ncpu: 1861214.9193548413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 743136.0119331821,
            "unit": "ns/iter",
            "extra": "iterations: 1257\ncpu: 743086.2370723964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2523972.7213115804,
            "unit": "ns/iter",
            "extra": "iterations: 366\ncpu: 2523692.3497267757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 3745.4554562251105,
            "unit": "ns/iter",
            "extra": "iterations: 216001\ncpu: 3745.2988643571225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 16807.51200600807,
            "unit": "ns/iter",
            "extra": "iterations: 49267\ncpu: 16805.947185743025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 13690.882702621304,
            "unit": "ns/iter",
            "extra": "iterations: 60223\ncpu: 13689.723195456902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 12894.695257377598,
            "unit": "ns/iter",
            "extra": "iterations: 64205\ncpu: 12893.327622459306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 13420.418728152654,
            "unit": "ns/iter",
            "extra": "iterations: 59504\ncpu: 13419.504571121262 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 44502.91814112033,
            "unit": "ns/iter",
            "extra": "iterations: 18764\ncpu: 44500.335749307254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 461915.129237315,
            "unit": "ns/iter",
            "extra": "iterations: 1888\ncpu: 461870.6038135602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 381375.9390509291,
            "unit": "ns/iter",
            "extra": "iterations: 2297\ncpu: 381341.9677840665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 378953.98447610484,
            "unit": "ns/iter",
            "extra": "iterations: 2319\ncpu: 378916.2570073291 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 372000.66978327377,
            "unit": "ns/iter",
            "extra": "iterations: 2353\ncpu: 371984.87037824106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 222004.9895434807,
            "unit": "ns/iter",
            "extra": "iterations: 3921\ncpu: 221995.10328997686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 371881.6803946578,
            "unit": "ns/iter",
            "extra": "iterations: 2331\ncpu: 371866.8382668389 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 1867641.7938775334,
            "unit": "ns/iter",
            "extra": "iterations: 490\ncpu: 1867525.7142857136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 715396.4195534895,
            "unit": "ns/iter",
            "extra": "iterations: 1299\ncpu: 715347.1131639738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 3690.2335331825657,
            "unit": "ns/iter",
            "extra": "iterations: 216997\ncpu: 3690.010460974106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 16854.7447204483,
            "unit": "ns/iter",
            "extra": "iterations: 49436\ncpu: 16854.355125819282 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 13765.688351183533,
            "unit": "ns/iter",
            "extra": "iterations: 60504\ncpu: 13764.81885495169 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 12923.867860743483,
            "unit": "ns/iter",
            "extra": "iterations: 64485\ncpu: 12923.259672792115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 13476.742415141727,
            "unit": "ns/iter",
            "extra": "iterations: 61603\ncpu: 13475.78202360265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 44284.88747960782,
            "unit": "ns/iter",
            "extra": "iterations: 19001\ncpu: 44283.86400715752 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 460412.64086689294,
            "unit": "ns/iter",
            "extra": "iterations: 1938\ncpu: 460396.3880288981 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 369969.47977864416,
            "unit": "ns/iter",
            "extra": "iterations: 2349\ncpu: 369939.80417198874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 365784.6914357985,
            "unit": "ns/iter",
            "extra": "iterations: 2382\ncpu: 365781.0663308147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 369872.39053255925,
            "unit": "ns/iter",
            "extra": "iterations: 2366\ncpu: 369848.09805578936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 221951.62594842206,
            "unit": "ns/iter",
            "extra": "iterations: 3954\ncpu: 221943.4496712201 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 363367.6567601357,
            "unit": "ns/iter",
            "extra": "iterations: 2389\ncpu: 363354.9602344069 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 296.7539935190675,
            "unit": "ns/iter",
            "extra": "iterations: 2348743\ncpu: 296.751283558908 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1507.4934506651923,
            "unit": "ns/iter",
            "extra": "iterations: 464551\ncpu: 1507.4390110020167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1164.2030355479985,
            "unit": "ns/iter",
            "extra": "iterations: 600880\ncpu: 1164.1687192118266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1155.988746957528,
            "unit": "ns/iter",
            "extra": "iterations: 605614\ncpu: 1155.9115211999715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 999.2932231003075,
            "unit": "ns/iter",
            "extra": "iterations: 699730\ncpu: 999.2579995141026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 7887.30374613105,
            "unit": "ns/iter",
            "extra": "iterations: 88518\ncpu: 7886.642264850058 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 18763.848201650577,
            "unit": "ns/iter",
            "extra": "iterations: 37451\ncpu: 18763.418867319866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4413.283752471101,
            "unit": "ns/iter",
            "extra": "iterations: 158818\ncpu: 4413.051417345577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4339.320175656845,
            "unit": "ns/iter",
            "extra": "iterations: 160996\ncpu: 4339.274888817139 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4412.591343639291,
            "unit": "ns/iter",
            "extra": "iterations: 158681\ncpu: 4412.245952571511 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 8910.361450386401,
            "unit": "ns/iter",
            "extra": "iterations: 78517\ncpu: 8910.057694511992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 8320.594526741244,
            "unit": "ns/iter",
            "extra": "iterations: 84045\ncpu: 8320.172526622724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3187.432361262011,
            "unit": "ns/iter",
            "extra": "iterations: 219497\ncpu: 3187.3652031690526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 16296.50069059028,
            "unit": "ns/iter",
            "extra": "iterations: 42717\ncpu: 16295.643420652172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 13011.891527121568,
            "unit": "ns/iter",
            "extra": "iterations: 53866\ncpu: 13011.567593658407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 12757.142711052804,
            "unit": "ns/iter",
            "extra": "iterations: 54761\ncpu: 12756.744763609264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 13490.452808667607,
            "unit": "ns/iter",
            "extra": "iterations: 52605\ncpu: 13489.130310806846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 28625.809734514416,
            "unit": "ns/iter",
            "extra": "iterations: 24408\ncpu: 28625.135201573317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 99540.35395826331,
            "unit": "ns/iter",
            "extra": "iterations: 6998\ncpu: 99531.33752500759 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 86148.3853121126,
            "unit": "ns/iter",
            "extra": "iterations: 8170\ncpu: 86144.92044063711 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 83648.22756563436,
            "unit": "ns/iter",
            "extra": "iterations: 8380\ncpu: 83643.97374701808 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 85146.44577728973,
            "unit": "ns/iter",
            "extra": "iterations: 8253\ncpu: 85138.62837755993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 56148.41624081879,
            "unit": "ns/iter",
            "extra": "iterations: 12524\ncpu: 56147.10954966406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 84683.71797955023,
            "unit": "ns/iter",
            "extra": "iterations: 8315\ncpu: 84678.53277209934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3061.8496799648983,
            "unit": "ns/iter",
            "extra": "iterations: 228100\ncpu: 3061.7900043840596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 15541.93392109523,
            "unit": "ns/iter",
            "extra": "iterations: 45143\ncpu: 15540.761579868496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 12602.674808447202,
            "unit": "ns/iter",
            "extra": "iterations: 55598\ncpu: 12602.38857512865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 12395.198811691049,
            "unit": "ns/iter",
            "extra": "iterations: 56551\ncpu: 12395.075241817152 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 12876.88878864305,
            "unit": "ns/iter",
            "extra": "iterations: 54311\ncpu: 12876.538822706283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 27387.614827853067,
            "unit": "ns/iter",
            "extra": "iterations: 25560\ncpu: 27386.697965571475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 98377.33551805677,
            "unit": "ns/iter",
            "extra": "iterations: 7171\ncpu: 98369.26509552512 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 83414.30790223384,
            "unit": "ns/iter",
            "extra": "iterations: 8428\ncpu: 83410.3464641666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 82615.2729196077,
            "unit": "ns/iter",
            "extra": "iterations: 8508\ncpu: 82609.60272684564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 82767.98550383597,
            "unit": "ns/iter",
            "extra": "iterations: 8485\ncpu: 82765.85739540367 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 55811.65590112332,
            "unit": "ns/iter",
            "extra": "iterations: 12540\ncpu: 55809.601275917994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 83803.27158294876,
            "unit": "ns/iter",
            "extra": "iterations: 8421\ncpu: 83795.55872224226 ns\nthreads: 1"
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
        "date": 1705778445250,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 696.7309859911495,
            "unit": "ns/iter",
            "extra": "iterations: 1006074\ncpu: 696.7221099044406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 10738.192880091176,
            "unit": "ns/iter",
            "extra": "iterations: 77810\ncpu: 10737.825472304332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 23960.6636104137,
            "unit": "ns/iter",
            "extra": "iterations: 34683\ncpu: 23960.401349364245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 38606.53728598026,
            "unit": "ns/iter",
            "extra": "iterations: 22837\ncpu: 38605.753820554375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 50093.39417796233,
            "unit": "ns/iter",
            "extra": "iterations: 16386\ncpu: 50093.62260466251 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 60076.60005666609,
            "unit": "ns/iter",
            "extra": "iterations: 14117\ncpu: 60076.04306864065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 60065.17710000025,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 60063.66000000005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 68822.11686967615,
            "unit": "ns/iter",
            "extra": "iterations: 12561\ncpu: 68819.7754955816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 78565.92922579768,
            "unit": "ns/iter",
            "extra": "iterations: 11134\ncpu: 78565.21465780493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 577.9620266036183,
            "unit": "ns/iter",
            "extra": "iterations: 1209610\ncpu: 577.9557874025512 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 484.1808048723532,
            "unit": "ns/iter",
            "extra": "iterations: 1401887\ncpu: 484.16969413369316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 471.2399504533707,
            "unit": "ns/iter",
            "extra": "iterations: 1470937\ncpu: 471.21202335654107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 478.83977291833924,
            "unit": "ns/iter",
            "extra": "iterations: 1463086\ncpu: 478.8140273367392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 970.709243106613,
            "unit": "ns/iter",
            "extra": "iterations: 722387\ncpu: 970.6500809123071 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 3344.345557281571,
            "unit": "ns/iter",
            "extra": "iterations: 240157\ncpu: 3344.1161406912993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 15478.546688629294,
            "unit": "ns/iter",
            "extra": "iterations: 52818\ncpu: 15477.678064296244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 12643.178102482427,
            "unit": "ns/iter",
            "extra": "iterations: 64811\ncpu: 12642.357007298111 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 10970.423014000095,
            "unit": "ns/iter",
            "extra": "iterations: 74572\ncpu: 10969.928391353333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 11965.977685938793,
            "unit": "ns/iter",
            "extra": "iterations: 68477\ncpu: 11965.578223345045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 43974.542944136556,
            "unit": "ns/iter",
            "extra": "iterations: 19048\ncpu: 43972.38030239398 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 444475.95627571084,
            "unit": "ns/iter",
            "extra": "iterations: 1944\ncpu: 444454.6296296284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 363393.1298538627,
            "unit": "ns/iter",
            "extra": "iterations: 2395\ncpu: 363378.87265135715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 361470.70185567834,
            "unit": "ns/iter",
            "extra": "iterations: 2425\ncpu: 361448.6185567017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 368586.3633684341,
            "unit": "ns/iter",
            "extra": "iterations: 2375\ncpu: 368572.58947368397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 222304.17366804092,
            "unit": "ns/iter",
            "extra": "iterations: 3904\ncpu: 222293.08401639402 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 363313.7257118942,
            "unit": "ns/iter",
            "extra": "iterations: 2388\ncpu: 363288.90284757037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 1870245.77666004,
            "unit": "ns/iter",
            "extra": "iterations: 497\ncpu: 1870137.4245472841 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 739709.6635293779,
            "unit": "ns/iter",
            "extra": "iterations: 1275\ncpu: 739672.3921568602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2550960.614325082,
            "unit": "ns/iter",
            "extra": "iterations: 363\ncpu: 2550823.415977966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 3664.4718062160564,
            "unit": "ns/iter",
            "extra": "iterations: 216076\ncpu: 3664.18806345916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 16865.126523705985,
            "unit": "ns/iter",
            "extra": "iterations: 49058\ncpu: 16864.248440621363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 13663.798769158742,
            "unit": "ns/iter",
            "extra": "iterations: 60284\ncpu: 13663.134496715587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 12849.010686236175,
            "unit": "ns/iter",
            "extra": "iterations: 63914\ncpu: 12848.477641831289 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 13537.424854444609,
            "unit": "ns/iter",
            "extra": "iterations: 60802\ncpu: 13536.56129732578 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 42957.41996764204,
            "unit": "ns/iter",
            "extra": "iterations: 19161\ncpu: 42955.70168571581 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 465027.2793326233,
            "unit": "ns/iter",
            "extra": "iterations: 1858\ncpu: 465008.55758880294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 382766.45402801485,
            "unit": "ns/iter",
            "extra": "iterations: 2284\ncpu: 382742.9509632206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 380528.3647523108,
            "unit": "ns/iter",
            "extra": "iterations: 2281\ncpu: 380508.2858395429 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 375709.3413793102,
            "unit": "ns/iter",
            "extra": "iterations: 2320\ncpu: 375692.4568965511 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 221641.71746355848,
            "unit": "ns/iter",
            "extra": "iterations: 3911\ncpu: 221633.00946049552 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 376089.8575107365,
            "unit": "ns/iter",
            "extra": "iterations: 2330\ncpu: 376067.42489270575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 1876754.829568638,
            "unit": "ns/iter",
            "extra": "iterations: 487\ncpu: 1876542.5051334645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 723650.3432137622,
            "unit": "ns/iter",
            "extra": "iterations: 1282\ncpu: 723620.8268330703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 3682.0191688120935,
            "unit": "ns/iter",
            "extra": "iterations: 216341\ncpu: 3681.963659223185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 16775.235821261736,
            "unit": "ns/iter",
            "extra": "iterations: 48876\ncpu: 16774.797446599543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 13731.078898654707,
            "unit": "ns/iter",
            "extra": "iterations: 59963\ncpu: 13731.030802328094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 12895.115537287753,
            "unit": "ns/iter",
            "extra": "iterations: 63988\ncpu: 12894.866224917097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 13501.06947426949,
            "unit": "ns/iter",
            "extra": "iterations: 61001\ncpu: 13500.616383338029 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 44017.86018411541,
            "unit": "ns/iter",
            "extra": "iterations: 19118\ncpu: 44016.06862642542 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 448856.1040582697,
            "unit": "ns/iter",
            "extra": "iterations: 1922\ncpu: 448831.7898022894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 370157.951750632,
            "unit": "ns/iter",
            "extra": "iterations: 2342\ncpu: 370143.2109308274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 365784.0004194954,
            "unit": "ns/iter",
            "extra": "iterations: 2384\ncpu: 365753.0201342291 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 368784.44664697256,
            "unit": "ns/iter",
            "extra": "iterations: 2371\ncpu: 368777.94179671013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 224366.50972861855,
            "unit": "ns/iter",
            "extra": "iterations: 3906\ncpu: 224359.31899641614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 365941.99193205603,
            "unit": "ns/iter",
            "extra": "iterations: 2355\ncpu: 365914.77707006386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 297.6903589182696,
            "unit": "ns/iter",
            "extra": "iterations: 2363853\ncpu: 297.67062503463563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1523.6596632063995,
            "unit": "ns/iter",
            "extra": "iterations: 458916\ncpu: 1523.5923349806958 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1184.4555618241384,
            "unit": "ns/iter",
            "extra": "iterations: 590247\ncpu: 1184.4517634142949 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1172.5892253354407,
            "unit": "ns/iter",
            "extra": "iterations: 597123\ncpu: 1172.582700716603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1004.8750555240358,
            "unit": "ns/iter",
            "extra": "iterations: 695645\ncpu: 1004.8001495015392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 7849.172201694155,
            "unit": "ns/iter",
            "extra": "iterations: 88768\ncpu: 7848.737157534283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 18863.200279885794,
            "unit": "ns/iter",
            "extra": "iterations: 37158\ncpu: 18861.84670864951 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4450.620302067469,
            "unit": "ns/iter",
            "extra": "iterations: 157117\ncpu: 4450.415295607763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4415.1485984781,
            "unit": "ns/iter",
            "extra": "iterations: 158649\ncpu: 4414.873084608217 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4460.211617940384,
            "unit": "ns/iter",
            "extra": "iterations: 157033\ncpu: 4460.2312889647865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 9408.06357191889,
            "unit": "ns/iter",
            "extra": "iterations: 74341\ncpu: 9407.55303264687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 8627.298240338316,
            "unit": "ns/iter",
            "extra": "iterations: 83141\ncpu: 8626.86400211685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3220.003744833598,
            "unit": "ns/iter",
            "extra": "iterations: 216298\ncpu: 3219.714930327604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 16239.19906828217,
            "unit": "ns/iter",
            "extra": "iterations: 43146\ncpu: 16238.341908867611 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 13040.795061273639,
            "unit": "ns/iter",
            "extra": "iterations: 54265\ncpu: 13039.990785957767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 12793.081935967692,
            "unit": "ns/iter",
            "extra": "iterations: 54567\ncpu: 12792.27188593827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 13239.043114408572,
            "unit": "ns/iter",
            "extra": "iterations: 52697\ncpu: 13238.945291003398 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 28441.982440523723,
            "unit": "ns/iter",
            "extra": "iterations: 24716\ncpu: 28441.531801262085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 100921.55557154448,
            "unit": "ns/iter",
            "extra": "iterations: 6946\ncpu: 100920.47221422457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 86376.87846665816,
            "unit": "ns/iter",
            "extra": "iterations: 8113\ncpu: 86375.49611734218 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 85113.91550150883,
            "unit": "ns/iter",
            "extra": "iterations: 8225\ncpu: 85112.04863221802 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 85797.88922925628,
            "unit": "ns/iter",
            "extra": "iterations: 8161\ncpu: 85796.29947310411 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 56630.5177878367,
            "unit": "ns/iter",
            "extra": "iterations: 12368\ncpu: 56629.05077619761 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 86521.65147782287,
            "unit": "ns/iter",
            "extra": "iterations: 8120\ncpu: 86520.87438423513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3120.7099575988204,
            "unit": "ns/iter",
            "extra": "iterations: 224050\ncpu: 3120.6324481142283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 15721.956783198259,
            "unit": "ns/iter",
            "extra": "iterations: 44566\ncpu: 15721.794641654878 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 12640.362473772877,
            "unit": "ns/iter",
            "extra": "iterations: 55284\ncpu: 12640.064032993114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 12339.072401789026,
            "unit": "ns/iter",
            "extra": "iterations: 56587\ncpu: 12338.913531376633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 12908.691369848972,
            "unit": "ns/iter",
            "extra": "iterations: 54298\ncpu: 12908.75170356163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 27356.23707886937,
            "unit": "ns/iter",
            "extra": "iterations: 25675\ncpu: 27356.17916260985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 99244.08153171056,
            "unit": "ns/iter",
            "extra": "iterations: 7077\ncpu: 99241.86802317487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 84377.855707537,
            "unit": "ns/iter",
            "extra": "iterations: 8261\ncpu: 84375.2451277091 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 82658.6376044208,
            "unit": "ns/iter",
            "extra": "iterations: 8499\ncpu: 82656.90081185999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 83338.15813342413,
            "unit": "ns/iter",
            "extra": "iterations: 8379\ncpu: 83336.86597446073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 56193.75895007287,
            "unit": "ns/iter",
            "extra": "iterations: 12458\ncpu: 56193.20918285374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 84209.620457284,
            "unit": "ns/iter",
            "extra": "iterations: 8310\ncpu: 84207.89410348993 ns\nthreads: 1"
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
        "date": 1705953646786,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 696.0718269458858,
            "unit": "ns/iter",
            "extra": "iterations: 1002646\ncpu: 696.0376842873757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 10797.490286245917,
            "unit": "ns/iter",
            "extra": "iterations: 77416\ncpu: 10796.712565877855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 24640.836120400556,
            "unit": "ns/iter",
            "extra": "iterations: 34385\ncpu: 24639.912752653774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 39682.37596550199,
            "unit": "ns/iter",
            "extra": "iterations: 21103\ncpu: 39679.82277401316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 47211.92652865619,
            "unit": "ns/iter",
            "extra": "iterations: 16714\ncpu: 47210.46428144069 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 58928.79223649483,
            "unit": "ns/iter",
            "extra": "iterations: 14478\ncpu: 58927.55214808676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 58853.45829999551,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 58848.639999999985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 67808.83419406053,
            "unit": "ns/iter",
            "extra": "iterations: 12780\ncpu: 67803.95931142414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 77625.1675411285,
            "unit": "ns/iter",
            "extra": "iterations: 11245\ncpu: 77621.53846153854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 582.1704691001994,
            "unit": "ns/iter",
            "extra": "iterations: 1216414\ncpu: 582.1598567592938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 489.01264569000693,
            "unit": "ns/iter",
            "extra": "iterations: 1426573\ncpu: 488.9949550426094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 474.6061726582902,
            "unit": "ns/iter",
            "extra": "iterations: 1471716\ncpu: 474.5882357737504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 480.1924257481797,
            "unit": "ns/iter",
            "extra": "iterations: 1454005\ncpu: 480.16382337062083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 949.7110510882025,
            "unit": "ns/iter",
            "extra": "iterations: 734905\ncpu: 949.6343064749869 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 3292.1837641658617,
            "unit": "ns/iter",
            "extra": "iterations: 240542\ncpu: 3291.9968238394954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 15646.850471204154,
            "unit": "ns/iter",
            "extra": "iterations: 52525\ncpu: 15645.907663017622 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 13013.93105618886,
            "unit": "ns/iter",
            "extra": "iterations: 66721\ncpu: 13013.049864360557 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 12801.596582891909,
            "unit": "ns/iter",
            "extra": "iterations: 64499\ncpu: 12800.950402331815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 13375.943998695951,
            "unit": "ns/iter",
            "extra": "iterations: 61320\ncpu: 13375.303326810124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 44818.246108742656,
            "unit": "ns/iter",
            "extra": "iterations: 18760\ncpu: 44815.010660980784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 442114.4275436428,
            "unit": "ns/iter",
            "extra": "iterations: 1946\ncpu: 442081.5005138741 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 360253.70506914967,
            "unit": "ns/iter",
            "extra": "iterations: 2387\ncpu: 360240.1340594882 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 361031.2974657357,
            "unit": "ns/iter",
            "extra": "iterations: 2407\ncpu: 361009.2230992935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 366088.24486375967,
            "unit": "ns/iter",
            "extra": "iterations: 2385\ncpu: 366067.2536687629 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 221600.90518556704,
            "unit": "ns/iter",
            "extra": "iterations: 3934\ncpu: 221591.02694458546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 366188.5975762719,
            "unit": "ns/iter",
            "extra": "iterations: 2393\ncpu: 366164.0618470552 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 1873247.945233409,
            "unit": "ns/iter",
            "extra": "iterations: 493\ncpu: 1873097.1602434122 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 732594.6122766534,
            "unit": "ns/iter",
            "extra": "iterations: 1287\ncpu: 732535.1981351983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2545059.258241591,
            "unit": "ns/iter",
            "extra": "iterations: 364\ncpu: 2545000.549450551 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 3335.647085104757,
            "unit": "ns/iter",
            "extra": "iterations: 239494\ncpu: 3335.5620600098678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 15619.741372132268,
            "unit": "ns/iter",
            "extra": "iterations: 52852\ncpu: 15619.535684553053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 12285.167859515715,
            "unit": "ns/iter",
            "extra": "iterations: 66228\ncpu: 12284.837228966651 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 11479.936646033026,
            "unit": "ns/iter",
            "extra": "iterations: 70919\ncpu: 11479.752957599523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 12149.422987272266,
            "unit": "ns/iter",
            "extra": "iterations: 65210\ncpu: 12149.013954914819 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 44102.19336720896,
            "unit": "ns/iter",
            "extra": "iterations: 18695\ncpu: 44100.92538111812 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 489328.9106765206,
            "unit": "ns/iter",
            "extra": "iterations: 1892\ncpu: 489319.7674418598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 380077.7413717649,
            "unit": "ns/iter",
            "extra": "iterations: 2289\ncpu: 380071.07907383196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 372741.53637536644,
            "unit": "ns/iter",
            "extra": "iterations: 2323\ncpu: 372736.33232888626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 374937.27087751403,
            "unit": "ns/iter",
            "extra": "iterations: 2359\ncpu: 374927.38448495197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 221071.8159979379,
            "unit": "ns/iter",
            "extra": "iterations: 3913\ncpu: 221071.24968055106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 374079.01805673115,
            "unit": "ns/iter",
            "extra": "iterations: 2326\ncpu: 374062.4677558028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 1882053.221766047,
            "unit": "ns/iter",
            "extra": "iterations: 487\ncpu: 1881925.2566735104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 738933.9619651248,
            "unit": "ns/iter",
            "extra": "iterations: 1262\ncpu: 738906.973058635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 3652.1449022518927,
            "unit": "ns/iter",
            "extra": "iterations: 220107\ncpu: 3652.079670342145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 16962.448335822286,
            "unit": "ns/iter",
            "extra": "iterations: 48883\ncpu: 16961.97041916414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 13353.952975729393,
            "unit": "ns/iter",
            "extra": "iterations: 61968\ncpu: 13353.742254066594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 12547.788443162663,
            "unit": "ns/iter",
            "extra": "iterations: 65935\ncpu: 12547.443694547657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 13108.184348546287,
            "unit": "ns/iter",
            "extra": "iterations: 62729\ncpu: 13108.141370020245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 42392.06789804604,
            "unit": "ns/iter",
            "extra": "iterations: 19382\ncpu: 42390.16613352585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 449241.09516297857,
            "unit": "ns/iter",
            "extra": "iterations: 1902\ncpu: 449209.6740273415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 372640.143478283,
            "unit": "ns/iter",
            "extra": "iterations: 2300\ncpu: 372618.91304347996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 368008.92488265544,
            "unit": "ns/iter",
            "extra": "iterations: 2343\ncpu: 367974.34912505286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 369444.2193548355,
            "unit": "ns/iter",
            "extra": "iterations: 2325\ncpu: 369418.7096774203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 226896.35012919977,
            "unit": "ns/iter",
            "extra": "iterations: 3870\ncpu: 226889.12144702877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 367690.3306034444,
            "unit": "ns/iter",
            "extra": "iterations: 2320\ncpu: 367668.879310347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 295.49335846239376,
            "unit": "ns/iter",
            "extra": "iterations: 2369105\ncpu: 295.4766040340136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1478.0738332299736,
            "unit": "ns/iter",
            "extra": "iterations: 474258\ncpu: 1477.989195754208 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1242.4999415810137,
            "unit": "ns/iter",
            "extra": "iterations: 564886\ncpu: 1242.4830850826615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1184.6357382442452,
            "unit": "ns/iter",
            "extra": "iterations: 590902\ncpu: 1184.6333232921875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1013.7772134648008,
            "unit": "ns/iter",
            "extra": "iterations: 692681\ncpu: 1013.7187247809584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 7868.0059568387405,
            "unit": "ns/iter",
            "extra": "iterations: 89477\ncpu: 7867.5424969546075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 19115.13017686896,
            "unit": "ns/iter",
            "extra": "iterations: 36581\ncpu: 19113.47967524135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4532.078967157948,
            "unit": "ns/iter",
            "extra": "iterations: 154254\ncpu: 4531.927859245121 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4483.298388594754,
            "unit": "ns/iter",
            "extra": "iterations: 156075\ncpu: 4483.234342463614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4547.783716581699,
            "unit": "ns/iter",
            "extra": "iterations: 154034\ncpu: 4547.694015606986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 9333.299136083308,
            "unit": "ns/iter",
            "extra": "iterations: 75123\ncpu: 9333.148303449068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 8512.201063727185,
            "unit": "ns/iter",
            "extra": "iterations: 82352\ncpu: 8511.906207499414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3243.491534991144,
            "unit": "ns/iter",
            "extra": "iterations: 216125\ncpu: 3243.2620011567656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 16296.898814651211,
            "unit": "ns/iter",
            "extra": "iterations: 42941\ncpu: 16295.72902354398 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 12976.895192182748,
            "unit": "ns/iter",
            "extra": "iterations: 53517\ncpu: 12976.12721191392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 12839.317124580959,
            "unit": "ns/iter",
            "extra": "iterations: 54559\ncpu: 12838.600414230586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 13260.121558502056,
            "unit": "ns/iter",
            "extra": "iterations: 52666\ncpu: 13259.298218964772 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 28724.20506090194,
            "unit": "ns/iter",
            "extra": "iterations: 24383\ncpu: 28722.43776401599 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 100684.13506159691,
            "unit": "ns/iter",
            "extra": "iterations: 6982\ncpu: 100681.33772558093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 87108.96948647015,
            "unit": "ns/iter",
            "extra": "iterations: 8062\ncpu: 87103.58471843174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 85566.6000971176,
            "unit": "ns/iter",
            "extra": "iterations: 8237\ncpu: 85563.45756950357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 86284.27966835261,
            "unit": "ns/iter",
            "extra": "iterations: 8081\ncpu: 86279.29711669273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 55832.27230534719,
            "unit": "ns/iter",
            "extra": "iterations: 12497\ncpu: 55830.83940145593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 85534.61732456894,
            "unit": "ns/iter",
            "extra": "iterations: 8208\ncpu: 85533.21150097539 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3061.3917139126447,
            "unit": "ns/iter",
            "extra": "iterations: 228238\ncpu: 3061.2492223030185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 15525.193734649913,
            "unit": "ns/iter",
            "extra": "iterations: 45201\ncpu: 15524.915377978667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 12472.681123724797,
            "unit": "ns/iter",
            "extra": "iterations: 56028\ncpu: 12472.235310915918 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 12250.31735111875,
            "unit": "ns/iter",
            "extra": "iterations: 57126\ncpu: 12249.852956622199 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 12735.547418028678,
            "unit": "ns/iter",
            "extra": "iterations: 54958\ncpu: 12735.37246624687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 27713.731929742207,
            "unit": "ns/iter",
            "extra": "iterations: 25221\ncpu: 27713.37377582182 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 97771.88868690864,
            "unit": "ns/iter",
            "extra": "iterations: 7151\ncpu: 97771.68228219888 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 83655.81478830513,
            "unit": "ns/iter",
            "extra": "iterations: 8385\ncpu: 83652.35539654149 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 82543.7955451323,
            "unit": "ns/iter",
            "extra": "iterations: 8530\ncpu: 82541.39507620208 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 83104.04552459376,
            "unit": "ns/iter",
            "extra": "iterations: 8435\ncpu: 83102.868998221 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 55784.58255129462,
            "unit": "ns/iter",
            "extra": "iterations: 12574\ncpu: 55783.744234133774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 83569.510528837,
            "unit": "ns/iter",
            "extra": "iterations: 8358\ncpu: 83569.26298157469 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}