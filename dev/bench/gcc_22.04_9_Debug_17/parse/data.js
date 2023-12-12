window.BENCHMARK_DATA = {
  "lastUpdate": 1702382259047,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Parse gcc-9 22.04 Debug c++-17": [
      {
        "commit": {
          "author": {
            "email": "grem_snoort@protonmail.com",
            "name": "GremSnoort",
            "username": "GremSnoort"
          },
          "committer": {
            "email": "grem_snoort@protonmail.com",
            "name": "GremSnoort",
            "username": "GremSnoort"
          },
          "distinct": true,
          "id": "d50bb7d9db5207dc297814766d8c83b14fcc339b",
          "message": "More tests; More BMs; Separate BMs",
          "timestamp": "2023-12-12T14:29:05+03:00",
          "tree_id": "f44cff78a7d652bd003cb40812243c64e409e254",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/d50bb7d9db5207dc297814766d8c83b14fcc339b"
        },
        "date": 1702381108202,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 6845.231104056616,
            "unit": "ns/iter",
            "extra": "iterations: 102694\ncpu: 6844.719263053345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 57982.94174826032,
            "unit": "ns/iter",
            "extra": "iterations: 14094\ncpu: 57982.91471548176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 91620.34795602679,
            "unit": "ns/iter",
            "extra": "iterations: 9369\ncpu: 91614.90020279647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 133122.9759913214,
            "unit": "ns/iter",
            "extra": "iterations: 6456\ncpu: 133119.60966542747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 175453.15927949792,
            "unit": "ns/iter",
            "extra": "iterations: 4941\ncpu: 175447.23740133565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 218521.6087829434,
            "unit": "ns/iter",
            "extra": "iterations: 3985\ncpu: 218518.74529485573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 258739.57803640835,
            "unit": "ns/iter",
            "extra": "iterations: 3351\ncpu: 258726.4995523725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 299610.5847428464,
            "unit": "ns/iter",
            "extra": "iterations: 2897\ncpu: 299594.4080082846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 341763.61137254245,
            "unit": "ns/iter",
            "extra": "iterations: 2550\ncpu: 341752.47058823553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 5739.704572793931,
            "unit": "ns/iter",
            "extra": "iterations: 121370\ncpu: 5739.444673313015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 4639.329624579644,
            "unit": "ns/iter",
            "extra": "iterations: 151084\ncpu: 4639.159672764818 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 4622.432356379809,
            "unit": "ns/iter",
            "extra": "iterations: 151389\ncpu: 4622.2083506727795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 4674.022836602526,
            "unit": "ns/iter",
            "extra": "iterations: 149672\ncpu: 4674.016516115236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 7056.727383493718,
            "unit": "ns/iter",
            "extra": "iterations: 99308\ncpu: 7056.23514721875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 26725.817570007843,
            "unit": "ns/iter",
            "extra": "iterations: 30461\ncpu: 26724.946653097362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 129192.20021107282,
            "unit": "ns/iter",
            "extra": "iterations: 6633\ncpu: 129184.56203829312 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 100923.49676051462,
            "unit": "ns/iter",
            "extra": "iterations: 8489\ncpu: 100922.040287431 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 100543.87244778192,
            "unit": "ns/iter",
            "extra": "iterations: 8522\ncpu: 100538.04271297829 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 96393.18840906078,
            "unit": "ns/iter",
            "extra": "iterations: 8869\ncpu: 96392.29901905515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 207197.59921095544,
            "unit": "ns/iter",
            "extra": "iterations: 4309\ncpu: 207188.39637967083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1637740.5852373352,
            "unit": "ns/iter",
            "extra": "iterations: 569\ncpu: 1637718.1019332123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1290468.217753067,
            "unit": "ns/iter",
            "extra": "iterations: 721\ncpu: 1290416.7822468763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1290234.2420027908,
            "unit": "ns/iter",
            "extra": "iterations: 719\ncpu: 1290222.392211407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1275738.6021947481,
            "unit": "ns/iter",
            "extra": "iterations: 729\ncpu: 1275680.658436215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 705055.8138825345,
            "unit": "ns/iter",
            "extra": "iterations: 1311\ncpu: 705051.1060259345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1246395.0040214744,
            "unit": "ns/iter",
            "extra": "iterations: 746\ncpu: 1246352.010723859 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 33783.30879712635,
            "unit": "ns/iter",
            "extra": "iterations: 24508\ncpu: 33782.56487677488 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 158048.37600880282,
            "unit": "ns/iter",
            "extra": "iterations: 5452\ncpu: 158041.59941305916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 123621.43506959033,
            "unit": "ns/iter",
            "extra": "iterations: 6969\ncpu: 123618.49619744581 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 124146.09841498276,
            "unit": "ns/iter",
            "extra": "iterations: 6940\ncpu: 124140.53314121036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 120891.6317124785,
            "unit": "ns/iter",
            "extra": "iterations: 7095\ncpu: 120889.69696969703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 219067.8108723233,
            "unit": "ns/iter",
            "extra": "iterations: 3955\ncpu: 219060.53097345162 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1661814.950000056,
            "unit": "ns/iter",
            "extra": "iterations: 560\ncpu: 1661780.357142855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1310414.757746454,
            "unit": "ns/iter",
            "extra": "iterations: 710\ncpu: 1310366.9014084493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1316850.8879431933,
            "unit": "ns/iter",
            "extra": "iterations: 705\ncpu: 1316815.7446808575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1317930.475106628,
            "unit": "ns/iter",
            "extra": "iterations: 703\ncpu: 1317888.9046941674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 722691.1992217983,
            "unit": "ns/iter",
            "extra": "iterations: 1285\ncpu: 722675.2529182902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1277652.290983575,
            "unit": "ns/iter",
            "extra": "iterations: 732\ncpu: 1277563.52459016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5961434.134615382,
            "unit": "ns/iter",
            "extra": "iterations: 156\ncpu: 5961253.20512824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 2668446.0775863277,
            "unit": "ns/iter",
            "extra": "iterations: 348\ncpu: 2668410.6321839034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 25563.791318708518,
            "unit": "ns/iter",
            "extra": "iterations: 32092\ncpu: 25563.062445469328 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 126763.80477383631,
            "unit": "ns/iter",
            "extra": "iterations: 6787\ncpu: 126760.51274495372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 97101.81772841224,
            "unit": "ns/iter",
            "extra": "iterations: 8822\ncpu: 97097.64225799177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 97128.87344068926,
            "unit": "ns/iter",
            "extra": "iterations: 8818\ncpu: 97126.42322522122 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 92233.07192002142,
            "unit": "ns/iter",
            "extra": "iterations: 9302\ncpu: 92229.80004300122 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 190460.5607945845,
            "unit": "ns/iter",
            "extra": "iterations: 4581\ncpu: 190455.92665356927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1639361.7732864656,
            "unit": "ns/iter",
            "extra": "iterations: 569\ncpu: 1639273.2864674875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1286460.2441379311,
            "unit": "ns/iter",
            "extra": "iterations: 725\ncpu: 1286428.0000000028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1291059.5567866915,
            "unit": "ns/iter",
            "extra": "iterations: 722\ncpu: 1290999.307479217 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1275452.6602739661,
            "unit": "ns/iter",
            "extra": "iterations: 730\ncpu: 1275422.6027397246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 695307.4741572856,
            "unit": "ns/iter",
            "extra": "iterations: 1335\ncpu: 695279.4007490597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1241736.9026666165,
            "unit": "ns/iter",
            "extra": "iterations: 750\ncpu: 1241706.000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2633.4023547739703,
            "unit": "ns/iter",
            "extra": "iterations: 265758\ncpu: 2633.3122615311836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 16686.34941485514,
            "unit": "ns/iter",
            "extra": "iterations: 41870\ncpu: 16685.853833293564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 13096.503828626259,
            "unit": "ns/iter",
            "extra": "iterations: 53544\ncpu: 13095.85387718515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 13209.946441631697,
            "unit": "ns/iter",
            "extra": "iterations: 53325\ncpu: 13209.537740271871 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 9627.499030061335,
            "unit": "ns/iter",
            "extra": "iterations: 72685\ncpu: 9627.026208984014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 64881.916350867374,
            "unit": "ns/iter",
            "extra": "iterations: 10819\ncpu: 64879.794805434896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 112182.04194685392,
            "unit": "ns/iter",
            "extra": "iterations: 6246\ncpu: 112182.0845341019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 27542.428678117536,
            "unit": "ns/iter",
            "extra": "iterations: 25441\ncpu: 27541.64537557494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 27729.23867141236,
            "unit": "ns/iter",
            "extra": "iterations: 25290\ncpu: 27729.23289837878 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 27396.80274422412,
            "unit": "ns/iter",
            "extra": "iterations: 25581\ncpu: 27395.531840037398 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 54967.517206079225,
            "unit": "ns/iter",
            "extra": "iterations: 12699\ncpu: 54965.85557917935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 51624.79465074834,
            "unit": "ns/iter",
            "extra": "iterations: 13572\ncpu: 51622.111700559646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 20612.6492570372,
            "unit": "ns/iter",
            "extra": "iterations: 33851\ncpu: 20611.81944403397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 104122.00816508815,
            "unit": "ns/iter",
            "extra": "iterations: 6736\ncpu: 104121.89726840911 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 84787.76983551038,
            "unit": "ns/iter",
            "extra": "iterations: 8268\ncpu: 84784.39767779458 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 83831.41629718615,
            "unit": "ns/iter",
            "extra": "iterations: 8345\ncpu: 83825.77591372078 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 82335.78515026953,
            "unit": "ns/iter",
            "extra": "iterations: 8485\ncpu: 82330.48909840848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 124830.75285510822,
            "unit": "ns/iter",
            "extra": "iterations: 5604\ncpu: 124826.96288365567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 492551.44194229954,
            "unit": "ns/iter",
            "extra": "iterations: 1421\ncpu: 492521.6045038698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 401453.33026996587,
            "unit": "ns/iter",
            "extra": "iterations: 1741\ncpu: 401441.01091326715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 404833.8359329833,
            "unit": "ns/iter",
            "extra": "iterations: 1731\ncpu: 404821.60600808635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 398465.26039888145,
            "unit": "ns/iter",
            "extra": "iterations: 1755\ncpu: 398464.843304846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 251970.86381602476,
            "unit": "ns/iter",
            "extra": "iterations: 2783\ncpu: 251962.98957959394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 394945.49237720197,
            "unit": "ns/iter",
            "extra": "iterations: 1771\ncpu: 394933.4839073983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 21252.248221128713,
            "unit": "ns/iter",
            "extra": "iterations: 32886\ncpu: 21252.009973849214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 105465.47970199557,
            "unit": "ns/iter",
            "extra": "iterations: 6577\ncpu: 105464.01094724149 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 86072.74400885157,
            "unit": "ns/iter",
            "extra": "iterations: 8137\ncpu: 86065.33120314627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 85803.66838361415,
            "unit": "ns/iter",
            "extra": "iterations: 8154\ncpu: 85801.00564140276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 85289.91854927014,
            "unit": "ns/iter",
            "extra": "iterations: 8189\ncpu: 85286.31090487301 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 124104.80233587045,
            "unit": "ns/iter",
            "extra": "iterations: 5651\ncpu: 124099.71686427297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 489079.9783216588,
            "unit": "ns/iter",
            "extra": "iterations: 1430\ncpu: 489051.04895104823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 400438.2994836625,
            "unit": "ns/iter",
            "extra": "iterations: 1743\ncpu: 400420.7114170984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 401844.4830751462,
            "unit": "ns/iter",
            "extra": "iterations: 1743\ncpu: 401819.8508318999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 400216.66666666785,
            "unit": "ns/iter",
            "extra": "iterations: 1749\ncpu: 400216.4665523124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 251560.80641552137,
            "unit": "ns/iter",
            "extra": "iterations: 2681\ncpu: 251549.3472584884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 393716.98030389077,
            "unit": "ns/iter",
            "extra": "iterations: 1777\ncpu: 393716.9386606644 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "grem_snoort@protonmail.com",
            "name": "GremSnoort",
            "username": "GremSnoort"
          },
          "committer": {
            "email": "grem_snoort@protonmail.com",
            "name": "GremSnoort",
            "username": "GremSnoort"
          },
          "distinct": true,
          "id": "d50bb7d9db5207dc297814766d8c83b14fcc339b",
          "message": "More tests; More BMs; Separate BMs",
          "timestamp": "2023-12-12T14:29:05+03:00",
          "tree_id": "f44cff78a7d652bd003cb40812243c64e409e254",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/d50bb7d9db5207dc297814766d8c83b14fcc339b"
        },
        "date": 1702381108202,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 6845.231104056616,
            "unit": "ns/iter",
            "extra": "iterations: 102694\ncpu: 6844.719263053345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 57982.94174826032,
            "unit": "ns/iter",
            "extra": "iterations: 14094\ncpu: 57982.91471548176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 91620.34795602679,
            "unit": "ns/iter",
            "extra": "iterations: 9369\ncpu: 91614.90020279647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 133122.9759913214,
            "unit": "ns/iter",
            "extra": "iterations: 6456\ncpu: 133119.60966542747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 175453.15927949792,
            "unit": "ns/iter",
            "extra": "iterations: 4941\ncpu: 175447.23740133565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 218521.6087829434,
            "unit": "ns/iter",
            "extra": "iterations: 3985\ncpu: 218518.74529485573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 258739.57803640835,
            "unit": "ns/iter",
            "extra": "iterations: 3351\ncpu: 258726.4995523725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 299610.5847428464,
            "unit": "ns/iter",
            "extra": "iterations: 2897\ncpu: 299594.4080082846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 341763.61137254245,
            "unit": "ns/iter",
            "extra": "iterations: 2550\ncpu: 341752.47058823553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 5739.704572793931,
            "unit": "ns/iter",
            "extra": "iterations: 121370\ncpu: 5739.444673313015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 4639.329624579644,
            "unit": "ns/iter",
            "extra": "iterations: 151084\ncpu: 4639.159672764818 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 4622.432356379809,
            "unit": "ns/iter",
            "extra": "iterations: 151389\ncpu: 4622.2083506727795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 4674.022836602526,
            "unit": "ns/iter",
            "extra": "iterations: 149672\ncpu: 4674.016516115236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 7056.727383493718,
            "unit": "ns/iter",
            "extra": "iterations: 99308\ncpu: 7056.23514721875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 26725.817570007843,
            "unit": "ns/iter",
            "extra": "iterations: 30461\ncpu: 26724.946653097362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 129192.20021107282,
            "unit": "ns/iter",
            "extra": "iterations: 6633\ncpu: 129184.56203829312 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 100923.49676051462,
            "unit": "ns/iter",
            "extra": "iterations: 8489\ncpu: 100922.040287431 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 100543.87244778192,
            "unit": "ns/iter",
            "extra": "iterations: 8522\ncpu: 100538.04271297829 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 96393.18840906078,
            "unit": "ns/iter",
            "extra": "iterations: 8869\ncpu: 96392.29901905515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 207197.59921095544,
            "unit": "ns/iter",
            "extra": "iterations: 4309\ncpu: 207188.39637967083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1637740.5852373352,
            "unit": "ns/iter",
            "extra": "iterations: 569\ncpu: 1637718.1019332123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1290468.217753067,
            "unit": "ns/iter",
            "extra": "iterations: 721\ncpu: 1290416.7822468763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1290234.2420027908,
            "unit": "ns/iter",
            "extra": "iterations: 719\ncpu: 1290222.392211407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1275738.6021947481,
            "unit": "ns/iter",
            "extra": "iterations: 729\ncpu: 1275680.658436215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 705055.8138825345,
            "unit": "ns/iter",
            "extra": "iterations: 1311\ncpu: 705051.1060259345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1246395.0040214744,
            "unit": "ns/iter",
            "extra": "iterations: 746\ncpu: 1246352.010723859 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 33783.30879712635,
            "unit": "ns/iter",
            "extra": "iterations: 24508\ncpu: 33782.56487677488 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 158048.37600880282,
            "unit": "ns/iter",
            "extra": "iterations: 5452\ncpu: 158041.59941305916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 123621.43506959033,
            "unit": "ns/iter",
            "extra": "iterations: 6969\ncpu: 123618.49619744581 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 124146.09841498276,
            "unit": "ns/iter",
            "extra": "iterations: 6940\ncpu: 124140.53314121036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 120891.6317124785,
            "unit": "ns/iter",
            "extra": "iterations: 7095\ncpu: 120889.69696969703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 219067.8108723233,
            "unit": "ns/iter",
            "extra": "iterations: 3955\ncpu: 219060.53097345162 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1661814.950000056,
            "unit": "ns/iter",
            "extra": "iterations: 560\ncpu: 1661780.357142855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1310414.757746454,
            "unit": "ns/iter",
            "extra": "iterations: 710\ncpu: 1310366.9014084493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1316850.8879431933,
            "unit": "ns/iter",
            "extra": "iterations: 705\ncpu: 1316815.7446808575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1317930.475106628,
            "unit": "ns/iter",
            "extra": "iterations: 703\ncpu: 1317888.9046941674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 722691.1992217983,
            "unit": "ns/iter",
            "extra": "iterations: 1285\ncpu: 722675.2529182902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1277652.290983575,
            "unit": "ns/iter",
            "extra": "iterations: 732\ncpu: 1277563.52459016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5961434.134615382,
            "unit": "ns/iter",
            "extra": "iterations: 156\ncpu: 5961253.20512824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 2668446.0775863277,
            "unit": "ns/iter",
            "extra": "iterations: 348\ncpu: 2668410.6321839034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 25563.791318708518,
            "unit": "ns/iter",
            "extra": "iterations: 32092\ncpu: 25563.062445469328 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 126763.80477383631,
            "unit": "ns/iter",
            "extra": "iterations: 6787\ncpu: 126760.51274495372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 97101.81772841224,
            "unit": "ns/iter",
            "extra": "iterations: 8822\ncpu: 97097.64225799177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 97128.87344068926,
            "unit": "ns/iter",
            "extra": "iterations: 8818\ncpu: 97126.42322522122 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 92233.07192002142,
            "unit": "ns/iter",
            "extra": "iterations: 9302\ncpu: 92229.80004300122 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 190460.5607945845,
            "unit": "ns/iter",
            "extra": "iterations: 4581\ncpu: 190455.92665356927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1639361.7732864656,
            "unit": "ns/iter",
            "extra": "iterations: 569\ncpu: 1639273.2864674875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1286460.2441379311,
            "unit": "ns/iter",
            "extra": "iterations: 725\ncpu: 1286428.0000000028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1291059.5567866915,
            "unit": "ns/iter",
            "extra": "iterations: 722\ncpu: 1290999.307479217 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1275452.6602739661,
            "unit": "ns/iter",
            "extra": "iterations: 730\ncpu: 1275422.6027397246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 695307.4741572856,
            "unit": "ns/iter",
            "extra": "iterations: 1335\ncpu: 695279.4007490597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1241736.9026666165,
            "unit": "ns/iter",
            "extra": "iterations: 750\ncpu: 1241706.000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2633.4023547739703,
            "unit": "ns/iter",
            "extra": "iterations: 265758\ncpu: 2633.3122615311836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 16686.34941485514,
            "unit": "ns/iter",
            "extra": "iterations: 41870\ncpu: 16685.853833293564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 13096.503828626259,
            "unit": "ns/iter",
            "extra": "iterations: 53544\ncpu: 13095.85387718515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 13209.946441631697,
            "unit": "ns/iter",
            "extra": "iterations: 53325\ncpu: 13209.537740271871 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 9627.499030061335,
            "unit": "ns/iter",
            "extra": "iterations: 72685\ncpu: 9627.026208984014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 64881.916350867374,
            "unit": "ns/iter",
            "extra": "iterations: 10819\ncpu: 64879.794805434896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 112182.04194685392,
            "unit": "ns/iter",
            "extra": "iterations: 6246\ncpu: 112182.0845341019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 27542.428678117536,
            "unit": "ns/iter",
            "extra": "iterations: 25441\ncpu: 27541.64537557494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 27729.23867141236,
            "unit": "ns/iter",
            "extra": "iterations: 25290\ncpu: 27729.23289837878 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 27396.80274422412,
            "unit": "ns/iter",
            "extra": "iterations: 25581\ncpu: 27395.531840037398 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 54967.517206079225,
            "unit": "ns/iter",
            "extra": "iterations: 12699\ncpu: 54965.85557917935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 51624.79465074834,
            "unit": "ns/iter",
            "extra": "iterations: 13572\ncpu: 51622.111700559646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 20612.6492570372,
            "unit": "ns/iter",
            "extra": "iterations: 33851\ncpu: 20611.81944403397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 104122.00816508815,
            "unit": "ns/iter",
            "extra": "iterations: 6736\ncpu: 104121.89726840911 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 84787.76983551038,
            "unit": "ns/iter",
            "extra": "iterations: 8268\ncpu: 84784.39767779458 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 83831.41629718615,
            "unit": "ns/iter",
            "extra": "iterations: 8345\ncpu: 83825.77591372078 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 82335.78515026953,
            "unit": "ns/iter",
            "extra": "iterations: 8485\ncpu: 82330.48909840848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 124830.75285510822,
            "unit": "ns/iter",
            "extra": "iterations: 5604\ncpu: 124826.96288365567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 492551.44194229954,
            "unit": "ns/iter",
            "extra": "iterations: 1421\ncpu: 492521.6045038698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 401453.33026996587,
            "unit": "ns/iter",
            "extra": "iterations: 1741\ncpu: 401441.01091326715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 404833.8359329833,
            "unit": "ns/iter",
            "extra": "iterations: 1731\ncpu: 404821.60600808635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 398465.26039888145,
            "unit": "ns/iter",
            "extra": "iterations: 1755\ncpu: 398464.843304846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 251970.86381602476,
            "unit": "ns/iter",
            "extra": "iterations: 2783\ncpu: 251962.98957959394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 394945.49237720197,
            "unit": "ns/iter",
            "extra": "iterations: 1771\ncpu: 394933.4839073983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 21252.248221128713,
            "unit": "ns/iter",
            "extra": "iterations: 32886\ncpu: 21252.009973849214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 105465.47970199557,
            "unit": "ns/iter",
            "extra": "iterations: 6577\ncpu: 105464.01094724149 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 86072.74400885157,
            "unit": "ns/iter",
            "extra": "iterations: 8137\ncpu: 86065.33120314627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 85803.66838361415,
            "unit": "ns/iter",
            "extra": "iterations: 8154\ncpu: 85801.00564140276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 85289.91854927014,
            "unit": "ns/iter",
            "extra": "iterations: 8189\ncpu: 85286.31090487301 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 124104.80233587045,
            "unit": "ns/iter",
            "extra": "iterations: 5651\ncpu: 124099.71686427297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 489079.9783216588,
            "unit": "ns/iter",
            "extra": "iterations: 1430\ncpu: 489051.04895104823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 400438.2994836625,
            "unit": "ns/iter",
            "extra": "iterations: 1743\ncpu: 400420.7114170984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 401844.4830751462,
            "unit": "ns/iter",
            "extra": "iterations: 1743\ncpu: 401819.8508318999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 400216.66666666785,
            "unit": "ns/iter",
            "extra": "iterations: 1749\ncpu: 400216.4665523124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 251560.80641552137,
            "unit": "ns/iter",
            "extra": "iterations: 2681\ncpu: 251549.3472584884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 393716.98030389077,
            "unit": "ns/iter",
            "extra": "iterations: 1777\ncpu: 393716.9386606644 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "grem_snoort@protonmail.com",
            "name": "GremSnoort",
            "username": "GremSnoort"
          },
          "committer": {
            "email": "grem_snoort@protonmail.com",
            "name": "GremSnoort",
            "username": "GremSnoort"
          },
          "distinct": true,
          "id": "7f7a954178065768f16bab445a1789e66eddbd11",
          "message": "Add Clang Builds",
          "timestamp": "2023-12-12T14:44:55+03:00",
          "tree_id": "5a4deefbb08f6ba5a30c260d4700f1c6aeccac34",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/7f7a954178065768f16bab445a1789e66eddbd11"
        },
        "date": 1702382258715,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 6742.276570570841,
            "unit": "ns/iter",
            "extra": "iterations: 103959\ncpu: 6741.745303436932 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 57560.74140234736,
            "unit": "ns/iter",
            "extra": "iterations: 14219\ncpu: 57558.12645052393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 90925.06809770546,
            "unit": "ns/iter",
            "extra": "iterations: 9457\ncpu: 90917.91265729092 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 132200.92470479966,
            "unit": "ns/iter",
            "extra": "iterations: 6521\ncpu: 132194.74007054124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 174367.47316583822,
            "unit": "ns/iter",
            "extra": "iterations: 4975\ncpu: 174355.81909547752 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 216003.0862969452,
            "unit": "ns/iter",
            "extra": "iterations: 4021\ncpu: 215992.61377766725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 257183.0904776046,
            "unit": "ns/iter",
            "extra": "iterations: 3371\ncpu: 257162.53337288642 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 299665.45067033987,
            "unit": "ns/iter",
            "extra": "iterations: 2909\ncpu: 299649.12341010664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 340471.259780925,
            "unit": "ns/iter",
            "extra": "iterations: 2556\ncpu: 340451.6431924886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 5744.4353304782235,
            "unit": "ns/iter",
            "extra": "iterations: 121657\ncpu: 5744.136383438683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 4676.687948326425,
            "unit": "ns/iter",
            "extra": "iterations: 151257\ncpu: 4676.592157718329 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 4675.674354823277,
            "unit": "ns/iter",
            "extra": "iterations: 149494\ncpu: 4675.382958513378 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 4702.061738299475,
            "unit": "ns/iter",
            "extra": "iterations: 149583\ncpu: 4701.789641871063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 7054.425729657293,
            "unit": "ns/iter",
            "extra": "iterations: 98882\ncpu: 7053.990615076563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 26825.042612701785,
            "unit": "ns/iter",
            "extra": "iterations: 30390\ncpu: 26823.629483382676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 127963.75122676844,
            "unit": "ns/iter",
            "extra": "iterations: 6725\ncpu: 127954.84014869906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 99989.92000000247,
            "unit": "ns/iter",
            "extra": "iterations: 8550\ncpu: 99985.55555555552 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 99231.46956521452,
            "unit": "ns/iter",
            "extra": "iterations: 8625\ncpu: 99229.27536231896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 96289.63348214472,
            "unit": "ns/iter",
            "extra": "iterations: 8960\ncpu: 96240.15625000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 206007.55806973888,
            "unit": "ns/iter",
            "extra": "iterations: 4331\ncpu: 206003.1401523901 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1652243.7309734703,
            "unit": "ns/iter",
            "extra": "iterations: 565\ncpu: 1652109.3805309746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1293118.7152777254,
            "unit": "ns/iter",
            "extra": "iterations: 720\ncpu: 1293038.1944444452 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1295002.4353268647,
            "unit": "ns/iter",
            "extra": "iterations: 719\ncpu: 1294899.8609179405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1275900.8079561135,
            "unit": "ns/iter",
            "extra": "iterations: 729\ncpu: 1275794.7873799768 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 701618.3184568769,
            "unit": "ns/iter",
            "extra": "iterations: 1322\ncpu: 701559.9848714058 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1245054.6532797862,
            "unit": "ns/iter",
            "extra": "iterations: 747\ncpu: 1244968.406961181 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 33513.147557002805,
            "unit": "ns/iter",
            "extra": "iterations: 24560\ncpu: 33510.60260586308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 156497.14114441563,
            "unit": "ns/iter",
            "extra": "iterations: 5505\ncpu: 156486.53950953681 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 124064.78397462965,
            "unit": "ns/iter",
            "extra": "iterations: 6939\ncpu: 124055.06557140792 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 124572.59019948209,
            "unit": "ns/iter",
            "extra": "iterations: 6918\ncpu: 124564.26712922801 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 119795.94925415154,
            "unit": "ns/iter",
            "extra": "iterations: 7173\ncpu: 119787.36930154738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 219123.28347254262,
            "unit": "ns/iter",
            "extra": "iterations: 3951\ncpu: 219105.41635029233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1668538.0125223936,
            "unit": "ns/iter",
            "extra": "iterations: 559\ncpu: 1668415.2057245034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1371314.4299858282,
            "unit": "ns/iter",
            "extra": "iterations: 707\ncpu: 1371165.6294200872 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1323374.2824536161,
            "unit": "ns/iter",
            "extra": "iterations: 701\ncpu: 1323306.990014271 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1306937.3563380267,
            "unit": "ns/iter",
            "extra": "iterations: 710\ncpu: 1306854.3661971854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 726274.4589523339,
            "unit": "ns/iter",
            "extra": "iterations: 1279\ncpu: 726239.5621579397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1276433.5955984076,
            "unit": "ns/iter",
            "extra": "iterations: 727\ncpu: 1276340.990371389 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5937856.808917175,
            "unit": "ns/iter",
            "extra": "iterations: 157\ncpu: 5937689.171974501 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 2652761.5742856725,
            "unit": "ns/iter",
            "extra": "iterations: 350\ncpu: 2652622.285714301 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 26297.60944028082,
            "unit": "ns/iter",
            "extra": "iterations: 31355\ncpu: 26295.99744857283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 124693.52005792756,
            "unit": "ns/iter",
            "extra": "iterations: 6905\ncpu: 124687.41491672666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 96352.10267355954,
            "unit": "ns/iter",
            "extra": "iterations: 8902\ncpu: 96345.34935969424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 96200.64130678344,
            "unit": "ns/iter",
            "extra": "iterations: 8938\ncpu: 96196.49809800854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 93683.49607843578,
            "unit": "ns/iter",
            "extra": "iterations: 9180\ncpu: 93677.04793028276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 190457.43417610886,
            "unit": "ns/iter",
            "extra": "iterations: 4588\ncpu: 190446.83958151733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1651699.774822666,
            "unit": "ns/iter",
            "extra": "iterations: 564\ncpu: 1651587.4113475208 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1293696.5886426594,
            "unit": "ns/iter",
            "extra": "iterations: 722\ncpu: 1293638.5041551264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1293522.7548476504,
            "unit": "ns/iter",
            "extra": "iterations: 722\ncpu: 1293426.8698060927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1271982.0915300502,
            "unit": "ns/iter",
            "extra": "iterations: 732\ncpu: 1271929.644808743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 697075.7307404573,
            "unit": "ns/iter",
            "extra": "iterations: 1337\ncpu: 697018.3994016466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1251144.025571993,
            "unit": "ns/iter",
            "extra": "iterations: 743\ncpu: 1251084.9259757728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2663.666348181625,
            "unit": "ns/iter",
            "extra": "iterations: 262702\ncpu: 2663.4357561038846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 16631.48251381702,
            "unit": "ns/iter",
            "extra": "iterations: 41976\ncpu: 16630.681818181693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 14060.701138140173,
            "unit": "ns/iter",
            "extra": "iterations: 49906\ncpu: 14059.810443633918 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 13938.945555997705,
            "unit": "ns/iter",
            "extra": "iterations: 50180\ncpu: 13938.810282981267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 10247.29948332136,
            "unit": "ns/iter",
            "extra": "iterations: 68321\ncpu: 10247.184613808286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 65269.4274042066,
            "unit": "ns/iter",
            "extra": "iterations: 10648\ncpu: 65268.134861006816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 112956.31027253013,
            "unit": "ns/iter",
            "extra": "iterations: 6201\ncpu: 112955.23302693057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 27287.618524456822,
            "unit": "ns/iter",
            "extra": "iterations: 25577\ncpu: 27287.336278687875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 27277.98529239553,
            "unit": "ns/iter",
            "extra": "iterations: 25633\ncpu: 27277.73963250486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 27243.571945243584,
            "unit": "ns/iter",
            "extra": "iterations: 25714\ncpu: 27242.36213735718 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 54319.55331725918,
            "unit": "ns/iter",
            "extra": "iterations: 12857\ncpu: 54318.884654274254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 51390.88388278275,
            "unit": "ns/iter",
            "extra": "iterations: 13650\ncpu: 51390.21978021966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 20783.78537770884,
            "unit": "ns/iter",
            "extra": "iterations: 33743\ncpu: 20783.519544794195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 102292.44274028647,
            "unit": "ns/iter",
            "extra": "iterations: 6846\ncpu: 102290.92900964066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 84445.95743398435,
            "unit": "ns/iter",
            "extra": "iterations: 8293\ncpu: 84443.96478958122 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 84917.15890112262,
            "unit": "ns/iter",
            "extra": "iterations: 8263\ncpu: 84916.19266610162 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 83022.30739161088,
            "unit": "ns/iter",
            "extra": "iterations: 8442\ncpu: 83021.44041696309 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 127672.65811499262,
            "unit": "ns/iter",
            "extra": "iterations: 5496\ncpu: 127671.2154294046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 496000.877565441,
            "unit": "ns/iter",
            "extra": "iterations: 1413\ncpu: 495995.11677281745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 403620.03626946005,
            "unit": "ns/iter",
            "extra": "iterations: 1737\ncpu: 403615.9470351226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 409411.24329054565,
            "unit": "ns/iter",
            "extra": "iterations: 1714\ncpu: 409385.8226370998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 403397.93623190967,
            "unit": "ns/iter",
            "extra": "iterations: 1725\ncpu: 403393.2173913103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 253333.0885020087,
            "unit": "ns/iter",
            "extra": "iterations: 2757\ncpu: 253327.85636561704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 397223.8982376386,
            "unit": "ns/iter",
            "extra": "iterations: 1759\ncpu: 397219.386014781 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 21055.33193846512,
            "unit": "ns/iter",
            "extra": "iterations: 33217\ncpu: 21054.670801095654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 103793.04709018249,
            "unit": "ns/iter",
            "extra": "iterations: 6753\ncpu: 103789.72308603526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 85213.22804670519,
            "unit": "ns/iter",
            "extra": "iterations: 8222\ncpu: 85212.29627827926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 86657.16058572696,
            "unit": "ns/iter",
            "extra": "iterations: 8195\ncpu: 86656.63209273828 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 84126.96983897797,
            "unit": "ns/iter",
            "extra": "iterations: 8322\ncpu: 84126.01538091843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 123393.90153249935,
            "unit": "ns/iter",
            "extra": "iterations: 5677\ncpu: 123392.51365157728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 490451.1122807283,
            "unit": "ns/iter",
            "extra": "iterations: 1425\ncpu: 490439.78947368386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 402239.23864288436,
            "unit": "ns/iter",
            "extra": "iterations: 1739\ncpu: 402234.73260494275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 403028.3109195363,
            "unit": "ns/iter",
            "extra": "iterations: 1740\ncpu: 403023.7931034523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 397045.41189800587,
            "unit": "ns/iter",
            "extra": "iterations: 1765\ncpu: 397041.4164305994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 252198.2429602832,
            "unit": "ns/iter",
            "extra": "iterations: 2770\ncpu: 252193.24909747354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 394454.0400225329,
            "unit": "ns/iter",
            "extra": "iterations: 1774\ncpu: 394449.7745208594 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}