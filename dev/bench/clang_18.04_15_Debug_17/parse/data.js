window.BENCHMARK_DATA = {
  "lastUpdate": 1705774146655,
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
      }
    ]
  }
}