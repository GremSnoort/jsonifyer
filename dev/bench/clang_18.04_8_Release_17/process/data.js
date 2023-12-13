window.BENCHMARK_DATA = {
  "lastUpdate": 1702490307719,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Serialize&Parse clang-8 18.04 Release c++-17": [
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
        "date": 1702490305950,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1396.906203208553,
            "unit": "ns/iter",
            "extra": "iterations: 495550\ncpu: 1396.8834628190898 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 17335.12516461145,
            "unit": "ns/iter",
            "extra": "iterations: 50118\ncpu: 17334.863721616985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 34609.048058377135,
            "unit": "ns/iter",
            "extra": "iterations: 23846\ncpu: 34605.96326427911 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 51303.361832061586,
            "unit": "ns/iter",
            "extra": "iterations: 16375\ncpu: 51300.28702290079 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 57237.31299999599,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 57235.019999999975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 70699.7132016986,
            "unit": "ns/iter",
            "extra": "iterations: 12256\ncpu: 70700.13870757181 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 85348.31186473696,
            "unit": "ns/iter",
            "extra": "iterations: 10232\ncpu: 85346.6770914777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 99132.66602426364,
            "unit": "ns/iter",
            "extra": "iterations: 8821\ncpu: 99129.35041378526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 116543.6545166373,
            "unit": "ns/iter",
            "extra": "iterations: 7572\ncpu: 116537.8631801373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1188.9723148146804,
            "unit": "ns/iter",
            "extra": "iterations: 587101\ncpu: 1188.923370936177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 943.2750084082862,
            "unit": "ns/iter",
            "extra": "iterations: 740341\ncpu: 943.2237306862653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 921.3840882826634,
            "unit": "ns/iter",
            "extra": "iterations: 759742\ncpu: 921.3317152401742 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 932.3479796217263,
            "unit": "ns/iter",
            "extra": "iterations: 750998\ncpu: 932.2934282115257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 1924.279788824278,
            "unit": "ns/iter",
            "extra": "iterations: 361973\ncpu: 1924.1940697234356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5134.707982314429,
            "unit": "ns/iter",
            "extra": "iterations: 155381\ncpu: 5134.234558922913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 25440.435333578484,
            "unit": "ns/iter",
            "extra": "iterations: 32196\ncpu: 25439.107342527033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 20369.775038635136,
            "unit": "ns/iter",
            "extra": "iterations: 40118\ncpu: 20368.378284062015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 18835.87958066754,
            "unit": "ns/iter",
            "extra": "iterations: 43307\ncpu: 18835.19754312239 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 19415.572872015677,
            "unit": "ns/iter",
            "extra": "iterations: 42458\ncpu: 19414.73927175086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 66257.27263212705,
            "unit": "ns/iter",
            "extra": "iterations: 13377\ncpu: 66254.12274800014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 556969.1919999968,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 556962.6999999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 568712.3124592,
            "unit": "ns/iter",
            "extra": "iterations: 1533\ncpu: 568687.5407697338 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 559827.0772251268,
            "unit": "ns/iter",
            "extra": "iterations: 1528\ncpu: 559796.7277486916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 561235.1640316008,
            "unit": "ns/iter",
            "extra": "iterations: 1518\ncpu: 561196.3768115949 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 325139.5323606376,
            "unit": "ns/iter",
            "extra": "iterations: 2673\ncpu: 325127.42237186775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 568484.7350260942,
            "unit": "ns/iter",
            "extra": "iterations: 1536\ncpu: 568468.6848958324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2361502.225888154,
            "unit": "ns/iter",
            "extra": "iterations: 394\ncpu: 2361414.2131979736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1065050.4317129406,
            "unit": "ns/iter",
            "extra": "iterations: 864\ncpu: 1065012.2685185212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3272742.6678445158,
            "unit": "ns/iter",
            "extra": "iterations: 283\ncpu: 3272666.431095406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 7420.258754569806,
            "unit": "ns/iter",
            "extra": "iterations: 112427\ncpu: 7420.049454312561 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 39792.014672415455,
            "unit": "ns/iter",
            "extra": "iterations: 20651\ncpu: 39790.51377657251 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 31276.412859242755,
            "unit": "ns/iter",
            "extra": "iterations: 26549\ncpu: 31275.072507439123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 31006.992615956307,
            "unit": "ns/iter",
            "extra": "iterations: 26950\ncpu: 31007.168831168823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 30721.17795381306,
            "unit": "ns/iter",
            "extra": "iterations: 26889\ncpu: 30720.045371713488 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 78966.93503334219,
            "unit": "ns/iter",
            "extra": "iterations: 11098\ncpu: 78965.63344746784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 614281.4900000531,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 614255.5999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 604939.2058823729,
            "unit": "ns/iter",
            "extra": "iterations: 1428\ncpu: 604942.5070028006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 592487.619879087,
            "unit": "ns/iter",
            "extra": "iterations: 1489\ncpu: 592470.8529214225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 592677.6701030998,
            "unit": "ns/iter",
            "extra": "iterations: 1455\ncpu: 592655.9450171789 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 342102.3727740682,
            "unit": "ns/iter",
            "extra": "iterations: 2527\ncpu: 342104.352987733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 582895.5754075585,
            "unit": "ns/iter",
            "extra": "iterations: 1472\ncpu: 582882.8124999967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2483771.477211704,
            "unit": "ns/iter",
            "extra": "iterations: 373\ncpu: 2483662.198391421 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1111902.459783909,
            "unit": "ns/iter",
            "extra": "iterations: 833\ncpu: 1111872.268907564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5207.337972322511,
            "unit": "ns/iter",
            "extra": "iterations: 153841\ncpu: 5207.22629208078 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 24993.713294586098,
            "unit": "ns/iter",
            "extra": "iterations: 32863\ncpu: 24993.36335696695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 19663.307098949303,
            "unit": "ns/iter",
            "extra": "iterations: 42133\ncpu: 19662.4474877174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 18921.644229447455,
            "unit": "ns/iter",
            "extra": "iterations: 43618\ncpu: 18921.743316979202 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 18583.572539884983,
            "unit": "ns/iter",
            "extra": "iterations: 42935\ncpu: 18582.152090369153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 63127.351398222185,
            "unit": "ns/iter",
            "extra": "iterations: 13839\ncpu: 63124.08411012358 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 591068.9940000111,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 591054.800000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 588765.8203753704,
            "unit": "ns/iter",
            "extra": "iterations: 1492\ncpu: 588740.415549598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 584658.122610381,
            "unit": "ns/iter",
            "extra": "iterations: 1517\ncpu: 584632.4983520107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 566566.0741230756,
            "unit": "ns/iter",
            "extra": "iterations: 1511\ncpu: 566530.9066843179 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 331048.30388824944,
            "unit": "ns/iter",
            "extra": "iterations: 2649\ncpu: 331047.30086825415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 564090.9702842556,
            "unit": "ns/iter",
            "extra": "iterations: 1548\ncpu: 564069.7028423751 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 489.17306778278163,
            "unit": "ns/iter",
            "extra": "iterations: 1430688\ncpu: 489.1419373056883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3008.754687499776,
            "unit": "ns/iter",
            "extra": "iterations: 234240\ncpu: 3008.5211748634083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2355.1132820763837,
            "unit": "ns/iter",
            "extra": "iterations: 297717\ncpu: 2354.9494990208946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2326.100546109847,
            "unit": "ns/iter",
            "extra": "iterations: 300489\ncpu: 2325.9779892109177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 1912.7084804345004,
            "unit": "ns/iter",
            "extra": "iterations: 364545\ncpu: 1912.5866491105471 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 17591.71146637669,
            "unit": "ns/iter",
            "extra": "iterations: 40283\ncpu: 17590.802571804576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 31582.66995877204,
            "unit": "ns/iter",
            "extra": "iterations: 22073\ncpu: 31581.284827617288 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 7312.27264191259,
            "unit": "ns/iter",
            "extra": "iterations: 95851\ncpu: 7311.981095658812 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 7347.597750592085,
            "unit": "ns/iter",
            "extra": "iterations: 95314\ncpu: 7347.494596806361 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7265.408817158387,
            "unit": "ns/iter",
            "extra": "iterations: 96471\ncpu: 7265.14496584457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 14482.688420964072,
            "unit": "ns/iter",
            "extra": "iterations: 48251\ncpu: 14482.066692918335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 13903.418375488884,
            "unit": "ns/iter",
            "extra": "iterations: 50132\ncpu: 13902.744753849694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5278.61941161376,
            "unit": "ns/iter",
            "extra": "iterations: 133178\ncpu: 5278.34927690763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 26623.694445500987,
            "unit": "ns/iter",
            "extra": "iterations: 26339\ncpu: 26622.161053950636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 21229.747268131377,
            "unit": "ns/iter",
            "extra": "iterations: 32853\ncpu: 21229.020180805644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 21310.82114803625,
            "unit": "ns/iter",
            "extra": "iterations: 33100\ncpu: 21309.48338368588 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 21650.50224021411,
            "unit": "ns/iter",
            "extra": "iterations: 32363\ncpu: 21648.957142415424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 48836.394535059924,
            "unit": "ns/iter",
            "extra": "iterations: 14346\ncpu: 48832.84539244331 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 161535.76364893946,
            "unit": "ns/iter",
            "extra": "iterations: 4341\ncpu: 161530.61506565183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 134872.0847490469,
            "unit": "ns/iter",
            "extra": "iterations: 5180\ncpu: 134872.9150579143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 132728.67084521818,
            "unit": "ns/iter",
            "extra": "iterations: 5265\ncpu: 132727.99620133088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 134366.48890165336,
            "unit": "ns/iter",
            "extra": "iterations: 5226\ncpu: 134358.40030616143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 82961.49330171975,
            "unit": "ns/iter",
            "extra": "iterations: 8435\ncpu: 82955.32898636581 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 133065.32624787628,
            "unit": "ns/iter",
            "extra": "iterations: 5269\ncpu: 133057.54412602144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 4942.58112439548,
            "unit": "ns/iter",
            "extra": "iterations: 141018\ncpu: 4942.210923428207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 25489.27463633455,
            "unit": "ns/iter",
            "extra": "iterations: 27429\ncpu: 25487.53509059761 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 20414.46442976357,
            "unit": "ns/iter",
            "extra": "iterations: 34214\ncpu: 20412.760858128364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 20157.939438872145,
            "unit": "ns/iter",
            "extra": "iterations: 34395\ncpu: 20156.720453554153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 20672.804632545492,
            "unit": "ns/iter",
            "extra": "iterations: 33977\ncpu: 20672.042852518058 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 46800.172138839815,
            "unit": "ns/iter",
            "extra": "iterations: 14924\ncpu: 46797.540873759724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 156889.81640888052,
            "unit": "ns/iter",
            "extra": "iterations: 4461\ncpu: 156878.70432638345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 130119.57944620059,
            "unit": "ns/iter",
            "extra": "iterations: 5381\ncpu: 130112.58130459253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 128585.18914445362,
            "unit": "ns/iter",
            "extra": "iterations: 5435\ncpu: 128579.30082796776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 129002.3207164142,
            "unit": "ns/iter",
            "extra": "iterations: 5416\ncpu: 129000.53545051816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 81915.11712656554,
            "unit": "ns/iter",
            "extra": "iterations: 8589\ncpu: 81913.45907556154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 128691.22620790725,
            "unit": "ns/iter",
            "extra": "iterations: 5464\ncpu: 128680.41727671905 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}