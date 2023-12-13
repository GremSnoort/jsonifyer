window.BENCHMARK_DATA = {
  "lastUpdate": 1702492243251,
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
      }
    ]
  }
}