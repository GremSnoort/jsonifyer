window.BENCHMARK_DATA = {
  "lastUpdate": 1702390812316,
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
          "id": "7d92f1613fa4ae9edff977fb9a4ee38db56bedcc",
          "message": "Enable another Clangs : try",
          "timestamp": "2023-12-12T16:01:28+03:00",
          "tree_id": "088c43bf274cde79393a5114d044a347c612360f",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/7d92f1613fa4ae9edff977fb9a4ee38db56bedcc"
        },
        "date": 1702387037290,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 6883.350659563016,
            "unit": "ns/iter",
            "extra": "iterations: 101734\ncpu: 6883.260266970728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 57995.968845579744,
            "unit": "ns/iter",
            "extra": "iterations: 14059\ncpu: 57992.41055551604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 91581.73213142877,
            "unit": "ns/iter",
            "extra": "iterations: 9374\ncpu: 91578.04565820355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 133477.69522776396,
            "unit": "ns/iter",
            "extra": "iterations: 6454\ncpu: 133472.29625038736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 175445.00121163236,
            "unit": "ns/iter",
            "extra": "iterations: 4952\ncpu: 175442.5888529887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 218008.1923656368,
            "unit": "ns/iter",
            "extra": "iterations: 3982\ncpu: 218007.91059768954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 263168.23725255486,
            "unit": "ns/iter",
            "extra": "iterations: 3334\ncpu: 262749.61007798446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 300771.07761608565,
            "unit": "ns/iter",
            "extra": "iterations: 2886\ncpu: 300742.41164241167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 342846.8830708601,
            "unit": "ns/iter",
            "extra": "iterations: 2540\ncpu: 342827.04724409414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 5659.734533083221,
            "unit": "ns/iter",
            "extra": "iterations: 123748\ncpu: 5659.100753143485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 4621.39331208058,
            "unit": "ns/iter",
            "extra": "iterations: 151198\ncpu: 4620.941414568983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 4662.110558068657,
            "unit": "ns/iter",
            "extra": "iterations: 149677\ncpu: 4662.071660976645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 4652.954648089427,
            "unit": "ns/iter",
            "extra": "iterations: 150578\ncpu: 4652.607286589013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 7254.431876925134,
            "unit": "ns/iter",
            "extra": "iterations: 96722\ncpu: 7254.538781249355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 26305.79630534545,
            "unit": "ns/iter",
            "extra": "iterations: 30693\ncpu: 26305.39210894993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 122553.95655271049,
            "unit": "ns/iter",
            "extra": "iterations: 7020\ncpu: 122555.64102564113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 97499.23665257185,
            "unit": "ns/iter",
            "extra": "iterations: 8747\ncpu: 97496.86749742742 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 96609.34382073714,
            "unit": "ns/iter",
            "extra": "iterations: 8836\ncpu: 96606.56405613373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 93731.07529126966,
            "unit": "ns/iter",
            "extra": "iterations: 9098\ncpu: 93725.08243570021 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 212458.44635192357,
            "unit": "ns/iter",
            "extra": "iterations: 4194\ncpu: 212444.9928469248 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1644725.3056537325,
            "unit": "ns/iter",
            "extra": "iterations: 566\ncpu: 1644592.226148412 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1294149.73537603,
            "unit": "ns/iter",
            "extra": "iterations: 718\ncpu: 1294003.4818941476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1292090.8973647146,
            "unit": "ns/iter",
            "extra": "iterations: 721\ncpu: 1291989.5977808577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1269517.9685791826,
            "unit": "ns/iter",
            "extra": "iterations: 732\ncpu: 1269431.420765031 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 709346.03450921,
            "unit": "ns/iter",
            "extra": "iterations: 1304\ncpu: 709299.5398772999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1248281.7647849587,
            "unit": "ns/iter",
            "extra": "iterations: 744\ncpu: 1248204.1666666667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 32953.5373134313,
            "unit": "ns/iter",
            "extra": "iterations: 24924\ncpu: 32951.76937891189 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 152841.52315883228,
            "unit": "ns/iter",
            "extra": "iterations: 5635\ncpu: 152836.2555456961 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 121280.83495418605,
            "unit": "ns/iter",
            "extra": "iterations: 7095\ncpu: 121280.94432699085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 122083.43573756392,
            "unit": "ns/iter",
            "extra": "iterations: 7057\ncpu: 122082.82556327076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 118299.09910653297,
            "unit": "ns/iter",
            "extra": "iterations: 7275\ncpu: 118296.05498281783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 225143.61472425816,
            "unit": "ns/iter",
            "extra": "iterations: 3844\ncpu: 225139.25598335106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1672161.6097122757,
            "unit": "ns/iter",
            "extra": "iterations: 556\ncpu: 1672128.9568345405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1320520.6297872327,
            "unit": "ns/iter",
            "extra": "iterations: 705\ncpu: 1320411.2056737542 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1327395.1906116225,
            "unit": "ns/iter",
            "extra": "iterations: 703\ncpu: 1327370.5547652885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1297271.1799163697,
            "unit": "ns/iter",
            "extra": "iterations: 717\ncpu: 1297243.3751743385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 732817.3509881529,
            "unit": "ns/iter",
            "extra": "iterations: 1265\ncpu: 732814.387351777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1281475.5365517503,
            "unit": "ns/iter",
            "extra": "iterations: 725\ncpu: 1281424.6896551666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 6050096.316128826,
            "unit": "ns/iter",
            "extra": "iterations: 155\ncpu: 6049986.45161289 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 2759027.337278134,
            "unit": "ns/iter",
            "extra": "iterations: 338\ncpu: 2758921.5976331388 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 25071.398650300038,
            "unit": "ns/iter",
            "extra": "iterations: 32748\ncpu: 25070.932576035044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 120811.79946524087,
            "unit": "ns/iter",
            "extra": "iterations: 7106\ncpu: 120809.80861244016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 93231.05585077552,
            "unit": "ns/iter",
            "extra": "iterations: 9221\ncpu: 93230.13772909628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 94780.94290106946,
            "unit": "ns/iter",
            "extra": "iterations: 9107\ncpu: 94770.82464038655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 90813.20413135509,
            "unit": "ns/iter",
            "extra": "iterations: 9440\ncpu: 90805.41313559317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 194948.82446689648,
            "unit": "ns/iter",
            "extra": "iterations: 4455\ncpu: 194927.78900112168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1646497.4295774898,
            "unit": "ns/iter",
            "extra": "iterations: 568\ncpu: 1646382.0422535187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1281911.3305785148,
            "unit": "ns/iter",
            "extra": "iterations: 726\ncpu: 1281846.6942148742 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1288439.4703448757,
            "unit": "ns/iter",
            "extra": "iterations: 725\ncpu: 1288350.0689655186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1267006.4654002537,
            "unit": "ns/iter",
            "extra": "iterations: 737\ncpu: 1266886.9742198116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 700602.854244961,
            "unit": "ns/iter",
            "extra": "iterations: 1331\ncpu: 700558.6025544741 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1242400.3701730925,
            "unit": "ns/iter",
            "extra": "iterations: 751\ncpu: 1242294.940079893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2661.4550270391373,
            "unit": "ns/iter",
            "extra": "iterations: 262769\ncpu: 2661.261031552429 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 16879.36625534347,
            "unit": "ns/iter",
            "extra": "iterations: 41411\ncpu: 16878.82688174638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 14060.45370351698,
            "unit": "ns/iter",
            "extra": "iterations: 49885\ncpu: 14059.591059436647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 14046.953046193321,
            "unit": "ns/iter",
            "extra": "iterations: 49964\ncpu: 14045.865022816344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 10203.36240757457,
            "unit": "ns/iter",
            "extra": "iterations: 68434\ncpu: 10202.161206417903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 65907.03338348537,
            "unit": "ns/iter",
            "extra": "iterations: 10634\ncpu: 65900.404363363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 112600.51181862674,
            "unit": "ns/iter",
            "extra": "iterations: 6219\ncpu: 112594.16304872202 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 27458.613442418933,
            "unit": "ns/iter",
            "extra": "iterations: 25546\ncpu: 27457.68417756201 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 27594.25258075898,
            "unit": "ns/iter",
            "extra": "iterations: 25477\ncpu: 27593.20563645653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 27247.83035609976,
            "unit": "ns/iter",
            "extra": "iterations: 25695\ncpu: 27246.382564701293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 55022.109237764795,
            "unit": "ns/iter",
            "extra": "iterations: 12752\ncpu: 55020.63989962361 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 51459.418080340896,
            "unit": "ns/iter",
            "extra": "iterations: 13617\ncpu: 51458.4122787696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 20462.34841218823,
            "unit": "ns/iter",
            "extra": "iterations: 34198\ncpu: 20461.641031639407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 103583.75284889583,
            "unit": "ns/iter",
            "extra": "iterations: 6757\ncpu: 103583.1286073684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 83415.70902327856,
            "unit": "ns/iter",
            "extra": "iterations: 8334\ncpu: 83412.83897288257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 83643.43478784658,
            "unit": "ns/iter",
            "extra": "iterations: 8296\ncpu: 83491.93587270938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 82049.7929340206,
            "unit": "ns/iter",
            "extra": "iterations: 8548\ncpu: 82045.12166588772 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 126367.26478567885,
            "unit": "ns/iter",
            "extra": "iterations: 5529\ncpu: 126357.98516911043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 491559.917134821,
            "unit": "ns/iter",
            "extra": "iterations: 1424\ncpu: 491513.83426965674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 405107.3277456569,
            "unit": "ns/iter",
            "extra": "iterations: 1730\ncpu: 405085.664739881 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 404418.08439304546,
            "unit": "ns/iter",
            "extra": "iterations: 1730\ncpu: 404409.8265895881 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 396085.6297343037,
            "unit": "ns/iter",
            "extra": "iterations: 1769\ncpu: 396052.2894290533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 259376.7054034067,
            "unit": "ns/iter",
            "extra": "iterations: 2702\ncpu: 259350.8142116978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 395189.1433427626,
            "unit": "ns/iter",
            "extra": "iterations: 1765\ncpu: 395157.7337110485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 21104.282256602382,
            "unit": "ns/iter",
            "extra": "iterations: 33094\ncpu: 21103.01867407999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 104319.96728625208,
            "unit": "ns/iter",
            "extra": "iterations: 6725\ncpu: 104308.98141263948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 85284.23538723712,
            "unit": "ns/iter",
            "extra": "iterations: 8212\ncpu: 85279.71261568416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 84451.98354506986,
            "unit": "ns/iter",
            "extra": "iterations: 8265\ncpu: 84447.04174228737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 84274.96277945905,
            "unit": "ns/iter",
            "extra": "iterations: 8275\ncpu: 84274.23564954748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 126500.40435878685,
            "unit": "ns/iter",
            "extra": "iterations: 5552\ncpu: 126498.09077809768 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 486537.62526169786,
            "unit": "ns/iter",
            "extra": "iterations: 1433\ncpu: 486511.9330076792 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 400184.31103488646,
            "unit": "ns/iter",
            "extra": "iterations: 1749\ncpu: 400164.03659233596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 401654.8081562264,
            "unit": "ns/iter",
            "extra": "iterations: 1741\ncpu: 401656.3469270507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 394754.3653846277,
            "unit": "ns/iter",
            "extra": "iterations: 1768\ncpu: 394747.68099547696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 255798.31384728345,
            "unit": "ns/iter",
            "extra": "iterations: 2737\ncpu: 255794.9214468382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 392467.59808343946,
            "unit": "ns/iter",
            "extra": "iterations: 1774\ncpu: 392466.06538895104 ns\nthreads: 1"
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
          "id": "89047ca37b911c271e1749e8de13632f782d585c",
          "message": "cmt clang 15 build",
          "timestamp": "2023-12-12T16:57:18+03:00",
          "tree_id": "2f2c9ed08ef5734141953c56ba19061c15b85598",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/89047ca37b911c271e1749e8de13632f782d585c"
        },
        "date": 1702390811832,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 6814.026635751253,
            "unit": "ns/iter",
            "extra": "iterations: 102644\ncpu: 6813.830326175909 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 50295.8015000047,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 50293.79000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 92813.8437871095,
            "unit": "ns/iter",
            "extra": "iterations: 9263\ncpu: 92805.84044046204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 135257.50361294186,
            "unit": "ns/iter",
            "extra": "iterations: 6366\ncpu: 135247.70656613255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 178537.13155738276,
            "unit": "ns/iter",
            "extra": "iterations: 4880\ncpu: 178527.54098360662 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 220722.8145695473,
            "unit": "ns/iter",
            "extra": "iterations: 3926\ncpu: 220705.14518594003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 264913.0151561224,
            "unit": "ns/iter",
            "extra": "iterations: 3299\ncpu: 264899.09063352516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 333209.8828924178,
            "unit": "ns/iter",
            "extra": "iterations: 2835\ncpu: 333201.90476190473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 348585.97118847276,
            "unit": "ns/iter",
            "extra": "iterations: 2499\ncpu: 348577.95118047204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 5801.342718068959,
            "unit": "ns/iter",
            "extra": "iterations: 120799\ncpu: 5801.245871240654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 4684.145821611346,
            "unit": "ns/iter",
            "extra": "iterations: 149292\ncpu: 4683.938858076794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 4628.874136212731,
            "unit": "ns/iter",
            "extra": "iterations: 149487\ncpu: 4628.311491969209 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 4731.245485121685,
            "unit": "ns/iter",
            "extra": "iterations: 148066\ncpu: 4731.1847419394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 7156.470107478877,
            "unit": "ns/iter",
            "extra": "iterations: 98252\ncpu: 7155.9673085535205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 26174.64657198949,
            "unit": "ns/iter",
            "extra": "iterations: 31053\ncpu: 26173.751328374085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 127377.53598456272,
            "unit": "ns/iter",
            "extra": "iterations: 6739\ncpu: 127369.23875945975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 100929.24940982267,
            "unit": "ns/iter",
            "extra": "iterations: 8472\ncpu: 100927.62039660079 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 100465.17234915619,
            "unit": "ns/iter",
            "extra": "iterations: 8535\ncpu: 100462.05038078499 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 97649.37022247388,
            "unit": "ns/iter",
            "extra": "iterations: 8765\ncpu: 97647.71249286935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 204988.4307938674,
            "unit": "ns/iter",
            "extra": "iterations: 4371\ncpu: 204977.5337451377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1678127.5297297079,
            "unit": "ns/iter",
            "extra": "iterations: 555\ncpu: 1678103.4234234232 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1321846.763456118,
            "unit": "ns/iter",
            "extra": "iterations: 706\ncpu: 1321737.3937677061 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1312341.595170433,
            "unit": "ns/iter",
            "extra": "iterations: 704\ncpu: 1312302.9829545435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1290350.8272980137,
            "unit": "ns/iter",
            "extra": "iterations: 718\ncpu: 1290285.7938718672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 710139.6224805922,
            "unit": "ns/iter",
            "extra": "iterations: 1290\ncpu: 710128.5271317845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1265541.346994504,
            "unit": "ns/iter",
            "extra": "iterations: 732\ncpu: 1265479.6448087462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 33132.02219898586,
            "unit": "ns/iter",
            "extra": "iterations: 24866\ncpu: 33130.86543875173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 158308.739535742,
            "unit": "ns/iter",
            "extra": "iterations: 5471\ncpu: 158303.92981173442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 125865.47012532939,
            "unit": "ns/iter",
            "extra": "iterations: 6862\ncpu: 125860.95890410956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 126057.18543915334,
            "unit": "ns/iter",
            "extra": "iterations: 6854\ncpu: 125778.68398015758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 123017.87862344652,
            "unit": "ns/iter",
            "extra": "iterations: 7003\ncpu: 123013.32286163064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 217017.77096370293,
            "unit": "ns/iter",
            "extra": "iterations: 3995\ncpu: 216999.42428034963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1706779.6959706803,
            "unit": "ns/iter",
            "extra": "iterations: 546\ncpu: 1706672.710622705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1344940.5893372225,
            "unit": "ns/iter",
            "extra": "iterations: 694\ncpu: 1344836.7435158486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1340874.3933718193,
            "unit": "ns/iter",
            "extra": "iterations: 694\ncpu: 1340765.561959654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1325120.1226818224,
            "unit": "ns/iter",
            "extra": "iterations: 701\ncpu: 1325036.2339514901 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 735981.9596518981,
            "unit": "ns/iter",
            "extra": "iterations: 1264\ncpu: 735924.208860756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1296062.8729049987,
            "unit": "ns/iter",
            "extra": "iterations: 716\ncpu: 1296046.0893854713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 6033919.458064746,
            "unit": "ns/iter",
            "extra": "iterations: 155\ncpu: 6033714.838709663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 2726208.2857144275,
            "unit": "ns/iter",
            "extra": "iterations: 343\ncpu: 2726140.5247813244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 25592.4445422809,
            "unit": "ns/iter",
            "extra": "iterations: 32935\ncpu: 25590.860786397476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 124465.51316932202,
            "unit": "ns/iter",
            "extra": "iterations: 6910\ncpu: 124458.69753979812 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 96685.08166253533,
            "unit": "ns/iter",
            "extra": "iterations: 8878\ncpu: 96680.70511376394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 96966.9247652445,
            "unit": "ns/iter",
            "extra": "iterations: 8839\ncpu: 96966.19527095856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 94453.76554290809,
            "unit": "ns/iter",
            "extra": "iterations: 9136\ncpu: 94449.68257443067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 187059.92954104385,
            "unit": "ns/iter",
            "extra": "iterations: 4641\ncpu: 187054.51411333712 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1675488.8666666686,
            "unit": "ns/iter",
            "extra": "iterations: 555\ncpu: 1675426.8468468576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1310723.3323983427,
            "unit": "ns/iter",
            "extra": "iterations: 713\ncpu: 1310690.1823281941 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1308165.8314606678,
            "unit": "ns/iter",
            "extra": "iterations: 712\ncpu: 1308110.6741573038 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1286110.3682758643,
            "unit": "ns/iter",
            "extra": "iterations: 725\ncpu: 1286087.172413792 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 705770.5540438334,
            "unit": "ns/iter",
            "extra": "iterations: 1323\ncpu: 705734.8450491319 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1263945.5691056708,
            "unit": "ns/iter",
            "extra": "iterations: 738\ncpu: 1263930.487804881 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2550.9402102258796,
            "unit": "ns/iter",
            "extra": "iterations: 274562\ncpu: 2550.908355854038 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 17268.06286176842,
            "unit": "ns/iter",
            "extra": "iterations: 40772\ncpu: 17267.340331600215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 14223.097721211436,
            "unit": "ns/iter",
            "extra": "iterations: 55863\ncpu: 14222.292035873443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 14145.515047395422,
            "unit": "ns/iter",
            "extra": "iterations: 49477\ncpu: 14145.402914485525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 10258.937476980786,
            "unit": "ns/iter",
            "extra": "iterations: 67879\ncpu: 10258.212407371879 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 64842.29357713819,
            "unit": "ns/iter",
            "extra": "iterations: 10883\ncpu: 64842.70881190809 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 114121.70863191497,
            "unit": "ns/iter",
            "extra": "iterations: 6140\ncpu: 114120.57003257348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 27606.66768075695,
            "unit": "ns/iter",
            "extra": "iterations: 25310\ncpu: 27606.41643619111 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 27874.903694876197,
            "unit": "ns/iter",
            "extra": "iterations: 25170\ncpu: 27875.025824394277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 27512.38542198405,
            "unit": "ns/iter",
            "extra": "iterations: 25463\ncpu: 27512.480854573434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 55539.05644268679,
            "unit": "ns/iter",
            "extra": "iterations: 12650\ncpu: 55537.03557312288 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 52146.14343163579,
            "unit": "ns/iter",
            "extra": "iterations: 13428\ncpu: 52141.20494489103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 20730.181154888505,
            "unit": "ns/iter",
            "extra": "iterations: 33579\ncpu: 20727.555912921587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 105467.56153034864,
            "unit": "ns/iter",
            "extra": "iterations: 6639\ncpu: 105462.19310137101 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 86078.1163533593,
            "unit": "ns/iter",
            "extra": "iterations: 8139\ncpu: 86076.82762010088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 86885.79016474885,
            "unit": "ns/iter",
            "extra": "iterations: 8073\ncpu: 86877.15842933323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 84968.52110113899,
            "unit": "ns/iter",
            "extra": "iterations: 8246\ncpu: 84960.29590104171 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 125934.41662169684,
            "unit": "ns/iter",
            "extra": "iterations: 5559\ncpu: 125920.11153085188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 501806.4942775373,
            "unit": "ns/iter",
            "extra": "iterations: 1398\ncpu: 501779.97138769843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 406082.52447553864,
            "unit": "ns/iter",
            "extra": "iterations: 1716\ncpu: 406052.91375291266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 409813.32765709225,
            "unit": "ns/iter",
            "extra": "iterations: 1703\ncpu: 409771.46212565736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 404518.99710146594,
            "unit": "ns/iter",
            "extra": "iterations: 1725\ncpu: 404485.7971014499 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 255675.8908360581,
            "unit": "ns/iter",
            "extra": "iterations: 2739\ncpu: 255664.54910551445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 400692.01089448016,
            "unit": "ns/iter",
            "extra": "iterations: 1744\ncpu: 400667.60321101354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 21214.54221564158,
            "unit": "ns/iter",
            "extra": "iterations: 33092\ncpu: 21212.96688021253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 106392.56797812264,
            "unit": "ns/iter",
            "extra": "iterations: 6583\ncpu: 106388.8804496443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 86714.76431936426,
            "unit": "ns/iter",
            "extra": "iterations: 8066\ncpu: 86707.09149516464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 86577.96419278959,
            "unit": "ns/iter",
            "extra": "iterations: 8071\ncpu: 86578.40416305249 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 86604.6367452763,
            "unit": "ns/iter",
            "extra": "iterations: 8099\ncpu: 86601.86442770802 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 125160.48630260126,
            "unit": "ns/iter",
            "extra": "iterations: 5585\ncpu: 125150.8504923894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 496402.67563740996,
            "unit": "ns/iter",
            "extra": "iterations: 1412\ncpu: 496377.0538243674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 403829.0300057776,
            "unit": "ns/iter",
            "extra": "iterations: 1733\ncpu: 403821.35025966656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 406543.1429401363,
            "unit": "ns/iter",
            "extra": "iterations: 1721\ncpu: 406496.8041836112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 401770.08376361005,
            "unit": "ns/iter",
            "extra": "iterations: 1743\ncpu: 401734.59552495624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 253292.96159419295,
            "unit": "ns/iter",
            "extra": "iterations: 2760\ncpu: 253264.71014493052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 399358.7700228813,
            "unit": "ns/iter",
            "extra": "iterations: 1748\ncpu: 399345.7093821537 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}