window.BENCHMARK_DATA = {
  "lastUpdate": 1705778434553,
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
      }
    ]
  }
}