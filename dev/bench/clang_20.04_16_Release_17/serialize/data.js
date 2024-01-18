window.BENCHMARK_DATA = {
  "lastUpdate": 1705575715711,
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
      }
    ]
  }
}