window.BENCHMARK_DATA = {
  "lastUpdate": 1705962762136,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Parse clang-15 18.04 Debug c++-17": [
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
        "date": 1702489611281,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7519.168078747241,
            "unit": "ns/iter",
            "extra": "iterations: 93361\ncpu: 7518.951168046615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 55282.805000001645,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 55281.85 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 103217.67673861096,
            "unit": "ns/iter",
            "extra": "iterations: 8340\ncpu: 103216.57074340527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 148625.73666954596,
            "unit": "ns/iter",
            "extra": "iterations: 5795\ncpu: 148623.1751509922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 195080.4908804135,
            "unit": "ns/iter",
            "extra": "iterations: 4441\ncpu: 195077.57261877967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 242914.78547487533,
            "unit": "ns/iter",
            "extra": "iterations: 3580\ncpu: 242907.5698324022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 287734.89601331204,
            "unit": "ns/iter",
            "extra": "iterations: 3010\ncpu: 287737.77408637875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 334117.88332690374,
            "unit": "ns/iter",
            "extra": "iterations: 2597\ncpu: 334111.8983442434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 379731.35386633093,
            "unit": "ns/iter",
            "extra": "iterations: 2289\ncpu: 379704.9366535606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6123.304377869583,
            "unit": "ns/iter",
            "extra": "iterations: 114325\ncpu: 6122.991471681608 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5041.664560000072,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5041.203999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 4978.357645589577,
            "unit": "ns/iter",
            "extra": "iterations: 140944\ncpu: 4978.103360199794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5012.888803454881,
            "unit": "ns/iter",
            "extra": "iterations: 139159\ncpu: 5012.648840534927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 8716.739367258984,
            "unit": "ns/iter",
            "extra": "iterations: 80412\ncpu: 8716.67785902602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 30802.517567314422,
            "unit": "ns/iter",
            "extra": "iterations: 26555\ncpu: 30802.541894181853 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 139876.0362413898,
            "unit": "ns/iter",
            "extra": "iterations: 6098\ncpu: 139875.6641521809 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 104278.26414631722,
            "unit": "ns/iter",
            "extra": "iterations: 8147\ncpu: 104276.71535534562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 104719.64097512134,
            "unit": "ns/iter",
            "extra": "iterations: 8122\ncpu: 104717.20019699588 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 98668.93467277882,
            "unit": "ns/iter",
            "extra": "iterations: 8511\ncpu: 98663.10656797109 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 328274.67482012225,
            "unit": "ns/iter",
            "extra": "iterations: 2780\ncpu: 328271.6906474818 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1823286.764822066,
            "unit": "ns/iter",
            "extra": "iterations: 506\ncpu: 1823170.3557312284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1451065.6099844698,
            "unit": "ns/iter",
            "extra": "iterations: 641\ncpu: 1450959.4383775392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1447355.4196567489,
            "unit": "ns/iter",
            "extra": "iterations: 641\ncpu: 1447274.2589703568 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1458260.0856269558,
            "unit": "ns/iter",
            "extra": "iterations: 654\ncpu: 1456992.3547400618 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 807662.0699300334,
            "unit": "ns/iter",
            "extra": "iterations: 1144\ncpu: 807640.821678322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1393291.875188038,
            "unit": "ns/iter",
            "extra": "iterations: 665\ncpu: 1393277.744360907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 35998.167672528645,
            "unit": "ns/iter",
            "extra": "iterations: 22866\ncpu: 35997.18796466362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 174121.39319011068,
            "unit": "ns/iter",
            "extra": "iterations: 4934\ncpu: 174118.42318605623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 133382.8958882816,
            "unit": "ns/iter",
            "extra": "iterations: 6445\ncpu: 133376.05896043484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 140201.29381108904,
            "unit": "ns/iter",
            "extra": "iterations: 6140\ncpu: 140194.4788273621 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 123891.72334252684,
            "unit": "ns/iter",
            "extra": "iterations: 6893\ncpu: 123888.84375453372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 301188.9058905352,
            "unit": "ns/iter",
            "extra": "iterations: 2869\ncpu: 301187.17323109205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1849028.001987913,
            "unit": "ns/iter",
            "extra": "iterations: 503\ncpu: 1848914.5129224656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1464653.1293375501,
            "unit": "ns/iter",
            "extra": "iterations: 634\ncpu: 1464635.8044164043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1492238.992000057,
            "unit": "ns/iter",
            "extra": "iterations: 625\ncpu: 1492225.2800000026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1441215.885271303,
            "unit": "ns/iter",
            "extra": "iterations: 645\ncpu: 1441163.5658914694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 837827.4188576881,
            "unit": "ns/iter",
            "extra": "iterations: 1103\ncpu: 837798.5494106975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1411070.9741248027,
            "unit": "ns/iter",
            "extra": "iterations: 657\ncpu: 1411050.5327245048 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5103950.040000882,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5103790.000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3146796.2128379047,
            "unit": "ns/iter",
            "extra": "iterations: 296\ncpu: 3146681.7567567513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 26670.873254946968,
            "unit": "ns/iter",
            "extra": "iterations: 30873\ncpu: 26669.594791565498 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 130464.63523348793,
            "unit": "ns/iter",
            "extra": "iterations: 6596\ncpu: 130459.74833232242 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 103552.97536649552,
            "unit": "ns/iter",
            "extra": "iterations: 8322\ncpu: 103549.95193463117 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 99563.22791397474,
            "unit": "ns/iter",
            "extra": "iterations: 8648\ncpu: 99559.6554116561 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 95876.14829793647,
            "unit": "ns/iter",
            "extra": "iterations: 8901\ncpu: 95870.85720705547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 271834.9127182184,
            "unit": "ns/iter",
            "extra": "iterations: 3208\ncpu: 271833.75935162144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1817781.5214007557,
            "unit": "ns/iter",
            "extra": "iterations: 514\ncpu: 1817717.7042801473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1429412.583460972,
            "unit": "ns/iter",
            "extra": "iterations: 653\ncpu: 1429404.2879019852 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1446679.2173913,
            "unit": "ns/iter",
            "extra": "iterations: 644\ncpu: 1446621.42857142 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1397230.9579579823,
            "unit": "ns/iter",
            "extra": "iterations: 666\ncpu: 1397159.3093093052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 789797.5845368835,
            "unit": "ns/iter",
            "extra": "iterations: 1177\ncpu: 789771.5378079871 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1378853.0000000617,
            "unit": "ns/iter",
            "extra": "iterations: 675\ncpu: 1378835.1111111087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2899.084028920931,
            "unit": "ns/iter",
            "extra": "iterations: 241762\ncpu: 2899.0436875935957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 19977.478901751358,
            "unit": "ns/iter",
            "extra": "iterations: 35074\ncpu: 19977.345041911318 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 15540.962045836866,
            "unit": "ns/iter",
            "extra": "iterations: 45028\ncpu: 15541.112196855309 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 15021.647062599879,
            "unit": "ns/iter",
            "extra": "iterations: 46725\ncpu: 15021.594435527166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 11036.296371314616,
            "unit": "ns/iter",
            "extra": "iterations: 63687\ncpu: 11035.506461287297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 102332.59932062235,
            "unit": "ns/iter",
            "extra": "iterations: 6771\ncpu: 102332.2108994241 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 125991.00215749233,
            "unit": "ns/iter",
            "extra": "iterations: 5562\ncpu: 125986.33585041463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 30461.814571841143,
            "unit": "ns/iter",
            "extra": "iterations: 23017\ncpu: 30461.545813963738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 31017.798020596256,
            "unit": "ns/iter",
            "extra": "iterations: 22532\ncpu: 31015.506834724227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 30278.66909891709,
            "unit": "ns/iter",
            "extra": "iterations: 23161\ncpu: 30276.9785415135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 60151.57949378363,
            "unit": "ns/iter",
            "extra": "iterations: 11655\ncpu: 60151.38567138566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 57680.76353254822,
            "unit": "ns/iter",
            "extra": "iterations: 13486\ncpu: 57678.488803203094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 20085.79816645735,
            "unit": "ns/iter",
            "extra": "iterations: 34796\ncpu: 20084.886193815382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 101107.88267511953,
            "unit": "ns/iter",
            "extra": "iterations: 6938\ncpu: 101105.57797636195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 83467.65654148623,
            "unit": "ns/iter",
            "extra": "iterations: 8362\ncpu: 83462.48505142264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 82722.29059728533,
            "unit": "ns/iter",
            "extra": "iterations: 8455\ncpu: 82718.17859254905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 81230.65101684934,
            "unit": "ns/iter",
            "extra": "iterations: 8605\ncpu: 81228.8901801278 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 155328.63612158288,
            "unit": "ns/iter",
            "extra": "iterations: 4507\ncpu: 155321.98801863758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 528730.0996978771,
            "unit": "ns/iter",
            "extra": "iterations: 1324\ncpu: 528706.1178247775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 430562.93534483854,
            "unit": "ns/iter",
            "extra": "iterations: 1624\ncpu: 430547.4137931098 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 435619.11940300255,
            "unit": "ns/iter",
            "extra": "iterations: 1608\ncpu: 435611.5671641815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 422962.2995168482,
            "unit": "ns/iter",
            "extra": "iterations: 1656\ncpu: 422959.3599033787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 270617.2803557525,
            "unit": "ns/iter",
            "extra": "iterations: 2586\ncpu: 270616.9760247485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 421675.9681298959,
            "unit": "ns/iter",
            "extra": "iterations: 1663\ncpu: 421647.9855682459 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 21376.98182151487,
            "unit": "ns/iter",
            "extra": "iterations: 32731\ncpu: 21376.814029513414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 107026.98686019838,
            "unit": "ns/iter",
            "extra": "iterations: 6545\ncpu: 107024.1405653174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 85921.33156203276,
            "unit": "ns/iter",
            "extra": "iterations: 8092\ncpu: 85919.83440434917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 84241.63874093148,
            "unit": "ns/iter",
            "extra": "iterations: 8260\ncpu: 84240.10895883785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 83967.45323311484,
            "unit": "ns/iter",
            "extra": "iterations: 8382\ncpu: 83963.87497017403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 154449.74696937087,
            "unit": "ns/iter",
            "extra": "iterations: 4537\ncpu: 154448.18161781118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 531058.4680365388,
            "unit": "ns/iter",
            "extra": "iterations: 1314\ncpu: 531027.7777777703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 430141.9030674979,
            "unit": "ns/iter",
            "extra": "iterations: 1630\ncpu: 430127.42331288 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 438812.2619047863,
            "unit": "ns/iter",
            "extra": "iterations: 1596\ncpu: 438802.00501253066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 426955.1905339556,
            "unit": "ns/iter",
            "extra": "iterations: 1648\ncpu: 425839.0169902971 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 276074.43856186524,
            "unit": "ns/iter",
            "extra": "iterations: 2531\ncpu: 276061.87277756125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 424607.3065692941,
            "unit": "ns/iter",
            "extra": "iterations: 1644\ncpu: 424612.0437956177 ns\nthreads: 1"
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
        "date": 1702492223088,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7880.2627267226835,
            "unit": "ns/iter",
            "extra": "iterations: 92404\ncpu: 7880.14371672222 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 54291.922300001264,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 54289.27000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 101518.90463857427,
            "unit": "ns/iter",
            "extra": "iterations: 8494\ncpu: 101515.70520367318 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 147110.17429939576,
            "unit": "ns/iter",
            "extra": "iterations: 5852\ncpu: 147108.57826384142 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 193573.48076923206,
            "unit": "ns/iter",
            "extra": "iterations: 4472\ncpu: 193567.7325581395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 239392.83287366765,
            "unit": "ns/iter",
            "extra": "iterations: 3626\ncpu: 239385.10755653592 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 285399.0862860797,
            "unit": "ns/iter",
            "extra": "iterations: 3048\ncpu: 285392.0603674539 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 330189.11609389813,
            "unit": "ns/iter",
            "extra": "iterations: 2386\ncpu: 330182.39731768647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 376269.43630015687,
            "unit": "ns/iter",
            "extra": "iterations: 2292\ncpu: 376258.0715532286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6255.55908496357,
            "unit": "ns/iter",
            "extra": "iterations: 112389\ncpu: 6255.479628789303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5092.3472967483785,
            "unit": "ns/iter",
            "extra": "iterations: 137908\ncpu: 5092.224526495932 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5087.499726147086,
            "unit": "ns/iter",
            "extra": "iterations: 136935\ncpu: 5087.356775112277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5086.668032071974,
            "unit": "ns/iter",
            "extra": "iterations: 137688\ncpu: 5086.433095113598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 8826.884286126979,
            "unit": "ns/iter",
            "extra": "iterations: 79783\ncpu: 8826.634746750547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 29769.862952301864,
            "unit": "ns/iter",
            "extra": "iterations: 27443\ncpu: 29768.44732718725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 145211.67781720645,
            "unit": "ns/iter",
            "extra": "iterations: 5919\ncpu: 145208.0081094781 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 110148.378609347,
            "unit": "ns/iter",
            "extra": "iterations: 7723\ncpu: 110146.09607665427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 110114.40305659077,
            "unit": "ns/iter",
            "extra": "iterations: 7721\ncpu: 110109.29931356048 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 105004.00807855037,
            "unit": "ns/iter",
            "extra": "iterations: 8046\ncpu: 105002.58513547144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 325068.3926162252,
            "unit": "ns/iter",
            "extra": "iterations: 2817\ncpu: 325053.1416400427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1864833.7980393723,
            "unit": "ns/iter",
            "extra": "iterations: 510\ncpu: 1864828.0392156867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1421895.1259599691,
            "unit": "ns/iter",
            "extra": "iterations: 651\ncpu: 1421848.8479262698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1410675.414003018,
            "unit": "ns/iter",
            "extra": "iterations: 657\ncpu: 1410631.963470316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1398073.51501508,
            "unit": "ns/iter",
            "extra": "iterations: 666\ncpu: 1398039.1891891882 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 791250.540633039,
            "unit": "ns/iter",
            "extra": "iterations: 1169\ncpu: 791207.9555175363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1387256.9570370347,
            "unit": "ns/iter",
            "extra": "iterations: 675\ncpu: 1387213.1851851875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 36171.570411773435,
            "unit": "ns/iter",
            "extra": "iterations: 22901\ncpu: 36170.91830051102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 178986.90792467483,
            "unit": "ns/iter",
            "extra": "iterations: 4833\ncpu: 178984.95758328188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 134747.24917674126,
            "unit": "ns/iter",
            "extra": "iterations: 6377\ncpu: 134744.56641053775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 134472.75490502373,
            "unit": "ns/iter",
            "extra": "iterations: 6422\ncpu: 134467.34662099075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 127796.68330849487,
            "unit": "ns/iter",
            "extra": "iterations: 6710\ncpu: 127791.86289120709 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 300106.74564925453,
            "unit": "ns/iter",
            "extra": "iterations: 2988\ncpu: 300103.81526104454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1830477.0609037082,
            "unit": "ns/iter",
            "extra": "iterations: 509\ncpu: 1830374.6561886088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1430653.318952345,
            "unit": "ns/iter",
            "extra": "iterations: 649\ncpu: 1430547.919876729 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1472552.3095237457,
            "unit": "ns/iter",
            "extra": "iterations: 630\ncpu: 1472484.126984123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1431720.499229488,
            "unit": "ns/iter",
            "extra": "iterations: 649\ncpu: 1431685.9784283442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 841349.4001806637,
            "unit": "ns/iter",
            "extra": "iterations: 1107\ncpu: 841324.570912377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1408079.2538225667,
            "unit": "ns/iter",
            "extra": "iterations: 654\ncpu: 1408052.4464831806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5092567.699999791,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5092334.999999935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3037949.8441558047,
            "unit": "ns/iter",
            "extra": "iterations: 308\ncpu: 3037734.4155844073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 26098.331010451013,
            "unit": "ns/iter",
            "extra": "iterations: 31570\ncpu: 26097.089008552368 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 137556.15918170262,
            "unit": "ns/iter",
            "extra": "iterations: 6257\ncpu: 137542.99184912944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 110290.25890218363,
            "unit": "ns/iter",
            "extra": "iterations: 7779\ncpu: 110281.96426275854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 106364.7999004521,
            "unit": "ns/iter",
            "extra": "iterations: 8036\ncpu: 106357.1179691387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 99730.86016601362,
            "unit": "ns/iter",
            "extra": "iterations: 8553\ncpu: 99724.35402782606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 263374.7474257966,
            "unit": "ns/iter",
            "extra": "iterations: 3302\ncpu: 263357.63173834066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1803248.2799228362,
            "unit": "ns/iter",
            "extra": "iterations: 518\ncpu: 1803103.474903477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1406667.2995461319,
            "unit": "ns/iter",
            "extra": "iterations: 661\ncpu: 1406569.8940998465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1397765.5232383972,
            "unit": "ns/iter",
            "extra": "iterations: 667\ncpu: 1397694.902548726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1383917.160237359,
            "unit": "ns/iter",
            "extra": "iterations: 674\ncpu: 1383828.4866468867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 804586.8685092354,
            "unit": "ns/iter",
            "extra": "iterations: 1194\ncpu: 804517.4204355152 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1372584.8932748258,
            "unit": "ns/iter",
            "extra": "iterations: 684\ncpu: 1372254.824561412 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2862.1371867015864,
            "unit": "ns/iter",
            "extra": "iterations: 242939\ncpu: 2861.8924915307775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 19672.442727503585,
            "unit": "ns/iter",
            "extra": "iterations: 35593\ncpu: 19670.915629477706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 15042.170530973988,
            "unit": "ns/iter",
            "extra": "iterations: 46537\ncpu: 15041.554032275391 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 15063.468392222481,
            "unit": "ns/iter",
            "extra": "iterations: 46555\ncpu: 15063.221995489106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 11261.738559478075,
            "unit": "ns/iter",
            "extra": "iterations: 62519\ncpu: 11260.831107343281 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 97556.12172701345,
            "unit": "ns/iter",
            "extra": "iterations: 7180\ncpu: 97548.59331476368 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 123672.19971721005,
            "unit": "ns/iter",
            "extra": "iterations: 5658\ncpu: 123661.7532697068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 30329.01161228886,
            "unit": "ns/iter",
            "extra": "iterations: 23079\ncpu: 30326.998570128864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 30530.553866979764,
            "unit": "ns/iter",
            "extra": "iterations: 22899\ncpu: 30528.90082536338 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 30210.79116517752,
            "unit": "ns/iter",
            "extra": "iterations: 23181\ncpu: 30209.0418877529 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 59634.74522998662,
            "unit": "ns/iter",
            "extra": "iterations: 11740\ncpu: 59632.05281090257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 56456.99402068993,
            "unit": "ns/iter",
            "extra": "iterations: 12376\ncpu: 56453.7572721395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 20067.67666523262,
            "unit": "ns/iter",
            "extra": "iterations: 34905\ncpu: 20067.03910614526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 101010.61220358728,
            "unit": "ns/iter",
            "extra": "iterations: 6916\ncpu: 101007.21515326756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 83079.32306963298,
            "unit": "ns/iter",
            "extra": "iterations: 8444\ncpu: 83076.13690194223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 82944.37279298299,
            "unit": "ns/iter",
            "extra": "iterations: 8439\ncpu: 82942.94347671543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 81931.63313402077,
            "unit": "ns/iter",
            "extra": "iterations: 8529\ncpu: 81930.26146089741 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 154794.27804769218,
            "unit": "ns/iter",
            "extra": "iterations: 4528\ncpu: 154793.77208480693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 523897.7073353015,
            "unit": "ns/iter",
            "extra": "iterations: 1336\ncpu: 523872.00598802615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 422415.98670693673,
            "unit": "ns/iter",
            "extra": "iterations: 1655\ncpu: 422407.9154078579 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 423288.2365721195,
            "unit": "ns/iter",
            "extra": "iterations: 1657\ncpu: 423277.4290887135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 423641.37918443145,
            "unit": "ns/iter",
            "extra": "iterations: 1643\ncpu: 423640.8399269613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 275446.6870348849,
            "unit": "ns/iter",
            "extra": "iterations: 2553\ncpu: 275436.1535448476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 415067.1626937172,
            "unit": "ns/iter",
            "extra": "iterations: 1678\ncpu: 415045.8879618631 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 21559.146330189513,
            "unit": "ns/iter",
            "extra": "iterations: 32454\ncpu: 21558.79706661744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 107857.90294254964,
            "unit": "ns/iter",
            "extra": "iterations: 6491\ncpu: 107857.80311200024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 85834.6227110715,
            "unit": "ns/iter",
            "extra": "iterations: 8137\ncpu: 85828.7083691774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 84803.46825012699,
            "unit": "ns/iter",
            "extra": "iterations: 8252\ncpu: 84802.25399903058 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 83986.96387696873,
            "unit": "ns/iter",
            "extra": "iterations: 8388\ncpu: 83984.28707677632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 152683.97622164732,
            "unit": "ns/iter",
            "extra": "iterations: 4584\ncpu: 152680.0610820243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 524482.8489857587,
            "unit": "ns/iter",
            "extra": "iterations: 1331\ncpu: 524481.7430503337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 426968.7343083063,
            "unit": "ns/iter",
            "extra": "iterations: 1641\ncpu: 426962.9494210812 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 423841.7782477835,
            "unit": "ns/iter",
            "extra": "iterations: 1655\ncpu: 423835.4682779473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 421272.6327142161,
            "unit": "ns/iter",
            "extra": "iterations: 1669\ncpu: 421264.82923906564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 276300.03066037653,
            "unit": "ns/iter",
            "extra": "iterations: 2544\ncpu: 276289.7012578636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 416913.3619558823,
            "unit": "ns/iter",
            "extra": "iterations: 1677\ncpu: 416909.3023255762 ns\nthreads: 1"
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
        "date": 1702503289614,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7354.3988238889215,
            "unit": "ns/iter",
            "extra": "iterations: 94889\ncpu: 7354.154854619608 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 53873.6659000051,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 53872.08000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 99787.285183463,
            "unit": "ns/iter",
            "extra": "iterations: 8612\ncpu: 99786.18207152812 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 145607.93515068945,
            "unit": "ns/iter",
            "extra": "iterations: 5906\ncpu: 145606.67118184903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 191307.0505965521,
            "unit": "ns/iter",
            "extra": "iterations: 4526\ncpu: 191301.63499779056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 237228.89192887308,
            "unit": "ns/iter",
            "extra": "iterations: 3655\ncpu: 237223.4473324214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 282069.7402216376,
            "unit": "ns/iter",
            "extra": "iterations: 3068\ncpu: 282064.2112125163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 328233.0508091823,
            "unit": "ns/iter",
            "extra": "iterations: 2657\ncpu: 328206.69928490766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 373155.5852199971,
            "unit": "ns/iter",
            "extra": "iterations: 2341\ncpu: 373129.3891499359 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6069.5804842255375,
            "unit": "ns/iter",
            "extra": "iterations: 115855\ncpu: 6069.213240688791 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 4978.715426761127,
            "unit": "ns/iter",
            "extra": "iterations: 140723\ncpu: 4978.338295800967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 4984.55929175878,
            "unit": "ns/iter",
            "extra": "iterations: 140517\ncpu: 4984.264537386928 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 4932.534702849109,
            "unit": "ns/iter",
            "extra": "iterations: 141948\ncpu: 4932.4456843351045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 8865.920588983174,
            "unit": "ns/iter",
            "extra": "iterations: 78780\ncpu: 8865.56740289414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 28138.783738155533,
            "unit": "ns/iter",
            "extra": "iterations: 29025\ncpu: 28137.416020671826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 145786.19173890186,
            "unit": "ns/iter",
            "extra": "iterations: 5883\ncpu: 145782.4579296281 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 107593.97325050377,
            "unit": "ns/iter",
            "extra": "iterations: 7888\ncpu: 107591.5567951317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 107821.4123228844,
            "unit": "ns/iter",
            "extra": "iterations: 7904\ncpu: 107816.13107287444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 102921.10931966502,
            "unit": "ns/iter",
            "extra": "iterations: 8187\ncpu: 102917.38121411977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 331795.86072728026,
            "unit": "ns/iter",
            "extra": "iterations: 2750\ncpu: 331787.4909090919 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1763624.7686423948,
            "unit": "ns/iter",
            "extra": "iterations: 523\ncpu: 1763600.9560229392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1387196.85201788,
            "unit": "ns/iter",
            "extra": "iterations: 669\ncpu: 1387149.0284005983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1380188.6106983265,
            "unit": "ns/iter",
            "extra": "iterations: 673\ncpu: 1380169.2421991085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1358916.0058650137,
            "unit": "ns/iter",
            "extra": "iterations: 682\ncpu: 1358838.416422285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 759798.4760330044,
            "unit": "ns/iter",
            "extra": "iterations: 1210\ncpu: 759791.7355371896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1337478.2914863913,
            "unit": "ns/iter",
            "extra": "iterations: 693\ncpu: 1337411.8326118318 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 36184.11444177636,
            "unit": "ns/iter",
            "extra": "iterations: 22885\ncpu: 36181.84837229624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 177820.5856376407,
            "unit": "ns/iter",
            "extra": "iterations: 4846\ncpu: 177810.60668592632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 136968.62187400868,
            "unit": "ns/iter",
            "extra": "iterations: 6318\ncpu: 136967.50553972778 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 135462.920188522,
            "unit": "ns/iter",
            "extra": "iterations: 6365\ncpu: 135451.79890023524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 128424.103500076,
            "unit": "ns/iter",
            "extra": "iterations: 6657\ncpu: 128416.85443893689 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 312652.3038596181,
            "unit": "ns/iter",
            "extra": "iterations: 2850\ncpu: 312633.68421052536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1817515.5068226715,
            "unit": "ns/iter",
            "extra": "iterations: 513\ncpu: 1817474.2690058404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1411587.5842185197,
            "unit": "ns/iter",
            "extra": "iterations: 659\ncpu: 1411532.3216995401 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1427641.8560490592,
            "unit": "ns/iter",
            "extra": "iterations: 653\ncpu: 1427606.2787136238 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1385074.5773810656,
            "unit": "ns/iter",
            "extra": "iterations: 672\ncpu: 1385030.952380956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 813827.5013076925,
            "unit": "ns/iter",
            "extra": "iterations: 1147\ncpu: 813797.0357454246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1370495.2227138053,
            "unit": "ns/iter",
            "extra": "iterations: 678\ncpu: 1370392.1828908592 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 6542328.48591513,
            "unit": "ns/iter",
            "extra": "iterations: 142\ncpu: 6541708.450704224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3091390.245033185,
            "unit": "ns/iter",
            "extra": "iterations: 302\ncpu: 3091210.2649006657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 25645.478879848757,
            "unit": "ns/iter",
            "extra": "iterations: 31960\ncpu: 25644.001877346698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 132036.2046290694,
            "unit": "ns/iter",
            "extra": "iterations: 6524\ncpu: 132029.9356223166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 101656.52395709025,
            "unit": "ns/iter",
            "extra": "iterations: 8390\ncpu: 101651.8355184745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 103622.07846450743,
            "unit": "ns/iter",
            "extra": "iterations: 8284\ncpu: 103621.11298889425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 98064.96897893236,
            "unit": "ns/iter",
            "extra": "iterations: 8736\ncpu: 98060.5311355315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 273133.2331134224,
            "unit": "ns/iter",
            "extra": "iterations: 3183\ncpu: 273117.9704681121 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1772926.2723809197,
            "unit": "ns/iter",
            "extra": "iterations: 525\ncpu: 1772741.9047619044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1374516.7932052463,
            "unit": "ns/iter",
            "extra": "iterations: 677\ncpu: 1374499.8522895037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1376037.471976437,
            "unit": "ns/iter",
            "extra": "iterations: 678\ncpu: 1375943.8053097334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1342069.669552706,
            "unit": "ns/iter",
            "extra": "iterations: 693\ncpu: 1342013.7085137132 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 752128.7502021474,
            "unit": "ns/iter",
            "extra": "iterations: 1237\ncpu: 752081.4066289408 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1324890.5504979005,
            "unit": "ns/iter",
            "extra": "iterations: 703\ncpu: 1324869.843527742 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2886.0207649234126,
            "unit": "ns/iter",
            "extra": "iterations: 241802\ncpu: 2885.687049734918 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 19853.160589180497,
            "unit": "ns/iter",
            "extra": "iterations: 34828\ncpu: 19851.734236820943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 15481.078897482123,
            "unit": "ns/iter",
            "extra": "iterations: 46947\ncpu: 15480.130785779755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 15569.208643649397,
            "unit": "ns/iter",
            "extra": "iterations: 44981\ncpu: 15568.235477201384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 11086.385532818167,
            "unit": "ns/iter",
            "extra": "iterations: 63136\ncpu: 11085.775152052694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 100445.61459685734,
            "unit": "ns/iter",
            "extra": "iterations: 6933\ncpu: 100439.89614885332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 117913.43329377576,
            "unit": "ns/iter",
            "extra": "iterations: 5899\ncpu: 117906.2722495341 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 29693.897443519796,
            "unit": "ns/iter",
            "extra": "iterations: 23548\ncpu: 29691.791234924272 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 30224.475382882716,
            "unit": "ns/iter",
            "extra": "iterations: 23114\ncpu: 30223.254304750204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 29312.97350104437,
            "unit": "ns/iter",
            "extra": "iterations: 23850\ncpu: 29312.092243186682 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 61176.409801697555,
            "unit": "ns/iter",
            "extra": "iterations: 11447\ncpu: 61172.770158119936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 55725.447659165635,
            "unit": "ns/iter",
            "extra": "iterations: 12581\ncpu: 55721.47683014099 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 20370.186418496094,
            "unit": "ns/iter",
            "extra": "iterations: 34385\ncpu: 20368.913770539224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 101519.50913307819,
            "unit": "ns/iter",
            "extra": "iterations: 6898\ncpu: 101516.65700202971 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 83509.24910479701,
            "unit": "ns/iter",
            "extra": "iterations: 8378\ncpu: 83505.16829792305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 83980.4305489293,
            "unit": "ns/iter",
            "extra": "iterations: 8380\ncpu: 83974.72553699215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 82837.8086689509,
            "unit": "ns/iter",
            "extra": "iterations: 8467\ncpu: 82833.61284988807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 152275.4268027915,
            "unit": "ns/iter",
            "extra": "iterations: 4604\ncpu: 152271.80712423788 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 524025.6067415434,
            "unit": "ns/iter",
            "extra": "iterations: 1335\ncpu: 523999.4007490559 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 421814.64333128295,
            "unit": "ns/iter",
            "extra": "iterations: 1657\ncpu: 421789.1973445986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 427699.778252919,
            "unit": "ns/iter",
            "extra": "iterations: 1637\ncpu: 427667.9291386699 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 421459.75746719685,
            "unit": "ns/iter",
            "extra": "iterations: 1674\ncpu: 421444.1457586661 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 265107.42179195373,
            "unit": "ns/iter",
            "extra": "iterations: 2634\ncpu: 265081.5110098753 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 415582.4685273411,
            "unit": "ns/iter",
            "extra": "iterations: 1684\ncpu: 415550.8313539238 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 21724.709101614866,
            "unit": "ns/iter",
            "extra": "iterations: 32269\ncpu: 21722.684310018813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 109052.80317164364,
            "unit": "ns/iter",
            "extra": "iterations: 6432\ncpu: 109048.5074626876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 86679.48750000127,
            "unit": "ns/iter",
            "extra": "iterations: 8080\ncpu: 86671.83168316798 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 85898.50042960302,
            "unit": "ns/iter",
            "extra": "iterations: 8147\ncpu: 85891.24831226139 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 85070.66876285354,
            "unit": "ns/iter",
            "extra": "iterations: 8269\ncpu: 85068.46051517755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 153977.6269806411,
            "unit": "ns/iter",
            "extra": "iterations: 4544\ncpu: 153970.68661971975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 525959.8904725506,
            "unit": "ns/iter",
            "extra": "iterations: 1333\ncpu: 525932.5581395352 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 423618.7197336434,
            "unit": "ns/iter",
            "extra": "iterations: 1652\ncpu: 423576.1501210637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 433204.90407528315,
            "unit": "ns/iter",
            "extra": "iterations: 1595\ncpu: 433201.12852664426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 421912.2320047831,
            "unit": "ns/iter",
            "extra": "iterations: 1681\ncpu: 421903.7477691791 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 271870.2603964364,
            "unit": "ns/iter",
            "extra": "iterations: 2573\ncpu: 271854.41119316383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 417629.5493126427,
            "unit": "ns/iter",
            "extra": "iterations: 1673\ncpu: 417582.36700537964 ns\nthreads: 1"
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
        "date": 1705574911442,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7356.821690576809,
            "unit": "ns/iter",
            "extra": "iterations: 95009\ncpu: 7356.783041606584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 53416.326900003245,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 53414.43 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 97860.43924165198,
            "unit": "ns/iter",
            "extra": "iterations: 8756\ncpu: 97855.20785746917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 143718.65492488607,
            "unit": "ns/iter",
            "extra": "iterations: 5990\ncpu: 143707.41235392322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 189037.07327208397,
            "unit": "ns/iter",
            "extra": "iterations: 4572\ncpu: 189025.21872265957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 234497.53047952935,
            "unit": "ns/iter",
            "extra": "iterations: 3691\ncpu: 234485.99295583862 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 278569.6743886916,
            "unit": "ns/iter",
            "extra": "iterations: 3108\ncpu: 278562.6447876448 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 323846.10628020595,
            "unit": "ns/iter",
            "extra": "iterations: 2691\ncpu: 323838.46153846156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 369071.8142796405,
            "unit": "ns/iter",
            "extra": "iterations: 2353\ncpu: 369049.8937526564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6013.421658687234,
            "unit": "ns/iter",
            "extra": "iterations: 115501\ncpu: 6013.390360256619 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 4952.480107020317,
            "unit": "ns/iter",
            "extra": "iterations: 141281\ncpu: 4952.249771731513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 4969.617902755488,
            "unit": "ns/iter",
            "extra": "iterations: 141252\ncpu: 4969.396539518023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 4985.807372329279,
            "unit": "ns/iter",
            "extra": "iterations: 139793\ncpu: 4985.758228237467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 8807.644340406581,
            "unit": "ns/iter",
            "extra": "iterations: 79458\ncpu: 8807.602758690122 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 28348.35970320647,
            "unit": "ns/iter",
            "extra": "iterations: 28707\ncpu: 28348.009196363266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 153303.42984648215,
            "unit": "ns/iter",
            "extra": "iterations: 5602\ncpu: 153301.23170296306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 116601.2087642908,
            "unit": "ns/iter",
            "extra": "iterations: 7348\ncpu: 116598.08111050638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 115348.53011561088,
            "unit": "ns/iter",
            "extra": "iterations: 7438\ncpu: 115345.8725463836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 109406.36459690936,
            "unit": "ns/iter",
            "extra": "iterations: 7666\ncpu: 109403.97860683531 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 331610.9372520522,
            "unit": "ns/iter",
            "extra": "iterations: 2773\ncpu: 331605.26505589613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1756650.2270992384,
            "unit": "ns/iter",
            "extra": "iterations: 524\ncpu: 1756602.6717557248 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1371656.9186390014,
            "unit": "ns/iter",
            "extra": "iterations: 676\ncpu: 1371626.7751479319 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1370029.7573528949,
            "unit": "ns/iter",
            "extra": "iterations: 680\ncpu: 1369968.9705882324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1355769.1906841022,
            "unit": "ns/iter",
            "extra": "iterations: 687\ncpu: 1355736.9723435245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 777688.1136364236,
            "unit": "ns/iter",
            "extra": "iterations: 1188\ncpu: 777658.9225589237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1333703.8263988358,
            "unit": "ns/iter",
            "extra": "iterations: 697\ncpu: 1333686.9440459097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 36528.346980371716,
            "unit": "ns/iter",
            "extra": "iterations: 22569\ncpu: 36527.44915592195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 185842.09231430411,
            "unit": "ns/iter",
            "extra": "iterations: 4658\ncpu: 185841.11206526464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 141157.6743319838,
            "unit": "ns/iter",
            "extra": "iterations: 6175\ncpu: 141154.9959514169 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 137872.59010090897,
            "unit": "ns/iter",
            "extra": "iterations: 6243\ncpu: 137868.79705269926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 131002.42951071185,
            "unit": "ns/iter",
            "extra": "iterations: 6540\ncpu: 130994.25076452593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 295808.92479393067,
            "unit": "ns/iter",
            "extra": "iterations: 2912\ncpu: 295797.90521978005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1787028.4412331458,
            "unit": "ns/iter",
            "extra": "iterations: 519\ncpu: 1786928.3236994192 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1398315.364457814,
            "unit": "ns/iter",
            "extra": "iterations: 664\ncpu: 1398247.2891566267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1434753.0665634272,
            "unit": "ns/iter",
            "extra": "iterations: 646\ncpu: 1434695.0464396218 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1391249.784753216,
            "unit": "ns/iter",
            "extra": "iterations: 669\ncpu: 1391180.8669656229 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 819481.2928942799,
            "unit": "ns/iter",
            "extra": "iterations: 1154\ncpu: 819438.7348353551 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1368659.4786451615,
            "unit": "ns/iter",
            "extra": "iterations: 679\ncpu: 1368618.556701026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 6485492.545454843,
            "unit": "ns/iter",
            "extra": "iterations: 143\ncpu: 6485456.643356653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3097718.8704317515,
            "unit": "ns/iter",
            "extra": "iterations: 301\ncpu: 3097631.2292358754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 26656.00065047242,
            "unit": "ns/iter",
            "extra": "iterations: 30747\ncpu: 26655.631443717954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 140460.0198891448,
            "unit": "ns/iter",
            "extra": "iterations: 6134\ncpu: 140457.7600260848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 112038.18284365957,
            "unit": "ns/iter",
            "extra": "iterations: 7624\ncpu: 112035.66369359904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 111895.92422667184,
            "unit": "ns/iter",
            "extra": "iterations: 7694\ncpu: 111891.87678710658 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 102583.91232284441,
            "unit": "ns/iter",
            "extra": "iterations: 8326\ncpu: 102582.69276963652 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 268162.28672837524,
            "unit": "ns/iter",
            "extra": "iterations: 3240\ncpu: 268155.21604938427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1757190.1431263029,
            "unit": "ns/iter",
            "extra": "iterations: 531\ncpu: 1757175.7062146913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1361489.2139737215,
            "unit": "ns/iter",
            "extra": "iterations: 687\ncpu: 1361473.9446870384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1368884.097201632,
            "unit": "ns/iter",
            "extra": "iterations: 679\ncpu: 1368845.0662739268 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1344463.2539912954,
            "unit": "ns/iter",
            "extra": "iterations: 689\ncpu: 1344456.4586357125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 772250.6338028059,
            "unit": "ns/iter",
            "extra": "iterations: 1207\ncpu: 772222.0381110173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1327459.007142774,
            "unit": "ns/iter",
            "extra": "iterations: 700\ncpu: 1327440.7142857164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2890.5832471821004,
            "unit": "ns/iter",
            "extra": "iterations: 241822\ncpu: 2890.5083077635563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 19726.101504077556,
            "unit": "ns/iter",
            "extra": "iterations: 35437\ncpu: 19724.79329514353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 15565.769798733016,
            "unit": "ns/iter",
            "extra": "iterations: 44965\ncpu: 15564.959412876746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 14864.561035599572,
            "unit": "ns/iter",
            "extra": "iterations: 47161\ncpu: 14863.881173003067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 11204.121105937664,
            "unit": "ns/iter",
            "extra": "iterations: 62499\ncpu: 11203.484855757713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 98903.83368720053,
            "unit": "ns/iter",
            "extra": "iterations: 7065\ncpu: 98898.2024062282 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 122663.7733730887,
            "unit": "ns/iter",
            "extra": "iterations: 5701\ncpu: 122661.28749342216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 30034.41464566403,
            "unit": "ns/iter",
            "extra": "iterations: 23297\ncpu: 30033.811220328866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 30078.36782499835,
            "unit": "ns/iter",
            "extra": "iterations: 23223\ncpu: 30077.604099384098 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 30989.718320675016,
            "unit": "ns/iter",
            "extra": "iterations: 23438\ncpu: 30988.0663879172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 61309.00244840231,
            "unit": "ns/iter",
            "extra": "iterations: 11436\ncpu: 61308.30710038499 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 55459.73444541097,
            "unit": "ns/iter",
            "extra": "iterations: 12649\ncpu: 55456.79500355816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 20364.76021211088,
            "unit": "ns/iter",
            "extra": "iterations: 34322\ncpu: 20364.101742322837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 103544.49807920824,
            "unit": "ns/iter",
            "extra": "iterations: 6768\ncpu: 103537.92848699783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 84795.5856380294,
            "unit": "ns/iter",
            "extra": "iterations: 8244\ncpu: 84789.27704997602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 84136.49339736301,
            "unit": "ns/iter",
            "extra": "iterations: 8330\ncpu: 84133.8535414163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 82593.32734366192,
            "unit": "ns/iter",
            "extra": "iterations: 8459\ncpu: 82588.21373684781 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 155692.50712695104,
            "unit": "ns/iter",
            "extra": "iterations: 4490\ncpu: 155684.9443207119 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 519134.5219330771,
            "unit": "ns/iter",
            "extra": "iterations: 1345\ncpu: 519110.483271375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 421556.77871822764,
            "unit": "ns/iter",
            "extra": "iterations: 1654\ncpu: 421541.11245465116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 419927.9345345746,
            "unit": "ns/iter",
            "extra": "iterations: 1665\ncpu: 419908.10810811445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 413260.09805079806,
            "unit": "ns/iter",
            "extra": "iterations: 1693\ncpu: 413253.1010041314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 270421.4228083772,
            "unit": "ns/iter",
            "extra": "iterations: 2578\ncpu: 270413.38246702903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 411076.9699999604,
            "unit": "ns/iter",
            "extra": "iterations: 1700\ncpu: 411071.58823529194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 21855.3140717637,
            "unit": "ns/iter",
            "extra": "iterations: 32050\ncpu: 21854.45553822138 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 109337.32723291423,
            "unit": "ns/iter",
            "extra": "iterations: 6393\ncpu: 109336.16455498186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 87601.31128160423,
            "unit": "ns/iter",
            "extra": "iterations: 7951\ncpu: 87601.66016853249 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 85106.38252497668,
            "unit": "ns/iter",
            "extra": "iterations: 8206\ncpu: 85102.66877894207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 84530.81323991773,
            "unit": "ns/iter",
            "extra": "iterations: 8278\ncpu: 84531.07030683763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 157889.8361136267,
            "unit": "ns/iter",
            "extra": "iterations: 4436\ncpu: 157886.24887286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 517719.95934960054,
            "unit": "ns/iter",
            "extra": "iterations: 1353\ncpu: 517712.41685144126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 419268.86358173855,
            "unit": "ns/iter",
            "extra": "iterations: 1664\ncpu: 419256.4903846136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 424836.2624847621,
            "unit": "ns/iter",
            "extra": "iterations: 1642\ncpu: 424806.9427527448 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 412971.90303387877,
            "unit": "ns/iter",
            "extra": "iterations: 1681\ncpu: 412922.7840571046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 274796.27587562875,
            "unit": "ns/iter",
            "extra": "iterations: 2541\ncpu: 274773.5930735945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 413814.357014946,
            "unit": "ns/iter",
            "extra": "iterations: 1675\ncpu: 413791.701492533 ns\nthreads: 1"
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
        "date": 1705772744831,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7393.806400406523,
            "unit": "ns/iter",
            "extra": "iterations: 94494\ncpu: 7393.746692911719 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 53521.97280000155,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 53519.759999999995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 98341.20551549773,
            "unit": "ns/iter",
            "extra": "iterations: 8739\ncpu: 98340.19910744939 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 143706.99147870074,
            "unit": "ns/iter",
            "extra": "iterations: 5985\ncpu: 143705.76441102754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 188690.79965157635,
            "unit": "ns/iter",
            "extra": "iterations: 4592\ncpu: 188689.5688153311 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 233298.1345738826,
            "unit": "ns/iter",
            "extra": "iterations: 3708\ncpu: 233296.7637540452 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 278504.96665596863,
            "unit": "ns/iter",
            "extra": "iterations: 3119\ncpu: 278503.71914075036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 323596.51059874,
            "unit": "ns/iter",
            "extra": "iterations: 2689\ncpu: 323594.9423577537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 368115.33643673325,
            "unit": "ns/iter",
            "extra": "iterations: 2363\ncpu: 368111.4261531951 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6096.542234142156,
            "unit": "ns/iter",
            "extra": "iterations: 114469\ncpu: 6096.573744856693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5007.421113482165,
            "unit": "ns/iter",
            "extra": "iterations: 140119\ncpu: 5007.428685617221 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5013.2323315649355,
            "unit": "ns/iter",
            "extra": "iterations: 140618\ncpu: 5013.133453754133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5066.07725358192,
            "unit": "ns/iter",
            "extra": "iterations: 118234\ncpu: 5065.7332070301245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 8767.454997984072,
            "unit": "ns/iter",
            "extra": "iterations: 79352\ncpu: 8767.480340760152 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 27845.739137853096,
            "unit": "ns/iter",
            "extra": "iterations: 29299\ncpu: 27845.882112017494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 152572.4898684527,
            "unit": "ns/iter",
            "extra": "iterations: 5626\ncpu: 152572.8581585495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 116046.15736310044,
            "unit": "ns/iter",
            "extra": "iterations: 7524\ncpu: 116041.67995746937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 111584.47796126403,
            "unit": "ns/iter",
            "extra": "iterations: 7691\ncpu: 111581.36783253148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 102345.70754374946,
            "unit": "ns/iter",
            "extra": "iterations: 8285\ncpu: 102342.703681352 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 336216.2243093663,
            "unit": "ns/iter",
            "extra": "iterations: 2715\ncpu: 336213.70165745815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1779382.3754790523,
            "unit": "ns/iter",
            "extra": "iterations: 522\ncpu: 1779318.582375478 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1387394.3856501866,
            "unit": "ns/iter",
            "extra": "iterations: 669\ncpu: 1387323.9162929798 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1400763.7356495894,
            "unit": "ns/iter",
            "extra": "iterations: 662\ncpu: 1400728.5498489398 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1359075.1171303235,
            "unit": "ns/iter",
            "extra": "iterations: 683\ncpu: 1358999.707174229 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 773930.3552960919,
            "unit": "ns/iter",
            "extra": "iterations: 1199\ncpu: 773895.9132610515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1344250.7793904224,
            "unit": "ns/iter",
            "extra": "iterations: 689\ncpu: 1344192.7431059508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 36044.21604857731,
            "unit": "ns/iter",
            "extra": "iterations: 22893\ncpu: 36043.06119774602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 176929.11070259847,
            "unit": "ns/iter",
            "extra": "iterations: 4896\ncpu: 176920.95588235313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 134499.85068577982,
            "unit": "ns/iter",
            "extra": "iterations: 6416\ncpu: 134494.1396508724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 134904.78164704636,
            "unit": "ns/iter",
            "extra": "iterations: 6375\ncpu: 134901.0666666667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 124687.70978562559,
            "unit": "ns/iter",
            "extra": "iterations: 6857\ncpu: 124686.34971561938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 316872.8956426213,
            "unit": "ns/iter",
            "extra": "iterations: 2731\ncpu: 316860.34419626556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1810323.5242720472,
            "unit": "ns/iter",
            "extra": "iterations: 515\ncpu: 1810291.844660197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1409677.606060692,
            "unit": "ns/iter",
            "extra": "iterations: 660\ncpu: 1409673.6363636418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1467407.7932618742,
            "unit": "ns/iter",
            "extra": "iterations: 653\ncpu: 1467402.9096477784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1406300.998494022,
            "unit": "ns/iter",
            "extra": "iterations: 664\ncpu: 1406284.3373493974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 821431.6843501368,
            "unit": "ns/iter",
            "extra": "iterations: 1131\ncpu: 821430.6808134391 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1378845.0177515405,
            "unit": "ns/iter",
            "extra": "iterations: 676\ncpu: 1378818.6390532565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 6610230.54609933,
            "unit": "ns/iter",
            "extra": "iterations: 141\ncpu: 6610200.709219873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3066155.629508252,
            "unit": "ns/iter",
            "extra": "iterations: 305\ncpu: 3066114.4262294974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 26595.44821006911,
            "unit": "ns/iter",
            "extra": "iterations: 30923\ncpu: 26593.846004592266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 140073.088350159,
            "unit": "ns/iter",
            "extra": "iterations: 6146\ncpu: 140066.23820370872 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 108156.08817231335,
            "unit": "ns/iter",
            "extra": "iterations: 7939\ncpu: 108150.17004660562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 109883.12230582057,
            "unit": "ns/iter",
            "extra": "iterations: 7841\ncpu: 109878.676189262 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 99509.69676518449,
            "unit": "ns/iter",
            "extra": "iterations: 8594\ncpu: 99504.95694670703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 280912.0365814237,
            "unit": "ns/iter",
            "extra": "iterations: 3089\ncpu: 280895.46778892854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1758849.041431187,
            "unit": "ns/iter",
            "extra": "iterations: 531\ncpu: 1758756.497175137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1361175.0991253557,
            "unit": "ns/iter",
            "extra": "iterations: 686\ncpu: 1361171.5743440236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1378845.1274073548,
            "unit": "ns/iter",
            "extra": "iterations: 675\ncpu: 1378837.481481475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1340248.6379309122,
            "unit": "ns/iter",
            "extra": "iterations: 696\ncpu: 1340251.149425281 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 761094.0336340977,
            "unit": "ns/iter",
            "extra": "iterations: 1219\ncpu: 761065.7095980342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1333029.615384547,
            "unit": "ns/iter",
            "extra": "iterations: 702\ncpu: 1333012.2507122536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2889.5441837554986,
            "unit": "ns/iter",
            "extra": "iterations: 241582\ncpu: 2889.4913528326024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 19952.882756264666,
            "unit": "ns/iter",
            "extra": "iterations: 35149\ncpu: 19952.894819198158 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 14803.130827864654,
            "unit": "ns/iter",
            "extra": "iterations: 47230\ncpu: 14802.911285200153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 14891.879126265836,
            "unit": "ns/iter",
            "extra": "iterations: 46925\ncpu: 14891.731486414454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 11058.563776797444,
            "unit": "ns/iter",
            "extra": "iterations: 63440\ncpu: 11058.354350567408 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 99605.35866477019,
            "unit": "ns/iter",
            "extra": "iterations: 7040\ncpu: 99603.80681818158 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 121656.35038274356,
            "unit": "ns/iter",
            "extra": "iterations: 5748\ncpu: 121656.36743214975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 29957.561862739563,
            "unit": "ns/iter",
            "extra": "iterations: 23342\ncpu: 29957.227315568492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 30530.66212914237,
            "unit": "ns/iter",
            "extra": "iterations: 22920\ncpu: 30530.71989528809 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 29998.794637125364,
            "unit": "ns/iter",
            "extra": "iterations: 23383\ncpu: 29998.216653124182 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 61991.84406269898,
            "unit": "ns/iter",
            "extra": "iterations: 11293\ncpu: 61991.844505445806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 55428.05089299736,
            "unit": "ns/iter",
            "extra": "iterations: 12654\ncpu: 55425.983878615356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 20101.356769786118,
            "unit": "ns/iter",
            "extra": "iterations: 34846\ncpu: 20101.110600929496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 102608.65273922353,
            "unit": "ns/iter",
            "extra": "iterations: 6845\ncpu: 102605.06939371834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 84188.36130198518,
            "unit": "ns/iter",
            "extra": "iterations: 8295\ncpu: 84187.2091621455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 85130.01335275354,
            "unit": "ns/iter",
            "extra": "iterations: 8238\ncpu: 85130.18936635241 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 82310.63802237433,
            "unit": "ns/iter",
            "extra": "iterations: 8495\ncpu: 82308.42848734572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 155718.56304203637,
            "unit": "ns/iter",
            "extra": "iterations: 4497\ncpu: 155718.54569713044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 518454.56486281817,
            "unit": "ns/iter",
            "extra": "iterations: 1349\ncpu: 518449.6664195746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 420448.1440627292,
            "unit": "ns/iter",
            "extra": "iterations: 1659\ncpu: 420447.8601567147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 421708.68291212514,
            "unit": "ns/iter",
            "extra": "iterations: 1662\ncpu: 421702.9482551176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 414591.3193127626,
            "unit": "ns/iter",
            "extra": "iterations: 1688\ncpu: 414592.3578199091 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 269774.244410164,
            "unit": "ns/iter",
            "extra": "iterations: 2594\ncpu: 269772.47494217614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 411123.43319602654,
            "unit": "ns/iter",
            "extra": "iterations: 1699\ncpu: 411123.71983519755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 22156.83584881934,
            "unit": "ns/iter",
            "extra": "iterations: 31538\ncpu: 22156.664975584965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 109950.05961721113,
            "unit": "ns/iter",
            "extra": "iterations: 6374\ncpu: 109946.01506118651 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 86908.87882921787,
            "unit": "ns/iter",
            "extra": "iterations: 8063\ncpu: 86904.27880441594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 84388.27309962688,
            "unit": "ns/iter",
            "extra": "iterations: 8301\ncpu: 84381.91784122273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 83655.34602985259,
            "unit": "ns/iter",
            "extra": "iterations: 8375\ncpu: 83651.67761194108 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 156320.91158740935,
            "unit": "ns/iter",
            "extra": "iterations: 4479\ncpu: 156318.30765795877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 515238.0573950941,
            "unit": "ns/iter",
            "extra": "iterations: 1359\ncpu: 515238.70493008936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 416793.1590231966,
            "unit": "ns/iter",
            "extra": "iterations: 1679\ncpu: 416787.31387730484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 423968.6327272549,
            "unit": "ns/iter",
            "extra": "iterations: 1650\ncpu: 423954.000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 412674.65525387035,
            "unit": "ns/iter",
            "extra": "iterations: 1694\ncpu: 412645.100354191 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 271393.84469401976,
            "unit": "ns/iter",
            "extra": "iterations: 2582\ncpu: 271379.5120061962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 412276.836374347,
            "unit": "ns/iter",
            "extra": "iterations: 1699\ncpu: 412258.6815774006 ns\nthreads: 1"
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
        "date": 1705774146215,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7514.894904253392,
            "unit": "ns/iter",
            "extra": "iterations: 93058\ncpu: 7514.715553740677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 55124.29610000708,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 55123.16 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 100878.10687022096,
            "unit": "ns/iter",
            "extra": "iterations: 8515\ncpu: 100874.58602466236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 146023.83805325406,
            "unit": "ns/iter",
            "extra": "iterations: 5897\ncpu: 146021.19721892485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 189463.2691044484,
            "unit": "ns/iter",
            "extra": "iterations: 4567\ncpu: 189459.66717757835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 237431.29865493492,
            "unit": "ns/iter",
            "extra": "iterations: 3643\ncpu: 237425.748009882 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 282477.3867493261,
            "unit": "ns/iter",
            "extra": "iterations: 3064\ncpu: 282465.33942558756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 328812.784446967,
            "unit": "ns/iter",
            "extra": "iterations: 2649\ncpu: 328784.14496036246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 371388.35552706034,
            "unit": "ns/iter",
            "extra": "iterations: 2343\ncpu: 371384.67776355153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6179.679569646052,
            "unit": "ns/iter",
            "extra": "iterations: 113488\ncpu: 6179.166960383481 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5104.623979647569,
            "unit": "ns/iter",
            "extra": "iterations: 137575\ncpu: 5104.353261857173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5014.235490000374,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5014.1859999999915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5071.177517928173,
            "unit": "ns/iter",
            "extra": "iterations: 137772\ncpu: 5070.873617280724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 8822.19162915029,
            "unit": "ns/iter",
            "extra": "iterations: 79299\ncpu: 8821.736717991385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 30311.53467611911,
            "unit": "ns/iter",
            "extra": "iterations: 26661\ncpu: 30309.849593038518 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 149718.200803221,
            "unit": "ns/iter",
            "extra": "iterations: 5727\ncpu: 149711.76881438814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 110970.99830948641,
            "unit": "ns/iter",
            "extra": "iterations: 7690\ncpu: 110961.87256176863 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 109801.0860645181,
            "unit": "ns/iter",
            "extra": "iterations: 7750\ncpu: 109796.76129032244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 105404.59997497163,
            "unit": "ns/iter",
            "extra": "iterations: 7992\ncpu: 105398.82382382399 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 327440.09564595425,
            "unit": "ns/iter",
            "extra": "iterations: 2802\ncpu: 327433.69022127026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1815951.614173225,
            "unit": "ns/iter",
            "extra": "iterations: 508\ncpu: 1815901.7716535418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1412393.5960366044,
            "unit": "ns/iter",
            "extra": "iterations: 656\ncpu: 1412343.2926829269 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1407457.685015242,
            "unit": "ns/iter",
            "extra": "iterations: 654\ncpu: 1407374.7706422028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1397846.6093514594,
            "unit": "ns/iter",
            "extra": "iterations: 663\ncpu: 1397779.4871794847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 788407.5362937746,
            "unit": "ns/iter",
            "extra": "iterations: 1171\ncpu: 788337.3185311697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1380231.2426036124,
            "unit": "ns/iter",
            "extra": "iterations: 676\ncpu: 1380173.3727810637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 37471.12906305604,
            "unit": "ns/iter",
            "extra": "iterations: 21997\ncpu: 37467.34100104555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 177957.67783718454,
            "unit": "ns/iter",
            "extra": "iterations: 4864\ncpu: 177944.90131578958 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 135999.57601138152,
            "unit": "ns/iter",
            "extra": "iterations: 6328\ncpu: 135986.34639696561 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 135998.42037914164,
            "unit": "ns/iter",
            "extra": "iterations: 6330\ncpu: 135991.62717219596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 128568.55746347792,
            "unit": "ns/iter",
            "extra": "iterations: 6639\ncpu: 128558.382286489 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 321643.6017075123,
            "unit": "ns/iter",
            "extra": "iterations: 2694\ncpu: 321624.23904973996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1852269.6972111652,
            "unit": "ns/iter",
            "extra": "iterations: 502\ncpu: 1852098.207171318 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1428394.196620632,
            "unit": "ns/iter",
            "extra": "iterations: 651\ncpu: 1428343.317972358 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1466499.908517218,
            "unit": "ns/iter",
            "extra": "iterations: 634\ncpu: 1466366.7192429013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1423950.1485450985,
            "unit": "ns/iter",
            "extra": "iterations: 653\ncpu: 1423853.5987748876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 822507.7275132387,
            "unit": "ns/iter",
            "extra": "iterations: 1134\ncpu: 822444.0035273357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1400381.8914026925,
            "unit": "ns/iter",
            "extra": "iterations: 663\ncpu: 1400339.9698340902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 6583810.191489273,
            "unit": "ns/iter",
            "extra": "iterations: 141\ncpu: 6583570.212765943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3000988.6089743534,
            "unit": "ns/iter",
            "extra": "iterations: 312\ncpu: 3000686.8589743692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 26584.79008613783,
            "unit": "ns/iter",
            "extra": "iterations: 30765\ncpu: 26583.962294815356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 136287.07209634894,
            "unit": "ns/iter",
            "extra": "iterations: 6311\ncpu: 136274.72666772295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 103702.16890990417,
            "unit": "ns/iter",
            "extra": "iterations: 8247\ncpu: 103695.65902752556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 102911.12069796112,
            "unit": "ns/iter",
            "extra": "iterations: 8310\ncpu: 102903.04452466908 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 101799.12845237432,
            "unit": "ns/iter",
            "extra": "iterations: 8400\ncpu: 101795.69047618995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 270624.6514536051,
            "unit": "ns/iter",
            "extra": "iterations: 3199\ncpu: 270599.0309471715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1818495.203883465,
            "unit": "ns/iter",
            "extra": "iterations: 515\ncpu: 1818408.932038827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1398848.0149925065,
            "unit": "ns/iter",
            "extra": "iterations: 667\ncpu: 1398735.6821589286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1404588.2797528254,
            "unit": "ns/iter",
            "extra": "iterations: 647\ncpu: 1404553.786707878 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1383922.835311575,
            "unit": "ns/iter",
            "extra": "iterations: 674\ncpu: 1383805.9347181034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 771541.2163501095,
            "unit": "ns/iter",
            "extra": "iterations: 1211\ncpu: 771493.8893476505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1356912.340611416,
            "unit": "ns/iter",
            "extra": "iterations: 687\ncpu: 1356789.8107714679 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2887.882398805232,
            "unit": "ns/iter",
            "extra": "iterations: 242404\ncpu: 2887.739476246259 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 20158.7832622959,
            "unit": "ns/iter",
            "extra": "iterations: 34724\ncpu: 20157.504895749513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 15067.892186827357,
            "unit": "ns/iter",
            "extra": "iterations: 46460\ncpu: 15066.986655187176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 14979.118905303607,
            "unit": "ns/iter",
            "extra": "iterations: 46844\ncpu: 14977.826402527522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 11043.472195951425,
            "unit": "ns/iter",
            "extra": "iterations: 63444\ncpu: 11043.313788537904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 101814.19019122448,
            "unit": "ns/iter",
            "extra": "iterations: 6851\ncpu: 101807.07925850274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 124581.2346576851,
            "unit": "ns/iter",
            "extra": "iterations: 5638\ncpu: 124575.11528910934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 30271.21364226645,
            "unit": "ns/iter",
            "extra": "iterations: 23090\ncpu: 30268.47119965341 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 30379.103518678363,
            "unit": "ns/iter",
            "extra": "iterations: 23020\ncpu: 30377.7019982622 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 29912.160530511184,
            "unit": "ns/iter",
            "extra": "iterations: 23223\ncpu: 29910.175257287956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 61212.76026977086,
            "unit": "ns/iter",
            "extra": "iterations: 11417\ncpu: 61211.246386966835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 56101.27478889802,
            "unit": "ns/iter",
            "extra": "iterations: 12435\ncpu: 56100.04825090523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 20345.794355188456,
            "unit": "ns/iter",
            "extra": "iterations: 34545\ncpu: 20345.569546967825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 101973.45330626902,
            "unit": "ns/iter",
            "extra": "iterations: 6896\ncpu: 101972.56380510435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 83807.4112870919,
            "unit": "ns/iter",
            "extra": "iterations: 7513\ncpu: 83806.13603087874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 85274.5329183587,
            "unit": "ns/iter",
            "extra": "iterations: 8354\ncpu: 85272.65980368633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 83564.60977072563,
            "unit": "ns/iter",
            "extra": "iterations: 8331\ncpu: 83561.62525507188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 150284.02189781773,
            "unit": "ns/iter",
            "extra": "iterations: 4658\ncpu: 150279.04680120235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 526242.6228399948,
            "unit": "ns/iter",
            "extra": "iterations: 1331\ncpu: 526233.8091660435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 425383.839611176,
            "unit": "ns/iter",
            "extra": "iterations: 1646\ncpu: 425377.21749695577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 426658.97613219946,
            "unit": "ns/iter",
            "extra": "iterations: 1634\ncpu: 426649.0820073448 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 426903.922608156,
            "unit": "ns/iter",
            "extra": "iterations: 1641\ncpu: 426899.8171846383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 271924.8057610068,
            "unit": "ns/iter",
            "extra": "iterations: 2569\ncpu: 271907.8240560549 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 416691.41050117434,
            "unit": "ns/iter",
            "extra": "iterations: 1676\ncpu: 416667.7207637282 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 21900.832269369723,
            "unit": "ns/iter",
            "extra": "iterations: 31956\ncpu: 21899.446113406204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 109202.36761725883,
            "unit": "ns/iter",
            "extra": "iterations: 6417\ncpu: 109194.37431821851 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 87318.34942156168,
            "unit": "ns/iter",
            "extra": "iterations: 8039\ncpu: 87311.20786167498 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 86872.716689348,
            "unit": "ns/iter",
            "extra": "iterations: 8083\ncpu: 86868.32859086838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 86408.93393429513,
            "unit": "ns/iter",
            "extra": "iterations: 8098\ncpu: 86406.47073351376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 152074.46384365845,
            "unit": "ns/iter",
            "extra": "iterations: 4605\ncpu: 152060.28230184762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 525409.8088788289,
            "unit": "ns/iter",
            "extra": "iterations: 1329\ncpu: 525368.5477802877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 426130.7226634006,
            "unit": "ns/iter",
            "extra": "iterations: 1637\ncpu: 426107.3915699489 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 431670.69747378834,
            "unit": "ns/iter",
            "extra": "iterations: 1623\ncpu: 431665.3727664841 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 421652.7977053167,
            "unit": "ns/iter",
            "extra": "iterations: 1656\ncpu: 421627.958937203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 275045.3393629623,
            "unit": "ns/iter",
            "extra": "iterations: 2543\ncpu: 275046.6378293335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 419752.2329340773,
            "unit": "ns/iter",
            "extra": "iterations: 1670\ncpu: 419712.5149700613 ns\nthreads: 1"
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
        "date": 1705777715594,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7414.846749275811,
            "unit": "ns/iter",
            "extra": "iterations: 94179\ncpu: 7414.1623928901345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 53977.24949999656,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 53976.36 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 100002.78406440004,
            "unit": "ns/iter",
            "extra": "iterations: 8572\ncpu: 99998.09846010263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 144824.32061455646,
            "unit": "ns/iter",
            "extra": "iterations: 5923\ncpu: 144810.3326017221 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 190056.29311099907,
            "unit": "ns/iter",
            "extra": "iterations: 4558\ncpu: 190036.2878455464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 235553.75095160413,
            "unit": "ns/iter",
            "extra": "iterations: 3678\ncpu: 235538.58075040762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 279489.7440284013,
            "unit": "ns/iter",
            "extra": "iterations: 3098\ncpu: 279486.24919302773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 325046.909431137,
            "unit": "ns/iter",
            "extra": "iterations: 2672\ncpu: 325026.60928143706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 370385.6058923777,
            "unit": "ns/iter",
            "extra": "iterations: 2342\ncpu: 370352.6900085392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6165.081952797039,
            "unit": "ns/iter",
            "extra": "iterations: 113724\ncpu: 6164.8543842988265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5046.78537000018,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5046.783000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 4988.445717883299,
            "unit": "ns/iter",
            "extra": "iterations: 139779\ncpu: 4988.260039061655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 4986.3906821821965,
            "unit": "ns/iter",
            "extra": "iterations: 139904\ncpu: 4986.383520128093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 8838.815223714782,
            "unit": "ns/iter",
            "extra": "iterations: 79074\ncpu: 8838.796570301238 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 31714.086806497056,
            "unit": "ns/iter",
            "extra": "iterations: 25793\ncpu: 31713.26328848909 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 142331.84390568247,
            "unit": "ns/iter",
            "extra": "iterations: 6022\ncpu: 142329.4586516108 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 110409.67678987181,
            "unit": "ns/iter",
            "extra": "iterations: 7738\ncpu: 110406.0609976737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 112210.48091302013,
            "unit": "ns/iter",
            "extra": "iterations: 7623\ncpu: 112208.10704447053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 107062.48866213165,
            "unit": "ns/iter",
            "extra": "iterations: 7938\ncpu: 107060.68279163536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 333440.10409862414,
            "unit": "ns/iter",
            "extra": "iterations: 2757\ncpu: 333436.38012332196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1767203.6852206516,
            "unit": "ns/iter",
            "extra": "iterations: 521\ncpu: 1767152.3992322478 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1396149.6651583747,
            "unit": "ns/iter",
            "extra": "iterations: 663\ncpu: 1396121.870286579 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1379040.5735513347,
            "unit": "ns/iter",
            "extra": "iterations: 673\ncpu: 1379023.031203564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1379766.4338781075,
            "unit": "ns/iter",
            "extra": "iterations: 673\ncpu: 1379731.6493313485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 771818.2911073823,
            "unit": "ns/iter",
            "extra": "iterations: 1192\ncpu: 771783.8087248341 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1345165.0072673194,
            "unit": "ns/iter",
            "extra": "iterations: 688\ncpu: 1345122.9651162825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 36218.03618738737,
            "unit": "ns/iter",
            "extra": "iterations: 22798\ncpu: 36217.646284761686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 177571.4229257224,
            "unit": "ns/iter",
            "extra": "iterations: 4833\ncpu: 177568.5909373059 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 136825.59358119403,
            "unit": "ns/iter",
            "extra": "iterations: 6294\ncpu: 136821.44899904693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 136912.86023904505,
            "unit": "ns/iter",
            "extra": "iterations: 6275\ncpu: 136908.36653386478 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 124363.5241549343,
            "unit": "ns/iter",
            "extra": "iterations: 6893\ncpu: 124363.23806760504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 307808.345195751,
            "unit": "ns/iter",
            "extra": "iterations: 2810\ncpu: 307800.7473309618 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1827831.8747553935,
            "unit": "ns/iter",
            "extra": "iterations: 511\ncpu: 1827746.1839530396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1429698.5738460184,
            "unit": "ns/iter",
            "extra": "iterations: 650\ncpu: 1429664.4615384606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1425403.1225114556,
            "unit": "ns/iter",
            "extra": "iterations: 653\ncpu: 1425357.733537515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1410121.5933231616,
            "unit": "ns/iter",
            "extra": "iterations: 659\ncpu: 1410080.7283763306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 805876.5204525782,
            "unit": "ns/iter",
            "extra": "iterations: 1149\ncpu: 805854.4821583979 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1384785.517804228,
            "unit": "ns/iter",
            "extra": "iterations: 674\ncpu: 1384744.2136498445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 6587270.91489409,
            "unit": "ns/iter",
            "extra": "iterations: 141\ncpu: 6587107.092198578 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3046617.7091505094,
            "unit": "ns/iter",
            "extra": "iterations: 306\ncpu: 3046539.215686267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 29772.12727535347,
            "unit": "ns/iter",
            "extra": "iterations: 27688\ncpu: 29771.507512279775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 133081.2940994674,
            "unit": "ns/iter",
            "extra": "iterations: 6474\ncpu: 133079.11646586354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 105816.97349605603,
            "unit": "ns/iter",
            "extra": "iterations: 8112\ncpu: 105814.60798816566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 109711.97097758653,
            "unit": "ns/iter",
            "extra": "iterations: 7856\ncpu: 109707.03920570224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 103423.81492681749,
            "unit": "ns/iter",
            "extra": "iterations: 8267\ncpu: 103420.52739808927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 269041.100061569,
            "unit": "ns/iter",
            "extra": "iterations: 3248\ncpu: 269040.70197044354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1764054.9337122368,
            "unit": "ns/iter",
            "extra": "iterations: 528\ncpu: 1764012.5000000028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1381334.0251851548,
            "unit": "ns/iter",
            "extra": "iterations: 675\ncpu: 1381284.888888893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1361319.9692533417,
            "unit": "ns/iter",
            "extra": "iterations: 683\ncpu: 1361295.1683748148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1353645.6240928539,
            "unit": "ns/iter",
            "extra": "iterations: 689\ncpu: 1353643.1059506526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 757252.7872340688,
            "unit": "ns/iter",
            "extra": "iterations: 1222\ncpu: 757228.0687397755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1325577.91607384,
            "unit": "ns/iter",
            "extra": "iterations: 703\ncpu: 1325550.6401137928 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2935.010252263366,
            "unit": "ns/iter",
            "extra": "iterations: 238679\ncpu: 2934.9460991540996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 19438.88087295004,
            "unit": "ns/iter",
            "extra": "iterations: 35970\ncpu: 19438.851820961943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 15493.985911443226,
            "unit": "ns/iter",
            "extra": "iterations: 45214\ncpu: 15493.652408546039 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 15524.557087529502,
            "unit": "ns/iter",
            "extra": "iterations: 45185\ncpu: 15524.173951532634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 11112.293420488228,
            "unit": "ns/iter",
            "extra": "iterations: 63029\ncpu: 11112.162655285701 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 99057.25559966346,
            "unit": "ns/iter",
            "extra": "iterations: 7054\ncpu: 99057.0314715053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 124537.76091182452,
            "unit": "ns/iter",
            "extra": "iterations: 5659\ncpu: 124536.41986216673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 29893.038775245863,
            "unit": "ns/iter",
            "extra": "iterations: 23417\ncpu: 29892.390143912577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 30069.868997328413,
            "unit": "ns/iter",
            "extra": "iterations: 23198\ncpu: 30069.445641865554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 29726.539420501867,
            "unit": "ns/iter",
            "extra": "iterations: 23503\ncpu: 29724.447942815626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 61277.55576956594,
            "unit": "ns/iter",
            "extra": "iterations: 11422\ncpu: 61276.729119243275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 55812.48260453072,
            "unit": "ns/iter",
            "extra": "iterations: 12532\ncpu: 55807.189594637515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 21025.100541355365,
            "unit": "ns/iter",
            "extra": "iterations: 33250\ncpu: 21023.85563909791 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 104412.50178890489,
            "unit": "ns/iter",
            "extra": "iterations: 6708\ncpu: 104402.1466905193 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 85331.80643196822,
            "unit": "ns/iter",
            "extra": "iterations: 8209\ncpu: 85324.58277500285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 85358.81225585351,
            "unit": "ns/iter",
            "extra": "iterations: 8192\ncpu: 85357.43408203192 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 84419.41432194294,
            "unit": "ns/iter",
            "extra": "iterations: 8281\ncpu: 84414.84120275274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 157671.14018902383,
            "unit": "ns/iter",
            "extra": "iterations: 4444\ncpu: 157660.73357335903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 521771.4460163093,
            "unit": "ns/iter",
            "extra": "iterations: 1343\ncpu: 521732.0923306083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 427141.56303554715,
            "unit": "ns/iter",
            "extra": "iterations: 1634\ncpu: 427123.5618115069 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 428853.88895704644,
            "unit": "ns/iter",
            "extra": "iterations: 1630\ncpu: 428835.7668711678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 424151.0871143387,
            "unit": "ns/iter",
            "extra": "iterations: 1653\ncpu: 424139.5039322436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 272942.23559188226,
            "unit": "ns/iter",
            "extra": "iterations: 2568\ncpu: 272930.2959501556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 417436.7467144353,
            "unit": "ns/iter",
            "extra": "iterations: 1674\ncpu: 417408.06451613293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 22484.163001253943,
            "unit": "ns/iter",
            "extra": "iterations: 31147\ncpu: 22483.35313192275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 111689.0403766515,
            "unit": "ns/iter",
            "extra": "iterations: 6266\ncpu: 111687.31248005136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 88653.31196257337,
            "unit": "ns/iter",
            "extra": "iterations: 7908\ncpu: 88651.16337885766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 87288.07555889632,
            "unit": "ns/iter",
            "extra": "iterations: 8007\ncpu: 87286.47433495679 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 86955.91336818892,
            "unit": "ns/iter",
            "extra": "iterations: 8034\ncpu: 86954.99128703006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 153867.11877059872,
            "unit": "ns/iter",
            "extra": "iterations: 4555\ncpu: 153865.22502744143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 519470.5194319609,
            "unit": "ns/iter",
            "extra": "iterations: 1338\ncpu: 519456.7264574017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 423536.53062461724,
            "unit": "ns/iter",
            "extra": "iterations: 1649\ncpu: 423532.44390539353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 426851.9421085157,
            "unit": "ns/iter",
            "extra": "iterations: 1641\ncpu: 426850.9445460124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 420003.31092440436,
            "unit": "ns/iter",
            "extra": "iterations: 1666\ncpu: 419993.3973589427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 271876.9392996322,
            "unit": "ns/iter",
            "extra": "iterations: 2570\ncpu: 271868.7159533091 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 417267.2746269077,
            "unit": "ns/iter",
            "extra": "iterations: 1675\ncpu: 417247.52238806034 ns\nthreads: 1"
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
        "date": 1705952914362,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7411.293397990243,
            "unit": "ns/iter",
            "extra": "iterations: 94653\ncpu: 7411.000179603393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 53741.26660000229,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 53740.67 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 99144.55639011439,
            "unit": "ns/iter",
            "extra": "iterations: 8654\ncpu: 99144.00277328402 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 144278.75299880494,
            "unit": "ns/iter",
            "extra": "iterations: 5919\ncpu: 144278.23956749454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 190336.50516823246,
            "unit": "ns/iter",
            "extra": "iterations: 4547\ncpu: 190331.00945678478 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 234664.50121984133,
            "unit": "ns/iter",
            "extra": "iterations: 3689\ncpu: 234656.87178097045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 278048.00800768955,
            "unit": "ns/iter",
            "extra": "iterations: 3122\ncpu: 278035.8424087122 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 325066.09318865504,
            "unit": "ns/iter",
            "extra": "iterations: 2672\ncpu: 325057.52245508967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 368662.5784105402,
            "unit": "ns/iter",
            "extra": "iterations: 2353\ncpu: 368641.2239694009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6116.660779901422,
            "unit": "ns/iter",
            "extra": "iterations: 113758\ncpu: 6116.199300268999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 4886.314743951854,
            "unit": "ns/iter",
            "extra": "iterations: 143469\ncpu: 4886.121043570384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 4940.060424090564,
            "unit": "ns/iter",
            "extra": "iterations: 141715\ncpu: 4939.994354867172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 4942.277913650588,
            "unit": "ns/iter",
            "extra": "iterations: 141472\ncpu: 4942.243694865414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 8795.9309148691,
            "unit": "ns/iter",
            "extra": "iterations: 79279\ncpu: 8795.900553740583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 32886.07914043739,
            "unit": "ns/iter",
            "extra": "iterations: 24943\ncpu: 32885.91989736596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 144112.24102478902,
            "unit": "ns/iter",
            "extra": "iterations: 5933\ncpu: 144111.9163997979 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 109282.45992048939,
            "unit": "ns/iter",
            "extra": "iterations: 7797\ncpu: 109281.72373989997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 114857.35309139255,
            "unit": "ns/iter",
            "extra": "iterations: 7440\ncpu: 114855.73924731195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 111077.27327170393,
            "unit": "ns/iter",
            "extra": "iterations: 7681\ncpu: 111076.422340841 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 344847.6551074354,
            "unit": "ns/iter",
            "extra": "iterations: 2653\ncpu: 344837.0147003391 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1781024.9521072814,
            "unit": "ns/iter",
            "extra": "iterations: 522\ncpu: 1780984.0996168554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1384733.45833339,
            "unit": "ns/iter",
            "extra": "iterations: 672\ncpu: 1384714.1369047586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1372677.1967454832,
            "unit": "ns/iter",
            "extra": "iterations: 676\ncpu: 1372659.0236686384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1374161.437036963,
            "unit": "ns/iter",
            "extra": "iterations: 675\ncpu: 1374147.5555555539 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 775074.9210747267,
            "unit": "ns/iter",
            "extra": "iterations: 1191\ncpu: 775054.2401343416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1345097.746008703,
            "unit": "ns/iter",
            "extra": "iterations: 689\ncpu: 1345077.939042091 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 38833.33580409058,
            "unit": "ns/iter",
            "extra": "iterations: 21316\ncpu: 38832.93769938074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 178356.35566480103,
            "unit": "ns/iter",
            "extra": "iterations: 4881\ncpu: 178357.8160213072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 139792.37996094703,
            "unit": "ns/iter",
            "extra": "iterations: 6148\ncpu: 139789.00455432673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 136711.93172819048,
            "unit": "ns/iter",
            "extra": "iterations: 6313\ncpu: 136711.45255821335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 130858.64196962351,
            "unit": "ns/iter",
            "extra": "iterations: 6519\ncpu: 130858.78202178272 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 310341.06700288475,
            "unit": "ns/iter",
            "extra": "iterations: 2776\ncpu: 310335.33861671464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1815636.6569202384,
            "unit": "ns/iter",
            "extra": "iterations: 513\ncpu: 1815625.341130611 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1413986.5197567556,
            "unit": "ns/iter",
            "extra": "iterations: 658\ncpu: 1413963.6778115528 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1418256.353658464,
            "unit": "ns/iter",
            "extra": "iterations: 656\ncpu: 1418255.7926829164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1387029.404191581,
            "unit": "ns/iter",
            "extra": "iterations: 668\ncpu: 1387006.88622755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 813244.1308165074,
            "unit": "ns/iter",
            "extra": "iterations: 1139\ncpu: 813222.2124670767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1380450.8941877738,
            "unit": "ns/iter",
            "extra": "iterations: 671\ncpu: 1380427.42175857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 6629938.709220014,
            "unit": "ns/iter",
            "extra": "iterations: 141\ncpu: 6629778.723404226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3085455.5231790314,
            "unit": "ns/iter",
            "extra": "iterations: 302\ncpu: 3085422.1854304695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 30044.85503631376,
            "unit": "ns/iter",
            "extra": "iterations: 27262\ncpu: 30044.73993103966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 135226.18221941302,
            "unit": "ns/iter",
            "extra": "iterations: 6344\ncpu: 135226.2137452702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 104239.25012213117,
            "unit": "ns/iter",
            "extra": "iterations: 8188\ncpu: 104238.29995114786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 108586.25123401477,
            "unit": "ns/iter",
            "extra": "iterations: 7901\ncpu: 108584.78673585606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 102819.11377029313,
            "unit": "ns/iter",
            "extra": "iterations: 8315\ncpu: 102818.44858689143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 284440.79099574214,
            "unit": "ns/iter",
            "extra": "iterations: 3043\ncpu: 284435.4584291832 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1782146.5438930858,
            "unit": "ns/iter",
            "extra": "iterations: 524\ncpu: 1782128.0534351205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1362880.0540144944,
            "unit": "ns/iter",
            "extra": "iterations: 685\ncpu: 1362860.1459853982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1363083.618768383,
            "unit": "ns/iter",
            "extra": "iterations: 682\ncpu: 1363076.8328445784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1344630.8219971298,
            "unit": "ns/iter",
            "extra": "iterations: 691\ncpu: 1344630.246020268 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 764190.18863256,
            "unit": "ns/iter",
            "extra": "iterations: 1214\ncpu: 764175.453047776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1367182.2799999844,
            "unit": "ns/iter",
            "extra": "iterations: 700\ncpu: 1367153.2857142868 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2900.755689163686,
            "unit": "ns/iter",
            "extra": "iterations: 241336\ncpu: 2900.737975270984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 18989.165865059098,
            "unit": "ns/iter",
            "extra": "iterations: 36801\ncpu: 18989.114426238426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 15543.49789254008,
            "unit": "ns/iter",
            "extra": "iterations: 45078\ncpu: 15543.43804072949 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 14334.672687758097,
            "unit": "ns/iter",
            "extra": "iterations: 48773\ncpu: 14334.615463473585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 11150.935385743584,
            "unit": "ns/iter",
            "extra": "iterations: 62788\ncpu: 11150.683251576704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 99629.99219304339,
            "unit": "ns/iter",
            "extra": "iterations: 7045\ncpu: 99627.21078779278 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 123634.21507448886,
            "unit": "ns/iter",
            "extra": "iterations: 5705\ncpu: 123633.9351446089 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 29857.193406685034,
            "unit": "ns/iter",
            "extra": "iterations: 23448\ncpu: 29856.559194814174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 30096.60393185826,
            "unit": "ns/iter",
            "extra": "iterations: 23246\ncpu: 30096.532736814937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 29916.619019036974,
            "unit": "ns/iter",
            "extra": "iterations: 23324\ncpu: 29916.004973417883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 62303.66137190002,
            "unit": "ns/iter",
            "extra": "iterations: 11269\ncpu: 62303.50519123275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 50112.11544797122,
            "unit": "ns/iter",
            "extra": "iterations: 13963\ncpu: 50111.738165150644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 20189.436355247442,
            "unit": "ns/iter",
            "extra": "iterations: 34669\ncpu: 20189.330525829813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 101642.43230612237,
            "unit": "ns/iter",
            "extra": "iterations: 6847\ncpu: 101638.60084708665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 83245.54224598811,
            "unit": "ns/iter",
            "extra": "iterations: 8415\ncpu: 83244.02852049848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 82921.44499704357,
            "unit": "ns/iter",
            "extra": "iterations: 8445\ncpu: 82921.3617525154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 81429.51524318106,
            "unit": "ns/iter",
            "extra": "iterations: 8594\ncpu: 81428.054456598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 154500.75258867117,
            "unit": "ns/iter",
            "extra": "iterations: 4539\ncpu: 154497.3782771545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 519049.2000000362,
            "unit": "ns/iter",
            "extra": "iterations: 1350\ncpu: 519047.85185185017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 418801.74459134444,
            "unit": "ns/iter",
            "extra": "iterations: 1664\ncpu: 418801.5024038521 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 420622.2052821371,
            "unit": "ns/iter",
            "extra": "iterations: 1666\ncpu: 420618.1872749131 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 411647.30651788606,
            "unit": "ns/iter",
            "extra": "iterations: 1703\ncpu: 411627.36347621586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 270633.6671826947,
            "unit": "ns/iter",
            "extra": "iterations: 2584\ncpu: 270616.71826625307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 410384.24999998667,
            "unit": "ns/iter",
            "extra": "iterations: 1708\ncpu: 410383.5480093732 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 21888.713539711927,
            "unit": "ns/iter",
            "extra": "iterations: 31980\ncpu: 21888.536585365597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 108679.41779437651,
            "unit": "ns/iter",
            "extra": "iterations: 6429\ncpu: 108678.9236273127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 86938.10426246455,
            "unit": "ns/iter",
            "extra": "iterations: 8047\ncpu: 86938.71007828972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 84085.97675818639,
            "unit": "ns/iter",
            "extra": "iterations: 8304\ncpu: 84084.07996146455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 83282.90366318048,
            "unit": "ns/iter",
            "extra": "iterations: 8408\ncpu: 83282.69505233078 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 158228.0754334743,
            "unit": "ns/iter",
            "extra": "iterations: 4441\ncpu: 158225.24206259902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 516882.10619468516,
            "unit": "ns/iter",
            "extra": "iterations: 1356\ncpu: 516880.38348082505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 417157.61501788907,
            "unit": "ns/iter",
            "extra": "iterations: 1678\ncpu: 417154.3504171622 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 422118.5649038343,
            "unit": "ns/iter",
            "extra": "iterations: 1664\ncpu: 422122.23557692464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 411042.1034077585,
            "unit": "ns/iter",
            "extra": "iterations: 1702\ncpu: 411029.02467684867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 272997.46156848717,
            "unit": "ns/iter",
            "extra": "iterations: 2563\ncpu: 272996.371439722 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 411688.8421052076,
            "unit": "ns/iter",
            "extra": "iterations: 1691\ncpu: 411687.64044944284 ns\nthreads: 1"
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
        "date": 1705954340971,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7418.921182318057,
            "unit": "ns/iter",
            "extra": "iterations: 94560\ncpu: 7418.706641285956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 54036.9961999886,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 54034.95 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 99469.02557279836,
            "unit": "ns/iter",
            "extra": "iterations: 8642\ncpu: 99467.84309187687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 143615.27371225183,
            "unit": "ns/iter",
            "extra": "iterations: 5999\ncpu: 143609.20153358893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 187902.988675985,
            "unit": "ns/iter",
            "extra": "iterations: 4592\ncpu: 187901.80749128928 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 232730.93109017584,
            "unit": "ns/iter",
            "extra": "iterations: 3715\ncpu: 232720.8613728131 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 277305.2298077043,
            "unit": "ns/iter",
            "extra": "iterations: 3120\ncpu: 277295.096153846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 323674.5378337936,
            "unit": "ns/iter",
            "extra": "iterations: 2696\ncpu: 323669.39910979243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 371394.6832980982,
            "unit": "ns/iter",
            "extra": "iterations: 2365\ncpu: 371367.2304439747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6045.684300546143,
            "unit": "ns/iter",
            "extra": "iterations: 115762\ncpu: 6045.49506746602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 4909.358220898641,
            "unit": "ns/iter",
            "extra": "iterations: 142454\ncpu: 4909.186123239781 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 4958.882709528167,
            "unit": "ns/iter",
            "extra": "iterations: 141043\ncpu: 4958.817523733898 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 4921.716954825644,
            "unit": "ns/iter",
            "extra": "iterations: 141299\ncpu: 4921.564908456534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 8814.295467763892,
            "unit": "ns/iter",
            "extra": "iterations: 80821\ncpu: 8814.18566956609 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 31958.912120500336,
            "unit": "ns/iter",
            "extra": "iterations: 25626\ncpu: 31957.04752985253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 148164.10930677835,
            "unit": "ns/iter",
            "extra": "iterations: 5727\ncpu: 148159.69966823803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 114705.34420289897,
            "unit": "ns/iter",
            "extra": "iterations: 7452\ncpu: 114702.91196994131 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 113913.579353444,
            "unit": "ns/iter",
            "extra": "iterations: 7517\ncpu: 113912.42516961577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 107541.94967204791,
            "unit": "ns/iter",
            "extra": "iterations: 7928\ncpu: 107538.76135216959 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 329612.60621381516,
            "unit": "ns/iter",
            "extra": "iterations: 2768\ncpu: 329604.6965317909 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1775369.967370286,
            "unit": "ns/iter",
            "extra": "iterations: 521\ncpu: 1775284.644913627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1365917.7094395438,
            "unit": "ns/iter",
            "extra": "iterations: 678\ncpu: 1365873.7463126832 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1384119.9119402084,
            "unit": "ns/iter",
            "extra": "iterations: 670\ncpu: 1384049.8507462675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1370953.0681481503,
            "unit": "ns/iter",
            "extra": "iterations: 675\ncpu: 1370904.5925925944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 775971.1016807854,
            "unit": "ns/iter",
            "extra": "iterations: 1190\ncpu: 775935.2100840342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1337722.5772005573,
            "unit": "ns/iter",
            "extra": "iterations: 693\ncpu: 1337674.8917748944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 39173.758553224936,
            "unit": "ns/iter",
            "extra": "iterations: 20957\ncpu: 39171.78508374298 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 180538.39156877893,
            "unit": "ns/iter",
            "extra": "iterations: 4768\ncpu: 180533.2214765104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 142567.49521294405,
            "unit": "ns/iter",
            "extra": "iterations: 6058\ncpu: 142559.90425883143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 137075.31766769802,
            "unit": "ns/iter",
            "extra": "iterations: 6277\ncpu: 137066.01879878936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 126357.12963784423,
            "unit": "ns/iter",
            "extra": "iterations: 6765\ncpu: 126353.77679231355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 328302.10215662536,
            "unit": "ns/iter",
            "extra": "iterations: 2643\ncpu: 328290.6545592108 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1804338.7707128727,
            "unit": "ns/iter",
            "extra": "iterations: 519\ncpu: 1801242.9672446954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1396616.8027105918,
            "unit": "ns/iter",
            "extra": "iterations: 664\ncpu: 1396556.927710844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1427275.09341514,
            "unit": "ns/iter",
            "extra": "iterations: 653\ncpu: 1427212.5574272547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1394290.3248502382,
            "unit": "ns/iter",
            "extra": "iterations: 668\ncpu: 1394203.5928143722 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 827873.8923486603,
            "unit": "ns/iter",
            "extra": "iterations: 1124\ncpu: 827853.1138790076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1371620.9600591506,
            "unit": "ns/iter",
            "extra": "iterations: 676\ncpu: 1371545.5621301774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5056476.720001228,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5056300.000000035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 2995178.877813706,
            "unit": "ns/iter",
            "extra": "iterations: 311\ncpu: 2995045.3376205717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 26224.90519497574,
            "unit": "ns/iter",
            "extra": "iterations: 31338\ncpu: 26223.753908992152 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 137120.98421051906,
            "unit": "ns/iter",
            "extra": "iterations: 6270\ncpu: 137113.49282296668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 107028.39332166575,
            "unit": "ns/iter",
            "extra": "iterations: 7996\ncpu: 107025.45022511255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 107224.99925122464,
            "unit": "ns/iter",
            "extra": "iterations: 8013\ncpu: 107220.96593036319 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 101470.82161073344,
            "unit": "ns/iter",
            "extra": "iterations: 8431\ncpu: 101465.7454631719 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 272590.39874605084,
            "unit": "ns/iter",
            "extra": "iterations: 3190\ncpu: 272573.00940438936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1764933.8314393589,
            "unit": "ns/iter",
            "extra": "iterations: 528\ncpu: 1764822.3484848412 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1358448.0116448968,
            "unit": "ns/iter",
            "extra": "iterations: 687\ncpu: 1358382.2416302771 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1371877.865979638,
            "unit": "ns/iter",
            "extra": "iterations: 679\ncpu: 1371804.860088363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1366050.2272727748,
            "unit": "ns/iter",
            "extra": "iterations: 682\ncpu: 1365950.8797653967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 766921.2078559337,
            "unit": "ns/iter",
            "extra": "iterations: 1222\ncpu: 766907.364975445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1334613.7750718468,
            "unit": "ns/iter",
            "extra": "iterations: 698\ncpu: 1334569.197707738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2884.556743590778,
            "unit": "ns/iter",
            "extra": "iterations: 242230\ncpu: 2884.5180200635746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 20084.569213984694,
            "unit": "ns/iter",
            "extra": "iterations: 34834\ncpu: 20083.863466727842 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 14372.577001337651,
            "unit": "ns/iter",
            "extra": "iterations: 48655\ncpu: 14371.873394306722 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 14921.645583681697,
            "unit": "ns/iter",
            "extra": "iterations: 46815\ncpu: 14920.886468012453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 11056.971647487733,
            "unit": "ns/iter",
            "extra": "iterations: 63169\ncpu: 11056.204783992078 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 98582.2879831338,
            "unit": "ns/iter",
            "extra": "iterations: 7115\ncpu: 98580.11243851003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 121719.11406251784,
            "unit": "ns/iter",
            "extra": "iterations: 5760\ncpu: 121712.88194444438 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 29753.188728206227,
            "unit": "ns/iter",
            "extra": "iterations: 23510\ncpu: 29752.301148447343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 30213.991323495018,
            "unit": "ns/iter",
            "extra": "iterations: 23166\ncpu: 30212.496762496874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 29870.307689031324,
            "unit": "ns/iter",
            "extra": "iterations: 23462\ncpu: 29869.55928735843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 60911.82146265731,
            "unit": "ns/iter",
            "extra": "iterations: 11527\ncpu: 60909.759694629625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 55619.30064526484,
            "unit": "ns/iter",
            "extra": "iterations: 12553\ncpu: 55617.525691070085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 20268.558778361148,
            "unit": "ns/iter",
            "extra": "iterations: 34511\ncpu: 20267.900089826497 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 101498.29393015696,
            "unit": "ns/iter",
            "extra": "iterations: 6903\ncpu: 101491.77169346705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 82745.6964032215,
            "unit": "ns/iter",
            "extra": "iterations: 8452\ncpu: 82743.78845243661 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 82127.10531253499,
            "unit": "ns/iter",
            "extra": "iterations: 8527\ncpu: 82122.84508033429 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 81657.57062543013,
            "unit": "ns/iter",
            "extra": "iterations: 8538\ncpu: 81655.89130943942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 154041.2289473711,
            "unit": "ns/iter",
            "extra": "iterations: 4560\ncpu: 154038.33333333326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 510938.3585454039,
            "unit": "ns/iter",
            "extra": "iterations: 1375\ncpu: 510913.81818181695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 412866.66568396415,
            "unit": "ns/iter",
            "extra": "iterations: 1696\ncpu: 412837.20518867974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 418026.0263473303,
            "unit": "ns/iter",
            "extra": "iterations: 1670\ncpu: 418024.0718562868 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 410223.73851585784,
            "unit": "ns/iter",
            "extra": "iterations: 1698\ncpu: 410209.59952885786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 268040.01230298256,
            "unit": "ns/iter",
            "extra": "iterations: 2601\ncpu: 268038.792772014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 407624.2149097636,
            "unit": "ns/iter",
            "extra": "iterations: 1717\ncpu: 407612.172393709 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 21738.107479825972,
            "unit": "ns/iter",
            "extra": "iterations: 32220\ncpu: 21738.022967101133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 107262.65034534219,
            "unit": "ns/iter",
            "extra": "iterations: 6515\ncpu: 107258.74136607883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 85530.42239590843,
            "unit": "ns/iter",
            "extra": "iterations: 8189\ncpu: 85527.67126633323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 84630.6013766608,
            "unit": "ns/iter",
            "extra": "iterations: 8281\ncpu: 84627.95556092249 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 84386.70086912198,
            "unit": "ns/iter",
            "extra": "iterations: 8284\ncpu: 84383.34138097512 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 154519.13411138408,
            "unit": "ns/iter",
            "extra": "iterations: 4541\ncpu: 154516.4941642803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 509570.8338192074,
            "unit": "ns/iter",
            "extra": "iterations: 1372\ncpu: 509555.02915451286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 414744.1465875765,
            "unit": "ns/iter",
            "extra": "iterations: 1685\ncpu: 414724.0949554913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 418395.6169959096,
            "unit": "ns/iter",
            "extra": "iterations: 1671\ncpu: 418393.836026334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 411124.6514083363,
            "unit": "ns/iter",
            "extra": "iterations: 1704\ncpu: 411118.42723004724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 274746.0357563876,
            "unit": "ns/iter",
            "extra": "iterations: 2545\ncpu: 274738.7426326137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 410057.7792131872,
            "unit": "ns/iter",
            "extra": "iterations: 1703\ncpu: 410037.8156195002 ns\nthreads: 1"
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
        "date": 1705956316322,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7982.096815910682,
            "unit": "ns/iter",
            "extra": "iterations: 92020\ncpu: 7982.051727885244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 55647.342199995364,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 55646.45 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 103283.95726801691,
            "unit": "ns/iter",
            "extra": "iterations: 8331\ncpu: 103283.55539551076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 149893.42011835246,
            "unit": "ns/iter",
            "extra": "iterations: 5746\ncpu: 149894.0132265925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 198109.94751256096,
            "unit": "ns/iter",
            "extra": "iterations: 4382\ncpu: 198108.53491556374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 245672.89159354576,
            "unit": "ns/iter",
            "extra": "iterations: 3533\ncpu: 245659.21313331442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 292514.7850655323,
            "unit": "ns/iter",
            "extra": "iterations: 2973\ncpu: 292511.3689875549 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 345503.6201247759,
            "unit": "ns/iter",
            "extra": "iterations: 2564\ncpu: 345493.40873634943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 384092.5694192326,
            "unit": "ns/iter",
            "extra": "iterations: 2204\ncpu: 384083.121597096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6326.841656240554,
            "unit": "ns/iter",
            "extra": "iterations: 110298\ncpu: 6326.636929046777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5091.797804120697,
            "unit": "ns/iter",
            "extra": "iterations: 137075\ncpu: 5091.820536202804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5176.758547088069,
            "unit": "ns/iter",
            "extra": "iterations: 134929\ncpu: 5176.727760525911 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5069.437522770774,
            "unit": "ns/iter",
            "extra": "iterations: 137234\ncpu: 5069.380765699458 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 8942.907306281642,
            "unit": "ns/iter",
            "extra": "iterations: 78193\ncpu: 8942.941183993444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 29584.45788226676,
            "unit": "ns/iter",
            "extra": "iterations: 27435\ncpu: 29583.615819209073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 136361.6925890564,
            "unit": "ns/iter",
            "extra": "iterations: 6288\ncpu: 136358.6354961832 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 104933.5347119754,
            "unit": "ns/iter",
            "extra": "iterations: 8124\ncpu: 104931.33924175281 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 108447.05804885668,
            "unit": "ns/iter",
            "extra": "iterations: 7821\ncpu: 108446.32399948844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 99367.88984549302,
            "unit": "ns/iter",
            "extra": "iterations: 8479\ncpu: 99365.7388843024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 335465.1146100255,
            "unit": "ns/iter",
            "extra": "iterations: 2731\ncpu: 335456.6093006229 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1808754.2362202725,
            "unit": "ns/iter",
            "extra": "iterations: 508\ncpu: 1808707.08661417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1412211.519025682,
            "unit": "ns/iter",
            "extra": "iterations: 657\ncpu: 1412138.812785387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1414350.1524391999,
            "unit": "ns/iter",
            "extra": "iterations: 656\ncpu: 1414295.731707317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1406567.1136363838,
            "unit": "ns/iter",
            "extra": "iterations: 660\ncpu: 1406522.27272727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 804614.4538328496,
            "unit": "ns/iter",
            "extra": "iterations: 1148\ncpu: 804577.2648083625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1371475.6354165133,
            "unit": "ns/iter",
            "extra": "iterations: 672\ncpu: 1371422.1726190492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 35943.50644415226,
            "unit": "ns/iter",
            "extra": "iterations: 22889\ncpu: 35941.78426318312 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 172189.29196641833,
            "unit": "ns/iter",
            "extra": "iterations: 5004\ncpu: 172186.7106314949 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 138286.69231975896,
            "unit": "ns/iter",
            "extra": "iterations: 6380\ncpu: 138285.98746081546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 126687.60442804972,
            "unit": "ns/iter",
            "extra": "iterations: 6775\ncpu: 126684.94464944633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 124499.69439102193,
            "unit": "ns/iter",
            "extra": "iterations: 6757\ncpu: 124497.01050762157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 301408.99092177657,
            "unit": "ns/iter",
            "extra": "iterations: 2864\ncpu: 301387.98882681585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1853515.1297407378,
            "unit": "ns/iter",
            "extra": "iterations: 501\ncpu: 1853481.6367265477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1456276.344287914,
            "unit": "ns/iter",
            "extra": "iterations: 639\ncpu: 1456229.2644757484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1487571.7703347346,
            "unit": "ns/iter",
            "extra": "iterations: 627\ncpu: 1487577.5119617207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1428179.426153782,
            "unit": "ns/iter",
            "extra": "iterations: 650\ncpu: 1428144.153846161 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 846658.7618613215,
            "unit": "ns/iter",
            "extra": "iterations: 1096\ncpu: 846640.5109489035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1419412.1641106866,
            "unit": "ns/iter",
            "extra": "iterations: 652\ncpu: 1419331.2883435588 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5103141.539998433,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5102940.999999959 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3129156.510067027,
            "unit": "ns/iter",
            "extra": "iterations: 298\ncpu: 3129068.1208053604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 25785.192428825612,
            "unit": "ns/iter",
            "extra": "iterations: 31752\ncpu: 25784.722222222244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 136182.55759784725,
            "unit": "ns/iter",
            "extra": "iterations: 6311\ncpu: 136175.756615433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 102754.87939335954,
            "unit": "ns/iter",
            "extra": "iterations: 8308\ncpu: 102752.85267212351 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 99846.74300044468,
            "unit": "ns/iter",
            "extra": "iterations: 8572\ncpu: 99843.93373775131 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 94298.23367279951,
            "unit": "ns/iter",
            "extra": "iterations: 9034\ncpu: 94294.84170909866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 273107.32013826194,
            "unit": "ns/iter",
            "extra": "iterations: 3183\ncpu: 273095.0989632431 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1816212.3883493869,
            "unit": "ns/iter",
            "extra": "iterations: 515\ncpu: 1816124.6601941835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1406997.6621415485,
            "unit": "ns/iter",
            "extra": "iterations: 663\ncpu: 1406927.7526395142 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1416228.3177006464,
            "unit": "ns/iter",
            "extra": "iterations: 661\ncpu: 1416201.9667170963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1389510.723880557,
            "unit": "ns/iter",
            "extra": "iterations: 670\ncpu: 1389427.01492538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 787244.2703391459,
            "unit": "ns/iter",
            "extra": "iterations: 1180\ncpu: 787224.2372881373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1398097.1395009905,
            "unit": "ns/iter",
            "extra": "iterations: 681\ncpu: 1398035.5359765056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2936.855913825365,
            "unit": "ns/iter",
            "extra": "iterations: 238864\ncpu: 2936.8699343559506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 19870.629947097106,
            "unit": "ns/iter",
            "extra": "iterations: 35349\ncpu: 19870.177374183073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 14363.106869753803,
            "unit": "ns/iter",
            "extra": "iterations: 48517\ncpu: 14362.736772677637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 14989.16672387855,
            "unit": "ns/iter",
            "extra": "iterations: 46610\ncpu: 14988.631195022668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 10586.42498296593,
            "unit": "ns/iter",
            "extra": "iterations: 66045\ncpu: 10585.802104625616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 98246.11982603016,
            "unit": "ns/iter",
            "extra": "iterations: 7127\ncpu: 98241.74266872475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 125483.77086680994,
            "unit": "ns/iter",
            "extra": "iterations: 5595\ncpu: 125478.82037533457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 30798.600125909965,
            "unit": "ns/iter",
            "extra": "iterations: 20649\ncpu: 30798.750544820643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 31111.494712986096,
            "unit": "ns/iter",
            "extra": "iterations: 22508\ncpu: 31109.356673182803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 30692.22387993885,
            "unit": "ns/iter",
            "extra": "iterations: 22789\ncpu: 30691.06147702845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 62744.46450630687,
            "unit": "ns/iter",
            "extra": "iterations: 11171\ncpu: 62742.78041357082 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 57351.8339474285,
            "unit": "ns/iter",
            "extra": "iterations: 12213\ncpu: 57349.5291902068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 20484.29892530117,
            "unit": "ns/iter",
            "extra": "iterations: 34149\ncpu: 20483.59834841427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 102019.1305551617,
            "unit": "ns/iter",
            "extra": "iterations: 6863\ncpu: 102014.57088736666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 83233.56502616897,
            "unit": "ns/iter",
            "extra": "iterations: 8412\ncpu: 83229.54113171669 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 83566.13219641043,
            "unit": "ns/iter",
            "extra": "iterations: 8268\ncpu: 83563.55829704941 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 82455.47594964792,
            "unit": "ns/iter",
            "extra": "iterations: 8503\ncpu: 82452.35799129806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 155439.06862962063,
            "unit": "ns/iter",
            "extra": "iterations: 4517\ncpu: 155428.95727252465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 530212.5851626309,
            "unit": "ns/iter",
            "extra": "iterations: 1321\ncpu: 530184.4814534445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 425758.9278728499,
            "unit": "ns/iter",
            "extra": "iterations: 1636\ncpu: 425742.17603912594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 429147.16666665656,
            "unit": "ns/iter",
            "extra": "iterations: 1632\ncpu: 429135.7843137315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 422011.89505435165,
            "unit": "ns/iter",
            "extra": "iterations: 1658\ncpu: 422004.402895048 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 277972.07741171826,
            "unit": "ns/iter",
            "extra": "iterations: 2519\ncpu: 277968.5986502612 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 421331.48226095445,
            "unit": "ns/iter",
            "extra": "iterations: 1663\ncpu: 421302.10463018203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 22090.298595544944,
            "unit": "ns/iter",
            "extra": "iterations: 31685\ncpu: 22090.39293040894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 110491.15134794149,
            "unit": "ns/iter",
            "extra": "iterations: 6343\ncpu: 110488.9326816948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 87341.54519386831,
            "unit": "ns/iter",
            "extra": "iterations: 8021\ncpu: 87339.27191123406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 86368.84972171218,
            "unit": "ns/iter",
            "extra": "iterations: 8085\ncpu: 86365.65244279533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 85099.7371234213,
            "unit": "ns/iter",
            "extra": "iterations: 8232\ncpu: 85093.24586977677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 153858.34202390147,
            "unit": "ns/iter",
            "extra": "iterations: 4526\ncpu: 153849.51391957543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 525880.8810241198,
            "unit": "ns/iter",
            "extra": "iterations: 1328\ncpu: 525861.9728915715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 430231.82860666123,
            "unit": "ns/iter",
            "extra": "iterations: 1622\ncpu: 430227.2503082665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 434894.098258756,
            "unit": "ns/iter",
            "extra": "iterations: 1608\ncpu: 434869.4651741336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 427633.77899877913,
            "unit": "ns/iter",
            "extra": "iterations: 1638\ncpu: 427630.7692307763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 279105.4728434322,
            "unit": "ns/iter",
            "extra": "iterations: 2504\ncpu: 279100.7587859428 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 423845.0401216194,
            "unit": "ns/iter",
            "extra": "iterations: 1645\ncpu: 423840.24316109257 ns\nthreads: 1"
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
        "date": 1705957773215,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7436.769462571514,
            "unit": "ns/iter",
            "extra": "iterations: 94245\ncpu: 7436.671441455782 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 54658.2588000092,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 54656.91999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 99739.4148319879,
            "unit": "ns/iter",
            "extra": "iterations: 8630\ncpu: 99735.45770567788 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 145726.4498984513,
            "unit": "ns/iter",
            "extra": "iterations: 5908\ncpu: 145725.8970886933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 192073.21763269353,
            "unit": "ns/iter",
            "extra": "iterations: 4503\ncpu: 192067.33288918505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 245282.45818478815,
            "unit": "ns/iter",
            "extra": "iterations: 3647\ncpu: 245275.26734302178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 281754.4873458648,
            "unit": "ns/iter",
            "extra": "iterations: 3082\ncpu: 281746.4633354965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 328267.8446054702,
            "unit": "ns/iter",
            "extra": "iterations: 2484\ncpu: 328255.51529790676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 374060.8791774056,
            "unit": "ns/iter",
            "extra": "iterations: 2334\ncpu: 374049.9143101967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6121.294048192404,
            "unit": "ns/iter",
            "extra": "iterations: 114335\ncpu: 6120.998819259194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5028.6805869720865,
            "unit": "ns/iter",
            "extra": "iterations: 140586\ncpu: 5028.530579147274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5011.392556366653,
            "unit": "ns/iter",
            "extra": "iterations: 139045\ncpu: 5011.222266172818 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5111.575318279707,
            "unit": "ns/iter",
            "extra": "iterations: 137065\ncpu: 5111.390216320721 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 8779.090115768176,
            "unit": "ns/iter",
            "extra": "iterations: 79642\ncpu: 8778.73107154517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 28122.38344623492,
            "unit": "ns/iter",
            "extra": "iterations: 29081\ncpu: 28121.037790997525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 143058.48467593675,
            "unit": "ns/iter",
            "extra": "iterations: 5971\ncpu: 143053.54212024776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 106847.26980540241,
            "unit": "ns/iter",
            "extra": "iterations: 7965\ncpu: 106841.56936597616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 106855.84542152077,
            "unit": "ns/iter",
            "extra": "iterations: 7983\ncpu: 106853.31329074298 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 101063.52651286949,
            "unit": "ns/iter",
            "extra": "iterations: 8279\ncpu: 101060.5870274189 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 329533.4675324648,
            "unit": "ns/iter",
            "extra": "iterations: 2772\ncpu: 329519.6608946616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1766125.5468452028,
            "unit": "ns/iter",
            "extra": "iterations: 523\ncpu: 1766033.4608030654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1371283.4370370628,
            "unit": "ns/iter",
            "extra": "iterations: 675\ncpu: 1371224.7407407416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1403140.8746224188,
            "unit": "ns/iter",
            "extra": "iterations: 662\ncpu: 1403069.788519641 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1392683.5709970572,
            "unit": "ns/iter",
            "extra": "iterations: 662\ncpu: 1392622.6586102748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 769934.9016666209,
            "unit": "ns/iter",
            "extra": "iterations: 1200\ncpu: 769894.0833333327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1342340.4383164276,
            "unit": "ns/iter",
            "extra": "iterations: 689\ncpu: 1342293.613933236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 38902.73512059439,
            "unit": "ns/iter",
            "extra": "iterations: 21187\ncpu: 38901.26020673064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 165405.7002112593,
            "unit": "ns/iter",
            "extra": "iterations: 5207\ncpu: 165401.1907048203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 134494.39993746395,
            "unit": "ns/iter",
            "extra": "iterations: 6396\ncpu: 134488.4928080053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 131497.0062576223,
            "unit": "ns/iter",
            "extra": "iterations: 6552\ncpu: 131491.78876678896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 123094.48790670453,
            "unit": "ns/iter",
            "extra": "iterations: 6946\ncpu: 123089.72070256276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 304627.3771991493,
            "unit": "ns/iter",
            "extra": "iterations: 2842\ncpu: 304617.38212526444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1794545.8464490373,
            "unit": "ns/iter",
            "extra": "iterations: 521\ncpu: 1794436.6602687184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1411842.5471124807,
            "unit": "ns/iter",
            "extra": "iterations: 658\ncpu: 1411790.8814589651 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1464805.3563579316,
            "unit": "ns/iter",
            "extra": "iterations: 637\ncpu: 1464741.7582417536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1398200.6479514625,
            "unit": "ns/iter",
            "extra": "iterations: 659\ncpu: 1398147.4962063686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 818788.8989361876,
            "unit": "ns/iter",
            "extra": "iterations: 1128\ncpu: 818756.8262411316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1379832.721726175,
            "unit": "ns/iter",
            "extra": "iterations: 672\ncpu: 1379772.4702381012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 6636447.792857325,
            "unit": "ns/iter",
            "extra": "iterations: 140\ncpu: 6636248.571428536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3074831.77887777,
            "unit": "ns/iter",
            "extra": "iterations: 303\ncpu: 3074733.66336632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 25523.465267164604,
            "unit": "ns/iter",
            "extra": "iterations: 32059\ncpu: 25522.43987647773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 136372.06678298913,
            "unit": "ns/iter",
            "extra": "iterations: 6304\ncpu: 136365.5774111675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 99191.18184966312,
            "unit": "ns/iter",
            "extra": "iterations: 8661\ncpu: 99188.25770696187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 100062.70143843027,
            "unit": "ns/iter",
            "extra": "iterations: 8551\ncpu: 100058.69488948701 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 95000.20576086301,
            "unit": "ns/iter",
            "extra": "iterations: 8957\ncpu: 94997.4545048562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 269368.1518987551,
            "unit": "ns/iter",
            "extra": "iterations: 3239\ncpu: 269354.61562210554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1769582.7007576288,
            "unit": "ns/iter",
            "extra": "iterations: 528\ncpu: 1769502.84090909 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1364538.6407624742,
            "unit": "ns/iter",
            "extra": "iterations: 682\ncpu: 1364435.9237536637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1389378.9419642624,
            "unit": "ns/iter",
            "extra": "iterations: 672\ncpu: 1389313.2440476213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1372927.423703745,
            "unit": "ns/iter",
            "extra": "iterations: 675\ncpu: 1372873.4814814755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 749570.2949233846,
            "unit": "ns/iter",
            "extra": "iterations: 1241\ncpu: 749532.7961321508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1335809.182733788,
            "unit": "ns/iter",
            "extra": "iterations: 695\ncpu: 1335733.8129496463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2896.695984513141,
            "unit": "ns/iter",
            "extra": "iterations: 240718\ncpu: 2896.63382048703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 18565.143702718888,
            "unit": "ns/iter",
            "extra": "iterations: 37675\ncpu: 18564.544127405472 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 14482.311895183626,
            "unit": "ns/iter",
            "extra": "iterations: 48465\ncpu: 14481.805426596606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 15050.037045008181,
            "unit": "ns/iter",
            "extra": "iterations: 46457\ncpu: 15049.357470348945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 11055.876455919064,
            "unit": "ns/iter",
            "extra": "iterations: 63362\ncpu: 11055.133991982495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 101620.44566633967,
            "unit": "ns/iter",
            "extra": "iterations: 6911\ncpu: 101612.95036897714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 123948.06331800559,
            "unit": "ns/iter",
            "extra": "iterations: 5654\ncpu: 123945.93208347968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 29974.9490300641,
            "unit": "ns/iter",
            "extra": "iterations: 23249\ncpu: 29974.21824594593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 30579.641474816137,
            "unit": "ns/iter",
            "extra": "iterations: 22891\ncpu: 30579.192695819365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 30431.678210926588,
            "unit": "ns/iter",
            "extra": "iterations: 22984\ncpu: 30430.477723633765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 61691.399171878635,
            "unit": "ns/iter",
            "extra": "iterations: 11351\ncpu: 61691.216632895834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 56199.621315557306,
            "unit": "ns/iter",
            "extra": "iterations: 12451\ncpu: 56199.437796160644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 20425.78224039908,
            "unit": "ns/iter",
            "extra": "iterations: 34235\ncpu: 20425.500219074016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 104572.9320749159,
            "unit": "ns/iter",
            "extra": "iterations: 6728\ncpu: 104568.56420927371 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 84199.50180461002,
            "unit": "ns/iter",
            "extra": "iterations: 8312\ncpu: 84195.11549566932 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 84078.55632956968,
            "unit": "ns/iter",
            "extra": "iterations: 8326\ncpu: 84078.1647850105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 82980.4769924062,
            "unit": "ns/iter",
            "extra": "iterations: 8432\ncpu: 82976.43500948747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 156636.62949720785,
            "unit": "ns/iter",
            "extra": "iterations: 4475\ncpu: 156634.59217877107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 523575.54012846696,
            "unit": "ns/iter",
            "extra": "iterations: 1246\ncpu: 523573.4349919731 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 423447.4214027056,
            "unit": "ns/iter",
            "extra": "iterations: 1654\ncpu: 423439.90326480515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 424527.3185947534,
            "unit": "ns/iter",
            "extra": "iterations: 1651\ncpu: 424514.65778316325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 420975.72792787844,
            "unit": "ns/iter",
            "extra": "iterations: 1665\ncpu: 420968.46846846066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 270578.4077932094,
            "unit": "ns/iter",
            "extra": "iterations: 2592\ncpu: 270562.6929012319 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 413930.83888226165,
            "unit": "ns/iter",
            "extra": "iterations: 1682\ncpu: 413928.8347205715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 21999.03427966235,
            "unit": "ns/iter",
            "extra": "iterations: 32089\ncpu: 21997.905824426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 109908.4847863865,
            "unit": "ns/iter",
            "extra": "iterations: 6343\ncpu: 109906.90524988268 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 87080.10690339834,
            "unit": "ns/iter",
            "extra": "iterations: 8054\ncpu: 87078.44549292231 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 86200.37222769391,
            "unit": "ns/iter",
            "extra": "iterations: 8116\ncpu: 86194.04879250756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 84508.57527140214,
            "unit": "ns/iter",
            "extra": "iterations: 8290\ncpu: 84508.21471652591 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 155652.10573076858,
            "unit": "ns/iter",
            "extra": "iterations: 4502\ncpu: 155642.15904042855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 521448.76510066516,
            "unit": "ns/iter",
            "extra": "iterations: 1341\ncpu: 521442.4310216201 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 419263.72021660133,
            "unit": "ns/iter",
            "extra": "iterations: 1662\ncpu: 419244.5246690811 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 429050.0488997409,
            "unit": "ns/iter",
            "extra": "iterations: 1636\ncpu: 429048.6552567241 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 421726.55488542194,
            "unit": "ns/iter",
            "extra": "iterations: 1658\ncpu: 421708.62484921585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 276883.3665874833,
            "unit": "ns/iter",
            "extra": "iterations: 2526\ncpu: 276880.1266825028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 417513.137807077,
            "unit": "ns/iter",
            "extra": "iterations: 1669\ncpu: 417505.21270221734 ns\nthreads: 1"
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
        "date": 1705959268695,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7448.815666845148,
            "unit": "ns/iter",
            "extra": "iterations: 95067\ncpu: 7448.5794229333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 54246.40300000192,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 54241.98 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 100000.42539313702,
            "unit": "ns/iter",
            "extra": "iterations: 8585\ncpu: 99998.97495631916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 144885.12683421464,
            "unit": "ns/iter",
            "extra": "iterations: 5929\ncpu: 144882.2229718333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 191948.40092983996,
            "unit": "ns/iter",
            "extra": "iterations: 4517\ncpu: 191936.4622537083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 237479.0117840633,
            "unit": "ns/iter",
            "extra": "iterations: 3649\ncpu: 237456.09756097576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 283464.4808689637,
            "unit": "ns/iter",
            "extra": "iterations: 3084\ncpu: 283453.9234760053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 327273.9962334537,
            "unit": "ns/iter",
            "extra": "iterations: 2655\ncpu: 327258.75706214673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 373929.27476315625,
            "unit": "ns/iter",
            "extra": "iterations: 2322\ncpu: 373901.1627906977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6119.083090097515,
            "unit": "ns/iter",
            "extra": "iterations: 114430\ncpu: 6118.606134754875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5020.734345460634,
            "unit": "ns/iter",
            "extra": "iterations: 139640\ncpu: 5020.473360068746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5075.259739126913,
            "unit": "ns/iter",
            "extra": "iterations: 137692\ncpu: 5075.095866136012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5024.12628677356,
            "unit": "ns/iter",
            "extra": "iterations: 139302\ncpu: 5023.920690298782 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 8825.293778466823,
            "unit": "ns/iter",
            "extra": "iterations: 79257\ncpu: 8824.855848694759 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 31454.849358850737,
            "unit": "ns/iter",
            "extra": "iterations: 25969\ncpu: 31453.844969001446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 140703.54581344052,
            "unit": "ns/iter",
            "extra": "iterations: 6079\ncpu: 140698.4372429676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 105491.78895463598,
            "unit": "ns/iter",
            "extra": "iterations: 8112\ncpu: 105488.42455621297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 109892.32526709691,
            "unit": "ns/iter",
            "extra": "iterations: 7769\ncpu: 109887.91350238131 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 100852.06567518272,
            "unit": "ns/iter",
            "extra": "iterations: 8405\ncpu: 100851.88578227274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 328285.49532375205,
            "unit": "ns/iter",
            "extra": "iterations: 2780\ncpu: 328268.1294964033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1749708.0056603597,
            "unit": "ns/iter",
            "extra": "iterations: 530\ncpu: 1749727.3584905677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1368476.1286982829,
            "unit": "ns/iter",
            "extra": "iterations: 676\ncpu: 1368425.1479289965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1342295.933042092,
            "unit": "ns/iter",
            "extra": "iterations: 687\ncpu: 1342272.92576419 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1370435.1079881364,
            "unit": "ns/iter",
            "extra": "iterations: 676\ncpu: 1370419.3786982237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 760765.5922568587,
            "unit": "ns/iter",
            "extra": "iterations: 1214\ncpu: 760762.6853377264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1324205.481428505,
            "unit": "ns/iter",
            "extra": "iterations: 700\ncpu: 1324051.5714285702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 39007.36546830802,
            "unit": "ns/iter",
            "extra": "iterations: 21140\ncpu: 39005.37369914857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 172310.46409280816,
            "unit": "ns/iter",
            "extra": "iterations: 4999\ncpu: 172299.79995999185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 128990.51359426201,
            "unit": "ns/iter",
            "extra": "iterations: 6694\ncpu: 128988.00418285027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 132489.2822208711,
            "unit": "ns/iter",
            "extra": "iterations: 6502\ncpu: 132478.63734235583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 121761.75954414312,
            "unit": "ns/iter",
            "extra": "iterations: 7020\ncpu: 121752.83475783447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 300512.13595272193,
            "unit": "ns/iter",
            "extra": "iterations: 2876\ncpu: 300499.8609179413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1782351.6309750113,
            "unit": "ns/iter",
            "extra": "iterations: 523\ncpu: 1782231.3575525782 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1402739.3057227961,
            "unit": "ns/iter",
            "extra": "iterations: 664\ncpu: 1402590.210843371 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1404305.329305209,
            "unit": "ns/iter",
            "extra": "iterations: 662\ncpu: 1404223.867069485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1405716.5151975728,
            "unit": "ns/iter",
            "extra": "iterations: 658\ncpu: 1405609.7264437655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 800301.6099656584,
            "unit": "ns/iter",
            "extra": "iterations: 1164\ncpu: 800237.3711340205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1364265.6343612177,
            "unit": "ns/iter",
            "extra": "iterations: 681\ncpu: 1364124.0822320064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 6547591.866196982,
            "unit": "ns/iter",
            "extra": "iterations: 142\ncpu: 6546941.549295782 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3032370.2499996135,
            "unit": "ns/iter",
            "extra": "iterations: 308\ncpu: 3032245.1298701293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 25700.311895186904,
            "unit": "ns/iter",
            "extra": "iterations: 31828\ncpu: 25698.58929244697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 137562.1328525639,
            "unit": "ns/iter",
            "extra": "iterations: 6240\ncpu: 137558.63782051325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 103028.54379211948,
            "unit": "ns/iter",
            "extra": "iterations: 8312\ncpu: 103022.56977863368 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 106777.58295297962,
            "unit": "ns/iter",
            "extra": "iterations: 8107\ncpu: 106739.86678179319 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 96379.1849469714,
            "unit": "ns/iter",
            "extra": "iterations: 8862\ncpu: 96376.56285262875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 272368.60144703434,
            "unit": "ns/iter",
            "extra": "iterations: 3179\ncpu: 272366.90783265064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1747772.0449441925,
            "unit": "ns/iter",
            "extra": "iterations: 534\ncpu: 1747677.7153558107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1359768.0349346038,
            "unit": "ns/iter",
            "extra": "iterations: 687\ncpu: 1359698.9810771453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1347143.2733812886,
            "unit": "ns/iter",
            "extra": "iterations: 695\ncpu: 1347039.856115107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1358814.3002915715,
            "unit": "ns/iter",
            "extra": "iterations: 686\ncpu: 1358759.183673472 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 751944.5282713221,
            "unit": "ns/iter",
            "extra": "iterations: 1238\ncpu: 751941.2762520171 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1319344.8271953915,
            "unit": "ns/iter",
            "extra": "iterations: 706\ncpu: 1319303.82436261 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2919.1281861538882,
            "unit": "ns/iter",
            "extra": "iterations: 240533\ncpu: 2919.1695110442315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 19228.561872820817,
            "unit": "ns/iter",
            "extra": "iterations: 36373\ncpu: 19228.139004206434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 15514.817075870475,
            "unit": "ns/iter",
            "extra": "iterations: 45210\ncpu: 15514.748949347459 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 14735.56412414725,
            "unit": "ns/iter",
            "extra": "iterations: 47525\ncpu: 14735.421357180474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 11149.259573454112,
            "unit": "ns/iter",
            "extra": "iterations: 62830\ncpu: 11148.082126372772 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 100726.56522995062,
            "unit": "ns/iter",
            "extra": "iterations: 6914\ncpu: 100722.69308649031 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 115997.7711541428,
            "unit": "ns/iter",
            "extra": "iterations: 6039\ncpu: 115989.94866699712 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 30370.746040010737,
            "unit": "ns/iter",
            "extra": "iterations: 23043\ncpu: 30369.066527795938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 30342.799236837145,
            "unit": "ns/iter",
            "extra": "iterations: 23062\ncpu: 30341.206313415863 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 29939.5664725086,
            "unit": "ns/iter",
            "extra": "iterations: 23348\ncpu: 29938.452972417235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 61238.12469395161,
            "unit": "ns/iter",
            "extra": "iterations: 11436\ncpu: 61233.79678209162 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 55873.73215852371,
            "unit": "ns/iter",
            "extra": "iterations: 12541\ncpu: 55871.134678255105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 20606.26851251766,
            "unit": "ns/iter",
            "extra": "iterations: 33950\ncpu: 20605.8438880706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 105079.64354351876,
            "unit": "ns/iter",
            "extra": "iterations: 6660\ncpu: 105070.69069069222 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 85616.77054796957,
            "unit": "ns/iter",
            "extra": "iterations: 8176\ncpu: 85611.4970645792 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 84861.7624878587,
            "unit": "ns/iter",
            "extra": "iterations: 8248\ncpu: 84856.23181377337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 84107.3523135908,
            "unit": "ns/iter",
            "extra": "iterations: 8342\ncpu: 84102.96092064366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 161686.13213213242,
            "unit": "ns/iter",
            "extra": "iterations: 4329\ncpu: 161683.73758373834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 520471.48514103366,
            "unit": "ns/iter",
            "extra": "iterations: 1346\ncpu: 520455.20059435104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 423424.6798058842,
            "unit": "ns/iter",
            "extra": "iterations: 1649\ncpu: 423418.8599151005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 425197.95310598926,
            "unit": "ns/iter",
            "extra": "iterations: 1642\ncpu: 425194.5797807587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 421879.44156620395,
            "unit": "ns/iter",
            "extra": "iterations: 1660\ncpu: 421862.28915662505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 266233.48746201204,
            "unit": "ns/iter",
            "extra": "iterations: 2632\ncpu: 266232.97872340184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 415114.79680089984,
            "unit": "ns/iter",
            "extra": "iterations: 1688\ncpu: 415101.8957345993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 22040.851017011475,
            "unit": "ns/iter",
            "extra": "iterations: 31809\ncpu: 22040.714892011514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 109753.97932007822,
            "unit": "ns/iter",
            "extra": "iterations: 6383\ncpu: 109749.85116716333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 87780.39183927496,
            "unit": "ns/iter",
            "extra": "iterations: 7965\ncpu: 87778.80728185805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 87217.43087097327,
            "unit": "ns/iter",
            "extra": "iterations: 8014\ncpu: 87216.64586972656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 86273.99037868353,
            "unit": "ns/iter",
            "extra": "iterations: 8107\ncpu: 86271.51844085433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 162408.4892136528,
            "unit": "ns/iter",
            "extra": "iterations: 4311\ncpu: 162410.73996752253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 515957.71322983457,
            "unit": "ns/iter",
            "extra": "iterations: 1353\ncpu: 515947.9674796784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 423327.9600725768,
            "unit": "ns/iter",
            "extra": "iterations: 1653\ncpu: 423325.1663641903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 424196.5069486139,
            "unit": "ns/iter",
            "extra": "iterations: 1655\ncpu: 424195.64954682684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 422478.9509685329,
            "unit": "ns/iter",
            "extra": "iterations: 1652\ncpu: 422484.4430992669 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 274587.334114855,
            "unit": "ns/iter",
            "extra": "iterations: 2559\ncpu: 274571.3950761987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 414762.9408249134,
            "unit": "ns/iter",
            "extra": "iterations: 1673\ncpu: 414751.46443514514 ns\nthreads: 1"
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
        "date": 1705961319374,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7441.57343229979,
            "unit": "ns/iter",
            "extra": "iterations: 94039\ncpu: 7440.814981018515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 54158.85090000074,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 54156.84 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 100304.52933614558,
            "unit": "ns/iter",
            "extra": "iterations: 8556\ncpu: 100297.34689107061 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 145848.9312563515,
            "unit": "ns/iter",
            "extra": "iterations: 5906\ncpu: 145841.2292583813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 191655.09635357675,
            "unit": "ns/iter",
            "extra": "iterations: 4525\ncpu: 191645.39226519325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 236327.1672122142,
            "unit": "ns/iter",
            "extra": "iterations: 3666\ncpu: 236307.7195853791 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 281351.5636776892,
            "unit": "ns/iter",
            "extra": "iterations: 3078\ncpu: 281329.9870045482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 325916.70641168824,
            "unit": "ns/iter",
            "extra": "iterations: 2667\ncpu: 325911.5485564306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 380927.9148845215,
            "unit": "ns/iter",
            "extra": "iterations: 2338\ncpu: 380911.63387510646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6177.530757633607,
            "unit": "ns/iter",
            "extra": "iterations: 113419\ncpu: 6177.061162591792 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5061.487406034549,
            "unit": "ns/iter",
            "extra": "iterations: 138082\ncpu: 5061.32732724033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5048.99843989249,
            "unit": "ns/iter",
            "extra": "iterations: 138452\ncpu: 5048.817640770812 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 4985.839162041346,
            "unit": "ns/iter",
            "extra": "iterations: 139625\ncpu: 4985.460340196958 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 8833.30391030468,
            "unit": "ns/iter",
            "extra": "iterations: 79201\ncpu: 8833.080390399122 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 28709.29249929657,
            "unit": "ns/iter",
            "extra": "iterations: 28424\ncpu: 28706.927244582028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 148149.1805147747,
            "unit": "ns/iter",
            "extra": "iterations: 5789\ncpu: 148143.51356020046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 110824.74832522834,
            "unit": "ns/iter",
            "extra": "iterations: 7613\ncpu: 110815.78878234581 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 112643.79516489813,
            "unit": "ns/iter",
            "extra": "iterations: 7611\ncpu: 112635.55380370507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 100839.88625195247,
            "unit": "ns/iter",
            "extra": "iterations: 8343\ncpu: 100831.17583603006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 323568.79950232,
            "unit": "ns/iter",
            "extra": "iterations: 2813\ncpu: 323554.9235691437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1803082.705652846,
            "unit": "ns/iter",
            "extra": "iterations: 513\ncpu: 1802928.265107209 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1423197.8116386144,
            "unit": "ns/iter",
            "extra": "iterations: 653\ncpu: 1423133.384379788 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1405162.3672231252,
            "unit": "ns/iter",
            "extra": "iterations: 659\ncpu: 1405036.1153262542 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1376636.1007408164,
            "unit": "ns/iter",
            "extra": "iterations: 675\ncpu: 1376604.8888888874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 787438.6083263287,
            "unit": "ns/iter",
            "extra": "iterations: 1177\ncpu: 785964.1461342387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1366078.7437408206,
            "unit": "ns/iter",
            "extra": "iterations: 679\ncpu: 1366005.0073637692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 37082.049693333334,
            "unit": "ns/iter",
            "extra": "iterations: 22337\ncpu: 37080.404709674614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 178427.74346203724,
            "unit": "ns/iter",
            "extra": "iterations: 4818\ncpu: 178413.22125363245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 136538.1320784487,
            "unit": "ns/iter",
            "extra": "iterations: 6322\ncpu: 136528.74090477693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 137263.97419972086,
            "unit": "ns/iter",
            "extra": "iterations: 6279\ncpu: 137255.90062111785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 126762.42527717073,
            "unit": "ns/iter",
            "extra": "iterations: 6765\ncpu: 126755.34368070963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 296156.8912448681,
            "unit": "ns/iter",
            "extra": "iterations: 2924\ncpu: 296141.79206566245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1836145.6035502166,
            "unit": "ns/iter",
            "extra": "iterations: 507\ncpu: 1836025.8382642895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1445428.3104524151,
            "unit": "ns/iter",
            "extra": "iterations: 641\ncpu: 1445274.8829953198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1455742.3139717293,
            "unit": "ns/iter",
            "extra": "iterations: 637\ncpu: 1455669.3877551006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1391967.9670659103,
            "unit": "ns/iter",
            "extra": "iterations: 668\ncpu: 1391892.5149700602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 819928.0150308716,
            "unit": "ns/iter",
            "extra": "iterations: 1131\ncpu: 819866.2245800168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1393437.0945122857,
            "unit": "ns/iter",
            "extra": "iterations: 656\ncpu: 1393332.1646341442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5026084.239999591,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5025677.000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3098448.89036556,
            "unit": "ns/iter",
            "extra": "iterations: 301\ncpu: 3098274.418604656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 26726.57377421601,
            "unit": "ns/iter",
            "extra": "iterations: 30817\ncpu: 26725.16792679356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 135857.82609388683,
            "unit": "ns/iter",
            "extra": "iterations: 6285\ncpu: 135844.8687350827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 103149.98336125945,
            "unit": "ns/iter",
            "extra": "iterations: 8354\ncpu: 103142.79387119916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 107355.29815070756,
            "unit": "ns/iter",
            "extra": "iterations: 7949\ncpu: 107351.06302679572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 100772.66051354715,
            "unit": "ns/iter",
            "extra": "iterations: 8451\ncpu: 100766.66666666692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 271097.8871317814,
            "unit": "ns/iter",
            "extra": "iterations: 3225\ncpu: 271079.1627906979 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1803982.8747591444,
            "unit": "ns/iter",
            "extra": "iterations: 519\ncpu: 1803903.4682080997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1416896.4856278407,
            "unit": "ns/iter",
            "extra": "iterations: 661\ncpu: 1416801.966717099 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1401869.8270675465,
            "unit": "ns/iter",
            "extra": "iterations: 665\ncpu: 1401792.0300751943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1363481.1842105696,
            "unit": "ns/iter",
            "extra": "iterations: 684\ncpu: 1363367.251461985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 775592.7462686738,
            "unit": "ns/iter",
            "extra": "iterations: 1206\ncpu: 775549.5024875599 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1353037.6273654883,
            "unit": "ns/iter",
            "extra": "iterations: 687\ncpu: 1352959.6797671048 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2895.511661958417,
            "unit": "ns/iter",
            "extra": "iterations: 241769\ncpu: 2895.38940062621 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 19243.547424580516,
            "unit": "ns/iter",
            "extra": "iterations: 36363\ncpu: 19241.95198415971 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 14929.081630475477,
            "unit": "ns/iter",
            "extra": "iterations: 46833\ncpu: 14928.597356564826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 14825.638517167543,
            "unit": "ns/iter",
            "extra": "iterations: 47153\ncpu: 14825.09490382375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 11137.373137177528,
            "unit": "ns/iter",
            "extra": "iterations: 62875\ncpu: 11136.683896620345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 100715.90663390642,
            "unit": "ns/iter",
            "extra": "iterations: 6919\ncpu: 100709.9147275618 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 124459.79593292314,
            "unit": "ns/iter",
            "extra": "iterations: 5606\ncpu: 124447.16375312132 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 30190.644707206397,
            "unit": "ns/iter",
            "extra": "iterations: 23088\ncpu: 30189.06358281351 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 30427.794453858947,
            "unit": "ns/iter",
            "extra": "iterations: 23007\ncpu: 30425.474855478642 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 29104.307430187346,
            "unit": "ns/iter",
            "extra": "iterations: 24064\ncpu: 29102.883976063564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 61077.56664048449,
            "unit": "ns/iter",
            "extra": "iterations: 11457\ncpu: 61073.16051322336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 56223.33655922211,
            "unit": "ns/iter",
            "extra": "iterations: 12503\ncpu: 56221.27489402535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 20046.70107730332,
            "unit": "ns/iter",
            "extra": "iterations: 34902\ncpu: 20045.630622886973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 101499.346678273,
            "unit": "ns/iter",
            "extra": "iterations: 6894\ncpu: 101494.60400348155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 85187.8392984952,
            "unit": "ns/iter",
            "extra": "iterations: 8382\ncpu: 85172.88236697664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 83001.03580713726,
            "unit": "ns/iter",
            "extra": "iterations: 8462\ncpu: 82999.43275821228 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 82651.7153163818,
            "unit": "ns/iter",
            "extra": "iterations: 8455\ncpu: 82649.98225901833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 152732.7341910194,
            "unit": "ns/iter",
            "extra": "iterations: 4586\ncpu: 152725.03270824143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 521977.4485074615,
            "unit": "ns/iter",
            "extra": "iterations: 1340\ncpu: 521932.0895522362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 426410.39093136694,
            "unit": "ns/iter",
            "extra": "iterations: 1632\ncpu: 426382.9044117619 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 426475.49726443633,
            "unit": "ns/iter",
            "extra": "iterations: 1645\ncpu: 426465.34954406775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 415698.43620177504,
            "unit": "ns/iter",
            "extra": "iterations: 1685\ncpu: 415697.09198813833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 273462.0035197642,
            "unit": "ns/iter",
            "extra": "iterations: 2557\ncpu: 273451.1928040668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 415187.34558389103,
            "unit": "ns/iter",
            "extra": "iterations: 1687\ncpu: 415159.0397154686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 21900.18267662217,
            "unit": "ns/iter",
            "extra": "iterations: 31876\ncpu: 21898.356130003693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 106554.15431441735,
            "unit": "ns/iter",
            "extra": "iterations: 6571\ncpu: 106553.7665499918 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 85491.0926264543,
            "unit": "ns/iter",
            "extra": "iterations: 8205\ncpu: 85485.08226691071 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 84218.84648700623,
            "unit": "ns/iter",
            "extra": "iterations: 8312\ncpu: 84212.74061597727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 83117.9679182505,
            "unit": "ns/iter",
            "extra": "iterations: 8416\ncpu: 83111.62072243384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 152618.72066189593,
            "unit": "ns/iter",
            "extra": "iterations: 4593\ncpu: 152613.1069018042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 521730.48106902273,
            "unit": "ns/iter",
            "extra": "iterations: 1347\ncpu: 521698.6636971059 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 427126.36258382647,
            "unit": "ns/iter",
            "extra": "iterations: 1641\ncpu: 427101.7672151121 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 430898.4247842633,
            "unit": "ns/iter",
            "extra": "iterations: 1622\ncpu: 430848.766954378 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 414180.4650887224,
            "unit": "ns/iter",
            "extra": "iterations: 1690\ncpu: 414163.19526626717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 276789.5986609057,
            "unit": "ns/iter",
            "extra": "iterations: 2539\ncpu: 276105.19889720704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 416575.0923718614,
            "unit": "ns/iter",
            "extra": "iterations: 1678\ncpu: 416547.61620977474 ns\nthreads: 1"
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
        "date": 1705962761290,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7442.618226065437,
            "unit": "ns/iter",
            "extra": "iterations: 92044\ncpu: 7442.272174177569 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 55971.99239999782,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 55972.000000000015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 103345.30350288261,
            "unit": "ns/iter",
            "extra": "iterations: 8336\ncpu: 103340.43905950098 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 149739.46692267302,
            "unit": "ns/iter",
            "extra": "iterations: 5729\ncpu: 149732.9551405132 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 197250.65113028593,
            "unit": "ns/iter",
            "extra": "iterations: 4291\ncpu: 197241.99487298995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 243462.3123772155,
            "unit": "ns/iter",
            "extra": "iterations: 3563\ncpu: 243442.3800168398 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 287426.0940199408,
            "unit": "ns/iter",
            "extra": "iterations: 3010\ncpu: 287410.5315614618 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 337484.2482571518,
            "unit": "ns/iter",
            "extra": "iterations: 2582\ncpu: 337473.12161115423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 382300.4025460935,
            "unit": "ns/iter",
            "extra": "iterations: 2278\ncpu: 382277.3485513612 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6201.3397246199975,
            "unit": "ns/iter",
            "extra": "iterations: 112862\ncpu: 6201.148305009652 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 4987.172113756642,
            "unit": "ns/iter",
            "extra": "iterations: 139983\ncpu: 4986.866262331848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 4998.604979484401,
            "unit": "ns/iter",
            "extra": "iterations: 139894\ncpu: 4998.378057672227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5024.149017102523,
            "unit": "ns/iter",
            "extra": "iterations: 139333\ncpu: 5023.9526888820355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 8926.077105787552,
            "unit": "ns/iter",
            "extra": "iterations: 78308\ncpu: 8925.658936507132 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 29344.571778167036,
            "unit": "ns/iter",
            "extra": "iterations: 27787\ncpu: 29343.207255191217 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 145290.3773744887,
            "unit": "ns/iter",
            "extra": "iterations: 5896\ncpu: 145283.83649932168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 108600.04196964165,
            "unit": "ns/iter",
            "extra": "iterations: 7839\ncpu: 108592.53731343272 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 109440.23708439997,
            "unit": "ns/iter",
            "extra": "iterations: 7820\ncpu: 109434.15601023028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 100926.0021502683,
            "unit": "ns/iter",
            "extra": "iterations: 8371\ncpu: 100923.58141201801 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 328046.19022127887,
            "unit": "ns/iter",
            "extra": "iterations: 2802\ncpu: 328025.3747323343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1810494.247563246,
            "unit": "ns/iter",
            "extra": "iterations: 513\ncpu: 1810402.7290448355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1434448.0694443937,
            "unit": "ns/iter",
            "extra": "iterations: 648\ncpu: 1434435.0308641973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1423475.2710567096,
            "unit": "ns/iter",
            "extra": "iterations: 653\ncpu: 1423420.6738131675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1407449.5196969868,
            "unit": "ns/iter",
            "extra": "iterations: 660\ncpu: 1407432.4242424264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 803286.4456048568,
            "unit": "ns/iter",
            "extra": "iterations: 1149\ncpu: 803263.0983463874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1377969.883928507,
            "unit": "ns/iter",
            "extra": "iterations: 672\ncpu: 1377903.422619046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 37902.74699678912,
            "unit": "ns/iter",
            "extra": "iterations: 21810\ncpu: 37899.95873452553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 185929.46752966303,
            "unit": "ns/iter",
            "extra": "iterations: 4635\ncpu: 185921.10032362494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 141480.4740643557,
            "unit": "ns/iter",
            "extra": "iterations: 6092\ncpu: 141471.09323703244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 136573.23552799734,
            "unit": "ns/iter",
            "extra": "iterations: 6288\ncpu: 136565.04452926194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 126123.3037080698,
            "unit": "ns/iter",
            "extra": "iterations: 6796\ncpu: 126115.42083578536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 307676.5385983645,
            "unit": "ns/iter",
            "extra": "iterations: 2811\ncpu: 307664.8523657057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1848147.0495049001,
            "unit": "ns/iter",
            "extra": "iterations: 505\ncpu: 1848037.0297029626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1460173.6750392423,
            "unit": "ns/iter",
            "extra": "iterations: 637\ncpu: 1460105.6514913607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1464233.695447387,
            "unit": "ns/iter",
            "extra": "iterations: 637\ncpu: 1464139.874411303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1434257.4946071678,
            "unit": "ns/iter",
            "extra": "iterations: 649\ncpu: 1434179.9691833635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 833947.3758993415,
            "unit": "ns/iter",
            "extra": "iterations: 1112\ncpu: 833887.0503597084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1412674.0318664683,
            "unit": "ns/iter",
            "extra": "iterations: 659\ncpu: 1412578.148710157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5051995.13999969,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5051483.999999959 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3040830.6535947137,
            "unit": "ns/iter",
            "extra": "iterations: 306\ncpu: 3040720.588235302 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 25609.16755585936,
            "unit": "ns/iter",
            "extra": "iterations: 31864\ncpu: 25607.648129550595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 136991.6919891841,
            "unit": "ns/iter",
            "extra": "iterations: 6279\ncpu: 136985.22057652497 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 106445.74321323357,
            "unit": "ns/iter",
            "extra": "iterations: 8104\ncpu: 106438.48716683126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 107835.701202704,
            "unit": "ns/iter",
            "extra": "iterations: 7982\ncpu: 107831.7088449011 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 99210.34540195647,
            "unit": "ns/iter",
            "extra": "iterations: 8645\ncpu: 99204.21052631599 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 270276.42803502607,
            "unit": "ns/iter",
            "extra": "iterations: 3196\ncpu: 270260.20025031304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1802883.421663516,
            "unit": "ns/iter",
            "extra": "iterations: 517\ncpu: 1802679.8839458341 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1423662.0642201167,
            "unit": "ns/iter",
            "extra": "iterations: 654\ncpu: 1423589.4495412828 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1422875.8975535627,
            "unit": "ns/iter",
            "extra": "iterations: 654\ncpu: 1422786.5443425102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1396037.5292353635,
            "unit": "ns/iter",
            "extra": "iterations: 667\ncpu: 1396003.448275857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 794107.770477776,
            "unit": "ns/iter",
            "extra": "iterations: 1172\ncpu: 794097.4402730372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1367064.6607929238,
            "unit": "ns/iter",
            "extra": "iterations: 681\ncpu: 1367010.5726872291 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2903.22885518558,
            "unit": "ns/iter",
            "extra": "iterations: 241454\ncpu: 2903.1948114340717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 19508.466360528546,
            "unit": "ns/iter",
            "extra": "iterations: 37456\ncpu: 19507.827851345482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 14520.985136989519,
            "unit": "ns/iter",
            "extra": "iterations: 48106\ncpu: 14520.97659335637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 14351.564271669333,
            "unit": "ns/iter",
            "extra": "iterations: 48824\ncpu: 14351.187940357162 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 11033.90632052376,
            "unit": "ns/iter",
            "extra": "iterations: 63365\ncpu: 11032.724690286486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 102148.657301727,
            "unit": "ns/iter",
            "extra": "iterations: 6834\ncpu: 102144.33713784075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 124027.47477430273,
            "unit": "ns/iter",
            "extra": "iterations: 5649\ncpu: 124021.82687201281 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 30677.947753031858,
            "unit": "ns/iter",
            "extra": "iterations: 22853\ncpu: 30676.410099330507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 30767.2339032224,
            "unit": "ns/iter",
            "extra": "iterations: 22753\ncpu: 30765.86823715566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 30325.47940756119,
            "unit": "ns/iter",
            "extra": "iterations: 23091\ncpu: 30323.593607899114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 62007.68995478029,
            "unit": "ns/iter",
            "extra": "iterations: 11279\ncpu: 62006.02003723704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 56666.39753766602,
            "unit": "ns/iter",
            "extra": "iterations: 12346\ncpu: 56664.24752956445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 20452.77697820621,
            "unit": "ns/iter",
            "extra": "iterations: 34185\ncpu: 20451.84730144811 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 101867.44791515142,
            "unit": "ns/iter",
            "extra": "iterations: 6883\ncpu: 101861.33953218034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 84379.83687944227,
            "unit": "ns/iter",
            "extra": "iterations: 8319\ncpu: 84373.79492727363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 84249.9334294555,
            "unit": "ns/iter",
            "extra": "iterations: 8322\ncpu: 84244.3883681804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 83184.37231504143,
            "unit": "ns/iter",
            "extra": "iterations: 8380\ncpu: 83181.49164677935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 156232.5068034856,
            "unit": "ns/iter",
            "extra": "iterations: 4483\ncpu: 156230.64911889465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 530873.6838124194,
            "unit": "ns/iter",
            "extra": "iterations: 1322\ncpu: 530843.2677761042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 428880.7058823435,
            "unit": "ns/iter",
            "extra": "iterations: 1632\ncpu: 428861.58088235464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 427258.81868130807,
            "unit": "ns/iter",
            "extra": "iterations: 1638\ncpu: 427247.7411477401 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 426705.37667074485,
            "unit": "ns/iter",
            "extra": "iterations: 1646\ncpu: 426693.80315918085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 273473.4437475411,
            "unit": "ns/iter",
            "extra": "iterations: 2551\ncpu: 273465.62132497324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 421113.529801317,
            "unit": "ns/iter",
            "extra": "iterations: 1661\ncpu: 421099.3979530421 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 21876.49591569317,
            "unit": "ns/iter",
            "extra": "iterations: 32074\ncpu: 21875.908835817096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 107382.59084624829,
            "unit": "ns/iter",
            "extra": "iterations: 6511\ncpu: 107378.72830594351 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 86373.76663785572,
            "unit": "ns/iter",
            "extra": "iterations: 8099\ncpu: 86371.97184837618 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 84864.72233668521,
            "unit": "ns/iter",
            "extra": "iterations: 8251\ncpu: 84862.10156344748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 84152.55975976195,
            "unit": "ns/iter",
            "extra": "iterations: 8325\ncpu: 84149.94594594525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 155598.5898689209,
            "unit": "ns/iter",
            "extra": "iterations: 4501\ncpu: 155598.35592090816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 525298.4830444915,
            "unit": "ns/iter",
            "extra": "iterations: 1327\ncpu: 525282.9691032427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 432736.8229813165,
            "unit": "ns/iter",
            "extra": "iterations: 1288\ncpu: 432728.49378882 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 432875.07382132654,
            "unit": "ns/iter",
            "extra": "iterations: 1612\ncpu: 432874.3176178628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 428309.79731378605,
            "unit": "ns/iter",
            "extra": "iterations: 1638\ncpu: 428304.0293040353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 278787.5386146858,
            "unit": "ns/iter",
            "extra": "iterations: 2512\ncpu: 278779.33917197573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 423651.85998792347,
            "unit": "ns/iter",
            "extra": "iterations: 1657\ncpu: 423623.65721182135 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}