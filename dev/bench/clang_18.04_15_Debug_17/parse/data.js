window.BENCHMARK_DATA = {
  "lastUpdate": 1702503290597,
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
      }
    ]
  }
}