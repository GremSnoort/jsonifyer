window.BENCHMARK_DATA = {
  "lastUpdate": 1705772747274,
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
        "date": 1702492241922,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 8122.9157639862315,
            "unit": "ns/iter",
            "extra": "iterations: 86317\ncpu: 8122.710474182376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 70876.64610742786,
            "unit": "ns/iter",
            "extra": "iterations: 11933\ncpu: 70874.93505405179 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 136011.7965394645,
            "unit": "ns/iter",
            "extra": "iterations: 6473\ncpu: 136006.24131005717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 199997.2236296626,
            "unit": "ns/iter",
            "extra": "iterations: 4342\ncpu: 199996.8678028558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 264532.0115959766,
            "unit": "ns/iter",
            "extra": "iterations: 3277\ncpu: 264519.46902654885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 322691.6417797938,
            "unit": "ns/iter",
            "extra": "iterations: 2652\ncpu: 322682.3906485672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 386521.79040854675,
            "unit": "ns/iter",
            "extra": "iterations: 2252\ncpu: 386511.2788632327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 448200.6308724805,
            "unit": "ns/iter",
            "extra": "iterations: 1937\ncpu: 448185.8544140422 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 510802.4680352109,
            "unit": "ns/iter",
            "extra": "iterations: 1705\ncpu: 510777.88856305036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6083.885326682026,
            "unit": "ns/iter",
            "extra": "iterations: 115877\ncpu: 6083.554976397391 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5087.880260051291,
            "unit": "ns/iter",
            "extra": "iterations: 137665\ncpu: 5087.603239748675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5149.212922119419,
            "unit": "ns/iter",
            "extra": "iterations: 136247\ncpu: 5149.026400581295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5077.312148497885,
            "unit": "ns/iter",
            "extra": "iterations: 137268\ncpu: 5076.988081708778 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 8821.556677281611,
            "unit": "ns/iter",
            "extra": "iterations: 79441\ncpu: 8821.036996009636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 32935.18950587802,
            "unit": "ns/iter",
            "extra": "iterations: 25176\ncpu: 32933.16650778514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 124714.00263426572,
            "unit": "ns/iter",
            "extra": "iterations: 6833\ncpu: 124704.49290209284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 99360.20046755906,
            "unit": "ns/iter",
            "extra": "iterations: 8555\ncpu: 99353.5359438925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 100934.68064324319,
            "unit": "ns/iter",
            "extra": "iterations: 8395\ncpu: 100928.00476474101 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 102482.56072971948,
            "unit": "ns/iter",
            "extra": "iterations: 8332\ncpu: 102475.94815170439 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 280332.80174082884,
            "unit": "ns/iter",
            "extra": "iterations: 3102\ncpu: 280318.08510638325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2094564.362612407,
            "unit": "ns/iter",
            "extra": "iterations: 444\ncpu: 2094389.8648648644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1750901.8048778882,
            "unit": "ns/iter",
            "extra": "iterations: 533\ncpu: 1750794.1838649155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1699688.022018488,
            "unit": "ns/iter",
            "extra": "iterations: 545\ncpu: 1699553.761467885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1724873.9981515678,
            "unit": "ns/iter",
            "extra": "iterations: 541\ncpu: 1724790.9426987064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1042140.2536641308,
            "unit": "ns/iter",
            "extra": "iterations: 887\ncpu: 1042057.6099210801 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1675388.6130200012,
            "unit": "ns/iter",
            "extra": "iterations: 553\ncpu: 1675354.4303797458 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 6980794.900000546,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6980491.999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 3921902.995798251,
            "unit": "ns/iter",
            "extra": "iterations: 238\ncpu: 3921904.621848746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 8689941.495999847,
            "unit": "ns/iter",
            "extra": "iterations: 125\ncpu: 8689816.000000007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 28719.292989161928,
            "unit": "ns/iter",
            "extra": "iterations: 28513\ncpu: 28718.63360572368 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 126530.05703812254,
            "unit": "ns/iter",
            "extra": "iterations: 6820\ncpu: 126530.86510263938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 104269.13965743867,
            "unit": "ns/iter",
            "extra": "iterations: 8349\ncpu: 104267.54102287683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 105594.9050163955,
            "unit": "ns/iter",
            "extra": "iterations: 8233\ncpu: 105594.6435078345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 105182.879676563,
            "unit": "ns/iter",
            "extra": "iterations: 8286\ncpu: 105182.79024861212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 286377.4373770598,
            "unit": "ns/iter",
            "extra": "iterations: 3050\ncpu: 286380.09836065583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2101438.206349188,
            "unit": "ns/iter",
            "extra": "iterations: 441\ncpu: 2101414.965986395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1755325.1100567924,
            "unit": "ns/iter",
            "extra": "iterations: 527\ncpu: 1755309.2979127073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1734579.9683425867,
            "unit": "ns/iter",
            "extra": "iterations: 537\ncpu: 1734562.383612652 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1740308.6971961928,
            "unit": "ns/iter",
            "extra": "iterations: 535\ncpu: 1740310.654205601 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1047957.8734464019,
            "unit": "ns/iter",
            "extra": "iterations: 885\ncpu: 1047948.8135593211 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1693302.1970803682,
            "unit": "ns/iter",
            "extra": "iterations: 548\ncpu: 1693271.5328467179 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 7086911.339999915,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7086612.000000017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 3956569.754237435,
            "unit": "ns/iter",
            "extra": "iterations: 236\ncpu: 3956541.949152556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 31977.74883196034,
            "unit": "ns/iter",
            "extra": "iterations: 25684\ncpu: 31977.43342158568 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 133204.80121136075,
            "unit": "ns/iter",
            "extra": "iterations: 6439\ncpu: 133204.8454728996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 100586.48733655049,
            "unit": "ns/iter",
            "extra": "iterations: 8489\ncpu: 100585.16904229 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 101602.99378659175,
            "unit": "ns/iter",
            "extra": "iterations: 8369\ncpu: 101601.55335165423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 99457.39151770876,
            "unit": "ns/iter",
            "extra": "iterations: 8559\ncpu: 99455.33356700519 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 278120.6132437915,
            "unit": "ns/iter",
            "extra": "iterations: 3126\ncpu: 278117.914267435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2108879.6009070645,
            "unit": "ns/iter",
            "extra": "iterations: 441\ncpu: 2108842.176870748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1752853.634651713,
            "unit": "ns/iter",
            "extra": "iterations: 531\ncpu: 1752854.8022598817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1740232.9551402128,
            "unit": "ns/iter",
            "extra": "iterations: 535\ncpu: 1740191.9626168234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1718680.881700483,
            "unit": "ns/iter",
            "extra": "iterations: 541\ncpu: 1718682.0702403027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1048809.5975196678,
            "unit": "ns/iter",
            "extra": "iterations: 887\ncpu: 1048801.2401352914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1689611.525454521,
            "unit": "ns/iter",
            "extra": "iterations: 550\ncpu: 1689614.7272727287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 3109.003685127994,
            "unit": "ns/iter",
            "extra": "iterations: 225501\ncpu: 3108.9968558897667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 16318.112258937035,
            "unit": "ns/iter",
            "extra": "iterations: 42883\ncpu: 16318.067765781367 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 12539.524449617142,
            "unit": "ns/iter",
            "extra": "iterations: 55870\ncpu: 12539.366386253689 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 13092.703466282115,
            "unit": "ns/iter",
            "extra": "iterations: 55535\ncpu: 13092.705501035332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 10349.68549005652,
            "unit": "ns/iter",
            "extra": "iterations: 67788\ncpu: 10349.56334454473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 66163.05301249628,
            "unit": "ns/iter",
            "extra": "iterations: 10639\ncpu: 66162.90064855739 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 138501.49911014293,
            "unit": "ns/iter",
            "extra": "iterations: 5057\ncpu: 138500.37571682865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 36044.29134060572,
            "unit": "ns/iter",
            "extra": "iterations: 19424\ncpu: 36044.28027182885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 35793.223966854704,
            "unit": "ns/iter",
            "extra": "iterations: 19552\ncpu: 35792.85495089997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 36179.08082842418,
            "unit": "ns/iter",
            "extra": "iterations: 19362\ncpu: 36178.617911373134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 74177.42638947553,
            "unit": "ns/iter",
            "extra": "iterations: 9428\ncpu: 74178.17140432628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 58690.41194280717,
            "unit": "ns/iter",
            "extra": "iterations: 11890\ncpu: 58690.975609755995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 19803.763230728367,
            "unit": "ns/iter",
            "extra": "iterations: 35410\ncpu: 19803.789889861593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 96571.27029634565,
            "unit": "ns/iter",
            "extra": "iterations: 7255\ncpu: 96569.85527222774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 77130.06468206068,
            "unit": "ns/iter",
            "extra": "iterations: 9137\ncpu: 77129.16712268828 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 77179.37046031067,
            "unit": "ns/iter",
            "extra": "iterations: 9059\ncpu: 77178.35301909682 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 77292.9157223094,
            "unit": "ns/iter",
            "extra": "iterations: 9089\ncpu: 77292.61744966506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 146726.5458927137,
            "unit": "ns/iter",
            "extra": "iterations: 4772\ncpu: 146726.42497904587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 599984.5526992162,
            "unit": "ns/iter",
            "extra": "iterations: 1167\ncpu: 599974.0359897203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 509740.96220928396,
            "unit": "ns/iter",
            "extra": "iterations: 1376\ncpu: 509732.267441856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 501350.31759652524,
            "unit": "ns/iter",
            "extra": "iterations: 1398\ncpu: 501348.9985693768 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 506753.50289014267,
            "unit": "ns/iter",
            "extra": "iterations: 1384\ncpu: 506751.80635838484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 333210.91634981445,
            "unit": "ns/iter",
            "extra": "iterations: 2104\ncpu: 333211.4068441111 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 496654.26718640816,
            "unit": "ns/iter",
            "extra": "iterations: 1411\ncpu: 496652.5159461416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 19514.720765454327,
            "unit": "ns/iter",
            "extra": "iterations: 35848\ncpu: 19514.904597188262 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 96357.29739010805,
            "unit": "ns/iter",
            "extra": "iterations: 7280\ncpu: 96357.03296703413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 77000.48943894512,
            "unit": "ns/iter",
            "extra": "iterations: 9090\ncpu: 77000.4950495047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 76730.3937767072,
            "unit": "ns/iter",
            "extra": "iterations: 9127\ncpu: 76728.6622110214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 77635.7262656481,
            "unit": "ns/iter",
            "extra": "iterations: 9027\ncpu: 77634.64052287592 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 145585.71690258002,
            "unit": "ns/iter",
            "extra": "iterations: 4804\ncpu: 145587.1981681933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 602606.2325581358,
            "unit": "ns/iter",
            "extra": "iterations: 1161\ncpu: 602612.0585701991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 510782.9136795805,
            "unit": "ns/iter",
            "extra": "iterations: 1367\ncpu: 510782.95537674404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 500067.93099998956,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 500056.80000001006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 502982.24550036195,
            "unit": "ns/iter",
            "extra": "iterations: 1389\ncpu: 502980.92152627517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 335193.8357279782,
            "unit": "ns/iter",
            "extra": "iterations: 2088\ncpu: 335196.8869731811 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 497512.3651245803,
            "unit": "ns/iter",
            "extra": "iterations: 1405\ncpu: 497511.67259786045 ns\nthreads: 1"
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
        "date": 1702503293752,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 8100.281714948364,
            "unit": "ns/iter",
            "extra": "iterations: 86300\ncpu: 8100.02201622248 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 70679.18240825726,
            "unit": "ns/iter",
            "extra": "iterations: 12017\ncpu: 70678.03944412082 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 135504.730037427,
            "unit": "ns/iter",
            "extra": "iterations: 6412\ncpu: 135504.36681222706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 198921.12594804956,
            "unit": "ns/iter",
            "extra": "iterations: 4351\ncpu: 198917.74304757523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 263170.13482112694,
            "unit": "ns/iter",
            "extra": "iterations: 3271\ncpu: 263164.7508407215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 324996.4749810456,
            "unit": "ns/iter",
            "extra": "iterations: 2638\ncpu: 324982.5625473844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 387419.17455357313,
            "unit": "ns/iter",
            "extra": "iterations: 2240\ncpu: 387413.6607142856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 449689.6015544085,
            "unit": "ns/iter",
            "extra": "iterations: 1930\ncpu: 449672.64248704625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 512787.91809071845,
            "unit": "ns/iter",
            "extra": "iterations: 1697\ncpu: 512781.9681791397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6252.354919176126,
            "unit": "ns/iter",
            "extra": "iterations: 111848\ncpu: 6252.260210285386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5298.606055564392,
            "unit": "ns/iter",
            "extra": "iterations: 132242\ncpu: 5298.5942438862085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5238.548962359863,
            "unit": "ns/iter",
            "extra": "iterations: 133235\ncpu: 5238.4576124892155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5259.218205986657,
            "unit": "ns/iter",
            "extra": "iterations: 133154\ncpu: 5259.077459182606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 9003.439483732645,
            "unit": "ns/iter",
            "extra": "iterations: 77789\ncpu: 9003.42079214284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 31118.94136919085,
            "unit": "ns/iter",
            "extra": "iterations: 26249\ncpu: 31118.861670920793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 126653.49627643748,
            "unit": "ns/iter",
            "extra": "iterations: 6714\ncpu: 126653.05332141797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 99554.01777516198,
            "unit": "ns/iter",
            "extra": "iterations: 8495\ncpu: 99547.42789876378 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 102507.27376243706,
            "unit": "ns/iter",
            "extra": "iterations: 8343\ncpu: 102506.14886731388 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 102700.6298701208,
            "unit": "ns/iter",
            "extra": "iterations: 8316\ncpu: 102699.20634920638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 276433.44589432265,
            "unit": "ns/iter",
            "extra": "iterations: 3142\ncpu: 276423.4882240606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2152739.2546295337,
            "unit": "ns/iter",
            "extra": "iterations: 432\ncpu: 2152633.1018518545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1764866.884469694,
            "unit": "ns/iter",
            "extra": "iterations: 528\ncpu: 1764732.5757575757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1732627.0823968942,
            "unit": "ns/iter",
            "extra": "iterations: 534\ncpu: 1732544.194756552 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1722508.4963100376,
            "unit": "ns/iter",
            "extra": "iterations: 542\ncpu: 1722385.0553505549 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1065853.461009184,
            "unit": "ns/iter",
            "extra": "iterations: 872\ncpu: 1065790.1376146763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1704422.7779817048,
            "unit": "ns/iter",
            "extra": "iterations: 545\ncpu: 1704307.7064220158 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 7046551.779999391,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7046126.999999984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 3963391.771186403,
            "unit": "ns/iter",
            "extra": "iterations: 236\ncpu: 3963113.9830508423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 8588806.02362209,
            "unit": "ns/iter",
            "extra": "iterations: 127\ncpu: 8588192.91338583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 29020.072347667276,
            "unit": "ns/iter",
            "extra": "iterations: 28211\ncpu: 29019.744071461486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 136707.28760567232,
            "unit": "ns/iter",
            "extra": "iterations: 6269\ncpu: 136706.82724517494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 105250.59327217004,
            "unit": "ns/iter",
            "extra": "iterations: 8175\ncpu: 105247.16819571826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 103884.80811402918,
            "unit": "ns/iter",
            "extra": "iterations: 8208\ncpu: 103880.73830409329 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 105954.97018463293,
            "unit": "ns/iter",
            "extra": "iterations: 8016\ncpu: 105949.02694610709 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 283913.75147156476,
            "unit": "ns/iter",
            "extra": "iterations: 3058\ncpu: 283913.2439502949 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2169233.9254080006,
            "unit": "ns/iter",
            "extra": "iterations: 429\ncpu: 2169048.2517482513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1756585.5776515973,
            "unit": "ns/iter",
            "extra": "iterations: 528\ncpu: 1756463.6363636346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1755705.3929236422,
            "unit": "ns/iter",
            "extra": "iterations: 537\ncpu: 1755059.4040968332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1720767.8970589684,
            "unit": "ns/iter",
            "extra": "iterations: 544\ncpu: 1720649.264705877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1051723.553915982,
            "unit": "ns/iter",
            "extra": "iterations: 881\ncpu: 1051671.5096481254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1706416.6489946155,
            "unit": "ns/iter",
            "extra": "iterations: 547\ncpu: 1706316.4533820841 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 7055069.169999797,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7054538.000000008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 4026432.6695278254,
            "unit": "ns/iter",
            "extra": "iterations: 233\ncpu: 4026138.197424883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 28783.12865579422,
            "unit": "ns/iter",
            "extra": "iterations: 28448\ncpu: 28780.68053993246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 120796.26302269359,
            "unit": "ns/iter",
            "extra": "iterations: 7007\ncpu: 120786.15670044227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 104130.75472158394,
            "unit": "ns/iter",
            "extra": "iterations: 8207\ncpu: 104126.80638479366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 101851.66283937386,
            "unit": "ns/iter",
            "extra": "iterations: 8361\ncpu: 101843.98995335499 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 100193.49100952006,
            "unit": "ns/iter",
            "extra": "iterations: 8509\ncpu: 100186.40263250677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 281763.0682039325,
            "unit": "ns/iter",
            "extra": "iterations: 3079\ncpu: 281740.82494316355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2142305.1016164497,
            "unit": "ns/iter",
            "extra": "iterations: 433\ncpu: 2142226.32794458 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1763110.6053129535,
            "unit": "ns/iter",
            "extra": "iterations: 527\ncpu: 1762970.9677419385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1747707.8947367636,
            "unit": "ns/iter",
            "extra": "iterations: 532\ncpu: 1747597.7443608989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1723788.7855823226,
            "unit": "ns/iter",
            "extra": "iterations: 541\ncpu: 1723727.5415896466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1060581.5561862574,
            "unit": "ns/iter",
            "extra": "iterations: 881\ncpu: 1060533.7116912575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1698799.6003649225,
            "unit": "ns/iter",
            "extra": "iterations: 548\ncpu: 1698720.620437948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 3071.7206566155883,
            "unit": "ns/iter",
            "extra": "iterations: 227104\ncpu: 3071.5685324785263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 16439.06051479951,
            "unit": "ns/iter",
            "extra": "iterations: 42502\ncpu: 16438.315843960398 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 12903.619739341273,
            "unit": "ns/iter",
            "extra": "iterations: 54247\ncpu: 12903.045329695604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 12184.549213897006,
            "unit": "ns/iter",
            "extra": "iterations: 57626\ncpu: 12183.753861104344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 10483.206533286317,
            "unit": "ns/iter",
            "extra": "iterations: 66827\ncpu: 10483.0203360917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 65298.493705125016,
            "unit": "ns/iter",
            "extra": "iterations: 10723\ncpu: 65295.83139046934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 139618.49073520134,
            "unit": "ns/iter",
            "extra": "iterations: 5019\ncpu: 139612.83124128357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 36357.912517522076,
            "unit": "ns/iter",
            "extra": "iterations: 19261\ncpu: 36356.54950417934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 36289.96118969914,
            "unit": "ns/iter",
            "extra": "iterations: 19299\ncpu: 36288.72480439371 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 36038.27334875284,
            "unit": "ns/iter",
            "extra": "iterations: 19455\ncpu: 36037.46080699049 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 73973.17982039406,
            "unit": "ns/iter",
            "extra": "iterations: 9465\ncpu: 73971.23085050174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 65358.83554352134,
            "unit": "ns/iter",
            "extra": "iterations: 10708\ncpu: 65354.97758685173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 19654.1970322922,
            "unit": "ns/iter",
            "extra": "iterations: 35583\ncpu: 19653.376612427495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 95784.29665203708,
            "unit": "ns/iter",
            "extra": "iterations: 7288\ncpu: 95776.48188803541 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 77044.12580074788,
            "unit": "ns/iter",
            "extra": "iterations: 9054\ncpu: 77037.38679036887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 76082.46852919541,
            "unit": "ns/iter",
            "extra": "iterations: 9199\ncpu: 76082.26981193635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 76942.05017644116,
            "unit": "ns/iter",
            "extra": "iterations: 9068\ncpu: 76941.00132333582 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 148334.42152087047,
            "unit": "ns/iter",
            "extra": "iterations: 4721\ncpu: 148326.7528066096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 610034.9930252929,
            "unit": "ns/iter",
            "extra": "iterations: 1147\ncpu: 609978.1168265125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 510067.9773887303,
            "unit": "ns/iter",
            "extra": "iterations: 1371\ncpu: 510024.07002187864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 505652.3282828336,
            "unit": "ns/iter",
            "extra": "iterations: 1386\ncpu: 505644.66089465976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 501166.0258064873,
            "unit": "ns/iter",
            "extra": "iterations: 1395\ncpu: 501142.93906809523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 331972.6990061473,
            "unit": "ns/iter",
            "extra": "iterations: 2113\ncpu: 331949.02981542697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 497137.5663590997,
            "unit": "ns/iter",
            "extra": "iterations: 1409\ncpu: 497117.60113555164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 19733.79184537333,
            "unit": "ns/iter",
            "extra": "iterations: 35440\ncpu: 19733.504514672735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 95831.24900644636,
            "unit": "ns/iter",
            "extra": "iterations: 7297\ncpu: 95825.668082775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 76777.84765453999,
            "unit": "ns/iter",
            "extra": "iterations: 9124\ncpu: 76774.33143358227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 75884.04482944765,
            "unit": "ns/iter",
            "extra": "iterations: 9235\ncpu: 75877.95343800817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 77102.18535242353,
            "unit": "ns/iter",
            "extra": "iterations: 9080\ncpu: 77096.56387665114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 147462.4852631486,
            "unit": "ns/iter",
            "extra": "iterations: 4750\ncpu: 147462.2526315796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 610691.9423077583,
            "unit": "ns/iter",
            "extra": "iterations: 1144\ncpu: 610655.244755237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 510889.36953348835,
            "unit": "ns/iter",
            "extra": "iterations: 1372\ncpu: 510854.8104956307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 501888.2887931479,
            "unit": "ns/iter",
            "extra": "iterations: 1392\ncpu: 501857.97413793276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 503590.96693027834,
            "unit": "ns/iter",
            "extra": "iterations: 1391\ncpu: 503575.4852624019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 332616.4964404382,
            "unit": "ns/iter",
            "extra": "iterations: 2107\ncpu: 332615.5196962557 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 498177.0213522538,
            "unit": "ns/iter",
            "extra": "iterations: 1405\ncpu: 498139.2170818518 ns\nthreads: 1"
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
        "date": 1705574969877,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 8128.880738952106,
            "unit": "ns/iter",
            "extra": "iterations: 86122\ncpu: 8128.747590627249 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 72106.94492606106,
            "unit": "ns/iter",
            "extra": "iterations: 11766\ncpu: 72106.57827638961 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 137612.49202085618,
            "unit": "ns/iter",
            "extra": "iterations: 6329\ncpu: 137609.35376836787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 203119.5620182291,
            "unit": "ns/iter",
            "extra": "iterations: 4281\ncpu: 203119.80845596822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 269377.4274193597,
            "unit": "ns/iter",
            "extra": "iterations: 3224\ncpu: 269374.00744416885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 331979.98546287336,
            "unit": "ns/iter",
            "extra": "iterations: 2614\ncpu: 331976.7788829379 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 398876.29607661715,
            "unit": "ns/iter",
            "extra": "iterations: 2192\ncpu: 398872.8558394162 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 460620.8742705623,
            "unit": "ns/iter",
            "extra": "iterations: 1885\ncpu: 460614.270557029 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 526198.0652962431,
            "unit": "ns/iter",
            "extra": "iterations: 1654\ncpu: 526194.0749697699 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6128.08310176736,
            "unit": "ns/iter",
            "extra": "iterations: 114438\ncpu: 6127.52669567801 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5234.222529113527,
            "unit": "ns/iter",
            "extra": "iterations: 133960\ncpu: 5233.84069871603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5170.261303638195,
            "unit": "ns/iter",
            "extra": "iterations: 135421\ncpu: 5170.04748155752 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5215.942713515712,
            "unit": "ns/iter",
            "extra": "iterations: 134674\ncpu: 5215.5850423986785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 9010.546145536618,
            "unit": "ns/iter",
            "extra": "iterations: 77754\ncpu: 9010.075365897565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 32438.748053482268,
            "unit": "ns/iter",
            "extra": "iterations: 25430\ncpu: 32437.066456940596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 120598.21447758873,
            "unit": "ns/iter",
            "extra": "iterations: 7073\ncpu: 120593.17121447762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 96849.2587126827,
            "unit": "ns/iter",
            "extra": "iterations: 8809\ncpu: 96844.00045408122 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 101116.63862559458,
            "unit": "ns/iter",
            "extra": "iterations: 8440\ncpu: 101111.94312796215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 104808.44992760204,
            "unit": "ns/iter",
            "extra": "iterations: 8288\ncpu: 104802.98021235544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 274853.1033280422,
            "unit": "ns/iter",
            "extra": "iterations: 3155\ncpu: 274834.83359746437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2135412.189376518,
            "unit": "ns/iter",
            "extra": "iterations: 433\ncpu: 2135313.625866052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1757933.5595464022,
            "unit": "ns/iter",
            "extra": "iterations: 529\ncpu: 1757850.0945179574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1783075.1339623553,
            "unit": "ns/iter",
            "extra": "iterations: 530\ncpu: 1781396.7924528318 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1738120.2830541413,
            "unit": "ns/iter",
            "extra": "iterations: 537\ncpu: 1738070.0186219683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1049968.6213483727,
            "unit": "ns/iter",
            "extra": "iterations: 890\ncpu: 1049941.011235956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1700664.8756857265,
            "unit": "ns/iter",
            "extra": "iterations: 547\ncpu: 1700589.9451553961 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 7033440.889999838,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7033354.999999979 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 3991098.7702129167,
            "unit": "ns/iter",
            "extra": "iterations: 235\ncpu: 3990931.063829789 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 8956898.966942368,
            "unit": "ns/iter",
            "extra": "iterations: 121\ncpu: 8956539.669421487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 28277.606970863693,
            "unit": "ns/iter",
            "extra": "iterations: 28863\ncpu: 28276.842324082725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 121328.66894099512,
            "unit": "ns/iter",
            "extra": "iterations: 7035\ncpu: 121321.05188343997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 99096.07311652551,
            "unit": "ns/iter",
            "extra": "iterations: 8548\ncpu: 99090.079550772 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 109584.99948809909,
            "unit": "ns/iter",
            "extra": "iterations: 7814\ncpu: 109579.53672894786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 102428.55046425409,
            "unit": "ns/iter",
            "extra": "iterations: 8293\ncpu: 102421.9341613408 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 275195.9332907982,
            "unit": "ns/iter",
            "extra": "iterations: 3133\ncpu: 275186.6262368335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2170638.584112103,
            "unit": "ns/iter",
            "extra": "iterations: 428\ncpu: 2170500.467289717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1785450.3869732986,
            "unit": "ns/iter",
            "extra": "iterations: 522\ncpu: 1785375.4789271946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1755983.5781543432,
            "unit": "ns/iter",
            "extra": "iterations: 531\ncpu: 1755893.5969868102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1756149.0112994518,
            "unit": "ns/iter",
            "extra": "iterations: 531\ncpu: 1756065.1600753334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1054597.056818161,
            "unit": "ns/iter",
            "extra": "iterations: 880\ncpu: 1054537.159090914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1712998.9501845022,
            "unit": "ns/iter",
            "extra": "iterations: 542\ncpu: 1712927.859778609 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 7052001.739999696,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7051155.000000051 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 4052010.4761904427,
            "unit": "ns/iter",
            "extra": "iterations: 231\ncpu: 4051970.5627705487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 30072.97910327057,
            "unit": "ns/iter",
            "extra": "iterations: 27277\ncpu: 30072.203688088797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 117982.76958142818,
            "unit": "ns/iter",
            "extra": "iterations: 7239\ncpu: 117977.80080121546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 95171.54674569647,
            "unit": "ns/iter",
            "extra": "iterations: 8942\ncpu: 95166.69648848129 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 97572.46118564642,
            "unit": "ns/iter",
            "extra": "iterations: 8721\ncpu: 97565.85253984637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 97463.94090130209,
            "unit": "ns/iter",
            "extra": "iterations: 8765\ncpu: 97457.54706217843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 271238.4627892486,
            "unit": "ns/iter",
            "extra": "iterations: 3198\ncpu: 271229.04940587835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2148344.8194443453,
            "unit": "ns/iter",
            "extra": "iterations: 432\ncpu: 2148237.03703705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1769456.419659712,
            "unit": "ns/iter",
            "extra": "iterations: 529\ncpu: 1769403.7807183366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1758982.4459202795,
            "unit": "ns/iter",
            "extra": "iterations: 527\ncpu: 1758937.191650854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1748175.6334587033,
            "unit": "ns/iter",
            "extra": "iterations: 532\ncpu: 1748087.7819548938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1067697.8206583024,
            "unit": "ns/iter",
            "extra": "iterations: 881\ncpu: 1067652.8944381394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1711520.367647147,
            "unit": "ns/iter",
            "extra": "iterations: 544\ncpu: 1711427.0220588292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 3102.339759891711,
            "unit": "ns/iter",
            "extra": "iterations: 225315\ncpu: 3102.24485719994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 15773.316749735744,
            "unit": "ns/iter",
            "extra": "iterations: 44341\ncpu: 15772.655104756315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 11982.70907503909,
            "unit": "ns/iter",
            "extra": "iterations: 58424\ncpu: 11982.573942215573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 12461.391862496033,
            "unit": "ns/iter",
            "extra": "iterations: 56086\ncpu: 12460.71212067175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 10310.960623775061,
            "unit": "ns/iter",
            "extra": "iterations: 67909\ncpu: 10310.176854319789 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 64283.05049114275,
            "unit": "ns/iter",
            "extra": "iterations: 10893\ncpu: 64280.77664555193 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 135933.4007367252,
            "unit": "ns/iter",
            "extra": "iterations: 5158\ncpu: 135922.29546335855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 36805.466119531135,
            "unit": "ns/iter",
            "extra": "iterations: 19008\ncpu: 36804.82428451166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 36517.76932707386,
            "unit": "ns/iter",
            "extra": "iterations: 19170\ncpu: 36514.272300469194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 36275.60263321632,
            "unit": "ns/iter",
            "extra": "iterations: 19292\ncpu: 36273.64710760974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 74557.78788524745,
            "unit": "ns/iter",
            "extra": "iterations: 9377\ncpu: 74552.58611496112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 66243.05375434208,
            "unit": "ns/iter",
            "extra": "iterations: 10641\ncpu: 66242.29865614165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 20299.052091461264,
            "unit": "ns/iter",
            "extra": "iterations: 34593\ncpu: 20298.187494579804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 95994.6672619904,
            "unit": "ns/iter",
            "extra": "iterations: 7279\ncpu: 95993.5430691021 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 77635.30587194685,
            "unit": "ns/iter",
            "extra": "iterations: 9043\ncpu: 77631.14010837111 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 77863.21392869348,
            "unit": "ns/iter",
            "extra": "iterations: 9003\ncpu: 77857.22536932176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 78274.24983246774,
            "unit": "ns/iter",
            "extra": "iterations: 8954\ncpu: 78270.14742014738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 146815.9532984223,
            "unit": "ns/iter",
            "extra": "iterations: 4775\ncpu: 146806.78534031566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 616434.1940035105,
            "unit": "ns/iter",
            "extra": "iterations: 1134\ncpu: 616429.0123456846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 518242.6546391562,
            "unit": "ns/iter",
            "extra": "iterations: 1358\ncpu: 518201.62002944964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 512868.698540155,
            "unit": "ns/iter",
            "extra": "iterations: 1370\ncpu: 512823.3576642435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 511438.79635040247,
            "unit": "ns/iter",
            "extra": "iterations: 1370\ncpu: 511432.9927007255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 344742.9448818983,
            "unit": "ns/iter",
            "extra": "iterations: 2032\ncpu: 344707.9232283456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 505338.23071373824,
            "unit": "ns/iter",
            "extra": "iterations: 1387\ncpu: 505330.2811824094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 20254.236671188704,
            "unit": "ns/iter",
            "extra": "iterations: 34643\ncpu: 20253.831942960827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 97694.96234367641,
            "unit": "ns/iter",
            "extra": "iterations: 7117\ncpu: 97687.86005339345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 78917.31023213684,
            "unit": "ns/iter",
            "extra": "iterations: 8874\ncpu: 78913.69168357004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 77942.39148459163,
            "unit": "ns/iter",
            "extra": "iterations: 8925\ncpu: 77935.43977590937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 78764.559177251,
            "unit": "ns/iter",
            "extra": "iterations: 8897\ncpu: 78762.51545464848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 145140.42851238846,
            "unit": "ns/iter",
            "extra": "iterations: 4840\ncpu: 145136.90082644418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 627940.3863013342,
            "unit": "ns/iter",
            "extra": "iterations: 1095\ncpu: 627891.963470317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 519338.10510730726,
            "unit": "ns/iter",
            "extra": "iterations: 1351\ncpu: 519314.2116950417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 514770.3543653545,
            "unit": "ns/iter",
            "extra": "iterations: 1363\ncpu: 514713.35289801756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 510540.6489439088,
            "unit": "ns/iter",
            "extra": "iterations: 1373\ncpu: 510532.3379461022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 342187.8221787606,
            "unit": "ns/iter",
            "extra": "iterations: 2047\ncpu: 342178.7005373708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 507295.4829091197,
            "unit": "ns/iter",
            "extra": "iterations: 1375\ncpu: 507271.92727272684 ns\nthreads: 1"
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
        "date": 1705772745780,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 8266.699135706132,
            "unit": "ns/iter",
            "extra": "iterations: 84809\ncpu: 8266.680423068308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 73240.28774115264,
            "unit": "ns/iter",
            "extra": "iterations: 11559\ncpu: 73235.90275975432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 138575.75422379156,
            "unit": "ns/iter",
            "extra": "iterations: 6274\ncpu: 138567.32547019442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 204860.20216776244,
            "unit": "ns/iter",
            "extra": "iterations: 4244\ncpu: 204846.34778510837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 269368.5157861875,
            "unit": "ns/iter",
            "extra": "iterations: 3199\ncpu: 269367.6773991871 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 337929.4332561403,
            "unit": "ns/iter",
            "extra": "iterations: 2592\ncpu: 337923.8811728394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 402529.0818686778,
            "unit": "ns/iter",
            "extra": "iterations: 2162\ncpu: 402508.7419056429 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 466266.1490384773,
            "unit": "ns/iter",
            "extra": "iterations: 1872\ncpu: 466243.8034188031 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 532722.4405637365,
            "unit": "ns/iter",
            "extra": "iterations: 1632\ncpu: 532715.2573529413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6454.103976212352,
            "unit": "ns/iter",
            "extra": "iterations: 108294\ncpu: 6453.664099580766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5318.5411222948505,
            "unit": "ns/iter",
            "extra": "iterations: 132033\ncpu: 5318.088659653263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5265.256619297364,
            "unit": "ns/iter",
            "extra": "iterations: 133209\ncpu: 5264.873995000339 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5282.768090355163,
            "unit": "ns/iter",
            "extra": "iterations: 132543\ncpu: 5282.695427144399 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 8982.958378984471,
            "unit": "ns/iter",
            "extra": "iterations: 77581\ncpu: 8982.77542181719 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 30243.41621978791,
            "unit": "ns/iter",
            "extra": "iterations: 27226\ncpu: 30243.072798060668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 127835.59138280842,
            "unit": "ns/iter",
            "extra": "iterations: 6429\ncpu: 127800.20220874164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 99693.13635275925,
            "unit": "ns/iter",
            "extra": "iterations: 8368\ncpu: 99688.08556405354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 100297.98096759063,
            "unit": "ns/iter",
            "extra": "iterations: 8144\ncpu: 100293.56581532414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 100139.7064770235,
            "unit": "ns/iter",
            "extra": "iterations: 8507\ncpu: 100135.26507581992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 278160.902439011,
            "unit": "ns/iter",
            "extra": "iterations: 3116\ncpu: 278140.4043645697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2209167.7937650615,
            "unit": "ns/iter",
            "extra": "iterations: 417\ncpu: 2209029.496402874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1766103.7121212764,
            "unit": "ns/iter",
            "extra": "iterations: 528\ncpu: 1766031.628787873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1735064.115671779,
            "unit": "ns/iter",
            "extra": "iterations: 536\ncpu: 1734979.6641791011 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1748109.739622698,
            "unit": "ns/iter",
            "extra": "iterations: 530\ncpu: 1748021.320754717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1081395.716937286,
            "unit": "ns/iter",
            "extra": "iterations: 862\ncpu: 1081363.6890951288 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1722279.9611111574,
            "unit": "ns/iter",
            "extra": "iterations: 540\ncpu: 1722193.7037037055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 7103115.740000022,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7102858.000000012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 4097322.9781659674,
            "unit": "ns/iter",
            "extra": "iterations: 229\ncpu: 4097005.240174661 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 8858433.13008118,
            "unit": "ns/iter",
            "extra": "iterations: 123\ncpu: 8858236.585365878 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 28866.412418416847,
            "unit": "ns/iter",
            "extra": "iterations: 28345\ncpu: 28864.529899453224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 125432.76320047786,
            "unit": "ns/iter",
            "extra": "iterations: 6799\ncpu: 125428.28357111364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 101309.78539191584,
            "unit": "ns/iter",
            "extra": "iterations: 8420\ncpu: 101302.36342042724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 103752.76872568273,
            "unit": "ns/iter",
            "extra": "iterations: 8224\ncpu: 103749.8662451363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 101519.10619047808,
            "unit": "ns/iter",
            "extra": "iterations: 8400\ncpu: 101512.4523809527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 281989.0631131431,
            "unit": "ns/iter",
            "extra": "iterations: 3058\ncpu: 281977.9267495089 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2206062.425178184,
            "unit": "ns/iter",
            "extra": "iterations: 421\ncpu: 2205907.838479807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1782708.013384358,
            "unit": "ns/iter",
            "extra": "iterations: 523\ncpu: 1782668.0688336645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1740265.682243075,
            "unit": "ns/iter",
            "extra": "iterations: 535\ncpu: 1740176.0747663565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1770818.370722496,
            "unit": "ns/iter",
            "extra": "iterations: 526\ncpu: 1770682.1292775616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1076583.5254628824,
            "unit": "ns/iter",
            "extra": "iterations: 864\ncpu: 1076524.1898148167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1727244.4429906253,
            "unit": "ns/iter",
            "extra": "iterations: 535\ncpu: 1727169.5327102756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 7229527.759999428,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7229036.999999963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 4011380.38362078,
            "unit": "ns/iter",
            "extra": "iterations: 232\ncpu: 4011087.9310344635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 29105.663617020156,
            "unit": "ns/iter",
            "extra": "iterations: 28200\ncpu: 29104.691489361783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 127904.24783000266,
            "unit": "ns/iter",
            "extra": "iterations: 6682\ncpu: 127898.03950912887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 98783.44404624561,
            "unit": "ns/iter",
            "extra": "iterations: 8650\ncpu: 98778.23121387274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 99615.8789786602,
            "unit": "ns/iter",
            "extra": "iterations: 8577\ncpu: 99608.61606622377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 97778.64790996154,
            "unit": "ns/iter",
            "extra": "iterations: 8708\ncpu: 97773.72531005899 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 277033.13396823575,
            "unit": "ns/iter",
            "extra": "iterations: 3150\ncpu: 277021.49206349184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2197459.011764723,
            "unit": "ns/iter",
            "extra": "iterations: 425\ncpu: 2197359.7647058796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1775924.2011385723,
            "unit": "ns/iter",
            "extra": "iterations: 527\ncpu: 1775827.7039848159 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1754538.4699246825,
            "unit": "ns/iter",
            "extra": "iterations: 532\ncpu: 1754494.9248120238 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1760772.323809544,
            "unit": "ns/iter",
            "extra": "iterations: 525\ncpu: 1760680.952380951 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1088366.0256410413,
            "unit": "ns/iter",
            "extra": "iterations: 858\ncpu: 1088328.3216783234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1728442.1574073704,
            "unit": "ns/iter",
            "extra": "iterations: 540\ncpu: 1728335.555555547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 3095.164536713098,
            "unit": "ns/iter",
            "extra": "iterations: 225670\ncpu: 3095.075109673411 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 16258.277592204051,
            "unit": "ns/iter",
            "extra": "iterations: 43110\ncpu: 16257.330085826976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 12415.740856305572,
            "unit": "ns/iter",
            "extra": "iterations: 56405\ncpu: 12415.234465029702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 11969.614483948862,
            "unit": "ns/iter",
            "extra": "iterations: 58589\ncpu: 11969.0231954803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 10194.479942880975,
            "unit": "ns/iter",
            "extra": "iterations: 68629\ncpu: 10193.912194553348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 64571.9872186778,
            "unit": "ns/iter",
            "extra": "iterations: 10797\ncpu: 64570.44549411822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 144071.7248045907,
            "unit": "ns/iter",
            "extra": "iterations: 4862\ncpu: 144060.3455368168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 37043.06010034436,
            "unit": "ns/iter",
            "extra": "iterations: 18935\ncpu: 37040.776340110846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 36667.39925548738,
            "unit": "ns/iter",
            "extra": "iterations: 19073\ncpu: 36664.70927489083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 36676.209868796934,
            "unit": "ns/iter",
            "extra": "iterations: 19131\ncpu: 36674.85233390818 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 75929.9710317929,
            "unit": "ns/iter",
            "extra": "iterations: 9217\ncpu: 75925.33362265358 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 66630.32051281953,
            "unit": "ns/iter",
            "extra": "iterations: 10530\ncpu: 66627.11301044616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 20061.70525621068,
            "unit": "ns/iter",
            "extra": "iterations: 34854\ncpu: 20060.72473747631 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 97609.212290502,
            "unit": "ns/iter",
            "extra": "iterations: 7160\ncpu: 97607.69553072697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 77780.01986461451,
            "unit": "ns/iter",
            "extra": "iterations: 9011\ncpu: 77776.7950282987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 75995.03371639094,
            "unit": "ns/iter",
            "extra": "iterations: 9224\ncpu: 75989.95013009624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 77424.05135851153,
            "unit": "ns/iter",
            "extra": "iterations: 9054\ncpu: 77421.11773801716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 148349.23444161424,
            "unit": "ns/iter",
            "extra": "iterations: 4692\ncpu: 148337.745098039 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 618006.0775330373,
            "unit": "ns/iter",
            "extra": "iterations: 1135\ncpu: 617994.801762112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 516819.3289085167,
            "unit": "ns/iter",
            "extra": "iterations: 1356\ncpu: 516794.1002949926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 514619.1512914972,
            "unit": "ns/iter",
            "extra": "iterations: 1355\ncpu: 514592.324723251 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 514767.5334804766,
            "unit": "ns/iter",
            "extra": "iterations: 1359\ncpu: 514741.0596026464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 342369.23471884156,
            "unit": "ns/iter",
            "extra": "iterations: 2045\ncpu: 342345.03667481535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 503338.6705035515,
            "unit": "ns/iter",
            "extra": "iterations: 1390\ncpu: 503331.5107913628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 20177.581680533258,
            "unit": "ns/iter",
            "extra": "iterations: 34739\ncpu: 20176.608422810426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 97424.41342411467,
            "unit": "ns/iter",
            "extra": "iterations: 7196\ncpu: 97418.24624791527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 77252.5604941069,
            "unit": "ns/iter",
            "extra": "iterations: 9067\ncpu: 77247.85485827854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 75853.71569156511,
            "unit": "ns/iter",
            "extra": "iterations: 9247\ncpu: 75848.36163080015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 78073.77686042651,
            "unit": "ns/iter",
            "extra": "iterations: 8963\ncpu: 78072.21912306052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 149189.2636752167,
            "unit": "ns/iter",
            "extra": "iterations: 4680\ncpu: 149184.3376068384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 618657.120353982,
            "unit": "ns/iter",
            "extra": "iterations: 1130\ncpu: 618623.7168141681 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 517218.54592592025,
            "unit": "ns/iter",
            "extra": "iterations: 1350\ncpu: 517181.5555555605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 511935.8390385945,
            "unit": "ns/iter",
            "extra": "iterations: 1373\ncpu: 511894.6103423159 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 515330.47797351185,
            "unit": "ns/iter",
            "extra": "iterations: 1362\ncpu: 515319.8972099846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 342465.84261972265,
            "unit": "ns/iter",
            "extra": "iterations: 2046\ncpu: 342453.47018572665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 504899.82382675115,
            "unit": "ns/iter",
            "extra": "iterations: 1385\ncpu: 504891.98555957025 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}