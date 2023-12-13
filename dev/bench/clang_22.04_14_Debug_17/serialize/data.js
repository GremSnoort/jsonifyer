window.BENCHMARK_DATA = {
  "lastUpdate": 1702503897172,
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
      }
    ]
  }
}