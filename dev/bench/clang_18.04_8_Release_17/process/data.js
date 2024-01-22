window.BENCHMARK_DATA = {
  "lastUpdate": 1705959956486,
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
        "date": 1702492919851,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1426.5017614889748,
            "unit": "ns/iter",
            "extra": "iterations: 494468\ncpu: 1426.5119279710723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 16253.414594948532,
            "unit": "ns/iter",
            "extra": "iterations: 50401\ncpu: 16247.661752743004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 34235.85883630082,
            "unit": "ns/iter",
            "extra": "iterations: 23958\ncpu: 34234.83178896401 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 51318.550132728415,
            "unit": "ns/iter",
            "extra": "iterations: 16576\ncpu: 51318.92495173747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 57191.710000006424,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 57192.16000000005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 73158.27863854078,
            "unit": "ns/iter",
            "extra": "iterations: 12134\ncpu: 73155.82660293388 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 85754.04730928717,
            "unit": "ns/iter",
            "extra": "iterations: 10146\ncpu: 85751.21230041391 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 98128.97248337645,
            "unit": "ns/iter",
            "extra": "iterations: 8722\ncpu: 98124.08851180924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 115583.6081508781,
            "unit": "ns/iter",
            "extra": "iterations: 7582\ncpu: 115579.02927987343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1197.6164307797662,
            "unit": "ns/iter",
            "extra": "iterations: 582200\ncpu: 1197.5522157334258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 941.2527404702696,
            "unit": "ns/iter",
            "extra": "iterations: 745310\ncpu: 941.0976640592512 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 917.16125197214,
            "unit": "ns/iter",
            "extra": "iterations: 763755\ncpu: 917.1128175920283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 927.6329407345619,
            "unit": "ns/iter",
            "extra": "iterations: 756243\ncpu: 927.6298755823198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 1879.094514903278,
            "unit": "ns/iter",
            "extra": "iterations: 373740\ncpu: 1879.030609514636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5264.632658935046,
            "unit": "ns/iter",
            "extra": "iterations: 152877\ncpu: 5264.464242495602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 24807.381901242912,
            "unit": "ns/iter",
            "extra": "iterations: 33273\ncpu: 24806.84338652965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 19498.28744254575,
            "unit": "ns/iter",
            "extra": "iterations: 41991\ncpu: 19498.228191755396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 19165.888702037737,
            "unit": "ns/iter",
            "extra": "iterations: 42220\ncpu: 19164.950260539998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 19023.02122928483,
            "unit": "ns/iter",
            "extra": "iterations: 42724\ncpu: 19022.5751334145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 66122.38648488566,
            "unit": "ns/iter",
            "extra": "iterations: 13496\ncpu: 66118.87966804967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 568200.3590000023,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 568204.099999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 560438.6797934083,
            "unit": "ns/iter",
            "extra": "iterations: 1549\ncpu: 560407.2950290506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 564497.3066926231,
            "unit": "ns/iter",
            "extra": "iterations: 1539\ncpu: 564464.0025990912 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 589399.0287958003,
            "unit": "ns/iter",
            "extra": "iterations: 1528\ncpu: 589365.6413612566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 323285.78471712227,
            "unit": "ns/iter",
            "extra": "iterations: 2722\ncpu: 323279.4636296843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 570581.7624345706,
            "unit": "ns/iter",
            "extra": "iterations: 1528\ncpu: 570544.1099476435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2361765.2875316977,
            "unit": "ns/iter",
            "extra": "iterations: 393\ncpu: 2361625.9541984703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1077453.7027026762,
            "unit": "ns/iter",
            "extra": "iterations: 851\ncpu: 1077413.8660399534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3385481.2421052707,
            "unit": "ns/iter",
            "extra": "iterations: 285\ncpu: 3385191.2280701837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 7453.708497403235,
            "unit": "ns/iter",
            "extra": "iterations: 113011\ncpu: 7453.347904186328 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 39818.92252001918,
            "unit": "ns/iter",
            "extra": "iterations: 20857\ncpu: 39817.46176343669 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 30840.423972043023,
            "unit": "ns/iter",
            "extra": "iterations: 26898\ncpu: 30839.813369023617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 30456.176323529777,
            "unit": "ns/iter",
            "extra": "iterations: 27200\ncpu: 30454.77573529406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 31030.773541028142,
            "unit": "ns/iter",
            "extra": "iterations: 27091\ncpu: 31029.434129415815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 77126.39072672138,
            "unit": "ns/iter",
            "extra": "iterations: 11366\ncpu: 77122.26816822097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 609276.5140000437,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 609275.7999999989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 590203.5883977654,
            "unit": "ns/iter",
            "extra": "iterations: 1448\ncpu: 590176.4502762401 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 590167.832650305,
            "unit": "ns/iter",
            "extra": "iterations: 1464\ncpu: 590145.2868852445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 588174.518694754,
            "unit": "ns/iter",
            "extra": "iterations: 1471\ncpu: 588171.380013598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 331268.5986185778,
            "unit": "ns/iter",
            "extra": "iterations: 2606\ncpu: 331253.5303146576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 573122.9750656284,
            "unit": "ns/iter",
            "extra": "iterations: 1524\ncpu: 573091.5354330688 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2566009.311999854,
            "unit": "ns/iter",
            "extra": "iterations: 375\ncpu: 2565954.13333334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1106411.9892086214,
            "unit": "ns/iter",
            "extra": "iterations: 834\ncpu: 1106357.5539568302 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5232.269005426723,
            "unit": "ns/iter",
            "extra": "iterations: 152930\ncpu: 5232.0519191787125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 24954.456024077837,
            "unit": "ns/iter",
            "extra": "iterations: 31233\ncpu: 24953.917331028042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 19971.99237915471,
            "unit": "ns/iter",
            "extra": "iterations: 41334\ncpu: 19971.88271156917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 18766.038300626882,
            "unit": "ns/iter",
            "extra": "iterations: 43263\ncpu: 18765.85997272506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 18841.40812524056,
            "unit": "ns/iter",
            "extra": "iterations: 44011\ncpu: 18840.773897434596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 65179.37786714433,
            "unit": "ns/iter",
            "extra": "iterations: 13428\ncpu: 65178.284182305615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 583735.9079999941,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 583726.6000000056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 584283.582388255,
            "unit": "ns/iter",
            "extra": "iterations: 1499\ncpu: 584258.4389593079 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 565744.8109354277,
            "unit": "ns/iter",
            "extra": "iterations: 1518\ncpu: 565717.4571805008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 578047.0124835928,
            "unit": "ns/iter",
            "extra": "iterations: 1522\ncpu: 578038.5676741122 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 327613.7982654701,
            "unit": "ns/iter",
            "extra": "iterations: 2652\ncpu: 327601.4705882341 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 569246.0614780501,
            "unit": "ns/iter",
            "extra": "iterations: 1529\ncpu: 569227.7305428383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 487.67074943548266,
            "unit": "ns/iter",
            "extra": "iterations: 1427381\ncpu: 487.6742789766725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3026.1610855038007,
            "unit": "ns/iter",
            "extra": "iterations: 237346\ncpu: 3026.093551186897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2291.5865393417066,
            "unit": "ns/iter",
            "extra": "iterations: 305884\ncpu: 2291.4787958833954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2454.1767436577534,
            "unit": "ns/iter",
            "extra": "iterations: 308260\ncpu: 2454.092000259538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 1921.4580898343615,
            "unit": "ns/iter",
            "extra": "iterations: 364649\ncpu: 1921.4738008331424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 17552.440764714895,
            "unit": "ns/iter",
            "extra": "iterations: 39858\ncpu: 17551.984545135438 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 30644.274753037203,
            "unit": "ns/iter",
            "extra": "iterations: 22169\ncpu: 30642.996977761788 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 7078.216428087948,
            "unit": "ns/iter",
            "extra": "iterations: 98989\ncpu: 7077.972299952469 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 7051.586196828865,
            "unit": "ns/iter",
            "extra": "iterations: 99325\ncpu: 7051.537880694718 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7051.340950520149,
            "unit": "ns/iter",
            "extra": "iterations: 99293\ncpu: 7051.121428499583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 14405.856638909581,
            "unit": "ns/iter",
            "extra": "iterations: 48758\ncpu: 14405.340662045128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 13685.710147191505,
            "unit": "ns/iter",
            "extra": "iterations: 51226\ncpu: 13685.198922422147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5258.343841982169,
            "unit": "ns/iter",
            "extra": "iterations: 131479\ncpu: 5258.277747777216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 26640.38695270405,
            "unit": "ns/iter",
            "extra": "iterations: 26197\ncpu: 26640.55426193808 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 21277.51275960907,
            "unit": "ns/iter",
            "extra": "iterations: 32838\ncpu: 21276.837809854416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 21130.90348777473,
            "unit": "ns/iter",
            "extra": "iterations: 33001\ncpu: 21130.732402048605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 21751.09948099591,
            "unit": "ns/iter",
            "extra": "iterations: 32177\ncpu: 21750.06681791338 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 48361.58394261476,
            "unit": "ns/iter",
            "extra": "iterations: 14498\ncpu: 48361.0291074623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 156442.70577736484,
            "unit": "ns/iter",
            "extra": "iterations: 4483\ncpu: 156436.89493642544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 132368.46696866656,
            "unit": "ns/iter",
            "extra": "iterations: 5298\ncpu: 132366.36466590984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 132533.34500843965,
            "unit": "ns/iter",
            "extra": "iterations: 5339\ncpu: 132527.45832552895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 135117.76073973885,
            "unit": "ns/iter",
            "extra": "iterations: 5191\ncpu: 135113.94721633501 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 83393.90846409867,
            "unit": "ns/iter",
            "extra": "iterations: 8412\ncpu: 83394.44840703723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 133336.92620769213,
            "unit": "ns/iter",
            "extra": "iterations: 5258\ncpu: 133331.41879041484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 5049.1493091486145,
            "unit": "ns/iter",
            "extra": "iterations: 136281\ncpu: 5049.128638621687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 25855.219173030615,
            "unit": "ns/iter",
            "extra": "iterations: 27111\ncpu: 25853.764154771074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 20707.200442151763,
            "unit": "ns/iter",
            "extra": "iterations: 33925\ncpu: 20706.97420781154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 20322.94034054149,
            "unit": "ns/iter",
            "extra": "iterations: 30892\ncpu: 20322.352065259834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 20823.953483545254,
            "unit": "ns/iter",
            "extra": "iterations: 33730\ncpu: 20823.447969166773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 46773.78179992648,
            "unit": "ns/iter",
            "extra": "iterations: 14945\ncpu: 46770.89327534336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 155956.5139043472,
            "unit": "ns/iter",
            "extra": "iterations: 4495\ncpu: 155952.30255839866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 129964.62616129321,
            "unit": "ns/iter",
            "extra": "iterations: 5382\ncpu: 129961.48272018005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 129641.82157980946,
            "unit": "ns/iter",
            "extra": "iterations: 5431\ncpu: 129638.61167372593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 130174.2556975922,
            "unit": "ns/iter",
            "extra": "iterations: 5397\ncpu: 130167.59310728304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 81915.8283040946,
            "unit": "ns/iter",
            "extra": "iterations: 8550\ncpu: 81912.60818713337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 128498.08057312122,
            "unit": "ns/iter",
            "extra": "iterations: 5374\ncpu: 128498.97655377878 ns\nthreads: 1"
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
        "date": 1702503985674,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1393.2652136287882,
            "unit": "ns/iter",
            "extra": "iterations: 496890\ncpu: 1393.0978687435852 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 16444.550772537194,
            "unit": "ns/iter",
            "extra": "iterations: 50224\ncpu: 16443.369703727305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 35077.348141314484,
            "unit": "ns/iter",
            "extra": "iterations: 23861\ncpu: 35072.830141234655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 50841.5060284769,
            "unit": "ns/iter",
            "extra": "iterations: 16505\ncpu: 50837.01908512573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 56469.2472000047,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 56462.55 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 71595.51430894555,
            "unit": "ns/iter",
            "extra": "iterations: 12300\ncpu: 71588.48780487811 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 85070.39715268133,
            "unit": "ns/iter",
            "extra": "iterations: 10185\ncpu: 85061.22729504167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 98401.23438572658,
            "unit": "ns/iter",
            "extra": "iterations: 8742\ncpu: 98393.82292381603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 114847.18659010182,
            "unit": "ns/iter",
            "extra": "iterations: 7487\ncpu: 114834.21931347664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1195.8336272881902,
            "unit": "ns/iter",
            "extra": "iterations: 575485\ncpu: 1195.7837302449238 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 954.6105650638644,
            "unit": "ns/iter",
            "extra": "iterations: 737828\ncpu: 954.576540874026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 948.907059057064,
            "unit": "ns/iter",
            "extra": "iterations: 735424\ncpu: 948.7868222957103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 950.8174042032712,
            "unit": "ns/iter",
            "extra": "iterations: 738856\ncpu: 950.7309949435345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 1874.6280088574733,
            "unit": "ns/iter",
            "extra": "iterations: 375724\ncpu: 1874.4320298942826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5265.536227856372,
            "unit": "ns/iter",
            "extra": "iterations: 151113\ncpu: 5265.019554902623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 25705.20389748852,
            "unit": "ns/iter",
            "extra": "iterations: 31918\ncpu: 25702.63174384358 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 19912.255323295307,
            "unit": "ns/iter",
            "extra": "iterations: 41046\ncpu: 19910.524777079405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 21108.07067374191,
            "unit": "ns/iter",
            "extra": "iterations: 43340\ncpu: 21105.839870789117 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 21129.655802328816,
            "unit": "ns/iter",
            "extra": "iterations: 38812\ncpu: 21127.604864474924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 66159.06925961321,
            "unit": "ns/iter",
            "extra": "iterations: 13601\ncpu: 66153.31225645178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 567356.07600001,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 567288.8 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 558580.1174168636,
            "unit": "ns/iter",
            "extra": "iterations: 1533\ncpu: 558512.8506196999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 548734.6557170511,
            "unit": "ns/iter",
            "extra": "iterations: 1583\ncpu: 548705.3063802902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 555427.8350318434,
            "unit": "ns/iter",
            "extra": "iterations: 1570\ncpu: 555380.2547770715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 320747.30975071463,
            "unit": "ns/iter",
            "extra": "iterations: 2728\ncpu: 320719.208211143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 551599.7251908174,
            "unit": "ns/iter",
            "extra": "iterations: 1572\ncpu: 551545.8015267197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2331645.5137842414,
            "unit": "ns/iter",
            "extra": "iterations: 399\ncpu: 2331549.122807014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1068712.3168771414,
            "unit": "ns/iter",
            "extra": "iterations: 871\ncpu: 1068636.280137772 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3241819.6958039384,
            "unit": "ns/iter",
            "extra": "iterations: 286\ncpu: 3241524.4755244865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 7368.3593697229735,
            "unit": "ns/iter",
            "extra": "iterations: 112522\ncpu: 7367.680098114148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 40332.67436478589,
            "unit": "ns/iter",
            "extra": "iterations: 20741\ncpu: 40329.796056120635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 30758.58970242421,
            "unit": "ns/iter",
            "extra": "iterations: 26783\ncpu: 30755.818989657822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 30530.887909555222,
            "unit": "ns/iter",
            "extra": "iterations: 26889\ncpu: 30529.09740042374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 32673.85347672886,
            "unit": "ns/iter",
            "extra": "iterations: 26965\ncpu: 32672.004450213244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 76441.16167248023,
            "unit": "ns/iter",
            "extra": "iterations: 11480\ncpu: 76436.12369338029 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 602316.2709999497,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 602292.7000000067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 588594.0369609825,
            "unit": "ns/iter",
            "extra": "iterations: 1461\ncpu: 588570.8418891206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 579723.2614247268,
            "unit": "ns/iter",
            "extra": "iterations: 1488\ncpu: 579711.1559139778 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 580963.215147475,
            "unit": "ns/iter",
            "extra": "iterations: 1492\ncpu: 580946.246648795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 333897.99197555403,
            "unit": "ns/iter",
            "extra": "iterations: 2617\ncpu: 333878.1047000381 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 576965.3465346859,
            "unit": "ns/iter",
            "extra": "iterations: 1515\ncpu: 576954.389438942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2506589.1936339745,
            "unit": "ns/iter",
            "extra": "iterations: 377\ncpu: 2506456.2334217597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1093643.634864589,
            "unit": "ns/iter",
            "extra": "iterations: 849\ncpu: 1093559.0106007105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5196.095257468388,
            "unit": "ns/iter",
            "extra": "iterations: 154854\ncpu: 5195.896134423384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 25377.030828812643,
            "unit": "ns/iter",
            "extra": "iterations: 32275\ncpu: 25375.962819519642 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 20042.62161038582,
            "unit": "ns/iter",
            "extra": "iterations: 40897\ncpu: 20042.07154559011 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 19392.03913713344,
            "unit": "ns/iter",
            "extra": "iterations: 42185\ncpu: 19391.264667535925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 19448.45266765183,
            "unit": "ns/iter",
            "extra": "iterations: 42022\ncpu: 19447.90347913005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 62989.935725729556,
            "unit": "ns/iter",
            "extra": "iterations: 13738\ncpu: 62986.33716698212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 577344.3630000657,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 577323.5000000056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 579790.7636963861,
            "unit": "ns/iter",
            "extra": "iterations: 1515\ncpu: 579755.1815181484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 578657.2739816441,
            "unit": "ns/iter",
            "extra": "iterations: 1522\ncpu: 578607.3587385048 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 572096.5590346266,
            "unit": "ns/iter",
            "extra": "iterations: 1533\ncpu: 572058.7084148702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 328168.5299556118,
            "unit": "ns/iter",
            "extra": "iterations: 2704\ncpu: 328162.05621301784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 566800.9059278072,
            "unit": "ns/iter",
            "extra": "iterations: 1552\ncpu: 566785.0515463935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 498.77940024559047,
            "unit": "ns/iter",
            "extra": "iterations: 1404308\ncpu: 498.75782235805843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3055.419403128301,
            "unit": "ns/iter",
            "extra": "iterations: 229128\ncpu: 3055.325407632417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2381.462478575071,
            "unit": "ns/iter",
            "extra": "iterations: 295218\ncpu: 2381.312792580397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2349.8843861059154,
            "unit": "ns/iter",
            "extra": "iterations: 297421\ncpu: 2349.8411342844047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 1899.7894591432366,
            "unit": "ns/iter",
            "extra": "iterations: 369192\ncpu: 1899.6811956922324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 17240.07199239956,
            "unit": "ns/iter",
            "extra": "iterations: 41046\ncpu: 17239.139014763772 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 31806.977252084966,
            "unit": "ns/iter",
            "extra": "iterations: 22024\ncpu: 31805.176171449086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 7464.640393563026,
            "unit": "ns/iter",
            "extra": "iterations: 93708\ncpu: 7464.397916933527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 7396.2780215606,
            "unit": "ns/iter",
            "extra": "iterations: 94802\ncpu: 7396.04544207921 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7435.177487434027,
            "unit": "ns/iter",
            "extra": "iterations: 94294\ncpu: 7434.606655778651 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 14813.929455315152,
            "unit": "ns/iter",
            "extra": "iterations: 47275\ncpu: 14813.358011633945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 14223.066786748172,
            "unit": "ns/iter",
            "extra": "iterations: 49411\ncpu: 14222.511181720638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5360.700723189668,
            "unit": "ns/iter",
            "extra": "iterations: 131086\ncpu: 5360.55032574039 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 26839.584079334127,
            "unit": "ns/iter",
            "extra": "iterations: 25916\ncpu: 26838.0884395744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 21456.06434241819,
            "unit": "ns/iter",
            "extra": "iterations: 32498\ncpu: 21455.289556280415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 21230.561224488876,
            "unit": "ns/iter",
            "extra": "iterations: 33026\ncpu: 21229.573669230394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 21807.568053224484,
            "unit": "ns/iter",
            "extra": "iterations: 32166\ncpu: 21806.233289809046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 48647.4215549689,
            "unit": "ns/iter",
            "extra": "iterations: 14354\ncpu: 48642.74766615558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 161367.26631312422,
            "unit": "ns/iter",
            "extra": "iterations: 4337\ncpu: 161362.1627853355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 135147.355237734,
            "unit": "ns/iter",
            "extra": "iterations: 5174\ncpu: 135142.90684190046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 132870.59536913497,
            "unit": "ns/iter",
            "extra": "iterations: 5269\ncpu: 132866.82482444384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 133787.51655501834,
            "unit": "ns/iter",
            "extra": "iterations: 5225\ncpu: 133784.9952153103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 83276.94245630474,
            "unit": "ns/iter",
            "extra": "iterations: 8411\ncpu: 83273.2493163713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 134591.27158136124,
            "unit": "ns/iter",
            "extra": "iterations: 5236\ncpu: 134586.78380443144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 5070.668258277905,
            "unit": "ns/iter",
            "extra": "iterations: 137387\ncpu: 5070.310873663445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 25886.38486646487,
            "unit": "ns/iter",
            "extra": "iterations: 26960\ncpu: 25885.89020771503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 20858.92108544482,
            "unit": "ns/iter",
            "extra": "iterations: 33682\ncpu: 20858.03990261854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 20607.333127643105,
            "unit": "ns/iter",
            "extra": "iterations: 34032\ncpu: 20606.96109543939 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 20866.258665394875,
            "unit": "ns/iter",
            "extra": "iterations: 33553\ncpu: 20865.257950108724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 46830.297653270776,
            "unit": "ns/iter",
            "extra": "iterations: 14957\ncpu: 46829.41097813661 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 152941.0988567493,
            "unit": "ns/iter",
            "extra": "iterations: 4461\ncpu: 152935.93364716572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 128149.18112104664,
            "unit": "ns/iter",
            "extra": "iterations: 5477\ncpu: 128145.33503742969 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 126602.43541703817,
            "unit": "ns/iter",
            "extra": "iterations: 5551\ncpu: 126598.37867051149 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 128145.34585917428,
            "unit": "ns/iter",
            "extra": "iterations: 5482\ncpu: 128139.78475009001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 82026.30347734693,
            "unit": "ns/iter",
            "extra": "iterations: 8541\ncpu: 82024.73949186302 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 126591.40264205702,
            "unit": "ns/iter",
            "extra": "iterations: 5526\ncpu: 126585.32392327224 ns\nthreads: 1"
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
        "date": 1705575632454,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1431.9570806828474,
            "unit": "ns/iter",
            "extra": "iterations: 492855\ncpu: 1431.9172981911515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 16410.09444223205,
            "unit": "ns/iter",
            "extra": "iterations: 50200\ncpu: 16409.98804780876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 34498.384749778554,
            "unit": "ns/iter",
            "extra": "iterations: 24039\ncpu: 34496.77607221598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 50897.973472091755,
            "unit": "ns/iter",
            "extra": "iterations: 16624\ncpu: 50896.08999037539 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 56377.270800010134,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 56376.73999999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 70375.90443905606,
            "unit": "ns/iter",
            "extra": "iterations: 12390\ncpu: 70375.5125100888 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 84174.78859718014,
            "unit": "ns/iter",
            "extra": "iterations: 10208\ncpu: 84172.03173981192 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 97175.97506206782,
            "unit": "ns/iter",
            "extra": "iterations: 8862\ncpu: 97173.89979688561 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 114303.0154414686,
            "unit": "ns/iter",
            "extra": "iterations: 7577\ncpu: 114298.75940345775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1163.941060188767,
            "unit": "ns/iter",
            "extra": "iterations: 598950\ncpu: 1163.916687536522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 935.6944184396531,
            "unit": "ns/iter",
            "extra": "iterations: 749862\ncpu: 935.6484259770461 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 916.251695155019,
            "unit": "ns/iter",
            "extra": "iterations: 763352\ncpu: 916.2264590909568 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 921.1724283470683,
            "unit": "ns/iter",
            "extra": "iterations: 760542\ncpu: 921.1479444922167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 1864.7249565133902,
            "unit": "ns/iter",
            "extra": "iterations: 376555\ncpu: 1864.6856368923525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5224.8129151243575,
            "unit": "ns/iter",
            "extra": "iterations: 152364\ncpu: 5224.619332650751 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 24437.57335284533,
            "unit": "ns/iter",
            "extra": "iterations: 33482\ncpu: 24436.739143420327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 19433.122082287467,
            "unit": "ns/iter",
            "extra": "iterations: 42242\ncpu: 19432.67127503432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 19737.73079054512,
            "unit": "ns/iter",
            "extra": "iterations: 41503\ncpu: 19737.397296580966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 19438.717084227545,
            "unit": "ns/iter",
            "extra": "iterations: 41910\ncpu: 19438.18181818181 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 65803.5850619337,
            "unit": "ns/iter",
            "extra": "iterations: 13643\ncpu: 65800.82093381218 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 576262.7650000241,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 576251.8000000014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 563364.2358674676,
            "unit": "ns/iter",
            "extra": "iterations: 1539\ncpu: 563359.4541910327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 561868.959011095,
            "unit": "ns/iter",
            "extra": "iterations: 1537\ncpu: 561798.308392973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 562256.3234344803,
            "unit": "ns/iter",
            "extra": "iterations: 1549\ncpu: 562241.5106520348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 322812.6568156332,
            "unit": "ns/iter",
            "extra": "iterations: 2707\ncpu: 322808.2748429995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 560702.3938602906,
            "unit": "ns/iter",
            "extra": "iterations: 1531\ncpu: 560676.5512736775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2337645.633838522,
            "unit": "ns/iter",
            "extra": "iterations: 396\ncpu: 2337393.9393939404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1063198.6405530144,
            "unit": "ns/iter",
            "extra": "iterations: 868\ncpu: 1063118.0875576045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3253382.779720281,
            "unit": "ns/iter",
            "extra": "iterations: 286\ncpu: 3253168.5314685325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 7408.6370804834605,
            "unit": "ns/iter",
            "extra": "iterations: 112868\ncpu: 7408.116560938435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 39658.646448222345,
            "unit": "ns/iter",
            "extra": "iterations: 20905\ncpu: 39655.953121262944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 31510.084292934756,
            "unit": "ns/iter",
            "extra": "iterations: 26313\ncpu: 31509.470603883976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 30670.11377223353,
            "unit": "ns/iter",
            "extra": "iterations: 27098\ncpu: 30667.890619233825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 32111.483219458463,
            "unit": "ns/iter",
            "extra": "iterations: 26638\ncpu: 32109.028455589585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 76417.09473962129,
            "unit": "ns/iter",
            "extra": "iterations: 11368\ncpu: 76411.2948627732 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 601816.3359999562,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 601801.899999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 601395.5329631999,
            "unit": "ns/iter",
            "extra": "iterations: 1441\ncpu: 601350.9368494106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 588730.0876112202,
            "unit": "ns/iter",
            "extra": "iterations: 1461\ncpu: 588703.4223134854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 580468.9674797191,
            "unit": "ns/iter",
            "extra": "iterations: 1476\ncpu: 580448.373983741 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 332617.9119328865,
            "unit": "ns/iter",
            "extra": "iterations: 2623\ncpu: 332609.53107129264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 568206.5398172425,
            "unit": "ns/iter",
            "extra": "iterations: 1532\ncpu: 568186.5535248049 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2478285.1866666535,
            "unit": "ns/iter",
            "extra": "iterations: 375\ncpu: 2478177.8666666695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1102502.4541121225,
            "unit": "ns/iter",
            "extra": "iterations: 839\ncpu: 1102495.5899880845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5192.88950807818,
            "unit": "ns/iter",
            "extra": "iterations: 154862\ncpu: 5192.703180896537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 25285.953382725434,
            "unit": "ns/iter",
            "extra": "iterations: 32799\ncpu: 25285.04222689719 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 19641.060474858703,
            "unit": "ns/iter",
            "extra": "iterations: 42497\ncpu: 19640.50403557899 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 19219.15108411926,
            "unit": "ns/iter",
            "extra": "iterations: 43307\ncpu: 19218.53972798856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 19627.79081368523,
            "unit": "ns/iter",
            "extra": "iterations: 42498\ncpu: 19626.956562661846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 63951.73493888697,
            "unit": "ns/iter",
            "extra": "iterations: 13827\ncpu: 63948.6584219285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 569224.9920000449,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 569204.599999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 569309.6811406029,
            "unit": "ns/iter",
            "extra": "iterations: 1543\ncpu: 568645.8198314968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 576248.5326504649,
            "unit": "ns/iter",
            "extra": "iterations: 1562\ncpu: 576220.3585147258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 564496.1438848756,
            "unit": "ns/iter",
            "extra": "iterations: 1529\ncpu: 564452.5179856102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 326746.5199114798,
            "unit": "ns/iter",
            "extra": "iterations: 2712\ncpu: 326722.7138643063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 561058.8955128092,
            "unit": "ns/iter",
            "extra": "iterations: 1560\ncpu: 561007.4358974369 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 491.21232932699195,
            "unit": "ns/iter",
            "extra": "iterations: 1419088\ncpu: 491.1732746665472 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 2991.491720104028,
            "unit": "ns/iter",
            "extra": "iterations: 234544\ncpu: 2991.350023876121 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2229.652033524334,
            "unit": "ns/iter",
            "extra": "iterations: 312487\ncpu: 2229.4607455670152 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2390.3699405583957,
            "unit": "ns/iter",
            "extra": "iterations: 292893\ncpu: 2390.180714458862 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 1868.5920282581428,
            "unit": "ns/iter",
            "extra": "iterations: 374548\ncpu: 1868.4475688029454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 17615.440730860693,
            "unit": "ns/iter",
            "extra": "iterations: 39734\ncpu: 17614.408315296718 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 31836.620752312676,
            "unit": "ns/iter",
            "extra": "iterations: 22012\ncpu: 31833.068326367535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 7467.453534067265,
            "unit": "ns/iter",
            "extra": "iterations: 93391\ncpu: 7466.798727928822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 7432.50202021206,
            "unit": "ns/iter",
            "extra": "iterations: 94297\ncpu: 7432.255533049753 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7390.071631452805,
            "unit": "ns/iter",
            "extra": "iterations: 94707\ncpu: 7389.523477673289 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 14082.66562788925,
            "unit": "ns/iter",
            "extra": "iterations: 49738\ncpu: 14081.426675780902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 14145.451401371312,
            "unit": "ns/iter",
            "extra": "iterations: 48952\ncpu: 14144.177970256509 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5285.474076532683,
            "unit": "ns/iter",
            "extra": "iterations: 132544\ncpu: 5285.149837035155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 26732.973559530747,
            "unit": "ns/iter",
            "extra": "iterations: 26172\ncpu: 26730.964389423578 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 21947.42828514229,
            "unit": "ns/iter",
            "extra": "iterations: 31437\ncpu: 21946.95740687695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 21305.62306115644,
            "unit": "ns/iter",
            "extra": "iterations: 32687\ncpu: 21305.185547771252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 21885.699638495327,
            "unit": "ns/iter",
            "extra": "iterations: 32088\ncpu: 21885.025554724616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 49009.22572068457,
            "unit": "ns/iter",
            "extra": "iterations: 14292\ncpu: 49004.85586342065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 161808.0968786293,
            "unit": "ns/iter",
            "extra": "iterations: 4325\ncpu: 161795.99999999892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 135962.57325332044,
            "unit": "ns/iter",
            "extra": "iterations: 5167\ncpu: 135959.3574608081 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 134610.51620996057,
            "unit": "ns/iter",
            "extra": "iterations: 5182\ncpu: 134604.2454650718 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 135693.7442807172,
            "unit": "ns/iter",
            "extra": "iterations: 5158\ncpu: 135685.052345869 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 83518.50285986692,
            "unit": "ns/iter",
            "extra": "iterations: 8392\ncpu: 83511.90419447228 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 133888.23217726577,
            "unit": "ns/iter",
            "extra": "iterations: 5190\ncpu: 133880.50096339328 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 4971.515809042889,
            "unit": "ns/iter",
            "extra": "iterations: 137706\ncpu: 4971.390498598437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 25136.56812052808,
            "unit": "ns/iter",
            "extra": "iterations: 27811\ncpu: 25135.906655640032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 20283.579776833685,
            "unit": "ns/iter",
            "extra": "iterations: 34772\ncpu: 20283.2854020475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 20289.406486738033,
            "unit": "ns/iter",
            "extra": "iterations: 34717\ncpu: 20288.88440821465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 20535.26278904832,
            "unit": "ns/iter",
            "extra": "iterations: 33818\ncpu: 20535.099651073462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 46462.30628237245,
            "unit": "ns/iter",
            "extra": "iterations: 15058\ncpu: 46460.273608713236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 154933.87049724907,
            "unit": "ns/iter",
            "extra": "iterations: 4525\ncpu: 154929.21546961332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 128044.46159501826,
            "unit": "ns/iter",
            "extra": "iterations: 5442\ncpu: 128041.03270856471 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 127520.03579866138,
            "unit": "ns/iter",
            "extra": "iterations: 5503\ncpu: 127516.88170089058 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 128303.0038489601,
            "unit": "ns/iter",
            "extra": "iterations: 5456\ncpu: 128303.70234604042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 81376.13100892592,
            "unit": "ns/iter",
            "extra": "iterations: 8633\ncpu: 81375.61681918295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 127950.57832208063,
            "unit": "ns/iter",
            "extra": "iterations: 5471\ncpu: 127951.27033449043 ns\nthreads: 1"
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
        "date": 1705774870856,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1492.7961507421883,
            "unit": "ns/iter",
            "extra": "iterations: 485756\ncpu: 1492.70086216125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 16500.50942030392,
            "unit": "ns/iter",
            "extra": "iterations: 51113\ncpu: 16499.74370512394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 34467.455996013676,
            "unit": "ns/iter",
            "extra": "iterations: 24066\ncpu: 34466.04753594282 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 53240.94104566758,
            "unit": "ns/iter",
            "extra": "iterations: 16640\ncpu: 53237.0733173077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 57022.0701999915,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 57018.77 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 70971.18384378347,
            "unit": "ns/iter",
            "extra": "iterations: 12342\ncpu: 70968.78139685628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 84723.80080148282,
            "unit": "ns/iter",
            "extra": "iterations: 10231\ncpu: 84719.00107516376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 97974.35698070592,
            "unit": "ns/iter",
            "extra": "iterations: 8810\ncpu: 97971.75936435875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 116285.86799894323,
            "unit": "ns/iter",
            "extra": "iterations: 7606\ncpu: 116280.48908756247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1187.9618718564068,
            "unit": "ns/iter",
            "extra": "iterations: 588699\ncpu: 1187.939337420312 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 951.2440293217194,
            "unit": "ns/iter",
            "extra": "iterations: 734883\ncpu: 951.2144110014787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 938.768786413964,
            "unit": "ns/iter",
            "extra": "iterations: 745765\ncpu: 938.724397095599 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 933.2743703715568,
            "unit": "ns/iter",
            "extra": "iterations: 753897\ncpu: 933.2505634058765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 1875.7513357341222,
            "unit": "ns/iter",
            "extra": "iterations: 372080\ncpu: 1875.6713609976352 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5241.962836374985,
            "unit": "ns/iter",
            "extra": "iterations: 152434\ncpu: 5241.854179513754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 25035.16983142298,
            "unit": "ns/iter",
            "extra": "iterations: 31914\ncpu: 25033.120260700627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 19891.186837702502,
            "unit": "ns/iter",
            "extra": "iterations: 41239\ncpu: 19890.162225078224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 19290.770032279546,
            "unit": "ns/iter",
            "extra": "iterations: 42132\ncpu: 19289.554258046184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 19452.240810760566,
            "unit": "ns/iter",
            "extra": "iterations: 41788\ncpu: 19451.62008232024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 65550.36707362204,
            "unit": "ns/iter",
            "extra": "iterations: 13515\ncpu: 65546.21531631514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 566634.8959999823,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 566619.2999999992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 568803.0143790225,
            "unit": "ns/iter",
            "extra": "iterations: 1530\ncpu: 568766.79738562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 567709.0637065166,
            "unit": "ns/iter",
            "extra": "iterations: 1554\ncpu: 567682.8828828826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 564228.6843484254,
            "unit": "ns/iter",
            "extra": "iterations: 1527\ncpu: 564205.5664702022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 323026.52020761743,
            "unit": "ns/iter",
            "extra": "iterations: 2697\ncpu: 323009.4920281791 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 565449.8208861087,
            "unit": "ns/iter",
            "extra": "iterations: 1580\ncpu: 565421.0759493667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2335120.878481149,
            "unit": "ns/iter",
            "extra": "iterations: 395\ncpu: 2335024.5569620263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1066710.8887614037,
            "unit": "ns/iter",
            "extra": "iterations: 872\ncpu: 1066681.8807339454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3227521.954545648,
            "unit": "ns/iter",
            "extra": "iterations: 286\ncpu: 3227408.3916083933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 7306.464123016639,
            "unit": "ns/iter",
            "extra": "iterations: 112830\ncpu: 7306.094123903203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 39526.133940059204,
            "unit": "ns/iter",
            "extra": "iterations: 20987\ncpu: 39525.04883975794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 31083.088929903628,
            "unit": "ns/iter",
            "extra": "iterations: 26549\ncpu: 31081.084033296866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 31087.92356640807,
            "unit": "ns/iter",
            "extra": "iterations: 27030\ncpu: 31085.390307066245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 31100.72172741698,
            "unit": "ns/iter",
            "extra": "iterations: 26722\ncpu: 31093.33507970951 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 80125.9980463298,
            "unit": "ns/iter",
            "extra": "iterations: 10749\ncpu: 80124.20690296782 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 602540.5200000477,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 602499.0999999957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 570989.108481304,
            "unit": "ns/iter",
            "extra": "iterations: 1521\ncpu: 570974.2274819214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 585321.1269001496,
            "unit": "ns/iter",
            "extra": "iterations: 1513\ncpu: 585294.9107732994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 582256.748827868,
            "unit": "ns/iter",
            "extra": "iterations: 1493\ncpu: 582220.8975217667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 340324.6987813987,
            "unit": "ns/iter",
            "extra": "iterations: 2626\ncpu: 340307.7303884235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 577548.7047872308,
            "unit": "ns/iter",
            "extra": "iterations: 1504\ncpu: 577510.0398936177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2480026.897097622,
            "unit": "ns/iter",
            "extra": "iterations: 379\ncpu: 2479881.7941952585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1100389.3266033337,
            "unit": "ns/iter",
            "extra": "iterations: 842\ncpu: 1100350.4750593787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5143.913560606778,
            "unit": "ns/iter",
            "extra": "iterations: 159661\ncpu: 5143.455195695871 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 25428.174399206924,
            "unit": "ns/iter",
            "extra": "iterations: 32374\ncpu: 25427.361462902325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 19893.972390835977,
            "unit": "ns/iter",
            "extra": "iterations: 40856\ncpu: 19892.84805169381 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 18702.303032357813,
            "unit": "ns/iter",
            "extra": "iterations: 44256\ncpu: 18701.78280911067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 18878.845182434645,
            "unit": "ns/iter",
            "extra": "iterations: 43632\ncpu: 18877.816740007223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 64984.74401017808,
            "unit": "ns/iter",
            "extra": "iterations: 13356\ncpu: 64981.41659179413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 587452.0749999874,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 587431.9999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 574791.8304521703,
            "unit": "ns/iter",
            "extra": "iterations: 1504\ncpu: 574768.816489364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 575388.9035598717,
            "unit": "ns/iter",
            "extra": "iterations: 1545\ncpu: 575347.5080906126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 568827.2328041929,
            "unit": "ns/iter",
            "extra": "iterations: 1512\ncpu: 568802.3809523807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 326640.8281133683,
            "unit": "ns/iter",
            "extra": "iterations: 2682\ncpu: 326628.2252050694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 559542.551811827,
            "unit": "ns/iter",
            "extra": "iterations: 1573\ncpu: 559506.9294342025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 490.19851119758954,
            "unit": "ns/iter",
            "extra": "iterations: 1426650\ncpu: 490.19023586724296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3008.11362904551,
            "unit": "ns/iter",
            "extra": "iterations: 239129\ncpu: 3008.001120733999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2420.176385946671,
            "unit": "ns/iter",
            "extra": "iterations: 300228\ncpu: 2419.9831461422655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2420.3834933819644,
            "unit": "ns/iter",
            "extra": "iterations: 300013\ncpu: 2420.240122928009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 1878.4591583057324,
            "unit": "ns/iter",
            "extra": "iterations: 371275\ncpu: 1878.429735371361 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 16872.974782378275,
            "unit": "ns/iter",
            "extra": "iterations: 41241\ncpu: 16871.411944424195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 30470.46783804003,
            "unit": "ns/iter",
            "extra": "iterations: 22993\ncpu: 30468.84704040366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 7139.324652618024,
            "unit": "ns/iter",
            "extra": "iterations: 97803\ncpu: 7138.883265339575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 7101.6869514101645,
            "unit": "ns/iter",
            "extra": "iterations: 98662\ncpu: 7101.486894650376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7145.818281206887,
            "unit": "ns/iter",
            "extra": "iterations: 97871\ncpu: 7145.596754912146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 14396.932192585507,
            "unit": "ns/iter",
            "extra": "iterations: 48623\ncpu: 14396.09855418232 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 13714.84028892564,
            "unit": "ns/iter",
            "extra": "iterations: 51086\ncpu: 13714.07626355554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5260.869216305597,
            "unit": "ns/iter",
            "extra": "iterations: 132960\ncpu: 5260.576113116705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 26762.209765744006,
            "unit": "ns/iter",
            "extra": "iterations: 26296\ncpu: 26761.41238211147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 21625.849464688683,
            "unit": "ns/iter",
            "extra": "iterations: 32411\ncpu: 21624.075159668097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 21360.26910360038,
            "unit": "ns/iter",
            "extra": "iterations: 32664\ncpu: 21359.3711731574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 21792.214062694096,
            "unit": "ns/iter",
            "extra": "iterations: 32028\ncpu: 21790.349069564072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 48622.331316501666,
            "unit": "ns/iter",
            "extra": "iterations: 14379\ncpu: 48621.19062521774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 160123.4680558644,
            "unit": "ns/iter",
            "extra": "iterations: 4367\ncpu: 160113.60201511357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 133839.55912745855,
            "unit": "ns/iter",
            "extra": "iterations: 5226\ncpu: 133834.40489858427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 132536.54019720134,
            "unit": "ns/iter",
            "extra": "iterations: 5274\ncpu: 132528.53621539837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 133832.21717462916,
            "unit": "ns/iter",
            "extra": "iterations: 5217\ncpu: 133828.79049262163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 82832.66835652647,
            "unit": "ns/iter",
            "extra": "iterations: 8482\ncpu: 82831.37231785088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 132786.07630978368,
            "unit": "ns/iter",
            "extra": "iterations: 5268\ncpu: 132776.67046317336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 5120.896764555752,
            "unit": "ns/iter",
            "extra": "iterations: 137230\ncpu: 5120.691539750813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 25798.687308444798,
            "unit": "ns/iter",
            "extra": "iterations: 27081\ncpu: 25796.048890365826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 20605.814881159225,
            "unit": "ns/iter",
            "extra": "iterations: 31261\ncpu: 20605.332522951794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 20394.76662885642,
            "unit": "ns/iter",
            "extra": "iterations: 34383\ncpu: 20393.55495448336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 21106.184177100702,
            "unit": "ns/iter",
            "extra": "iterations: 33066\ncpu: 21105.673501481888 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 46603.66082536386,
            "unit": "ns/iter",
            "extra": "iterations: 14951\ncpu: 46600.588589391424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 155492.02887606114,
            "unit": "ns/iter",
            "extra": "iterations: 4502\ncpu: 155487.25011106225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 129396.97653632255,
            "unit": "ns/iter",
            "extra": "iterations: 5370\ncpu: 129392.62569832569 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 128096.1562785746,
            "unit": "ns/iter",
            "extra": "iterations: 5471\ncpu: 128090.98885030262 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 129525.79131239928,
            "unit": "ns/iter",
            "extra": "iterations: 5410\ncpu: 129518.5397412212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 81821.61672879203,
            "unit": "ns/iter",
            "extra": "iterations: 8584\ncpu: 81816.09972041057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 128643.26435515634,
            "unit": "ns/iter",
            "extra": "iterations: 5451\ncpu: 128639.29554210375 ns\nthreads: 1"
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
        "date": 1705778431230,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1438.1498786257362,
            "unit": "ns/iter",
            "extra": "iterations: 484452\ncpu: 1438.1300933838647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 16365.501728145853,
            "unit": "ns/iter",
            "extra": "iterations: 49475\ncpu: 16365.475492673067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 35074.088107992764,
            "unit": "ns/iter",
            "extra": "iterations: 23335\ncpu: 35073.207628026576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 52437.12664728047,
            "unit": "ns/iter",
            "extra": "iterations: 16163\ncpu: 52435.41421765759 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 58164.616199997,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 58163.91999999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 72512.50432134491,
            "unit": "ns/iter",
            "extra": "iterations: 12149\ncpu: 72509.77858259945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 86152.21190857943,
            "unit": "ns/iter",
            "extra": "iterations: 9976\ncpu: 86148.45629510832 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 99142.41628281718,
            "unit": "ns/iter",
            "extra": "iterations: 8684\ncpu: 99140.66098572081 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 115199.55421201071,
            "unit": "ns/iter",
            "extra": "iterations: 7443\ncpu: 115193.6047292757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1196.6522914060324,
            "unit": "ns/iter",
            "extra": "iterations: 582459\ncpu: 1196.6279171581177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 950.725529472063,
            "unit": "ns/iter",
            "extra": "iterations: 733372\ncpu: 950.6838275800017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 938.5615944065037,
            "unit": "ns/iter",
            "extra": "iterations: 747162\ncpu: 938.5343473035292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 955.024204059176,
            "unit": "ns/iter",
            "extra": "iterations: 735042\ncpu: 955.0153596665218 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 1892.772555231364,
            "unit": "ns/iter",
            "extra": "iterations: 371211\ncpu: 1892.7383617403582 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5285.138594555112,
            "unit": "ns/iter",
            "extra": "iterations: 151283\ncpu: 5284.918992880894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 25726.52231615549,
            "unit": "ns/iter",
            "extra": "iterations: 32174\ncpu: 25726.216821035603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 20243.79232218473,
            "unit": "ns/iter",
            "extra": "iterations: 40871\ncpu: 20243.833035648724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 19600.788627759626,
            "unit": "ns/iter",
            "extra": "iterations: 41997\ncpu: 19600.347643879377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 20052.947118170297,
            "unit": "ns/iter",
            "extra": "iterations: 41432\ncpu: 20052.628403166585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 66221.0016995492,
            "unit": "ns/iter",
            "extra": "iterations: 13533\ncpu: 66219.10145570086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 561055.314999976,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 561050.2000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 562751.4983963909,
            "unit": "ns/iter",
            "extra": "iterations: 1559\ncpu: 562736.3053239253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 560797.1089493755,
            "unit": "ns/iter",
            "extra": "iterations: 1542\ncpu: 560791.3099870299 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 567210.9436804666,
            "unit": "ns/iter",
            "extra": "iterations: 1527\ncpu: 567207.4001309742 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 321764.10764659365,
            "unit": "ns/iter",
            "extra": "iterations: 2694\ncpu: 321757.1640683009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 569569.8934108674,
            "unit": "ns/iter",
            "extra": "iterations: 1548\ncpu: 569560.142118865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2356052.8934011683,
            "unit": "ns/iter",
            "extra": "iterations: 394\ncpu: 2356002.538071065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1067249.931713016,
            "unit": "ns/iter",
            "extra": "iterations: 864\ncpu: 1067236.2268518524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3256950.4558301726,
            "unit": "ns/iter",
            "extra": "iterations: 283\ncpu: 3256879.8586572376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 7445.254260081756,
            "unit": "ns/iter",
            "extra": "iterations: 110796\ncpu: 7445.180331419886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 39583.86009913819,
            "unit": "ns/iter",
            "extra": "iterations: 20779\ncpu: 39583.64213869762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 31412.52145364102,
            "unit": "ns/iter",
            "extra": "iterations: 26499\ncpu: 31411.815540209034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 32202.53217783202,
            "unit": "ns/iter",
            "extra": "iterations: 25732\ncpu: 32202.129644023193 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 32486.195034074608,
            "unit": "ns/iter",
            "extra": "iterations: 25534\ncpu: 32485.58392731257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 77499.38072613183,
            "unit": "ns/iter",
            "extra": "iterations: 11155\ncpu: 77499.51591214677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 602848.1360000342,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 602832.1000000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 601163.4261954576,
            "unit": "ns/iter",
            "extra": "iterations: 1443\ncpu: 601157.7962577951 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 590674.0566553472,
            "unit": "ns/iter",
            "extra": "iterations: 1465\ncpu: 590665.802047779 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 585439.6949495549,
            "unit": "ns/iter",
            "extra": "iterations: 1485\ncpu: 585428.215488218 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 335611.86656385486,
            "unit": "ns/iter",
            "extra": "iterations: 2593\ncpu: 335606.4789818742 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 577945.0191672128,
            "unit": "ns/iter",
            "extra": "iterations: 1513\ncpu: 577543.6219431595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2471388.3395721726,
            "unit": "ns/iter",
            "extra": "iterations: 374\ncpu: 2471250.534759345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1073362.3220930842,
            "unit": "ns/iter",
            "extra": "iterations: 860\ncpu: 1073315.232558142 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5286.903520932114,
            "unit": "ns/iter",
            "extra": "iterations: 151494\ncpu: 5286.878688264919 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 25657.352856877205,
            "unit": "ns/iter",
            "extra": "iterations: 32098\ncpu: 25656.882048725845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 20232.17884903075,
            "unit": "ns/iter",
            "extra": "iterations: 40783\ncpu: 20231.518034475175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 19300.852550877855,
            "unit": "ns/iter",
            "extra": "iterations: 42652\ncpu: 19299.725686954855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 19280.162517689754,
            "unit": "ns/iter",
            "extra": "iterations: 43103\ncpu: 19280.068672714162 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 63525.18290434056,
            "unit": "ns/iter",
            "extra": "iterations: 13559\ncpu: 63524.50770705823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 572821.154000053,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 572795.5000000051 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 582986.61889031,
            "unit": "ns/iter",
            "extra": "iterations: 1514\ncpu: 582977.6089828257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 565885.8836435885,
            "unit": "ns/iter",
            "extra": "iterations: 1504\ncpu: 565866.4228723388 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 564959.0731391631,
            "unit": "ns/iter",
            "extra": "iterations: 1545\ncpu: 564921.8122977329 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 329089.8378478782,
            "unit": "ns/iter",
            "extra": "iterations: 2695\ncpu: 329075.02782931406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 558768.2710882166,
            "unit": "ns/iter",
            "extra": "iterations: 1553\ncpu: 558748.2936252381 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 492.3526289004988,
            "unit": "ns/iter",
            "extra": "iterations: 1424645\ncpu: 492.319209346891 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3015.8279151563825,
            "unit": "ns/iter",
            "extra": "iterations: 233135\ncpu: 3015.70248997364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2360.3031403695977,
            "unit": "ns/iter",
            "extra": "iterations: 296239\ncpu: 2360.103159948555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2344.9547167658125,
            "unit": "ns/iter",
            "extra": "iterations: 297704\ncpu: 2344.835810066381 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 1889.102037567796,
            "unit": "ns/iter",
            "extra": "iterations: 370638\ncpu: 1889.0081427160865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 17215.669001446942,
            "unit": "ns/iter",
            "extra": "iterations: 40118\ncpu: 17214.876115459378 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 30625.59989180241,
            "unit": "ns/iter",
            "extra": "iterations: 24031\ncpu: 30623.386459156794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 7133.957153756462,
            "unit": "ns/iter",
            "extra": "iterations: 98305\ncpu: 7133.7042876760825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 7414.910984909334,
            "unit": "ns/iter",
            "extra": "iterations: 94557\ncpu: 7414.857704876458 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7473.698190595996,
            "unit": "ns/iter",
            "extra": "iterations: 93622\ncpu: 7473.156950289378 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 14695.635805541788,
            "unit": "ns/iter",
            "extra": "iterations: 48216\ncpu: 14695.036917205929 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 14284.974676272655,
            "unit": "ns/iter",
            "extra": "iterations: 48729\ncpu: 14284.134704180346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5318.017591971205,
            "unit": "ns/iter",
            "extra": "iterations: 132731\ncpu: 5317.804431519397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 27086.965021931726,
            "unit": "ns/iter",
            "extra": "iterations: 25759\ncpu: 27086.078652121476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 21796.01366721179,
            "unit": "ns/iter",
            "extra": "iterations: 31828\ncpu: 21794.715344979195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 21247.480205563654,
            "unit": "ns/iter",
            "extra": "iterations: 33469\ncpu: 21246.91804356287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 21576.003985650594,
            "unit": "ns/iter",
            "extra": "iterations: 32617\ncpu: 21575.690590796446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 49191.66365879419,
            "unit": "ns/iter",
            "extra": "iterations: 14185\ncpu: 49191.74480084611 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 159422.84226123034,
            "unit": "ns/iter",
            "extra": "iterations: 4387\ncpu: 159421.51812172378 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 134230.1245746738,
            "unit": "ns/iter",
            "extra": "iterations: 5290\ncpu: 134229.14933837412 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 133099.0922988684,
            "unit": "ns/iter",
            "extra": "iterations: 5233\ncpu: 133096.8660424235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 133743.9243088712,
            "unit": "ns/iter",
            "extra": "iterations: 5245\ncpu: 133744.15633937196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 82623.18857822726,
            "unit": "ns/iter",
            "extra": "iterations: 8405\ncpu: 82619.26234384274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 132199.15493245295,
            "unit": "ns/iter",
            "extra": "iterations: 4886\ncpu: 132190.053213262 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 5049.9656489920435,
            "unit": "ns/iter",
            "extra": "iterations: 138977\ncpu: 5049.9744562049655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 25782.751209247257,
            "unit": "ns/iter",
            "extra": "iterations: 27083\ncpu: 25782.221319646884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 20698.583582841904,
            "unit": "ns/iter",
            "extra": "iterations: 33733\ncpu: 20698.440696054036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 20543.82925392616,
            "unit": "ns/iter",
            "extra": "iterations: 33951\ncpu: 20543.026714971544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 20685.11111438863,
            "unit": "ns/iter",
            "extra": "iterations: 33902\ncpu: 20684.835702908225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 47171.25277984085,
            "unit": "ns/iter",
            "extra": "iterations: 14839\ncpu: 47170.981872093515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 155549.70508549034,
            "unit": "ns/iter",
            "extra": "iterations: 4503\ncpu: 155548.8119031772 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 130322.4420896163,
            "unit": "ns/iter",
            "extra": "iterations: 5379\ncpu: 130315.05856107085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 130209.9616094617,
            "unit": "ns/iter",
            "extra": "iterations: 5418\ncpu: 130206.86600221436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 130611.67693461967,
            "unit": "ns/iter",
            "extra": "iterations: 5324\ncpu: 130606.98722764746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 81802.66148450988,
            "unit": "ns/iter",
            "extra": "iterations: 8555\ncpu: 81799.02980712966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 127093.28672341343,
            "unit": "ns/iter",
            "extra": "iterations: 5521\ncpu: 127089.94747328442 ns\nthreads: 1"
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
        "date": 1705953591890,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1441.7567902920528,
            "unit": "ns/iter",
            "extra": "iterations: 483558\ncpu: 1441.7155749672222 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 16142.407556977852,
            "unit": "ns/iter",
            "extra": "iterations: 50020\ncpu: 16142.031187524992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 34411.7727063767,
            "unit": "ns/iter",
            "extra": "iterations: 23925\ncpu: 34410.60815047024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 50986.170862770094,
            "unit": "ns/iter",
            "extra": "iterations: 16563\ncpu: 50985.44345831071 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 56349.29670000019,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 56347.859999999986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 70797.2265782874,
            "unit": "ns/iter",
            "extra": "iterations: 12371\ncpu: 70795.54603508204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 83629.20697697517,
            "unit": "ns/iter",
            "extra": "iterations: 10291\ncpu: 83627.32484695369 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 97572.81421445744,
            "unit": "ns/iter",
            "extra": "iterations: 8822\ncpu: 97569.4173656767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 114061.52621967188,
            "unit": "ns/iter",
            "extra": "iterations: 7666\ncpu: 114059.19645186544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1191.113936032685,
            "unit": "ns/iter",
            "extra": "iterations: 584205\ncpu: 1191.0771047834253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 946.5914590168638,
            "unit": "ns/iter",
            "extra": "iterations: 737620\ncpu: 946.5581193568511 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 926.9089589869745,
            "unit": "ns/iter",
            "extra": "iterations: 755956\ncpu: 926.8785484869493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 942.5743703840222,
            "unit": "ns/iter",
            "extra": "iterations: 745653\ncpu: 942.5641685878031 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 1885.6522491348605,
            "unit": "ns/iter",
            "extra": "iterations: 371654\ncpu: 1885.5922443993604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5263.116865100399,
            "unit": "ns/iter",
            "extra": "iterations: 153536\ncpu: 5263.06012922051 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 25465.289236973364,
            "unit": "ns/iter",
            "extra": "iterations: 32240\ncpu: 25464.57816377172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 20228.999601750376,
            "unit": "ns/iter",
            "extra": "iterations: 40176\ncpu: 20228.920250896066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 19508.510750361052,
            "unit": "ns/iter",
            "extra": "iterations: 41580\ncpu: 19507.22943722942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 19673.280041847804,
            "unit": "ns/iter",
            "extra": "iterations: 41101\ncpu: 19672.818179606256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 66184.24006500286,
            "unit": "ns/iter",
            "extra": "iterations: 13538\ncpu: 66181.90279214052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 563133.6349999856,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 563126.3000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 560086.1565329758,
            "unit": "ns/iter",
            "extra": "iterations: 1546\ncpu: 560067.5291073736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 545411.8988693317,
            "unit": "ns/iter",
            "extra": "iterations: 1592\ncpu: 545399.3090452271 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 550136.636762868,
            "unit": "ns/iter",
            "extra": "iterations: 1594\ncpu: 550121.5809284826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 324383.88589134935,
            "unit": "ns/iter",
            "extra": "iterations: 2743\ncpu: 324372.9493255563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 557896.4146964379,
            "unit": "ns/iter",
            "extra": "iterations: 1565\ncpu: 557876.1022364232 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2338414.43718601,
            "unit": "ns/iter",
            "extra": "iterations: 398\ncpu: 2338314.824120609 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1047334.7760181319,
            "unit": "ns/iter",
            "extra": "iterations: 884\ncpu: 1047277.375565608 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3248078.7157893293,
            "unit": "ns/iter",
            "extra": "iterations: 285\ncpu: 3247915.789473684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 7567.62802985205,
            "unit": "ns/iter",
            "extra": "iterations: 112423\ncpu: 7567.382119317227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 39402.30517997033,
            "unit": "ns/iter",
            "extra": "iterations: 21004\ncpu: 39400.714149685766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 31220.594362695854,
            "unit": "ns/iter",
            "extra": "iterations: 26573\ncpu: 31220.18590298421 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 30692.940843088138,
            "unit": "ns/iter",
            "extra": "iterations: 26996\ncpu: 30692.23959105055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 32732.16995969072,
            "unit": "ns/iter",
            "extra": "iterations: 25306\ncpu: 32730.866197739648 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 78814.79362942331,
            "unit": "ns/iter",
            "extra": "iterations: 11145\ncpu: 78811.87976671183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 597306.3750000164,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 597295.2999999989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 585959.5274949203,
            "unit": "ns/iter",
            "extra": "iterations: 1473\ncpu: 585933.129667344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 583146.723304221,
            "unit": "ns/iter",
            "extra": "iterations: 1489\ncpu: 583116.1182001331 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 593486.5887977538,
            "unit": "ns/iter",
            "extra": "iterations: 1464\ncpu: 593465.9836065539 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 334350.571154585,
            "unit": "ns/iter",
            "extra": "iterations: 2607\ncpu: 334342.30916762596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 576765.285430439,
            "unit": "ns/iter",
            "extra": "iterations: 1510\ncpu: 576741.5231788054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2481672.112299264,
            "unit": "ns/iter",
            "extra": "iterations: 374\ncpu: 2481585.2941176337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1116881.7971013975,
            "unit": "ns/iter",
            "extra": "iterations: 828\ncpu: 1116822.946859908 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5204.755339265127,
            "unit": "ns/iter",
            "extra": "iterations: 154422\ncpu: 5204.698812345381 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 25122.032585502337,
            "unit": "ns/iter",
            "extra": "iterations: 32806\ncpu: 25121.63323782245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 19716.184819505947,
            "unit": "ns/iter",
            "extra": "iterations: 41830\ncpu: 19715.610805641812 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 18820.664826392254,
            "unit": "ns/iter",
            "extra": "iterations: 43834\ncpu: 18819.97992425961 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 19027.16313849242,
            "unit": "ns/iter",
            "extra": "iterations: 43129\ncpu: 19026.877507013945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 62862.25732898804,
            "unit": "ns/iter",
            "extra": "iterations: 13815\ncpu: 62859.10242490032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 568611.7390000618,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 568588.5999999982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 571789.2387475193,
            "unit": "ns/iter",
            "extra": "iterations: 1533\ncpu: 571766.0795825162 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 563043.7464424265,
            "unit": "ns/iter",
            "extra": "iterations: 1546\ncpu: 563024.9676584721 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 574209.6293385688,
            "unit": "ns/iter",
            "extra": "iterations: 1527\ncpu: 574194.5645055635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 323371.2683289866,
            "unit": "ns/iter",
            "extra": "iterations: 2687\ncpu: 323359.9181242997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 560352.5750798805,
            "unit": "ns/iter",
            "extra": "iterations: 1565\ncpu: 560325.3035143763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 489.500432644712,
            "unit": "ns/iter",
            "extra": "iterations: 1431891\ncpu: 489.47650344893464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 2923.3574780539298,
            "unit": "ns/iter",
            "extra": "iterations: 238879\ncpu: 2923.2435668267176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2256.454726390671,
            "unit": "ns/iter",
            "extra": "iterations: 310004\ncpu: 2256.3589502070863 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2337.6890954603928,
            "unit": "ns/iter",
            "extra": "iterations: 299600\ncpu: 2337.581775700929 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 1871.1354153801474,
            "unit": "ns/iter",
            "extra": "iterations: 364353\ncpu: 1871.0939665653825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 17214.49706260074,
            "unit": "ns/iter",
            "extra": "iterations: 40512\ncpu: 17214.062499999993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 30614.6858968811,
            "unit": "ns/iter",
            "extra": "iterations: 23158\ncpu: 30613.623801709906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 7202.420222863856,
            "unit": "ns/iter",
            "extra": "iterations: 96920\ncpu: 7202.341106066842 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 7193.345731469824,
            "unit": "ns/iter",
            "extra": "iterations: 97434\ncpu: 7193.170761746401 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7222.760114978939,
            "unit": "ns/iter",
            "extra": "iterations: 96713\ncpu: 7222.564701746297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 14470.919307940945,
            "unit": "ns/iter",
            "extra": "iterations: 48493\ncpu: 14470.40191367827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 13925.734461702114,
            "unit": "ns/iter",
            "extra": "iterations: 50279\ncpu: 13925.459933570759 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5318.134488059115,
            "unit": "ns/iter",
            "extra": "iterations: 131402\ncpu: 5318.025600827966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 26551.976755708318,
            "unit": "ns/iter",
            "extra": "iterations: 26243\ncpu: 26551.693785009345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 21157.69235696028,
            "unit": "ns/iter",
            "extra": "iterations: 32788\ncpu: 21157.37464926195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 20948.33588083737,
            "unit": "ns/iter",
            "extra": "iterations: 33366\ncpu: 20947.88107654468 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 21492.811634181526,
            "unit": "ns/iter",
            "extra": "iterations: 32628\ncpu: 21492.576927792157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 49019.383382334076,
            "unit": "ns/iter",
            "extra": "iterations: 14286\ncpu: 49018.84362312762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 156641.09188463277,
            "unit": "ns/iter",
            "extra": "iterations: 4473\ncpu: 156638.49765258146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 131961.72849309669,
            "unit": "ns/iter",
            "extra": "iterations: 5289\ncpu: 131958.30969937448 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 130953.23485553867,
            "unit": "ns/iter",
            "extra": "iterations: 5365\ncpu: 130950.34482758623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 131704.71101091517,
            "unit": "ns/iter",
            "extra": "iterations: 5322\ncpu: 131699.71815107012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 82314.0491435336,
            "unit": "ns/iter",
            "extra": "iterations: 8465\ncpu: 82312.97105729509 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 131067.93670413758,
            "unit": "ns/iter",
            "extra": "iterations: 5340\ncpu: 131063.97003745273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 5069.958562214717,
            "unit": "ns/iter",
            "extra": "iterations: 137990\ncpu: 5069.834045945367 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 26227.99793814429,
            "unit": "ns/iter",
            "extra": "iterations: 26675\ncpu: 26227.651358950247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 20938.83739107138,
            "unit": "ns/iter",
            "extra": "iterations: 33393\ncpu: 20938.247536908653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 20476.554838138454,
            "unit": "ns/iter",
            "extra": "iterations: 33918\ncpu: 20476.230909841328 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 20603.083055091003,
            "unit": "ns/iter",
            "extra": "iterations: 33544\ncpu: 20602.051037443365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 46651.46645367278,
            "unit": "ns/iter",
            "extra": "iterations: 15024\ncpu: 46650.96512247045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 154509.7874219139,
            "unit": "ns/iter",
            "extra": "iterations: 4643\ncpu: 154497.50161533596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 129127.26735597644,
            "unit": "ns/iter",
            "extra": "iterations: 5416\ncpu: 129125.16617429712 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 125600.06301615412,
            "unit": "ns/iter",
            "extra": "iterations: 5570\ncpu: 125595.33213644601 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 127289.36111111648,
            "unit": "ns/iter",
            "extra": "iterations: 5508\ncpu: 127286.746550472 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 80784.36301764256,
            "unit": "ns/iter",
            "extra": "iterations: 8669\ncpu: 80782.68543084488 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 126201.06830845091,
            "unit": "ns/iter",
            "extra": "iterations: 5563\ncpu: 126198.22038468666 ns\nthreads: 1"
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
        "date": 1705955030932,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1359.4983769878907,
            "unit": "ns/iter",
            "extra": "iterations: 489830\ncpu: 1359.416940571219 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 16414.969874126196,
            "unit": "ns/iter",
            "extra": "iterations: 50289\ncpu: 16414.394798067173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 34736.86183212641,
            "unit": "ns/iter",
            "extra": "iterations: 23732\ncpu: 34735.63964267655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 51432.841687198284,
            "unit": "ns/iter",
            "extra": "iterations: 16240\ncpu: 51430.83128078817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 56735.13389999698,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 56732.25000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 71240.53595946285,
            "unit": "ns/iter",
            "extra": "iterations: 12236\ncpu: 71237.17718208568 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 85396.33291040114,
            "unit": "ns/iter",
            "extra": "iterations: 10246\ncpu: 85391.30392348226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 98352.33068722309,
            "unit": "ns/iter",
            "extra": "iterations: 8818\ncpu: 98349.07008391918 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 115210.99078279329,
            "unit": "ns/iter",
            "extra": "iterations: 7486\ncpu: 115206.23831151484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1195.4753653212038,
            "unit": "ns/iter",
            "extra": "iterations: 584075\ncpu: 1195.438941916706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 980.9949134289008,
            "unit": "ns/iter",
            "extra": "iterations: 683368\ncpu: 980.9702824832317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 911.0153006566799,
            "unit": "ns/iter",
            "extra": "iterations: 753301\ncpu: 910.9665326343658 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 917.5955603172075,
            "unit": "ns/iter",
            "extra": "iterations: 763523\ncpu: 917.5621428562072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 1866.4313269146146,
            "unit": "ns/iter",
            "extra": "iterations: 376392\ncpu: 1866.3645879827397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5248.42633363176,
            "unit": "ns/iter",
            "extra": "iterations: 151616\ncpu: 5248.203355846353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 24667.544122072683,
            "unit": "ns/iter",
            "extra": "iterations: 33226\ncpu: 24666.547282248892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 22031.13166897304,
            "unit": "ns/iter",
            "extra": "iterations: 41217\ncpu: 22030.230244801915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 21176.261784313083,
            "unit": "ns/iter",
            "extra": "iterations: 38547\ncpu: 21175.577865981835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 20440.134612368845,
            "unit": "ns/iter",
            "extra": "iterations: 38258\ncpu: 20438.93303361383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 66153.55608556485,
            "unit": "ns/iter",
            "extra": "iterations: 13417\ncpu: 66147.31311023326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 577548.8010000344,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 577505.8000000009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 584106.175250839,
            "unit": "ns/iter",
            "extra": "iterations: 1495\ncpu: 584078.7290969914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 564965.4701017549,
            "unit": "ns/iter",
            "extra": "iterations: 1572\ncpu: 564938.4860050902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 566431.5077441343,
            "unit": "ns/iter",
            "extra": "iterations: 1485\ncpu: 566407.5420875426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 326454.12871661363,
            "unit": "ns/iter",
            "extra": "iterations: 2657\ncpu: 326437.5987956343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 561805.981715038,
            "unit": "ns/iter",
            "extra": "iterations: 1586\ncpu: 561780.3278688515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2362471.4707376733,
            "unit": "ns/iter",
            "extra": "iterations: 393\ncpu: 2362403.307888046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1075133.9409722504,
            "unit": "ns/iter",
            "extra": "iterations: 864\ncpu: 1075063.541666668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3235642.3916086,
            "unit": "ns/iter",
            "extra": "iterations: 286\ncpu: 3235489.1608391623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 7372.354492483574,
            "unit": "ns/iter",
            "extra": "iterations: 115159\ncpu: 7372.111602219537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 39368.46936257247,
            "unit": "ns/iter",
            "extra": "iterations: 21069\ncpu: 39367.2504627652 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 31501.794245527355,
            "unit": "ns/iter",
            "extra": "iterations: 26449\ncpu: 31500.63140383386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 30540.697330579562,
            "unit": "ns/iter",
            "extra": "iterations: 27122\ncpu: 30539.049480126858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 31073.900709221874,
            "unit": "ns/iter",
            "extra": "iterations: 26649\ncpu: 31072.32541558802 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 76246.79721253828,
            "unit": "ns/iter",
            "extra": "iterations: 11480\ncpu: 76243.20557491311 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 584078.393000027,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 584051.1999999975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 587960.052736998,
            "unit": "ns/iter",
            "extra": "iterations: 1498\ncpu: 587933.9118825088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 597925.0068492872,
            "unit": "ns/iter",
            "extra": "iterations: 1460\ncpu: 597887.6027397277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 592044.7685500535,
            "unit": "ns/iter",
            "extra": "iterations: 1469\ncpu: 591992.5799863843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 334616.94826254534,
            "unit": "ns/iter",
            "extra": "iterations: 2590\ncpu: 334592.04633204604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 581658.9064171212,
            "unit": "ns/iter",
            "extra": "iterations: 1496\ncpu: 581616.5106951887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2484009.868983978,
            "unit": "ns/iter",
            "extra": "iterations: 374\ncpu: 2483802.139037431 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1093285.8350876777,
            "unit": "ns/iter",
            "extra": "iterations: 855\ncpu: 1093212.0467836244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5199.9521670448485,
            "unit": "ns/iter",
            "extra": "iterations: 153827\ncpu: 5199.5624955306985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 25335.790003705566,
            "unit": "ns/iter",
            "extra": "iterations: 32372\ncpu: 25334.783145928657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 19574.27195624299,
            "unit": "ns/iter",
            "extra": "iterations: 41503\ncpu: 19572.132135026503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 18846.440495374147,
            "unit": "ns/iter",
            "extra": "iterations: 43442\ncpu: 18845.635560057082 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 18657.66985843072,
            "unit": "ns/iter",
            "extra": "iterations: 43654\ncpu: 18656.93865396071 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 66182.60544011745,
            "unit": "ns/iter",
            "extra": "iterations: 13235\ncpu: 66179.68265961445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 585661.0089999776,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 585636.1000000022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 588655.3585155739,
            "unit": "ns/iter",
            "extra": "iterations: 1509\ncpu: 588622.4652087482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 570195.7342747453,
            "unit": "ns/iter",
            "extra": "iterations: 1558\ncpu: 570174.7753530133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 573491.9604666492,
            "unit": "ns/iter",
            "extra": "iterations: 1543\ncpu: 573459.8833441335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 328519.15127624833,
            "unit": "ns/iter",
            "extra": "iterations: 2664\ncpu: 328504.1666666672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 560543.0881979514,
            "unit": "ns/iter",
            "extra": "iterations: 1576\ncpu: 560522.652284266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 492.5850367397372,
            "unit": "ns/iter",
            "extra": "iterations: 1419851\ncpu: 492.56872728194804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 2964.752231317314,
            "unit": "ns/iter",
            "extra": "iterations: 235175\ncpu: 2964.66206016796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2387.0223718789707,
            "unit": "ns/iter",
            "extra": "iterations: 313161\ncpu: 2386.923020427189 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2407.055345972899,
            "unit": "ns/iter",
            "extra": "iterations: 289994\ncpu: 2406.909798133745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 1873.5652736746852,
            "unit": "ns/iter",
            "extra": "iterations: 372340\ncpu: 1873.428318203787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 17377.439205955226,
            "unit": "ns/iter",
            "extra": "iterations: 41106\ncpu: 17375.80401887779 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 30373.112624725374,
            "unit": "ns/iter",
            "extra": "iterations: 23050\ncpu: 30371.27548806899 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 7181.525925089286,
            "unit": "ns/iter",
            "extra": "iterations: 97396\ncpu: 7180.891412378355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 7175.822269170809,
            "unit": "ns/iter",
            "extra": "iterations: 97507\ncpu: 7175.4427887229685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7175.21362137462,
            "unit": "ns/iter",
            "extra": "iterations: 97949\ncpu: 7174.907349743115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 14425.161782549587,
            "unit": "ns/iter",
            "extra": "iterations: 48627\ncpu: 14424.330104674578 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 13703.146548703324,
            "unit": "ns/iter",
            "extra": "iterations: 48489\ncpu: 13702.049949473214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5221.282951566571,
            "unit": "ns/iter",
            "extra": "iterations: 134288\ncpu: 5220.832836887864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 26458.29223916407,
            "unit": "ns/iter",
            "extra": "iterations: 26492\ncpu: 26456.564245809714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 21166.554901780233,
            "unit": "ns/iter",
            "extra": "iterations: 32631\ncpu: 21164.248720541797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 21020.79675475915,
            "unit": "ns/iter",
            "extra": "iterations: 33526\ncpu: 21018.871920300306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 21536.445912649135,
            "unit": "ns/iter",
            "extra": "iterations: 32466\ncpu: 21534.11569026057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 49015.35577798034,
            "unit": "ns/iter",
            "extra": "iterations: 14287\ncpu: 49011.7939385456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 159220.83188272474,
            "unit": "ns/iter",
            "extra": "iterations: 4366\ncpu: 159205.88639486753 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 133419.82572139488,
            "unit": "ns/iter",
            "extra": "iterations: 5233\ncpu: 133410.0133766488 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 132520.7526902043,
            "unit": "ns/iter",
            "extra": "iterations: 5297\ncpu: 132516.59429865924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 132660.44163497133,
            "unit": "ns/iter",
            "extra": "iterations: 5260\ncpu: 132657.94676805887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 83056.75675675804,
            "unit": "ns/iter",
            "extra": "iterations: 8510\ncpu: 83051.26909518192 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 130461.14758364408,
            "unit": "ns/iter",
            "extra": "iterations: 5380\ncpu: 130449.14498141235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 4957.303424443916,
            "unit": "ns/iter",
            "extra": "iterations: 140928\ncpu: 4956.94255222524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 25549.113367418988,
            "unit": "ns/iter",
            "extra": "iterations: 27380\ncpu: 25547.34842951051 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 20480.193994505804,
            "unit": "ns/iter",
            "extra": "iterations: 34202\ncpu: 20479.23805625404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 20251.924018756745,
            "unit": "ns/iter",
            "extra": "iterations: 34548\ncpu: 20250.926247539704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 20738.307210586227,
            "unit": "ns/iter",
            "extra": "iterations: 33853\ncpu: 20737.62443505754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 46593.88952596856,
            "unit": "ns/iter",
            "extra": "iterations: 14999\ncpu: 46592.98619907997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 154907.00200533165,
            "unit": "ns/iter",
            "extra": "iterations: 4488\ncpu: 154901.35918003335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 128165.51410773027,
            "unit": "ns/iter",
            "extra": "iterations: 5458\ncpu: 128158.99596922024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 127045.11151470218,
            "unit": "ns/iter",
            "extra": "iterations: 5506\ncpu: 127035.52488194739 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 127761.77146509314,
            "unit": "ns/iter",
            "extra": "iterations: 5474\ncpu: 127756.46693460006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 81061.4365839689,
            "unit": "ns/iter",
            "extra": "iterations: 8665\ncpu: 81058.85747259129 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 127126.078260876,
            "unit": "ns/iter",
            "extra": "iterations: 5520\ncpu: 127121.28623188272 ns\nthreads: 1"
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
        "date": 1705957037527,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1412.2164098962019,
            "unit": "ns/iter",
            "extra": "iterations: 498175\ncpu: 1412.1786520800927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 16211.66991856963,
            "unit": "ns/iter",
            "extra": "iterations: 50842\ncpu: 16211.022383069114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 34699.07628008501,
            "unit": "ns/iter",
            "extra": "iterations: 23807\ncpu: 34697.20670391061 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 51059.29062556548,
            "unit": "ns/iter",
            "extra": "iterations: 16609\ncpu: 51055.95761334215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 56878.56450000482,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 56874.58999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 71221.14729248297,
            "unit": "ns/iter",
            "extra": "iterations: 12336\ncpu: 71218.73378728925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 84429.8783151263,
            "unit": "ns/iter",
            "extra": "iterations: 10256\ncpu: 84426.62831513262 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 98948.79703251003,
            "unit": "ns/iter",
            "extra": "iterations: 8829\ncpu: 98944.50107599952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 113519.19490957817,
            "unit": "ns/iter",
            "extra": "iterations: 7465\ncpu: 113516.14199598138 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1179.661323256918,
            "unit": "ns/iter",
            "extra": "iterations: 593067\ncpu: 1179.6488423736278 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 943.5848240627291,
            "unit": "ns/iter",
            "extra": "iterations: 740633\ncpu: 943.5607109054012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 926.4888172863134,
            "unit": "ns/iter",
            "extra": "iterations: 760370\ncpu: 926.4586977392585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 928.6363607366438,
            "unit": "ns/iter",
            "extra": "iterations: 752416\ncpu: 928.604787776975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 1875.596037550189,
            "unit": "ns/iter",
            "extra": "iterations: 376030\ncpu: 1875.5046139935662 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5105.87021632774,
            "unit": "ns/iter",
            "extra": "iterations: 153517\ncpu: 5105.633252343395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 25455.570800051137,
            "unit": "ns/iter",
            "extra": "iterations: 32048\ncpu: 25454.892661008464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 19875.786317772465,
            "unit": "ns/iter",
            "extra": "iterations: 41426\ncpu: 19875.423646984982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 19474.23610028192,
            "unit": "ns/iter",
            "extra": "iterations: 42321\ncpu: 19472.70385860452 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 19565.675598359074,
            "unit": "ns/iter",
            "extra": "iterations: 41948\ncpu: 19565.421474206185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 65240.809057891354,
            "unit": "ns/iter",
            "extra": "iterations: 13491\ncpu: 65239.58935586667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 560569.4820000053,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 560538.8999999973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 559139.7487080191,
            "unit": "ns/iter",
            "extra": "iterations: 1548\ncpu: 559129.9741602055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 555463.6815824027,
            "unit": "ns/iter",
            "extra": "iterations: 1542\ncpu: 555456.420233462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 563804.1920830641,
            "unit": "ns/iter",
            "extra": "iterations: 1541\ncpu: 563328.6826735886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 325180.01813472365,
            "unit": "ns/iter",
            "extra": "iterations: 2702\ncpu: 325162.02812731377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 557495.0996784519,
            "unit": "ns/iter",
            "extra": "iterations: 1555\ncpu: 557487.9742765272 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2341922.365000073,
            "unit": "ns/iter",
            "extra": "iterations: 400\ncpu: 2341844.249999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1056083.3195875587,
            "unit": "ns/iter",
            "extra": "iterations: 873\ncpu: 1056057.3883161535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3233069.4790210566,
            "unit": "ns/iter",
            "extra": "iterations: 286\ncpu: 3232962.237762237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 7287.380732227073,
            "unit": "ns/iter",
            "extra": "iterations: 114855\ncpu: 7287.390187627865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 39146.09460815057,
            "unit": "ns/iter",
            "extra": "iterations: 20939\ncpu: 39144.7824633458 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 31175.37871091496,
            "unit": "ns/iter",
            "extra": "iterations: 26577\ncpu: 31174.662301990564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 30738.148895435133,
            "unit": "ns/iter",
            "extra": "iterations: 27160\ncpu: 30737.437407952755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 30751.517161122265,
            "unit": "ns/iter",
            "extra": "iterations: 27067\ncpu: 30750.031403554083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 76929.28885964584,
            "unit": "ns/iter",
            "extra": "iterations: 11400\ncpu: 76926.89473684237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 606455.1309999615,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 606438.6999999982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 601815.8204419618,
            "unit": "ns/iter",
            "extra": "iterations: 1448\ncpu: 601805.4558011084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 594456.6241379138,
            "unit": "ns/iter",
            "extra": "iterations: 1450\ncpu: 594442.551724135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 593065.4464163849,
            "unit": "ns/iter",
            "extra": "iterations: 1465\ncpu: 593055.7679180885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 334297.0539915207,
            "unit": "ns/iter",
            "extra": "iterations: 2593\ncpu: 334288.35325877264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 585117.983243939,
            "unit": "ns/iter",
            "extra": "iterations: 1492\ncpu: 585100.4691689016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2498667.1935484917,
            "unit": "ns/iter",
            "extra": "iterations: 372\ncpu: 2498578.494623642 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1092695.4373523605,
            "unit": "ns/iter",
            "extra": "iterations: 846\ncpu: 1092648.8179669064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5119.282695015543,
            "unit": "ns/iter",
            "extra": "iterations: 157654\ncpu: 5119.237697743142 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 24589.5126529108,
            "unit": "ns/iter",
            "extra": "iterations: 32127\ncpu: 24588.956329566932 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 18882.410405290877,
            "unit": "ns/iter",
            "extra": "iterations: 43401\ncpu: 18882.129444022048 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 18139.38392480201,
            "unit": "ns/iter",
            "extra": "iterations: 45001\ncpu: 18139.030243772333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 18331.781699640796,
            "unit": "ns/iter",
            "extra": "iterations: 44480\ncpu: 18331.506294963954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 63442.02610908641,
            "unit": "ns/iter",
            "extra": "iterations: 13750\ncpu: 63439.84727272724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 581323.5480000003,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 581310.9999999995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 581791.3007968005,
            "unit": "ns/iter",
            "extra": "iterations: 1506\ncpu: 581766.069057107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 575435.8081471776,
            "unit": "ns/iter",
            "extra": "iterations: 1522\ncpu: 575420.7621550589 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 579318.8701126322,
            "unit": "ns/iter",
            "extra": "iterations: 1509\ncpu: 579310.1391650087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 328381.36089089065,
            "unit": "ns/iter",
            "extra": "iterations: 2649\ncpu: 328373.5749339374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 567356.2165354742,
            "unit": "ns/iter",
            "extra": "iterations: 1524\ncpu: 567339.8950131241 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 486.3948679735305,
            "unit": "ns/iter",
            "extra": "iterations: 1437288\ncpu: 486.3799739509396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 2988.289932113261,
            "unit": "ns/iter",
            "extra": "iterations: 236276\ncpu: 2988.2036262676015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2326.692806458404,
            "unit": "ns/iter",
            "extra": "iterations: 300742\ncpu: 2326.6663784905395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2412.1319988855244,
            "unit": "ns/iter",
            "extra": "iterations: 290707\ncpu: 2412.08330036774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 1863.171103815749,
            "unit": "ns/iter",
            "extra": "iterations: 375579\ncpu: 1863.0770090979454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 17309.87512927358,
            "unit": "ns/iter",
            "extra": "iterations: 41579\ncpu: 17309.32441857663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 30159.12390364707,
            "unit": "ns/iter",
            "extra": "iterations: 23373\ncpu: 30158.357934368712 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 7107.450302209499,
            "unit": "ns/iter",
            "extra": "iterations: 98938\ncpu: 7107.385433301572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 7055.861467751201,
            "unit": "ns/iter",
            "extra": "iterations: 98995\ncpu: 7055.5442194049865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7078.210523124293,
            "unit": "ns/iter",
            "extra": "iterations: 98963\ncpu: 7078.093833048744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 13747.223122857951,
            "unit": "ns/iter",
            "extra": "iterations: 51075\ncpu: 13746.92119432203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 13601.618045697567,
            "unit": "ns/iter",
            "extra": "iterations: 51425\ncpu: 13601.269810403375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5269.628450488078,
            "unit": "ns/iter",
            "extra": "iterations: 133242\ncpu: 5269.580912925339 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 26301.177572942743,
            "unit": "ns/iter",
            "extra": "iterations: 26254\ncpu: 26300.399939056828 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 21269.422111919048,
            "unit": "ns/iter",
            "extra": "iterations: 33041\ncpu: 21268.209194636896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 21015.940705855297,
            "unit": "ns/iter",
            "extra": "iterations: 33123\ncpu: 21015.025812879147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 21571.182930591323,
            "unit": "ns/iter",
            "extra": "iterations: 32444\ncpu: 21570.629392183484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 48776.442563817734,
            "unit": "ns/iter",
            "extra": "iterations: 14416\ncpu: 48773.751387347256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 158611.54694997467,
            "unit": "ns/iter",
            "extra": "iterations: 4377\ncpu: 158608.88736577475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 132548.77517032734,
            "unit": "ns/iter",
            "extra": "iterations: 5284\ncpu: 132543.09235427665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 131640.5231464024,
            "unit": "ns/iter",
            "extra": "iterations: 5314\ncpu: 131640.7414377131 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 132424.85259566683,
            "unit": "ns/iter",
            "extra": "iterations: 5278\ncpu: 132416.93823417916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 82218.71205540159,
            "unit": "ns/iter",
            "extra": "iterations: 8519\ncpu: 82214.45005282346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 132035.5077300238,
            "unit": "ns/iter",
            "extra": "iterations: 5304\ncpu: 132027.41327300158 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 4919.800925990651,
            "unit": "ns/iter",
            "extra": "iterations: 141470\ncpu: 4919.726443769015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 25738.095775673144,
            "unit": "ns/iter",
            "extra": "iterations: 27460\ncpu: 25676.642388928918 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 20313.897029013177,
            "unit": "ns/iter",
            "extra": "iterations: 34534\ncpu: 20313.082759019737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 20041.52707416172,
            "unit": "ns/iter",
            "extra": "iterations: 34978\ncpu: 20041.00577505875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 20435.31831954412,
            "unit": "ns/iter",
            "extra": "iterations: 34324\ncpu: 20434.387017830362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 46666.51572075485,
            "unit": "ns/iter",
            "extra": "iterations: 15012\ncpu: 46665.2144950704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 154689.71999118826,
            "unit": "ns/iter",
            "extra": "iterations: 4532\ncpu: 154684.2233009734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 128853.30088170839,
            "unit": "ns/iter",
            "extra": "iterations: 5444\ncpu: 128850.88170462965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 127789.06560673477,
            "unit": "ns/iter",
            "extra": "iterations: 5472\ncpu: 127784.79532163718 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 127667.33908891631,
            "unit": "ns/iter",
            "extra": "iterations: 5444\ncpu: 127667.57898603799 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 82121.42319859404,
            "unit": "ns/iter",
            "extra": "iterations: 8535\ncpu: 82119.1095489167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 128416.97101981362,
            "unit": "ns/iter",
            "extra": "iterations: 5452\ncpu: 128410.12472487123 ns\nthreads: 1"
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
        "date": 1705958490209,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1418.3952101483537,
            "unit": "ns/iter",
            "extra": "iterations: 495840\ncpu: 1418.2796869958054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 16377.161855547129,
            "unit": "ns/iter",
            "extra": "iterations: 50508\ncpu: 16375.904807159262 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 34882.23020428805,
            "unit": "ns/iter",
            "extra": "iterations: 23692\ncpu: 34879.43187573866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 51382.490961281736,
            "unit": "ns/iter",
            "extra": "iterations: 16374\ncpu: 51376.792475876355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 57052.41819999856,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 57046.77 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 72094.34549918189,
            "unit": "ns/iter",
            "extra": "iterations: 12220\ncpu: 72088.95253682486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 85724.3470012754,
            "unit": "ns/iter",
            "extra": "iterations: 10121\ncpu: 85722.9127556566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 99296.83124430447,
            "unit": "ns/iter",
            "extra": "iterations: 8776\ncpu: 99295.19143117589 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 115837.58162582545,
            "unit": "ns/iter",
            "extra": "iterations: 7467\ncpu: 115835.62340966937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1200.2822128093856,
            "unit": "ns/iter",
            "extra": "iterations: 582897\ncpu: 1200.2324595940602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 957.6252527539409,
            "unit": "ns/iter",
            "extra": "iterations: 732926\ncpu: 957.5947640007327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 947.7204955949088,
            "unit": "ns/iter",
            "extra": "iterations: 740847\ncpu: 947.7273985046845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 949.3677014182553,
            "unit": "ns/iter",
            "extra": "iterations: 736924\ncpu: 949.3215039814148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 1915.084026576229,
            "unit": "ns/iter",
            "extra": "iterations: 360624\ncpu: 1915.0996605883147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5248.811129458766,
            "unit": "ns/iter",
            "extra": "iterations: 151400\ncpu: 5248.704755614268 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 25071.02572731175,
            "unit": "ns/iter",
            "extra": "iterations: 32689\ncpu: 25071.234972008904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 19601.51308090135,
            "unit": "ns/iter",
            "extra": "iterations: 41358\ncpu: 19599.95164176221 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 20106.016143095734,
            "unit": "ns/iter",
            "extra": "iterations: 42433\ncpu: 20105.019678080735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 20252.301628950474,
            "unit": "ns/iter",
            "extra": "iterations: 36588\ncpu: 20250.82540723738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 65822.6003732759,
            "unit": "ns/iter",
            "extra": "iterations: 13395\ncpu: 65819.12653975362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 561243.1480000168,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 561171.2000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 562214.3145995287,
            "unit": "ns/iter",
            "extra": "iterations: 1548\ncpu: 562176.8087855312 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 552496.1931817731,
            "unit": "ns/iter",
            "extra": "iterations: 1584\ncpu: 552482.0075757587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 551971.0719844614,
            "unit": "ns/iter",
            "extra": "iterations: 1542\ncpu: 551961.9974059669 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 325761.33578249457,
            "unit": "ns/iter",
            "extra": "iterations: 2722\ncpu: 325755.69434239576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 564913.3387201041,
            "unit": "ns/iter",
            "extra": "iterations: 1547\ncpu: 564908.7265675503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2343231.2323235017,
            "unit": "ns/iter",
            "extra": "iterations: 396\ncpu: 2343209.343434345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1077651.9149184178,
            "unit": "ns/iter",
            "extra": "iterations: 858\ncpu: 1077584.9650349687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3254424.5950703043,
            "unit": "ns/iter",
            "extra": "iterations: 284\ncpu: 3254251.760563385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 7398.468160398242,
            "unit": "ns/iter",
            "extra": "iterations: 113318\ncpu: 7397.966783741332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 39202.69030822797,
            "unit": "ns/iter",
            "extra": "iterations: 21121\ncpu: 39199.332417972575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 31309.603559749943,
            "unit": "ns/iter",
            "extra": "iterations: 26294\ncpu: 31307.602494865598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 30667.613927083523,
            "unit": "ns/iter",
            "extra": "iterations: 27127\ncpu: 30665.27444981035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 31042.235425672963,
            "unit": "ns/iter",
            "extra": "iterations: 26828\ncpu: 31041.046667660703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 78443.79357472798,
            "unit": "ns/iter",
            "extra": "iterations: 11268\ncpu: 78436.22648207314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 590511.1459999263,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 590463.8999999961 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 588587.4922870689,
            "unit": "ns/iter",
            "extra": "iterations: 1491\ncpu: 588543.2595573454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 584272.3328850198,
            "unit": "ns/iter",
            "extra": "iterations: 1487\ncpu: 584267.5857431105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 596113.3888511411,
            "unit": "ns/iter",
            "extra": "iterations: 1471\ncpu: 596072.80761387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 332579.4368745324,
            "unit": "ns/iter",
            "extra": "iterations: 2598\ncpu: 332568.93764434126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 567108.2843853438,
            "unit": "ns/iter",
            "extra": "iterations: 1505\ncpu: 567092.2259136187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2480909.175999841,
            "unit": "ns/iter",
            "extra": "iterations: 375\ncpu: 2480742.6666666665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1076825.9374274695,
            "unit": "ns/iter",
            "extra": "iterations: 863\ncpu: 1076758.516801848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5068.7425142125185,
            "unit": "ns/iter",
            "extra": "iterations: 158133\ncpu: 5068.370928269254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 25775.73016719435,
            "unit": "ns/iter",
            "extra": "iterations: 31879\ncpu: 25774.47222309367 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 19977.89516795546,
            "unit": "ns/iter",
            "extra": "iterations: 41142\ncpu: 19976.729376306503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 18713.93603591424,
            "unit": "ns/iter",
            "extra": "iterations: 43884\ncpu: 18712.840670859583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 19100.81453774333,
            "unit": "ns/iter",
            "extra": "iterations: 42909\ncpu: 19099.876482789125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 63085.14052761729,
            "unit": "ns/iter",
            "extra": "iterations: 13798\ncpu: 63081.16393680267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 572357.4659999713,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 572308.7999999948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 573397.8105669676,
            "unit": "ns/iter",
            "extra": "iterations: 1552\ncpu: 573377.5773195877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 560434.3744409515,
            "unit": "ns/iter",
            "extra": "iterations: 1565\ncpu: 560413.5463258785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 566300.922330128,
            "unit": "ns/iter",
            "extra": "iterations: 1545\ncpu: 566269.4498381877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 324174.64929789363,
            "unit": "ns/iter",
            "extra": "iterations: 2706\ncpu: 324155.0628233566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 559946.9638095871,
            "unit": "ns/iter",
            "extra": "iterations: 1575\ncpu: 559917.5238095241 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 491.1506387882713,
            "unit": "ns/iter",
            "extra": "iterations: 1426764\ncpu: 491.1319601559894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 2982.674366635834,
            "unit": "ns/iter",
            "extra": "iterations: 234936\ncpu: 2982.646337726039 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2265.07310038682,
            "unit": "ns/iter",
            "extra": "iterations: 309971\ncpu: 2264.9667226934234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2411.4388748996653,
            "unit": "ns/iter",
            "extra": "iterations: 289112\ncpu: 2411.4232546556423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 1861.1172393049055,
            "unit": "ns/iter",
            "extra": "iterations: 375659\ncpu: 1861.1104751915918 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 17450.909068543595,
            "unit": "ns/iter",
            "extra": "iterations: 40646\ncpu: 17450.528957339033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 28886.344602681096,
            "unit": "ns/iter",
            "extra": "iterations: 24225\ncpu: 28886.113519092054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 7103.558021861825,
            "unit": "ns/iter",
            "extra": "iterations: 98618\ncpu: 7103.354357216687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 7039.844367131428,
            "unit": "ns/iter",
            "extra": "iterations: 99452\ncpu: 7039.894622531389 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7052.458729838639,
            "unit": "ns/iter",
            "extra": "iterations: 99200\ncpu: 7052.507056451601 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 14177.527648882686,
            "unit": "ns/iter",
            "extra": "iterations: 49351\ncpu: 14177.469554821648 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 13429.767690306267,
            "unit": "ns/iter",
            "extra": "iterations: 52232\ncpu: 13429.671465768019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5223.551068423819,
            "unit": "ns/iter",
            "extra": "iterations: 134310\ncpu: 5223.5120244211885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 26403.4614633023,
            "unit": "ns/iter",
            "extra": "iterations: 26611\ncpu: 26402.94990793286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 21285.404921291207,
            "unit": "ns/iter",
            "extra": "iterations: 32715\ncpu: 21285.233073513555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 21236.95969508903,
            "unit": "ns/iter",
            "extra": "iterations: 33321\ncpu: 21236.52651481039 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 21695.616801948563,
            "unit": "ns/iter",
            "extra": "iterations: 32401\ncpu: 21694.56498256228 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 48905.81806127304,
            "unit": "ns/iter",
            "extra": "iterations: 14329\ncpu: 48905.673808361564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 155614.1127919958,
            "unit": "ns/iter",
            "extra": "iterations: 4495\ncpu: 155611.03448275762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 130621.0775092852,
            "unit": "ns/iter",
            "extra": "iterations: 5380\ncpu: 130616.89591078211 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 127953.47259507823,
            "unit": "ns/iter",
            "extra": "iterations: 5364\ncpu: 127952.31170768339 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 129412.61155340879,
            "unit": "ns/iter",
            "extra": "iterations: 5401\ncpu: 129413.42344010377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 81781.84716055683,
            "unit": "ns/iter",
            "extra": "iterations: 8558\ncpu: 81781.66627716787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 129592.85579414196,
            "unit": "ns/iter",
            "extra": "iterations: 5402\ncpu: 129589.0596075519 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 5072.781733241073,
            "unit": "ns/iter",
            "extra": "iterations: 138065\ncpu: 5072.500633759515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 25714.72841819083,
            "unit": "ns/iter",
            "extra": "iterations: 27222\ncpu: 25713.89684813769 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 20546.47759827541,
            "unit": "ns/iter",
            "extra": "iterations: 33859\ncpu: 20546.72612894662 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 20326.4245619115,
            "unit": "ns/iter",
            "extra": "iterations: 34525\ncpu: 20325.72628530061 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 20709.317254283982,
            "unit": "ns/iter",
            "extra": "iterations: 33667\ncpu: 20708.646449045067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 48714.34961456504,
            "unit": "ns/iter",
            "extra": "iterations: 15048\ncpu: 48711.489898989355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 153055.3790907093,
            "unit": "ns/iter",
            "extra": "iterations: 4553\ncpu: 153039.86382604693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 127068.7868554846,
            "unit": "ns/iter",
            "extra": "iterations: 5508\ncpu: 127061.1111111111 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 126399.34582808372,
            "unit": "ns/iter",
            "extra": "iterations: 5549\ncpu: 126398.7385114421 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 126518.70459480498,
            "unit": "ns/iter",
            "extra": "iterations: 5528\ncpu: 126510.05788712193 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 81178.24141122453,
            "unit": "ns/iter",
            "extra": "iterations: 8645\ncpu: 81174.28571428602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 126580.61560746923,
            "unit": "ns/iter",
            "extra": "iterations: 5523\ncpu: 126569.27394531952 ns\nthreads: 1"
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
        "date": 1705959952674,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1401.7428986481755,
            "unit": "ns/iter",
            "extra": "iterations: 499764\ncpu: 1401.7084063678055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 16185.279982425009,
            "unit": "ns/iter",
            "extra": "iterations: 50071\ncpu: 16185.071198897565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 34335.0788128198,
            "unit": "ns/iter",
            "extra": "iterations: 24057\ncpu: 34334.110653863754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 51156.94794819526,
            "unit": "ns/iter",
            "extra": "iterations: 16522\ncpu: 51154.59387483358 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 56664.6516999981,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 56663.61000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 71618.27294194429,
            "unit": "ns/iter",
            "extra": "iterations: 12281\ncpu: 71616.92858887713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 85132.78302816256,
            "unit": "ns/iter",
            "extra": "iterations: 10158\ncpu: 85127.55463673944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 99449.08419851925,
            "unit": "ns/iter",
            "extra": "iterations: 8765\ncpu: 99444.42669709079 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 114028.00594531678,
            "unit": "ns/iter",
            "extra": "iterations: 7569\ncpu: 114026.31787554514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1167.9683513403463,
            "unit": "ns/iter",
            "extra": "iterations: 598098\ncpu: 1167.9537467104046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 940.1789488480188,
            "unit": "ns/iter",
            "extra": "iterations: 746990\ncpu: 940.1258383646359 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 918.6335666848927,
            "unit": "ns/iter",
            "extra": "iterations: 762226\ncpu: 918.62597182463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 925.6067650269972,
            "unit": "ns/iter",
            "extra": "iterations: 759317\ncpu: 923.4829458579229 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 1855.2381081094622,
            "unit": "ns/iter",
            "extra": "iterations: 373658\ncpu: 1855.2130557889861 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5262.257894215655,
            "unit": "ns/iter",
            "extra": "iterations: 151535\ncpu: 5262.04507209555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 25673.4320211622,
            "unit": "ns/iter",
            "extra": "iterations: 32135\ncpu: 25673.128987085736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 20259.519079836595,
            "unit": "ns/iter",
            "extra": "iterations: 40645\ncpu: 20258.986345183952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 19275.667029612625,
            "unit": "ns/iter",
            "extra": "iterations: 42247\ncpu: 19275.527256373236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 19586.69609548507,
            "unit": "ns/iter",
            "extra": "iterations: 41388\ncpu: 19586.290712283775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 66429.4215296246,
            "unit": "ns/iter",
            "extra": "iterations: 13572\ncpu: 66428.28617742422 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 577987.6760000206,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 577958.4 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 544807.4354219902,
            "unit": "ns/iter",
            "extra": "iterations: 1564\ncpu: 544798.1457800502 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 540467.6981012777,
            "unit": "ns/iter",
            "extra": "iterations: 1580\ncpu: 540452.9746835432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 547222.720870728,
            "unit": "ns/iter",
            "extra": "iterations: 1562\ncpu: 547198.2074263763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 319353.0069040745,
            "unit": "ns/iter",
            "extra": "iterations: 2752\ncpu: 319346.58430232556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 552977.9386076279,
            "unit": "ns/iter",
            "extra": "iterations: 1580\ncpu: 552954.1139240505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2326280.187499776,
            "unit": "ns/iter",
            "extra": "iterations: 400\ncpu: 2326247.2499999995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1061434.6670507102,
            "unit": "ns/iter",
            "extra": "iterations: 868\ncpu: 1061388.8248847923 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3230120.087107995,
            "unit": "ns/iter",
            "extra": "iterations: 287\ncpu: 3230007.317073167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 7431.679145809277,
            "unit": "ns/iter",
            "extra": "iterations: 112668\ncpu: 7431.391344481129 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 39313.335428978586,
            "unit": "ns/iter",
            "extra": "iterations: 21155\ncpu: 39312.00189080592 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 31339.537649699367,
            "unit": "ns/iter",
            "extra": "iterations: 26720\ncpu: 31338.57410179656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 30682.688741237387,
            "unit": "ns/iter",
            "extra": "iterations: 27241\ncpu: 30681.535185933175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 30677.809536335688,
            "unit": "ns/iter",
            "extra": "iterations: 26614\ncpu: 30677.361539039608 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 77577.97866923462,
            "unit": "ns/iter",
            "extra": "iterations: 11392\ncpu: 77575.74613764057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 602378.7359999915,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 602372.7999999977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 599795.3835997498,
            "unit": "ns/iter",
            "extra": "iterations: 1439\ncpu: 599766.4350243226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 590130.7162439561,
            "unit": "ns/iter",
            "extra": "iterations: 1459\ncpu: 590101.7820424917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 591337.5931972765,
            "unit": "ns/iter",
            "extra": "iterations: 1470\ncpu: 591312.9251700643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 333083.71204589657,
            "unit": "ns/iter",
            "extra": "iterations: 2615\ncpu: 333076.55831740075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 580629.5449101968,
            "unit": "ns/iter",
            "extra": "iterations: 1503\ncpu: 580607.5848303359 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2473662.859042416,
            "unit": "ns/iter",
            "extra": "iterations: 376\ncpu: 2473501.861702134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1102862.7647753926,
            "unit": "ns/iter",
            "extra": "iterations: 846\ncpu: 1102816.0756501185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5230.606618885097,
            "unit": "ns/iter",
            "extra": "iterations: 151385\ncpu: 5230.555867490167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 25458.819213521005,
            "unit": "ns/iter",
            "extra": "iterations: 32779\ncpu: 25458.235455626942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 19977.829068382372,
            "unit": "ns/iter",
            "extra": "iterations: 41970\ncpu: 19977.15749344769 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 19156.503456718267,
            "unit": "ns/iter",
            "extra": "iterations: 44117\ncpu: 19156.57909649357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 19583.887550109186,
            "unit": "ns/iter",
            "extra": "iterations: 43157\ncpu: 19583.599416085362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 63387.16929824034,
            "unit": "ns/iter",
            "extra": "iterations: 13680\ncpu: 63384.78070175405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 583414.9080000088,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 583378.8999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 581169.4843437971,
            "unit": "ns/iter",
            "extra": "iterations: 1501\ncpu: 581171.4856762184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 578795.3214049389,
            "unit": "ns/iter",
            "extra": "iterations: 1509\ncpu: 578768.1908548741 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 580009.4122340195,
            "unit": "ns/iter",
            "extra": "iterations: 1504\ncpu: 579983.9760638328 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 326372.03081545315,
            "unit": "ns/iter",
            "extra": "iterations: 2661\ncpu: 326365.99022923625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 561666.7909967651,
            "unit": "ns/iter",
            "extra": "iterations: 1555\ncpu: 561645.2090032152 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 491.3980190675766,
            "unit": "ns/iter",
            "extra": "iterations: 1423673\ncpu: 491.3738618348438 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3016.539554433991,
            "unit": "ns/iter",
            "extra": "iterations: 232199\ncpu: 3016.4643258584283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2427.2265932718033,
            "unit": "ns/iter",
            "extra": "iterations: 311011\ncpu: 2427.186498226746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2484.44481588715,
            "unit": "ns/iter",
            "extra": "iterations: 281186\ncpu: 2484.41423114949 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 1880.9904832078735,
            "unit": "ns/iter",
            "extra": "iterations: 371869\ncpu: 1880.9034902075603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 17393.96970603793,
            "unit": "ns/iter",
            "extra": "iterations: 40107\ncpu: 17393.076021642115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 31597.64550193036,
            "unit": "ns/iter",
            "extra": "iterations: 22254\ncpu: 31596.12653904948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 7280.910428209751,
            "unit": "ns/iter",
            "extra": "iterations: 96191\ncpu: 7280.583422565487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 7262.2010854904665,
            "unit": "ns/iter",
            "extra": "iterations: 96362\ncpu: 7262.242377700781 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7272.3792036544,
            "unit": "ns/iter",
            "extra": "iterations: 96315\ncpu: 7272.082230182193 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 14527.095382444248,
            "unit": "ns/iter",
            "extra": "iterations: 48164\ncpu: 14526.231210032482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 12598.147087999796,
            "unit": "ns/iter",
            "extra": "iterations: 55443\ncpu: 12597.58490702146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5385.865528207664,
            "unit": "ns/iter",
            "extra": "iterations: 130176\ncpu: 5385.537272615613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 27072.135344492504,
            "unit": "ns/iter",
            "extra": "iterations: 25690\ncpu: 27070.665628649163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 21466.95429239238,
            "unit": "ns/iter",
            "extra": "iterations: 32511\ncpu: 21465.916151456226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 21309.698345472265,
            "unit": "ns/iter",
            "extra": "iterations: 32819\ncpu: 21309.567628508023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 21843.334468006462,
            "unit": "ns/iter",
            "extra": "iterations: 32021\ncpu: 21842.90309484391 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 48607.606743130265,
            "unit": "ns/iter",
            "extra": "iterations: 14385\ncpu: 48604.956551963136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 157990.72408292725,
            "unit": "ns/iter",
            "extra": "iterations: 4389\ncpu: 157983.8231943475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 134148.42979943266,
            "unit": "ns/iter",
            "extra": "iterations: 5235\ncpu: 134149.16905444165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 132722.7056145692,
            "unit": "ns/iter",
            "extra": "iterations: 5272\ncpu: 132721.43399089688 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 134152.46045091123,
            "unit": "ns/iter",
            "extra": "iterations: 5234\ncpu: 134146.84753534672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 83312.62816399655,
            "unit": "ns/iter",
            "extra": "iterations: 8415\ncpu: 83305.51396316121 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 133087.1852203652,
            "unit": "ns/iter",
            "extra": "iterations: 5264\ncpu: 133081.1550151965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 5103.360452728071,
            "unit": "ns/iter",
            "extra": "iterations: 137036\ncpu: 5103.291835722062 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 25620.44387025834,
            "unit": "ns/iter",
            "extra": "iterations: 27285\ncpu: 25620.018325086818 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 20524.47194176898,
            "unit": "ns/iter",
            "extra": "iterations: 34072\ncpu: 20523.919934256937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 20486.374202796498,
            "unit": "ns/iter",
            "extra": "iterations: 34182\ncpu: 20485.694225030802 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 20934.07963233059,
            "unit": "ns/iter",
            "extra": "iterations: 33617\ncpu: 20934.1583127583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 47068.12893442032,
            "unit": "ns/iter",
            "extra": "iterations: 14837\ncpu: 47067.42602952044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 154968.8573003898,
            "unit": "ns/iter",
            "extra": "iterations: 4534\ncpu: 154967.07101896717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 129713.84602649351,
            "unit": "ns/iter",
            "extra": "iterations: 5436\ncpu: 129709.97056659285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 128748.98654378073,
            "unit": "ns/iter",
            "extra": "iterations: 5425\ncpu: 128742.23041474742 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 129853.56310497991,
            "unit": "ns/iter",
            "extra": "iterations: 5372\ncpu: 129844.56440804148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 82109.14656989188,
            "unit": "ns/iter",
            "extra": "iterations: 8542\ncpu: 82104.83493327125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 129283.49972227601,
            "unit": "ns/iter",
            "extra": "iterations: 5401\ncpu: 129277.80040732979 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}