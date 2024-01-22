window.BENCHMARK_DATA = {
  "lastUpdate": 1705958377857,
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
        "date": 1702492842978,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 8078.837954105531,
            "unit": "ns/iter",
            "extra": "iterations: 86241\ncpu: 8078.7537250263795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 74863.18831226366,
            "unit": "ns/iter",
            "extra": "iterations: 11311\ncpu: 74859.66758023162 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 142828.2280758991,
            "unit": "ns/iter",
            "extra": "iterations: 6112\ncpu: 142823.69109947645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 212882.13142581098,
            "unit": "ns/iter",
            "extra": "iterations: 4124\ncpu: 212868.2589718719 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 279188.368269245,
            "unit": "ns/iter",
            "extra": "iterations: 3120\ncpu: 279180.64102564106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 343168.52903739794,
            "unit": "ns/iter",
            "extra": "iterations: 2514\ncpu: 343157.63723150356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 410662.14393582055,
            "unit": "ns/iter",
            "extra": "iterations: 2119\ncpu: 410644.3605474279 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 476395.3561643874,
            "unit": "ns/iter",
            "extra": "iterations: 1825\ncpu: 476382.68493150716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 544538.0873907163,
            "unit": "ns/iter",
            "extra": "iterations: 1602\ncpu: 544512.4843945077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6131.045713933889,
            "unit": "ns/iter",
            "extra": "iterations: 113904\ncpu: 6130.720606826806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5063.376871368659,
            "unit": "ns/iter",
            "extra": "iterations: 138201\ncpu: 5063.215895688164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5073.134899183998,
            "unit": "ns/iter",
            "extra": "iterations: 138370\ncpu: 5072.968128929677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5060.364926849275,
            "unit": "ns/iter",
            "extra": "iterations: 138003\ncpu: 5060.247965623939 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 8814.360917424778,
            "unit": "ns/iter",
            "extra": "iterations: 79309\ncpu: 8814.00345484119 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 31804.91874975857,
            "unit": "ns/iter",
            "extra": "iterations: 25883\ncpu: 31802.90924545068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 130899.67440794912,
            "unit": "ns/iter",
            "extra": "iterations: 6545\ncpu: 130894.34682964097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 105094.75365524618,
            "unit": "ns/iter",
            "extra": "iterations: 8139\ncpu: 105090.26907482518 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 106441.4218263378,
            "unit": "ns/iter",
            "extra": "iterations: 8027\ncpu: 106436.33985299603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 105717.66126258875,
            "unit": "ns/iter",
            "extra": "iterations: 8142\ncpu: 105712.76099238523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 257728.05719390986,
            "unit": "ns/iter",
            "extra": "iterations: 3357\ncpu: 257706.4343163538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2247931.812652166,
            "unit": "ns/iter",
            "extra": "iterations: 411\ncpu: 2247778.345498778 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1807562.9103314022,
            "unit": "ns/iter",
            "extra": "iterations: 513\ncpu: 1807475.8284600403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1805997.177388019,
            "unit": "ns/iter",
            "extra": "iterations: 513\ncpu: 1805897.6608187146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1818644.6313725535,
            "unit": "ns/iter",
            "extra": "iterations: 510\ncpu: 1818545.4901960788 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1070931.813148906,
            "unit": "ns/iter",
            "extra": "iterations: 867\ncpu: 1070884.8904267594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1763336.7376426314,
            "unit": "ns/iter",
            "extra": "iterations: 526\ncpu: 1763255.3231939194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 7266063.8399997875,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7265665.999999982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 4129455.7035399494,
            "unit": "ns/iter",
            "extra": "iterations: 226\ncpu: 4129238.9380530836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 8918516.382113293,
            "unit": "ns/iter",
            "extra": "iterations: 123\ncpu: 8917833.333333336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 31935.97148281605,
            "unit": "ns/iter",
            "extra": "iterations: 25809\ncpu: 31934.332984617766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 132998.77056815065,
            "unit": "ns/iter",
            "extra": "iterations: 6442\ncpu: 132993.26296181316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 106892.29277423648,
            "unit": "ns/iter",
            "extra": "iterations: 8013\ncpu: 106888.70585298867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 109602.45148920525,
            "unit": "ns/iter",
            "extra": "iterations: 7823\ncpu: 109597.53291576062 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 109247.98615205818,
            "unit": "ns/iter",
            "extra": "iterations: 7799\ncpu: 109244.77497114973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 262136.26088269352,
            "unit": "ns/iter",
            "extra": "iterations: 3308\ncpu: 262121.28174123226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2250630.4014600096,
            "unit": "ns/iter",
            "extra": "iterations: 411\ncpu: 2250523.1143552316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1829600.6804733742,
            "unit": "ns/iter",
            "extra": "iterations: 507\ncpu: 1829516.5680473375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1816618.2167969057,
            "unit": "ns/iter",
            "extra": "iterations: 512\ncpu: 1816539.648437504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1827479.2848724104,
            "unit": "ns/iter",
            "extra": "iterations: 509\ncpu: 1827378.781925348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1072315.1486174345,
            "unit": "ns/iter",
            "extra": "iterations: 868\ncpu: 1072267.9723502325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1774491.8571428396,
            "unit": "ns/iter",
            "extra": "iterations: 525\ncpu: 1774414.666666671 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 7326298.959999349,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7325830.999999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 4070223.3434780794,
            "unit": "ns/iter",
            "extra": "iterations: 230\ncpu: 4069830.8695652015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 32175.227386346687,
            "unit": "ns/iter",
            "extra": "iterations: 25604\ncpu: 32173.71895016408 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 130024.86246199414,
            "unit": "ns/iter",
            "extra": "iterations: 6580\ncpu: 130018.78419452856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 105210.23236253005,
            "unit": "ns/iter",
            "extra": "iterations: 7966\ncpu: 105205.61134822981 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 107022.24417147349,
            "unit": "ns/iter",
            "extra": "iterations: 7978\ncpu: 107015.49260466367 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 108032.51612496495,
            "unit": "ns/iter",
            "extra": "iterations: 7938\ncpu: 108027.67699672481 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 257445.7398035158,
            "unit": "ns/iter",
            "extra": "iterations: 3359\ncpu: 257431.79517713588 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2244450.6322114076,
            "unit": "ns/iter",
            "extra": "iterations: 416\ncpu: 2244322.8365384573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1803951.0696323833,
            "unit": "ns/iter",
            "extra": "iterations: 517\ncpu: 1803849.5164410055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1801706.2344960968,
            "unit": "ns/iter",
            "extra": "iterations: 516\ncpu: 1801599.6124031127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1819105.4765623882,
            "unit": "ns/iter",
            "extra": "iterations: 512\ncpu: 1819000.9765624986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1065049.6940639045,
            "unit": "ns/iter",
            "extra": "iterations: 876\ncpu: 1064992.3515981757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1757013.8825757306,
            "unit": "ns/iter",
            "extra": "iterations: 528\ncpu: 1756960.9848484814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 3097.020685051287,
            "unit": "ns/iter",
            "extra": "iterations: 226202\ncpu: 3096.9036524876046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 15734.664756768037,
            "unit": "ns/iter",
            "extra": "iterations: 44505\ncpu: 15734.339961802005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 12461.834224407847,
            "unit": "ns/iter",
            "extra": "iterations: 56112\ncpu: 12461.416452808571 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 12418.111154411261,
            "unit": "ns/iter",
            "extra": "iterations: 56453\ncpu: 12417.343630985066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 10302.388044744614,
            "unit": "ns/iter",
            "extra": "iterations: 67853\ncpu: 10301.774424122745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 61590.439501152956,
            "unit": "ns/iter",
            "extra": "iterations: 11306\ncpu: 61587.33415885411 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 146889.50031441043,
            "unit": "ns/iter",
            "extra": "iterations: 4771\ncpu: 146883.79794592256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 37900.436532007385,
            "unit": "ns/iter",
            "extra": "iterations: 18466\ncpu: 37898.13711686376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 37242.22910233201,
            "unit": "ns/iter",
            "extra": "iterations: 18782\ncpu: 37240.38441060553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 37612.338894852124,
            "unit": "ns/iter",
            "extra": "iterations: 18640\ncpu: 37610.52038626568 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 75214.03725973715,
            "unit": "ns/iter",
            "extra": "iterations: 9313\ncpu: 75212.78857511046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 67667.43454335623,
            "unit": "ns/iter",
            "extra": "iterations: 10358\ncpu: 67665.54354122432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 19023.649634048277,
            "unit": "ns/iter",
            "extra": "iterations: 36890\ncpu: 19023.14990512326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 92915.04131242166,
            "unit": "ns/iter",
            "extra": "iterations: 7528\ncpu: 92913.04463336954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 73651.88226009146,
            "unit": "ns/iter",
            "extra": "iterations: 9504\ncpu: 73647.71675084154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 72872.8662148039,
            "unit": "ns/iter",
            "extra": "iterations: 9590\ncpu: 72871.39728884265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 74620.91816537245,
            "unit": "ns/iter",
            "extra": "iterations: 9397\ncpu: 74618.15473023328 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 145756.81405989532,
            "unit": "ns/iter",
            "extra": "iterations: 4808\ncpu: 145752.1214642248 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 631835.5712987502,
            "unit": "ns/iter",
            "extra": "iterations: 1101\ncpu: 631816.0762942738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 523173.06417917076,
            "unit": "ns/iter",
            "extra": "iterations: 1340\ncpu: 523149.40298507625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 531566.0763416041,
            "unit": "ns/iter",
            "extra": "iterations: 1323\ncpu: 531531.7460317432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 526348.8007518164,
            "unit": "ns/iter",
            "extra": "iterations: 1330\ncpu: 526343.9849624118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 337453.2142511079,
            "unit": "ns/iter",
            "extra": "iterations: 2063\ncpu: 337445.8555501687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 512685.252020543,
            "unit": "ns/iter",
            "extra": "iterations: 1361\ncpu: 512675.45922116627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 18967.94839007382,
            "unit": "ns/iter",
            "extra": "iterations: 36834\ncpu: 18966.75082803929 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 91592.49437320382,
            "unit": "ns/iter",
            "extra": "iterations: 7642\ncpu: 91587.45092907571 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 73756.81833491284,
            "unit": "ns/iter",
            "extra": "iterations: 9501\ncpu: 73749.98421218772 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 73403.78777393686,
            "unit": "ns/iter",
            "extra": "iterations: 9537\ncpu: 73399.31844395564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 74031.12564508109,
            "unit": "ns/iter",
            "extra": "iterations: 9495\ncpu: 74029.54186413919 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 143411.15501773314,
            "unit": "ns/iter",
            "extra": "iterations: 4793\ncpu: 143399.4158147285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 628610.4923354179,
            "unit": "ns/iter",
            "extra": "iterations: 1109\ncpu: 628567.0874661886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 524039.1381628204,
            "unit": "ns/iter",
            "extra": "iterations: 1339\ncpu: 524003.3607169502 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 529365.0534236766,
            "unit": "ns/iter",
            "extra": "iterations: 1329\ncpu: 529343.7170805178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 520153.72916664707,
            "unit": "ns/iter",
            "extra": "iterations: 1344\ncpu: 520139.8809523892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 338540.61560832395,
            "unit": "ns/iter",
            "extra": "iterations: 2063\ncpu: 338530.82888996607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 513443.0007325842,
            "unit": "ns/iter",
            "extra": "iterations: 1365\ncpu: 513417.1428571419 ns\nthreads: 1"
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
        "date": 1702503896636,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 7674.874256360502,
            "unit": "ns/iter",
            "extra": "iterations: 91106\ncpu: 7674.471494742388 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 71046.98710482246,
            "unit": "ns/iter",
            "extra": "iterations: 12020\ncpu: 71046.73044925126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 138366.45814567368,
            "unit": "ns/iter",
            "extra": "iterations: 6439\ncpu: 138360.73924522448 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 200924.31647897273,
            "unit": "ns/iter",
            "extra": "iterations: 4351\ncpu: 200917.05355090782 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 263931.30701218685,
            "unit": "ns/iter",
            "extra": "iterations: 3280\ncpu: 263922.7743902438 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 325331.3233083071,
            "unit": "ns/iter",
            "extra": "iterations: 2660\ncpu: 325330.37593984936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 388744.35908890574,
            "unit": "ns/iter",
            "extra": "iterations: 2239\ncpu: 388723.6266190264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 451810.76207793556,
            "unit": "ns/iter",
            "extra": "iterations: 1925\ncpu: 451789.92207792256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 514495.9005882383,
            "unit": "ns/iter",
            "extra": "iterations: 1700\ncpu: 514489.529411764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 5972.953204380872,
            "unit": "ns/iter",
            "extra": "iterations: 117511\ncpu: 5972.611925692069 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5070.488718763485,
            "unit": "ns/iter",
            "extra": "iterations: 138460\ncpu: 5070.346670518567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5010.387428137465,
            "unit": "ns/iter",
            "extra": "iterations: 139502\ncpu: 5010.313830626085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5025.105220573447,
            "unit": "ns/iter",
            "extra": "iterations: 139659\ncpu: 5024.903514990091 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 8780.778206837467,
            "unit": "ns/iter",
            "extra": "iterations: 79502\ncpu: 8780.436970139117 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 31820.615747912496,
            "unit": "ns/iter",
            "extra": "iterations: 25832\ncpu: 31818.833230102184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 132286.28388983203,
            "unit": "ns/iter",
            "extra": "iterations: 6499\ncpu: 132279.25834743795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 106006.0260999262,
            "unit": "ns/iter",
            "extra": "iterations: 8046\ncpu: 106001.65299527728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 105361.60888888991,
            "unit": "ns/iter",
            "extra": "iterations: 8100\ncpu: 105359.86419753094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 105708.98521074736,
            "unit": "ns/iter",
            "extra": "iterations: 8114\ncpu: 105704.69558787261 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 253136.36988685591,
            "unit": "ns/iter",
            "extra": "iterations: 3447\ncpu: 253124.74615607748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2166420.682983688,
            "unit": "ns/iter",
            "extra": "iterations: 429\ncpu: 2166319.8135198117 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1762485.4554079464,
            "unit": "ns/iter",
            "extra": "iterations: 527\ncpu: 1762460.3415559793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1742404.119850039,
            "unit": "ns/iter",
            "extra": "iterations: 534\ncpu: 1742345.6928838957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1730761.8649156415,
            "unit": "ns/iter",
            "extra": "iterations: 533\ncpu: 1730723.8273921215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1043954.5322763522,
            "unit": "ns/iter",
            "extra": "iterations: 883\ncpu: 1043900.6795017023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1707405.106813998,
            "unit": "ns/iter",
            "extra": "iterations: 543\ncpu: 1707398.3425414413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 7141573.09999905,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7141063.999999986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 4028050.811159271,
            "unit": "ns/iter",
            "extra": "iterations: 233\ncpu: 4027964.8068669573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 8825032.532257637,
            "unit": "ns/iter",
            "extra": "iterations: 124\ncpu: 8824580.645161292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 31361.356243059647,
            "unit": "ns/iter",
            "extra": "iterations: 26117\ncpu: 31359.57422368571 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 133998.90758921465,
            "unit": "ns/iter",
            "extra": "iterations: 6417\ncpu: 133989.52781673707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 107997.090805907,
            "unit": "ns/iter",
            "extra": "iterations: 7929\ncpu: 107991.29776768804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 109108.42047184527,
            "unit": "ns/iter",
            "extra": "iterations: 7884\ncpu: 109103.93201420635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 110123.79842561235,
            "unit": "ns/iter",
            "extra": "iterations: 7749\ncpu: 110117.52484191579 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 251612.23719512773,
            "unit": "ns/iter",
            "extra": "iterations: 3280\ncpu: 251602.31707317027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2180033.0941176284,
            "unit": "ns/iter",
            "extra": "iterations: 425\ncpu: 2179904.235294112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1769365.173003757,
            "unit": "ns/iter",
            "extra": "iterations: 526\ncpu: 1769355.5133079845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1757060.1701322845,
            "unit": "ns/iter",
            "extra": "iterations: 529\ncpu: 1756998.4877126657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1751127.8834586176,
            "unit": "ns/iter",
            "extra": "iterations: 532\ncpu: 1751063.533834589 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1041212.7202246492,
            "unit": "ns/iter",
            "extra": "iterations: 890\ncpu: 1041189.1011235953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1711331.2417581049,
            "unit": "ns/iter",
            "extra": "iterations: 546\ncpu: 1711289.743589752 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 7177474.3499997845,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7177310.000000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 4098194.139130654,
            "unit": "ns/iter",
            "extra": "iterations: 230\ncpu: 4097931.3043478313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 31459.6306591029,
            "unit": "ns/iter",
            "extra": "iterations: 26263\ncpu: 31456.76046148573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 132526.32438162892,
            "unit": "ns/iter",
            "extra": "iterations: 5660\ncpu: 132518.25088339305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 105127.46695489997,
            "unit": "ns/iter",
            "extra": "iterations: 8095\ncpu: 105120.0741198268 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 106811.82291537459,
            "unit": "ns/iter",
            "extra": "iterations: 8047\ncpu: 106802.42326332832 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 107618.55831765004,
            "unit": "ns/iter",
            "extra": "iterations: 7965\ncpu: 107611.53797865659 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 251333.4316064919,
            "unit": "ns/iter",
            "extra": "iterations: 3436\ncpu: 251323.16647264382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2172643.6853145813,
            "unit": "ns/iter",
            "extra": "iterations: 429\ncpu: 2172491.8414918524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1754547.5962263155,
            "unit": "ns/iter",
            "extra": "iterations: 530\ncpu: 1754409.8113207575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1751768.6962264634,
            "unit": "ns/iter",
            "extra": "iterations: 530\ncpu: 1751677.9245283003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1743213.0131334164,
            "unit": "ns/iter",
            "extra": "iterations: 533\ncpu: 1743142.589118206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1044714.5343083062,
            "unit": "ns/iter",
            "extra": "iterations: 889\ncpu: 1044630.8211473625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1704040.2032967245,
            "unit": "ns/iter",
            "extra": "iterations: 546\ncpu: 1703917.3992673908 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 3086.3241315024543,
            "unit": "ns/iter",
            "extra": "iterations: 226368\ncpu: 3086.2312694373554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 15034.745087078682,
            "unit": "ns/iter",
            "extra": "iterations: 46510\ncpu: 15034.237798322849 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 12578.362238645092,
            "unit": "ns/iter",
            "extra": "iterations: 55480\ncpu: 12577.278298485864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 12136.853372840467,
            "unit": "ns/iter",
            "extra": "iterations: 57711\ncpu: 12135.875309733065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 10402.192076474523,
            "unit": "ns/iter",
            "extra": "iterations: 67369\ncpu: 10401.471002983571 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 59105.73370435294,
            "unit": "ns/iter",
            "extra": "iterations: 11859\ncpu: 59103.617505691705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 140280.03254972448,
            "unit": "ns/iter",
            "extra": "iterations: 4977\ncpu: 140279.42535664025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 36944.1124069842,
            "unit": "ns/iter",
            "extra": "iterations: 18949\ncpu: 36941.81223283532 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 36758.97807109684,
            "unit": "ns/iter",
            "extra": "iterations: 19016\ncpu: 36755.95814051349 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 36371.671505879865,
            "unit": "ns/iter",
            "extra": "iterations: 19218\ncpu: 36369.34124258468 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 73451.78877369742,
            "unit": "ns/iter",
            "extra": "iterations: 9549\ncpu: 73449.21981359305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 65441.051971154186,
            "unit": "ns/iter",
            "extra": "iterations: 10679\ncpu: 65434.84408652413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 19349.557205025783,
            "unit": "ns/iter",
            "extra": "iterations: 36308\ncpu: 19349.289412801587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 88918.2898348247,
            "unit": "ns/iter",
            "extra": "iterations: 7870\ncpu: 88915.56543837333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 71149.78420409924,
            "unit": "ns/iter",
            "extra": "iterations: 9838\ncpu: 71149.4714372837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 70307.13215504578,
            "unit": "ns/iter",
            "extra": "iterations: 9958\ncpu: 70306.83872263461 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 70808.37900283324,
            "unit": "ns/iter",
            "extra": "iterations: 9868\ncpu: 70805.57357113888 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 144596.2104286818,
            "unit": "ns/iter",
            "extra": "iterations: 4852\ncpu: 144589.38582027864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 604047.2100259654,
            "unit": "ns/iter",
            "extra": "iterations: 1157\ncpu: 604018.3232497822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 507068.4594790577,
            "unit": "ns/iter",
            "extra": "iterations: 1382\ncpu: 507040.9551374819 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 502728.4578226556,
            "unit": "ns/iter",
            "extra": "iterations: 1387\ncpu: 502726.53208363726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 504851.1675090348,
            "unit": "ns/iter",
            "extra": "iterations: 1385\ncpu: 504802.88808664115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 333428.8582338563,
            "unit": "ns/iter",
            "extra": "iterations: 2095\ncpu: 333411.2649164739 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 493025.0734981911,
            "unit": "ns/iter",
            "extra": "iterations: 1415\ncpu: 493006.431095411 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 18663.476084066777,
            "unit": "ns/iter",
            "extra": "iterations: 37590\ncpu: 18655.03325352473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 88647.8319210784,
            "unit": "ns/iter",
            "extra": "iterations: 7907\ncpu: 88645.04869103289 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 71249.99419433212,
            "unit": "ns/iter",
            "extra": "iterations: 9818\ncpu: 71249.03238948862 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 70065.81709881242,
            "unit": "ns/iter",
            "extra": "iterations: 9989\ncpu: 70065.50205225685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 71521.98056862224,
            "unit": "ns/iter",
            "extra": "iterations: 9778\ncpu: 71521.6710983842 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 142681.62423498795,
            "unit": "ns/iter",
            "extra": "iterations: 4902\ncpu: 142680.96695226285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 603341.8862069413,
            "unit": "ns/iter",
            "extra": "iterations: 1160\ncpu: 603325.603448272 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 507402.8256150099,
            "unit": "ns/iter",
            "extra": "iterations: 1382\ncpu: 507390.59334297455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 504477.4338394454,
            "unit": "ns/iter",
            "extra": "iterations: 1383\ncpu: 504475.63268256834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 504393.9294031975,
            "unit": "ns/iter",
            "extra": "iterations: 1374\ncpu: 504367.9767103365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 336240.09331411123,
            "unit": "ns/iter",
            "extra": "iterations: 2079\ncpu: 336238.6724386719 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 496935.3506033311,
            "unit": "ns/iter",
            "extra": "iterations: 1409\ncpu: 496910.29098652286 ns\nthreads: 1"
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
        "date": 1705575520023,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 7908.028168693071,
            "unit": "ns/iter",
            "extra": "iterations: 87757\ncpu: 7907.556092391492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 74619.9682136681,
            "unit": "ns/iter",
            "extra": "iterations: 11420\ncpu: 74619.14185639228 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 143066.77721394133,
            "unit": "ns/iter",
            "extra": "iterations: 6109\ncpu: 143062.1541987232 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 210032.30579115124,
            "unit": "ns/iter",
            "extra": "iterations: 4127\ncpu: 210028.13181487768 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 278908.462980906,
            "unit": "ns/iter",
            "extra": "iterations: 3093\ncpu: 278897.8984804397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 343618.4043148165,
            "unit": "ns/iter",
            "extra": "iterations: 2503\ncpu: 343605.7930483421 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 409648.1885014549,
            "unit": "ns/iter",
            "extra": "iterations: 2122\ncpu: 409618.3317624883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 476903.6836622937,
            "unit": "ns/iter",
            "extra": "iterations: 1824\ncpu: 476871.49122807046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 558393.2507817373,
            "unit": "ns/iter",
            "extra": "iterations: 1599\ncpu: 558335.8974358976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6071.090390730742,
            "unit": "ns/iter",
            "extra": "iterations: 115399\ncpu: 6070.71378434822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5134.504549025761,
            "unit": "ns/iter",
            "extra": "iterations: 136183\ncpu: 5134.019664715864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5078.202209438529,
            "unit": "ns/iter",
            "extra": "iterations: 137501\ncpu: 5077.787070639476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5117.611888828824,
            "unit": "ns/iter",
            "extra": "iterations: 136582\ncpu: 5117.544771639007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 9078.341225356384,
            "unit": "ns/iter",
            "extra": "iterations: 77251\ncpu: 9077.59381755576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 34314.894820450325,
            "unit": "ns/iter",
            "extra": "iterations: 23921\ncpu: 34312.72104009027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 146701.6235415218,
            "unit": "ns/iter",
            "extra": "iterations: 5828\ncpu: 146688.58956760453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 115690.95840085758,
            "unit": "ns/iter",
            "extra": "iterations: 7404\ncpu: 115684.42733657487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 112731.85073056095,
            "unit": "ns/iter",
            "extra": "iterations: 7597\ncpu: 112724.27273923933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 114590.56449023607,
            "unit": "ns/iter",
            "extra": "iterations: 7474\ncpu: 114582.75354562495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 264157.9804157882,
            "unit": "ns/iter",
            "extra": "iterations: 3319\ncpu: 264131.8168122928 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2293787.8817734946,
            "unit": "ns/iter",
            "extra": "iterations: 406\ncpu: 2293666.009852213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1861663.8577153813,
            "unit": "ns/iter",
            "extra": "iterations: 499\ncpu: 1861602.2044088216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1857293.2539998419,
            "unit": "ns/iter",
            "extra": "iterations: 500\ncpu: 1857255.000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1867947.7424547637,
            "unit": "ns/iter",
            "extra": "iterations: 497\ncpu: 1867880.2816901417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1107119.5399283832,
            "unit": "ns/iter",
            "extra": "iterations: 839\ncpu: 1107097.3778307494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1814952.830409178,
            "unit": "ns/iter",
            "extra": "iterations: 513\ncpu: 1814888.304093562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 7468566.349999718,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7468178.999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 4134604.314159248,
            "unit": "ns/iter",
            "extra": "iterations: 226\ncpu: 4134270.796460173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 9131581.674999248,
            "unit": "ns/iter",
            "extra": "iterations: 120\ncpu: 9131022.499999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 33289.62575975375,
            "unit": "ns/iter",
            "extra": "iterations: 25008\ncpu: 33287.811900191875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 144762.41919107788,
            "unit": "ns/iter",
            "extra": "iterations: 5909\ncpu: 144751.81925875816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 115806.8625573246,
            "unit": "ns/iter",
            "extra": "iterations: 7414\ncpu: 115798.48934448317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 114969.79507203285,
            "unit": "ns/iter",
            "extra": "iterations: 7427\ncpu: 114961.58610475327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 118026.76197687138,
            "unit": "ns/iter",
            "extra": "iterations: 7264\ncpu: 118015.69383259851 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 263711.4828002456,
            "unit": "ns/iter",
            "extra": "iterations: 3314\ncpu: 263688.2920941461 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2303651.382133875,
            "unit": "ns/iter",
            "extra": "iterations: 403\ncpu: 2303534.491315139 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1883226.0020242017,
            "unit": "ns/iter",
            "extra": "iterations: 494\ncpu: 1883100.2024291581 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1870564.6807228252,
            "unit": "ns/iter",
            "extra": "iterations: 498\ncpu: 1870440.9638554277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1866709.9676767606,
            "unit": "ns/iter",
            "extra": "iterations: 495\ncpu: 1866542.82828283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1105739.2673030752,
            "unit": "ns/iter",
            "extra": "iterations: 838\ncpu: 1105678.5202863961 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1822454.929687467,
            "unit": "ns/iter",
            "extra": "iterations: 512\ncpu: 1822397.4609374998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 7484309.88999985,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7484135.000000051 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 4360433.555555582,
            "unit": "ns/iter",
            "extra": "iterations: 216\ncpu: 4360039.814814829 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 33485.09539567644,
            "unit": "ns/iter",
            "extra": "iterations: 24477\ncpu: 33483.09433345583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 144393.061768198,
            "unit": "ns/iter",
            "extra": "iterations: 5893\ncpu: 144383.69251654416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 116027.10866331928,
            "unit": "ns/iter",
            "extra": "iterations: 7399\ncpu: 116020.74604676319 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 113758.56621123441,
            "unit": "ns/iter",
            "extra": "iterations: 7612\ncpu: 113749.99999999993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 116546.14329800026,
            "unit": "ns/iter",
            "extra": "iterations: 7453\ncpu: 116539.27277606347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 263636.35707819695,
            "unit": "ns/iter",
            "extra": "iterations: 3313\ncpu: 263616.51071536413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2282147.2916666497,
            "unit": "ns/iter",
            "extra": "iterations: 408\ncpu: 2282016.176470581 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1874393.9519038599,
            "unit": "ns/iter",
            "extra": "iterations: 499\ncpu: 1874220.240480952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1862597.371257493,
            "unit": "ns/iter",
            "extra": "iterations: 501\ncpu: 1862481.2375249576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1870057.7515028545,
            "unit": "ns/iter",
            "extra": "iterations: 499\ncpu: 1869921.442885776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1104171.9290779897,
            "unit": "ns/iter",
            "extra": "iterations: 846\ncpu: 1104101.0638297868 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1806676.3650486148,
            "unit": "ns/iter",
            "extra": "iterations: 515\ncpu: 1806572.4271844637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 3064.1714078715245,
            "unit": "ns/iter",
            "extra": "iterations: 229126\ncpu: 3063.9752799769744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 16970.686010138586,
            "unit": "ns/iter",
            "extra": "iterations: 41237\ncpu: 16969.62436646712 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 13273.516894894468,
            "unit": "ns/iter",
            "extra": "iterations: 54040\ncpu: 13272.603626942935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 12574.20189563229,
            "unit": "ns/iter",
            "extra": "iterations: 55707\ncpu: 12573.252912560258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 10646.15400176415,
            "unit": "ns/iter",
            "extra": "iterations: 65746\ncpu: 10645.494782952554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 60871.66214335291,
            "unit": "ns/iter",
            "extra": "iterations: 11496\ncpu: 60869.171885873046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 142597.52894415671,
            "unit": "ns/iter",
            "extra": "iterations: 4906\ncpu: 142589.78801467575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 38320.72740716237,
            "unit": "ns/iter",
            "extra": "iterations: 18258\ncpu: 38318.86296418007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 38175.37944750561,
            "unit": "ns/iter",
            "extra": "iterations: 18353\ncpu: 38174.59815833903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 38427.55404737047,
            "unit": "ns/iter",
            "extra": "iterations: 18197\ncpu: 38426.048249711675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 76958.54883005346,
            "unit": "ns/iter",
            "extra": "iterations: 9103\ncpu: 76956.22322311418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 68766.94552414064,
            "unit": "ns/iter",
            "extra": "iterations: 10188\ncpu: 68763.88888888966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 19058.592202632684,
            "unit": "ns/iter",
            "extra": "iterations: 36756\ncpu: 19057.851779301134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 93574.51730589407,
            "unit": "ns/iter",
            "extra": "iterations: 7483\ncpu: 93572.49766136601 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 75346.43704978048,
            "unit": "ns/iter",
            "extra": "iterations: 9301\ncpu: 75343.09214062957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 74839.10801282883,
            "unit": "ns/iter",
            "extra": "iterations: 9360\ncpu: 74836.51709401791 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 75989.87770175669,
            "unit": "ns/iter",
            "extra": "iterations: 9207\ncpu: 75987.54208754207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 144848.20087154198,
            "unit": "ns/iter",
            "extra": "iterations: 4819\ncpu: 144843.7642664446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 636272.4922657105,
            "unit": "ns/iter",
            "extra": "iterations: 1099\ncpu: 636259.3266606086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 538064.9385088215,
            "unit": "ns/iter",
            "extra": "iterations: 1301\ncpu: 538040.0461183767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 534402.0511840476,
            "unit": "ns/iter",
            "extra": "iterations: 1309\ncpu: 534383.6516424835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 536382.54977031,
            "unit": "ns/iter",
            "extra": "iterations: 1306\ncpu: 536365.9264931071 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 344197.31203932903,
            "unit": "ns/iter",
            "extra": "iterations: 2035\ncpu: 344189.77886977664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 522389.2920089278,
            "unit": "ns/iter",
            "extra": "iterations: 1339\ncpu: 522382.59895444475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 19420.547450108552,
            "unit": "ns/iter",
            "extra": "iterations: 36080\ncpu: 19419.78381374751 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 94285.89120215103,
            "unit": "ns/iter",
            "extra": "iterations: 7445\ncpu: 94283.06245802627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 74903.14224644435,
            "unit": "ns/iter",
            "extra": "iterations: 9357\ncpu: 74899.51907662817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 75084.20281448099,
            "unit": "ns/iter",
            "extra": "iterations: 9309\ncpu: 75082.5545171338 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 75672.39367102893,
            "unit": "ns/iter",
            "extra": "iterations: 9259\ncpu: 75671.46560103794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 144485.01665981417,
            "unit": "ns/iter",
            "extra": "iterations: 4862\ncpu: 144476.03866721297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 636081.906764239,
            "unit": "ns/iter",
            "extra": "iterations: 1094\ncpu: 636056.032906766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 536064.8168582873,
            "unit": "ns/iter",
            "extra": "iterations: 1305\ncpu: 536041.7624521062 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 534307.0809160317,
            "unit": "ns/iter",
            "extra": "iterations: 1310\ncpu: 534295.2671755726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 534837.8137930477,
            "unit": "ns/iter",
            "extra": "iterations: 1305\ncpu: 534830.9578544064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 344176.6211149288,
            "unit": "ns/iter",
            "extra": "iterations: 2027\ncpu: 344162.8515046866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 521620.64232481905,
            "unit": "ns/iter",
            "extra": "iterations: 1342\ncpu: 521604.24739196146 ns\nthreads: 1"
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
        "date": 1705773345074,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 7674.4806638928185,
            "unit": "ns/iter",
            "extra": "iterations: 91099\ncpu: 7673.966783389501 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 75319.04425561779,
            "unit": "ns/iter",
            "extra": "iterations: 11298\ncpu: 75315.37440254912 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 144559.41633663865,
            "unit": "ns/iter",
            "extra": "iterations: 6060\ncpu: 144555.0330033003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 212919.47217453513,
            "unit": "ns/iter",
            "extra": "iterations: 4079\ncpu: 212911.62049521948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 282385.383006528,
            "unit": "ns/iter",
            "extra": "iterations: 3060\ncpu: 282375.22875817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 350824.38744938915,
            "unit": "ns/iter",
            "extra": "iterations: 2470\ncpu: 350807.28744939284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 427030.06919747323,
            "unit": "ns/iter",
            "extra": "iterations: 2081\ncpu: 427028.78423834714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 488319.97313934134,
            "unit": "ns/iter",
            "extra": "iterations: 1787\ncpu: 488314.54952434223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 556545.8226632933,
            "unit": "ns/iter",
            "extra": "iterations: 1562\ncpu: 556531.9462227907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6017.423984785091,
            "unit": "ns/iter",
            "extra": "iterations: 116207\ncpu: 6017.306186374315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5047.4340818908595,
            "unit": "ns/iter",
            "extra": "iterations: 139112\ncpu: 5047.314394157214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5051.32375888632,
            "unit": "ns/iter",
            "extra": "iterations: 138424\ncpu: 5051.354533895862 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5022.189181641676,
            "unit": "ns/iter",
            "extra": "iterations: 139670\ncpu: 5022.16152359132 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 8899.816515865421,
            "unit": "ns/iter",
            "extra": "iterations: 78470\ncpu: 8899.612590799028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 31779.188162475835,
            "unit": "ns/iter",
            "extra": "iterations: 25850\ncpu: 31779.141199226284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 132449.0910510829,
            "unit": "ns/iter",
            "extra": "iterations: 6403\ncpu: 132442.0427924411 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 106637.60428607662,
            "unit": "ns/iter",
            "extra": "iterations: 8026\ncpu: 106632.12060802405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 110624.6757416311,
            "unit": "ns/iter",
            "extra": "iterations: 7787\ncpu: 110619.80223449341 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 107786.09340036739,
            "unit": "ns/iter",
            "extra": "iterations: 7955\ncpu: 107781.86046511628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 257823.6660813808,
            "unit": "ns/iter",
            "extra": "iterations: 3417\ncpu: 257810.06731050613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2327690.7035174007,
            "unit": "ns/iter",
            "extra": "iterations: 398\ncpu: 2327565.829145725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1879417.7631577794,
            "unit": "ns/iter",
            "extra": "iterations: 494\ncpu: 1879274.4939271302 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1897959.9715446676,
            "unit": "ns/iter",
            "extra": "iterations: 492\ncpu: 1897901.829268287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1887799.1014197278,
            "unit": "ns/iter",
            "extra": "iterations: 493\ncpu: 1887726.3691683572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1085096.5444964473,
            "unit": "ns/iter",
            "extra": "iterations: 854\ncpu: 1085060.7728337236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1843822.9584981862,
            "unit": "ns/iter",
            "extra": "iterations: 506\ncpu: 1843749.8023715417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 7334140.200000547,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7333768.0000000205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 4179203.5450452496,
            "unit": "ns/iter",
            "extra": "iterations: 222\ncpu: 4179009.9099099045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 9196055.218487399,
            "unit": "ns/iter",
            "extra": "iterations: 119\ncpu: 9195482.35294119 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 31724.077199904932,
            "unit": "ns/iter",
            "extra": "iterations: 25842\ncpu: 31722.48664964009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 135340.82481060372,
            "unit": "ns/iter",
            "extra": "iterations: 6336\ncpu: 135332.591540404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 107109.48378209109,
            "unit": "ns/iter",
            "extra": "iterations: 7985\ncpu: 107105.91108328065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 113669.6716457363,
            "unit": "ns/iter",
            "extra": "iterations: 7565\ncpu: 113664.19035029785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 111709.6790236273,
            "unit": "ns/iter",
            "extra": "iterations: 7661\ncpu: 111705.86085367455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 251959.86901985185,
            "unit": "ns/iter",
            "extra": "iterations: 3428\ncpu: 251947.54959159874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2332761.6683416604,
            "unit": "ns/iter",
            "extra": "iterations: 398\ncpu: 2332699.4974874402 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1898745.2707889234,
            "unit": "ns/iter",
            "extra": "iterations: 469\ncpu: 1898642.0042644034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1895883.1626016158,
            "unit": "ns/iter",
            "extra": "iterations: 492\ncpu: 1895818.292682936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1896671.9452333087,
            "unit": "ns/iter",
            "extra": "iterations: 493\ncpu: 1896600.4056795102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1076031.4669757725,
            "unit": "ns/iter",
            "extra": "iterations: 863\ncpu: 1075975.4345307136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1839870.2781064142,
            "unit": "ns/iter",
            "extra": "iterations: 507\ncpu: 1839772.5838264297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 7436927.900000683,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7436567.000000025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 4134452.504424986,
            "unit": "ns/iter",
            "extra": "iterations: 226\ncpu: 4134272.1238938016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 32203.472976134708,
            "unit": "ns/iter",
            "extra": "iterations: 25644\ncpu: 32203.115738574215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 132365.8923718345,
            "unit": "ns/iter",
            "extra": "iterations: 6476\ncpu: 132360.28412600327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 106807.57633018935,
            "unit": "ns/iter",
            "extra": "iterations: 8044\ncpu: 106804.12729985082 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 110997.58963477353,
            "unit": "ns/iter",
            "extra": "iterations: 7776\ncpu: 110993.13271604918 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 110589.0320051473,
            "unit": "ns/iter",
            "extra": "iterations: 7780\ncpu: 110584.89717223686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 251571.56927972185,
            "unit": "ns/iter",
            "extra": "iterations: 3457\ncpu: 251558.11397165095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2320535.905236955,
            "unit": "ns/iter",
            "extra": "iterations: 401\ncpu: 2320456.109725687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1888977.9959350077,
            "unit": "ns/iter",
            "extra": "iterations: 492\ncpu: 1888915.4471544717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1886709.3919191053,
            "unit": "ns/iter",
            "extra": "iterations: 495\ncpu: 1886626.4646464712 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1892294.6409734313,
            "unit": "ns/iter",
            "extra": "iterations: 493\ncpu: 1892208.7221095322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1071392.6100917393,
            "unit": "ns/iter",
            "extra": "iterations: 872\ncpu: 1071347.2477064296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1836370.292730925,
            "unit": "ns/iter",
            "extra": "iterations: 509\ncpu: 1836322.7897838994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 3076.6383062831474,
            "unit": "ns/iter",
            "extra": "iterations: 227665\ncpu: 3076.4491687347618 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 16112.558091000468,
            "unit": "ns/iter",
            "extra": "iterations: 43604\ncpu: 16111.813136409512 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 12674.023062696704,
            "unit": "ns/iter",
            "extra": "iterations: 55154\ncpu: 12673.396308517944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 12213.946832087177,
            "unit": "ns/iter",
            "extra": "iterations: 57309\ncpu: 12213.70290879263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 10412.359306392485,
            "unit": "ns/iter",
            "extra": "iterations: 67185\ncpu: 10412.206593733783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 59221.58508572318,
            "unit": "ns/iter",
            "extra": "iterations: 11841\ncpu: 59218.17414069755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 143656.32110656833,
            "unit": "ns/iter",
            "extra": "iterations: 4880\ncpu: 143649.87704918007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 37937.26844983759,
            "unit": "ns/iter",
            "extra": "iterations: 18469\ncpu: 37935.3294710057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 37989.26213592184,
            "unit": "ns/iter",
            "extra": "iterations: 18437\ncpu: 37987.99153875319 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 37787.02615933845,
            "unit": "ns/iter",
            "extra": "iterations: 18502\ncpu: 37786.68792562943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 75629.268358529,
            "unit": "ns/iter",
            "extra": "iterations: 9260\ncpu: 75626.96544276472 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 68215.35980898865,
            "unit": "ns/iter",
            "extra": "iterations: 10261\ncpu: 68211.95789884069 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 19200.943631880335,
            "unit": "ns/iter",
            "extra": "iterations: 36510\ncpu: 19200.564228978325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 95517.85613079013,
            "unit": "ns/iter",
            "extra": "iterations: 7340\ncpu: 95516.44414169058 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 76321.61478727314,
            "unit": "ns/iter",
            "extra": "iterations: 9143\ncpu: 76320.15749753929 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 74631.3348266752,
            "unit": "ns/iter",
            "extra": "iterations: 9375\ncpu: 74628.01066666695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 75670.51455369084,
            "unit": "ns/iter",
            "extra": "iterations: 9276\ncpu: 75665.16817593876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 142237.27839870748,
            "unit": "ns/iter",
            "extra": "iterations: 4921\ncpu: 142232.98110140188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 651681.1923436162,
            "unit": "ns/iter",
            "extra": "iterations: 1071\ncpu: 651677.9645191347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 548654.4067662932,
            "unit": "ns/iter",
            "extra": "iterations: 1271\ncpu: 548641.7781274574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 543930.1767440988,
            "unit": "ns/iter",
            "extra": "iterations: 1290\ncpu: 543911.9379844972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 547410.5485133161,
            "unit": "ns/iter",
            "extra": "iterations: 1278\ncpu: 547377.2300469492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 345767.94669297663,
            "unit": "ns/iter",
            "extra": "iterations: 2026\ncpu: 345751.3326752218 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 529617.6666666436,
            "unit": "ns/iter",
            "extra": "iterations: 1320\ncpu: 529593.1818181891 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 19076.47240750152,
            "unit": "ns/iter",
            "extra": "iterations: 36731\ncpu: 19075.647273420345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 95152.62248503709,
            "unit": "ns/iter",
            "extra": "iterations: 7356\ncpu: 95151.22349102891 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 75752.68134376917,
            "unit": "ns/iter",
            "extra": "iterations: 9198\ncpu: 75748.43444226857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 74393.2812433651,
            "unit": "ns/iter",
            "extra": "iterations: 9426\ncpu: 74389.93210269482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 75317.62879930821,
            "unit": "ns/iter",
            "extra": "iterations: 9278\ncpu: 75312.35179995786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 141830.45353311658,
            "unit": "ns/iter",
            "extra": "iterations: 4939\ncpu: 141826.03765944505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 650858.8939534602,
            "unit": "ns/iter",
            "extra": "iterations: 1075\ncpu: 650843.7209302344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 545766.1416207501,
            "unit": "ns/iter",
            "extra": "iterations: 1271\ncpu: 545737.7655389417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 539627.1393379444,
            "unit": "ns/iter",
            "extra": "iterations: 1299\ncpu: 539609.1608929925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 546014.7082683303,
            "unit": "ns/iter",
            "extra": "iterations: 1282\ncpu: 545989.8595943892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 346846.4460856389,
            "unit": "ns/iter",
            "extra": "iterations: 2031\ncpu: 346835.0566223575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 531934.0499999663,
            "unit": "ns/iter",
            "extra": "iterations: 1320\ncpu: 531932.1212121272 ns\nthreads: 1"
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
        "date": 1705774767033,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 7757.5490815926905,
            "unit": "ns/iter",
            "extra": "iterations: 90156\ncpu: 7757.323971782245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 72758.60883602324,
            "unit": "ns/iter",
            "extra": "iterations: 11770\ncpu: 72757.3831775701 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 139430.92124980167,
            "unit": "ns/iter",
            "extra": "iterations: 6273\ncpu: 139430.35230352305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 206131.1451612827,
            "unit": "ns/iter",
            "extra": "iterations: 4216\ncpu: 206123.31593927892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 272807.83202016965,
            "unit": "ns/iter",
            "extra": "iterations: 3173\ncpu: 272793.9804601323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 336308.4424124745,
            "unit": "ns/iter",
            "extra": "iterations: 2570\ncpu: 336303.6186770428 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 402836.31518228876,
            "unit": "ns/iter",
            "extra": "iterations: 2167\ncpu: 402815.59760036913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 466401.02419356455,
            "unit": "ns/iter",
            "extra": "iterations: 1860\ncpu: 466380.75268817216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 536640.315051842,
            "unit": "ns/iter",
            "extra": "iterations: 1641\ncpu: 536642.7787934189 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 5979.844754552763,
            "unit": "ns/iter",
            "extra": "iterations: 117092\ncpu: 5979.812455163457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 4972.386744060447,
            "unit": "ns/iter",
            "extra": "iterations: 140752\ncpu: 4972.413180629761 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4960.959817053684,
            "unit": "ns/iter",
            "extra": "iterations: 140806\ncpu: 4960.571992670777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 4986.425596742208,
            "unit": "ns/iter",
            "extra": "iterations: 140471\ncpu: 4986.100333876738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 8769.755165121867,
            "unit": "ns/iter",
            "extra": "iterations: 79911\ncpu: 8769.313361114233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 32057.45419133966,
            "unit": "ns/iter",
            "extra": "iterations: 25672\ncpu: 32056.758335930288 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 133210.14755888906,
            "unit": "ns/iter",
            "extra": "iterations: 6411\ncpu: 133208.4230229294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 106020.03897715764,
            "unit": "ns/iter",
            "extra": "iterations: 8056\ncpu: 106016.0501489571 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 106104.49232103437,
            "unit": "ns/iter",
            "extra": "iterations: 8074\ncpu: 106099.82660391359 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 106434.26437929607,
            "unit": "ns/iter",
            "extra": "iterations: 8015\ncpu: 106429.35745477249 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 255869.82829469556,
            "unit": "ns/iter",
            "extra": "iterations: 3407\ncpu: 255855.06310537155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2237206.3894232716,
            "unit": "ns/iter",
            "extra": "iterations: 416\ncpu: 2237094.7115384596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1808554.0834952607,
            "unit": "ns/iter",
            "extra": "iterations: 515\ncpu: 1808435.1456310689 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1810943.5505835766,
            "unit": "ns/iter",
            "extra": "iterations: 514\ncpu: 1810847.4708171214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1823713.9352942333,
            "unit": "ns/iter",
            "extra": "iterations: 510\ncpu: 1823627.2549019612 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1061885.233142935,
            "unit": "ns/iter",
            "extra": "iterations: 875\ncpu: 1061846.9714285692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1759321.0492423614,
            "unit": "ns/iter",
            "extra": "iterations: 528\ncpu: 1759210.98484848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 7261539.200000015,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7259749.000000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 3990110.3063831464,
            "unit": "ns/iter",
            "extra": "iterations: 235\ncpu: 3989814.4680851065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 8935373.049586048,
            "unit": "ns/iter",
            "extra": "iterations: 121\ncpu: 8934920.661157034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 31341.1747302581,
            "unit": "ns/iter",
            "extra": "iterations: 26229\ncpu: 31341.133859468537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 133330.4924348743,
            "unit": "ns/iter",
            "extra": "iterations: 6411\ncpu: 133327.46841366377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 106598.55886436733,
            "unit": "ns/iter",
            "extra": "iterations: 7925\ncpu: 106596.97160883251 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 109421.20176561494,
            "unit": "ns/iter",
            "extra": "iterations: 7816\ncpu: 109419.8822927328 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 109650.50366088194,
            "unit": "ns/iter",
            "extra": "iterations: 7785\ncpu: 109648.68336544608 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 253763.4147909962,
            "unit": "ns/iter",
            "extra": "iterations: 3421\ncpu: 253749.25460391826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2244665.6559405276,
            "unit": "ns/iter",
            "extra": "iterations: 404\ncpu: 2244678.4653465343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1834892.8011810705,
            "unit": "ns/iter",
            "extra": "iterations: 508\ncpu: 1834873.2283464628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1817017.9941291187,
            "unit": "ns/iter",
            "extra": "iterations: 511\ncpu: 1816974.951076328 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1833607.8153243836,
            "unit": "ns/iter",
            "extra": "iterations: 509\ncpu: 1833586.4440078584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1064756.5779816697,
            "unit": "ns/iter",
            "extra": "iterations: 872\ncpu: 1064753.6697247683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1767486.1650852992,
            "unit": "ns/iter",
            "extra": "iterations: 527\ncpu: 1767455.7874762865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 7341037.649999862,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7340635.000000048 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 4127230.126637266,
            "unit": "ns/iter",
            "extra": "iterations: 229\ncpu: 4126703.9301310056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 31662.021148734864,
            "unit": "ns/iter",
            "extra": "iterations: 25959\ncpu: 31660.63792904183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 133371.98254636498,
            "unit": "ns/iter",
            "extra": "iterations: 6417\ncpu: 133366.38616175804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 107050.80545775472,
            "unit": "ns/iter",
            "extra": "iterations: 7952\ncpu: 107043.52364185148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 108571.71614385048,
            "unit": "ns/iter",
            "extra": "iterations: 7842\ncpu: 108567.63580719205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 109026.89928332942,
            "unit": "ns/iter",
            "extra": "iterations: 7814\ncpu: 109021.47427693872 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 252824.21399418527,
            "unit": "ns/iter",
            "extra": "iterations: 3430\ncpu: 252816.7930029163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2221074.352380962,
            "unit": "ns/iter",
            "extra": "iterations: 420\ncpu: 2220902.3809523894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1802617.672480476,
            "unit": "ns/iter",
            "extra": "iterations: 516\ncpu: 1802535.8527131702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1793752.2027025975,
            "unit": "ns/iter",
            "extra": "iterations: 518\ncpu: 1793661.003861 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1825014.4078429984,
            "unit": "ns/iter",
            "extra": "iterations: 510\ncpu: 1824900.5882352812 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1065134.4132419152,
            "unit": "ns/iter",
            "extra": "iterations: 876\ncpu: 1065063.4703196324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1756260.1207547267,
            "unit": "ns/iter",
            "extra": "iterations: 530\ncpu: 1756156.6037735962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 3062.911079585683,
            "unit": "ns/iter",
            "extra": "iterations: 228384\ncpu: 3062.8861916771884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 16069.896743118501,
            "unit": "ns/iter",
            "extra": "iterations: 43600\ncpu: 16068.850917431084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 12413.737965444703,
            "unit": "ns/iter",
            "extra": "iterations: 56317\ncpu: 12413.47905605762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 12930.87843532708,
            "unit": "ns/iter",
            "extra": "iterations: 55526\ncpu: 12930.781976011318 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 10042.021920203731,
            "unit": "ns/iter",
            "extra": "iterations: 69753\ncpu: 10041.94658294269 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 59556.74398026753,
            "unit": "ns/iter",
            "extra": "iterations: 11753\ncpu: 59555.62835020856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 143864.94743350256,
            "unit": "ns/iter",
            "extra": "iterations: 4851\ncpu: 143863.7188208609 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 37437.982611951724,
            "unit": "ns/iter",
            "extra": "iterations: 18691\ncpu: 37438.168102295385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 37449.20964809344,
            "unit": "ns/iter",
            "extra": "iterations: 18698\ncpu: 37447.042464434824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 37694.80643945227,
            "unit": "ns/iter",
            "extra": "iterations: 18573\ncpu: 37692.715231788185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 74893.2757404001,
            "unit": "ns/iter",
            "extra": "iterations: 9353\ncpu: 74891.63904629562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 66843.90697896335,
            "unit": "ns/iter",
            "extra": "iterations: 10460\ncpu: 66841.69216061228 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 18629.325781890806,
            "unit": "ns/iter",
            "extra": "iterations: 37697\ncpu: 18627.98631190778 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 91014.26432291207,
            "unit": "ns/iter",
            "extra": "iterations: 7680\ncpu: 91011.18489583208 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 73014.84286755997,
            "unit": "ns/iter",
            "extra": "iterations: 9597\ncpu: 73015.32770657563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 72722.41661474874,
            "unit": "ns/iter",
            "extra": "iterations: 9630\ncpu: 72720.21806853563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 72993.27928969196,
            "unit": "ns/iter",
            "extra": "iterations: 9517\ncpu: 72993.04402647907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 141716.08140947856,
            "unit": "ns/iter",
            "extra": "iterations: 4938\ncpu: 141713.4264884555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 617043.5622241886,
            "unit": "ns/iter",
            "extra": "iterations: 1133\ncpu: 617027.4492497806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 515844.63495571906,
            "unit": "ns/iter",
            "extra": "iterations: 1356\ncpu: 515847.78761062445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 514437.47205882694,
            "unit": "ns/iter",
            "extra": "iterations: 1360\ncpu: 514403.6764705905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 518736.3377778335,
            "unit": "ns/iter",
            "extra": "iterations: 1350\ncpu: 518701.40740741516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 336017.0330935455,
            "unit": "ns/iter",
            "extra": "iterations: 2085\ncpu: 336004.5563549162 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 504819.26421884535,
            "unit": "ns/iter",
            "extra": "iterations: 1389\ncpu: 504776.7458603308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 18842.74863505617,
            "unit": "ns/iter",
            "extra": "iterations: 37181\ncpu: 18841.437831150182 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 88989.33456162435,
            "unit": "ns/iter",
            "extra": "iterations: 7870\ncpu: 88980.03811944113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 72047.53711700496,
            "unit": "ns/iter",
            "extra": "iterations: 9726\ncpu: 72046.18548221301 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 72551.85657785358,
            "unit": "ns/iter",
            "extra": "iterations: 9608\ncpu: 72550.36427976722 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 73427.82374515622,
            "unit": "ns/iter",
            "extra": "iterations: 9543\ncpu: 73423.94425233119 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 140717.93429778732,
            "unit": "ns/iter",
            "extra": "iterations: 4977\ncpu: 140707.19308820617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 615780.2197705174,
            "unit": "ns/iter",
            "extra": "iterations: 1133\ncpu: 615719.5939982292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 512870.3937179935,
            "unit": "ns/iter",
            "extra": "iterations: 1369\ncpu: 512850.9861212496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 516251.56291389884,
            "unit": "ns/iter",
            "extra": "iterations: 1359\ncpu: 516226.342899192 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 517234.91056909406,
            "unit": "ns/iter",
            "extra": "iterations: 1353\ncpu: 517197.8566149245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 334860.95167465997,
            "unit": "ns/iter",
            "extra": "iterations: 2090\ncpu: 334831.483253588 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 505021.8702235043,
            "unit": "ns/iter",
            "extra": "iterations: 1387\ncpu: 504966.6906993503 ns\nthreads: 1"
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
        "date": 1705778353646,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 7623.25698835556,
            "unit": "ns/iter",
            "extra": "iterations: 91724\ncpu: 7622.608041515853 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 72744.8161985772,
            "unit": "ns/iter",
            "extra": "iterations: 11643\ncpu: 72741.74181911879 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 138912.95753203702,
            "unit": "ns/iter",
            "extra": "iterations: 6240\ncpu: 138905.0480769231 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 203690.48687295208,
            "unit": "ns/iter",
            "extra": "iterations: 4266\ncpu: 203683.42709798398 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 267828.2636476401,
            "unit": "ns/iter",
            "extra": "iterations: 3224\ncpu: 267811.3213399502 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 326522.6533081343,
            "unit": "ns/iter",
            "extra": "iterations: 2645\ncpu: 326506.9943289227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 390500.62236194883,
            "unit": "ns/iter",
            "extra": "iterations: 2227\ncpu: 390472.5190839696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 462074.15119918546,
            "unit": "ns/iter",
            "extra": "iterations: 1918\ncpu: 462063.503649635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 516443.5011862307,
            "unit": "ns/iter",
            "extra": "iterations: 1686\ncpu: 516416.9632265712 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 5841.749798600075,
            "unit": "ns/iter",
            "extra": "iterations: 120407\ncpu: 5841.4718413381315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5070.775826031532,
            "unit": "ns/iter",
            "extra": "iterations: 142095\ncpu: 5070.500017593871 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4905.5657928870305,
            "unit": "ns/iter",
            "extra": "iterations: 142637\ncpu: 4905.152940681597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 4956.6887866195375,
            "unit": "ns/iter",
            "extra": "iterations: 141456\ncpu: 4956.622554009722 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 8761.47155636488,
            "unit": "ns/iter",
            "extra": "iterations: 80264\ncpu: 8760.677265025424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 33007.16845168096,
            "unit": "ns/iter",
            "extra": "iterations: 24743\ncpu: 33005.10447399255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 132445.70908525735,
            "unit": "ns/iter",
            "extra": "iterations: 6428\ncpu: 132441.75482265124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 106472.32615499936,
            "unit": "ns/iter",
            "extra": "iterations: 7987\ncpu: 106469.51295855767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 108472.92650418404,
            "unit": "ns/iter",
            "extra": "iterations: 7878\ncpu: 108468.3676059913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 107104.79943188044,
            "unit": "ns/iter",
            "extra": "iterations: 8097\ncpu: 107101.63023341994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 254478.42037847242,
            "unit": "ns/iter",
            "extra": "iterations: 3435\ncpu: 254468.50072780234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2099360.2159090973,
            "unit": "ns/iter",
            "extra": "iterations: 440\ncpu: 2099316.818181819 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1709493.850091367,
            "unit": "ns/iter",
            "extra": "iterations: 547\ncpu: 1709411.517367458 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1713199.3191883576,
            "unit": "ns/iter",
            "extra": "iterations: 542\ncpu: 1713179.335793358 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1718948.2799263585,
            "unit": "ns/iter",
            "extra": "iterations: 543\ncpu: 1718893.0018416173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1030366.0289855087,
            "unit": "ns/iter",
            "extra": "iterations: 897\ncpu: 1030330.1003344473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1666267.9427549108,
            "unit": "ns/iter",
            "extra": "iterations: 559\ncpu: 1666195.527728085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 7062582.940000083,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7062504.000000018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 3892064.7374998415,
            "unit": "ns/iter",
            "extra": "iterations: 240\ncpu: 3891917.9166666763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 8691297.255999416,
            "unit": "ns/iter",
            "extra": "iterations: 125\ncpu: 8690674.399999978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 34565.93145664572,
            "unit": "ns/iter",
            "extra": "iterations: 24014\ncpu: 34564.14175064548 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 133322.31113182576,
            "unit": "ns/iter",
            "extra": "iterations: 6441\ncpu: 133314.46980282507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 107324.38293850354,
            "unit": "ns/iter",
            "extra": "iterations: 7936\ncpu: 107319.82106854826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 109768.50971753214,
            "unit": "ns/iter",
            "extra": "iterations: 7718\ncpu: 109761.71287898412 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 111854.05913837363,
            "unit": "ns/iter",
            "extra": "iterations: 7660\ncpu: 111849.98694516982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 252180.27523201777,
            "unit": "ns/iter",
            "extra": "iterations: 3448\ncpu: 252164.29814385076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2103672.59772733,
            "unit": "ns/iter",
            "extra": "iterations: 440\ncpu: 2103593.4090909143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1726335.2875694917,
            "unit": "ns/iter",
            "extra": "iterations: 539\ncpu: 1726221.706864563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1705663.9069342534,
            "unit": "ns/iter",
            "extra": "iterations: 548\ncpu: 1705583.7591240872 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1720130.8794061497,
            "unit": "ns/iter",
            "extra": "iterations: 539\ncpu: 1720018.5528756953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1029966.5939598,
            "unit": "ns/iter",
            "extra": "iterations: 894\ncpu: 1029915.8836689052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1668562.724507979,
            "unit": "ns/iter",
            "extra": "iterations: 559\ncpu: 1668443.8282647578 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 7051984.08000001,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7051453.000000052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 4049982.442552875,
            "unit": "ns/iter",
            "extra": "iterations: 235\ncpu: 4049893.191489371 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 32586.958060393223,
            "unit": "ns/iter",
            "extra": "iterations: 25036\ncpu: 32586.20386643228 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 130913.72020247976,
            "unit": "ns/iter",
            "extra": "iterations: 6519\ncpu: 130909.587360025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 107561.38546504542,
            "unit": "ns/iter",
            "extra": "iterations: 7967\ncpu: 107558.20258566595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 109536.41036771577,
            "unit": "ns/iter",
            "extra": "iterations: 7832\ncpu: 109533.92492339146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 108962.0017827479,
            "unit": "ns/iter",
            "extra": "iterations: 7853\ncpu: 108958.52540430476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 253389.08841554384,
            "unit": "ns/iter",
            "extra": "iterations: 3427\ncpu: 253382.4044353661 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2096991.641891904,
            "unit": "ns/iter",
            "extra": "iterations: 444\ncpu: 2096925.2252252393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1720283.4621073722,
            "unit": "ns/iter",
            "extra": "iterations: 541\ncpu: 1720139.741219957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1712175.4440366018,
            "unit": "ns/iter",
            "extra": "iterations: 545\ncpu: 1712114.1284403678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1715102.33210324,
            "unit": "ns/iter",
            "extra": "iterations: 542\ncpu: 1715016.7896678958 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1027726.6718404026,
            "unit": "ns/iter",
            "extra": "iterations: 902\ncpu: 1027690.2439024426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1665743.0485610357,
            "unit": "ns/iter",
            "extra": "iterations: 556\ncpu: 1665667.62589927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 3163.8481582078325,
            "unit": "ns/iter",
            "extra": "iterations: 222745\ncpu: 3163.759455880056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 16154.316776940417,
            "unit": "ns/iter",
            "extra": "iterations: 43226\ncpu: 16153.474760560674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 12148.386905800657,
            "unit": "ns/iter",
            "extra": "iterations: 57262\ncpu: 12147.946282001983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 12569.812517532362,
            "unit": "ns/iter",
            "extra": "iterations: 57040\ncpu: 12569.48632538567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 10553.476435059676,
            "unit": "ns/iter",
            "extra": "iterations: 66391\ncpu: 10553.18491964264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 59675.15734355541,
            "unit": "ns/iter",
            "extra": "iterations: 11745\ncpu: 59671.76670923796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 138423.4338394689,
            "unit": "ns/iter",
            "extra": "iterations: 5071\ncpu: 138419.85801617018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 36563.69678767575,
            "unit": "ns/iter",
            "extra": "iterations: 19145\ncpu: 36562.46017236882 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 36354.20082031158,
            "unit": "ns/iter",
            "extra": "iterations: 19261\ncpu: 36352.977519340195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 36513.884493419886,
            "unit": "ns/iter",
            "extra": "iterations: 19237\ncpu: 36511.78458179554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 72797.31034842184,
            "unit": "ns/iter",
            "extra": "iterations: 9615\ncpu: 72794.75819032722 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 64501.39282428998,
            "unit": "ns/iter",
            "extra": "iterations: 10870\ncpu: 64499.990800368665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 18660.959370628865,
            "unit": "ns/iter",
            "extra": "iterations: 37879\ncpu: 18660.30518229109 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 87064.14299926373,
            "unit": "ns/iter",
            "extra": "iterations: 8042\ncpu: 87063.16836607883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 70391.4213962835,
            "unit": "ns/iter",
            "extra": "iterations: 9955\ncpu: 70387.48367654435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 68178.71876216619,
            "unit": "ns/iter",
            "extra": "iterations: 10276\ncpu: 68176.42078629871 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 69507.67353408024,
            "unit": "ns/iter",
            "extra": "iterations: 10096\ncpu: 69505.9330427905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 140891.11240700338,
            "unit": "ns/iter",
            "extra": "iterations: 4973\ncpu: 140888.51799718293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 588592.1927609702,
            "unit": "ns/iter",
            "extra": "iterations: 1188\ncpu: 588585.9427609404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 494646.259154943,
            "unit": "ns/iter",
            "extra": "iterations: 1420\ncpu: 494059.0140845087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 490419.7135854075,
            "unit": "ns/iter",
            "extra": "iterations: 1428\ncpu: 490393.067226891 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 493369.7695560241,
            "unit": "ns/iter",
            "extra": "iterations: 1419\ncpu: 493343.69274136395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 323981.5809302685,
            "unit": "ns/iter",
            "extra": "iterations: 2150\ncpu: 323947.44186046073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 481977.7706044237,
            "unit": "ns/iter",
            "extra": "iterations: 1456\ncpu: 481972.39010989765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 18517.397194771453,
            "unit": "ns/iter",
            "extra": "iterations: 37644\ncpu: 18516.7808946978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 86541.91937069851,
            "unit": "ns/iter",
            "extra": "iterations: 8136\ncpu: 86538.95034415045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 69131.02908123606,
            "unit": "ns/iter",
            "extra": "iterations: 10144\ncpu: 69129.11080441652 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 68991.06334485485,
            "unit": "ns/iter",
            "extra": "iterations: 10135\ncpu: 68989.55106067985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 69565.44904267606,
            "unit": "ns/iter",
            "extra": "iterations: 10028\ncpu: 69562.12604706835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 142239.69622833302,
            "unit": "ns/iter",
            "extra": "iterations: 4905\ncpu: 142228.9500509705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 586256.5121950612,
            "unit": "ns/iter",
            "extra": "iterations: 1189\ncpu: 586224.2220353254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 491864.01751925517,
            "unit": "ns/iter",
            "extra": "iterations: 1427\ncpu: 491823.4758233988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 490782.1044881169,
            "unit": "ns/iter",
            "extra": "iterations: 1426\ncpu: 490772.58064516645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 489077.8687719208,
            "unit": "ns/iter",
            "extra": "iterations: 1425\ncpu: 489060.70175438514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 325320.26406322955,
            "unit": "ns/iter",
            "extra": "iterations: 2151\ncpu: 325305.8577405861 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 482553.09166095906,
            "unit": "ns/iter",
            "extra": "iterations: 1451\ncpu: 482535.9751895247 ns\nthreads: 1"
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
        "date": 1705952884259,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 7688.536372411776,
            "unit": "ns/iter",
            "extra": "iterations: 91168\ncpu: 7687.885003510003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 72451.11577694345,
            "unit": "ns/iter",
            "extra": "iterations: 11764\ncpu: 72446.64229853792 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 139806.18860068804,
            "unit": "ns/iter",
            "extra": "iterations: 6246\ncpu: 139799.23150816522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 206142.53919237727,
            "unit": "ns/iter",
            "extra": "iterations: 4210\ncpu: 206128.36104513056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 272308.71311476885,
            "unit": "ns/iter",
            "extra": "iterations: 3172\ncpu: 272291.48802017653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 335146.62633877125,
            "unit": "ns/iter",
            "extra": "iterations: 2521\ncpu: 335131.4161047202 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 401093.40193816856,
            "unit": "ns/iter",
            "extra": "iterations: 2167\ncpu: 401077.06506691274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 467884.1651474645,
            "unit": "ns/iter",
            "extra": "iterations: 1865\ncpu: 467854.74530831125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 531408.1979229926,
            "unit": "ns/iter",
            "extra": "iterations: 1637\ncpu: 531365.2412950521 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 5978.218233983921,
            "unit": "ns/iter",
            "extra": "iterations: 116760\ncpu: 5977.933367591651 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 4961.915623692565,
            "unit": "ns/iter",
            "extra": "iterations: 141023\ncpu: 4961.64880905952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4951.111191274834,
            "unit": "ns/iter",
            "extra": "iterations: 141378\ncpu: 4950.906788892191 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 4953.286054152024,
            "unit": "ns/iter",
            "extra": "iterations: 141232\ncpu: 4953.061629092555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 8737.581769871302,
            "unit": "ns/iter",
            "extra": "iterations: 80164\ncpu: 8737.319744523722 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 31548.044517370738,
            "unit": "ns/iter",
            "extra": "iterations: 25900\ncpu: 31546.262548262563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 132356.66185599111,
            "unit": "ns/iter",
            "extra": "iterations: 6444\ncpu: 132354.01924270656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 106880.74411027822,
            "unit": "ns/iter",
            "extra": "iterations: 7980\ncpu: 106876.30325814553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 105442.58836578237,
            "unit": "ns/iter",
            "extra": "iterations: 8114\ncpu: 105440.12817352694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 108139.63106917278,
            "unit": "ns/iter",
            "extra": "iterations: 7950\ncpu: 108134.17610062871 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 261015.26040190613,
            "unit": "ns/iter",
            "extra": "iterations: 3533\ncpu: 261005.17973393723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2244856.3486682526,
            "unit": "ns/iter",
            "extra": "iterations: 413\ncpu: 2244786.440677969 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1809852.986407703,
            "unit": "ns/iter",
            "extra": "iterations: 515\ncpu: 1809753.5922330068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1802991.0990291894,
            "unit": "ns/iter",
            "extra": "iterations: 515\ncpu: 1802925.4368932012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1817756.6112185111,
            "unit": "ns/iter",
            "extra": "iterations: 517\ncpu: 1817674.8549323033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1081647.881118981,
            "unit": "ns/iter",
            "extra": "iterations: 858\ncpu: 1081608.2750582737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1764640.2708333936,
            "unit": "ns/iter",
            "extra": "iterations: 528\ncpu: 1764536.7424242417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 7276467.399999547,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7275673.000000005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 4059533.9567101556,
            "unit": "ns/iter",
            "extra": "iterations: 231\ncpu: 4059319.913419904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 8965194.926829312,
            "unit": "ns/iter",
            "extra": "iterations: 123\ncpu: 8964844.715447165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 31907.209693068486,
            "unit": "ns/iter",
            "extra": "iterations: 25771\ncpu: 31905.742889294135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 135432.99952860523,
            "unit": "ns/iter",
            "extra": "iterations: 6364\ncpu: 135425.48711502194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 107408.9235516386,
            "unit": "ns/iter",
            "extra": "iterations: 7940\ncpu: 107404.00503778357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 111012.77171086904,
            "unit": "ns/iter",
            "extra": "iterations: 7692\ncpu: 111009.56838273506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 112449.63246073171,
            "unit": "ns/iter",
            "extra": "iterations: 7640\ncpu: 112442.0680628269 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 245812.15871220478,
            "unit": "ns/iter",
            "extra": "iterations: 3541\ncpu: 245802.42869246003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2263240.021951366,
            "unit": "ns/iter",
            "extra": "iterations: 410\ncpu: 2263134.87804878 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1829731.8897638198,
            "unit": "ns/iter",
            "extra": "iterations: 508\ncpu: 1829633.4645669241 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1813869.9416342156,
            "unit": "ns/iter",
            "extra": "iterations: 514\ncpu: 1813723.1517509667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1815653.3664718098,
            "unit": "ns/iter",
            "extra": "iterations: 513\ncpu: 1815586.9395711375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1083952.0586165641,
            "unit": "ns/iter",
            "extra": "iterations: 853\ncpu: 1083910.550996481 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1775443.4571428474,
            "unit": "ns/iter",
            "extra": "iterations: 525\ncpu: 1775375.0476190418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 7350013.55999998,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7349674.000000021 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 4018090.703862208,
            "unit": "ns/iter",
            "extra": "iterations: 233\ncpu: 4017884.1201716936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 31782.931062446867,
            "unit": "ns/iter",
            "extra": "iterations: 25893\ncpu: 31781.75568686537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 133205.78714418653,
            "unit": "ns/iter",
            "extra": "iterations: 6394\ncpu: 133196.9502658748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 107408.98032581936,
            "unit": "ns/iter",
            "extra": "iterations: 7980\ncpu: 107405.03759398455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 108755.19069296707,
            "unit": "ns/iter",
            "extra": "iterations: 7908\ncpu: 108751.10015174506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 111039.58611725635,
            "unit": "ns/iter",
            "extra": "iterations: 7693\ncpu: 111038.684518394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 247570.00428204265,
            "unit": "ns/iter",
            "extra": "iterations: 3503\ncpu: 247557.23665429436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2243947.7668269295,
            "unit": "ns/iter",
            "extra": "iterations: 416\ncpu: 2243862.0192307774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1813257.7738791327,
            "unit": "ns/iter",
            "extra": "iterations: 513\ncpu: 1813150.4873294265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1806230.0467835933,
            "unit": "ns/iter",
            "extra": "iterations: 513\ncpu: 1806130.994152046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1812131.5438596702,
            "unit": "ns/iter",
            "extra": "iterations: 513\ncpu: 1811993.5672514522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1083174.3383897056,
            "unit": "ns/iter",
            "extra": "iterations: 857\ncpu: 1083133.1388564738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1765543.9204545182,
            "unit": "ns/iter",
            "extra": "iterations: 528\ncpu: 1765472.537878789 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 2994.122690785585,
            "unit": "ns/iter",
            "extra": "iterations: 233954\ncpu: 2993.995400805267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 15877.153671751492,
            "unit": "ns/iter",
            "extra": "iterations: 44107\ncpu: 15876.260004081061 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 12592.872479592832,
            "unit": "ns/iter",
            "extra": "iterations: 55497\ncpu: 12592.104077697928 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 11901.121796174879,
            "unit": "ns/iter",
            "extra": "iterations: 58992\ncpu: 11900.503458095951 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 10115.471808202854,
            "unit": "ns/iter",
            "extra": "iterations: 69240\ncpu: 10115.254188330413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 57996.108563834154,
            "unit": "ns/iter",
            "extra": "iterations: 12039\ncpu: 57992.590746739326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 144629.74762845755,
            "unit": "ns/iter",
            "extra": "iterations: 5060\ncpu: 144618.61660079047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 36982.705717602796,
            "unit": "ns/iter",
            "extra": "iterations: 18924\ncpu: 36981.12978228753 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 36614.84436287808,
            "unit": "ns/iter",
            "extra": "iterations: 19070\ncpu: 36614.54116413201 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 36844.018364554206,
            "unit": "ns/iter",
            "extra": "iterations: 19004\ncpu: 36843.03304567451 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 74476.45614221213,
            "unit": "ns/iter",
            "extra": "iterations: 9394\ncpu: 74471.8543751329 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 66348.61818009306,
            "unit": "ns/iter",
            "extra": "iterations: 10539\ncpu: 66345.70642375888 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 18751.63074365805,
            "unit": "ns/iter",
            "extra": "iterations: 37302\ncpu: 18750.635354672504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 90406.2669852662,
            "unit": "ns/iter",
            "extra": "iterations: 7742\ncpu: 90400.64582795143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 74063.57448602654,
            "unit": "ns/iter",
            "extra": "iterations: 9485\ncpu: 74060.93832367004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 72670.63997083373,
            "unit": "ns/iter",
            "extra": "iterations: 9602\ncpu: 72666.26744428164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 73961.95299324965,
            "unit": "ns/iter",
            "extra": "iterations: 9488\ncpu: 73958.84274873427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 140494.2970694498,
            "unit": "ns/iter",
            "extra": "iterations: 4982\ncpu: 140486.7723805691 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 616644.8711386466,
            "unit": "ns/iter",
            "extra": "iterations: 1133\ncpu: 616596.5578111165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 515207.95066275593,
            "unit": "ns/iter",
            "extra": "iterations: 1358\ncpu: 515196.7599410883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 511833.5813782341,
            "unit": "ns/iter",
            "extra": "iterations: 1364\ncpu: 511800.5865102688 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 518872.4513733804,
            "unit": "ns/iter",
            "extra": "iterations: 1347\ncpu: 518850.25983667385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 335609.65962555597,
            "unit": "ns/iter",
            "extra": "iterations: 2083\ncpu: 335591.98271723953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 504232.81713465834,
            "unit": "ns/iter",
            "extra": "iterations: 1389\ncpu: 504209.93520518404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 18953.014677211464,
            "unit": "ns/iter",
            "extra": "iterations: 36928\ncpu: 18951.89558058943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 90668.13297115415,
            "unit": "ns/iter",
            "extra": "iterations: 7731\ncpu: 90667.35221834238 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 76578.36051725745,
            "unit": "ns/iter",
            "extra": "iterations: 9589\ncpu: 76575.33632287013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 72770.624960961,
            "unit": "ns/iter",
            "extra": "iterations: 9607\ncpu: 72767.05527219658 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 73479.77719665642,
            "unit": "ns/iter",
            "extra": "iterations: 9560\ncpu: 73476.67364016623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 138116.70862103984,
            "unit": "ns/iter",
            "extra": "iterations: 5069\ncpu: 138105.16867232198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 614337.6268657298,
            "unit": "ns/iter",
            "extra": "iterations: 1139\ncpu: 614319.0517998273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 513854.014749236,
            "unit": "ns/iter",
            "extra": "iterations: 1356\ncpu: 513830.82595869567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 510787.571428543,
            "unit": "ns/iter",
            "extra": "iterations: 1372\ncpu: 510758.96501457464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 511992.84125821694,
            "unit": "ns/iter",
            "extra": "iterations: 1367\ncpu: 511975.201170445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 333845.7990453088,
            "unit": "ns/iter",
            "extra": "iterations: 2095\ncpu: 333816.08591885323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 502306.500716327,
            "unit": "ns/iter",
            "extra": "iterations: 1396\ncpu: 502302.2922636156 ns\nthreads: 1"
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
        "date": 1705954930256,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 7967.432083737047,
            "unit": "ns/iter",
            "extra": "iterations: 87895\ncpu: 7967.341714545765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 74496.72435841252,
            "unit": "ns/iter",
            "extra": "iterations: 11417\ncpu: 74495.04248051152 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 142937.4685816842,
            "unit": "ns/iter",
            "extra": "iterations: 6127\ncpu: 142934.42141341604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 209463.76930525983,
            "unit": "ns/iter",
            "extra": "iterations: 4131\ncpu: 209460.34858387787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 277460.8264656672,
            "unit": "ns/iter",
            "extra": "iterations: 2985\ncpu: 277457.28643216094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 343462.8672741733,
            "unit": "ns/iter",
            "extra": "iterations: 2524\ncpu: 343446.87004754343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 409422.2387005641,
            "unit": "ns/iter",
            "extra": "iterations: 2124\ncpu: 409411.20527306956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 475381.01749588916,
            "unit": "ns/iter",
            "extra": "iterations: 1829\ncpu: 475358.50191361434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 541957.4813432735,
            "unit": "ns/iter",
            "extra": "iterations: 1608\ncpu: 541925.9950248762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6004.9098729710495,
            "unit": "ns/iter",
            "extra": "iterations: 116824\ncpu: 6004.488803670474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 4956.889726566226,
            "unit": "ns/iter",
            "extra": "iterations: 141131\ncpu: 4956.657290035502 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4965.710322896554,
            "unit": "ns/iter",
            "extra": "iterations: 140881\ncpu: 4965.639085469292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5005.696986623218,
            "unit": "ns/iter",
            "extra": "iterations: 139644\ncpu: 5005.413766434648 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 8802.400486017168,
            "unit": "ns/iter",
            "extra": "iterations: 79421\ncpu: 8802.119086891373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 31759.7762979636,
            "unit": "ns/iter",
            "extra": "iterations: 25829\ncpu: 31758.45754771773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 130119.12028589282,
            "unit": "ns/iter",
            "extra": "iterations: 6576\ncpu: 130113.29075425761 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 106583.95706283853,
            "unit": "ns/iter",
            "extra": "iterations: 8035\ncpu: 106577.0130678285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 107499.46147121297,
            "unit": "ns/iter",
            "extra": "iterations: 8007\ncpu: 107495.06681653559 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 104423.59167798332,
            "unit": "ns/iter",
            "extra": "iterations: 8099\ncpu: 104418.43437461439 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 261465.51779252547,
            "unit": "ns/iter",
            "extra": "iterations: 3316\ncpu: 261456.09167671905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2249437.714975987,
            "unit": "ns/iter",
            "extra": "iterations: 414\ncpu: 2249286.7149758507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1811711.1910330271,
            "unit": "ns/iter",
            "extra": "iterations: 513\ncpu: 1811650.6822612085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1805294.5408558275,
            "unit": "ns/iter",
            "extra": "iterations: 514\ncpu: 1805211.4785992233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1829996.9643564536,
            "unit": "ns/iter",
            "extra": "iterations: 505\ncpu: 1829916.4356435675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1092297.6938301313,
            "unit": "ns/iter",
            "extra": "iterations: 859\ncpu: 1092207.1012805586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1770676.0191204776,
            "unit": "ns/iter",
            "extra": "iterations: 523\ncpu: 1770670.9369024849 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 7398610.520000374,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7398138.9999999795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 4173751.8565018475,
            "unit": "ns/iter",
            "extra": "iterations: 223\ncpu: 4173647.533632294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 9115477.133333152,
            "unit": "ns/iter",
            "extra": "iterations: 120\ncpu: 9114915.833333341 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 32339.798346456737,
            "unit": "ns/iter",
            "extra": "iterations: 25400\ncpu: 32337.842519685088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 134474.51246667403,
            "unit": "ns/iter",
            "extra": "iterations: 6377\ncpu: 134469.4527207156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 107067.93463316829,
            "unit": "ns/iter",
            "extra": "iterations: 8001\ncpu: 107064.06699162629 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 109690.1847631234,
            "unit": "ns/iter",
            "extra": "iterations: 7810\ncpu: 109685.60819462263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 109707.49019861496,
            "unit": "ns/iter",
            "extra": "iterations: 7754\ncpu: 109704.8749032756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 260347.634466309,
            "unit": "ns/iter",
            "extra": "iterations: 3354\ncpu: 260336.4639236749 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2269610.9070904334,
            "unit": "ns/iter",
            "extra": "iterations: 409\ncpu: 2269530.8068459695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1829721.3732808128,
            "unit": "ns/iter",
            "extra": "iterations: 509\ncpu: 1829661.1001964626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1831809.5531495193,
            "unit": "ns/iter",
            "extra": "iterations: 508\ncpu: 1831769.0944881882 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1833296.0374754844,
            "unit": "ns/iter",
            "extra": "iterations: 507\ncpu: 1833250.6903353157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1095192.246737784,
            "unit": "ns/iter",
            "extra": "iterations: 843\ncpu: 1095136.1803084211 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1783089.7724666162,
            "unit": "ns/iter",
            "extra": "iterations: 523\ncpu: 1783021.223709365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 7417665.610000768,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7417477.999999988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 3986882.2820514077,
            "unit": "ns/iter",
            "extra": "iterations: 234\ncpu: 3986734.188034206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 31423.354818692904,
            "unit": "ns/iter",
            "extra": "iterations: 25785\ncpu: 31422.229978669704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 133991.70980210273,
            "unit": "ns/iter",
            "extra": "iterations: 6468\ncpu: 133988.86827458206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 107003.88906832147,
            "unit": "ns/iter",
            "extra": "iterations: 8050\ncpu: 107003.875776398 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 109340.09882620357,
            "unit": "ns/iter",
            "extra": "iterations: 7923\ncpu: 109339.26542976158 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 108534.04057459808,
            "unit": "ns/iter",
            "extra": "iterations: 7936\ncpu: 108532.16985887148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 261604.72610131136,
            "unit": "ns/iter",
            "extra": "iterations: 3337\ncpu: 261594.8157027272 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2258113.1016948274,
            "unit": "ns/iter",
            "extra": "iterations: 413\ncpu: 2258032.929782079 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1815265.4288498745,
            "unit": "ns/iter",
            "extra": "iterations: 513\ncpu: 1815224.951267052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1824999.8565815825,
            "unit": "ns/iter",
            "extra": "iterations: 509\ncpu: 1824926.9155206252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1839448.6992032076,
            "unit": "ns/iter",
            "extra": "iterations: 502\ncpu: 1839378.486055784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1083022.897076033,
            "unit": "ns/iter",
            "extra": "iterations: 855\ncpu: 1082971.1111111117 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1787389.5919541144,
            "unit": "ns/iter",
            "extra": "iterations: 522\ncpu: 1787283.1417624406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 3044.3709819408095,
            "unit": "ns/iter",
            "extra": "iterations: 229464\ncpu: 3044.31414078025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 15789.11081306575,
            "unit": "ns/iter",
            "extra": "iterations: 44363\ncpu: 15788.794716317692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 12095.191060776475,
            "unit": "ns/iter",
            "extra": "iterations: 57835\ncpu: 12094.781706579044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 12820.163156245255,
            "unit": "ns/iter",
            "extra": "iterations: 57448\ncpu: 12819.69085085647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 10358.324702020933,
            "unit": "ns/iter",
            "extra": "iterations: 67622\ncpu: 10357.976693975315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 61497.62804610443,
            "unit": "ns/iter",
            "extra": "iterations: 11367\ncpu: 61495.425354095285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 146050.47014615565,
            "unit": "ns/iter",
            "extra": "iterations: 4790\ncpu: 146049.10229645055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 37399.916880754325,
            "unit": "ns/iter",
            "extra": "iterations: 18684\ncpu: 37398.65125240851 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 37396.23788899618,
            "unit": "ns/iter",
            "extra": "iterations: 18702\ncpu: 37395.011228745316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 37620.257446464566,
            "unit": "ns/iter",
            "extra": "iterations: 18633\ncpu: 37619.910910750004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 75997.31715809065,
            "unit": "ns/iter",
            "extra": "iterations: 9191\ncpu: 75994.79926014664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 67493.36666988263,
            "unit": "ns/iter",
            "extra": "iterations: 10369\ncpu: 67490.41373324317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 19319.9791764624,
            "unit": "ns/iter",
            "extra": "iterations: 36161\ncpu: 19319.247255330385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 90666.37252362864,
            "unit": "ns/iter",
            "extra": "iterations: 7723\ncpu: 90663.5245370971 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 73946.90284810601,
            "unit": "ns/iter",
            "extra": "iterations: 9480\ncpu: 73946.82489451492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 73806.48297246055,
            "unit": "ns/iter",
            "extra": "iterations: 9514\ncpu: 73806.40109312591 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 75173.31040016808,
            "unit": "ns/iter",
            "extra": "iterations: 9346\ncpu: 75170.4365503956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 146545.71658985544,
            "unit": "ns/iter",
            "extra": "iterations: 4774\ncpu: 146535.12777544977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 630904.7542909088,
            "unit": "ns/iter",
            "extra": "iterations: 1107\ncpu: 630892.8635952916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 527684.4273889734,
            "unit": "ns/iter",
            "extra": "iterations: 1329\ncpu: 527668.021068475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 527940.8733986819,
            "unit": "ns/iter",
            "extra": "iterations: 1327\ncpu: 527910.0226073901 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 530447.1986353677,
            "unit": "ns/iter",
            "extra": "iterations: 1319\ncpu: 530426.611068988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 343110.1475489881,
            "unit": "ns/iter",
            "extra": "iterations: 2040\ncpu: 343084.75490196515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 516744.35424349306,
            "unit": "ns/iter",
            "extra": "iterations: 1355\ncpu: 516736.2361623642 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 19402.27574253376,
            "unit": "ns/iter",
            "extra": "iterations: 36059\ncpu: 19402.257411464405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 92787.18193855934,
            "unit": "ns/iter",
            "extra": "iterations: 7552\ncpu: 92782.0842161005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 74343.15246494835,
            "unit": "ns/iter",
            "extra": "iterations: 9412\ncpu: 74340.32086697784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 73898.56773581111,
            "unit": "ns/iter",
            "extra": "iterations: 9478\ncpu: 73891.82316944475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 75333.99484148463,
            "unit": "ns/iter",
            "extra": "iterations: 9305\ncpu: 75329.76894142869 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 147121.856753365,
            "unit": "ns/iter",
            "extra": "iterations: 4768\ncpu: 147121.68624161114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 630606.8491418528,
            "unit": "ns/iter",
            "extra": "iterations: 1107\ncpu: 630560.3432700986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 525260.0119760161,
            "unit": "ns/iter",
            "extra": "iterations: 1336\ncpu: 525247.2305389178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 532721.0945842848,
            "unit": "ns/iter",
            "extra": "iterations: 1311\ncpu: 532684.820747523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 527711.4107008658,
            "unit": "ns/iter",
            "extra": "iterations: 1327\ncpu: 527697.136397897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 342108.3561309769,
            "unit": "ns/iter",
            "extra": "iterations: 2047\ncpu: 342102.3448949671 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 518203.891191695,
            "unit": "ns/iter",
            "extra": "iterations: 1351\ncpu: 518193.26424870203 ns\nthreads: 1"
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
        "date": 1705956771884,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 7969.455948764407,
            "unit": "ns/iter",
            "extra": "iterations: 87909\ncpu: 7969.29097134537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 73960.59434291859,
            "unit": "ns/iter",
            "extra": "iterations: 11490\ncpu: 73952.98520452568 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 140893.57844079408,
            "unit": "ns/iter",
            "extra": "iterations: 6234\ncpu: 140887.32755854988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 206490.27606775638,
            "unit": "ns/iter",
            "extra": "iterations: 4191\ncpu: 206482.05678835604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 272621.5534194724,
            "unit": "ns/iter",
            "extra": "iterations: 3173\ncpu: 272608.0050425465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 336163.8107686343,
            "unit": "ns/iter",
            "extra": "iterations: 2563\ncpu: 336153.06281701126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 402631.9561807578,
            "unit": "ns/iter",
            "extra": "iterations: 2168\ncpu: 402622.27859778574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 466990.69892479054,
            "unit": "ns/iter",
            "extra": "iterations: 1860\ncpu: 466979.89247311867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 530101.8836075951,
            "unit": "ns/iter",
            "extra": "iterations: 1641\ncpu: 530082.6325411339 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6072.148612410138,
            "unit": "ns/iter",
            "extra": "iterations: 114479\ncpu: 6071.975646188386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5077.990828349247,
            "unit": "ns/iter",
            "extra": "iterations: 137925\ncpu: 5077.726300525646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5060.342352055233,
            "unit": "ns/iter",
            "extra": "iterations: 138194\ncpu: 5060.013459339761 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5071.6874256529145,
            "unit": "ns/iter",
            "extra": "iterations: 137868\ncpu: 5071.302985464356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 8946.24601451393,
            "unit": "ns/iter",
            "extra": "iterations: 78284\ncpu: 8945.973634459153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 32153.176819041604,
            "unit": "ns/iter",
            "extra": "iterations: 25659\ncpu: 32152.58583732808 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 133907.62341127396,
            "unit": "ns/iter",
            "extra": "iterations: 6373\ncpu: 133902.73026831975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 108039.3799722128,
            "unit": "ns/iter",
            "extra": "iterations: 7919\ncpu: 108036.14092688446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 101621.43365889917,
            "unit": "ns/iter",
            "extra": "iterations: 8396\ncpu: 101616.23392091443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 105320.437592497,
            "unit": "ns/iter",
            "extra": "iterations: 8108\ncpu: 105316.95855944764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 263133.7918047854,
            "unit": "ns/iter",
            "extra": "iterations: 3319\ncpu: 263118.5899367281 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2194887.06413289,
            "unit": "ns/iter",
            "extra": "iterations: 421\ncpu: 2194819.9524940616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1778553.2720303992,
            "unit": "ns/iter",
            "extra": "iterations: 522\ncpu: 1778417.6245210788 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1774498.1425858159,
            "unit": "ns/iter",
            "extra": "iterations: 526\ncpu: 1774418.250950567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1790792.5393476188,
            "unit": "ns/iter",
            "extra": "iterations: 521\ncpu: 1790665.6429942423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1068477.0402760177,
            "unit": "ns/iter",
            "extra": "iterations: 869\ncpu: 1068410.0115074792 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1729294.4562384717,
            "unit": "ns/iter",
            "extra": "iterations: 537\ncpu: 1729190.8752327762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 7211487.029999262,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7211014.0000000205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 4124305.2290742863,
            "unit": "ns/iter",
            "extra": "iterations: 227\ncpu: 4124045.8149779737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 8884602.8292694,
            "unit": "ns/iter",
            "extra": "iterations: 123\ncpu: 8883982.113821115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 31547.78298577445,
            "unit": "ns/iter",
            "extra": "iterations: 25943\ncpu: 31545.754153336184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 134223.1093627399,
            "unit": "ns/iter",
            "extra": "iterations: 6355\ncpu: 134211.7702596378 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 110312.23986048596,
            "unit": "ns/iter",
            "extra": "iterations: 7742\ncpu: 110306.8457762858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 105099.49019123023,
            "unit": "ns/iter",
            "extra": "iterations: 8105\ncpu: 105089.71005552201 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 109403.22540615729,
            "unit": "ns/iter",
            "extra": "iterations: 7817\ncpu: 109397.62057055107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 264911.1639343963,
            "unit": "ns/iter",
            "extra": "iterations: 3294\ncpu: 264881.96721311513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2204859.559523833,
            "unit": "ns/iter",
            "extra": "iterations: 420\ncpu: 2204719.523809524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1798020.7007719355,
            "unit": "ns/iter",
            "extra": "iterations: 518\ncpu: 1797911.9691119732 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1778939.9349905483,
            "unit": "ns/iter",
            "extra": "iterations: 523\ncpu: 1778840.917782026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1793752.5153845751,
            "unit": "ns/iter",
            "extra": "iterations: 520\ncpu: 1793652.3076923112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1066841.8845715288,
            "unit": "ns/iter",
            "extra": "iterations: 875\ncpu: 1066780.2285714257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1736697.8286254944,
            "unit": "ns/iter",
            "extra": "iterations: 531\ncpu: 1736538.0414312598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 7273402.610001084,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7273087.000000018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 3945676.3206755626,
            "unit": "ns/iter",
            "extra": "iterations: 237\ncpu: 3945539.2405063277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 31617.142492955776,
            "unit": "ns/iter",
            "extra": "iterations: 25889\ncpu: 31616.72138746176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 133147.9231728314,
            "unit": "ns/iter",
            "extra": "iterations: 6417\ncpu: 133144.64703132305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 108575.89009034015,
            "unit": "ns/iter",
            "extra": "iterations: 7861\ncpu: 108573.32400457973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 102641.17826721218,
            "unit": "ns/iter",
            "extra": "iterations: 8218\ncpu: 102638.08712582104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 106841.9304752424,
            "unit": "ns/iter",
            "extra": "iterations: 7954\ncpu: 106838.53407090763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 262011.0777108921,
            "unit": "ns/iter",
            "extra": "iterations: 3320\ncpu: 262006.38554216732 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2198245.5721043297,
            "unit": "ns/iter",
            "extra": "iterations: 423\ncpu: 2198224.5862884265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1796075.4865384842,
            "unit": "ns/iter",
            "extra": "iterations: 520\ncpu: 1796038.2692307665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1775793.9127133288,
            "unit": "ns/iter",
            "extra": "iterations: 527\ncpu: 1775747.4383301593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1787173.7648187068,
            "unit": "ns/iter",
            "extra": "iterations: 523\ncpu: 1787156.787762906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1058706.646188975,
            "unit": "ns/iter",
            "extra": "iterations: 879\ncpu: 1058673.9476678097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1734677.799625776,
            "unit": "ns/iter",
            "extra": "iterations: 534\ncpu: 1734649.6254681705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 3064.9696858123025,
            "unit": "ns/iter",
            "extra": "iterations: 228144\ncpu: 3064.9168945929014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 16478.524848855155,
            "unit": "ns/iter",
            "extra": "iterations: 42839\ncpu: 16478.39585424506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 12908.74711499165,
            "unit": "ns/iter",
            "extra": "iterations: 54246\ncpu: 12908.63658149913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 12821.762760618501,
            "unit": "ns/iter",
            "extra": "iterations: 54582\ncpu: 12821.639001868742 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 10424.75080867142,
            "unit": "ns/iter",
            "extra": "iterations: 66776\ncpu: 10424.652569785603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 61044.28884635169,
            "unit": "ns/iter",
            "extra": "iterations: 11494\ncpu: 61042.021924482855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 136700.32480966707,
            "unit": "ns/iter",
            "extra": "iterations: 5123\ncpu: 136697.6185828615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 37278.990050547174,
            "unit": "ns/iter",
            "extra": "iterations: 18795\ncpu: 37277.850492151934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 37032.982150397416,
            "unit": "ns/iter",
            "extra": "iterations: 18936\ncpu: 37032.018377693654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 36981.831341240664,
            "unit": "ns/iter",
            "extra": "iterations: 18908\ncpu: 36979.92913052631 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 70953.89749821008,
            "unit": "ns/iter",
            "extra": "iterations: 9873\ncpu: 70951.90924744267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 66267.55754306402,
            "unit": "ns/iter",
            "extra": "iterations: 10566\ncpu: 66266.2691652477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 19543.03716197664,
            "unit": "ns/iter",
            "extra": "iterations: 35870\ncpu: 19541.93476442718 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 91536.27721865618,
            "unit": "ns/iter",
            "extra": "iterations: 7651\ncpu: 91531.43379950269 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 72930.16739402757,
            "unit": "ns/iter",
            "extra": "iterations: 9624\ncpu: 72926.12219451388 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 73003.61156852813,
            "unit": "ns/iter",
            "extra": "iterations: 9595\ncpu: 72999.64564877558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 73573.1488352484,
            "unit": "ns/iter",
            "extra": "iterations: 9487\ncpu: 73571.80352060721 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 146782.270916331,
            "unit": "ns/iter",
            "extra": "iterations: 4769\ncpu: 146781.00230656337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 607370.1467013138,
            "unit": "ns/iter",
            "extra": "iterations: 1152\ncpu: 607356.4236111064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 510350.26277369226,
            "unit": "ns/iter",
            "extra": "iterations: 1370\ncpu: 510331.3868613191 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 508358.0463768658,
            "unit": "ns/iter",
            "extra": "iterations: 1380\ncpu: 508342.68115941837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 511641.2291971072,
            "unit": "ns/iter",
            "extra": "iterations: 1370\ncpu: 511625.4014598576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 335736.2320999407,
            "unit": "ns/iter",
            "extra": "iterations: 2081\ncpu: 335733.4935127303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 499376.06200992456,
            "unit": "ns/iter",
            "extra": "iterations: 1403\ncpu: 499366.9280113971 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 19459.00823045747,
            "unit": "ns/iter",
            "extra": "iterations: 35964\ncpu: 19458.844956067158 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 90105.17286173525,
            "unit": "ns/iter",
            "extra": "iterations: 7775\ncpu: 90103.30546623816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 73090.03286042203,
            "unit": "ns/iter",
            "extra": "iterations: 9586\ncpu: 73087.62779052697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 74000.04467028519,
            "unit": "ns/iter",
            "extra": "iterations: 9447\ncpu: 73998.47570657376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 73779.7859475578,
            "unit": "ns/iter",
            "extra": "iterations: 9493\ncpu: 73778.51048140765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 145078.3039154614,
            "unit": "ns/iter",
            "extra": "iterations: 4827\ncpu: 145077.02506732973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 606869.3896104064,
            "unit": "ns/iter",
            "extra": "iterations: 1155\ncpu: 606855.8441558444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 511969.2580883432,
            "unit": "ns/iter",
            "extra": "iterations: 1360\ncpu: 511953.30882353237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 505866.0986936896,
            "unit": "ns/iter",
            "extra": "iterations: 1378\ncpu: 505855.22496371577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 510746.92116782675,
            "unit": "ns/iter",
            "extra": "iterations: 1370\ncpu: 510713.06569343066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 337088.334135759,
            "unit": "ns/iter",
            "extra": "iterations: 2077\ncpu: 337085.4116514213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 498581.6902213728,
            "unit": "ns/iter",
            "extra": "iterations: 1401\ncpu: 498571.02069950086 ns\nthreads: 1"
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
        "date": 1705958377351,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 7889.60796970338,
            "unit": "ns/iter",
            "extra": "iterations: 88460\ncpu: 7889.247117341172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 75056.43359649097,
            "unit": "ns/iter",
            "extra": "iterations: 11400\ncpu: 75052.01754385966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 142505.41996418068,
            "unit": "ns/iter",
            "extra": "iterations: 6141\ncpu: 142500.32567985667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 211033.67542579543,
            "unit": "ns/iter",
            "extra": "iterations: 4110\ncpu: 211017.83454987835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 276886.42797157523,
            "unit": "ns/iter",
            "extra": "iterations: 3096\ncpu: 276868.83074935403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 343490.37984805467,
            "unit": "ns/iter",
            "extra": "iterations: 2501\ncpu: 343470.21191523393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 413732.91975596984,
            "unit": "ns/iter",
            "extra": "iterations: 2131\ncpu: 413548.09948381037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 477636.28469560266,
            "unit": "ns/iter",
            "extra": "iterations: 1823\ncpu: 477616.4015359296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 545797.006832246,
            "unit": "ns/iter",
            "extra": "iterations: 1610\ncpu: 545774.1614906826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6005.194237742924,
            "unit": "ns/iter",
            "extra": "iterations: 116378\ncpu: 6004.662393235834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 4983.636184688421,
            "unit": "ns/iter",
            "extra": "iterations: 140214\ncpu: 4983.401800105556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4924.690891793747,
            "unit": "ns/iter",
            "extra": "iterations: 141905\ncpu: 4924.322610196964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 4948.374545018149,
            "unit": "ns/iter",
            "extra": "iterations: 141489\ncpu: 4948.217175893531 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 8812.172906714024,
            "unit": "ns/iter",
            "extra": "iterations: 79540\ncpu: 8811.766406839322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 31663.343919202474,
            "unit": "ns/iter",
            "extra": "iterations: 26041\ncpu: 31661.418532314387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 130816.07090351498,
            "unit": "ns/iter",
            "extra": "iterations: 6530\ncpu: 130807.56508422672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 107490.16318308953,
            "unit": "ns/iter",
            "extra": "iterations: 7942\ncpu: 107481.65449508964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 104357.94434250261,
            "unit": "ns/iter",
            "extra": "iterations: 8175\ncpu: 104351.35168195728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 105415.71103414473,
            "unit": "ns/iter",
            "extra": "iterations: 8084\ncpu: 105407.55813953461 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 255130.46854791496,
            "unit": "ns/iter",
            "extra": "iterations: 3402\ncpu: 255113.96237507358 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2215946.674641002,
            "unit": "ns/iter",
            "extra": "iterations: 418\ncpu: 2215777.9904306275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1817472.0391389627,
            "unit": "ns/iter",
            "extra": "iterations: 511\ncpu: 1817373.3855185893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1790922.0889749655,
            "unit": "ns/iter",
            "extra": "iterations: 517\ncpu: 1790798.0657640218 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1814900.2402343405,
            "unit": "ns/iter",
            "extra": "iterations: 512\ncpu: 1814794.1406249993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1089667.4606344847,
            "unit": "ns/iter",
            "extra": "iterations: 851\ncpu: 1089593.8895417147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1767642.3460074244,
            "unit": "ns/iter",
            "extra": "iterations: 526\ncpu: 1767600.760456273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 7326616.560000048,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7325928.000000026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 4074802.4043478915,
            "unit": "ns/iter",
            "extra": "iterations: 230\ncpu: 4074563.478260861 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 9025182.22950802,
            "unit": "ns/iter",
            "extra": "iterations: 122\ncpu: 9024715.573770465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 31373.697799903115,
            "unit": "ns/iter",
            "extra": "iterations: 26317\ncpu: 31373.374624767268 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 134199.7208974058,
            "unit": "ns/iter",
            "extra": "iterations: 6374\ncpu: 134195.21493567634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 106686.01523667102,
            "unit": "ns/iter",
            "extra": "iterations: 8007\ncpu: 106681.81591107778 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 109425.74746828455,
            "unit": "ns/iter",
            "extra": "iterations: 7801\ncpu: 109423.53544417328 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 109837.32632657676,
            "unit": "ns/iter",
            "extra": "iterations: 7802\ncpu: 109835.97795437134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 254993.09958995046,
            "unit": "ns/iter",
            "extra": "iterations: 3414\ncpu: 254979.49619214993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2238715.9661835376,
            "unit": "ns/iter",
            "extra": "iterations: 414\ncpu: 2238683.5748792216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1829943.5826772933,
            "unit": "ns/iter",
            "extra": "iterations: 508\ncpu: 1829910.8267716449 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1801901.3980582475,
            "unit": "ns/iter",
            "extra": "iterations: 515\ncpu: 1801881.3592233073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1818192.755381674,
            "unit": "ns/iter",
            "extra": "iterations: 511\ncpu: 1818140.9001957006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1068077.1566819972,
            "unit": "ns/iter",
            "extra": "iterations: 868\ncpu: 1068058.4101382473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1768746.1520913166,
            "unit": "ns/iter",
            "extra": "iterations: 526\ncpu: 1768727.9467680617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 7357252.609999704,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7356712.999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 4188950.6238940116,
            "unit": "ns/iter",
            "extra": "iterations: 226\ncpu: 4188763.7168141333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 31315.40963257002,
            "unit": "ns/iter",
            "extra": "iterations: 26182\ncpu: 31314.338094874212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 131650.43262194502,
            "unit": "ns/iter",
            "extra": "iterations: 6560\ncpu: 131644.51219512196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 108747.32397050507,
            "unit": "ns/iter",
            "extra": "iterations: 7868\ncpu: 108740.1499745805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 108307.63058852815,
            "unit": "ns/iter",
            "extra": "iterations: 7918\ncpu: 108298.00454660282 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 108687.88011176,
            "unit": "ns/iter",
            "extra": "iterations: 7874\ncpu: 108681.77546355093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 255540.06905672618,
            "unit": "ns/iter",
            "extra": "iterations: 3403\ncpu: 255528.41610343868 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2235761.3961815406,
            "unit": "ns/iter",
            "extra": "iterations: 419\ncpu: 2235631.9809069256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1822466.9549019434,
            "unit": "ns/iter",
            "extra": "iterations: 510\ncpu: 1822402.5490196045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1803525.2606177172,
            "unit": "ns/iter",
            "extra": "iterations: 518\ncpu: 1803409.6525096525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1817124.898635532,
            "unit": "ns/iter",
            "extra": "iterations: 513\ncpu: 1817047.1734892803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1080680.6458333277,
            "unit": "ns/iter",
            "extra": "iterations: 864\ncpu: 1080606.1342592647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1772873.1406842053,
            "unit": "ns/iter",
            "extra": "iterations: 526\ncpu: 1772794.1064638742 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 3060.075806741346,
            "unit": "ns/iter",
            "extra": "iterations: 228357\ncpu: 3059.9880888258285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 16968.275745010244,
            "unit": "ns/iter",
            "extra": "iterations: 41241\ncpu: 16967.0594796441 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 12491.404515471813,
            "unit": "ns/iter",
            "extra": "iterations: 55941\ncpu: 12490.931517134139 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 13275.081804744394,
            "unit": "ns/iter",
            "extra": "iterations: 52772\ncpu: 13274.907147729873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 10572.187256038735,
            "unit": "ns/iter",
            "extra": "iterations: 66353\ncpu: 10571.910840504492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 59517.24755423163,
            "unit": "ns/iter",
            "extra": "iterations: 11755\ncpu: 59516.15482773284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 138490.62828882574,
            "unit": "ns/iter",
            "extra": "iterations: 5055\ncpu: 138487.1414441144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 37796.52351639017,
            "unit": "ns/iter",
            "extra": "iterations: 18519\ncpu: 37795.69091203594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 37382.61274274073,
            "unit": "ns/iter",
            "extra": "iterations: 18693\ncpu: 37382.21259294858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 37636.201397470555,
            "unit": "ns/iter",
            "extra": "iterations: 18605\ncpu: 37636.15157215848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 75302.57761499335,
            "unit": "ns/iter",
            "extra": "iterations: 9283\ncpu: 75302.4561025519 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 67499.75703547162,
            "unit": "ns/iter",
            "extra": "iterations: 10376\ncpu: 67497.60023130261 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 18966.767695639122,
            "unit": "ns/iter",
            "extra": "iterations: 36930\ncpu: 18966.401299755966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 91518.77087962277,
            "unit": "ns/iter",
            "extra": "iterations: 7651\ncpu: 91516.11554045274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 72523.36861199679,
            "unit": "ns/iter",
            "extra": "iterations: 9647\ncpu: 72523.31294703003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 72749.92968263428,
            "unit": "ns/iter",
            "extra": "iterations: 9642\ncpu: 72748.99398465069 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 73969.38763212439,
            "unit": "ns/iter",
            "extra": "iterations: 9460\ncpu: 73966.12050739962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 142498.43063762583,
            "unit": "ns/iter",
            "extra": "iterations: 4909\ncpu: 142496.00733346955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 626865.1611459233,
            "unit": "ns/iter",
            "extra": "iterations: 1117\ncpu: 626830.5282005403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 526664.2187029319,
            "unit": "ns/iter",
            "extra": "iterations: 1326\ncpu: 526663.4992458534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 522235.86109031946,
            "unit": "ns/iter",
            "extra": "iterations: 1339\ncpu: 522225.0933532506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 523966.7571213895,
            "unit": "ns/iter",
            "extra": "iterations: 1334\ncpu: 523941.52923538105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 341751.66340987536,
            "unit": "ns/iter",
            "extra": "iterations: 2047\ncpu: 341751.3434294053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 512947.4351648681,
            "unit": "ns/iter",
            "extra": "iterations: 1365\ncpu: 512933.2600732628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 19198.583793281334,
            "unit": "ns/iter",
            "extra": "iterations: 36417\ncpu: 19198.574841419988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 91231.03428496272,
            "unit": "ns/iter",
            "extra": "iterations: 7671\ncpu: 91226.08525616025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 72826.74217043698,
            "unit": "ns/iter",
            "extra": "iterations: 9611\ncpu: 72824.63843512707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 73083.52885920873,
            "unit": "ns/iter",
            "extra": "iterations: 9581\ncpu: 73083.46727898909 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 73433.16123606844,
            "unit": "ns/iter",
            "extra": "iterations: 9514\ncpu: 73431.10153458026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 141393.08867392124,
            "unit": "ns/iter",
            "extra": "iterations: 4962\ncpu: 141390.74969770177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 627355.5833333594,
            "unit": "ns/iter",
            "extra": "iterations: 1116\ncpu: 627330.5555555514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 526232.3408577808,
            "unit": "ns/iter",
            "extra": "iterations: 1329\ncpu: 526216.4785553085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 523222.77852858015,
            "unit": "ns/iter",
            "extra": "iterations: 1332\ncpu: 523221.9219219213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 521694.48880595696,
            "unit": "ns/iter",
            "extra": "iterations: 1340\ncpu: 521678.43283581815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 339751.78870501916,
            "unit": "ns/iter",
            "extra": "iterations: 2054\ncpu: 339746.59201557963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 513862.3938280417,
            "unit": "ns/iter",
            "extra": "iterations: 1361\ncpu: 513842.68919911695 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}