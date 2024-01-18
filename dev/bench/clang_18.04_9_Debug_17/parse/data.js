window.BENCHMARK_DATA = {
  "lastUpdate": 1705574898698,
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
        "date": 1702503248454,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 8424.94226687334,
            "unit": "ns/iter",
            "extra": "iterations: 82916\ncpu: 8424.53205653915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 61200.60313202245,
            "unit": "ns/iter",
            "extra": "iterations: 13793\ncpu: 61199.883999130005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 112402.89662391537,
            "unit": "ns/iter",
            "extra": "iterations: 7642\ncpu: 112399.46349123263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 163019.18940397064,
            "unit": "ns/iter",
            "extra": "iterations: 5285\ncpu: 163014.4560075686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 215589.64666332345,
            "unit": "ns/iter",
            "extra": "iterations: 4016\ncpu: 215579.63147410357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 263968.2134556294,
            "unit": "ns/iter",
            "extra": "iterations: 3270\ncpu: 263960.856269113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 316188.0368344448,
            "unit": "ns/iter",
            "extra": "iterations: 2742\ncpu: 316178.2640408462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 366263.78971763595,
            "unit": "ns/iter",
            "extra": "iterations: 2373\ncpu: 366250.73746312706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 419523.89706592297,
            "unit": "ns/iter",
            "extra": "iterations: 2079\ncpu: 419513.61231361266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 7039.1617859000235,
            "unit": "ns/iter",
            "extra": "iterations: 99916\ncpu: 7038.61543696705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5820.832456986944,
            "unit": "ns/iter",
            "extra": "iterations: 120196\ncpu: 5820.646277746336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5742.808778048006,
            "unit": "ns/iter",
            "extra": "iterations: 121576\ncpu: 5742.7156675659635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5798.855229902988,
            "unit": "ns/iter",
            "extra": "iterations: 120681\ncpu: 5798.518408034406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 10025.95882394728,
            "unit": "ns/iter",
            "extra": "iterations: 70235\ncpu: 10025.641062148477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 29648.750246791704,
            "unit": "ns/iter",
            "extra": "iterations: 27351\ncpu: 29646.930642389663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 156488.81199855055,
            "unit": "ns/iter",
            "extra": "iterations: 5484\ncpu: 156484.11743253088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 117390.22512010232,
            "unit": "ns/iter",
            "extra": "iterations: 7285\ncpu: 117385.54564172943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 116224.4375510287,
            "unit": "ns/iter",
            "extra": "iterations: 7350\ncpu: 116220.14965986402 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 110492.13491032258,
            "unit": "ns/iter",
            "extra": "iterations: 7694\ncpu: 110487.21081362093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 378878.49939639086,
            "unit": "ns/iter",
            "extra": "iterations: 2485\ncpu: 378865.7545271633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1992098.612903138,
            "unit": "ns/iter",
            "extra": "iterations: 465\ncpu: 1991977.419354839 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1564809.2306397725,
            "unit": "ns/iter",
            "extra": "iterations: 594\ncpu: 1564778.7878787871 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1537386.7176078928,
            "unit": "ns/iter",
            "extra": "iterations: 602\ncpu: 1537299.0033222625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1528236.180300615,
            "unit": "ns/iter",
            "extra": "iterations: 599\ncpu: 1528192.6544240345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 859600.1116322909,
            "unit": "ns/iter",
            "extra": "iterations: 1066\ncpu: 859568.85553471 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1511741.9820555092,
            "unit": "ns/iter",
            "extra": "iterations: 613\ncpu: 1511683.8499184323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 38663.34548180157,
            "unit": "ns/iter",
            "extra": "iterations: 21347\ncpu: 38660.650208460225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 189598.96634724332,
            "unit": "ns/iter",
            "extra": "iterations: 4487\ncpu: 189587.7646534426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 147162.6412969315,
            "unit": "ns/iter",
            "extra": "iterations: 5860\ncpu: 147151.7064846416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 147138.2269165143,
            "unit": "ns/iter",
            "extra": "iterations: 5870\ncpu: 147130.7666098807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 142075.7430269082,
            "unit": "ns/iter",
            "extra": "iterations: 6059\ncpu: 142068.74071628996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 341303.7732283606,
            "unit": "ns/iter",
            "extra": "iterations: 2540\ncpu: 341281.4566929133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 2022318.3600866888,
            "unit": "ns/iter",
            "extra": "iterations: 461\ncpu: 2022192.4078091064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1606504.0103625827,
            "unit": "ns/iter",
            "extra": "iterations: 579\ncpu: 1606397.409326427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1586403.5580204036,
            "unit": "ns/iter",
            "extra": "iterations: 586\ncpu: 1586307.849829355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1555199.5799999456,
            "unit": "ns/iter",
            "extra": "iterations: 600\ncpu: 1555098.8333333393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 881648.2612012019,
            "unit": "ns/iter",
            "extra": "iterations: 1049\ncpu: 881598.0934223053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1535186.4325658937,
            "unit": "ns/iter",
            "extra": "iterations: 608\ncpu: 1535068.914473677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5488602.669998955,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5488125.9999999795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3377326.4818844087,
            "unit": "ns/iter",
            "extra": "iterations: 276\ncpu: 3377087.318840566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 28270.30090253546,
            "unit": "ns/iter",
            "extra": "iterations: 28697\ncpu: 28266.70383663796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 143649.34674871102,
            "unit": "ns/iter",
            "extra": "iterations: 6013\ncpu: 143638.99883585607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 109456.11718749335,
            "unit": "ns/iter",
            "extra": "iterations: 7808\ncpu: 109449.61577868859 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 114408.612605386,
            "unit": "ns/iter",
            "extra": "iterations: 7473\ncpu: 114397.65823631715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 107688.91391479707,
            "unit": "ns/iter",
            "extra": "iterations: 7934\ncpu: 107681.64860095814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 294128.0841215945,
            "unit": "ns/iter",
            "extra": "iterations: 2960\ncpu: 294107.22972973064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 2009323.6952790548,
            "unit": "ns/iter",
            "extra": "iterations: 466\ncpu: 2009197.8540772486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1564682.9480737397,
            "unit": "ns/iter",
            "extra": "iterations: 597\ncpu: 1564551.7587939717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1530515.0952380646,
            "unit": "ns/iter",
            "extra": "iterations: 609\ncpu: 1530448.604269298 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1507804.0129240674,
            "unit": "ns/iter",
            "extra": "iterations: 619\ncpu: 1507695.4765751252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 850071.1320582837,
            "unit": "ns/iter",
            "extra": "iterations: 1098\ncpu: 850033.7887067421 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1491164.5425361954,
            "unit": "ns/iter",
            "extra": "iterations: 623\ncpu: 1491028.2504012869 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 3277.216117216201,
            "unit": "ns/iter",
            "extra": "iterations: 212394\ncpu: 3277.1462470691163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 20060.12560191358,
            "unit": "ns/iter",
            "extra": "iterations: 34681\ncpu: 20059.262997030008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 16627.816843105797,
            "unit": "ns/iter",
            "extra": "iterations: 42035\ncpu: 16627.603187819535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 15463.686751256713,
            "unit": "ns/iter",
            "extra": "iterations: 45159\ncpu: 15462.842401293248 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 12252.80201055909,
            "unit": "ns/iter",
            "extra": "iterations: 57397\ncpu: 12252.225726083218 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 111365.67168436888,
            "unit": "ns/iter",
            "extra": "iterations: 6311\ncpu: 111360.46585327176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 136584.09674275064,
            "unit": "ns/iter",
            "extra": "iterations: 5127\ncpu: 136576.5554905408 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 33632.11853313747,
            "unit": "ns/iter",
            "extra": "iterations: 20779\ncpu: 33631.04095481004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 33320.07079688153,
            "unit": "ns/iter",
            "extra": "iterations: 21032\ncpu: 33318.39577786231 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 33125.416101334005,
            "unit": "ns/iter",
            "extra": "iterations: 21079\ncpu: 33123.7440106268 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 67277.26980625125,
            "unit": "ns/iter",
            "extra": "iterations: 10426\ncpu: 67274.33339727574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 62193.60457487927,
            "unit": "ns/iter",
            "extra": "iterations: 11279\ncpu: 62192.765316074554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 22524.927099077235,
            "unit": "ns/iter",
            "extra": "iterations: 31097\ncpu: 22523.86082258729 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 113967.89087947173,
            "unit": "ns/iter",
            "extra": "iterations: 6140\ncpu: 113966.23778501475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 92994.69245057217,
            "unit": "ns/iter",
            "extra": "iterations: 7537\ncpu: 92987.93949847374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 93681.0136072596,
            "unit": "ns/iter",
            "extra": "iterations: 7496\ncpu: 93675.78708644545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 91738.48309305325,
            "unit": "ns/iter",
            "extra": "iterations: 7630\ncpu: 91733.84010484924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 170347.93222819534,
            "unit": "ns/iter",
            "extra": "iterations: 4102\ncpu: 170331.98439785696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 588627.2647058495,
            "unit": "ns/iter",
            "extra": "iterations: 1190\ncpu: 588618.9915966348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 482868.034530412,
            "unit": "ns/iter",
            "extra": "iterations: 1448\ncpu: 482828.45303867763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 478869.84325799806,
            "unit": "ns/iter",
            "extra": "iterations: 1461\ncpu: 478854.0041067806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 469251.4548494509,
            "unit": "ns/iter",
            "extra": "iterations: 1495\ncpu: 469229.4983277558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 306790.66109889274,
            "unit": "ns/iter",
            "extra": "iterations: 2275\ncpu: 306771.38461538975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 467327.1223940236,
            "unit": "ns/iter",
            "extra": "iterations: 1487\ncpu: 467313.1809011473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 23213.501756947608,
            "unit": "ns/iter",
            "extra": "iterations: 30166\ncpu: 23212.726248093895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 114843.79390063931,
            "unit": "ns/iter",
            "extra": "iterations: 6099\ncpu: 114837.62911952611 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 92169.97251222565,
            "unit": "ns/iter",
            "extra": "iterations: 7567\ncpu: 92164.41125941642 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 92686.52482738948,
            "unit": "ns/iter",
            "extra": "iterations: 7532\ncpu: 92678.98300584138 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 90998.96473191315,
            "unit": "ns/iter",
            "extra": "iterations: 7684\ncpu: 90996.42113482636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 165771.26176401626,
            "unit": "ns/iter",
            "extra": "iterations: 4229\ncpu: 165762.44975171526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 580357.1934945813,
            "unit": "ns/iter",
            "extra": "iterations: 1199\ncpu: 580334.8623853278 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 476171.12661673076,
            "unit": "ns/iter",
            "extra": "iterations: 1469\ncpu: 476153.57385976886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 471829.93112766155,
            "unit": "ns/iter",
            "extra": "iterations: 1481\ncpu: 471812.62660365074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 464165.94219269586,
            "unit": "ns/iter",
            "extra": "iterations: 1505\ncpu: 464139.7342192701 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 303324.35227766813,
            "unit": "ns/iter",
            "extra": "iterations: 2305\ncpu: 303316.8329717995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 462416.5192818785,
            "unit": "ns/iter",
            "extra": "iterations: 1504\ncpu: 462398.6037234044 ns\nthreads: 1"
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
        "date": 1705574897138,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 8472.280865733059,
            "unit": "ns/iter",
            "extra": "iterations: 82381\ncpu: 8471.903715662593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 61596.925868331244,
            "unit": "ns/iter",
            "extra": "iterations: 13503\ncpu: 61596.237873065256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 114220.58760968482,
            "unit": "ns/iter",
            "extra": "iterations: 7522\ncpu: 114219.22361074184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 166269.62309620567,
            "unit": "ns/iter",
            "extra": "iterations: 5187\ncpu: 166264.25679583577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 218149.98992191345,
            "unit": "ns/iter",
            "extra": "iterations: 3969\ncpu: 218145.5026455027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 271029.5805746551,
            "unit": "ns/iter",
            "extra": "iterations: 3202\ncpu: 271019.51905059343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 322447.2650334006,
            "unit": "ns/iter",
            "extra": "iterations: 2694\ncpu: 322435.67186340026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 375458.581174433,
            "unit": "ns/iter",
            "extra": "iterations: 2316\ncpu: 375434.8877374785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 425378.86205202807,
            "unit": "ns/iter",
            "extra": "iterations: 2037\ncpu: 425355.03190967056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 7125.034507657396,
            "unit": "ns/iter",
            "extra": "iterations: 98326\ncpu: 7124.7432011878755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5863.892258312858,
            "unit": "ns/iter",
            "extra": "iterations: 119638\ncpu: 5863.584312676574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5833.349704532924,
            "unit": "ns/iter",
            "extra": "iterations: 119641\ncpu: 5833.257829673764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5818.588796483598,
            "unit": "ns/iter",
            "extra": "iterations: 120123\ncpu: 5818.555147640341 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 9754.76610509541,
            "unit": "ns/iter",
            "extra": "iterations: 71763\ncpu: 9754.834664102666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 29350.353899966853,
            "unit": "ns/iter",
            "extra": "iterations: 27731\ncpu: 29349.7890447514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 149989.0753891966,
            "unit": "ns/iter",
            "extra": "iterations: 5717\ncpu: 149990.02973587543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 113180.11388705349,
            "unit": "ns/iter",
            "extra": "iterations: 7525\ncpu: 113176.66445182738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 113427.21343820733,
            "unit": "ns/iter",
            "extra": "iterations: 7501\ncpu: 113426.98306892406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 109070.78544799874,
            "unit": "ns/iter",
            "extra": "iterations: 7779\ncpu: 109070.62604447879 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 364785.92331522284,
            "unit": "ns/iter",
            "extra": "iterations: 2582\ncpu: 364783.88845855923 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 2026862.4232457704,
            "unit": "ns/iter",
            "extra": "iterations: 456\ncpu: 2026828.0701754405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1578190.2410257566,
            "unit": "ns/iter",
            "extra": "iterations: 585\ncpu: 1578171.965811966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1588689.4879309724,
            "unit": "ns/iter",
            "extra": "iterations: 580\ncpu: 1588700.6896551675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1568705.6013628077,
            "unit": "ns/iter",
            "extra": "iterations: 587\ncpu: 1568653.8330494056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 879362.7335870026,
            "unit": "ns/iter",
            "extra": "iterations: 1051\ncpu: 879346.622264509 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1545277.5759599102,
            "unit": "ns/iter",
            "extra": "iterations: 599\ncpu: 1545228.2136894795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 38107.51478060125,
            "unit": "ns/iter",
            "extra": "iterations: 21650\ncpu: 38104.48960739038 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 187409.9971696071,
            "unit": "ns/iter",
            "extra": "iterations: 4593\ncpu: 187402.7433050291 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 145367.4766970534,
            "unit": "ns/iter",
            "extra": "iterations: 5922\ncpu: 145361.88787571777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 143467.52727576988,
            "unit": "ns/iter",
            "extra": "iterations: 5976\ncpu: 143464.92637215482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 137161.1778168922,
            "unit": "ns/iter",
            "extra": "iterations: 6248\ncpu: 137156.35403329058 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 334237.36563705833,
            "unit": "ns/iter",
            "extra": "iterations: 2590\ncpu: 334218.2625482631 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 2098282.207207284,
            "unit": "ns/iter",
            "extra": "iterations: 444\ncpu: 2098191.4414414493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1626141.4489436056,
            "unit": "ns/iter",
            "extra": "iterations: 568\ncpu: 1626077.4647887298 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1631642.2522203948,
            "unit": "ns/iter",
            "extra": "iterations: 563\ncpu: 1631560.3907637643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1595835.5907534733,
            "unit": "ns/iter",
            "extra": "iterations: 584\ncpu: 1595734.7602739702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 914840.1150442393,
            "unit": "ns/iter",
            "extra": "iterations: 1017\ncpu: 914788.0039331379 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1580861.8435373325,
            "unit": "ns/iter",
            "extra": "iterations: 588\ncpu: 1580806.6326530632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5580208.710000534,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5579813.999999956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3242831.6515681683,
            "unit": "ns/iter",
            "extra": "iterations: 287\ncpu: 3242663.763066201 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 28091.54337726519,
            "unit": "ns/iter",
            "extra": "iterations: 29059\ncpu: 28090.237103823092 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 139299.2381950148,
            "unit": "ns/iter",
            "extra": "iterations: 6205\ncpu: 139294.95568090188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 106654.74371168001,
            "unit": "ns/iter",
            "extra": "iterations: 7991\ncpu: 106648.75484920549 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 110053.75567009716,
            "unit": "ns/iter",
            "extra": "iterations: 7760\ncpu: 110046.58505154692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 105028.60856079184,
            "unit": "ns/iter",
            "extra": "iterations: 8060\ncpu: 105023.13895781693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 284824.2138633453,
            "unit": "ns/iter",
            "extra": "iterations: 3044\ncpu: 284817.6084099883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 2044605.9587850724,
            "unit": "ns/iter",
            "extra": "iterations: 461\ncpu: 2044516.4859002125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1569113.4781145165,
            "unit": "ns/iter",
            "extra": "iterations: 594\ncpu: 1569059.7643097602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1597389.226027409,
            "unit": "ns/iter",
            "extra": "iterations: 584\ncpu: 1597335.6164383611 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1575423.4367623394,
            "unit": "ns/iter",
            "extra": "iterations: 593\ncpu: 1575383.3052276603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 881364.421550042,
            "unit": "ns/iter",
            "extra": "iterations: 1058\ncpu: 881326.6540642714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1532810.3894390257,
            "unit": "ns/iter",
            "extra": "iterations: 606\ncpu: 1532707.5907590708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 3216.4894937062586,
            "unit": "ns/iter",
            "extra": "iterations: 217917\ncpu: 3216.4388276270347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 20636.842158165706,
            "unit": "ns/iter",
            "extra": "iterations: 33825\ncpu: 20636.768662232014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 15396.598825056331,
            "unit": "ns/iter",
            "extra": "iterations: 45449\ncpu: 15396.032916015662 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 16116.671804193344,
            "unit": "ns/iter",
            "extra": "iterations: 43471\ncpu: 16115.824342665308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 12234.151383282533,
            "unit": "ns/iter",
            "extra": "iterations: 57219\ncpu: 12233.384015798923 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 112713.70830063248,
            "unit": "ns/iter",
            "extra": "iterations: 6373\ncpu: 112711.18782363062 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 139473.15367660305,
            "unit": "ns/iter",
            "extra": "iterations: 4991\ncpu: 139468.6635944695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 34480.60067823633,
            "unit": "ns/iter",
            "extra": "iterations: 20347\ncpu: 34478.62092691778 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 34194.23869297612,
            "unit": "ns/iter",
            "extra": "iterations: 20474\ncpu: 34192.522223307715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 34148.14490134895,
            "unit": "ns/iter",
            "extra": "iterations: 20476\ncpu: 34147.357882398835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 67926.48800854608,
            "unit": "ns/iter",
            "extra": "iterations: 10299\ncpu: 67924.13826585136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 63570.42275242084,
            "unit": "ns/iter",
            "extra": "iterations: 11023\ncpu: 63569.463848317006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 23456.598554311695,
            "unit": "ns/iter",
            "extra": "iterations: 29882\ncpu: 23456.281373402162 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 116703.5735905558,
            "unit": "ns/iter",
            "extra": "iterations: 6013\ncpu: 116700.7650091457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 95083.31268636805,
            "unit": "ns/iter",
            "extra": "iterations: 7378\ncpu: 95078.62564380602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 93931.74004024533,
            "unit": "ns/iter",
            "extra": "iterations: 7455\ncpu: 93925.33869885924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 93221.51177331622,
            "unit": "ns/iter",
            "extra": "iterations: 7517\ncpu: 93216.98816017082 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 172387.84023667555,
            "unit": "ns/iter",
            "extra": "iterations: 4056\ncpu: 172381.92800789056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 595404.055460705,
            "unit": "ns/iter",
            "extra": "iterations: 1172\ncpu: 595392.4914675775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 475163.8034013879,
            "unit": "ns/iter",
            "extra": "iterations: 1470\ncpu: 475147.4149659846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 490896.3030726677,
            "unit": "ns/iter",
            "extra": "iterations: 1432\ncpu: 490866.4804469281 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 475574.5896387457,
            "unit": "ns/iter",
            "extra": "iterations: 1467\ncpu: 475542.467621002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 311735.0811889641,
            "unit": "ns/iter",
            "extra": "iterations: 2254\ncpu: 311729.3700088701 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 470939.11712928204,
            "unit": "ns/iter",
            "extra": "iterations: 1477\ncpu: 470917.8063642536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 24223.902922721583,
            "unit": "ns/iter",
            "extra": "iterations: 28843\ncpu: 24222.97957910068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 115838.48599370812,
            "unit": "ns/iter",
            "extra": "iterations: 6033\ncpu: 115831.74208519691 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 95082.72354300042,
            "unit": "ns/iter",
            "extra": "iterations: 7361\ncpu: 95079.59516370206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 95411.45090810084,
            "unit": "ns/iter",
            "extra": "iterations: 7323\ncpu: 95409.09463334772 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 94383.85220549216,
            "unit": "ns/iter",
            "extra": "iterations: 7436\ncpu: 94383.41850457383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 169361.64610546915,
            "unit": "ns/iter",
            "extra": "iterations: 4134\ncpu: 169362.82051281942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 598696.0477408186,
            "unit": "ns/iter",
            "extra": "iterations: 1173\ncpu: 598700.1705029809 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 483021.4475138265,
            "unit": "ns/iter",
            "extra": "iterations: 1448\ncpu: 483025.27624310117 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 486790.577138791,
            "unit": "ns/iter",
            "extra": "iterations: 1426\ncpu: 486770.26647966047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 483864.2112482832,
            "unit": "ns/iter",
            "extra": "iterations: 1458\ncpu: 483857.4759945092 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 307295.3500660468,
            "unit": "ns/iter",
            "extra": "iterations: 2271\ncpu: 307293.5270805835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 477695.0760870282,
            "unit": "ns/iter",
            "extra": "iterations: 1472\ncpu: 477693.07065217616 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}