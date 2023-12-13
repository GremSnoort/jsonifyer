window.BENCHMARK_DATA = {
  "lastUpdate": 1702490223996,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Serialize clang-14 22.04 Debug c++-17": [
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
        "date": 1702490223631,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 7682.390059201735,
            "unit": "ns/iter",
            "extra": "iterations: 91381\ncpu: 7682.181197404275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 72601.0499229379,
            "unit": "ns/iter",
            "extra": "iterations: 11678\ncpu: 72600.97619455386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 137625.40031694897,
            "unit": "ns/iter",
            "extra": "iterations: 6310\ncpu: 137625.07131537245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 202523.95013980122,
            "unit": "ns/iter",
            "extra": "iterations: 4292\ncpu: 202518.6393289841 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 266664.9575530542,
            "unit": "ns/iter",
            "extra": "iterations: 3204\ncpu: 266654.0262172285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 327472.24502294254,
            "unit": "ns/iter",
            "extra": "iterations: 2612\ncpu: 327456.73813169997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 390500.7219202616,
            "unit": "ns/iter",
            "extra": "iterations: 2208\ncpu: 390484.1032608698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 456625.35853019886,
            "unit": "ns/iter",
            "extra": "iterations: 1905\ncpu: 456625.19685039367 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 524307.5422619032,
            "unit": "ns/iter",
            "extra": "iterations: 1680\ncpu: 524312.3214285709 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6053.127713240636,
            "unit": "ns/iter",
            "extra": "iterations: 114577\ncpu: 6052.987946970168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 4990.485941333122,
            "unit": "ns/iter",
            "extra": "iterations: 139807\ncpu: 4990.362428204598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5036.832349978168,
            "unit": "ns/iter",
            "extra": "iterations: 138980\ncpu: 5036.818966757808 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 4986.4453132247145,
            "unit": "ns/iter",
            "extra": "iterations: 140171\ncpu: 4986.16261566229 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 8703.298646971774,
            "unit": "ns/iter",
            "extra": "iterations: 80560\ncpu: 8702.388282025819 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 31986.42688990825,
            "unit": "ns/iter",
            "extra": "iterations: 25742\ncpu: 31984.212570895827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 131503.37962820058,
            "unit": "ns/iter",
            "extra": "iterations: 6509\ncpu: 131497.68013519718 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 105877.19066485034,
            "unit": "ns/iter",
            "extra": "iterations: 8077\ncpu: 105871.99455243262 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 104697.52695269037,
            "unit": "ns/iter",
            "extra": "iterations: 8181\ncpu: 104692.22588925547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 106851.2644576856,
            "unit": "ns/iter",
            "extra": "iterations: 8058\ncpu: 106839.98510796718 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 253377.03020620078,
            "unit": "ns/iter",
            "extra": "iterations: 3443\ncpu: 253359.802497822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2195174.016509434,
            "unit": "ns/iter",
            "extra": "iterations: 424\ncpu: 2195012.500000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1768321.8279158561,
            "unit": "ns/iter",
            "extra": "iterations: 523\ncpu: 1768220.458891015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1764410.3638093884,
            "unit": "ns/iter",
            "extra": "iterations: 525\ncpu: 1764286.2857142847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1778955.6476191138,
            "unit": "ns/iter",
            "extra": "iterations: 525\ncpu: 1778857.1428571453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1049707.4621469304,
            "unit": "ns/iter",
            "extra": "iterations: 885\ncpu: 1049639.5480225973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1732559.4674116855,
            "unit": "ns/iter",
            "extra": "iterations: 537\ncpu: 1732445.9962756054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 7170170.800000051,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7169388.999999988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 4022054.405172659,
            "unit": "ns/iter",
            "extra": "iterations: 232\ncpu: 4021753.4482758604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 8807148.167999912,
            "unit": "ns/iter",
            "extra": "iterations: 125\ncpu: 8806627.999999989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 32947.458014653595,
            "unit": "ns/iter",
            "extra": "iterations: 24973\ncpu: 32945.25287310292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 132770.7091472838,
            "unit": "ns/iter",
            "extra": "iterations: 6450\ncpu: 132763.9844961237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 106971.64456928901,
            "unit": "ns/iter",
            "extra": "iterations: 8010\ncpu: 106972.52184768999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 108257.10640183183,
            "unit": "ns/iter",
            "extra": "iterations: 7904\ncpu: 108257.84412955509 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 109552.86358352887,
            "unit": "ns/iter",
            "extra": "iterations: 7741\ncpu: 109551.10450846198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 256382.11352446498,
            "unit": "ns/iter",
            "extra": "iterations: 3453\ncpu: 256378.42455835405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2205595.0536192884,
            "unit": "ns/iter",
            "extra": "iterations: 373\ncpu: 2205568.6327077746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1786919.9001918852,
            "unit": "ns/iter",
            "extra": "iterations: 521\ncpu: 1786936.4683301288 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1774354.942418434,
            "unit": "ns/iter",
            "extra": "iterations: 521\ncpu: 1774324.7600767747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1793308.6762451967,
            "unit": "ns/iter",
            "extra": "iterations: 522\ncpu: 1793293.8697317936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1039908.7072626156,
            "unit": "ns/iter",
            "extra": "iterations: 895\ncpu: 1039906.3687150828 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1735238.089219328,
            "unit": "ns/iter",
            "extra": "iterations: 538\ncpu: 1735237.5464683932 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 7251406.139999972,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7251031.999999995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 4077136.4541485314,
            "unit": "ns/iter",
            "extra": "iterations: 229\ncpu: 4077138.864628832 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 31702.828776590486,
            "unit": "ns/iter",
            "extra": "iterations: 26042\ncpu: 31702.70332539748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 130014.54733638537,
            "unit": "ns/iter",
            "extra": "iterations: 6570\ncpu: 130015.76864535741 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 106020.39005072902,
            "unit": "ns/iter",
            "extra": "iterations: 8081\ncpu: 106016.84197500384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 106884.57157144428,
            "unit": "ns/iter",
            "extra": "iterations: 7999\ncpu: 106885.38567320953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 109064.44659945904,
            "unit": "ns/iter",
            "extra": "iterations: 7837\ncpu: 109062.75360469562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 256158.53717309708,
            "unit": "ns/iter",
            "extra": "iterations: 3403\ncpu: 256156.24449015592 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2206502.4349881425,
            "unit": "ns/iter",
            "extra": "iterations: 423\ncpu: 2206402.836879436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1776831.833969268,
            "unit": "ns/iter",
            "extra": "iterations: 524\ncpu: 1776847.7099236613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1763465.9621927745,
            "unit": "ns/iter",
            "extra": "iterations: 529\ncpu: 1763466.9187145524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1787665.6080306235,
            "unit": "ns/iter",
            "extra": "iterations: 523\ncpu: 1787659.4646271556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1047723.7730336977,
            "unit": "ns/iter",
            "extra": "iterations: 890\ncpu: 1047687.865168536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1732399.3921931542,
            "unit": "ns/iter",
            "extra": "iterations: 538\ncpu: 1732412.639405202 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 3007.864153101524,
            "unit": "ns/iter",
            "extra": "iterations: 232578\ncpu: 3007.8902561721143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 16136.72847592781,
            "unit": "ns/iter",
            "extra": "iterations: 44427\ncpu: 16136.351768068873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 12409.241558808953,
            "unit": "ns/iter",
            "extra": "iterations: 56479\ncpu: 12408.583721383076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 12443.86167172436,
            "unit": "ns/iter",
            "extra": "iterations: 56337\ncpu: 12443.979977634592 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 10316.353258875113,
            "unit": "ns/iter",
            "extra": "iterations: 68137\ncpu: 10316.280435005892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 59530.898846875585,
            "unit": "ns/iter",
            "extra": "iterations: 11794\ncpu: 59531.431236222255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 142279.6303859314,
            "unit": "ns/iter",
            "extra": "iterations: 4897\ncpu: 142279.15050030546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 36764.32385946548,
            "unit": "ns/iter",
            "extra": "iterations: 19070\ncpu: 36764.62506554792 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 36754.54584121179,
            "unit": "ns/iter",
            "extra": "iterations: 19044\ncpu: 36754.836168872134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 36604.03663691873,
            "unit": "ns/iter",
            "extra": "iterations: 19161\ncpu: 36604.331715464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 70536.48933815963,
            "unit": "ns/iter",
            "extra": "iterations: 9942\ncpu: 70534.22852544715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 66414.41389125514,
            "unit": "ns/iter",
            "extra": "iterations: 10539\ncpu: 66412.27820476405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 18475.642305266127,
            "unit": "ns/iter",
            "extra": "iterations: 38052\ncpu: 18475.825186586524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 89019.44061302784,
            "unit": "ns/iter",
            "extra": "iterations: 7830\ncpu: 89017.96934865808 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 72603.26012881742,
            "unit": "ns/iter",
            "extra": "iterations: 9626\ncpu: 72603.89569914943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 71022.16979600614,
            "unit": "ns/iter",
            "extra": "iterations: 9853\ncpu: 71021.65837815941 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 71355.84669421442,
            "unit": "ns/iter",
            "extra": "iterations: 9680\ncpu: 71354.14256198441 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 139482.35168132625,
            "unit": "ns/iter",
            "extra": "iterations: 4996\ncpu: 139483.4067253798 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 605517.1848214311,
            "unit": "ns/iter",
            "extra": "iterations: 1120\ncpu: 605494.7321428576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 511380.09999997844,
            "unit": "ns/iter",
            "extra": "iterations: 1370\ncpu: 511383.50364964356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 506027.2317689519,
            "unit": "ns/iter",
            "extra": "iterations: 1385\ncpu: 506025.41516245727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 513082.68521228986,
            "unit": "ns/iter",
            "extra": "iterations: 1366\ncpu: 513062.73792094225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 329432.85747885343,
            "unit": "ns/iter",
            "extra": "iterations: 2126\ncpu: 329435.79492004163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 500172.5366027569,
            "unit": "ns/iter",
            "extra": "iterations: 1407\ncpu: 500177.6830135035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 18970.34048134068,
            "unit": "ns/iter",
            "extra": "iterations: 36980\ncpu: 18970.51379123852 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 89303.85376757226,
            "unit": "ns/iter",
            "extra": "iterations: 7830\ncpu: 89301.89016602833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 72083.09761366488,
            "unit": "ns/iter",
            "extra": "iterations: 9722\ncpu: 72083.75848590703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 70548.32609134675,
            "unit": "ns/iter",
            "extra": "iterations: 9896\ncpu: 70547.20088924836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 71371.53675493112,
            "unit": "ns/iter",
            "extra": "iterations: 9781\ncpu: 71372.1807586138 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 137744.19109534164,
            "unit": "ns/iter",
            "extra": "iterations: 5076\ncpu: 137743.47911741593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 608102.2438811837,
            "unit": "ns/iter",
            "extra": "iterations: 1144\ncpu: 608074.3006992926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 506394.1591896068,
            "unit": "ns/iter",
            "extra": "iterations: 1382\ncpu: 506399.71056440193 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 504411.217579256,
            "unit": "ns/iter",
            "extra": "iterations: 1388\ncpu: 504401.1527377488 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 505447.5895953327,
            "unit": "ns/iter",
            "extra": "iterations: 1384\ncpu: 505437.21098266076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 328195.5838014603,
            "unit": "ns/iter",
            "extra": "iterations: 2136\ncpu: 328192.64981273457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 499369.83488205663,
            "unit": "ns/iter",
            "extra": "iterations: 1399\ncpu: 499348.32022873283 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}