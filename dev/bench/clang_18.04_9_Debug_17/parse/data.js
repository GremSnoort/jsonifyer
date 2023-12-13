window.BENCHMARK_DATA = {
  "lastUpdate": 1702489611044,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Parse clang-9 18.04 Debug c++-17": [
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
        "date": 1702489600196,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 8596.15427044696,
            "unit": "ns/iter",
            "extra": "iterations: 81221\ncpu: 8595.972716415705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 62796.204376858244,
            "unit": "ns/iter",
            "extra": "iterations: 13480\ncpu: 62796.21661721068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 117028.80231931547,
            "unit": "ns/iter",
            "extra": "iterations: 7416\ncpu: 117026.65857605178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 168873.85065572077,
            "unit": "ns/iter",
            "extra": "iterations: 5109\ncpu: 168865.94245449203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 222653.92704856783,
            "unit": "ns/iter",
            "extra": "iterations: 3893\ncpu: 222651.45132288735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 273925.71610440436,
            "unit": "ns/iter",
            "extra": "iterations: 3142\ncpu: 273912.1896880968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 324929.59063672676,
            "unit": "ns/iter",
            "extra": "iterations: 2670\ncpu: 324916.02996254683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 378400.0469157097,
            "unit": "ns/iter",
            "extra": "iterations: 2302\ncpu: 378380.97306689824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 430895.03225807904,
            "unit": "ns/iter",
            "extra": "iterations: 2015\ncpu: 430868.2878411913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 7291.311903623677,
            "unit": "ns/iter",
            "extra": "iterations: 96206\ncpu: 7291.232355570347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5945.007399387856,
            "unit": "ns/iter",
            "extra": "iterations: 117307\ncpu: 5944.642689694566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5927.60585265018,
            "unit": "ns/iter",
            "extra": "iterations: 118032\ncpu: 5927.251084451674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5820.8645686049,
            "unit": "ns/iter",
            "extra": "iterations: 120238\ncpu: 5820.67482825729 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 10422.011561124662,
            "unit": "ns/iter",
            "extra": "iterations: 67035\ncpu: 10421.582755277106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 29235.820614539225,
            "unit": "ns/iter",
            "extra": "iterations: 27728\ncpu: 29234.56073283324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 148356.2677453062,
            "unit": "ns/iter",
            "extra": "iterations: 5748\ncpu: 148347.14683368139 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 113372.6956054292,
            "unit": "ns/iter",
            "extra": "iterations: 7441\ncpu: 113372.55745195548 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 113106.57060863942,
            "unit": "ns/iter",
            "extra": "iterations: 7492\ncpu: 113105.85958355592 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 109862.5818982297,
            "unit": "ns/iter",
            "extra": "iterations: 7723\ncpu: 109862.81237860951 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 368310.7980507,
            "unit": "ns/iter",
            "extra": "iterations: 2565\ncpu: 368290.99415204645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 2091657.1340910133,
            "unit": "ns/iter",
            "extra": "iterations: 440\ncpu: 2091562.0454545415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1643959.975221336,
            "unit": "ns/iter",
            "extra": "iterations: 565\ncpu: 1643884.2477876102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1645293.886725737,
            "unit": "ns/iter",
            "extra": "iterations: 565\ncpu: 1645203.0088495628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1599611.296041171,
            "unit": "ns/iter",
            "extra": "iterations: 581\ncpu: 1599460.7573149782 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 898311.7906524092,
            "unit": "ns/iter",
            "extra": "iterations: 1027\ncpu: 898267.0886075936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1581930.6113013376,
            "unit": "ns/iter",
            "extra": "iterations: 584\ncpu: 1581868.3219178051 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 37426.48658099288,
            "unit": "ns/iter",
            "extra": "iterations: 22021\ncpu: 37425.87075972945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 203025.59302326557,
            "unit": "ns/iter",
            "extra": "iterations: 3956\ncpu: 203012.13346814946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 145875.59114803126,
            "unit": "ns/iter",
            "extra": "iterations: 5897\ncpu: 145867.76326945916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 144976.6246195382,
            "unit": "ns/iter",
            "extra": "iterations: 5914\ncpu: 144970.67974298322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 134935.03945492106,
            "unit": "ns/iter",
            "extra": "iterations: 6311\ncpu: 134928.7909998413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 344019.95881188946,
            "unit": "ns/iter",
            "extra": "iterations: 2525\ncpu: 344019.8415841584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 2121563.000000011,
            "unit": "ns/iter",
            "extra": "iterations: 436\ncpu: 2121548.3944954053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1672627.4767023902,
            "unit": "ns/iter",
            "extra": "iterations: 558\ncpu: 1672612.0071684606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1666063.6007194994,
            "unit": "ns/iter",
            "extra": "iterations: 556\ncpu: 1666039.208633093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1601658.4375001406,
            "unit": "ns/iter",
            "extra": "iterations: 576\ncpu: 1601646.180555558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 926254.8408408186,
            "unit": "ns/iter",
            "extra": "iterations: 999\ncpu: 926249.0490490526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1606864.0397237206,
            "unit": "ns/iter",
            "extra": "iterations: 579\ncpu: 1606879.6200345468 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5697070.310000071,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5697134.0000000475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3392200.7838828326,
            "unit": "ns/iter",
            "extra": "iterations: 273\ncpu: 3392135.897435887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 27553.711719620253,
            "unit": "ns/iter",
            "extra": "iterations: 29617\ncpu: 27553.64824256342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 138734.02646103763,
            "unit": "ns/iter",
            "extra": "iterations: 6160\ncpu: 138734.36688311663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 107293.3340929263,
            "unit": "ns/iter",
            "extra": "iterations: 7899\ncpu: 107290.7836434991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 113695.16544752842,
            "unit": "ns/iter",
            "extra": "iterations: 7519\ncpu: 113691.07594094929 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 108149.56260307768,
            "unit": "ns/iter",
            "extra": "iterations: 7883\ncpu: 108146.14994291545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 284532.1012782715,
            "unit": "ns/iter",
            "extra": "iterations: 3051\ncpu: 284532.710586693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 2083403.1950674304,
            "unit": "ns/iter",
            "extra": "iterations: 446\ncpu: 2083381.1659192902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1612424.5051724394,
            "unit": "ns/iter",
            "extra": "iterations: 580\ncpu: 1612425.6896551799 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1620309.915371397,
            "unit": "ns/iter",
            "extra": "iterations: 579\ncpu: 1620326.4248704698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1572456.2070707206,
            "unit": "ns/iter",
            "extra": "iterations: 594\ncpu: 1572457.5757575769 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 878937.9688090645,
            "unit": "ns/iter",
            "extra": "iterations: 1058\ncpu: 878930.7183364893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1566024.8621847164,
            "unit": "ns/iter",
            "extra": "iterations: 595\ncpu: 1565992.1008403397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 3280.637580267021,
            "unit": "ns/iter",
            "extra": "iterations: 214751\ncpu: 3280.641300855408 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 20968.827502547254,
            "unit": "ns/iter",
            "extra": "iterations: 33386\ncpu: 20968.53171988248 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 15566.34790240761,
            "unit": "ns/iter",
            "extra": "iterations: 45004\ncpu: 15566.131899386812 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 16170.671820275622,
            "unit": "ns/iter",
            "extra": "iterations: 43400\ncpu: 16170.645161290433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 12272.815820340471,
            "unit": "ns/iter",
            "extra": "iterations: 46889\ncpu: 12272.957410053526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 108159.07758216932,
            "unit": "ns/iter",
            "extra": "iterations: 6419\ncpu: 108160.30534351092 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 143941.10703239348,
            "unit": "ns/iter",
            "extra": "iterations: 4849\ncpu: 143939.3276964326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 34590.717687918754,
            "unit": "ns/iter",
            "extra": "iterations: 20155\ncpu: 34590.24063507811 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 34602.64943752886,
            "unit": "ns/iter",
            "extra": "iterations: 20179\ncpu: 34600.500520342845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 34529.91002862412,
            "unit": "ns/iter",
            "extra": "iterations: 20262\ncpu: 34529.65649985199 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 69618.57566441386,
            "unit": "ns/iter",
            "extra": "iterations: 10084\ncpu: 69614.82546608489 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 64673.3110309026,
            "unit": "ns/iter",
            "extra": "iterations: 10806\ncpu: 64673.089024616085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 23511.345783699588,
            "unit": "ns/iter",
            "extra": "iterations: 29718\ncpu: 23509.84251968518 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 119212.16209306513,
            "unit": "ns/iter",
            "extra": "iterations: 5867\ncpu: 119203.98840974936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 96300.17949423444,
            "unit": "ns/iter",
            "extra": "iterations: 7276\ncpu: 96298.18581638174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 95585.71167485206,
            "unit": "ns/iter",
            "extra": "iterations: 7332\ncpu: 95584.2062193132 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 94851.0747967434,
            "unit": "ns/iter",
            "extra": "iterations: 7380\ncpu: 94849.45799458024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 179275.64941054257,
            "unit": "ns/iter",
            "extra": "iterations: 3902\ncpu: 179273.57765248773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 615210.3382997725,
            "unit": "ns/iter",
            "extra": "iterations: 1141\ncpu: 615211.0429447918 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 496461.5820895327,
            "unit": "ns/iter",
            "extra": "iterations: 1407\ncpu: 496447.12153518223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 497704.5625000091,
            "unit": "ns/iter",
            "extra": "iterations: 1408\ncpu: 497696.16477272776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 489096.38075318356,
            "unit": "ns/iter",
            "extra": "iterations: 1434\ncpu: 489096.8619246873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 315901.2379232549,
            "unit": "ns/iter",
            "extra": "iterations: 2215\ncpu: 315904.69525959215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 486753.2988186202,
            "unit": "ns/iter",
            "extra": "iterations: 1439\ncpu: 486736.69214731694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 23895.968216658803,
            "unit": "ns/iter",
            "extra": "iterations: 29355\ncpu: 23895.98024186712 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 117747.03226350037,
            "unit": "ns/iter",
            "extra": "iterations: 5951\ncpu: 117746.19391698894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 96308.86662059644,
            "unit": "ns/iter",
            "extra": "iterations: 7235\ncpu: 96307.17346233636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 95140.81186371329,
            "unit": "ns/iter",
            "extra": "iterations: 7367\ncpu: 95139.97556671678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 93884.80643862867,
            "unit": "ns/iter",
            "extra": "iterations: 7455\ncpu: 93883.68879946315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 174476.498629453,
            "unit": "ns/iter",
            "extra": "iterations: 4013\ncpu: 174476.20234238534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 613752.3237094776,
            "unit": "ns/iter",
            "extra": "iterations: 1143\ncpu: 613758.8801399876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 490790.68815692695,
            "unit": "ns/iter",
            "extra": "iterations: 1427\ncpu: 490788.8577435099 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 492744.4255469151,
            "unit": "ns/iter",
            "extra": "iterations: 1417\ncpu: 492736.41496119223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 483755.6797791499,
            "unit": "ns/iter",
            "extra": "iterations: 1449\ncpu: 483753.9682539656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 317067.18730158143,
            "unit": "ns/iter",
            "extra": "iterations: 2205\ncpu: 317070.79365078977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 482890.4259002317,
            "unit": "ns/iter",
            "extra": "iterations: 1444\ncpu: 482882.6869806152 ns\nthreads: 1"
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
        "date": 1702489600196,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 8596.15427044696,
            "unit": "ns/iter",
            "extra": "iterations: 81221\ncpu: 8595.972716415705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 62796.204376858244,
            "unit": "ns/iter",
            "extra": "iterations: 13480\ncpu: 62796.21661721068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 117028.80231931547,
            "unit": "ns/iter",
            "extra": "iterations: 7416\ncpu: 117026.65857605178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 168873.85065572077,
            "unit": "ns/iter",
            "extra": "iterations: 5109\ncpu: 168865.94245449203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 222653.92704856783,
            "unit": "ns/iter",
            "extra": "iterations: 3893\ncpu: 222651.45132288735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 273925.71610440436,
            "unit": "ns/iter",
            "extra": "iterations: 3142\ncpu: 273912.1896880968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 324929.59063672676,
            "unit": "ns/iter",
            "extra": "iterations: 2670\ncpu: 324916.02996254683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 378400.0469157097,
            "unit": "ns/iter",
            "extra": "iterations: 2302\ncpu: 378380.97306689824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 430895.03225807904,
            "unit": "ns/iter",
            "extra": "iterations: 2015\ncpu: 430868.2878411913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 7291.311903623677,
            "unit": "ns/iter",
            "extra": "iterations: 96206\ncpu: 7291.232355570347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5945.007399387856,
            "unit": "ns/iter",
            "extra": "iterations: 117307\ncpu: 5944.642689694566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5927.60585265018,
            "unit": "ns/iter",
            "extra": "iterations: 118032\ncpu: 5927.251084451674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5820.8645686049,
            "unit": "ns/iter",
            "extra": "iterations: 120238\ncpu: 5820.67482825729 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 10422.011561124662,
            "unit": "ns/iter",
            "extra": "iterations: 67035\ncpu: 10421.582755277106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 29235.820614539225,
            "unit": "ns/iter",
            "extra": "iterations: 27728\ncpu: 29234.56073283324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 148356.2677453062,
            "unit": "ns/iter",
            "extra": "iterations: 5748\ncpu: 148347.14683368139 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 113372.6956054292,
            "unit": "ns/iter",
            "extra": "iterations: 7441\ncpu: 113372.55745195548 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 113106.57060863942,
            "unit": "ns/iter",
            "extra": "iterations: 7492\ncpu: 113105.85958355592 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 109862.5818982297,
            "unit": "ns/iter",
            "extra": "iterations: 7723\ncpu: 109862.81237860951 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 368310.7980507,
            "unit": "ns/iter",
            "extra": "iterations: 2565\ncpu: 368290.99415204645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 2091657.1340910133,
            "unit": "ns/iter",
            "extra": "iterations: 440\ncpu: 2091562.0454545415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1643959.975221336,
            "unit": "ns/iter",
            "extra": "iterations: 565\ncpu: 1643884.2477876102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1645293.886725737,
            "unit": "ns/iter",
            "extra": "iterations: 565\ncpu: 1645203.0088495628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1599611.296041171,
            "unit": "ns/iter",
            "extra": "iterations: 581\ncpu: 1599460.7573149782 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 898311.7906524092,
            "unit": "ns/iter",
            "extra": "iterations: 1027\ncpu: 898267.0886075936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1581930.6113013376,
            "unit": "ns/iter",
            "extra": "iterations: 584\ncpu: 1581868.3219178051 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 37426.48658099288,
            "unit": "ns/iter",
            "extra": "iterations: 22021\ncpu: 37425.87075972945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 203025.59302326557,
            "unit": "ns/iter",
            "extra": "iterations: 3956\ncpu: 203012.13346814946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 145875.59114803126,
            "unit": "ns/iter",
            "extra": "iterations: 5897\ncpu: 145867.76326945916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 144976.6246195382,
            "unit": "ns/iter",
            "extra": "iterations: 5914\ncpu: 144970.67974298322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 134935.03945492106,
            "unit": "ns/iter",
            "extra": "iterations: 6311\ncpu: 134928.7909998413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 344019.95881188946,
            "unit": "ns/iter",
            "extra": "iterations: 2525\ncpu: 344019.8415841584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 2121563.000000011,
            "unit": "ns/iter",
            "extra": "iterations: 436\ncpu: 2121548.3944954053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1672627.4767023902,
            "unit": "ns/iter",
            "extra": "iterations: 558\ncpu: 1672612.0071684606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1666063.6007194994,
            "unit": "ns/iter",
            "extra": "iterations: 556\ncpu: 1666039.208633093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1601658.4375001406,
            "unit": "ns/iter",
            "extra": "iterations: 576\ncpu: 1601646.180555558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 926254.8408408186,
            "unit": "ns/iter",
            "extra": "iterations: 999\ncpu: 926249.0490490526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1606864.0397237206,
            "unit": "ns/iter",
            "extra": "iterations: 579\ncpu: 1606879.6200345468 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5697070.310000071,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5697134.0000000475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3392200.7838828326,
            "unit": "ns/iter",
            "extra": "iterations: 273\ncpu: 3392135.897435887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 27553.711719620253,
            "unit": "ns/iter",
            "extra": "iterations: 29617\ncpu: 27553.64824256342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 138734.02646103763,
            "unit": "ns/iter",
            "extra": "iterations: 6160\ncpu: 138734.36688311663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 107293.3340929263,
            "unit": "ns/iter",
            "extra": "iterations: 7899\ncpu: 107290.7836434991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 113695.16544752842,
            "unit": "ns/iter",
            "extra": "iterations: 7519\ncpu: 113691.07594094929 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 108149.56260307768,
            "unit": "ns/iter",
            "extra": "iterations: 7883\ncpu: 108146.14994291545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 284532.1012782715,
            "unit": "ns/iter",
            "extra": "iterations: 3051\ncpu: 284532.710586693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 2083403.1950674304,
            "unit": "ns/iter",
            "extra": "iterations: 446\ncpu: 2083381.1659192902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1612424.5051724394,
            "unit": "ns/iter",
            "extra": "iterations: 580\ncpu: 1612425.6896551799 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1620309.915371397,
            "unit": "ns/iter",
            "extra": "iterations: 579\ncpu: 1620326.4248704698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1572456.2070707206,
            "unit": "ns/iter",
            "extra": "iterations: 594\ncpu: 1572457.5757575769 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 878937.9688090645,
            "unit": "ns/iter",
            "extra": "iterations: 1058\ncpu: 878930.7183364893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1566024.8621847164,
            "unit": "ns/iter",
            "extra": "iterations: 595\ncpu: 1565992.1008403397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 3280.637580267021,
            "unit": "ns/iter",
            "extra": "iterations: 214751\ncpu: 3280.641300855408 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 20968.827502547254,
            "unit": "ns/iter",
            "extra": "iterations: 33386\ncpu: 20968.53171988248 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 15566.34790240761,
            "unit": "ns/iter",
            "extra": "iterations: 45004\ncpu: 15566.131899386812 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 16170.671820275622,
            "unit": "ns/iter",
            "extra": "iterations: 43400\ncpu: 16170.645161290433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 12272.815820340471,
            "unit": "ns/iter",
            "extra": "iterations: 46889\ncpu: 12272.957410053526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 108159.07758216932,
            "unit": "ns/iter",
            "extra": "iterations: 6419\ncpu: 108160.30534351092 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 143941.10703239348,
            "unit": "ns/iter",
            "extra": "iterations: 4849\ncpu: 143939.3276964326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 34590.717687918754,
            "unit": "ns/iter",
            "extra": "iterations: 20155\ncpu: 34590.24063507811 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 34602.64943752886,
            "unit": "ns/iter",
            "extra": "iterations: 20179\ncpu: 34600.500520342845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 34529.91002862412,
            "unit": "ns/iter",
            "extra": "iterations: 20262\ncpu: 34529.65649985199 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 69618.57566441386,
            "unit": "ns/iter",
            "extra": "iterations: 10084\ncpu: 69614.82546608489 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 64673.3110309026,
            "unit": "ns/iter",
            "extra": "iterations: 10806\ncpu: 64673.089024616085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 23511.345783699588,
            "unit": "ns/iter",
            "extra": "iterations: 29718\ncpu: 23509.84251968518 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 119212.16209306513,
            "unit": "ns/iter",
            "extra": "iterations: 5867\ncpu: 119203.98840974936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 96300.17949423444,
            "unit": "ns/iter",
            "extra": "iterations: 7276\ncpu: 96298.18581638174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 95585.71167485206,
            "unit": "ns/iter",
            "extra": "iterations: 7332\ncpu: 95584.2062193132 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 94851.0747967434,
            "unit": "ns/iter",
            "extra": "iterations: 7380\ncpu: 94849.45799458024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 179275.64941054257,
            "unit": "ns/iter",
            "extra": "iterations: 3902\ncpu: 179273.57765248773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 615210.3382997725,
            "unit": "ns/iter",
            "extra": "iterations: 1141\ncpu: 615211.0429447918 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 496461.5820895327,
            "unit": "ns/iter",
            "extra": "iterations: 1407\ncpu: 496447.12153518223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 497704.5625000091,
            "unit": "ns/iter",
            "extra": "iterations: 1408\ncpu: 497696.16477272776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 489096.38075318356,
            "unit": "ns/iter",
            "extra": "iterations: 1434\ncpu: 489096.8619246873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 315901.2379232549,
            "unit": "ns/iter",
            "extra": "iterations: 2215\ncpu: 315904.69525959215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 486753.2988186202,
            "unit": "ns/iter",
            "extra": "iterations: 1439\ncpu: 486736.69214731694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 23895.968216658803,
            "unit": "ns/iter",
            "extra": "iterations: 29355\ncpu: 23895.98024186712 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 117747.03226350037,
            "unit": "ns/iter",
            "extra": "iterations: 5951\ncpu: 117746.19391698894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 96308.86662059644,
            "unit": "ns/iter",
            "extra": "iterations: 7235\ncpu: 96307.17346233636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 95140.81186371329,
            "unit": "ns/iter",
            "extra": "iterations: 7367\ncpu: 95139.97556671678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 93884.80643862867,
            "unit": "ns/iter",
            "extra": "iterations: 7455\ncpu: 93883.68879946315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 174476.498629453,
            "unit": "ns/iter",
            "extra": "iterations: 4013\ncpu: 174476.20234238534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 613752.3237094776,
            "unit": "ns/iter",
            "extra": "iterations: 1143\ncpu: 613758.8801399876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 490790.68815692695,
            "unit": "ns/iter",
            "extra": "iterations: 1427\ncpu: 490788.8577435099 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 492744.4255469151,
            "unit": "ns/iter",
            "extra": "iterations: 1417\ncpu: 492736.41496119223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 483755.6797791499,
            "unit": "ns/iter",
            "extra": "iterations: 1449\ncpu: 483753.9682539656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 317067.18730158143,
            "unit": "ns/iter",
            "extra": "iterations: 2205\ncpu: 317070.79365078977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 482890.4259002317,
            "unit": "ns/iter",
            "extra": "iterations: 1444\ncpu: 482882.6869806152 ns\nthreads: 1"
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
        "date": 1702489600196,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 8596.15427044696,
            "unit": "ns/iter",
            "extra": "iterations: 81221\ncpu: 8595.972716415705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 62796.204376858244,
            "unit": "ns/iter",
            "extra": "iterations: 13480\ncpu: 62796.21661721068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 117028.80231931547,
            "unit": "ns/iter",
            "extra": "iterations: 7416\ncpu: 117026.65857605178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 168873.85065572077,
            "unit": "ns/iter",
            "extra": "iterations: 5109\ncpu: 168865.94245449203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 222653.92704856783,
            "unit": "ns/iter",
            "extra": "iterations: 3893\ncpu: 222651.45132288735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 273925.71610440436,
            "unit": "ns/iter",
            "extra": "iterations: 3142\ncpu: 273912.1896880968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 324929.59063672676,
            "unit": "ns/iter",
            "extra": "iterations: 2670\ncpu: 324916.02996254683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 378400.0469157097,
            "unit": "ns/iter",
            "extra": "iterations: 2302\ncpu: 378380.97306689824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 430895.03225807904,
            "unit": "ns/iter",
            "extra": "iterations: 2015\ncpu: 430868.2878411913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 7291.311903623677,
            "unit": "ns/iter",
            "extra": "iterations: 96206\ncpu: 7291.232355570347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5945.007399387856,
            "unit": "ns/iter",
            "extra": "iterations: 117307\ncpu: 5944.642689694566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5927.60585265018,
            "unit": "ns/iter",
            "extra": "iterations: 118032\ncpu: 5927.251084451674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5820.8645686049,
            "unit": "ns/iter",
            "extra": "iterations: 120238\ncpu: 5820.67482825729 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 10422.011561124662,
            "unit": "ns/iter",
            "extra": "iterations: 67035\ncpu: 10421.582755277106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 29235.820614539225,
            "unit": "ns/iter",
            "extra": "iterations: 27728\ncpu: 29234.56073283324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 148356.2677453062,
            "unit": "ns/iter",
            "extra": "iterations: 5748\ncpu: 148347.14683368139 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 113372.6956054292,
            "unit": "ns/iter",
            "extra": "iterations: 7441\ncpu: 113372.55745195548 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 113106.57060863942,
            "unit": "ns/iter",
            "extra": "iterations: 7492\ncpu: 113105.85958355592 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 109862.5818982297,
            "unit": "ns/iter",
            "extra": "iterations: 7723\ncpu: 109862.81237860951 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 368310.7980507,
            "unit": "ns/iter",
            "extra": "iterations: 2565\ncpu: 368290.99415204645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 2091657.1340910133,
            "unit": "ns/iter",
            "extra": "iterations: 440\ncpu: 2091562.0454545415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1643959.975221336,
            "unit": "ns/iter",
            "extra": "iterations: 565\ncpu: 1643884.2477876102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1645293.886725737,
            "unit": "ns/iter",
            "extra": "iterations: 565\ncpu: 1645203.0088495628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1599611.296041171,
            "unit": "ns/iter",
            "extra": "iterations: 581\ncpu: 1599460.7573149782 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 898311.7906524092,
            "unit": "ns/iter",
            "extra": "iterations: 1027\ncpu: 898267.0886075936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1581930.6113013376,
            "unit": "ns/iter",
            "extra": "iterations: 584\ncpu: 1581868.3219178051 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 37426.48658099288,
            "unit": "ns/iter",
            "extra": "iterations: 22021\ncpu: 37425.87075972945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 203025.59302326557,
            "unit": "ns/iter",
            "extra": "iterations: 3956\ncpu: 203012.13346814946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 145875.59114803126,
            "unit": "ns/iter",
            "extra": "iterations: 5897\ncpu: 145867.76326945916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 144976.6246195382,
            "unit": "ns/iter",
            "extra": "iterations: 5914\ncpu: 144970.67974298322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 134935.03945492106,
            "unit": "ns/iter",
            "extra": "iterations: 6311\ncpu: 134928.7909998413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 344019.95881188946,
            "unit": "ns/iter",
            "extra": "iterations: 2525\ncpu: 344019.8415841584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 2121563.000000011,
            "unit": "ns/iter",
            "extra": "iterations: 436\ncpu: 2121548.3944954053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1672627.4767023902,
            "unit": "ns/iter",
            "extra": "iterations: 558\ncpu: 1672612.0071684606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1666063.6007194994,
            "unit": "ns/iter",
            "extra": "iterations: 556\ncpu: 1666039.208633093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1601658.4375001406,
            "unit": "ns/iter",
            "extra": "iterations: 576\ncpu: 1601646.180555558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 926254.8408408186,
            "unit": "ns/iter",
            "extra": "iterations: 999\ncpu: 926249.0490490526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1606864.0397237206,
            "unit": "ns/iter",
            "extra": "iterations: 579\ncpu: 1606879.6200345468 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5697070.310000071,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5697134.0000000475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3392200.7838828326,
            "unit": "ns/iter",
            "extra": "iterations: 273\ncpu: 3392135.897435887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 27553.711719620253,
            "unit": "ns/iter",
            "extra": "iterations: 29617\ncpu: 27553.64824256342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 138734.02646103763,
            "unit": "ns/iter",
            "extra": "iterations: 6160\ncpu: 138734.36688311663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 107293.3340929263,
            "unit": "ns/iter",
            "extra": "iterations: 7899\ncpu: 107290.7836434991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 113695.16544752842,
            "unit": "ns/iter",
            "extra": "iterations: 7519\ncpu: 113691.07594094929 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 108149.56260307768,
            "unit": "ns/iter",
            "extra": "iterations: 7883\ncpu: 108146.14994291545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 284532.1012782715,
            "unit": "ns/iter",
            "extra": "iterations: 3051\ncpu: 284532.710586693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 2083403.1950674304,
            "unit": "ns/iter",
            "extra": "iterations: 446\ncpu: 2083381.1659192902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1612424.5051724394,
            "unit": "ns/iter",
            "extra": "iterations: 580\ncpu: 1612425.6896551799 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1620309.915371397,
            "unit": "ns/iter",
            "extra": "iterations: 579\ncpu: 1620326.4248704698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1572456.2070707206,
            "unit": "ns/iter",
            "extra": "iterations: 594\ncpu: 1572457.5757575769 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 878937.9688090645,
            "unit": "ns/iter",
            "extra": "iterations: 1058\ncpu: 878930.7183364893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1566024.8621847164,
            "unit": "ns/iter",
            "extra": "iterations: 595\ncpu: 1565992.1008403397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 3280.637580267021,
            "unit": "ns/iter",
            "extra": "iterations: 214751\ncpu: 3280.641300855408 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 20968.827502547254,
            "unit": "ns/iter",
            "extra": "iterations: 33386\ncpu: 20968.53171988248 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 15566.34790240761,
            "unit": "ns/iter",
            "extra": "iterations: 45004\ncpu: 15566.131899386812 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 16170.671820275622,
            "unit": "ns/iter",
            "extra": "iterations: 43400\ncpu: 16170.645161290433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 12272.815820340471,
            "unit": "ns/iter",
            "extra": "iterations: 46889\ncpu: 12272.957410053526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 108159.07758216932,
            "unit": "ns/iter",
            "extra": "iterations: 6419\ncpu: 108160.30534351092 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 143941.10703239348,
            "unit": "ns/iter",
            "extra": "iterations: 4849\ncpu: 143939.3276964326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 34590.717687918754,
            "unit": "ns/iter",
            "extra": "iterations: 20155\ncpu: 34590.24063507811 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 34602.64943752886,
            "unit": "ns/iter",
            "extra": "iterations: 20179\ncpu: 34600.500520342845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 34529.91002862412,
            "unit": "ns/iter",
            "extra": "iterations: 20262\ncpu: 34529.65649985199 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 69618.57566441386,
            "unit": "ns/iter",
            "extra": "iterations: 10084\ncpu: 69614.82546608489 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 64673.3110309026,
            "unit": "ns/iter",
            "extra": "iterations: 10806\ncpu: 64673.089024616085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 23511.345783699588,
            "unit": "ns/iter",
            "extra": "iterations: 29718\ncpu: 23509.84251968518 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 119212.16209306513,
            "unit": "ns/iter",
            "extra": "iterations: 5867\ncpu: 119203.98840974936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 96300.17949423444,
            "unit": "ns/iter",
            "extra": "iterations: 7276\ncpu: 96298.18581638174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 95585.71167485206,
            "unit": "ns/iter",
            "extra": "iterations: 7332\ncpu: 95584.2062193132 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 94851.0747967434,
            "unit": "ns/iter",
            "extra": "iterations: 7380\ncpu: 94849.45799458024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 179275.64941054257,
            "unit": "ns/iter",
            "extra": "iterations: 3902\ncpu: 179273.57765248773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 615210.3382997725,
            "unit": "ns/iter",
            "extra": "iterations: 1141\ncpu: 615211.0429447918 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 496461.5820895327,
            "unit": "ns/iter",
            "extra": "iterations: 1407\ncpu: 496447.12153518223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 497704.5625000091,
            "unit": "ns/iter",
            "extra": "iterations: 1408\ncpu: 497696.16477272776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 489096.38075318356,
            "unit": "ns/iter",
            "extra": "iterations: 1434\ncpu: 489096.8619246873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 315901.2379232549,
            "unit": "ns/iter",
            "extra": "iterations: 2215\ncpu: 315904.69525959215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 486753.2988186202,
            "unit": "ns/iter",
            "extra": "iterations: 1439\ncpu: 486736.69214731694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 23895.968216658803,
            "unit": "ns/iter",
            "extra": "iterations: 29355\ncpu: 23895.98024186712 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 117747.03226350037,
            "unit": "ns/iter",
            "extra": "iterations: 5951\ncpu: 117746.19391698894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 96308.86662059644,
            "unit": "ns/iter",
            "extra": "iterations: 7235\ncpu: 96307.17346233636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 95140.81186371329,
            "unit": "ns/iter",
            "extra": "iterations: 7367\ncpu: 95139.97556671678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 93884.80643862867,
            "unit": "ns/iter",
            "extra": "iterations: 7455\ncpu: 93883.68879946315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 174476.498629453,
            "unit": "ns/iter",
            "extra": "iterations: 4013\ncpu: 174476.20234238534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 613752.3237094776,
            "unit": "ns/iter",
            "extra": "iterations: 1143\ncpu: 613758.8801399876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 490790.68815692695,
            "unit": "ns/iter",
            "extra": "iterations: 1427\ncpu: 490788.8577435099 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 492744.4255469151,
            "unit": "ns/iter",
            "extra": "iterations: 1417\ncpu: 492736.41496119223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 483755.6797791499,
            "unit": "ns/iter",
            "extra": "iterations: 1449\ncpu: 483753.9682539656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 317067.18730158143,
            "unit": "ns/iter",
            "extra": "iterations: 2205\ncpu: 317070.79365078977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 482890.4259002317,
            "unit": "ns/iter",
            "extra": "iterations: 1444\ncpu: 482882.6869806152 ns\nthreads: 1"
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
        "date": 1702489600196,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 8596.15427044696,
            "unit": "ns/iter",
            "extra": "iterations: 81221\ncpu: 8595.972716415705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 62796.204376858244,
            "unit": "ns/iter",
            "extra": "iterations: 13480\ncpu: 62796.21661721068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 117028.80231931547,
            "unit": "ns/iter",
            "extra": "iterations: 7416\ncpu: 117026.65857605178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 168873.85065572077,
            "unit": "ns/iter",
            "extra": "iterations: 5109\ncpu: 168865.94245449203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 222653.92704856783,
            "unit": "ns/iter",
            "extra": "iterations: 3893\ncpu: 222651.45132288735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 273925.71610440436,
            "unit": "ns/iter",
            "extra": "iterations: 3142\ncpu: 273912.1896880968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 324929.59063672676,
            "unit": "ns/iter",
            "extra": "iterations: 2670\ncpu: 324916.02996254683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 378400.0469157097,
            "unit": "ns/iter",
            "extra": "iterations: 2302\ncpu: 378380.97306689824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 430895.03225807904,
            "unit": "ns/iter",
            "extra": "iterations: 2015\ncpu: 430868.2878411913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 7291.311903623677,
            "unit": "ns/iter",
            "extra": "iterations: 96206\ncpu: 7291.232355570347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5945.007399387856,
            "unit": "ns/iter",
            "extra": "iterations: 117307\ncpu: 5944.642689694566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5927.60585265018,
            "unit": "ns/iter",
            "extra": "iterations: 118032\ncpu: 5927.251084451674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5820.8645686049,
            "unit": "ns/iter",
            "extra": "iterations: 120238\ncpu: 5820.67482825729 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 10422.011561124662,
            "unit": "ns/iter",
            "extra": "iterations: 67035\ncpu: 10421.582755277106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 29235.820614539225,
            "unit": "ns/iter",
            "extra": "iterations: 27728\ncpu: 29234.56073283324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 148356.2677453062,
            "unit": "ns/iter",
            "extra": "iterations: 5748\ncpu: 148347.14683368139 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 113372.6956054292,
            "unit": "ns/iter",
            "extra": "iterations: 7441\ncpu: 113372.55745195548 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 113106.57060863942,
            "unit": "ns/iter",
            "extra": "iterations: 7492\ncpu: 113105.85958355592 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 109862.5818982297,
            "unit": "ns/iter",
            "extra": "iterations: 7723\ncpu: 109862.81237860951 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 368310.7980507,
            "unit": "ns/iter",
            "extra": "iterations: 2565\ncpu: 368290.99415204645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 2091657.1340910133,
            "unit": "ns/iter",
            "extra": "iterations: 440\ncpu: 2091562.0454545415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1643959.975221336,
            "unit": "ns/iter",
            "extra": "iterations: 565\ncpu: 1643884.2477876102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1645293.886725737,
            "unit": "ns/iter",
            "extra": "iterations: 565\ncpu: 1645203.0088495628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1599611.296041171,
            "unit": "ns/iter",
            "extra": "iterations: 581\ncpu: 1599460.7573149782 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 898311.7906524092,
            "unit": "ns/iter",
            "extra": "iterations: 1027\ncpu: 898267.0886075936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1581930.6113013376,
            "unit": "ns/iter",
            "extra": "iterations: 584\ncpu: 1581868.3219178051 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 37426.48658099288,
            "unit": "ns/iter",
            "extra": "iterations: 22021\ncpu: 37425.87075972945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 203025.59302326557,
            "unit": "ns/iter",
            "extra": "iterations: 3956\ncpu: 203012.13346814946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 145875.59114803126,
            "unit": "ns/iter",
            "extra": "iterations: 5897\ncpu: 145867.76326945916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 144976.6246195382,
            "unit": "ns/iter",
            "extra": "iterations: 5914\ncpu: 144970.67974298322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 134935.03945492106,
            "unit": "ns/iter",
            "extra": "iterations: 6311\ncpu: 134928.7909998413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 344019.95881188946,
            "unit": "ns/iter",
            "extra": "iterations: 2525\ncpu: 344019.8415841584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 2121563.000000011,
            "unit": "ns/iter",
            "extra": "iterations: 436\ncpu: 2121548.3944954053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1672627.4767023902,
            "unit": "ns/iter",
            "extra": "iterations: 558\ncpu: 1672612.0071684606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1666063.6007194994,
            "unit": "ns/iter",
            "extra": "iterations: 556\ncpu: 1666039.208633093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1601658.4375001406,
            "unit": "ns/iter",
            "extra": "iterations: 576\ncpu: 1601646.180555558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 926254.8408408186,
            "unit": "ns/iter",
            "extra": "iterations: 999\ncpu: 926249.0490490526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1606864.0397237206,
            "unit": "ns/iter",
            "extra": "iterations: 579\ncpu: 1606879.6200345468 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5697070.310000071,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5697134.0000000475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3392200.7838828326,
            "unit": "ns/iter",
            "extra": "iterations: 273\ncpu: 3392135.897435887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 27553.711719620253,
            "unit": "ns/iter",
            "extra": "iterations: 29617\ncpu: 27553.64824256342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 138734.02646103763,
            "unit": "ns/iter",
            "extra": "iterations: 6160\ncpu: 138734.36688311663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 107293.3340929263,
            "unit": "ns/iter",
            "extra": "iterations: 7899\ncpu: 107290.7836434991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 113695.16544752842,
            "unit": "ns/iter",
            "extra": "iterations: 7519\ncpu: 113691.07594094929 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 108149.56260307768,
            "unit": "ns/iter",
            "extra": "iterations: 7883\ncpu: 108146.14994291545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 284532.1012782715,
            "unit": "ns/iter",
            "extra": "iterations: 3051\ncpu: 284532.710586693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 2083403.1950674304,
            "unit": "ns/iter",
            "extra": "iterations: 446\ncpu: 2083381.1659192902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1612424.5051724394,
            "unit": "ns/iter",
            "extra": "iterations: 580\ncpu: 1612425.6896551799 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1620309.915371397,
            "unit": "ns/iter",
            "extra": "iterations: 579\ncpu: 1620326.4248704698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1572456.2070707206,
            "unit": "ns/iter",
            "extra": "iterations: 594\ncpu: 1572457.5757575769 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 878937.9688090645,
            "unit": "ns/iter",
            "extra": "iterations: 1058\ncpu: 878930.7183364893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1566024.8621847164,
            "unit": "ns/iter",
            "extra": "iterations: 595\ncpu: 1565992.1008403397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 3280.637580267021,
            "unit": "ns/iter",
            "extra": "iterations: 214751\ncpu: 3280.641300855408 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 20968.827502547254,
            "unit": "ns/iter",
            "extra": "iterations: 33386\ncpu: 20968.53171988248 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 15566.34790240761,
            "unit": "ns/iter",
            "extra": "iterations: 45004\ncpu: 15566.131899386812 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 16170.671820275622,
            "unit": "ns/iter",
            "extra": "iterations: 43400\ncpu: 16170.645161290433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 12272.815820340471,
            "unit": "ns/iter",
            "extra": "iterations: 46889\ncpu: 12272.957410053526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 108159.07758216932,
            "unit": "ns/iter",
            "extra": "iterations: 6419\ncpu: 108160.30534351092 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 143941.10703239348,
            "unit": "ns/iter",
            "extra": "iterations: 4849\ncpu: 143939.3276964326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 34590.717687918754,
            "unit": "ns/iter",
            "extra": "iterations: 20155\ncpu: 34590.24063507811 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 34602.64943752886,
            "unit": "ns/iter",
            "extra": "iterations: 20179\ncpu: 34600.500520342845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 34529.91002862412,
            "unit": "ns/iter",
            "extra": "iterations: 20262\ncpu: 34529.65649985199 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 69618.57566441386,
            "unit": "ns/iter",
            "extra": "iterations: 10084\ncpu: 69614.82546608489 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 64673.3110309026,
            "unit": "ns/iter",
            "extra": "iterations: 10806\ncpu: 64673.089024616085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 23511.345783699588,
            "unit": "ns/iter",
            "extra": "iterations: 29718\ncpu: 23509.84251968518 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 119212.16209306513,
            "unit": "ns/iter",
            "extra": "iterations: 5867\ncpu: 119203.98840974936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 96300.17949423444,
            "unit": "ns/iter",
            "extra": "iterations: 7276\ncpu: 96298.18581638174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 95585.71167485206,
            "unit": "ns/iter",
            "extra": "iterations: 7332\ncpu: 95584.2062193132 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 94851.0747967434,
            "unit": "ns/iter",
            "extra": "iterations: 7380\ncpu: 94849.45799458024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 179275.64941054257,
            "unit": "ns/iter",
            "extra": "iterations: 3902\ncpu: 179273.57765248773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 615210.3382997725,
            "unit": "ns/iter",
            "extra": "iterations: 1141\ncpu: 615211.0429447918 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 496461.5820895327,
            "unit": "ns/iter",
            "extra": "iterations: 1407\ncpu: 496447.12153518223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 497704.5625000091,
            "unit": "ns/iter",
            "extra": "iterations: 1408\ncpu: 497696.16477272776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 489096.38075318356,
            "unit": "ns/iter",
            "extra": "iterations: 1434\ncpu: 489096.8619246873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 315901.2379232549,
            "unit": "ns/iter",
            "extra": "iterations: 2215\ncpu: 315904.69525959215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 486753.2988186202,
            "unit": "ns/iter",
            "extra": "iterations: 1439\ncpu: 486736.69214731694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 23895.968216658803,
            "unit": "ns/iter",
            "extra": "iterations: 29355\ncpu: 23895.98024186712 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 117747.03226350037,
            "unit": "ns/iter",
            "extra": "iterations: 5951\ncpu: 117746.19391698894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 96308.86662059644,
            "unit": "ns/iter",
            "extra": "iterations: 7235\ncpu: 96307.17346233636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 95140.81186371329,
            "unit": "ns/iter",
            "extra": "iterations: 7367\ncpu: 95139.97556671678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 93884.80643862867,
            "unit": "ns/iter",
            "extra": "iterations: 7455\ncpu: 93883.68879946315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 174476.498629453,
            "unit": "ns/iter",
            "extra": "iterations: 4013\ncpu: 174476.20234238534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 613752.3237094776,
            "unit": "ns/iter",
            "extra": "iterations: 1143\ncpu: 613758.8801399876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 490790.68815692695,
            "unit": "ns/iter",
            "extra": "iterations: 1427\ncpu: 490788.8577435099 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 492744.4255469151,
            "unit": "ns/iter",
            "extra": "iterations: 1417\ncpu: 492736.41496119223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 483755.6797791499,
            "unit": "ns/iter",
            "extra": "iterations: 1449\ncpu: 483753.9682539656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 317067.18730158143,
            "unit": "ns/iter",
            "extra": "iterations: 2205\ncpu: 317070.79365078977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 482890.4259002317,
            "unit": "ns/iter",
            "extra": "iterations: 1444\ncpu: 482882.6869806152 ns\nthreads: 1"
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
        "date": 1702489600196,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 8596.15427044696,
            "unit": "ns/iter",
            "extra": "iterations: 81221\ncpu: 8595.972716415705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 62796.204376858244,
            "unit": "ns/iter",
            "extra": "iterations: 13480\ncpu: 62796.21661721068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 117028.80231931547,
            "unit": "ns/iter",
            "extra": "iterations: 7416\ncpu: 117026.65857605178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 168873.85065572077,
            "unit": "ns/iter",
            "extra": "iterations: 5109\ncpu: 168865.94245449203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 222653.92704856783,
            "unit": "ns/iter",
            "extra": "iterations: 3893\ncpu: 222651.45132288735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 273925.71610440436,
            "unit": "ns/iter",
            "extra": "iterations: 3142\ncpu: 273912.1896880968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 324929.59063672676,
            "unit": "ns/iter",
            "extra": "iterations: 2670\ncpu: 324916.02996254683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 378400.0469157097,
            "unit": "ns/iter",
            "extra": "iterations: 2302\ncpu: 378380.97306689824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 430895.03225807904,
            "unit": "ns/iter",
            "extra": "iterations: 2015\ncpu: 430868.2878411913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 7291.311903623677,
            "unit": "ns/iter",
            "extra": "iterations: 96206\ncpu: 7291.232355570347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5945.007399387856,
            "unit": "ns/iter",
            "extra": "iterations: 117307\ncpu: 5944.642689694566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5927.60585265018,
            "unit": "ns/iter",
            "extra": "iterations: 118032\ncpu: 5927.251084451674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5820.8645686049,
            "unit": "ns/iter",
            "extra": "iterations: 120238\ncpu: 5820.67482825729 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 10422.011561124662,
            "unit": "ns/iter",
            "extra": "iterations: 67035\ncpu: 10421.582755277106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 29235.820614539225,
            "unit": "ns/iter",
            "extra": "iterations: 27728\ncpu: 29234.56073283324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 148356.2677453062,
            "unit": "ns/iter",
            "extra": "iterations: 5748\ncpu: 148347.14683368139 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 113372.6956054292,
            "unit": "ns/iter",
            "extra": "iterations: 7441\ncpu: 113372.55745195548 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 113106.57060863942,
            "unit": "ns/iter",
            "extra": "iterations: 7492\ncpu: 113105.85958355592 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 109862.5818982297,
            "unit": "ns/iter",
            "extra": "iterations: 7723\ncpu: 109862.81237860951 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 368310.7980507,
            "unit": "ns/iter",
            "extra": "iterations: 2565\ncpu: 368290.99415204645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 2091657.1340910133,
            "unit": "ns/iter",
            "extra": "iterations: 440\ncpu: 2091562.0454545415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1643959.975221336,
            "unit": "ns/iter",
            "extra": "iterations: 565\ncpu: 1643884.2477876102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1645293.886725737,
            "unit": "ns/iter",
            "extra": "iterations: 565\ncpu: 1645203.0088495628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1599611.296041171,
            "unit": "ns/iter",
            "extra": "iterations: 581\ncpu: 1599460.7573149782 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 898311.7906524092,
            "unit": "ns/iter",
            "extra": "iterations: 1027\ncpu: 898267.0886075936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1581930.6113013376,
            "unit": "ns/iter",
            "extra": "iterations: 584\ncpu: 1581868.3219178051 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 37426.48658099288,
            "unit": "ns/iter",
            "extra": "iterations: 22021\ncpu: 37425.87075972945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 203025.59302326557,
            "unit": "ns/iter",
            "extra": "iterations: 3956\ncpu: 203012.13346814946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 145875.59114803126,
            "unit": "ns/iter",
            "extra": "iterations: 5897\ncpu: 145867.76326945916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 144976.6246195382,
            "unit": "ns/iter",
            "extra": "iterations: 5914\ncpu: 144970.67974298322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 134935.03945492106,
            "unit": "ns/iter",
            "extra": "iterations: 6311\ncpu: 134928.7909998413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 344019.95881188946,
            "unit": "ns/iter",
            "extra": "iterations: 2525\ncpu: 344019.8415841584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 2121563.000000011,
            "unit": "ns/iter",
            "extra": "iterations: 436\ncpu: 2121548.3944954053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1672627.4767023902,
            "unit": "ns/iter",
            "extra": "iterations: 558\ncpu: 1672612.0071684606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1666063.6007194994,
            "unit": "ns/iter",
            "extra": "iterations: 556\ncpu: 1666039.208633093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1601658.4375001406,
            "unit": "ns/iter",
            "extra": "iterations: 576\ncpu: 1601646.180555558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 926254.8408408186,
            "unit": "ns/iter",
            "extra": "iterations: 999\ncpu: 926249.0490490526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1606864.0397237206,
            "unit": "ns/iter",
            "extra": "iterations: 579\ncpu: 1606879.6200345468 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5697070.310000071,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5697134.0000000475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3392200.7838828326,
            "unit": "ns/iter",
            "extra": "iterations: 273\ncpu: 3392135.897435887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 27553.711719620253,
            "unit": "ns/iter",
            "extra": "iterations: 29617\ncpu: 27553.64824256342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 138734.02646103763,
            "unit": "ns/iter",
            "extra": "iterations: 6160\ncpu: 138734.36688311663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 107293.3340929263,
            "unit": "ns/iter",
            "extra": "iterations: 7899\ncpu: 107290.7836434991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 113695.16544752842,
            "unit": "ns/iter",
            "extra": "iterations: 7519\ncpu: 113691.07594094929 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 108149.56260307768,
            "unit": "ns/iter",
            "extra": "iterations: 7883\ncpu: 108146.14994291545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 284532.1012782715,
            "unit": "ns/iter",
            "extra": "iterations: 3051\ncpu: 284532.710586693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 2083403.1950674304,
            "unit": "ns/iter",
            "extra": "iterations: 446\ncpu: 2083381.1659192902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1612424.5051724394,
            "unit": "ns/iter",
            "extra": "iterations: 580\ncpu: 1612425.6896551799 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1620309.915371397,
            "unit": "ns/iter",
            "extra": "iterations: 579\ncpu: 1620326.4248704698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1572456.2070707206,
            "unit": "ns/iter",
            "extra": "iterations: 594\ncpu: 1572457.5757575769 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 878937.9688090645,
            "unit": "ns/iter",
            "extra": "iterations: 1058\ncpu: 878930.7183364893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1566024.8621847164,
            "unit": "ns/iter",
            "extra": "iterations: 595\ncpu: 1565992.1008403397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 3280.637580267021,
            "unit": "ns/iter",
            "extra": "iterations: 214751\ncpu: 3280.641300855408 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 20968.827502547254,
            "unit": "ns/iter",
            "extra": "iterations: 33386\ncpu: 20968.53171988248 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 15566.34790240761,
            "unit": "ns/iter",
            "extra": "iterations: 45004\ncpu: 15566.131899386812 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 16170.671820275622,
            "unit": "ns/iter",
            "extra": "iterations: 43400\ncpu: 16170.645161290433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 12272.815820340471,
            "unit": "ns/iter",
            "extra": "iterations: 46889\ncpu: 12272.957410053526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 108159.07758216932,
            "unit": "ns/iter",
            "extra": "iterations: 6419\ncpu: 108160.30534351092 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 143941.10703239348,
            "unit": "ns/iter",
            "extra": "iterations: 4849\ncpu: 143939.3276964326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 34590.717687918754,
            "unit": "ns/iter",
            "extra": "iterations: 20155\ncpu: 34590.24063507811 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 34602.64943752886,
            "unit": "ns/iter",
            "extra": "iterations: 20179\ncpu: 34600.500520342845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 34529.91002862412,
            "unit": "ns/iter",
            "extra": "iterations: 20262\ncpu: 34529.65649985199 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 69618.57566441386,
            "unit": "ns/iter",
            "extra": "iterations: 10084\ncpu: 69614.82546608489 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 64673.3110309026,
            "unit": "ns/iter",
            "extra": "iterations: 10806\ncpu: 64673.089024616085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 23511.345783699588,
            "unit": "ns/iter",
            "extra": "iterations: 29718\ncpu: 23509.84251968518 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 119212.16209306513,
            "unit": "ns/iter",
            "extra": "iterations: 5867\ncpu: 119203.98840974936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 96300.17949423444,
            "unit": "ns/iter",
            "extra": "iterations: 7276\ncpu: 96298.18581638174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 95585.71167485206,
            "unit": "ns/iter",
            "extra": "iterations: 7332\ncpu: 95584.2062193132 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 94851.0747967434,
            "unit": "ns/iter",
            "extra": "iterations: 7380\ncpu: 94849.45799458024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 179275.64941054257,
            "unit": "ns/iter",
            "extra": "iterations: 3902\ncpu: 179273.57765248773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 615210.3382997725,
            "unit": "ns/iter",
            "extra": "iterations: 1141\ncpu: 615211.0429447918 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 496461.5820895327,
            "unit": "ns/iter",
            "extra": "iterations: 1407\ncpu: 496447.12153518223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 497704.5625000091,
            "unit": "ns/iter",
            "extra": "iterations: 1408\ncpu: 497696.16477272776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 489096.38075318356,
            "unit": "ns/iter",
            "extra": "iterations: 1434\ncpu: 489096.8619246873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 315901.2379232549,
            "unit": "ns/iter",
            "extra": "iterations: 2215\ncpu: 315904.69525959215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 486753.2988186202,
            "unit": "ns/iter",
            "extra": "iterations: 1439\ncpu: 486736.69214731694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 23895.968216658803,
            "unit": "ns/iter",
            "extra": "iterations: 29355\ncpu: 23895.98024186712 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 117747.03226350037,
            "unit": "ns/iter",
            "extra": "iterations: 5951\ncpu: 117746.19391698894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 96308.86662059644,
            "unit": "ns/iter",
            "extra": "iterations: 7235\ncpu: 96307.17346233636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 95140.81186371329,
            "unit": "ns/iter",
            "extra": "iterations: 7367\ncpu: 95139.97556671678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 93884.80643862867,
            "unit": "ns/iter",
            "extra": "iterations: 7455\ncpu: 93883.68879946315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 174476.498629453,
            "unit": "ns/iter",
            "extra": "iterations: 4013\ncpu: 174476.20234238534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 613752.3237094776,
            "unit": "ns/iter",
            "extra": "iterations: 1143\ncpu: 613758.8801399876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 490790.68815692695,
            "unit": "ns/iter",
            "extra": "iterations: 1427\ncpu: 490788.8577435099 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 492744.4255469151,
            "unit": "ns/iter",
            "extra": "iterations: 1417\ncpu: 492736.41496119223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 483755.6797791499,
            "unit": "ns/iter",
            "extra": "iterations: 1449\ncpu: 483753.9682539656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 317067.18730158143,
            "unit": "ns/iter",
            "extra": "iterations: 2205\ncpu: 317070.79365078977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 482890.4259002317,
            "unit": "ns/iter",
            "extra": "iterations: 1444\ncpu: 482882.6869806152 ns\nthreads: 1"
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
        "date": 1702489600196,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 8596.15427044696,
            "unit": "ns/iter",
            "extra": "iterations: 81221\ncpu: 8595.972716415705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 62796.204376858244,
            "unit": "ns/iter",
            "extra": "iterations: 13480\ncpu: 62796.21661721068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 117028.80231931547,
            "unit": "ns/iter",
            "extra": "iterations: 7416\ncpu: 117026.65857605178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 168873.85065572077,
            "unit": "ns/iter",
            "extra": "iterations: 5109\ncpu: 168865.94245449203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 222653.92704856783,
            "unit": "ns/iter",
            "extra": "iterations: 3893\ncpu: 222651.45132288735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 273925.71610440436,
            "unit": "ns/iter",
            "extra": "iterations: 3142\ncpu: 273912.1896880968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 324929.59063672676,
            "unit": "ns/iter",
            "extra": "iterations: 2670\ncpu: 324916.02996254683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 378400.0469157097,
            "unit": "ns/iter",
            "extra": "iterations: 2302\ncpu: 378380.97306689824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 430895.03225807904,
            "unit": "ns/iter",
            "extra": "iterations: 2015\ncpu: 430868.2878411913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 7291.311903623677,
            "unit": "ns/iter",
            "extra": "iterations: 96206\ncpu: 7291.232355570347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5945.007399387856,
            "unit": "ns/iter",
            "extra": "iterations: 117307\ncpu: 5944.642689694566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5927.60585265018,
            "unit": "ns/iter",
            "extra": "iterations: 118032\ncpu: 5927.251084451674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5820.8645686049,
            "unit": "ns/iter",
            "extra": "iterations: 120238\ncpu: 5820.67482825729 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 10422.011561124662,
            "unit": "ns/iter",
            "extra": "iterations: 67035\ncpu: 10421.582755277106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 29235.820614539225,
            "unit": "ns/iter",
            "extra": "iterations: 27728\ncpu: 29234.56073283324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 148356.2677453062,
            "unit": "ns/iter",
            "extra": "iterations: 5748\ncpu: 148347.14683368139 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 113372.6956054292,
            "unit": "ns/iter",
            "extra": "iterations: 7441\ncpu: 113372.55745195548 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 113106.57060863942,
            "unit": "ns/iter",
            "extra": "iterations: 7492\ncpu: 113105.85958355592 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 109862.5818982297,
            "unit": "ns/iter",
            "extra": "iterations: 7723\ncpu: 109862.81237860951 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 368310.7980507,
            "unit": "ns/iter",
            "extra": "iterations: 2565\ncpu: 368290.99415204645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 2091657.1340910133,
            "unit": "ns/iter",
            "extra": "iterations: 440\ncpu: 2091562.0454545415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1643959.975221336,
            "unit": "ns/iter",
            "extra": "iterations: 565\ncpu: 1643884.2477876102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1645293.886725737,
            "unit": "ns/iter",
            "extra": "iterations: 565\ncpu: 1645203.0088495628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1599611.296041171,
            "unit": "ns/iter",
            "extra": "iterations: 581\ncpu: 1599460.7573149782 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 898311.7906524092,
            "unit": "ns/iter",
            "extra": "iterations: 1027\ncpu: 898267.0886075936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1581930.6113013376,
            "unit": "ns/iter",
            "extra": "iterations: 584\ncpu: 1581868.3219178051 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 37426.48658099288,
            "unit": "ns/iter",
            "extra": "iterations: 22021\ncpu: 37425.87075972945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 203025.59302326557,
            "unit": "ns/iter",
            "extra": "iterations: 3956\ncpu: 203012.13346814946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 145875.59114803126,
            "unit": "ns/iter",
            "extra": "iterations: 5897\ncpu: 145867.76326945916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 144976.6246195382,
            "unit": "ns/iter",
            "extra": "iterations: 5914\ncpu: 144970.67974298322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 134935.03945492106,
            "unit": "ns/iter",
            "extra": "iterations: 6311\ncpu: 134928.7909998413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 344019.95881188946,
            "unit": "ns/iter",
            "extra": "iterations: 2525\ncpu: 344019.8415841584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 2121563.000000011,
            "unit": "ns/iter",
            "extra": "iterations: 436\ncpu: 2121548.3944954053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1672627.4767023902,
            "unit": "ns/iter",
            "extra": "iterations: 558\ncpu: 1672612.0071684606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1666063.6007194994,
            "unit": "ns/iter",
            "extra": "iterations: 556\ncpu: 1666039.208633093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1601658.4375001406,
            "unit": "ns/iter",
            "extra": "iterations: 576\ncpu: 1601646.180555558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 926254.8408408186,
            "unit": "ns/iter",
            "extra": "iterations: 999\ncpu: 926249.0490490526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1606864.0397237206,
            "unit": "ns/iter",
            "extra": "iterations: 579\ncpu: 1606879.6200345468 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5697070.310000071,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5697134.0000000475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3392200.7838828326,
            "unit": "ns/iter",
            "extra": "iterations: 273\ncpu: 3392135.897435887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 27553.711719620253,
            "unit": "ns/iter",
            "extra": "iterations: 29617\ncpu: 27553.64824256342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 138734.02646103763,
            "unit": "ns/iter",
            "extra": "iterations: 6160\ncpu: 138734.36688311663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 107293.3340929263,
            "unit": "ns/iter",
            "extra": "iterations: 7899\ncpu: 107290.7836434991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 113695.16544752842,
            "unit": "ns/iter",
            "extra": "iterations: 7519\ncpu: 113691.07594094929 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 108149.56260307768,
            "unit": "ns/iter",
            "extra": "iterations: 7883\ncpu: 108146.14994291545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 284532.1012782715,
            "unit": "ns/iter",
            "extra": "iterations: 3051\ncpu: 284532.710586693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 2083403.1950674304,
            "unit": "ns/iter",
            "extra": "iterations: 446\ncpu: 2083381.1659192902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1612424.5051724394,
            "unit": "ns/iter",
            "extra": "iterations: 580\ncpu: 1612425.6896551799 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1620309.915371397,
            "unit": "ns/iter",
            "extra": "iterations: 579\ncpu: 1620326.4248704698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1572456.2070707206,
            "unit": "ns/iter",
            "extra": "iterations: 594\ncpu: 1572457.5757575769 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 878937.9688090645,
            "unit": "ns/iter",
            "extra": "iterations: 1058\ncpu: 878930.7183364893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1566024.8621847164,
            "unit": "ns/iter",
            "extra": "iterations: 595\ncpu: 1565992.1008403397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 3280.637580267021,
            "unit": "ns/iter",
            "extra": "iterations: 214751\ncpu: 3280.641300855408 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 20968.827502547254,
            "unit": "ns/iter",
            "extra": "iterations: 33386\ncpu: 20968.53171988248 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 15566.34790240761,
            "unit": "ns/iter",
            "extra": "iterations: 45004\ncpu: 15566.131899386812 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 16170.671820275622,
            "unit": "ns/iter",
            "extra": "iterations: 43400\ncpu: 16170.645161290433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 12272.815820340471,
            "unit": "ns/iter",
            "extra": "iterations: 46889\ncpu: 12272.957410053526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 108159.07758216932,
            "unit": "ns/iter",
            "extra": "iterations: 6419\ncpu: 108160.30534351092 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 143941.10703239348,
            "unit": "ns/iter",
            "extra": "iterations: 4849\ncpu: 143939.3276964326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 34590.717687918754,
            "unit": "ns/iter",
            "extra": "iterations: 20155\ncpu: 34590.24063507811 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 34602.64943752886,
            "unit": "ns/iter",
            "extra": "iterations: 20179\ncpu: 34600.500520342845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 34529.91002862412,
            "unit": "ns/iter",
            "extra": "iterations: 20262\ncpu: 34529.65649985199 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 69618.57566441386,
            "unit": "ns/iter",
            "extra": "iterations: 10084\ncpu: 69614.82546608489 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 64673.3110309026,
            "unit": "ns/iter",
            "extra": "iterations: 10806\ncpu: 64673.089024616085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 23511.345783699588,
            "unit": "ns/iter",
            "extra": "iterations: 29718\ncpu: 23509.84251968518 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 119212.16209306513,
            "unit": "ns/iter",
            "extra": "iterations: 5867\ncpu: 119203.98840974936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 96300.17949423444,
            "unit": "ns/iter",
            "extra": "iterations: 7276\ncpu: 96298.18581638174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 95585.71167485206,
            "unit": "ns/iter",
            "extra": "iterations: 7332\ncpu: 95584.2062193132 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 94851.0747967434,
            "unit": "ns/iter",
            "extra": "iterations: 7380\ncpu: 94849.45799458024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 179275.64941054257,
            "unit": "ns/iter",
            "extra": "iterations: 3902\ncpu: 179273.57765248773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 615210.3382997725,
            "unit": "ns/iter",
            "extra": "iterations: 1141\ncpu: 615211.0429447918 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 496461.5820895327,
            "unit": "ns/iter",
            "extra": "iterations: 1407\ncpu: 496447.12153518223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 497704.5625000091,
            "unit": "ns/iter",
            "extra": "iterations: 1408\ncpu: 497696.16477272776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 489096.38075318356,
            "unit": "ns/iter",
            "extra": "iterations: 1434\ncpu: 489096.8619246873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 315901.2379232549,
            "unit": "ns/iter",
            "extra": "iterations: 2215\ncpu: 315904.69525959215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 486753.2988186202,
            "unit": "ns/iter",
            "extra": "iterations: 1439\ncpu: 486736.69214731694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 23895.968216658803,
            "unit": "ns/iter",
            "extra": "iterations: 29355\ncpu: 23895.98024186712 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 117747.03226350037,
            "unit": "ns/iter",
            "extra": "iterations: 5951\ncpu: 117746.19391698894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 96308.86662059644,
            "unit": "ns/iter",
            "extra": "iterations: 7235\ncpu: 96307.17346233636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 95140.81186371329,
            "unit": "ns/iter",
            "extra": "iterations: 7367\ncpu: 95139.97556671678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 93884.80643862867,
            "unit": "ns/iter",
            "extra": "iterations: 7455\ncpu: 93883.68879946315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 174476.498629453,
            "unit": "ns/iter",
            "extra": "iterations: 4013\ncpu: 174476.20234238534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 613752.3237094776,
            "unit": "ns/iter",
            "extra": "iterations: 1143\ncpu: 613758.8801399876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 490790.68815692695,
            "unit": "ns/iter",
            "extra": "iterations: 1427\ncpu: 490788.8577435099 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 492744.4255469151,
            "unit": "ns/iter",
            "extra": "iterations: 1417\ncpu: 492736.41496119223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 483755.6797791499,
            "unit": "ns/iter",
            "extra": "iterations: 1449\ncpu: 483753.9682539656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 317067.18730158143,
            "unit": "ns/iter",
            "extra": "iterations: 2205\ncpu: 317070.79365078977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 482890.4259002317,
            "unit": "ns/iter",
            "extra": "iterations: 1444\ncpu: 482882.6869806152 ns\nthreads: 1"
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
        "date": 1702489600196,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 8596.15427044696,
            "unit": "ns/iter",
            "extra": "iterations: 81221\ncpu: 8595.972716415705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 62796.204376858244,
            "unit": "ns/iter",
            "extra": "iterations: 13480\ncpu: 62796.21661721068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 117028.80231931547,
            "unit": "ns/iter",
            "extra": "iterations: 7416\ncpu: 117026.65857605178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 168873.85065572077,
            "unit": "ns/iter",
            "extra": "iterations: 5109\ncpu: 168865.94245449203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 222653.92704856783,
            "unit": "ns/iter",
            "extra": "iterations: 3893\ncpu: 222651.45132288735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 273925.71610440436,
            "unit": "ns/iter",
            "extra": "iterations: 3142\ncpu: 273912.1896880968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 324929.59063672676,
            "unit": "ns/iter",
            "extra": "iterations: 2670\ncpu: 324916.02996254683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 378400.0469157097,
            "unit": "ns/iter",
            "extra": "iterations: 2302\ncpu: 378380.97306689824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 430895.03225807904,
            "unit": "ns/iter",
            "extra": "iterations: 2015\ncpu: 430868.2878411913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 7291.311903623677,
            "unit": "ns/iter",
            "extra": "iterations: 96206\ncpu: 7291.232355570347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5945.007399387856,
            "unit": "ns/iter",
            "extra": "iterations: 117307\ncpu: 5944.642689694566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5927.60585265018,
            "unit": "ns/iter",
            "extra": "iterations: 118032\ncpu: 5927.251084451674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5820.8645686049,
            "unit": "ns/iter",
            "extra": "iterations: 120238\ncpu: 5820.67482825729 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 10422.011561124662,
            "unit": "ns/iter",
            "extra": "iterations: 67035\ncpu: 10421.582755277106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 29235.820614539225,
            "unit": "ns/iter",
            "extra": "iterations: 27728\ncpu: 29234.56073283324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 148356.2677453062,
            "unit": "ns/iter",
            "extra": "iterations: 5748\ncpu: 148347.14683368139 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 113372.6956054292,
            "unit": "ns/iter",
            "extra": "iterations: 7441\ncpu: 113372.55745195548 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 113106.57060863942,
            "unit": "ns/iter",
            "extra": "iterations: 7492\ncpu: 113105.85958355592 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 109862.5818982297,
            "unit": "ns/iter",
            "extra": "iterations: 7723\ncpu: 109862.81237860951 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 368310.7980507,
            "unit": "ns/iter",
            "extra": "iterations: 2565\ncpu: 368290.99415204645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 2091657.1340910133,
            "unit": "ns/iter",
            "extra": "iterations: 440\ncpu: 2091562.0454545415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1643959.975221336,
            "unit": "ns/iter",
            "extra": "iterations: 565\ncpu: 1643884.2477876102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1645293.886725737,
            "unit": "ns/iter",
            "extra": "iterations: 565\ncpu: 1645203.0088495628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1599611.296041171,
            "unit": "ns/iter",
            "extra": "iterations: 581\ncpu: 1599460.7573149782 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 898311.7906524092,
            "unit": "ns/iter",
            "extra": "iterations: 1027\ncpu: 898267.0886075936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1581930.6113013376,
            "unit": "ns/iter",
            "extra": "iterations: 584\ncpu: 1581868.3219178051 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 37426.48658099288,
            "unit": "ns/iter",
            "extra": "iterations: 22021\ncpu: 37425.87075972945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 203025.59302326557,
            "unit": "ns/iter",
            "extra": "iterations: 3956\ncpu: 203012.13346814946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 145875.59114803126,
            "unit": "ns/iter",
            "extra": "iterations: 5897\ncpu: 145867.76326945916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 144976.6246195382,
            "unit": "ns/iter",
            "extra": "iterations: 5914\ncpu: 144970.67974298322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 134935.03945492106,
            "unit": "ns/iter",
            "extra": "iterations: 6311\ncpu: 134928.7909998413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 344019.95881188946,
            "unit": "ns/iter",
            "extra": "iterations: 2525\ncpu: 344019.8415841584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 2121563.000000011,
            "unit": "ns/iter",
            "extra": "iterations: 436\ncpu: 2121548.3944954053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1672627.4767023902,
            "unit": "ns/iter",
            "extra": "iterations: 558\ncpu: 1672612.0071684606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1666063.6007194994,
            "unit": "ns/iter",
            "extra": "iterations: 556\ncpu: 1666039.208633093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1601658.4375001406,
            "unit": "ns/iter",
            "extra": "iterations: 576\ncpu: 1601646.180555558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 926254.8408408186,
            "unit": "ns/iter",
            "extra": "iterations: 999\ncpu: 926249.0490490526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1606864.0397237206,
            "unit": "ns/iter",
            "extra": "iterations: 579\ncpu: 1606879.6200345468 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5697070.310000071,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5697134.0000000475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3392200.7838828326,
            "unit": "ns/iter",
            "extra": "iterations: 273\ncpu: 3392135.897435887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 27553.711719620253,
            "unit": "ns/iter",
            "extra": "iterations: 29617\ncpu: 27553.64824256342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 138734.02646103763,
            "unit": "ns/iter",
            "extra": "iterations: 6160\ncpu: 138734.36688311663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 107293.3340929263,
            "unit": "ns/iter",
            "extra": "iterations: 7899\ncpu: 107290.7836434991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 113695.16544752842,
            "unit": "ns/iter",
            "extra": "iterations: 7519\ncpu: 113691.07594094929 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 108149.56260307768,
            "unit": "ns/iter",
            "extra": "iterations: 7883\ncpu: 108146.14994291545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 284532.1012782715,
            "unit": "ns/iter",
            "extra": "iterations: 3051\ncpu: 284532.710586693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 2083403.1950674304,
            "unit": "ns/iter",
            "extra": "iterations: 446\ncpu: 2083381.1659192902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1612424.5051724394,
            "unit": "ns/iter",
            "extra": "iterations: 580\ncpu: 1612425.6896551799 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1620309.915371397,
            "unit": "ns/iter",
            "extra": "iterations: 579\ncpu: 1620326.4248704698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1572456.2070707206,
            "unit": "ns/iter",
            "extra": "iterations: 594\ncpu: 1572457.5757575769 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 878937.9688090645,
            "unit": "ns/iter",
            "extra": "iterations: 1058\ncpu: 878930.7183364893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1566024.8621847164,
            "unit": "ns/iter",
            "extra": "iterations: 595\ncpu: 1565992.1008403397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 3280.637580267021,
            "unit": "ns/iter",
            "extra": "iterations: 214751\ncpu: 3280.641300855408 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 20968.827502547254,
            "unit": "ns/iter",
            "extra": "iterations: 33386\ncpu: 20968.53171988248 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 15566.34790240761,
            "unit": "ns/iter",
            "extra": "iterations: 45004\ncpu: 15566.131899386812 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 16170.671820275622,
            "unit": "ns/iter",
            "extra": "iterations: 43400\ncpu: 16170.645161290433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 12272.815820340471,
            "unit": "ns/iter",
            "extra": "iterations: 46889\ncpu: 12272.957410053526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 108159.07758216932,
            "unit": "ns/iter",
            "extra": "iterations: 6419\ncpu: 108160.30534351092 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 143941.10703239348,
            "unit": "ns/iter",
            "extra": "iterations: 4849\ncpu: 143939.3276964326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 34590.717687918754,
            "unit": "ns/iter",
            "extra": "iterations: 20155\ncpu: 34590.24063507811 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 34602.64943752886,
            "unit": "ns/iter",
            "extra": "iterations: 20179\ncpu: 34600.500520342845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 34529.91002862412,
            "unit": "ns/iter",
            "extra": "iterations: 20262\ncpu: 34529.65649985199 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 69618.57566441386,
            "unit": "ns/iter",
            "extra": "iterations: 10084\ncpu: 69614.82546608489 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 64673.3110309026,
            "unit": "ns/iter",
            "extra": "iterations: 10806\ncpu: 64673.089024616085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 23511.345783699588,
            "unit": "ns/iter",
            "extra": "iterations: 29718\ncpu: 23509.84251968518 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 119212.16209306513,
            "unit": "ns/iter",
            "extra": "iterations: 5867\ncpu: 119203.98840974936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 96300.17949423444,
            "unit": "ns/iter",
            "extra": "iterations: 7276\ncpu: 96298.18581638174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 95585.71167485206,
            "unit": "ns/iter",
            "extra": "iterations: 7332\ncpu: 95584.2062193132 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 94851.0747967434,
            "unit": "ns/iter",
            "extra": "iterations: 7380\ncpu: 94849.45799458024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 179275.64941054257,
            "unit": "ns/iter",
            "extra": "iterations: 3902\ncpu: 179273.57765248773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 615210.3382997725,
            "unit": "ns/iter",
            "extra": "iterations: 1141\ncpu: 615211.0429447918 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 496461.5820895327,
            "unit": "ns/iter",
            "extra": "iterations: 1407\ncpu: 496447.12153518223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 497704.5625000091,
            "unit": "ns/iter",
            "extra": "iterations: 1408\ncpu: 497696.16477272776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 489096.38075318356,
            "unit": "ns/iter",
            "extra": "iterations: 1434\ncpu: 489096.8619246873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 315901.2379232549,
            "unit": "ns/iter",
            "extra": "iterations: 2215\ncpu: 315904.69525959215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 486753.2988186202,
            "unit": "ns/iter",
            "extra": "iterations: 1439\ncpu: 486736.69214731694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 23895.968216658803,
            "unit": "ns/iter",
            "extra": "iterations: 29355\ncpu: 23895.98024186712 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 117747.03226350037,
            "unit": "ns/iter",
            "extra": "iterations: 5951\ncpu: 117746.19391698894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 96308.86662059644,
            "unit": "ns/iter",
            "extra": "iterations: 7235\ncpu: 96307.17346233636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 95140.81186371329,
            "unit": "ns/iter",
            "extra": "iterations: 7367\ncpu: 95139.97556671678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 93884.80643862867,
            "unit": "ns/iter",
            "extra": "iterations: 7455\ncpu: 93883.68879946315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 174476.498629453,
            "unit": "ns/iter",
            "extra": "iterations: 4013\ncpu: 174476.20234238534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 613752.3237094776,
            "unit": "ns/iter",
            "extra": "iterations: 1143\ncpu: 613758.8801399876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 490790.68815692695,
            "unit": "ns/iter",
            "extra": "iterations: 1427\ncpu: 490788.8577435099 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 492744.4255469151,
            "unit": "ns/iter",
            "extra": "iterations: 1417\ncpu: 492736.41496119223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 483755.6797791499,
            "unit": "ns/iter",
            "extra": "iterations: 1449\ncpu: 483753.9682539656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 317067.18730158143,
            "unit": "ns/iter",
            "extra": "iterations: 2205\ncpu: 317070.79365078977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 482890.4259002317,
            "unit": "ns/iter",
            "extra": "iterations: 1444\ncpu: 482882.6869806152 ns\nthreads: 1"
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
        "date": 1702489600196,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 8596.15427044696,
            "unit": "ns/iter",
            "extra": "iterations: 81221\ncpu: 8595.972716415705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 62796.204376858244,
            "unit": "ns/iter",
            "extra": "iterations: 13480\ncpu: 62796.21661721068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 117028.80231931547,
            "unit": "ns/iter",
            "extra": "iterations: 7416\ncpu: 117026.65857605178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 168873.85065572077,
            "unit": "ns/iter",
            "extra": "iterations: 5109\ncpu: 168865.94245449203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 222653.92704856783,
            "unit": "ns/iter",
            "extra": "iterations: 3893\ncpu: 222651.45132288735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 273925.71610440436,
            "unit": "ns/iter",
            "extra": "iterations: 3142\ncpu: 273912.1896880968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 324929.59063672676,
            "unit": "ns/iter",
            "extra": "iterations: 2670\ncpu: 324916.02996254683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 378400.0469157097,
            "unit": "ns/iter",
            "extra": "iterations: 2302\ncpu: 378380.97306689824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 430895.03225807904,
            "unit": "ns/iter",
            "extra": "iterations: 2015\ncpu: 430868.2878411913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 7291.311903623677,
            "unit": "ns/iter",
            "extra": "iterations: 96206\ncpu: 7291.232355570347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5945.007399387856,
            "unit": "ns/iter",
            "extra": "iterations: 117307\ncpu: 5944.642689694566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5927.60585265018,
            "unit": "ns/iter",
            "extra": "iterations: 118032\ncpu: 5927.251084451674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5820.8645686049,
            "unit": "ns/iter",
            "extra": "iterations: 120238\ncpu: 5820.67482825729 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 10422.011561124662,
            "unit": "ns/iter",
            "extra": "iterations: 67035\ncpu: 10421.582755277106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 29235.820614539225,
            "unit": "ns/iter",
            "extra": "iterations: 27728\ncpu: 29234.56073283324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 148356.2677453062,
            "unit": "ns/iter",
            "extra": "iterations: 5748\ncpu: 148347.14683368139 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 113372.6956054292,
            "unit": "ns/iter",
            "extra": "iterations: 7441\ncpu: 113372.55745195548 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 113106.57060863942,
            "unit": "ns/iter",
            "extra": "iterations: 7492\ncpu: 113105.85958355592 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 109862.5818982297,
            "unit": "ns/iter",
            "extra": "iterations: 7723\ncpu: 109862.81237860951 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 368310.7980507,
            "unit": "ns/iter",
            "extra": "iterations: 2565\ncpu: 368290.99415204645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 2091657.1340910133,
            "unit": "ns/iter",
            "extra": "iterations: 440\ncpu: 2091562.0454545415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1643959.975221336,
            "unit": "ns/iter",
            "extra": "iterations: 565\ncpu: 1643884.2477876102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1645293.886725737,
            "unit": "ns/iter",
            "extra": "iterations: 565\ncpu: 1645203.0088495628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1599611.296041171,
            "unit": "ns/iter",
            "extra": "iterations: 581\ncpu: 1599460.7573149782 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 898311.7906524092,
            "unit": "ns/iter",
            "extra": "iterations: 1027\ncpu: 898267.0886075936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1581930.6113013376,
            "unit": "ns/iter",
            "extra": "iterations: 584\ncpu: 1581868.3219178051 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 37426.48658099288,
            "unit": "ns/iter",
            "extra": "iterations: 22021\ncpu: 37425.87075972945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 203025.59302326557,
            "unit": "ns/iter",
            "extra": "iterations: 3956\ncpu: 203012.13346814946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 145875.59114803126,
            "unit": "ns/iter",
            "extra": "iterations: 5897\ncpu: 145867.76326945916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 144976.6246195382,
            "unit": "ns/iter",
            "extra": "iterations: 5914\ncpu: 144970.67974298322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 134935.03945492106,
            "unit": "ns/iter",
            "extra": "iterations: 6311\ncpu: 134928.7909998413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 344019.95881188946,
            "unit": "ns/iter",
            "extra": "iterations: 2525\ncpu: 344019.8415841584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 2121563.000000011,
            "unit": "ns/iter",
            "extra": "iterations: 436\ncpu: 2121548.3944954053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1672627.4767023902,
            "unit": "ns/iter",
            "extra": "iterations: 558\ncpu: 1672612.0071684606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1666063.6007194994,
            "unit": "ns/iter",
            "extra": "iterations: 556\ncpu: 1666039.208633093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1601658.4375001406,
            "unit": "ns/iter",
            "extra": "iterations: 576\ncpu: 1601646.180555558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 926254.8408408186,
            "unit": "ns/iter",
            "extra": "iterations: 999\ncpu: 926249.0490490526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1606864.0397237206,
            "unit": "ns/iter",
            "extra": "iterations: 579\ncpu: 1606879.6200345468 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5697070.310000071,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5697134.0000000475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3392200.7838828326,
            "unit": "ns/iter",
            "extra": "iterations: 273\ncpu: 3392135.897435887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 27553.711719620253,
            "unit": "ns/iter",
            "extra": "iterations: 29617\ncpu: 27553.64824256342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 138734.02646103763,
            "unit": "ns/iter",
            "extra": "iterations: 6160\ncpu: 138734.36688311663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 107293.3340929263,
            "unit": "ns/iter",
            "extra": "iterations: 7899\ncpu: 107290.7836434991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 113695.16544752842,
            "unit": "ns/iter",
            "extra": "iterations: 7519\ncpu: 113691.07594094929 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 108149.56260307768,
            "unit": "ns/iter",
            "extra": "iterations: 7883\ncpu: 108146.14994291545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 284532.1012782715,
            "unit": "ns/iter",
            "extra": "iterations: 3051\ncpu: 284532.710586693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 2083403.1950674304,
            "unit": "ns/iter",
            "extra": "iterations: 446\ncpu: 2083381.1659192902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1612424.5051724394,
            "unit": "ns/iter",
            "extra": "iterations: 580\ncpu: 1612425.6896551799 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1620309.915371397,
            "unit": "ns/iter",
            "extra": "iterations: 579\ncpu: 1620326.4248704698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1572456.2070707206,
            "unit": "ns/iter",
            "extra": "iterations: 594\ncpu: 1572457.5757575769 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 878937.9688090645,
            "unit": "ns/iter",
            "extra": "iterations: 1058\ncpu: 878930.7183364893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1566024.8621847164,
            "unit": "ns/iter",
            "extra": "iterations: 595\ncpu: 1565992.1008403397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 3280.637580267021,
            "unit": "ns/iter",
            "extra": "iterations: 214751\ncpu: 3280.641300855408 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 20968.827502547254,
            "unit": "ns/iter",
            "extra": "iterations: 33386\ncpu: 20968.53171988248 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 15566.34790240761,
            "unit": "ns/iter",
            "extra": "iterations: 45004\ncpu: 15566.131899386812 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 16170.671820275622,
            "unit": "ns/iter",
            "extra": "iterations: 43400\ncpu: 16170.645161290433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 12272.815820340471,
            "unit": "ns/iter",
            "extra": "iterations: 46889\ncpu: 12272.957410053526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 108159.07758216932,
            "unit": "ns/iter",
            "extra": "iterations: 6419\ncpu: 108160.30534351092 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 143941.10703239348,
            "unit": "ns/iter",
            "extra": "iterations: 4849\ncpu: 143939.3276964326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 34590.717687918754,
            "unit": "ns/iter",
            "extra": "iterations: 20155\ncpu: 34590.24063507811 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 34602.64943752886,
            "unit": "ns/iter",
            "extra": "iterations: 20179\ncpu: 34600.500520342845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 34529.91002862412,
            "unit": "ns/iter",
            "extra": "iterations: 20262\ncpu: 34529.65649985199 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 69618.57566441386,
            "unit": "ns/iter",
            "extra": "iterations: 10084\ncpu: 69614.82546608489 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 64673.3110309026,
            "unit": "ns/iter",
            "extra": "iterations: 10806\ncpu: 64673.089024616085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 23511.345783699588,
            "unit": "ns/iter",
            "extra": "iterations: 29718\ncpu: 23509.84251968518 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 119212.16209306513,
            "unit": "ns/iter",
            "extra": "iterations: 5867\ncpu: 119203.98840974936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 96300.17949423444,
            "unit": "ns/iter",
            "extra": "iterations: 7276\ncpu: 96298.18581638174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 95585.71167485206,
            "unit": "ns/iter",
            "extra": "iterations: 7332\ncpu: 95584.2062193132 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 94851.0747967434,
            "unit": "ns/iter",
            "extra": "iterations: 7380\ncpu: 94849.45799458024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 179275.64941054257,
            "unit": "ns/iter",
            "extra": "iterations: 3902\ncpu: 179273.57765248773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 615210.3382997725,
            "unit": "ns/iter",
            "extra": "iterations: 1141\ncpu: 615211.0429447918 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 496461.5820895327,
            "unit": "ns/iter",
            "extra": "iterations: 1407\ncpu: 496447.12153518223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 497704.5625000091,
            "unit": "ns/iter",
            "extra": "iterations: 1408\ncpu: 497696.16477272776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 489096.38075318356,
            "unit": "ns/iter",
            "extra": "iterations: 1434\ncpu: 489096.8619246873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 315901.2379232549,
            "unit": "ns/iter",
            "extra": "iterations: 2215\ncpu: 315904.69525959215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 486753.2988186202,
            "unit": "ns/iter",
            "extra": "iterations: 1439\ncpu: 486736.69214731694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 23895.968216658803,
            "unit": "ns/iter",
            "extra": "iterations: 29355\ncpu: 23895.98024186712 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 117747.03226350037,
            "unit": "ns/iter",
            "extra": "iterations: 5951\ncpu: 117746.19391698894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 96308.86662059644,
            "unit": "ns/iter",
            "extra": "iterations: 7235\ncpu: 96307.17346233636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 95140.81186371329,
            "unit": "ns/iter",
            "extra": "iterations: 7367\ncpu: 95139.97556671678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 93884.80643862867,
            "unit": "ns/iter",
            "extra": "iterations: 7455\ncpu: 93883.68879946315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 174476.498629453,
            "unit": "ns/iter",
            "extra": "iterations: 4013\ncpu: 174476.20234238534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 613752.3237094776,
            "unit": "ns/iter",
            "extra": "iterations: 1143\ncpu: 613758.8801399876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 490790.68815692695,
            "unit": "ns/iter",
            "extra": "iterations: 1427\ncpu: 490788.8577435099 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 492744.4255469151,
            "unit": "ns/iter",
            "extra": "iterations: 1417\ncpu: 492736.41496119223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 483755.6797791499,
            "unit": "ns/iter",
            "extra": "iterations: 1449\ncpu: 483753.9682539656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 317067.18730158143,
            "unit": "ns/iter",
            "extra": "iterations: 2205\ncpu: 317070.79365078977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 482890.4259002317,
            "unit": "ns/iter",
            "extra": "iterations: 1444\ncpu: 482882.6869806152 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}