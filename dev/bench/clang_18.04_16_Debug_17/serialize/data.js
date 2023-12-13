window.BENCHMARK_DATA = {
  "lastUpdate": 1702489621561,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Serialize clang-16 18.04 Debug c++-17": [
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
        "date": 1702489620553,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 8083.768293526139,
            "unit": "ns/iter",
            "extra": "iterations: 86670\ncpu: 8083.392177223955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 70638.15954345136,
            "unit": "ns/iter",
            "extra": "iterations: 12003\ncpu: 70637.45730234108 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 135377.56045826795,
            "unit": "ns/iter",
            "extra": "iterations: 6459\ncpu: 135373.1227744233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 200968.80036841394,
            "unit": "ns/iter",
            "extra": "iterations: 4343\ncpu: 200966.3136081051 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 264605.8693638209,
            "unit": "ns/iter",
            "extra": "iterations: 3238\ncpu: 264600.0926497837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 326090.93163033924,
            "unit": "ns/iter",
            "extra": "iterations: 2662\ncpu: 326084.1848234408 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 390320.6986547149,
            "unit": "ns/iter",
            "extra": "iterations: 2230\ncpu: 390306.36771300447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 450535.89193380217,
            "unit": "ns/iter",
            "extra": "iterations: 1934\ncpu: 450521.19958634954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 513364.6739386757,
            "unit": "ns/iter",
            "extra": "iterations: 1696\ncpu: 513333.7264150942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6109.6031601017685,
            "unit": "ns/iter",
            "extra": "iterations: 114933\ncpu: 6109.448983320708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5179.806117093578,
            "unit": "ns/iter",
            "extra": "iterations: 135293\ncpu: 5179.799398342852 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5183.440574453404,
            "unit": "ns/iter",
            "extra": "iterations: 135085\ncpu: 5183.413406373758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5184.621368648876,
            "unit": "ns/iter",
            "extra": "iterations: 134936\ncpu: 5184.575650678832 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 9037.078981303694,
            "unit": "ns/iter",
            "extra": "iterations: 77550\ncpu: 9036.79948420373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 31395.62090132623,
            "unit": "ns/iter",
            "extra": "iterations: 26228\ncpu: 31395.00152508766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 120460.9064707454,
            "unit": "ns/iter",
            "extra": "iterations: 7078\ncpu: 120458.30743147784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 97828.18404837385,
            "unit": "ns/iter",
            "extra": "iterations: 8764\ncpu: 97822.90050205389 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 95846.23342680934,
            "unit": "ns/iter",
            "extra": "iterations: 8915\ncpu: 95837.52103196841 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 96587.82539681823,
            "unit": "ns/iter",
            "extra": "iterations: 8757\ncpu: 96583.83007879432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 279852.54709099536,
            "unit": "ns/iter",
            "extra": "iterations: 3111\ncpu: 279830.7939569273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2030376.5623633175,
            "unit": "ns/iter",
            "extra": "iterations: 457\ncpu: 2030298.9059081012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1645769.284452404,
            "unit": "ns/iter",
            "extra": "iterations: 566\ncpu: 1645648.7632508795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1683833.0416667026,
            "unit": "ns/iter",
            "extra": "iterations: 552\ncpu: 1683738.5869565234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1677445.3092223094,
            "unit": "ns/iter",
            "extra": "iterations: 553\ncpu: 1677336.5280289347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1045950.6124294617,
            "unit": "ns/iter",
            "extra": "iterations: 885\ncpu: 1045920.3389830497 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1631033.7636683772,
            "unit": "ns/iter",
            "extra": "iterations: 567\ncpu: 1630976.5432098762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 7007758.449999528,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7007340.000000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 4039673.6839824514,
            "unit": "ns/iter",
            "extra": "iterations: 231\ncpu: 4039619.4805194847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 8662008.515873114,
            "unit": "ns/iter",
            "extra": "iterations: 126\ncpu: 8661591.269841274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 28033.313699376486,
            "unit": "ns/iter",
            "extra": "iterations: 29286\ncpu: 28032.60943795667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 122356.90639335927,
            "unit": "ns/iter",
            "extra": "iterations: 6976\ncpu: 122350.48738532112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 100450.22052247712,
            "unit": "ns/iter",
            "extra": "iterations: 8498\ncpu: 100449.2821840434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 99114.76281827714,
            "unit": "ns/iter",
            "extra": "iterations: 8601\ncpu: 99111.88233926307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 100416.61374351714,
            "unit": "ns/iter",
            "extra": "iterations: 8484\ncpu: 100413.4252710989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 281062.65388333786,
            "unit": "ns/iter",
            "extra": "iterations: 3103\ncpu: 281051.9819529477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2030758.5252747051,
            "unit": "ns/iter",
            "extra": "iterations: 455\ncpu: 2030675.3846153799 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1669878.618279517,
            "unit": "ns/iter",
            "extra": "iterations: 558\ncpu: 1669770.0716845882 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1693164.6218180999,
            "unit": "ns/iter",
            "extra": "iterations: 550\ncpu: 1693074.7272727264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1680219.7880433663,
            "unit": "ns/iter",
            "extra": "iterations: 552\ncpu: 1680125.9057971057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1049642.2102273135,
            "unit": "ns/iter",
            "extra": "iterations: 880\ncpu: 1049632.1590909055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1655333.5600706658,
            "unit": "ns/iter",
            "extra": "iterations: 566\ncpu: 1655219.611307421 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 7128554.9399999585,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7128239.000000035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 4031127.603448485,
            "unit": "ns/iter",
            "extra": "iterations: 232\ncpu: 4031000.862068978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 28647.52471815636,
            "unit": "ns/iter",
            "extra": "iterations: 28562\ncpu: 28646.628387367793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 119966.67886180078,
            "unit": "ns/iter",
            "extra": "iterations: 7134\ncpu: 119964.80235491993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 96569.67109709202,
            "unit": "ns/iter",
            "extra": "iterations: 8878\ncpu: 96567.89817526496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 96119.9880104062,
            "unit": "ns/iter",
            "extra": "iterations: 8841\ncpu: 96117.8034159034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 94772.11374776388,
            "unit": "ns/iter",
            "extra": "iterations: 8976\ncpu: 94765.83110516916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 277056.58155802713,
            "unit": "ns/iter",
            "extra": "iterations: 3145\ncpu: 277042.702702704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2019314.838427895,
            "unit": "ns/iter",
            "extra": "iterations: 458\ncpu: 2019235.8078602639 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1659503.1319072815,
            "unit": "ns/iter",
            "extra": "iterations: 561\ncpu: 1659403.386809279 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1696438.2896174751,
            "unit": "ns/iter",
            "extra": "iterations: 549\ncpu: 1696328.2331511846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1682909.163043629,
            "unit": "ns/iter",
            "extra": "iterations: 552\ncpu: 1682797.282608703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1040160.5645342494,
            "unit": "ns/iter",
            "extra": "iterations: 891\ncpu: 1040119.9775533084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1631433.9367311066,
            "unit": "ns/iter",
            "extra": "iterations: 569\ncpu: 1631318.1019332092 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 3154.2531394877838,
            "unit": "ns/iter",
            "extra": "iterations: 222170\ncpu: 3154.1157672052846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 15976.181472108996,
            "unit": "ns/iter",
            "extra": "iterations: 43869\ncpu: 15975.246757391471 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 12411.669079683192,
            "unit": "ns/iter",
            "extra": "iterations: 56361\ncpu: 12410.945511967502 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 12369.10560729515,
            "unit": "ns/iter",
            "extra": "iterations: 56587\ncpu: 12367.91489211308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 10296.58199875711,
            "unit": "ns/iter",
            "extra": "iterations: 67562\ncpu: 10296.237529972408 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 64301.515968710926,
            "unit": "ns/iter",
            "extra": "iterations: 10865\ncpu: 64301.693511274854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 135189.52343297942,
            "unit": "ns/iter",
            "extra": "iterations: 5185\ncpu: 135180.79074252653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 35706.26804386706,
            "unit": "ns/iter",
            "extra": "iterations: 19605\ncpu: 35705.77913797494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 35987.60925040298,
            "unit": "ns/iter",
            "extra": "iterations: 19437\ncpu: 35988.02798785854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 36177.299462477065,
            "unit": "ns/iter",
            "extra": "iterations: 19348\ncpu: 36176.63841223933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 74284.76702736958,
            "unit": "ns/iter",
            "extra": "iterations: 9426\ncpu: 74284.65945257735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 63790.33548974453,
            "unit": "ns/iter",
            "extra": "iterations: 10975\ncpu: 63788.145785876084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 20325.23657881231,
            "unit": "ns/iter",
            "extra": "iterations: 34982\ncpu: 20322.77171116587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 93579.22878523829,
            "unit": "ns/iter",
            "extra": "iterations: 7483\ncpu: 93578.28411065126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 75463.77763399917,
            "unit": "ns/iter",
            "extra": "iterations: 9273\ncpu: 75461.3717243608 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 75083.148749735,
            "unit": "ns/iter",
            "extra": "iterations: 9358\ncpu: 75081.98332977045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 75805.87739711831,
            "unit": "ns/iter",
            "extra": "iterations: 9282\ncpu: 75805.03124326722 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 144257.24319306784,
            "unit": "ns/iter",
            "extra": "iterations: 4848\ncpu: 144252.57838283852 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 584600.3721709806,
            "unit": "ns/iter",
            "extra": "iterations: 1193\ncpu: 584607.2925398113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 494750.5739560897,
            "unit": "ns/iter",
            "extra": "iterations: 1413\ncpu: 494740.48124557204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 497363.76721078705,
            "unit": "ns/iter",
            "extra": "iterations: 1409\ncpu: 497358.76508161705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 496746.62056744675,
            "unit": "ns/iter",
            "extra": "iterations: 1410\ncpu: 496745.17730496894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 333918.6395237989,
            "unit": "ns/iter",
            "extra": "iterations: 2100\ncpu: 333917.9523809543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 484834.0596394136,
            "unit": "ns/iter",
            "extra": "iterations: 1442\ncpu: 484839.52843273076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 20165.035683350838,
            "unit": "ns/iter",
            "extra": "iterations: 34638\ncpu: 20164.154974305795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 94331.29936649506,
            "unit": "ns/iter",
            "extra": "iterations: 7419\ncpu: 94332.17414745956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 75878.3346307681,
            "unit": "ns/iter",
            "extra": "iterations: 9249\ncpu: 75879.06800735126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 75225.4014833891,
            "unit": "ns/iter",
            "extra": "iterations: 9303\ncpu: 75223.41180264512 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 76016.05752978944,
            "unit": "ns/iter",
            "extra": "iterations: 9230\ncpu: 76016.81473456103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 143270.65677445877,
            "unit": "ns/iter",
            "extra": "iterations: 4886\ncpu: 143267.04871060318 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 585865.4564489084,
            "unit": "ns/iter",
            "extra": "iterations: 1194\ncpu: 585871.8592964887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 493721.56819790945,
            "unit": "ns/iter",
            "extra": "iterations: 1415\ncpu: 493722.12014134025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 494160.0707213346,
            "unit": "ns/iter",
            "extra": "iterations: 1414\ncpu: 494159.1230551615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 494046.7860170123,
            "unit": "ns/iter",
            "extra": "iterations: 1416\ncpu: 494039.54802260257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 332657.14619043743,
            "unit": "ns/iter",
            "extra": "iterations: 2100\ncpu: 332655.4285714253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 487516.74530267995,
            "unit": "ns/iter",
            "extra": "iterations: 1437\ncpu: 487521.6423103667 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}