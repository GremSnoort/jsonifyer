window.BENCHMARK_DATA = {
  "lastUpdate": 1702489612242,
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
      }
    ]
  }
}