window.BENCHMARK_DATA = {
  "lastUpdate": 1702490405760,
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
      }
    ]
  }
}