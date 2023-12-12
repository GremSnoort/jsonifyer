window.BENCHMARK_DATA = {
  "lastUpdate": 1702409429481,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Serialize&Parse gcc-12 22.04 Release c++-17": [
      {
        "commit": {
          "author": {
            "email": "grem_snoort@protonmail.com",
            "name": "GremSnoort",
            "username": "GremSnoort"
          },
          "committer": {
            "email": "grem_snoort@protonmail.com",
            "name": "GremSnoort",
            "username": "GremSnoort"
          },
          "distinct": true,
          "id": "c1055272ad64f2314a237d4e8aa66cfea2a56aac",
          "message": "rm rdn",
          "timestamp": "2023-12-12T18:46:40+03:00",
          "tree_id": "a8ce2d06ccc561ccf79fea995e3abe4f5e35f6c2",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/c1055272ad64f2314a237d4e8aa66cfea2a56aac"
        },
        "date": 1702399127310,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1704.9576469747587,
            "unit": "ns/iter",
            "extra": "iterations: 391802\ncpu: 1704.8384132801773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 25004.90859254369,
            "unit": "ns/iter",
            "extra": "iterations: 33017\ncpu: 25003.991882969385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 51531.93771604947,
            "unit": "ns/iter",
            "extra": "iterations: 16200\ncpu: 51530.56172839506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 64222.80511535183,
            "unit": "ns/iter",
            "extra": "iterations: 13567\ncpu: 64221.043708999736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 91485.21924603733,
            "unit": "ns/iter",
            "extra": "iterations: 10080\ncpu: 91476.29960317459 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 113913.87761506047,
            "unit": "ns/iter",
            "extra": "iterations: 7648\ncpu: 113905.87081589966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 140975.34410289122,
            "unit": "ns/iter",
            "extra": "iterations: 6376\ncpu: 140961.24529485562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 162651.01031894755,
            "unit": "ns/iter",
            "extra": "iterations: 5330\ncpu: 162643.22701688547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 186753.25589574233,
            "unit": "ns/iter",
            "extra": "iterations: 4834\ncpu: 186740.3392635499 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1450.6208603623836,
            "unit": "ns/iter",
            "extra": "iterations: 480960\ncpu: 1450.605247837656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1190.671508030918,
            "unit": "ns/iter",
            "extra": "iterations: 582687\ncpu: 1190.620865061345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1173.3750392700686,
            "unit": "ns/iter",
            "extra": "iterations: 595239\ncpu: 1173.351544505654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1158.1535729806546,
            "unit": "ns/iter",
            "extra": "iterations: 602886\ncpu: 1158.068357865333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 2273.215991244868,
            "unit": "ns/iter",
            "extra": "iterations: 306105\ncpu: 2273.044870224269 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 7493.08626548428,
            "unit": "ns/iter",
            "extra": "iterations: 110357\ncpu: 7492.921155884988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 33847.288717127616,
            "unit": "ns/iter",
            "extra": "iterations: 24453\ncpu: 33846.24381466485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 29139.155304630258,
            "unit": "ns/iter",
            "extra": "iterations: 28428\ncpu: 29138.089207823246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 29201.542796385147,
            "unit": "ns/iter",
            "extra": "iterations: 28215\ncpu: 29200.37923090559 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 30020.87155863054,
            "unit": "ns/iter",
            "extra": "iterations: 27460\ncpu: 30019.417334304504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 74133.7097071923,
            "unit": "ns/iter",
            "extra": "iterations: 11919\ncpu: 74132.66213608532 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 814731.4939130568,
            "unit": "ns/iter",
            "extra": "iterations: 1150\ncpu: 814671.2173913042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 673812.7143880214,
            "unit": "ns/iter",
            "extra": "iterations: 1397\ncpu: 673775.4473872586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 679766.8919999751,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 679703.0999999976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 663072.1110000196,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 663044.5000000015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 479459.9606986825,
            "unit": "ns/iter",
            "extra": "iterations: 1832\ncpu: 479434.8253275105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 664225.2710000776,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 664174.2999999991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 3615512.05703442,
            "unit": "ns/iter",
            "extra": "iterations: 263\ncpu: 3615395.43726235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1586354.2780569445,
            "unit": "ns/iter",
            "extra": "iterations: 597\ncpu: 1586260.4690117226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 4657770.2647063425,
            "unit": "ns/iter",
            "extra": "iterations: 204\ncpu: 4657277.450980393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 10863.202696885888,
            "unit": "ns/iter",
            "extra": "iterations: 78980\ncpu: 10862.584198531305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 53255.17773533323,
            "unit": "ns/iter",
            "extra": "iterations: 16232\ncpu: 53252.833908329216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 43764.33421958071,
            "unit": "ns/iter",
            "extra": "iterations: 19182\ncpu: 43761.68804087148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 42479.56665480117,
            "unit": "ns/iter",
            "extra": "iterations: 19661\ncpu: 42476.45592797898 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 42719.90216432199,
            "unit": "ns/iter",
            "extra": "iterations: 19267\ncpu: 42715.176208024095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 87672.65010841204,
            "unit": "ns/iter",
            "extra": "iterations: 10146\ncpu: 87669.07155529268 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 863667.4510166317,
            "unit": "ns/iter",
            "extra": "iterations: 1082\ncpu: 863595.5637707923 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 708468.4562962846,
            "unit": "ns/iter",
            "extra": "iterations: 1350\ncpu: 708417.6296296284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 691656.1392961851,
            "unit": "ns/iter",
            "extra": "iterations: 1364\ncpu: 691603.4457478034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 690005.048515541,
            "unit": "ns/iter",
            "extra": "iterations: 1381\ncpu: 689980.9558291106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 488382.1497237879,
            "unit": "ns/iter",
            "extra": "iterations: 1810\ncpu: 488346.9060773464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 694509.0636624012,
            "unit": "ns/iter",
            "extra": "iterations: 1398\ncpu: 694466.0944206018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 3856975.0040984615,
            "unit": "ns/iter",
            "extra": "iterations: 244\ncpu: 3856708.606557378 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1668550.7698411588,
            "unit": "ns/iter",
            "extra": "iterations: 504\ncpu: 1668427.9761904685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 7508.4309817051235,
            "unit": "ns/iter",
            "extra": "iterations: 111072\ncpu: 7507.886776145222 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 33313.9495412849,
            "unit": "ns/iter",
            "extra": "iterations: 24852\ncpu: 33311.85820054739 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 28884.891531279627,
            "unit": "ns/iter",
            "extra": "iterations: 28930\ncpu: 28883.57414448691 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 28160.132327058724,
            "unit": "ns/iter",
            "extra": "iterations: 29548\ncpu: 28157.249221605358 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 29213.06831570772,
            "unit": "ns/iter",
            "extra": "iterations: 28178\ncpu: 29211.391865994778 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 70645.94682843496,
            "unit": "ns/iter",
            "extra": "iterations: 12281\ncpu: 70640.14331080527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 853196.2014388181,
            "unit": "ns/iter",
            "extra": "iterations: 1112\ncpu: 853166.0971223045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 686089.2434782516,
            "unit": "ns/iter",
            "extra": "iterations: 1380\ncpu: 686003.4057971005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 679571.3766975838,
            "unit": "ns/iter",
            "extra": "iterations: 1399\ncpu: 679522.6590421732 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 686835.6723891152,
            "unit": "ns/iter",
            "extra": "iterations: 1398\ncpu: 686789.6995708166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 480525.9983641752,
            "unit": "ns/iter",
            "extra": "iterations: 1834\ncpu: 480506.48854961595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 666016.812999942,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 665948.0000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 625.706652952771,
            "unit": "ns/iter",
            "extra": "iterations: 1129754\ncpu: 625.6599224255895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 4229.353264883803,
            "unit": "ns/iter",
            "extra": "iterations: 165182\ncpu: 4228.978944437071 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 3166.2330200242236,
            "unit": "ns/iter",
            "extra": "iterations: 221187\ncpu: 3166.076668158635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 3398.440148734935,
            "unit": "ns/iter",
            "extra": "iterations: 205735\ncpu: 3398.1150509150334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 2640.642584101058,
            "unit": "ns/iter",
            "extra": "iterations: 264742\ncpu: 2640.471100165456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 19971.82442813942,
            "unit": "ns/iter",
            "extra": "iterations: 34886\ncpu: 19969.939230636886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 45841.18415375404,
            "unit": "ns/iter",
            "extra": "iterations: 15297\ncpu: 45839.667908740026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 10575.386085731401,
            "unit": "ns/iter",
            "extra": "iterations: 65343\ncpu: 10574.84351805103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 10545.149367890654,
            "unit": "ns/iter",
            "extra": "iterations: 66286\ncpu: 10544.707781431936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 10579.839304269904,
            "unit": "ns/iter",
            "extra": "iterations: 66405\ncpu: 10579.542203147334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 21480.5539528593,
            "unit": "ns/iter",
            "extra": "iterations: 32584\ncpu: 21479.649521237257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 20560.86161711274,
            "unit": "ns/iter",
            "extra": "iterations: 34036\ncpu: 20560.324362439977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5305.119697692244,
            "unit": "ns/iter",
            "extra": "iterations: 132183\ncpu: 5304.918938138796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 26607.396402552036,
            "unit": "ns/iter",
            "extra": "iterations: 26352\ncpu: 26606.754705525007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 21364.234855657163,
            "unit": "ns/iter",
            "extra": "iterations: 32735\ncpu: 21363.170917977615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 21450.110951667288,
            "unit": "ns/iter",
            "extra": "iterations: 32753\ncpu: 21450.141971727782 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 22026.075808636193,
            "unit": "ns/iter",
            "extra": "iterations: 31751\ncpu: 22024.69843469482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 50755.59532933712,
            "unit": "ns/iter",
            "extra": "iterations: 13831\ncpu: 50751.196587376566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 202781.4851112788,
            "unit": "ns/iter",
            "extra": "iterations: 3459\ncpu: 202777.421220005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 172163.11271747266,
            "unit": "ns/iter",
            "extra": "iterations: 4081\ncpu: 172153.76133300824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 172885.84898665643,
            "unit": "ns/iter",
            "extra": "iterations: 4046\ncpu: 172882.25407810148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 171897.25418718476,
            "unit": "ns/iter",
            "extra": "iterations: 4060\ncpu: 171883.66995073817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 99440.15403179816,
            "unit": "ns/iter",
            "extra": "iterations: 7044\ncpu: 99437.77683134437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 171323.92358723204,
            "unit": "ns/iter",
            "extra": "iterations: 4070\ncpu: 171316.73218673133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 5192.398235137385,
            "unit": "ns/iter",
            "extra": "iterations: 134968\ncpu: 5192.310769960246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 25858.063698732178,
            "unit": "ns/iter",
            "extra": "iterations: 27112\ncpu: 25856.414133962684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 20855.561268132104,
            "unit": "ns/iter",
            "extra": "iterations: 33435\ncpu: 20854.649319575507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 21210.821592695604,
            "unit": "ns/iter",
            "extra": "iterations: 33076\ncpu: 21209.862135687275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 21777.577574643627,
            "unit": "ns/iter",
            "extra": "iterations: 32053\ncpu: 21776.919477116182 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 50216.13451086566,
            "unit": "ns/iter",
            "extra": "iterations: 13984\ncpu: 50214.144736842005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 200236.38189652973,
            "unit": "ns/iter",
            "extra": "iterations: 3480\ncpu: 200216.72413793128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 170116.81177605723,
            "unit": "ns/iter",
            "extra": "iterations: 4144\ncpu: 170112.91023166207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 168310.53857280166,
            "unit": "ns/iter",
            "extra": "iterations: 4148\ncpu: 168296.67309546878 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 169824.66634074526,
            "unit": "ns/iter",
            "extra": "iterations: 4091\ncpu: 169824.90833536853 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 97982.60331049898,
            "unit": "ns/iter",
            "extra": "iterations: 7008\ncpu: 97974.64326483934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 170516.3409311584,
            "unit": "ns/iter",
            "extra": "iterations: 4124\ncpu: 170505.18913675897 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "grem_snoort@protonmail.com",
            "name": "GremSnoort",
            "username": "GremSnoort"
          },
          "committer": {
            "email": "grem_snoort@protonmail.com",
            "name": "GremSnoort",
            "username": "GremSnoort"
          },
          "distinct": true,
          "id": "c96a03d62fd108220d1ee9e00340d51e289dfa36",
          "message": "Add compare for BMs, add parse data BMs",
          "timestamp": "2023-12-12T22:17:35+03:00",
          "tree_id": "f2fe56f9afc9ca6399f84dbb8347c53db7125ceb",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/c96a03d62fd108220d1ee9e00340d51e289dfa36"
        },
        "date": 1702409428614,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1647.2822575366395,
            "unit": "ns/iter",
            "extra": "iterations: 427776\ncpu: 1646.983000448833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 23681.570521435926,
            "unit": "ns/iter",
            "extra": "iterations: 34961\ncpu: 23680.74425788736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 48668.848293226874,
            "unit": "ns/iter",
            "extra": "iterations: 17079\ncpu: 48667.527372797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 61120.937900000165,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 61118.05000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 86980.00464424984,
            "unit": "ns/iter",
            "extra": "iterations: 10766\ncpu: 86973.09121307824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 108707.96108607894,
            "unit": "ns/iter",
            "extra": "iterations: 7992\ncpu: 108701.4639639639 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 134725.623632386,
            "unit": "ns/iter",
            "extra": "iterations: 6398\ncpu: 134717.7555486089 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 155694.04266761872,
            "unit": "ns/iter",
            "extra": "iterations: 5578\ncpu: 155688.0602366439 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 177344.55461356597,
            "unit": "ns/iter",
            "extra": "iterations: 5072\ncpu: 177333.6356466876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1325.4445080255505,
            "unit": "ns/iter",
            "extra": "iterations: 527761\ncpu: 1325.3559850007891 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1086.0623566202528,
            "unit": "ns/iter",
            "extra": "iterations: 643396\ncpu: 1085.9884114915253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1084.2375303165607,
            "unit": "ns/iter",
            "extra": "iterations: 660943\ncpu: 1084.235251753934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1046.9363394948234,
            "unit": "ns/iter",
            "extra": "iterations: 668405\ncpu: 1046.9009058878971 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 2140.795860239858,
            "unit": "ns/iter",
            "extra": "iterations: 325816\ncpu: 2140.760736121001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 7210.835583320873,
            "unit": "ns/iter",
            "extra": "iterations: 113334\ncpu: 7210.5572908394715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 31848.164394608764,
            "unit": "ns/iter",
            "extra": "iterations: 26041\ncpu: 31846.810798356433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 27776.39125583092,
            "unit": "ns/iter",
            "extra": "iterations: 29574\ncpu: 27775.404071143537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 27326.264853776913,
            "unit": "ns/iter",
            "extra": "iterations: 30228\ncpu: 27325.539235146258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 28297.02420390864,
            "unit": "ns/iter",
            "extra": "iterations: 28797\ncpu: 28295.895405771418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 73870.48604378733,
            "unit": "ns/iter",
            "extra": "iterations: 11966\ncpu: 73869.61390606732 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 794989.817398778,
            "unit": "ns/iter",
            "extra": "iterations: 1161\ncpu: 794947.9758828608 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 645501.2600000601,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 645480.7999999978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 642066.9560000079,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 642027.1999999976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 639884.3619999752,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 639845.000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 465337.7063534603,
            "unit": "ns/iter",
            "extra": "iterations: 1873\ncpu: 465313.4009610243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 642346.3009999751,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 642312.2999999968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 3478235.876865432,
            "unit": "ns/iter",
            "extra": "iterations: 268\ncpu: 3478067.164179103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1608573.813793108,
            "unit": "ns/iter",
            "extra": "iterations: 580\ncpu: 1608474.1379310368 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 4483284.712918658,
            "unit": "ns/iter",
            "extra": "iterations: 209\ncpu: 4483070.8133971235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 10560.351606758159,
            "unit": "ns/iter",
            "extra": "iterations: 79259\ncpu: 10559.764821660609 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 49631.84980237602,
            "unit": "ns/iter",
            "extra": "iterations: 16698\ncpu: 49629.14121451665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 41651.80334643376,
            "unit": "ns/iter",
            "extra": "iterations: 19842\ncpu: 41650.57957867154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 40216.84671746846,
            "unit": "ns/iter",
            "extra": "iterations: 20472\ncpu: 40214.9960922233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 40799.478053578474,
            "unit": "ns/iter",
            "extra": "iterations: 20345\ncpu: 40797.09019415069 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 84317.5318677148,
            "unit": "ns/iter",
            "extra": "iterations: 10371\ncpu: 84313.67274129807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 837109.4844606733,
            "unit": "ns/iter",
            "extra": "iterations: 1094\ncpu: 837055.5758683727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 681310.7879008409,
            "unit": "ns/iter",
            "extra": "iterations: 1372\ncpu: 681274.1253644327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 676952.34807829,
            "unit": "ns/iter",
            "extra": "iterations: 1379\ncpu: 676920.1595358943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 674039.1730909323,
            "unit": "ns/iter",
            "extra": "iterations: 1375\ncpu: 674006.5454545484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 486604.1130820277,
            "unit": "ns/iter",
            "extra": "iterations: 1804\ncpu: 486584.2572062076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 674677.1910919452,
            "unit": "ns/iter",
            "extra": "iterations: 1392\ncpu: 674648.563218392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 3700386.7968128743,
            "unit": "ns/iter",
            "extra": "iterations: 251\ncpu: 3700112.350597617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1593938.1567290062,
            "unit": "ns/iter",
            "extra": "iterations: 587\ncpu: 1593865.5877342497 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 7121.666153596263,
            "unit": "ns/iter",
            "extra": "iterations: 116943\ncpu: 7121.279597752702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 31737.725718009984,
            "unit": "ns/iter",
            "extra": "iterations: 26079\ncpu: 31736.937766018564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 27029.64861788591,
            "unit": "ns/iter",
            "extra": "iterations: 30750\ncpu: 27028.97235772338 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 26971.88991922403,
            "unit": "ns/iter",
            "extra": "iterations: 30950\ncpu: 26970.69466882078 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 27734.211687576077,
            "unit": "ns/iter",
            "extra": "iterations: 30049\ncpu: 27732.866318346703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 69886.07332204889,
            "unit": "ns/iter",
            "extra": "iterations: 12411\ncpu: 69882.53968253917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 827852.7069726357,
            "unit": "ns/iter",
            "extra": "iterations: 1133\ncpu: 827791.8799646985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 665147.3970000552,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 665124.6999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 658939.6649999344,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 658908.4000000014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 657104.8030000384,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 657053.5000000035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 466482.69639067166,
            "unit": "ns/iter",
            "extra": "iterations: 1884\ncpu: 466454.5116772833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 648180.9919999932,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 648144.9000000055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 598.6226230335617,
            "unit": "ns/iter",
            "extra": "iterations: 1176447\ncpu: 598.6130271911954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3651.5584372917415,
            "unit": "ns/iter",
            "extra": "iterations: 191744\ncpu: 3651.3523239319397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 3092.946422137928,
            "unit": "ns/iter",
            "extra": "iterations: 227594\ncpu: 3092.751566385756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 3058.6700624902246,
            "unit": "ns/iter",
            "extra": "iterations: 228516\ncpu: 3058.4983108403553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 2515.026924403281,
            "unit": "ns/iter",
            "extra": "iterations: 278372\ncpu: 2514.8560200019892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 19248.153831391563,
            "unit": "ns/iter",
            "extra": "iterations: 36475\ncpu: 19246.949965729993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 39461.79070294781,
            "unit": "ns/iter",
            "extra": "iterations: 17640\ncpu: 39458.7755102043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 10163.126092674329,
            "unit": "ns/iter",
            "extra": "iterations: 69211\ncpu: 10162.182312060228 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 10045.055749278563,
            "unit": "ns/iter",
            "extra": "iterations: 69687\ncpu: 10044.814671316015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 10107.09347960666,
            "unit": "ns/iter",
            "extra": "iterations: 69459\ncpu: 10106.67444103715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 20702.360692483024,
            "unit": "ns/iter",
            "extra": "iterations: 33907\ncpu: 20701.713510484886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 19983.004222661555,
            "unit": "ns/iter",
            "extra": "iterations: 35049\ncpu: 19982.087934035135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5023.244222696768,
            "unit": "ns/iter",
            "extra": "iterations: 139598\ncpu: 5022.833421682259 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 25307.358979915207,
            "unit": "ns/iter",
            "extra": "iterations: 27684\ncpu: 25305.150989741716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 20509.33526147318,
            "unit": "ns/iter",
            "extra": "iterations: 34057\ncpu: 20507.43459494369 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 20281.86495325738,
            "unit": "ns/iter",
            "extra": "iterations: 34551\ncpu: 20280.478133773555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 21025.06224428403,
            "unit": "ns/iter",
            "extra": "iterations: 33240\ncpu: 21023.38146811094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 49602.57598299522,
            "unit": "ns/iter",
            "extra": "iterations: 14115\ncpu: 49599.773290825455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 195818.42985412505,
            "unit": "ns/iter",
            "extra": "iterations: 3564\ncpu: 195802.2446689125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 164470.68188234183,
            "unit": "ns/iter",
            "extra": "iterations: 4250\ncpu: 164460.470588237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 161333.12505767608,
            "unit": "ns/iter",
            "extra": "iterations: 4334\ncpu: 161325.21919704747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 161587.34003233773,
            "unit": "ns/iter",
            "extra": "iterations: 4329\ncpu: 161584.430584428 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 95935.33447754302,
            "unit": "ns/iter",
            "extra": "iterations: 7283\ncpu: 95931.58039269483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 164139.91276746697,
            "unit": "ns/iter",
            "extra": "iterations: 4253\ncpu: 164133.6703503402 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 4992.093929004478,
            "unit": "ns/iter",
            "extra": "iterations: 140010\ncpu: 4992.078422969764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 24639.006013504917,
            "unit": "ns/iter",
            "extra": "iterations: 28436\ncpu: 24638.504009002652 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 20159.024618045958,
            "unit": "ns/iter",
            "extra": "iterations: 34690\ncpu: 20158.78639377338 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 19747.81693286452,
            "unit": "ns/iter",
            "extra": "iterations: 35375\ncpu: 19747.773851590075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 21129.114749765926,
            "unit": "ns/iter",
            "extra": "iterations: 34048\ncpu: 21075.43174342077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 48835.19552916753,
            "unit": "ns/iter",
            "extra": "iterations: 14315\ncpu: 48835.02619629782 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 190896.3231607707,
            "unit": "ns/iter",
            "extra": "iterations: 3670\ncpu: 190893.1880108973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 160778.6836664517,
            "unit": "ns/iter",
            "extra": "iterations: 4353\ncpu: 160778.42866988468 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 160534.32540588293,
            "unit": "ns/iter",
            "extra": "iterations: 4373\ncpu: 160527.898467874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 160833.24672338046,
            "unit": "ns/iter",
            "extra": "iterations: 4349\ncpu: 160824.37341917527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 94585.17424140577,
            "unit": "ns/iter",
            "extra": "iterations: 7415\ncpu: 94581.53742414009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 162135.0736793444,
            "unit": "ns/iter",
            "extra": "iterations: 4316\ncpu: 162131.1862835971 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}