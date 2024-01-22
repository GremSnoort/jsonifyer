window.BENCHMARK_DATA = {
  "lastUpdate": 1705957267055,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Serialize clang-16 20.04 Release c++-17": [
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
        "date": 1702490405355,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 695.505291709867,
            "unit": "ns/iter",
            "extra": "iterations: 1002417\ncpu: 695.4963852368825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 10894.667077309985,
            "unit": "ns/iter",
            "extra": "iterations: 76303\ncpu: 10893.989751385921 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 24045.384775086804,
            "unit": "ns/iter",
            "extra": "iterations: 34680\ncpu: 24044.950980392165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 37553.305602872526,
            "unit": "ns/iter",
            "extra": "iterations: 22310\ncpu: 37552.57731958762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 46919.231225180425,
            "unit": "ns/iter",
            "extra": "iterations: 16871\ncpu: 46917.135913698075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 58903.793230472096,
            "unit": "ns/iter",
            "extra": "iterations: 14388\ncpu: 58900.750625521236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 58508.202300004086,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 58506.609999999964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 68121.74777517248,
            "unit": "ns/iter",
            "extra": "iterations: 12810\ncpu: 68117.72833723645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 77605.40249442554,
            "unit": "ns/iter",
            "extra": "iterations: 11225\ncpu: 77599.77728285086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 569.9042085906457,
            "unit": "ns/iter",
            "extra": "iterations: 1231196\ncpu: 569.8523224571878 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 480.8139122163476,
            "unit": "ns/iter",
            "extra": "iterations: 1457151\ncpu: 480.78668579989227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 464.74692902758056,
            "unit": "ns/iter",
            "extra": "iterations: 1505712\ncpu: 464.74617988034913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 463.9211633819734,
            "unit": "ns/iter",
            "extra": "iterations: 1474391\ncpu: 463.90618228136236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 936.6253355090629,
            "unit": "ns/iter",
            "extra": "iterations: 748862\ncpu: 936.5761649008764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 3948.4147613772434,
            "unit": "ns/iter",
            "extra": "iterations: 202244\ncpu: 3948.0691639801403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 17759.896659233196,
            "unit": "ns/iter",
            "extra": "iterations: 46187\ncpu: 17759.845844068706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 13904.932706384794,
            "unit": "ns/iter",
            "extra": "iterations: 58059\ncpu: 13904.521262853315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 13157.437177473885,
            "unit": "ns/iter",
            "extra": "iterations: 62398\ncpu: 13157.25664284112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 13178.30960472034,
            "unit": "ns/iter",
            "extra": "iterations: 62386\ncpu: 13177.740198121377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 46527.922922253674,
            "unit": "ns/iter",
            "extra": "iterations: 17904\ncpu: 46527.39611260048 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 463417.9226315825,
            "unit": "ns/iter",
            "extra": "iterations: 1900\ncpu: 463390.63157894596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 375935.0890529808,
            "unit": "ns/iter",
            "extra": "iterations: 2302\ncpu: 375918.3753258024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 375562.4041361532,
            "unit": "ns/iter",
            "extra": "iterations: 2321\ncpu: 375561.3097802658 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 377996.5063070858,
            "unit": "ns/iter",
            "extra": "iterations: 2299\ncpu: 377976.7290126147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 233013.9730810397,
            "unit": "ns/iter",
            "extra": "iterations: 3752\ncpu: 233011.70042643882 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 372758.09851784934,
            "unit": "ns/iter",
            "extra": "iterations: 2294\ncpu: 372739.0584132514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 1914257.816666757,
            "unit": "ns/iter",
            "extra": "iterations: 480\ncpu: 1914189.166666665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 744720.8929712075,
            "unit": "ns/iter",
            "extra": "iterations: 1252\ncpu: 744668.3706070287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2601847.89295783,
            "unit": "ns/iter",
            "extra": "iterations: 355\ncpu: 2601701.408450707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 4172.683891297915,
            "unit": "ns/iter",
            "extra": "iterations: 189767\ncpu: 4172.504703135928 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 18939.859097649063,
            "unit": "ns/iter",
            "extra": "iterations: 44506\ncpu: 18938.702646834106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 15151.59100307313,
            "unit": "ns/iter",
            "extra": "iterations: 55619\ncpu: 15151.399701540771 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 14410.240545673734,
            "unit": "ns/iter",
            "extra": "iterations: 57910\ncpu: 14408.979450872017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 14421.490765033488,
            "unit": "ns/iter",
            "extra": "iterations: 57932\ncpu: 14421.072982117013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 46616.32877248039,
            "unit": "ns/iter",
            "extra": "iterations: 17906\ncpu: 46613.26371048817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 480480.15146494913,
            "unit": "ns/iter",
            "extra": "iterations: 1809\ncpu: 480474.51630735357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 390699.1241595709,
            "unit": "ns/iter",
            "extra": "iterations: 2231\ncpu: 390687.4047512324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 384306.3146513826,
            "unit": "ns/iter",
            "extra": "iterations: 2266\ncpu: 384301.45631067944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 381849.84102786396,
            "unit": "ns/iter",
            "extra": "iterations: 2296\ncpu: 381841.89895470307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 229892.61659251718,
            "unit": "ns/iter",
            "extra": "iterations: 3821\ncpu: 229884.24496205116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 380139.785278734,
            "unit": "ns/iter",
            "extra": "iterations: 2296\ncpu: 380135.148083623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 1917658.892631679,
            "unit": "ns/iter",
            "extra": "iterations: 475\ncpu: 1917531.3684210575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 774241.4119107072,
            "unit": "ns/iter",
            "extra": "iterations: 1209\ncpu: 774232.4234904839 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 4112.747764120695,
            "unit": "ns/iter",
            "extra": "iterations: 195337\ncpu: 4112.589012834234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 18568.262304641776,
            "unit": "ns/iter",
            "extra": "iterations: 44597\ncpu: 18567.863309191074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 14977.425445588247,
            "unit": "ns/iter",
            "extra": "iterations: 55208\ncpu: 14976.626575858507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 14349.549133950504,
            "unit": "ns/iter",
            "extra": "iterations: 57618\ncpu: 14349.37345968268 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 14379.147185171225,
            "unit": "ns/iter",
            "extra": "iterations: 57730\ncpu: 14378.68352676247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 46453.78583688378,
            "unit": "ns/iter",
            "extra": "iterations: 18061\ncpu: 46452.90958418683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 465016.99894009286,
            "unit": "ns/iter",
            "extra": "iterations: 1887\ncpu: 465002.54372018913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 377457.16840733885,
            "unit": "ns/iter",
            "extra": "iterations: 2298\ncpu: 377443.86422976677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 376166.09969661036,
            "unit": "ns/iter",
            "extra": "iterations: 2307\ncpu: 376148.24447334075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 376500.02119377593,
            "unit": "ns/iter",
            "extra": "iterations: 2312\ncpu: 376471.75605536316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 229478.90199158664,
            "unit": "ns/iter",
            "extra": "iterations: 3816\ncpu: 229466.9025157232 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 375698.01474414766,
            "unit": "ns/iter",
            "extra": "iterations: 2306\ncpu: 375678.1873373814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 300.22083327086284,
            "unit": "ns/iter",
            "extra": "iterations: 2334535\ncpu: 300.2034666432487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1653.0824728983544,
            "unit": "ns/iter",
            "extra": "iterations: 426819\ncpu: 1652.9735086769936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1264.5608168765327,
            "unit": "ns/iter",
            "extra": "iterations: 553621\ncpu: 1264.4964696064585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1271.0644080343047,
            "unit": "ns/iter",
            "extra": "iterations: 548503\ncpu: 1270.9943245524578 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1011.2042405755446,
            "unit": "ns/iter",
            "extra": "iterations: 706838\ncpu: 1011.1072126852262 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 7932.322387855973,
            "unit": "ns/iter",
            "extra": "iterations: 88012\ncpu: 7931.8876971322625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 19088.817512876205,
            "unit": "ns/iter",
            "extra": "iterations: 36693\ncpu: 19088.278418226615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4488.3284326914945,
            "unit": "ns/iter",
            "extra": "iterations: 156102\ncpu: 4488.188492139764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4458.824152987588,
            "unit": "ns/iter",
            "extra": "iterations: 156875\ncpu: 4458.467569721158 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4457.996970391577,
            "unit": "ns/iter",
            "extra": "iterations: 157116\ncpu: 4457.607118307438 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 9480.230079895047,
            "unit": "ns/iter",
            "extra": "iterations: 74096\ncpu: 9479.525210537702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 8537.519664399726,
            "unit": "ns/iter",
            "extra": "iterations: 81645\ncpu: 8537.240492375548 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3146.3821457141335,
            "unit": "ns/iter",
            "extra": "iterations: 222546\ncpu: 3146.3836689942486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 15575.371222412776,
            "unit": "ns/iter",
            "extra": "iterations: 44903\ncpu: 15574.876956996299 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 12371.27106789114,
            "unit": "ns/iter",
            "extra": "iterations: 56045\ncpu: 12370.008029262255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 12543.731682865506,
            "unit": "ns/iter",
            "extra": "iterations: 55863\ncpu: 12543.092923760056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 13187.23043428884,
            "unit": "ns/iter",
            "extra": "iterations: 52822\ncpu: 13186.136458293733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 28089.042715793494,
            "unit": "ns/iter",
            "extra": "iterations: 24862\ncpu: 28087.350172954742 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 99904.86975747731,
            "unit": "ns/iter",
            "extra": "iterations: 7010\ncpu: 99891.54065620505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 85801.7338561449,
            "unit": "ns/iter",
            "extra": "iterations: 8161\ncpu: 85800.47788261368 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 84096.1539015656,
            "unit": "ns/iter",
            "extra": "iterations: 8330\ncpu: 84093.32533013244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 85755.64374006605,
            "unit": "ns/iter",
            "extra": "iterations: 8171\ncpu: 85750.5078937707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 55716.55677450679,
            "unit": "ns/iter",
            "extra": "iterations: 12488\ncpu: 55713.52498398483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 85631.18825688034,
            "unit": "ns/iter",
            "extra": "iterations: 8175\ncpu: 85622.48318042888 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3085.5976422233703,
            "unit": "ns/iter",
            "extra": "iterations: 227248\ncpu: 3085.322643103584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 15420.972211832272,
            "unit": "ns/iter",
            "extra": "iterations: 45451\ncpu: 15419.574926844116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 12373.123028053693,
            "unit": "ns/iter",
            "extra": "iterations: 56353\ncpu: 12372.720174613589 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 12199.037714843656,
            "unit": "ns/iter",
            "extra": "iterations: 57484\ncpu: 12198.484795769273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 12602.610310692156,
            "unit": "ns/iter",
            "extra": "iterations: 55457\ncpu: 12602.216131417028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 27270.32444531204,
            "unit": "ns/iter",
            "extra": "iterations: 25690\ncpu: 27269.774231218165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 98538.85235277709,
            "unit": "ns/iter",
            "extra": "iterations: 7098\ncpu: 98531.20597351232 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 84167.93083122124,
            "unit": "ns/iter",
            "extra": "iterations: 8313\ncpu: 84167.95380728944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 82104.51134214998,
            "unit": "ns/iter",
            "extra": "iterations: 8464\ncpu: 82095.3095463147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 82547.58191490018,
            "unit": "ns/iter",
            "extra": "iterations: 8460\ncpu: 82544.728132387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 55743.21309647595,
            "unit": "ns/iter",
            "extra": "iterations: 12553\ncpu: 55742.157253247075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 83740.97007361664,
            "unit": "ns/iter",
            "extra": "iterations: 8287\ncpu: 83734.58428864561 ns\nthreads: 1"
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
        "date": 1702493045735,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 715.7658139324741,
            "unit": "ns/iter",
            "extra": "iterations: 975216\ncpu: 715.7656355104922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 10622.203955450377,
            "unit": "ns/iter",
            "extra": "iterations: 75693\ncpu: 10621.988823272957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 23927.561525630965,
            "unit": "ns/iter",
            "extra": "iterations: 34766\ncpu: 23927.322671575672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 38673.5026683757,
            "unit": "ns/iter",
            "extra": "iterations: 22673\ncpu: 38672.641467825175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 46407.600257672966,
            "unit": "ns/iter",
            "extra": "iterations: 17076\ncpu: 46406.5589130944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 58866.12416362243,
            "unit": "ns/iter",
            "extra": "iterations: 14497\ncpu: 58866.15161757603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 58833.42689999154,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 58831.66999999992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 68046.26629539677,
            "unit": "ns/iter",
            "extra": "iterations: 12749\ncpu: 68043.68185740056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 78440.76158405271,
            "unit": "ns/iter",
            "extra": "iterations: 11136\ncpu: 78439.37679597699 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 572.4832876523354,
            "unit": "ns/iter",
            "extra": "iterations: 1221881\ncpu: 572.4753065151197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 484.4289615099495,
            "unit": "ns/iter",
            "extra": "iterations: 1442556\ncpu: 484.4237589389937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 475.6192185232368,
            "unit": "ns/iter",
            "extra": "iterations: 1471445\ncpu: 475.6149907064139 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 486.2305903687885,
            "unit": "ns/iter",
            "extra": "iterations: 1448044\ncpu: 486.2169934062786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 937.2006805086615,
            "unit": "ns/iter",
            "extra": "iterations: 747676\ncpu: 937.2042167997898 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 4031.4935846830517,
            "unit": "ns/iter",
            "extra": "iterations: 186195\ncpu: 4031.31448212895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 19186.016023780456,
            "unit": "ns/iter",
            "extra": "iterations: 43061\ncpu: 19184.879589419637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 14989.083996719868,
            "unit": "ns/iter",
            "extra": "iterations: 54895\ncpu: 14988.632844521393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 14381.226751951686,
            "unit": "ns/iter",
            "extra": "iterations: 56908\ncpu: 14380.660012651973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 14725.160535058583,
            "unit": "ns/iter",
            "extra": "iterations: 55994\ncpu: 14724.499053470025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 46418.167507284066,
            "unit": "ns/iter",
            "extra": "iterations: 17844\ncpu: 46416.33041918853 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 463078.62953096436,
            "unit": "ns/iter",
            "extra": "iterations: 1876\ncpu: 463063.5394456287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 373487.75096771895,
            "unit": "ns/iter",
            "extra": "iterations: 2325\ncpu: 373465.1612903222 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 373627.6682444239,
            "unit": "ns/iter",
            "extra": "iterations: 2324\ncpu: 373609.7246127358 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 372698.4281411284,
            "unit": "ns/iter",
            "extra": "iterations: 2324\ncpu: 372684.1222030992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 230645.55697209522,
            "unit": "ns/iter",
            "extra": "iterations: 3765\ncpu: 230640.4780876488 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 375945.78874458896,
            "unit": "ns/iter",
            "extra": "iterations: 2310\ncpu: 375939.48051948013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 1909625.742738432,
            "unit": "ns/iter",
            "extra": "iterations: 482\ncpu: 1909464.9377593328 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 751915.5438596015,
            "unit": "ns/iter",
            "extra": "iterations: 1254\ncpu: 751885.9649122788 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2572993.8189417357,
            "unit": "ns/iter",
            "extra": "iterations: 359\ncpu: 2572950.974930354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 4111.937027166251,
            "unit": "ns/iter",
            "extra": "iterations: 190606\ncpu: 4111.8852502019945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 18998.623242369493,
            "unit": "ns/iter",
            "extra": "iterations: 43240\ncpu: 18997.962534690076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 14960.54825202862,
            "unit": "ns/iter",
            "extra": "iterations: 54692\ncpu: 14960.072771154772 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 14337.230437579057,
            "unit": "ns/iter",
            "extra": "iterations: 57521\ncpu: 14336.52579058082 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 14686.924716843705,
            "unit": "ns/iter",
            "extra": "iterations: 56241\ncpu: 14686.32847922334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 46310.53263088024,
            "unit": "ns/iter",
            "extra": "iterations: 18127\ncpu: 46307.899817951125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 471226.272333522,
            "unit": "ns/iter",
            "extra": "iterations: 1847\ncpu: 471215.7011369799 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 384049.37098900747,
            "unit": "ns/iter",
            "extra": "iterations: 2275\ncpu: 384039.6923076922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 380962.51769327756,
            "unit": "ns/iter",
            "extra": "iterations: 2289\ncpu: 380943.1629532556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 379263.85267273925,
            "unit": "ns/iter",
            "extra": "iterations: 2301\ncpu: 379252.5423728802 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 227625.7912431752,
            "unit": "ns/iter",
            "extra": "iterations: 3837\ncpu: 227613.6825645042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 380153.9425837214,
            "unit": "ns/iter",
            "extra": "iterations: 2299\ncpu: 380130.57851239695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 1924776.6518988044,
            "unit": "ns/iter",
            "extra": "iterations: 474\ncpu: 1924689.8734177246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 761128.4626015613,
            "unit": "ns/iter",
            "extra": "iterations: 1230\ncpu: 761086.2601626007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 4108.109628275642,
            "unit": "ns/iter",
            "extra": "iterations: 195871\ncpu: 4107.867933486841 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 18568.539668679903,
            "unit": "ns/iter",
            "extra": "iterations: 44670\ncpu: 18567.841952093113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 14939.437702673873,
            "unit": "ns/iter",
            "extra": "iterations: 55508\ncpu: 14938.997982272924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 14309.359299652944,
            "unit": "ns/iter",
            "extra": "iterations: 57857\ncpu: 14309.006688905503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 14648.623608451746,
            "unit": "ns/iter",
            "extra": "iterations: 56412\ncpu: 14648.227327519013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 46360.602928989596,
            "unit": "ns/iter",
            "extra": "iterations: 18095\ncpu: 46358.25366123214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 466435.7177161286,
            "unit": "ns/iter",
            "extra": "iterations: 1874\ncpu: 466424.0128068288 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 377980.7831533833,
            "unit": "ns/iter",
            "extra": "iterations: 2315\ncpu: 377964.06047516287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 377042.80267122964,
            "unit": "ns/iter",
            "extra": "iterations: 2321\ncpu: 377019.64670400677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 372535.36108717544,
            "unit": "ns/iter",
            "extra": "iterations: 2318\ncpu: 372533.86540120904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 231061.9915299252,
            "unit": "ns/iter",
            "extra": "iterations: 3778\ncpu: 231056.00847008973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 375539.9471174413,
            "unit": "ns/iter",
            "extra": "iterations: 2307\ncpu: 375535.4139575217 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 295.37510461708086,
            "unit": "ns/iter",
            "extra": "iterations: 2369355\ncpu: 295.37870011036824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1607.9748103473385,
            "unit": "ns/iter",
            "extra": "iterations: 434742\ncpu: 1607.9702444208222 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1265.4721283875508,
            "unit": "ns/iter",
            "extra": "iterations: 552390\ncpu: 1265.4660656420333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1292.9167049195119,
            "unit": "ns/iter",
            "extra": "iterations: 557692\ncpu: 1292.902354704753 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1021.407175238495,
            "unit": "ns/iter",
            "extra": "iterations: 682932\ncpu: 1021.3908558977984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 7977.286090406255,
            "unit": "ns/iter",
            "extra": "iterations: 87738\ncpu: 7977.267546559118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 18984.818093148242,
            "unit": "ns/iter",
            "extra": "iterations: 36909\ncpu: 18985.04429813846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4487.151889712159,
            "unit": "ns/iter",
            "extra": "iterations: 155738\ncpu: 4487.147003300393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4454.701624327259,
            "unit": "ns/iter",
            "extra": "iterations: 157419\ncpu: 4454.65604533121 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4494.847432722672,
            "unit": "ns/iter",
            "extra": "iterations: 155846\ncpu: 4494.807694775572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 9469.350821179161,
            "unit": "ns/iter",
            "extra": "iterations: 73918\ncpu: 9469.45804810738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 8599.470835994527,
            "unit": "ns/iter",
            "extra": "iterations: 81436\ncpu: 8599.436367208684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3418.6484868660405,
            "unit": "ns/iter",
            "extra": "iterations: 204311\ncpu: 3418.6221006211144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 17047.352082573023,
            "unit": "ns/iter",
            "extra": "iterations: 41175\ncpu: 17047.298117789796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 13523.094135864267,
            "unit": "ns/iter",
            "extra": "iterations: 51670\ncpu: 13523.263015289285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 13572.115761733354,
            "unit": "ns/iter",
            "extra": "iterations: 51606\ncpu: 13572.270666201563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 14051.517044646991,
            "unit": "ns/iter",
            "extra": "iterations: 49253\ncpu: 14051.294337400988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 28187.500221515827,
            "unit": "ns/iter",
            "extra": "iterations: 24829\ncpu: 28187.534737605445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 100455.69006184388,
            "unit": "ns/iter",
            "extra": "iterations: 6953\ncpu: 100452.6822954121 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 86398.33990820574,
            "unit": "ns/iter",
            "extra": "iterations: 8061\ncpu: 86399.39213496936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 84984.11138222419,
            "unit": "ns/iter",
            "extra": "iterations: 8197\ncpu: 84982.45699646254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 86902.64927276543,
            "unit": "ns/iter",
            "extra": "iterations: 7838\ncpu: 86900.63791783513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 56128.456790121076,
            "unit": "ns/iter",
            "extra": "iterations: 12474\ncpu: 56128.210678210155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 86089.56073273385,
            "unit": "ns/iter",
            "extra": "iterations: 8134\ncpu: 86087.66904352221 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3313.570344115224,
            "unit": "ns/iter",
            "extra": "iterations: 211034\ncpu: 3313.609181458883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 16711.625062619965,
            "unit": "ns/iter",
            "extra": "iterations: 41919\ncpu: 16711.312292754923 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 13247.679297173567,
            "unit": "ns/iter",
            "extra": "iterations: 52360\ncpu: 13247.578304048831 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 13257.44115643729,
            "unit": "ns/iter",
            "extra": "iterations: 52852\ncpu: 13257.301521229012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 13644.494802414094,
            "unit": "ns/iter",
            "extra": "iterations: 51370\ncpu: 13644.465641425128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 29097.846695264914,
            "unit": "ns/iter",
            "extra": "iterations: 24011\ncpu: 29097.64691183162 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 99569.01975273114,
            "unit": "ns/iter",
            "extra": "iterations: 7037\ncpu: 99566.84666761561 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 84050.69336105137,
            "unit": "ns/iter",
            "extra": "iterations: 8179\ncpu: 84050.61743489404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 83149.26508620426,
            "unit": "ns/iter",
            "extra": "iterations: 8352\ncpu: 83147.56944444361 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 85042.70950350705,
            "unit": "ns/iter",
            "extra": "iterations: 7976\ncpu: 85043.76880641835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 57656.87237545861,
            "unit": "ns/iter",
            "extra": "iterations: 12145\ncpu: 57657.54631535614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 84163.70905775682,
            "unit": "ns/iter",
            "extra": "iterations: 8225\ncpu: 84162.89361702077 ns\nthreads: 1"
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
        "date": 1702504634353,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 700.4415104649778,
            "unit": "ns/iter",
            "extra": "iterations: 999136\ncpu: 700.4120560163982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 10997.140324320822,
            "unit": "ns/iter",
            "extra": "iterations: 75974\ncpu: 10996.9357938242 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 24433.45594507695,
            "unit": "ns/iter",
            "extra": "iterations: 34230\ncpu: 24432.778264680102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 38528.41062169918,
            "unit": "ns/iter",
            "extra": "iterations: 22181\ncpu: 38527.79856634056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 50386.54174932611,
            "unit": "ns/iter",
            "extra": "iterations: 16635\ncpu: 50385.85512473698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 59311.1531923836,
            "unit": "ns/iter",
            "extra": "iterations: 14237\ncpu: 59309.10304137107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 59054.4899000065,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 58980.609999999964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 68072.9748274736,
            "unit": "ns/iter",
            "extra": "iterations: 12752\ncpu: 68071.83186951064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 77935.42176869874,
            "unit": "ns/iter",
            "extra": "iterations: 11172\ncpu: 77933.5392051558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 559.4969466682115,
            "unit": "ns/iter",
            "extra": "iterations: 1249291\ncpu: 559.4935047158747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 482.35476885529584,
            "unit": "ns/iter",
            "extra": "iterations: 1452791\ncpu: 482.3525200803136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 465.1897054359385,
            "unit": "ns/iter",
            "extra": "iterations: 1505513\ncpu: 465.18296421219856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 472.3868060241632,
            "unit": "ns/iter",
            "extra": "iterations: 1484814\ncpu: 472.3654275889101 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 936.7207654488735,
            "unit": "ns/iter",
            "extra": "iterations: 745445\ncpu: 936.7143115856968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 4155.36967000368,
            "unit": "ns/iter",
            "extra": "iterations: 194184\ncpu: 4155.183743253824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 18540.865255446228,
            "unit": "ns/iter",
            "extra": "iterations: 44217\ncpu: 18540.122577289254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 14807.384105242429,
            "unit": "ns/iter",
            "extra": "iterations: 55339\ncpu: 14806.718589060176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 14181.762218305656,
            "unit": "ns/iter",
            "extra": "iterations: 57864\ncpu: 14181.309622563245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 14195.079311732317,
            "unit": "ns/iter",
            "extra": "iterations: 57129\ncpu: 14194.83099651666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 46313.981561458015,
            "unit": "ns/iter",
            "extra": "iterations: 18060\ncpu: 46312.181616832924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 458520.4281942661,
            "unit": "ns/iter",
            "extra": "iterations: 1894\ncpu: 458494.4033790903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 371279.14620634774,
            "unit": "ns/iter",
            "extra": "iterations: 2346\ncpu: 371264.10912191006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 368364.88035638887,
            "unit": "ns/iter",
            "extra": "iterations: 2357\ncpu: 368357.99745439057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 370970.5896995795,
            "unit": "ns/iter",
            "extra": "iterations: 2330\ncpu: 370953.43347639445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 229390.2635045959,
            "unit": "ns/iter",
            "extra": "iterations: 3795\ncpu: 229382.05533596844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 372937.1959604558,
            "unit": "ns/iter",
            "extra": "iterations: 2327\ncpu: 372918.77954447863 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 1894100.6893003765,
            "unit": "ns/iter",
            "extra": "iterations: 486\ncpu: 1894018.5185185196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 761263.3081914444,
            "unit": "ns/iter",
            "extra": "iterations: 1233\ncpu: 761239.0105433889 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2564939.583333449,
            "unit": "ns/iter",
            "extra": "iterations: 360\ncpu: 2564796.9444444426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 4072.286607087801,
            "unit": "ns/iter",
            "extra": "iterations: 195372\ncpu: 4072.1608009336164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 18627.275910804277,
            "unit": "ns/iter",
            "extra": "iterations: 44576\ncpu: 18626.431263460265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 14780.881689430196,
            "unit": "ns/iter",
            "extra": "iterations: 55498\ncpu: 14780.509207538991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 14334.113267992509,
            "unit": "ns/iter",
            "extra": "iterations: 57748\ncpu: 14333.443582461676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 14406.661255203682,
            "unit": "ns/iter",
            "extra": "iterations: 57409\ncpu: 14406.0373808985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 46471.435172300124,
            "unit": "ns/iter",
            "extra": "iterations: 17963\ncpu: 46470.86232811891 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 477645.23861768405,
            "unit": "ns/iter",
            "extra": "iterations: 1823\ncpu: 477625.7816785531 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 383517.10296065774,
            "unit": "ns/iter",
            "extra": "iterations: 2263\ncpu: 383498.4533804687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 381194.3001322172,
            "unit": "ns/iter",
            "extra": "iterations: 2269\ncpu: 381178.36051123985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 378507.2769830865,
            "unit": "ns/iter",
            "extra": "iterations: 2307\ncpu: 378496.1855223243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 226905.66893304093,
            "unit": "ns/iter",
            "extra": "iterations: 3824\ncpu: 226895.6066945601 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 379058.465859957,
            "unit": "ns/iter",
            "extra": "iterations: 2314\ncpu: 379040.14693171997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 1911768.6974789863,
            "unit": "ns/iter",
            "extra": "iterations: 476\ncpu: 1911690.5462184793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 749080.1361042956,
            "unit": "ns/iter",
            "extra": "iterations: 1227\ncpu: 749057.783211084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 4023.9370108816192,
            "unit": "ns/iter",
            "extra": "iterations: 198955\ncpu: 4023.759141514421 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 18672.13930769735,
            "unit": "ns/iter",
            "extra": "iterations: 44836\ncpu: 18671.324382192888 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 15001.029087316503,
            "unit": "ns/iter",
            "extra": "iterations: 55660\ncpu: 15000.49407114623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 14393.725087276664,
            "unit": "ns/iter",
            "extra": "iterations: 57862\ncpu: 14392.874425356842 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 14417.175231378133,
            "unit": "ns/iter",
            "extra": "iterations: 56725\ncpu: 14416.594094314676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 46420.96978600222,
            "unit": "ns/iter",
            "extra": "iterations: 18038\ncpu: 46419.203902871974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 461561.84479999257,
            "unit": "ns/iter",
            "extra": "iterations: 1875\ncpu: 461541.06666666624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 375430.45332759444,
            "unit": "ns/iter",
            "extra": "iterations: 2314\ncpu: 375425.237683663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 372185.85885373177,
            "unit": "ns/iter",
            "extra": "iterations: 2338\ncpu: 372170.8297690344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 372937.3999139301,
            "unit": "ns/iter",
            "extra": "iterations: 2323\ncpu: 372922.72922944324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 230390.25334380622,
            "unit": "ns/iter",
            "extra": "iterations: 3813\ncpu: 230380.0681877793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 372040.57539509237,
            "unit": "ns/iter",
            "extra": "iterations: 2341\ncpu: 372025.2456215296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 296.54646400332655,
            "unit": "ns/iter",
            "extra": "iterations: 2359052\ncpu: 296.5311065631454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1630.1437875727393,
            "unit": "ns/iter",
            "extra": "iterations: 428834\ncpu: 1630.073641548956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1264.7519280276108,
            "unit": "ns/iter",
            "extra": "iterations: 553545\ncpu: 1264.684533326117 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1279.2615892445633,
            "unit": "ns/iter",
            "extra": "iterations: 560757\ncpu: 1279.1981196846402 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 990.6513614068327,
            "unit": "ns/iter",
            "extra": "iterations: 705814\ncpu: 990.6626958377184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 7889.84639890198,
            "unit": "ns/iter",
            "extra": "iterations: 88834\ncpu: 7889.726906364611 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 18825.256099862305,
            "unit": "ns/iter",
            "extra": "iterations: 37091\ncpu: 18824.841605780563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4400.594122654831,
            "unit": "ns/iter",
            "extra": "iterations: 158575\ncpu: 4390.994166798011 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4404.447232509907,
            "unit": "ns/iter",
            "extra": "iterations: 158772\ncpu: 4404.284130703115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4443.86368972328,
            "unit": "ns/iter",
            "extra": "iterations: 155036\ncpu: 4443.582780773439 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 9372.383917863855,
            "unit": "ns/iter",
            "extra": "iterations: 74219\ncpu: 9372.078578261662 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 8533.310591214402,
            "unit": "ns/iter",
            "extra": "iterations: 82153\ncpu: 8533.242851752208 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3075.8645601174253,
            "unit": "ns/iter",
            "extra": "iterations: 227038\ncpu: 3075.85338137225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 15458.582976656277,
            "unit": "ns/iter",
            "extra": "iterations: 45326\ncpu: 15458.25574725329 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 12306.643639176185,
            "unit": "ns/iter",
            "extra": "iterations: 56903\ncpu: 12306.444299949084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 12424.964091923615,
            "unit": "ns/iter",
            "extra": "iterations: 56394\ncpu: 12424.569989715255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 13064.66002311941,
            "unit": "ns/iter",
            "extra": "iterations: 53636\ncpu: 13064.687896189327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 27931.994928517917,
            "unit": "ns/iter",
            "extra": "iterations: 25042\ncpu: 27930.345020365996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 99605.14668184888,
            "unit": "ns/iter",
            "extra": "iterations: 7022\ncpu: 99600.96838507579 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 86067.83314848618,
            "unit": "ns/iter",
            "extra": "iterations: 8115\ncpu: 86067.99753542793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 84414.67909726576,
            "unit": "ns/iter",
            "extra": "iterations: 8286\ncpu: 84410.97031136754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 85034.24248692166,
            "unit": "ns/iter",
            "extra": "iterations: 8219\ncpu: 85028.53145151582 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 55901.57588324723,
            "unit": "ns/iter",
            "extra": "iterations: 12539\ncpu: 55899.13071217811 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 84725.35314009085,
            "unit": "ns/iter",
            "extra": "iterations: 8280\ncpu: 84720.33816425099 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3025.4518314980364,
            "unit": "ns/iter",
            "extra": "iterations: 231095\ncpu: 3025.340228044732 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 15221.25192718097,
            "unit": "ns/iter",
            "extra": "iterations: 45922\ncpu: 15220.948564958113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 12291.853214229875,
            "unit": "ns/iter",
            "extra": "iterations: 56981\ncpu: 12291.784980958728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 12352.7520337241,
            "unit": "ns/iter",
            "extra": "iterations: 57407\ncpu: 12352.190499416514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 12538.118205768436,
            "unit": "ns/iter",
            "extra": "iterations: 55801\ncpu: 12537.226931416968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 27316.282488298784,
            "unit": "ns/iter",
            "extra": "iterations: 25640\ncpu: 27315.1560062401 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 97129.4815020097,
            "unit": "ns/iter",
            "extra": "iterations: 7217\ncpu: 97124.77483718899 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 84316.86597689042,
            "unit": "ns/iter",
            "extra": "iterations: 8312\ncpu: 84313.30606352279 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 82156.81688158667,
            "unit": "ns/iter",
            "extra": "iterations: 8530\ncpu: 82155.60375146562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 82772.18707685207,
            "unit": "ns/iter",
            "extra": "iterations: 8419\ncpu: 82767.62085758348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 55966.56803265699,
            "unit": "ns/iter",
            "extra": "iterations: 12494\ncpu: 55964.19881543205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 84610.42564226748,
            "unit": "ns/iter",
            "extra": "iterations: 8291\ncpu: 84605.94620673158 ns\nthreads: 1"
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
        "date": 1705575715173,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 694.4569151847231,
            "unit": "ns/iter",
            "extra": "iterations: 1008592\ncpu: 694.4347169122897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 10864.526854887461,
            "unit": "ns/iter",
            "extra": "iterations: 76541\ncpu: 10864.02973569721 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 24029.974245195106,
            "unit": "ns/iter",
            "extra": "iterations: 33353\ncpu: 24029.223757982785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 38099.63681186694,
            "unit": "ns/iter",
            "extra": "iterations: 22107\ncpu: 38098.38060342877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 49460.724811496846,
            "unit": "ns/iter",
            "extra": "iterations: 16843\ncpu: 49459.91806685269 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 59241.88555609931,
            "unit": "ns/iter",
            "extra": "iterations: 14269\ncpu: 59239.54026210668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 59237.22049999469,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 59234.76999999995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 67787.02282522249,
            "unit": "ns/iter",
            "extra": "iterations: 12530\ncpu: 67784.83639265757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 78198.793847808,
            "unit": "ns/iter",
            "extra": "iterations: 11118\ncpu: 78196.9329016011 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 567.3506332139799,
            "unit": "ns/iter",
            "extra": "iterations: 1225731\ncpu: 567.3319839344847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 477.1939800655295,
            "unit": "ns/iter",
            "extra": "iterations: 1465099\ncpu: 477.1842039343419 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 469.66474763358656,
            "unit": "ns/iter",
            "extra": "iterations: 1492592\ncpu: 469.64287628501285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 474.42759891220885,
            "unit": "ns/iter",
            "extra": "iterations: 1476435\ncpu: 474.4132318727207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 934.5668525684736,
            "unit": "ns/iter",
            "extra": "iterations: 749500\ncpu: 934.5304869913261 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 4197.1157993535535,
            "unit": "ns/iter",
            "extra": "iterations: 189647\ncpu: 4196.941686396302 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 18811.435152440237,
            "unit": "ns/iter",
            "extra": "iterations: 43263\ncpu: 18810.216582298995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 14860.10953438499,
            "unit": "ns/iter",
            "extra": "iterations: 55389\ncpu: 14860.028164436993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 14256.370183470783,
            "unit": "ns/iter",
            "extra": "iterations: 57666\ncpu: 14255.698331772626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 14700.078631111764,
            "unit": "ns/iter",
            "extra": "iterations: 56250\ncpu: 14699.530666666697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 46766.71902816313,
            "unit": "ns/iter",
            "extra": "iterations: 17863\ncpu: 46764.938700106424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 469940.83475477743,
            "unit": "ns/iter",
            "extra": "iterations: 1876\ncpu: 469928.51812366606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 374250.2295719951,
            "unit": "ns/iter",
            "extra": "iterations: 2313\ncpu: 374243.6230004324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 375520.90420459956,
            "unit": "ns/iter",
            "extra": "iterations: 2307\ncpu: 375500.65019505844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 374800.31792659033,
            "unit": "ns/iter",
            "extra": "iterations: 2315\ncpu: 374793.8660907129 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 228713.1651205982,
            "unit": "ns/iter",
            "extra": "iterations: 3773\ncpu: 228704.00212032828 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 373345.5902929575,
            "unit": "ns/iter",
            "extra": "iterations: 2287\ncpu: 373328.5089637071 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 1904609.6103093266,
            "unit": "ns/iter",
            "extra": "iterations: 485\ncpu: 1904521.8556700984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 773183.2489728626,
            "unit": "ns/iter",
            "extra": "iterations: 1217\ncpu: 773166.0640920282 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2580305.798319285,
            "unit": "ns/iter",
            "extra": "iterations: 357\ncpu: 2580187.6750700236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 4136.310422594409,
            "unit": "ns/iter",
            "extra": "iterations: 189780\ncpu: 4136.226156602367 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 18682.037369915397,
            "unit": "ns/iter",
            "extra": "iterations: 44394\ncpu: 18681.943505879233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 15025.016042295816,
            "unit": "ns/iter",
            "extra": "iterations: 55229\ncpu: 15024.943417407592 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 14408.586989750782,
            "unit": "ns/iter",
            "extra": "iterations: 57570\ncpu: 14408.422789647355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 14761.744046667636,
            "unit": "ns/iter",
            "extra": "iterations: 56229\ncpu: 14761.457610841375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 46804.36844157522,
            "unit": "ns/iter",
            "extra": "iterations: 17954\ncpu: 46803.497827781845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 475441.15296678396,
            "unit": "ns/iter",
            "extra": "iterations: 1837\ncpu: 475429.1235710404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 383455.153304004,
            "unit": "ns/iter",
            "extra": "iterations: 2270\ncpu: 383442.33480176114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 381780.81702503446,
            "unit": "ns/iter",
            "extra": "iterations: 2279\ncpu: 381762.8345765697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 380576.4817391461,
            "unit": "ns/iter",
            "extra": "iterations: 2300\ncpu: 380564.9999999987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 227714.29082834275,
            "unit": "ns/iter",
            "extra": "iterations: 3827\ncpu: 227708.49229161153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 375943.7022835034,
            "unit": "ns/iter",
            "extra": "iterations: 2321\ncpu: 375933.95088324166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 1928275.8966244129,
            "unit": "ns/iter",
            "extra": "iterations: 474\ncpu: 1928216.2447257424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 747143.9846650414,
            "unit": "ns/iter",
            "extra": "iterations: 1239\ncpu: 747121.5496368033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 4093.786406678611,
            "unit": "ns/iter",
            "extra": "iterations: 196317\ncpu: 4093.6195031505126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 18578.596781474025,
            "unit": "ns/iter",
            "extra": "iterations: 44306\ncpu: 18578.048119893432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 15006.268372930252,
            "unit": "ns/iter",
            "extra": "iterations: 55013\ncpu: 15005.862250740802 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 14359.7717980437,
            "unit": "ns/iter",
            "extra": "iterations: 57379\ncpu: 14359.370152843314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 14695.618636047042,
            "unit": "ns/iter",
            "extra": "iterations: 55999\ncpu: 14694.935623850475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 46442.28706800615,
            "unit": "ns/iter",
            "extra": "iterations: 17940\ncpu: 46440.93645484955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 466624.0142932611,
            "unit": "ns/iter",
            "extra": "iterations: 1889\ncpu: 466621.91635786195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 381578.2498915246,
            "unit": "ns/iter",
            "extra": "iterations: 2305\ncpu: 381569.0238611693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 378564.83922417025,
            "unit": "ns/iter",
            "extra": "iterations: 2320\ncpu: 378551.5948275839 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 380197.63108049415,
            "unit": "ns/iter",
            "extra": "iterations: 2323\ncpu: 380190.74472664815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 231328.7025399371,
            "unit": "ns/iter",
            "extra": "iterations: 3819\ncpu: 231321.5763288826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 376184.69356927596,
            "unit": "ns/iter",
            "extra": "iterations: 2317\ncpu: 376172.1622788093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 293.6751942834003,
            "unit": "ns/iter",
            "extra": "iterations: 2384918\ncpu: 293.6711031574247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1667.185571627192,
            "unit": "ns/iter",
            "extra": "iterations: 419784\ncpu: 1667.177405522839 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1302.6661247834825,
            "unit": "ns/iter",
            "extra": "iterations: 541322\ncpu: 1302.60288700625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1254.047048008605,
            "unit": "ns/iter",
            "extra": "iterations: 558047\ncpu: 1253.9838042315394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1024.7746620172625,
            "unit": "ns/iter",
            "extra": "iterations: 682801\ncpu: 1024.7215513744184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 7890.432674963813,
            "unit": "ns/iter",
            "extra": "iterations: 88704\ncpu: 7890.2045003606645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 17956.52425406653,
            "unit": "ns/iter",
            "extra": "iterations: 38777\ncpu: 17956.432937050224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4447.4578796998485,
            "unit": "ns/iter",
            "extra": "iterations: 157157\ncpu: 4447.297925004965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4414.4894243438375,
            "unit": "ns/iter",
            "extra": "iterations: 158619\ncpu: 4414.3248917216915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4460.417773250669,
            "unit": "ns/iter",
            "extra": "iterations: 157090\ncpu: 4460.32720096755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 9408.582869109967,
            "unit": "ns/iter",
            "extra": "iterations: 74497\ncpu: 9408.00703384043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 8542.67094027454,
            "unit": "ns/iter",
            "extra": "iterations: 81976\ncpu: 8542.19039718952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3111.463606837083,
            "unit": "ns/iter",
            "extra": "iterations: 225372\ncpu: 3111.294659496327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 15458.49289926525,
            "unit": "ns/iter",
            "extra": "iterations: 45277\ncpu: 15458.15314618901 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 12289.19634703177,
            "unit": "ns/iter",
            "extra": "iterations: 56940\ncpu: 12289.137688795416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 12469.149451332883,
            "unit": "ns/iter",
            "extra": "iterations: 56045\ncpu: 12468.898206797945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 13040.58526704838,
            "unit": "ns/iter",
            "extra": "iterations: 53567\ncpu: 13039.935034629552 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 28065.219192973418,
            "unit": "ns/iter",
            "extra": "iterations: 24832\ncpu: 28063.89739046405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 99124.13777462515,
            "unit": "ns/iter",
            "extra": "iterations: 7055\ncpu: 99122.04110559785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 85170.48833253223,
            "unit": "ns/iter",
            "extra": "iterations: 8228\ncpu: 85166.9299951374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 84155.09311256018,
            "unit": "ns/iter",
            "extra": "iterations: 8334\ncpu: 84154.04367650583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 84375.24854298847,
            "unit": "ns/iter",
            "extra": "iterations: 8236\ncpu: 84373.17872753718 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 55214.56629088383,
            "unit": "ns/iter",
            "extra": "iterations: 12596\ncpu: 55211.44807875532 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 85800.49588078653,
            "unit": "ns/iter",
            "extra": "iterations: 8254\ncpu: 85797.94039253658 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3021.657269368794,
            "unit": "ns/iter",
            "extra": "iterations: 229002\ncpu: 3021.4819084549586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 15252.883124510889,
            "unit": "ns/iter",
            "extra": "iterations: 45972\ncpu: 15252.442791264066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 12285.020148742078,
            "unit": "ns/iter",
            "extra": "iterations: 56877\ncpu: 12284.765370888083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 12052.499497904355,
            "unit": "ns/iter",
            "extra": "iterations: 57758\ncpu: 12052.33560718875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 12457.059283897423,
            "unit": "ns/iter",
            "extra": "iterations: 56221\ncpu: 12456.994717276502 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 27381.468922139313,
            "unit": "ns/iter",
            "extra": "iterations: 25597\ncpu: 27380.556315193182 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 97195.0402768063,
            "unit": "ns/iter",
            "extra": "iterations: 7225\ncpu: 97193.35640138296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 82926.87836716301,
            "unit": "ns/iter",
            "extra": "iterations: 8427\ncpu: 82924.32656935974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 81803.51276944317,
            "unit": "ns/iter",
            "extra": "iterations: 8536\ncpu: 81803.12792877275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 82622.95782491166,
            "unit": "ns/iter",
            "extra": "iterations: 8441\ncpu: 82621.27709987006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 55506.898884408154,
            "unit": "ns/iter",
            "extra": "iterations: 12639\ncpu: 55505.269404224775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 84437.71306234895,
            "unit": "ns/iter",
            "extra": "iterations: 8291\ncpu: 84435.71342419519 ns\nthreads: 1"
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
        "date": 1705774014936,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 684.5851666860757,
            "unit": "ns/iter",
            "extra": "iterations: 1022671\ncpu: 684.5583770342565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 10672.032236824703,
            "unit": "ns/iter",
            "extra": "iterations: 77458\ncpu: 10671.49939321955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 23581.715894225483,
            "unit": "ns/iter",
            "extra": "iterations: 35170\ncpu: 23581.319306226902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 37232.08893564017,
            "unit": "ns/iter",
            "extra": "iterations: 20914\ncpu: 37230.86449268433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 46666.70811386134,
            "unit": "ns/iter",
            "extra": "iterations: 16897\ncpu: 46664.899094513814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 58522.74982794323,
            "unit": "ns/iter",
            "extra": "iterations: 14530\ncpu: 58520.75017205784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 58838.28219999714,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 58838.50000000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 67567.45482280751,
            "unit": "ns/iter",
            "extra": "iterations: 12783\ncpu: 67565.67315966521 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 77499.18890462506,
            "unit": "ns/iter",
            "extra": "iterations: 11302\ncpu: 77496.47849938062 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 563.9826918456658,
            "unit": "ns/iter",
            "extra": "iterations: 1240398\ncpu: 563.9685004329269 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 479.00842105983656,
            "unit": "ns/iter",
            "extra": "iterations: 1462880\ncpu: 479.00381439352486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 465.10505410189467,
            "unit": "ns/iter",
            "extra": "iterations: 1502997\ncpu: 465.0943415056714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 473.56673108360724,
            "unit": "ns/iter",
            "extra": "iterations: 1479423\ncpu: 473.5655725238836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 935.8288090727723,
            "unit": "ns/iter",
            "extra": "iterations: 746494\ncpu: 935.8264098572788 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 4227.863159724355,
            "unit": "ns/iter",
            "extra": "iterations: 189871\ncpu: 4227.828367681208 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 18645.997395653805,
            "unit": "ns/iter",
            "extra": "iterations: 43389\ncpu: 18645.79732190189 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 14782.26708108289,
            "unit": "ns/iter",
            "extra": "iterations: 55339\ncpu: 14782.128336254731 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 13076.939010072238,
            "unit": "ns/iter",
            "extra": "iterations: 60469\ncpu: 13076.87410077891 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 13076.332425896177,
            "unit": "ns/iter",
            "extra": "iterations: 62447\ncpu: 13076.048489118757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 46480.758489724176,
            "unit": "ns/iter",
            "extra": "iterations: 17904\ncpu: 46479.965370866725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 466230.90446196223,
            "unit": "ns/iter",
            "extra": "iterations: 1905\ncpu: 465236.9028871403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 369771.14602906175,
            "unit": "ns/iter",
            "extra": "iterations: 2342\ncpu: 369761.1443210932 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 369723.02460752334,
            "unit": "ns/iter",
            "extra": "iterations: 2357\ncpu: 369716.7161646156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 369383.33702597034,
            "unit": "ns/iter",
            "extra": "iterations: 2347\ncpu: 369374.3928419254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 229692.56786850304,
            "unit": "ns/iter",
            "extra": "iterations: 3772\ncpu: 229692.25874867445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 369781.58319042984,
            "unit": "ns/iter",
            "extra": "iterations: 2332\ncpu: 369777.4871355071 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 1909527.4297521713,
            "unit": "ns/iter",
            "extra": "iterations: 484\ncpu: 1909467.5619834748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 748869.8375999775,
            "unit": "ns/iter",
            "extra": "iterations: 1250\ncpu: 748853.2800000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2599840.321126784,
            "unit": "ns/iter",
            "extra": "iterations: 355\ncpu: 2599679.154929586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 4071.2257646411017,
            "unit": "ns/iter",
            "extra": "iterations: 193653\ncpu: 4071.13600099147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 19156.379880643537,
            "unit": "ns/iter",
            "extra": "iterations: 43232\ncpu: 19155.86139896371 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 15281.901545474586,
            "unit": "ns/iter",
            "extra": "iterations: 53964\ncpu: 15281.61181528428 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 14454.09364393914,
            "unit": "ns/iter",
            "extra": "iterations: 56277\ncpu: 14453.663130586167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 14262.760511788445,
            "unit": "ns/iter",
            "extra": "iterations: 57602\ncpu: 14262.145411617685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 46417.16590401452,
            "unit": "ns/iter",
            "extra": "iterations: 17920\ncpu: 46415.99330357159 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 470796.38030464307,
            "unit": "ns/iter",
            "extra": "iterations: 1838\ncpu: 470794.3416757367 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 384549.5225663604,
            "unit": "ns/iter",
            "extra": "iterations: 2260\ncpu: 384540.8407079628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 381254.8316615681,
            "unit": "ns/iter",
            "extra": "iterations: 2293\ncpu: 381244.0470998694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 377186.90354671894,
            "unit": "ns/iter",
            "extra": "iterations: 2312\ncpu: 377176.5138408298 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 226767.76441431395,
            "unit": "ns/iter",
            "extra": "iterations: 3833\ncpu: 226765.74484737907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 380888.08881148347,
            "unit": "ns/iter",
            "extra": "iterations: 2297\ncpu: 380877.1876360478 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 1930378.6097045979,
            "unit": "ns/iter",
            "extra": "iterations: 474\ncpu: 1930298.734177211 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 740998.0822784756,
            "unit": "ns/iter",
            "extra": "iterations: 1264\ncpu: 740977.2943037979 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 4107.613860272644,
            "unit": "ns/iter",
            "extra": "iterations: 195696\ncpu: 4107.485078897868 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 18594.85173373091,
            "unit": "ns/iter",
            "extra": "iterations: 44211\ncpu: 18594.2638709822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 14980.358682591488,
            "unit": "ns/iter",
            "extra": "iterations: 54926\ncpu: 14979.900229399569 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 14624.860627909049,
            "unit": "ns/iter",
            "extra": "iterations: 57142\ncpu: 14624.631619474249 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 14696.27620330492,
            "unit": "ns/iter",
            "extra": "iterations: 55680\ncpu: 14696.23922413794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 46596.18114285747,
            "unit": "ns/iter",
            "extra": "iterations: 17500\ncpu: 46594.39428571416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 462997.0894004537,
            "unit": "ns/iter",
            "extra": "iterations: 1868\ncpu: 462984.154175592 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 379242.1385489399,
            "unit": "ns/iter",
            "extra": "iterations: 2288\ncpu: 379235.9265734248 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 378050.18121980096,
            "unit": "ns/iter",
            "extra": "iterations: 2279\ncpu: 378043.52786309656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 375772.8687309229,
            "unit": "ns/iter",
            "extra": "iterations: 2293\ncpu: 375759.6598342788 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 227968.0319622641,
            "unit": "ns/iter",
            "extra": "iterations: 3817\ncpu: 227964.29132826903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 377396.4797588084,
            "unit": "ns/iter",
            "extra": "iterations: 2322\ncpu: 377388.4151593464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 297.12827911241527,
            "unit": "ns/iter",
            "extra": "iterations: 2352199\ncpu: 297.1158902796924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1629.7815534770448,
            "unit": "ns/iter",
            "extra": "iterations: 429501\ncpu: 1629.7391624233642 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1258.1103251632003,
            "unit": "ns/iter",
            "extra": "iterations: 556582\ncpu: 1258.0890147363755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1287.9539889337232,
            "unit": "ns/iter",
            "extra": "iterations: 542739\ncpu: 1287.948350864771 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1027.0180354658698,
            "unit": "ns/iter",
            "extra": "iterations: 681047\ncpu: 1026.997696194232 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 7984.003403458007,
            "unit": "ns/iter",
            "extra": "iterations: 87558\ncpu: 7983.715936864752 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 18168.12875883555,
            "unit": "ns/iter",
            "extra": "iterations: 38343\ncpu: 18167.65250502034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4473.567138814023,
            "unit": "ns/iter",
            "extra": "iterations: 156519\ncpu: 4473.504175211967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4425.726923222498,
            "unit": "ns/iter",
            "extra": "iterations: 158666\ncpu: 4425.677208727727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4448.688034052238,
            "unit": "ns/iter",
            "extra": "iterations: 157639\ncpu: 4448.600282924952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 8939.735669882972,
            "unit": "ns/iter",
            "extra": "iterations: 78663\ncpu: 8939.709901732842 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 8536.710639699111,
            "unit": "ns/iter",
            "extra": "iterations: 81929\ncpu: 8536.532851615466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3086.470714137173,
            "unit": "ns/iter",
            "extra": "iterations: 226133\ncpu: 3086.367314810314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 15579.587002423892,
            "unit": "ns/iter",
            "extra": "iterations: 44993\ncpu: 15579.047851888185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 12341.399351163469,
            "unit": "ns/iter",
            "extra": "iterations: 56717\ncpu: 12340.95068497975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 12317.39698206049,
            "unit": "ns/iter",
            "extra": "iterations: 56131\ncpu: 12317.072562398702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 13084.43384242935,
            "unit": "ns/iter",
            "extra": "iterations: 53690\ncpu: 13084.138573291031 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 28165.38476695945,
            "unit": "ns/iter",
            "extra": "iterations: 24867\ncpu: 28164.81682551153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 98318.9178005254,
            "unit": "ns/iter",
            "extra": "iterations: 7129\ncpu: 98316.66432879865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 84587.43667963964,
            "unit": "ns/iter",
            "extra": "iterations: 8228\ncpu: 84585.75595527382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 84208.80098783722,
            "unit": "ns/iter",
            "extra": "iterations: 8301\ncpu: 84206.91482953892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 84455.79797614532,
            "unit": "ns/iter",
            "extra": "iterations: 8301\ncpu: 84454.16214913856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 55240.00926439111,
            "unit": "ns/iter",
            "extra": "iterations: 12629\ncpu: 55239.22717554824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 84831.58502072844,
            "unit": "ns/iter",
            "extra": "iterations: 8198\ncpu: 84829.76335691586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3117.1943451598468,
            "unit": "ns/iter",
            "extra": "iterations: 228300\ncpu: 3115.9141480507838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 15063.971952930218,
            "unit": "ns/iter",
            "extra": "iterations: 46315\ncpu: 15063.655403217035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 12154.85135512194,
            "unit": "ns/iter",
            "extra": "iterations: 57338\ncpu: 12154.410687502143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 12039.109994994193,
            "unit": "ns/iter",
            "extra": "iterations: 57939\ncpu: 12038.509466853242 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 12479.528721927309,
            "unit": "ns/iter",
            "extra": "iterations: 56194\ncpu: 12478.777093639801 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 27384.933088264454,
            "unit": "ns/iter",
            "extra": "iterations: 25571\ncpu: 27384.423761292033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 98221.51498257424,
            "unit": "ns/iter",
            "extra": "iterations: 7175\ncpu: 98219.48432055664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 81929.85143658519,
            "unit": "ns/iter",
            "extra": "iterations: 8562\ncpu: 81928.9301565056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 81156.10177144928,
            "unit": "ns/iter",
            "extra": "iterations: 8637\ncpu: 81153.83813824234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 82243.07178160585,
            "unit": "ns/iter",
            "extra": "iterations: 8498\ncpu: 82240.04471640437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 55916.16872098795,
            "unit": "ns/iter",
            "extra": "iterations: 12494\ncpu: 55914.478949895645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 84046.64977788554,
            "unit": "ns/iter",
            "extra": "iterations: 8329\ncpu: 84046.27206147162 ns\nthreads: 1"
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
        "date": 1705775504639,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 682.5482556145589,
            "unit": "ns/iter",
            "extra": "iterations: 1003448\ncpu: 682.5147890075021 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 10385.83545489254,
            "unit": "ns/iter",
            "extra": "iterations: 81151\ncpu: 10385.536838732734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 23653.959716249585,
            "unit": "ns/iter",
            "extra": "iterations: 35101\ncpu: 23652.78482094528 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 36779.84656802696,
            "unit": "ns/iter",
            "extra": "iterations: 22844\ncpu: 36778.75590964806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 47193.25589794232,
            "unit": "ns/iter",
            "extra": "iterations: 17167\ncpu: 47190.563290033235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 57958.124152715296,
            "unit": "ns/iter",
            "extra": "iterations: 14458\ncpu: 57957.469912850975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 58391.63450000342,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 58390.17999999995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 68999.70161162752,
            "unit": "ns/iter",
            "extra": "iterations: 12658\ncpu: 68999.2889872017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 77067.85662332881,
            "unit": "ns/iter",
            "extra": "iterations: 10999\ncpu: 77066.39694517676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 570.4598239535655,
            "unit": "ns/iter",
            "extra": "iterations: 1237628\ncpu: 570.4602675440433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 468.76293501140094,
            "unit": "ns/iter",
            "extra": "iterations: 1458870\ncpu: 468.75595495143517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 460.56284434444666,
            "unit": "ns/iter",
            "extra": "iterations: 1489243\ncpu: 460.5627154198475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 466.94601388194985,
            "unit": "ns/iter",
            "extra": "iterations: 1473564\ncpu: 466.943342806963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 931.9876925869538,
            "unit": "ns/iter",
            "extra": "iterations: 760436\ncpu: 931.9867812675895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 4081.077084760639,
            "unit": "ns/iter",
            "extra": "iterations: 195538\ncpu: 4080.979656128219 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 17956.451957612535,
            "unit": "ns/iter",
            "extra": "iterations: 45106\ncpu: 17956.189863876214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 14426.88943378734,
            "unit": "ns/iter",
            "extra": "iterations: 57911\ncpu: 14426.703044326647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 13724.668886632164,
            "unit": "ns/iter",
            "extra": "iterations: 60061\ncpu: 13724.085513061722 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 14091.003598035159,
            "unit": "ns/iter",
            "extra": "iterations: 59199\ncpu: 14090.569097450934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 45223.08836725755,
            "unit": "ns/iter",
            "extra": "iterations: 18276\ncpu: 45221.777194134316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 453309.75997901644,
            "unit": "ns/iter",
            "extra": "iterations: 1904\ncpu: 453296.1134453766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 366545.15312629985,
            "unit": "ns/iter",
            "extra": "iterations: 2351\ncpu: 366533.8153977028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 359414.0364870853,
            "unit": "ns/iter",
            "extra": "iterations: 2357\ncpu: 359401.44251166674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 366226.13463131257,
            "unit": "ns/iter",
            "extra": "iterations: 2414\ncpu: 366215.6172328093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 222068.48824307442,
            "unit": "ns/iter",
            "extra": "iterations: 3785\ncpu: 222061.18890356662 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 356853.4846445147,
            "unit": "ns/iter",
            "extra": "iterations: 2377\ncpu: 356846.99200673087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 1803692.105050512,
            "unit": "ns/iter",
            "extra": "iterations: 495\ncpu: 1803596.3636363652 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 704752.8346923828,
            "unit": "ns/iter",
            "extra": "iterations: 1349\ncpu: 704734.7664936996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2504854.6382978573,
            "unit": "ns/iter",
            "extra": "iterations: 376\ncpu: 2504762.2340425462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 4104.587473068265,
            "unit": "ns/iter",
            "extra": "iterations: 196329\ncpu: 4104.443561572675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 18402.43879004339,
            "unit": "ns/iter",
            "extra": "iterations: 47043\ncpu: 18401.617668941148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 14389.370102594681,
            "unit": "ns/iter",
            "extra": "iterations: 58092\ncpu: 14388.838394271217 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 14215.837928943458,
            "unit": "ns/iter",
            "extra": "iterations: 59332\ncpu: 14215.288545809986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 14512.925417525395,
            "unit": "ns/iter",
            "extra": "iterations: 56823\ncpu: 14511.787480421655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 45229.32933333019,
            "unit": "ns/iter",
            "extra": "iterations: 18750\ncpu: 45227.3173333333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 459237.9539544738,
            "unit": "ns/iter",
            "extra": "iterations: 1846\ncpu: 459211.21343445237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 369787.3700919083,
            "unit": "ns/iter",
            "extra": "iterations: 2394\ncpu: 369775.52213867917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 371815.045814257,
            "unit": "ns/iter",
            "extra": "iterations: 2401\ncpu: 371800.9995835073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 370723.70414444315,
            "unit": "ns/iter",
            "extra": "iterations: 2437\ncpu: 370711.2843660243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 228047.5282184566,
            "unit": "ns/iter",
            "extra": "iterations: 3845\ncpu: 228039.29778933618 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 376251.7488151881,
            "unit": "ns/iter",
            "extra": "iterations: 2321\ncpu: 376234.76949590654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 1874503.7552302238,
            "unit": "ns/iter",
            "extra": "iterations: 478\ncpu: 1874441.4225941445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 719605.4852824229,
            "unit": "ns/iter",
            "extra": "iterations: 1257\ncpu: 719581.7820206861 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 3965.119277103087,
            "unit": "ns/iter",
            "extra": "iterations: 207609\ncpu: 3965.1045956581793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 18325.037811764807,
            "unit": "ns/iter",
            "extra": "iterations: 43743\ncpu: 18324.550213748495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 14605.200923223556,
            "unit": "ns/iter",
            "extra": "iterations: 57191\ncpu: 14605.156405728221 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 13994.377752126655,
            "unit": "ns/iter",
            "extra": "iterations: 58046\ncpu: 13993.770457912704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 14226.756833813693,
            "unit": "ns/iter",
            "extra": "iterations: 56118\ncpu: 14226.13599914469 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 45301.7738179419,
            "unit": "ns/iter",
            "extra": "iterations: 18379\ncpu: 45300.87599978271 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 440201.8045918423,
            "unit": "ns/iter",
            "extra": "iterations: 1960\ncpu: 440182.7551020417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 360651.91608101386,
            "unit": "ns/iter",
            "extra": "iterations: 2419\ncpu: 360640.1818933447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 364451.09220452176,
            "unit": "ns/iter",
            "extra": "iterations: 2386\ncpu: 364429.4216261506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 360078.1248397069,
            "unit": "ns/iter",
            "extra": "iterations: 2339\ncpu: 360068.3625480963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 227348.7501281515,
            "unit": "ns/iter",
            "extra": "iterations: 3902\ncpu: 227338.13429010723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 358670.4811873057,
            "unit": "ns/iter",
            "extra": "iterations: 2392\ncpu: 358658.9046822743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 287.6625153875605,
            "unit": "ns/iter",
            "extra": "iterations: 2482528\ncpu: 287.65661454775113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1596.9829921695289,
            "unit": "ns/iter",
            "extra": "iterations: 446853\ncpu: 1596.993865991729 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1248.8611350911972,
            "unit": "ns/iter",
            "extra": "iterations: 580341\ncpu: 1248.859032878948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1250.4431503627388,
            "unit": "ns/iter",
            "extra": "iterations: 567541\ncpu: 1250.4342417552189 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1003.7038015672823,
            "unit": "ns/iter",
            "extra": "iterations: 711496\ncpu: 1003.6754950133194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 7945.727289209311,
            "unit": "ns/iter",
            "extra": "iterations: 88251\ncpu: 7945.445377389517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 18464.35174160058,
            "unit": "ns/iter",
            "extra": "iterations: 37121\ncpu: 18464.497184881886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4421.926368490384,
            "unit": "ns/iter",
            "extra": "iterations: 162186\ncpu: 4421.860703143321 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4447.982016580952,
            "unit": "ns/iter",
            "extra": "iterations: 157534\ncpu: 4448.018840377362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4410.515881574101,
            "unit": "ns/iter",
            "extra": "iterations: 154865\ncpu: 4410.48655280407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 9042.417640084308,
            "unit": "ns/iter",
            "extra": "iterations: 79274\ncpu: 9042.490602215054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 8292.69254565985,
            "unit": "ns/iter",
            "extra": "iterations: 84045\ncpu: 8292.631328455083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 2992.532454693591,
            "unit": "ns/iter",
            "extra": "iterations: 213436\ncpu: 2992.5560823854044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 16442.6080073134,
            "unit": "ns/iter",
            "extra": "iterations: 41562\ncpu: 16442.245320244758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 11953.175550781138,
            "unit": "ns/iter",
            "extra": "iterations: 58644\ncpu: 11953.268876611359 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 13375.56504418014,
            "unit": "ns/iter",
            "extra": "iterations: 52964\ncpu: 13375.489011403912 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 14045.542684037056,
            "unit": "ns/iter",
            "extra": "iterations: 49515\ncpu: 14045.388266182154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 28823.719432361217,
            "unit": "ns/iter",
            "extra": "iterations: 24593\ncpu: 28823.453828324644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 98427.20763250912,
            "unit": "ns/iter",
            "extra": "iterations: 7075\ncpu: 98426.64310954142 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 82453.76677517456,
            "unit": "ns/iter",
            "extra": "iterations: 7988\ncpu: 82453.00450676003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 81462.7867309417,
            "unit": "ns/iter",
            "extra": "iterations: 8712\ncpu: 81462.12121211992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 83159.33827478458,
            "unit": "ns/iter",
            "extra": "iterations: 8567\ncpu: 83159.44904867576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 56292.67582460174,
            "unit": "ns/iter",
            "extra": "iterations: 12885\ncpu: 56292.35545207551 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 80407.77431302436,
            "unit": "ns/iter",
            "extra": "iterations: 8370\ncpu: 80406.9653524489 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3224.2748218738634,
            "unit": "ns/iter",
            "extra": "iterations: 217963\ncpu: 3224.2986194904956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 16080.70289254293,
            "unit": "ns/iter",
            "extra": "iterations: 43422\ncpu: 16080.590484086166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 12028.446751175798,
            "unit": "ns/iter",
            "extra": "iterations: 52696\ncpu: 12028.539168058303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 12533.624439502672,
            "unit": "ns/iter",
            "extra": "iterations: 56646\ncpu: 12533.432192917391 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 13033.388758158195,
            "unit": "ns/iter",
            "extra": "iterations: 52696\ncpu: 13033.380142705091 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 27451.99980291335,
            "unit": "ns/iter",
            "extra": "iterations: 25370\ncpu: 27451.600315333086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 96305.15633022845,
            "unit": "ns/iter",
            "extra": "iterations: 7401\ncpu: 96304.4858802866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 83356.16733158095,
            "unit": "ns/iter",
            "extra": "iterations: 8773\ncpu: 83356.7764732707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 80842.76924863797,
            "unit": "ns/iter",
            "extra": "iterations: 8611\ncpu: 80841.80699105922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 80751.11213234898,
            "unit": "ns/iter",
            "extra": "iterations: 8704\ncpu: 80751.70036764769 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 55997.3334425132,
            "unit": "ns/iter",
            "extra": "iterations: 12212\ncpu: 55996.92106125082 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 84280.6111177148,
            "unit": "ns/iter",
            "extra": "iterations: 8401\ncpu: 84279.90715391123 ns\nthreads: 1"
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
        "date": 1705778508101,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 694.13047907762,
            "unit": "ns/iter",
            "extra": "iterations: 1006100\ncpu: 694.1283172646855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 10585.466615688456,
            "unit": "ns/iter",
            "extra": "iterations: 78465\ncpu: 10585.238004205696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 23460.176977403786,
            "unit": "ns/iter",
            "extra": "iterations: 35400\ncpu: 23458.694915254233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 36547.1104836614,
            "unit": "ns/iter",
            "extra": "iterations: 23198\ncpu: 36546.13759806882 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 46345.601413716235,
            "unit": "ns/iter",
            "extra": "iterations: 17118\ncpu: 46344.140670639055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 58606.8949934713,
            "unit": "ns/iter",
            "extra": "iterations: 14561\ncpu: 58606.606689101056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 59169.69170000356,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 59169.12999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 68219.08242453028,
            "unit": "ns/iter",
            "extra": "iterations: 12654\ncpu: 68215.49707602336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 78364.14393124815,
            "unit": "ns/iter",
            "extra": "iterations: 11172\ncpu: 78361.54672395284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 576.3739843169659,
            "unit": "ns/iter",
            "extra": "iterations: 1211500\ncpu: 576.3414775072224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 481.75556899452283,
            "unit": "ns/iter",
            "extra": "iterations: 1451833\ncpu: 481.7375689903727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 473.4383148871379,
            "unit": "ns/iter",
            "extra": "iterations: 1478809\ncpu: 473.4424797252376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 480.75099189428397,
            "unit": "ns/iter",
            "extra": "iterations: 1453784\ncpu: 480.7600028614974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 959.3151916536913,
            "unit": "ns/iter",
            "extra": "iterations: 730197\ncpu: 959.2766061761408 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 4128.227182131894,
            "unit": "ns/iter",
            "extra": "iterations: 189654\ncpu: 4128.267265652185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 18918.717702897437,
            "unit": "ns/iter",
            "extra": "iterations: 42349\ncpu: 18918.862310798377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 15257.824143924041,
            "unit": "ns/iter",
            "extra": "iterations: 54084\ncpu: 15257.745359071097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 14648.27358759087,
            "unit": "ns/iter",
            "extra": "iterations: 56216\ncpu: 14648.416820833918 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 14979.066256084167,
            "unit": "ns/iter",
            "extra": "iterations: 55044\ncpu: 14979.238427439846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 47153.68179021444,
            "unit": "ns/iter",
            "extra": "iterations: 17875\ncpu: 47153.61118881119 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 458171.7943974327,
            "unit": "ns/iter",
            "extra": "iterations: 1892\ncpu: 458168.8689217758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 369045.04529307585,
            "unit": "ns/iter",
            "extra": "iterations: 2252\ncpu: 369026.6873889877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 370970.97301929153,
            "unit": "ns/iter",
            "extra": "iterations: 2335\ncpu: 370955.7601713071 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 372341.72645549447,
            "unit": "ns/iter",
            "extra": "iterations: 2336\ncpu: 372348.58732876735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 231494.51270393972,
            "unit": "ns/iter",
            "extra": "iterations: 3739\ncpu: 231484.46108585215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 373189.02980564564,
            "unit": "ns/iter",
            "extra": "iterations: 2315\ncpu: 373161.29589632724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 1908056.8592133066,
            "unit": "ns/iter",
            "extra": "iterations: 483\ncpu: 1907951.9668737112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 766668.1036733985,
            "unit": "ns/iter",
            "extra": "iterations: 1225\ncpu: 766638.8571428548 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2584566.182584309,
            "unit": "ns/iter",
            "extra": "iterations: 356\ncpu: 2584463.7640449414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 4113.902674283635,
            "unit": "ns/iter",
            "extra": "iterations: 190967\ncpu: 4113.847418663969 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 19069.883285936856,
            "unit": "ns/iter",
            "extra": "iterations: 43251\ncpu: 19069.866592679828 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 15296.588305312498,
            "unit": "ns/iter",
            "extra": "iterations: 53768\ncpu: 15296.380746912666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 14661.558140364887,
            "unit": "ns/iter",
            "extra": "iterations: 55925\ncpu: 14661.230219043331 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 14749.51492169216,
            "unit": "ns/iter",
            "extra": "iterations: 54719\ncpu: 14749.399660081557 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 46482.19765297695,
            "unit": "ns/iter",
            "extra": "iterations: 17895\ncpu: 46483.07348421354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 475516.57181866234,
            "unit": "ns/iter",
            "extra": "iterations: 1831\ncpu: 475502.67613325705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 385794.90711107507,
            "unit": "ns/iter",
            "extra": "iterations: 2250\ncpu: 385798.2222222221 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 382176.77124179486,
            "unit": "ns/iter",
            "extra": "iterations: 2295\ncpu: 382180.0435729819 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 379079.13411970367,
            "unit": "ns/iter",
            "extra": "iterations: 2289\ncpu: 379071.99650502397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 229267.75058640237,
            "unit": "ns/iter",
            "extra": "iterations: 3837\ncpu: 229267.89158196587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 379692.01067007735,
            "unit": "ns/iter",
            "extra": "iterations: 2343\ncpu: 379685.01920614444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 1924788.7852632056,
            "unit": "ns/iter",
            "extra": "iterations: 475\ncpu: 1924781.4736841992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 764107.8524320342,
            "unit": "ns/iter",
            "extra": "iterations: 1213\ncpu: 764089.6949711466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 4301.671159029577,
            "unit": "ns/iter",
            "extra": "iterations: 189952\ncpu: 4301.675686489183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 18770.337975374958,
            "unit": "ns/iter",
            "extra": "iterations: 44018\ncpu: 18770.416647734943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 14914.62191775982,
            "unit": "ns/iter",
            "extra": "iterations: 55033\ncpu: 14914.756600585108 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 14396.228990715863,
            "unit": "ns/iter",
            "extra": "iterations: 57308\ncpu: 14396.073846583395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 14411.608095354115,
            "unit": "ns/iter",
            "extra": "iterations: 57218\ncpu: 14411.611730574226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 46883.92676088204,
            "unit": "ns/iter",
            "extra": "iterations: 17832\ncpu: 46884.7969941676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 462721.3890692595,
            "unit": "ns/iter",
            "extra": "iterations: 1848\ncpu: 462710.0649350635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 377135.7669860606,
            "unit": "ns/iter",
            "extra": "iterations: 2296\ncpu: 377135.80139372736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 374630.61082251807,
            "unit": "ns/iter",
            "extra": "iterations: 2310\ncpu: 374617.44588744506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 373759.6678200502,
            "unit": "ns/iter",
            "extra": "iterations: 2312\ncpu: 373763.0622837376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 232357.29241781577,
            "unit": "ns/iter",
            "extra": "iterations: 3772\ncpu: 232354.0562036046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 374131.2114972107,
            "unit": "ns/iter",
            "extra": "iterations: 2331\ncpu: 374124.92492492526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 293.6947871867665,
            "unit": "ns/iter",
            "extra": "iterations: 2406570\ncpu: 293.69741997947216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1648.494925403554,
            "unit": "ns/iter",
            "extra": "iterations: 431857\ncpu: 1648.4709058785677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1240.4781356597093,
            "unit": "ns/iter",
            "extra": "iterations: 555242\ncpu: 1240.4349815035607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1231.8174348836944,
            "unit": "ns/iter",
            "extra": "iterations: 554509\ncpu: 1231.8254527879603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1037.9370024194336,
            "unit": "ns/iter",
            "extra": "iterations: 674137\ncpu: 1037.9400626282163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 7997.3512421287205,
            "unit": "ns/iter",
            "extra": "iterations: 87350\ncpu: 7997.092157985202 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 19152.251928301306,
            "unit": "ns/iter",
            "extra": "iterations: 36431\ncpu: 19151.22285965263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4639.243620088333,
            "unit": "ns/iter",
            "extra": "iterations: 155057\ncpu: 4639.196553525441 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4433.433211514935,
            "unit": "ns/iter",
            "extra": "iterations: 158433\ncpu: 4433.41475576428 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4488.204699387048,
            "unit": "ns/iter",
            "extra": "iterations: 155765\ncpu: 4488.119282252104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 9642.348048871245,
            "unit": "ns/iter",
            "extra": "iterations: 72599\ncpu: 9642.350445598377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 8611.349217753921,
            "unit": "ns/iter",
            "extra": "iterations: 80729\ncpu: 8611.209107012237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3128.495188168158,
            "unit": "ns/iter",
            "extra": "iterations: 224135\ncpu: 3128.4997880741316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 15623.796622779879,
            "unit": "ns/iter",
            "extra": "iterations: 44356\ncpu: 15623.284335828192 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 12405.723827612535,
            "unit": "ns/iter",
            "extra": "iterations: 56338\ncpu: 12405.193652596652 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 12558.46565200184,
            "unit": "ns/iter",
            "extra": "iterations: 55782\ncpu: 12557.661969811019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 13093.720002989343,
            "unit": "ns/iter",
            "extra": "iterations: 53522\ncpu: 13093.410186465286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 28506.675699868643,
            "unit": "ns/iter",
            "extra": "iterations: 24576\ncpu: 28505.537923177497 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 103381.50193050652,
            "unit": "ns/iter",
            "extra": "iterations: 6734\ncpu: 103382.17998217842 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 88397.30017760939,
            "unit": "ns/iter",
            "extra": "iterations: 7882\ncpu: 88395.38188277111 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 87761.68637274293,
            "unit": "ns/iter",
            "extra": "iterations: 7984\ncpu: 87757.32715430847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 88148.29393938597,
            "unit": "ns/iter",
            "extra": "iterations: 7920\ncpu: 88144.53282828306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 57077.538895241785,
            "unit": "ns/iter",
            "extra": "iterations: 12238\ncpu: 57075.76401372785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 88320.95228476547,
            "unit": "ns/iter",
            "extra": "iterations: 7922\ncpu: 88322.6079272914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3152.830249385583,
            "unit": "ns/iter",
            "extra": "iterations: 222226\ncpu: 3152.8538514845254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 15578.24802492422,
            "unit": "ns/iter",
            "extra": "iterations: 44935\ncpu: 15578.208523422656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 12561.542221981246,
            "unit": "ns/iter",
            "extra": "iterations: 55599\ncpu: 12561.452544110483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 12507.289446932378,
            "unit": "ns/iter",
            "extra": "iterations: 56069\ncpu: 12506.854054825175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 12856.821367284068,
            "unit": "ns/iter",
            "extra": "iterations: 54195\ncpu: 12856.274564074216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 27889.190373737332,
            "unit": "ns/iter",
            "extra": "iterations: 25098\ncpu: 27887.094589210257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 101324.55377043536,
            "unit": "ns/iter",
            "extra": "iterations: 6909\ncpu: 101319.81473440336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 84193.09785784243,
            "unit": "ns/iter",
            "extra": "iterations: 8216\ncpu: 84192.34420642699 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 81842.12264040287,
            "unit": "ns/iter",
            "extra": "iterations: 8529\ncpu: 81843.68624692122 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 84256.00072219552,
            "unit": "ns/iter",
            "extra": "iterations: 8308\ncpu: 84251.25180549007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 55922.25698590437,
            "unit": "ns/iter",
            "extra": "iterations: 12561\ncpu: 55920.26112570615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 85039.38266359444,
            "unit": "ns/iter",
            "extra": "iterations: 8237\ncpu: 85041.01007648281 ns\nthreads: 1"
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
        "date": 1705953674082,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 694.4860179359077,
            "unit": "ns/iter",
            "extra": "iterations: 1009150\ncpu: 694.47713422187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 10637.71557912794,
            "unit": "ns/iter",
            "extra": "iterations: 77867\ncpu: 10637.56533576483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 23602.930986634612,
            "unit": "ns/iter",
            "extra": "iterations: 35312\ncpu: 23602.483574988677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 38844.85013647637,
            "unit": "ns/iter",
            "extra": "iterations: 23081\ncpu: 38843.13937870977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 48754.77696050211,
            "unit": "ns/iter",
            "extra": "iterations: 17266\ncpu: 48752.61786169352 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 58543.29477894979,
            "unit": "ns/iter",
            "extra": "iterations: 14499\ncpu: 58541.761500793116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 58846.47560000076,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 58842.39999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 67412.61288300011,
            "unit": "ns/iter",
            "extra": "iterations: 12761\ncpu: 67410.31267142076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 77674.18430673606,
            "unit": "ns/iter",
            "extra": "iterations: 11215\ncpu: 77672.00178332577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 571.050282267773,
            "unit": "ns/iter",
            "extra": "iterations: 1228266\ncpu: 571.0418590109953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 483.499778881767,
            "unit": "ns/iter",
            "extra": "iterations: 1451712\ncpu: 483.4911470043641 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 467.0782964168756,
            "unit": "ns/iter",
            "extra": "iterations: 1501001\ncpu: 467.07490534649867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 473.9858481426583,
            "unit": "ns/iter",
            "extra": "iterations: 1475990\ncpu: 473.98884816292735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 949.6480597222239,
            "unit": "ns/iter",
            "extra": "iterations: 738219\ncpu: 949.6183381896142 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 4166.7068372756985,
            "unit": "ns/iter",
            "extra": "iterations: 193425\ncpu: 4166.640299857824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 18497.937609643748,
            "unit": "ns/iter",
            "extra": "iterations: 44462\ncpu: 18497.134631820467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 14834.460026024206,
            "unit": "ns/iter",
            "extra": "iterations: 55336\ncpu: 14833.867644932763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 14173.976142624806,
            "unit": "ns/iter",
            "extra": "iterations: 57718\ncpu: 14173.337606985682 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 14558.465982529862,
            "unit": "ns/iter",
            "extra": "iterations: 56324\ncpu: 14557.779987216849 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 44962.68198431136,
            "unit": "ns/iter",
            "extra": "iterations: 18606\ncpu: 44962.13587014936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 463206.6396443292,
            "unit": "ns/iter",
            "extra": "iterations: 1912\ncpu: 463186.9246861927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 374269.0297798795,
            "unit": "ns/iter",
            "extra": "iterations: 2317\ncpu: 374246.611998275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 374325.9403945289,
            "unit": "ns/iter",
            "extra": "iterations: 2332\ncpu: 374306.8610634655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 376922.1490924757,
            "unit": "ns/iter",
            "extra": "iterations: 2314\ncpu: 376904.7968885043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 233154.0015961806,
            "unit": "ns/iter",
            "extra": "iterations: 3759\ncpu: 233142.9369513163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 374978.9395770014,
            "unit": "ns/iter",
            "extra": "iterations: 2317\ncpu: 374947.345705653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 1920058.445134638,
            "unit": "ns/iter",
            "extra": "iterations: 483\ncpu: 1919840.5797101506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 758185.0185184944,
            "unit": "ns/iter",
            "extra": "iterations: 1242\ncpu: 758146.6988727835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2594797.605633829,
            "unit": "ns/iter",
            "extra": "iterations: 355\ncpu: 2594638.873239439 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 4088.487372214208,
            "unit": "ns/iter",
            "extra": "iterations: 197303\ncpu: 4088.2622159825187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 18529.268315059453,
            "unit": "ns/iter",
            "extra": "iterations: 44690\ncpu: 18528.17856343707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 15014.344577053404,
            "unit": "ns/iter",
            "extra": "iterations: 55468\ncpu: 15013.726833489613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 14238.600266269998,
            "unit": "ns/iter",
            "extra": "iterations: 57836\ncpu: 14237.915830970249 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 14593.959580731751,
            "unit": "ns/iter",
            "extra": "iterations: 56384\ncpu: 14592.941259931888 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 46473.07059929268,
            "unit": "ns/iter",
            "extra": "iterations: 18088\ncpu: 46469.27244582018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 475434.21339144174,
            "unit": "ns/iter",
            "extra": "iterations: 1837\ncpu: 475425.0952640174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 384448.83915155014,
            "unit": "ns/iter",
            "extra": "iterations: 2263\ncpu: 384410.8263367207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 379956.52523041284,
            "unit": "ns/iter",
            "extra": "iterations: 2279\ncpu: 379935.23475208145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 377103.9094437345,
            "unit": "ns/iter",
            "extra": "iterations: 2319\ncpu: 377091.0737386812 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 225787.92929031016,
            "unit": "ns/iter",
            "extra": "iterations: 3875\ncpu: 225783.5096774208 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 379511.90207972284,
            "unit": "ns/iter",
            "extra": "iterations: 2308\ncpu: 379509.6187175034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 1919939.9411764666,
            "unit": "ns/iter",
            "extra": "iterations: 476\ncpu: 1919923.9495798184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 770078.2677101163,
            "unit": "ns/iter",
            "extra": "iterations: 1214\ncpu: 770046.8698517302 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 4147.800660753044,
            "unit": "ns/iter",
            "extra": "iterations: 194021\ncpu: 4147.768025110704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 18788.649280088932,
            "unit": "ns/iter",
            "extra": "iterations: 44172\ncpu: 18788.241419903956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 15012.826266154418,
            "unit": "ns/iter",
            "extra": "iterations: 55562\ncpu: 15012.715524999094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 14421.480902296627,
            "unit": "ns/iter",
            "extra": "iterations: 57808\ncpu: 14420.88119291437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 14739.748364679679,
            "unit": "ns/iter",
            "extra": "iterations: 56411\ncpu: 14739.658931768636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 46824.139945428426,
            "unit": "ns/iter",
            "extra": "iterations: 17957\ncpu: 46823.918249150884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 457526.6128191476,
            "unit": "ns/iter",
            "extra": "iterations: 1919\ncpu: 457518.5513288171 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 385708.111111105,
            "unit": "ns/iter",
            "extra": "iterations: 2340\ncpu: 385702.3504273505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 369515.5091450813,
            "unit": "ns/iter",
            "extra": "iterations: 2351\ncpu: 369507.5287111856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 373162.282858349,
            "unit": "ns/iter",
            "extra": "iterations: 2351\ncpu: 373164.6108039138 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 229161.6736075037,
            "unit": "ns/iter",
            "extra": "iterations: 3842\ncpu: 229155.10150962873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 369364.0055154637,
            "unit": "ns/iter",
            "extra": "iterations: 2357\ncpu: 369348.1120067882 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 295.62527178821824,
            "unit": "ns/iter",
            "extra": "iterations: 2375471\ncpu: 295.6228891028329 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1628.9560033420905,
            "unit": "ns/iter",
            "extra": "iterations: 429669\ncpu: 1628.9462353579083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1255.4015640785515,
            "unit": "ns/iter",
            "extra": "iterations: 557261\ncpu: 1255.3936126877682 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1291.4381914261057,
            "unit": "ns/iter",
            "extra": "iterations: 556549\ncpu: 1291.4313025447952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1024.5729367824688,
            "unit": "ns/iter",
            "extra": "iterations: 683023\ncpu: 1024.5518818546389 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 8007.629799518129,
            "unit": "ns/iter",
            "extra": "iterations: 87639\ncpu: 8007.606202717937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 18070.818500748093,
            "unit": "ns/iter",
            "extra": "iterations: 38766\ncpu: 18070.471547232195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4490.832991987167,
            "unit": "ns/iter",
            "extra": "iterations: 156244\ncpu: 4490.804126878496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4458.108774543567,
            "unit": "ns/iter",
            "extra": "iterations: 157068\ncpu: 4458.072299895589 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4503.206156007389,
            "unit": "ns/iter",
            "extra": "iterations: 155198\ncpu: 4503.179164680031 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 9493.542102687728,
            "unit": "ns/iter",
            "extra": "iterations: 73582\ncpu: 9493.338044630404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 8605.924295925399,
            "unit": "ns/iter",
            "extra": "iterations: 81277\ncpu: 8605.868818976987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3159.046234704127,
            "unit": "ns/iter",
            "extra": "iterations: 222041\ncpu: 3158.9832508410636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 15612.976828207371,
            "unit": "ns/iter",
            "extra": "iterations: 44839\ncpu: 15612.863801601226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 12405.872291764457,
            "unit": "ns/iter",
            "extra": "iterations: 56402\ncpu: 12405.48207510386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 12579.506373784901,
            "unit": "ns/iter",
            "extra": "iterations: 55540\ncpu: 12579.429240187252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 13099.754528265557,
            "unit": "ns/iter",
            "extra": "iterations: 52890\ncpu: 13099.485725089951 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 28009.675188332265,
            "unit": "ns/iter",
            "extra": "iterations: 24956\ncpu: 28009.500721269753 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 99512.65540731834,
            "unit": "ns/iter",
            "extra": "iterations: 7046\ncpu: 99513.32671018931 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 85508.27731706183,
            "unit": "ns/iter",
            "extra": "iterations: 8200\ncpu: 85506.41463414638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 84950.21762852701,
            "unit": "ns/iter",
            "extra": "iterations: 8248\ncpu: 84949.70902036723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 86319.59139916129,
            "unit": "ns/iter",
            "extra": "iterations: 8162\ncpu: 86317.25067385499 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 54916.52720687051,
            "unit": "ns/iter",
            "extra": "iterations: 12699\ncpu: 54912.74903535747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 84506.941197641,
            "unit": "ns/iter",
            "extra": "iterations: 8333\ncpu: 84506.09624384927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3024.943609753889,
            "unit": "ns/iter",
            "extra": "iterations: 231423\ncpu: 3024.8704752769004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 15155.23773421475,
            "unit": "ns/iter",
            "extra": "iterations: 46165\ncpu: 15155.089353406353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 12211.995558962208,
            "unit": "ns/iter",
            "extra": "iterations: 57419\ncpu: 12211.625071840203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 12104.711528501666,
            "unit": "ns/iter",
            "extra": "iterations: 57926\ncpu: 12104.59551842005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 12464.487531860355,
            "unit": "ns/iter",
            "extra": "iterations: 56103\ncpu: 12464.374454129102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 27193.25898860977,
            "unit": "ns/iter",
            "extra": "iterations: 25727\ncpu: 27193.139503245642 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 98292.8383384869,
            "unit": "ns/iter",
            "extra": "iterations: 7126\ncpu: 98292.15548694764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 83797.27187239696,
            "unit": "ns/iter",
            "extra": "iterations: 8401\ncpu: 83795.89334602989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 82588.19549846751,
            "unit": "ns/iter",
            "extra": "iterations: 8486\ncpu: 82587.70916804129 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 84172.51116178872,
            "unit": "ns/iter",
            "extra": "iterations: 8332\ncpu: 84169.63514162162 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 55816.37118146637,
            "unit": "ns/iter",
            "extra": "iterations: 12603\ncpu: 55815.69467587117 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 84005.30816473707,
            "unit": "ns/iter",
            "extra": "iterations: 8304\ncpu: 84004.63631984607 ns\nthreads: 1"
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
        "date": 1705955740746,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 697.3179929418676,
            "unit": "ns/iter",
            "extra": "iterations: 999692\ncpu: 697.307870824214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 10933.70116487426,
            "unit": "ns/iter",
            "extra": "iterations: 75888\ncpu: 10933.34387518448 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 24281.82766439977,
            "unit": "ns/iter",
            "extra": "iterations: 34398\ncpu: 24281.118088260948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 36315.86653806476,
            "unit": "ns/iter",
            "extra": "iterations: 22291\ncpu: 36314.52155578484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 47058.24135689846,
            "unit": "ns/iter",
            "extra": "iterations: 16921\ncpu: 47056.273269901285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 58622.87962770002,
            "unit": "ns/iter",
            "extra": "iterations: 14397\ncpu: 58619.69854830864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 58754.510900007524,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 58753.10000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 69306.38857916497,
            "unit": "ns/iter",
            "extra": "iterations: 12556\ncpu: 69303.12201338013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 77841.880551845,
            "unit": "ns/iter",
            "extra": "iterations: 11235\ncpu: 77838.29105473957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 571.3806385830422,
            "unit": "ns/iter",
            "extra": "iterations: 1226904\ncpu: 571.3539119605114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 497.7403964789685,
            "unit": "ns/iter",
            "extra": "iterations: 1398914\ncpu: 497.7134405688986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 475.456243782823,
            "unit": "ns/iter",
            "extra": "iterations: 1468717\ncpu: 475.4335927207217 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 483.9192135239694,
            "unit": "ns/iter",
            "extra": "iterations: 1446554\ncpu: 483.90111948810744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 954.8424328559963,
            "unit": "ns/iter",
            "extra": "iterations: 732456\ncpu: 954.7829494194865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 4230.028762637349,
            "unit": "ns/iter",
            "extra": "iterations: 189621\ncpu: 4229.795750470676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 19036.19564915639,
            "unit": "ns/iter",
            "extra": "iterations: 43210\ncpu: 19035.08215690815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 15250.397638012202,
            "unit": "ns/iter",
            "extra": "iterations: 54107\ncpu: 15249.67749089765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 14584.076932603195,
            "unit": "ns/iter",
            "extra": "iterations: 56517\ncpu: 14583.282906028306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 14957.507318400334,
            "unit": "ns/iter",
            "extra": "iterations: 55135\ncpu: 14956.671805568138 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 46626.31763984463,
            "unit": "ns/iter",
            "extra": "iterations: 17948\ncpu: 46624.782705593956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 458241.30000002496,
            "unit": "ns/iter",
            "extra": "iterations: 1860\ncpu: 458218.17204301106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 371320.1575576421,
            "unit": "ns/iter",
            "extra": "iterations: 2342\ncpu: 371294.7053800172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 369925.83873719495,
            "unit": "ns/iter",
            "extra": "iterations: 2344\ncpu: 369896.4590443685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 371125.92957742343,
            "unit": "ns/iter",
            "extra": "iterations: 2343\ncpu: 371095.3478446436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 233187.99709148364,
            "unit": "ns/iter",
            "extra": "iterations: 3782\ncpu: 233174.9338974087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 370297.3172413875,
            "unit": "ns/iter",
            "extra": "iterations: 2320\ncpu: 370281.42241379386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 1909089.0867768251,
            "unit": "ns/iter",
            "extra": "iterations: 484\ncpu: 1908970.6611570278 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 756949.7015285783,
            "unit": "ns/iter",
            "extra": "iterations: 1243\ncpu: 756933.226065968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2611363.9803373246,
            "unit": "ns/iter",
            "extra": "iterations: 356\ncpu: 2611228.9325842694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 4096.777976433352,
            "unit": "ns/iter",
            "extra": "iterations: 191286\ncpu: 4096.654747341686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 19321.992857498462,
            "unit": "ns/iter",
            "extra": "iterations: 39902\ncpu: 19320.71324745616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 14919.69631474943,
            "unit": "ns/iter",
            "extra": "iterations: 54596\ncpu: 14918.666202652146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 14304.745951363575,
            "unit": "ns/iter",
            "extra": "iterations: 56871\ncpu: 14304.0125898965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 14628.492314393452,
            "unit": "ns/iter",
            "extra": "iterations: 55103\ncpu: 14627.619185888232 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 47192.97284547215,
            "unit": "ns/iter",
            "extra": "iterations: 17382\ncpu: 47190.24853296519 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 476787.7174741724,
            "unit": "ns/iter",
            "extra": "iterations: 1837\ncpu: 476749.3195427321 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 381480.2527328527,
            "unit": "ns/iter",
            "extra": "iterations: 2287\ncpu: 381471.79711412214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 381236.98299914785,
            "unit": "ns/iter",
            "extra": "iterations: 2294\ncpu: 381215.6495204881 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 378170.9775571587,
            "unit": "ns/iter",
            "extra": "iterations: 2317\ncpu: 378151.18687958457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 229060.57112751852,
            "unit": "ns/iter",
            "extra": "iterations: 3796\ncpu: 229049.07797681855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 379308.72114139027,
            "unit": "ns/iter",
            "extra": "iterations: 2313\ncpu: 379286.9001297026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 1909907.277894921,
            "unit": "ns/iter",
            "extra": "iterations: 475\ncpu: 1909844.4210526336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 759147.1688312171,
            "unit": "ns/iter",
            "extra": "iterations: 1232\ncpu: 759125.1623376604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 4089.5220983889635,
            "unit": "ns/iter",
            "extra": "iterations: 195693\ncpu: 4089.5177650707833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 18623.66014516953,
            "unit": "ns/iter",
            "extra": "iterations: 44775\ncpu: 18623.651591289818 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 14940.998163650136,
            "unit": "ns/iter",
            "extra": "iterations: 55545\ncpu: 14940.990188135727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 14311.399492149903,
            "unit": "ns/iter",
            "extra": "iterations: 57891\ncpu: 14311.395553713062 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 14641.209206797434,
            "unit": "ns/iter",
            "extra": "iterations: 56480\ncpu: 14641.095963172822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 46403.57035595059,
            "unit": "ns/iter",
            "extra": "iterations: 17980\ncpu: 46402.81423804227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 463389.58878989116,
            "unit": "ns/iter",
            "extra": "iterations: 1909\ncpu: 463385.07071765437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 391294.4863013654,
            "unit": "ns/iter",
            "extra": "iterations: 2336\ncpu: 391288.4417808223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 371007.15257116995,
            "unit": "ns/iter",
            "extra": "iterations: 2353\ncpu: 371001.44496387715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 372424.9069668661,
            "unit": "ns/iter",
            "extra": "iterations: 2354\ncpu: 372424.6813933721 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 230680.0941114637,
            "unit": "ns/iter",
            "extra": "iterations: 3804\ncpu: 230677.86540483584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 371273.5111301063,
            "unit": "ns/iter",
            "extra": "iterations: 2336\ncpu: 371269.90582191723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 295.515902531606,
            "unit": "ns/iter",
            "extra": "iterations: 2374842\ncpu: 295.5134699487382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1628.0890607563424,
            "unit": "ns/iter",
            "extra": "iterations: 427461\ncpu: 1628.0678237312816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1218.0929611413799,
            "unit": "ns/iter",
            "extra": "iterations: 575832\ncpu: 1218.0917350893958 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1215.3880596756037,
            "unit": "ns/iter",
            "extra": "iterations: 576852\ncpu: 1215.3753475761532 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 999.6227095886992,
            "unit": "ns/iter",
            "extra": "iterations: 701457\ncpu: 999.614944323035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 8008.6453098627535,
            "unit": "ns/iter",
            "extra": "iterations: 87716\ncpu: 8008.589082949558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 19072.765419342868,
            "unit": "ns/iter",
            "extra": "iterations: 36772\ncpu: 19072.547046665975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4461.543441009344,
            "unit": "ns/iter",
            "extra": "iterations: 156983\ncpu: 4461.507296968402 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4418.973919867229,
            "unit": "ns/iter",
            "extra": "iterations: 158013\ncpu: 4418.937049483198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4473.350909960485,
            "unit": "ns/iter",
            "extra": "iterations: 156875\ncpu: 4473.3462948207525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 9466.534947620445,
            "unit": "ns/iter",
            "extra": "iterations: 73882\ncpu: 9466.522292303829 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 8576.70734970968,
            "unit": "ns/iter",
            "extra": "iterations: 81459\ncpu: 8576.63732675331 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3136.4568337083115,
            "unit": "ns/iter",
            "extra": "iterations: 213859\ncpu: 3136.430545359364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 15594.565409113146,
            "unit": "ns/iter",
            "extra": "iterations: 44902\ncpu: 15594.456817068442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 12400.711619175501,
            "unit": "ns/iter",
            "extra": "iterations: 56467\ncpu: 12400.566702676006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 12619.652247484997,
            "unit": "ns/iter",
            "extra": "iterations: 55551\ncpu: 12619.508199672542 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 13230.42034378537,
            "unit": "ns/iter",
            "extra": "iterations: 52940\ncpu: 13230.113335851893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 28209.683310532753,
            "unit": "ns/iter",
            "extra": "iterations: 24854\ncpu: 28209.22587913427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 99695.68361662231,
            "unit": "ns/iter",
            "extra": "iterations: 7001\ncpu: 99695.65776317625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 85665.92586693083,
            "unit": "ns/iter",
            "extra": "iterations: 8161\ncpu: 85664.91851488696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 84958.5854991508,
            "unit": "ns/iter",
            "extra": "iterations: 8234\ncpu: 84957.86980811266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 85160.6161603893,
            "unit": "ns/iter",
            "extra": "iterations: 8230\ncpu: 85159.62332928303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 56166.195979490556,
            "unit": "ns/iter",
            "extra": "iterations: 12486\ncpu: 56165.729617171964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 85845.80755549803,
            "unit": "ns/iter",
            "extra": "iterations: 8153\ncpu: 85845.06316693188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3045.7669792035413,
            "unit": "ns/iter",
            "extra": "iterations: 229413\ncpu: 3045.7681125306804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 15329.190495119592,
            "unit": "ns/iter",
            "extra": "iterations: 45282\ncpu: 15329.060112185858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 12412.102876283061,
            "unit": "ns/iter",
            "extra": "iterations: 56427\ncpu: 12411.886153791691 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 12227.71325355966,
            "unit": "ns/iter",
            "extra": "iterations: 57162\ncpu: 12227.579510863769 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 12567.359133802016,
            "unit": "ns/iter",
            "extra": "iterations: 54999\ncpu: 12567.07940144355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 27879.59480189454,
            "unit": "ns/iter",
            "extra": "iterations: 25163\ncpu: 27878.88169137203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 99447.15449914757,
            "unit": "ns/iter",
            "extra": "iterations: 7068\ncpu: 99447.09960384828 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 84196.75928373018,
            "unit": "ns/iter",
            "extra": "iterations: 8321\ncpu: 84194.62804951248 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 83342.73346958017,
            "unit": "ns/iter",
            "extra": "iterations: 8318\ncpu: 83341.3921615782 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 84255.49837603846,
            "unit": "ns/iter",
            "extra": "iterations: 8313\ncpu: 84254.39672801588 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 56829.79417195097,
            "unit": "ns/iter",
            "extra": "iterations: 12457\ncpu: 56829.25262904362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 84167.02185991254,
            "unit": "ns/iter",
            "extra": "iterations: 8280\ncpu: 84165.821256039 ns\nthreads: 1"
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
        "date": 1705957266460,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 703.0558223704941,
            "unit": "ns/iter",
            "extra": "iterations: 996321\ncpu: 703.0118807091288 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 10865.225028190755,
            "unit": "ns/iter",
            "extra": "iterations: 76266\ncpu: 10864.378622190752 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 23902.68924601157,
            "unit": "ns/iter",
            "extra": "iterations: 34722\ncpu: 23900.82944530845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 37517.33373890605,
            "unit": "ns/iter",
            "extra": "iterations: 22191\ncpu: 37515.65499526834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 47932.97026641593,
            "unit": "ns/iter",
            "extra": "iterations: 16816\ncpu: 47932.362036156024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 59641.32629939001,
            "unit": "ns/iter",
            "extra": "iterations: 14122\ncpu: 59637.89123353633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 59446.01090000106,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 59445.070000000036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 68722.37505931116,
            "unit": "ns/iter",
            "extra": "iterations: 12646\ncpu: 68718.86762612684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 78460.78056482969,
            "unit": "ns/iter",
            "extra": "iterations: 11083\ncpu: 78457.27691058387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 580.526751198402,
            "unit": "ns/iter",
            "extra": "iterations: 1201049\ncpu: 580.4934686261768 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 507.2536229999969,
            "unit": "ns/iter",
            "extra": "iterations: 1000000\ncpu: 507.1977000000008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 476.89315428164804,
            "unit": "ns/iter",
            "extra": "iterations: 1469371\ncpu: 476.8810599909753 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 481.6910908242633,
            "unit": "ns/iter",
            "extra": "iterations: 1451077\ncpu: 481.66913265112817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 947.8201354587417,
            "unit": "ns/iter",
            "extra": "iterations: 738528\ncpu: 947.7990001733187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 4217.367242250505,
            "unit": "ns/iter",
            "extra": "iterations: 187925\ncpu: 4217.186643607818 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 18572.726545913578,
            "unit": "ns/iter",
            "extra": "iterations: 44278\ncpu: 18572.329373503777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 14946.389507156124,
            "unit": "ns/iter",
            "extra": "iterations: 53465\ncpu: 14945.766389226588 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 14339.838174925368,
            "unit": "ns/iter",
            "extra": "iterations: 57247\ncpu: 14339.582860237233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 14660.278148060575,
            "unit": "ns/iter",
            "extra": "iterations: 55963\ncpu: 14659.346353840952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 46359.73348066079,
            "unit": "ns/iter",
            "extra": "iterations: 18100\ncpu: 46356.70718232047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 463926.0207446893,
            "unit": "ns/iter",
            "extra": "iterations: 1880\ncpu: 463866.06382978783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 379481.74219752377,
            "unit": "ns/iter",
            "extra": "iterations: 2339\ncpu: 379457.9307396326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 368431.25254669116,
            "unit": "ns/iter",
            "extra": "iterations: 2356\ncpu: 368414.85568760545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 371063.2209897819,
            "unit": "ns/iter",
            "extra": "iterations: 2344\ncpu: 371040.4436860073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 229645.14997363498,
            "unit": "ns/iter",
            "extra": "iterations: 3794\ncpu: 229635.4770690566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 373807.5592639949,
            "unit": "ns/iter",
            "extra": "iterations: 2337\ncpu: 373784.1677364134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 1905464.5490605673,
            "unit": "ns/iter",
            "extra": "iterations: 479\ncpu: 1905326.3048016706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 761912.2717742247,
            "unit": "ns/iter",
            "extra": "iterations: 1240\ncpu: 761881.6935483866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2596250.07605612,
            "unit": "ns/iter",
            "extra": "iterations: 355\ncpu: 2596100.5633802824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 4104.623149192824,
            "unit": "ns/iter",
            "extra": "iterations: 193294\ncpu: 4104.370544352139 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 18623.533844045913,
            "unit": "ns/iter",
            "extra": "iterations: 44513\ncpu: 18622.231707591003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 14967.223920992212,
            "unit": "ns/iter",
            "extra": "iterations: 55792\ncpu: 14966.65471752227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 14307.672915084455,
            "unit": "ns/iter",
            "extra": "iterations: 57988\ncpu: 14306.887631923799 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 14352.686097797863,
            "unit": "ns/iter",
            "extra": "iterations: 57588\ncpu: 14351.979579078896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 46443.79334995601,
            "unit": "ns/iter",
            "extra": "iterations: 18045\ncpu: 46441.08617345505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 472441.7439825197,
            "unit": "ns/iter",
            "extra": "iterations: 1828\ncpu: 472414.5514223181 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 386502.47092761484,
            "unit": "ns/iter",
            "extra": "iterations: 2253\ncpu: 386479.7603195735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 385711.2271126704,
            "unit": "ns/iter",
            "extra": "iterations: 2272\ncpu: 385686.48767605535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 380867.82863343053,
            "unit": "ns/iter",
            "extra": "iterations: 2305\ncpu: 380849.84815618204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 227277.8674792465,
            "unit": "ns/iter",
            "extra": "iterations: 3856\ncpu: 227267.50518672128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 381500.107484797,
            "unit": "ns/iter",
            "extra": "iterations: 2298\ncpu: 381490.7310704978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 1955576.289640705,
            "unit": "ns/iter",
            "extra": "iterations: 473\ncpu: 1954461.09936576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 754990.3010577827,
            "unit": "ns/iter",
            "extra": "iterations: 1229\ncpu: 754950.2034174084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 4256.691967626726,
            "unit": "ns/iter",
            "extra": "iterations: 188425\ncpu: 4256.4611914554835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 18870.649846782202,
            "unit": "ns/iter",
            "extra": "iterations: 44055\ncpu: 18869.81500397227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 15089.6386537838,
            "unit": "ns/iter",
            "extra": "iterations: 55058\ncpu: 15088.958916052125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 14571.310862076602,
            "unit": "ns/iter",
            "extra": "iterations: 57199\ncpu: 14570.515218797498 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 14670.394978382432,
            "unit": "ns/iter",
            "extra": "iterations: 56436\ncpu: 14669.322772698353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 46540.513353777154,
            "unit": "ns/iter",
            "extra": "iterations: 17935\ncpu: 46539.40897686085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 466209.66932055017,
            "unit": "ns/iter",
            "extra": "iterations: 1884\ncpu: 466189.54352441704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 380139.06457243545,
            "unit": "ns/iter",
            "extra": "iterations: 2292\ncpu: 380107.9406631776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 377053.2649978311,
            "unit": "ns/iter",
            "extra": "iterations: 2317\ncpu: 377036.1674579216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 376876.6556461532,
            "unit": "ns/iter",
            "extra": "iterations: 2329\ncpu: 376860.19750966015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 234838.48978495185,
            "unit": "ns/iter",
            "extra": "iterations: 3720\ncpu: 234831.26344086003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 377494.38538492616,
            "unit": "ns/iter",
            "extra": "iterations: 2299\ncpu: 377468.4210526322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 298.3368849125334,
            "unit": "ns/iter",
            "extra": "iterations: 2343183\ncpu: 298.3173315955281 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1645.7864658193055,
            "unit": "ns/iter",
            "extra": "iterations: 425796\ncpu: 1645.7458501254155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1260.2879824223671,
            "unit": "ns/iter",
            "extra": "iterations: 555711\ncpu: 1260.217631106809 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1311.975222321648,
            "unit": "ns/iter",
            "extra": "iterations: 532899\ncpu: 1311.9298403637479 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1041.7030556289176,
            "unit": "ns/iter",
            "extra": "iterations: 670533\ncpu: 1041.671923678625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 7985.586066789985,
            "unit": "ns/iter",
            "extra": "iterations: 87618\ncpu: 7985.3352050948215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 19110.184162413094,
            "unit": "ns/iter",
            "extra": "iterations: 36647\ncpu: 19109.940786421805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4501.5961319170465,
            "unit": "ns/iter",
            "extra": "iterations: 155219\ncpu: 4501.270463023252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4441.628922670286,
            "unit": "ns/iter",
            "extra": "iterations: 157482\ncpu: 4441.414891860619 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4482.388184599002,
            "unit": "ns/iter",
            "extra": "iterations: 155949\ncpu: 4482.336533097307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 9584.553126110517,
            "unit": "ns/iter",
            "extra": "iterations: 73222\ncpu: 9584.07445849612 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 8665.800032157607,
            "unit": "ns/iter",
            "extra": "iterations: 80853\ncpu: 8665.072415371056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3122.737845745603,
            "unit": "ns/iter",
            "extra": "iterations: 224551\ncpu: 3122.5044644646327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 15585.121071010972,
            "unit": "ns/iter",
            "extra": "iterations: 44668\ncpu: 15584.212411569777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 12330.385515909598,
            "unit": "ns/iter",
            "extra": "iterations: 56890\ncpu: 12330.133591140891 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 12506.953112153009,
            "unit": "ns/iter",
            "extra": "iterations: 55942\ncpu: 12506.422723535083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 13104.106522388949,
            "unit": "ns/iter",
            "extra": "iterations: 53416\ncpu: 13103.54013778651 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 28070.56039247041,
            "unit": "ns/iter",
            "extra": "iterations: 24970\ncpu: 28069.162995595063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 99729.1668566444,
            "unit": "ns/iter",
            "extra": "iterations: 7018\ncpu: 99726.80250783748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 85670.12887857111,
            "unit": "ns/iter",
            "extra": "iterations: 8186\ncpu: 85668.22623992072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 85222.25681265559,
            "unit": "ns/iter",
            "extra": "iterations: 8220\ncpu: 85216.64233576742 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 85328.71703631151,
            "unit": "ns/iter",
            "extra": "iterations: 8206\ncpu: 85326.93151352798 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 55429.24096098397,
            "unit": "ns/iter",
            "extra": "iterations: 12612\ncpu: 55427.49762131224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 85918.52460424266,
            "unit": "ns/iter",
            "extra": "iterations: 8149\ncpu: 85916.41919253895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3058.4918747661845,
            "unit": "ns/iter",
            "extra": "iterations: 229778\ncpu: 3058.3689474187972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 15342.058465046439,
            "unit": "ns/iter",
            "extra": "iterations: 45617\ncpu: 15341.184207641949 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 12296.44739150223,
            "unit": "ns/iter",
            "extra": "iterations: 57006\ncpu: 12296.14952811996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 12200.818413074476,
            "unit": "ns/iter",
            "extra": "iterations: 57394\ncpu: 12200.36937658981 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 12600.144843194157,
            "unit": "ns/iter",
            "extra": "iterations: 55674\ncpu: 12599.980242123806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 27347.652690180978,
            "unit": "ns/iter",
            "extra": "iterations: 25686\ncpu: 27345.1802538346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 99446.90430824888,
            "unit": "ns/iter",
            "extra": "iterations: 7033\ncpu: 99444.36229205254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 83837.71156609125,
            "unit": "ns/iter",
            "extra": "iterations: 8352\ncpu: 83834.50670498083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 82733.92896821043,
            "unit": "ns/iter",
            "extra": "iterations: 8461\ncpu: 82729.54733483022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 83046.07190475671,
            "unit": "ns/iter",
            "extra": "iterations: 8400\ncpu: 83042.75000000079 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 56482.00483831922,
            "unit": "ns/iter",
            "extra": "iterations: 12401\ncpu: 56478.30013708546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 84768.71158767014,
            "unit": "ns/iter",
            "extra": "iterations: 8207\ncpu: 84765.05422200536 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}